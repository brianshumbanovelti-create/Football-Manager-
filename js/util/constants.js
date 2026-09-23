/* ============================================================
   FOOTBALL MANAGER — js/util/constants.js
   Formations, tactical styles, position weights, system constants
   ============================================================ */

/* ============================================================
   FORMATIONS
   Each formation defines slot positions in a 1-11 order:
   GK, then defense → midfield → attack.
   `pos` is the player's natural position slot for strength calc.
   `row` is 0-3 for pitch-row grouping (0=GK, 1=DEF, 2=MID, 3=FWD)
   `x`, `y` are normalized pitch coords (0-1) for potential visual.
   ============================================================ */
export const FORMATIONS = {
  "4-4-2": {
    id: "4-4-2",
    name: "4-4-2",
    slots: [
      { idx: 1,  pos: "GK",  row: 0, x: 0.50, y: 0.05 },
      { idx: 2,  pos: "RB",  row: 1, x: 0.85, y: 0.25 },
      { idx: 3,  pos: "CB",  row: 1, x: 0.60, y: 0.20 },
      { idx: 4,  pos: "CB",  row: 1, x: 0.40, y: 0.20 },
      { idx: 5,  pos: "LB",  row: 1, x: 0.15, y: 0.25 },
      { idx: 6,  pos: "RW",  row: 2, x: 0.85, y: 0.50 },
      { idx: 7,  pos: "CM",  row: 2, x: 0.60, y: 0.50 },
      { idx: 8,  pos: "CM",  row: 2, x: 0.40, y: 0.50 },
      { idx: 9,  pos: "LW",  row: 2, x: 0.15, y: 0.50 },
      { idx: 10, pos: "ST",  row: 3, x: 0.60, y: 0.80 },
      { idx: 11, pos: "ST",  row: 3, x: 0.40, y: 0.80 }
    ]
  },

  "4-3-3": {
    id: "4-3-3",
    name: "4-3-3",
    slots: [
      { idx: 1,  pos: "GK",  row: 0, x: 0.50, y: 0.05 },
      { idx: 2,  pos: "RB",  row: 1, x: 0.85, y: 0.25 },
      { idx: 3,  pos: "CB",  row: 1, x: 0.60, y: 0.20 },
      { idx: 4,  pos: "CB",  row: 1, x: 0.40, y: 0.20 },
      { idx: 5,  pos: "LB",  row: 1, x: 0.15, y: 0.25 },
      { idx: 6,  pos: "CDM", row: 2, x: 0.50, y: 0.42 },
      { idx: 7,  pos: "CM",  row: 2, x: 0.70, y: 0.52 },
      { idx: 8,  pos: "CM",  row: 2, x: 0.30, y: 0.52 },
      { idx: 9,  pos: "RW",  row: 3, x: 0.82, y: 0.78 },
      { idx: 10, pos: "ST",  row: 3, x: 0.50, y: 0.82 },
      { idx: 11, pos: "LW",  row: 3, x: 0.18, y: 0.78 }
    ]
  },

  "4-2-3-1": {
    id: "4-2-3-1",
    name: "4-2-3-1",
    slots: [
      { idx: 1,  pos: "GK",  row: 0, x: 0.50, y: 0.05 },
      { idx: 2,  pos: "RB",  row: 1, x: 0.85, y: 0.25 },
      { idx: 3,  pos: "CB",  row: 1, x: 0.60, y: 0.20 },
      { idx: 4,  pos: "CB",  row: 1, x: 0.40, y: 0.20 },
      { idx: 5,  pos: "LB",  row: 1, x: 0.15, y: 0.25 },
      { idx: 6,  pos: "CDM", row: 2, x: 0.62, y: 0.42 },
      { idx: 7,  pos: "CDM", row: 2, x: 0.38, y: 0.42 },
      { idx: 8,  pos: "RW",  row: 2, x: 0.82, y: 0.62 },
      { idx: 9,  pos: "CAM", row: 2, x: 0.50, y: 0.62 },
      { idx: 10, pos: "LW",  row: 2, x: 0.18, y: 0.62 },
      { idx: 11, pos: "ST",  row: 3, x: 0.50, y: 0.85 }
    ]
  },

  "3-5-2": {
    id: "3-5-2",
    name: "3-5-2",
    slots: [
      { idx: 1,  pos: "GK",  row: 0, x: 0.50, y: 0.05 },
      { idx: 2,  pos: "CB",  row: 1, x: 0.70, y: 0.22 },
      { idx: 3,  pos: "CB",  row: 1, x: 0.50, y: 0.18 },
      { idx: 4,  pos: "CB",  row: 1, x: 0.30, y: 0.22 },
      { idx: 5,  pos: "RB",  row: 2, x: 0.88, y: 0.48 },
      { idx: 6,  pos: "CM",  row: 2, x: 0.65, y: 0.48 },
      { idx: 7,  pos: "CDM", row: 2, x: 0.50, y: 0.42 },
      { idx: 8,  pos: "CM",  row: 2, x: 0.35, y: 0.48 },
      { idx: 9,  pos: "LB",  row: 2, x: 0.12, y: 0.48 },
      { idx: 10, pos: "ST",  row: 3, x: 0.60, y: 0.80 },
      { idx: 11, pos: "ST",  row: 3, x: 0.40, y: 0.80 }
    ]
  },

  "5-3-2": {
    id: "5-3-2",
    name: "5-3-2",
    slots: [
      { idx: 1,  pos: "GK",  row: 0, x: 0.50, y: 0.05 },
      { idx: 2,  pos: "RB",  row: 1, x: 0.88, y: 0.28 },
      { idx: 3,  pos: "CB",  row: 1, x: 0.68, y: 0.20 },
      { idx: 4,  pos: "CB",  row: 1, x: 0.50, y: 0.18 },
      { idx: 5,  pos: "CB",  row: 1, x: 0.32, y: 0.20 },
      { idx: 6,  pos: "LB",  row: 1, x: 0.12, y: 0.28 },
      { idx: 7,  pos: "CM",  row: 2, x: 0.68, y: 0.52 },
      { idx: 8,  pos: "CDM", row: 2, x: 0.50, y: 0.48 },
      { idx: 9,  pos: "CM",  row: 2, x: 0.32, y: 0.52 },
      { idx: 10, pos: "ST",  row: 3, x: 0.60, y: 0.82 },
      { idx: 11, pos: "ST",  row: 3, x: 0.40, y: 0.82 }
    ]
  },

  "4-5-1": {
    id: "4-5-1",
    name: "4-5-1",
    slots: [
      { idx: 1,  pos: "GK",  row: 0, x: 0.50, y: 0.05 },
      { idx: 2,  pos: "RB",  row: 1, x: 0.85, y: 0.25 },
      { idx: 3,  pos: "CB",  row: 1, x: 0.60, y: 0.20 },
      { idx: 4,  pos: "CB",  row: 1, x: 0.40, y: 0.20 },
      { idx: 5,  pos: "LB",  row: 1, x: 0.15, y: 0.25 },
      { idx: 6,  pos: "RW",  row: 2, x: 0.85, y: 0.55 },
      { idx: 7,  pos: "CM",  row: 2, x: 0.65, y: 0.48 },
      { idx: 8,  pos: "CDM", row: 2, x: 0.50, y: 0.42 },
      { idx: 9,  pos: "CM",  row: 2, x: 0.35, y: 0.48 },
      { idx: 10, pos: "LW",  row: 2, x: 0.15, y: 0.55 },
      { idx: 11, pos: "ST",  row: 3, x: 0.50, y: 0.85 }
    ]
  }
};

export const FORMATION_IDS = Object.keys(FORMATIONS);
export const DEFAULT_FORMATION = "4-3-3";

/* ============================================================
   TACTICAL STYLES
   Shallow by design — three options only.
   ============================================================ */
export const TACTICAL_STYLES = {
  attacking: {
    id: "attacking",
    name: "Attacking",
    // Attack multiplier (more goalscoring chance)
    attackMod: 1.20,
    // Defence multiplier (leakier at the back)
    defenceMod: 0.85,
    // Fatigue cost per match
    fatigueCost: 2.5,
    // Card risk multiplier
    cardRisk: 1.05
  },
  balanced: {
    id: "balanced",
    name: "Balanced",
    attackMod: 1.00,
    defenceMod: 1.00,
    fatigueCost: 2.0,
    cardRisk: 1.00
  },
  defensive: {
    id: "defensive",
    name: "Defensive",
    attackMod: 0.80,
    defenceMod: 1.20,
    fatigueCost: 1.5,
    cardRisk: 1.10
  }
};

export const STYLE_IDS = Object.keys(TACTICAL_STYLES);
export const DEFAULT_STYLE = "balanced";

/* ============================================================
   POSITION WEIGHTS
   How well a player performs when asked to play out of position.
   Index [natural][assigned] = multiplier.
   Only define the fallbacks we care about; missing = 0.65 default.
   ============================================================ */
export const POSITION_FIT = {
  GK:  { GK: 1.00, CB: 0.40, LB: 0.35, RB: 0.35, CDM: 0.30, CM: 0.25, CAM: 0.25, LW: 0.20, RW: 0.20, ST: 0.20 },
  CB:  { CB: 1.00, CDM: 0.80, LB: 0.75, RB: 0.75, CM: 0.70, CAM: 0.55, LW: 0.50, RW: 0.50, ST: 0.45, GK: 0.05 },
  LB:  { LB: 1.00, RB: 0.80, CB: 0.75, CDM: 0.65, CM: 0.60, LW: 0.75, RW: 0.55, CAM: 0.55, ST: 0.45, GK: 0.05 },
  RB:  { RB: 1.00, LB: 0.80, CB: 0.75, CDM: 0.65, CM: 0.60, RW: 0.75, LW: 0.55, CAM: 0.55, ST: 0.45, GK: 0.05 },
  CDM: { CDM: 1.00, CM: 0.90, CB: 0.80, CAM: 0.75, LB: 0.65, RB: 0.65, LW: 0.55, RW: 0.55, ST: 0.50, GK: 0.05 },
  CM:  { CM: 1.00, CDM: 0.90, CAM: 0.90, CB: 0.70, LB: 0.65, RB: 0.65, LW: 0.70, RW: 0.70, ST: 0.65, GK: 0.05 },
  CAM: { CAM: 1.00, CM: 0.90, LW: 0.80, RW: 0.80, ST: 0.80, CDM: 0.75, LB: 0.55, RB: 0.55, CB: 0.50, GK: 0.05 },
  LW:  { LW: 1.00, RW: 0.85, CAM: 0.80, ST: 0.75, CM: 0.65, LB: 0.70, RB: 0.55, CDM: 0.55, CB: 0.50, GK: 0.05 },
  RW:  { RW: 1.00, LW: 0.85, CAM: 0.80, ST: 0.75, CM: 0.65, RB: 0.70, LB: 0.55, CDM: 0.55, CB: 0.50, GK: 0.05 },
  ST:  { ST: 1.00, CAM: 0.80, LW: 0.75, RW: 0.75, CM: 0.65, CDM: 0.55, LB: 0.45, RB: 0.45, CB: 0.45, GK: 0.05 }
};

export const ALL_POSITIONS = ["GK", "CB", "LB", "RB", "CDM", "CM", "CAM", "LW", "RW", "ST"];

/* ============================================================
   FATIGUE
   ============================================================ */
export const FATIGUE = {
  MAX: 100,
  MIN: 0,
  MATCH_BASE_COST: 2.0,        // per 90 minutes (before style modifier)
  RECOVERY_FULL_REST: 15,      // per day, no match
  RECOVERY_BENCH: 8,           // per day, unused sub
  RECOVERY_PARTIAL: 5,         // per day, played <30 mins
  // Status thresholds (freshness value)
  STATUS: [
    { min: 90, label: "Fresh" },
    { min: 75, label: "Good" },
    { min: 60, label: "Okay" },
    { min: 40, label: "Tired" },
    { min: 20, label: "Exhausted" },
    { min: 0,  label: "Critical" }
  ],
  // Performance multiplier by freshness
  PERFORMANCE: [
    { min: 80, mult: 1.00 },
    { min: 60, mult: 0.95 },
    { min: 40, mult: 0.85 },
    { min: 20, mult: 0.70 },
    { min: 0,  mult: 0.50 }
  ]
};

/* ============================================================
   MORALE
   ============================================================ */
export const MORALE = {
  MAX: 100,
  MIN: 0,
  START: 75,
  WIN_BONUS: 1,
  DRAW_CHANGE: 0,
  LOSS_PENALTY: -1,
  GOAL_BONUS: 2,
  ASSIST_BONUS: 1,
  LOW_PLAYING_TIME_PENALTY: -2,   // per match, if minutes < 30% of available
  REJECT_REQUEST_PENALTY: -15,
  REJECT_WITH_PROMISE_BONUS: 10,
  PROMISE_BROKEN_PENALTY: -25,
  PROMISE_KEPT_BONUS: 15,
  REQUEST_THRESHOLD: 30,          // morale below this for 3+ matchdays
  STATUS: [
    { min: 80, label: "Happy" },
    { min: 60, label: "Content" },
    { min: 40, label: "Concerned" },
    { min: 20, label: "Unhappy" },
    { min: 0,  label: "Miserable" }
  ],
  PERFORMANCE: [
    { min: 80, mult: 1.03 },
    { min: 60, mult: 1.00 },
    { min: 40, mult: 0.97 },
    { min: 20, mult: 0.93 },
    { min: 0,  mult: 0.88 }
  ]
};

/* ============================================================
   MATCH ENGINE
   ============================================================ */
export const MATCH = {
  DURATION: 90,
  BASE_XG_PER_TEAM: 1.35,       // league-average goals per team per match
  HOME_ADVANTAGE: 1.15,
  REVEAL_DELAY_MS: 1600,        // ms between event reveals
  HALF_TIME_MINUTE: 45,
  MAX_SUBS: 5,
  // Goal probability per minute = xG / 90, then Poisson-ish noise
  MIN_EVENT_GAP: 3,             // minimum minutes between events for same team
  // Rating baseline
  RATING_START: 6.0,
  RATING_GOAL: 1.2,
  RATING_ASSIST: 0.8,
  RATING_YELLOW: -0.3,
  RATING_RED: -1.5,
  RATING_WIN_BONUS: 0.4,
  RATING_DRAW_BONUS: 0.0,
  RATING_LOSS_PENALTY: -0.4
};

/* ============================================================
   TRANSFERS
   ============================================================ */
export const TRANSFERS = {
  WINDOWS: [
    { id: "summer", name: "Summer Window", startMatchday: 0, endMatchday: 0 }, // pre-season
    { id: "winter", name: "Winter Window", startMatchday: 19, endMatchday: 20 }
  ],
  AI_OFFER_CHANCE_PER_DAY: 0.08,   // chance an AI club bids for one of your players per day
  AI_MARKET_ACTIVITY_PER_DAY: 0.25, // chance AI clubs make any moves per day
  COUNTER_MARKUP: 1.15,            // AI counter offer = 115% of user offer if too low
  MIN_OFFER_RATIO: 0.70            // offer below 70% of value = auto-reject
};

/* ============================================================
   BOARD OBJECTIVES
   Based on club rating and league tier.
   ============================================================ */
export const BOARD_OBJECTIVES = {
  // Top-flight
  title_winner:   { minRating: 85, label: "Win the league title" },
  top_four:       { minRating: 78, label: "Qualify for the Champions League (Top 4)" },
  top_half:       { minRating: 70, label: "Finish in the top half" },
  survival:       { minRating: 0,  label: "Avoid relegation" },
  // Championship (tier 2)
  promotion_auto: { minRating: 72, label: "Win promotion (top 2)" },
  promotion_push: { minRating: 66, label: "Push for promotion (playoffs)" },
  championship_mid:{minRating: 0,  label: "Finish mid-table" }
};

/* ============================================================
   SEASON / CALENDAR
   ============================================================ */
export const SEASON = {
  DEFAULT_START: "2026-08-01",
  DEFAULT_END: "2027-05-31",
  MATCHDAYS_PER_SEASON: 38,     // PL
  MATCHDAYS_BY_LEAGUE: {
    "premier-league": 38,
    "la-liga": 38,
    "ligue-1": 34,
    "serie-a": 38,
    "championship": 46
  },
  DAYS_BETWEEN_MATCHDAYS: 7
};

/* ============================================================
   UI
   ============================================================ */
export const UI = {
  ACCENT: "#E91E63",
  EVENTS_FEED_MAX: 20,
  TOAST_DURATION_MS: 2500
};

/* ============================================================
   SAVE
   ============================================================ */
export const SAVE = {
  KEY: "football-manager-save",
  VERSION: 1
};

/* ============================================================
   Helpers to look up config
   ============================================================ */
export function getFormation(id) {
  return FORMATIONS[id] || FORMATIONS[DEFAULT_FORMATION];
}

export function getStyle(id) {
  return TACTICAL_STYLES[id] || TACTICAL_STYLES[DEFAULT_STYLE];
}

export function getFatigueStatus(value) {
  for (const s of FATIGUE.STATUS) {
    if (value >= s.min) return s.label;
  }
  return FATIGUE.STATUS[FATIGUE.STATUS.length - 1].label;
}

export function getFatigueMultiplier(value) {
  for (const s of FATIGUE.PERFORMANCE) {
    if (value >= s.min) return s.mult;
  }
  return 0.5;
}

export function getMoraleStatus(value) {
  for (const s of MORALE.STATUS) {
    if (value >= s.min) return s.label;
  }
  return MORALE.STATUS[MORALE.STATUS.length - 1].label;
}

export function getMoraleMultiplier(value) {
  for (const s of MORALE.PERFORMANCE) {
    if (value >= s.min) return s.mult;
  }
  return 0.88;
}

export function getPositionFit(natural, assigned) {
  const row = POSITION_FIT[natural];
  if (!row) return 0.65;
  return row[assigned] !== undefined ? row[assigned] : 0.65;
}

export function getBoardObjective(club, league) {
  if (league.tier === 2) {
    if (club.rating >= BOARD_OBJECTIVES.promotion_auto.minRating) return BOARD_OBJECTIVES.promotion_auto;
    if (club.rating >= BOARD_OBJECTIVES.promotion_push.minRating) return BOARD_OBJECTIVES.promotion_push;
    return BOARD_OBJECTIVES.championship_mid;
  }
  if (club.rating >= BOARD_OBJECTIVES.title_winner.minRating) return BOARD_OBJECTIVES.title_winner;
  if (club.rating >= BOARD_OBJECTIVES.top_four.minRating) return BOARD_OBJECTIVES.top_four;
  if (club.rating >= BOARD_OBJECTIVES.top_half.minRating) return BOARD_OBJECTIVES.top_half;
  return BOARD_OBJECTIVES.survival;
}
