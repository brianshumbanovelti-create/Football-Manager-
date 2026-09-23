/* ===========================================================
   FOOTBALL MANAGER — js/engine/fatigue.js
   Post-match fatigue decay, daily recovery, injury risk
   ============================================================ */

import { FATIGUE, TACTICAL_STYLES } from "../util/constants.js";
import { state, adjustPlayerFatigue, getPlayerWithState } from "../state.js";
import { clamp, rng, rand } from "../util/helpers.js";

/* Apply fatigue cost to a player who played N minutes with style */
export function applyMatchFatigue(playerId, minutes, styleId) {
  const style = TACTICAL_STYLES[styleId] || TACTICAL_STYLES.balanced;
  const per90 = FATIGUE.MATCH_BASE_COST * style.fatigueCost / 2;
  const cost = (per90 * minutes) / 90;
  adjustPlayerFatigue(playerId, -cost);
}

/* Daily recovery for all players — call once per advance day */
export function applyDailyRecovery(clubId, playedMap) {
  const squad = state.fixtures ? null : null;
  // playedMap: { playerId: minutesPlayedToday }
  const players = Object.keys(state.playerStates);
  for (const id of players) {
    const ps = state.playerStates[id];
    if (!ps) continue;
    if (ps.injury) continue; // injured players don't regain in this simple model

    const played = playedMap && playedMap[id] ? playedMap[id] : 0;
    let recovery = FATIGUE.RECOVERY_FULL_REST;
    if (played > 30) recovery = 0;
    else if (played > 0) recovery = FATIGUE.RECOVERY_PARTIAL;
    else if (played === 0) recovery = FATIGUE.RECOVERY_FULL_REST;

    ps.fatigue = clamp(ps.fatigue + recovery, FATIGUE.MIN, FATIGUE.MAX);
  }
}

/* Injury risk for a player about to play N minutes */
export function injuryRisk(playerId, minutes) {
  const p = getPlayerWithState(playerId);
  if (!p) return 0;
  const fat = p.fatigue;
  let risk = 0.005; // base
  if (fat < 20) risk += 0.06;
  else if (fat < 40) risk += 0.03;
  else if (fat < 60) risk += 0.012;
  if (p.age >= 32) risk += 0.008;
  if (minutes > 70) risk += 0.004;
  return clamp(risk, 0, 0.25);
}

export function rollInjury(playerId, minutes) {
  const risk = injuryRisk(playerId, minutes);
  if (rng() < risk) {
    const weeks = randIntSafe(1, 6);
    return {
      type: pickInjuryType(),
      weeksOut: weeks
    };
  }
  return null;
}

function randIntSafe(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function pickInjuryType() {
  const types = ["Hamstring", "Ankle", "Knee", "Groin", "Calf", "Back", "Concussion"];
  return types[Math.floor(Math.random() * types.length)];
}
