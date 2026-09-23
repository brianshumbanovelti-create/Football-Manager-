/* ============================================================
   FOOTBALL MANAGER — js/state.js
   Central game state object + initialization + mutations
   ============================================================ */

import { CLUBS, getClub, getClubsByLeague } from "../data/clubs.js";
import { PLAYERS, getPlayer, getPlayersByClub } from "../data/players.js";
import { LEAGUES, LEAGUE_ORDER, getLeagueOfClub } from "../data/leagues.js";
import {
  buildSeasonFixtures,
  buildLeagueTable,
  getFixturesByClub,
  getNextFixtureForClub
} from "../data/fixtures.js";
import {
  FATIGUE,
  MORALE,
  SAVE,
  SEASON,
  getBoardObjective
} from "./util/constants.js";
import { deepClone, makeId, todayIso, pick } from "./util/helpers.js";

/* ============================================================
   GAME STATE SINGLETON
   ============================================================ */
export const state = {
  // Meta
  version: SAVE.VERSION,
  createdAt: null,
  season: "2026-27",
  currentDate: SEASON.DEFAULT_START,
  matchday: 1,

  // User
  userClubId: null,
  userLeagueId: null,
  boardObjective: null,

  // Data snapshots (immutable data lives in /data, but runtime
  // values for players and clubs get layered here)
  playerStates: {},   // playerId -> { fatigue, morale, form, injury, transferRequest, playingTimePromise, minutesThisSeason, matchesThisSeason, matchdaysUnhappy }
  clubStates: {},     // clubId -> { budget, wageBudget, transferRequests: [] }

  // Schedule
  fixtures: [],

  // Dynamic
  inbox: [],          // array of inbox message objects
  transferOffers: [], // array of active offers (user outgoing + AI incoming)
  transferHistory: [],// completed transfers this season

  // Flags
  initialized: false,
  matchInProgress: false,
  lastSaveAt: null
};

/* ============================================================
   INITIALIZATION
   ============================================================ */

/**
 * Initialize a brand-new career with the given club.
 */
export function initNewGame(userClubId) {
  const club = getClub(userClubId);
  if (!club) throw new Error(`Unknown club: ${userClubId}`);

  state.version = SAVE.VERSION;
  state.createdAt = new Date().toISOString();
  state.season = "2026-27";
  state.currentDate = SEASON.DEFAULT_START;
  state.matchday = 1;

  state.userClubId = userClubId;
  state.userLeagueId = club.leagueId;
  state.boardObjective = getBoardObjective(club, LEAGUES[club.leagueId]);

  // --- Player runtime state ---
  state.playerStates = {};
  for (const player of Object.values(PLAYERS)) {
    state.playerStates[player.id] = {
      fatigue: FATIGUE.MAX,
      morale: MORALE.START,
      form: 0,
      injury: null,
      transferRequest: false,
      playingTimePromise: null,
      minutesThisSeason: 0,
      matchesThisSeason: 0,
      matchdaysUnhappy: 0,
      lastPlayedDate: null
    };
  }

  // --- Club runtime state ---
  state.clubStates = {};
  for (const club of Object.values(CLUBS)) {
    state.clubStates[club.id] = {
      budget: club.budget,
      wageBudget: club.wageBudget,
      transferRequests: [] // player IDs requesting to leave
    };
  }

  // --- Schedule ---
  state.fixtures = buildSeasonFixtures(SEASON.DEFAULT_START);

  // --- Dynamic ---
  state.inbox = [];
  state.transferOffers = [];
  state.transferHistory = [];

  state.initialized = true;
  state.matchInProgress = false;

  // Welcome message
  pushInbox({
    type: "board",
    title: `Welcome to ${club.name}`,
    body: `The board has set your objective for the ${state.season} season: ${state.boardObjective.label}.`,
    actionable: false
  });

  return state;
}

/* ============================================================
   ACCESSORS — combine static data + runtime state
   ============================================================ */

export function getUserClub() {
  return getClub(state.userClubId);
}

export function getUserLeague() {
  return LEAGUES[state.userLeagueId];
}

export function getUserSquad() {
  return getPlayersByClub(state.userClubId);
}

export function getUserSquadWithState() {
  return getUserSquad().map(p => ({
    ...p,
    ...state.playerStates[p.id]
  }));
}

export function getPlayerWithState(playerId) {
  const p = getPlayer(playerId);
  if (!p) return null;
  return { ...p, ...state.playerStates[playerId] };
}

export function getClubWithState(clubId) {
  const c = getClub(clubId);
  if (!c) return null;
  return { ...c, ...state.clubStates[clubId] };
}

export function getClubSquadWithState(clubId) {
  return getPlayersByClub(clubId).map(p => ({
    ...p,
    ...state.playerStates[p.id]
  }));
}

/* ============================================================
   FIXTURE HELPERS  (delegate to data/fixtures)
   ============================================================ */
export function getNextUserFixture() {
  return getNextFixtureForClub(state.fixtures, state.userClubId);
}

export function getUserFixtures() {
  return getFixturesByClub(state.fixtures, state.userClubId);
}

export function getUserLeagueTable() {
  return buildLeagueTable(state.fixtures, state.userLeagueId);
}

export function getLeagueTable(leagueId) {
  return buildLeagueTable(state.fixtures, leagueId);
}

/* ============================================================
   MATCHDAY ADVANCE
   Called after a matchday's fixtures complete (or after the user's
   own match completes for a simpler flow).
   ============================================================ */
export function advanceDateTo(dateStr) {
  if (dateStr > state.currentDate) {
    state.currentDate = dateStr;
  }
}

export function advanceMatchday() {
  state.matchday += 1;
  state.currentDate = addDaysStr(state.currentDate, SEASON.DAYS_BETWEEN_MATCHDAYS);
}

function addDaysStr(dateStr, days) {
  const d = new Date(dateStr + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

/* ============================================================
   PLAYER STATE MUTATIONS
   ============================================================ */

export function setPlayerFatigue(playerId, value) {
  const ps = state.playerStates[playerId];
  if (!ps) return;
  ps.fatigue = Math.max(FATIGUE.MIN, Math.min(FATIGUE.MAX, value));
}

export function adjustPlayerFatigue(playerId, delta) {
  const ps = state.playerStates[playerId];
  if (!ps) return;
  ps.fatigue = Math.max(FATIGUE.MIN, Math.min(FATIGUE.MAX, ps.fatigue + delta));
}

export function setPlayerMorale(playerId, value) {
  const ps = state.playerStates[playerId];
  if (!ps) return;
  ps.morale = Math.max(MORALE.MIN, Math.min(MORALE.MAX, value));
}

export function adjustPlayerMorale(playerId, delta) {
  const ps = state.playerStates[playerId];
  if (!ps) return;
  ps.morale = Math.max(MORALE.MIN, Math.min(MORALE.MAX, ps.morale + delta));
}

export function markPlayerPlayed(playerId, minutes, dateStr) {
  const ps = state.playerStates[playerId];
  if (!ps) return;
  ps.minutesThisSeason += minutes;
  ps.matchesThisSeason += 1;
  ps.lastPlayedDate = dateStr;
}

export function setPlayerInjury(playerId, injury) {
  const ps = state.playerStates[playerId];
  if (!ps) return;
  ps.injury = injury;
}

export function clearPlayerInjury(playerId) {
  const ps = state.playerStates[playerId];
  if (!ps) return;
  ps.injury = null;
}

export function setTransferRequest(playerId, value) {
  const ps = state.playerStates[playerId];
  if (!ps) return;
  ps.transferRequest = value;
  if (value) {
    const clubState = state.clubStates[getPlayer(playerId)?.clubId];
    if (clubState && !clubState.transferRequests.includes(playerId)) {
      clubState.transferRequests.push(playerId);
    }
  } else {
    const player = getPlayer(playerId);
    if (player) {
      const clubState = state.clubStates[player.clubId];
      if (clubState) {
        clubState.transferRequests = clubState.transferRequests.filter(id => id !== playerId);
      }
    }
  }
}

export function setPlayingTimePromise(playerId, promise) {
  const ps = state.playerStates[playerId];
  if (!ps) return;
  ps.playingTimePromise = promise;
}

export function clearPlayingTimePromise(playerId) {
  const ps = state.playerStates[playerId];
  if (!ps) return;
  ps.playingTimePromise = null;
}

/* ============================================================
   CLUB STATE MUTATIONS
   ============================================================ */

export function adjustClubBudget(clubId, delta) {
  const cs = state.clubStates[clubId];
  if (!cs) return;
  cs.budget += delta;
}

export function adjustClubWageBudget(clubId, delta) {
  const cs = state.clubStates[clubId];
  if (!cs) return;
  cs.wageBudget += delta;
}

/* ============================================================
   INBOX
   ============================================================ */

export function pushInbox(msg) {
  const message = {
    id: msg.id || makeId("msg"),
    type: msg.type || "info",          // "board" | "transfer" | "news" | "info"
    title: msg.title || "Message",
    body: msg.body || "",
    actionable: !!msg.actionable,
    actions: msg.actions || null,      // array of { label, action, payload }
    meta: msg.meta || null,            // arbitrary extra data (e.g. playerId)
    read: false,
    createdAt: state.currentDate,
    resolvedAt: null
  };
  state.inbox.unshift(message);
  return message;
}

export function markInboxRead(messageId) {
  const m = state.inbox.find(x => x.id === messageId);
  if (m) m.read = true;
}

export function resolveInboxMessage(messageId) {
  const m = state.inbox.find(x => x.id === messageId);
  if (m) {
    m.actionable = false;
    m.resolvedAt = state.currentDate;
  }
}

export function getUnreadInboxCount() {
  return state.inbox.filter(m => !m.read).length;
}

export function getActionableInbox() {
  return state.inbox.filter(m => m.actionable && !m.resolvedAt);
}

/* ============================================================
   TRANSFER OFFERS
   ============================================================ */

export function addTransferOffer(offer) {
  const full = {
    id: offer.id || makeId("offer"),
    type: offer.type,                       // "user-outgoing" | "ai-incoming"
    playerId: offer.playerId,
    fromClubId: offer.fromClubId,           // buying club
    toClubId: offer.toClubId,               // selling club
    fee: offer.fee,
    wageOffer: offer.wageOffer || null,     // for incoming offers, wage promised
    status: "pending",                      // "pending" | "accepted" | "rejected" | "countered"
    counterFee: null,
    createdAt: state.currentDate,
    resolvedAt: null
  };
  state.transferOffers.push(full);
  return full;
}

export function resolveTransferOffer(offerId, status, extra = {}) {
  const offer = state.transferOffers.find(o => o.id === offerId);
  if (!offer) return null;
  offer.status = status;
  offer.resolvedAt = state.currentDate;
  Object.assign(offer, extra);
  return offer;
}

export function getPendingOffersForClub(clubId) {
  return state.transferOffers.filter(o =>
    o.status === "pending" && (o.fromClubId === clubId || o.toClubId === clubId)
  );
}

/* ============================================================
   TRANSFER EXECUTION
   Moves a player from one club to another in the runtime state.
   NOTE: The static PLAYERS data still holds the original clubId.
   To move a player permanently we mutate state.playerStates with a
   `currentClubId` override.
   ============================================================ */
export function executeTransfer(playerId, fromClubId, toClubId, fee) {
  const player = getPlayer(playerId);
  if (!player) return null;

  // Store club override in player state
  const ps = state.playerStates[playerId];
  if (!ps) return null;
  ps.currentClubId = toClubId;

  // Money
  const fromState = state.clubStates[fromClubId];
  const toState = state.clubStates[toClubId];
  if (toState) toState.budget -= fee;
  if (fromState) fromState.budget += fee;

  // Reset fitness/morale on move
  ps.morale = Math.max(MORALE.MIN, Math.min(MORALE.MAX, 70));
  ps.transferRequest = false;
  ps.playingTimePromise = null;

  // Remove from transfer request list
  if (fromState) {
    fromState.transferRequests = fromState.transferRequests.filter(id => id !== playerId);
  }

  // Record history
  state.transferHistory.push({
    playerId,
    fromClubId,
    toClubId,
    fee,
    date: state.currentDate
  });

  return ps;
}

/* ============================================================
   EFFECTIVE CLUB FOR A PLAYER
   Accounts for runtime overrides (transfers).
   ============================================================ */
export function getEffectiveClubId(playerId) {
  const ps = state.playerStates[playerId];
  if (ps && ps.currentClubId) return ps.currentClubId;
  const player = getPlayer(playerId);
  return player ? player.clubId : null;
}

export function getEffectiveSquad(clubId) {
  const all = Object.values(PLAYERS);
  return all.filter(p => getEffectiveClubId(p.id) === clubId);
}

/* ============================================================
   RESET
   ============================================================ */
export function resetState() {
  state.version = SAVE.VERSION;
  state.createdAt = null;
  state.season = "2026-27";
  state.currentDate = SEASON.DEFAULT_START;
  state.matchday = 1;
  state.userClubId = null;
  state.userLeagueId = null;
  state.boardObjective = null;
  state.playerStates = {};
  state.clubStates = {};
  state.fixtures = [];
  state.inbox = [];
  state.transferOffers = [];
  state.transferHistory = [];
  state.initialized = false;
  state.matchInProgress = false;
  state.lastSaveAt = null;
}

/* ============================================================
   SERIALIZATION
   ============================================================ */
export function serializeState() {
  return deepClone({
    version: state.version,
    createdAt: state.createdAt,
    season: state.season,
    currentDate: state.currentDate,
    matchday: state.matchday,
    userClubId: state.userClubId,
    userLeagueId: state.userLeagueId,
    boardObjective: state.boardObjective,
    playerStates: state.playerStates,
    clubStates: state.clubStates,
    fixtures: state.fixtures,
    inbox: state.inbox,
    transferOffers: state.transferOffers,
    transferHistory: state.transferHistory,
    lastSaveAt: state.lastSaveAt
  });
}

export function hydrateState(saved) {
  if (!saved || typeof saved !== "object") return false;
  if (saved.version !== SAVE.VERSION) {
    console.warn(`Save version mismatch (${saved.version} vs ${SAVE.VERSION})`);
    // For v1, accept if version is same; future migrations go here.
    if (saved.version > SAVE.VERSION) return false;
  }

  state.version = saved.version;
  state.createdAt = saved.createdAt || new Date().toISOString();
  state.season = saved.season || "2026-27";
  state.currentDate = saved.currentDate || SEASON.DEFAULT_START;
  state.matchday = saved.matchday || 1;
  state.userClubId = saved.userClubId || null;
  state.userLeagueId = saved.userLeagueId || null;
  state.boardObjective = saved.boardObjective || null;
  state.playerStates = saved.playerStates || {};
  state.clubStates = saved.clubStates || {};
  state.fixtures = saved.fixtures || [];
  state.inbox = saved.inbox || [];
  state.transferOffers = saved.transferOffers || [];
  state.transferHistory = saved.transferHistory || [];
  state.lastSaveAt = saved.lastSaveAt || null;
  state.initialized = !!(state.userClubId && state.fixtures.length > 0);
  state.matchInProgress = false;

  return true;
}
