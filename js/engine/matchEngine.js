/* ============================================================
   FOOTBALL MANAGER — js/engine/matchEngine.js
   Full match simulation → event timeline
   ============================================================ */

import { getPlayer, getPlayersByClub } from "../../data/players.js";
import { getClub } from "../../data/clubs.js";
import {
  MATCH, FORMATIONS, TACTICAL_STYLES,
  getPositionFit, getFatigueMultiplier, getMoraleMultiplier
} from "../util/constants.js";
import {
  rng, rand, randInt, pick, pickWeighted, clamp, round,
  samplePoisson, shuffle
} from "../util/helpers.js";
import { state, getEffectiveClubId, getEffectiveSquad } from "../state.js";

/* ============================================================
   PUBLIC: simulateMatch
   Returns { events, lineups, ratings, finalScore, stats }
   ============================================================ */
export function simulateMatch({
  fixture,
  homeFormation,
  awayFormation,
  homeStyle,
  awayStyle,
  homeLineup,     // array of playerIds (11, in slot order)
  awayLineup,
  homeBench,      // array of playerIds (subs)
  awayBench,
  userIsHome
}) {
  const homeClubId = fixture.homeClubId;
  const awayClubId = fixture.awayClubId;

  const homeLineupPlayers = homeLineup.map(id => playerWithRuntime(id));
  const awayLineupPlayers = awayLineup.map(id => playerWithRuntime(id));

  const homeStrength = teamStrength(homeLineupPlayers, homeFormation, homeStyle, true);
  const awayStrength = teamStrength(awayLineupPlayers, awayFormation, awayStyle, false);

  const homeXg = expectedGoals(homeStrength, awayStrength, true);
  const awayXg = expectedGoals(awayStrength, homeStrength, false);

  // Generate a raw event timeline
  const events = [];
  const minuteGoals = { home: [], away: [] };

  // Distribute goals across 90 minutes via a simple weighted minute pick
  const homeGoals = samplePoisson(homeXg);
  const awayGoals = samplePoisson(awayXg);

  for (let i = 0; i < homeGoals; i++) minuteGoals.home.push(pickGoalMinute());
  for (let i = 0; i < awayGoals; i++) minuteGoals.away.push(pickGoalMinute());

  minuteGoals.home.sort((a, b) => a - b);
  minuteGoals.away.sort((a, b) => a - b);

  const allGoalMinutes = [
    ...minuteGoals.home.map(m => ({ minute: m, side: "home" })),
    ...minuteGoals.away.map(m => ({ minute: m, side: "away" }))
  ].sort((a, b) => a.minute - b.minute);

  // Cards (roughly 3-5 per match, weighted toward defenders/mids)
  const cardCount = randInt(2, 6);
  const cardMinutes = [];
  for (let i = 0; i < cardCount; i++) cardMinutes.push(randInt(5, 89));
  cardMinutes.sort((a, b) => a - b);

  // Injuries (rare — 0-1 per match)
  const injuryCount = rng() < 0.18 ? 1 : 0;
  const injuryMinute = injuryCount ? randInt(15, 85) : null;

  // Build a merged minute-indexed list of "things that happen"
  const rawEvents = [];

  let homeRunning = 0;
  let awayRunning = 0;

  for (const g of allGoalMinutes) {
    const scorer = pickScorer(g.side === "home" ? homeLineupPlayers : awayLineupPlayers);
    const assist = pickAssist(
      g.side === "home" ? homeLineupPlayers : awayLineupPlayers,
      scorer
    );
    if (g.side === "home") homeRunning++;
    else awayRunning++;
    rawEvents.push({
      minute: g.minute,
      type: "goal",
      side: g.side,
      playerId: scorer.id,
      assistId: assist ? assist.id : null,
      homeScore: homeRunning,
      awayScore: awayRunning
    });
  }

  for (const m of cardMinutes) {
    const side = rng() < 0.5 ? "home" : "away";
    const lineup = side === "home" ? homeLineupPlayers : awayLineupPlayers;
    const player = pickOutfield(lineup);
    if (!player) continue;
    const isRed = rng() < 0.06; // ~6% of cards are red
    rawEvents.push({
      minute: m,
      type: isRed ? "red" : "yellow",
      side,
      playerId: player.id
    });
  }

  if (injuryMinute) {
    const side = rng() < 0.5 ? "home" : "away";
    const lineup = side === "home" ? homeLineupPlayers : awayLineupPlayers;
    const player = pickOutfield(lineup);
    if (player) {
      rawEvents.push({
        minute: injuryMinute,
        type: "injury",
        side,
        playerId: player.id,
        detail: pick(["Hamstring", "Ankle", "Knee", "Groin", "Calf"])
      });
    }
  }

  rawEvents.sort((a, b) => a.minute - b.minute);

  // Simple auto-subs at ~60' and ~75' if benches exist
  const homeSubsUsed = [];
  const awaySubsUsed = [];
  autoSubs(rawEvents, homeLineupPlayers, awayLineupPlayers, homeBench, awayBench,
           homeSubsUsed, awaySubsUsed);

  // Re-sort after subs
  rawEvents.sort((a, b) => a.minute - b.minute);

  // Compute ratings and per-player stats
  const ratings = {};
  for (const p of [...homeLineupPlayers, ...awayLineupPlayers]) {
    ratings[p.id] = {
      playerId: p.id,
      rating: MATCH.RATING_START,
      goals: 0,
      assists: 0,
      yellow: 0,
      red: 0
    };
  }

  for (const e of rawEvents) {
    const r = ratings[e.playerId];
    if (!r) continue;
    if (e.type === "goal") {
      r.goals++;
      r.rating += MATCH.RATING_GOAL;
      if (e.assistId && ratings[e.assistId]) {
        ratings[e.assistId].assists++;
        ratings[e.assistId].rating += MATCH.RATING_ASSIST;
      }
    } else if (e.type === "yellow") {
      r.yellow++;
      r.rating += MATCH.RATING_YELLOW;
    } else if (e.type === "red") {
      r.red++;
      r.rating += MATCH.RATING_RED;
    }
  }

  // Result adjustment
  const homeFinal = homeRunning;
  const awayFinal = awayRunning;
  const resultMult = homeFinal > awayFinal ? "homeWin"
                    : homeFinal < awayFinal ? "awayWin" : "draw";

  for (const id of Object.keys(ratings)) {
    const isHome = homeLineup.includes(id);
    const side = isHome ? "home" : "away";
    if (resultMult === "homeWin") {
      ratings[id].rating += side === "home" ? MATCH.RATING_WIN_BONUS : MATCH.RATING_LOSS_PENALTY;
    } else if (resultMult === "awayWin") {
      ratings[id].rating += side === "away" ? MATCH.RATING_WIN_BONUS : MATCH.RATING_LOSS_PENALTY;
    } else {
      ratings[id].rating += MATCH.RATING_DRAW_BONUS;
    }
    ratings[id].rating = round(clamp(ratings[id].rating, 3.0, 10.0), 1);
  }

  return {
    fixtureId: fixture.id,
    homeClubId,
    awayClubId,
    homeFormation,
    awayFormation,
    homeStyle,
    awayStyle,
    homeLineup,
    awayLineup,
    homeBench,
    awayBench,
    events: rawEvents,
    ratings,
    finalScore: { home: homeFinal, away: awayFinal },
    subsUsed: { home: homeSubsUsed, away: awaySubsUsed }
  };
}

/* ============================================================
   TEAM STRENGTH
   ============================================================ */
function teamStrength(lineupPlayers, formationId, styleId, isHome) {
  const formation = FORMATIONS[formationId];
  const style = TACTICAL_STYLES[styleId];
  let total = 0;

  lineupPlayers.forEach((p, i) => {
    const slot = formation.slots[i];
    const fit = getPositionFit(p.position, slot.pos);
    const fatMult = getFatigueMultiplier(p.fatigue);
    const morMult = getMoraleMultiplier(p.morale);
    const contribution = p.overall * fit * fatMult * morMult;
    total += contribution;
  });

  const avg = total / lineupPlayers.length;
  const atkBoost = style.attackMod;
  const defBoost = style.defenceMod;
  const homeBoost = isHome ? MATCH.HOME_ADVANTAGE : 1.0;

  // Blend attack/defence into a single "strength" score
  const strength = avg * ((atkBoost + defBoost) / 2) * homeBoost;
  return strength;
}

function expectedGoals(myStrength, oppStrength, isHome) {
  const ratio = myStrength / Math.max(1, oppStrength);
  const base = MATCH.BASE_XG_PER_TEAM;
  const xg = base * Math.pow(ratio, 0.85);
  return clamp(xg, 0.15, 4.5);
}

/* ============================================================
   SCORER / ASSIST PICKING
   Goals are weighted by attacking position and overall.
   ============================================================ */
function pickScorer(lineup) {
  const candidates = lineup.filter(p => p.position !== "GK");
  const weights = candidates.map(p => scorerWeight(p));
  return pickWeighted(candidates, weights);
}

function scorerWeight(p) {
  const base = Math.max(1, p.overall - 55);
  const posMult = {
    ST: 5.0, CAM: 3.0, LW: 3.0, RW: 3.0,
    CM: 1.4, CDM: 0.6, CB: 0.5, LB: 0.4, RB: 0.4, GK: 0
  }[p.position] || 1.0;
  return base * posMult;
}

function pickAssist(lineup, scorer) {
  const candidates = lineup.filter(p => p.id !== scorer.id && p.position !== "GK");
  if (candidates.length === 0) return null;
  const weights = candidates.map(p => {
    const base = Math.max(1, p.overall - 55);
    const posMult = {
      CAM: 4.0, LW: 3.5, RW: 3.5, CM: 3.0, ST: 2.0,
      LB: 1.6, RB: 1.6, CDM: 1.0, CB: 0.6, GK: 0
    }[p.position] || 1.0;
    return base * posMult;
  });
  return pickWeighted(candidates, weights);
}

function pickOutfield(lineup) {
  const candidates = lineup.filter(p => p.position !== "GK");
  return pick(candidates) || null;
}

function pickGoalMinute() {
  // Slight bias toward later minutes (teams push)
  const r = rng();
  const m = Math.floor(3 + Math.pow(r, 0.85) * 87);
  return clamp(m, 1, 90);
}

/* ============================================================
   AUTO SUBS
   AI teams (and unattended user teams) auto-sub at 60 and 75.
   ============================================================ */
function autoSubs(events, homeLineup, awayLineup, homeBench, awayBench,
                  homeSubsUsed, awaySubsUsed) {
  doAutoSub("home", 60, homeLineup, homeBench, homeSubsUsed, events);
  doAutoSub("away", 60, awayLineup, awayBench, awaySubsUsed, events);
  doAutoSub("home", 75, homeLineup, homeBench, homeSubsUsed, events);
  doAutoSub("away", 75, awayLineup, awayBench, awaySubsUsed, events);
}

function doAutoSub(side, minute, lineupArr, benchArr, usedArr, events) {
  if (usedArr.length >= MATCH.MAX_SUBS) return;
  if (!benchArr || benchArr.length === 0) return;

  // Pick a tired outfield player to sub off
  const candidates = lineupArr.filter(p => p.position !== "GK");
  if (candidates.length === 0) return;

  // Pick lowest-fatigue available
  candidates.sort((a, b) => a.fatigue - b.fatigue);
  const off = candidates[0];
  if (!off) return;

  // Pick best bench player by position fit
  const benchPlayers = benchArr.map(id => playerWithRuntime(id))
    .filter(p => !usedArr.find(u => u.playerInId === p.id));
  if (benchPlayers.length === 0) return;

  const on = benchPlayers[0];

  usedArr.push({ playerOutId: off.id, playerInId: on.id, minute });
  events.push({
    minute,
    type: "sub",
    side,
    playerOutId: off.id,
    playerInId: on.id
  });

  // Swap in lineup array
  const idx = lineupArr.findIndex(p => p.id === off.id);
  if (idx >= 0) lineupArr[idx] = on;
}

/* ============================================================
   RUNTIME MERGE
   ============================================================ */
function playerWithRuntime(playerId) {
  const p = getPlayer(playerId);
  if (!p) return null;
  const ps = state.playerStates[playerId] || {};
  return {
    ...p,
    fatigue: ps.fatigue ?? 100,
    morale: ps.morale ?? 75,
    injury: ps.injury || null
  };
}
