/* ============================================================
   FOOTBALL MANAGER — data/players.js
   Premier League 2026/27 — CORRECTED SQUADS
   Based on actual 2026/27 squad lists
   position: GK, CB, LB, RB, CDM, CM, CAM, LW, RW, ST
   overall:  1-100 (calibrated estimate based on 2026/27 form)
   value:    £
   wage:     £/week
   ============================================================ */

export const PLAYERS = {

  /* ==========================================================
     ARSENAL (24)
     2026/27 squad numbers confirmed [citation:1][citation:9]
     ========================================================== */
  "david-raya":      { id:"david-raya",      name:"David Raya",      clubId:"arsenal", position:"GK",  age:30, overall:85, nationality:"Spain",       value:35000000, wage:120000 },
  "kepa-arrizabalaga":{id:"kepa-arrizabalaga",name:"Kepa Arrizabalaga",clubId:"arsenal",position:"GK",  age:31, overall:79, nationality:"Spain",       value:12000000, wage:100000 },
  "illan-meslier":   { id:"illan-meslier",   name:"Illan Meslier",   clubId:"arsenal", position:"GK",  age:26, overall:78, nationality:"France",      value:20000000, wage:60000  },
  "tommy-setford":   { id:"tommy-setford",   name:"Tommy Setford",   clubId:"arsenal", position:"GK",  age:20, overall:66, nationality:"England",     value:3000000,  wage:15000  },
  "william-saliba":  { id:"william-saliba",  name:"William Saliba",  clubId:"arsenal", position:"CB",  age:25, overall:86, nationality:"France",      value:80000000, wage:190000 },
  "gabriel-magalhaes":{id:"gabriel-magalhaes",name:"Gabriel Magalhães",clubId:"arsenal",position:"CB", age:28, overall:85, nationality:"Brazil",      value:70000000, wage:180000 },
  "piero-hincapie":  { id:"piero-hincapie",  name:"Piero Hincapié",  clubId:"arsenal", position:"CB",  age:24, overall:82, nationality:"Ecuador",     value:45000000, wage:100000 },
  "cristhian-mosquera":{id:"cristhian-mosquera",name:"Cristhian Mosquera",clubId:"arsenal",position:"CB",age:22,overall:76,nationality:"Spain",value:25000000,wage:60000},
  "ben-white":       { id:"ben-white",       name:"Ben White",       clubId:"arsenal", position:"RB",  age:28, overall:82, nationality:"England",     value:45000000, wage:160000 },
  "jurrien-timber":  { id:"jurrien-timber",  name:"Jurriën Timber",  clubId:"arsenal", position:"RB",  age:25, overall:83, nationality:"Netherlands", value:50000000, wage:140000 },
  "riccardo-calafiori":{id:"riccardo-calafiori",name:"Riccardo Calafiori",clubId:"arsenal",position:"LB",age:24,overall:82,nationality:"Italy",value:50000000,wage:130000},
  "myles-lewis-skelly":{id:"myles-lewis-skelly",name:"Myles Lewis-Skelly",clubId:"arsenal",position:"LB",age:19,overall:78,nationality:"England",value:35000000,wage:60000},
  "declan-rice":     { id:"declan-rice",     name:"Declan Rice",     clubId:"arsenal", position:"CDM", age:27, overall:87, nationality:"England",     value:90000000, wage:240000 },
  "martin-zubimendi":{ id:"martin-zubimendi",name:"Martín Zubimendi",clubId:"arsenal", position:"CDM", age:27, overall:85, nationality:"Spain",       value:60000000, wage:180000 },
  "bruno-guimaraes": { id:"bruno-guimaraes", name:"Bruno Guimarães", clubId:"arsenal", position:"CM",  age:28, overall:84, nationality:"Brazil",      value:65000000, wage:200000 },
  "martin-odegaard": { id:"martin-odegaard", name:"Martin Ødegaard", clubId:"arsenal", position:"CAM", age:27, overall:87, nationality:"Norway",      value:90000000, wage:240000 },
  "mikel-merino":    { id:"mikel-merino",    name:"Mikel Merino",    clubId:"arsenal", position:"CM",  age:30, overall:82, nationality:"Spain",       value:35000000, wage:140000 },
  "ethan-nwaneri":   { id:"ethan-nwaneri",   name:"Ethan Nwaneri",   clubId:"arsenal", position:"CAM", age:19, overall:78, nationality:"England",     value:40000000, wage:60000  },
  "eberechi-eze":    { id:"eberechi-eze",    name:"Eberechi Eze",    clubId:"arsenal", position:"CAM", age:28, overall:84, nationality:"England",     value:65000000, wage:180000 },
  "bukayo-saka":     { id:"bukayo-saka",     name:"Bukayo Saka",     clubId:"arsenal", position:"RW",  age:24, overall:87, nationality:"England",     value:100000000,wage:220000 },
  "noni-madueke":    { id:"noni-madueke",    name:"Noni Madueke",    clubId:"arsenal", position:"RW",  age:24, overall:79, nationality:"England",     value:30000000, wage:90000  },
  "christos-tzolis": { id:"christos-tzolis", name:"Christos Tzolis", clubId:"arsenal", position:"LW",  age:24, overall:79, nationality:"Greece",      value:30000000, wage:90000  },
  "gabriel-martinelli":{id:"gabriel-martinelli",name:"Gabriel Martinelli",clubId:"arsenal",position:"LW",age:25,overall:82,nationality:"Brazil",value:50000000,wage:150000},
  "leandro-trossard":{ id:"leandro-trossard",name:"Leandro Trossard",clubId:"arsenal", position:"LW",  age:31, overall:81, nationality:"Belgium",     value:28000000, wage:130000 },
  "viktor-gyokeres": { id:"viktor-gyokeres", name:"Viktor Gyökeres", clubId:"arsenal", position:"ST",  age:28, overall:85, nationality:"Sweden",      value:70000000, wage:180000 },
  "kai-havertz":     { id:"kai-havertz",     name:"Kai Havertz",     clubId:"arsenal", position:"ST",  age:27, overall:83, nationality:"Germany",     value:55000000, wage:200000 },
  "gabriel-jesus":   { id:"gabriel-jesus",   name:"Gabriel Jesus",   clubId:"arsenal", position:"ST",  age:29, overall:81, nationality:"Brazil",      value:35000000, wage:180000 },

  /* ==========================================================
     ASTON VILLA (23)
     ========================================================== */
  "emiliano-martinez":{id:"emiliano-martinez",name:"Emiliano Martínez",clubId:"aston-villa",position:"GK",age:33,overall:84,nationality:"Argentina",value:22000000,wage:150000},
  "robin-olsen":     { id:"robin-olsen",     name:"Robin Olsen",     clubId:"aston-villa", position:"GK",  age:36, overall:74, nationality:"Sweden",    value:1500000,  wage:40000  },
  "marco-bizot":     { id:"marco-bizot",     name:"Marco Bizot",     clubId:"aston-villa", position:"GK",  age:35, overall:72, nationality:"Netherlands",value:1000000, wage:35000  },
  "ezri-konsa":      { id:"ezri-konsa",      name:"Ezri Konsa",      clubId:"aston-villa", position:"CB",  age:28, overall:81, nationality:"England",   value:40000000, wage:120000 },
  "pau-torres":      { id:"pau-torres",      name:"Pau Torres",      clubId:"aston-villa", position:"CB",  age:29, overall:81, nationality:"Spain",     value:38000000, wage:120000 },
  "tyrone-mings":    { id:"tyrone-mings",    name:"Tyrone Mings",    clubId:"aston-villa", position:"CB",  age:33, overall:77, nationality:"England",   value:10000000, wage:100000 },
  "victor-lindelof": { id:"victor-lindelof", name:"Victor Lindelöf", clubId:"aston-villa", position:"CB",  age:32, overall:77, nationality:"Sweden",    value:10000000, wage:120000 },
  "matty-cash":      { id:"matty-cash",      name:"Matty Cash",      clubId:"aston-villa", position:"RB",  age:28, overall:78, nationality:"Poland",    value:20000000, wage:100000 },
  "lucas-digne":     { id:"lucas-digne",     name:"Lucas Digne",     clubId:"aston-villa", position:"LB",  age:33, overall:78, nationality:"France",    value:10000000, wage:135000 },
  "ian-maatsen":     { id:"ian-maatsen",     name:"Ian Maatsen",     clubId:"aston-villa", position:"LB",  age:24, overall:79, nationality:"Netherlands",value:30000000,wage:100000},
  "boubacar-kamara": { id:"boubacar-kamara", name:"Boubacar Kamara", clubId:"aston-villa", position:"CDM", age:26, overall:82, nationality:"France",    value:45000000, wage:150000 },
  "amadou-onana":    { id:"amadou-onana",    name:"Amadou Onana",    clubId:"aston-villa", position:"CDM", age:24, overall:81, nationality:"Belgium",   value:40000000, wage:140000 },
  "douglas-luiz":    { id:"douglas-luiz",    name:"Douglas Luiz",    clubId:"aston-villa", position:"CM",  age:28, overall:82, nationality:"Brazil",    value:40000000, wage:140000 },
  "youri-tielemans": { id:"youri-tielemans", name:"Youri Tielemans", clubId:"aston-villa", position:"CM",  age:29, overall:83, nationality:"Belgium",   value:35000000, wage:150000 },
  "john-mcginn":     { id:"john-mcginn",     name:"John McGinn",     clubId:"aston-villa", position:"CM",  age:32, overall:79, nationality:"Scotland",  value:15000000, wage:120000 },
  "harvey-elliott":  { id:"harvey-elliott",  name:"Harvey Elliott",  clubId:"aston-villa", position:"CAM", age:23, overall:79, nationality:"England",   value:25000000, wage:80000  },
  "emiliano-buendia":{ id:"emiliano-buendia",name:"Emiliano Buendía",clubId:"aston-villa", position:"CAM", age:29, overall:78, nationality:"Argentina", value:16000000, wage:75000  },
  "morgan-rogers":   { id:"morgan-rogers",   name:"Morgan Rogers",   clubId:"aston-villa", position:"CAM", age:23, overall:81, nationality:"England",   value:40000000, wage:150000 },
  "leon-bailey":     { id:"leon-bailey",     name:"Leon Bailey",     clubId:"aston-villa", position:"RW",  age:28, overall:79, nationality:"Jamaica",   value:18000000, wage:120000 },
  "jadon-sancho":    { id:"jadon-sancho",    name:"Jadon Sancho",    clubId:"aston-villa", position:"LW",  age:26, overall:79, nationality:"England",   value:20000000, wage:200000 },
  "donyell-malen":   { id:"donyell-malen",   name:"Donyell Malen",   clubId:"aston-villa", position:"RW",  age:27, overall:79, nationality:"Netherlands",value:22000000,wage:100000},
  "ollie-watkins":   { id:"ollie-watkins",   name:"Ollie Watkins",   clubId:"aston-villa", position:"ST",  age:30, overall:83, nationality:"England",   value:45000000, wage:130000 },
  "tammy-abraham":   { id:"tammy-abraham",   name:"Tammy Abraham",   clubId:"aston-villa", position:"ST",  age:28, overall:78, nationality:"England",   value:18000000, wage:140000 },

  /* ==========================================================
     BOURNEMOUTH (24)
     ========================================================== */
  "djordje-petrovic":{ id:"djordje-petrovic",name:"Đorđe Petrović", clubId:"bournemouth", position:"GK",  age:26, overall:79, nationality:"Serbia",    value:22000000, wage:70000  },
  "mark-travers":    { id:"mark-travers",    name:"Mark Travers",    clubId:"bournemouth", position:"GK",  age:27, overall:73, nationality:"Ireland",   value:3000000,  wage:35000  },
  "fraser-forster":  { id:"fraser-forster",  name:"Fraser Forster",  clubId:"bournemouth", position:"GK",  age:38, overall:73, nationality:"England",   value:1000000,  wage:40000  },
  "adam-smith":      { id:"adam-smith",      name:"Adam Smith",      clubId:"bournemouth", position:"RB",  age:35, overall:72, nationality:"England",   value:1000000,  wage:40000  },
  "julian-araujo":   { id:"julian-araujo",   name:"Julián Araujo",   clubId:"bournemouth", position:"RB",  age:25, overall:75, nationality:"Mexico",    value:10000000, wage:50000  },
  "james-hill":      { id:"james-hill",      name:"James Hill",      clubId:"bournemouth", position:"CB",  age:24, overall:75, nationality:"England",   value:10000000, wage:45000  },
  "marcos-senesi":   { id:"marcos-senesi",   name:"Marcos Senesi",   clubId:"bournemouth", position:"CB",  age:29, overall:79, nationality:"Argentina", value:22000000, wage:80000  },
  "bafode-diakite":  { id:"bafode-diakite",  name:"Bafodé Diakité",  clubId:"bournemouth", position:"CB",  age:25, overall:78, nationality:"France",    value:20000000, wage:70000  },
  "adrien-truffert": { id:"adrien-truffert", name:"Adrien Truffert", clubId:"bournemouth", position:"LB",  age:24, overall:77, nationality:"France",    value:18000000, wage:60000  },
  "milos-kerkez":    { id:"milos-kerkez",    name:"Miloš Kerkez",    clubId:"bournemouth", position:"LB",  age:23, overall:78, nationality:"Hungary",   value:25000000, wage:60000  },
  "julio-soler":     { id:"julio-soler",     name:"Julio Soler",     clubId:"bournemouth", position:"LB",  age:21, overall:74, nationality:"Argentina", value:8000000,  wage:35000  },
  "tyler-adams":     { id:"tyler-adams",     name:"Tyler Adams",     clubId:"bournemouth", position:"CDM", age:27, overall:79, nationality:"USA",       value:18000000, wage:80000  },
  "lewis-cook":      { id:"lewis-cook",      name:"Lewis Cook",      clubId:"bournemouth", position:"CDM", age:29, overall:76, nationality:"England",   value:10000000, wage:70000  },
  "ryan-christie":   { id:"ryan-christie",   name:"Ryan Christie",   clubId:"bournemouth", position:"CM",  age:31, overall:77, nationality:"Scotland",  value:10000000, wage:70000  },
  "alex-scott":      { id:"alex-scott",      name:"Alex Scott",      clubId:"bournemouth", position:"CM",  age:22, overall:77, nationality:"England",   value:20000000, wage:50000  },
  "marcus-tavernier":{ id:"marcus-tavernier",name:"Marcus Tavernier",clubId:"bournemouth", position:"CM",  age:27, overall:77, nationality:"England",   value:15000000, wage:70000  },
  "justin-kluivert": { id:"justin-kluivert", name:"Justin Kluivert", clubId:"bournemouth", position:"LW",  age:27, overall:79, nationality:"Netherlands",value:20000000, wage:80000 },
  "david-brooks":    { id:"david-brooks",    name:"David Brooks",    clubId:"bournemouth", position:"RW",  age:29, overall:75, nationality:"Wales",     value:8000000,  wage:60000  },
  "amine-adli":      { id:"amine-adli",      name:"Amine Adli",      clubId:"bournemouth", position:"LW",  age:26, overall:76, nationality:"Morocco",   value:12000000, wage:65000  },
  "ben-doak":        { id:"ben-doak",        name:"Ben Doak",        clubId:"bournemouth", position:"RW",  age:20, overall:74, nationality:"Scotland",  value:10000000, wage:30000  },
  "evanilson":       { id:"evanilson",       name:"Evanilson",       clubId:"bournemouth", position:"ST",  age:26, overall:79, nationality:"Brazil",    value:25000000, wage:90000  },
  "daniel-jebbison": { id:"daniel-jebbison", name:"Daniel Jebbison", clubId:"bournemouth", position:"ST",  age:23, overall:72, nationality:"England",   value:5000000,  wage:30000  },
  "enver-mari":      { id:"enver-mari",      name:"Enes Ünal",       clubId:"bournemouth", position:"ST",  age:29, overall:75, nationality:"Turkey",    value:8000000,  wage:65000  },

  /* ==========================================================
     BRENTFORD (23)
     ========================================================== */
  "caoimhin-kelleher":{id:"caoimhin-kelleher",name:"Caoimhín Kelleher",clubId:"brentford",position:"GK",age:27,overall:78,nationality:"Ireland",value:18000000,wage:60000},
  "hakon-valdimarsson":{id:"hakon-valdimarsson",name:"Hákon Valdimarsson",clubId:"brentford",position:"GK",age:24,overall:72,nationality:"Iceland",value:3000000,wage:30000},
  "matthew-cox":     { id:"matthew-cox",     name:"Matthew Cox",     clubId:"brentford", position:"GK",  age:22, overall:68, nationality:"England",   value:1500000,  wage:20000  },
  "aaron-hickey":    { id:"aaron-hickey",    name:"Aaron Hickey",    clubId:"brentford", position:"RB",  age:24, overall:77, nationality:"Scotland",  value:18000000, wage:60000  },
  "michael-kayode":  { id:"michael-kayode",  name:"Michael Kayode",  clubId:"brentford", position:"RB",  age:21, overall:75, nationality:"Italy",     value:15000000, wage:40000  },
  "rico-henry":      { id:"rico-henry",      name:"Rico Henry",      clubId:"brentford", position:"LB",  age:28, overall:77, nationality:"England",   value:15000000, wage:70000  },
  "keane-lewis-potter":{id:"keane-lewis-potter",name:"Keane Lewis-Potter",clubId:"brentford",position:"LB",age:25,overall:76,nationality:"England",value:12000000,wage:55000},
  "nathan-collins":  { id:"nathan-collins",  name:"Nathan Collins",  clubId:"brentford", position:"CB",  age:25, overall:80, nationality:"Ireland",   value:30000000, wage:80000  },
  "sepp-van-den-berg":{id:"sepp-van-den-berg",name:"Sepp van den Berg",clubId:"brentford",position:"CB",age:24,overall:78,nationality:"Netherlands",value:22000000,wage:65000},
  "ethan-pinnock":   { id:"ethan-pinnock",   name:"Ethan Pinnock",   clubId:"brentford", position:"CB",  age:33, overall:77, nationality:"Jamaica",   value:8000000,  wage:70000  },
  "kristoffer-ajer": { id:"kristoffer-ajer", name:"Kristoffer Ajer", clubId:"brentford", position:"CB",  age:28, overall:76, nationality:"Norway",    value:12000000, wage:65000  },
  "jordan-henderson":{ id:"jordan-henderson",name:"Jordan Henderson",clubId:"brentford", position:"CDM", age:36, overall:76, nationality:"England",   value:3000000,  wage:80000  },
  "vitaly-janelt":   { id:"vitaly-janelt",   name:"Vitaly Janelt",   clubId:"brentford", position:"CDM", age:28, overall:76, nationality:"Germany",   value:10000000, wage:65000  },
  "mathias-jensen":  { id:"mathias-jensen",  name:"Mathias Jensen",  clubId:"brentford", position:"CM",  age:30, overall:77, nationality:"Denmark",   value:10000000, wage:70000  },
  "mikkel-damsgaard":{ id:"mikkel-damsgaard",name:"Mikkel Damsgaard",clubId:"brentford", position:"CAM", age:26, overall:79, nationality:"Denmark",   value:25000000, wage:80000  },
  "yehor-yarmoliuk": { id:"yehor-yarmoliuk", name:"Yehor Yarmoliuk", clubId:"brentford", position:"CM",  age:22, overall:74, nationality:"Ukraine",   value:8000000,  wage:35000  },
  "frank-onyeka":    { id:"frank-onyeka",    name:"Frank Onyeka",    clubId:"brentford", position:"CM",  age:28, overall:75, nationality:"Nigeria",   value:8000000,  wage:60000  },
  "kevin-schade":    { id:"kevin-schade",    name:"Kevin Schade",    clubId:"brentford", position:"LW",  age:24, overall:78, nationality:"Germany",   value:22000000, wage:70000  },
  "dango-ouattara":  { id:"dango-ouattara",  name:"Dango Ouattara",  clubId:"brentford", position:"RW",  age:24, overall:77, nationality:"Burkina Faso",value:15000000,wage:55000},
  "yoane-wissa":     { id:"yoane-wissa",     name:"Yoane Wissa",     clubId:"brentford", position:"ST",  age:29, overall:79, nationality:"DR Congo",  value:18000000, wage:75000  },
  "igor-thiago":     { id:"igor-thiago",     name:"Igor Thiago",     clubId:"brentford", position:"ST",  age:25, overall:78, nationality:"Brazil",    value:25000000, wage:70000  },
  "fabio-carvalho":  { id:"fabio-carvalho",  name:"Fábio Carvalho",  clubId:"brentford", position:"CAM", age:23, overall:75, nationality:"Portugal",  value:12000000, wage:55000  },
  "josh-dasilva":    { id:"josh-dasilva",    name:"Josh Dasilva",    clubId:"brentford", position:"CM",  age:27, overall:73, nationality:"England",   value:5000000,  wage:50000  },

  /* ==========================================================
     BRIGHTON (24)
     Lost Baleba to Man Utd, Van Hecke to Tottenham, Welbeck
     and Joao Pedro to Chelsea [citation:19]
     ========================================================== */
  "bart-verbruggen": { id:"bart-verbruggen", name:"Bart Verbruggen", clubId:"brighton", position:"GK",  age:24, overall:82, nationality:"Netherlands",value:35000000,wage:80000 },
  "jason-steele":    { id:"jason-steele",    name:"Jason Steele",    clubId:"brighton", position:"GK",  age:36, overall:74, nationality:"England",   value:500000,   wage:40000  },
  "tom-mcgill":      { id:"tom-mcgill",      name:"Tom McGill",      clubId:"brighton", position:"GK",  age:26, overall:68, nationality:"Canada",    value:500000,   wage:20000  },
  "lewis-dunk":      { id:"lewis-dunk",      name:"Lewis Dunk",      clubId:"brighton", position:"CB",  age:35, overall:79, nationality:"England",   value:3500000,  wage:90000  },
  "olivier-boscagli":{ id:"olivier-boscagli",name:"Olivier Boscagli",clubId:"brighton", position:"CB",  age:29, overall:78, nationality:"France",    value:15000000, wage:70000  },
  "diego-coppola":   { id:"diego-coppola",   name:"Diego Coppola",   clubId:"brighton", position:"CB",  age:23, overall:77, nationality:"Italy",     value:18000000, wage:50000  },
  "tariq-lamptey":   { id:"tariq-lamptey",   name:"Tariq Lamptey",   clubId:"brighton", position:"RB",  age:26, overall:76, nationality:"Ghana",     value:8000000,  wage:60000  },
  "joel-veltman":    { id:"joel-veltman",    name:"Joël Veltman",    clubId:"brighton", position:"RB",  age:34, overall:75, nationality:"Netherlands",value:1500000, wage:60000 },
  "ferdi-kadioglu":  { id:"ferdi-kadioglu",  name:"Ferdi Kadıoğlu",  clubId:"brighton", position:"LB",  age:27, overall:79, nationality:"Turkey",    value:25000000, wage:70000  },
  "maxim-de-cuyper": { id:"maxim-de-cuyper", name:"Maxim De Cuyper", clubId:"brighton", position:"LB",  age:26, overall:77, nationality:"Belgium",   value:18000000, wage:60000  },
  "mats-wieffer":    { id:"mats-wieffer",    name:"Mats Wieffer",    clubId:"brighton", position:"CDM", age:27, overall:78, nationality:"Netherlands",value:20000000,wage:70000 },
  "pascal-gross":    { id:"pascal-gross",    name:"Pascal Groß",     clubId:"brighton", position:"CM",  age:35, overall:78, nationality:"Germany",   value:2500000,  wage:80000  },
  "yasin-ayari":     { id:"yasin-ayari",     name:"Yasin Ayari",     clubId:"brighton", position:"CM",  age:23, overall:77, nationality:"Sweden",    value:20000000, wage:55000  },
  "matt-oriley":     { id:"matt-oriley",     name:"Matt O'Riley",    clubId:"brighton", position:"CM",  age:26, overall:78, nationality:"Denmark",   value:18000000, wage:65000  },
  "jack-hinshelwood":{ id:"jack-hinshelwood",name:"Jack Hinshelwood",clubId:"brighton", position:"CM",  age:21, overall:75, nationality:"England",   value:12000000, wage:35000  },
  "malick-yalcouye": { id:"malick-yalcouye", name:"Malick Yalcouyé", clubId:"brighton", position:"CM",  age:21, overall:74, nationality:"Mali",      value:10000000, wage:30000  },
  "kaoru-mitoma":    { id:"kaoru-mitoma",    name:"Kaoru Mitoma",    clubId:"brighton", position:"LW",  age:29, overall:82, nationality:"Japan",     value:45000000, wage:90000  },
  "yankuba-minteh":  { id:"yankuba-minteh",  name:"Yankuba Minteh",  clubId:"brighton", position:"RW",  age:22, overall:78, nationality:"Gambia",    value:25000000, wage:60000  },
  "georginio-rutter":{ id:"georginio-rutter",name:"Georginio Rutter",clubId:"brighton", position:"CAM", age:24, overall:78, nationality:"France",    value:22000000, wage:70000  },
  "brajan-gruda":    { id:"brajan-gruda",    name:"Brajan Gruda",    clubId:"brighton", position:"CAM", age:22, overall:76, nationality:"Germany",   value:15000000, wage:50000  },
  "diego-gomez":     { id:"diego-gomez",     name:"Diego Gómez",     clubId:"brighton", position:"CM",  age:23, overall:76, nationality:"Paraguay",  value:18000000, wage:55000  },
  "charalampos-kostoulas":{id:"charalampos-kostoulas",name:"Charalampos Kostoulas",clubId:"brighton",position:"ST",age:19,overall:76,nationality:"Greece",value:20000000,wage:40000},
  "evan-ferguson":   { id:"evan-ferguson",   name:"Evan Ferguson",   clubId:"brighton", position:"ST",  age:22, overall:77, nationality:"Ireland",   value:22000000, wage:60000  },
  "stefanos-tzimas": { id:"stefanos-tzimas", name:"Stefanos Tzimas", clubId:"brighton", position:"ST",  age:20, overall:74, nationality:"Greece",    value:12000000, wage:35000  },

  /* ==========================================================
     BURNLEY (23)
     ========================================================== */
  "martin-dubravka": { id:"martin-dubravka", name:"Martin Dúbravka", clubId:"burnley", position:"GK",  age:37, overall:75, nationality:"Slovakia",  value:1500000,  wage:50000  },
  "vaclav-hladky":   { id:"vaclav-hladky",   name:"Václav Hladký",   clubId:"burnley", position:"GK",  age:36, overall:71, nationality:"Czechia",   value:500000,   wage:30000  },
  "max-weiss":       { id:"max-weiss",       name:"Max Weiß",        clubId:"burnley", position:"GK",  age:22, overall:70, nationality:"Germany",   value:4000000,  wage:25000  },
  "kyle-walker":     { id:"kyle-walker",     name:"Kyle Walker",     clubId:"burnley", position:"RB",  age:36, overall:76, nationality:"England",   value:1500000,  wage:100000 },
  "connor-roberts":  { id:"connor-roberts",  name:"Connor Roberts",  clubId:"burnley", position:"RB",  age:31, overall:74, nationality:"Wales",     value:3000000,  wage:50000  },
  "oliver-sonne":    { id:"oliver-sonne",    name:"Oliver Sonne",    clubId:"burnley", position:"RB",  age:25, overall:72, nationality:"Denmark",   value:4000000,  wage:30000  },
  "jordan-beyer":    { id:"jordan-beyer",    name:"Jordan Beyer",    clubId:"burnley", position:"CB",  age:26, overall:75, nationality:"Germany",   value:8000000,  wage:50000  },
  "axel-tuanzebe":   { id:"axel-tuanzebe",   name:"Axel Tuanzebe",   clubId:"burnley", position:"CB",  age:28, overall:74, nationality:"England",   value:5000000,  wage:50000  },
  "hjalmar-ekdal":   { id:"hjalmar-ekdal",   name:"Hjalmar Ekdal",   clubId:"burnley", position:"CB",  age:27, overall:73, nationality:"Sweden",    value:5000000,  wage:40000  },
  "joe-worrall":     { id:"joe-worrall",     name:"Joe Worrall",     clubId:"burnley", position:"CB",  age:29, overall:72, nationality:"England",   value:2000000,  wage:40000  },
  "hannes-delcroix": { id:"hannes-delcroix", name:"Hannes Delcroix", clubId:"burnley", position:"CB",  age:27, overall:72, nationality:"Belgium",   value:2000000,  wage:35000  },
  "lucas-pires":     { id:"lucas-pires",     name:"Lucas Pires",     clubId:"burnley", position:"LB",  age:25, overall:73, nationality:"Brazil",    value:4000000,  wage:35000  },
  "josh-cullen":     { id:"josh-cullen",     name:"Josh Cullen",     clubId:"burnley", position:"CDM", age:30, overall:75, nationality:"Ireland",   value:4000000,  wage:55000  },
  "josh-laurent":    { id:"josh-laurent",    name:"Josh Laurent",    clubId:"burnley", position:"CM",  age:31, overall:72, nationality:"England",   value:1500000,  wage:40000  },
  "james-ward-prowse":{id:"james-ward-prowse",name:"James Ward-Prowse",clubId:"burnley",position:"CM", age:31, overall:77, nationality:"England",   value:5000000,  wage:80000  },
  "aaron-ramsey":    { id:"aaron-ramsey",    name:"Aaron Ramsey",    clubId:"burnley", position:"CAM", age:23, overall:74, nationality:"England",   value:8000000,  wage:40000  },
  "mike-tresor":     { id:"mike-tresor",     name:"Mike Trésor",     clubId:"burnley", position:"CAM", age:27, overall:75, nationality:"Belgium",   value:2000000,  wage:45000  },
  "jacob-bruun-larsen":{id:"jacob-bruun-larsen",name:"Jacob Bruun Larsen",clubId:"burnley",position:"LW",age:27,overall:75,nationality:"Denmark",value:4000000,wage:45000},
  "marcus-edwards":  { id:"marcus-edwards",  name:"Marcus Edwards",  clubId:"burnley", position:"RW",  age:27, overall:76, nationality:"England",   value:6000000,  wage:50000  },
  "armando-broja":   { id:"armando-broja",   name:"Armando Broja",   clubId:"burnley", position:"ST",  age:24, overall:75, nationality:"Albania",   value:5000000,  wage:50000  },
  "lyle-foster":     { id:"lyle-foster",     name:"Lyle Foster",     clubId:"burnley", position:"ST",  age:26, overall:74, nationality:"South Africa",value:5000000, wage:45000 },
  "ashley-barnes":   { id:"ashley-barnes",   name:"Ashley Barnes",   clubId:"burnley", position:"ST",  age:37, overall:68, nationality:"England",   value:150000,   wage:35000  },
  "zian-flemming":   { id:"zian-flemming",   name:"Zian Flemming",   clubId:"burnley", position:"CAM", age:27, overall:72, nationality:"Netherlands",value:2500000, wage:35000 },

  /* ==========================================================
     CHELSEA (24)
     Alonso's squad [citation:12]: Morgan Rogers, Maxence Lacroix,
     Jordan Henderson, Danny Welbeck, Marco Palestra, Pep Chavarria,
     Mike Penders, Dastan Satpayev (on loan at Burnley)
     ========================================================== */
  "robert-sanchez":  { id:"robert-sanchez",  name:"Robert Sánchez",  clubId:"chelsea", position:"GK",  age:28, overall:80, nationality:"Spain",     value:22000000, wage:80000  },
  "filip-jorgensen": { id:"filip-jorgensen", name:"Filip Jörgensen", clubId:"chelsea", position:"GK",  age:24, overall:77, nationality:"Denmark",   value:18000000, wage:50000  },
  "mike-penders":    { id:"mike-penders",    name:"Mike Penders",    clubId:"chelsea", position:"GK",  age:21, overall:74, nationality:"Belgium",   value:10000000, wage:30000  },
  "reece-james":     { id:"reece-james",     name:"Reece James",     clubId:"chelsea", position:"RB",  age:26, overall:83, nationality:"England",   value:45000000, wage:180000 },
  "malo-gusto":      { id:"malo-gusto",      name:"Malo Gusto",      clubId:"chelsea", position:"RB",  age:23, overall:79, nationality:"France",    value:28000000, wage:70000  },
  "marc-cucurella":  { id:"marc-cucurella",  name:"Marc Cucurella",  clubId:"chelsea", position:"LB",  age:28, overall:82, nationality:"Spain",     value:35000000, wage:100000 },
  "pep-chavarria":   { id:"pep-chavarria",   name:"Pep Chavarria",   clubId:"chelsea", position:"LB",  age:24, overall:76, nationality:"Spain",     value:12000000, wage:45000  },
  "marco-palestra":  { id:"marco-palestra",  name:"Marco Palestra",  clubId:"chelsea", position:"RB",  age:21, overall:75, nationality:"Italy",     value:15000000, wage:40000  },
  "levi-colwill":    { id:"levi-colwill",    name:"Levi Colwill",    clubId:"chelsea", position:"CB",  age:23, overall:81, nationality:"England",   value:50000000, wage:90000  },
  "wesley-fofana":   { id:"wesley-fofana",   name:"Wesley Fofana",   clubId:"chelsea", position:"CB",  age:25, overall:80, nationality:"France",    value:35000000, wage:100000 },
  "maxence-lacroix": { id:"maxence-lacroix", name:"Maxence Lacroix", clubId:"chelsea", position:"CB",  age:26, overall:80, nationality:"France",    value:45000000, wage:85000  },
  "tosin-adarabioyo":{ id:"tosin-adarabioyo",name:"Tosin Adarabioyo",clubId:"chelsea", position:"CB",  age:28, overall:78, nationality:"England",   value:18000000, wage:80000  },
  "moises-caicedo":  { id:"moises-caicedo",  name:"Moisés Caicedo",  clubId:"chelsea", position:"CDM", age:24, overall:85, nationality:"Ecuador",   value:80000000, wage:150000 },
  "romeo-lavia":     { id:"romeo-lavia",     name:"Roméo Lavia",     clubId:"chelsea", position:"CDM", age:22, overall:78, nationality:"Belgium",   value:30000000, wage:60000  },
  "enzo-fernandez":  { id:"enzo-fernandez",  name:"Enzo Fernández",  clubId:"chelsea", position:"CM",  age:25, overall:84, nationality:"Argentina", value:70000000, wage:160000 },
  "jordan-henderson":{ id:"jordan-henderson",name:"Jordan Henderson",clubId:"chelsea", position:"CM",  age:36, overall:76, nationality:"England",   value:2000000,  wage:80000  },
  "morgan-rogers":   { id:"morgan-rogers",   name:"Morgan Rogers",   clubId:"chelsea", position:"CAM", age:23, overall:81, nationality:"England",   value:40000000, wage:150000 },
  "cole-palmer":     { id:"cole-palmer",     name:"Cole Palmer",     clubId:"chelsea", position:"CAM", age:24, overall:86, nationality:"England",   value:90000000, wage:180000 },
  "pedro-neto":      { id:"pedro-neto",      name:"Pedro Neto",      clubId:"chelsea", position:"LW",  age:26, overall:82, nationality:"Portugal",  value:45000000, wage:120000 },
  "alejandro-garnacho":{id:"alejandro-garnacho",name:"Alejandro Garnacho",clubId:"chelsea",position:"LW",age:22,overall:80,nationality:"Argentina",value:40000000,wage:100000},
  "jamie-gittens":   { id:"jamie-gittens",   name:"Jamie Gittens",   clubId:"chelsea", position:"LW",  age:22, overall:78, nationality:"England",   value:30000000, wage:60000  },
  "noni-madueke-2":  { id:"noni-madueke-2",  name:"Estevão",         clubId:"chelsea", position:"RW",  age:19, overall:78, nationality:"Brazil",    value:45000000, wage:50000  },
  "joao-pedro":      { id:"joao-pedro",      name:"João Pedro",      clubId:"chelsea", position:"ST",  age:24, overall:82, nationality:"Brazil",    value:50000000, wage:120000 },
  "danny-welbeck":   { id:"danny-welbeck",   name:"Danny Welbeck",   clubId:"chelsea", position:"ST",  age:36, overall:75, nationality:"England",   value:2000000,  wage:70000  },
  "liam-delap":      { id:"liam-delap",      name:"Liam Delap",      clubId:"chelsea", position:"ST",  age:23, overall:78, nationality:"England",   value:30000000, wage:70000  },

  /* ==========================================================
     CRYSTAL PALACE (23)
     2026/27 confirmed squad numbers [citation:7][citation:18]
     ========================================================== */
  "dean-henderson":  { id:"dean-henderson",  name:"Dean Henderson",  clubId:"crystal-palace", position:"GK",  age:29, overall:80, nationality:"England",   value:25000000, wage:80000  },
  "walter-benitez":  { id:"walter-benitez",  name:"Walter Benítez",  clubId:"crystal-palace", position:"GK",  age:33, overall:76, nationality:"Argentina", value:4000000,  wage:55000  },
  "remi-matthews":   { id:"remi-matthews",   name:"Remi Matthews",   clubId:"crystal-palace", position:"GK",  age:32, overall:68, nationality:"England",   value:200000,   wage:20000  },
  "daniel-munoz":    { id:"daniel-munoz",    name:"Daniel Muñoz",    clubId:"crystal-palace", position:"RB",  age:30, overall:80, nationality:"Colombia",  value:25000000, wage:75000  },
  "nathaniel-clyne": { id:"nathaniel-clyne", name:"Nathaniel Clyne", clubId:"crystal-palace", position:"RB",  age:35, overall:72, nationality:"England",   value:300000,   wage:40000  },
  "axel-disasi":     { id:"axel-disasi",     name:"Axel Disasi",     clubId:"crystal-palace", position:"CB",  age:28, overall:79, nationality:"France",    value:25000000, wage:90000  },
  "maxence-lacroix-2":{id:"maxence-lacroix-2",name:"Maxence Lacroix",clubId:"crystal-palace",position:"CB",age:26,overall:80,nationality:"France",value:50000000,wage:80000},
  "chris-richards":  { id:"chris-richards",  name:"Chris Richards",  clubId:"crystal-palace", position:"CB",  age:26, overall:78, nationality:"USA",       value:28000000, wage:70000  },
  "chadi-riad":      { id:"chadi-riad",      name:"Chadi Riad",      clubId:"crystal-palace", position:"CB",  age:23, overall:76, nationality:"Morocco",   value:15000000, wage:50000  },
  "jaydee-canvot":   { id:"jaydee-canvot",   name:"Jaydee Canvot",   clubId:"crystal-palace", position:"CB",  age:20, overall:75, nationality:"France",    value:18000000, wage:30000  },
  "tyrick-mitchell": { id:"tyrick-mitchell", name:"Tyrick Mitchell", clubId:"crystal-palace", position:"LB",  age:26, overall:78, nationality:"England",   value:20000000, wage:65000  },
  "borna-sosa":      { id:"borna-sosa",      name:"Borna Sosa",      clubId:"crystal-palace", position:"LB",  age:28, overall:76, nationality:"Croatia",   value:3000000,  wage:55000  },
  "cheick-doucoure": { id:"cheick-doucoure", name:"Cheick Doucouré", clubId:"crystal-palace", position:"CDM", age:26, overall:78, nationality:"Mali",      value:10000000, wage:70000  },
  "jefferson-lerma": { id:"jefferson-lerma", name:"Jefferson Lerma", clubId:"crystal-palace", position:"CDM", age:31, overall:77, nationality:"Colombia",  value:6000000,  wage:65000  },
  "adam-wharton":    { id:"adam-wharton",    name:"Adam Wharton",    clubId:"crystal-palace", position:"CM",  age:22, overall:81, nationality:"England",   value:70000000, wage:70000  },
  "will-hughes":     { id:"will-hughes",     name:"Will Hughes",     clubId:"crystal-palace", position:"CM",  age:31, overall:74, nationality:"England",   value:5000000,  wage:50000  },
  "daichi-kamada":   { id:"daichi-kamada",   name:"Daichi Kamada",   clubId:"crystal-palace", position:"CAM", age:29, overall:77, nationality:"Japan",     value:10000000, wage:70000  },
  "dwight-mcneil":   { id:"dwight-mcneil",   name:"Dwight McNeil",   clubId:"crystal-palace", position:"LW",  age:26, overall:77, nationality:"England",   value:15000000, wage:65000  },
  "isamaila-sarr":   { id:"isamaila-sarr",   name:"Ismaïla Sarr",    clubId:"crystal-palace", position:"RW",  age:28, overall:80, nationality:"Senegal",   value:40000000, wage:80000  },
  "yannick-pino":    { id:"yannick-pino",    name:"Yéremy Pino",     clubId:"crystal-palace", position:"RW",  age:23, overall:78, nationality:"Spain",     value:30000000, wage:65000  },
  "evann-guessand":  { id:"evann-guessand",  name:"Evann Guessand",  clubId:"crystal-palace", position:"ST",  age:24, overall:77, nationality:"Ivory Coast",value:20000000,wage:55000},
  "jean-philippe-mateta":{id:"jean-philippe-mateta",name:"Jean-Philippe Mateta",clubId:"crystal-palace",position:"ST",age:29,overall:80,nationality:"France",value:30000000,wage:80000},
  "eddie-nketiah":   { id:"eddie-nketiah",   name:"Eddie Nketiah",   clubId:"crystal-palace", position:"ST",  age:27, overall:77, nationality:"England",   value:10000000, wage:70000  },
  "jorgen-strand-larsen":{id:"jorgen-strand-larsen",name:"Jørgen Strand Larsen",clubId:"crystal-palace",position:"ST",age:26,overall:78,nationality:"Norway",value:40000000,wage:70000},

  /* ==========================================================
     EVERTON (23)
     2026/27 payroll confirmed [citation:17]
     ========================================================== */
  "jordan-pickford": { id:"jordan-pickford", name:"Jordan Pickford", clubId:"everton", position:"GK",  age:32, overall:83, nationality:"England",   value:25000000, wage:150000 },
  "mark-travers-2":  { id:"mark-travers-2",  name:"Mark Travers",    clubId:"everton", position:"GK",  age:27, overall:73, nationality:"Ireland",   value:3000000,  wage:25000  },
  "tom-king":        { id:"tom-king",        name:"Tom King",        clubId:"everton", position:"GK",  age:31, overall:68, nationality:"Wales",     value:100000,   wage:15000  },
  "jake-obrien":     { id:"jake-obrien",     name:"Jake O'Brien",    clubId:"everton", position:"CB",  age:25, overall:79, nationality:"Ireland",   value:18000000, wage:35000  },
  "jarrad-branthwaite":{id:"jarrad-branthwaite",name:"Jarrad Branthwaite",clubId:"everton",position:"CB",age:24,overall:82,nationality:"England",value:50000000,wage:120000},
  "james-tarkowski": { id:"james-tarkowski", name:"James Tarkowski", clubId:"everton", position:"CB",  age:33, overall:79, nationality:"England",   value:5000000,  wage:120000 },
  "michael-keane":   { id:"michael-keane",   name:"Michael Keane",   clubId:"everton", position:"CB",  age:33, overall:75, nationality:"England",   value:3000000,  wage:80000  },
  "vitaliy-mykolenko":{id:"vitaliy-mykolenko",name:"Vitaliy Mykolenko",clubId:"everton",position:"LB",age:27,overall:78,nationality:"Ukraine",value:25000000,wage:80000},
  "nathan-patterson":{ id:"nathan-patterson",name:"Nathan Patterson",clubId:"everton", position:"RB",  age:24, overall:75, nationality:"Scotland",  value:10000000, wage:50000  },
  "seamus-coleman":  { id:"seamus-coleman",  name:"Séamus Coleman",  clubId:"everton", position:"RB",  age:37, overall:70, nationality:"Ireland",   value:300000,   wage:40000  },
  "james-garner":    { id:"james-garner",    name:"James Garner",    clubId:"everton", position:"CM",  age:25, overall:78, nationality:"England",   value:45000000, wage:80000  },
  "idrissa-gueye":   { id:"idrissa-gueye",   name:"Idrissa Gueye",   clubId:"everton", position:"CDM", age:36, overall:75, nationality:"Senegal",   value:1000000,  wage:60000  },
  "kiernan-dewsbury-hall":{id:"kiernan-dewsbury-hall",name:"Kiernan Dewsbury-Hall",clubId:"everton",position:"CM",age:27,overall:79,nationality:"England",value:35000000,wage:90000},
  "christian-norgaard-2":{id:"christian-norgaard-2",name:"Christian Nørgaard",clubId:"everton",position:"CDM",age:32,overall:78,nationality:"Denmark",value:15000000,wage:90000},
  "harrison-armstrong":{id:"harrison-armstrong",name:"Harrison Armstrong",clubId:"everton",position:"CM",age:19,overall:72,nationality:"England",value:12000000,wage:25000},
  "charly-alcaraz":  { id:"charly-alcaraz",  name:"Charly Alcaraz",  clubId:"everton", position:"CAM", age:23, overall:76, nationality:"Argentina", value:15000000, wage:50000  },
  "jack-grealish":   { id:"jack-grealish",   name:"Jack Grealish",   clubId:"everton", position:"LW",  age:30, overall:80, nationality:"England",   value:20000000, wage:300000 },
  "dwight-mcneil-2": { id:"dwight-mcneil-2", name:"Dwight McNeil",   clubId:"everton", position:"LW",  age:26, overall:77, nationality:"England",   value:15000000, wage:65000  },
  "tyler-dibling":   { id:"tyler-dibling",   name:"Tyler Dibling",   clubId:"everton", position:"RW",  age:20, overall:76, nationality:"England",   value:17000000, wage:40000  },
  "brennan-johnson": { id:"brennan-johnson", name:"Brennan Johnson", clubId:"everton", position:"RW",  age:25, overall:79, nationality:"Wales",     value:30000000, wage:80000  },
  "iliman-ndiaye":   { id:"iliman-ndiaye",   name:"Iliman Ndiaye",   clubId:"everton", position:"CAM", age:26, overall:78, nationality:"Senegal",   value:20000000, wage:70000  },
  "thierno-barry":   { id:"thierno-barry",   name:"Thierno Barry",   clubId:"everton", position:"ST",  age:23, overall:77, nationality:"France",    value:20000000, wage:45000  },
  "beto":            { id:"beto",            name:"Beto",            clubId:"everton", position:"ST",  age:28, overall:76, nationality:"Portugal",  value:12000000, wage:65000  },

  /* ==========================================================
     FULHAM (24)
     2026/27 squad numbers confirmed [citation:6]
     ========================================================== */
  "bernd-leno":      { id:"bernd-leno",      name:"Bernd Leno",      clubId:"fulham", position:"GK",  age:34, overall:80, nationality:"Germany",   value:6000000,  wage:90000  },
  "benjamin-lecomte":{ id:"benjamin-lecomte",name:"Benjamin Lecomte",clubId:"fulham", position:"GK",  age:35, overall:73, nationality:"France",    value:800000,   wage:35000  },
  "steven-benda":    { id:"steven-benda",    name:"Steven Benda",    clubId:"fulham", position:"GK",  age:28, overall:70, nationality:"Germany",   value:500000,   wage:25000  },
  "kenny-tete":      { id:"kenny-tete",      name:"Kenny Tete",      clubId:"fulham", position:"RB",  age:30, overall:78, nationality:"Netherlands",value:15000000,wage:80000 },
  "timothy-castagne":{ id:"timothy-castagne",name:"Timothy Castagne",clubId:"fulham", position:"RB",  age:30, overall:78, nationality:"Belgium",   value:15000000, wage:80000  },
  "antonee-robinson":{ id:"antonee-robinson",name:"Antonee Robinson",clubId:"fulham", position:"LB",  age:28, overall:80, nationality:"USA",       value:25000000, wage:90000  },
  "ryan-sessegnon":  { id:"ryan-sessegnon",  name:"Ryan Sessegnon",  clubId:"fulham", position:"LB",  age:26, overall:76, nationality:"England",   value:10000000, wage:60000  },
  "calvin-bassey":   { id:"calvin-bassey",   name:"Calvin Bassey",   clubId:"fulham", position:"CB",  age:26, overall:79, nationality:"Nigeria",   value:25000000, wage:80000  },
  "joachim-andersen":{ id:"joachim-andersen",name:"Joachim Andersen",clubId:"fulham", position:"CB",  age:30, overall:79, nationality:"Denmark",   value:20000000, wage:90000  },
  "jorge-cuenca":    { id:"jorge-cuenca",    name:"Jorge Cuenca",    clubId:"fulham", position:"CB",  age:26, overall:76, nationality:"Spain",     value:12000000, wage:55000  },
  "harrison-reed":   { id:"harrison-reed",   name:"Harrison Reed",   clubId:"fulham", position:"CDM", age:31, overall:75, nationality:"England",   value:6000000,  wage:60000  },
  "sander-berge":    { id:"sander-berge",    name:"Sander Berge",    clubId:"fulham", position:"CDM", age:28, overall:78, nationality:"Norway",    value:20000000, wage:70000  },
  "tom-cairney":     { id:"tom-cairney",     name:"Tom Cairney",     clubId:"fulham", position:"CM",  age:35, overall:76, nationality:"Scotland",  value:3000000,  wage:60000  },
  "shea-charles":    { id:"shea-charles",    name:"Shea Charles",    clubId:"fulham", position:"CM",  age:22, overall:74, nationality:"Northern Ireland",value:10000000,wage:30000},
  "cesar-palacios":  { id:"cesar-palacios",  name:"César Palacios",  clubId:"fulham", position:"CM",  age:21, overall:74, nationality:"Spain",     value:12000000, wage:30000  },
  "oscar-bobb":      { id:"oscar-bobb",      name:"Oscar Bobb",      clubId:"fulham", position:"RW",  age:23, overall:78, nationality:"Norway",    value:28000000, wage:65000  },
  "alex-iwobi":      { id:"alex-iwobi",      name:"Alex Iwobi",      clubId:"fulham", position:"RW",  age:30, overall:78, nationality:"Nigeria",   value:15000000, wage:80000  },
  "kevin":           { id:"kevin",           name:"Kevin",           clubId:"fulham", position:"LW",  age:23, overall:78, nationality:"Brazil",    value:25000000, wage:60000  },
  "emile-smith-rowe":{ id:"emile-smith-rowe",name:"Emile Smith Rowe",clubId:"fulham", position:"CAM", age:26, overall:78, nationality:"England",   value:18000000, wage:70000  },
  "gonzalo-garcia":  { id:"gonzalo-garcia",  name:"Gonzalo García",  clubId:"fulham", position:"ST",  age:22, overall:77, nationality:"Spain",     value:25000000, wage:55000  },
  "rodrigo-muniz":   { id:"rodrigo-muniz",   name:"Rodrigo Muniz",   clubId:"fulham", position:"ST",  age:25, overall:78, nationality:"Brazil",    value:20000000, wage:65000  },
  "josh-king":       { id:"josh-king",       name:"Josh King",       clubId:"fulham", position:"ST",  age:19, overall:72, nationality:"England",   value:8000000,  wage:25000  },
  "jonah-kusi-asare":{ id:"jonah-kusi-asare",name:"Jonah Kusi-Asare",clubId:"fulham", position:"ST",  age:19, overall:73, nationality:"Sweden",    value:10000000, wage:25000  },

  /* ==========================================================
     LEEDS UNITED (23)
     ========================================================== */
  "lucas-perri":     { id:"lucas-perri",     name:"Lucas Perri",     clubId:"leeds-united", position:"GK",  age:28, overall:78, nationality:"Brazil",    value:15000000, wage:60000  },
  "karl-darlow":     { id:"karl-darlow",     name:"Karl Darlow",     clubId:"leeds-united", position:"GK",  age:35, overall:72, nationality:"England",   value:1000000,  wage:35000  },
  "illan-meslier-2": { id:"illan-meslier-2", name:"Illan Meslier",   clubId:"leeds-united", position:"GK",  age:26, overall:78, nationality:"France",    value:20000000, wage:60000  },
  "jayden-bogle":    { id:"jayden-bogle",    name:"Jayden Bogle",    clubId:"leeds-united", position:"RB",  age:26, overall:76, nationality:"England",   value:12000000, wage:55000  },
  "djed-spence":     { id:"djed-spence",     name:"Djed Spence",     clubId:"leeds-united", position:"RB",  age:26, overall:77, nationality:"England",   value:15000000, wage:60000  },
  "gabriel-gudmundsson":{id:"gabriel-gudmundsson",name:"Gabriel Gudmundsson",clubId:"leeds-united",position:"LB",age:27,overall:76,nationality:"Sweden",value:12000000,wage:55000},
  "joe-rothwell":    { id:"joe-rothwell",    name:"Joe Rothwell",    clubId:"leeds-united", position:"CM",  age:31, overall:75, nationality:"England",   value:6000000,  wage:55000  },
  "ethan-ampadu":    { id:"ethan-ampadu",    name:"Ethan Ampadu",    clubId:"leeds-united", position:"CB",  age:26, overall:78, nationality:"Wales",     value:18000000, wage:65000  },
  "pascal-struijk":  { id:"pascal-struijk",  name:"Pascal Struijk",  clubId:"leeds-united", position:"CB",  age:26, overall:78, nationality:"Netherlands",value:18000000,wage:65000 },
  "jaka-bijol":      { id:"jaka-bijol",      name:"Jaka Bijol",      clubId:"leeds-united", position:"CB",  age:27, overall:78, nationality:"Slovenia",  value:18000000, wage:65000  },
  "sebastiaan-bornauw":{id:"sebastiaan-bornauw",name:"Sebastiaan Bornauw",clubId:"leeds-united",position:"CB",age:27,overall:76,nationality:"Belgium",value:12000000,wage:55000},
  "daniel-james":    { id:"daniel-james",    name:"Daniel James",    clubId:"leeds-united", position:"RW",  age:28, overall:78, nationality:"Wales",     value:18000000, wage:70000  },
  "willy-gnonto":    { id:"willy-gnonto",    name:"Willy Gnonto",    clubId:"leeds-united", position:"LW",  age:22, overall:78, nationality:"Italy",     value:25000000, wage:60000  },
  "brenden-aaronson":{ id:"brenden-aaronson",name:"Brenden Aaronson",clubId:"leeds-united", position:"CAM", age:25, overall:77, nationality:"USA",       value:18000000, wage:65000  },
  "anton-stach":     { id:"anton-stach",     name:"Anton Stach",     clubId:"leeds-united", position:"CM",  age:27, overall:78, nationality:"Germany",   value:20000000, wage:65000  },
  "sean-longstaff":  { id:"sean-longstaff",  name:"Sean Longstaff",  clubId:"leeds-united", position:"CM",  age:28, overall:76, nationality:"England",   value:12000000, wage:60000  },
  "ilja-gruev":      { id:"ilja-gruev",      name:"Ilia Gruev",      clubId:"leeds-united", position:"CDM", age:26, overall:76, nationality:"Bulgaria",  value:12000000, wage:55000  },
  "dominik-szoboszlai-2":{id:"dominik-szoboszlai-2",name:"Dominik Szoboszlai",clubId:"leeds-united",position:"CM",age:25,overall:80,nationality:"Hungary",value:35000000,wage:90000},
  "lukas-nmecha":    { id:"lukas-nmecha",    name:"Lukas Nmecha",    clubId:"leeds-united", position:"ST",  age:27, overall:76, nationality:"Germany",   value:10000000, wage:55000  },
  "joel-piroe":      { id:"joel-piroe",      name:"Joël Piroe",      clubId:"leeds-united", position:"ST",  age:27, overall:77, nationality:"Netherlands",value:15000000,wage:60000 },
  "mateo-joseph":    { id:"mateo-joseph",    name:"Mateo Joseph",    clubId:"leeds-united", position:"ST",  age:22, overall:75, nationality:"Spain",     value:12000000, wage:40000  },
  "patrick-bamford": { id:"patrick-bamford", name:"Patrick Bamford", clubId:"leeds-united", position:"ST",  age:33, overall:72, nationality:"England",   value:2000000,  wage:50000  },

  /* ==========================================================
     LIVERPOOL (25)
     2026/27 squad list confirmed [citation:10]
     ========================================================== */
  "alisson-becker":  { id:"alisson-becker",  name:"Alisson Becker",  clubId:"liverpool", position:"GK",  age:34, overall:86, nationality:"Brazil",    value:15000000, wage:180000 },
  "giorgi-mamardashvili":{id:"giorgi-mamardashvili",name:"Giorgi Mamardashvili",clubId:"liverpool",position:"GK",age:25,overall:82,nationality:"Georgia",value:35000000,wage:70000},
  "freddie-woodman": { id:"freddie-woodman", name:"Freddie Woodman", clubId:"liverpool", position:"GK",  age:29, overall:73, nationality:"England",   value:2000000,  wage:35000  },
  "vitezslav-jaros": { id:"vitezslav-jaros", name:"Vítězslav Jaroš", clubId:"liverpool", position:"GK",  age:24, overall:72, nationality:"Czechia",   value:3000000,  wage:25000  },
  "virgil-van-dijk": { id:"virgil-van-dijk", name:"Virgil van Dijk", clubId:"liverpool", position:"CB",  age:35, overall:85, nationality:"Netherlands",value:15000000,wage:220000},
  "jeremy-jacquet":  { id:"jeremy-jacquet",  name:"Jérémy Jacquet",  clubId:"liverpool", position:"CB",  age:21, overall:76, nationality:"France",    value:20000000, wage:40000  },
  "giovanni-leoni":  { id:"giovanni-leoni",  name:"Giovanni Leoni",  clubId:"liverpool", position:"CB",  age:20, overall:75, nationality:"Italy",     value:18000000, wage:35000  },
  "joe-gomez":       { id:"joe-gomez",       name:"Joe Gomez",       clubId:"liverpool", position:"CB",  age:29, overall:78, nationality:"England",   value:12000000, wage:80000  },
  "milos-kerkez-2":  { id:"milos-kerkez-2",  name:"Miloš Kerkez",    clubId:"liverpool", position:"LB",  age:23, overall:78, nationality:"Hungary",   value:25000000, wage:60000  },
  "kostas-tsimikas": { id:"kostas-tsimikas", name:"Kostas Tsimikas", clubId:"liverpool", position:"LB",  age:30, overall:77, nationality:"Greece",    value:10000000, wage:70000  },
  "jeremie-frimpong":{ id:"jeremie-frimpong",name:"Jeremie Frimpong",clubId:"liverpool", position:"RB",  age:25, overall:79, nationality:"Netherlands",value:25000000,wage:70000 },
  "conor-bradley":   { id:"conor-bradley",   name:"Conor Bradley",   clubId:"liverpool", position:"RB",  age:23, overall:78, nationality:"Northern Ireland",value:20000000,wage:55000},
  "ronald-araujo":   { id:"ronald-araujo",   name:"Ronald Araújo",   clubId:"liverpool", position:"CB",  age:27, overall:82, nationality:"Uruguay",   value:40000000, wage:120000 },
  "alexis-mac-allister":{id:"alexis-mac-allister",name:"Alexis Mac Allister",clubId:"liverpool",position:"CM",age:27,overall:84,nationality:"Argentina",value:60000000,wage:140000},
  "dominik-szoboszlai":{id:"dominik-szoboszlai",name:"Dominik Szoboszlai",clubId:"liverpool",position:"CM",age:25,overall:83,nationality:"Hungary",value:50000000,wage:120000},
  "ryan-gravenberch":{ id:"ryan-gravenberch",name:"Ryan Gravenberch",clubId:"liverpool", position:"CDM", age:24, overall:82, nationality:"Netherlands",value:45000000,wage:100000},
  "wataru-endo":     { id:"wataru-endo",     name:"Wataru Endo",     clubId:"liverpool", position:"CDM", age:33, overall:76, nationality:"Japan",     value:5000000,  wage:70000  },
  "florian-wirtz":   { id:"florian-wirtz",   name:"Florian Wirtz",   clubId:"liverpool", position:"CAM", age:23, overall:87, nationality:"Germany",   value:110000000,wage:200000 },
  "harvey-elliott-2":{ id:"harvey-elliott-2",name:"Harvey Elliott",  clubId:"liverpool", position:"CAM", age:23, overall:79, nationality:"England",   value:25000000, wage:80000  },
  "federico-chiesa": { id:"federico-chiesa", name:"Federico Chiesa", clubId:"liverpool", position:"RW",  age:28, overall:80, nationality:"Italy",     value:18000000, wage:120000 },
  "bradley-barcola": { id:"bradley-barcola", name:"Bradley Barcola", clubId:"liverpool", position:"LW",  age:23, overall:82, nationality:"France",    value:50000000, wage:100000 },
  "cody-gakpo":      { id:"cody-gakpo",      name:"Cody Gakpo",      clubId:"liverpool", position:"LW",  age:27, overall:82, nationality:"Netherlands",value:40000000,wage:110000 },
  "alexander-isak":  { id:"alexander-isak",  name:"Alexander Isak",  clubId:"liverpool", position:"ST",  age:26, overall:86, nationality:"Sweden",    value:90000000, wage:180000 },
  "hugo-ekitike":    { id:"hugo-ekitike",    name:"Hugo Ekitike",    clubId:"liverpool", position:"ST",  age:24, overall:82, nationality:"France",    value:50000000, wage:100000 },
  "victor-munoz":    { id:"victor-munoz",    name:"Víctor Muñoz",    clubId:"liverpool", position:"RW",  age:22, overall:76, nationality:"Spain",     value:15000000, wage:40000  },

  /* ==========================================================
     MANCHESTER CITY (24)
     2026/27 squad numbers confirmed [citation:11]
     ========================================================== */
  "gianluigi-donnarumma":{id:"gianluigi-donnarumma",name:"Gianluigi Donnarumma",clubId:"man-city",position:"GK",age:27,overall:88,nationality:"Italy",value:50000000,wage:200000},
  "geronimo-rulli":  { id:"geronimo-rulli",  name:"Gerónimo Rulli",  clubId:"man-city", position:"GK",  age:34, overall:78, nationality:"Argentina", value:5000000,  wage:60000  },
  "stefan-ortega":   { id:"stefan-ortega",   name:"Stefan Ortega",   clubId:"man-city", position:"GK",  age:33, overall:80, nationality:"Germany",   value:10000000, wage:80000  },
  "kyle-walker-2":   { id:"kyle-walker-2",   name:"Kyle Walker",     clubId:"man-city", position:"RB",  age:36, overall:76, nationality:"England",   value:1500000,  wage:100000 },
  "matheus-nunes":   { id:"matheus-nunes",   name:"Matheus Nunes",   clubId:"man-city", position:"RB",  age:27, overall:79, nationality:"Portugal",  value:25000000, wage:90000  },
  "rico-lewis":      { id:"rico-lewis",      name:"Rico Lewis",      clubId:"man-city", position:"RB",  age:21, overall:79, nationality:"England",   value:30000000, wage:60000  },
  "josko-gvardiol":  { id:"josko-gvardiol",  name:"Joško Gvardiol",  clubId:"man-city", position:"LB",  age:24, overall:84, nationality:"Croatia",   value:60000000, wage:120000 },
  "rayan-ait-nouri": { id:"rayan-ait-nouri", name:"Rayan Aït-Nouri", clubId:"man-city", position:"LB",  age:25, overall:80, nationality:"Algeria",   value:30000000, wage:80000  },
  "ruben-dias":      { id:"ruben-dias",      name:"Rúben Dias",      clubId:"man-city", position:"CB",  age:29, overall:87, nationality:"Portugal",  value:70000000, wage:180000 },
  "marc-guehi":      { id:"marc-guehi",      name:"Marc Guéhi",      clubId:"man-city", position:"CB",  age:26, overall:82, nationality:"England",   value:55000000, wage:100000 },
  "abdukodir-khusanov":{id:"abdukodir-khusanov",name:"Abdukodir Khusanov",clubId:"man-city",position:"CB",age:22,overall:78,nationality:"Uzbekistan",value:25000000,wage:50000},
  "nathan-ake":      { id:"nathan-ake",      name:"Nathan Aké",      clubId:"man-city", position:"CB",  age:31, overall:80, nationality:"Netherlands",value:18000000,wage:100000 },
  "rodri":           { id:"rodri",           name:"Rodri",           clubId:"man-city", position:"CDM", age:30, overall:89, nationality:"Spain",     value:90000000, wage:220000 },
  "nico-gonzalez":   { id:"nico-gonzalez",   name:"Nico González",   clubId:"man-city", position:"CDM", age:24, overall:80, nationality:"Spain",     value:30000000, wage:80000  },
  "elliot-anderson": { id:"elliot-anderson", name:"Elliot Anderson", clubId:"man-city", position:"CM",  age:23, overall:80, nationality:"England",   value:35000000, wage:80000  },
  "bernardo-silva":  { id:"bernardo-silva",  name:"Bernardo Silva",  clubId:"man-city", position:"CM",  age:32, overall:84, nationality:"Portugal",  value:25000000, wage:150000 },
  "mateo-kovacic":   { id:"mateo-kovacic",   name:"Mateo Kovačić",   clubId:"man-city", position:"CM",  age:32, overall:82, nationality:"Croatia",   value:18000000, wage:130000 },
  "phil-foden":      { id:"phil-foden",      name:"Phil Foden",      clubId:"man-city", position:"CAM", age:26, overall:85, nationality:"England",   value:70000000, wage:180000 },
  "tijjani-reijnders":{id:"tijjani-reijnders",name:"Tijjani Reijnders",clubId:"man-city",position:"CM",age:28,overall:81,nationality:"Netherlands",value:35000000,wage:90000},
  "savio":           { id:"savio",           name:"Sávio",           clubId:"man-city", position:"RW",  age:22, overall:79, nationality:"Brazil",    value:30000000, wage:60000  },
  "jeremy-doku":     { id:"jeremy-doku",     name:"Jérémy Doku",     clubId:"man-city", position:"LW",  age:24, overall:81, nationality:"Belgium",   value:40000000, wage:90000  },
  "omar-marmoush":   { id:"omar-marmoush",   name:"Omar Marmoush",   clubId:"man-city", position:"ST",  age:27, overall:82, nationality:"Egypt",     value:40000000, wage:100000 },
  "erling-haaland":  { id:"erling-haaland",  name:"Erling Haaland",  clubId:"man-city", position:"ST",  age:26, overall:91, nationality:"Norway",    value:180000000,wage:400000 },

  /* ==========================================================
     MANCHESTER UNITED (23)
     2026/27 squad confirmed [citation:3][citation:13]
     ========================================================== */
  "senne-lammens":   { id:"senne-lammens",   name:"Senne Lammens",   clubId:"man-united", position:"GK",  age:24, overall:78, nationality:"Belgium",   value:18000000, wage:50000  },
  "karl-darlow-2":   { id:"karl-darlow-2",   name:"Karl Darlow",     clubId:"man-united", position:"GK",  age:35, overall:72, nationality:"England",   value:1000000,  wage:35000  },
  "tom-heaton":      { id:"tom-heaton",      name:"Tom Heaton",      clubId:"man-united", position:"GK",  age:40, overall:70, nationality:"England",   value:200000,   wage:30000  },
  "diogo-dalot":     { id:"diogo-dalot",     name:"Diogo Dalot",     clubId:"man-united", position:"RB",  age:27, overall:81, nationality:"Portugal",  value:30000000, wage:100000 },
  "noussair-mazraoui":{id:"noussair-mazraoui",name:"Noussair Mazraoui",clubId:"man-united",position:"RB",age:28,overall:80,nationality:"Morocco",value:25000000,wage:90000},
  "patrick-dorgu":   { id:"patrick-dorgu",   name:"Patrick Dorgu",   clubId:"man-united", position:"LB",  age:22, overall:78, nationality:"Denmark",   value:25000000, wage:55000  },
  "luke-shaw":       { id:"luke-shaw",       name:"Luke Shaw",       clubId:"man-united", position:"LB",  age:31, overall:78, nationality:"England",   value:12000000, wage:120000 },
  "matthijs-de-ligt":{ id:"matthijs-de-ligt",name:"Matthijs de Ligt",clubId:"man-united", position:"CB",  age:27, overall:82, nationality:"Netherlands",value:35000000,wage:120000 },
  "lisandro-martinez":{id:"lisandro-martinez",name:"Lisandro Martínez",clubId:"man-united",position:"CB",age:28,overall:82,nationality:"Argentina",value:35000000,wage:120000},
  "harry-maguire":   { id:"harry-maguire",   name:"Harry Maguire",   clubId:"man-united", position:"CB",  age:33, overall:79, nationality:"England",   value:8000000,  wage:120000 },
  "leny-yoro":       { id:"leny-yoro",       name:"Leny Yoro",       clubId:"man-united", position:"CB",  age:20, overall:79, nationality:"France",    value:40000000, wage:60000  },
  "carlos-baleba":   { id:"carlos-baleba",   name:"Carlos Baleba",   clubId:"man-united", position:"CDM", age:22, overall:81, nationality:"Cameroon",  value:50000000, wage:90000  },
  "manuel-ugarte":   { id:"manuel-ugarte",   name:"Manuel Ugarte",   clubId:"man-united", position:"CDM", age:25, overall:78, nationality:"Uruguay",   value:25000000, wage:80000  },
  "andrey-santos":   { id:"andrey-santos",   name:"Andrey Santos",   clubId:"man-united", position:"CM",  age:22, overall:78, nationality:"Brazil",    value:30000000, wage:60000  },
  "bruno-fernandes": { id:"bruno-fernandes", name:"Bruno Fernandes", clubId:"man-united", position:"CAM", age:31, overall:85, nationality:"Portugal",  value:50000000, wage:200000 },
  "mason-mount":     { id:"mason-mount",     name:"Mason Mount",     clubId:"man-united", position:"CAM", age:27, overall:78, nationality:"England",   value:18000000, wage:120000 },
  "youri-tielemans-2":{id:"youri-tielemans-2",name:"Youri Tielemans",clubId:"man-united",position:"CM",age:29,overall:83,nationality:"Belgium",value:35000000,wage:150000},
  "amad-diallo":     { id:"amad-diallo",     name:"Amad Diallo",     clubId:"man-united", position:"RW",  age:24, overall:79, nationality:"Ivory Coast",value:30000000,wage:70000},
  "bryan-mbeumo":    { id:"bryan-mbeumo",    name:"Bryan Mbeumo",    clubId:"man-united", position:"RW",  age:27, overall:81, nationality:"Cameroon",  value:35000000, wage:100000 },
  "matheus-cunha":   { id:"matheus-cunha",   name:"Matheus Cunha",   clubId:"man-united", position:"ST",  age:27, overall:82, nationality:"Brazil",    value:40000000, wage:120000 },
  "marcus-rashford": { id:"marcus-rashford", name:"Marcus Rashford", clubId:"man-united", position:"ST",  age:28, overall:82, nationality:"England",   value:35000000, wage:150000 },
  "benjamin-sesko":  { id:"benjamin-sesko",  name:"Benjamin Šeško",  clubId:"man-united", position:"ST",  age:23, overall:81, nationality:"Slovenia",  value:45000000, wage:90000  },
  "joshua-zirkzee":  { id:"joshua-zirkzee",  name:"Joshua Zirkzee",  clubId:"man-united", position:"ST",  age:25, overall:78, nationality:"Netherlands",value:20000000,wage:80000 },

  /* ==========================================================
     NEWCASTLE UNITED (24)
     2026/27 squad numbers confirmed [citation:4]
     ========================================================== */
  "nick-pope":       { id:"nick-pope",       name:"Nick Pope",       clubId:"newcastle", position:"GK",  age:34, overall:81, nationality:"England",   value:8000000,  wage:90000  },
  "lukas-hornicek":  { id:"lukas-hornicek",  name:"Lukáš Horníček",  clubId:"newcastle", position:"GK",  age:23, overall:74, nationality:"Czechia",   value:5000000,  wage:25000  },
  "ewen-jaouen":     { id:"ewen-jaouen",     name:"Ewen Jaouen",     clubId:"newcastle", position:"GK",  age:20, overall:70, nationality:"France",    value:3000000,  wage:15000  },
  "tino-livramento": { id:"tino-livramento", name:"Tino Livramento", clubId:"newcastle", position:"RB",  age:23, overall:80, nationality:"England",   value:35000000, wage:70000  },
  "kieran-trippier": { id:"kieran-trippier", name:"Kieran Trippier", clubId:"newcastle", position:"RB",  age:35, overall:76, nationality:"England",   value:3000000,  wage:100000 },
  "lewis-hall":      { id:"lewis-hall",      name:"Lewis Hall",      clubId:"newcastle", position:"LB",  age:22, overall:79, nationality:"England",   value:30000000, wage:60000  },
  "sven-botman":     { id:"sven-botman",     name:"Sven Botman",     clubId:"newcastle", position:"CB",  age:26, overall:80, nationality:"Netherlands",value:30000000,wage:80000 },
  "fabian-schar":    { id:"fabian-schar",    name:"Fabian Schär",    clubId:"newcastle", position:"CB",  age:34, overall:78, nationality:"Switzerland",value:5000000, wage:80000 },
  "malick-thiaw":    { id:"malick-thiaw",    name:"Malick Thiaw",    clubId:"newcastle", position:"CB",  age:25, overall:79, nationality:"Germany",   value:25000000, wage:70000  },
  "dan-burn":        { id:"dan-burn",        name:"Dan Burn",        clubId:"newcastle", position:"CB",  age:34, overall:76, nationality:"England",   value:3000000,  wage:70000  },
  "aladji-bamba":    { id:"aladji-bamba",    name:"Aladji Bamba",    clubId:"newcastle", position:"CM",  age:20, overall:74, nationality:"France",    value:12000000, wage:25000  },
  "joelinton":       { id:"joelinton",       name:"Joelinton",       clubId:"newcastle", position:"CM",  age:30, overall:81, nationality:"Brazil",    value:30000000, wage:100000 },
  "sean-steur":      { id:"sean-steur",      name:"Sean Steur",      clubId:"newcastle", position:"CM",  age:19, overall:72, nationality:"Netherlands",value:6000000, wage:20000 },
  "joe-willock":     { id:"joe-willock",     name:"Joe Willock",     clubId:"newcastle", position:"CM",  age:27, overall:76, nationality:"England",   value:10000000, wage:70000  },
  "lewis-miley":     { id:"lewis-miley",     name:"Lewis Miley",     clubId:"newcastle", position:"CM",  age:20, overall:75, nationality:"England",   value:15000000, wage:40000  },
  "jacob-ramsey":    { id:"jacob-ramsey",    name:"Jacob Ramsey",    clubId:"newcastle", position:"CM",  age:25, overall:77, nationality:"England",   value:20000000, wage:70000  },
  "bruno-guimaraes-2":{id:"bruno-guimaraes-2",name:"Bruno Guimarães",clubId:"newcastle",position:"CM",age:28,overall:84,nationality:"Brazil",value:65000000,wage:200000},
  "anthony-elanga":  { id:"anthony-elanga",  name:"Anthony Elanga",  clubId:"newcastle", position:"RW",  age:24, overall:78, nationality:"Sweden",    value:22000000, wage:65000  },
  "jacob-murphy":    { id:"jacob-murphy",    name:"Jacob Murphy",    clubId:"newcastle", position:"RW",  age:31, overall:77, nationality:"England",   value:8000000,  wage:65000  },
  "harvey-barnes":   { id:"harvey-barnes",   name:"Harvey Barnes",   clubId:"newcastle", position:"LW",  age:29, overall:79, nationality:"England",   value:18000000, wage:80000  },
  "yoane-wissa-2":   { id:"yoane-wissa-2",   name:"Yoane Wissa",     clubId:"newcastle", position:"ST",  age:29, overall:79, nationality:"DR Congo",  value:18000000, wage:75000  },
  "will-osula":      { id:"will-osula",      name:"William Osula",   clubId:"newcastle", position:"ST",  age:23, overall:75, nationality:"Denmark",   value:10000000, wage:40000  },
  "nick-woltemade":  { id:"nick-woltemade",  name:"Nick Woltemade",  clubId:"newcastle", position:"ST",  age:24, overall:82, nationality:"Germany",   value:45000000, wage:90000  },
  "bazoumana-toure": { id:"bazoumana-toure", name:"Bazoumana Touré", clubId:"newcastle", position:"RW",  age:19, overall:73, nationality:"Ivory Coast",value:10000000,wage:25000},

  /* ==========================================================
     NOTTINGHAM FOREST (23)
     ========================================================== */
  "matz-sels":       { id:"matz-sels",       name:"Matz Sels",       clubId:"nottingham-forest", position:"GK",  age:34, overall:79, nationality:"Belgium",   value:6000000,  wage:70000  },
  "carlos-miguel":   { id:"carlos-miguel",   name:"Carlos Miguel",   clubId:"nottingham-forest", position:"GK",  age:28, overall:76, nationality:"Brazil",    value:10000000, wage:50000  },
  "john-victor":     { id:"john-victor",     name:"John Victor",     clubId:"nottingham-forest", position:"GK",  age:30, overall:74, nationality:"Brazil",    value:5000000,  wage:40000  },
  "oleksandr-zinchenko-2":{id:"oleksandr-zinchenko-2",name:"Oleksandr Zinchenko",clubId:"nottingham-forest",position:"LB",age:29,overall:78,nationality:"Ukraine",value:20000000,wage:120000},
  "nuno-tavares":    { id:"nuno-tavares",    name:"Nuno Tavares",    clubId:"nottingham-forest", position:"LB",  age:26, overall:76, nationality:"Portugal",  value:12000000, wage:60000  },
  "ole-ainsworth":   { id:"ole-ainsworth",   name:"Ola Aina",        clubId:"nottingham-forest", position:"RB",  age:30, overall:78, nationality:"Nigeria",   value:15000000, wage:70000  },
  "nikola-milenkovic":{id:"nikola-milenkovic",name:"Nikola Milenković",clubId:"nottingham-forest",position:"CB",age:29,overall:80,nationality:"Serbia",value:25000000,wage:80000},
  "murillo":         { id:"murillo",         name:"Murillo",         clubId:"nottingham-forest", position:"CB",  age:24, overall:81, nationality:"Brazil",    value:45000000, wage:80000  },
  "morgan-gibbs-white":{id:"morgan-gibbs-white",name:"Morgan Gibbs-White",clubId:"nottingham-forest",position:"CAM",age:26,overall:82,nationality:"England",value:50000000,wage:100000},
  "elliot-anderson-2":{id:"elliot-anderson-2",name:"Elliot Anderson",clubId:"nottingham-forest",position:"CM",age:23,overall:80,nationality:"England",value:35000000,wage:80000},
  "ibrahim-sangare": { id:"ibrahim-sangare", name:"Ibrahim Sangaré", clubId:"nottingham-forest", position:"CDM", age:29, overall:79, nationality:"Ivory Coast",value:20000000,wage:80000},
  "ryan-yates":      { id:"ryan-yates",      name:"Ryan Yates",      clubId:"nottingham-forest", position:"CM",  age:29, overall:75, nationality:"England",   value:6000000,  wage:55000  },
  "douglas-luiz-2":  { id:"douglas-luiz-2",  name:"Douglas Luiz",    clubId:"nottingham-forest", position:"CM",  age:28, overall:82, nationality:"Brazil",    value:40000000, wage:140000 },
  "danilo":          { id:"danilo",          name:"Danilo",          clubId:"nottingham-forest", position:"CM",  age:25, overall:78, nationality:"Brazil",    value:25000000, wage:70000  },
  "callum-hudson-odoi":{id:"callum-hudson-odoi",name:"Callum Hudson-Odoi",clubId:"nottingham-forest",position:"LW",age:26,overall:78,nationality:"England",value:20000000,wage:70000},
  "anthony-elanga-2":{ id:"anthony-elanga-2",name:"Anthony Elanga", clubId:"nottingham-forest", position:"RW",  age:24, overall:78, nationality:"Sweden",    value:22000000, wage:65000  },
  "dilane-bakwa":    { id:"dilane-bakwa",    name:"Dilane Bakwa",    clubId:"nottingham-forest", position:"RW",  age:24, overall:77, nationality:"France",    value:18000000, wage:60000  },
  "chris-wood":      { id:"chris-wood",      name:"Chris Wood",      clubId:"nottingham-forest", position:"ST",  age:35, overall:78, nationality:"New Zealand",value:5000000, wage:80000 },
  "igor-jesus":      { id:"igor-jesus",      name:"Igor Jesus",      clubId:"nottingham-forest", position:"ST",  age:25, overall:78, nationality:"Brazil",    value:25000000, wage:65000  },
  "taiwo-awoniyi":   { id:"taiwo-awoniyi",   name:"Taiwo Awoniyi",   clubId:"nottingham-forest", position:"ST",  age:29, overall:77, nationality:"Nigeria",   value:15000000, wage:70000  },
  "arvin-appiah":    { id:"arvin-appiah",    name:"Arvin Appiah",    clubId:"nottingham-forest", position:"RW",  age:25, overall:74, nationality:"England",   value:5000000,  wage:40000  },

  /* ==========================================================
     SUNDERLAND (23)
     ========================================================== */
  "robin-roefs":     { id:"robin-roefs",     name:"Robin Roefs",     clubId:"sunderland", position:"GK",  age:23, overall:76, nationality:"Netherlands",value:15000000, wage:40000 },
  "anthony-patterson":{id:"anthony-patterson",name:"Anthony Patterson",clubId:"sunderland",position:"GK",age:26,overall:76,nationality:"England",value:15000000,wage:50000},
  "simon-moore":     { id:"simon-moore",     name:"Simon Moore",     clubId:"sunderland", position:"GK",  age:36, overall:70, nationality:"England",   value:200000,   wage:25000  },
  "trai-hume":       { id:"trai-hume",       name:"Trai Hume",       clubId:"sunderland", position:"RB",  age:24, overall:77, nationality:"Northern Ireland",value:18000000,wage:55000},
  "nordi-mukiele":   { id:"nordi-mukiele",   name:"Nordi Mukiele",   clubId:"sunderland", position:"RB",  age:28, overall:78, nationality:"France",    value:15000000, wage:70000  },
  "dennis-cirkin":   { id:"dennis-cirkin",   name:"Dennis Cirkin",   clubId:"sunderland", position:"LB",  age:24, overall:76, nationality:"England",   value:12000000, wage:50000  },
  "arthur-masauku":  { id:"arthur-masauku",  name:"Arthur Masuaku",  clubId:"sunderland", position:"LB",  age:32, overall:74, nationality:"DR Congo",  value:2000000,  wage:50000  },
  "dan-ballard":     { id:"dan-ballard",     name:"Dan Ballard",     clubId:"sunderland", position:"CB",  age:26, overall:77, nationality:"Northern Ireland",value:18000000,wage:55000},
  "omar-alderete":   { id:"omar-alderete",   name:"Omar Alderete",   clubId:"sunderland", position:"CB",  age:29, overall:78, nationality:"Paraguay",  value:18000000, wage:65000  },
  "jenson-seelt":    { id:"jenson-seelt",    name:"Jenson Seelt",    clubId:"sunderland", position:"CB",  age:23, overall:74, nationality:"Netherlands",value:6000000, wage:35000 },
  "luke-onien":      { id:"luke-onien",      name:"Luke O'Nien",     clubId:"sunderland", position:"CB",  age:31, overall:74, nationality:"England",   value:2000000,  wage:50000  },
  "granit-xhaka":    { id:"granit-xhaka",    name:"Granit Xhaka",    clubId:"sunderland", position:"CDM", age:34, overall:80, nationality:"Switzerland",value:8000000, wage:120000 },
  "noah-sadiki":     { id:"noah-sadiki",     name:"Noah Sadiki",     clubId:"sunderland", position:"CM",  age:21, overall:76, nationality:"DR Congo",  value:20000000, wage:40000  },
  "habib-diarra":    { id:"habib-diarra",    name:"Habib Diarra",    clubId:"sunderland", position:"CM",  age:22, overall:76, nationality:"Senegal",   value:20000000, wage:40000  },
  "chris-rigg":      { id:"chris-rigg",      name:"Chris Rigg",      clubId:"sunderland", position:"CAM", age:19, overall:76, nationality:"England",   value:25000000, wage:30000  },
  "ennis-mundle":    { id:"ennis-mundle",    name:"Ennis Mundle",    clubId:"sunderland", position:"LW",  age:23, overall:76, nationality:"England",   value:15000000, wage:45000  },
  "wilson-isidor":   { id:"wilson-isidor",   name:"Wilson Isidor",   clubId:"sunderland", position:"ST",  age:26, overall:77, nationality:"France",    value:15000000, wage:60000  },
  "brian-brobbey":   { id:"brian-brobbey",   name:"Brian Brobbey",   clubId:"sunderland", position:"ST",  age:24, overall:76, nationality:"Netherlands",value:15000000, wage:55000 },
  "bertrand-traore": { id:"bertrand-traore", name:"Bertrand Traoré", clubId:"sunderland", position:"RW",  age:30, overall:75, nationality:"Burkina Faso",value:6000000,wage:60000},
  "romaine-mundle":  { id:"romaine-mundle",  name:"Romaine Mundle",  clubId:"sunderland", position:"LW",  age:23, overall:75, nationality:"England",   value:12000000, wage:40000  },
  "milan-aleksic":   { id:"milan-aleksic",   name:"Milan Aleksić",   clubId:"sunderland", position:"CM",  age:21, overall:74, nationality:"Serbia",    value:10000000, wage:30000  },
  "talbi-chemsdine": { id:"talbi-chemsdine", name:"Chemsdine Talbi", clubId:"sunderland", position:"RW",  age:21, overall:74, nationality:"Morocco",   value:12000000, wage:35000  },
  "ahmed-abdullahi": { id:"ahmed-abdullahi", name:"Ahmed Abdullahi", clubId:"sunderland", position:"ST",  age:21, overall:73, nationality:"Nigeria",   value:8000000,  wage:25000  },

  /* ==========================================================
     TOTTENHAM (24)
     New signings: Van Hecke, Robertson, Savio, Tonali, Marmoush,
     Senesi, Gallagher [citation:14]
     ========================================================== */
  "antonin-kinsky":  { id:"antonin-kinsky",  name:"Antonín Kinský",  clubId:"tottenham", position:"GK",  age:23, overall:78, nationality:"Czechia",   value:20000000, wage:50000  },
  "guglielmo-vicario":{id:"guglielmo-vicario",name:"Guglielmo Vicario",clubId:"tottenham",position:"GK",  age:30, overall:81, nationality:"Italy",     value:20000000, wage:90000  },
  "martin-dubravka-2":{id:"martin-dubravka-2",name:"Martin Dúbravka",clubId:"tottenham",position:"GK",  age:37, overall:75, nationality:"Slovakia",  value:1500000,  wage:50000  },
  "pedro-porro":     { id:"pedro-porro",     name:"Pedro Porro",     clubId:"tottenham", position:"RB",  age:26, overall:81, nationality:"Spain",     value:35000000, wage:90000  },
  "andy-robertson":  { id:"andy-robertson",  name:"Andy Robertson",  clubId:"tottenham", position:"LB",  age:32, overall:82, nationality:"Scotland",  value:15000000, wage:120000 },
  "destiny-udogie":  { id:"destiny-udogie",  name:"Destiny Udogie",  clubId:"tottenham", position:"LB",  age:23, overall:80, nationality:"Italy",     value:35000000, wage:70000  },
  "mickey-van-de-ven":{id:"mickey-van-de-ven",name:"Micky van de Ven",clubId:"tottenham",position:"CB", age:25, overall:82, nationality:"Netherlands",value:45000000,wage:90000 },
  "jan-paul-van-hecke":{id:"jan-paul-van-hecke",name:"Jan Paul van Hecke",clubId:"tottenham",position:"CB",age:26,overall:81,nationality:"Netherlands",value:45000000,wage:90000},
  "marcos-senesi-2": { id:"marcos-senesi-2", name:"Marcos Senesi",   clubId:"tottenham", position:"CB",  age:29, overall:79, nationality:"Argentina", value:22000000, wage:80000  },
  "cristian-romero": { id:"cristian-romero", name:"Cristian Romero", clubId:"tottenham", position:"CB",  age:28, overall:84, nationality:"Argentina", value:50000000, wage:150000 },
  "sandro-tonali":   { id:"sandro-tonali",   name:"Sandro Tonali",   clubId:"tottenham", position:"CDM", age:26, overall:83, nationality:"Italy",     value:50000000, wage:120000 },
  "rodrigo-bentancur":{id:"rodrigo-bentancur",name:"Rodrigo Bentancur",clubId:"tottenham",position:"CM", age:29, overall:80, nationality:"Uruguay",   value:25000000, wage:100000 },
  "conor-gallagher": { id:"conor-gallagher", name:"Conor Gallagher", clubId:"tottenham", position:"CM",  age:26, overall:80, nationality:"England",   value:30000000, wage:90000  },
  "lucas-bergvall":  { id:"lucas-bergvall",  name:"Lucas Bergvall",  clubId:"tottenham", position:"CM",  age:20, overall:78, nationality:"Sweden",    value:30000000, wage:45000  },
  "archie-gray":     { id:"archie-gray",     name:"Archie Gray",     clubId:"tottenham", position:"CM",  age:20, overall:78, nationality:"England",   value:30000000, wage:45000  },
  "james-maddison":  { id:"james-maddison",  name:"James Maddison",  clubId:"tottenham", position:"CAM", age:29, overall:80, nationality:"England",   value:25000000, wage:110000 },
  "savio-2":         { id:"savio-2",         name:"Sávio",           clubId:"tottenham", position:"RW",  age:22, overall:79, nationality:"Brazil",    value:30000000, wage:60000  },
  "mohammed-kudus":  { id:"mohammed-kudus",  name:"Mohammed Kudus",  clubId:"tottenham", position:"RW",  age:26, overall:81, nationality:"Ghana",     value:40000000, wage:100000 },
  "omar-marmoush-2": { id:"omar-marmoush-2", name:"Omar Marmoush",   clubId:"tottenham", position:"ST",  age:27, overall:82, nationality:"Egypt",     value:40000000, wage:100000 },
  "dominic-solanke": { id:"dominic-solanke", name:"Dominic Solanke", clubId:"tottenham", position:"ST",  age:28, overall:80, nationality:"England",   value:25000000, wage:100000 },
  "richarlison":     { id:"richarlison",     name:"Richarlison",     clubId:"tottenham", position:"ST",  age:29, overall:78, nationality:"Brazil",    value:15000000, wage:120000 },
  "mateus-fernandes":{ id:"mateus-fernandes",name:"Mateus Fernandes",clubId:"tottenham", position:"CM",  age:22, overall:77, nationality:"Portugal",  value:20000000, wage:50000  },
  "dane-scarlett":   { id:"dane-scarlett",   name:"Dane Scarlett",   clubId:"tottenham", position:"ST",  age:22, overall:73, nationality:"England",   value:6000000,  wage:30000  },

  /* ==========================================================
     WEST HAM UNITED (24)
     2026/27 squad numbers confirmed [citation:5][citation:16]
     ========================================================== */
  "mads-hermansen":  { id:"mads-hermansen",  name:"Mads Hermansen",  clubId:"west-ham", position:"GK",  age:26, overall:78, nationality:"Denmark",   value:18000000, wage:60000  },
  "alphonse-areola": { id:"alphonse-areola", name:"Alphonse Areola", clubId:"west-ham", position:"GK",  age:33, overall:78, nationality:"France",    value:8000000,  wage:80000  },
  "finlay-herrick":  { id:"finlay-herrick",  name:"Finlay Herrick",  clubId:"west-ham", position:"GK",  age:20, overall:68, nationality:"England",   value:1000000,  wage:15000  },
  "kyle-walker-peters":{id:"kyle-walker-peters",name:"Kyle Walker-Peters",clubId:"west-ham",position:"RB",age:29,overall:77,nationality:"England",value:15000000,wage:70000},
  "aaron-wan-bissaka":{id:"aaron-wan-bissaka",name:"Aaron Wan-Bissaka",clubId:"west-ham",position:"RB",age:28,overall:79,nationality:"England",value:20000000,wage:80000},
  "joel-veltman-2":  { id:"joel-veltman-2",  name:"Joël Veltman",    clubId:"west-ham", position:"RB",  age:34, overall:75, nationality:"Netherlands",value:1500000, wage:60000 },
  "maximilian-kilman":{id:"maximilian-kilman",name:"Maximilian Kilman",clubId:"west-ham",position:"CB",age:29,overall:78,nationality:"England",value:25000000,wage:80000},
  "konstantinos-mavropanos":{id:"konstantinos-mavropanos",name:"Konstantinos Mavropanos",clubId:"west-ham",position:"CB",age:29,overall:77,nationality:"Greece",value:15000000,wage:70000},
  "jean-clair-todibo":{id:"jean-clair-todibo",name:"Jean-Clair Todibo",clubId:"west-ham",position:"CB",age:26,overall:78,nationality:"France",value:20000000,wage:75000},
  "morato":          { id:"morato",          name:"Morato",          clubId:"west-ham", position:"CB",  age:25, overall:76, nationality:"Brazil",    value:12000000, wage:55000  },
  "el-hadji-malick-diouf":{id:"el-hadji-malick-diouf",name:"El Hadji Malick Diouf",clubId:"west-ham",position:"LB",age:22,overall:77,nationality:"Senegal",value:20000000,wage:50000},
  "ollie-scarles":   { id:"ollie-scarles",   name:"Ollie Scarles",   clubId:"west-ham", position:"LB",  age:21, overall:74, nationality:"England",   value:8000000,  wage:30000  },
  "edson-alvarez":   { id:"edson-alvarez",   name:"Edson Álvarez",   clubId:"west-ham", position:"CDM", age:29, overall:80, nationality:"Mexico",    value:25000000, wage:100000 },
  "tomas-soucek":    { id:"tomas-soucek",    name:"Tomáš Souček",    clubId:"west-ham", position:"CM",  age:31, overall:78, nationality:"Czechia",   value:12000000, wage:90000  },
  "james-ward-prowse-2":{id:"james-ward-prowse-2",name:"James Ward-Prowse",clubId:"west-ham",position:"CM",age:31,overall:77,nationality:"England",value:5000000,wage:80000},
  "soungoutou-magassa":{id:"soungoutou-magassa",name:"Soungoutou Magassa",clubId:"west-ham",position:"CDM",age:23,overall:76,nationality:"France",value:15000000,wage:50000},
  "mohamadou-kante": { id:"mohamadou-kante", name:"Mohamadou Kanté", clubId:"west-ham", position:"CM",  age:21, overall:73, nationality:"France",    value:6000000,  wage:25000  },
  "jarrod-bowen":    { id:"jarrod-bowen",    name:"Jarrod Bowen",    clubId:"west-ham", position:"RW",  age:29, overall:82, nationality:"England",   value:40000000, wage:120000 },
  "maxwel-cornet":   { id:"maxwel-cornet",   name:"Maxwel Cornet",   clubId:"west-ham", position:"LW",  age:30, overall:75, nationality:"Ivory Coast",value:6000000, wage:70000 },
  "manor-solomon":   { id:"manor-solomon",   name:"Manor Solomon",   clubId:"west-ham", position:"LW",  age:27, overall:76, nationality:"Israel",    value:10000000, wage:60000  },
  "taty-castellanos":{ id:"taty-castellanos",name:"Taty Castellanos",clubId:"west-ham", position:"ST",  age:28, overall:78, nationality:"Argentina", value:20000000, wage:80000  },
  "niclas-fullkrug": { id:"niclas-fullkrug", name:"Niclas Füllkrug", clubId:"west-ham", position:"ST",  age:33, overall:77, nationality:"Germany",   value:6000000,  wage:90000  },
  "callum-wilson":   { id:"callum-wilson",   name:"Callum Wilson",   clubId:"west-ham", position:"ST",  age:34, overall:74, nationality:"England",   value:2000000,  wage:70000  },
  "pablo-felipe":    { id:"pablo-felipe",    name:"Pablo Felipe",    clubId:"west-ham", position:"ST",  age:23, overall:74, nationality:"Brazil",    value:10000000, wage:35000  },

  /* ==========================================================
     WOLVES (23)
     ========================================================== */
  "jose-sa":         { id:"jose-sa",         name:"José Sá",         clubId:"wolves", position:"GK",  age:33, overall:80, nationality:"Portugal",  value:10000000, wage:80000  },
  "sam-johnstone":   { id:"sam-johnstone",   name:"Sam Johnstone",   clubId:"wolves", position:"GK",  age:33, overall:76, nationality:"England",   value:4000000,  wage:70000  },
  "dan-bentley":     { id:"dan-bentley",     name:"Dan Bentley",     clubId:"wolves", position:"GK",  age:33, overall:71, nationality:"England",   value:500000,   wage:35000  },
  "nelson-semedo":   { id:"nelson-semedo",   name:"Nélson Semedo",   clubId:"wolves", position:"RB",  age:33, overall:77, nationality:"Portugal",  value:5000000,  wage:80000  },
  "matt-doherty":    { id:"matt-doherty",    name:"Matt Doherty",    clubId:"wolves", position:"RB",  age:34, overall:74, nationality:"Ireland",   value:1500000,  wage:60000  },
  "rayan-ait-nouri-2":{id:"rayan-ait-nouri-2",name:"Rayan Aït-Nouri",clubId:"wolves",position:"LB",  age:25, overall:80, nationality:"Algeria",   value:30000000, wage:80000  },
  "hugo-bueno":      { id:"hugo-bueno",      name:"Hugo Bueno",      clubId:"wolves", position:"LB",  age:23, overall:75, nationality:"Spain",     value:8000000,  wage:40000  },
  "toti-gomes":      { id:"toti-gomes",      name:"Toti Gomes",      clubId:"wolves", position:"CB",  age:27, overall:77, nationality:"Portugal",  value:15000000, wage:65000  },
  "santiago-bueno":  { id:"santiago-bueno",  name:"Santiago Bueno",  clubId:"wolves", position:"CB",  age:27, overall:76, nationality:"Uruguay",   value:12000000, wage:55000  },
  "emmanuel-agbadou":{ id:"emmanuel-agbadou",name:"Emmanuel Agbadou",clubId:"wolves", position:"CB",  age:29, overall:78, nationality:"Ivory Coast",value:18000000, wage:70000 },
  "yerson-mosquera": { id:"yerson-mosquera", name:"Yerson Mosquera", clubId:"wolves", position:"CB",  age:25, overall:77, nationality:"Colombia",  value:15000000, wage:60000  },
  "joao-gomes":      { id:"joao-gomes",      name:"João Gomes",      clubId:"wolves", position:"CDM", age:25, overall:80, nationality:"Brazil",    value:30000000, wage:80000  },
  "andre":           { id:"andre",           name:"André",           clubId:"wolves", position:"CDM", age:25, overall:78, nationality:"Brazil",    value:20000000, wage:70000  },
  "marshall-munetsi":{ id:"marshall-munetsi",name:"Marshall Munetsi",clubId:"wolves", position:"CM",  age:29, overall:76, nationality:"Zimbabwe",  value:10000000, wage:55000  },
  "jean-ricner-bellegarde":{id:"jean-ricner-bellegarde",name:"Jean-Ricner Bellegarde",clubId:"wolves",position:"CM",age:28,overall:78,nationality:"France",value:18000000,wage:70000},
  "rodrigo-gomes":   { id:"rodrigo-gomes",   name:"Rodrigo Gomes",   clubId:"wolves", position:"RW",  age:23, overall:76, nationality:"Portugal",  value:15000000, wage:50000  },
  "hwang-hee-chan":  { id:"hwang-hee-chan",  name:"Hwang Hee-chan",  clubId:"wolves", position:"LW",  age:30, overall:78, nationality:"South Korea",value:15000000, wage:70000 },
  "pedro-lima":      { id:"pedro-lima",      name:"Pedro Lima",      clubId:"wolves", position:"RW",  age:20, overall:74, nationality:"Brazil",    value:10000000, wage:30000  },
  "jorgen-strand-larsen-2":{id:"jorgen-strand-larsen-2",name:"Jørgen Strand Larsen",clubId:"wolves",position:"ST",age:26,overall:78,nationality:"Norway",value:40000000,wage:70000},
  "tolu-arokodare":  { id:"tolu-arokodare",  name:"Tolu Arokodare",  clubId:"wolves", position:"ST",  age:25, overall:77, nationality:"Nigeria",   value:15000000, wage:55000  },
  "sasa-kalajdzic":  { id:"sasa-kalajdzic",  name:"Saša Kalajdžić",  clubId:"wolves", position:"ST",  age:29, overall:74, nationality:"Austria",   value:5000000,  wage:70000  },
  "fabio-silva":     { id:"fabio-silva",     name:"Fábio Silva",     clubId:"wolves", position:"ST",  age:24, overall:76, nationality:"Portugal",  value:15000000, wage:60000  },
  "enzo-gonzalez":   { id:"enzo-gonzalez",   name:"Enso González",   clubId:"wolves", position:"LW",  age:21, overall:73, nationality:"Paraguay",  value:7000000,  wage:30000  }

};

/* ---------- Helpers ---------- */

export function getPlayer(id) {
  return PLAYERS[id] || null;
}

export function getPlayersByClub(clubId) {
  return Object.values(PLAYERS).filter(p => p.clubId === clubId);
}

export function getAllPlayers() {
  return Object.values(PLAYERS);
}

export function getPlayersByPosition(clubId, position) {
  return getPlayersByClub(clubId).filter(p => p.position === position);
}

export function getSquadSize(clubId) {
  return getPlayersByClub(clubId).length;
}
