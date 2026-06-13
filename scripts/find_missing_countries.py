import re
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_JS = os.path.join(SCRIPT_DIR, "..", "js", "data.js")

def find_missing():
    with open(DATA_JS, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find playersDatabase
    start = content.find('export const playersDatabase')
    players_block = content[start:]

    countries = set(re.findall(r'country:\s*"([^"]+)"', players_block))
    print('Countries in playersDatabase:', len(countries), sorted(list(countries)))

    # Find countryCodeMap
    map_match = re.search(r'export const countryCodeMap\s*=\s*\{([^}]+)\}', content)
    if not map_match:
        print("ERROR: countryCodeMap not found")
        return
    map_text = map_match.group(1)
    mapped_countries = set(re.findall(r'"([^"]+)"\s*:', map_text))
    print('Mapped countries:', len(mapped_countries), sorted(list(mapped_countries)))

    missing = countries - mapped_countries
    print('Missing from countryCodeMap:', missing)

if __name__ == "__main__":
    find_missing()
