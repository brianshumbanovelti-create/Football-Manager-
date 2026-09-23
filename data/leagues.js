/* ============================================================
   FOOTBALL MANAGER — data/leagues.js
   Five leagues. Club IDs must match data/clubs.js
   ============================================================ */

export const LEAGUES = {
  "premier-league": {
    id: "premier-league",
    name: "Premier League",
    shortName: "PL",
    country: "England",
    tier: 1,
    season: "2026-27",
    // 20 clubs
    clubIds: [
      "arsenal",
      "aston-villa",
      "bournemouth",
      "brentford",
      "brighton",
      "burnley",
      "chelsea",
      "crystal-palace",
      "everton",
      "fulham",
      "leeds-united",
      "liverpool",
      "man-city",
      "man-united",
      "newcastle",
      "nottingham-forest",
      "sunderland",
      "tottenham",
      "west-ham",
      "wolves"
    ]
  },

  "la-liga": {
    id: "la-liga",
    name: "La Liga",
    shortName: "LaLiga",
    country: "Spain",
    tier: 1,
    season: "2026-27",
    // 20 clubs
    clubIds: [
      "alaves",
      "athletic-bilbao",
      "atletico-madrid",
      "barcelona",
      "celta-vigo",
      "elche",
      "espanyol",
      "getafe",
      "girona",
      "levante",
      "mallorca",
      "osasuna",
      "rayo-vallecano",
      "real-betis",
      "real-madrid",
      "real-oviedo",
      "real-sociedad",
      "sevilla",
      "valencia",
      "villarreal"
    ]
  },

  "ligue-1": {
    id: "ligue-1",
    name: "Ligue 1",
    shortName: "L1",
    country: "France",
    tier: 1,
    season: "2026-27",
    // 18 clubs
    clubIds: [
      "angers",
      "auxerre",
      "brest",
      "le-havre",
      "lens",
      "lille",
      "lorient",
      "lyon",
      "marseille",
      "metz",
      "monaco",
      "nantes",
      "nice",
      "paris-fc",
      "paris-sg",
      "rennes",
      "strasbourg",
      "toulouse"
    ]
  },

  "serie-a": {
    id: "serie-a",
    name: "Serie A",
    shortName: "Serie A",
    country: "Italy",
    tier: 1,
    season: "2026-27",
    // 20 clubs
    clubIds: [
      "atalanta",
      "bologna",
      "cagliari",
      "como",
      "cremonese",
      "fiorentina",
      "genoa",
      "hellas-verona",
      "inter",
      "juventus",
      "lazio",
      "lecce",
      "milan",
      "napoli",
      "parma",
      "pisa",
      "roma",
      "sassuolo",
      "torino",
      "udinese"
    ]
  },

  "championship": {
    id: "championship",
    name: "EFL Championship",
    shortName: "Championship",
    country: "England",
    tier: 2,
    season: "2026-27",
    // 24 clubs
    clubIds: [
      "birmingham",
      "blackburn",
      "bristol-city",
      "charlton",
      "coventry",
      "derby",
      "hull-city",
      "ipswich",
      "leicester",
      "middlesbrough",
      "millwall",
      "norwich",
      "oxford-united",
      "portsmouth",
      "preston",
      "qpr",
      "sheffield-united",
      "sheffield-wednesday",
      "southampton",
      "stoke",
      "swansea",
      "watford",
      "west-brom",
      "wrexham"
    ]
  }
};

/* Order used by the fixtures/table tab bars */
export const LEAGUE_ORDER = [
  "premier-league",
  "la-liga",
  "ligue-1",
  "serie-a",
  "championship"
];

/* Helper: return league object by id */
export function getLeague(id) {
  return LEAGUES[id] || null;
}

/* Helper: return array of league objects in tab order */
export function getLeaguesInOrder() {
  return LEAGUE_ORDER.map(id => LEAGUES[id]);
}

/* Helper: find which league a club belongs to */
export function getLeagueOfClub(clubId) {
  for (const id of LEAGUE_ORDER) {
    if (LEAGUES[id].clubIds.includes(clubId)) return LEAGUES[id];
  }
  return null;
       }
