"""
7a0 Veritabanı Dönüştürücü
==========================
GitHub'daki seven-zero repo'sundan SQUADS verisini çeker,
bizim data.js formatına (id, name, position, rating, country, countryCode, flag, year, era, emoji, stats)
dönüştürür ve çıktı olarak JS dosyası üretir.
"""

import urllib.request
import re
import json
import unicodedata
import os

# ─── CONFIG ───────────────────────────────────────────────────
RAW_URL = "https://raw.githubusercontent.com/anthonyencodeclub/seven-zero/main/src/data.js"
OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "generated_players.js")

# ─── COUNTRY CODE MAP ────────────────────────────────────────
COUNTRY_CODES = {
    "Uruguay": ("uy", "🇺🇾", "👨🏻"),
    "Austria": ("at", "🇦🇹", "👨🏻"),
    "Hungary": ("hu", "🇭🇺", "👨🏻"),
    "West Germany": ("de", "🇩🇪", "👱🏼"),
    "Germany": ("de", "🇩🇪", "👱🏼"),
    "Brazil": ("br", "🇧🇷", "👨🏽"),
    "Soviet Union": ("ru", "🇷🇺", "👨🏻"),
    "Sweden": ("se", "🇸🇪", "👨🏻"),
    "Chile": ("cl", "🇨🇱", "👨🏽"),
    "England": ("gb-eng", "🏴\U000E0067\U000E0062\U000E0065\U000E006E\U000E0067\U000E007F", "👨🏻"),
    "Portugal": ("pt", "🇵🇹", "👨🏻"),
    "Italy": ("it", "🇮🇹", "👨🏻"),
    "Peru": ("pe", "🇵🇪", "👨🏽"),
    "Netherlands": ("nl", "🇳🇱", "👱🏼"),
    "Poland": ("pl", "🇵🇱", "👨🏻"),
    "Scotland": ("gb-sct", "🏴\U000E0067\U000E0062\U000E0073\U000E0063\U000E0074\U000E007F", "👨🏻"),
    "Argentina": ("ar", "🇦🇷", "👨🏻"),
    "Algeria": ("dz", "🇩🇿", "👨🏻"),
    "Cameroon": ("cm", "🇨🇲", "👨🏾"),
    "France": ("fr", "🇫🇷", "👨🏻"),
    "Northern Ireland": ("gb-nir", "🇬🇧", "👨🏻"),
    "Belgium": ("be", "🇧🇪", "👨🏻"),
    "Denmark": ("dk", "🇩🇰", "👱🏼"),
    "Mexico": ("mx", "🇲🇽", "👨🏽"),
    "Morocco": ("ma", "🇲🇦", "👨🏽"),
    "Spain": ("es", "🇪🇸", "👨🏻"),
    "Colombia": ("co", "🇨🇴", "👨🏽"),
    "Croatia": ("hr", "🇭🇷", "👨🏻"),
    "Nigeria": ("ng", "🇳🇬", "👨🏿"),
    "Romania": ("ro", "🇷🇴", "👨🏻"),
    "Saudi Arabia": ("sa", "🇸🇦", "👨🏽"),
    "Bulgaria": ("bg", "🇧🇬", "👨🏻"),
    "Ireland": ("ie", "🇮🇪", "👨🏻"),
    "South Korea": ("kr", "🇰🇷", "👨🏻"),
    "Japan": ("jp", "🇯🇵", "👨🏻"),
    "Senegal": ("sn", "🇸🇳", "👨🏿"),
    "Turkey": ("tr", "🇹🇷", "👨🏻"),
    "Türkiye": ("tr", "🇹🇷", "👨🏻"),
    "United States": ("us", "🇺🇸", "👨🏻"),
    "Ghana": ("gh", "🇬🇭", "👨🏾"),
    "Paraguay": ("py", "🇵🇾", "👨🏽"),
    "Costa Rica": ("cr", "🇨🇷", "👨🏽"),
    "Ecuador": ("ec", "🇪🇨", "👨🏽"),
    "Australia": ("au", "🇦🇺", "👨🏻"),
    "Ivory Coast": ("ci", "🇨🇮", "👨🏿"),
    "Serbia": ("rs", "🇷🇸", "👨🏻"),
    "South Africa": ("za", "🇿🇦", "👨🏾"),
    "North Korea": ("kp", "🇰🇵", "👨🏻"),
    "Switzerland": ("ch", "🇨🇭", "👨🏻"),
    "Wales": ("gb-wls", "🏴\U000E0067\U000E0062\U000E0077\U000E006C\U000E0073\U000E007F", "👨🏻"),
    "Tunisia": ("tn", "🇹🇳", "👨🏽"),
    "Czechoslovakia": ("cz", "🇨🇿", "👨🏻"),
    "Yugoslavia": ("rs", "🇷🇸", "👨🏻"),
    "Iran": ("ir", "🇮🇷", "👨🏽"),
    "Canada": ("ca", "🇨🇦", "👨🏻"),
    "Liberia": ("lr", "🇱🇷", "👨🏿"),
    "Greece": ("gr", "🇬🇷", "👨🏻"),
    "Cuba": ("cu", "🇨🇺", "👨🏽"),
}

# ─── POSITION MAPPING ────────────────────────────────────────
# 7a0 uses: GK, RB, LB, CB, DM, CM, AM, RM, LM, RW, LW, ST
# Our format: GK, CB, LB, RB, CDM, CM, CAM, LM, RM, LW, RW, ST, CF
POS_MAP = {
    "GK": "GK",
    "CB": "CB",
    "RB": "RB",
    "LB": "LB",
    "DM": "CDM",
    "CM": "CM",
    "AM": "CAM",
    "RM": "RM",
    "LM": "LM",
    "RW": "RW",
    "LW": "LW",
    "ST": "ST",
    "CF": "CF",
}


def slugify(name):
    """Convert player name to snake_case id."""
    # Normalize unicode (é -> e, ü -> u, etc.)
    nfkd = unicodedata.normalize('NFKD', name)
    ascii_str = nfkd.encode('ASCII', 'ignore').decode('ASCII')
    # Lowercase, replace spaces/hyphens with underscore
    slug = re.sub(r'[^a-z0-9]+', '_', ascii_str.lower()).strip('_')
    return slug


def generate_stats(position, rating):
    """Generate 6 face-card stats based on position category and overall rating."""
    # Base ratios per position group (pac, sho, pas, dri, def, phy) as fractions of rating
    profiles = {
        "GK":  (0.84, 0.30, 0.72, 0.82, 1.00, 0.88),
        "CB":  (0.80, 0.58, 0.76, 0.74, 1.00, 0.94),
        "RB":  (0.92, 0.66, 0.82, 0.82, 0.92, 0.86),
        "LB":  (0.92, 0.66, 0.82, 0.82, 0.92, 0.86),
        "CDM": (0.80, 0.72, 0.84, 0.80, 0.96, 0.92),
        "CM":  (0.80, 0.82, 0.92, 0.86, 0.80, 0.82),
        "CAM": (0.84, 0.90, 0.94, 0.94, 0.50, 0.76),
        "RM":  (0.90, 0.78, 0.82, 0.86, 0.52, 0.76),
        "LM":  (0.90, 0.78, 0.82, 0.86, 0.52, 0.76),
        "RW":  (0.94, 0.86, 0.80, 0.92, 0.40, 0.76),
        "LW":  (0.94, 0.86, 0.80, 0.92, 0.40, 0.76),
        "ST":  (0.88, 0.96, 0.76, 0.86, 0.40, 0.84),
        "CF":  (0.86, 0.92, 0.86, 0.90, 0.44, 0.78),
    }
    ratios = profiles.get(position, profiles["CM"])
    
    import random
    random.seed(hash(f"{position}_{rating}"))
    
    stats = {}
    keys = ["pac", "sho", "pas", "dri", "def", "phy"]
    for i, key in enumerate(keys):
        base = int(rating * ratios[i])
        jitter = random.randint(-4, 4)
        val = max(20, min(99, base + jitter))
        stats[key] = val
    return stats


def parse_squads_js(js_text):
    """Parse the SQUADS=[ ... ] array from the JS source."""
    # Find the SQUADS array
    match = re.search(r'const SQUADS\s*=\s*\[', js_text)
    if not match:
        print("ERROR: Could not find SQUADS array in source")
        return []
    
    start = match.end() - 1  # include the [
    
    # Now we need to find matching ] — but there are nested arrays
    depth = 0
    end = start
    for i in range(start, len(js_text)):
        if js_text[i] == '[':
            depth += 1
        elif js_text[i] == ']':
            depth -= 1
            if depth == 0:
                end = i + 1
                break
    
    arr_text = js_text[start:end]
    
    # Convert JS object notation to valid JSON
    # Replace single quotes with double quotes (if any)
    # Add quotes around property names: t: -> "t":
    arr_text = re.sub(r'([{,])\s*(\w+)\s*:', r'\1"\2":', arr_text)
    # Handle trailing commas before ] or }
    arr_text = re.sub(r',\s*([}\]])', r'\1', arr_text)
    
    try:
        squads = json.loads(arr_text)
        return squads
    except json.JSONDecodeError as e:
        print(f"JSON parse error: {e}")
        # Try line by line approach
        return parse_squads_regex(js_text)


def parse_squads_regex(js_text):
    """Fallback: parse squads using regex line by line."""
    squads = []
    # Match each squad object
    squad_pattern = re.compile(
        r'\{[^}]*"?t"?\s*:\s*"([^"]+)"[^}]*"?y"?\s*:\s*(\d+)[^}]*"?f"?\s*:\s*"([^"]+)"[^}]*"?l"?\s*:\s*"([^"]*)"[^}]*"?p"?\s*:\s*\[(.*?)\]\s*\}',
        re.DOTALL
    )
    
    for m in squad_pattern.finditer(js_text):
        team = m.group(1)
        year = int(m.group(2))
        flag = m.group(3)
        players_str = m.group(5)
        
        players = []
        # Match each player array: ["Name","POS",rating,"SpecificPos"]
        player_pattern = re.compile(r'\["([^"]+)"\s*,\s*"([^"]+)"\s*,\s*(\d+)\s*,\s*"([^"]+)"\s*\]')
        for pm in player_pattern.finditer(players_str):
            players.append([pm.group(1), pm.group(2), int(pm.group(3)), pm.group(4)])
        
        squads.append({
            "t": team,
            "y": year,
            "f": flag,
            "l": m.group(4),
            "p": players
        })
    
    return squads


def convert_squad_to_players(squad):
    """Convert a single squad dict to a list of player dicts in our format."""
    team_name = squad["t"]
    year = squad["y"]
    flag = squad["f"]
    era = "retro" if year < 2000 else "modern"
    
    cc_info = COUNTRY_CODES.get(team_name)
    if not cc_info:
        print(f"  WARNING: No country code mapping for '{team_name}', skipping")
        return []
    
    country_code, country_flag, default_emoji = cc_info
    
    # Use the actual country name (normalize West Germany -> Germany for our DB)
    country_display = team_name
    if team_name == "West Germany":
        country_display = "Germany"
    
    players = []
    for p in squad["p"]:
        if len(p) < 4:
            continue
        name, pos_group, rating, specific_pos = p[0], p[1], p[2], p[3]
        
        # Map position
        position = POS_MAP.get(specific_pos, specific_pos)
        
        # Generate id
        base_id = slugify(name)
        
        # Generate stats
        stats = generate_stats(position, rating)
        
        player = {
            "id": base_id,
            "name": name,
            "position": position,
            "rating": rating,
            "country": country_display,
            "countryCode": country_code,
            "flag": country_flag,
            "year": year,
            "era": era,
            "emoji": default_emoji,
            "stats": stats,
        }
        players.append(player)
    
    return players


def deduplicate_players(all_players):
    """
    Deduplicate: if same player appears in multiple squads,
    keep all versions but give them unique IDs with year suffix.
    """
    id_counts = {}
    for p in all_players:
        base = p["id"]
        id_counts[base] = id_counts.get(base, 0) + 1
    
    # For duplicate IDs, append year
    id_seen = {}
    for p in all_players:
        base = p["id"]
        if id_counts[base] > 1:
            p["id"] = f"{base}_{p['year']}"
        
        # Still might collide (same player, same year in multiple squads somehow)
        if p["id"] in id_seen:
            p["id"] = f"{p['id']}_{id_seen[p['id']]}"
        id_seen[p["id"]] = id_seen.get(p["id"], 0) + 1
    
    return all_players


def format_player_js(p):
    """Format a single player dict as a JS object string."""
    s = p["stats"]
    # Escape quotes in name
    name = p["name"].replace('"', '\\"')
    return (
        f'  {{\n'
        f'    id: "{p["id"]}", name: "{name}", position: "{p["position"]}", rating: {p["rating"]},\n'
        f'    country: "{p["country"]}", countryCode: "{p["countryCode"]}", flag: "{p["flag"]}", '
        f'year: {p["year"]}, era: "{p["era"]}", emoji: "{p["emoji"]}",\n'
        f'    stats: {{ pac: {s["pac"]}, sho: {s["sho"]}, pas: {s["pas"]}, '
        f'dri: {s["dri"]}, def: {s["def"]}, phy: {s["phy"]} }}\n'
        f'  }}'
    )


def main():
    print("=" * 60)
    print("7a0 Veritabanı Dönüştürücü")
    print("=" * 60)
    
    # 1. Fetch the raw JS file
    print(f"\n[1/4] Veri çekiliyor: {RAW_URL}")
    try:
        req = urllib.request.Request(RAW_URL, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as resp:
            js_text = resp.read().decode("utf-8")
        print(f"  ✓ {len(js_text):,} byte indirildi")
    except Exception as e:
        print(f"  ✗ İndirme hatası: {e}")
        return
    
    # 2. Parse SQUADS
    print("\n[2/4] SQUADS dizisi parse ediliyor...")
    squads = parse_squads_regex(js_text)
    print(f"  ✓ {len(squads)} takım kadrosu bulundu")
    
    if not squads:
        print("  ✗ Hiç kadro bulunamadı!")
        return
    
    # Show summary
    years = sorted(set(s["y"] for s in squads))
    print(f"  Yıllar: {min(years)} - {max(years)}")
    countries = sorted(set(s["t"] for s in squads))
    print(f"  Ülkeler ({len(countries)}): {', '.join(countries[:10])}...")
    
    # 3. Convert all players
    print("\n[3/4] Oyuncular dönüştürülüyor...")
    all_players = []
    for squad in squads:
        players = convert_squad_to_players(squad)
        all_players.extend(players)
    
    print(f"  ✓ {len(all_players)} toplam oyuncu dönüştürüldü (tekrarlar dahil)")
    
    # Deduplicate
    all_players = deduplicate_players(all_players)
    
    # Stats
    positions = {}
    for p in all_players:
        pos = p["position"]
        positions[pos] = positions.get(pos, 0) + 1
    
    print(f"\n  Pozisyon dağılımı:")
    for pos in sorted(positions.keys()):
        print(f"    {pos}: {positions[pos]}")
    
    # 4. Write output
    print(f"\n[4/4] Çıktı dosyası yazılıyor: {OUTPUT_FILE}")
    
    # Group by decade for readability
    decade_groups = {}
    for p in all_players:
        decade = (p["year"] // 10) * 10
        if decade not in decade_groups:
            decade_groups[decade] = []
        decade_groups[decade].append(p)
    
    lines = []
    lines.append("// ═══════════════════════════════════════════════════════════")
    lines.append("// AUTO-GENERATED from 7a0 (Sete a Zero) database")
    lines.append(f"// Total: {len(all_players)} players, {len(squads)} squads")
    lines.append(f"// Years: {min(years)}-{max(years)}")
    lines.append("// ═══════════════════════════════════════════════════════════")
    lines.append("")
    
    for decade in sorted(decade_groups.keys()):
        players = decade_groups[decade]
        lines.append(f"  // ──── {decade}s ────")
        for p in players:
            lines.append(format_player_js(p) + ",")
        lines.append("")
    
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    
    print(f"  ✓ {len(all_players)} oyuncu yazıldı!")
    print(f"\n{'=' * 60}")
    print(f"TAMAMLANDI! Çıktı: {OUTPUT_FILE}")
    print(f"Bu dosyanın içeriğini data.js'deki playersDatabase dizisine yapıştırabilirsin.")
    print(f"{'=' * 60}")


if __name__ == "__main__":
    main()
