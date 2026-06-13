import re
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_JS = os.path.join(SCRIPT_DIR, "..", "js", "data.js")

def analyze_teams():
    with open(DATA_JS, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find playersDatabase
    start = content.find('export const playersDatabase')
    players_block = content[start:]

    player_pattern = re.compile(
        r'\{\s*id:\s*"[^"]+",\s*name:\s*"[^"]+",\s*position:\s*"[^"]+",\s*rating:\s*(\d+),\s*country:\s*"([^"]+)",\s*countryCode:\s*"([^"]+)",\s*flag:\s*"([^"]+)",\s*year:\s*(\d+)',
        re.DOTALL
    )

    matches = player_pattern.findall(players_block)
    
    teams = {}
    for rating, country, country_code, flag, year in matches:
        key = (country, int(year), country_code, flag)
        if key not in teams:
            teams[key] = []
        teams[key].append(int(rating))

    # Calculate average rating
    team_averages = []
    for key, ratings in teams.items():
        avg = sum(ratings) / len(ratings)
        team_averages.append((key, avg, len(ratings)))

    # Sort by year, then country
    team_averages.sort(key=lambda x: (x[0][1], x[0][0]))

    print(f"Total team-years: {len(team_averages)}")
    print("\nAll historical team-years in DB with averages:")
    for key, avg, count in team_averages:
        country, year, code, flag = key
        print(f"  - {country} {year} ({code}) [{flag}]: Avg Rating = {avg:.1f} ({count} players)")

if __name__ == "__main__":
    analyze_teams()
