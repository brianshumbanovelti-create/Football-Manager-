/* ============================================================
   FOOTBALL MANAGER — js/ui/inbox.js
   Inbox messages + actionable transfer requests
   ============================================================ */

import { state, markInboxRead, resolveInboxMessage, executeTransfer, pushInbox } from "../state.js";
import { getPlayer } from "../../data/players.js";
import { createPromise } from "../engine/morale.js";
import { autosave } from "../storage.js";
import { el, $, clear, formatMoney } from "../util/helpers.js";

export function renderInboxScreen() {
  renderList();
  renderDetail();
}

function renderList() {
  const list = $("#inbox-list");
  clear(list);

  if (state.inbox.length === 0) {
    list.appendChild(el("div", { class: "empty" }, "Inbox is empty."));
    return;
  }

  for (const msg of state.inbox) {
    const row = el("div", {
      class: "card" + (!msg.read ? " card-highlight" : ""),
      style: "cursor:pointer",
      onclick: () => { markInboxRead(msg.id); showDetail(msg); }
    }, [
      el("div", { class: "row-between" }, [
        el("div", { class: "card-title" }, msg.title),
        msg.actionable && !msg.resolvedAt
          ? el("span", { class: "badge accent" }, "Action")
          : null
      ]),
      el("div", { class: "card-sub" }, msg.body)
    ]);
    list.appendChild(row);
  }
}

function showDetail(msg) {
  const panel = $("#inbox-detail");
  panel.classList.remove("hidden");
  clear(panel);

  panel.appendChild(el("div", { class: "card card-highlight" }, [
    el("div", { class: "card-title" }, msg.title),
    el("div", { class: "card-sub mb-2" }, msg.body),
    ...renderActions(msg)
  ]));
}

function renderActions(msg) {
  if (!msg.actionable || msg.resolvedAt) {
    return [el("div", { class: "card-sub" }, "No actions available.")];
  }
  return (msg.actions || []).map(a =>
    el("button", {
      class: "btn-secondary btn-sm",
      style: "margin-right:6px;margin-top:6px",
      onclick: () => handleAction(a, msg)
    }, a.label)
  );
}

function handleAction(action, msg) {
  const { playerId } = action.payload || {};

  if (action.action === "sell-player") {
    const p = getPlayer(playerId);
    if (!p) return;
    if (!confirm(`Sell ${p.name}? You'll receive market value.`)) return;
    executeTransfer(playerId, state.userClubId, "free-agent", p.value);
    pushInbox({ type: "transfer", title: `${p.name} has been sold`, body: `Fee: ${formatMoney(p.value)}.` });
  } else if (action.action === "reject-request") {
    const ps = state.playerStates[playerId];
    if (ps) ps.morale = Math.max(0, ps.morale - 15);
    pushInbox({ type: "info", title: `Request rejected`, body: `${getPlayer(playerId)?.name} is unhappy.` });
  } else if (action.action === "reject-with-promise") {
    createPromise(playerId, 3, 5);
    pushInbox({ type: "info", title: `Promise made`, body: `You promised ${getPlayer(playerId)?.name} 3 starts in the next 5 matches.` });
  } else if (action.action === "accept-ai-bid") {
    const { buyerClubId, fee } = action.payload;
    executeTransfer(playerId, state.userClubId, buyerClubId, fee);
    pushInbox({ type: "transfer", title: `Player sold`, body: `${getPlayer(playerId)?.name} joined ${buyerClubId} for ${formatMoney(fee)}.` });
  } else if (action.action === "reject-ai-bid") {
    pushInbox({ type: "info", title: `Bid rejected`, body: `You rejected the offer for ${getPlayer(playerId)?.name}.` });
  }

  resolveInboxMessage(msg.id);
  autosave();
  renderInboxScreen();
}

function renderDetail() {
  // No-op if nothing selected yet
  const panel = $("#inbox-detail");
  if (panel.childNodes.length === 0) panel.classList.add("hidden");
}
