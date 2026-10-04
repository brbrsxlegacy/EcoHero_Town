# EcoHero Town 3D

Özgün geometrilerle oluşturulmuş, siyah dış çizgili 3D çevre macerası. Three.js 0.158.0 proje içinde bulunur; CDN bağlantısı gerekmez.

## Başlatma

Projenin tamamını indir ve `index.html` dosyasını Chrome/Edge/Firefox gibi WebGL destekli bir tarayıcıda aç. Statik hosting için kök dizini kullan; build gerekmez. `vendor/` klasörünü de yayınla.

## Kontroller

WASD / oklar: yürü. E / boşluk: etkileş. M: harita/elektrikli otobüs. B: bisiklet. Q / R veya ↻: kamerayı döndür. Esc: menü. Dokunmatik yön tuşları desteklenir.

## 3D yenilikleri

- Perspektif kamera, yumuşak takip ve döndürülebilir görüş.
- Toon ışıklandırma, siyah siluet çizgileri, masaüstünde yumuşak gölgeler.
- Eklemli karakter: yürüyüş, nefes, etkileşimde eğilme, bisiklet pedallama.
- NPC el sallama, sallanan yapraklar, hareketli bulutlar, su damlaları ve zıplayan tavşanlar.
- Üç boyutlu evler, çatılar, pencereler, banklar, lambalar, geri dönüşüm kutuları ve otobüsler.
- Fidan büyümesi, kasaba canlanması, çiçekli ev dekoru ve ödül parçacıkları.
- İlk sürümdeki yedi bölge, mini oyunlar, görevler, kıyafetler, puan ve rozetler korunur. Aynı tarayıcıdaki önceki kayıtlar uyumludur.

## Doğrulama

`node test.cjs`: gerçek Three.js geometri/scene nesneleri ile sahte DOM ve renderer kullanarak oyun mantığını, sahne kurulumunu ve animasyon kodunun çalışmasını kontrol eder. WebGL piksel çıktısı, gerçek ses ve dokunmatik performansı bu testin kapsamı dışındadır.

## Lisans

Three.js MIT lisansı: `vendor/THREE-LICENSE.txt`. Oyunun modelleri kodla oluşturulur; dış model/asset paketi kullanılmaz.
