/* ============================================================
   FOOTBALL MANAGER — js/ui/match.js
   Pre-match, live match, manage panel, result screen
   ============================================================ */

import { CLUBS } from "../../data/clubs.js";
import { getPlayer } from "../../data/players.js";
import { state, getEffectiveSquad } from "../state.js";
import { simulateMatch } from "../engine/matchEngine.js";
import { createRevealController } from "../engine/matchReveal.js";
import { applyMatchFatigue } from "../engine/fatigue.js";
import { applyMatchMorale, checkPlayingTimeDissatisfaction } from "../engine/morale.js";
import { autosave } from "../storage.js";
import {
  FORMATIONS, FORMATION_IDS, TACTICAL_STYLES, STYLE_IDS,
  MATCH, DEFAULT_FORMATION, DEFAULT_STYLE
} from "../util/constants.js";
import { el, $, clear, formatMoney } from "../util/helpers.js";

/* ============================================================
   MODULE STATE
   ============================================================ */
let current = null;
let revealController = null;

/* ============================================================
   PRE-MATCH
   ============================================================ */
export function openPreMatch(fixtureId) {
  const fixture = state.fixtures.find(f => f.id === fixtureId);
  if (!fixture) return;

  current = {
    fixture,
    userIsHome: fixture.homeClubId === state.userClubId,
    userFormation: DEFAULT_FORMATION,
    userStyle: DEFAULT_STYLE,
    lineup: null,
    bench: null
  };

  // Auto-pick best XI + bench
  const { lineup, bench } = autoPickLineup(state.userClubId, DEFAULT_FORMATION);
  current.lineup = lineup;
  current.bench = bench;

  renderPreMatch();
  showOverlay("prematch");
}

function renderPreMatch() {
  const panel = $("#match-prematch");
  const body = $("#prematch-body");
  clear(body);

  const { fixture, userIsHome } = current;
  const home = CLUBS[fixture.homeClubId];
  const away = CLUBS[fixture.awayClubId];

  $("#prematch-title").textContent = `${home.shortName} vs ${away.shortName}`;

  body.appendChild(el("div", { class: "card-sub mb-3" },
    `${home.name} (H) · ${away.name} (A)`));

  // Formation picker
  body.appendChild(section("Formation",
    el("select", {
      class: "manage-select",
      onchange: e => {
        current.userFormation = e.target.value;
        const picked = autoPickLineup(state.userClubId, current.userFormation);
        current.lineup = picked.lineup;
        current.bench = picked.bench;
        renderPreMatch();
      }
    }, FORMATION_IDS.map(fid =>
      el("option", { value: fid, selected: fid === current.userFormation },
        FORMATIONS[fid].name)
    ))
  ));

  // Style picker
  body.appendChild(section("Tactical Style",
    el("div", { class: "style-toggle" },
      STYLE_IDS.map(sid =>
        el("button", {
          class: "tab" + (sid === current.userStyle ? " active" : ""),
          onclick: () => { current.userStyle = sid; renderPreMatch(); }
        }, TACTICAL_STYLES[sid].name)
      )
    )
  ));

  // Lineup preview
  body.appendChild(section("Starting XI",
    el("div", null,
      current.lineup.map((pid, i) => {
        const p = getPlayer(pid);
        const slot = FORMATIONS[current.userFormation].slots[i];
        if (!p) return null;
        return el("div", { class: "lineup-row" }, [
          el("div", { class: "player-pos " + posClass(slot.pos) }, slot.pos),
          el("div", { class: "player-name" }, p.name),
          el("div", { class: "lineup-rating mid" }, String(p.overall)),
          el("div", { class: "lineup-stats" }, formatMoney(p.value))
        ]);
      })
    )
  ));

  $("#prematch-kickoff").onclick = kickOff;
}

function kickOff() {
  const { fixture, userIsHome, userFormation, userStyle, lineup, bench } = current;

  // Build AI side
  const aiClubId = userIsHome ? fixture.awayClubId : fixture.homeClubId;
  const aiFormation = DEFAULT_FORMATION;
  const aiStyle = DEFAULT_STYLE;
  const aiPicked = autoPickLineup(aiClubId, aiFormation);

  const homeFormation = userIsHome ? userFormation : aiFormation;
  const awayFormation = userIsHome ? aiFormation : userFormation;
  const homeStyle = userIsHome ? userStyle : aiStyle;
  const awayStyle = userIsHome ? aiStyle : userStyle;

  const homeLineup = userIsHome ? lineup : aiPicked.lineup;
  const awayLineup = userIsHome ? aiPicked.lineup : lineup;
  const homeBench = userIsHome ? bench : aiPicked.bench;
  const awayBench = userIsHome ? aiPicked.bench : bench;

  const result = simulateMatch({
    fixture, homeFormation, awayFormation, homeStyle, awayStyle,
    homeLineup, awayLineup, homeBench, awayBench, userIsHome
  });

  current.sim = result;

  showOverlay("live");
  startReveal();
}

/* ============================================================
   LIVE REVEAL
   ============================================================ */
function startReveal() {
  const { sim, fixture } = current;
  const home = CLUBS[fixture.homeClubId];
  const away = CLUBS[fixture.awayClubId];

  $("#live-home-name").textContent = home.shortName;
  $("#live-away-name").textContent = away.shortName;
  $("#live-score").textContent = "0 – 0";
  $("#live-minute").textContent = "0'";

  const eventsEl = $("#live-events");
  clear(eventsEl);

  revealController = createRevealController({
    match: sim,
    onMinute: (m) => { $("#live-minute").textContent = m + "'"; },
    onEvent: (ev) => {
      eventsEl.appendChild(renderEvent(ev, fixture));
      eventsEl.scrollTop = eventsEl.scrollHeight;
      updateLiveScore(ev);
    },
    onHalfTime: () => showManagePanel(true),
    onFullTime: () => finishMatch()
  });

  revealController.start();
}

function updateLiveScore(ev) {
  if (ev.type === "goal") {
    $("#live-score").textContent = `${ev.homeScore} – ${ev.awayScore}`;
  }
}

function renderEvent(ev, fixture) {
  const clsMap = {
    goal: "goal", yellow: "card-yellow", red: "card-red",
    sub: "sub", injury: "injury"
  };
  const iconMap = {
    goal: "⚽", yellow: "🟨", red: "🟥", sub: "🔁", injury: "🚑"
  };

  const p = ev.playerId ? getPlayer(ev.playerId) : null;
  const a = ev.assistId ? getPlayer(ev.assistId) : null;
  const pin = ev.playerInId ? getPlayer(ev.playerInId) : null;
  const pout = ev.playerOutId ? getPlayer(ev.playerOutId) : null;

  let mainText = p ? p.name : "—";
  let detail = "";

  if (ev.type === "goal") {
    detail = a ? `Assist: ${a.name}` : "Unassisted";
  } else if (ev.type === "sub") {
    mainText = `${pin?.name || "—"} on`;
    detail = `${pout?.name || "—"} off`;
  } else if (ev.type === "injury") {
    detail = ev.detail || "Injury";
  }

  return el("div", { class: "event-item " + (clsMap[ev.type] || "") }, [
    el("div", { class: "event-minute" }, `${ev.minute}'`),
    el("div", { class: "event-icon" }, iconMap[ev.type] || "•"),
    el("div", { class: "event-body" }, [
      el("div", { class: "event-player" }, mainText),
      detail ? el("div", { class: "event-detail" }, detail) : null
    ]),
    ev.type === "goal"
      ? el("div", { class: "event-score" }, `${ev.homeScore}–${ev.awayScore}`)
      : el("div")
  ]);
}

/* ============================================================
   MANAGE PANEL
   ============================================================ */
let manageFromHalfTime = false;

function showManagePanel(fromHalfTime) {
  manageFromHalfTime = !!fromHalfTime;
  const panel = $("#match-manage");
  const body = $("#manage-body");
  clear(body);

  const { userFormation, userStyle } = current;

  // Formation
  body.appendChild(section("Formation",
    el("select", {
      class: "manage-select",
      onchange: e => { current.userFormation = e.target.value; }
    }, FORMATION_IDS.map(fid =>
      el("option", { value: fid, selected: fid === userFormation }, FORMATIONS[fid].name)
    ))
  ));

  // Style
  body.appendChild(section("Tactical Style",
    el("div", { class: "style-toggle" },
      STYLE_IDS.map(sid =>
        el("button", {
          class: "tab" + (sid === userStyle ? " active" : ""),
          onclick: () => { current.userStyle = sid; showManagePanel(fromHalfTime); }
        }, TACTICAL_STYLES[sid].name)
      )
    )
  ));

  // Subs
  const subsUsed = (current.sim.subsUsed[userSide()] || []).length;
  body.appendChild(section(`Substitutions (${subsUsed}/${MATCH.MAX_SUBS})`,
    renderSubControls()
  ));

  $("#manage-resume").onclick = () => {
    showOverlay("live");
    if (!manageFromHalfTime) revealController.resume();
    else revealController.resume();
  };

  showOverlay("manage");
}

function renderSubControls() {
  if ((current.sim.subsUsed[userSide()] || []).length >= MATCH.MAX_SUBS) {
    return el("div", { class: "card-sub" }, "No subs remaining.");
  }
  const onPitch = userSide() === "home" ? current.sim.homeLineup : current.sim.awayLineup;
  const bench = userSide() === "home" ? current.sim.homeBench : current.sim.awayBench;

  const out = el("select", { class: "manage-select mb-2" },
    onPitch.map(pid => {
      const p = getPlayer(pid);
      return p ? el("option", { value: pid }, `${p.name} (${p.position})`) : null;
    })
  );
  const inn = el("select", { class: "manage-select mb-2" },
    bench.map(pid => {
      const p = getPlayer(pid);
      return p ? el("option", { value: pid }, `${p.name} (${p.position})`) : null;
    })
  );
  const btn = el("button", { class: "btn-secondary" }, "Make Substitution");
  btn.onclick = () => {
    const outId = out.value, inId = inn.value;
    if (!outId || !inId) return;
    registerManualSub(outId, inId);
    showManagePanel(manageFromHalfTime);
  };
  return el("div", null, [out, inn, btn]);
}

function registerManualSub(outId, inId) {
  const side = userSide();
  const sim = current.sim;
  const minute = revealController.getMinute();
  const arr = side === "home" ? sim.homeLineup : sim.awayLineup;
  const benchArr = side === "home" ? sim.homeBench : sim.awayBench;
  const idx = arr.indexOf(outId);
  if (idx < 0) return;
  arr[idx] = inId;
  const benchIdx = benchArr.indexOf(inId);
  if (benchIdx >= 0) benchArr.splice(benchIdx, 1);
  (sim.subsUsed[side] = sim.subsUsed[side] || []).push({
    playerOutId: outId, playerInId: inId, minute
  });
  // Append as an event so it shows in the log
  sim.events.push({
    minute, type: "sub", side,
    playerOutId: outId, playerInId: inId
  });
  sim.events.sort((a, b) => a.minute - b.minute);
}

function userSide() {
  return current.userIsHome ? "home" : "away";
}

/* ============================================================
   FULL TIME
   ============================================================ */
function finishMatch() {
  const { sim, fixture } = current;

  // Commit to state
  fixture.played = true;
  fixture.homeScore = sim.finalScore.home;
  fixture.awayScore = sim.finalScore.away;

  // Fatigue
  for (const pid of sim.homeLineup) applyMatchFatigue(pid, 90, sim.homeStyle);
  for (const pid of sim.awayLineup) applyMatchFatigue(pid, 90, sim.awayStyle);

  // Morale — user's club only (AI morale isn't critical)
  const result = userResult(sim);
  const userLineup = userSide() === "home" ? sim.homeLineup : sim.awayLineup;
  const userBench = userSide() === "home" ? sim.homeBench : sim.awayBench;
  applyMatchMorale(state.userClubId, result, userLineup, userBench);
  checkPlayingTimeDissatisfaction(state.userClubId);

  autosave();
  renderResult();
  showOverlay("result");
}

function userResult(sim) {
  const user = userSide();
  const { home, away } = sim.finalScore;
  if (home === away) return "draw";
  if (user === "home") return home > away ? "win" : "loss";
  return away > home ? "win" : "loss";
}

function renderResult() {
  const { sim, fixture } = current;
  const home = CLUBS[fixture.homeClubId];
  const away = CLUBS[fixture.awayClubId];

  const banner = $("#result-banner");
  clear(banner);
  banner.appendChild(el("div", { class: "rb-team home" }, home.shortName));
  banner.appendChild(el("div", { class: "rb-score" }, `${sim.finalScore.home} – ${sim.finalScore.away}`));
  banner.appendChild(el("div", { class: "rb-team away" }, away.shortName));
  banner.appendChild(el("div", { class: "rb-status" }, "Full Time"));

  // Events tab
  const evTab = $("#result-events");
  clear(evTab);
  for (const ev of sim.events) evTab.appendChild(renderEvent(ev, fixture));

  // Teams tab
  const teamsTab = $("#result-teams");
  clear(teamsTab);
  teamsTab.appendChild(renderLineupBlock(home.shortName, sim.homeLineup, sim.ratings));
  teamsTab.appendChild(renderLineupBlock(away.shortName, sim.awayLineup, sim.ratings));

  // Tab switching
  document.querySelectorAll("#result-tabs .tab").forEach(t => {
    t.onclick = () => {
      document.querySelectorAll("#result-tabs .tab").forEach(x => x.classList.remove("active"));
      t.classList.add("active");
      const target = t.dataset.tab;
      $("#result-events").classList.toggle("hidden", target !== "events");
      $("#result-teams").classList.toggle("hidden", target !== "teams");
    };
  });
}

function renderLineupBlock(title, lineupIds, ratings) {
  return el("div", { class: "lineup-block" }, [
    el("div", { class: "lineup-title" }, title),
    ...lineupIds.map(pid => {
      const p = getPlayer(pid);
      const r = ratings[pid] || { rating: 6.0, goals: 0, assists: 0, yellow: 0, red: 0 };
      if (!p) return null;
      const ratingClass = r.rating >= 7.5 ? "high" : r.rating >= 6.0 ? "mid" : "low";
      const stats = [];
      if (r.goals) stats.push(`${r.goals}G`);
      if (r.assists) stats.push(`${r.assists}A`);
      if (r.yellow) stats.push(`${r.yellow}Y`);
      if (r.red) stats.push(`${r.red}R`);
      return el("div", { class: "lineup-row" }, [
        el("div", { class: "player-pos " + posClass(p.position) }, p.position),
        el("div", { class: "player-name" }, p.name),
        el("div", { class: "lineup-rating " + ratingClass }, r.rating.toFixed(1)),
        el("div", { class: "lineup-stats" }, stats.join(" · ") || "—")
      ]);
    })
  ]);
}

/* ============================================================
   OVERLAY CONTROL
   ============================================================ */
function showOverlay(which) {
  $("#match-overlay").classList.remove("hidden");
  $("#match-prematch").classList.toggle("hidden", which !== "prematch");
  $("#match-live").classList.toggle("hidden", which !== "live");
  $("#match-manage").classList.toggle("hidden", which !== "manage");
  $("#match-result").classList.toggle("hidden", which !== "result");

  if (which === "live") {
    const pause = $("#live-pause");
    pause.onclick = () => {
      revealController.pause();
      showManagePanel(false);
    };
  }
}

/* ============================================================
   LINEUP PICKER
   ============================================================ */
function autoPickLineup(clubId, formationId) {
  const squad = getEffectiveSquad(clubId);
  const formation = FORMATIONS[formationId];
  const used = new Set();
  const lineup = [];

  for (const slot of formation.slots) {
    // Score each unused player for this slot
    const candidates = squad.filter(p => !used.has(p.id) && !state.playerStates[p.id]?.injury);
    if (candidates.length === 0) break;
    candidates.sort((a, b) => scoreForSlot(b, slot) - scoreForSlot(a, slot));
    const best = candidates[0];
    lineup.push(best.id);
    used.add(best.id);
  }

  const bench = squad.filter(p => !used.has(p.id)).slice(0, 9).map(p => p.id);
  return { lineup, bench };
}

function scoreForSlot(player, slot) {
  const ps = state.playerStates[player.id] || {};
  const fit = positionFitFor(player.position, slot.pos);
  const fatigue = ps.fatigue ?? 100;
  const morale = ps.morale ?? 75;
  return player.overall * fit * (fatigue / 100) * (0.9 + morale / 1000);
}

function positionFitFor(natural, assigned) {
  const table = {
    GK: { GK: 1 }, CB: { CB: 1, CDM: 0.8, LB: 0.75, RB: 0.75 },
    LB: { LB: 1, RB: 0.8, CB: 0.75, LW: 0.7 },
    RB: { RB: 1, LB: 0.8, CB: 0.75, RW: 0.7 },
    CDM: { CDM: 1, CM: 0.9, CB: 0.8 },
    CM: { CM: 1, CDM: 0.9, CAM: 0.9 },
    CAM: { CAM: 1, CM: 0.9, LW: 0.8, RW: 0.8, ST: 0.8 },
    LW: { LW: 1, RW: 0.85, CAM: 0.8, ST: 0.75 },
    RW: { RW: 1, LW: 0.85, CAM: 0.8, ST: 0.75 },
    ST: { ST: 1, CAM: 0.8, LW: 0.75, RW: 0.75 }
  };
  return (table[natural] && table[natural][assigned]) || 0.65;
}

/* ============================================================
   HELPERS
   ============================================================ */
function section(label, content) {
  return el("div", { class: "manage-section" }, [
    el("h3", null, label),
    content
  ]);
}

function posClass(pos) {
  if (pos === "GK") return "GK";
  if (["CB", "LB", "RB"].includes(pos)) return "DEF";
  if (["CDM", "CM", "CAM"].includes(pos)) return "MID";
  return "FWD";
}
