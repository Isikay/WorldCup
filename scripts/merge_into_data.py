"""
Merge: generated_players.js + mevcut data.js playersDatabase
=============================================================
Mevcut data.js'deki playersDatabase'i generated_players.js çıktısıyla DEĞİŞTİRİR.
Mevcut formasyon, cpuTeams, countryCodeMap ve helper fonksiyonları korur.
"""
import os
import re

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_JS = os.path.join(SCRIPT_DIR, "..", "js", "data.js")
GENERATED = os.path.join(SCRIPT_DIR, "generated_players.js")
OUTPUT = os.path.join(SCRIPT_DIR, "..", "js", "data.js")

def main():
    print("=" * 60)
    print("data.js Entegrasyon Scripti")
    print("=" * 60)

    # 1. Read current data.js
    with open(DATA_JS, "r", encoding="utf-8") as f:
        data_js = f.read()

    # 2. Read generated players
    with open(GENERATED, "r", encoding="utf-8") as f:
        generated = f.read()

    # 3. Find the playersDatabase array boundaries
    # Start: "export const playersDatabase = ["
    start_match = re.search(r'export const playersDatabase\s*=\s*\[', data_js)
    if not start_match:
        print("ERROR: playersDatabase bulunamadı!")
        return

    start_pos = start_match.end()  # after the opening [

    # Find the matching closing ];
    depth = 1
    end_pos = start_pos
    for i in range(start_pos, len(data_js)):
        if data_js[i] == '[':
            depth += 1
        elif data_js[i] == ']':
            depth -= 1
            if depth == 0:
                end_pos = i
                break

    old_players_block = data_js[start_pos:end_pos]
    old_count = old_players_block.count('"id":') + old_players_block.count("id: ")
    new_count = generated.count("id: ")

    print(f"\n  Mevcut playersDatabase: ~{old_count} oyuncu")
    print(f"  Yeni generated_players: ~{new_count} oyuncu")

    # 4. Build new data.js
    # Remove the header comments from generated (// AUTO-GENERATED... lines)
    gen_lines = generated.strip().split('\n')
    # Skip comment lines at the top
    content_lines = []
    for line in gen_lines:
        stripped = line.strip()
        if stripped.startswith('//') and ('AUTO-GENERATED' in stripped or 'Total:' in stripped or 'Years:' in stripped or stripped.startswith('// ═')):
            continue
        content_lines.append(line)

    gen_content = '\n'.join(content_lines)

    # Remove trailing comma from last entry if present
    gen_content = gen_content.rstrip().rstrip(',')

    new_data_js = data_js[:start_pos] + "\n" + gen_content + "\n" + data_js[end_pos:]

    # 5. Write back
    with open(OUTPUT, "w", encoding="utf-8") as f:
        f.write(new_data_js)

    final_count = new_data_js.count("id: \"")
    print(f"\n  ✓ data.js güncellendi!")
    print(f"  Toplam oyuncu sayısı: ~{final_count}")
    print(f"  Dosya boyutu: {len(new_data_js):,} byte")
    print(f"\n{'=' * 60}")


if __name__ == "__main__":
    main()
