# Balon Patlat

Kurulum veya build gerektirmeyen, iPhone Safari'de açılabilen çok basit bir mobil web oyunu.

## Telefonda nasıl açılır?

Bu oyun bir web sayfası olduğu için iPhone'da açmanın en kolay yolu oyunu internette yayınlanmış bir linkten açmaktır. Repo bir yere yayınlanmadıysa telefonda doğrudan açabileceğin hazır bir link oluşmaz.

### En kolay kullanım

1. Bu klasörü GitHub Pages, Netlify, Vercel veya benzeri statik site hizmetlerinden biriyle yayınlayın.
2. Yayınlanan linki iPhone'da Safari ile açın.
3. **Başla** butonuna dokunun ve oynayın.
4. İsterseniz Safari'de **Paylaş > Ana Ekrana Ekle** diyerek oyunu uygulama gibi ana ekrana ekleyin.

### Bilgisayardan aynı Wi-Fi'daki iPhone'a açmak

Bilgisayarda bu klasörde şu komutu çalıştırın:

```bash
python3 -m http.server 4173
```

Sonra bilgisayarın yerel IP adresini kullanarak iPhone Safari'de şu adrese gidin:

```text
http://BILGISAYAR_IP_ADRESI:4173/
```

Örnek: `http://192.168.1.25:4173/`


## Sadece telefondayken GitHub'a gönderme

Bilgisayara erişimin yoksa dosyaları GitHub'da görünür yapmanın pratik yolu GitHub mobil web veya Codespaces kullanmaktır:

### GitHub mobil web ile

1. iPhone'da Safari'den GitHub repo sayfanı aç.
2. **Add file > Upload files** seçeneğini kullan.
3. Bu oyundaki dosyaları (`index.html`, `styles.css`, `game.js`, `manifest.webmanifest`, `service-worker.js`, `README.md`) yükle.
4. **Commit changes** butonuna dokun.

### GitHub Codespaces ile

1. GitHub repo sayfanda **Code > Codespaces > Create codespace** seç.
2. Terminal açıldığında bu repo dosyalarını ekle veya değişiklikleri uygula.
3. `git status`, `git add .`, `git commit -m "Add mobile balloon game"` ve `git push` komutlarını çalıştır.

Not: Bu çalışma alanında GitHub remote'u tanımlı değilse buradan doğrudan GitHub'a gönderim yapılamaz. `git remote add origin ...` ile repo bağlantısı ve push yetkisi gerekir.

## Nasıl oynanır?

1. `index.html` dosyasını bir tarayıcıda açın veya yayınlanan oyun linkine gidin.
2. **Başla** butonuna dokunun.
3. 30 saniye içinde balonlara dokunarak puan toplayın.
4. Bomba çıkarsa dokunmayın; dokunursanız 3 puan kaybedersiniz.

Oyun PWA meta etiketleri ve service worker içerir; bir web sunucusundan açıldığında iPhone'da ana ekrana eklenebilir ve önbelleğe alınabilir.
