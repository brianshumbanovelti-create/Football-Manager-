/* ============================================================
   FOOTBALL MANAGER — data/clubs.js
   102 clubs across 5 leagues. IDs match data/leagues.js
   rating:     1-100, drives AI strength + board expectations
   reputation: 1-100, affects transfer appeal
   budget:     transfer budget (£)
   wageBudget: weekly wage budget (£)
   ============================================================ */

export const CLUBS = {

  /* ==========================================================
     PREMIER LEAGUE
     ========================================================== */
  "arsenal": {
    id: "arsenal", name: "Arsenal", shortName: "Arsenal",
    leagueId: "premier-league", rating: 86, reputation: 90,
    stadium: "Emirates Stadium", budget: 120000000, wageBudget: 3200000
  },
  "aston-villa": {
    id: "aston-villa", name: "Aston Villa", shortName: "Villa",
    leagueId: "premier-league", rating: 79, reputation: 78,
    stadium: "Villa Park", budget: 45000000, wageBudget: 2100000
  },
  "bournemouth": {
    id: "bournemouth", name: "Bournemouth", shortName: "Bournemouth",
    leagueId: "premier-league", rating: 73, reputation: 68,
    stadium: "Vitality Stadium", budget: 35000000, wageBudget: 1100000
  },
  "brentford": {
    id: "brentford", name: "Brentford", shortName: "Brentford",
    leagueId: "premier-league", rating: 74, reputation: 70,
    stadium: "Gtech Community Stadium", budget: 30000000, wageBudget: 1050000
  },
  "brighton": {
    id: "brighton", name: "Brighton & Hove Albion", shortName: "Brighton",
    leagueId: "premier-league", rating: 77, reputation: 75,
    stadium: "Amex Stadium", budget: 55000000, wageBudget: 1400000
  },
  "burnley": {
    id: "burnley", name: "Burnley", shortName: "Burnley",
    leagueId: "premier-league", rating: 68, reputation: 63,
    stadium: "Turf Moor", budget: 20000000, wageBudget: 750000
  },
  "chelsea": {
    id: "chelsea", name: "Chelsea", shortName: "Chelsea",
    leagueId: "premier-league", rating: 84, reputation: 89,
    stadium: "Stamford Bridge", budget: 130000000, wageBudget: 3400000
  },
  "crystal-palace": {
    id: "crystal-palace", name: "Crystal Palace", shortName: "Palace",
    leagueId: "premier-league", rating: 74, reputation: 71,
    stadium: "Selhurst Park", budget: 35000000, wageBudget: 1300000
  },
  "everton": {
    id: "everton", name: "Everton", shortName: "Everton",
    leagueId: "premier-league", rating: 73, reputation: 76,
    stadium: "Hill Dickinson Stadium", budget: 30000000, wageBudget: 1500000
  },
  "fulham": {
    id: "fulham", name: "Fulham", shortName: "Fulham",
    leagueId: "premier-league", rating: 74, reputation: 70,
    stadium: "Craven Cottage", budget: 35000000, wageBudget: 1300000
  },
  "leeds-united": {
    id: "leeds-united", name: "Leeds United", shortName: "Leeds",
    leagueId: "premier-league", rating: 70, reputation: 72,
    stadium: "Elland Road", budget: 30000000, wageBudget: 1100000
  },
  "liverpool": {
    id: "liverpool", name: "Liverpool", shortName: "Liverpool",
    leagueId: "premier-league", rating: 87, reputation: 92,
    stadium: "Anfield", budget: 140000000, wageBudget: 3600000
  },
  "man-city": {
    id: "man-city", name: "Manchester City", shortName: "Man City",
    leagueId: "premier-league", rating: 88, reputation: 94,
    stadium: "Etihad Stadium", budget: 150000000, wageBudget: 4000000
  },
  "man-united": {
    id: "man-united", name: "Manchester United", shortName: "Man United",
    leagueId: "premier-league", rating: 82, reputation: 93,
    stadium: "Old Trafford", budget: 120000000, wageBudget: 3500000
  },
  "newcastle": {
    id: "newcastle", name: "Newcastle United", shortName: "Newcastle",
    leagueId: "premier-league", rating: 81, reputation: 82,
    stadium: "St James' Park", budget: 90000000, wageBudget: 2200000
  },
  "nottingham-forest": {
    id: "nottingham-forest", name: "Nottingham Forest", shortName: "Forest",
    leagueId: "premier-league", rating: 74, reputation: 70,
    stadium: "The City Ground", budget: 40000000, wageBudget: 1500000
  },
  "sunderland": {
    id: "sunderland", name: "Sunderland", shortName: "Sunderland",
    leagueId: "premier-league", rating: 70, reputation: 70,
    stadium: "Stadium of Light", budget: 35000000, wageBudget: 1100000
  },
  "tottenham": {
    id: "tottenham", name: "Tottenham Hotspur", shortName: "Spurs",
    leagueId: "premier-league", rating: 81, reputation: 85,
    stadium: "Tottenham Hotspur Stadium", budget: 90000000, wageBudget: 2600000
  },
  "west-ham": {
    id: "west-ham", name: "West Ham United", shortName: "West Ham",
    leagueId: "premier-league", rating: 75, reputation: 76,
    stadium: "London Stadium", budget: 45000000, wageBudget: 1800000
  },
  "wolves": {
    id: "wolves", name: "Wolverhampton Wanderers", shortName: "Wolves",
    leagueId: "premier-league", rating: 72, reputation: 70,
    stadium: "Molineux", budget: 30000000, wageBudget: 1300000
  },

  /* ==========================================================
     LA LIGA
     ========================================================== */
  "alaves": {
    id: "alaves", name: "Deportivo Alavés", shortName: "Alavés",
    leagueId: "la-liga", rating: 68, reputation: 60,
    stadium: "Mendizorroza", budget: 12000000, wageBudget: 500000
  },
  "athletic-bilbao": {
    id: "athletic-bilbao", name: "Athletic Club", shortName: "Athletic",
    leagueId: "la-liga", rating: 79, reputation: 80,
    stadium: "San Mamés", budget: 40000000, wageBudget: 1500000
  },
  "atletico-madrid": {
    id: "atletico-madrid", name: "Atlético Madrid", shortName: "Atleti",
    leagueId: "la-liga", rating: 85, reputation: 88,
    stadium: "Metropolitano", budget: 100000000, wageBudget: 3200000
  },
  "barcelona": {
    id: "barcelona", name: "FC Barcelona", shortName: "Barça",
    leagueId: "la-liga", rating: 86, reputation: 94,
    stadium: "Spotify Camp Nou", budget: 90000000, wageBudget: 3800000
  },
  "celta-vigo": {
    id: "celta-vigo", name: "Celta Vigo", shortName: "Celta",
    leagueId: "la-liga", rating: 71, reputation: 65,
    stadium: "Balaídos", budget: 15000000, wageBudget: 650000
  },
  "elche": {
    id: "elche", name: "Elche CF", shortName: "Elche",
    leagueId: "la-liga", rating: 66, reputation: 58,
    stadium: "Martínez Valero", budget: 10000000, wageBudget: 420000
  },
  "espanyol": {
    id: "espanyol", name: "RCD Espanyol", shortName: "Espanyol",
    leagueId: "la-liga", rating: 70, reputation: 65,
    stadium: "RCDE Stadium", budget: 15000000, wageBudget: 620000
  },
  "getafe": {
    id: "getafe", name: "Getafe CF", shortName: "Getafe",
    leagueId: "la-liga", rating: 70, reputation: 62,
    stadium: "Coliseum", budget: 14000000, wageBudget: 600000
  },
  "girona": {
    id: "girona", name: "Girona FC", shortName: "Girona",
    leagueId: "la-liga", rating: 72, reputation: 66,
    stadium: "Montilivi", budget: 20000000, wageBudget: 700000
  },
  "levante": {
    id: "levante", name: "Levante UD", shortName: "Levante",
    leagueId: "la-liga", rating: 66, reputation: 58,
    stadium: "Ciutat de València", budget: 10000000, wageBudget: 420000
  },
  "mallorca": {
    id: "mallorca", name: "RCD Mallorca", shortName: "Mallorca",
    leagueId: "la-liga", rating: 70, reputation: 62,
    stadium: "Son Moix", budget: 14000000, wageBudget: 600000
  },
  "osasuna": {
    id: "osasuna", name: "CA Osasuna", shortName: "Osasuna",
    leagueId: "la-liga", rating: 71, reputation: 64,
    stadium: "El Sadar", budget: 15000000, wageBudget: 640000
  },
  "rayo-vallecano": {
    id: "rayo-vallecano", name: "Rayo Vallecano", shortName: "Rayo",
    leagueId: "la-liga", rating: 71, reputation: 63,
    stadium: "Vallecas", budget: 14000000, wageBudget: 600000
  },
  "real-betis": {
    id: "real-betis", name: "Real Betis", shortName: "Betis",
    leagueId: "la-liga", rating: 76, reputation: 76,
    stadium: "Benito Villamarín", budget: 35000000, wageBudget: 1300000
  },
  "real-madrid": {
    id: "real-madrid", name: "Real Madrid", shortName: "Real Madrid",
    leagueId: "la-liga", rating: 89, reputation: 96,
    stadium: "Santiago Bernabéu", budget: 160000000, wageBudget: 4200000
  },
  "real-oviedo": {
    id: "real-oviedo", name: "Real Oviedo", shortName: "Oviedo",
    leagueId: "la-liga", rating: 65, reputation: 57,
    stadium: "Carlos Tartiere", budget: 9000000, wageBudget: 400000
  },
  "real-sociedad": {
    id: "real-sociedad", name: "Real Sociedad", shortName: "La Real",
    leagueId: "la-liga", rating: 76, reputation: 76,
    stadium: "Reale Arena", budget: 35000000, wageBudget: 1300000
  },
  "sevilla": {
    id: "sevilla", name: "Sevilla FC", shortName: "Sevilla",
    leagueId: "la-liga", rating: 75, reputation: 80,
    stadium: "Ramón Sánchez-Pizjuán", budget: 30000000, wageBudget: 1400000
  },
  "valencia": {
    id: "valencia", name: "Valencia CF", shortName: "Valencia",
    leagueId: "la-liga", rating: 73, reputation: 78,
    stadium: "Mestalla", budget: 22000000, wageBudget: 950000
  },
  "villarreal": {
    id: "villarreal", name: "Villarreal CF", shortName: "Villarreal",
    leagueId: "la-liga", rating: 77, reputation: 76,
    stadium: "La Cerámica", budget: 40000000, wageBudget: 1400000
  },

  /* ==========================================================
     LIGUE 1
     ========================================================== */
  "angers": {
    id: "angers", name: "Angers SCO", shortName: "Angers",
    leagueId: "ligue-1", rating: 65, reputation: 55,
    stadium: "Raymond Kopa", budget: 8000000, wageBudget: 350000
  },
  "auxerre": {
    id: "auxerre", name: "AJ Auxerre", shortName: "Auxerre",
    leagueId: "ligue-1", rating: 66, reputation: 58,
    stadium: "Abbé-Deschamps", budget: 9000000, wageBudget: 380000
  },
  "brest": {
    id: "brest", name: "Stade Brestois", shortName: "Brest",
    leagueId: "ligue-1", rating: 70, reputation: 62,
    stadium: "Francis-Le Blé", budget: 12000000, wageBudget: 520000
  },
  "le-havre": {
    id: "le-havre", name: "Le Havre AC", shortName: "Le Havre",
    leagueId: "ligue-1", rating: 65, reputation: 55,
    stadium: "Océane", budget: 8000000, wageBudget: 350000
  },
  "lens": {
    id: "lens", name: "RC Lens", shortName: "Lens",
    leagueId: "ligue-1", rating: 75, reputation: 72,
    stadium: "Bollaert-Delelis", budget: 30000000, wageBudget: 1050000
  },
  "lille": {
    id: "lille", name: "LOSC Lille", shortName: "Lille",
    leagueId: "ligue-1", rating: 77, reputation: 76,
    stadium: "Pierre-Mauroy", budget: 35000000, wageBudget: 1300000
  },
  "lorient": {
    id: "lorient", name: "FC Lorient", shortName: "Lorient",
    leagueId: "ligue-1", rating: 66, reputation: 57,
    stadium: "Moustoir", budget: 9000000, wageBudget: 380000
  },
  "lyon": {
    id: "lyon", name: "Olympique Lyonnais", shortName: "Lyon",
    leagueId: "ligue-1", rating: 78, reputation: 82,
    stadium: "Groupama Stadium", budget: 40000000, wageBudget: 1600000
  },
  "marseille": {
    id: "marseille", name: "Olympique de Marseille", shortName: "Marseille",
    leagueId: "ligue-1", rating: 79, reputation: 84,
    stadium: "Vélodrome", budget: 45000000, wageBudget: 1900000
  },
  "metz": {
    id: "metz", name: "FC Metz", shortName: "Metz",
    leagueId: "ligue-1", rating: 65, reputation: 55,
    stadium: "Saint-Symphorien", budget: 8000000, wageBudget: 350000
  },
  "monaco": {
    id: "monaco", name: "AS Monaco", shortName: "Monaco",
    leagueId: "ligue-1", rating: 80, reputation: 82,
    stadium: "Louis II", budget: 55000000, wageBudget: 1800000
  },
  "nantes": {
    id: "nantes", name: "FC Nantes", shortName: "Nantes",
    leagueId: "ligue-1", rating: 68, reputation: 65,
    stadium: "Beaujoire", budget: 12000000, wageBudget: 600000
  },
  "nice": {
    id: "nice", name: "OGC Nice", shortName: "Nice",
    leagueId: "ligue-1", rating: 75, reputation: 72,
    stadium: "Allianz Riviera", budget: 30000000, wageBudget: 1100000
  },
  "paris-fc": {
    id: "paris-fc", name: "Paris FC", shortName: "Paris FC",
    leagueId: "ligue-1", rating: 67, reputation: 60,
    stadium: "Jean-Bouin", budget: 25000000, wageBudget: 700000
  },
  "paris-sg": {
    id: "paris-sg", name: "Paris Saint-Germain", shortName: "PSG",
    leagueId: "ligue-1", rating: 87, reputation: 92,
    stadium: "Parc des Princes", budget: 150000000, wageBudget: 4200000
  },
  "rennes": {
    id: "rennes", name: "Stade Rennais", shortName: "Rennes",
    leagueId: "ligue-1", rating: 74, reputation: 72,
    stadium: "Roazhon Park", budget: 25000000, wageBudget: 1050000
  },
  "strasbourg": {
    id: "strasbourg", name: "RC Strasbourg", shortName: "Strasbourg",
    leagueId: "ligue-1", rating: 72, reputation: 66,
    stadium: "Meinau", budget: 18000000, wageBudget: 720000
  },
  "toulouse": {
    id: "toulouse", name: "Toulouse FC", shortName: "Toulouse",
    leagueId: "ligue-1", rating: 71, reputation: 64,
    stadium: "Stadium de Toulouse", budget: 15000000, wageBudget: 640000
  },

  /* ==========================================================
     SERIE A
     ========================================================== */
  "atalanta": {
    id: "atalanta", name: "Atalanta", shortName: "Atalanta",
    leagueId: "serie-a", rating: 80, reputation: 78,
    stadium: "Gewiss Stadium", budget: 45000000, wageBudget: 1500000
  },
  "bologna": {
    id: "bologna", name: "Bologna", shortName: "Bologna",
    leagueId: "serie-a", rating: 76, reputation: 72,
    stadium: "Renato Dall'Ara", budget: 30000000, wageBudget: 1100000
  },
  "cagliari": {
    id: "cagliari", name: "Cagliari", shortName: "Cagliari",
    leagueId: "serie-a", rating: 70, reputation: 64,
    stadium: "Unipol Domus", budget: 15000000, wageBudget: 640000
  },
  "como": {
    id: "como", name: "Como", shortName: "Como",
    leagueId: "serie-a", rating: 71, reputation: 64,
    stadium: "Giuseppe Sinigaglia", budget: 20000000, wageBudget: 720000
  },
  "cremonese": {
    id: "cremonese", name: "Cremonese", shortName: "Cremonese",
    leagueId: "serie-a", rating: 66, reputation: 55,
    stadium: "Giovanni Zini", budget: 9000000, wageBudget: 400000
  },
  "fiorentina": {
    id: "fiorentina", name: "Fiorentina", shortName: "Fiorentina",
    leagueId: "serie-a", rating: 77, reputation: 78,
    stadium: "Artemio Franchi", budget: 40000000, wageBudget: 1400000
  },
  "genoa": {
    id: "genoa", name: "Genoa", shortName: "Genoa",
    leagueId: "serie-a", rating: 71, reputation: 68,
    stadium: "Luigi Ferraris", budget: 15000000, wageBudget: 680000
  },
  "hellas-verona": {
    id: "hellas-verona", name: "Hellas Verona", shortName: "Verona",
    leagueId: "serie-a", rating: 69, reputation: 64,
    stadium: "Marcantonio Bentegodi", budget: 13000000, wageBudget: 580000
  },
  "inter": {
    id: "inter", name: "Inter Milan", shortName: "Inter",
    leagueId: "serie-a", rating: 85, reputation: 88,
    stadium: "San Siro", budget: 80000000, wageBudget: 2800000
  },
  "juventus": {
    id: "juventus", name: "Juventus", shortName: "Juventus",
    leagueId: "serie-a", rating: 82, reputation: 89,
    stadium: "Allianz Stadium", budget: 70000000, wageBudget: 2600000
  },
  "lazio": {
    id: "lazio", name: "Lazio", shortName: "Lazio",
    leagueId: "serie-a", rating: 77, reputation: 78,
    stadium: "Olimpico", budget: 35000000, wageBudget: 1500000
  },
  "lecce": {
    id: "lecce", name: "Lecce", shortName: "Lecce",
    leagueId: "serie-a", rating: 68, reputation: 60,
    stadium: "Via del Mare", budget: 12000000, wageBudget: 500000
  },
  "milan": {
    id: "milan", name: "AC Milan", shortName: "Milan",
    leagueId: "serie-a", rating: 83, reputation: 88,
    stadium: "San Siro", budget: 75000000, wageBudget: 2500000
  },
  "napoli": {
    id: "napoli", name: "Napoli", shortName: "Napoli",
    leagueId: "serie-a", rating: 83, reputation: 84,
    stadium: "Diego Armando Maradona", budget: 70000000, wageBudget: 2300000
  },
  "parma": {
    id: "parma", name: "Parma", shortName: "Parma",
    leagueId: "serie-a", rating: 68, reputation: 62,
    stadium: "Ennio Tardini", budget: 12000000, wageBudget: 520000
  },
  "pisa": {
    id: "pisa", name: "Pisa", shortName: "Pisa",
    leagueId: "serie-a", rating: 65, reputation: 55,
    stadium: "Arena Garibaldi", budget: 9000000, wageBudget: 400000
  },
  "roma": {
    id: "roma", name: "AS Roma", shortName: "Roma",
    leagueId: "serie-a", rating: 80, reputation: 84,
    stadium: "Olimpico", budget: 50000000, wageBudget: 2000000
  },
  "sassuolo": {
    id: "sassuolo", name: "Sassuolo", shortName: "Sassuolo",
    leagueId: "serie-a", rating: 67, reputation: 58,
    stadium: "Mapei Stadium", budget: 10000000, wageBudget: 440000
  },
  "torino": {
    id: "torino", name: "Torino", shortName: "Torino",
    leagueId: "serie-a", rating: 73, reputation: 70,
    stadium: "Olimpico Grande Torino", budget: 20000000, wageBudget: 820000
  },
  "udinese": {
    id: "udinese", name: "Udinese", shortName: "Udinese",
    leagueId: "serie-a", rating: 72, reputation: 66,
    stadium: "Bluenergy Stadium", budget: 18000000, wageBudget: 740000
  },

  /* ==========================================================
     EFL CHAMPIONSHIP
     ========================================================== */
  "birmingham": {
    id: "birmingham", name: "Birmingham City", shortName: "Birmingham",
    leagueId: "championship", rating: 66, reputation: 66,
    stadium: "St Andrew's", budget: 20000000, wageBudget: 620000
  },
  "blackburn": {
    id: "blackburn", name: "Blackburn Rovers", shortName: "Blackburn",
    leagueId: "championship", rating: 65, reputation: 66,
    stadium: "Ewood Park", budget: 5000000, wageBudget: 380000
  },
  "bristol-city": {
    id: "bristol-city", name: "Bristol City", shortName: "Bristol City",
    leagueId: "championship", rating: 66, reputation: 64,
    stadium: "Ashton Gate", budget: 6000000, wageBudget: 400000
  },
  "charlton": {
    id: "charlton", name: "Charlton Athletic", shortName: "Charlton",
    leagueId: "championship", rating: 63, reputation: 62,
    stadium: "The Valley", budget: 4000000, wageBudget: 320000
  },
  "coventry": {
    id: "coventry", name: "Coventry City", shortName: "Coventry",
    leagueId: "championship", rating: 70, reputation: 66,
    stadium: "Coventry Building Society Arena", budget: 10000000, wageBudget: 480000
  },
  "derby": {
    id: "derby", name: "Derby County", shortName: "Derby",
    leagueId: "championship", rating: 65, reputation: 66,
    stadium: "Pride Park", budget: 5000000, wageBudget: 380000
  },
  "hull-city": {
    id: "hull-city", name: "Hull City", shortName: "Hull",
    leagueId: "championship", rating: 65, reputation: 62,
    stadium: "MKM Stadium", budget: 5000000, wageBudget: 380000
  },
  "ipswich": {
    id: "ipswich", name: "Ipswich Town", shortName: "Ipswich",
    leagueId: "championship", rating: 71, reputation: 70,
    stadium: "Portman Road", budget: 15000000, wageBudget: 620000
  },
  "leicester": {
    id: "leicester", name: "Leicester City", shortName: "Leicester",
    leagueId: "championship", rating: 74, reputation: 76,
    stadium: "King Power Stadium", budget: 22000000, wageBudget: 1000000
  },
  "middlesbrough": {
    id: "middlesbrough", name: "Middlesbrough", shortName: "Boro",
    leagueId: "championship", rating: 68, reputation: 66,
    stadium: "Riverside", budget: 8000000, wageBudget: 460000
  },
  "millwall": {
    id: "millwall", name: "Millwall", shortName: "Millwall",
    leagueId: "championship", rating: 65, reputation: 60,
    stadium: "The Den", budget: 4000000, wageBudget: 340000
  },
  "norwich": {
    id: "norwich", name: "Norwich City", shortName: "Norwich",
    leagueId: "championship", rating: 69, reputation: 70,
    stadium: "Carrow Road", budget: 9000000, wageBudget: 480000
  },
  "oxford-united": {
    id: "oxford-united", name: "Oxford United", shortName: "Oxford",
    leagueId: "championship", rating: 63, reputation: 58,
    stadium: "Kassam Stadium", budget: 3000000, wageBudget: 280000
  },
  "portsmouth": {
    id: "portsmouth", name: "Portsmouth", shortName: "Portsmouth",
    leagueId: "championship", rating: 64, reputation: 66,
    stadium: "Fratton Park", budget: 4000000, wageBudget: 340000
  },
  "preston": {
    id: "preston", name: "Preston North End", shortName: "Preston",
    leagueId: "championship", rating: 64, reputation: 62,
    stadium: "Deepdale", budget: 4000000, wageBudget: 320000
  },
  "qpr": {
    id: "qpr", name: "Queens Park Rangers", shortName: "QPR",
    leagueId: "championship", rating: 64, reputation: 64,
    stadium: "Loftus Road", budget: 4000000, wageBudget: 320000
  },
  "sheffield-united": {
    id: "sheffield-united", name: "Sheffield United", shortName: "Sheff Utd",
    leagueId: "championship", rating: 69, reputation: 70,
    stadium: "Bramall Lane", budget: 9000000, wageBudget: 500000
  },
  "sheffield-wednesday": {
    id: "sheffield-wednesday", name: "Sheffield Wednesday", shortName: "Sheff Wed",
    leagueId: "championship", rating: 64, reputation: 66,
    stadium: "Hillsborough", budget: 4000000, wageBudget: 340000
  },
  "southampton": {
    id: "southampton", name: "Southampton", shortName: "Southampton",
    leagueId: "championship", rating: 71, reputation: 72,
    stadium: "St Mary's", budget: 12000000, wageBudget: 600000
  },
  "stoke": {
    id: "stoke", name: "Stoke City", shortName: "Stoke",
    leagueId: "championship", rating: 66, reputation: 68,
    stadium: "bet365 Stadium", budget: 6000000, wageBudget: 420000
  },
  "swansea": {
    id: "swansea", name: "Swansea City", shortName: "Swansea",
    leagueId: "championship", rating: 67, reputation: 66,
    stadium: "Swansea.com Stadium", budget: 6000000, wageBudget: 400000
  },
  "watford": {
    id: "watford", name: "Watford", shortName: "Watford",
    leagueId: "championship", rating: 68, reputation: 70,
    stadium: "Vicarage Road", budget: 8000000, wageBudget: 460000
  },
  "west-brom": {
    id: "west-brom", name: "West Bromwich Albion", shortName: "West Brom",
    leagueId: "championship", rating: 67, reputation: 70,
    stadium: "The Hawthorns", budget: 6000000, wageBudget: 420000
  },
  "wrexham": {
    id: "wrexham", name: "Wrexham", shortName: "Wrexham",
    leagueId: "championship", rating: 65, reputation: 66,
    stadium: "Racecourse Ground", budget: 8000000, wageBudget: 420000
  }

};

/* ---------- Helpers ---------- */

export function getClub(id) {
  return CLUBS[id] || null;
}

export function getClubsByLeague(leagueId) {
  return Object.values(CLUBS).filter(c => c.leagueId === leagueId);
}

export function getAllClubs() {
  return Object.values(CLUBS);
}
