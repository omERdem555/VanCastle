Van Kalesi — Statik Web Sitesi

Proje: Statik, yerel (local) bir web sitesi. Herhangi bir API gerektirmez.

Çalıştırma

- Basitçe `index.html` dosyasını tarayıcıda açabilirsiniz.
- Alternatif (lokal sunucu):

```bash
# Python 3
python -m http.server 8000
# sonra tarayıcıda http://localhost:8000/ adresini açın
```

Dosya Yapısı (özet)

- index.html — GİRİŞ sayfası
- pages/ — diğer başlıklar için sayfalar
- css/styles.css — stiller
- js/main.js — küçük etkileşim (menü toggling)
- assets/ — görseller ve diğer varlıklar

Nasıl katkıda bulunulur

- `index.html` içinde GİRİŞ metnini düzenleyin. Metni bana yazın, ben sayfaya ekleyeyim.
- Görsel eklemek için `assets/` klasörüne görsel yükleyin ve `<img src="assets/your-image.jpg">` şeklinde kullanın.

İleri adımlar

- GİRİŞ içeriğini beraber yazalım; bana metni verin veya düzenlememi isteyin.
- Görselleri sağlayın, ben yerleştireyim ve uygun altyazı/attribution ekleyeyim.
