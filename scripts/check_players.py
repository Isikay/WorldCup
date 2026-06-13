import os
import re

# Resolve paths relative to this script's directory
script_dir = os.path.dirname(os.path.abspath(__file__))
data_js_path = os.path.join(script_dir, '..', 'js', 'data.js')

with open(data_js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove comments first
content_no_comments = re.sub(r'//.*', '', content)
content_no_comments = re.sub(r'/\*.*?\*/', '', content_no_comments, flags=re.DOTALL)

# Find all blocks of form: { id: ..., name: ..., ... }
# We search for any text between { and } that contains "name:" and "country:"
player_blocks = []
brackets_count = 0
current_block = []

for char in content_no_comments:
    if char == '{':
        brackets_count += 1
        if brackets_count == 1:
            current_block = ['{']
            continue
    if brackets_count >= 1:
        current_block.append(char)
        if char == '}':
            brackets_count -= 1
            if brackets_count == 0:
                block_str = "".join(current_block)
                if "name:" in block_str and "country:" in block_str and "year:" in block_str:
                    player_blocks.append(block_str)

players = []
for block in player_blocks:
    name_m = re.search(r'name:\s*["\']([^"\']+)["\']', block)
    country_m = re.search(r'country:\s*["\']([^"\']+)["\']', block)
    year_m = re.search(r'year:\s*(\d+)', block)
    pos_m = re.search(r'position:\s*["\']([^"\']+)["\']', block)
    rating_m = re.search(r'rating:\s*(\d+)', block)
    
    if name_m and country_m and year_m:
        players.append({
            'name': name_m.group(1),
            'country': country_m.group(1),
            'year': int(year_m.group(1)),
            'position': pos_m.group(1) if pos_m else "SUB",
            'rating': int(rating_m.group(1)) if rating_m else 80
        })

# Extract cpuTeams
cpu_teams_match = re.search(r'export const cpuTeams = \[(.*?)\];', content, re.DOTALL)
if not cpu_teams_match:
    print("Could not find cpuTeams in data.js")
    exit(1)
    
teams_str = cpu_teams_match.group(1)
team_names = re.findall(r'name:\s*"([^"]+)"', teams_str)

trToEn = {
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
    "Türkiye": "Türkiye",
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
}

print(f"Total database players parsed: {len(players)}")

incomplete_teams = []

for team in team_names:
    parts = team.split(' ')
    if team.startswith("G. Kore"):
        country_tr = "G. Kore"
        year = int(parts[2])
    elif team.startswith("Sovyetler Birliği"):
        country_tr = "Sovyetler Birliği"
        year = int(parts[2])
    else:
        country_tr = parts[0]
        year = int(parts[1])
        
    country_en = trToEn.get(country_tr, country_tr)
    
    team_players = [p for p in players if p.get('country') == country_en and p.get('year') == year]
    gks = [p for p in team_players if p.get('position') == 'GK']
    print(f"Team: {team:<25} | Players: {len(team_players):<2} | GKs: {len(gks)} | Country: {country_en} | Year: {year}")
    
    if len(team_players) < 16:
        incomplete_teams.append((team, len(team_players), len(gks)))

print("\n--- Incomplete Teams (Fewer than 16 players) ---")
for t, count, gk_count in incomplete_teams:
    print(f"{t}: {count} players (GKs: {gk_count})")
