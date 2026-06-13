// World Cup Draft - Rich Commentary Engine (CM/Football Manager tarzı)
// Her olay tipi için 8-12 farklı yorum varyasyonu
// Skor ve dakikaya göre bağlamsal yorumlar
// Efsane oyunculara özel yorumlar

// --- EFSANE OYUNCU ID LERİ ---
const LEGEND_IDS = {
  maradona: 'diego_maradona',
  pele: 'pele',
  messi: 'lionel_messi',
  ronaldo: 'ronaldo_nazario',
  zidane: 'zinedine_zidane',
  cruyff: 'johan_cruyff',
  beckenbauer: 'franz_beckenbauer',
  ronaldinho: 'ronaldinho',
  cr7: 'cristiano_ronaldo',
  mbappe: 'kylian_mbappe',
};

// Efsane oyunculara özel gol yorumları
const LEGEND_GOAL_LINES = {
  diego_maradona: [
    "MARADONAAaa! Sanki 1986 Mexico'sundayız! Tüm zamanların en büyüğü sahneye çıktı!",
    "Bu Maradona! Ceza sahasına girdi, soldan sağa geçti, fiziğe meydan okuyan bir vuruş... GOOOOL! İnanılmaz!",
    "El Pibe de Oro yine gülüyor! Maradona topu aldı, herkesi geçti, topu köşeye astı. Tanrının eli değil, tanrının kendisi!",
  ],
  pele: [
    "PELÉéé! Brezilyalı sihirbaz bir kez daha kanıtlıyor neden tüm zamanların en iyisi olduğunu!",
    "Bu Pelé! 1970 Brezilya'sının efsanesi! Topu kontrol etti, kaleciye baktı ve tam köşeye gönderdi!",
    "Gol atan: Pelé. Başka açıklama gerekmez. Futbolun tanrısı konuştu!",
  ],
  lionel_messi: [
    "MESSİİİ! Dünya Kupası'nda da kral! Sihirli ayakları yine konuştu!",
    "Küçük adam, dev adımlar! Messi topu aldı, iki oyuncuyu geçti, sert bir vuruşla köşeye gönderdi. HAYRAN KALIYORUZ!",
    "La Pulga! Pire lakaplı bu adam yine inanılmazı başardı. Messi'nin golü!",
  ],
  ronaldo_nazario: [
    "FENOMENOOO! Ronaldo Nazário sahneye çıktı! Bu hız, bu teknik, bu bitiş... Mükemmel!",
    "R9! Ceza sahasına girdi, defansçıları geride bıraktı, kaleciye düşünme şansı vermedi. GOOOOL!",
    "Ronaldo Nazário'nun golü! Bu adam futbolun mucizesidir. Bir kez daha kanıtladı!",
  ],
  zinedine_zidane: [
    "ZİDANEEE! Fransız usta bir kez daha sihirini gösterdi! Topla danseder gibi ilerledi, gol!",
    "Zidane kontrolü aldı, döndü, kalecinin üzerinden çirası çekti... GOOOOL! Sanat eseri!",
    "Le Président sahneye çıktı! Zidane'nin vuruşu kaleciye görünmez bile. GOOOL!",
  ],
  johan_cruyff: [
    "CRUYFF TURN, CRUYFF GOL! Johan Cruyff'un topla dansı yeniden başladı!",
    "Total Futbol! Cruyff hem yarattı hem bitirdi. 1974 ruhu bu sahada yaşıyor!",
  ],
  franz_beckenbauer: [
    "Kaiser Franz! Savunmadan çıkıp gol! Beckenbauer bir kez daha gösteriyor neden efsane olduğunu!",
    "Beckenbauer sahadaki en iyi oyuncu. Gol attı, rakip takımı dondu kaldı!",
  ],
  ronaldinho: [
    "RONALDİNHOO! O kahkahası, o sihri! Ronaldinho yine herkesi büyüledi ve topu ağa gönderdi!",
    "Gülümseyen adam yine güldürüyor! Ronaldinho bu gece forma ile büyü yapıyor!",
  ],
  cristiano_ronaldo: [
    "SİİİUUUU! Cristiano Ronaldo hiçbir zaman durmaz! Sert vuruş, üst köşe, GOL!",
    "CR7 imzasını attı! Nefis bir hareket, nefis bir vuruş, inanılmaz bir gol!",
  ],
  kylian_mbappe: [
    "MBAPPÉÉ! Işık hızında ilerledi ve sahayı geçti! Kaleci şans bile bulamadı!",
    "Bu hız yasadışı olmalı! Mbappé savunmayı paramparça etti ve topu ağa gönderdi!",
  ],
};

// Yardımcı: diziden rastgele eleman seç
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Bağlamsal ön-ek — dakika ve skora göre dramatik giriş
function getContextPrefix(minute, scoreHome, scoreAway) {
  const diff = scoreHome - scoreAway;
  const isLate = minute >= 80;
  const isCritical = isLate && Math.abs(diff) <= 1;

  if (isLate && diff === 0) {
    return pick([
      "⚡ KRİTİK DAKIKALAR! ",
      "🔥 SON DAKİKALAR! Beraberlik bozuluyor mu? ",
      "⏱️ Maçın sonu yaklaşıyor, her an değerli! ",
    ]);
  }
  if (isLate && diff === -1) {
    return pick([
      "💔 Geri dönüş mümkün mü? ",
      "🙏 Son şans! ",
      "⏱️ Saat tikiyor... ",
    ]);
  }
  if (isLate && diff === 1) {
    return pick([
      "🛡️ Öndeyiz ama çok erken sevinmemek gerek! ",
      "⚡ Savunma dikkatli olsun! Son dakikada kazanmak zor! ",
    ]);
  }
  if (isLate && diff <= -2) {
    return pick([
      "😔 Artık maç bitmiş gibi görünüyor... ",
      "📉 Fark kapanabilir mi? ",
    ]);
  }
  if (minute <= 10) {
    return pick([
      "🎬 Erken baskı! ",
      "⚡ Hemen devreye girdi! ",
      "🔥 Maçın ilk dakikalarından çıktı bu! ",
    ]);
  }
  if (Math.abs(diff) >= 3) {
    return pick([
      "🎉 Maç adeta bitti! ",
      "👑 Dominans devam ediyor! ",
      "📊 Fark açılıyor! ",
    ]);
  }
  return "";
}

// ==================== GOL YORUMLARI ====================
const GOAL_LINES = [
  (p, t) => `GOOOOOL! ${p} muhteşem bir vuruşla topu ağlara gönderdi! ${t} öne geçiyor!`,
  (p, t) => `${p} ceza sahasına girdi, savunmayı çarptı, vurdu... AĞLAR BURKÜLÜYOR! ${t} için büyük sevinç!`,
  (p, t) => `Topu ceza sahasında kontrol etti, baktı, vuuuuu... GİTTİİİ! ${p} attı! ${t} rüyasını yaşıyor!`,
  (p, t) => `İnanılmaz! ${p} hiç düşünmeden sert vurdu! Kaleci yere kapandı, top çoktan ağdaydı!`,
  (p, t) => `Bu nasıl bir goool! ${p} uzaktan denedi, kaleci izleyebildi yalnızca! ${t} adına harika!`,
  (p, t) => `${p} sol ayağıyla köşeyi buldu! Kalecinin hiç şansı yoktu! GOOOL!`,
  (p, t) => `Kafa vuruşu... GOOOOL! ${p} süzüldü ve ağları salladı! Harika bir gol!`,
  (p, t) => `${p} topu aldı, rakip defansı geride bıraktı, kaleciye döndü ve sert bastı — GOOOOL! ${t} için tarihi an!`,
  (p, t) => `Direkt voley! ${p} düşünmeden bastı ve top delikten geçti gibi ağa girdi! MÜKEMMEL GOL!`,
  (p, t) => `${p} savunmanın arasından geçti, kaleci 1-1'e geldi ama ${p} soğukkanlıydı — GOOOL!`,
];

// ==================== MİS GOL YORUMLARI ====================
const MISS_LINES = [
  (p) => `${p} ceza sahası dışından şansını denedi... Ama top az farkla dışarı çıktı. Çok yakındı!`,
  (p) => `${p} tam pozisyonda! Vurdu... YANDAN! Nasıl kaçırdı bunu! İzleyenler ağzını kapattı!`,
  (p) => `${p}'nın vuruşu direğe çarptı ve geri döndü! Biraz daha sola olsaydı...`,
  (p) => `${p} tam boştu, kaleci gelemizdiydi, vurdu... ÜSTTEN! Çıktı! Çok heyecanlıydı ama olmadı.`,
  (p) => `Harika pozisyon ama ${p} topu yüksek gönderdi. Tribün inledi.`,
  (p) => `${p} bire-bir kaleciye girdi ama kaleci büyük bir refleksle topu kornere attı. Yaklaşıyoruz!`,
  (p) => `${p} freekick'ten denedi... Duvarın üzerinden geçti ama az yanda kaldı. Şans!`,
  (p) => `Kontrol, kesme, vuruş — ama ${p}'nın topu ağı bulmadı. Bir sonraki fırsatta belki!`,
];

// ==================== KURTARIŞ YORUMLARI ====================
const SAVE_LINES = [
  (p, gk) => `${p} kaleciyle karşı karşıya! Vurdu... KALECİ KURTARDI! ${gk} harika bir refleksle önledi!`,
  (p, gk) => `${p} sert bastı ama ${gk} yere kapanarak topu avladı. Olağanüstü bir kurtarış!`,
  (p, gk) => `${p}'nın şutu direği buldu gibi görünüyordu ama ${gk} oraya zaten uçmuştu!`,
  (p, gk) => `İnanılmaz! ${p} köşeyi hedefledi ama ${gk} bir şahin gibi atladı ve topu pençesiyle dışarı attı!`,
  (p, gk) => `${p} vollede bastı — üst köşeyi hedefledi — ama ${gk} önce oradaydı! Sezondaki en iyi kurtarış!`,
  (p, gk) => `${gk} bugün başka bir boyutta! ${p}'nın her şutunu kurtarıyor. Harikulade bir performans!`,
  (p, gk) => `${p} ceza sahasında döndü ama ${gk} pozisyon aldı ve topu göğsüyle tuttu!`,
  (p, gk) => `${p}'nın sert vuruşu baraja gitti — geri sektiydi ama ${gk} orada bekliyordu!`,
];

// ==================== SARI KART YORUMLARI ====================
const YELLOW_LINES = [
  (p) => `Sarı Kart! ${p} geriden geldi ve rakibi devirdi. Hakem tereddüt etmedi!`,
  (p) => `${p} sinirini kontrol edemedi ve sert bir faulle sarı kartı gördü!`,
  (p) => `Ohhh! ${p} topu değil adamı vurdu. Hakem cebine uzandı — SARI KART!`,
  (p) => `Uyarı! ${p} ikinci faülünü yaptı. Bir sonraki faulde yollanacak!`,
  (p) => `${p} gereksiz bir foul yaptı ve sarı kart gördü. Dikkat etmesi gerekiyor!`,
  (p) => `Tartışmalı bir karar! Hakem ${p}'e sarı kart gösterdi. Oyuncu itiraz ediyor ama kart geri gelmez!`,
];

// ==================== SAKATILIK YORUMLARI ====================
const INJURY_LINES = [
  (p) => `Sakatlık! ${p} acı içinde yerde kalıyor! Sağlık görevlileri sahaya koşuyor...`,
  (p) => `Ciddi görünüyor! ${p} ayak bileğini tutarak yere yığıldı. Oyun durdu.`,
  (p) => `${p} rakiple çarpıştı ve yere düştü! Kalkmakta güçlük çekiyor. Değişiklik gerekebilir.`,
  (p) => `Kötü düşüş! ${p} acı çekiyor. Saha kenarına yardımla götürülüyor.`,
  (p) => `${p} oyuna devam edebilecek mi? Sağlık ekibi değerlendiriyor — endişeli anlar.`,
];

// ==================== KÖŞE VURUŞU YORUMLARI ====================
const CORNER_LINES = [
  (t) => `Köşe vuruşu! ${t} baskısını sürdürüyor. Ceza sahasında büyük kalabalık!`,
  (t) => `Corner! Kaliteli bir çalım... ${t} için tehlikeli bir fırsat!`,
  (t) => `Korner! Ortalama gelecek, ceza sahasında kim kazanacak havayı?`,
  (t) => `${t} yeni bir köşe vuruşu kazandı. Her top tehlikeli olabilir!`,
];

// ==================== OFSİDE YORUMLARI ====================
const OFFSIDE_LINES = [
  (p) => `Ofsayt! ${p} gol attı sanıyorduk ama bayrak kalkmış! Hakem doğru karar verdi.`,
  (p) => `İptal! ${p}'nın golü ofsayt nedeniyle geçersiz sayıldı. Boşa giden büyük sevinç!`,
  (p) => `Heyecanlanmak için erken! Ofsayt bayrağı kalktı. ${p} yarım adım öndeymiş.`,
  (p) => `${p} topu ağa gönderdi ama hakem ofsayt işareti yaptı. Rakip rahat bir nefes aldı.`,
];

// ==================== SERBEST VURUŞ YORUMLARI ====================
const FREEKICK_LINES = [
  (p) => `Serbest vuruş pozisyonu! ${p} topun başına geçiyor. Duvar kuruldu, kaleci hazırlanıyor...`,
  (p) => `${p} frikik için yaklaşıyor. Bu mesafeden çok tehlikeli!`,
  (p) => `Frikik kazanıldı! ${p} topu düzeltiyor — bu adam bu tür vuruşlarda mükemmel!`,
];

// ==================== KARŞI ATAK YORUMLARI ====================
const COUNTER_LINES = [
  (t) => `KARŞI ATAK! ${t} topu kaptı ve hızla yükseliyor! Savunma geride kaldı!`,
  (t) => `Hızlı geçiş! ${t} 3-2 oynuyor, tek pas tek hareket — bu tehlikeli olabilir!`,
  (t) => `Rakip pozisyon kaybetti! ${t} karşı atağa kalktı! Hız avantajı var!`,
  (t) => `Korku dolu anlar! ${t} hızla yükseliyor ve rakip defans hazır değil!`,
];

// ==================== PENALTI YORUMLARI ====================
const PENALTY_LINES = [
  (w) => `PENALTILAR! Gerginlik dorukta! Sonunda kazanan ${w} oldu! Dramatik bir son!`,
  (w) => `Dünya Kupası tarihi! Penaltı atışlarında sinirler çelik oldu. ${w} şans tanrısını yanında buldu!`,
  (w) => `Bu penaltılar bir ömür unutulmaz! Sonunda gülümseme ${w}'a kaldı!`,
];

// ==================== HALFTİME ====================
const HALFTIME_LINES = [
  "İlk yarı sona erdi! Takımlar soyunma odasına gidiyor. Menajer konuşmaları başlayacak!",
  "Devre arası! İlk 45 dakika çok heyecanlıydı. Menajer ne söyleyecek acaba?",
  "Yarı düdüğü çaldı! İki takım da mücadeleli bir ilk devrenin ardından soyunma odasına çekiliyor.",
  "Hakem ilk yarıyı kapattı. Kalan 45 dakikada her şey değişebilir!",
];

// ==================== İKİNCİ YARI ====================
const SECONDHALF_LINES = [
  "İkinci yarı başladı! Heyecan kaldığı yerden devam ediyor. Herkes hazır!",
  "45 dakika daha! İki takım da sahaya çıktı. Bu ikinci yarı farklı olacak!",
  "Menajer ne dedi bilmiyoruz ama takımlar değişmiş görünüyor! İkinci yarı başlıyor!",
  "Devre arası bitti, yeniden top ortada! Bu maçtan henüz söylenecek çok söz var!",
];

// ==================== FULLTIME ====================
const FULLTIME_LINES = [
  (hs, as) => `Son düdük çaldı! Maç sona erdi: ${hs} - ${as}. Müthiş bir karşılaşmaydı!`,
  (hs, as) => `Maç bitti! ${hs} - ${as}. Mücadele etmek için her iki takıma da saygılar!`,
  (hs, as) => `Ve hakem son düdüğü çaldı! Nihai skor: ${hs} - ${as}!`,
  (hs, as) => `Karşılaşma sona erdi. Skor: ${hs} - ${as}. Muhteşem bir futbol gecesinin ardından...`,
];

// ==================== KİCKOFF ====================
const KICKOFF_LINES = [
  "Karşılaşma başladı! İki takıma da başarılar dileriz. Hadi bakalım!",
  "Top ortada! Maç başlıyor! İlk düdük çaldı — savaş açıldı!",
  "Ve hakem düdüğü çaldı! Tarihî bir karşılaşma için sayım başladı!",
  "Başlıyoruz! Sahada efsaneler, tribünlerde heyecan! Dünya Kupası maçı için top ortada!",
];

// ==================== OYUNCU DEĞİŞİKLİĞİ ====================
const SUB_LINES = [
  (inP, outP, t) => `Oyuncu Değişikliği! ${t}'da ${outP} oyundan çıkıyor, ${inP} sahaya giriyor. Taktik hamle!`,
  (inP, outP, t) => `${t} değişiklik yaptı! ${inP} giriyor, ${outP} çıkıyor. Menajer dengeyi kurmak istiyor.`,
  (inP, outP, t) => `Taktik değişiklik! ${t}: ${outP} dinleniyor, ${inP} sahaya fırladı!`,
];

// ==================== MAÇSONU ÖZETİ ====================
function getMatchSummary(homeScore, awayScore, homeTeamName, awayTeamName, topPlayer) {
  const diff = homeScore - awayScore;
  const summaries = [];

  if (diff > 2) {
    summaries.push(`${homeTeamName} bu maçta rakibini ezdi geçti! ${topPlayer ? topPlayer + ' adamlık performansıyla' : ''} çok üstündüydü.`);
    summaries.push(`Tartışmasız galibiyet! ${homeTeamName} ${homeScore}-${awayScore} ile fark atarak kazandı.`);
  } else if (diff === 1) {
    summaries.push(`Çekişmeli maçta ${homeTeamName} son anda güldü! ${homeScore}-${awayScore}'luk minimal fark büyük zaferi getirdi.`);
    summaries.push(`Zor ama değer! ${homeTeamName} mücadeleyi ${homeScore}-${awayScore} ile kazandı.`);
  } else if (diff === 0) {
    summaries.push(`Beraberlik! İki takım da farklı kazanabilirdi ama ${homeScore}-${awayScore}'lık puan paylaşımı adil görünüyor.`);
  } else if (diff === -1) {
    summaries.push(`Elim bir mağlubiyet! ${awayTeamName} son anda öne geçti. Kaçırılan fırsatlar pahalıya patlıyor.`);
  } else {
    summaries.push(`${awayTeamName} bu gün çok güçlüydü. ${homeScore}-${awayScore}'lık mağlubiyet acı veriyor.`);
  }

  if (topPlayer) {
    summaries.push(` ${topPlayer} bugünkü en iyi oyuncu seçilebilir.`);
  }

  return pick(summaries);
}

// ==================== ANA EXPORT FONKSİYONLARI ====================

/**
 * Olay türüne göre zengin yorum döndür
 * @param {string} type - Olay tipi
 * @param {object} ctx - Bağlam: { player, team, keeper, homeScore, awayScore, minute, homeTeamName, awayTeamName }
 * @returns {string|string[]} - Tek yorum veya zincirleme yorumlar dizisi
 */
export function getCommentary(type, ctx = {}) {
  const {
    player = 'Oyuncu',
    team = 'Takım',
    keeper = 'Kaleci',
    homeScore = 0,
    awayScore = 0,
    minute = 0,
    homeTeamName = 'Takım',
    awayTeamName = 'Rakip',
    playerId = null,
  } = ctx;

  const prefix = getContextPrefix(minute, homeScore, awayScore);

  switch (type) {
    case 'goal': {
      // Efsane oyuncu mı?
      if (playerId && LEGEND_GOAL_LINES[playerId]) {
        const legendLine = pick(LEGEND_GOAL_LINES[playerId]);
        return prefix + legendLine;
      }
      // Zincirli gol anlatımı (%40 ihtimalle)
      if (Math.random() < 0.4) {
        return [
          `${minute}' - ${pick([
            `${player} sol kanaldan ilerledi, içeriye çevirdi...`,
            `Hızlı pas kombinasyonu! ${player} tam pozisyonda!`,
            `${player} topu çaldı, rakibini geride bıraktı...`,
            `Köşe vuruşu! Ortalama geldi, ${player} hazır...`,
          ])}`,
          `${minute}' - ${prefix}${pick(GOAL_LINES)(player, team)}`,
        ];
      }
      return prefix + pick(GOAL_LINES)(player, team);
    }

    case 'miss':
      return prefix + pick(MISS_LINES)(player);

    case 'save':
      return prefix + pick(SAVE_LINES)(player, keeper);

    case 'yellow':
      return pick(YELLOW_LINES)(player);

    case 'red':
      return `KIRMIZI KART! ${player} doğrudan kırmızı kartla oyun dışı kalıyor! Takım 10 kişi kalıyor!`;

    case 'injury':
      return pick(INJURY_LINES)(player);

    case 'corner':
      return pick(CORNER_LINES)(team);

    case 'offside':
      return pick(OFFSIDE_LINES)(player);

    case 'freekick':
      return pick(FREEKICK_LINES)(player);

    case 'counter':
      return pick(COUNTER_LINES)(team);

    case 'sub':
      return pick(SUB_LINES)(player, keeper, team); // keeper=outPlayer burada

    case 'kickoff':
      return pick(KICKOFF_LINES);

    case 'halftime':
      return pick(HALFTIME_LINES);

    case 'secondhalf':
      return pick(SECONDHALF_LINES);

    case 'fulltime':
      return pick(FULLTIME_LINES)(homeScore, awayScore);

    case 'penalties':
      return pick(PENALTY_LINES)(player); // player=winner burada

    case 'match_summary':
      return getMatchSummary(homeScore, awayScore, homeTeamName, awayTeamName, player);

    default:
      return `${minute}' - ${team} oyununda devam ediyor.`;
  }
}

/**
 * Yorum zincirine ait olup olmadığını kontrol et
 * @returns {boolean}
 */
export function isChainedCommentary(result) {
  return Array.isArray(result);
}
