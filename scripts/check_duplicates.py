import os
import re
import json

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_JS = os.path.join(SCRIPT_DIR, "..", "js", "data.js")

def analyze_data_js():
    with open(DATA_JS, "r", encoding="utf-8") as f:
        content = f.read()

    # Find playersDatabase block
    start_match = re.search(r'export const playersDatabase\s*=\s*\[', content)
    if not start_match:
        print("ERROR: playersDatabase not found in data.js")
        return

    start_pos = start_match.end()
    depth = 1
    end_pos = start_pos
    for i in range(start_pos, len(content)):
        if content[i] == '[':
            depth += 1
        elif content[i] == ']':
            depth -= 1
            if depth == 0:
                end_pos = i
                break

    players_block = content[start_pos:end_pos]
    
    # Let's extract players. A player starts with { and ends with }
    # We can parse them using a regex that matches the objects.
    player_objects = []
    # Match: { id: "...", name: "...", position: "...", rating: ..., country: "...", ... stats: { ... } }
    player_pattern = re.compile(
        r'\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*position:\s*"([^"]+)",\s*rating:\s*(\d+),\s*country:\s*"([^"]+)",\s*countryCode:\s*"([^"]+)",\s*flag:\s*"([^"]+)",\s*year:\s*(\d+),\s*era:\s*"([^"]+)",\s*emoji:\s*"([^"]+)",\s*stats:\s*\{\s*pac:\s*(\d+),\s*sho:\s*(\d+),\s*pas:\s*(\d+),\s*dri:\s*(\d+),\s*def:\s*(\d+),\s*phy:\s*(\d+)\s*\}\s*\}',
        re.DOTALL
    )

    matches = player_pattern.findall(players_block)
    print(f"Total parsed players from JS: {len(matches)}")

    # Check for duplicates based on name (cross-year appearances)
    name_seen = {}
    for match in matches:
        p_id, name, position, rating, country, country_code, flag, year, era, emoji, pac, sho, pas, dri, _def, phy = match
        normalized_name = name.strip()
        if normalized_name not in name_seen:
            name_seen[normalized_name] = []
        name_seen[normalized_name].append((year, country, rating))

    multi_year = {name: entries for name, entries in name_seen.items() if len(entries) > 1}
    
    if multi_year:
        print(f"\nFound {len(multi_year)} players appearing in multiple World Cups/years:")
        # Sort by number of appearances descending
        sorted_multi = sorted(multi_year.items(), key=lambda x: len(x[1]), reverse=True)
        for name, entries in sorted_multi[:25]:
            entry_strs = [f"{year} ({country} - rating: {rating})" for year, country, rating in entries]
            print(f"  - {name} ({len(entries)} times): {', '.join(entry_strs)}")
        if len(sorted_multi) > 25:
            print(f"  ... and {len(sorted_multi) - 25} more.")
    else:
        print("\nNo players appearing in multiple years.")

    # Check for duplicate IDs
    ids_seen = {}
    id_duplicates = {}
    for match in matches:
        p_id = match[0]
        if p_id in ids_seen:
            if p_id not in id_duplicates:
                id_duplicates[p_id] = 0
            id_duplicates[p_id] += 1
        ids_seen[p_id] = True

    if id_duplicates:
        print(f"\nFound {len(id_duplicates)} duplicate IDs in database:")
        for p_id, count in list(id_duplicates.items())[:20]:
            print(f"  - ID '{p_id}' appears {count + 1} times")
    else:
        print("\nNo duplicate IDs found!")

if __name__ == "__main__":
    analyze_data_js()
