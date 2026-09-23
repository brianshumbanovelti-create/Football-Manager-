/* ============================================================
   FOOTBALL MANAGER — data/fixtures.js
   Round-robin fixture generator + date assignment
   Every club plays every other club home & away.
   ============================================================ */

import { LEAGUES, LEAGUE_ORDER } from "./leagues.js";
import { SEASON } from "../js/util/constants.js";

/* ============================================================
   CORE: Circle-method round-robin
   Input:  array of club IDs (length must be even)
   Output: array of matchdays, each an array of [home, away] pairs
   ============================================================ */
function buildRoundRobin(clubIds) {
  const teams = [...clubIds];
  const n = teams.length;
  if (n % 2 !== 0) {
    throw new Error("Round-robin requires an even number of teams");
  }

  const rounds = [];
  const half = n / 2;

  // Fix first team, rotate the rest
  const fixed = teams[0];
  const rotating = teams.slice(1);

  for (let round = 0; round < n - 1; round++) {
    const pairs = [];

    // Fixed team alternates home/away each round
    const opponent = rotating[rotating.length - 1 - round % rotating.length] || rotating[0];

    // Build this round's pairs using the standard circle method
    const left = [fixed];
    const right = [];

    // Rotate the rotating array by `round`
    const rotated = rotating.map((_, i) => rotating[(i + round) % rotating.length]);

    // Split rotated into two halves
    const firstHalf = rotated.slice(0, half - 1);
    const secondHalf = rotated.slice(half - 1).reverse();

    left.push(...firstHalf);
    right.push(...secondHalf);

    for (let i = 0; i < half; i++) {
      const a = left[i];
      const b = right[i];
      // Alternate home/away based on round parity
      if (round % 2 === 0) {
        pairs.push([a, b]);
      } else {
        pairs.push([b, a]);
      }
    }

    rounds.push(pairs);
  }

  // Second half of season = reversed fixtures (swap home/away)
  const secondHalf = rounds.map(round =>
    round.map(([home, away]) => [away, home])
  );

  return [...rounds, ...secondHalf];
}

/* ============================================================
   DATE ASSIGNMENT
   Each matchday is 7 days apart starting from season start.
   Within a matchday, kickoffs are staggered across Sat/Sun.
   ============================================================ */
function addDays(dateStr, days) {
  const d = new Date(dateStr + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

/* Kickoff slots used to stagger fixtures within a matchday.
   Index by fixture position in the matchday array. */
const KICKOFF_SLOTS = [
  { dayOffset: 0, time: "12:30" }, // Saturday early
  { dayOffset: 0, time: "15:00" }, // Saturday 3pm
  { dayOffset: 0, time: "15:00" },
  { dayOffset: 0, time: "15:00" },
  { dayOffset: 0, time: "17:30" }, // Saturday late
  { dayOffset: 1, time: "14:00" }, // Sunday early
  { dayOffset: 1, time: "16:30" }, // Sunday late
  { dayOffset: 1, time: "19:00" }, // Sunday night
  { dayOffset: -1, time: "20:00" }, // Friday night
  { dayOffset: 2, time: "20:00" }, // Monday night
  { dayOffset: 0, time: "15:00" },
  { dayOffset: 0, time: "15:00" }
];

/* Distribute fixtures within a matchday across the kickoff slots. */
function pickSlot(matchdayIndex, fixtureIndex) {
  const slot = KICKOFF_SLOTS[fixtureIndex % KICKOFF_SLOTS.length];
  // For Championship (46 matchdays) we occasionally play midweek —
  // shift some rounds forward to keep the season realistic.
  const weekShift = matchdayIndex;
  return {
    dayOffset: slot.dayOffset,
    time: slot.time,
    week: weekShift
  };
}

/* ============================================================
   FIXTURE OBJECT FACTORY
   ============================================================ */
function makeFixtureId(leagueId, matchday, home, away) {
  return `${leagueId}-md${matchday}-${home}-${away}`;
}

function buildFixturesForLeague(leagueId, startDate) {
  const league = LEAGUES[leagueId];
  const clubIds = league.clubIds;

  const schedule = buildRoundRobin(clubIds);
  const fixtures = [];

  schedule.forEach((round, mdIdx) => {
    const matchday = mdIdx + 1;
    const weekDate = addDays(startDate, mdIdx * SEASON.DAYS_BETWEEN_MATCHDAYS);

    round.forEach(([home, away], fxIdx) => {
      const slot = pickSlot(mdIdx, fxIdx);
      const date = addDays(weekDate, slot.dayOffset);

      fixtures.push({
        id: makeFixtureId(leagueId, matchday, home, away),
        leagueId,
        matchday,
        date,
        time: slot.time,
        homeClubId: home,
        awayClubId: away,
        played: false,
        homeScore: null,
        awayScore: null
      });
    });
  });

  return fixtures;
}

/* ============================================================
   BUILD ALL FIXTURES FOR ALL LEAGUES
   ============================================================ */
export function buildSeasonFixtures(startDate = SEASON.DEFAULT_START) {
  const all = [];
  for (const leagueId of LEAGUE_ORDER) {
    const fixtures = buildFixturesForLeague(leagueId, startDate);
    all.push(...fixtures);
  }
  return all;
}

/* ============================================================
   QUERY HELPERS
   ============================================================ */

export function getFixturesByLeague(fixtures, leagueId) {
  return fixtures.filter(f => f.leagueId === leagueId);
}

export function getFixturesByMatchday(fixtures, leagueId, matchday) {
  return fixtures.filter(f => f.leagueId === leagueId && f.matchday === matchday);
}

export function getFixturesByClub(fixtures, clubId) {
  return fixtures.filter(f => f.homeClubId === clubId || f.awayClubId === clubId);
}

export function getFixturesByDate(fixtures, dateStr) {
  return fixtures.filter(f => f.date === dateStr);
}

export function getNextFixtureForClub(fixtures, clubId) {
  const clubFixtures = getFixturesByClub(fixtures, clubId)
    .filter(f => !f.played)
    .sort((a, b) => {
      if (a.date !== b.date) return a.date < b.date ? -1 : 1;
      return a.time < b.time ? -1 : 1;
    });
  return clubFixtures[0] || null;
}

export function getFixturesForClubOnDate(fixtures, clubId, dateStr) {
  return getFixturesByClub(fixtures, clubId).filter(f => f.date === dateStr);
}

/* ============================================================
   FIXTURE GROUPING (for the Fixtures screen UI)
   Groups fixtures by matchday within a league, sorted by date/time.
   ============================================================ */
export function groupFixturesByMatchday(fixtures, leagueId) {
  const leagueFixtures = getFixturesByLeague(fixtures, leagueId);
  const grouped = {};

  for (const f of leagueFixtures) {
    if (!grouped[f.matchday]) grouped[f.matchday] = [];
    grouped[f.matchday].push(f);
  }

  // Sort within each matchday by date, then time
  for (const md of Object.keys(grouped)) {
    grouped[md].sort((a, b) => {
      if (a.date !== b.date) return a.date < b.date ? -1 : 1;
      return a.time < b.time ? -1 : 1;
    });
  }

  return grouped;
}

/* ============================================================
   LEAGUE TABLE  (derived from played fixtures)
   ============================================================ */
export function buildLeagueTable(fixtures, leagueId) {
  const league = LEAGUES[leagueId];
  const rows = {};

  for (const clubId of league.clubIds) {
    rows[clubId] = {
      clubId,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0,
      form: []       // last 5: "W" / "D" / "L"
    };
  }

  const played = fixtures.filter(f => f.leagueId === leagueId && f.played);

  for (const f of played) {
    const home = rows[f.homeClubId];
    const away = rows[f.awayClubId];
    if (!home || !away) continue;

    home.played++;
    away.played++;
    home.gf += f.homeScore;
    home.ga += f.awayScore;
    away.gf += f.awayScore;
    away.ga += f.homeScore;

    if (f.homeScore > f.awayScore) {
      home.won++;     home.points += 3;  home.form.push("W");
      away.lost++;                         away.form.push("L");
    } else if (f.homeScore < f.awayScore) {
      away.won++;     away.points += 3;  away.form.push("W");
      home.lost++;                         home.form.push("L");
    } else {
      home.drawn++;   home.points += 1;  home.form.push("D");
      away.drawn++;   away.points += 1;  away.form.push("D");
    }
  }

  const table = Object.values(rows).map(r => ({
    ...r,
    gd: r.gf - r.ga,
    form: r.form.slice(-5)
  }));

  table.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.gd !== a.gd) return b.gd - a.gd;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.clubId.localeCompare(b.clubId);
  });

  table.forEach((row, i) => { row.position = i + 1; });

  return table;
}

/* ============================================================
   SEASON PROGRESS  (which matchday is the user's club on?)
   ============================================================ */
export function getUserClubMatchday(fixtures, clubId) {
  const clubFixtures = getFixturesByClub(fixtures, clubId)
    .sort((a, b) => a.matchday - b.matchday);
  const next = clubFixtures.find(f => !f.played);
  return next ? next.matchday : clubFixtures[clubFixtures.length - 1]?.matchday || 1;
}

export function isMatchdayComplete(fixtures, leagueId, matchday) {
  const mdFixtures = getFixturesByMatchday(fixtures, leagueId, matchday);
  return mdFixtures.length > 0 && mdFixtures.every(f => f.played);
}

/* ============================================================
   EXPORT INTERNALS FOR TESTING
   ============================================================ */
export const _internal = {
  buildRoundRobin,
  buildFixturesForLeague,
  addDays
};
