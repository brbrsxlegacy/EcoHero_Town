# EcoHero Town

7–13 yaş için çevre bilincini oynayarak öğreten, bağımlılıksız bir HTML Canvas oyunu.

## Oyna

`index.html` dosyasını tarayıcıda aç. Kurulum, API anahtarı veya internet gerekmez.
Alternatif: `python3 -m http.server 8080` komutunu proje dizininde çalıştır ve `http://localhost:8080` adresini aç.
Vercel veya GitHub Pages gibi statik servislerde doğrudan yayınlanabilir; build gerekmez.

## Kontroller

- WASD / oklar: hareket
- E / boşluk: en yakındaki nesneyle etkileşim
- M: harita ve elektrikli otobüs
- B: açılmış bisikleti kullan
- Esc: menü
- Dokunmatik: yön tuşları ve etkileşim düğmesi

## Özellikler

- Siyah dış çizgili, kodla çizilmiş özgün 2D çizgi film kasabası.
- Yedi bölge; toplam kazanılan puanla açılır.
- Çöp toplama, dört atık türünü ayırma, büyüyen fidanlar, su ve enerji tasarrufu.
- Beş mini oyun: geri dönüşüm (sürükle veya tıkla), süreli temizlik, fidan dikme, boru yönleri, güneş paneli yönleri.
- Puan harcama, kıyafet, şapka, çanta, bisiklet ve çiçekli ev dekoru.
- NPC görevleri, başarımlar, Web Audio müzik ve efektler.
- localStorage otomatik kayıt; açılan bölge ve seviyeler harcanan puanlardan etkilenmez.

## Doğrulama

`node test.cjs` ile oyun mantığı ve çizim fonksiyonları sahte DOM/Canvas ortamında kontrol edilir. Bu test gerçek tarayıcıda görsel kalite, ses veya dokunmatik doğrulaması değildir.

## Kapsam

Tek oyunculu ilk sürüm. Boru ve güneş paneli oyunları yön bulma bulmacalarıdır; fizik simülasyonu değildir. Mini oyunların yeniden oynanması rozet hedeflerine ulaşmayı sağlar. Çevre seviyesi bir oyun göstergesidir; gerçek karbon emisyonu ölçümü değildir. Yeni karakterler kıyafet/renk varyasyonlarıdır.
