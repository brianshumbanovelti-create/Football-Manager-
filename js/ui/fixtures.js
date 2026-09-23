/* ============================================================
   FOOTBALL MANAGER — js/ui/fixtures.js
   League-tabbed fixtures/calendar screen
   ============================================================ */

import { LEAGUES, LEAGUE_ORDER } from "../../data/leagues.js";
import { CLUBS } from "../../data/clubs.js";
import { state } from "../state.js";
import {
  groupFixturesByMatchday,
  getNextFixtureForClub
} from "../../data/fixtures.js";
import {
  el, $, clear, formatDate, formatDateLong, formatKickoff
} from "../util/helpers.js";

/* ============================================================
   MODULE STATE
   ============================================================ */
const uiState = {
  activeLeagueId: null
};

/* ============================================================
   ENTRY POINT
   ============================================================ */
export function renderFixturesScreen() {
  // Default the active tab to the user's own league
  if (!uiState.activeLeagueId) {
    uiState.activeLeagueId = state.userLeagueId || LEAGUE_ORDER[0];
  }

  renderTabs();
  renderFixtureList(uiState.activeLeagueId);
}

/* ============================================================
   LEAGUE TABS
   ============================================================ */
function renderTabs() {
  const bar = $("#fixtures-league-tabs");
  if (!bar) return;
  clear(bar);

  for (const leagueId of LEAGUE_ORDER) {
    const league = LEAGUES[leagueId];
    const tab = el("button", {
      class: "tab" + (leagueId === uiState.activeLeagueId ? " active" : ""),
      "data-league": leagueId,
      onclick: () => switchLeague(leagueId)
    }, league.name);
    bar.appendChild(tab);
  }
}

function switchLeague(leagueId) {
  uiState.activeLeagueId = leagueId;
  // Update tab classes
  document.querySelectorAll("#fixtures-league-tabs .tab").forEach(t => {
    t.classList.toggle("active", t.dataset.league === leagueId);
  });
  renderFixtureList(leagueId);
}

/* ============================================================
   FIXTURE LIST
   Groups fixtures by matchday, and inside each matchday by date.
   ============================================================ */
function renderFixtureList(leagueId) {
  const list = $("#fixtures-list");
  if (!list) return;
  clear(list);

  const grouped = groupFixturesByMatchday(state.fixtures, leagueId);
  const matchdays = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => a - b);

  if (matchdays.length === 0) {
    list.appendChild(el("div", { class: "empty" }, "No fixtures scheduled."));
    return;
  }

  // Determine the "current" matchday for this league based on played status
  const currentMatchday = pickCurrentMatchday(grouped, matchdays);

  // Show a window of matchdays: current +/- a few
  const windowStart = Math.max(0, matchdays.indexOf(currentMatchday) - 1);
  const windowEnd = Math.min(matchdays.length, windowStart + 6);
  const windowMatchdays = matchdays.slice(windowStart, windowEnd);

  for (const md of windowMatchdays) {
    const fixtures = grouped[md];

    // Group by date
    const byDate = {};
    for (const f of fixtures) {
      if (!byDate[f.date]) byDate[f.date] = [];
      byDate[f.date].push(f);
    }

    const group = el("div", { class: "fixture-group" });

    // Group header: "Matchday N"
    group.appendChild(el("div", { class: "fixture-group-title" },
      `Matchday ${md}`));

    const dates = Object.keys(byDate).sort();
    for (const date of dates) {
      group.appendChild(renderDateHeader(date));
      const sorted = byDate[date].sort((a, b) => a.time.localeCompare(b.time));
      for (const fixture of sorted) {
        group.appendChild(renderFixtureRow(fixture));
      }
    }

    list.appendChild(group);
  }

  // If we're beyond the season, show the last matchday
  const lastMatchday = matchdays[matchdays.length - 1];
  if (currentMatchday === lastMatchday && mdAllPlayed(grouped[lastMatchday])) {
    list.appendChild(el("div", { class: "empty" }, "Season complete."));
  }
}

function renderDateHeader(dateStr) {
  return el("div", {
    class: "card-sub",
    style: "padding:4px 2px;font-size:11px;text-transform:uppercase;letter-spacing:0.6px"
  }, formatDateLong(dateStr));
}

/* ============================================================
   FIXTURE ROW
   Home name — Time/Score — Away name, centered.
   Played: score replaces time. User's club gets pink left border.
   ============================================================ */
function renderFixtureRow(fixture) {
  const isUserClub =
    fixture.homeClubId === state.userClubId ||
    fixture.awayClubId === state.userClubId;

  const isHomeUser = fixture.homeClubId === state.userClubId;
  const isAwayUser = fixture.awayClubId === state.userClubId;

  const classes = ["fixture-row"];
  if (isUserClub) classes.push("is-user-club");
  if (fixture.played) classes.push("played");

  const homeName = clubName(fixture.homeClubId);
  const awayName = clubName(fixture.awayClubId);

  const centerContent = fixture.played
    ? el("div", { class: "score" }, `${fixture.homeScore} – ${fixture.awayScore}`)
    : el("div", null, fixture.time);

  const homeClasses = ["fixture-team", "home"];
  const awayClasses = ["fixture-team", "away"];

  if (fixture.played && isUserClub) {
    const userWon = (isHomeUser && fixture.homeScore > fixture.awayScore) ||
                    (isAwayUser && fixture.awayScore > fixture.homeScore);
    const userLost = (isHomeUser && fixture.homeScore < fixture.awayScore) ||
                     (isAwayUser && fixture.awayScore < fixture.homeScore);
    if (userWon) {
      if (isHomeUser) homeClasses.push("fixture-winner");
      else awayClasses.push("fixture-winner");
    } else if (userLost) {
      if (isHomeUser) homeClasses.push("fixture-loser");
      else awayClasses.push("fixture-loser");
    }
  }

  const row = el("div", { class: classes.join(" ") }, [
    el("div", { class: homeClasses.join(" ") }, homeName),
    el("div", { class: "fixture-center" }, centerContent),
    el("div", { class: awayClasses.join(" ") }, awayName)
  ]);

  // Clicking user's own fixture starts the match flow
  if (isUserClub && !fixture.played) {
    row.style.cursor = "pointer";
    row.addEventListener("click", () => {
      if (window.__fm__?.startMatchFlow) {
        window.__fm__.startMatchFlow(fixture.id);
      }
    });
  }

  return row;
}

/* ============================================================
   HELPERS
   ============================================================ */
function clubName(clubId) {
  const c = CLUBS[clubId];
  return c?.shortName || c?.name || clubId;
}

function pickCurrentMatchday(grouped, matchdays) {
  for (const md of matchdays) {
    const fx = grouped[md];
    if (!mdAllPlayed(fx)) return md;
  }
  return matchdays[matchdays.length - 1];
}

function mdAllPlayed(fixtures) {
  return fixtures.every(f => f.played);
}

/* ============================================================
   EXPORTS FOR OTHER MODULES
   ============================================================ */
export function getActiveLeagueTab() {
  return uiState.activeLeagueId;
}

export function setActiveLeagueTab(leagueId) {
  uiState.activeLeagueId = leagueId;
}

/* ============================================================
   AUTO-RENDER ON LOAD
   When the module is imported dynamically by app.js, immediately
   render. app.js's showScreen calls renderFixturesScreen() anyway,
   but this is a safe no-op fallback.
   ============================================================ */
if (document.getElementById("fixtures-league-tabs")) {
  // Only auto-render if the user already entered the game
  // (state.initialized && userClubId set)
  if (state.initialized && state.userClubId) {
    // Defer so DOM is fully ready when the dynamic import resolves
    setTimeout(renderFixturesScreen, 0);
  }
}
