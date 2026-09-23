/* ============================================================
   FOOTBALL MANAGER — js/engine/aiTransfers.js
   AI clubs evaluate squads, bid for players, complete moves
   ============================================================ */

import { CLUBS, getClubsByLeague } from "../../data/clubs.js";
import { LEAGUES, LEAGUE_ORDER } from "../../data/leagues.js";
import { getPlayersByClub, getPlayer } from "../../data/players.js";
import { state, executeTransfer, addTransferOffer, pushInbox } from "../state.js";
import { TRANSFERS } from "../util/constants.js";
import { rng, randInt, pick, shuffle, roll } from "../util/helpers.js";

/* Evaluate each AI club once per day.
   Chance they target a weak position and bid for a user's player
   or another AI club's player. */
export function runDailyAITransfers(userClubId) {
  for (const leagueId of LEAGUE_ORDER) {
    for (const clubId of LEAGUES[leagueId].clubIds) {
      if (clubId === userClubId) continue;
      if (!roll(TRANSFERS.AI_MARKET_ACTIVITY_PER_DAY)) continue;
      maybeMakeOffer(clubId, userClubId);
    }
  }
}

/* AI club picks a position it needs and targets an available player */
function maybeMakeOffer(buyerClubId, userClubId) {
  const buyer = CLUBS[buyerClubId];
  const squad = getPlayersByClub(buyerClubId);
  const need = weakestPosition(squad);
  if (!need) return;

  // Candidate pool = players from other clubs at that position with
  // overall <= buyer.rating + 3
  const pool = [];
  for (const otherClub of Object.values(CLUBS)) {
    if (otherClub.id === buyerClubId) continue;
    const candidates = getPlayersByClub(otherClub.id)
      .filter(p => p.position === need && p.overall <= buyer.rating + 3);
    pool.push(...candidates.map(p => ({ ...p, sellerClubId: otherClub.id })));
  }
  if (pool.length === 0) return;

  const target = pick(shuffle(pool).slice(0, 5));
  if (!target) return;

  // Offer = value ± 20%
  const fee = Math.round(target.value * (0.9 + rng() * 0.4));

  if (target.sellerClubId === userClubId) {
    // Surface as inbox offer for user to accept/reject
    addTransferOffer({
      type: "ai-incoming",
      playerId: target.id,
      fromClubId: buyerClubId,
      toClubId: userClubId,
      fee
    });
    pushInbox({
      type: "transfer",
      title: `${buyer.name} bid for ${target.name}`,
      body: `They have offered £${(fee / 1_000_000).toFixed(1)}M.`,
      actionable: true,
      meta: { playerId: target.id, buyerClubId, fee },
      actions: [
        { label: "Accept", action: "accept-ai-bid", payload: { playerId: target.id, buyerClubId, fee } },
        { label: "Reject", action: "reject-ai-bid", payload: { playerId: target.id, buyerClubId } }
      ]
    });
  } else {
    // AI-to-AI — resolve immediately with a roll
    if (roll(0.55)) {
      executeTransfer(target.id, target.sellerClubId, buyerClubId, fee);
    }
  }
}

function weakestPosition(squad) {
  // Return the position with the lowest depth (excluding GK)
  const depth = {};
  for (const p of squad) depth[p.position] = (depth[p.position] || 0) + 1;
  const positions = ["CB", "LB", "RB", "CDM", "CM", "CAM", "LW", "RW", "ST"];
  let worstPos = null;
  let worstCount = 99;
  for (const pos of positions) {
    const count = depth[pos] || 0;
    if (count < worstCount) {
      worstCount = count;
      worstPos = pos;
    }
  }
  return worstPos;
}

/* User makes an offer — resolve one AI counter/accept/decline */
export function resolveUserOffer({ playerId, sellerClubId, offerFee }) {
  const target = getPlayer(playerId);
  if (!target) return { status: "rejected", reason: "Player missing" };

  const ratio = offerFee / Math.max(1, target.value);
  if (ratio < TRANSFERS.MIN_OFFER_RATIO) {
    return { status: "rejected", reason: "Offer too low" };
  }

  // Accept if ≥ value, counter if 70–99%
  if (ratio >= 1.0) {
    return { status: "accepted", fee: offerFee };
  }

  // Counter with 15% markup once
  const counterFee = Math.round(target.value * TRANSFERS.COUNTER_MARKUP);
  return { status: "countered", counterFee };
}
