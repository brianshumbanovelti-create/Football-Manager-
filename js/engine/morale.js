/* ============================================================
   FOOTBALL MANAGER — js/engine/morale.js
   Morale updates, transfer-request triggers, promise tracking
   ============================================================ */

import { MORALE } from "../util/constants.js";
import { state, adjustPlayerMorale, pushInbox, setTransferRequest, clearPlayingTimePromise } from "../state.js";
import { getPlayer, getPlayersByClub } from "../../data/players.js";

/* After a match: adjust morale for everyone who played + bench */
export function applyMatchMorale(clubId, result, playedIds, benchIds) {
  const squad = getPlayersByClub(clubId);
  const resultDelta = result === "win" ? MORALE.WIN_BONUS
                    : result === "loss" ? MORALE.LOSS_PENALTY
                    : MORALE.DRAW_CHANGE;

  for (const p of squad) {
    const ps = state.playerStates[p.id];
    if (!ps) continue;
    if (playedIds.includes(p.id)) {
      adjustPlayerMorale(p.id, resultDelta);
    }
  }
}

/* Per-matchday playing-time check — call after each matchday */
export function checkPlayingTimeDissatisfaction(clubId, availableMatchdays = 10) {
  const squad = getPlayersByClub(clubId);
  for (const p of squad) {
    const ps = state.playerStates[p.id];
    if (!ps) continue;
    if (ps.injury) continue;

    const matchesRatio = ps.matchesThisSeason / Math.max(1, availableMatchdays);
    if (matchesRatio < 0.3 && ps.morale < 45) {
      ps.matchdaysUnhappy = (ps.matchdaysUnhappy || 0) + 1;
    } else {
      ps.matchdaysUnhappy = 0;
    }

    if (ps.matchdaysUnhappy >= 3 && !ps.transferRequest) {
      setTransferRequest(p.id, true);
      pushInbox({
        type: "transfer",
        title: `${p.name} has handed in a transfer request`,
        body: `Unhappy with playing time and morale at ${ps.morale}.`,
        actionable: true,
        meta: { playerId: p.id },
        actions: [
          { label: "Sell Player", action: "sell-player", payload: { playerId: p.id } },
          { label: "Reject Request", action: "reject-request", payload: { playerId: p.id } },
          { label: "Reject with Promise", action: "reject-with-promise", payload: { playerId: p.id } }
        ]
      });
    }
  }
}

/* Promise tracking — call at end of each matchday */
export function tickPlayingTimePromises(clubId) {
  const squad = getPlayersByClub(clubId);
  for (const p of squad) {
    const ps = state.playerStates[p.id];
    if (!ps || !ps.playingTimePromise) continue;

    const promise = ps.playingTimePromise;
    promise.matchesRemaining -= 1;

    if (promise.matchesRemaining <= 0) {
      if (promise.startsMade >= promise.startsRequired) {
        adjustPlayerMorale(p.id, MORALE.PROMISE_KEPT_BONUS);
      } else {
        adjustPlayerMorale(p.id, MORALE.PROMISE_BROKEN_PENALTY);
        if (!ps.transferRequest) {
          setTransferRequest(p.id, true);
          pushInbox({
            type: "transfer",
            title: `${p.name} is unhappy — promise broken`,
            body: `You promised ${promise.startsRequired} starts and only delivered ${promise.startsMade}.`,
            actionable: true,
            meta: { playerId: p.id },
            actions: [
              { label: "Sell Player", action: "sell-player", payload: { playerId: p.id } },
              { label: "Reject Request", action: "reject-request", payload: { playerId: p.id } }
            ]
          });
        }
      }
      clearPlayingTimePromise(p.id);
    }
  }
}

export function recordPromiseStart(playerId) {
  const ps = state.playerStates[playerId];
  if (!ps || !ps.playingTimePromise) return;
  ps.playingTimePromise.startsMade++;
}

export function createPromise(playerId, startsRequired, matchesWindow = 5) {
  const ps = state.playerStates[playerId];
  if (!ps) return;
  ps.playingTimePromise = {
    startsRequired,
    startsMade: 0,
    matchesRemaining: matchesWindow
  };
  adjustPlayerMorale(playerId, MORALE.REJECT_WITH_PROMISE_BONUS);
}
