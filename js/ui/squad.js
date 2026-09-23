/* ============================================================
   FOOTBALL MANAGER — js/ui/squad.js
   Squad list + player detail with fatigue/morale bars
   ============================================================ */

import { getPlayer } from "../../data/players.js";
import { state, getUserSquadWithState } from "../state.js";
import { FATIGUE, MORALE, getFatigueStatus, getMoraleStatus } from "../util/constants.js";
import { el, $, clear, formatMoney, formatWage, pct } from "../util/helpers.js";

let selectedPlayerId = null;

export function renderSquadScreen() {
  renderList();
  renderDetail(selectedPlayerId);
}

function renderList() {
  const list = $("#squad-list");
  clear(list);

  const squad = getUserSquadWithState().sort((a, b) => b.overall - a.overall);

  for (const p of squad) {
    const row = el("div", {
      class: "player-row" + (p.id === selectedPlayerId ? " selected" : ""),
      onclick: () => { selectedPlayerId = p.id; renderSquadScreen(); }
    }, [
      el("div", { class: "player-pos " + posClass(p.position) }, p.position),
      el("div", { class: "grow" }, [
        el("div", { class: "player-name" }, p.name),
        el("div", { class: "player-meta" }, `${p.nationality} · ${getFatigueStatus(p.fatigue)} · ${getMoraleStatus(p.morale)}`)
      ]),
      el("div", { class: "player-ovr " + ratingClass(p.overall) }, String(p.overall)),
      el("div", { class: "player-age" }, String(p.age))
    ]);
    list.appendChild(row);
  }
}

function renderDetail(playerId) {
  const panel = $("#squad-detail");
  if (!playerId) {
    panel.classList.add("hidden");
    return;
  }
  panel.classList.remove("hidden");
  clear(panel);

  const p = getUserSquadWithState().find(x => x.id === playerId);
  if (!p) return;

  panel.appendChild(el("div", { class: "card card-highlight" }, [
    el("div", { class: "card-title" }, p.name),
    el("div", { class: "card-sub mb-2" }, `${p.position} · ${p.age} · ${p.nationality}`),

    // Fatigue bar
    el("div", { class: "bar-row mb-1" }, [
      el("div", { class: "bar-label" }, "Fatigue"),
      el("div", { class: "bar-track" }, el("div", {
        class: "bar-fill " + fatigueClass(p.fatigue),
        style: `width:${pct(p.fatigue, FATIGUE.MAX)}%`
      })),
      el("div", { class: "bar-value" }, String(Math.round(p.fatigue)))
    ]),
    el("div", { class: "bar-status" }, getFatigueStatus(p.fatigue)),

    // Morale bar
    el("div", { class: "bar-row mb-1 mt-2" }, [
      el("div", { class: "bar-label" }, "Morale"),
      el("div", { class: "bar-track" }, el("div", {
        class: "bar-fill " + moraleClass(p.morale),
        style: `width:${pct(p.morale, MORALE.MAX)}%`
      })),
      el("div", { class: "bar-value" }, String(Math.round(p.morale)))
    ]),
    el("div", { class: "bar-status" }, getMoraleStatus(p.morale)),

    el("div", { class: "row-between mt-3" }, [
      el("span", { class: "card-sub" }, "Value"),
      el("span", null, formatMoney(p.value))
    ]),
    el("div", { class: "row-between" }, [
      el("span", { class: "card-sub" }, "Wage"),
      el("span", null, formatWage(p.wage))
    ]),
    el("div", { class: "row-between" }, [
      el("span", { class: "card-sub" }, "Matches"),
      el("span", null, String(p.matchesThisSeason))
    ]),
    el("div", { class: "row-between" }, [
      el("span", { class: "card-sub" }, "Minutes"),
      el("span", null, String(p.minutesThisSeason))
    ])
  ]));

  if (p.injury) {
    panel.appendChild(el("div", { class: "card", style: "border-left:3px solid var(--red)" }, [
      el("div", { class: "card-title" }, "🚑 Injured"),
      el("div", { class: "card-sub" }, `${p.injury.type} · ${p.injury.weeksOut} weeks out`)
    ]));
  }

  if (p.transferRequest) {
    panel.appendChild(el("div", { class: "card", style: "border-left:3px solid var(--yellow)" }, [
      el("div", { class: "card-title" }, "Transfer Request"),
      el("div", { class: "card-sub" }, "This player wants to leave the club.")
    ]));
  }
}

function posClass(pos) {
  if (pos === "GK") return "GK";
  if (["CB", "LB", "RB"].includes(pos)) return "DEF";
  if (["CDM", "CM", "CAM"].includes(pos)) return "MID";
  return "FWD";
}

function ratingClass(o) {
  if (o >= 84) return "elite";
  if (o >= 76) return "good";
  if (o >= 68) return "avg";
  return "low";
}

function fatigueClass(v) {
  if (v >= 80) return "fresh";
  if (v >= 60) return "okay";
  if (v >= 40) return "tired";
  return "exhausted";
}

function moraleClass(v) {
  if (v >= 80) return "morale-high";
  if (v >= 60) return "morale-mid";
  if (v >= 40) return "morale-low";
  return "morale-bad";
}
