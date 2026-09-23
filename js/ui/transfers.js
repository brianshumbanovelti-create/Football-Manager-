/* ============================================================
   FOOTBALL MANAGER — js/ui/transfers.js
   Transfer market: browse, offer, resolve
   ============================================================ */

import { CLUBS, getClubsByLeague } from "../../data/clubs.js";
import { LEAGUES, LEAGUE_ORDER } from "../../data/leagues.js";
import { getPlayersByClub, getPlayer } from "../../data/players.js";
import { state, executeTransfer, addTransferOffer, getEffectiveClubId } from "../state.js";
import { resolveUserOffer } from "../engine/aiTransfers.js";
import { autosave } from "../storage.js";
import { el, $, clear, formatMoney } from "../util/helpers.js";

export function renderTransfersScreen() {
  const content = $("#transfers-content");
  clear(content);

  const budget = state.clubStates[state.userClubId]?.budget || 0;

  content.appendChild(el("div", { class: "card card-highlight" }, [
    el("div", { class: "card-title" }, "Transfer Market"),
    el("div", { class: "card-sub" }, `Budget: ${formatMoney(budget)}`)
  ]));

  // Incoming offers first
  const incoming = state.transferOffers.filter(o =>
    o.toClubId === state.userClubId && o.status === "pending"
  );
  if (incoming.length > 0) {
    content.appendChild(el("h2", { style: "margin:12px 0 8px" }, "Incoming Offers"));
    for (const offer of incoming) {
      const p = getPlayer(offer.playerId);
      content.appendChild(el("div", { class: "card" }, [
        el("div", { class: "card-title" }, p?.name || offer.playerId),
        el("div", { class: "card-sub" }, `From ${CLUBS[offer.fromClubId]?.name} · ${formatMoney(offer.fee)}`),
        el("button", {
          class: "btn-secondary btn-sm",
          style: "margin-top:8px;margin-right:6px",
          onclick: () => handleAcceptIncoming(offer)
        }, "Accept"),
        el("button", {
          class: "btn-ghost btn-sm",
          onclick: () => handleRejectIncoming(offer)
        }, "Reject")
      ]));
    }
  }

  // Browse market
  content.appendChild(el("h2", { style: "margin:12px 0 8px" }, "Browse Players"));

  const pool = [];
  for (const club of Object.values(CLUBS)) {
    if (club.id === state.userClubId) continue;
    const squad = getPlayersByClub(club.id);
    for (const p of squad) {
      if (getEffectiveClubId(p.id) !== club.id) continue;
      pool.push({ ...p, currentClubId: club.id });
    }
  }
  pool.sort((a, b) => b.overall - a.overall);

  for (const p of pool.slice(0, 40)) {
    content.appendChild(el("div", { class: "card" }, [
      el("div", { class: "row-between" }, [
        el("div", null, [
          el("div", { class: "card-title" }, p.name),
          el("div", { class: "card-sub" },
            `${p.position} · ${p.age} · ${CLUBS[p.currentClubId]?.shortName}`)
        ]),
        el("div", { class: "player-ovr " + ratingClass(p.overall) }, String(p.overall))
      ]),
      el("div", { class: "row-between", style: "margin-top:8px" }, [
        el("span", { class: "card-sub" }, formatMoney(p.value)),
        el("button", {
          class: "btn-secondary btn-sm",
          onclick: () => makeOffer(p)
        }, "Make Offer")
      ])
    ]));
  }
}

function handleAcceptIncoming(offer) {
  executeTransfer(offer.playerId, state.userClubId, offer.fromClubId, offer.fee);
  offer.status = "accepted";
  autosave();
  renderTransfersScreen();
}

function handleRejectIncoming(offer) {
  offer.status = "rejected";
  autosave();
  renderTransfersScreen();
}

function makeOffer(player) {
  const input = prompt(`Offer for ${player.name} (value: ${formatMoney(player.value)})`, player.value);
  if (!input) return;
  const fee = parseInt(input, 10);
  if (!Number.isFinite(fee) || fee <= 0) return;

  const result = resolveUserOffer({
    playerId: player.id,
    sellerClubId: player.currentClubId,
    offerFee: fee
  });

  if (result.status === "accepted") {
    executeTransfer(player.id, player.currentClubId, state.userClubId, fee);
    alert("Offer accepted!");
  } else if (result.status === "countered") {
    const ok = confirm(`Counter offer: ${formatMoney(result.counterFee)}. Accept?`);
    if (ok) {
      executeTransfer(player.id, player.currentClubId, state.userClubId, result.counterFee);
      alert("Transfer complete!");
    }
  } else {
    alert("Offer rejected: " + (result.reason || "unknown"));
  }
  autosave();
  renderTransfersScreen();
}

function ratingClass(o) {
  if (o >= 84) return "elite";
  if (o >= 76) return "good";
  if (o >= 68) return "avg";
  return "low";
}
