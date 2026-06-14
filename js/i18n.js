// World Cup Draft & Simulation - Localization Module

const translations = {
  tr: {
    doc_title: "Dünya Kupası Draft & Simülasyon",
    app_title: "DÜNYA KUPASI DRAFT",
    btn_trophy_room: "Müze",
    badge_new_season: "DÜNYA KUPASI EFSANELERİ",
    start_hero_title: "Kendi Efsane Kadronu Kur",
    start_hero_subtitle: "Tarihin en iyi Dünya Kupası oyuncularını draft et, taktiğini belirle, turnuvayı kazan ve altın kupayı müzene götür!",
    title_team_setup: "Takım Kurulumu",
    label_manager_name: "Menajer Adı",
    label_team_name: "Takım Adı",
    label_team_badge: "Takım Amblemi & Renkleri",
    label_manager_perk: "Menajer Uzmanlığı (Perk)",
    perk_att_title: "Hücum Dehası",
    perk_att_desc: "Tüm oyuncuların Şut (SHO) ve Hız (PAC) değerlerine +5 ekler.",
    perk_leg_title: "Efsane Sevdalısı",
    perk_leg_desc: "2000 yılı öncesi oynayan oyunculara +5 ekstra Kimya sağlar.",
    perk_tac_title: "Taktik Sihirbazı",
    perk_tac_desc: "Tüm oyuncuların Pas (PAS) gücüne +5 ekler ve sakatlık riskini azaltır.",
    title_choose_formation: "Taktik Diziliş Seçimi",
    btn_open_formation_pack: "Diziliş Paketi Aç",
    btn_start_draft: "DRAFT'A BAŞLA",
    label_team: "TAKIM",
    label_perk: "UZMANLIK",
    stat_rating: "GENEL",
    stat_chemistry: "KİMYA",
    btn_reset: "Sıfırla",
    btn_start_tournament: "TURNUVAYA GİR",
    title_substitutes: "Yedek Kulübesi",
    title_world_cup_tournament: "Dünya Kupası Turnuvası",
    subtitle_world_cup_tournament: "16 Efsane takım arasında şampiyonluğa ulaşın. Maçları simüle edin!",
    stage_r16: "Son 16",
    stage_qf: "Çeyrek Final",
    stage_sf: "Yarı Final",
    stage_final: "FİNAL",
    title_your_squad: "Takımınız",
    title_next_match: "Sıradaki Maç",
    btn_simulate_match: "MAÇI OYNA",
    label_crowd_noise: "TARAFTAR ETKİSİ",
    label_momentum: "Oyun Üstünlüğü",
    title_match_events: "Maç Anlatımı",
    btn_quick_sub: "Oyuncu Değiştir",
    btn_edit_squad: "Kadro Düzenle",
    btn_continue: "Devam Et",
    title_hall_of_fame: "Efsaneler Müzesi",
    subtitle_hall_of_fame: "Kazandığınız kupalar, tarihsel başarılarınız ve rekorlarınız burada listelenir.",
    title_trophy_cabinet: "Kupa Dolabı",
    title_personal_records: "Kişisel Rekorlar",
    rec_total_drafts: "Toplam Draft",
    rec_trophies_won: "Kazanılan Kupalar",
    rec_highest_rating: "En Yüksek Kadro Gücü",
    rec_highest_chem: "En Yüksek Kimya",
    rec_total_wins: "Toplam Maç Galibiyeti",
    title_draft_history: "Draft Geçmişi",
    th_team: "Takım",
    th_rating: "Genel / Kimya",
    th_result: "Sonuç",
    th_date: "Tarih",
    th_rank: "Sıra",
    th_manager_team: "Menajer / Takım",
    th_trophies: "Kupa (🏆)",
    th_wins: "Galibiyet (✌️)",
    th_highest_rating: "En Yüksek Güç (⭐)",
    btn_back_to_menu: "Ana Menüye Dön",
    hint_click_pack: "Paketi Yırtmak İçin Üzerine Tıklayın!",
    title_choose_player: "Oyuncu Seçiniz",
    title_tactical_subs: "Oyuncu Değişikliği",
    hint_sub_drag: "Değiştirmek istediğiniz ilk 11 oyuncusunu seçin, ardından girmek istediğiniz yedeği seçerek oyuna sürün.",
    title_starters: "İlk 11",
    title_bench: "Yedekler",

    // Simulation comments
    comm_kickoff: "Karşılaşma başladı! İki takıma da başarılar dileriz.",
    comm_halftime: "İlk yarı sona erdi! Takımlar soyunma odasına gidiyor.",
    comm_secondhalf: "İkinci yarı başladı! Heyecan kaldığı yerden devam ediyor.",
    comm_fulltime: "Ve son düdük çaldı! Maç sona erdi.",
    comm_goal: "GOOOOL! {player} muhteşem bir vuruşla topu ağlara gönderiyor! ({team})",
    comm_shot_miss: "{player} ceza sahası dışından şansını deniyor... Ama top az farkla dışarı çıkıyor.",
    comm_shot_save: "{player} kaleciyle karşı karşıya! Vurdu... KALECİ KURTARDI! Harika bir kurtarış.",
    comm_keeper_save: "Kalecimiz {keeper} uzanıyor!",
    comm_tackle: "{player} kritik bir müdahaleyle rakip atağı kesmeyi başarıyor.",
    comm_yellow: "Sarı Kart! {player} yaptığı sert faul sonrası sarı kart görüyor.",
    comm_red: "KIRMIZI KART! {player} doğrudan kırmızı kartla oyun dışı kalıyor!",
    comm_injury: "Sakatlık! {player} acı içinde yerde kaldı. Sağlık görevlileri sahaya giriyor.",
    comm_sub: "Oyuncu Değişikliği! Giren: {in}, Çıkan: {out} ({team})",
    comm_penalties: "Bitiş düdüğü! Maç penaltılara gidiyor. Penaltılar sonucunda kazanan: {winner}!",

    // Outcomes
    outcome_champ: "ŞAMPİYON!",
    outcome_final: "Finalist",
    outcome_sf: "Yarı Finalist",
    outcome_qf: "Çeyrek Finalist",
    outcome_r16: "Son 16 Turu",
    outcome_groups: "Grup Aşaması",
    status_winner: "Şampiyon",
    status_eliminated: "Elendi",

    // Alerts
    alert_fill_fields: "Lütfen menajer ve takım adını giriniz!",
    alert_complete_draft: "Lütfen turnuvaya başlamadan önce tüm ilk 11 ve 5 yedek oyuncuyu draft edin!",
    msg_sub_done: "Oyuncu değişikliği başarıyla yapıldı!",
    msg_sub_limit: "Maksimum 5 oyuncu değişikliği hakkınız bitti!",
    msg_subbed_out_reentry_error: "Oyundan çıkan oyuncu tekrar giremez!",
    btn_back: "Geri Dön",
    msg_invalid_sub_gk: "Kaleci pozisyonuna sadece kaleci oyuncu girebilir ve kaleciler başka mevkide oynayamaz!",
    msg_invalid_sub_def_to_att: "Savunma pozisyonuna hücum oyuncusu sokamazsınız!",
    msg_invalid_sub_att_to_def: "Hücum pozisyonuna savunma oyuncusu sokamazsınız!",

    // Perks
    perk_attacker_name: "Hücum Dehası",
    perk_legend_name: "Efsane Sevdalısı",
    perk_tactician_name: "Taktik Sihirbazı",

    // Trophy Tooltips
    trophy_wc_desc: "Dünya Kupası Şampiyonu",
    trophy_conf_desc: "Finalist Başarısı",
    trophy_rating_desc: "90+ Gücünde Rüya Kadro",
    trophy_chem_desc: "100 Kimya Kusursuz Bağ",

    // --- NEW KEYS ---
    tab_groups: "Grup Aşaması",
    tab_bracket: "Eleme Aşaması",
    tab_history: "Geçmiş",
    tab_leaderboard: "Liderlik Tablosu",
    btn_reset_history: "Verileri Sıfırla",
    msg_confirm_reset: "Tüm oyun istatistikleriniz, draft geçmişiniz ve kupa odanız sıfırlanacak. Emin misiniz?",
    btn_tab_commentary: "Maç Anlatımı",
    btn_tab_performance: "Kadro & Performans",
    // Difficulty
    label_difficulty: "Zorluk Seviyesi",
    diff_easy: "Kolay",
    diff_easy_desc: "Rakipler zayıflatılır, ev sahibi avantajı verilir.",
    diff_normal: "Normal",
    diff_normal_desc: "Standart oyun dengesi.",
    diff_legend: "Efsane",
    diff_legend_desc: "Rakipler güçlendirilir, sakatlık riski artar.",

    // Tactical modes
    label_tactics: "TAKTİK",
    tactic_attacking: "Hücum",
    tactic_balanced: "Dengeli",
    tactic_defensive: "Savunma",
    label_autosub: "OTO-DEĞİŞİKLİK",
    btn_autosub_on: "AÇIK",
    btn_autosub_off: "KAPALI",
    label_autosub_threshold: "Eşik:",

    // Post-match stats
    stat_possession: "Topa Sahip Olma",
    stat_shots: "Toplam Şut",
    stat_shots_on: "İsabetli Şut",
    stat_yellows: "Sarı Kart",
    stat_scorers: "Gol Atanlar",
    stat_score: "Skor",

    // New Game
    btn_new_game: "YENİ OYUN BAŞLAT",
    btn_play_again: "Tekrar Oyna",

    // Champion
    champion_title: "ŞAMPİYON OLDUNUZ!",
    champion_subtitle: "Tebrikler! Dünya Kupası'nı kazandınız!",
    eliminated_title: "ELENDİNİZ!",
    eliminated_subtitle: "Tarih {team} takımını yazdı.",
    advanced_title: "TEBRİKLER! KAZANDINIZ",
    advanced_subtitle: "Tebrikler, bir üst tura yükseldiniz!",
    group_win_title: "TEBRİKLER! KAZANDINIZ",
    group_win_subtitle: "Grup aşamasında önemli bir 3 puan aldınız.",
    group_draw_title: "BERABERLİK!",
    group_draw_subtitle: "Grup aşamasında hanenize 1 puan yazdırdınız.",
    group_loss_title: "MAĞLUBİYET!",
    group_loss_subtitle: "Puan alamadınız. Bir sonraki maça odaklanın!"
  },
  en: {
    doc_title: "World Cup Draft & Simulation",
    app_title: "WORLD CUP DRAFT",
    btn_trophy_room: "Museum",
    badge_new_season: "WORLD CUP LEGENDS",
    start_hero_title: "Build Your Legendary Squad",
    start_hero_subtitle: "Draft the best World Cup players in history, set your tactics, win the tournament, and add the gold cup to your museum!",
    title_team_setup: "Team Setup",
    label_manager_name: "Manager Name",
    label_team_name: "Team Name",
    label_team_badge: "Team Emblem & Colors",
    label_manager_perk: "Manager Specialty (Perk)",
    perk_att_title: "Attacking Guru",
    perk_att_desc: "Adds +5 to Shooting (SHO) and Pace (PAC) stats for all players.",
    perk_leg_title: "Legend Enthusiast",
    perk_leg_desc: "Provides +5 Chemistry boost for players active before the year 2000.",
    perk_tac_title: "Tactical Wizard",
    perk_tac_desc: "Adds +5 to Passing (PAS) stats and reduces the chance of injuries.",
    title_choose_formation: "Choose Formation",
    btn_open_formation_pack: "Open Formation Pack",
    btn_start_draft: "START DRAFT",
    label_team: "TEAM",
    label_perk: "PERK",
    stat_rating: "RATING",
    stat_chemistry: "CHEMISTRY",
    btn_reset: "Reset",
    btn_start_tournament: "ENTER TOURNAMENT",
    title_substitutes: "Substitutes Bench",
    title_world_cup_tournament: "World Cup Tournament",
    subtitle_world_cup_tournament: "Reach championship glory among 16 legendary national teams. Simulate matches!",
    stage_r16: "Round of 16",
    stage_qf: "Quarter Finals",
    stage_sf: "Semi Finals",
    stage_final: "FINAL",
    title_your_squad: "Your Squad",
    title_next_match: "Next Match",
    btn_simulate_match: "PLAY MATCH",
    label_crowd_noise: "CROWD NOISE",
    label_momentum: "Match Momentum",
    title_match_events: "Match Ticker",
    btn_quick_sub: "Substitutes",
    btn_edit_squad: "Edit Squad",
    btn_continue: "Continue",
    title_hall_of_fame: "Hall of Fame",
    subtitle_hall_of_fame: "Your trophies, historical accomplishments, and statistics are recorded here.",
    title_trophy_cabinet: "Trophy Cabinet",
    title_personal_records: "Personal Records",
    rec_total_drafts: "Total Drafts",
    rec_trophies_won: "Trophies Won",
    rec_highest_rating: "Highest Squad Rating",
    rec_highest_chem: "Highest Chemistry",
    rec_total_wins: "Total Match Wins",
    title_draft_history: "Draft History",
    th_team: "Team",
    th_rating: "Rating / Chem",
    th_result: "Result",
    th_date: "Date",
    th_rank: "Rank",
    th_manager_team: "Manager / Team",
    th_trophies: "Trophies (🏆)",
    th_wins: "Wins (✌️)",
    th_highest_rating: "Highest Rating (⭐)",
    btn_back_to_menu: "Back to Main Menu",
    hint_click_pack: "Click on the Pack to Tear it Open!",
    title_choose_player: "Select Player",
    title_tactical_subs: "Player Substitution",
    hint_sub_drag: "Select the starting XI player to replace, then select the bench player to sub in.",
    title_starters: "Starting XI",
    title_bench: "Bench",

    // Simulation comments
    comm_kickoff: "The match kicks off! Good luck to both teams.",
    comm_halftime: "Half-time! The teams head to the locker rooms.",
    comm_secondhalf: "The second half starts! The excitement continues.",
    comm_fulltime: "And the final whistle blows! The match is over.",
    comm_goal: "GOAL! {player} fires it home with an amazing strike! ({team})",
    comm_shot_miss: "{player} tries his luck from outside the box... but it goes just wide.",
    comm_shot_save: "{player} is clean through on goal! He shoots... SAVED BY THE KEEPER! Brilliant save.",
    comm_keeper_save: "Our goalkeeper {keeper} stretches to save!",
    comm_tackle: "{player} stops the attack with a crucial tackle.",
    comm_yellow: "Yellow Card! {player} is booked after a rough challenge.",
    comm_red: "RED CARD! {player} gets a straight red card and is sent off!",
    comm_injury: "Injury! {player} goes down in pain. Medical staff are coming onto the pitch.",
    comm_sub: "Substitution! In: {in}, Out: {out} ({team})",
    comm_penalties: "Full-time whistle! The match goes to penalties. Winner from penalties: {winner}!",

    // Outcomes
    outcome_champ: "CHAMPION!",
    outcome_final: "Finalist",
    outcome_sf: "Semi Finalist",
    outcome_qf: "Quarter Finalist",
    outcome_r16: "Round of 16",
    outcome_groups: "Group Stage",
    status_winner: "Champion",
    status_eliminated: "Eliminated",

    // Alerts
    alert_fill_fields: "Please enter your manager and team names!",
    alert_complete_draft: "Please draft all starting XI and 5 substitutes before entering the tournament!",
    msg_sub_done: "Substitution made successfully!",
    msg_sub_limit: "You have used your maximum 5 substitutions!",
    msg_subbed_out_reentry_error: "Players subbed out cannot re-enter the match!",
    btn_back: "Go Back",
    msg_invalid_sub_gk: "Goalkeepers can only be substituted for other goalkeepers, and outfield players cannot play as goalkeeper!",
    msg_invalid_sub_def_to_att: "You cannot substitute an attacking player into a defensive slot!",
    msg_invalid_sub_att_to_def: "You cannot substitute a defensive player into an attacking slot!",

    // Perks
    perk_attacker_name: "Attacking Guru",
    perk_legend_name: "Legend Enthusiast",
    perk_tactician_name: "Tactical Wizard",

    // Trophy Tooltips
    trophy_wc_desc: "World Cup Champion",
    trophy_conf_desc: "Runner-up Medal",
    trophy_rating_desc: "90+ Rating Dream Team",
    trophy_chem_desc: "100 Chemistry Perfect Links",

    // --- NEW KEYS ---
    tab_groups: "Group Stage",
    tab_bracket: "Knockout Bracket",
    tab_history: "History",
    tab_leaderboard: "Leaderboard",
    btn_reset_history: "Reset Data",
    msg_confirm_reset: "All your game stats, draft history, and trophy cabinet will be reset. Are you sure?",
    btn_tab_commentary: "Match Commentary",
    btn_tab_performance: "Squad & Performance",
    // Difficulty
    label_difficulty: "Difficulty Level",
    diff_easy: "Easy",
    diff_easy_desc: "Opponents are weakened, home advantage granted.",
    diff_normal: "Normal",
    diff_normal_desc: "Standard game balance.",
    diff_legend: "Legend",
    diff_legend_desc: "Opponents are boosted, injury risk increases.",

    // Tactical modes
    label_tactics: "TACTICS",
    tactic_attacking: "Attack",
    tactic_balanced: "Balanced",
    tactic_defensive: "Defense",
    label_autosub: "AUTO-SUB",
    btn_autosub_on: "ON",
    btn_autosub_off: "OFF",
    label_autosub_threshold: "Threshold:",

    // Post-match stats
    stat_possession: "Possession",
    stat_shots: "Total Shots",
    stat_shots_on: "Shots on Target",
    stat_yellows: "Yellow Cards",
    stat_scorers: "Goal Scorers",
    stat_score: "Score",

    // New Game
    btn_new_game: "START NEW GAME",
    btn_play_again: "Play Again",

    // Champion
    champion_title: "YOU ARE THE CHAMPION!",
    champion_subtitle: "Congratulations! You won the World Cup!",
    eliminated_title: "ELIMINATED!",
    eliminated_subtitle: "History favored {team}.",
    advanced_title: "CONGRATULATIONS! YOU WON",
    advanced_subtitle: "Congratulations, you advanced!",
    group_win_title: "CONGRATULATIONS! YOU WON",
    group_win_subtitle: "You earned 3 important points in the group stage.",
    group_draw_title: "DRAW!",
    group_draw_subtitle: "You added 1 point to your group tally.",
    group_loss_title: "DEFEAT!",
    group_loss_subtitle: "No points earned. Focus on the next match!"
  }
};

export class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('wc_draft_lang') || 'tr';
  }

  setLanguage(lang) {
    if (translations[lang]) {
      this.currentLang = lang;
      localStorage.setItem('wc_draft_lang', lang);
      this.translatePage();
    }
  }

  toggleLanguage() {
    const nextLang = this.currentLang === 'tr' ? 'en' : 'tr';
    this.setLanguage(nextLang);
    return nextLang;
  }

  translatePage() {
    // Set document lang attribute
    document.documentElement.setAttribute('lang', this.currentLang);

    // Find all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text) {
        if (el.tagName === 'INPUT' && el.type === 'text') {
          el.placeholder = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // Update custom language toggler flag in UI
    const flagEl = document.querySelector('.lang-flag');
    const codeEl = document.querySelector('.lang-code');
    if (flagEl && codeEl) {
      flagEl.textContent = this.currentLang === 'tr' ? '🇹🇷' : '🇺🇸';
      codeEl.textContent = this.currentLang.toUpperCase();
    }
  }

  t(key, vars = {}) {
    const langDict = translations[this.currentLang];
    if (!langDict) return key;

    let text = langDict[key];
    if (!text) return translations['en'][key] || key; // fallback to English

    // Replace variables in text
    Object.keys(vars).forEach(v => {
      text = text.replaceAll('{' + v + '}', vars[v]);
    });

    return text;
  }
}

export const i18n = new I18nManager();
