# Project Context: World Cup Draft & Simulation Game

Bu dosya, projenin amacını, mimarisini, eklenen yeni özellikleri ve oyun kurallarını özetleyen kılavuzdur.

---

## ⚽ Proje Amacı (Goal)
Kullanıcıların tarihi Dünya Kupası efsanelerinden 11 başlangıç oyuncusu ve 5 yedek oyuncu seçip (draft edip) kimya ve güç dengelerini optimize ettiği, ardından 16 takımlık bir eleme turnuvasında (Son 16'dan Finale kadar) efsane milli takımlara karşı canlı simülasyon maçları oynadığı, tamamen tarayıcı tabanlı (bilingual - Türkçe/İngilizce) bir web oyunudur.

### 🎮 Yeni Oynanış Kuralları & Mekanikler
1. **Zorluk Seviyesi Seçimi:** Giriş ekranında 3 zorluk seçeneği sunulur:
   - **Kolay (Easy):** Rakip güç -5 zayıflatılır, ev sahibi avantajı (+5) verilir.
   - **Normal (Normal):** Standart oyun dengesi.
   - **Efsane (Legend):** Rakipler +5 güçlendirilir, oyuncularınızın sakatlık riski artar.
2. **Kilitli Draft Slot Mekanizması:** Draft ekranında her slot (11 ilk 11, 5 yedek) yalnızca bir kez seçilebilir. Seçim yapıldıktan sonra slot kilitlenir. Kadroyu yeniden yapılandırmak için tüm draftı sıfırlayan **"Sıfırla" (Reset)** butonu kullanılmalıdır. Bu kural, sürekli süperstarları çekerek draftı basitleştirmeyi önler ve her draftı benzersiz kılar.
3. **Maç İçi Canlı Taktik Kontrolü:** Canlı maç simülasyonu sırasında oyuncu **"Hücum", "Savunma" ve "Dengeli"** taktik modlar arasında anlık geçiş yapabilir. Hücum modu gol bulma ve topa sahip olma olasılığını artırırken geride açık verir; savunma modu rakibin gol bulmasını zorlaştırır.
4. **Detaylı Maç Sonu İstatistikleri:** Maç tamamlandığında real-time simülatör verilerine dayalı detaylı istatistikler ve gol atan oyuncular listesi sunulur.
5. **Canvas Konfeti Animasyonu & Şampiyonluk:** Turnuva kazanıldığında canvas tabanlı dinamik konfeti yağmuru tetiklenir ve Müze (Efsaneler Odası) ekranında kişisel rekorlar ve draft geçmişi güncellenir.
6. **Gerçekçi Mevki ve Oyuncu Değişikliği Kısıtlamaları:** Draft seçimlerinde ve maç içi oyuncu değişikliklerinde mevkiler arası katı kurallar uygulanır. Kaleci pozisyonuna kaleci olmayan bir oyuncu yerleştirilemez ve kaleciler saha içi pozisyonlarda oynatılamaz. Benzer şekilde, savunma mevkilerine hücum oyuncuları, hücum mevkilerine de savunma oyuncuları yerleştirilemez/substitute edilemez. Bu kurallar taktiksel gerçekçiliği korumayı amaçlar.

---

## 🛠️ Mimari ve Teknolojiler (Tech Stack)
1. **Frontend:** Saf HTML5, modern CSS3 ve Vanilla JS (ES Modules).
2. **Kütüphaneler:** Sıfır dış bağımlılık (Zero dependencies).
3. **Ses Motoru:** Tarayıcının kendi **Web Audio API** arayüzü ile sentetik olarak üretilen sesler (Hakem düdüğü vibratoları, stadyum tezahüratları, gol sevinçleri, oyuncu değişiklik sesleri).
4. **Veri Depolama:** Kişisel kupalar, rekorlar ve draft geçmişi tarayıcının `LocalStorage` belleğinde saklanır.
5. **Yayınlama (Deployment):** Derleme (build) gerektirmediği için GitHub Pages üzerinde barındırılmaya uygundur ve SEO uyumludur.

---

## 📂 Dosya Yapısı (File Structure)

- `index.html` -> Giriş ekranı, Taktik Saha, Turnuva Ağacı, Canlı Maç Arenası ve Müze ekranlarının HTML şablonları.
- `styles.css` -> Temel stiller, kart tasarımları, 3D kart efektleri, taktik diziliş ekranları, animasyonlar ve taktik oyuncu değişikliği düzenlemeleri.
- `start_game.bat` -> Sunucuyu çalıştırıp oyunu tarayıcıda başlatan Windows toplu iş dosyası.
- `js/`
  - `i18n.js` -> Türkçe ve İngilizce dil çeviri modülü.
  - `data.js` -> 80+ oyuncunun verileri, formasyonlar, mevkiler ve koordinatları.
  - `audio.js` -> Hakem düdüğü, stadyum ve gol seslerini Web Audio API ile üreten ses modülü.
  - `simulator.js` -> Canlı maç simülasyonu, momentum, goller, kartlar, yorgunluk ve mevkisel performans hesaplamaları.
  - `ui.js` -> Ekran geçişlerini, genel UI kontrollerini ve form doğrulamasını yöneten ScreenManager.
  - `draft.js` -> Formasyon seçimi, draft kartları, kimya bağları, mevkisel overall düşüşleri ve kadro düzenleme modalını yöneten DraftManager.
  - `tournament.js` -> Grup aşamasını, eleme eşleşmelerini ve dinlenme yorgunluk yenilenme formüllerini yöneten TournamentManager.
  - `museum.js` -> Trophies/Kupa odasını, kişisel rekorları ve draft geçmişini yöneten MuseumManager. (Çıkış buton kontrolü dahil).
  - `reward.js` -> Maç sonlarında açılan galibiyet paketi ödül akışını yöneten RewardManager.
  - `app.js` -> Ana koordinatör controller; alt modülleri ve canlı maç simülatörünü yönetir.

---

## ⚙️ Geliştirme ve Çalıştırma Kuralları (Development & Run Guidelines)

> [!IMPORTANT]
> **WinPython Kullanım Zorunluluğu:**
> Bilgisayarda sistem genelinde global bir Python veya Node.js yüklü değildir. Yerel sunucuyu ayağa kaldırmak için mutlaka kullanıcının kendi WinPython dizini içerisindeki Python çalıştırıcısı kullanılmalıdır.
>
> **Sunucu Başlatma Komutu:**
> ```cmd
> D:\WinPython\WPy64-31380\python\python.exe -m http.server 8000
> ```
> 
> Oyunu test etmek veya çalıştırmak için bu komut `c:\Users\mahon\Desktop\WorldCup` dizini altında çalıştırılmalı veya dizindeki **`start_game.bat`** dosyası çift tıklanarak kullanılmalıdır.

---

## ✅ Tamamlanan Özellikler (Completed Features)

1. **Rest-Stamina & Yorgunluk Taşıma Mekaniği:** Oyuncuların yorgunluk değerleri maç sonrasında bir sonraki maça taşınır. İlk 11 oyuncuları maç aralarında +25, yedek kulübesinde dinlenen oyuncular ise +50 yorgunluk yeniler. Maç esnasında yedek kulübesindeki oyuncular dinlenerek yorgunluklarını geri kazanırlar.
2. **Mevki Dışı Güç Düşüşü (Out of Position Drop):** Oyuncular kendi mevkileri dışındaki mevkilerde oynatıldıklarında overall güç seviyeleri (büyük oranda kaleci-saha içi mevkiler arası olmak üzere) düşer. Bu güç düşüşü, hem kadro düzenleme ekranlarında hem de oyuncu kartlarının üzerinde görsel bir kırmızı ceza rozeti (örn: `-15`) olarak anlık yansıtılır.
3. **Müze Çıkış Butonu Kontrolü (Museum Exit Fix):** Müze ekranından (Efsaneler Odası) çıkılamama hatası düzeltildi. Eğer aktif bir turnuva oturumu varsa "Geri Dön" butonu görünür hale gelir ve kullanıcıyı kaldığı ekrana (Turnuva veya Draft) geri götürür. Oyun bittiğinde ise bu buton gizlenerek kullanıcı "Yeni Oyun" veya "Ana Menü" yönlendirmelerine yönlendirilir.
4. **Taktik Paketleri ve Yeniden Oynanabilirlik Sıfırlaması (Tactic Pack UI Reset):** "Yeni Oyun" veya "Ana Menü"ye dönüldüğünde açılan taktik formasyon paketleri ve UI listeleri tamamen sıfırlanır, böylece her yeni oyunda oyuncunun yeni taktik formasyon paketleri açabilmesi sağlanarak tekrar oynanabilirlik zevki korunur.
5. **Genişletilmiş Grup Aşamaları (Group Stages):** Oyun sadece eleme turnuvası değil, 4 gruptan oluşan 16 takımlı lig usulü grup maçları ile başlar. Gruplardan çıkan ilk 2 takım Çeyrek Finallere yükselir.
6. **Kod Modülarizasyonu (Refactoring app.js):** God class haline gelen devasa `js/app.js` dosyası bölünerek; UI, Draft, Tournament, Museum ve Reward gibi spesifik işlevlere sahip sınıflara/modüllere ayrıştırılmıştır.
7. **Tıklama ile Oyuncu Yer Değiştirme (Squad & Draft Swapping):** Draft tahtasında ve kadro yönetiminde, oyuncuları silip baştan seçmeye gerek kalmadan tıklamalarla yer değiştirebilme (swap) veya boş slotlara kaydırabilme özelliği eklendi. Aktif yer değiştirme modunda kartların etrafında altın renkli parlama animasyonu (`.swap-selected`) ve sahanın üstünde bilgilendirici banner uyarısı gösterilir.
8. **Taktiksel Saha İçi Değişiklikler (Tactical Match Swaps):** Maç içi değişiklik ekranında iki ilk 11 oyuncusu yer değiştirdiğinde bu işlem taktiksel swap olarak kaydedilir ve 5 oyuncu değişikliği limitinden düşülmez. Yalnızca yedekten ilk 11'e oyuncu girdiğinde değişiklik hakkı düşer.
9. **Responsive & Büyütülmüş Saha Tasarımı:** Saha kart boyutları büyütülerek (92x128px) okunabilirlik artırıldı. Dar ekranlarda (mobil vb.) kartların üst üste binip yazıların birbirine girmesini engellemek için futbol sahasına minimum genişlik (`min-width: 680px`) verilerek yatay kaydırılabilir (scrollable) bir yapı kuruldu.

## 📋 Yapılması Gerekenler & Yol Haritası (Backlog & Roadmap)

1. **Formasyon Çeşitliliği Artırımı:** Gelecek sürümlerde taktik paketlerinden çıkabilecek formasyon türlerinin sayısının artırılması (örn. 5-3-2, 4-5-1, v.b.).
2. **Tarihsel Turnuva Modları:** 1994, 1998, 2002 gibi belirli yılların tarihi kadroları ile oynanabilen retro turnuva modlarının eklenmesi.
3. **Daha Detaylı Taktiksel Talimatlar:** FM tarzında takıma "Geniş Oyna", "Kısa Pas Yap", "Yüksek Pres" gibi ekstra taktiksel direktiflerin verilebilmesi.

