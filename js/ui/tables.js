/* ============================================================
   FOOTBALL MANAGER — js/ui/tables.js
   League standings, tabbed by league
   ============================================================ */

import { LEAGUES, LEAGUE_ORDER } from "../../data/leagues.js";
import { CLUBS } from "../../data/clubs.js";
import { state } from "../state.js";
import { buildLeagueTable } from "../../data/fixtures.js";
import { el, $, clear } from "../util/helpers.js";

let activeLeagueId = null;

export function renderTablesScreen() {
  if (!activeLeagueId) activeLeagueId = state.userLeagueId || LEAGUE_ORDER[0];
  renderTabs();
  renderTable(activeLeagueId);
}

function renderTabs() {
  const bar = $("#tables-league-tabs");
  clear(bar);
  for (const leagueId of LEAGUE_ORDER) {
    bar.appendChild(el("button", {
      class: "tab" + (leagueId === activeLeagueId ? " active" : ""),
      "data-league": leagueId,
      onclick: () => { activeLeagueId = leagueId; renderTablesScreen(); }
    }, LEAGUES[leagueId].name));
  }
}

function renderTable(leagueId) {
  const content = $("#tables-content");
  clear(content);

  const table = buildLeagueTable(state.fixtures, leagueId);
  const tbl = el("table", { class: "league-table" }, [
    el("thead", null, el("tr", null, [
      el("th", { class: "pos" }, "#"),
      el("th", { class: "team" }, "Team"),
      el("th", { class: "num" }, "P"),
      el("th", { class: "num" }, "W"),
      el("th", { class: "num" }, "D"),
      el("th", { class: "num" }, "L"),
      el("th", { class: "num" }, "GD"),
      el("th", { class: "pts" }, "Pts")
    ])),
    el("tbody", null,
      table.map(row => el("tr", {
        class: row.clubId === state.userClubId ? "user-club" : ""
      }, [
        el("td", { class: "pos" }, String(row.position)),
        el("td", { class: "team" }, CLUBS[row.clubId]?.shortName || row.clubId),
        el("td", { class: "num" }, String(row.played)),
        el("td", { class: "num" }, String(row.won)),
        el("td", { class: "num" }, String(row.drawn)),
        el("td", { class: "num" }, String(row.lost)),
        el("td", { class: "num" }, (row.gd >= 0 ? "+" : "") + row.gd),
        el("td", { class: "pts" }, String(row.points))
      ]))
    )
  ]);

  content.appendChild(tbl);
}
