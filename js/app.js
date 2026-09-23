/* ============================================================
   FOOTBALL MANAGER — js/app.js
   Entry point: boot, title screen, club select, nav wiring
   ============================================================ */

import { state, initNewGame, resetState, getUserClub, getUserLeague } from "./state.js";
import { saveExists, loadGame, saveGame, autosave, getSaveMeta } from "./storage.js";
import { CLUBS, getAllClubs, getClubsByLeague } from "../data/clubs.js";
import { LEAGUES, LEAGUE_ORDER } from "../data/leagues.js";
import { formatMoney, formatDateLong, el, $, clear } from "./util/helpers.js";

/* ============================================================
   BOOT
   ============================================================ */
function boot() {
  wireNav();
  wireMatchOverlay();
  showInitialScreen();
}

/* ============================================================
   INITIAL SCREEN LOGIC
   If a save exists → offer Continue / New Career
   If not → go straight to club select
   ============================================================ */
function showInitialScreen() {
  if (saveExists()) {
    renderTitleScreen();
  } else {
    renderClubSelect();
  }
}

/* ============================================================
   TITLE SCREEN
   ============================================================ */
function renderTitleScreen() {
  const app = $("#app");
  const screens = $("#screens");
  const nav = $("#bottomnav");
  const topbar = $("#topbar");

  topbar.style.display = "none";
  nav.style.display = "none";

  clear(screens);
  const meta = getSaveMeta();

  const wrap = el("div", { class: "screen active", id: "screen-title" }, [
    el("div", { style: "max-width:520px;margin:40px auto;padding:0 16px;" }, [
      el("h1", { style: "font-size:32px;margin-bottom:8px;text-align:center;color:var(--accent-soft);" },
        "Football Manager"),
      el("p", { class: "muted center mb-3" }, "2026/27 Season"),

      meta ? el("div", { class: "card card-highlight mb-3" }, [
        el("div", { class: "card-title" }, "Continue Career"),
        el("div", { class: "card-sub", style: "margin-bottom:6px" },
          `${CLUBS[meta.userClubId]?.name || meta.userClubId} · ${meta.season}`),
        el("div", { class: "card-sub", style: "margin-bottom:12px" },
          `Matchday ${meta.matchday} · Last save: ${new Date(meta.lastSaveAt).toLocaleString()}`),
        el("button", { class: "btn-primary", style: "width:100%", onclick: continueCareer },
          "Continue")
      ]) : null,

      el("button", { class: "btn-secondary", style: "width:100%;margin-bottom:10px", onclick: startNewCareer },
        "New Career"),

      el("p", { class: "dim center", style: "margin-top:20px;font-size:12px" },
        "Data saved locally in your browser.")
    ])
  ]);

  screens.appendChild(wrap);
}

function continueCareer() {
  if (loadGame()) {
    enterGame();
  } else {
    alert("Could not load save. Starting new career.");
    startNewCareer();
  }
}

function startNewCareer() {
  resetState();
  renderClubSelect();
}

/* ============================================================
   CLUB SELECT
   ============================================================ */
function renderClubSelect() {
  const screens = $("#screens");
  const topbar = $("#topbar");
  const nav = $("#bottomnav");

  topbar.style.display = "none";
  nav.style.display = "none";

  clear(screens);

  const wrap = el("div", { class: "screen active", id: "screen-clubselect" }, [
    el("h1", { style: "text-align:center;margin-bottom:6px" }, "Choose Your Club"),
    el("p", { class: "muted center mb-3" }, "Pick any club across the five leagues"),

    el("div", { class: "tab-bar", id: "clubselect-tabs" }, [
      ...LEAGUE_ORDER.map((lid, i) =>
        el("button", {
          class: "tab" + (i === 0 ? " active" : ""),
          "data-league": lid,
          onclick: () => switchClubSelectLeague(lid)
        }, LEAGUES[lid].name)
      )
    ]),

    el("div", { id: "clubselect-list" })
  ]);

  screens.appendChild(wrap);
  switchClubSelectLeague(LEAGUE_ORDER[0]);
}

function switchClubSelectLeague(leagueId) {
  // Tabs
  const tabs = document.querySelectorAll("#clubselect-tabs .tab");
  tabs.forEach(t => {
    t.classList.toggle("active", t.dataset.league === leagueId);
  });

  // List
  const list = $("#clubselect-list");
  clear(list);

  const league = LEAGUES[leagueId];
  const clubs = getClubsByLeague(leagueId).sort((a, b) => b.rating - a.rating);

  for (const club of clubs) {
    const card = el("div", {
      class: "player-row",
      style: "grid-template-columns: 1fr auto auto",
      onclick: () => confirmClubSelection(club.id)
    }, [
      el("div", { class: "grow" }, [
        el("div", { class: "player-name" }, club.name),
        el("div", { class: "player-meta" }, `${club.stadium} · ${league.country}`)
      ]),
      el("div", { class: "player-ovr " + ratingClass(club.rating) }, String(club.rating)),
      el("div", { class: "player-age" }, formatMoney(club.budget))
    ]);
    list.appendChild(card);
  }
}

function ratingClass(r) {
  if (r >= 84) return "elite";
  if (r >= 76) return "good";
  if (r >= 68) return "avg";
  return "low";
}

function confirmClubSelection(clubId) {
  const club = CLUBS[clubId];
  const ok = confirm(`Manage ${club.name}?`);
  if (!ok) return;

  initNewGame(clubId);
  saveGame();
  enterGame();
}

/* ============================================================
   ENTER GAME  (post-selection or post-load)
   ============================================================ */
function enterGame() {
  const topbar = $("#topbar");
  const nav = $("#bottomnav");

  topbar.style.display = "";
  nav.style.display = "";

  updateTopbar();
  showScreen("dashboard");
}

function updateTopbar() {
  const club = getUserClub();
  const league = getUserLeague();
  if (!club) return;

  $("#topbar-club").textContent = club.shortName || club.name;
  $("#topbar-league").textContent = league ? league.shortName : "";
  $("#topbar-date").textContent = formatDateLong(state.currentDate);
  $("#topbar-budget").textContent = formatMoney(state.clubStates[state.userClubId]?.budget || 0);
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function wireNav() {
  const buttons = document.querySelectorAll("#bottomnav .nav-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.screen;
      if (target) showScreen(target);
    });
  });
}

export function showScreen(name) {
  // Nav highlight
  document.querySelectorAll("#bottomnav .nav-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.screen === name);
  });

  // Screen visibility
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.toggle("active", s.id === `screen-${name}`);
  });

  // Notify modules
  if (name === "dashboard")  renderDashboard();
  if (name === "fixtures")   import("./ui/fixtures.js").then(m => m.renderFixturesScreen());
  if (name === "squad")      import("./ui/squad.js").then(m => m.renderSquadScreen());
  if (name === "tactics")    import("./ui/tactics.js").then(m => m.renderTacticsScreen()).catch(() => {});
  if (name === "transfers")  import("./ui/transfers.js").then(m => m.renderTransfersScreen()).catch(() => {});
  if (name === "inbox")      import("./ui/inbox.js").then(m => m.renderInboxScreen());
  if (name === "tables")     import("./ui/tables.js").then(m => m.renderTablesScreen());

  updateTopbar();
}

/* ============================================================
   DASHBOARD
   ============================================================ */
function renderDashboard() {
  const content = $("#dashboard-content");
  clear(content);

  const club = getUserClub();
  const league = getUserLeague();
  const next = getNextUserFixtureSafe();
  const table = state.userClubId ? getUserLeagueTable() : null;
  const position = table ? table.findIndex(r => r.clubId === state.userClubId) + 1 : null;
  const inbox = state.inbox.filter(m => !m.read).length;

  // Next fixture card
  content.appendChild(el("div", { class: "card card-highlight" }, [
    el("div", { class: "card-title" }, "Next Fixture"),
    next ? el("div", null, [
      el("div", { style: "font-size:15px;font-weight:600" },
        `${clubName(next.homeClubId)} vs ${clubName(next.awayClubId)}`),
      el("div", { class: "card-sub" },
        `${formatDateLong(next.date)} · ${next.time} · ${league.name}`),
      el("button", {
        class: "btn-primary",
        style: "margin-top:10px;width:100%",
        onclick: () => startMatchFlow(next.id)
      }, "Play Match")
    ]) : el("div", { class: "card-sub" }, "No fixtures remaining.")
  ]));

  // Club snapshot
  const clubState = state.clubStates[state.userClubId] || {};
  content.appendChild(el("div", { class: "card" }, [
    el("div", { class: "card-title" }, club.name),
    el("div", { class: "row-between" }, [
      el("span", { class: "card-sub" }, "League Position"),
      el("span", { style: "font-weight:700" }, position ? `#${position}` : "—")
    ]),
    el("div", { class: "row-between" }, [
      el("span", { class: "card-sub" }, "Board Objective"),
      el("span", { style: "font-size:12px" }, state.boardObjective?.label || "—")
    ]),
    el("div", { class: "row-between" }, [
      el("span", { class: "card-sub" }, "Transfer Budget"),
      el("span", { style: "font-weight:700" }, formatMoney(clubState.budget || 0))
    ]),
    el("div", { class: "row-between" }, [
      el("span", { class: "card-sub" }, "Unread Messages"),
      el("span", { style: "font-weight:700" }, String(inbox))
    ])
  ]));

  // Recent results
  const recent = (getUserFixturesSafe() || [])
    .filter(f => f.played)
    .sort((a, b) => a.matchday - b.matchday)
    .slice(-5);

  if (recent.length > 0) {
    content.appendChild(el("div", { class: "card" }, [
      el("div", { class: "card-title" }, "Recent Results"),
      ...recent.map(f => el("div", { class: "row-between", style: "padding:4px 0" }, [
        el("span", { style: "font-size:13px" },
          `${clubName(f.homeClubId)} ${f.homeScore}–${f.awayScore} ${clubName(f.awayClubId)}`),
        el("span", { class: "muted", style: "font-size:11px" }, `MD${f.matchday}`)
      ]))
    ]));
  }
}

function getNextUserFixtureSafe() {
  try {
    const { getNextUserFixture } = require_state_next();
    return getNextUserFixture();
  } catch {
    return null;
  }
}

function getUserFixturesSafe() {
  try {
    const { getUserFixtures } = require_state_next();
    return getUserFixtures();
  } catch {
    return null;
  }
}

/* We import lazily to avoid circular import issues in the boot path. */
function require_state_next() {
  // Returns the already-imported state module bindings.
  // Since we imported them at the top, we can just re-expose here.
  return {
    getNextUserFixture: () => {
      const fixs = state.fixtures.filter(
        f => f.homeClubId === state.userClubId || f.awayClubId === state.userClubId
      );
      fixs.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
      return fixs.find(f => !f.played) || null;
    },
    getUserFixtures: () =>
      state.fixtures.filter(
        f => f.homeClubId === state.userClubId || f.awayClubId === state.userClubId
      )
  };
}

function getUserLeagueTable() {
  const { buildLeagueTable } = require_fixtures_next();
  return buildLeagueTable(state.fixtures, state.userLeagueId);
}

function require_fixtures_next() {
  // Lazy delegate to avoid a top-level circular import
  return window.__fm_fixtures__ || {};
}

function clubName(clubId) {
  return CLUBS[clubId]?.shortName || CLUBS[clubId]?.name || clubId;
}

/* ============================================================
   MATCH FLOW  (delegates to ui/match.js)
   ============================================================ */
function startMatchFlow(fixtureId) {
  import("./ui/match.js")
    .then(m => m.openPreMatch(fixtureId))
    .catch(err => {
      console.error(err);
      alert("Match module not yet installed.");
    });
}

/* ============================================================
   MATCH OVERLAY  (placeholder wiring; real logic in ui/match.js)
   ============================================================ */
function wireMatchOverlay() {
  const close = $("#result-close");
  if (close) {
    close.addEventListener("click", () => {
      $("#match-overlay").classList.add("hidden");
      autosave();
      updateTopbar();
      renderDashboard();
    });
  }
}

/* ============================================================
   BOOTSTRAP
   ============================================================ */
document.addEventListener("DOMContentLoaded", boot);

/* Expose a minimal API for other modules that need to route */
window.__fm__ = {
  showScreen,
  updateTopbar,
  clubName,
  startMatchFlow
};
