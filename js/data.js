// World Cup Draft & Simulation - Database Module

// Formations Layout and Connections
// x and y coordinates are percentages of the pitch layout (0-100)
// GK is at the bottom, Attackers at the top
export const formations = {
  "4-3-3": {
    name: "4-3-3",
    style: "Wing Play",
    slots: [
      { id: 0, pos: "GK",  x: 50, y: 88, conn: [1, 2] },
      { id: 1, pos: "LCB", x: 35, y: 72, conn: [0, 2, 3, 5] },
      { id: 2, pos: "RCB", x: 65, y: 72, conn: [0, 1, 4, 7] },
      { id: 3, pos: "LB",  x: 15, y: 65, conn: [1, 5, 8] },
      { id: 4, pos: "RB",  x: 85, y: 65, conn: [2, 7, 10] },
      { id: 5, pos: "LCM", x: 30, y: 48, conn: [1, 3, 6, 8] },
      { id: 6, pos: "CM",  x: 50, y: 48, conn: [5, 7, 9] },
      { id: 7, pos: "RCM", x: 70, y: 48, conn: [2, 4, 6, 10] },
      { id: 8, pos: "LW",  x: 20, y: 22, conn: [3, 5, 9] },
      { id: 9, pos: "ST",  x: 50, y: 20, conn: [6, 8, 10] },
      { id: 10,pos: "RW",  x: 80, y: 22, conn: [4, 7, 9] }
    ]
  },
  "4-4-2": {
    name: "4-4-2",
    style: "Balanced",
    slots: [
      { id: 0, pos: "GK",  x: 50, y: 88, conn: [1, 2] },
      { id: 1, pos: "LCB", x: 35, y: 72, conn: [0, 2, 3, 5] },
      { id: 2, pos: "RCB", x: 65, y: 72, conn: [0, 1, 4, 6] },
      { id: 3, pos: "LB",  x: 15, y: 65, conn: [1, 5] },
      { id: 4, pos: "RB",  x: 85, y: 65, conn: [2, 6] },
      { id: 5, pos: "LCM", x: 38, y: 48, conn: [1, 3, 6, 7, 9] },
      { id: 6, pos: "RCM", x: 62, y: 48, conn: [2, 4, 5, 8, 10] },
      { id: 7, pos: "LM",  x: 15, y: 42, conn: [5, 9] },
      { id: 8, pos: "RM",  x: 85, y: 42, conn: [6, 10] },
      { id: 9, pos: "LS",  x: 35, y: 20, conn: [5, 7, 10] },
      { id: 10,pos: "RS",  x: 65, y: 20, conn: [6, 8, 9] }
    ]
  },
  "3-5-2": {
    name: "3-5-2",
    style: "Possession",
    slots: [
      { id: 0, pos: "GK",  x: 50, y: 88, conn: [1, 2, 3] },
      { id: 1, pos: "CB",  x: 50, y: 74, conn: [0, 2, 3, 5, 6] },
      { id: 2, pos: "LCB", x: 28, y: 70, conn: [0, 1, 4, 5] },
      { id: 3, pos: "RCB", x: 72, y: 70, conn: [0, 1, 7, 6] },
      { id: 4, pos: "LM",  x: 15, y: 48, conn: [2, 5, 8] },
      { id: 5, pos: "LDM", x: 36, y: 52, conn: [1, 2, 4, 6, 8] },
      { id: 6, pos: "RDM", x: 64, y: 52, conn: [1, 3, 5, 7, 8] },
      { id: 7, pos: "RM",  x: 85, y: 48, conn: [3, 6, 8] },
      { id: 8, pos: "CAM", x: 50, y: 36, conn: [5, 6, 9, 10] },
      { id: 9, pos: "LS",  x: 35, y: 18, conn: [8, 10] },
      { id: 10,pos: "RS",  x: 65, y: 18, conn: [8, 9] }
    ]
  },
  "4-2-3-1": {
    name: "4-2-3-1",
    style: "Balanced",
    slots: [
      { id: 0, pos: "GK",  x: 50, y: 88, conn: [1, 2] },
      { id: 1, pos: "LCB", x: 35, y: 72, conn: [0, 2, 3, 5] },
      { id: 2, pos: "RCB", x: 65, y: 72, conn: [0, 1, 4, 6] },
      { id: 3, pos: "LB",  x: 15, y: 65, conn: [1, 5] },
      { id: 4, pos: "RB",  x: 85, y: 65, conn: [2, 6] },
      { id: 5, pos: "LDM", x: 36, y: 54, conn: [1, 3, 6, 8] },
      { id: 6, pos: "RDM", x: 64, y: 54, conn: [2, 4, 5, 9] },
      { id: 7, pos: "LAM", x: 20, y: 35, conn: [5, 8] },
      { id: 8, pos: "CAM", x: 50, y: 35, conn: [5, 6, 7, 9, 10] },
      { id: 9, pos: "RAM", x: 80, y: 35, conn: [6, 8] },
      { id: 10,pos: "ST",  x: 50, y: 18, conn: [8] }
    ]
  },
  "4-5-1": {
    name: "4-5-1",
    style: "Possession",
    slots: [
      { id: 0, pos: "GK",  x: 50, y: 88, conn: [1, 2] },
      { id: 1, pos: "LCB", x: 35, y: 72, conn: [0, 2, 3, 5] },
      { id: 2, pos: "RCB", x: 65, y: 72, conn: [0, 1, 4, 7] },
      { id: 3, pos: "LB",  x: 15, y: 65, conn: [1, 6] },
      { id: 4, pos: "RB",  x: 85, y: 65, conn: [2, 9] },
      { id: 5, pos: "CDM", x: 50, y: 56, conn: [1, 2, 7, 8] },
      { id: 6, pos: "LM",  x: 15, y: 44, conn: [3, 7] },
      { id: 7, pos: "LCM", x: 33, y: 45, conn: [1, 5, 6, 10] },
      { id: 8, pos: "RCM", x: 67, y: 45, conn: [2, 5, 9, 10] },
      { id: 9, pos: "RM",  x: 85, y: 44, conn: [4, 8] },
      { id: 10,pos: "ST",  x: 50, y: 20, conn: [7, 8] }
    ]
  },
  "5-3-2": {
    name: "5-3-2",
    style: "Low Block",
    slots: [
      { id: 0, pos: "GK",  x: 50, y: 88, conn: [1, 2, 3] },
      { id: 1, pos: "CB",  x: 50, y: 74, conn: [0, 2, 3, 7] },
      { id: 2, pos: "LCB", x: 32, y: 72, conn: [0, 1, 4, 6] },
      { id: 3, pos: "RCB", x: 68, y: 72, conn: [0, 1, 5, 8] },
      { id: 4, pos: "LWB", x: 15, y: 60, conn: [2, 6] },
      { id: 5, pos: "RWB", x: 85, y: 60, conn: [3, 8] },
      { id: 6, pos: "LCM", x: 33, y: 46, conn: [2, 4, 7, 9] },
      { id: 7, pos: "CM",  x: 50, y: 46, conn: [1, 6, 8, 9, 10] },
      { id: 8, pos: "RCM", x: 67, y: 46, conn: [3, 5, 7, 10] },
      { id: 9, pos: "LS",  x: 35, y: 20, conn: [6, 7, 9] },
      { id: 10,pos: "RS",  x: 65, y: 20, conn: [7, 8, 9] }
    ]
  },
  "3-4-3": {
    name: "3-4-3",
    style: "Wing Play",
    slots: [
      { id: 0, pos: "GK",  x: 50, y: 88, conn: [1, 2, 3] },
      { id: 1, pos: "CB",  x: 50, y: 74, conn: [0, 2, 3, 5, 6] },
      { id: 2, pos: "LCB", x: 28, y: 70, conn: [0, 1, 4, 5] },
      { id: 3, pos: "RCB", x: 72, y: 70, conn: [0, 1, 6, 7] },
      { id: 4, pos: "LM",  x: 15, y: 48, conn: [2, 5, 8] },
      { id: 5, pos: "LCM", x: 36, y: 50, conn: [1, 2, 4, 6, 8, 9] },
      { id: 6, pos: "RCM", x: 64, y: 50, conn: [1, 3, 5, 7, 9, 10] },
      { id: 7, pos: "RM",  x: 85, y: 48, conn: [3, 6, 10] },
      { id: 8, pos: "LW",  x: 22, y: 22, conn: [4, 5, 9] },
      { id: 9, pos: "ST",  x: 50, y: 20, conn: [5, 6, 8, 10] },
      { id: 10,pos: "RW",  x: 78, y: 22, conn: [6, 7, 9] }
    ]
  },
  "4-1-2-1-2": {
    name: "4-1-2-1-2",
    style: "Balanced",
    slots: [
      { id: 0, pos: "GK",  x: 50, y: 88, conn: [1, 2] },
      { id: 1, pos: "LCB", x: 35, y: 72, conn: [0, 2, 3, 5] },
      { id: 2, pos: "RCB", x: 65, y: 72, conn: [0, 1, 4, 5] },
      { id: 3, pos: "LB",  x: 15, y: 65, conn: [1, 6] },
      { id: 4, pos: "RB",  x: 85, y: 65, conn: [2, 7] },
      { id: 5, pos: "CDM", x: 50, y: 56, conn: [1, 2, 6, 7] },
      { id: 6, pos: "LM",  x: 20, y: 44, conn: [3, 5, 8, 9] },
      { id: 7, pos: "RM",  x: 80, y: 44, conn: [4, 5, 8, 10] },
      { id: 8, pos: "CAM", x: 50, y: 36, conn: [6, 7, 9, 10] },
      { id: 9, pos: "LS",  x: 35, y: 20, conn: [6, 8, 10] },
      { id: 10,pos: "RS",  x: 65, y: 20, conn: [7, 8, 9] }
    ]
  }
};

// Historical CPU teams for the tournament bracket
export const cpuTeams = [
  { name: "Brezilya 2002", emoji: "🇧🇷", countryCode: "br", rating: 93, formation: "3-5-2", tactic: "attacking", colorPrimary: "#f59e0b", colorSecondary: "#10b981" },
  { name: "Fransa 1998", emoji: "🇫🇷", countryCode: "fr", rating: 91, formation: "4-3-3", tactic: "balanced", colorPrimary: "#2563eb", colorSecondary: "#ffffff" },
  { name: "Arjantin 1986", emoji: "🇦🇷", countryCode: "ar", rating: 90, formation: "3-5-2", tactic: "balanced", colorPrimary: "#38bdf8", colorSecondary: "#ffffff" },
  { name: "İspanya 2010", emoji: "🇪🇸", countryCode: "es", rating: 92, formation: "4-2-3-1", tactic: "balanced", colorPrimary: "#dc2626", colorSecondary: "#f59e0b" },
  { name: "Almanya 2014", emoji: "🇩🇪", countryCode: "de", rating: 93, formation: "4-3-3", tactic: "attacking", colorPrimary: "#1e293b", colorSecondary: "#ffffff" },
  { name: "İtalya 2006", emoji: "🇮🇹", countryCode: "it", rating: 91, formation: "4-4-2", tactic: "defensive", colorPrimary: "#1d4ed8", colorSecondary: "#10b981" },
  { name: "Arjantin 2022", emoji: "🇦🇷", countryCode: "ar", rating: 93, formation: "4-3-3", tactic: "attacking", colorPrimary: "#7dd3fc", colorSecondary: "#f59e0b" },
  { name: "Fransa 2018", emoji: "🇫🇷", countryCode: "fr", rating: 92, formation: "4-2-3-1", tactic: "balanced", colorPrimary: "#1e3a8a", colorSecondary: "#ffffff" },
  { name: "Brezilya 1970", emoji: "🇧🇷", countryCode: "br", rating: 95, formation: "3-4-3", tactic: "attacking", colorPrimary: "#ffe066", colorSecondary: "#047857" },
  { name: "Hollanda 1974", emoji: "🇳🇱", countryCode: "nl", rating: 91, formation: "4-3-3", tactic: "attacking", colorPrimary: "#ea580c", colorSecondary: "#ffffff" },
  { name: "Uruguay 1950", emoji: "🇺🇾", countryCode: "uy", rating: 88, formation: "4-3-3", tactic: "balanced", colorPrimary: "#60a5fa", colorSecondary: "#ffffff" },
  { name: "İngiltere 1966", emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", countryCode: "gb-eng", rating: 89, formation: "4-4-2", tactic: "balanced", colorPrimary: "#f8fafc", colorSecondary: "#dc2626" },
  { name: "Portekiz 2006", emoji: "🇵🇹", countryCode: "pt", rating: 88, formation: "4-3-3", tactic: "balanced", colorPrimary: "#b91c1c", colorSecondary: "#047857" },
  { name: "Türkiye 2002", emoji: "🇹🇷", countryCode: "tr", rating: 87, formation: "4-5-1", tactic: "balanced", colorPrimary: "#dc2626", colorSecondary: "#ffffff" },
  { name: "Hırvatistan 2018", emoji: "🇭🇷", countryCode: "hr", rating: 89, formation: "4-2-3-1", tactic: "balanced", colorPrimary: "#ffffff", colorSecondary: "#dc2626" },
  { name: "Macaristan 1954", emoji: "🇭🇺", countryCode: "hu", rating: 91, formation: "3-4-3", tactic: "attacking", colorPrimary: "#dc2626", colorSecondary: "#10b981" },
  { name: "Brezilya 1958", emoji: "🇧🇷", countryCode: "br", rating: 92, formation: "4-4-2", tactic: "attacking", colorPrimary: "#ffe066", colorSecondary: "#047857" },
  { name: "Brezilya 1962", emoji: "🇧🇷", countryCode: "br", rating: 92, formation: "4-3-3", tactic: "attacking", colorPrimary: "#ffe066", colorSecondary: "#047857" },
  { name: "İtalya 1982", emoji: "🇮🇹", countryCode: "it", rating: 91, formation: "4-4-2", tactic: "defensive", colorPrimary: "#1d4ed8", colorSecondary: "#ffffff" },
  { name: "Almanya 1990", emoji: "🇩🇪", countryCode: "de", rating: 92, formation: "3-5-2", tactic: "balanced", colorPrimary: "#1e293b", colorSecondary: "#ffffff" },
  { name: "Brezilya 1994", emoji: "🇧🇷", countryCode: "br", rating: 91, formation: "4-4-2", tactic: "balanced", colorPrimary: "#ffe066", colorSecondary: "#047857" },
  { name: "Belçika 2018", emoji: "🇧🇪", countryCode: "be", rating: 90, formation: "3-4-3", tactic: "attacking", colorPrimary: "#dc2626", colorSecondary: "#f59e0b" },
  { name: "Fas 2022", emoji: "🇲🇦", countryCode: "ma", rating: 88, formation: "4-5-1", tactic: "defensive", colorPrimary: "#c2410c", colorSecondary: "#15803d" },
  { name: "Japonya 2022", emoji: "🇯🇵", countryCode: "jp", rating: 86, formation: "4-5-1", tactic: "defensive", colorPrimary: "#1e3a8a", colorSecondary: "#ffffff" },
  { name: "Hırvatistan 1998", emoji: "🇭🇷", countryCode: "hr", rating: 89, formation: "3-5-2", tactic: "balanced", colorPrimary: "#ffffff", colorSecondary: "#dc2626" },
  { name: "Almanya 1974", emoji: "🇩🇪", countryCode: "de", rating: 93, formation: "4-3-3", tactic: "balanced", colorPrimary: "#1e293b", colorSecondary: "#ffffff" },
  { name: "Hollanda 1998", emoji: "🇳🇱", countryCode: "nl", rating: 90, formation: "4-4-2", tactic: "attacking", colorPrimary: "#ea580c", colorSecondary: "#ffffff" },
  { name: "İsveç 1994", emoji: "🇸🇪", countryCode: "se", rating: 87, formation: "4-4-2", tactic: "balanced", colorPrimary: "#2563eb", colorSecondary: "#ffe066" },
  { name: "Bulgaristan 1994", emoji: "🇧🇬", countryCode: "bg", rating: 86, formation: "4-4-2", tactic: "balanced", colorPrimary: "#10b981", colorSecondary: "#dc2626" },
  { name: "Senegal 2002", emoji: "🇸🇳", countryCode: "sn", rating: 86, formation: "4-5-1", tactic: "balanced", colorPrimary: "#15803d", colorSecondary: "#dc2626" },
  { name: "G. Kore 2002", emoji: "🇰🇷", countryCode: "kr", rating: 87, formation: "4-4-2", tactic: "balanced", colorPrimary: "#ef4444", colorSecondary: "#1e3a8a" }
];

// Utility: get flag image URL from country code (flagcdn.com)
export function getFlagUrl(countryCode, size = 40) {
  if (!countryCode) return null;
  return `https://flagcdn.com/w${size}/${countryCode.toLowerCase()}.png`;
}

// Country code map from country name
export const countryCodeMap = {
  "Soviet Union": "ru", "Italy": "it", "Spain": "es", "Germany": "de",
  "Turkey": "tr", "France": "fr", "Brazil": "br", "England": "gb-eng",
  "Argentina": "ar", "Netherlands": "nl", "Portugal": "pt", "Croatia": "hr",
  "Denmark": "dk", "Cameroon": "cm", "Costa Rica": "cr", "Mexico": "mx",
  "Ghana": "gh", "Japan": "jp", "South Korea": "kr", "Nigeria": "ng",
  "Ireland": "ie", "United States": "us", "Senegal": "sn", "Colombia": "co",
  "Morocco": "ma", "Uruguay": "uy", "Hungary": "hu", "Liberia": "lr",
  "Bulgaria": "bg", "Greece": "gr", "Saudi Arabia": "sa",
  "Peru": "pe", "Poland": "pl", "Sweden": "se", "Belgium": "be",
  "Algeria": "dz", "Scotland": "gb-sct", "Australia": "au",
  "Chile": "cl", "Austria": "at", "Switzerland": "ch",
  "Romania": "ro", "Paraguay": "py", "Ecuador": "ec",
  "Ivory Coast": "ci", "Tunisia": "tn", "Wales": "gb-wls",
  "Serbia": "rs", "Northern Ireland": "gb-nir", "Türkiye": "tr"
};

// Rich list of players representing different areas of the pitch
export const playersDatabase = [

  // ──── 1950s ────
  {
    id: "roque_maspoli", name: "Roque Máspoli", position: "GK", rating: 86,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1950, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 24, pas: 60, dri: 67, def: 90, phy: 72 }
  },
  {
    id: "matias_gonzalez", name: "Matías González", position: "CB", rating: 80,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1950, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "eusebio_tejera", name: "Eusebio Tejera", position: "CB", rating: 80,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1950, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "schubert_gambetta", name: "Schubert Gambetta", position: "CB", rating: 81,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1950, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "victor_rodriguez_andrade", name: "Víctor Rodríguez Andrade", position: "CM", rating: 85,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1950, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "obdulio_varela", name: "Obdulio Varela", position: "CDM", rating: 91,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1950, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 66, pas: 72, dri: 72, def: 91, phy: 83 }
  },
  {
    id: "julio_perez", name: "Julio Pérez", position: "CAM", rating: 83,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1950, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 70, pas: 80, dri: 81, def: 37, phy: 62 }
  },
  {
    id: "alcides_ghiggia", name: "Alcides Ghiggia", position: "RW", rating: 90,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1950, era: "retro", emoji: "👨🏻",
    stats: { pac: 86, sho: 81, pas: 68, dri: 84, def: 40, phy: 72 }
  },
  {
    id: "juan_alberto_schiaffino", name: "Juan Alberto Schiaffino", position: "ST", rating: 93,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1950, era: "retro", emoji: "👨🏻",
    stats: { pac: 84, sho: 92, pas: 74, dri: 81, def: 37, phy: 77 }
  },
  {
    id: "oscar_miguez", name: "Óscar Míguez", position: "LW", rating: 87,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1950, era: "retro", emoji: "👨🏻",
    stats: { pac: 83, sho: 74, pas: 65, dri: 76, def: 33, phy: 67 }
  },
  {
    id: "ruben_moran", name: "Rubén Morán", position: "ST", rating: 79,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1950, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 71, pas: 57, dri: 66, def: 28, phy: 69 }
  },
  {
    id: "kurt_schmied", name: "Kurt Schmied", position: "GK", rating: 81,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 26, pas: 61, dri: 62, def: 83, phy: 73 }
  },
  {
    id: "gerhard_hanappi", name: "Gerhard Hanappi", position: "CB", rating: 86,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 47, pas: 61, dri: 67, def: 87, phy: 76 }
  },
  {
    id: "ernst_happel", name: "Ernst Happel", position: "CB", rating: 85,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 53, pas: 64, dri: 58, def: 85, phy: 81 }
  },
  {
    id: "karl_stotz", name: "Karl Stotz", position: "CB", rating: 78,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "ernst_ocwirk", name: "Ernst Ocwirk", position: "CM", rating: 89,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 69, pas: 83, dri: 72, def: 68, phy: 76 }
  },
  {
    id: "karl_koller", name: "Karl Koller", position: "CM", rating: 82,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "walter_schleger", name: "Walter Schleger", position: "CAM", rating: 78,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 73, pas: 73, dri: 71, def: 35, phy: 63 }
  },
  {
    id: "robert_korner", name: "Robert Körner", position: "RW", rating: 80,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 69, pas: 67, dri: 74, def: 34, phy: 58 }
  },
  {
    id: "alfred_korner", name: "Alfred Körner", position: "ST", rating: 82,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "erich_probst", name: "Erich Probst", position: "LW", rating: 85,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 83, sho: 75, pas: 67, dri: 74, def: 31, phy: 66 }
  },
  {
    id: "theodor_wagner", name: "Theodor Wagner", position: "ST", rating: 84,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 77, pas: 66, dri: 73, def: 33, phy: 71 }
  },
  {
    id: "gyula_grosics_1954", name: "Gyula Grosics", position: "GK", rating: 85,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 23, pas: 62, dri: 69, def: 82, phy: 72 }
  },
  {
    id: "jeno_buzanszky", name: "Jenő Buzánszky", position: "CB", rating: 79,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "gyula_lorant", name: "Gyula Lóránt", position: "CB", rating: 80,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "mihaly_lantos", name: "Mihály Lantos", position: "CB", rating: 79,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "jozsef_bozsik", name: "József Bozsik", position: "CM", rating: 90,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 71, pas: 78, dri: 74, def: 72, phy: 77 }
  },
  {
    id: "jozsef_zakarias", name: "József Zakariás", position: "CM", rating: 80,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 67, pas: 75, dri: 69, def: 63, phy: 68 }
  },
  {
    id: "jozsef_toth_1954", name: "József Tóth", position: "CAM", rating: 78,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 73, pas: 73, dri: 71, def: 35, phy: 63 }
  },
  {
    id: "nandor_hidegkuti", name: "Nándor Hidegkuti", position: "RW", rating: 92,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 87, sho: 78, pas: 69, dri: 85, def: 35, phy: 68 }
  },
  {
    id: "sandor_kocsis", name: "Sándor Kocsis", position: "ST", rating: 93,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 84, sho: 92, pas: 74, dri: 81, def: 37, phy: 77 }
  },
  {
    id: "ferenc_puskas", name: "Ferenc Puskás", position: "LW", rating: 96,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 86, sho: 85, pas: 75, dri: 87, def: 34, phy: 71 }
  },
  {
    id: "zoltan_czibor", name: "Zoltán Czibor", position: "LW", rating: 89,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1954, era: "retro", emoji: "👨🏻",
    stats: { pac: 81, sho: 78, pas: 67, dri: 78, def: 31, phy: 65 }
  },
  {
    id: "toni_turek", name: "Toni Turek", position: "GK", rating: 87,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1954, era: "retro", emoji: "👱🏼",
    stats: { pac: 72, sho: 24, pas: 63, dri: 72, def: 90, phy: 74 }
  },
  {
    id: "jupp_posipal", name: "Jupp Posipal", position: "CB", rating: 82,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1954, era: "retro", emoji: "👱🏼",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "werner_kohlmeyer", name: "Werner Kohlmeyer", position: "CB", rating: 81,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1954, era: "retro", emoji: "👱🏼",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "werner_liebrich", name: "Werner Liebrich", position: "CB", rating: 85,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1954, era: "retro", emoji: "👱🏼",
    stats: { pac: 69, sho: 53, pas: 64, dri: 58, def: 85, phy: 81 }
  },
  {
    id: "horst_eckel", name: "Horst Eckel", position: "CM", rating: 84,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1954, era: "retro", emoji: "👱🏼",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "karl_mai", name: "Karl Mai", position: "CM", rating: 81,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1954, era: "retro", emoji: "👱🏼",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "fritz_walter", name: "Fritz Walter", position: "CAM", rating: 92,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1954, era: "retro", emoji: "👱🏼",
    stats: { pac: 73, sho: 82, pas: 84, dri: 87, def: 46, phy: 66 }
  },
  {
    id: "max_morlock", name: "Max Morlock", position: "RW", rating: 88,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1954, era: "retro", emoji: "👱🏼",
    stats: { pac: 85, sho: 73, pas: 71, dri: 76, def: 38, phy: 63 }
  },
  {
    id: "helmut_rahn", name: "Helmut Rahn", position: "ST", rating: 91,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1954, era: "retro", emoji: "👱🏼",
    stats: { pac: 80, sho: 89, pas: 73, dri: 82, def: 33, phy: 79 }
  },
  {
    id: "ottmar_walter", name: "Ottmar Walter", position: "LW", rating: 84,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1954, era: "retro", emoji: "👱🏼",
    stats: { pac: 75, sho: 71, pas: 68, dri: 76, def: 32, phy: 59 }
  },
  {
    id: "hans_schafer", name: "Hans Schäfer", position: "ST", rating: 86,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1954, era: "retro", emoji: "👱🏼",
    stats: { pac: 75, sho: 81, pas: 61, dri: 71, def: 32, phy: 71 }
  },
  {
    id: "gilmar_1958", name: "Gilmar", position: "GK", rating: 86,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1958, era: "retro", emoji: "👨🏽",
    stats: { pac: 68, sho: 24, pas: 60, dri: 67, def: 90, phy: 72 }
  },
  {
    id: "djalma_santos_1958", name: "Djalma Santos", position: "RB", rating: 90,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1958, era: "retro", emoji: "👨🏽",
    stats: { pac: 80, sho: 55, pas: 73, dri: 72, def: 83, phy: 74 }
  },
  {
    id: "nilton_santos_1958", name: "Nilton Santos", position: "LB", rating: 91,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1958, era: "retro", emoji: "👨🏽",
    stats: { pac: 82, sho: 57, pas: 75, dri: 70, def: 87, phy: 81 }
  },
  {
    id: "bellini", name: "Bellini", position: "CB", rating: 83,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1958, era: "retro", emoji: "👨🏽",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "orlando", name: "Orlando", position: "LB", rating: 82,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1958, era: "retro", emoji: "👨🏽",
    stats: { pac: 74, sho: 58, pas: 66, dri: 64, def: 74, phy: 69 }
  },
  {
    id: "zito_1958", name: "Zito", position: "CM", rating: 84,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1958, era: "retro", emoji: "👨🏽",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "didi_1958", name: "Didi", position: "CAM", rating: 92,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1958, era: "retro", emoji: "👨🏽",
    stats: { pac: 73, sho: 82, pas: 84, dri: 87, def: 46, phy: 66 }
  },
  {
    id: "zagallo_1958", name: "Zagallo", position: "CAM", rating: 87,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1958, era: "retro", emoji: "👨🏽",
    stats: { pac: 69, sho: 75, pas: 79, dri: 84, def: 45, phy: 62 }
  },
  {
    id: "garrincha_1958", name: "Garrincha", position: "RW", rating: 95,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1958, era: "retro", emoji: "👨🏽",
    stats: { pac: 90, sho: 81, pas: 79, dri: 84, def: 38, phy: 68 }
  },
  {
    id: "pele_1958", name: "Pelé", position: "ST", rating: 93,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1958, era: "retro", emoji: "👨🏽",
    stats: { pac: 84, sho: 92, pas: 74, dri: 81, def: 37, phy: 77 }
  },
  {
    id: "vava_1958", name: "Vavá", position: "LW", rating: 89,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1958, era: "retro", emoji: "👨🏽",
    stats: { pac: 81, sho: 78, pas: 67, dri: 78, def: 31, phy: 65 }
  },
  {
    id: "lev_yashin_1958", name: "Lev Yashin", position: "GK", rating: 92,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 78, sho: 27, pas: 69, dri: 78, def: 92, phy: 81 }
  },
  {
    id: "vladimir_kesarev", name: "Vladimir Kesarev", position: "CB", rating: 77,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 43, pas: 62, dri: 55, def: 73, phy: 70 }
  },
  {
    id: "konstantin_krizhevsky", name: "Konstantin Krizhevsky", position: "CB", rating: 78,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "boris_kuznetsov", name: "Boris Kuznetsov", position: "CB", rating: 77,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 43, pas: 62, dri: 55, def: 73, phy: 70 }
  },
  {
    id: "igor_netto", name: "Igor Netto", position: "CM", rating: 86,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 74, pas: 75, dri: 73, def: 67, phy: 70 }
  },
  {
    id: "yuri_voinov", name: "Yuri Voinov", position: "CM", rating: 82,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "viktor_tsarev", name: "Viktor Tsarev", position: "CAM", rating: 77,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 70, pas: 75, dri: 72, def: 40, phy: 59 }
  },
  {
    id: "valentin_ivanov", name: "Valentin Ivanov", position: "RW", rating: 86,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 76, pas: 65, dri: 83, def: 33, phy: 61 }
  },
  {
    id: "nikita_simonyan", name: "Nikita Simonyan", position: "ST", rating: 85,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 60, dri: 70, def: 30, phy: 68 }
  },
  {
    id: "anatoli_ilyin", name: "Anatoli Ilyin", position: "LW", rating: 80,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 77, sho: 70, pas: 62, dri: 74, def: 30, phy: 62 }
  },
  {
    id: "alexander_ivanov", name: "Alexander Ivanov", position: "ST", rating: 78,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 73, pas: 61, dri: 69, def: 29, phy: 66 }
  },
  {
    id: "kalle_svensson", name: "Kalle Svensson", position: "GK", rating: 84,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 22, pas: 58, dri: 64, def: 87, phy: 74 }
  },
  {
    id: "orvar_bergmark", name: "Orvar Bergmark", position: "CB", rating: 84,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "sven_axbom", name: "Sven Axbom", position: "CB", rating: 80,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "bengt_gustavsson", name: "Bengt Gustavsson", position: "CB", rating: 82,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "sigge_parling", name: "Sigge Parling", position: "CM", rating: 81,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "nils_liedholm", name: "Nils Liedholm", position: "CM", rating: 91,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 75, pas: 84, dri: 79, def: 74, phy: 75 }
  },
  {
    id: "gunnar_gren", name: "Gunnar Gren", position: "CAM", rating: 89,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 82, pas: 80, dri: 87, def: 41, phy: 67 }
  },
  {
    id: "kurt_hamrin", name: "Kurt Hamrin", position: "RW", rating: 90,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 86, sho: 81, pas: 68, dri: 84, def: 40, phy: 72 }
  },
  {
    id: "agne_simonsson", name: "Agne Simonsson", position: "ST", rating: 85,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 60, dri: 70, def: 30, phy: 68 }
  },
  {
    id: "lennart_skoglund", name: "Lennart Skoglund", position: "LW", rating: 86,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 81, sho: 73, pas: 72, dri: 79, def: 30, phy: 63 }
  },
  {
    id: "henry_kallgren", name: "Henry Källgren", position: "ST", rating: 76,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1958, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 74, pas: 53, dri: 69, def: 29, phy: 64 }
  },

  // ──── 1960s ────
  {
    id: "gilmar_1962", name: "Gilmar", position: "GK", rating: 86,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 68, sho: 24, pas: 60, dri: 67, def: 90, phy: 72 }
  },
  {
    id: "djalma_santos_1962", name: "Djalma Santos", position: "RB", rating: 90,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 80, sho: 55, pas: 73, dri: 72, def: 83, phy: 74 }
  },
  {
    id: "mauro_ramos", name: "Mauro Ramos", position: "CB", rating: 84,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "zozimo", name: "Zózimo", position: "CB", rating: 82,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "nilton_santos_1962", name: "Nilton Santos", position: "LB", rating: 89,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 84, sho: 56, pas: 73, dri: 68, def: 82, phy: 72 }
  },
  {
    id: "zito_1962", name: "Zito", position: "CM", rating: 85,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "didi_1962", name: "Didi", position: "CAM", rating: 91,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 76, sho: 80, pas: 89, dri: 85, def: 46, phy: 69 }
  },
  {
    id: "zagallo_1962", name: "Zagallo", position: "CAM", rating: 86,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 75, sho: 74, pas: 81, dri: 80, def: 43, phy: 66 }
  },
  {
    id: "garrincha_1962", name: "Garrincha", position: "RW", rating: 97,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 90, sho: 80, pas: 78, dri: 87, def: 36, phy: 76 }
  },
  {
    id: "vava_1962", name: "Vavá", position: "ST", rating: 88,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 75, sho: 86, pas: 68, dri: 76, def: 38, phy: 73 }
  },
  {
    id: "amarildo", name: "Amarildo", position: "LW", rating: 84,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 75, sho: 71, pas: 68, dri: 76, def: 32, phy: 59 }
  },
  {
    id: "pele_1962", name: "Pelé", position: "ST", rating: 93,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 84, sho: 92, pas: 74, dri: 81, def: 37, phy: 77 }
  },
  {
    id: "misael_escuti", name: "Misael Escuti", position: "GK", rating: 82,
    country: "Chile", countryCode: "cl", flag: "🇨🇱", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 66, sho: 20, pas: 56, dri: 65, def: 86, phy: 75 }
  },
  {
    id: "luis_eyzaguirre", name: "Luis Eyzaguirre", position: "RB", rating: 83,
    country: "Chile", countryCode: "cl", flag: "🇨🇱", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 80, sho: 58, pas: 65, dri: 68, def: 79, phy: 75 }
  },
  {
    id: "sergio_navarro", name: "Sergio Navarro", position: "CB", rating: 79,
    country: "Chile", countryCode: "cl", flag: "🇨🇱", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "raul_sanchez", name: "Raúl Sánchez", position: "CB", rating: 80,
    country: "Chile", countryCode: "cl", flag: "🇨🇱", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "carlos_contreras", name: "Carlos Contreras", position: "LB", rating: 78,
    country: "Chile", countryCode: "cl", flag: "🇨🇱", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "eladio_rojas", name: "Eladio Rojas", position: "CM", rating: 84,
    country: "Chile", countryCode: "cl", flag: "🇨🇱", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "jorge_toro", name: "Jorge Toro", position: "CM", rating: 85,
    country: "Chile", countryCode: "cl", flag: "🇨🇱", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "jaime_ramirez", name: "Jaime Ramírez", position: "RW", rating: 83,
    country: "Chile", countryCode: "cl", flag: "🇨🇱", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 75, sho: 75, pas: 63, dri: 80, def: 37, phy: 60 }
  },
  {
    id: "leonel_sanchez", name: "Leonel Sánchez", position: "ST", rating: 88,
    country: "Chile", countryCode: "cl", flag: "🇨🇱", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 75, sho: 86, pas: 68, dri: 76, def: 38, phy: 73 }
  },
  {
    id: "honorino_landa", name: "Honorino Landa", position: "LW", rating: 80,
    country: "Chile", countryCode: "cl", flag: "🇨🇱", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 77, sho: 70, pas: 62, dri: 74, def: 30, phy: 62 }
  },
  {
    id: "armando_tobar", name: "Armando Tobar", position: "ST", rating: 79,
    country: "Chile", countryCode: "cl", flag: "🇨🇱", year: 1962, era: "retro", emoji: "👨🏽",
    stats: { pac: 69, sho: 71, pas: 57, dri: 66, def: 28, phy: 69 }
  },
  {
    id: "gyula_grosics_1962", name: "Gyula Grosics", position: "GK", rating: 84,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1962, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 22, pas: 58, dri: 64, def: 87, phy: 74 }
  },
  {
    id: "sandor_matrai_1962", name: "Sándor Mátrai", position: "CB", rating: 80,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1962, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "kalman_meszoly_1962", name: "Kálmán Mészöly", position: "CB", rating: 84,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1962, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "laszlo_sarosi", name: "László Sárosi", position: "CB", rating: 78,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1962, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "erno_solymosi", name: "Ernő Solymosi", position: "CM", rating: 81,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1962, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "gyula_rakosi_1962", name: "Gyula Rákosi", position: "CM", rating: 79,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1962, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 63, pas: 70, dri: 66, def: 66, phy: 67 }
  },
  {
    id: "janos_gorocs", name: "János Göröcs", position: "CAM", rating: 82,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1962, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 73, pas: 80, dri: 81, def: 37, phy: 60 }
  },
  {
    id: "florian_albert_1962", name: "Flórián Albert", position: "RW", rating: 88,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1962, era: "retro", emoji: "👨🏻",
    stats: { pac: 85, sho: 73, pas: 71, dri: 76, def: 38, phy: 63 }
  },
  {
    id: "lajos_tichy", name: "Lajos Tichy", position: "ST", rating: 87,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1962, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 84, pas: 66, dri: 77, def: 35, phy: 71 }
  },
  {
    id: "karoly_sandor", name: "Károly Sándor", position: "LW", rating: 81,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1962, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 73, pas: 65, dri: 71, def: 35, phy: 62 }
  },
  {
    id: "mate_fenyvesi_1962", name: "Máté Fenyvesi", position: "ST", rating: 80,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1962, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 78, pas: 62, dri: 66, def: 29, phy: 67 }
  },
  {
    id: "gordon_banks", name: "Gordon Banks", position: "GK", rating: 93,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 27, pas: 65, dri: 73, def: 89, phy: 83 }
  },
  {
    id: "george_cohen", name: "George Cohen", position: "RB", rating: 82,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 57, pas: 68, dri: 68, def: 76, phy: 72 }
  },
  {
    id: "ray_wilson", name: "Ray Wilson", position: "CB", rating: 83,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "jack_charlton", name: "Jack Charlton", position: "CB", rating: 85,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 53, pas: 64, dri: 58, def: 85, phy: 81 }
  },
  {
    id: "bobby_moore", name: "Bobby Moore", position: "LB", rating: 94,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 87, sho: 63, pas: 79, dri: 77, def: 85, phy: 82 }
  },
  {
    id: "nobby_stiles", name: "Nobby Stiles", position: "RM", rating: 81,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 61, pas: 67, dri: 71, def: 43, phy: 60 }
  },
  {
    id: "bobby_charlton", name: "Bobby Charlton", position: "CAM", rating: 95,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 81, sho: 84, pas: 93, dri: 85, def: 47, phy: 68 }
  },
  {
    id: "alan_ball", name: "Alan Ball", position: "CM", rating: 87,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 73, pas: 81, dri: 70, def: 65, phy: 71 }
  },
  {
    id: "martin_peters", name: "Martin Peters", position: "LM", rating: 86,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 65, pas: 72, dri: 72, def: 48, phy: 62 }
  },
  {
    id: "geoff_hurst", name: "Geoff Hurst", position: "ST", rating: 89,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 82, sho: 82, pas: 71, dri: 80, def: 32, phy: 71 }
  },
  {
    id: "roger_hunt", name: "Roger Hunt", position: "ST", rating: 83,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 64, dri: 71, def: 35, phy: 72 }
  },
  {
    id: "jozsef_gelei", name: "József Gelei", position: "GK", rating: 79,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 25, pas: 52, dri: 65, def: 80, phy: 71 }
  },
  {
    id: "beno_kaposzta", name: "Benő Káposzta", position: "RB", rating: 77,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 49, pas: 65, dri: 66, def: 73, phy: 63 }
  },
  {
    id: "sandor_matrai_1966", name: "Sándor Mátrai", position: "CB", rating: 81,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "kalman_meszoly_1966", name: "Kálmán Mészöly", position: "CB", rating: 86,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 47, pas: 61, dri: 67, def: 87, phy: 76 }
  },
  {
    id: "ferenc_sipos", name: "Ferenc Sipos", position: "LB", rating: 81,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 52, pas: 62, dri: 62, def: 72, phy: 66 }
  },
  {
    id: "gyula_rakosi_1966", name: "Gyula Rákosi", position: "CM", rating: 79,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 63, pas: 70, dri: 66, def: 66, phy: 67 }
  },
  {
    id: "istvan_nagy", name: "István Nagy", position: "CM", rating: 77,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 61, sho: 64, pas: 67, dri: 64, def: 61, phy: 67 }
  },
  {
    id: "florian_albert_1966", name: "Flórián Albert", position: "RW", rating: 93,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 85, sho: 83, pas: 73, dri: 89, def: 35, phy: 71 }
  },
  {
    id: "ferenc_bene", name: "Ferenc Bene", position: "ST", rating: 88,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 86, pas: 68, dri: 76, def: 38, phy: 73 }
  },
  {
    id: "janos_farkas", name: "János Farkas", position: "LW", rating: 84,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 71, pas: 68, dri: 76, def: 32, phy: 59 }
  },
  {
    id: "mate_fenyvesi_1966", name: "Máté Fenyvesi", position: "ST", rating: 81,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "jose_pereira", name: "José Pereira", position: "GK", rating: 80,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 24, pas: 61, dri: 61, def: 84, phy: 67 }
  },
  {
    id: "morais", name: "Morais", position: "RB", rating: 79,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 50, pas: 63, dri: 60, def: 74, phy: 70 }
  },
  {
    id: "alexandre_baptista", name: "Alexandre Baptista", position: "CB", rating: 80,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "vicente", name: "Vicente", position: "CB", rating: 81,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "hilario", name: "Hilário", position: "LB", rating: 80,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 76, sho: 55, pas: 64, dri: 62, def: 74, phy: 64 }
  },
  {
    id: "jaime_graca", name: "Jaime Graça", position: "CM", rating: 83,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "mario_coluna", name: "Mário Coluna", position: "CM", rating: 89,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 69, pas: 83, dri: 72, def: 68, phy: 76 }
  },
  {
    id: "jose_augusto", name: "José Augusto", position: "RW", rating: 85,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 71, pas: 72, dri: 77, def: 34, phy: 61 }
  },
  {
    id: "eusebio", name: "Eusébio", position: "ST", rating: 96,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 81, sho: 95, pas: 70, dri: 83, def: 40, phy: 83 }
  },
  {
    id: "jose_torres", name: "José Torres", position: "LW", rating: 86,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 81, sho: 73, pas: 72, dri: 79, def: 30, phy: 63 }
  },
  {
    id: "antonio_simoes", name: "António Simões", position: "ST", rating: 85,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 60, dri: 70, def: 30, phy: 68 }
  },
  {
    id: "lev_yashin_1966", name: "Lev Yashin", position: "GK", rating: 95,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 32, pas: 64, dri: 76, def: 91, phy: 81 }
  },
  {
    id: "albert_shesternyov_1966", name: "Albert Shesternyov", position: "CB", rating: 87,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 52, pas: 70, dri: 60, def: 89, phy: 78 }
  },
  {
    id: "murtaz_khurtsilava_1966", name: "Murtaz Khurtsilava", position: "CB", rating: 82,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "vasili_danilov", name: "Vasili Danilov", position: "CB", rating: 79,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "yozhef_sabo", name: "Yozhef Sabo", position: "CM", rating: 82,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "valery_voronin", name: "Valery Voronin", position: "CM", rating: 86,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 74, pas: 75, dri: 73, def: 67, phy: 70 }
  },
  {
    id: "galimzyan_khusainov", name: "Galimzyan Khusainov", position: "RW", rating: 83,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 75, pas: 63, dri: 80, def: 37, phy: 60 }
  },
  {
    id: "igor_chislenko", name: "Igor Chislenko", position: "ST", rating: 86,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 81, pas: 61, dri: 71, def: 32, phy: 71 }
  },
  {
    id: "anatoly_banishevsky", name: "Anatoly Banishevsky", position: "LW", rating: 83,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 69, pas: 67, dri: 80, def: 29, phy: 67 }
  },
  {
    id: "eduard_malofeyev", name: "Eduard Malofeyev", position: "ST", rating: 82,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "valery_porkujan", name: "Valery Porkujan", position: "RW", rating: 81,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1966, era: "retro", emoji: "👨🏻",
    stats: { pac: 76, sho: 72, pas: 66, dri: 74, def: 35, phy: 63 }
  },

  // ──── 1970s ────
  {
    id: "felix", name: "Félix", position: "GK", rating: 78,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 62, sho: 23, pas: 58, dri: 60, def: 74, phy: 69 }
  },
  {
    id: "carlos_alberto", name: "Carlos Alberto", position: "RB", rating: 92,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 84, sho: 61, pas: 72, dri: 75, def: 83, phy: 79 }
  },
  {
    id: "brito", name: "Brito", position: "CB", rating: 83,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "piazza", name: "Piazza", position: "CB", rating: 84,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "everaldo", name: "Everaldo", position: "LB", rating: 81,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 75, sho: 52, pas: 62, dri: 62, def: 72, phy: 66 }
  },
  {
    id: "clodoaldo", name: "Clodoaldo", position: "CM", rating: 87,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 71, sho: 73, pas: 81, dri: 70, def: 65, phy: 71 }
  },
  {
    id: "gerson", name: "Gérson", position: "CM", rating: 90,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 68, sho: 71, pas: 78, dri: 74, def: 72, phy: 77 }
  },
  {
    id: "rivellino", name: "Rivellino", position: "CAM", rating: 92,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 73, sho: 82, pas: 84, dri: 87, def: 46, phy: 66 }
  },
  {
    id: "jairzinho", name: "Jairzinho", position: "RW", rating: 93,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 85, sho: 83, pas: 73, dri: 89, def: 35, phy: 71 }
  },
  {
    id: "tostao", name: "Tostão", position: "ST", rating: 91,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 80, sho: 89, pas: 73, dri: 82, def: 33, phy: 79 }
  },
  {
    id: "pele_1970", name: "Pelé", position: "LW", rating: 98,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 89, sho: 81, pas: 81, dri: 88, def: 36, phy: 71 }
  },
  {
    id: "enrico_albertosi", name: "Enrico Albertosi", position: "GK", rating: 85,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 23, pas: 62, dri: 69, def: 82, phy: 72 }
  },
  {
    id: "tarcisio_burgnich", name: "Tarcisio Burgnich", position: "RB", rating: 88,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 81, sho: 55, pas: 74, dri: 68, def: 79, phy: 76 }
  },
  {
    id: "giacinto_facchetti", name: "Giacinto Facchetti", position: "LB", rating: 92,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 84, sho: 63, pas: 76, dri: 75, def: 87, phy: 75 }
  },
  {
    id: "roberto_rosato", name: "Roberto Rosato", position: "CB", rating: 83,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "pierluigi_cera", name: "Pierluigi Cera", position: "LB", rating: 82,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 58, pas: 66, dri: 64, def: 74, phy: 69 }
  },
  {
    id: "mario_bertini", name: "Mario Bertini", position: "RM", rating: 81,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 61, pas: 67, dri: 71, def: 43, phy: 60 }
  },
  {
    id: "sandro_mazzola", name: "Sandro Mazzola", position: "CM", rating: 91,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 75, pas: 84, dri: 79, def: 74, phy: 75 }
  },
  {
    id: "giancarlo_de_sisti", name: "Giancarlo De Sisti", position: "CM", rating: 84,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "gianni_rivera", name: "Gianni Rivera", position: "LM", rating: 92,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 67, pas: 79, dri: 77, def: 46, phy: 73 }
  },
  {
    id: "angelo_domenghini", name: "Angelo Domenghini", position: "ST", rating: 83,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 64, dri: 71, def: 35, phy: 72 }
  },
  {
    id: "luigi_riva", name: "Luigi Riva", position: "ST", rating: 93,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 84, sho: 92, pas: 74, dri: 81, def: 37, phy: 77 }
  },
  {
    id: "luis_rubinos", name: "Luis Rubiños", position: "GK", rating: 79,
    country: "Peru", countryCode: "pe", flag: "🇵🇪", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 64, sho: 25, pas: 52, dri: 65, def: 80, phy: 71 }
  },
  {
    id: "eloy_campos", name: "Eloy Campos", position: "RB", rating: 78,
    country: "Peru", countryCode: "pe", flag: "🇵🇪", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 70, sho: 55, pas: 61, dri: 65, def: 74, phy: 69 }
  },
  {
    id: "hector_chumpitaz", name: "Héctor Chumpitaz", position: "CB", rating: 88,
    country: "Peru", countryCode: "pe", flag: "🇵🇪", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 73, sho: 50, pas: 67, dri: 63, def: 92, phy: 78 }
  },
  {
    id: "orlando_de_la_torre", name: "Orlando de la Torre", position: "CB", rating: 77,
    country: "Peru", countryCode: "pe", flag: "🇵🇪", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 63, sho: 43, pas: 62, dri: 55, def: 73, phy: 70 }
  },
  {
    id: "nicolas_fuentes", name: "Nicolás Fuentes", position: "LB", rating: 79,
    country: "Peru", countryCode: "pe", flag: "🇵🇪", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 69, sho: 51, pas: 62, dri: 61, def: 71, phy: 64 }
  },
  {
    id: "ramon_mifflin", name: "Ramón Mifflin", position: "CM", rating: 83,
    country: "Peru", countryCode: "pe", flag: "🇵🇪", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "roberto_challe", name: "Roberto Challe", position: "CM", rating: 84,
    country: "Peru", countryCode: "pe", flag: "🇵🇪", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "teofilo_cubillas", name: "Teófilo Cubillas", position: "CAM", rating: 91,
    country: "Peru", countryCode: "pe", flag: "🇵🇪", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 76, sho: 80, pas: 89, dri: 85, def: 46, phy: 69 }
  },
  {
    id: "julio_baylon", name: "Julio Baylón", position: "RW", rating: 80,
    country: "Peru", countryCode: "pe", flag: "🇵🇪", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 74, sho: 69, pas: 67, dri: 74, def: 34, phy: 58 }
  },
  {
    id: "pedro_pablo_leon", name: "Pedro Pablo León", position: "ST", rating: 81,
    country: "Peru", countryCode: "pe", flag: "🇵🇪", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "hugo_sotil", name: "Hugo Sotil", position: "LW", rating: 85,
    country: "Peru", countryCode: "pe", flag: "🇵🇪", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 83, sho: 75, pas: 67, dri: 74, def: 31, phy: 66 }
  },
  {
    id: "alberto_gallardo", name: "Alberto Gallardo", position: "ST", rating: 82,
    country: "Peru", countryCode: "pe", flag: "🇵🇪", year: 1970, era: "retro", emoji: "👨🏽",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "anzor_kavazashvili", name: "Anzor Kavazashvili", position: "GK", rating: 81,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 26, pas: 61, dri: 62, def: 83, phy: 73 }
  },
  {
    id: "revaz_dzodzuashvili", name: "Revaz Dzodzuashvili", position: "RB", rating: 79,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 50, pas: 63, dri: 60, def: 74, phy: 70 }
  },
  {
    id: "albert_shesternyov_1970", name: "Albert Shesternyov", position: "CB", rating: 86,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 47, pas: 61, dri: 67, def: 87, phy: 76 }
  },
  {
    id: "murtaz_khurtsilava_1970", name: "Murtaz Khurtsilava", position: "CB", rating: 81,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "yevgeni_lovchev", name: "Yevgeni Lovchev", position: "LB", rating: 79,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 51, pas: 62, dri: 61, def: 71, phy: 64 }
  },
  {
    id: "vladimir_muntyan", name: "Vladimir Muntyan", position: "CM", rating: 82,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "kakhi_asatiani", name: "Kakhi Asatiani", position: "CM", rating: 79,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 63, pas: 70, dri: 66, def: 66, phy: 67 }
  },
  {
    id: "viktor_serebryanikov", name: "Viktor Serebryanikov", position: "CAM", rating: 78,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 73, pas: 73, dri: 71, def: 35, phy: 63 }
  },
  {
    id: "anatoliy_byshovets", name: "Anatoliy Byshovets", position: "RW", rating: 85,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 71, pas: 72, dri: 77, def: 34, phy: 61 }
  },
  {
    id: "vitaly_khmelnitsky", name: "Vitaly Khmelnitsky", position: "ST", rating: 80,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 78, pas: 62, dri: 66, def: 29, phy: 67 }
  },
  {
    id: "gennady_yevryuzhikhin", name: "Gennady Yevryuzhikhin", position: "LW", rating: 78,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 71, pas: 62, dri: 75, def: 31, phy: 60 }
  },
  {
    id: "ladislao_mazurkiewicz", name: "Ladislao Mazurkiewicz", position: "GK", rating: 87,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 24, pas: 63, dri: 72, def: 90, phy: 74 }
  },
  {
    id: "luis_ubina", name: "Luis Ubiña", position: "RB", rating: 79,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 50, pas: 63, dri: 60, def: 74, phy: 70 }
  },
  {
    id: "atilio_ancheta", name: "Atilio Ancheta", position: "CB", rating: 81,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "roberto_matosas", name: "Roberto Matosas", position: "CB", rating: 80,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "juan_mujica", name: "Juan Mújica", position: "LB", rating: 78,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "julio_montero_castillo", name: "Julio Montero Castillo", position: "CM", rating: 80,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 67, pas: 75, dri: 69, def: 63, phy: 68 }
  },
  {
    id: "ildo_maneiro", name: "Ildo Maneiro", position: "CM", rating: 80,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 67, pas: 75, dri: 69, def: 63, phy: 68 }
  },
  {
    id: "victor_esparrago", name: "Víctor Espárrago", position: "CAM", rating: 80,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 76, pas: 72, dri: 78, def: 43, phy: 62 }
  },
  {
    id: "luis_cubilla", name: "Luis Cubilla", position: "RW", rating: 84,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 75, pas: 66, dri: 80, def: 36, phy: 63 }
  },
  {
    id: "pedro_rocha", name: "Pedro Rocha", position: "ST", rating: 86,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 81, pas: 61, dri: 71, def: 32, phy: 71 }
  },
  {
    id: "julio_morales", name: "Julio Morales", position: "LW", rating: 79,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 1970, era: "retro", emoji: "👨🏻",
    stats: { pac: 76, sho: 71, pas: 60, dri: 74, def: 33, phy: 63 }
  },
  {
    id: "jan_jongbloed_1974", name: "Jan Jongbloed", position: "GK", rating: 76,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 59, sho: 20, pas: 57, dri: 66, def: 74, phy: 70 }
  },
  {
    id: "wim_suurbier_1974", name: "Wim Suurbier", position: "RB", rating: 84,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 73, sho: 58, pas: 69, dri: 66, def: 73, phy: 73 }
  },
  {
    id: "wim_rijsbergen", name: "Wim Rijsbergen", position: "CB", rating: 82,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "arie_haan_1974", name: "Arie Haan", position: "CB", rating: 86,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 64, sho: 47, pas: 61, dri: 67, def: 87, phy: 76 }
  },
  {
    id: "ruud_krol_1974", name: "Ruud Krol", position: "LB", rating: 90,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 83, sho: 57, pas: 69, dri: 69, def: 79, phy: 78 }
  },
  {
    id: "wim_jansen_1974", name: "Wim Jansen", position: "CM", rating: 83,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "johan_neeskens_1974", name: "Johan Neeskens", position: "CM", rating: 92,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 72, sho: 72, pas: 81, dri: 75, def: 71, phy: 76 }
  },
  {
    id: "willem_van_hanegem", name: "Willem van Hanegem", position: "CAM", rating: 88,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 75, sho: 76, pas: 85, dri: 79, def: 48, phy: 63 }
  },
  {
    id: "johnny_rep_1974", name: "Johnny Rep", position: "RW", rating: 87,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 79, sho: 74, pas: 69, dri: 79, def: 38, phy: 69 }
  },
  {
    id: "johan_cruyff", name: "Johan Cruyff", position: "ST", rating: 97,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 89, sho: 94, pas: 77, dri: 85, def: 36, phy: 82 }
  },
  {
    id: "rob_rensenbrink_1974", name: "Rob Rensenbrink", position: "LW", rating: 89,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 81, sho: 78, pas: 67, dri: 78, def: 31, phy: 65 }
  },
  {
    id: "jan_tomaszewski_1974", name: "Jan Tomaszewski", position: "GK", rating: 85,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 23, pas: 62, dri: 69, def: 82, phy: 72 }
  },
  {
    id: "antoni_szymanowski_1974", name: "Antoni Szymanowski", position: "RB", rating: 80,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 54, pas: 65, dri: 66, def: 71, phy: 72 }
  },
  {
    id: "jerzy_gorgon_1974", name: "Jerzy Gorgoń", position: "CB", rating: 81,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "wadysaw_zmuda_1974", name: "Władysław Żmuda", position: "CB", rating: 83,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "adam_musia", name: "Adam Musiał", position: "LB", rating: 78,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "kazimierz_deyna_1974", name: "Kazimierz Deyna", position: "CM", rating: 90,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 71, pas: 78, dri: 74, def: 72, phy: 77 }
  },
  {
    id: "henryk_kasperczak", name: "Henryk Kasperczak", position: "CM", rating: 81,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "zygmunt_maszczyk", name: "Zygmunt Maszczyk", position: "CAM", rating: 79,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 62, sho: 67, pas: 72, dri: 73, def: 38, phy: 58 }
  },
  {
    id: "grzegorz_lato_1974", name: "Grzegorz Lato", position: "RW", rating: 89,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 85, sho: 73, pas: 71, dri: 81, def: 39, phy: 63 }
  },
  {
    id: "andrzej_szarmach_1974", name: "Andrzej Szarmach", position: "ST", rating: 86,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 81, pas: 61, dri: 71, def: 32, phy: 71 }
  },
  {
    id: "robert_gadocha", name: "Robert Gadocha", position: "LW", rating: 84,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 71, pas: 68, dri: 76, def: 32, phy: 59 }
  },
  {
    id: "david_harvey", name: "David Harvey", position: "GK", rating: 82,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 20, pas: 56, dri: 65, def: 86, phy: 75 }
  },
  {
    id: "sandy_jardine", name: "Sandy Jardine", position: "RB", rating: 83,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 80, sho: 58, pas: 65, dri: 68, def: 79, phy: 75 }
  },
  {
    id: "danny_mcgrain_1974", name: "Danny McGrain", position: "RB", rating: 85,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 54, pas: 65, dri: 70, def: 75, phy: 77 }
  },
  {
    id: "jim_holton", name: "Jim Holton", position: "CB", rating: 80,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "martin_buchan_1974", name: "Martin Buchan", position: "LB", rating: 82,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 58, pas: 66, dri: 64, def: 74, phy: 69 }
  },
  {
    id: "billy_bremner", name: "Billy Bremner", position: "CM", rating: 88,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 75, pas: 81, dri: 77, def: 71, phy: 72 }
  },
  {
    id: "davie_hay", name: "Davie Hay", position: "CM", rating: 83,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "peter_lorimer", name: "Peter Lorimer", position: "RW", rating: 84,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 75, pas: 66, dri: 80, def: 36, phy: 63 }
  },
  {
    id: "willie_morgan", name: "Willie Morgan", position: "ST", rating: 80,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 78, pas: 62, dri: 66, def: 29, phy: 67 }
  },
  {
    id: "joe_jordan_1974", name: "Joe Jordan", position: "LW", rating: 84,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 71, pas: 68, dri: 76, def: 32, phy: 59 }
  },
  {
    id: "kenny_dalglish_1974", name: "Kenny Dalglish", position: "ST", rating: 87,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 84, pas: 66, dri: 77, def: 35, phy: 71 }
  },
  {
    id: "denis_law", name: "Denis Law", position: "RW", rating: 86,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1974, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 76, pas: 65, dri: 83, def: 33, phy: 61 }
  },
  {
    id: "sepp_maier", name: "Sepp Maier", position: "GK", rating: 91,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 76, sho: 29, pas: 68, dri: 72, def: 90, phy: 83 }
  },
  {
    id: "berti_vogts", name: "Berti Vogts", position: "RB", rating: 87,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 78, sho: 59, pas: 69, dri: 75, def: 84, phy: 74 }
  },
  {
    id: "hans_georg_schwarzenbeck", name: "Hans-Georg Schwarzenbeck", position: "CB", rating: 82,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "franz_beckenbauer", name: "Franz Beckenbauer", position: "CB", rating: 97,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 80, sho: 58, pas: 70, dri: 69, def: 98, phy: 87 }
  },
  {
    id: "paul_breitner", name: "Paul Breitner", position: "LB", rating: 90,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 83, sho: 57, pas: 69, dri: 69, def: 79, phy: 78 }
  },
  {
    id: "rainer_bonhof", name: "Rainer Bonhof", position: "CM", rating: 86,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 69, sho: 74, pas: 75, dri: 73, def: 67, phy: 70 }
  },
  {
    id: "wolfgang_overath", name: "Wolfgang Overath", position: "CM", rating: 88,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 73, sho: 75, pas: 81, dri: 77, def: 71, phy: 72 }
  },
  {
    id: "uli_hoene", name: "Uli Hoeneß", position: "CAM", rating: 86,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 75, sho: 74, pas: 81, dri: 80, def: 43, phy: 66 }
  },
  {
    id: "jurgen_grabowski", name: "Jürgen Grabowski", position: "RW", rating: 84,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 79, sho: 75, pas: 66, dri: 80, def: 36, phy: 63 }
  },
  {
    id: "gerd_muller", name: "Gerd Müller", position: "ST", rating: 95,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 86, sho: 88, pas: 72, dri: 80, def: 42, phy: 75 }
  },
  {
    id: "bernd_holzenbein", name: "Bernd Hölzenbein", position: "LW", rating: 82,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1974, era: "retro", emoji: "👱🏼",
    stats: { pac: 77, sho: 66, pas: 64, dri: 74, def: 36, phy: 61 }
  },
  {
    id: "ubaldo_fillol", name: "Ubaldo Fillol", position: "GK", rating: 88,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 70, sho: 28, pas: 66, dri: 71, def: 86, phy: 80 }
  },
  {
    id: "jorge_olguin", name: "Jorge Olguín", position: "RB", rating: 80,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 54, pas: 65, dri: 66, def: 71, phy: 72 }
  },
  {
    id: "luis_galvan", name: "Luis Galván", position: "CB", rating: 81,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "daniel_passarella", name: "Daniel Passarella", position: "CB", rating: 90,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 70, sho: 48, pas: 67, dri: 70, def: 92, phy: 86 }
  },
  {
    id: "alberto_tarantini", name: "Alberto Tarantini", position: "LB", rating: 81,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 52, pas: 62, dri: 62, def: 72, phy: 66 }
  },
  {
    id: "osvaldo_ardiles", name: "Osvaldo Ardiles", position: "CM", rating: 88,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 75, pas: 81, dri: 77, def: 71, phy: 72 }
  },
  {
    id: "americo_gallego", name: "Américo Gallego", position: "CM", rating: 82,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "mario_kempes", name: "Mario Kempes", position: "RW", rating: 93,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 85, sho: 83, pas: 73, dri: 89, def: 35, phy: 71 }
  },
  {
    id: "leopoldo_luque", name: "Leopoldo Luque", position: "ST", rating: 85,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 60, dri: 70, def: 30, phy: 68 }
  },
  {
    id: "daniel_bertoni", name: "Daniel Bertoni", position: "LW", rating: 84,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 71, pas: 68, dri: 76, def: 32, phy: 59 }
  },
  {
    id: "rene_houseman", name: "René Houseman", position: "ST", rating: 82,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "friedrich_koncilia", name: "Friedrich Koncilia", position: "GK", rating: 84,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 22, pas: 58, dri: 64, def: 87, phy: 74 }
  },
  {
    id: "robert_sara", name: "Robert Sara", position: "RB", rating: 80,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 54, pas: 65, dri: 66, def: 71, phy: 72 }
  },
  {
    id: "erich_obermayer", name: "Erich Obermayer", position: "CB", rating: 79,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "bruno_pezzey", name: "Bruno Pezzey", position: "CB", rating: 86,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 47, pas: 61, dri: 67, def: 87, phy: 76 }
  },
  {
    id: "heribert_weber", name: "Heribert Weber", position: "LB", rating: 79,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 51, pas: 62, dri: 61, def: 71, phy: 64 }
  },
  {
    id: "josef_hickersberger", name: "Josef Hickersberger", position: "RM", rating: 80,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 66, pas: 65, dri: 69, def: 38, phy: 56 }
  },
  {
    id: "herbert_prohaska", name: "Herbert Prohaska", position: "CM", rating: 87,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 73, pas: 81, dri: 70, def: 65, phy: 71 }
  },
  {
    id: "kurt_jara", name: "Kurt Jara", position: "CM", rating: 82,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "wilhelm_kreuz", name: "Wilhelm Kreuz", position: "LM", rating: 80,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 62, pas: 67, dri: 71, def: 41, phy: 57 }
  },
  {
    id: "hans_krankl", name: "Hans Krankl", position: "ST", rating: 90,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 78, sho: 82, pas: 66, dri: 73, def: 32, phy: 72 }
  },
  {
    id: "walter_schachner", name: "Walter Schachner", position: "ST", rating: 82,
    country: "Austria", countryCode: "at", flag: "🇦🇹", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "jan_jongbloed_1978", name: "Jan Jongbloed", position: "GK", rating: 76,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1978, era: "retro", emoji: "👱🏼",
    stats: { pac: 59, sho: 20, pas: 57, dri: 66, def: 74, phy: 70 }
  },
  {
    id: "wim_suurbier_1978", name: "Wim Suurbier", position: "RB", rating: 82,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1978, era: "retro", emoji: "👱🏼",
    stats: { pac: 73, sho: 57, pas: 68, dri: 68, def: 76, phy: 72 }
  },
  {
    id: "ruud_krol_1978", name: "Ruud Krol", position: "LB", rating: 91,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1978, era: "retro", emoji: "👱🏼",
    stats: { pac: 82, sho: 57, pas: 75, dri: 70, def: 87, phy: 81 }
  },
  {
    id: "ernie_brandts", name: "Ernie Brandts", position: "CB", rating: 80,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1978, era: "retro", emoji: "👱🏼",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "jan_poortvliet", name: "Jan Poortvliet", position: "LB", rating: 78,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1978, era: "retro", emoji: "👱🏼",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "wim_jansen_1978", name: "Wim Jansen", position: "RM", rating: 83,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1978, era: "retro", emoji: "👱🏼",
    stats: { pac: 76, sho: 67, pas: 68, dri: 70, def: 44, phy: 62 }
  },
  {
    id: "johan_neeskens_1978", name: "Johan Neeskens", position: "CM", rating: 91,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1978, era: "retro", emoji: "👱🏼",
    stats: { pac: 75, sho: 75, pas: 84, dri: 79, def: 74, phy: 75 }
  },
  {
    id: "arie_haan_1978", name: "Arie Haan", position: "CM", rating: 87,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1978, era: "retro", emoji: "👱🏼",
    stats: { pac: 71, sho: 73, pas: 81, dri: 70, def: 65, phy: 71 }
  },
  {
    id: "willy_van_de_kerkhof", name: "Willy van de Kerkhof", position: "LM", rating: 82,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1978, era: "retro", emoji: "👱🏼",
    stats: { pac: 69, sho: 66, pas: 67, dri: 67, def: 46, phy: 59 }
  },
  {
    id: "rene_van_de_kerkhof", name: "René van de Kerkhof", position: "RW", rating: 83,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1978, era: "retro", emoji: "👱🏼",
    stats: { pac: 75, sho: 75, pas: 63, dri: 80, def: 37, phy: 60 }
  },
  {
    id: "rob_rensenbrink_1978", name: "Rob Rensenbrink", position: "ST", rating: 90,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1978, era: "retro", emoji: "👱🏼",
    stats: { pac: 78, sho: 82, pas: 66, dri: 73, def: 32, phy: 72 }
  },
  {
    id: "johnny_rep_1978", name: "Johnny Rep", position: "LW", rating: 86,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1978, era: "retro", emoji: "👱🏼",
    stats: { pac: 81, sho: 73, pas: 72, dri: 79, def: 30, phy: 63 }
  },
  {
    id: "jan_tomaszewski_1978", name: "Jan Tomaszewski", position: "GK", rating: 83,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 27, pas: 61, dri: 67, def: 84, phy: 73 }
  },
  {
    id: "antoni_szymanowski_1978", name: "Antoni Szymanowski", position: "RB", rating: 79,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 50, pas: 63, dri: 60, def: 74, phy: 70 }
  },
  {
    id: "jerzy_gorgon_1978", name: "Jerzy Gorgoń", position: "CB", rating: 80,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "wadysaw_zmuda_1978", name: "Władysław Żmuda", position: "CB", rating: 84,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "henryk_maculewicz", name: "Henryk Maculewicz", position: "LB", rating: 77,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 67, sho: 46, pas: 59, dri: 66, def: 69, phy: 63 }
  },
  {
    id: "adam_nawaka", name: "Adam Nawałka", position: "CM", rating: 78,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 65, pas: 70, dri: 66, def: 63, phy: 66 }
  },
  {
    id: "kazimierz_deyna_1978", name: "Kazimierz Deyna", position: "CM", rating: 88,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 75, pas: 81, dri: 77, def: 71, phy: 72 }
  },
  {
    id: "zbigniew_boniek_1978", name: "Zbigniew Boniek", position: "CAM", rating: 86,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 74, pas: 81, dri: 80, def: 43, phy: 66 }
  },
  {
    id: "grzegorz_lato_1978", name: "Grzegorz Lato", position: "RW", rating: 86,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 76, pas: 65, dri: 83, def: 33, phy: 61 }
  },
  {
    id: "andrzej_szarmach_1978", name: "Andrzej Szarmach", position: "ST", rating: 83,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 64, dri: 71, def: 35, phy: 72 }
  },
  {
    id: "wodzimierz_lubanski", name: "Włodzimierz Lubański", position: "LW", rating: 84,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 71, pas: 68, dri: 76, def: 32, phy: 59 }
  },
  {
    id: "alan_rough_1978", name: "Alan Rough", position: "GK", rating: 78,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 62, sho: 23, pas: 58, dri: 60, def: 74, phy: 69 }
  },
  {
    id: "stuart_kennedy", name: "Stuart Kennedy", position: "RB", rating: 77,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 49, pas: 65, dri: 66, def: 73, phy: 63 }
  },
  {
    id: "willie_donachie", name: "Willie Donachie", position: "CB", rating: 78,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "tom_forsyth", name: "Tom Forsyth", position: "CB", rating: 78,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "kenny_burns", name: "Kenny Burns", position: "LB", rating: 80,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 76, sho: 55, pas: 64, dri: 62, def: 74, phy: 64 }
  },
  {
    id: "martin_buchan_1978", name: "Martin Buchan", position: "CB", rating: 81,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "bruce_rioch", name: "Bruce Rioch", position: "RM", rating: 80,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 66, pas: 65, dri: 69, def: 38, phy: 56 }
  },
  {
    id: "don_masson", name: "Don Masson", position: "CM", rating: 78,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 65, pas: 70, dri: 66, def: 63, phy: 66 }
  },
  {
    id: "graeme_souness_1978", name: "Graeme Souness", position: "CDM", rating: 85,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 65, sho: 58, pas: 70, dri: 64, def: 83, phy: 74 }
  },
  {
    id: "archie_gemmill", name: "Archie Gemmill", position: "CAM", rating: 85,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 78, pas: 82, dri: 76, def: 41, phy: 63 }
  },
  {
    id: "asa_hartford", name: "Asa Hartford", position: "LM", rating: 80,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 62, pas: 67, dri: 71, def: 41, phy: 57 }
  },
  {
    id: "kenny_dalglish_1978", name: "Kenny Dalglish", position: "ST", rating: 88,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 86, pas: 68, dri: 76, def: 38, phy: 73 }
  },
  {
    id: "joe_jordan_1978", name: "Joe Jordan", position: "ST", rating: 83,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1978, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 64, dri: 71, def: 35, phy: 72 }
  },

  // ──── 1980s ────
  {
    id: "mehdi_cerbah", name: "Mehdi Cerbah", position: "GK", rating: 80,
    country: "Algeria", countryCode: "dz", flag: "🇩🇿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 24, pas: 61, dri: 61, def: 84, phy: 67 }
  },
  {
    id: "chaabane_merzekane", name: "Chaabane Merzekane", position: "RB", rating: 80,
    country: "Algeria", countryCode: "dz", flag: "🇩🇿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 54, pas: 65, dri: 66, def: 71, phy: 72 }
  },
  {
    id: "mahmoud_guendouz", name: "Mahmoud Guendouz", position: "CB", rating: 79,
    country: "Algeria", countryCode: "dz", flag: "🇩🇿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "noureddine_kourichi", name: "Noureddine Kourichi", position: "CB", rating: 79,
    country: "Algeria", countryCode: "dz", flag: "🇩🇿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "faouzi_mansouri", name: "Faouzi Mansouri", position: "LB", rating: 78,
    country: "Algeria", countryCode: "dz", flag: "🇩🇿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "ali_fergani", name: "Ali Fergani", position: "RM", rating: 83,
    country: "Algeria", countryCode: "dz", flag: "🇩🇿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 76, sho: 67, pas: 68, dri: 70, def: 44, phy: 62 }
  },
  {
    id: "mustapha_dahleb", name: "Mustapha Dahleb", position: "CM", rating: 86,
    country: "Algeria", countryCode: "dz", flag: "🇩🇿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 74, pas: 75, dri: 73, def: 67, phy: 70 }
  },
  {
    id: "lakhdar_belloumi", name: "Lakhdar Belloumi", position: "CM", rating: 87,
    country: "Algeria", countryCode: "dz", flag: "🇩🇿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 73, pas: 81, dri: 70, def: 65, phy: 71 }
  },
  {
    id: "djamel_zidane", name: "Djamel Zidane", position: "LM", rating: 80,
    country: "Algeria", countryCode: "dz", flag: "🇩🇿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 62, pas: 67, dri: 71, def: 41, phy: 57 }
  },
  {
    id: "salah_assad", name: "Salah Assad", position: "RW", rating: 84,
    country: "Algeria", countryCode: "dz", flag: "🇩🇿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 75, pas: 66, dri: 80, def: 36, phy: 63 }
  },
  {
    id: "rabah_madjer", name: "Rabah Madjer", position: "ST", rating: 85,
    country: "Algeria", countryCode: "dz", flag: "🇩🇿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 60, dri: 70, def: 30, phy: 68 }
  },
  {
    id: "tedj_bensaoula", name: "Tedj Bensaoula", position: "LW", rating: 81,
    country: "Algeria", countryCode: "dz", flag: "🇩🇿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 73, pas: 65, dri: 71, def: 35, phy: 62 }
  },
  {
    id: "waldir_peres", name: "Waldir Peres", position: "GK", rating: 75,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1982, era: "retro", emoji: "👨🏽",
    stats: { pac: 65, sho: 26, pas: 52, dri: 64, def: 73, phy: 67 }
  },
  {
    id: "leandro", name: "Leandro", position: "RB", rating: 86,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1982, era: "retro", emoji: "👨🏽",
    stats: { pac: 82, sho: 60, pas: 70, dri: 66, def: 79, phy: 73 }
  },
  {
    id: "oscar", name: "Oscar", position: "CB", rating: 84,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1982, era: "retro", emoji: "👨🏽",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "luizinho", name: "Luizinho", position: "CB", rating: 81,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1982, era: "retro", emoji: "👨🏽",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "junior", name: "Júnior", position: "LB", rating: 88,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1982, era: "retro", emoji: "👨🏽",
    stats: { pac: 83, sho: 60, pas: 73, dri: 68, def: 79, phy: 75 }
  },
  {
    id: "toninho_cerezo", name: "Toninho Cerezo", position: "RM", rating: 87,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1982, era: "retro", emoji: "👨🏽",
    stats: { pac: 77, sho: 68, pas: 67, dri: 72, def: 47, phy: 65 }
  },
  {
    id: "falcao", name: "Falcão", position: "CM", rating: 92,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1982, era: "retro", emoji: "👨🏽",
    stats: { pac: 72, sho: 72, pas: 81, dri: 75, def: 71, phy: 76 }
  },
  {
    id: "socrates", name: "Sócrates", position: "CAM", rating: 93,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1982, era: "retro", emoji: "👨🏽",
    stats: { pac: 82, sho: 81, pas: 88, dri: 84, def: 43, phy: 69 }
  },
  {
    id: "zico", name: "Zico", position: "CAM", rating: 95,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1982, era: "retro", emoji: "👨🏽",
    stats: { pac: 81, sho: 84, pas: 93, dri: 85, def: 47, phy: 68 }
  },
  {
    id: "eder", name: "Éder", position: "ST", rating: 88,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1982, era: "retro", emoji: "👨🏽",
    stats: { pac: 75, sho: 86, pas: 68, dri: 76, def: 38, phy: 73 }
  },
  {
    id: "serginho", name: "Serginho", position: "ST", rating: 79,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1982, era: "retro", emoji: "👨🏽",
    stats: { pac: 69, sho: 71, pas: 57, dri: 66, def: 28, phy: 69 }
  },
  {
    id: "thomas_n_kono_1982", name: "Thomas N'Kono", position: "GK", rating: 87,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1982, era: "retro", emoji: "👨🏾",
    stats: { pac: 72, sho: 24, pas: 63, dri: 72, def: 90, phy: 74 }
  },
  {
    id: "rene_n_djeya", name: "René N'Djeya", position: "RB", rating: 78,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1982, era: "retro", emoji: "👨🏾",
    stats: { pac: 70, sho: 55, pas: 61, dri: 65, def: 74, phy: 69 }
  },
  {
    id: "elie_onana", name: "Elie Onana", position: "CB", rating: 77,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1982, era: "retro", emoji: "👨🏾",
    stats: { pac: 63, sho: 43, pas: 62, dri: 55, def: 73, phy: 70 }
  },
  {
    id: "emmanuel_kunde_1982", name: "Emmanuel Kundé", position: "CB", rating: 79,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1982, era: "retro", emoji: "👨🏾",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "michel_kaham", name: "Michel Kaham", position: "LB", rating: 77,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1982, era: "retro", emoji: "👨🏾",
    stats: { pac: 67, sho: 46, pas: 59, dri: 66, def: 69, phy: 63 }
  },
  {
    id: "ibrahim_aoudou", name: "Ibrahim Aoudou", position: "CM", rating: 78,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1982, era: "retro", emoji: "👨🏾",
    stats: { pac: 60, sho: 65, pas: 70, dri: 66, def: 63, phy: 66 }
  },
  {
    id: "theophile_abega", name: "Théophile Abega", position: "CM", rating: 85,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1982, era: "retro", emoji: "👨🏾",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "gregoire_m_bida", name: "Grégoire M'Bida", position: "CAM", rating: 81,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1982, era: "retro", emoji: "👨🏾",
    stats: { pac: 65, sho: 68, pas: 74, dri: 72, def: 37, phy: 57 }
  },
  {
    id: "jean_manga_onguene", name: "Jean Manga-Onguéné", position: "RW", rating: 83,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1982, era: "retro", emoji: "👨🏾",
    stats: { pac: 75, sho: 75, pas: 63, dri: 80, def: 37, phy: 60 }
  },
  {
    id: "roger_milla_1982", name: "Roger Milla", position: "ST", rating: 86,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1982, era: "retro", emoji: "👨🏾",
    stats: { pac: 75, sho: 81, pas: 61, dri: 71, def: 32, phy: 71 }
  },
  {
    id: "jacques_n_guea", name: "Jacques N'Guea", position: "LW", rating: 77,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1982, era: "retro", emoji: "👨🏾",
    stats: { pac: 68, sho: 66, pas: 63, dri: 68, def: 32, phy: 60 }
  },
  {
    id: "jean_luc_ettori", name: "Jean-Luc Ettori", position: "GK", rating: 78,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 62, sho: 23, pas: 58, dri: 60, def: 74, phy: 69 }
  },
  {
    id: "manuel_amoros_1982", name: "Manuel Amoros", position: "RB", rating: 85,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 54, pas: 65, dri: 70, def: 75, phy: 77 }
  },
  {
    id: "marius_tresor", name: "Marius Trésor", position: "CB", rating: 89,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 70, sho: 52, pas: 66, dri: 63, def: 92, phy: 83 }
  },
  {
    id: "gerard_janvion", name: "Gérard Janvion", position: "CB", rating: 80,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "maxime_bossis_1982", name: "Maxime Bossis", position: "LB", rating: 84,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 77, sho: 56, pas: 70, dri: 72, def: 76, phy: 75 }
  },
  {
    id: "jean_tigana_1982", name: "Jean Tigana", position: "RM", rating: 89,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 77, sho: 68, pas: 69, dri: 75, def: 50, phy: 68 }
  },
  {
    id: "alain_giresse_1982", name: "Alain Giresse", position: "CM", rating: 90,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 71, pas: 78, dri: 74, def: 72, phy: 77 }
  },
  {
    id: "bernard_genghini", name: "Bernard Genghini", position: "CM", rating: 83,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "michel_platini_1982", name: "Michel Platini", position: "CAM", rating: 96,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 81, sho: 90, pas: 93, dri: 90, def: 49, phy: 76 }
  },
  {
    id: "dominique_rocheteau_1982", name: "Dominique Rocheteau", position: "ST", rating: 85,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 60, dri: 70, def: 30, phy: 68 }
  },
  {
    id: "didier_six", name: "Didier Six", position: "ST", rating: 82,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "ferenc_meszaros", name: "Ferenc Mészáros", position: "GK", rating: 79,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 25, pas: 52, dri: 65, def: 80, phy: 71 }
  },
  {
    id: "gyozo_martos", name: "Győző Martos", position: "RB", rating: 78,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 70, sho: 55, pas: 61, dri: 65, def: 74, phy: 69 }
  },
  {
    id: "imre_garaba", name: "Imre Garaba", position: "CB", rating: 80,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "jozsef_toth_1982", name: "József Tóth", position: "CB", rating: 78,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "sandor_sallai", name: "Sándor Sallai", position: "LB", rating: 79,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 51, pas: 62, dri: 61, def: 71, phy: 64 }
  },
  {
    id: "tibor_nyilasi", name: "Tibor Nyilasi", position: "CM", rating: 87,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 73, pas: 81, dri: 70, def: 65, phy: 71 }
  },
  {
    id: "jozsef_varga", name: "József Varga", position: "CM", rating: 80,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 67, pas: 75, dri: 69, def: 63, phy: 68 }
  },
  {
    id: "laszlo_fazekas", name: "László Fazekas", position: "CAM", rating: 83,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 70, pas: 80, dri: 81, def: 37, phy: 62 }
  },
  {
    id: "andras_torocsik", name: "András Törőcsik", position: "RW", rating: 84,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 75, pas: 66, dri: 80, def: 36, phy: 63 }
  },
  {
    id: "laszlo_kiss", name: "László Kiss", position: "ST", rating: 80,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 78, pas: 62, dri: 66, def: 29, phy: 67 }
  },
  {
    id: "gabor_poloskei", name: "Gábor Pölöskei", position: "LW", rating: 80,
    country: "Hungary", countryCode: "hu", flag: "🇭🇺", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 77, sho: 70, pas: 62, dri: 74, def: 30, phy: 62 }
  },
  {
    id: "dino_zoff", name: "Dino Zoff", position: "GK", rating: 92,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 78, sho: 27, pas: 69, dri: 78, def: 92, phy: 81 }
  },
  {
    id: "claudio_gentile", name: "Claudio Gentile", position: "RB", rating: 88,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 81, sho: 55, pas: 74, dri: 68, def: 79, phy: 76 }
  },
  {
    id: "gaetano_scirea", name: "Gaetano Scirea", position: "CB", rating: 92,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 49, pas: 69, dri: 65, def: 91, phy: 90 }
  },
  {
    id: "fulvio_collovati", name: "Fulvio Collovati", position: "CB", rating: 83,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "antonio_cabrini", name: "Antonio Cabrini", position: "LB", rating: 87,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 61, pas: 75, dri: 73, def: 80, phy: 76 }
  },
  {
    id: "gabriele_oriali", name: "Gabriele Oriali", position: "RM", rating: 81,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 61, pas: 67, dri: 71, def: 43, phy: 60 }
  },
  {
    id: "marco_tardelli", name: "Marco Tardelli", position: "CM", rating: 89,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 69, pas: 83, dri: 72, def: 68, phy: 76 }
  },
  {
    id: "giancarlo_antognoni", name: "Giancarlo Antognoni", position: "CM", rating: 87,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 73, pas: 81, dri: 70, def: 65, phy: 71 }
  },
  {
    id: "bruno_conti", name: "Bruno Conti", position: "LM", rating: 88,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 72, pas: 70, dri: 76, def: 41, phy: 64 }
  },
  {
    id: "paolo_rossi", name: "Paolo Rossi", position: "ST", rating: 92,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 81, sho: 91, pas: 72, dri: 78, def: 34, phy: 75 }
  },
  {
    id: "francesco_graziani", name: "Francesco Graziani", position: "ST", rating: 82,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "pat_jennings", name: "Pat Jennings", position: "GK", rating: 90,
    country: "Northern Ireland", countryCode: "gb-nir", flag: "🇬🇧", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 28, pas: 66, dri: 74, def: 92, phy: 82 }
  },
  {
    id: "jimmy_nicholl", name: "Jimmy Nicholl", position: "RB", rating: 80,
    country: "Northern Ireland", countryCode: "gb-nir", flag: "🇬🇧", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 54, pas: 65, dri: 66, def: 71, phy: 72 }
  },
  {
    id: "mal_donaghy", name: "Mal Donaghy", position: "CB", rating: 81,
    country: "Northern Ireland", countryCode: "gb-nir", flag: "🇬🇧", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "chris_nicholl", name: "Chris Nicholl", position: "CB", rating: 80,
    country: "Northern Ireland", countryCode: "gb-nir", flag: "🇬🇧", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "john_mcclelland", name: "John McClelland", position: "LB", rating: 80,
    country: "Northern Ireland", countryCode: "gb-nir", flag: "🇬🇧", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 76, sho: 55, pas: 64, dri: 62, def: 74, phy: 64 }
  },
  {
    id: "david_mccreery", name: "David McCreery", position: "CM", rating: 79,
    country: "Northern Ireland", countryCode: "gb-nir", flag: "🇬🇧", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 63, pas: 70, dri: 66, def: 66, phy: 67 }
  },
  {
    id: "martin_o_neill", name: "Martin O'Neill", position: "CM", rating: 84,
    country: "Northern Ireland", countryCode: "gb-nir", flag: "🇬🇧", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "sammy_mcilroy", name: "Sammy McIlroy", position: "CAM", rating: 83,
    country: "Northern Ireland", countryCode: "gb-nir", flag: "🇬🇧", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 70, pas: 80, dri: 81, def: 37, phy: 62 }
  },
  {
    id: "gerry_armstrong", name: "Gerry Armstrong", position: "RW", rating: 83,
    country: "Northern Ireland", countryCode: "gb-nir", flag: "🇬🇧", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 75, pas: 63, dri: 80, def: 37, phy: 60 }
  },
  {
    id: "billy_hamilton", name: "Billy Hamilton", position: "ST", rating: 80,
    country: "Northern Ireland", countryCode: "gb-nir", flag: "🇬🇧", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 78, pas: 62, dri: 66, def: 29, phy: 67 }
  },
  {
    id: "norman_whiteside", name: "Norman Whiteside", position: "LW", rating: 82,
    country: "Northern Ireland", countryCode: "gb-nir", flag: "🇬🇧", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 77, sho: 66, pas: 64, dri: 74, def: 36, phy: 61 }
  },
  {
    id: "jozef_mynarczyk", name: "Józef Młynarczyk", position: "GK", rating: 84,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 22, pas: 58, dri: 64, def: 87, phy: 74 }
  },
  {
    id: "wadysaw_zmuda_1982", name: "Władysław Żmuda", position: "RB", rating: 84,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 58, pas: 69, dri: 66, def: 73, phy: 73 }
  },
  {
    id: "stefan_majewski", name: "Stefan Majewski", position: "CB", rating: 80,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "pawe_janas", name: "Paweł Janas", position: "CB", rating: 81,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "marek_dziuba", name: "Marek Dziuba", position: "LB", rating: 78,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "waldemar_matysik", name: "Waldemar Matysik", position: "RM", rating: 80,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 66, pas: 65, dri: 69, def: 38, phy: 56 }
  },
  {
    id: "janusz_kupcewicz", name: "Janusz Kupcewicz", position: "CM", rating: 81,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "andrzej_buncol", name: "Andrzej Buncol", position: "CM", rating: 82,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "zbigniew_boniek_1982", name: "Zbigniew Boniek", position: "LM", rating: 92,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 67, pas: 79, dri: 77, def: 46, phy: 73 }
  },
  {
    id: "grzegorz_lato_1982", name: "Grzegorz Lato", position: "ST", rating: 87,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 84, pas: 66, dri: 77, def: 35, phy: 71 }
  },
  {
    id: "wodzimierz_smolarek", name: "Włodzimierz Smolarek", position: "ST", rating: 83,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 64, dri: 71, def: 35, phy: 72 }
  },
  {
    id: "alan_rough_1982", name: "Alan Rough", position: "GK", rating: 78,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 62, sho: 23, pas: 58, dri: 60, def: 74, phy: 69 }
  },
  {
    id: "danny_mcgrain_1982", name: "Danny McGrain", position: "RB", rating: 82,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 57, pas: 68, dri: 68, def: 76, phy: 72 }
  },
  {
    id: "alan_hansen", name: "Alan Hansen", position: "CB", rating: 84,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "willie_miller", name: "Willie Miller", position: "CB", rating: 82,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "frank_gray", name: "Frank Gray", position: "LB", rating: 78,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "graeme_souness_1982", name: "Graeme Souness", position: "RM", rating: 87,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 77, sho: 68, pas: 67, dri: 72, def: 47, phy: 65 }
  },
  {
    id: "gordon_strachan", name: "Gordon Strachan", position: "CM", rating: 84,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "john_wark", name: "John Wark", position: "CM", rating: 82,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "john_robertson", name: "John Robertson", position: "LM", rating: 83,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 76, sho: 66, pas: 67, dri: 67, def: 43, phy: 59 }
  },
  {
    id: "kenny_dalglish_1982", name: "Kenny Dalglish", position: "RW", rating: 86,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 76, pas: 65, dri: 83, def: 33, phy: 61 }
  },
  {
    id: "joe_jordan_1982", name: "Joe Jordan", position: "ST", rating: 81,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "steve_archibald", name: "Steve Archibald", position: "LW", rating: 80,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 77, sho: 70, pas: 62, dri: 74, def: 30, phy: 62 }
  },
  {
    id: "alan_brazil", name: "Alan Brazil", position: "ST", rating: 78,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1982, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 73, pas: 61, dri: 69, def: 29, phy: 66 }
  },
  {
    id: "nery_pumpido", name: "Nery Pumpido", position: "GK", rating: 80,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 24, pas: 61, dri: 61, def: 84, phy: 67 }
  },
  {
    id: "jose_luis_cuciuffo", name: "José Luis Cuciuffo", position: "RB", rating: 79,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 50, pas: 63, dri: 60, def: 74, phy: 70 }
  },
  {
    id: "jose_luis_brown", name: "José Luis Brown", position: "CB", rating: 84,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "oscar_ruggeri_1986", name: "Oscar Ruggeri", position: "CB", rating: 88,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 50, pas: 67, dri: 63, def: 92, phy: 78 }
  },
  {
    id: "julio_olarticoechea_1986", name: "Julio Olarticoechea", position: "LB", rating: 81,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 52, pas: 62, dri: 62, def: 72, phy: 66 }
  },
  {
    id: "ricardo_giusti_1986", name: "Ricardo Giusti", position: "RM", rating: 82,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 63, pas: 69, dri: 74, def: 42, phy: 66 }
  },
  {
    id: "sergio_batista", name: "Sergio Batista", position: "CDM", rating: 83,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 70, sho: 61, pas: 68, dri: 68, def: 77, phy: 79 }
  },
  {
    id: "jorge_burruchaga_1986", name: "Jorge Burruchaga", position: "CDM", rating: 87,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 62, pas: 72, dri: 67, def: 79, phy: 78 }
  },
  {
    id: "diego_maradona_1986", name: "Diego Maradona", position: "CAM", rating: 98,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 85, pas: 91, dri: 92, def: 51, phy: 74 }
  },
  {
    id: "hector_enrique", name: "Héctor Enrique", position: "LM", rating: 81,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 61, pas: 68, dri: 67, def: 40, phy: 60 }
  },
  {
    id: "jorge_valdano", name: "Jorge Valdano", position: "ST", rating: 88,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 86, pas: 68, dri: 76, def: 38, phy: 73 }
  },
  {
    id: "jean_marie_pfaff", name: "Jean-Marie Pfaff", position: "GK", rating: 89,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 77, sho: 26, pas: 64, dri: 68, def: 87, phy: 79 }
  },
  {
    id: "eric_gerets", name: "Eric Gerets", position: "RB", rating: 86,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 82, sho: 60, pas: 70, dri: 66, def: 79, phy: 73 }
  },
  {
    id: "michel_renquin", name: "Michel Renquin", position: "CB", rating: 80,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "stephane_demol", name: "Stéphane Demol", position: "CB", rating: 80,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "georges_grun_1986", name: "Georges Grün", position: "LB", rating: 81,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 52, pas: 62, dri: 62, def: 72, phy: 66 }
  },
  {
    id: "patrick_vervoort", name: "Patrick Vervoort", position: "CB", rating: 79,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "enzo_scifo_1986", name: "Enzo Scifo", position: "CAM", rating: 89,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 82, pas: 80, dri: 87, def: 41, phy: 67 }
  },
  {
    id: "franky_vercauteren", name: "Franky Vercauteren", position: "CM", rating: 84,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "jan_ceulemans", name: "Jan Ceulemans", position: "RW", rating: 89,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 85, sho: 73, pas: 71, dri: 81, def: 39, phy: 63 }
  },
  {
    id: "nico_claesen", name: "Nico Claesen", position: "ST", rating: 83,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 64, dri: 71, def: 35, phy: 72 }
  },
  {
    id: "daniel_veyt", name: "Daniel Veyt", position: "LW", rating: 79,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 76, sho: 71, pas: 60, dri: 74, def: 33, phy: 63 }
  },
  {
    id: "troels_rasmussen", name: "Troels Rasmussen", position: "GK", rating: 80,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1986, era: "retro", emoji: "👱🏼",
    stats: { pac: 63, sho: 24, pas: 61, dri: 61, def: 84, phy: 67 }
  },
  {
    id: "john_sivebk", name: "John Sivebæk", position: "RB", rating: 81,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1986, era: "retro", emoji: "👱🏼",
    stats: { pac: 73, sho: 54, pas: 64, dri: 70, def: 77, phy: 72 }
  },
  {
    id: "morten_olsen", name: "Morten Olsen", position: "CB", rating: 88,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1986, era: "retro", emoji: "👱🏼",
    stats: { pac: 73, sho: 50, pas: 67, dri: 63, def: 92, phy: 78 }
  },
  {
    id: "ivan_nielsen", name: "Ivan Nielsen", position: "CB", rating: 81,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1986, era: "retro", emoji: "👱🏼",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "sren_busk", name: "Søren Busk", position: "LB", rating: 80,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1986, era: "retro", emoji: "👱🏼",
    stats: { pac: 76, sho: 55, pas: 64, dri: 62, def: 74, phy: 64 }
  },
  {
    id: "sren_lerby", name: "Søren Lerby", position: "RM", rating: 87,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1986, era: "retro", emoji: "👱🏼",
    stats: { pac: 77, sho: 68, pas: 67, dri: 72, def: 47, phy: 65 }
  },
  {
    id: "jens_jrn_bertelsen", name: "Jens Jørn Bertelsen", position: "CM", rating: 80,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1986, era: "retro", emoji: "👱🏼",
    stats: { pac: 68, sho: 67, pas: 75, dri: 69, def: 63, phy: 68 }
  },
  {
    id: "frank_arnesen", name: "Frank Arnesen", position: "CM", rating: 86,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1986, era: "retro", emoji: "👱🏼",
    stats: { pac: 69, sho: 74, pas: 75, dri: 73, def: 67, phy: 70 }
  },
  {
    id: "jesper_olsen", name: "Jesper Olsen", position: "LM", rating: 84,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1986, era: "retro", emoji: "👱🏼",
    stats: { pac: 79, sho: 63, pas: 70, dri: 76, def: 41, phy: 61 }
  },
  {
    id: "michael_laudrup_1986", name: "Michael Laudrup", position: "ST", rating: 92,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1986, era: "retro", emoji: "👱🏼",
    stats: { pac: 81, sho: 91, pas: 72, dri: 78, def: 34, phy: 75 }
  },
  {
    id: "preben_elkjr", name: "Preben Elkjær", position: "ST", rating: 91,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1986, era: "retro", emoji: "👱🏼",
    stats: { pac: 80, sho: 89, pas: 73, dri: 82, def: 33, phy: 79 }
  },
  {
    id: "peter_shilton_1986", name: "Peter Shilton", position: "GK", rating: 89,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 77, sho: 26, pas: 64, dri: 68, def: 87, phy: 79 }
  },
  {
    id: "gary_stevens", name: "Gary Stevens", position: "RB", rating: 79,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 50, pas: 63, dri: 60, def: 74, phy: 70 }
  },
  {
    id: "kenny_sansom", name: "Kenny Sansom", position: "LB", rating: 82,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 58, pas: 66, dri: 64, def: 74, phy: 69 }
  },
  {
    id: "terry_butcher_1986", name: "Terry Butcher", position: "CB", rating: 84,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "terry_fenwick", name: "Terry Fenwick", position: "LB", rating: 78,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "glenn_hoddle", name: "Glenn Hoddle", position: "RM", rating: 87,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 77, sho: 68, pas: 67, dri: 72, def: 47, phy: 65 }
  },
  {
    id: "bryan_robson", name: "Bryan Robson", position: "CM", rating: 87,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 73, pas: 81, dri: 70, def: 65, phy: 71 }
  },
  {
    id: "ray_wilkins", name: "Ray Wilkins", position: "CDM", rating: 82,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 59, pas: 66, dri: 66, def: 78, phy: 78 }
  },
  {
    id: "peter_reid", name: "Peter Reid", position: "CAM", rating: 81,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 65, sho: 68, pas: 74, dri: 72, def: 37, phy: 57 }
  },
  {
    id: "trevor_steven", name: "Trevor Steven", position: "LM", rating: 81,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 61, pas: 68, dri: 67, def: 40, phy: 60 }
  },
  {
    id: "chris_waddle_1986", name: "Chris Waddle", position: "RW", rating: 84,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 75, pas: 66, dri: 80, def: 36, phy: 63 }
  },
  {
    id: "gary_lineker_1986", name: "Gary Lineker", position: "ST", rating: 90,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 78, sho: 82, pas: 66, dri: 73, def: 32, phy: 72 }
  },
  {
    id: "peter_beardsley_1986", name: "Peter Beardsley", position: "LW", rating: 84,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 71, pas: 68, dri: 76, def: 32, phy: 59 }
  },
  {
    id: "john_barnes_1986", name: "John Barnes", position: "LW", rating: 84,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 71, pas: 68, dri: 76, def: 32, phy: 59 }
  },
  {
    id: "joel_bats", name: "Joël Bats", position: "GK", rating: 81,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 26, pas: 61, dri: 62, def: 83, phy: 73 }
  },
  {
    id: "manuel_amoros_1986", name: "Manuel Amoros", position: "RB", rating: 86,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 82, sho: 60, pas: 70, dri: 66, def: 79, phy: 73 }
  },
  {
    id: "patrick_battiston", name: "Patrick Battiston", position: "CB", rating: 84,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "maxime_bossis_1986", name: "Maxime Bossis", position: "CB", rating: 83,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "william_ayache", name: "William Ayache", position: "LB", rating: 78,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "luis_fernandez", name: "Luis Fernández", position: "RM", rating: 85,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 69, pas: 72, dri: 76, def: 41, phy: 68 }
  },
  {
    id: "jean_tigana_1986", name: "Jean Tigana", position: "CM", rating: 90,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 71, pas: 78, dri: 74, def: 72, phy: 77 }
  },
  {
    id: "alain_giresse_1986", name: "Alain Giresse", position: "CM", rating: 89,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 69, pas: 83, dri: 72, def: 68, phy: 76 }
  },
  {
    id: "michel_platini_1986", name: "Michel Platini", position: "CAM", rating: 95,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 81, sho: 84, pas: 93, dri: 85, def: 47, phy: 68 }
  },
  {
    id: "dominique_rocheteau_1986", name: "Dominique Rocheteau", position: "RW", rating: 84,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 75, pas: 66, dri: 80, def: 36, phy: 63 }
  },
  {
    id: "yannick_stopyra", name: "Yannick Stopyra", position: "ST", rating: 82,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "jean_pierre_papin", name: "Jean-Pierre Papin", position: "LW", rating: 82,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 77, sho: 66, pas: 64, dri: 74, def: 36, phy: 61 }
  },
  {
    id: "pablo_larios", name: "Pablo Larios", position: "GK", rating: 81,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 66, sho: 26, pas: 61, dri: 62, def: 83, phy: 73 }
  },
  {
    id: "rafael_amador", name: "Rafael Amador", position: "RB", rating: 77,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 68, sho: 49, pas: 65, dri: 66, def: 73, phy: 63 }
  },
  {
    id: "fernando_quirarte", name: "Fernando Quirarte", position: "CB", rating: 81,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "felix_cruz", name: "Félix Cruz", position: "CB", rating: 78,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "raul_servin", name: "Raúl Servín", position: "LB", rating: 78,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "tomas_boy", name: "Tomás Boy", position: "RM", rating: 83,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 76, sho: 67, pas: 68, dri: 70, def: 44, phy: 62 }
  },
  {
    id: "manuel_negrete", name: "Manuel Negrete", position: "CM", rating: 84,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "javier_aguirre", name: "Javier Aguirre", position: "CM", rating: 79,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 60, sho: 63, pas: 70, dri: 66, def: 66, phy: 67 }
  },
  {
    id: "miguel_espana", name: "Miguel España", position: "LM", rating: 78,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 74, sho: 60, pas: 66, dri: 70, def: 36, phy: 60 }
  },
  {
    id: "hugo_sanchez", name: "Hugo Sánchez", position: "RW", rating: 91,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 85, sho: 79, pas: 76, dri: 85, def: 33, phy: 68 }
  },
  {
    id: "luis_flores", name: "Luis Flores", position: "ST", rating: 81,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "carlos_hermosillo", name: "Carlos Hermosillo", position: "LW", rating: 79,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 76, sho: 71, pas: 60, dri: 74, def: 33, phy: 63 }
  },
  {
    id: "badou_zaki", name: "Badou Zaki", position: "GK", rating: 85,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 69, sho: 23, pas: 62, dri: 69, def: 82, phy: 72 }
  },
  {
    id: "abdelmajid_lamriss", name: "Abdelmajid Lamriss", position: "CB", rating: 77,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 63, sho: 43, pas: 62, dri: 55, def: 73, phy: 70 }
  },
  {
    id: "mustapha_el_biyaz", name: "Mustapha El Biyaz", position: "CB", rating: 77,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 63, sho: 43, pas: 62, dri: 55, def: 73, phy: 70 }
  },
  {
    id: "noureddine_bouyahyaoui", name: "Noureddine Bouyahyaoui", position: "CB", rating: 77,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 63, sho: 43, pas: 62, dri: 55, def: 73, phy: 70 }
  },
  {
    id: "abdelmajid_dolmy", name: "Abdelmajid Dolmy", position: "RM", rating: 81,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 69, sho: 61, pas: 67, dri: 71, def: 43, phy: 60 }
  },
  {
    id: "mohamed_timoumi", name: "Mohamed Timoumi", position: "CAM", rating: 86,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 75, sho: 74, pas: 81, dri: 80, def: 43, phy: 66 }
  },
  {
    id: "aziz_bouderbala", name: "Aziz Bouderbala", position: "CM", rating: 85,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "mustapha_el_haddaoui", name: "Mustapha El Haddaoui", position: "LM", rating: 80,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 72, sho: 62, pas: 67, dri: 71, def: 41, phy: 57 }
  },
  {
    id: "abderrazak_khairi", name: "Abderrazak Khairi", position: "RW", rating: 81,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 76, sho: 72, pas: 66, dri: 74, def: 35, phy: 63 }
  },
  {
    id: "abdelkrim_merry_krimau", name: "Abdelkrim Merry Krimau", position: "ST", rating: 82,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "mustapha_merry", name: "Mustapha Merry", position: "LW", rating: 77,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1986, era: "retro", emoji: "👨🏽",
    stats: { pac: 68, sho: 66, pas: 63, dri: 68, def: 32, phy: 60 }
  },
  {
    id: "rinat_dasayev", name: "Rinat Dasayev", position: "GK", rating: 90,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 28, pas: 66, dri: 74, def: 92, phy: 82 }
  },
  {
    id: "anatoliy_demyanenko", name: "Anatoliy Demyanenko", position: "CB", rating: 85,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 53, pas: 64, dri: 58, def: 85, phy: 81 }
  },
  {
    id: "oleg_kuznetsov", name: "Oleg Kuznetsov", position: "CB", rating: 84,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "vladimir_bessonov", name: "Vladimir Bessonov", position: "CB", rating: 83,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "vasyl_rats", name: "Vasyl Rats", position: "RM", rating: 84,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 66, pas: 66, dri: 69, def: 43, phy: 63 }
  },
  {
    id: "pavlo_yakovenko", name: "Pavlo Yakovenko", position: "CM", rating: 82,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "ivan_yaremchuk", name: "Ivan Yaremchuk", position: "CDM", rating: 82,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 59, pas: 66, dri: 66, def: 78, phy: 78 }
  },
  {
    id: "serhiy_aleinikov", name: "Serhiy Aleinikov", position: "CAM", rating: 83,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 70, pas: 80, dri: 81, def: 37, phy: 62 }
  },
  {
    id: "oleksandr_zavarov", name: "Oleksandr Zavarov", position: "LM", rating: 88,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 72, pas: 70, dri: 76, def: 41, phy: 64 }
  },
  {
    id: "igor_belanov", name: "Igor Belanov", position: "ST", rating: 89,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 82, sho: 82, pas: 71, dri: 80, def: 32, phy: 71 }
  },
  {
    id: "oleg_blokhin", name: "Oleg Blokhin", position: "ST", rating: 86,
    country: "Soviet Union", countryCode: "ru", flag: "🇷🇺", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 81, pas: 61, dri: 71, def: 32, phy: 71 }
  },
  {
    id: "andoni_zubizarreta_1986", name: "Andoni Zubizarreta", position: "GK", rating: 86,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 24, pas: 60, dri: 67, def: 90, phy: 72 }
  },
  {
    id: "jose_antonio_camacho", name: "José Antonio Camacho", position: "RB", rating: 84,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 58, pas: 69, dri: 66, def: 73, phy: 73 }
  },
  {
    id: "antonio_maceda", name: "Antonio Maceda", position: "CB", rating: 81,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "andoni_goikoetxea", name: "Andoni Goikoetxea", position: "CB", rating: 82,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "julio_alberto", name: "Julio Alberto", position: "LB", rating: 79,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 51, pas: 62, dri: 61, def: 71, phy: 64 }
  },
  {
    id: "ricardo_gallego", name: "Ricardo Gallego", position: "RM", rating: 81,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 61, pas: 67, dri: 71, def: 43, phy: 60 }
  },
  {
    id: "victor_munoz", name: "Víctor Muñoz", position: "CM", rating: 81,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "michel", name: "Míchel", position: "CM", rating: 86,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 74, pas: 75, dri: 73, def: 67, phy: 70 }
  },
  {
    id: "rafael_gordillo", name: "Rafael Gordillo", position: "LM", rating: 83,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 76, sho: 66, pas: 67, dri: 67, def: 43, phy: 59 }
  },
  {
    id: "emilio_butragueno", name: "Emilio Butragueño", position: "RW", rating: 90,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 86, sho: 81, pas: 68, dri: 84, def: 40, phy: 72 }
  },
  {
    id: "julio_salinas_1986", name: "Julio Salinas", position: "ST", rating: 82,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "eloy", name: "Eloy", position: "LW", rating: 79,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1986, era: "retro", emoji: "👨🏻",
    stats: { pac: 76, sho: 71, pas: 60, dri: 74, def: 33, phy: 63 }
  },

  // ──── 1990s ────
  {
    id: "sergio_goycochea", name: "Sergio Goycochea", position: "GK", rating: 87,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 24, pas: 63, dri: 72, def: 90, phy: 74 }
  },
  {
    id: "oscar_ruggeri_1990", name: "Oscar Ruggeri", position: "RB", rating: 88,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 81, sho: 55, pas: 74, dri: 68, def: 79, phy: 76 }
  },
  {
    id: "juan_simon", name: "Juan Simón", position: "CB", rating: 80,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "jose_serrizuela", name: "José Serrizuela", position: "CB", rating: 79,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "julio_olarticoechea_1990", name: "Julio Olarticoechea", position: "LB", rating: 80,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 76, sho: 55, pas: 64, dri: 62, def: 74, phy: 64 }
  },
  {
    id: "nestor_lorenzo", name: "Néstor Lorenzo", position: "CB", rating: 78,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "jose_basualdo", name: "José Basualdo", position: "RM", rating: 80,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 66, pas: 65, dri: 69, def: 38, phy: 56 }
  },
  {
    id: "ricardo_giusti_1990", name: "Ricardo Giusti", position: "CM", rating: 81,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "jorge_burruchaga_1990", name: "Jorge Burruchaga", position: "CM", rating: 85,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "diego_maradona_1990", name: "Diego Maradona", position: "CAM", rating: 93,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 82, sho: 81, pas: 88, dri: 84, def: 43, phy: 69 }
  },
  {
    id: "claudio_caniggia", name: "Claudio Caniggia", position: "ST", rating: 88,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 86, pas: 68, dri: 76, def: 38, phy: 73 }
  },
  {
    id: "gustavo_dezotti", name: "Gustavo Dezotti", position: "ST", rating: 77,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 75, pas: 56, dri: 62, def: 32, phy: 66 }
  },
  {
    id: "thomas_n_kono_1990", name: "Thomas N'Kono", position: "GK", rating: 86,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1990, era: "retro", emoji: "👨🏾",
    stats: { pac: 68, sho: 24, pas: 60, dri: 67, def: 90, phy: 72 }
  },
  {
    id: "stephen_tataw_1990", name: "Stephen Tataw", position: "RB", rating: 79,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1990, era: "retro", emoji: "👨🏾",
    stats: { pac: 69, sho: 50, pas: 63, dri: 60, def: 74, phy: 70 }
  },
  {
    id: "benjamin_massing", name: "Benjamin Massing", position: "CB", rating: 78,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1990, era: "retro", emoji: "👨🏾",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "emmanuel_kunde_1990", name: "Emmanuel Kundé", position: "CB", rating: 79,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1990, era: "retro", emoji: "👨🏾",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "bertin_ebwelle", name: "Bertin Ebwellé", position: "LB", rating: 77,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1990, era: "retro", emoji: "👨🏾",
    stats: { pac: 67, sho: 46, pas: 59, dri: 66, def: 69, phy: 63 }
  },
  {
    id: "emile_mbouh_1990", name: "Émile Mbouh", position: "CM", rating: 80,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1990, era: "retro", emoji: "👨🏾",
    stats: { pac: 68, sho: 67, pas: 75, dri: 69, def: 63, phy: 68 }
  },
  {
    id: "thomas_libiih", name: "Thomas Libiih", position: "CM", rating: 77,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1990, era: "retro", emoji: "👨🏾",
    stats: { pac: 61, sho: 64, pas: 67, dri: 64, def: 61, phy: 67 }
  },
  {
    id: "jean_claude_pagal", name: "Jean-Claude Pagal", position: "CAM", rating: 78,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1990, era: "retro", emoji: "👨🏾",
    stats: { pac: 68, sho: 73, pas: 73, dri: 71, def: 35, phy: 63 }
  },
  {
    id: "cyrille_makanaky", name: "Cyrille Makanaky", position: "RW", rating: 81,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1990, era: "retro", emoji: "👨🏾",
    stats: { pac: 76, sho: 72, pas: 66, dri: 74, def: 35, phy: 63 }
  },
  {
    id: "francois_omam_biyik_1990", name: "François Omam-Biyik", position: "ST", rating: 84,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1990, era: "retro", emoji: "👨🏾",
    stats: { pac: 72, sho: 77, pas: 66, dri: 73, def: 33, phy: 71 }
  },
  {
    id: "roger_milla_1990", name: "Roger Milla", position: "LW", rating: 89,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1990, era: "retro", emoji: "👨🏾",
    stats: { pac: 81, sho: 78, pas: 67, dri: 78, def: 31, phy: 65 }
  },
  {
    id: "rene_higuita", name: "René Higuita", position: "GK", rating: 84,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1990, era: "retro", emoji: "👨🏽",
    stats: { pac: 66, sho: 22, pas: 58, dri: 64, def: 87, phy: 74 }
  },
  {
    id: "andres_escobar_1990", name: "Andrés Escobar", position: "RB", rating: 83,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1990, era: "retro", emoji: "👨🏽",
    stats: { pac: 80, sho: 58, pas: 65, dri: 68, def: 79, phy: 75 }
  },
  {
    id: "luis_carlos_perea", name: "Luis Carlos Perea", position: "CB", rating: 79,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1990, era: "retro", emoji: "👨🏽",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "luis_fernando_herrera_1990", name: "Luis Fernando Herrera", position: "CB", rating: 78,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1990, era: "retro", emoji: "👨🏽",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "gildardo_gomez", name: "Gildardo Gómez", position: "LB", rating: 76,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1990, era: "retro", emoji: "👨🏽",
    stats: { pac: 66, sho: 50, pas: 59, dri: 62, def: 69, phy: 69 }
  },
  {
    id: "leonel_alvarez_1990", name: "Leonel Álvarez", position: "RM", rating: 79,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1990, era: "retro", emoji: "👨🏽",
    stats: { pac: 72, sho: 62, pas: 66, dri: 65, def: 39, phy: 56 }
  },
  {
    id: "gabriel_gomez_1990", name: "Gabriel Gómez", position: "CM", rating: 78,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1990, era: "retro", emoji: "👨🏽",
    stats: { pac: 60, sho: 65, pas: 70, dri: 66, def: 63, phy: 66 }
  },
  {
    id: "carlos_valderrama_1990", name: "Carlos Valderrama", position: "CAM", rating: 90,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1990, era: "retro", emoji: "👨🏽",
    stats: { pac: 72, sho: 77, pas: 84, dri: 84, def: 44, phy: 65 }
  },
  {
    id: "freddy_rincon_1990", name: "Freddy Rincón", position: "LM", rating: 85,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1990, era: "retro", emoji: "👨🏽",
    stats: { pac: 77, sho: 62, pas: 67, dri: 69, def: 47, phy: 63 }
  },
  {
    id: "arnoldo_iguaran", name: "Arnoldo Iguarán", position: "ST", rating: 81,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1990, era: "retro", emoji: "👨🏽",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "bernardo_redin", name: "Bernardo Redín", position: "ST", rating: 78,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1990, era: "retro", emoji: "👨🏽",
    stats: { pac: 72, sho: 73, pas: 61, dri: 69, def: 29, phy: 66 }
  },
  {
    id: "peter_shilton_1990", name: "Peter Shilton", position: "GK", rating: 88,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 70, sho: 28, pas: 66, dri: 71, def: 86, phy: 80 }
  },
  {
    id: "paul_parker", name: "Paul Parker", position: "RB", rating: 81,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 54, pas: 64, dri: 70, def: 77, phy: 72 }
  },
  {
    id: "des_walker", name: "Des Walker", position: "CB", rating: 84,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "terry_butcher_1990", name: "Terry Butcher", position: "CB", rating: 84,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "stuart_pearce", name: "Stuart Pearce", position: "LB", rating: 85,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 78, sho: 60, pas: 66, dri: 67, def: 81, phy: 76 }
  },
  {
    id: "david_platt", name: "David Platt", position: "RM", rating: 85,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 69, pas: 72, dri: 76, def: 41, phy: 68 }
  },
  {
    id: "paul_gascoigne", name: "Paul Gascoigne", position: "CM", rating: 89,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 69, pas: 83, dri: 72, def: 68, phy: 76 }
  },
  {
    id: "chris_waddle_1990", name: "Chris Waddle", position: "CM", rating: 86,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 74, pas: 75, dri: 73, def: 67, phy: 70 }
  },
  {
    id: "john_barnes_1990", name: "John Barnes", position: "LW", rating: 86,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 81, sho: 73, pas: 72, dri: 79, def: 30, phy: 63 }
  },
  {
    id: "peter_beardsley_1990", name: "Peter Beardsley", position: "ST", rating: 85,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 60, dri: 70, def: 30, phy: 68 }
  },
  {
    id: "gary_lineker_1990", name: "Gary Lineker", position: "ST", rating: 91,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 80, sho: 89, pas: 73, dri: 82, def: 33, phy: 79 }
  },
  {
    id: "packie_bonner", name: "Packie Bonner", position: "GK", rating: 84,
    country: "Ireland", countryCode: "ie", flag: "🇮🇪", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 22, pas: 58, dri: 64, def: 87, phy: 74 }
  },
  {
    id: "chris_morris", name: "Chris Morris", position: "RB", rating: 79,
    country: "Ireland", countryCode: "ie", flag: "🇮🇪", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 50, pas: 63, dri: 60, def: 74, phy: 70 }
  },
  {
    id: "mick_mccarthy", name: "Mick McCarthy", position: "CB", rating: 82,
    country: "Ireland", countryCode: "ie", flag: "🇮🇪", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "kevin_moran", name: "Kevin Moran", position: "CB", rating: 81,
    country: "Ireland", countryCode: "ie", flag: "🇮🇪", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "steve_staunton", name: "Steve Staunton", position: "LB", rating: 82,
    country: "Ireland", countryCode: "ie", flag: "🇮🇪", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 58, pas: 66, dri: 64, def: 74, phy: 69 }
  },
  {
    id: "paul_mcgrath", name: "Paul McGrath", position: "CB", rating: 88,
    country: "Ireland", countryCode: "ie", flag: "🇮🇪", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 50, pas: 67, dri: 63, def: 92, phy: 78 }
  },
  {
    id: "ray_houghton", name: "Ray Houghton", position: "CM", rating: 84,
    country: "Ireland", countryCode: "ie", flag: "🇮🇪", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "andy_townsend", name: "Andy Townsend", position: "CM", rating: 82,
    country: "Ireland", countryCode: "ie", flag: "🇮🇪", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "kevin_sheedy", name: "Kevin Sheedy", position: "CAM", rating: 83,
    country: "Ireland", countryCode: "ie", flag: "🇮🇪", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 70, pas: 80, dri: 81, def: 37, phy: 62 }
  },
  {
    id: "john_aldridge", name: "John Aldridge", position: "RW", rating: 84,
    country: "Ireland", countryCode: "ie", flag: "🇮🇪", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 75, pas: 66, dri: 80, def: 36, phy: 63 }
  },
  {
    id: "niall_quinn", name: "Niall Quinn", position: "ST", rating: 81,
    country: "Ireland", countryCode: "ie", flag: "🇮🇪", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "tony_cascarino", name: "Tony Cascarino", position: "LW", rating: 79,
    country: "Ireland", countryCode: "ie", flag: "🇮🇪", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 76, sho: 71, pas: 60, dri: 74, def: 33, phy: 63 }
  },
  {
    id: "walter_zenga", name: "Walter Zenga", position: "GK", rating: 86,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 24, pas: 60, dri: 67, def: 90, phy: 72 }
  },
  {
    id: "giuseppe_bergomi", name: "Giuseppe Bergomi", position: "RB", rating: 87,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 78, sho: 59, pas: 69, dri: 75, def: 84, phy: 74 }
  },
  {
    id: "franco_baresi_1990", name: "Franco Baresi", position: "CB", rating: 93,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 54, pas: 73, dri: 67, def: 90, phy: 90 }
  },
  {
    id: "riccardo_ferri", name: "Riccardo Ferri", position: "CB", rating: 83,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "paolo_maldini_1990", name: "Paolo Maldini", position: "LB", rating: 90,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 83, sho: 57, pas: 69, dri: 69, def: 79, phy: 78 }
  },
  {
    id: "roberto_donadoni_1990", name: "Roberto Donadoni", position: "CM", rating: 86,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 74, pas: 75, dri: 73, def: 67, phy: 70 }
  },
  {
    id: "giuseppe_giannini", name: "Giuseppe Giannini", position: "CM", rating: 84,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "fernando_de_napoli", name: "Fernando De Napoli", position: "CAM", rating: 81,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 65, sho: 68, pas: 74, dri: 72, def: 37, phy: 57 }
  },
  {
    id: "roberto_baggio_1990", name: "Roberto Baggio", position: "RW", rating: 91,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 85, sho: 79, pas: 76, dri: 85, def: 33, phy: 68 }
  },
  {
    id: "gianluca_vialli", name: "Gianluca Vialli", position: "ST", rating: 86,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 81, pas: 61, dri: 71, def: 32, phy: 71 }
  },
  {
    id: "salvatore_schillaci", name: "Salvatore Schillaci", position: "LW", rating: 88,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 84, sho: 79, pas: 71, dri: 84, def: 38, phy: 66 }
  },
  {
    id: "jim_leighton", name: "Jim Leighton", position: "GK", rating: 82,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 20, pas: 56, dri: 65, def: 86, phy: 75 }
  },
  {
    id: "richard_gough", name: "Richard Gough", position: "RB", rating: 83,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 80, sho: 58, pas: 65, dri: 68, def: 79, phy: 75 }
  },
  {
    id: "alex_mcleish", name: "Alex McLeish", position: "CB", rating: 82,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "dave_mcpherson", name: "Dave McPherson", position: "CB", rating: 79,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "maurice_malpas", name: "Maurice Malpas", position: "LB", rating: 80,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 76, sho: 55, pas: 64, dri: 62, def: 74, phy: 64 }
  },
  {
    id: "roy_aitken", name: "Roy Aitken", position: "RM", rating: 81,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 61, pas: 67, dri: 71, def: 43, phy: 60 }
  },
  {
    id: "paul_mcstay", name: "Paul McStay", position: "CM", rating: 84,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "murdo_macleod", name: "Murdo MacLeod", position: "CDM", rating: 79,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 53, pas: 62, dri: 61, def: 73, phy: 68 }
  },
  {
    id: "stuart_mccall", name: "Stuart McCall", position: "CAM", rating: 80,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 76, pas: 72, dri: 78, def: 43, phy: 62 }
  },
  {
    id: "jim_bett", name: "Jim Bett", position: "LM", rating: 78,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 60, pas: 66, dri: 70, def: 36, phy: 60 }
  },
  {
    id: "mo_johnston", name: "Mo Johnston", position: "RW", rating: 84,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 75, pas: 66, dri: 80, def: 36, phy: 63 }
  },
  {
    id: "ally_mccoist", name: "Ally McCoist", position: "ST", rating: 83,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 64, dri: 71, def: 35, phy: 72 }
  },
  {
    id: "gordon_durie", name: "Gordon Durie", position: "LW", rating: 79,
    country: "Scotland", countryCode: "gb-sct", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", year: 1990, era: "retro", emoji: "👨🏻",
    stats: { pac: 76, sho: 71, pas: 60, dri: 74, def: 33, phy: 63 }
  },
  {
    id: "bodo_illgner", name: "Bodo Illgner", position: "GK", rating: 84,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1990, era: "retro", emoji: "👱🏼",
    stats: { pac: 66, sho: 22, pas: 58, dri: 64, def: 87, phy: 74 }
  },
  {
    id: "thomas_berthold", name: "Thomas Berthold", position: "RB", rating: 83,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1990, era: "retro", emoji: "👱🏼",
    stats: { pac: 80, sho: 58, pas: 65, dri: 68, def: 79, phy: 75 }
  },
  {
    id: "jurgen_kohler", name: "Jürgen Kohler", position: "CB", rating: 87,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1990, era: "retro", emoji: "👱🏼",
    stats: { pac: 68, sho: 52, pas: 70, dri: 60, def: 89, phy: 78 }
  },
  {
    id: "klaus_augenthaler", name: "Klaus Augenthaler", position: "CB", rating: 85,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1990, era: "retro", emoji: "👱🏼",
    stats: { pac: 69, sho: 53, pas: 64, dri: 58, def: 85, phy: 81 }
  },
  {
    id: "guido_buchwald", name: "Guido Buchwald", position: "LB", rating: 85,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1990, era: "retro", emoji: "👱🏼",
    stats: { pac: 78, sho: 60, pas: 66, dri: 67, def: 81, phy: 76 }
  },
  {
    id: "andreas_brehme", name: "Andreas Brehme", position: "LB", rating: 90,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1990, era: "retro", emoji: "👱🏼",
    stats: { pac: 83, sho: 57, pas: 69, dri: 69, def: 79, phy: 78 }
  },
  {
    id: "lothar_matthaus", name: "Lothar Matthäus", position: "CM", rating: 94,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1990, era: "retro", emoji: "👱🏼",
    stats: { pac: 74, sho: 73, pas: 89, dri: 82, def: 72, phy: 75 }
  },
  {
    id: "thomas_haler", name: "Thomas Häßler", position: "CM", rating: 86,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1990, era: "retro", emoji: "👱🏼",
    stats: { pac: 69, sho: 74, pas: 75, dri: 73, def: 67, phy: 70 }
  },
  {
    id: "pierre_littbarski", name: "Pierre Littbarski", position: "CAM", rating: 84,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1990, era: "retro", emoji: "👱🏼",
    stats: { pac: 74, sho: 76, pas: 78, dri: 74, def: 42, phy: 64 }
  },
  {
    id: "rudi_voller", name: "Rudi Völler", position: "ST", rating: 88,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1990, era: "retro", emoji: "👱🏼",
    stats: { pac: 75, sho: 86, pas: 68, dri: 76, def: 38, phy: 73 }
  },
  {
    id: "jurgen_klinsmann", name: "Jürgen Klinsmann", position: "ST", rating: 90,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 1990, era: "retro", emoji: "👱🏼",
    stats: { pac: 78, sho: 82, pas: 66, dri: 73, def: 32, phy: 72 }
  },
  {
    id: "michel_preud_homme", name: "Michel Preud'homme", position: "GK", rating: 89,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 77, sho: 26, pas: 64, dri: 68, def: 87, phy: 79 }
  },
  {
    id: "philippe_albert", name: "Philippe Albert", position: "RB", rating: 85,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 54, pas: 65, dri: 70, def: 75, phy: 77 }
  },
  {
    id: "georges_grun_1994", name: "Georges Grün", position: "CB", rating: 80,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "michel_de_wolf", name: "Michel De Wolf", position: "CB", rating: 78,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "rudi_smidts", name: "Rudi Smidts", position: "LB", rating: 77,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 67, sho: 46, pas: 59, dri: 66, def: 69, phy: 63 }
  },
  {
    id: "lorenzo_staelens", name: "Lorenzo Staelens", position: "RM", rating: 82,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 63, pas: 69, dri: 74, def: 42, phy: 66 }
  },
  {
    id: "franky_van_der_elst", name: "Franky Van der Elst", position: "CM", rating: 81,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "enzo_scifo_1994", name: "Enzo Scifo", position: "CAM", rating: 88,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 76, pas: 85, dri: 79, def: 48, phy: 63 }
  },
  {
    id: "marc_degryse", name: "Marc Degryse", position: "LM", rating: 83,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 76, sho: 66, pas: 67, dri: 67, def: 43, phy: 59 }
  },
  {
    id: "marc_wilmots", name: "Marc Wilmots", position: "ST", rating: 83,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 64, dri: 71, def: 35, phy: 72 }
  },
  {
    id: "josip_weber", name: "Josip Weber", position: "ST", rating: 79,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 71, pas: 57, dri: 66, def: 28, phy: 69 }
  },
  {
    id: "taffarel_1994", name: "Taffarel", position: "GK", rating: 86,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 68, sho: 24, pas: 60, dri: 67, def: 90, phy: 72 }
  },
  {
    id: "jorginho", name: "Jorginho", position: "RB", rating: 85,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 74, sho: 54, pas: 65, dri: 70, def: 75, phy: 77 }
  },
  {
    id: "aldair_1994", name: "Aldair", position: "CB", rating: 87,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 68, sho: 52, pas: 70, dri: 60, def: 89, phy: 78 }
  },
  {
    id: "marcio_santos", name: "Márcio Santos", position: "CB", rating: 83,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "branco", name: "Branco", position: "LB", rating: 84,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 77, sho: 56, pas: 70, dri: 72, def: 76, phy: 75 }
  },
  {
    id: "mauro_silva", name: "Mauro Silva", position: "CDM", rating: 84,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 70, sho: 56, pas: 67, dri: 67, def: 83, phy: 76 }
  },
  {
    id: "dunga_1994", name: "Dunga", position: "CDM", rating: 87,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 71, sho: 62, pas: 72, dri: 67, def: 79, phy: 78 }
  },
  {
    id: "zinho", name: "Zinho", position: "CM", rating: 83,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "rai", name: "Raí", position: "LM", rating: 84,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 79, sho: 63, pas: 70, dri: 76, def: 41, phy: 61 }
  },
  {
    id: "bebeto_1994", name: "Bebeto", position: "ST", rating: 90,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 78, sho: 82, pas: 66, dri: 73, def: 32, phy: 72 }
  },
  {
    id: "romario", name: "Romário", position: "ST", rating: 95,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 86, sho: 88, pas: 72, dri: 80, def: 42, phy: 75 }
  },
  {
    id: "borislav_mihaylov", name: "Borislav Mihaylov", position: "GK", rating: 82,
    country: "Bulgaria", countryCode: "bg", flag: "🇧🇬", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 20, pas: 56, dri: 65, def: 86, phy: 75 }
  },
  {
    id: "trifon_ivanov", name: "Trifon Ivanov", position: "RB", rating: 79,
    country: "Bulgaria", countryCode: "bg", flag: "🇧🇬", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 50, pas: 63, dri: 60, def: 74, phy: 70 }
  },
  {
    id: "petar_hubchev", name: "Petar Hubchev", position: "CB", rating: 78,
    country: "Bulgaria", countryCode: "bg", flag: "🇧🇬", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "tsanko_tsvetanov", name: "Tsanko Tsvetanov", position: "CB", rating: 76,
    country: "Bulgaria", countryCode: "bg", flag: "🇧🇬", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 42, pas: 55, dri: 52, def: 74, phy: 71 }
  },
  {
    id: "ilian_kiriakov", name: "Ilian Kiriakov", position: "LB", rating: 76,
    country: "Bulgaria", countryCode: "bg", flag: "🇧🇬", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 50, pas: 59, dri: 62, def: 69, phy: 69 }
  },
  {
    id: "zlatko_yankov", name: "Zlatko Yankov", position: "CM", rating: 78,
    country: "Bulgaria", countryCode: "bg", flag: "🇧🇬", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 65, pas: 70, dri: 66, def: 63, phy: 66 }
  },
  {
    id: "yordan_letchkov", name: "Yordan Letchkov", position: "CM", rating: 83,
    country: "Bulgaria", countryCode: "bg", flag: "🇧🇬", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "krasimir_balakov", name: "Krasimir Balakov", position: "CAM", rating: 85,
    country: "Bulgaria", countryCode: "bg", flag: "🇧🇬", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 78, pas: 82, dri: 76, def: 41, phy: 63 }
  },
  {
    id: "hristo_stoichkov", name: "Hristo Stoichkov", position: "RW", rating: 92,
    country: "Bulgaria", countryCode: "bg", flag: "🇧🇬", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 87, sho: 78, pas: 69, dri: 85, def: 35, phy: 68 }
  },
  {
    id: "emil_kostadinov", name: "Emil Kostadinov", position: "ST", rating: 82,
    country: "Bulgaria", countryCode: "bg", flag: "🇧🇬", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "nasko_sirakov", name: "Nasko Sirakov", position: "LW", rating: 80,
    country: "Bulgaria", countryCode: "bg", flag: "🇧🇬", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 77, sho: 70, pas: 62, dri: 74, def: 30, phy: 62 }
  },
  {
    id: "joseph_antoine_bell", name: "Joseph-Antoine Bell", position: "GK", rating: 83,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1994, era: "retro", emoji: "👨🏾",
    stats: { pac: 66, sho: 27, pas: 61, dri: 67, def: 84, phy: 73 }
  },
  {
    id: "rigobert_song_1994", name: "Rigobert Song", position: "RB", rating: 79,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1994, era: "retro", emoji: "👨🏾",
    stats: { pac: 69, sho: 50, pas: 63, dri: 60, def: 74, phy: 70 }
  },
  {
    id: "stephen_tataw_1994", name: "Stephen Tataw", position: "CB", rating: 79,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1994, era: "retro", emoji: "👨🏾",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "raymond_kalla_1994", name: "Raymond Kalla", position: "CB", rating: 80,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1994, era: "retro", emoji: "👨🏾",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "hans_agbo", name: "Hans Agbo", position: "LB", rating: 78,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1994, era: "retro", emoji: "👨🏾",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "marc_vivien_foe_1994", name: "Marc-Vivien Foé", position: "CM", rating: 85,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1994, era: "retro", emoji: "👨🏾",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "emile_mbouh_1994", name: "Emile Mbouh", position: "CM", rating: 81,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1994, era: "retro", emoji: "👨🏾",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "louis_paul_mfede", name: "Louis-Paul Mfede", position: "CAM", rating: 80,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1994, era: "retro", emoji: "👨🏾",
    stats: { pac: 69, sho: 76, pas: 72, dri: 78, def: 43, phy: 62 }
  },
  {
    id: "francois_omam_biyik_1994", name: "François Omam-Biyik", position: "RW", rating: 86,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1994, era: "retro", emoji: "👨🏾",
    stats: { pac: 79, sho: 76, pas: 65, dri: 83, def: 33, phy: 61 }
  },
  {
    id: "roger_milla_1994", name: "Roger Milla", position: "ST", rating: 83,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1994, era: "retro", emoji: "👨🏾",
    stats: { pac: 73, sho: 80, pas: 64, dri: 71, def: 35, phy: 72 }
  },
  {
    id: "david_embe", name: "David Embé", position: "LW", rating: 79,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1994, era: "retro", emoji: "👨🏾",
    stats: { pac: 76, sho: 71, pas: 60, dri: 74, def: 33, phy: 63 }
  },
  {
    id: "alphonse_tchami", name: "Alphonse Tchami", position: "ST", rating: 80,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 1994, era: "retro", emoji: "👨🏾",
    stats: { pac: 72, sho: 78, pas: 62, dri: 66, def: 29, phy: 67 }
  },
  {
    id: "oscar_cordoba", name: "Óscar Córdoba", position: "GK", rating: 81,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 66, sho: 26, pas: 61, dri: 62, def: 83, phy: 73 }
  },
  {
    id: "andres_escobar_1994", name: "Andrés Escobar", position: "RB", rating: 82,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 73, sho: 57, pas: 68, dri: 68, def: 76, phy: 72 }
  },
  {
    id: "luis_fernando_herrera_1994", name: "Luis Fernando Herrera", position: "CB", rating: 78,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "alexis_mendoza", name: "Alexis Mendoza", position: "CB", rating: 77,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 63, sho: 43, pas: 62, dri: 55, def: 73, phy: 70 }
  },
  {
    id: "wilson_perez", name: "Wilson Pérez", position: "LB", rating: 76,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 66, sho: 50, pas: 59, dri: 62, def: 69, phy: 69 }
  },
  {
    id: "leonel_alvarez_1994", name: "Leonel Álvarez", position: "RM", rating: 79,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 72, sho: 62, pas: 66, dri: 65, def: 39, phy: 56 }
  },
  {
    id: "gabriel_gomez_1994", name: "Gabriel Gómez", position: "CM", rating: 78,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 60, sho: 65, pas: 70, dri: 66, def: 63, phy: 66 }
  },
  {
    id: "freddy_rincon_1994", name: "Freddy Rincón", position: "CM", rating: 85,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "carlos_valderrama_1994", name: "Carlos Valderrama", position: "CAM", rating: 89,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 75, sho: 82, pas: 80, dri: 87, def: 41, phy: 67 }
  },
  {
    id: "faustino_asprilla", name: "Faustino Asprilla", position: "RW", rating: 87,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 79, sho: 74, pas: 69, dri: 79, def: 38, phy: 69 }
  },
  {
    id: "adolfo_valencia", name: "Adolfo Valencia", position: "ST", rating: 82,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "antony_de_avila", name: "Antony de Ávila", position: "LW", rating: 79,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 76, sho: 71, pas: 60, dri: 74, def: 33, phy: 63 }
  },
  {
    id: "gianluca_pagliuca", name: "Gianluca Pagliuca", position: "GK", rating: 87,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 24, pas: 63, dri: 72, def: 90, phy: 74 }
  },
  {
    id: "franco_baresi_1994", name: "Franco Baresi", position: "RB", rating: 92,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 84, sho: 61, pas: 72, dri: 75, def: 83, phy: 79 }
  },
  {
    id: "paolo_maldini_1994", name: "Paolo Maldini", position: "LB", rating: 92,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 84, sho: 63, pas: 76, dri: 75, def: 87, phy: 75 }
  },
  {
    id: "alessandro_costacurta", name: "Alessandro Costacurta", position: "CB", rating: 87,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 52, pas: 70, dri: 60, def: 89, phy: 78 }
  },
  {
    id: "roberto_mussi", name: "Roberto Mussi", position: "LB", rating: 79,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 51, pas: 62, dri: 61, def: 71, phy: 64 }
  },
  {
    id: "antonio_benarrivo", name: "Antonio Benarrivo", position: "CB", rating: 80,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "demetrio_albertini", name: "Demetrio Albertini", position: "RM", rating: 86,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 78, sho: 68, pas: 72, dri: 77, def: 40, phy: 61 }
  },
  {
    id: "dino_baggio", name: "Dino Baggio", position: "CM", rating: 84,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "roberto_donadoni_1994", name: "Roberto Donadoni", position: "CM", rating: 85,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "nicola_berti", name: "Nicola Berti", position: "LM", rating: 82,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 66, pas: 67, dri: 67, def: 46, phy: 59 }
  },
  {
    id: "roberto_baggio_1994", name: "Roberto Baggio", position: "RW", rating: 95,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 90, sho: 81, pas: 79, dri: 84, def: 38, phy: 68 }
  },
  {
    id: "giuseppe_signori", name: "Giuseppe Signori", position: "ST", rating: 86,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 81, pas: 61, dri: 71, def: 32, phy: 71 }
  },
  {
    id: "daniele_massaro", name: "Daniele Massaro", position: "LW", rating: 83,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 69, pas: 67, dri: 80, def: 29, phy: 67 }
  },
  {
    id: "peter_rufai_1994", name: "Peter Rufai", position: "GK", rating: 83,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1994, era: "retro", emoji: "👨🏿",
    stats: { pac: 66, sho: 27, pas: 61, dri: 67, def: 84, phy: 73 }
  },
  {
    id: "augustine_eguavoen_1994", name: "Augustine Eguavoen", position: "RB", rating: 79,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1994, era: "retro", emoji: "👨🏿",
    stats: { pac: 69, sho: 50, pas: 63, dri: 60, def: 74, phy: 70 }
  },
  {
    id: "stephen_keshi", name: "Stephen Keshi", position: "CB", rating: 83,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1994, era: "retro", emoji: "👨🏿",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "uche_okechukwu_1994", name: "Uche Okechukwu", position: "CB", rating: 82,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1994, era: "retro", emoji: "👨🏿",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "ben_iroha", name: "Ben Iroha", position: "LB", rating: 78,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1994, era: "retro", emoji: "👨🏿",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "sunday_oliseh_1994", name: "Sunday Oliseh", position: "CDM", rating: 84,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1994, era: "retro", emoji: "👨🏿",
    stats: { pac: 70, sho: 56, pas: 67, dri: 67, def: 83, phy: 76 }
  },
  {
    id: "jay_jay_okocha_1994", name: "Jay-Jay Okocha", position: "CM", rating: 88,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1994, era: "retro", emoji: "👨🏿",
    stats: { pac: 73, sho: 75, pas: 81, dri: 77, def: 71, phy: 72 }
  },
  {
    id: "finidi_george_1994", name: "Finidi George", position: "CAM", rating: 85,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1994, era: "retro", emoji: "👨🏿",
    stats: { pac: 72, sho: 78, pas: 82, dri: 76, def: 41, phy: 63 }
  },
  {
    id: "emmanuel_amunike", name: "Emmanuel Amunike", position: "RW", rating: 84,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1994, era: "retro", emoji: "👨🏿",
    stats: { pac: 79, sho: 75, pas: 66, dri: 80, def: 36, phy: 63 }
  },
  {
    id: "daniel_amokachi_1994", name: "Daniel Amokachi", position: "ST", rating: 85,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1994, era: "retro", emoji: "👨🏿",
    stats: { pac: 73, sho: 80, pas: 60, dri: 70, def: 30, phy: 68 }
  },
  {
    id: "rashidi_yekini", name: "Rashidi Yekini", position: "LW", rating: 88,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1994, era: "retro", emoji: "👨🏿",
    stats: { pac: 84, sho: 79, pas: 71, dri: 84, def: 38, phy: 66 }
  },
  {
    id: "samson_siasia", name: "Samson Siasia", position: "ST", rating: 80,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1994, era: "retro", emoji: "👨🏿",
    stats: { pac: 72, sho: 78, pas: 62, dri: 66, def: 29, phy: 67 }
  },
  {
    id: "bogdan_stelea", name: "Bogdan Stelea", position: "GK", rating: 80,
    country: "Romania", countryCode: "ro", flag: "🇷🇴", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 24, pas: 61, dri: 61, def: 84, phy: 67 }
  },
  {
    id: "dan_petrescu", name: "Dan Petrescu", position: "RB", rating: 84,
    country: "Romania", countryCode: "ro", flag: "🇷🇴", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 58, pas: 69, dri: 66, def: 73, phy: 73 }
  },
  {
    id: "miodrag_belodedici", name: "Miodrag Belodedici", position: "CB", rating: 85,
    country: "Romania", countryCode: "ro", flag: "🇷🇴", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 53, pas: 64, dri: 58, def: 85, phy: 81 }
  },
  {
    id: "daniel_prodan", name: "Daniel Prodan", position: "CB", rating: 81,
    country: "Romania", countryCode: "ro", flag: "🇷🇴", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "tibor_selymes", name: "Tibor Selymes", position: "LB", rating: 77,
    country: "Romania", countryCode: "ro", flag: "🇷🇴", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 67, sho: 46, pas: 59, dri: 66, def: 69, phy: 63 }
  },
  {
    id: "gheorghe_popescu", name: "Gheorghe Popescu", position: "RM", rating: 86,
    country: "Romania", countryCode: "ro", flag: "🇷🇴", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 78, sho: 68, pas: 72, dri: 77, def: 40, phy: 61 }
  },
  {
    id: "ioan_lupescu", name: "Ioan Lupescu", position: "CM", rating: 80,
    country: "Romania", countryCode: "ro", flag: "🇷🇴", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 67, pas: 75, dri: 69, def: 63, phy: 68 }
  },
  {
    id: "dorinel_munteanu", name: "Dorinel Munteanu", position: "CM", rating: 83,
    country: "Romania", countryCode: "ro", flag: "🇷🇴", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "gheorghe_hagi", name: "Gheorghe Hagi", position: "CAM", rating: 93,
    country: "Romania", countryCode: "ro", flag: "🇷🇴", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 82, sho: 81, pas: 88, dri: 84, def: 43, phy: 69 }
  },
  {
    id: "florin_raducioiu", name: "Florin Răducioiu", position: "ST", rating: 84,
    country: "Romania", countryCode: "ro", flag: "🇷🇴", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 77, pas: 66, dri: 73, def: 33, phy: 71 }
  },
  {
    id: "ilie_dumitrescu", name: "Ilie Dumitrescu", position: "ST", rating: 83,
    country: "Romania", countryCode: "ro", flag: "🇷🇴", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 64, dri: 71, def: 35, phy: 72 }
  },
  {
    id: "mohamed_al_deayea", name: "Mohamed Al-Deayea", position: "GK", rating: 84,
    country: "Saudi Arabia", countryCode: "sa", flag: "🇸🇦", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 66, sho: 22, pas: 58, dri: 64, def: 87, phy: 74 }
  },
  {
    id: "mohammed_al_khilaiwi", name: "Mohammed Al-Khilaiwi", position: "CB", rating: 78,
    country: "Saudi Arabia", countryCode: "sa", flag: "🇸🇦", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "ahmed_madani", name: "Ahmed Madani", position: "CB", rating: 77,
    country: "Saudi Arabia", countryCode: "sa", flag: "🇸🇦", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 63, sho: 43, pas: 62, dri: 55, def: 73, phy: 70 }
  },
  {
    id: "abdullah_zubromawi", name: "Abdullah Zubromawi", position: "CB", rating: 76,
    country: "Saudi Arabia", countryCode: "sa", flag: "🇸🇦", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 60, sho: 42, pas: 55, dri: 52, def: 74, phy: 71 }
  },
  {
    id: "fuad_anwar", name: "Fuad Anwar", position: "CM", rating: 81,
    country: "Saudi Arabia", countryCode: "sa", flag: "🇸🇦", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "khalid_al_muwallid", name: "Khalid Al-Muwallid", position: "CM", rating: 80,
    country: "Saudi Arabia", countryCode: "sa", flag: "🇸🇦", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 68, sho: 67, pas: 75, dri: 69, def: 63, phy: 68 }
  },
  {
    id: "fahad_al_bishi", name: "Fahad Al-Bishi", position: "CAM", rating: 80,
    country: "Saudi Arabia", countryCode: "sa", flag: "🇸🇦", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 69, sho: 76, pas: 72, dri: 78, def: 43, phy: 62 }
  },
  {
    id: "saeed_al_owairan", name: "Saeed Al-Owairan", position: "RW", rating: 85,
    country: "Saudi Arabia", countryCode: "sa", flag: "🇸🇦", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 79, sho: 71, pas: 72, dri: 77, def: 34, phy: 61 }
  },
  {
    id: "sami_al_jaber", name: "Sami Al-Jaber", position: "ST", rating: 84,
    country: "Saudi Arabia", countryCode: "sa", flag: "🇸🇦", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 72, sho: 77, pas: 66, dri: 73, def: 33, phy: 71 }
  },
  {
    id: "majed_abdullah", name: "Majed Abdullah", position: "LW", rating: 83,
    country: "Saudi Arabia", countryCode: "sa", flag: "🇸🇦", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 74, sho: 69, pas: 67, dri: 80, def: 29, phy: 67 }
  },
  {
    id: "fahad_al_ghesheyan", name: "Fahad Al-Ghesheyan", position: "ST", rating: 78,
    country: "Saudi Arabia", countryCode: "sa", flag: "🇸🇦", year: 1994, era: "retro", emoji: "👨🏽",
    stats: { pac: 72, sho: 73, pas: 61, dri: 69, def: 29, phy: 66 }
  },
  {
    id: "andoni_zubizarreta_1994", name: "Andoni Zubizarreta", position: "GK", rating: 87,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 24, pas: 63, dri: 72, def: 90, phy: 74 }
  },
  {
    id: "albert_ferrer", name: "Albert Ferrer", position: "RB", rating: 81,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 54, pas: 64, dri: 70, def: 77, phy: 72 }
  },
  {
    id: "abelardo", name: "Abelardo", position: "CB", rating: 81,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "miguel_angel_nadal", name: "Miguel Ángel Nadal", position: "CB", rating: 83,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "rafael_alkorta", name: "Rafael Alkorta", position: "LB", rating: 80,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 76, sho: 55, pas: 64, dri: 62, def: 74, phy: 64 }
  },
  {
    id: "sergi_barjuan", name: "Sergi Barjuán", position: "CB", rating: 81,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "fernando_hierro_1994", name: "Fernando Hierro", position: "RM", rating: 87,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 77, sho: 68, pas: 67, dri: 72, def: 47, phy: 65 }
  },
  {
    id: "jose_luis_caminero", name: "José Luis Caminero", position: "CM", rating: 84,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "luis_enrique", name: "Luis Enrique", position: "CDM", rating: 85,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 65, sho: 58, pas: 70, dri: 64, def: 83, phy: 74 }
  },
  {
    id: "pep_guardiola", name: "Pep Guardiola", position: "CAM", rating: 85,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 78, pas: 82, dri: 76, def: 41, phy: 63 }
  },
  {
    id: "julen_guerrero", name: "Julen Guerrero", position: "LM", rating: 82,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 66, pas: 67, dri: 67, def: 46, phy: 59 }
  },
  {
    id: "julio_salinas_1994", name: "Julio Salinas", position: "ST", rating: 80,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 78, pas: 62, dri: 66, def: 29, phy: 67 }
  },
  {
    id: "jon_andoni_goikoetxea", name: "Jon Andoni Goikoetxea", position: "ST", rating: 81,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "thomas_ravelli", name: "Thomas Ravelli", position: "GK", rating: 86,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 24, pas: 60, dri: 67, def: 90, phy: 72 }
  },
  {
    id: "roland_nilsson", name: "Roland Nilsson", position: "RB", rating: 84,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 58, pas: 69, dri: 66, def: 73, phy: 73 }
  },
  {
    id: "patrik_andersson", name: "Patrik Andersson", position: "CB", rating: 84,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "joachim_bjorklund", name: "Joachim Björklund", position: "CB", rating: 81,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "roger_ljung", name: "Roger Ljung", position: "LB", rating: 78,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "stefan_schwarz", name: "Stefan Schwarz", position: "CM", rating: 84,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "jonas_thern", name: "Jonas Thern", position: "CM", rating: 85,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "klas_ingesson", name: "Klas Ingesson", position: "CAM", rating: 81,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 65, sho: 68, pas: 74, dri: 72, def: 37, phy: 57 }
  },
  {
    id: "tomas_brolin", name: "Tomas Brolin", position: "RW", rating: 89,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 85, sho: 73, pas: 71, dri: 81, def: 39, phy: 63 }
  },
  {
    id: "martin_dahlin", name: "Martin Dahlin", position: "ST", rating: 86,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 81, pas: 61, dri: 71, def: 32, phy: 71 }
  },
  {
    id: "kennet_andersson", name: "Kennet Andersson", position: "LW", rating: 87,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 83, sho: 74, pas: 65, dri: 76, def: 33, phy: 67 }
  },
  {
    id: "henrik_larsson_1994", name: "Henrik Larsson", position: "ST", rating: 82,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "tony_meola", name: "Tony Meola", position: "GK", rating: 82,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 20, pas: 56, dri: 65, def: 86, phy: 75 }
  },
  {
    id: "alexi_lalas", name: "Alexi Lalas", position: "RB", rating: 81,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 54, pas: 64, dri: 70, def: 77, phy: 72 }
  },
  {
    id: "marcelo_balboa", name: "Marcelo Balboa", position: "CB", rating: 82,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "paul_caligiuri", name: "Paul Caligiuri", position: "CB", rating: 79,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "fernando_clavijo", name: "Fernando Clavijo", position: "LB", rating: 78,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "thomas_dooley", name: "Thomas Dooley", position: "RM", rating: 81,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 61, pas: 67, dri: 71, def: 43, phy: 60 }
  },
  {
    id: "mike_sorber", name: "Mike Sorber", position: "CM", rating: 79,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 60, sho: 63, pas: 70, dri: 66, def: 66, phy: 67 }
  },
  {
    id: "tab_ramos", name: "Tab Ramos", position: "CDM", rating: 83,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 70, sho: 61, pas: 68, dri: 68, def: 77, phy: 79 }
  },
  {
    id: "john_harkes", name: "John Harkes", position: "CAM", rating: 82,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 73, pas: 80, dri: 81, def: 37, phy: 60 }
  },
  {
    id: "cobi_jones", name: "Cobi Jones", position: "LM", rating: 81,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 61, pas: 68, dri: 67, def: 40, phy: 60 }
  },
  {
    id: "eric_wynalda", name: "Eric Wynalda", position: "RW", rating: 83,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 75, pas: 63, dri: 80, def: 37, phy: 60 }
  },
  {
    id: "earnie_stewart", name: "Earnie Stewart", position: "ST", rating: 82,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "roy_wegerle", name: "Roy Wegerle", position: "LW", rating: 80,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 1994, era: "retro", emoji: "👨🏻",
    stats: { pac: 77, sho: 70, pas: 62, dri: 74, def: 30, phy: 62 }
  },
  {
    id: "taffarel_1998", name: "Taffarel", position: "GK", rating: 85,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 69, sho: 23, pas: 62, dri: 69, def: 82, phy: 72 }
  },
  {
    id: "cafu_1998", name: "Cafu", position: "RB", rating: 90,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 80, sho: 55, pas: 73, dri: 72, def: 83, phy: 74 }
  },
  {
    id: "junior_baiano", name: "Júnior Baiano", position: "CB", rating: 80,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "aldair_1998", name: "Aldair", position: "CB", rating: 86,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 64, sho: 47, pas: 61, dri: 67, def: 87, phy: 76 }
  },
  {
    id: "roberto_carlos_1998", name: "Roberto Carlos", position: "LB", rating: 91,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 82, sho: 57, pas: 75, dri: 70, def: 87, phy: 81 }
  },
  {
    id: "dunga_1998", name: "Dunga", position: "CDM", rating: 86,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 66, sho: 59, pas: 75, dri: 65, def: 78, phy: 81 }
  },
  {
    id: "cesar_sampaio", name: "César Sampaio", position: "CM", rating: 82,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "leonardo", name: "Leonardo", position: "CM", rating: 86,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 69, sho: 74, pas: 75, dri: 73, def: 67, phy: 70 }
  },
  {
    id: "rivaldo_1998", name: "Rivaldo", position: "LM", rating: 92,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 79, sho: 67, pas: 79, dri: 77, def: 46, phy: 73 }
  },
  {
    id: "ronaldo_1998", name: "Ronaldo", position: "RW", rating: 96,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 94, sho: 79, pas: 73, dri: 87, def: 35, phy: 68 }
  },
  {
    id: "bebeto_1998", name: "Bebeto", position: "ST", rating: 87,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 73, sho: 84, pas: 66, dri: 77, def: 35, phy: 71 }
  },
  {
    id: "denilson_1998", name: "Denílson", position: "LW", rating: 83,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 74, sho: 69, pas: 67, dri: 80, def: 29, phy: 67 }
  },
  {
    id: "drazen_ladic", name: "Dražen Ladić", position: "GK", rating: 82,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 20, pas: 56, dri: 65, def: 86, phy: 75 }
  },
  {
    id: "igor_stimac", name: "Igor Štimac", position: "RB", rating: 84,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 58, pas: 69, dri: 66, def: 73, phy: 73 }
  },
  {
    id: "slaven_bilic", name: "Slaven Bilić", position: "CB", rating: 85,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 53, pas: 64, dri: 58, def: 85, phy: 81 }
  },
  {
    id: "dario_simic", name: "Dario Šimić", position: "CB", rating: 82,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "robert_jarni", name: "Robert Jarni", position: "LB", rating: 84,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 77, sho: 56, pas: 70, dri: 72, def: 76, phy: 75 }
  },
  {
    id: "zvonimir_soldo", name: "Zvonimir Soldo", position: "RM", rating: 81,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 61, pas: 67, dri: 71, def: 43, phy: 60 }
  },
  {
    id: "aljosa_asanovic", name: "Aljoša Asanović", position: "CM", rating: 84,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "robert_prosinecki", name: "Robert Prosinečki", position: "CM", rating: 88,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 75, pas: 81, dri: 77, def: 71, phy: 72 }
  },
  {
    id: "zvonimir_boban", name: "Zvonimir Boban", position: "LM", rating: 90,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 72, pas: 76, dri: 74, def: 44, phy: 67 }
  },
  {
    id: "mario_stanic", name: "Mario Stanić", position: "RW", rating: 81,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 76, sho: 72, pas: 66, dri: 74, def: 35, phy: 63 }
  },
  {
    id: "davor_suker", name: "Davor Šuker", position: "ST", rating: 92,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 81, sho: 91, pas: 72, dri: 78, def: 34, phy: 75 }
  },
  {
    id: "goran_vlaovic", name: "Goran Vlaović", position: "LW", rating: 81,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 73, pas: 65, dri: 71, def: 35, phy: 62 }
  },
  {
    id: "peter_schmeichel", name: "Peter Schmeichel", position: "GK", rating: 93,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 75, sho: 27, pas: 65, dri: 73, def: 89, phy: 83 }
  },
  {
    id: "thomas_helveg", name: "Thomas Helveg", position: "RB", rating: 84,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 73, sho: 58, pas: 69, dri: 66, def: 73, phy: 73 }
  },
  {
    id: "jes_hgh", name: "Jes Høgh", position: "CB", rating: 81,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "marc_rieper", name: "Marc Rieper", position: "CB", rating: 82,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "jan_heintze", name: "Jan Heintze", position: "LB", rating: 80,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 76, sho: 55, pas: 64, dri: 62, def: 74, phy: 64 }
  },
  {
    id: "sren_colding", name: "Søren Colding", position: "CB", rating: 78,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "allan_nielsen", name: "Allan Nielsen", position: "CM", rating: 81,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "martin_jrgensen", name: "Martin Jørgensen", position: "CM", rating: 82,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "michael_laudrup_1998", name: "Michael Laudrup", position: "CAM", rating: 92,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 73, sho: 82, pas: 84, dri: 87, def: 46, phy: 66 }
  },
  {
    id: "brian_laudrup", name: "Brian Laudrup", position: "RW", rating: 91,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 85, sho: 79, pas: 76, dri: 85, def: 33, phy: 68 }
  },
  {
    id: "ebbe_sand", name: "Ebbe Sand", position: "ST", rating: 83,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 73, sho: 80, pas: 64, dri: 71, def: 35, phy: 72 }
  },
  {
    id: "peter_mller", name: "Peter Møller", position: "LW", rating: 79,
    country: "Denmark", countryCode: "dk", flag: "🇩🇰", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 76, sho: 71, pas: 60, dri: 74, def: 33, phy: 63 }
  },
  {
    id: "david_seaman", name: "David Seaman", position: "GK", rating: 87,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 72, sho: 24, pas: 63, dri: 72, def: 90, phy: 74 }
  },
  {
    id: "gary_neville_1998", name: "Gary Neville", position: "RB", rating: 83,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 80, sho: 58, pas: 65, dri: 68, def: 79, phy: 75 }
  },
  {
    id: "tony_adams", name: "Tony Adams", position: "CB", rating: 86,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 64, sho: 47, pas: 61, dri: 67, def: 87, phy: 76 }
  },
  {
    id: "sol_campbell", name: "Sol Campbell", position: "CB", rating: 85,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 53, pas: 64, dri: 58, def: 85, phy: 81 }
  },
  {
    id: "graeme_le_saux", name: "Graeme Le Saux", position: "LB", rating: 81,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 52, pas: 62, dri: 62, def: 72, phy: 66 }
  },
  {
    id: "david_beckham_1998", name: "David Beckham", position: "RM", rating: 86,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 78, sho: 68, pas: 72, dri: 77, def: 40, phy: 61 }
  },
  {
    id: "paul_ince", name: "Paul Ince", position: "CM", rating: 84,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "paul_scholes", name: "Paul Scholes", position: "CDM", rating: 86,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 66, sho: 59, pas: 75, dri: 65, def: 78, phy: 81 }
  },
  {
    id: "darren_anderton", name: "Darren Anderton", position: "CAM", rating: 80,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 76, pas: 72, dri: 78, def: 43, phy: 62 }
  },
  {
    id: "david_batty", name: "David Batty", position: "LM", rating: 79,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 70, sho: 63, pas: 64, dri: 63, def: 45, phy: 62 }
  },
  {
    id: "alan_shearer", name: "Alan Shearer", position: "RW", rating: 89,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 85, sho: 73, pas: 71, dri: 81, def: 39, phy: 63 }
  },
  {
    id: "michael_owen_1998", name: "Michael Owen", position: "ST", rating: 85,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 60, dri: 70, def: 30, phy: 68 }
  },
  {
    id: "teddy_sheringham", name: "Teddy Sheringham", position: "LW", rating: 83,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 69, pas: 67, dri: 80, def: 29, phy: 67 }
  },
  {
    id: "fabien_barthez_1998", name: "Fabien Barthez", position: "GK", rating: 86,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 24, pas: 60, dri: 67, def: 90, phy: 72 }
  },
  {
    id: "lilian_thuram_1998", name: "Lilian Thuram", position: "RB", rating: 92,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 84, sho: 61, pas: 72, dri: 75, def: 83, phy: 79 }
  },
  {
    id: "laurent_blanc", name: "Laurent Blanc", position: "CB", rating: 89,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 70, sho: 52, pas: 66, dri: 63, def: 92, phy: 83 }
  },
  {
    id: "marcel_desailly", name: "Marcel Desailly", position: "CB", rating: 91,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 73, sho: 49, pas: 65, dri: 67, def: 88, phy: 87 }
  },
  {
    id: "bixente_lizarazu", name: "Bixente Lizarazu", position: "LB", rating: 88,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 83, sho: 60, pas: 73, dri: 68, def: 79, phy: 75 }
  },
  {
    id: "didier_deschamps", name: "Didier Deschamps", position: "CDM", rating: 88,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 70, sho: 65, pas: 72, dri: 72, def: 86, phy: 76 }
  },
  {
    id: "emmanuel_petit", name: "Emmanuel Petit", position: "CM", rating: 86,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 69, sho: 74, pas: 75, dri: 73, def: 67, phy: 70 }
  },
  {
    id: "patrick_vieira_1998", name: "Patrick Vieira", position: "CM", rating: 84,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "zinedine_zidane_1998", name: "Zinedine Zidane", position: "CAM", rating: 96,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 81, sho: 90, pas: 93, dri: 90, def: 49, phy: 76 }
  },
  {
    id: "youri_djorkaeff", name: "Youri Djorkaeff", position: "RW", rating: 87,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 79, sho: 74, pas: 69, dri: 79, def: 38, phy: 69 }
  },
  {
    id: "thierry_henry_1998", name: "Thierry Henry", position: "ST", rating: 86,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 75, sho: 81, pas: 61, dri: 71, def: 32, phy: 71 }
  },
  {
    id: "david_trezeguet_1998", name: "David Trezeguet", position: "LW", rating: 83,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 74, sho: 69, pas: 67, dri: 80, def: 29, phy: 67 }
  },
  {
    id: "stephane_guivarc_h", name: "Stéphane Guivarc'h", position: "ST", rating: 76,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 1998, era: "retro", emoji: "👨🏻",
    stats: { pac: 63, sho: 74, pas: 53, dri: 69, def: 29, phy: 64 }
  },
  {
    id: "jorge_campos", name: "Jorge Campos", position: "GK", rating: 82,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 66, sho: 20, pas: 56, dri: 65, def: 86, phy: 75 }
  },
  {
    id: "claudio_suarez", name: "Claudio Suárez", position: "CB", rating: 82,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "duilio_davino", name: "Duilio Davino", position: "CB", rating: 79,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "salvador_carmona", name: "Salvador Carmona", position: "CB", rating: 79,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "pavel_pardo_1998", name: "Pavel Pardo", position: "RM", rating: 82,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 72, sho: 63, pas: 69, dri: 74, def: 42, phy: 66 }
  },
  {
    id: "raul_lara", name: "Raúl Lara", position: "CM", rating: 78,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 60, sho: 65, pas: 70, dri: 66, def: 63, phy: 66 }
  },
  {
    id: "ramon_ramirez", name: "Ramón Ramírez", position: "CDM", rating: 82,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 69, sho: 59, pas: 66, dri: 66, def: 78, phy: 78 }
  },
  {
    id: "alberto_garcia_aspe", name: "Alberto García Aspe", position: "CAM", rating: 83,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 69, sho: 70, pas: 80, dri: 81, def: 37, phy: 62 }
  },
  {
    id: "marcelino_bernal", name: "Marcelino Bernal", position: "LM", rating: 78,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 74, sho: 60, pas: 66, dri: 70, def: 36, phy: 60 }
  },
  {
    id: "jesus_arellano", name: "Jesús Arellano", position: "CM", rating: 79,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 60, sho: 63, pas: 70, dri: 66, def: 66, phy: 67 }
  },
  {
    id: "luis_hernandez", name: "Luis Hernández", position: "RW", rating: 85,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 79, sho: 71, pas: 72, dri: 77, def: 34, phy: 61 }
  },
  {
    id: "cuauhtemoc_blanco", name: "Cuauhtémoc Blanco", position: "ST", rating: 85,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 73, sho: 80, pas: 60, dri: 70, def: 30, phy: 68 }
  },
  {
    id: "ricardo_pelaez", name: "Ricardo Peláez", position: "LW", rating: 80,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 77, sho: 70, pas: 62, dri: 74, def: 30, phy: 62 }
  },
  {
    id: "driss_benzekri", name: "Driss Benzekri", position: "GK", rating: 80,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 63, sho: 24, pas: 61, dri: 61, def: 84, phy: 67 }
  },
  {
    id: "noureddine_naybet", name: "Noureddine Naybet", position: "RB", rating: 85,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 74, sho: 54, pas: 65, dri: 70, def: 75, phy: 77 }
  },
  {
    id: "abdelilah_saber", name: "Abdelilah Saber", position: "CB", rating: 79,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "youssef_rossi", name: "Youssef Rossi", position: "CB", rating: 79,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "tahar_el_khalej", name: "Tahar El Khalej", position: "LB", rating: 81,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 75, sho: 52, pas: 62, dri: 62, def: 72, phy: 66 }
  },
  {
    id: "said_chiba", name: "Saïd Chiba", position: "CM", rating: 79,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 60, sho: 63, pas: 70, dri: 66, def: 66, phy: 67 }
  },
  {
    id: "mustapha_hadji", name: "Mustapha Hadji", position: "CM", rating: 87,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 71, sho: 73, pas: 81, dri: 70, def: 65, phy: 71 }
  },
  {
    id: "youssef_chippo", name: "Youssef Chippo", position: "CAM", rating: 83,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 69, sho: 70, pas: 80, dri: 81, def: 37, phy: 62 }
  },
  {
    id: "salaheddine_bassir", name: "Salaheddine Bassir", position: "RW", rating: 83,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 75, sho: 75, pas: 63, dri: 80, def: 37, phy: 60 }
  },
  {
    id: "abdeljalil_hadda", name: "Abdeljalil Hadda", position: "ST", rating: 82,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "ali_el_khattabi", name: "Ali El Khattabi", position: "LW", rating: 78,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 1998, era: "retro", emoji: "👨🏽",
    stats: { pac: 71, sho: 71, pas: 62, dri: 75, def: 31, phy: 60 }
  },
  {
    id: "edwin_van_der_sar", name: "Edwin van der Sar", position: "GK", rating: 88,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 70, sho: 28, pas: 66, dri: 71, def: 86, phy: 80 }
  },
  {
    id: "michael_reiziger", name: "Michael Reiziger", position: "RB", rating: 82,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 73, sho: 57, pas: 68, dri: 68, def: 76, phy: 72 }
  },
  {
    id: "jaap_stam", name: "Jaap Stam", position: "CB", rating: 89,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 70, sho: 52, pas: 66, dri: 63, def: 92, phy: 83 }
  },
  {
    id: "frank_de_boer", name: "Frank de Boer", position: "CB", rating: 87,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 68, sho: 52, pas: 70, dri: 60, def: 89, phy: 78 }
  },
  {
    id: "arthur_numan", name: "Arthur Numan", position: "LB", rating: 81,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 75, sho: 52, pas: 62, dri: 62, def: 72, phy: 66 }
  },
  {
    id: "edgar_davids", name: "Edgar Davids", position: "CDM", rating: 89,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 68, sho: 62, pas: 77, dri: 74, def: 89, phy: 79 }
  },
  {
    id: "clarence_seedorf", name: "Clarence Seedorf", position: "CM", rating: 88,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 73, sho: 75, pas: 81, dri: 77, def: 71, phy: 72 }
  },
  {
    id: "phillip_cocu", name: "Phillip Cocu", position: "CM", rating: 85,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "ronald_de_boer", name: "Ronald de Boer", position: "LM", rating: 84,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 79, sho: 63, pas: 70, dri: 76, def: 41, phy: 61 }
  },
  {
    id: "marc_overmars", name: "Marc Overmars", position: "LW", rating: 88,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 84, sho: 79, pas: 71, dri: 84, def: 38, phy: 66 }
  },
  {
    id: "dennis_bergkamp", name: "Dennis Bergkamp", position: "ST", rating: 94,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 83, sho: 92, pas: 68, dri: 83, def: 33, phy: 75 }
  },
  {
    id: "patrick_kluivert", name: "Patrick Kluivert", position: "LW", rating: 89,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 1998, era: "retro", emoji: "👱🏼",
    stats: { pac: 81, sho: 78, pas: 67, dri: 78, def: 31, phy: 65 }
  },
  {
    id: "peter_rufai_1998", name: "Peter Rufai", position: "GK", rating: 81,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1998, era: "retro", emoji: "👨🏿",
    stats: { pac: 66, sho: 26, pas: 61, dri: 62, def: 83, phy: 73 }
  },
  {
    id: "taribo_west", name: "Taribo West", position: "RB", rating: 80,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1998, era: "retro", emoji: "👨🏿",
    stats: { pac: 71, sho: 54, pas: 65, dri: 66, def: 71, phy: 72 }
  },
  {
    id: "uche_okechukwu_1998", name: "Uche Okechukwu", position: "CB", rating: 80,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1998, era: "retro", emoji: "👨🏿",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "celestine_babayaro", name: "Celestine Babayaro", position: "CB", rating: 80,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1998, era: "retro", emoji: "👨🏿",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "augustine_eguavoen_1998", name: "Augustine Eguavoen", position: "LB", rating: 77,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1998, era: "retro", emoji: "👨🏿",
    stats: { pac: 67, sho: 46, pas: 59, dri: 66, def: 69, phy: 63 }
  },
  {
    id: "sunday_oliseh_1998", name: "Sunday Oliseh", position: "CDM", rating: 84,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1998, era: "retro", emoji: "👨🏿",
    stats: { pac: 70, sho: 56, pas: 67, dri: 67, def: 83, phy: 76 }
  },
  {
    id: "jay_jay_okocha_1998", name: "Jay-Jay Okocha", position: "CM", rating: 89,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1998, era: "retro", emoji: "👨🏿",
    stats: { pac: 69, sho: 69, pas: 83, dri: 72, def: 68, phy: 76 }
  },
  {
    id: "finidi_george_1998", name: "Finidi George", position: "CM", rating: 83,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1998, era: "retro", emoji: "👨🏿",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "garba_lawal", name: "Garba Lawal", position: "LM", rating: 78,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1998, era: "retro", emoji: "👨🏿",
    stats: { pac: 74, sho: 60, pas: 66, dri: 70, def: 36, phy: 60 }
  },
  {
    id: "nwankwo_kanu", name: "Nwankwo Kanu", position: "RW", rating: 84,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1998, era: "retro", emoji: "👨🏿",
    stats: { pac: 79, sho: 75, pas: 66, dri: 80, def: 36, phy: 63 }
  },
  {
    id: "victor_ikpeba", name: "Victor Ikpeba", position: "ST", rating: 81,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1998, era: "retro", emoji: "👨🏿",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "daniel_amokachi_1998", name: "Daniel Amokachi", position: "LW", rating: 81,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1998, era: "retro", emoji: "👨🏿",
    stats: { pac: 72, sho: 73, pas: 65, dri: 71, def: 35, phy: 62 }
  },
  {
    id: "tijani_babangida", name: "Tijani Babangida", position: "ST", rating: 79,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 1998, era: "retro", emoji: "👨🏿",
    stats: { pac: 69, sho: 71, pas: 57, dri: 66, def: 28, phy: 69 }
  },

  // ──── 2000s ────
  {
    id: "marcos", name: "Marcos", position: "GK", rating: 84,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2002, era: "modern", emoji: "👨🏽",
    stats: { pac: 66, sho: 22, pas: 58, dri: 64, def: 87, phy: 74 }
  },
  {
    id: "cafu_2002", name: "Cafu", position: "RB", rating: 91,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2002, era: "modern", emoji: "👨🏽",
    stats: { pac: 87, sho: 60, pas: 73, dri: 71, def: 82, phy: 75 }
  },
  {
    id: "lucio_2002", name: "Lúcio", position: "CB", rating: 88,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2002, era: "modern", emoji: "👨🏽",
    stats: { pac: 73, sho: 50, pas: 67, dri: 63, def: 92, phy: 78 }
  },
  {
    id: "edmilson", name: "Edmílson", position: "CB", rating: 84,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2002, era: "modern", emoji: "👨🏽",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "roberto_carlos_2002", name: "Roberto Carlos", position: "LB", rating: 92,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2002, era: "modern", emoji: "👨🏽",
    stats: { pac: 84, sho: 63, pas: 76, dri: 75, def: 87, phy: 75 }
  },
  {
    id: "gilberto_silva", name: "Gilberto Silva", position: "RM", rating: 85,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2002, era: "modern", emoji: "👨🏽",
    stats: { pac: 75, sho: 69, pas: 72, dri: 76, def: 41, phy: 68 }
  },
  {
    id: "kleberson", name: "Kléberson", position: "CM", rating: 82,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2002, era: "modern", emoji: "👨🏽",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "juninho_paulista", name: "Juninho Paulista", position: "CDM", rating: 83,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2002, era: "modern", emoji: "👨🏽",
    stats: { pac: 70, sho: 61, pas: 68, dri: 68, def: 77, phy: 79 }
  },
  {
    id: "ronaldinho_2002", name: "Ronaldinho", position: "CAM", rating: 93,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2002, era: "modern", emoji: "👨🏽",
    stats: { pac: 82, sho: 81, pas: 88, dri: 84, def: 43, phy: 69 }
  },
  {
    id: "rivaldo_2002", name: "Rivaldo", position: "LM", rating: 94,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2002, era: "modern", emoji: "👨🏽",
    stats: { pac: 87, sho: 75, pas: 78, dri: 76, def: 52, phy: 67 }
  },
  {
    id: "ronaldo_2002", name: "Ronaldo", position: "ST", rating: 97,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2002, era: "modern", emoji: "👨🏽",
    stats: { pac: 89, sho: 94, pas: 77, dri: 85, def: 36, phy: 82 }
  },
  {
    id: "denilson_2002", name: "Denílson", position: "ST", rating: 82,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2002, era: "modern", emoji: "👨🏽",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "boukar_alioum", name: "Boukar Alioum", position: "GK", rating: 78,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 2002, era: "modern", emoji: "👨🏾",
    stats: { pac: 62, sho: 23, pas: 58, dri: 60, def: 74, phy: 69 }
  },
  {
    id: "rigobert_song_2002", name: "Rigobert Song", position: "RB", rating: 82,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 2002, era: "modern", emoji: "👨🏾",
    stats: { pac: 73, sho: 57, pas: 68, dri: 68, def: 76, phy: 72 }
  },
  {
    id: "raymond_kalla_2002", name: "Raymond Kalla", position: "CB", rating: 79,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 2002, era: "modern", emoji: "👨🏾",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "pierre_wome", name: "Pierre Wome", position: "CB", rating: 79,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 2002, era: "modern", emoji: "👨🏾",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "bill_tchato", name: "Bill Tchato", position: "LB", rating: 77,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 2002, era: "modern", emoji: "👨🏾",
    stats: { pac: 67, sho: 46, pas: 59, dri: 66, def: 69, phy: 63 }
  },
  {
    id: "geremi", name: "Geremi", position: "RM", rating: 82,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 2002, era: "modern", emoji: "👨🏾",
    stats: { pac: 72, sho: 63, pas: 69, dri: 74, def: 42, phy: 66 }
  },
  {
    id: "lauren", name: "Lauren", position: "CM", rating: 82,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 2002, era: "modern", emoji: "👨🏾",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "marc_vivien_foe_2002", name: "Marc-Vivien Foé", position: "CDM", rating: 84,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 2002, era: "modern", emoji: "👨🏾",
    stats: { pac: 70, sho: 56, pas: 67, dri: 67, def: 83, phy: 76 }
  },
  {
    id: "salomon_olembe", name: "Salomon Olembé", position: "CAM", rating: 79,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 2002, era: "modern", emoji: "👨🏾",
    stats: { pac: 62, sho: 67, pas: 72, dri: 73, def: 38, phy: 58 }
  },
  {
    id: "eric_djemba_djemba", name: "Eric Djemba-Djemba", position: "LM", rating: 78,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 2002, era: "modern", emoji: "👨🏾",
    stats: { pac: 74, sho: 60, pas: 66, dri: 70, def: 36, phy: 60 }
  },
  {
    id: "patrick_mboma", name: "Patrick Mboma", position: "ST", rating: 84,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 2002, era: "modern", emoji: "👨🏾",
    stats: { pac: 72, sho: 77, pas: 66, dri: 73, def: 33, phy: 71 }
  },
  {
    id: "samuel_eto_o", name: "Samuel Eto'o", position: "ST", rating: 85,
    country: "Cameroon", countryCode: "cm", flag: "🇨🇲", year: 2002, era: "modern", emoji: "👨🏾",
    stats: { pac: 73, sho: 80, pas: 60, dri: 70, def: 30, phy: 68 }
  },
  {
    id: "seigo_narazaki", name: "Seigo Narazaki", position: "GK", rating: 82,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 20, pas: 56, dri: 65, def: 86, phy: 75 }
  },
  {
    id: "hidetoshi_matsuda", name: "Hidetoshi Matsuda", position: "RB", rating: 80,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 54, pas: 65, dri: 66, def: 71, phy: 72 }
  },
  {
    id: "tsuneyasu_miyamoto", name: "Tsuneyasu Miyamoto", position: "CB", rating: 80,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "koji_nakata", name: "Koji Nakata", position: "CB", rating: 79,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "alessandro_santos", name: "Alessandro Santos", position: "LB", rating: 80,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 55, pas: 64, dri: 62, def: 74, phy: 64 }
  },
  {
    id: "junichi_inamoto", name: "Junichi Inamoto", position: "RM", rating: 83,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 67, pas: 68, dri: 70, def: 44, phy: 62 }
  },
  {
    id: "kazuyuki_toda", name: "Kazuyuki Toda", position: "CM", rating: 80,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 67, pas: 75, dri: 69, def: 63, phy: 68 }
  },
  {
    id: "hidetoshi_nakata", name: "Hidetoshi Nakata", position: "CM", rating: 87,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 73, pas: 81, dri: 70, def: 65, phy: 71 }
  },
  {
    id: "shinji_ono", name: "Shinji Ono", position: "LM", rating: 83,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 66, pas: 67, dri: 67, def: 43, phy: 59 }
  },
  {
    id: "atsushi_yanagisawa", name: "Atsushi Yanagisawa", position: "RW", rating: 80,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 69, pas: 67, dri: 74, def: 34, phy: 58 }
  },
  {
    id: "takayuki_suzuki", name: "Takayuki Suzuki", position: "ST", rating: 79,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 71, pas: 57, dri: 66, def: 28, phy: 69 }
  },
  {
    id: "naohiro_takahara", name: "Naohiro Takahara", position: "LW", rating: 80,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 77, sho: 70, pas: 62, dri: 74, def: 30, phy: 62 }
  },
  {
    id: "tony_sylva", name: "Tony Sylva", position: "GK", rating: 79,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2002, era: "modern", emoji: "👨🏿",
    stats: { pac: 64, sho: 25, pas: 52, dri: 65, def: 80, phy: 71 }
  },
  {
    id: "ferdinand_coly", name: "Ferdinand Coly", position: "RB", rating: 78,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2002, era: "modern", emoji: "👨🏿",
    stats: { pac: 70, sho: 55, pas: 61, dri: 65, def: 74, phy: 69 }
  },
  {
    id: "lamine_diatta", name: "Lamine Diatta", position: "CB", rating: 81,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2002, era: "modern", emoji: "👨🏿",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "aliou_cisse", name: "Aliou Cissé", position: "CB", rating: 80,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2002, era: "modern", emoji: "👨🏿",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "omar_daf", name: "Omar Daf", position: "LB", rating: 76,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2002, era: "modern", emoji: "👨🏿",
    stats: { pac: 66, sho: 50, pas: 59, dri: 62, def: 69, phy: 69 }
  },
  {
    id: "papa_bouba_diop", name: "Papa Bouba Diop", position: "RM", rating: 84,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2002, era: "modern", emoji: "👨🏿",
    stats: { pac: 73, sho: 66, pas: 66, dri: 69, def: 43, phy: 63 }
  },
  {
    id: "amdy_faye", name: "Amdy Faye", position: "CM", rating: 78,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2002, era: "modern", emoji: "👨🏿",
    stats: { pac: 60, sho: 65, pas: 70, dri: 66, def: 63, phy: 66 }
  },
  {
    id: "khalilou_fadiga", name: "Khalilou Fadiga", position: "CM", rating: 83,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2002, era: "modern", emoji: "👨🏿",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "salif_diao", name: "Salif Diao", position: "LM", rating: 78,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2002, era: "modern", emoji: "👨🏿",
    stats: { pac: 74, sho: 60, pas: 66, dri: 70, def: 36, phy: 60 }
  },
  {
    id: "el_hadji_diouf", name: "El Hadji Diouf", position: "ST", rating: 87,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2002, era: "modern", emoji: "👨🏿",
    stats: { pac: 73, sho: 84, pas: 66, dri: 77, def: 35, phy: 71 }
  },
  {
    id: "henri_camara", name: "Henri Camara", position: "ST", rating: 84,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2002, era: "modern", emoji: "👨🏿",
    stats: { pac: 72, sho: 77, pas: 66, dri: 73, def: 33, phy: 71 }
  },
  {
    id: "lee_woon_jae", name: "Lee Woon-jae", position: "GK", rating: 81,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 26, pas: 61, dri: 62, def: 83, phy: 73 }
  },
  {
    id: "hong_myung_bo", name: "Hong Myung-bo", position: "RB", rating: 86,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 82, sho: 60, pas: 70, dri: 66, def: 79, phy: 73 }
  },
  {
    id: "choi_jin_cheul", name: "Choi Jin-cheul", position: "CB", rating: 79,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "kim_tae_young", name: "Kim Tae-young", position: "CB", rating: 78,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "lee_young_pyo_2002", name: "Lee Young-pyo", position: "LB", rating: 82,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 58, pas: 66, dri: 64, def: 74, phy: 69 }
  },
  {
    id: "yoo_sang_chul", name: "Yoo Sang-chul", position: "CM", rating: 82,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "kim_nam_il", name: "Kim Nam-il", position: "CM", rating: 80,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 67, pas: 75, dri: 69, def: 63, phy: 68 }
  },
  {
    id: "park_ji_sung_2002", name: "Park Ji-sung", position: "CAM", rating: 86,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 74, pas: 81, dri: 80, def: 43, phy: 66 }
  },
  {
    id: "lee_chun_soo", name: "Lee Chun-soo", position: "RW", rating: 81,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 72, pas: 66, dri: 74, def: 35, phy: 63 }
  },
  {
    id: "seol_ki_hyeon", name: "Seol Ki-hyeon", position: "ST", rating: 80,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 78, pas: 62, dri: 66, def: 29, phy: 67 }
  },
  {
    id: "ahn_jung_hwan", name: "Ahn Jung-hwan", position: "LW", rating: 83,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 69, pas: 67, dri: 80, def: 29, phy: 67 }
  },
  {
    id: "iker_casillas_2002", name: "Iker Casillas", position: "GK", rating: 88,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 28, pas: 66, dri: 71, def: 86, phy: 80 }
  },
  {
    id: "carles_puyol_2002", name: "Carles Puyol", position: "RB", rating: 84,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 58, pas: 69, dri: 66, def: 73, phy: 73 }
  },
  {
    id: "fernando_hierro_2002", name: "Fernando Hierro", position: "CB", rating: 86,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 47, pas: 61, dri: 67, def: 87, phy: 76 }
  },
  {
    id: "ivan_helguera", name: "Iván Helguera", position: "CB", rating: 83,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "juanfran", name: "Juanfran", position: "LB", rating: 78,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "xavi_2002", name: "Xavi", position: "CM", rating: 84,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "ruben_baraja", name: "Rubén Baraja", position: "CM", rating: 84,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "juan_carlos_valeron", name: "Juan Carlos Valerón", position: "CM", rating: 85,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "gaizka_mendieta", name: "Gaizka Mendieta", position: "LM", rating: 84,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 79, sho: 63, pas: 70, dri: 76, def: 41, phy: 61 }
  },
  {
    id: "joaquin", name: "Joaquín", position: "RW", rating: 83,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 75, pas: 63, dri: 80, def: 37, phy: 60 }
  },
  {
    id: "raul", name: "Raúl", position: "ST", rating: 90,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 78, sho: 82, pas: 66, dri: 73, def: 32, phy: 72 }
  },
  {
    id: "fernando_morientes", name: "Fernando Morientes", position: "LW", rating: 87,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 83, sho: 74, pas: 65, dri: 76, def: 33, phy: 67 }
  },
  {
    id: "diego_tristan", name: "Diego Tristán", position: "ST", rating: 81,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "magnus_hedman", name: "Magnus Hedman", position: "GK", rating: 81,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 26, pas: 61, dri: 62, def: 83, phy: 73 }
  },
  {
    id: "olof_mellberg", name: "Olof Mellberg", position: "RB", rating: 83,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 80, sho: 58, pas: 65, dri: 68, def: 79, phy: 75 }
  },
  {
    id: "johan_mjallby", name: "Johan Mjällby", position: "CB", rating: 81,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "teddy_lucic", name: "Teddy Lučić", position: "CB", rating: 78,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "erik_edman", name: "Erik Edman", position: "LB", rating: 78,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "tobias_linderoth", name: "Tobias Linderoth", position: "RM", rating: 80,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 66, pas: 65, dri: 69, def: 38, phy: 56 }
  },
  {
    id: "anders_svensson", name: "Anders Svensson", position: "CM", rating: 81,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "fredrik_ljungberg", name: "Fredrik Ljungberg", position: "CM", rating: 84,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "niclas_alexandersson", name: "Niclas Alexandersson", position: "LM", rating: 78,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 60, pas: 66, dri: 70, def: 36, phy: 60 }
  },
  {
    id: "henrik_larsson_2002", name: "Henrik Larsson", position: "RW", rating: 87,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 79, sho: 74, pas: 69, dri: 79, def: 38, phy: 69 }
  },
  {
    id: "marcus_allback", name: "Marcus Allbäck", position: "ST", rating: 79,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 71, pas: 57, dri: 66, def: 28, phy: 69 }
  },
  {
    id: "mattias_jonson", name: "Mattias Jonson", position: "LW", rating: 77,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 66, pas: 63, dri: 68, def: 32, phy: 60 }
  },
  {
    id: "rustu_recber", name: "Rüştü Reçber", position: "GK", rating: 88,
    country: "Türkiye", countryCode: "tr", flag: "🇹🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 28, pas: 66, dri: 71, def: 86, phy: 80 }
  },
  {
    id: "alpay_ozalan", name: "Alpay Özalan", position: "RB", rating: 84,
    country: "Türkiye", countryCode: "tr", flag: "🇹🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 58, pas: 69, dri: 66, def: 73, phy: 73 }
  },
  {
    id: "bulent_korkmaz", name: "Bülent Korkmaz", position: "CB", rating: 83,
    country: "Türkiye", countryCode: "tr", flag: "🇹🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "fatih_akyel", name: "Fatih Akyel", position: "CB", rating: 79,
    country: "Türkiye", countryCode: "tr", flag: "🇹🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "hakan_unsal", name: "Hakan Ünsal", position: "LB", rating: 78,
    country: "Türkiye", countryCode: "tr", flag: "🇹🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "ergun_penbe", name: "Ergün Penbe", position: "CB", rating: 78,
    country: "Türkiye", countryCode: "tr", flag: "🇹🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "tugay_kerimoglu", name: "Tugay Kerimoğlu", position: "RM", rating: 84,
    country: "Türkiye", countryCode: "tr", flag: "🇹🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 66, pas: 66, dri: 69, def: 43, phy: 63 }
  },
  {
    id: "emre_belozoglu", name: "Emre Belözoğlu", position: "CM", rating: 83,
    country: "Türkiye", countryCode: "tr", flag: "🇹🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "yldray_basturk", name: "Yıldıray Baştürk", position: "CDM", rating: 85,
    country: "Türkiye", countryCode: "tr", flag: "🇹🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 65, sho: 58, pas: 70, dri: 64, def: 83, phy: 74 }
  },
  {
    id: "hasan_sas", name: "Hasan Şaş", position: "CAM", rating: 83,
    country: "Türkiye", countryCode: "tr", flag: "🇹🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 70, pas: 80, dri: 81, def: 37, phy: 62 }
  },
  {
    id: "umit_davala", name: "Ümit Davala", position: "LM", rating: 80,
    country: "Türkiye", countryCode: "tr", flag: "🇹🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 62, pas: 67, dri: 71, def: 41, phy: 57 }
  },
  {
    id: "hakan_sukur", name: "Hakan Şükür", position: "ST", rating: 86,
    country: "Türkiye", countryCode: "tr", flag: "🇹🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 81, pas: 61, dri: 71, def: 32, phy: 71 }
  },
  {
    id: "ilhan_mansz", name: "İlhan Mansız", position: "ST", rating: 82,
    country: "Türkiye", countryCode: "tr", flag: "🇹🇷", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "brad_friedel", name: "Brad Friedel", position: "GK", rating: 86,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 24, pas: 60, dri: 67, def: 90, phy: 72 }
  },
  {
    id: "tony_sanneh", name: "Tony Sanneh", position: "RB", rating: 80,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 54, pas: 65, dri: 66, def: 71, phy: 72 }
  },
  {
    id: "eddie_pope", name: "Eddie Pope", position: "CB", rating: 81,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "gregg_berhalter", name: "Gregg Berhalter", position: "CB", rating: 78,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "frankie_hejduk", name: "Frankie Hejduk", position: "LB", rating: 79,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 51, pas: 62, dri: 61, def: 71, phy: 64 }
  },
  {
    id: "pablo_mastroeni", name: "Pablo Mastroeni", position: "RM", rating: 80,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 66, pas: 65, dri: 69, def: 38, phy: 56 }
  },
  {
    id: "john_o_brien", name: "John O'Brien", position: "CM", rating: 81,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "claudio_reyna", name: "Claudio Reyna", position: "CDM", rating: 84,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 56, pas: 67, dri: 67, def: 83, phy: 76 }
  },
  {
    id: "damarcus_beasley", name: "DaMarcus Beasley", position: "CAM", rating: 80,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 76, pas: 72, dri: 78, def: 43, phy: 62 }
  },
  {
    id: "clint_mathis", name: "Clint Mathis", position: "LM", rating: 79,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 63, pas: 64, dri: 63, def: 45, phy: 62 }
  },
  {
    id: "landon_donovan_2002", name: "Landon Donovan", position: "ST", rating: 84,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 77, pas: 66, dri: 73, def: 33, phy: 71 }
  },
  {
    id: "brian_mcbride", name: "Brian McBride", position: "ST", rating: 82,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2002, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "roberto_abbondanzieri", name: "Roberto Abbondanzieri", position: "GK", rating: 82,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 20, pas: 56, dri: 65, def: 86, phy: 75 }
  },
  {
    id: "roberto_ayala", name: "Roberto Ayala", position: "RB", rating: 87,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 78, sho: 59, pas: 69, dri: 75, def: 84, phy: 74 }
  },
  {
    id: "gabriel_heinze", name: "Gabriel Heinze", position: "CB", rating: 84,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "juan_pablo_sorin", name: "Juan Pablo Sorín", position: "CB", rating: 83,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "nicolas_burdisso", name: "Nicolás Burdisso", position: "LB", rating: 80,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 55, pas: 64, dri: 62, def: 74, phy: 64 }
  },
  {
    id: "lionel_scaloni", name: "Lionel Scaloni", position: "CB", rating: 78,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "javier_mascherano_2006", name: "Javier Mascherano", position: "CDM", rating: 86,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 59, pas: 75, dri: 65, def: 78, phy: 81 }
  },
  {
    id: "esteban_cambiasso", name: "Esteban Cambiasso", position: "CM", rating: 85,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "maxi_rodriguez", name: "Maxi Rodríguez", position: "CM", rating: 84,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "juan_roman_riquelme", name: "Juan Román Riquelme", position: "CAM", rating: 90,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 77, pas: 84, dri: 84, def: 44, phy: 65 }
  },
  {
    id: "javier_saviola", name: "Javier Saviola", position: "RW", rating: 84,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 79, sho: 75, pas: 66, dri: 80, def: 36, phy: 63 }
  },
  {
    id: "hernan_crespo", name: "Hernán Crespo", position: "ST", rating: 88,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 86, pas: 68, dri: 76, def: 38, phy: 73 }
  },
  {
    id: "lionel_messi_2006", name: "Lionel Messi", position: "RW", rating: 86,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 79, sho: 76, pas: 65, dri: 83, def: 33, phy: 61 }
  },
  {
    id: "carlos_tevez", name: "Carlos Tevez", position: "ST", rating: 87,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 84, pas: 66, dri: 77, def: 35, phy: 71 }
  },
  {
    id: "mark_schwarzer", name: "Mark Schwarzer", position: "GK", rating: 85,
    country: "Australia", countryCode: "au", flag: "🇦🇺", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 23, pas: 62, dri: 69, def: 82, phy: 72 }
  },
  {
    id: "lucas_neill", name: "Lucas Neill", position: "CB", rating: 84,
    country: "Australia", countryCode: "au", flag: "🇦🇺", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "craig_moore", name: "Craig Moore", position: "CB", rating: 80,
    country: "Australia", countryCode: "au", flag: "🇦🇺", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "scott_chipperfield", name: "Scott Chipperfield", position: "CB", rating: 80,
    country: "Australia", countryCode: "au", flag: "🇦🇺", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "brett_emerton", name: "Brett Emerton", position: "RM", rating: 82,
    country: "Australia", countryCode: "au", flag: "🇦🇺", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 63, pas: 69, dri: 74, def: 42, phy: 66 }
  },
  {
    id: "vince_grella", name: "Vince Grella", position: "CM", rating: 81,
    country: "Australia", countryCode: "au", flag: "🇦🇺", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "jason_culina", name: "Jason Culina", position: "CDM", rating: 79,
    country: "Australia", countryCode: "au", flag: "🇦🇺", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 53, pas: 62, dri: 61, def: 73, phy: 68 }
  },
  {
    id: "tim_cahill", name: "Tim Cahill", position: "CAM", rating: 85,
    country: "Australia", countryCode: "au", flag: "🇦🇺", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 78, pas: 82, dri: 76, def: 41, phy: 63 }
  },
  {
    id: "mark_bresciano", name: "Mark Bresciano", position: "LM", rating: 82,
    country: "Australia", countryCode: "au", flag: "🇦🇺", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 66, pas: 67, dri: 67, def: 46, phy: 59 }
  },
  {
    id: "harry_kewell", name: "Harry Kewell", position: "RW", rating: 86,
    country: "Australia", countryCode: "au", flag: "🇦🇺", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 79, sho: 76, pas: 65, dri: 83, def: 33, phy: 61 }
  },
  {
    id: "mark_viduka", name: "Mark Viduka", position: "ST", rating: 85,
    country: "Australia", countryCode: "au", flag: "🇦🇺", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 60, dri: 70, def: 30, phy: 68 }
  },
  {
    id: "john_aloisi", name: "John Aloisi", position: "LW", rating: 80,
    country: "Australia", countryCode: "au", flag: "🇦🇺", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 77, sho: 70, pas: 62, dri: 74, def: 30, phy: 62 }
  },
  {
    id: "dida", name: "Dida", position: "GK", rating: 87,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 72, sho: 24, pas: 63, dri: 72, def: 90, phy: 74 }
  },
  {
    id: "cafu_2006", name: "Cafu", position: "RB", rating: 88,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 81, sho: 55, pas: 74, dri: 68, def: 79, phy: 76 }
  },
  {
    id: "lucio_2006", name: "Lúcio", position: "CB", rating: 89,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 70, sho: 52, pas: 66, dri: 63, def: 92, phy: 83 }
  },
  {
    id: "juan", name: "Juan", position: "CB", rating: 84,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "roberto_carlos_2006", name: "Roberto Carlos", position: "LB", rating: 89,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 84, sho: 56, pas: 73, dri: 68, def: 82, phy: 72 }
  },
  {
    id: "emerson", name: "Emerson", position: "RM", rating: 85,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 75, sho: 69, pas: 72, dri: 76, def: 41, phy: 68 }
  },
  {
    id: "ze_roberto", name: "Zé Roberto", position: "CM", rating: 85,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "kaka", name: "Kaká", position: "CAM", rating: 93,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 82, sho: 81, pas: 88, dri: 84, def: 43, phy: 69 }
  },
  {
    id: "ronaldinho_2006", name: "Ronaldinho", position: "LM", rating: 95,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 84, sho: 75, pas: 80, dri: 77, def: 53, phy: 73 }
  },
  {
    id: "adriano", name: "Adriano", position: "RW", rating: 88,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 85, sho: 73, pas: 71, dri: 76, def: 38, phy: 63 }
  },
  {
    id: "ronaldo_2006", name: "Ronaldo", position: "ST", rating: 90,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 78, sho: 82, pas: 66, dri: 73, def: 32, phy: 72 }
  },
  {
    id: "robinho", name: "Robinho", position: "LW", rating: 85,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 83, sho: 75, pas: 67, dri: 74, def: 31, phy: 66 }
  },
  {
    id: "paul_robinson", name: "Paul Robinson", position: "GK", rating: 80,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 63, sho: 24, pas: 61, dri: 61, def: 84, phy: 67 }
  },
  {
    id: "gary_neville_2006", name: "Gary Neville", position: "RB", rating: 85,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 54, pas: 65, dri: 70, def: 75, phy: 77 }
  },
  {
    id: "rio_ferdinand", name: "Rio Ferdinand", position: "CB", rating: 90,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 48, pas: 67, dri: 70, def: 92, phy: 86 }
  },
  {
    id: "john_terry", name: "John Terry", position: "CB", rating: 89,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 52, pas: 66, dri: 63, def: 92, phy: 83 }
  },
  {
    id: "ashley_cole", name: "Ashley Cole", position: "LB", rating: 88,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 83, sho: 60, pas: 73, dri: 68, def: 79, phy: 75 }
  },
  {
    id: "david_beckham_2006", name: "David Beckham", position: "RM", rating: 89,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 77, sho: 68, pas: 69, dri: 75, def: 50, phy: 68 }
  },
  {
    id: "steven_gerrard", name: "Steven Gerrard", position: "CM", rating: 91,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 75, pas: 84, dri: 79, def: 74, phy: 75 }
  },
  {
    id: "frank_lampard", name: "Frank Lampard", position: "CM", rating: 90,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 71, pas: 78, dri: 74, def: 72, phy: 77 }
  },
  {
    id: "joe_cole", name: "Joe Cole", position: "LM", rating: 85,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 77, sho: 62, pas: 67, dri: 69, def: 47, phy: 63 }
  },
  {
    id: "wayne_rooney", name: "Wayne Rooney", position: "RW", rating: 90,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 86, sho: 81, pas: 68, dri: 84, def: 40, phy: 72 }
  },
  {
    id: "michael_owen_2006", name: "Michael Owen", position: "ST", rating: 87,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 84, pas: 66, dri: 77, def: 35, phy: 71 }
  },
  {
    id: "peter_crouch", name: "Peter Crouch", position: "LW", rating: 81,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 73, pas: 65, dri: 71, def: 35, phy: 62 }
  },
  {
    id: "fabien_barthez_2006", name: "Fabien Barthez", position: "GK", rating: 84,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 22, pas: 58, dri: 64, def: 87, phy: 74 }
  },
  {
    id: "willy_sagnol", name: "Willy Sagnol", position: "RB", rating: 84,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 58, pas: 69, dri: 66, def: 73, phy: 73 }
  },
  {
    id: "lilian_thuram_2006", name: "Lilian Thuram", position: "RB", rating: 89,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 79, sho: 54, pas: 76, dri: 70, def: 84, phy: 78 }
  },
  {
    id: "william_gallas", name: "William Gallas", position: "CB", rating: 86,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 47, pas: 61, dri: 67, def: 87, phy: 76 }
  },
  {
    id: "eric_abidal", name: "Eric Abidal", position: "LB", rating: 84,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 77, sho: 56, pas: 70, dri: 72, def: 76, phy: 75 }
  },
  {
    id: "claude_makelele", name: "Claude Makélélé", position: "CDM", rating: 89,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 62, pas: 77, dri: 74, def: 89, phy: 79 }
  },
  {
    id: "patrick_vieira_2006", name: "Patrick Vieira", position: "CM", rating: 89,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 69, pas: 83, dri: 72, def: 68, phy: 76 }
  },
  {
    id: "zinedine_zidane_2006", name: "Zinedine Zidane", position: "CAM", rating: 94,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 80, pas: 89, dri: 85, def: 50, phy: 69 }
  },
  {
    id: "florent_malouda", name: "Florent Malouda", position: "LM", rating: 83,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 66, pas: 67, dri: 67, def: 43, phy: 59 }
  },
  {
    id: "franck_ribery", name: "Franck Ribéry", position: "LW", rating: 86,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 81, sho: 73, pas: 72, dri: 79, def: 30, phy: 63 }
  },
  {
    id: "thierry_henry_2006", name: "Thierry Henry", position: "ST", rating: 93,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 84, sho: 92, pas: 74, dri: 81, def: 37, phy: 77 }
  },
  {
    id: "david_trezeguet_2006", name: "David Trezeguet", position: "LW", rating: 85,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 83, sho: 75, pas: 67, dri: 74, def: 31, phy: 66 }
  },
  {
    id: "jens_lehmann", name: "Jens Lehmann", position: "GK", rating: 86,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2006, era: "modern", emoji: "👱🏼",
    stats: { pac: 68, sho: 24, pas: 60, dri: 67, def: 90, phy: 72 }
  },
  {
    id: "arne_friedrich_2006", name: "Arne Friedrich", position: "RB", rating: 81,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2006, era: "modern", emoji: "👱🏼",
    stats: { pac: 73, sho: 54, pas: 64, dri: 70, def: 77, phy: 72 }
  },
  {
    id: "per_mertesacker_2006", name: "Per Mertesacker", position: "CB", rating: 84,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2006, era: "modern", emoji: "👱🏼",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "christoph_metzelder", name: "Christoph Metzelder", position: "CB", rating: 81,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2006, era: "modern", emoji: "👱🏼",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "philipp_lahm_2006", name: "Philipp Lahm", position: "RB", rating: 88,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2006, era: "modern", emoji: "👱🏼",
    stats: { pac: 81, sho: 55, pas: 74, dri: 68, def: 79, phy: 76 }
  },
  {
    id: "torsten_frings", name: "Torsten Frings", position: "RM", rating: 84,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2006, era: "modern", emoji: "👱🏼",
    stats: { pac: 73, sho: 66, pas: 66, dri: 69, def: 43, phy: 63 }
  },
  {
    id: "michael_ballack", name: "Michael Ballack", position: "CM", rating: 91,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2006, era: "modern", emoji: "👱🏼",
    stats: { pac: 75, sho: 75, pas: 84, dri: 79, def: 74, phy: 75 }
  },
  {
    id: "bastian_schweinsteiger_2006", name: "Bastian Schweinsteiger", position: "CM", rating: 84,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2006, era: "modern", emoji: "👱🏼",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "bernd_schneider", name: "Bernd Schneider", position: "LM", rating: 82,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2006, era: "modern", emoji: "👱🏼",
    stats: { pac: 69, sho: 66, pas: 67, dri: 67, def: 46, phy: 59 }
  },
  {
    id: "lukas_podolski_2006", name: "Lukas Podolski", position: "ST", rating: 84,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2006, era: "modern", emoji: "👱🏼",
    stats: { pac: 72, sho: 77, pas: 66, dri: 73, def: 33, phy: 71 }
  },
  {
    id: "miroslav_klose_2006", name: "Miroslav Klose", position: "ST", rating: 89,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2006, era: "modern", emoji: "👱🏼",
    stats: { pac: 82, sho: 82, pas: 71, dri: 80, def: 32, phy: 71 }
  },
  {
    id: "richard_kingson_2006", name: "Richard Kingson", position: "GK", rating: 81,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2006, era: "modern", emoji: "👨🏾",
    stats: { pac: 66, sho: 26, pas: 61, dri: 62, def: 83, phy: 73 }
  },
  {
    id: "john_pantsil_2006", name: "John Pantsil", position: "RB", rating: 79,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2006, era: "modern", emoji: "👨🏾",
    stats: { pac: 69, sho: 50, pas: 63, dri: 60, def: 74, phy: 70 }
  },
  {
    id: "john_mensah_2006", name: "John Mensah", position: "CB", rating: 81,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2006, era: "modern", emoji: "👨🏾",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "shilla_illiasu", name: "Shilla Illiasu", position: "CB", rating: 78,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2006, era: "modern", emoji: "👨🏾",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "emmanuel_pappoe", name: "Emmanuel Pappoe", position: "LB", rating: 77,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2006, era: "modern", emoji: "👨🏾",
    stats: { pac: 67, sho: 46, pas: 59, dri: 66, def: 69, phy: 63 }
  },
  {
    id: "michael_essien_2006", name: "Michael Essien", position: "CM", rating: 88,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2006, era: "modern", emoji: "👨🏾",
    stats: { pac: 73, sho: 75, pas: 81, dri: 77, def: 71, phy: 72 }
  },
  {
    id: "stephen_appiah", name: "Stephen Appiah", position: "CM", rating: 86,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2006, era: "modern", emoji: "👨🏾",
    stats: { pac: 69, sho: 74, pas: 75, dri: 73, def: 67, phy: 70 }
  },
  {
    id: "sulley_muntari_2006", name: "Sulley Muntari", position: "CAM", rating: 82,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2006, era: "modern", emoji: "👨🏾",
    stats: { pac: 68, sho: 73, pas: 80, dri: 81, def: 37, phy: 60 }
  },
  {
    id: "haminu_draman", name: "Haminu Draman", position: "RW", rating: 78,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2006, era: "modern", emoji: "👨🏾",
    stats: { pac: 76, sho: 65, pas: 65, dri: 71, def: 29, phy: 56 }
  },
  {
    id: "asamoah_gyan_2006", name: "Asamoah Gyan", position: "ST", rating: 83,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2006, era: "modern", emoji: "👨🏾",
    stats: { pac: 73, sho: 80, pas: 64, dri: 71, def: 35, phy: 72 }
  },
  {
    id: "matthew_amoah_2006", name: "Matthew Amoah", position: "LW", rating: 79,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2006, era: "modern", emoji: "👨🏾",
    stats: { pac: 76, sho: 71, pas: 60, dri: 74, def: 33, phy: 63 }
  },
  {
    id: "razak_pimpong", name: "Razak Pimpong", position: "ST", rating: 77,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2006, era: "modern", emoji: "👨🏾",
    stats: { pac: 66, sho: 75, pas: 56, dri: 62, def: 32, phy: 66 }
  },
  {
    id: "gianluigi_buffon", name: "Gianluigi Buffon", position: "GK", rating: 95,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 79, sho: 32, pas: 64, dri: 76, def: 91, phy: 81 }
  },
  {
    id: "gianluca_zambrotta", name: "Gianluca Zambrotta", position: "RB", rating: 88,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 81, sho: 55, pas: 74, dri: 68, def: 79, phy: 76 }
  },
  {
    id: "fabio_cannavaro", name: "Fabio Cannavaro", position: "CB", rating: 94,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 52, pas: 73, dri: 72, def: 92, phy: 88 }
  },
  {
    id: "marco_materazzi", name: "Marco Materazzi", position: "CB", rating: 85,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 53, pas: 64, dri: 58, def: 85, phy: 81 }
  },
  {
    id: "fabio_grosso", name: "Fabio Grosso", position: "LB", rating: 84,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 77, sho: 56, pas: 70, dri: 72, def: 76, phy: 75 }
  },
  {
    id: "alessandro_nesta", name: "Alessandro Nesta", position: "CB", rating: 90,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 48, pas: 67, dri: 70, def: 92, phy: 86 }
  },
  {
    id: "gennaro_gattuso", name: "Gennaro Gattuso", position: "CDM", rating: 87,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 62, pas: 72, dri: 67, def: 79, phy: 78 }
  },
  {
    id: "andrea_pirlo", name: "Andrea Pirlo", position: "CDM", rating: 93,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 67, pas: 74, dri: 78, def: 86, phy: 86 }
  },
  {
    id: "mauro_camoranesi", name: "Mauro Camoranesi", position: "CM", rating: 84,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "simone_perrotta", name: "Simone Perrotta", position: "LM", rating: 82,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 66, pas: 67, dri: 67, def: 46, phy: 59 }
  },
  {
    id: "francesco_totti", name: "Francesco Totti", position: "RW", rating: 91,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 85, sho: 79, pas: 76, dri: 85, def: 33, phy: 68 }
  },
  {
    id: "alessandro_del_piero", name: "Alessandro Del Piero", position: "ST", rating: 89,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 82, sho: 82, pas: 71, dri: 80, def: 32, phy: 71 }
  },
  {
    id: "luca_toni", name: "Luca Toni", position: "LW", rating: 86,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 81, sho: 73, pas: 72, dri: 79, def: 30, phy: 63 }
  },
  {
    id: "filippo_inzaghi", name: "Filippo Inzaghi", position: "ST", rating: 84,
    country: "Italy", countryCode: "it", flag: "🇮🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 77, pas: 66, dri: 73, def: 33, phy: 71 }
  },
  {
    id: "oswaldo_sanchez", name: "Oswaldo Sánchez", position: "GK", rating: 83,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 66, sho: 27, pas: 61, dri: 67, def: 84, phy: 73 }
  },
  {
    id: "rafael_marquez_2006", name: "Rafael Márquez", position: "RB", rating: 86,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 82, sho: 60, pas: 70, dri: 66, def: 79, phy: 73 }
  },
  {
    id: "carlos_salcido", name: "Carlos Salcido", position: "CB", rating: 81,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "ricardo_osorio", name: "Ricardo Osorio", position: "CB", rating: 80,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "mario_mendez", name: "Mario Méndez", position: "LB", rating: 77,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 67, sho: 46, pas: 59, dri: 66, def: 69, phy: 63 }
  },
  {
    id: "pavel_pardo_2006", name: "Pavel Pardo", position: "RM", rating: 83,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 76, sho: 67, pas: 68, dri: 70, def: 44, phy: 62 }
  },
  {
    id: "gerardo_torrado", name: "Gerardo Torrado", position: "CM", rating: 81,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "zinha", name: "Zinha", position: "CM", rating: 80,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 68, sho: 67, pas: 75, dri: 69, def: 63, phy: 68 }
  },
  {
    id: "andres_guardado_2006", name: "Andrés Guardado", position: "LM", rating: 79,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 70, sho: 63, pas: 64, dri: 63, def: 45, phy: 62 }
  },
  {
    id: "omar_bravo", name: "Omar Bravo", position: "RW", rating: 81,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 76, sho: 72, pas: 66, dri: 74, def: 35, phy: 63 }
  },
  {
    id: "francisco_fonseca", name: "Francisco Fonseca", position: "ST", rating: 80,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 72, sho: 78, pas: 62, dri: 66, def: 29, phy: 67 }
  },
  {
    id: "jared_borgetti", name: "Jared Borgetti", position: "LW", rating: 82,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2006, era: "modern", emoji: "👨🏽",
    stats: { pac: 77, sho: 66, pas: 64, dri: 74, def: 36, phy: 61 }
  },
  {
    id: "ricardo", name: "Ricardo", position: "GK", rating: 82,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 20, pas: 56, dri: 65, def: 86, phy: 75 }
  },
  {
    id: "miguel", name: "Miguel", position: "RB", rating: 83,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 80, sho: 58, pas: 65, dri: 68, def: 79, phy: 75 }
  },
  {
    id: "ricardo_carvalho", name: "Ricardo Carvalho", position: "CB", rating: 89,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 52, pas: 66, dri: 63, def: 92, phy: 83 }
  },
  {
    id: "fernando_meira", name: "Fernando Meira", position: "CB", rating: 81,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "nuno_valente", name: "Nuno Valente", position: "LB", rating: 80,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 55, pas: 64, dri: 62, def: 74, phy: 64 }
  },
  {
    id: "costinha", name: "Costinha", position: "CM", rating: 80,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 67, pas: 75, dri: 69, def: 63, phy: 68 }
  },
  {
    id: "maniche", name: "Maniche", position: "CM", rating: 85,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "deco", name: "Deco", position: "CAM", rating: 90,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 77, pas: 84, dri: 84, def: 44, phy: 65 }
  },
  {
    id: "luis_figo", name: "Luís Figo", position: "RW", rating: 91,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 85, sho: 79, pas: 76, dri: 85, def: 33, phy: 68 }
  },
  {
    id: "cristiano_ronaldo_2006", name: "Cristiano Ronaldo", position: "LW", rating: 89,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 81, sho: 78, pas: 67, dri: 78, def: 31, phy: 65 }
  },
  {
    id: "pauleta", name: "Pauleta", position: "LW", rating: 84,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 71, pas: 68, dri: 76, def: 32, phy: 59 }
  },
  {
    id: "simao", name: "Simão", position: "ST", rating: 84,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2006, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 77, pas: 66, dri: 73, def: 33, phy: 71 }
  },

  // ──── 2010s ────
  {
    id: "manuel_neuer_2010", name: "Manuel Neuer", position: "GK", rating: 89,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 77, sho: 26, pas: 64, dri: 68, def: 87, phy: 79 }
  },
  {
    id: "philipp_lahm_2010", name: "Philipp Lahm", position: "RB", rating: 90,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 80, sho: 55, pas: 73, dri: 72, def: 83, phy: 74 }
  },
  {
    id: "per_mertesacker_2010", name: "Per Mertesacker", position: "CB", rating: 84,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "arne_friedrich_2010", name: "Arne Friedrich", position: "CB", rating: 81,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "jerome_boateng_2010", name: "Jérôme Boateng", position: "LB", rating: 83,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 78, sho: 55, pas: 66, dri: 72, def: 80, phy: 71 }
  },
  {
    id: "bastian_schweinsteiger_2010", name: "Bastian Schweinsteiger", position: "CM", rating: 89,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 69, sho: 69, pas: 83, dri: 72, def: 68, phy: 76 }
  },
  {
    id: "sami_khedira_2010", name: "Sami Khedira", position: "CM", rating: 84,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "mesut_ozil_2010", name: "Mesut Özil", position: "CAM", rating: 88,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 75, sho: 76, pas: 85, dri: 79, def: 48, phy: 63 }
  },
  {
    id: "thomas_muller_2010", name: "Thomas Müller", position: "RW", rating: 88,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 85, sho: 73, pas: 71, dri: 76, def: 38, phy: 63 }
  },
  {
    id: "lukas_podolski_2010", name: "Lukas Podolski", position: "ST", rating: 85,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 73, sho: 80, pas: 60, dri: 70, def: 30, phy: 68 }
  },
  {
    id: "miroslav_klose_2010", name: "Miroslav Klose", position: "LW", rating: 88,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 84, sho: 79, pas: 71, dri: 84, def: 38, phy: 66 }
  },
  {
    id: "cacau", name: "Cacau", position: "ST", rating: 79,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 69, sho: 71, pas: 57, dri: 66, def: 28, phy: 69 }
  },
  {
    id: "richard_kingson_2010", name: "Richard Kingson", position: "GK", rating: 79,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2010, era: "modern", emoji: "👨🏾",
    stats: { pac: 64, sho: 25, pas: 52, dri: 65, def: 80, phy: 71 }
  },
  {
    id: "john_pantsil_2010", name: "John Pantsil", position: "RB", rating: 79,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2010, era: "modern", emoji: "👨🏾",
    stats: { pac: 69, sho: 50, pas: 63, dri: 60, def: 74, phy: 70 }
  },
  {
    id: "john_mensah_2010", name: "John Mensah", position: "CB", rating: 82,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2010, era: "modern", emoji: "👨🏾",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "isaac_vorsah", name: "Isaac Vorsah", position: "CB", rating: 79,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2010, era: "modern", emoji: "👨🏾",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "hans_sarpei", name: "Hans Sarpei", position: "LB", rating: 78,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2010, era: "modern", emoji: "👨🏾",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "anthony_annan", name: "Anthony Annan", position: "RM", rating: 80,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2010, era: "modern", emoji: "👨🏾",
    stats: { pac: 75, sho: 66, pas: 65, dri: 69, def: 38, phy: 56 }
  },
  {
    id: "kwadwo_asamoah", name: "Kwadwo Asamoah", position: "CM", rating: 83,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2010, era: "modern", emoji: "👨🏾",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "kevin_prince_boateng_2010", name: "Kevin-Prince Boateng", position: "CDM", rating: 83,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2010, era: "modern", emoji: "👨🏾",
    stats: { pac: 70, sho: 61, pas: 68, dri: 68, def: 77, phy: 79 }
  },
  {
    id: "andre_ayew_2010", name: "André Ayew", position: "CAM", rating: 82,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2010, era: "modern", emoji: "👨🏾",
    stats: { pac: 68, sho: 73, pas: 80, dri: 81, def: 37, phy: 60 }
  },
  {
    id: "sulley_muntari_2010", name: "Sulley Muntari", position: "LM", rating: 83,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2010, era: "modern", emoji: "👨🏾",
    stats: { pac: 76, sho: 66, pas: 67, dri: 67, def: 43, phy: 59 }
  },
  {
    id: "asamoah_gyan_2010", name: "Asamoah Gyan", position: "ST", rating: 86,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2010, era: "modern", emoji: "👨🏾",
    stats: { pac: 75, sho: 81, pas: 61, dri: 71, def: 32, phy: 71 }
  },
  {
    id: "matthew_amoah_2010", name: "Matthew Amoah", position: "ST", rating: 77,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2010, era: "modern", emoji: "👨🏾",
    stats: { pac: 66, sho: 75, pas: 56, dri: 62, def: 32, phy: 66 }
  },
  {
    id: "eiji_kawashima", name: "Eiji Kawashima", position: "GK", rating: 82,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 20, pas: 56, dri: 65, def: 86, phy: 75 }
  },
  {
    id: "yuichi_komano", name: "Yuichi Komano", position: "RB", rating: 78,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 55, pas: 61, dri: 65, def: 74, phy: 69 }
  },
  {
    id: "marcus_tulio_tanaka", name: "Marcus Tulio Tanaka", position: "CB", rating: 81,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "yuji_nakazawa", name: "Yuji Nakazawa", position: "CB", rating: 82,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "yuto_nagatomo_2010", name: "Yuto Nagatomo", position: "LB", rating: 81,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 52, pas: 62, dri: 62, def: 72, phy: 66 }
  },
  {
    id: "yuki_abe", name: "Yuki Abe", position: "RM", rating: 80,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 66, pas: 65, dri: 69, def: 38, phy: 56 }
  },
  {
    id: "makoto_hasebe", name: "Makoto Hasebe", position: "CM", rating: 82,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "yasuhito_endo", name: "Yasuhito Endo", position: "CM", rating: 83,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "daisuke_matsui", name: "Daisuke Matsui", position: "LM", rating: 81,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 61, pas: 68, dri: 67, def: 40, phy: 60 }
  },
  {
    id: "keisuke_honda", name: "Keisuke Honda", position: "RW", rating: 85,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 79, sho: 71, pas: 72, dri: 77, def: 34, phy: 61 }
  },
  {
    id: "shinji_okazaki", name: "Shinji Okazaki", position: "ST", rating: 81,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "yoshito_okubo", name: "Yoshito Okubo", position: "LW", rating: 80,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 77, sho: 70, pas: 62, dri: 74, def: 30, phy: 62 }
  },
  {
    id: "maarten_stekelenburg", name: "Maarten Stekelenburg", position: "GK", rating: 81,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 66, sho: 26, pas: 61, dri: 62, def: 83, phy: 73 }
  },
  {
    id: "gregory_van_der_wiel", name: "Gregory van der Wiel", position: "RB", rating: 80,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 71, sho: 54, pas: 65, dri: 66, def: 71, phy: 72 }
  },
  {
    id: "john_heitinga", name: "John Heitinga", position: "CB", rating: 81,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "joris_mathijsen", name: "Joris Mathijsen", position: "CB", rating: 81,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "giovanni_van_bronckhorst", name: "Giovanni van Bronckhorst", position: "LB", rating: 84,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 77, sho: 56, pas: 70, dri: 72, def: 76, phy: 75 }
  },
  {
    id: "mark_van_bommel", name: "Mark van Bommel", position: "CM", rating: 85,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "nigel_de_jong_2010", name: "Nigel de Jong", position: "CM", rating: 83,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "wesley_sneijder_2010", name: "Wesley Sneijder", position: "CAM", rating: 91,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 76, sho: 80, pas: 89, dri: 85, def: 46, phy: 69 }
  },
  {
    id: "dirk_kuyt_2010", name: "Dirk Kuyt", position: "RW", rating: 85,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 79, sho: 71, pas: 72, dri: 77, def: 34, phy: 61 }
  },
  {
    id: "robin_van_persie_2010", name: "Robin van Persie", position: "ST", rating: 89,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 82, sho: 82, pas: 71, dri: 80, def: 32, phy: 71 }
  },
  {
    id: "arjen_robben_2010", name: "Arjen Robben", position: "RW", rating: 92,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2010, era: "modern", emoji: "👱🏼",
    stats: { pac: 87, sho: 78, pas: 69, dri: 85, def: 35, phy: 68 }
  },
  {
    id: "jung_sung_ryong", name: "Jung Sung-ryong", position: "GK", rating: 80,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 63, sho: 24, pas: 61, dri: 61, def: 84, phy: 67 }
  },
  {
    id: "cha_du_ri", name: "Cha Du-ri", position: "RB", rating: 80,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 54, pas: 65, dri: 66, def: 71, phy: 72 }
  },
  {
    id: "cho_yong_hyung", name: "Cho Yong-hyung", position: "CB", rating: 78,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "lee_jung_soo", name: "Lee Jung-soo", position: "CB", rating: 79,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "lee_young_pyo_2010", name: "Lee Young-pyo", position: "LB", rating: 82,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 58, pas: 66, dri: 64, def: 74, phy: 69 }
  },
  {
    id: "kim_jung_woo", name: "Kim Jung-woo", position: "RM", rating: 79,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 62, pas: 66, dri: 65, def: 39, phy: 56 }
  },
  {
    id: "ki_sung_yueng_2010", name: "Ki Sung-yueng", position: "CM", rating: 81,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "park_ji_sung_2010", name: "Park Ji-sung", position: "CM", rating: 87,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 73, pas: 81, dri: 70, def: 65, phy: 71 }
  },
  {
    id: "lee_chung_yong", name: "Lee Chung-yong", position: "LM", rating: 83,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 66, pas: 67, dri: 67, def: 43, phy: 59 }
  },
  {
    id: "park_chu_young", name: "Park Chu-young", position: "ST", rating: 82,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "yeom_ki_hun", name: "Yeom Ki-hun", position: "ST", rating: 78,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 73, pas: 61, dri: 69, def: 29, phy: 66 }
  },
  {
    id: "iker_casillas_2010", name: "Iker Casillas", position: "GK", rating: 92,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 78, sho: 27, pas: 69, dri: 78, def: 92, phy: 81 }
  },
  {
    id: "sergio_ramos", name: "Sergio Ramos", position: "RB", rating: 89,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 79, sho: 54, pas: 76, dri: 70, def: 84, phy: 78 }
  },
  {
    id: "gerard_pique", name: "Gerard Piqué", position: "CB", rating: 89,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 52, pas: 66, dri: 63, def: 92, phy: 83 }
  },
  {
    id: "carles_puyol_2010", name: "Carles Puyol", position: "CB", rating: 90,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 48, pas: 67, dri: 70, def: 92, phy: 86 }
  },
  {
    id: "joan_capdevila", name: "Joan Capdevila", position: "LB", rating: 82,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 58, pas: 66, dri: 64, def: 74, phy: 69 }
  },
  {
    id: "sergio_busquets", name: "Sergio Busquets", position: "CDM", rating: 89,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 62, pas: 77, dri: 74, def: 89, phy: 79 }
  },
  {
    id: "xabi_alonso", name: "Xabi Alonso", position: "CM", rating: 89,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 69, pas: 83, dri: 72, def: 68, phy: 76 }
  },
  {
    id: "xavi_2010", name: "Xavi", position: "CM", rating: 95,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 74, pas: 83, dri: 85, def: 76, phy: 74 }
  },
  {
    id: "andres_iniesta", name: "Andrés Iniesta", position: "CM", rating: 95,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 74, pas: 83, dri: 85, def: 76, phy: 74 }
  },
  {
    id: "david_silva", name: "David Silva", position: "LM", rating: 87,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 79, sho: 65, pas: 72, dri: 71, def: 47, phy: 68 }
  },
  {
    id: "cesc_fabregas", name: "Cesc Fàbregas", position: "CM", rating: 87,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 73, pas: 81, dri: 70, def: 65, phy: 71 }
  },
  {
    id: "david_villa", name: "David Villa", position: "RW", rating: 91,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 85, sho: 79, pas: 76, dri: 85, def: 33, phy: 68 }
  },
  {
    id: "fernando_torres", name: "Fernando Torres", position: "ST", rating: 85,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 60, dri: 70, def: 30, phy: 68 }
  },
  {
    id: "pedro", name: "Pedro", position: "LW", rating: 84,
    country: "Spain", countryCode: "es", flag: "🇪🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 71, pas: 68, dri: 76, def: 32, phy: 59 }
  },
  {
    id: "tim_howard", name: "Tim Howard", position: "GK", rating: 85,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 23, pas: 62, dri: 69, def: 82, phy: 72 }
  },
  {
    id: "steve_cherundolo", name: "Steve Cherundolo", position: "RB", rating: 80,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 54, pas: 65, dri: 66, def: 71, phy: 72 }
  },
  {
    id: "oguchi_onyewu", name: "Oguchi Onyewu", position: "CB", rating: 80,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "jay_demerit", name: "Jay DeMerit", position: "CB", rating: 78,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "carlos_bocanegra", name: "Carlos Bocanegra", position: "LB", rating: 81,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 52, pas: 62, dri: 62, def: 72, phy: 66 }
  },
  {
    id: "maurice_edu", name: "Maurice Edu", position: "RM", rating: 79,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 62, pas: 66, dri: 65, def: 39, phy: 56 }
  },
  {
    id: "michael_bradley", name: "Michael Bradley", position: "CM", rating: 83,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "benny_feilhaber", name: "Benny Feilhaber", position: "CM", rating: 79,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 63, pas: 70, dri: 66, def: 66, phy: 67 }
  },
  {
    id: "clint_dempsey", name: "Clint Dempsey", position: "LM", rating: 85,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 77, sho: 62, pas: 67, dri: 69, def: 47, phy: 63 }
  },
  {
    id: "landon_donovan_2010", name: "Landon Donovan", position: "RW", rating: 86,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 79, sho: 76, pas: 65, dri: 83, def: 33, phy: 61 }
  },
  {
    id: "jozy_altidore", name: "Jozy Altidore", position: "ST", rating: 81,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "herculez_gomez", name: "Herculez Gomez", position: "LW", rating: 77,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 66, pas: 63, dri: 68, def: 32, phy: 60 }
  },
  {
    id: "fernando_muslera_2010", name: "Fernando Muslera", position: "GK", rating: 83,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 27, pas: 61, dri: 67, def: 84, phy: 73 }
  },
  {
    id: "maxi_pereira", name: "Maxi Pereira", position: "RB", rating: 81,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 54, pas: 64, dri: 70, def: 77, phy: 72 }
  },
  {
    id: "diego_lugano", name: "Diego Lugano", position: "CB", rating: 84,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "diego_godin_2010", name: "Diego Godín", position: "CB", rating: 86,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 47, pas: 61, dri: 67, def: 87, phy: 76 }
  },
  {
    id: "jorge_fucile", name: "Jorge Fucile", position: "LB", rating: 79,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 51, pas: 62, dri: 61, def: 71, phy: 64 }
  },
  {
    id: "diego_perez", name: "Diego Pérez", position: "CM", rating: 81,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "egidio_arevalo_rios", name: "Egidio Arévalo Ríos", position: "CM", rating: 80,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 67, pas: 75, dri: 69, def: 63, phy: 68 }
  },
  {
    id: "alvaro_pereira", name: "Álvaro Pereira", position: "CAM", rating: 80,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 76, pas: 72, dri: 78, def: 43, phy: 62 }
  },
  {
    id: "diego_forlan", name: "Diego Forlán", position: "RW", rating: 91,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 85, sho: 79, pas: 76, dri: 85, def: 33, phy: 68 }
  },
  {
    id: "luis_suarez_2010", name: "Luis Suárez", position: "ST", rating: 89,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 82, sho: 82, pas: 71, dri: 80, def: 32, phy: 71 }
  },
  {
    id: "edinson_cavani_2010", name: "Edinson Cavani", position: "LW", rating: 86,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2010, era: "modern", emoji: "👨🏻",
    stats: { pac: 81, sho: 73, pas: 72, dri: 79, def: 30, phy: 63 }
  },
  {
    id: "sergio_romero", name: "Sergio Romero", position: "GK", rating: 82,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 20, pas: 56, dri: 65, def: 86, phy: 75 }
  },
  {
    id: "pablo_zabaleta", name: "Pablo Zabaleta", position: "RB", rating: 85,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 54, pas: 65, dri: 70, def: 75, phy: 77 }
  },
  {
    id: "ezequiel_garay", name: "Ezequiel Garay", position: "CB", rating: 84,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "martin_demichelis", name: "Martín Demichelis", position: "CB", rating: 81,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "marcos_rojo", name: "Marcos Rojo", position: "LB", rating: 82,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 58, pas: 66, dri: 64, def: 74, phy: 69 }
  },
  {
    id: "javier_mascherano_2014", name: "Javier Mascherano", position: "CDM", rating: 89,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 62, pas: 77, dri: 74, def: 89, phy: 79 }
  },
  {
    id: "lucas_biglia", name: "Lucas Biglia", position: "CM", rating: 82,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "angel_di_maria_2014", name: "Ángel Di María", position: "RW", rating: 89,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 85, sho: 73, pas: 71, dri: 81, def: 39, phy: 63 }
  },
  {
    id: "lionel_messi_2014", name: "Lionel Messi", position: "RW", rating: 96,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 94, sho: 79, pas: 73, dri: 87, def: 35, phy: 68 }
  },
  {
    id: "gonzalo_higuain", name: "Gonzalo Higuaín", position: "ST", rating: 87,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 84, pas: 66, dri: 77, def: 35, phy: 71 }
  },
  {
    id: "sergio_aguero", name: "Sergio Agüero", position: "LW", rating: 88,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 84, sho: 79, pas: 71, dri: 84, def: 38, phy: 66 }
  },
  {
    id: "ezequiel_lavezzi", name: "Ezequiel Lavezzi", position: "ST", rating: 83,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 64, dri: 71, def: 35, phy: 72 }
  },
  {
    id: "thibaut_courtois_2014", name: "Thibaut Courtois", position: "GK", rating: 86,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 24, pas: 60, dri: 67, def: 90, phy: 72 }
  },
  {
    id: "toby_alderweireld_2014", name: "Toby Alderweireld", position: "CB", rating: 83,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "vincent_kompany_2014", name: "Vincent Kompany", position: "CB", rating: 87,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 52, pas: 70, dri: 60, def: 89, phy: 78 }
  },
  {
    id: "jan_vertonghen_2014", name: "Jan Vertonghen", position: "CB", rating: 84,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "axel_witsel_2014", name: "Axel Witsel", position: "RM", rating: 84,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 66, pas: 66, dri: 69, def: 43, phy: 63 }
  },
  {
    id: "marouane_fellaini_2014", name: "Marouane Fellaini", position: "CM", rating: 82,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "kevin_de_bruyne_2014", name: "Kevin De Bruyne", position: "CM", rating: 86,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 74, pas: 75, dri: 73, def: 67, phy: 70 }
  },
  {
    id: "nacer_chadli_2014", name: "Nacer Chadli", position: "LM", rating: 80,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 62, pas: 67, dri: 71, def: 41, phy: 57 }
  },
  {
    id: "eden_hazard_2014", name: "Eden Hazard", position: "LW", rating: 89,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 81, sho: 78, pas: 67, dri: 78, def: 31, phy: 65 }
  },
  {
    id: "dries_mertens_2014", name: "Dries Mertens", position: "RW", rating: 83,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 75, pas: 63, dri: 80, def: 37, phy: 60 }
  },
  {
    id: "divock_origi", name: "Divock Origi", position: "LW", rating: 79,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 71, pas: 60, dri: 74, def: 33, phy: 63 }
  },
  {
    id: "romelu_lukaku_2014", name: "Romelu Lukaku", position: "ST", rating: 84,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 77, pas: 66, dri: 73, def: 33, phy: 71 }
  },
  {
    id: "david_ospina_2014", name: "David Ospina", position: "GK", rating: 84,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 66, sho: 22, pas: 58, dri: 64, def: 87, phy: 74 }
  },
  {
    id: "juan_camilo_zuniga", name: "Juan Camilo Zúñiga", position: "RB", rating: 82,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 73, sho: 57, pas: 68, dri: 68, def: 76, phy: 72 }
  },
  {
    id: "mario_yepes", name: "Mario Yepes", position: "CB", rating: 82,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "cristian_zapata", name: "Cristián Zapata", position: "CB", rating: 81,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "pablo_armero", name: "Pablo Armero", position: "LB", rating: 80,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 76, sho: 55, pas: 64, dri: 62, def: 74, phy: 64 }
  },
  {
    id: "carlos_sanchez_2014", name: "Carlos Sánchez", position: "RM", rating: 82,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 72, sho: 63, pas: 69, dri: 74, def: 42, phy: 66 }
  },
  {
    id: "abel_aguilar", name: "Abel Aguilar", position: "CM", rating: 80,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 68, sho: 67, pas: 75, dri: 69, def: 63, phy: 68 }
  },
  {
    id: "juan_guillermo_cuadrado_2014", name: "Juan Guillermo Cuadrado", position: "CDM", rating: 86,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 66, sho: 59, pas: 75, dri: 65, def: 78, phy: 81 }
  },
  {
    id: "james_rodriguez_2014", name: "James Rodríguez", position: "CAM", rating: 91,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 76, sho: 80, pas: 89, dri: 85, def: 46, phy: 69 }
  },
  {
    id: "juan_fernando_quintero_2014", name: "Juan Fernando Quintero", position: "CAM", rating: 80,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 69, sho: 76, pas: 72, dri: 78, def: 43, phy: 62 }
  },
  {
    id: "teofilo_gutierrez", name: "Teófilo Gutiérrez", position: "ST", rating: 82,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "jackson_martinez", name: "Jackson Martínez", position: "ST", rating: 84,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 72, sho: 77, pas: 66, dri: 73, def: 33, phy: 71 }
  },
  {
    id: "keylor_navas", name: "Keylor Navas", position: "GK", rating: 89,
    country: "Costa Rica", countryCode: "cr", flag: "🇨🇷", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 77, sho: 26, pas: 64, dri: 68, def: 87, phy: 79 }
  },
  {
    id: "cristian_gamboa", name: "Cristian Gamboa", position: "RB", rating: 79,
    country: "Costa Rica", countryCode: "cr", flag: "🇨🇷", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 69, sho: 50, pas: 63, dri: 60, def: 74, phy: 70 }
  },
  {
    id: "giancarlo_gonzalez", name: "Giancarlo González", position: "CB", rating: 81,
    country: "Costa Rica", countryCode: "cr", flag: "🇨🇷", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "oscar_duarte", name: "Óscar Duarte", position: "CB", rating: 80,
    country: "Costa Rica", countryCode: "cr", flag: "🇨🇷", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "michael_umana", name: "Michael Umaña", position: "LB", rating: 78,
    country: "Costa Rica", countryCode: "cr", flag: "🇨🇷", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "junior_diaz", name: "Júnior Díaz", position: "CB", rating: 78,
    country: "Costa Rica", countryCode: "cr", flag: "🇨🇷", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "celso_borges", name: "Celso Borges", position: "CM", rating: 82,
    country: "Costa Rica", countryCode: "cr", flag: "🇨🇷", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "yeltsin_tejeda", name: "Yeltsin Tejeda", position: "CM", rating: 79,
    country: "Costa Rica", countryCode: "cr", flag: "🇨🇷", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 60, sho: 63, pas: 70, dri: 66, def: 66, phy: 67 }
  },
  {
    id: "christian_bolanos", name: "Christian Bolaños", position: "CAM", rating: 81,
    country: "Costa Rica", countryCode: "cr", flag: "🇨🇷", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 65, sho: 68, pas: 74, dri: 72, def: 37, phy: 57 }
  },
  {
    id: "bryan_ruiz", name: "Bryan Ruiz", position: "RW", rating: 84,
    country: "Costa Rica", countryCode: "cr", flag: "🇨🇷", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 79, sho: 75, pas: 66, dri: 80, def: 36, phy: 63 }
  },
  {
    id: "joel_campbell", name: "Joel Campbell", position: "ST", rating: 82,
    country: "Costa Rica", countryCode: "cr", flag: "🇨🇷", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "marco_urena", name: "Marco Ureña", position: "LW", rating: 78,
    country: "Costa Rica", countryCode: "cr", flag: "🇨🇷", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 71, sho: 71, pas: 62, dri: 75, def: 31, phy: 60 }
  },
  {
    id: "stipe_pletikosa", name: "Stipe Pletikosa", position: "GK", rating: 80,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 63, sho: 24, pas: 61, dri: 61, def: 84, phy: 67 }
  },
  {
    id: "darijo_srna", name: "Darijo Srna", position: "RB", rating: 84,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 58, pas: 69, dri: 66, def: 73, phy: 73 }
  },
  {
    id: "vedran_corluka", name: "Vedran Ćorluka", position: "CB", rating: 81,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "dejan_lovren_2014", name: "Dejan Lovren", position: "CB", rating: 82,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "sime_vrsaljko_2014", name: "Šime Vrsaljko", position: "LB", rating: 79,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 51, pas: 62, dri: 61, def: 71, phy: 64 }
  },
  {
    id: "ivan_rakitic_2014", name: "Ivan Rakitić", position: "CM", rating: 86,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 74, pas: 75, dri: 73, def: 67, phy: 70 }
  },
  {
    id: "luka_modric_2014", name: "Luka Modrić", position: "CM", rating: 90,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 71, pas: 78, dri: 74, def: 72, phy: 77 }
  },
  {
    id: "mateo_kovacic_2014", name: "Mateo Kovačić", position: "CAM", rating: 81,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 65, sho: 68, pas: 74, dri: 72, def: 37, phy: 57 }
  },
  {
    id: "ivan_perisic_2014", name: "Ivan Perišić", position: "RW", rating: 82,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 77, sho: 74, pas: 61, dri: 71, def: 36, phy: 63 }
  },
  {
    id: "ivica_olic", name: "Ivica Olić", position: "ST", rating: 80,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 78, pas: 62, dri: 66, def: 29, phy: 67 }
  },
  {
    id: "mario_mandzukic_2014", name: "Mario Mandžukić", position: "LW", rating: 85,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 83, sho: 75, pas: 67, dri: 74, def: 31, phy: 66 }
  },
  {
    id: "nikica_jelavic", name: "Nikica Jelavić", position: "ST", rating: 79,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2014, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 71, pas: 57, dri: 66, def: 28, phy: 69 }
  },
  {
    id: "manuel_neuer_2014", name: "Manuel Neuer", position: "GK", rating: 94,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 82, sho: 26, pas: 71, dri: 75, def: 97, phy: 84 }
  },
  {
    id: "philipp_lahm_2014", name: "Philipp Lahm", position: "RB", rating: 92,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 84, sho: 61, pas: 72, dri: 75, def: 83, phy: 79 }
  },
  {
    id: "jerome_boateng_2014", name: "Jérôme Boateng", position: "CB", rating: 89,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 70, sho: 52, pas: 66, dri: 63, def: 92, phy: 83 }
  },
  {
    id: "mats_hummels", name: "Mats Hummels", position: "CB", rating: 90,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 70, sho: 48, pas: 67, dri: 70, def: 92, phy: 86 }
  },
  {
    id: "benedikt_howedes", name: "Benedikt Höwedes", position: "LB", rating: 82,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 74, sho: 58, pas: 66, dri: 64, def: 74, phy: 69 }
  },
  {
    id: "bastian_schweinsteiger_2014", name: "Bastian Schweinsteiger", position: "RM", rating: 90,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 82, sho: 66, pas: 71, dri: 76, def: 42, phy: 70 }
  },
  {
    id: "sami_khedira_2014", name: "Sami Khedira", position: "CM", rating: 85,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "toni_kroos", name: "Toni Kroos", position: "CM", rating: 92,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 72, sho: 72, pas: 81, dri: 75, def: 71, phy: 76 }
  },
  {
    id: "mesut_ozil_2014", name: "Mesut Özil", position: "CAM", rating: 89,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 75, sho: 82, pas: 80, dri: 87, def: 41, phy: 67 }
  },
  {
    id: "thomas_muller_2014", name: "Thomas Müller", position: "RW", rating: 91,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 85, sho: 79, pas: 76, dri: 85, def: 33, phy: 68 }
  },
  {
    id: "miroslav_klose_2014", name: "Miroslav Klose", position: "ST", rating: 87,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 73, sho: 84, pas: 66, dri: 77, def: 35, phy: 71 }
  },
  {
    id: "mario_gotze", name: "Mario Götze", position: "LW", rating: 85,
    country: "Germany", countryCode: "de", flag: "🇩🇪", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 83, sho: 75, pas: 67, dri: 74, def: 31, phy: 66 }
  },
  {
    id: "fatau_dauda", name: "Fatau Dauda", position: "GK", rating: 78,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2014, era: "modern", emoji: "👨🏾",
    stats: { pac: 62, sho: 23, pas: 58, dri: 60, def: 74, phy: 69 }
  },
  {
    id: "harrison_afful", name: "Harrison Afful", position: "RB", rating: 79,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2014, era: "modern", emoji: "👨🏾",
    stats: { pac: 69, sho: 50, pas: 63, dri: 60, def: 74, phy: 70 }
  },
  {
    id: "john_boye", name: "John Boye", position: "CB", rating: 79,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2014, era: "modern", emoji: "👨🏾",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "jonathan_mensah", name: "Jonathan Mensah", position: "CB", rating: 80,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2014, era: "modern", emoji: "👨🏾",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "daniel_opare", name: "Daniel Opare", position: "LB", rating: 78,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2014, era: "modern", emoji: "👨🏾",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "michael_essien_2014", name: "Michael Essien", position: "RM", rating: 83,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2014, era: "modern", emoji: "👨🏾",
    stats: { pac: 76, sho: 67, pas: 68, dri: 70, def: 44, phy: 62 }
  },
  {
    id: "sulley_muntari_2014", name: "Sulley Muntari", position: "CM", rating: 83,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2014, era: "modern", emoji: "👨🏾",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "kevin_prince_boateng_2014", name: "Kevin-Prince Boateng", position: "CDM", rating: 83,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2014, era: "modern", emoji: "👨🏾",
    stats: { pac: 70, sho: 61, pas: 68, dri: 68, def: 77, phy: 79 }
  },
  {
    id: "mubarak_wakaso", name: "Mubarak Wakaso", position: "CAM", rating: 80,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2014, era: "modern", emoji: "👨🏾",
    stats: { pac: 69, sho: 76, pas: 72, dri: 78, def: 43, phy: 62 }
  },
  {
    id: "andre_ayew_2014", name: "André Ayew", position: "LM", rating: 84,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2014, era: "modern", emoji: "👨🏾",
    stats: { pac: 79, sho: 63, pas: 70, dri: 76, def: 41, phy: 61 }
  },
  {
    id: "asamoah_gyan_2014", name: "Asamoah Gyan", position: "ST", rating: 86,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2014, era: "modern", emoji: "👨🏾",
    stats: { pac: 75, sho: 81, pas: 61, dri: 71, def: 32, phy: 71 }
  },
  {
    id: "jordan_ayew_2014", name: "Jordan Ayew", position: "ST", rating: 81,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2014, era: "modern", emoji: "👨🏾",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "guillermo_ochoa", name: "Guillermo Ochoa", position: "GK", rating: 85,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 69, sho: 23, pas: 62, dri: 69, def: 82, phy: 72 }
  },
  {
    id: "rafael_marquez_2014", name: "Rafael Márquez", position: "RB", rating: 85,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 74, sho: 54, pas: 65, dri: 70, def: 75, phy: 77 }
  },
  {
    id: "hector_moreno", name: "Héctor Moreno", position: "CB", rating: 82,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "francisco_javier_rodriguez", name: "Francisco Javier Rodríguez", position: "CB", rating: 79,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "paul_aguilar", name: "Paul Aguilar", position: "LB", rating: 80,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 76, sho: 55, pas: 64, dri: 62, def: 74, phy: 64 }
  },
  {
    id: "miguel_layun", name: "Miguel Layún", position: "CB", rating: 80,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "hector_herrera", name: "Héctor Herrera", position: "CM", rating: 84,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "jose_juan_vazquez", name: "José Juan Vázquez", position: "CM", rating: 79,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 60, sho: 63, pas: 70, dri: 66, def: 66, phy: 67 }
  },
  {
    id: "andres_guardado_2014", name: "Andrés Guardado", position: "CAM", rating: 84,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 74, sho: 76, pas: 78, dri: 74, def: 42, phy: 64 }
  },
  {
    id: "giovani_dos_santos", name: "Giovani dos Santos", position: "RW", rating: 83,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 75, sho: 75, pas: 63, dri: 80, def: 37, phy: 60 }
  },
  {
    id: "oribe_peralta", name: "Oribe Peralta", position: "ST", rating: 81,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "javier_hernandez", name: "Javier Hernández", position: "LW", rating: 84,
    country: "Mexico", countryCode: "mx", flag: "🇲🇽", year: 2014, era: "modern", emoji: "👨🏽",
    stats: { pac: 75, sho: 71, pas: 68, dri: 76, def: 32, phy: 59 }
  },
  {
    id: "jasper_cillessen", name: "Jasper Cillessen", position: "GK", rating: 82,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 66, sho: 20, pas: 56, dri: 65, def: 86, phy: 75 }
  },
  {
    id: "ron_vlaar", name: "Ron Vlaar", position: "RB", rating: 81,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 73, sho: 54, pas: 64, dri: 70, def: 77, phy: 72 }
  },
  {
    id: "stefan_de_vrij", name: "Stefan de Vrij", position: "CB", rating: 83,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "bruno_martins_indi", name: "Bruno Martins Indi", position: "CB", rating: 79,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "daley_blind", name: "Daley Blind", position: "LB", rating: 83,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 78, sho: 55, pas: 66, dri: 72, def: 80, phy: 71 }
  },
  {
    id: "daryl_janmaat", name: "Daryl Janmaat", position: "CB", rating: 80,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "nigel_de_jong_2014", name: "Nigel de Jong", position: "CM", rating: 83,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "georginio_wijnaldum", name: "Georginio Wijnaldum", position: "CM", rating: 83,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "wesley_sneijder_2014", name: "Wesley Sneijder", position: "CAM", rating: 87,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 69, sho: 75, pas: 79, dri: 84, def: 45, phy: 62 }
  },
  {
    id: "dirk_kuyt_2014", name: "Dirk Kuyt", position: "RW", rating: 82,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 77, sho: 74, pas: 61, dri: 71, def: 36, phy: 63 }
  },
  {
    id: "arjen_robben_2014", name: "Arjen Robben", position: "RW", rating: 91,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 85, sho: 79, pas: 76, dri: 85, def: 33, phy: 68 }
  },
  {
    id: "robin_van_persie_2014", name: "Robin van Persie", position: "LW", rating: 90,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 86, sho: 77, pas: 71, dri: 79, def: 37, phy: 67 }
  },
  {
    id: "memphis_depay", name: "Memphis Depay", position: "ST", rating: 80,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 72, sho: 78, pas: 62, dri: 66, def: 29, phy: 67 }
  },
  {
    id: "klaas_jan_huntelaar", name: "Klaas-Jan Huntelaar", position: "RW", rating: 82,
    country: "Netherlands", countryCode: "nl", flag: "🇳🇱", year: 2014, era: "modern", emoji: "👱🏼",
    stats: { pac: 77, sho: 74, pas: 61, dri: 71, def: 36, phy: 63 }
  },
  {
    id: "vincent_enyeama", name: "Vincent Enyeama", position: "GK", rating: 85,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2014, era: "modern", emoji: "👨🏿",
    stats: { pac: 69, sho: 23, pas: 62, dri: 69, def: 82, phy: 72 }
  },
  {
    id: "efe_ambrose", name: "Efe Ambrose", position: "RB", rating: 79,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2014, era: "modern", emoji: "👨🏿",
    stats: { pac: 69, sho: 50, pas: 63, dri: 60, def: 74, phy: 70 }
  },
  {
    id: "joseph_yobo", name: "Joseph Yobo", position: "CB", rating: 82,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2014, era: "modern", emoji: "👨🏿",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "kenneth_omeruo", name: "Kenneth Omeruo", position: "CB", rating: 79,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2014, era: "modern", emoji: "👨🏿",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "juwon_oshaniwa", name: "Juwon Oshaniwa", position: "LB", rating: 77,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2014, era: "modern", emoji: "👨🏿",
    stats: { pac: 67, sho: 46, pas: 59, dri: 66, def: 69, phy: 63 }
  },
  {
    id: "ogenyi_onazi", name: "Ogenyi Onazi", position: "CM", rating: 79,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2014, era: "modern", emoji: "👨🏿",
    stats: { pac: 60, sho: 63, pas: 70, dri: 66, def: 66, phy: 67 }
  },
  {
    id: "john_obi_mikel_2014", name: "John Obi Mikel", position: "CM", rating: 83,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2014, era: "modern", emoji: "👨🏿",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "victor_moses_2014", name: "Victor Moses", position: "CAM", rating: 81,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2014, era: "modern", emoji: "👨🏿",
    stats: { pac: 65, sho: 68, pas: 74, dri: 72, def: 37, phy: 57 }
  },
  {
    id: "ahmed_musa_2014", name: "Ahmed Musa", position: "RW", rating: 81,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2014, era: "modern", emoji: "👨🏿",
    stats: { pac: 76, sho: 72, pas: 66, dri: 74, def: 35, phy: 63 }
  },
  {
    id: "peter_odemwingie", name: "Peter Odemwingie", position: "ST", rating: 81,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2014, era: "modern", emoji: "👨🏿",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "emmanuel_emenike", name: "Emmanuel Emenike", position: "LW", rating: 80,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2014, era: "modern", emoji: "👨🏿",
    stats: { pac: 77, sho: 70, pas: 62, dri: 74, def: 30, phy: 62 }
  },
  {
    id: "thibaut_courtois_2018", name: "Thibaut Courtois", position: "GK", rating: 91,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 29, pas: 68, dri: 72, def: 90, phy: 83 }
  },
  {
    id: "toby_alderweireld_2018", name: "Toby Alderweireld", position: "RB", rating: 86,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 82, sho: 60, pas: 70, dri: 66, def: 79, phy: 73 }
  },
  {
    id: "vincent_kompany_2018", name: "Vincent Kompany", position: "CB", rating: 87,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 52, pas: 70, dri: 60, def: 89, phy: 78 }
  },
  {
    id: "jan_vertonghen_2018", name: "Jan Vertonghen", position: "CB", rating: 86,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 47, pas: 61, dri: 67, def: 87, phy: 76 }
  },
  {
    id: "thomas_meunier", name: "Thomas Meunier", position: "LB", rating: 83,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 78, sho: 55, pas: 66, dri: 72, def: 80, phy: 71 }
  },
  {
    id: "axel_witsel_2018", name: "Axel Witsel", position: "RM", rating: 85,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 69, pas: 72, dri: 76, def: 41, phy: 68 }
  },
  {
    id: "marouane_fellaini_2018", name: "Marouane Fellaini", position: "CM", rating: 81,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "kevin_de_bruyne_2018", name: "Kevin De Bruyne", position: "CM", rating: 93,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 79, pas: 88, dri: 83, def: 74, phy: 75 }
  },
  {
    id: "nacer_chadli_2018", name: "Nacer Chadli", position: "LM", rating: 80,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 62, pas: 67, dri: 71, def: 41, phy: 57 }
  },
  {
    id: "dries_mertens_2018", name: "Dries Mertens", position: "RW", rating: 85,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 79, sho: 71, pas: 72, dri: 77, def: 34, phy: 61 }
  },
  {
    id: "romelu_lukaku_2018", name: "Romelu Lukaku", position: "ST", rating: 89,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 82, sho: 82, pas: 71, dri: 80, def: 32, phy: 71 }
  },
  {
    id: "eden_hazard_2018", name: "Eden Hazard", position: "LW", rating: 92,
    country: "Belgium", countryCode: "be", flag: "🇧🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 84, sho: 79, pas: 73, dri: 84, def: 36, phy: 73 }
  },
  {
    id: "alisson", name: "Alisson", position: "GK", rating: 89,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 77, sho: 26, pas: 64, dri: 68, def: 87, phy: 79 }
  },
  {
    id: "fagner", name: "Fagner", position: "RB", rating: 80,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 71, sho: 54, pas: 65, dri: 66, def: 71, phy: 72 }
  },
  {
    id: "thiago_silva", name: "Thiago Silva", position: "CB", rating: 89,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 70, sho: 52, pas: 66, dri: 63, def: 92, phy: 83 }
  },
  {
    id: "miranda", name: "Miranda", position: "CB", rating: 86,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 64, sho: 47, pas: 61, dri: 67, def: 87, phy: 76 }
  },
  {
    id: "marcelo", name: "Marcelo", position: "LB", rating: 88,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 83, sho: 60, pas: 73, dri: 68, def: 79, phy: 75 }
  },
  {
    id: "filipe_luis", name: "Filipe Luís", position: "CB", rating: 83,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "casemiro", name: "Casemiro", position: "CDM", rating: 88,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 70, sho: 65, pas: 72, dri: 72, def: 86, phy: 76 }
  },
  {
    id: "paulinho", name: "Paulinho", position: "CM", rating: 83,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "renato_augusto", name: "Renato Augusto", position: "CM", rating: 80,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 68, sho: 67, pas: 75, dri: 69, def: 63, phy: 68 }
  },
  {
    id: "philippe_coutinho", name: "Philippe Coutinho", position: "LM", rating: 89,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 77, sho: 69, pas: 75, dri: 77, def: 43, phy: 65 }
  },
  {
    id: "willian", name: "Willian", position: "RW", rating: 84,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 79, sho: 75, pas: 66, dri: 80, def: 36, phy: 63 }
  },
  {
    id: "neymar", name: "Neymar", position: "LW", rating: 94,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 90, sho: 76, pas: 72, dri: 82, def: 33, phy: 73 }
  },
  {
    id: "gabriel_jesus", name: "Gabriel Jesus", position: "LW", rating: 83,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 74, sho: 69, pas: 67, dri: 80, def: 29, phy: 67 }
  },
  {
    id: "roberto_firmino", name: "Roberto Firmino", position: "ST", rating: 86,
    country: "Brazil", countryCode: "br", flag: "🇧🇷", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 75, sho: 81, pas: 61, dri: 71, def: 32, phy: 71 }
  },
  {
    id: "david_ospina_2018", name: "David Ospina", position: "GK", rating: 84,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 66, sho: 22, pas: 58, dri: 64, def: 87, phy: 74 }
  },
  {
    id: "santiago_arias", name: "Santiago Arias", position: "RB", rating: 79,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 69, sho: 50, pas: 63, dri: 60, def: 74, phy: 70 }
  },
  {
    id: "yerry_mina", name: "Yerry Mina", position: "CB", rating: 83,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "davinson_sanchez", name: "Davinson Sánchez", position: "CB", rating: 83,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "johan_mojica", name: "Johan Mojica", position: "LB", rating: 78,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "wilmar_barrios", name: "Wílmar Barrios", position: "RM", rating: 80,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 75, sho: 66, pas: 65, dri: 69, def: 38, phy: 56 }
  },
  {
    id: "carlos_sanchez_2018", name: "Carlos Sánchez", position: "CM", rating: 79,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 60, sho: 63, pas: 70, dri: 66, def: 66, phy: 67 }
  },
  {
    id: "jefferson_lerma", name: "Jefferson Lerma", position: "CDM", rating: 79,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 60, sho: 53, pas: 62, dri: 61, def: 73, phy: 68 }
  },
  {
    id: "juan_fernando_quintero_2018", name: "Juan Fernando Quintero", position: "CAM", rating: 82,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 68, sho: 73, pas: 80, dri: 81, def: 37, phy: 60 }
  },
  {
    id: "juan_guillermo_cuadrado_2018", name: "Juan Guillermo Cuadrado", position: "LM", rating: 85,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 77, sho: 62, pas: 67, dri: 69, def: 47, phy: 63 }
  },
  {
    id: "james_rodriguez_2018", name: "James Rodríguez", position: "CAM", rating: 89,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 75, sho: 82, pas: 80, dri: 87, def: 41, phy: 67 }
  },
  {
    id: "radamel_falcao", name: "Radamel Falcao", position: "ST", rating: 86,
    country: "Colombia", countryCode: "co", flag: "🇨🇴", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 75, sho: 81, pas: 61, dri: 71, def: 32, phy: 71 }
  },
  {
    id: "danijel_subasic", name: "Danijel Subašić", position: "GK", rating: 83,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 27, pas: 61, dri: 67, def: 84, phy: 73 }
  },
  {
    id: "sime_vrsaljko_2018", name: "Šime Vrsaljko", position: "RB", rating: 81,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 54, pas: 64, dri: 70, def: 77, phy: 72 }
  },
  {
    id: "dejan_lovren_2018", name: "Dejan Lovren", position: "CB", rating: 82,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "domagoj_vida", name: "Domagoj Vida", position: "CB", rating: 81,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "ivan_strinic", name: "Ivan Strinić", position: "LB", rating: 78,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "marcelo_brozovic_2018", name: "Marcelo Brozović", position: "CDM", rating: 84,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 56, pas: 67, dri: 67, def: 83, phy: 76 }
  },
  {
    id: "ivan_rakitic_2018", name: "Ivan Rakitić", position: "CM", rating: 89,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 69, pas: 83, dri: 72, def: 68, phy: 76 }
  },
  {
    id: "luka_modric_2018", name: "Luka Modrić", position: "CM", rating: 94,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 73, pas: 89, dri: 82, def: 72, phy: 75 }
  },
  {
    id: "mateo_kovacic_2018", name: "Mateo Kovačić", position: "LM", rating: 84,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 79, sho: 63, pas: 70, dri: 76, def: 41, phy: 61 }
  },
  {
    id: "ivan_perisic_2018", name: "Ivan Perišić", position: "RW", rating: 86,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 79, sho: 76, pas: 65, dri: 83, def: 33, phy: 61 }
  },
  {
    id: "mario_mandzukic_2018", name: "Mario Mandžukić", position: "ST", rating: 86,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 81, pas: 61, dri: 71, def: 32, phy: 71 }
  },
  {
    id: "ante_rebic", name: "Ante Rebić", position: "LW", rating: 82,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 77, sho: 66, pas: 64, dri: 74, def: 36, phy: 61 }
  },
  {
    id: "jordan_pickford", name: "Jordan Pickford", position: "GK", rating: 83,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 27, pas: 61, dri: 67, def: 84, phy: 73 }
  },
  {
    id: "kyle_walker", name: "Kyle Walker", position: "RB", rating: 85,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 54, pas: 65, dri: 70, def: 75, phy: 77 }
  },
  {
    id: "john_stones", name: "John Stones", position: "CB", rating: 84,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "harry_maguire", name: "Harry Maguire", position: "CB", rating: 83,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "kieran_trippier", name: "Kieran Trippier", position: "LB", rating: 84,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 77, sho: 56, pas: 70, dri: 72, def: 76, phy: 75 }
  },
  {
    id: "ashley_young", name: "Ashley Young", position: "CB", rating: 80,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "jordan_henderson", name: "Jordan Henderson", position: "CM", rating: 84,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "jesse_lingard", name: "Jesse Lingard", position: "CM", rating: 81,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "dele_alli", name: "Dele Alli", position: "CAM", rating: 83,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 70, pas: 80, dri: 81, def: 37, phy: 62 }
  },
  {
    id: "raheem_sterling", name: "Raheem Sterling", position: "LW", rating: 85,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 83, sho: 75, pas: 67, dri: 74, def: 31, phy: 66 }
  },
  {
    id: "harry_kane", name: "Harry Kane", position: "ST", rating: 90,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 78, sho: 82, pas: 66, dri: 73, def: 32, phy: 72 }
  },
  {
    id: "marcus_rashford", name: "Marcus Rashford", position: "LW", rating: 82,
    country: "England", countryCode: "gb-eng", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 77, sho: 66, pas: 64, dri: 74, def: 36, phy: 61 }
  },
  {
    id: "hugo_lloris_2018", name: "Hugo Lloris", position: "GK", rating: 87,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 24, pas: 63, dri: 72, def: 90, phy: 74 }
  },
  {
    id: "benjamin_pavard", name: "Benjamin Pavard", position: "RB", rating: 82,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 57, pas: 68, dri: 68, def: 76, phy: 72 }
  },
  {
    id: "raphael_varane_2018", name: "Raphaël Varane", position: "CB", rating: 89,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 52, pas: 66, dri: 63, def: 92, phy: 83 }
  },
  {
    id: "samuel_umtiti", name: "Samuel Umtiti", position: "CB", rating: 86,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 47, pas: 61, dri: 67, def: 87, phy: 76 }
  },
  {
    id: "lucas_hernandez", name: "Lucas Hernandez", position: "LB", rating: 85,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 78, sho: 60, pas: 66, dri: 67, def: 81, phy: 76 }
  },
  {
    id: "n_golo_kante", name: "N'Golo Kanté", position: "CDM", rating: 92,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 70, pas: 81, dri: 72, def: 91, phy: 83 }
  },
  {
    id: "paul_pogba", name: "Paul Pogba", position: "CM", rating: 89,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 69, pas: 83, dri: 72, def: 68, phy: 76 }
  },
  {
    id: "blaise_matuidi", name: "Blaise Matuidi", position: "CAM", rating: 84,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 76, pas: 78, dri: 74, def: 42, phy: 64 }
  },
  {
    id: "kylian_mbappe_2018", name: "Kylian Mbappé", position: "LW", rating: 92,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 84, sho: 79, pas: 73, dri: 84, def: 36, phy: 73 }
  },
  {
    id: "olivier_giroud_2018", name: "Olivier Giroud", position: "ST", rating: 84,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 77, pas: 66, dri: 73, def: 33, phy: 71 }
  },
  {
    id: "antoine_griezmann_2018", name: "Antoine Griezmann", position: "LW", rating: 91,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 81, sho: 78, pas: 69, dri: 85, def: 36, phy: 65 }
  },
  {
    id: "ousmane_dembele_2018", name: "Ousmane Dembélé", position: "RW", rating: 83,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 75, pas: 63, dri: 80, def: 37, phy: 60 }
  },
  {
    id: "munir_el_kajoui", name: "Munir El Kajoui", position: "GK", rating: 80,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 63, sho: 24, pas: 61, dri: 61, def: 84, phy: 67 }
  },
  {
    id: "achraf_hakimi_2018", name: "Achraf Hakimi", position: "RB", rating: 81,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 73, sho: 54, pas: 64, dri: 70, def: 77, phy: 72 }
  },
  {
    id: "medhi_benatia", name: "Medhi Benatia", position: "CB", rating: 85,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 69, sho: 53, pas: 64, dri: 58, def: 85, phy: 81 }
  },
  {
    id: "romain_saiss_2018", name: "Romain Saïss", position: "CB", rating: 82,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "manuel_da_costa", name: "Manuel Da Costa", position: "LB", rating: 79,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 69, sho: 51, pas: 62, dri: 61, def: 71, phy: 64 }
  },
  {
    id: "nabil_dirar", name: "Nabil Dirar", position: "CM", rating: 80,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 68, sho: 67, pas: 75, dri: 69, def: 63, phy: 68 }
  },
  {
    id: "karim_el_ahmadi", name: "Karim El Ahmadi", position: "CM", rating: 81,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "younes_belhanda", name: "Younès Belhanda", position: "CAM", rating: 82,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 68, sho: 73, pas: 80, dri: 81, def: 37, phy: 60 }
  },
  {
    id: "hakim_ziyech_2018", name: "Hakim Ziyech", position: "RW", rating: 86,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 79, sho: 76, pas: 65, dri: 83, def: 33, phy: 61 }
  },
  {
    id: "khalid_boutaib", name: "Khalid Boutaïb", position: "ST", rating: 79,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 69, sho: 71, pas: 57, dri: 66, def: 28, phy: 69 }
  },
  {
    id: "youssef_en_nesyri_2018", name: "Youssef En-Nesyri", position: "LW", rating: 80,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 77, sho: 70, pas: 62, dri: 74, def: 30, phy: 62 }
  },
  {
    id: "nordin_amrabat", name: "Nordin Amrabat", position: "ST", rating: 82,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2018, era: "modern", emoji: "👨🏽",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "francis_uzoho", name: "Francis Uzoho", position: "GK", rating: 78,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 62, sho: 23, pas: 58, dri: 60, def: 74, phy: 69 }
  },
  {
    id: "leon_balogun", name: "Leon Balogun", position: "CB", rating: 80,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "william_troost_ekong", name: "William Troost-Ekong", position: "CB", rating: 82,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "bryan_idowu", name: "Bryan Idowu", position: "CB", rating: 78,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "victor_moses_2018", name: "Victor Moses", position: "RM", rating: 83,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 76, sho: 67, pas: 68, dri: 70, def: 44, phy: 62 }
  },
  {
    id: "wilfred_ndidi", name: "Wilfred Ndidi", position: "CM", rating: 84,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "john_obi_mikel_2018", name: "John Obi Mikel", position: "CDM", rating: 82,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 69, sho: 59, pas: 66, dri: 66, def: 78, phy: 78 }
  },
  {
    id: "oghenekaro_etebo", name: "Oghenekaro Etebo", position: "CAM", rating: 80,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 69, sho: 76, pas: 72, dri: 78, def: 43, phy: 62 }
  },
  {
    id: "alex_iwobi", name: "Alex Iwobi", position: "LM", rating: 81,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 73, sho: 61, pas: 68, dri: 67, def: 40, phy: 60 }
  },
  {
    id: "ahmed_musa_2018", name: "Ahmed Musa", position: "RW", rating: 84,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 79, sho: 75, pas: 66, dri: 80, def: 36, phy: 63 }
  },
  {
    id: "odion_ighalo", name: "Odion Ighalo", position: "ST", rating: 81,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "kelechi_iheanacho", name: "Kelechi Iheanacho", position: "LW", rating: 81,
    country: "Nigeria", countryCode: "ng", flag: "🇳🇬", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 72, sho: 73, pas: 65, dri: 71, def: 35, phy: 62 }
  },
  {
    id: "rui_patricio", name: "Rui Patrício", position: "GK", rating: 84,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 22, pas: 58, dri: 64, def: 87, phy: 74 }
  },
  {
    id: "cedric_soares", name: "Cédric Soares", position: "RB", rating: 80,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 54, pas: 65, dri: 66, def: 71, phy: 72 }
  },
  {
    id: "pepe_2018", name: "Pepe", position: "CB", rating: 85,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 53, pas: 64, dri: 58, def: 85, phy: 81 }
  },
  {
    id: "jose_fonte", name: "José Fonte", position: "CB", rating: 81,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "raphael_guerreiro_2018", name: "Raphaël Guerreiro", position: "LB", rating: 82,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 58, pas: 66, dri: 64, def: 74, phy: 69 }
  },
  {
    id: "william_carvalho_2018", name: "William Carvalho", position: "RM", rating: 83,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 67, pas: 68, dri: 70, def: 44, phy: 62 }
  },
  {
    id: "joao_moutinho", name: "João Moutinho", position: "CM", rating: 83,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "adrien_silva", name: "Adrien Silva", position: "CDM", rating: 79,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 53, pas: 62, dri: 61, def: 73, phy: 68 }
  },
  {
    id: "bernardo_silva_2018", name: "Bernardo Silva", position: "CAM", rating: 86,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 74, pas: 81, dri: 80, def: 43, phy: 66 }
  },
  {
    id: "joao_mario", name: "João Mário", position: "LM", rating: 80,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 62, pas: 67, dri: 71, def: 41, phy: 57 }
  },
  {
    id: "cristiano_ronaldo_2018", name: "Cristiano Ronaldo", position: "LW", rating: 94,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 90, sho: 76, pas: 72, dri: 82, def: 33, phy: 73 }
  },
  {
    id: "goncalo_guedes", name: "Gonçalo Guedes", position: "ST", rating: 80,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 78, pas: 62, dri: 66, def: 29, phy: 67 }
  },
  {
    id: "ricardo_quaresma", name: "Ricardo Quaresma", position: "LW", rating: 83,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 69, pas: 67, dri: 80, def: 29, phy: 67 }
  },
  {
    id: "khadim_n_diaye", name: "Khadim N'Diaye", position: "GK", rating: 79,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 64, sho: 25, pas: 52, dri: 65, def: 80, phy: 71 }
  },
  {
    id: "kalidou_koulibaly_2018", name: "Kalidou Koulibaly", position: "RB", rating: 86,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 82, sho: 60, pas: 70, dri: 66, def: 79, phy: 73 }
  },
  {
    id: "salif_sane", name: "Salif Sané", position: "CB", rating: 80,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "youssouf_sabaly_2018", name: "Youssouf Sabaly", position: "CB", rating: 80,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "moussa_wague", name: "Moussa Wagué", position: "LB", rating: 78,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "idrissa_gueye_2018", name: "Idrissa Gueye", position: "CM", rating: 85,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "alfred_n_diaye", name: "Alfred N'Diaye", position: "CM", rating: 79,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 60, sho: 63, pas: 70, dri: 66, def: 66, phy: 67 }
  },
  {
    id: "badou_ndiaye", name: "Badou Ndiaye", position: "CAM", rating: 80,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 69, sho: 76, pas: 72, dri: 78, def: 43, phy: 62 }
  },
  {
    id: "ismaila_sarr_2018", name: "Ismaïla Sarr", position: "RW", rating: 82,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 77, sho: 74, pas: 61, dri: 71, def: 36, phy: 63 }
  },
  {
    id: "sadio_mane", name: "Sadio Mané", position: "LW", rating: 88,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 84, sho: 79, pas: 71, dri: 84, def: 38, phy: 66 }
  },
  {
    id: "m_baye_niang", name: "M'Baye Niang", position: "LW", rating: 82,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 77, sho: 66, pas: 64, dri: 74, def: 36, phy: 61 }
  },
  {
    id: "moussa_konate", name: "Moussa Konaté", position: "ST", rating: 79,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2018, era: "modern", emoji: "👨🏿",
    stats: { pac: 69, sho: 71, pas: 57, dri: 66, def: 28, phy: 69 }
  },
  {
    id: "cho_hyun_woo", name: "Cho Hyun-woo", position: "GK", rating: 83,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 27, pas: 61, dri: 67, def: 84, phy: 73 }
  },
  {
    id: "lee_yong", name: "Lee Yong", position: "RB", rating: 79,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 50, pas: 63, dri: 60, def: 74, phy: 70 }
  },
  {
    id: "jang_hyun_soo", name: "Jang Hyun-soo", position: "CB", rating: 79,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "kim_young_gwon_2018", name: "Kim Young-gwon", position: "CB", rating: 82,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "hong_chul", name: "Hong Chul", position: "LB", rating: 79,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 51, pas: 62, dri: 61, def: 71, phy: 64 }
  },
  {
    id: "jung_woo_young_2018", name: "Jung Woo-young", position: "RM", rating: 80,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 66, pas: 65, dri: 69, def: 38, phy: 56 }
  },
  {
    id: "ki_sung_yueng_2018", name: "Ki Sung-yueng", position: "CM", rating: 84,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "lee_jae_sung_2018", name: "Lee Jae-sung", position: "CM", rating: 81,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "moon_seon_min", name: "Moon Seon-min", position: "LM", rating: 78,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 60, pas: 66, dri: 70, def: 36, phy: 60 }
  },
  {
    id: "hwang_hee_chan_2018", name: "Hwang Hee-chan", position: "RW", rating: 82,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 77, sho: 74, pas: 61, dri: 71, def: 36, phy: 63 }
  },
  {
    id: "son_heung_min_2018", name: "Son Heung-min", position: "ST", rating: 89,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 82, sho: 82, pas: 71, dri: 80, def: 32, phy: 71 }
  },
  {
    id: "kim_shin_wook", name: "Kim Shin-wook", position: "LW", rating: 79,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 71, pas: 60, dri: 74, def: 33, phy: 63 }
  },
  {
    id: "robin_olsen", name: "Robin Olsen", position: "GK", rating: 84,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 22, pas: 58, dri: 64, def: 87, phy: 74 }
  },
  {
    id: "mikael_lustig", name: "Mikael Lustig", position: "RB", rating: 80,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 54, pas: 65, dri: 66, def: 71, phy: 72 }
  },
  {
    id: "victor_lindelof", name: "Victor Lindelöf", position: "CB", rating: 84,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "andreas_granqvist", name: "Andreas Granqvist", position: "CB", rating: 84,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "ludwig_augustinsson", name: "Ludwig Augustinsson", position: "LB", rating: 81,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 52, pas: 62, dri: 62, def: 72, phy: 66 }
  },
  {
    id: "sebastian_larsson", name: "Sebastian Larsson", position: "RM", rating: 81,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 61, pas: 67, dri: 71, def: 43, phy: 60 }
  },
  {
    id: "albin_ekdal", name: "Albin Ekdal", position: "CM", rating: 80,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 67, pas: 75, dri: 69, def: 63, phy: 68 }
  },
  {
    id: "viktor_claesson", name: "Viktor Claesson", position: "CM", rating: 81,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "emil_forsberg", name: "Emil Forsberg", position: "LM", rating: 85,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 77, sho: 62, pas: 67, dri: 69, def: 47, phy: 63 }
  },
  {
    id: "ola_toivonen", name: "Ola Toivonen", position: "RW", rating: 80,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 69, pas: 67, dri: 74, def: 34, phy: 58 }
  },
  {
    id: "marcus_berg", name: "Marcus Berg", position: "ST", rating: 80,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 78, pas: 62, dri: 66, def: 29, phy: 67 }
  },
  {
    id: "john_guidetti", name: "John Guidetti", position: "LW", rating: 78,
    country: "Sweden", countryCode: "se", flag: "🇸🇪", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 71, pas: 62, dri: 75, def: 31, phy: 60 }
  },
  {
    id: "fernando_muslera_2018", name: "Fernando Muslera", position: "GK", rating: 85,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 23, pas: 62, dri: 69, def: 82, phy: 72 }
  },
  {
    id: "martin_caceres", name: "Martín Cáceres", position: "RB", rating: 83,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 80, sho: 58, pas: 65, dri: 68, def: 79, phy: 75 }
  },
  {
    id: "diego_godin_2018", name: "Diego Godín", position: "CB", rating: 88,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 50, pas: 67, dri: 63, def: 92, phy: 78 }
  },
  {
    id: "jose_maria_gimenez", name: "José María Giménez", position: "CB", rating: 85,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 53, pas: 64, dri: 58, def: 85, phy: 81 }
  },
  {
    id: "diego_laxalt", name: "Diego Laxalt", position: "LB", rating: 79,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 51, pas: 62, dri: 61, def: 71, phy: 64 }
  },
  {
    id: "nahitan_nandez", name: "Nahitan Nández", position: "RM", rating: 81,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 61, pas: 67, dri: 71, def: 43, phy: 60 }
  },
  {
    id: "matias_vecino", name: "Matías Vecino", position: "CM", rating: 81,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "rodrigo_bentancur", name: "Rodrigo Bentancur", position: "CM", rating: 83,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "lucas_torreira", name: "Lucas Torreira", position: "CDM", rating: 83,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 61, pas: 68, dri: 68, def: 77, phy: 79 }
  },
  {
    id: "luis_suarez_2018", name: "Luis Suárez", position: "RW", rating: 90,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 86, sho: 81, pas: 68, dri: 84, def: 40, phy: 72 }
  },
  {
    id: "edinson_cavani_2018", name: "Edinson Cavani", position: "ST", rating: 90,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 78, sho: 82, pas: 66, dri: 73, def: 32, phy: 72 }
  },
  {
    id: "cristhian_stuani", name: "Cristhian Stuani", position: "LW", rating: 78,
    country: "Uruguay", countryCode: "uy", flag: "🇺🇾", year: 2018, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 71, pas: 62, dri: 75, def: 31, phy: 60 }
  },

  // ──── 2020s ────
  {
    id: "emiliano_martinez", name: "Emiliano Martínez", position: "GK", rating: 88,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 28, pas: 66, dri: 71, def: 86, phy: 80 }
  },
  {
    id: "nahuel_molina", name: "Nahuel Molina", position: "RB", rating: 82,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 57, pas: 68, dri: 68, def: 76, phy: 72 }
  },
  {
    id: "cristian_romero", name: "Cristian Romero", position: "CB", rating: 85,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 53, pas: 64, dri: 58, def: 85, phy: 81 }
  },
  {
    id: "nicolas_otamendi", name: "Nicolás Otamendi", position: "CB", rating: 84,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 45, pas: 62, dri: 64, def: 84, phy: 80 }
  },
  {
    id: "nicolas_tagliafico", name: "Nicolás Tagliafico", position: "LB", rating: 82,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 58, pas: 66, dri: 64, def: 74, phy: 69 }
  },
  {
    id: "rodrigo_de_paul", name: "Rodrigo De Paul", position: "RM", rating: 86,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 78, sho: 68, pas: 72, dri: 77, def: 40, phy: 61 }
  },
  {
    id: "enzo_fernandez", name: "Enzo Fernández", position: "CM", rating: 86,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 74, pas: 75, dri: 73, def: 67, phy: 70 }
  },
  {
    id: "alexis_mac_allister", name: "Alexis Mac Allister", position: "CM", rating: 85,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "leandro_paredes", name: "Leandro Paredes", position: "LM", rating: 82,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 66, pas: 67, dri: 67, def: 46, phy: 59 }
  },
  {
    id: "lionel_messi_2022", name: "Lionel Messi", position: "RW", rating: 97,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 90, sho: 80, pas: 78, dri: 87, def: 36, phy: 76 }
  },
  {
    id: "julian_alvarez", name: "Julián Álvarez", position: "ST", rating: 86,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 81, pas: 61, dri: 71, def: 32, phy: 71 }
  },
  {
    id: "angel_di_maria_2022", name: "Ángel Di María", position: "RW", rating: 89,
    country: "Argentina", countryCode: "ar", flag: "🇦🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 85, sho: 73, pas: 71, dri: 81, def: 39, phy: 63 }
  },
  {
    id: "dominik_livakovic", name: "Dominik Livaković", position: "GK", rating: 86,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 24, pas: 60, dri: 67, def: 90, phy: 72 }
  },
  {
    id: "josip_juranovic", name: "Josip Juranović", position: "RB", rating: 82,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 57, pas: 68, dri: 68, def: 76, phy: 72 }
  },
  {
    id: "dejan_lovren_2022", name: "Dejan Lovren", position: "CB", rating: 81,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "josko_gvardiol", name: "Joško Gvardiol", position: "CB", rating: 86,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 47, pas: 61, dri: 67, def: 87, phy: 76 }
  },
  {
    id: "borna_sosa", name: "Borna Sosa", position: "LB", rating: 80,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 55, pas: 64, dri: 62, def: 74, phy: 64 }
  },
  {
    id: "marcelo_brozovic_2022", name: "Marcelo Brozović", position: "CDM", rating: 85,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 65, sho: 58, pas: 70, dri: 64, def: 83, phy: 74 }
  },
  {
    id: "luka_modric_2022", name: "Luka Modrić", position: "CM", rating: 92,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 72, pas: 81, dri: 75, def: 71, phy: 76 }
  },
  {
    id: "mateo_kovacic_2022", name: "Mateo Kovačić", position: "CM", rating: 86,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 74, pas: 75, dri: 73, def: 67, phy: 70 }
  },
  {
    id: "mario_pasalic", name: "Mario Pašalić", position: "LM", rating: 79,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 63, pas: 64, dri: 63, def: 45, phy: 62 }
  },
  {
    id: "andrej_kramaric", name: "Andrej Kramarić", position: "RW", rating: 83,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 75, pas: 63, dri: 80, def: 37, phy: 60 }
  },
  {
    id: "ivan_perisic_2022", name: "Ivan Perišić", position: "ST", rating: 85,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 60, dri: 70, def: 30, phy: 68 }
  },
  {
    id: "mislav_orsic", name: "Mislav Oršić", position: "LW", rating: 80,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 77, sho: 70, pas: 62, dri: 74, def: 30, phy: 62 }
  },
  {
    id: "bruno_petkovic", name: "Bruno Petković", position: "ST", rating: 78,
    country: "Croatia", countryCode: "hr", flag: "🇭🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 73, pas: 61, dri: 69, def: 29, phy: 66 }
  },
  {
    id: "hugo_lloris_2022", name: "Hugo Lloris", position: "GK", rating: 86,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 24, pas: 60, dri: 67, def: 90, phy: 72 }
  },
  {
    id: "jules_kounde", name: "Jules Koundé", position: "RB", rating: 85,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 54, pas: 65, dri: 70, def: 75, phy: 77 }
  },
  {
    id: "raphael_varane_2022", name: "Raphaël Varane", position: "CB", rating: 86,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 47, pas: 61, dri: 67, def: 87, phy: 76 }
  },
  {
    id: "dayot_upamecano", name: "Dayot Upamecano", position: "CB", rating: 83,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 48, pas: 67, dri: 64, def: 85, phy: 80 }
  },
  {
    id: "theo_hernandez", name: "Theo Hernandez", position: "LB", rating: 85,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 78, sho: 60, pas: 66, dri: 67, def: 81, phy: 76 }
  },
  {
    id: "aurelien_tchouameni", name: "Aurélien Tchouaméni", position: "CM", rating: 86,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 74, pas: 75, dri: 73, def: 67, phy: 70 }
  },
  {
    id: "adrien_rabiot", name: "Adrien Rabiot", position: "CM", rating: 84,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 72, pas: 81, dri: 76, def: 68, phy: 69 }
  },
  {
    id: "antoine_griezmann_2022", name: "Antoine Griezmann", position: "CAM", rating: 91,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 80, pas: 89, dri: 85, def: 46, phy: 69 }
  },
  {
    id: "ousmane_dembele_2022", name: "Ousmane Dembélé", position: "RW", rating: 85,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 79, sho: 71, pas: 72, dri: 77, def: 34, phy: 61 }
  },
  {
    id: "kylian_mbappe_2022", name: "Kylian Mbappé", position: "LW", rating: 96,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 86, sho: 85, pas: 75, dri: 87, def: 34, phy: 71 }
  },
  {
    id: "olivier_giroud_2022", name: "Olivier Giroud", position: "LW", rating: 85,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 83, sho: 75, pas: 67, dri: 74, def: 31, phy: 66 }
  },
  {
    id: "randal_kolo_muani", name: "Randal Kolo Muani", position: "ST", rating: 81,
    country: "France", countryCode: "fr", flag: "🇫🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "lawrence_ati_zigi", name: "Lawrence Ati-Zigi", position: "GK", rating: 79,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2022, era: "modern", emoji: "👨🏾",
    stats: { pac: 64, sho: 25, pas: 52, dri: 65, def: 80, phy: 71 }
  },
  {
    id: "daniel_amartey", name: "Daniel Amartey", position: "RB", rating: 80,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2022, era: "modern", emoji: "👨🏾",
    stats: { pac: 71, sho: 54, pas: 65, dri: 66, def: 71, phy: 72 }
  },
  {
    id: "mohammed_salisu", name: "Mohammed Salisu", position: "CB", rating: 81,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2022, era: "modern", emoji: "👨🏾",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "alexander_djiku", name: "Alexander Djiku", position: "CB", rating: 80,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2022, era: "modern", emoji: "👨🏾",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "baba_rahman", name: "Baba Rahman", position: "LB", rating: 79,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2022, era: "modern", emoji: "👨🏾",
    stats: { pac: 69, sho: 51, pas: 62, dri: 61, def: 71, phy: 64 }
  },
  {
    id: "tariq_lamptey", name: "Tariq Lamptey", position: "CB", rating: 80,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2022, era: "modern", emoji: "👨🏾",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "thomas_partey", name: "Thomas Partey", position: "CDM", rating: 86,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2022, era: "modern", emoji: "👨🏾",
    stats: { pac: 66, sho: 59, pas: 75, dri: 65, def: 78, phy: 81 }
  },
  {
    id: "salis_abdul_samed", name: "Salis Abdul Samed", position: "CM", rating: 79,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2022, era: "modern", emoji: "👨🏾",
    stats: { pac: 60, sho: 63, pas: 70, dri: 66, def: 66, phy: 67 }
  },
  {
    id: "mohammed_kudus", name: "Mohammed Kudus", position: "CAM", rating: 85,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2022, era: "modern", emoji: "👨🏾",
    stats: { pac: 72, sho: 78, pas: 82, dri: 76, def: 41, phy: 63 }
  },
  {
    id: "andre_ayew_2022", name: "André Ayew", position: "RW", rating: 81,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2022, era: "modern", emoji: "👨🏾",
    stats: { pac: 76, sho: 72, pas: 66, dri: 74, def: 35, phy: 63 }
  },
  {
    id: "jordan_ayew_2022", name: "Jordan Ayew", position: "ST", rating: 81,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2022, era: "modern", emoji: "👨🏾",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "inaki_williams", name: "Iñaki Williams", position: "LW", rating: 82,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2022, era: "modern", emoji: "👨🏾",
    stats: { pac: 77, sho: 66, pas: 64, dri: 74, def: 36, phy: 61 }
  },
  {
    id: "antoine_semenyo", name: "Antoine Semenyo", position: "ST", rating: 79,
    country: "Ghana", countryCode: "gh", flag: "🇬🇭", year: 2022, era: "modern", emoji: "👨🏾",
    stats: { pac: 69, sho: 71, pas: 57, dri: 66, def: 28, phy: 69 }
  },
  {
    id: "shuichi_gonda", name: "Shūichi Gonda", position: "GK", rating: 80,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 63, sho: 24, pas: 61, dri: 61, def: 84, phy: 67 }
  },
  {
    id: "miki_yamane", name: "Miki Yamane", position: "RB", rating: 78,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 55, pas: 61, dri: 65, def: 74, phy: 69 }
  },
  {
    id: "maya_yoshida", name: "Maya Yoshida", position: "CB", rating: 81,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "ko_itakura", name: "Kō Itakura", position: "CB", rating: 81,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "yuto_nagatomo_2022", name: "Yuto Nagatomo", position: "LB", rating: 79,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 51, pas: 62, dri: 61, def: 71, phy: 64 }
  },
  {
    id: "hiroki_ito", name: "Hiroki Ito", position: "CB", rating: 78,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "wataru_endo", name: "Wataru Endo", position: "CDM", rating: 84,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 56, pas: 67, dri: 67, def: 83, phy: 76 }
  },
  {
    id: "hidemasa_morita", name: "Hidemasa Morita", position: "CM", rating: 81,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "daichi_kamada", name: "Daichi Kamada", position: "CAM", rating: 84,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 76, pas: 78, dri: 74, def: 42, phy: 64 }
  },
  {
    id: "junya_ito", name: "Junya Ito", position: "RW", rating: 83,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 75, pas: 63, dri: 80, def: 37, phy: 60 }
  },
  {
    id: "ritsu_doan", name: "Ritsu Doan", position: "ST", rating: 82,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "takefusa_kubo", name: "Takefusa Kubo", position: "LW", rating: 82,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 77, sho: 66, pas: 64, dri: 74, def: 36, phy: 61 }
  },
  {
    id: "kaoru_mitoma", name: "Kaoru Mitoma", position: "LW", rating: 84,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 71, pas: 68, dri: 76, def: 32, phy: 59 }
  },
  {
    id: "daizen_maeda", name: "Daizen Maeda", position: "RW", rating: 78,
    country: "Japan", countryCode: "jp", flag: "🇯🇵", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 65, pas: 65, dri: 71, def: 29, phy: 56 }
  },
  {
    id: "yassine_bounou", name: "Yassine Bounou", position: "GK", rating: 87,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2022, era: "modern", emoji: "👨🏽",
    stats: { pac: 72, sho: 24, pas: 63, dri: 72, def: 90, phy: 74 }
  },
  {
    id: "achraf_hakimi_2022", name: "Achraf Hakimi", position: "RB", rating: 87,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2022, era: "modern", emoji: "👨🏽",
    stats: { pac: 78, sho: 59, pas: 69, dri: 75, def: 84, phy: 74 }
  },
  {
    id: "romain_saiss_2022", name: "Romain Saïss", position: "CB", rating: 81,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2022, era: "modern", emoji: "👨🏽",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "nayef_aguerd", name: "Nayef Aguerd", position: "CB", rating: 82,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2022, era: "modern", emoji: "👨🏽",
    stats: { pac: 63, sho: 47, pas: 58, dri: 61, def: 85, phy: 78 }
  },
  {
    id: "noussair_mazraoui", name: "Noussair Mazraoui", position: "LB", rating: 82,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2022, era: "modern", emoji: "👨🏽",
    stats: { pac: 74, sho: 58, pas: 66, dri: 64, def: 74, phy: 69 }
  },
  {
    id: "sofyan_amrabat", name: "Sofyan Amrabat", position: "CM", rating: 86,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2022, era: "modern", emoji: "👨🏽",
    stats: { pac: 69, sho: 74, pas: 75, dri: 73, def: 67, phy: 70 }
  },
  {
    id: "azzedine_ounahi", name: "Azzedine Ounahi", position: "CM", rating: 82,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2022, era: "modern", emoji: "👨🏽",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "selim_amallah", name: "Selim Amallah", position: "CAM", rating: 78,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2022, era: "modern", emoji: "👨🏽",
    stats: { pac: 68, sho: 73, pas: 73, dri: 71, def: 35, phy: 63 }
  },
  {
    id: "hakim_ziyech_2022", name: "Hakim Ziyech", position: "RW", rating: 85,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2022, era: "modern", emoji: "👨🏽",
    stats: { pac: 79, sho: 71, pas: 72, dri: 77, def: 34, phy: 61 }
  },
  {
    id: "youssef_en_nesyri_2022", name: "Youssef En-Nesyri", position: "ST", rating: 81,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2022, era: "modern", emoji: "👨🏽",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "sofiane_boufal", name: "Sofiane Boufal", position: "LW", rating: 81,
    country: "Morocco", countryCode: "ma", flag: "🇲🇦", year: 2022, era: "modern", emoji: "👨🏽",
    stats: { pac: 72, sho: 73, pas: 65, dri: 71, def: 35, phy: 62 }
  },
  {
    id: "wojciech_szczesny", name: "Wojciech Szczęsny", position: "GK", rating: 87,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 24, pas: 63, dri: 72, def: 90, phy: 74 }
  },
  {
    id: "matty_cash", name: "Matty Cash", position: "RB", rating: 80,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 54, pas: 65, dri: 66, def: 71, phy: 72 }
  },
  {
    id: "kamil_glik", name: "Kamil Glik", position: "CB", rating: 80,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "jakub_kiwior", name: "Jakub Kiwior", position: "CB", rating: 79,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "bartosz_bereszynski", name: "Bartosz Bereszyński", position: "LB", rating: 78,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 54, pas: 65, dri: 67, def: 67, phy: 66 }
  },
  {
    id: "grzegorz_krychowiak", name: "Grzegorz Krychowiak", position: "RM", rating: 80,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 66, pas: 65, dri: 69, def: 38, phy: 56 }
  },
  {
    id: "krystian_bielik", name: "Krystian Bielik", position: "CM", rating: 77,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 61, sho: 64, pas: 67, dri: 64, def: 61, phy: 67 }
  },
  {
    id: "piotr_zielinski", name: "Piotr Zieliński", position: "CDM", rating: 84,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 56, pas: 67, dri: 67, def: 83, phy: 76 }
  },
  {
    id: "sebastian_szymanski", name: "Sebastian Szymański", position: "CAM", rating: 78,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 73, pas: 73, dri: 71, def: 35, phy: 63 }
  },
  {
    id: "przemysaw_frankowski", name: "Przemysław Frankowski", position: "LM", rating: 78,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 60, pas: 66, dri: 70, def: 36, phy: 60 }
  },
  {
    id: "robert_lewandowski", name: "Robert Lewandowski", position: "RW", rating: 89,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 85, sho: 73, pas: 71, dri: 81, def: 39, phy: 63 }
  },
  {
    id: "arkadiusz_milik", name: "Arkadiusz Milik", position: "ST", rating: 81,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "karol_swiderski", name: "Karol Świderski", position: "LW", rating: 78,
    country: "Poland", countryCode: "pl", flag: "🇵🇱", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 71, pas: 62, dri: 75, def: 31, phy: 60 }
  },
  {
    id: "diogo_costa", name: "Diogo Costa", position: "GK", rating: 84,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 22, pas: 58, dri: 64, def: 87, phy: 74 }
  },
  {
    id: "joao_cancelo", name: "João Cancelo", position: "RB", rating: 87,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 78, sho: 59, pas: 69, dri: 75, def: 84, phy: 74 }
  },
  {
    id: "ruben_dias", name: "Rúben Dias", position: "CB", rating: 88,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 50, pas: 67, dri: 63, def: 92, phy: 78 }
  },
  {
    id: "pepe_2022", name: "Pepe", position: "CB", rating: 85,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 53, pas: 64, dri: 58, def: 85, phy: 81 }
  },
  {
    id: "raphael_guerreiro_2022", name: "Raphaël Guerreiro", position: "LB", rating: 83,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 78, sho: 55, pas: 66, dri: 72, def: 80, phy: 71 }
  },
  {
    id: "william_carvalho_2022", name: "William Carvalho", position: "RM", rating: 83,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 67, pas: 68, dri: 70, def: 44, phy: 62 }
  },
  {
    id: "bruno_fernandes", name: "Bruno Fernandes", position: "CM", rating: 89,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 69, pas: 83, dri: 72, def: 68, phy: 76 }
  },
  {
    id: "bernardo_silva_2022", name: "Bernardo Silva", position: "CM", rating: 89,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 69, pas: 83, dri: 72, def: 68, phy: 76 }
  },
  {
    id: "otavio", name: "Otávio", position: "LM", rating: 80,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 62, pas: 67, dri: 71, def: 41, phy: 57 }
  },
  {
    id: "cristiano_ronaldo_2022", name: "Cristiano Ronaldo", position: "LW", rating: 88,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 84, sho: 79, pas: 71, dri: 84, def: 38, phy: 66 }
  },
  {
    id: "joao_felix", name: "João Félix", position: "ST", rating: 84,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 77, pas: 66, dri: 73, def: 33, phy: 71 }
  },
  {
    id: "rafael_leao", name: "Rafael Leão", position: "LW", rating: 84,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 71, pas: 68, dri: 76, def: 32, phy: 59 }
  },
  {
    id: "goncalo_ramos", name: "Gonçalo Ramos", position: "ST", rating: 82,
    country: "Portugal", countryCode: "pt", flag: "🇵🇹", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 71, sho: 75, pas: 64, dri: 70, def: 34, phy: 65 }
  },
  {
    id: "edouard_mendy", name: "Édouard Mendy", position: "GK", rating: 85,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2022, era: "modern", emoji: "👨🏿",
    stats: { pac: 69, sho: 23, pas: 62, dri: 69, def: 82, phy: 72 }
  },
  {
    id: "kalidou_koulibaly_2022", name: "Kalidou Koulibaly", position: "RB", rating: 87,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2022, era: "modern", emoji: "👨🏿",
    stats: { pac: 78, sho: 59, pas: 69, dri: 75, def: 84, phy: 74 }
  },
  {
    id: "abdou_diallo", name: "Abdou Diallo", position: "CB", rating: 81,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2022, era: "modern", emoji: "👨🏿",
    stats: { pac: 60, sho: 45, pas: 58, dri: 61, def: 79, phy: 79 }
  },
  {
    id: "ismail_jakobs", name: "Ismail Jakobs", position: "CB", rating: 78,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2022, era: "modern", emoji: "👨🏿",
    stats: { pac: 63, sho: 47, pas: 62, dri: 56, def: 82, phy: 76 }
  },
  {
    id: "youssouf_sabaly_2022", name: "Youssouf Sabaly", position: "LB", rating: 79,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2022, era: "modern", emoji: "👨🏿",
    stats: { pac: 69, sho: 51, pas: 62, dri: 61, def: 71, phy: 64 }
  },
  {
    id: "idrissa_gueye_2022", name: "Idrissa Gueye", position: "CM", rating: 85,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2022, era: "modern", emoji: "👨🏿",
    stats: { pac: 66, sho: 72, pas: 80, dri: 69, def: 68, phy: 69 }
  },
  {
    id: "nampalys_mendy", name: "Nampalys Mendy", position: "CM", rating: 79,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2022, era: "modern", emoji: "👨🏿",
    stats: { pac: 60, sho: 63, pas: 70, dri: 66, def: 66, phy: 67 }
  },
  {
    id: "pathe_ciss", name: "Pathé Ciss", position: "CAM", rating: 77,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2022, era: "modern", emoji: "👨🏿",
    stats: { pac: 60, sho: 70, pas: 75, dri: 72, def: 40, phy: 59 }
  },
  {
    id: "krepin_diatta", name: "Krépin Diatta", position: "RW", rating: 79,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2022, era: "modern", emoji: "👨🏿",
    stats: { pac: 75, sho: 71, pas: 60, dri: 71, def: 33, phy: 57 }
  },
  {
    id: "ismaila_sarr_2022", name: "Ismaïla Sarr", position: "ST", rating: 83,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2022, era: "modern", emoji: "👨🏿",
    stats: { pac: 73, sho: 80, pas: 64, dri: 71, def: 35, phy: 72 }
  },
  {
    id: "boulaye_dia", name: "Boulaye Dia", position: "LW", rating: 81,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2022, era: "modern", emoji: "👨🏿",
    stats: { pac: 72, sho: 73, pas: 65, dri: 71, def: 35, phy: 62 }
  },
  {
    id: "iliman_ndiaye", name: "Iliman Ndiaye", position: "ST", rating: 79,
    country: "Senegal", countryCode: "sn", flag: "🇸🇳", year: 2022, era: "modern", emoji: "👨🏿",
    stats: { pac: 69, sho: 71, pas: 57, dri: 66, def: 28, phy: 69 }
  },
  {
    id: "kim_seung_gyu", name: "Kim Seung-gyu", position: "GK", rating: 80,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 63, sho: 24, pas: 61, dri: 61, def: 84, phy: 67 }
  },
  {
    id: "kim_moon_hwan", name: "Kim Moon-hwan", position: "RB", rating: 78,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 55, pas: 61, dri: 65, def: 74, phy: 69 }
  },
  {
    id: "kim_min_jae", name: "Kim Min-jae", position: "CB", rating: 86,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 47, pas: 61, dri: 67, def: 87, phy: 76 }
  },
  {
    id: "kim_young_gwon_2022", name: "Kim Young-gwon", position: "CB", rating: 80,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "kim_jin_su", name: "Kim Jin-su", position: "LB", rating: 79,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 51, pas: 62, dri: 61, def: 71, phy: 64 }
  },
  {
    id: "jung_woo_young_2022", name: "Jung Woo-young", position: "CM", rating: 78,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 65, pas: 70, dri: 66, def: 63, phy: 66 }
  },
  {
    id: "hwang_in_beom", name: "Hwang In-beom", position: "CM", rating: 82,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 64, sho: 65, pas: 75, dri: 69, def: 61, phy: 71 }
  },
  {
    id: "lee_jae_sung_2022", name: "Lee Jae-sung", position: "CAM", rating: 80,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 69, sho: 76, pas: 72, dri: 78, def: 43, phy: 62 }
  },
  {
    id: "son_heung_min_2022", name: "Son Heung-min", position: "RW", rating: 89,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 85, sho: 73, pas: 71, dri: 81, def: 39, phy: 63 }
  },
  {
    id: "hwang_hee_chan_2022", name: "Hwang Hee-chan", position: "ST", rating: 83,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 80, pas: 64, dri: 71, def: 35, phy: 72 }
  },
  {
    id: "cho_gue_sung", name: "Cho Gue-sung", position: "LW", rating: 81,
    country: "South Korea", countryCode: "kr", flag: "🇰🇷", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 72, sho: 73, pas: 65, dri: 71, def: 35, phy: 62 }
  },
  {
    id: "matt_turner", name: "Matt Turner", position: "GK", rating: 81,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 66, sho: 26, pas: 61, dri: 62, def: 83, phy: 73 }
  },
  {
    id: "sergino_dest", name: "Sergiño Dest", position: "RB", rating: 81,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 73, sho: 54, pas: 64, dri: 70, def: 77, phy: 72 }
  },
  {
    id: "walker_zimmerman", name: "Walker Zimmerman", position: "CB", rating: 79,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 60, sho: 43, pas: 56, dri: 62, def: 77, phy: 71 }
  },
  {
    id: "tim_ream", name: "Tim Ream", position: "CB", rating: 80,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 48, pas: 60, dri: 60, def: 84, phy: 71 }
  },
  {
    id: "antonee_robinson", name: "Antonee Robinson", position: "LB", rating: 81,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 75, sho: 52, pas: 62, dri: 62, def: 72, phy: 66 }
  },
  {
    id: "tyler_adams", name: "Tyler Adams", position: "CDM", rating: 83,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 61, pas: 68, dri: 68, def: 77, phy: 79 }
  },
  {
    id: "weston_mckennie", name: "Weston McKennie", position: "CM", rating: 83,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 62, sho: 68, pas: 72, dri: 71, def: 66, phy: 66 }
  },
  {
    id: "yunus_musah", name: "Yunus Musah", position: "CM", rating: 81,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 68, sho: 68, pas: 76, dri: 72, def: 64, phy: 62 }
  },
  {
    id: "christian_pulisic", name: "Christian Pulisic", position: "RW", rating: 85,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 79, sho: 71, pas: 72, dri: 77, def: 34, phy: 61 }
  },
  {
    id: "tim_weah", name: "Tim Weah", position: "ST", rating: 81,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 74, sho: 81, pas: 64, dri: 68, def: 30, phy: 72 }
  },
  {
    id: "josh_sargent", name: "Josh Sargent", position: "LW", rating: 79,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 76, sho: 71, pas: 60, dri: 74, def: 33, phy: 63 }
  },
  {
    id: "brenden_aaronson", name: "Brenden Aaronson", position: "LM", rating: 79,
    country: "United States", countryCode: "us", flag: "🇺🇸", year: 2022, era: "modern", emoji: "👨🏻",
    stats: { pac: 70, sho: 63, pas: 64, dri: 63, def: 45, phy: 62 }
  }
];

// Helper to determine eligible positions for a draft slot to avoid completely unrelated offers
export function getEligiblePositionsForSlot(slotPos) {
  const gkPositions = ["GK"];
  const defPositions = ["CB", "LB", "RB", "LWB", "RWB"];
  const midPositions = ["CM", "CDM", "CAM", "LM", "RM", "LDM", "RDM", "LCM", "RCM"];
  const attPositions = ["ST", "CF", "LW", "RW", "LS", "RS", "LAM", "RAM"];

  if (slotPos === "GK") return gkPositions;
  
  if (["CB", "LCB", "RCB"].includes(slotPos)) {
    return [...defPositions, "CDM", "CM"];
  }
  
  if (["LB", "RB", "LWB", "RWB"].includes(slotPos)) {
    return [...defPositions, "LM", "RM", "CM"];
  }
  
  if (["CM", "LCM", "RCM", "LDM", "RDM", "CAM", "LAM", "RAM", "LM", "RM", "CDM"].includes(slotPos)) {
    return [...midPositions, "LW", "RW", "CF", "ST"];
  }
  
  if (["LW", "RW", "ST", "LS", "RS", "CF"].includes(slotPos)) {
    return [...attPositions, "CAM", "LM", "RM"];
  }
  
  return [];
}

// Helper to get base position (normalizes specific roles like LCM/RCM to CM)
export function getBasePosition(pos) {
  if (!pos) return "";
  if (["CB", "LCB", "RCB"].includes(pos)) return "CB";
  if (["CM", "LCM", "RCM"].includes(pos)) return "CM";
  if (["CDM", "LDM", "RDM"].includes(pos)) return "CDM";
  if (["CAM", "LAM", "RAM"].includes(pos)) return "CAM";
  if (["ST", "CF", "LS", "RS"].includes(pos)) return "ST";
  if (["LB", "LWB"].includes(pos)) return "LB";
  if (["RB", "RWB"].includes(pos)) return "RB";
  return pos;
}

// Helper to check position matching for chemistry calculations
// Returns true if the player can play the role without penalty
export function isPositionCompatible(slotPos, playerPos) {
  if (slotPos === playerPos) return true;

  const baseSlot = getBasePosition(slotPos);
  const basePlayer = getBasePosition(playerPos);
  if (baseSlot === basePlayer) return true;
  
  // Mapping compatibility
  const compat = {
    "GK":  ["GK"],
    "CB":  ["CB", "LCB", "RCB"],
    "LCB": ["CB", "LCB", "RCB", "LB"],
    "RCB": ["CB", "LCB", "RCB", "RB"],
    "LB":  ["LB", "LWB", "LM"],
    "RB":  ["RB", "RWB", "RM"],
    "LWB": ["LB", "LWB", "LM"],
    "RWB": ["RB", "RWB", "RM"],
    "CDM": ["CDM", "CM", "CB"],
    "CM":  ["CM", "CDM", "CAM"],
    "LCM": ["CM", "LM", "CAM"],
    "RCM": ["CM", "RM", "CAM"],
    "LDM": ["CDM", "CM"],
    "RDM": ["CDM", "CM"],
    "CAM": ["CAM", "CF", "CM"],
    "LAM": ["CAM", "LM", "LW"],
    "RAM": ["CAM", "RM", "RW"],
    "LM":  ["LM", "LW", "CM"],
    "RM":  ["RM", "RW", "CM"],
    "LW":  ["LW", "LM", "ST"],
    "RW":  ["RW", "RM", "ST"],
    "ST":  ["ST", "CF"],
    "LS":  ["ST", "CF"],
    "RS":  ["ST", "CF"]
  };

  return compat[slotPos] ? compat[slotPos].includes(playerPos) : false;
}

export function getPlayersForCpuTeam(teamName) {
  if (!teamName) return [];
  const parts = teamName.split(' ');
  const countryNameTR = parts.slice(0, -1).join(' ');
  const year = parseInt(parts[parts.length - 1], 10);
  
  const trToEn = {
    "Brezilya": "Brazil",
    "Fransa": "France",
    "Arjantin": "Argentina",
    "İspanya": "Spain",
    "Almanya": "Germany",
    "İtalya": "Italy",
    "Hollanda": "Netherlands",
    "Uruguay": "Uruguay",
    "İngiltere": "England",
    "Portekiz": "Portugal",
    "Türkiye": "Turkey",
    "Hırvatistan": "Croatia",
    "Macaristan": "Hungary",
    "Belçika": "Belgium",
    "Fas": "Morocco",
    "Japonya": "Japan",
    "İsveç": "Sweden",
    "Bulgaristan": "Bulgaria",
    "Senegal": "Senegal",
    "G. Kore": "South Korea",
    "Sovyetler Birliği": "Soviet Union"
  };
  
  const countryEn = trToEn[countryNameTR] || countryNameTR;
  
  return playersDatabase.filter(p => p.country === countryEn && p.year === year);
}
