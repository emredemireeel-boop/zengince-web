const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'makaleler-data.js');

const { MAKALELER, MAKALE_KATEGORILERI } = require('./data/makaleler-data.js');

if (MAKALELER.some(m => m.slug === 'pasif-gelir-kaynaklari-rehberi-2024')) {
    console.log("Already exists");
    process.exit(0);
}

const updateScriptPath = path.join(__dirname, 'update_article.js');
const updateScriptContent = fs.readFileSync(updateScriptPath, 'utf8');

const regex = /const replacement = \`([\s\S]*?)\`;/m;
const match = updateScriptContent.match(regex);
const items2to20 = match ? match[1] : '';

const newIcerik = `
      <p><span class="dropcap">K</span>apitalizmin en acımasız ve aynı zamanda en özgürleştirici kuralı şudur: <em>Eğer uyurken para kazanmanın bir yolunu bulamazsanız, ölene dek çalışmak zorunda kalırsınız.</em> Warren Buffett'ın bu efsanevi sözü, finansal zekanın temelini oluşturur. Sabah 9, akşam 6 bir ofise hapsolarak, kendi hayatınızın en güzel saatlerini başkalarının hayallerini inşa etmek için satıyorsunuz.</p>
      
      <p>Gerçek zenginlik, lüks arabalara binmek değil; <strong>"Yarın sabah uyanmak zorunda değilim ve buna rağmen hesabıma para yatmaya devam edecek"</strong> diyebilmektir. İşte sizi bu özgürlüğe kavuşturacak, sadece kağıt üzerinde değil, gerçek dünyada çalışan ve enflasyonu ezip geçen 20 devasa pasif gelir modeli.</p>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">01.</span> 
        Temettü Emekliliği (Dividend Investing)
      </h2>
      <p>Pasif gelirin en saf ve en asil formudur. Sağlam, köklü ve her yıl kâr eden dev şirketlerin (Ford, Coca-Cola, Tüpraş, Ford Otosan vb.) hisselerini satın alarak o şirketlere "minik bir ortak" olursunuz. Şirket yıl sonunda kazandığı milyarlarca liralık kârın bir kısmını, hisse sahiplerine nakit olarak dağıtır. Siz hiçbir şey yapmazsınız; yöneticiler sizin için çalışır, fabrikalar sizin için üretir.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> Güvenilir bir banka veya aracı kurumdan yatırım hesabı açın. Her ay düzenli olarak temettü verimi yüksek hisselerden alım yapın. Temettüler yattıkça o parayı yemeyip tekrar aynı hisselerden alın (Bileşik Getiri mucizesi).</li>
        <li><strong>Avantajı:</strong> Yüzde yüz pasiftir. Zamanınızı sıfır harcar. Hem hisse değerlenir hem nakit öder.</li>
        <li><strong>Dezavantajı:</strong> Başlangıçta gelen paralar (yıllık %4-8) komik gelecektir. Kartopu etkisinin büyümesi için 10-15 yıl disiplinle beklenmesi gerekir.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">02.</span>${items2to20}

      <h2 style="margin-top: 60px; color: var(--gold-200); border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 15px;">Pasif Gelir Kaynakları Karşılaştırma Tablosu (Risk & Getiri)</h2>
      <div style="overflow-x:auto;">
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; text-align: left; background: rgba(0,0,0,0.2); border-radius: 8px;">
          <thead>
            <tr style="background: rgba(212,175,55,0.1); color: var(--gold-300);">
              <th style="padding: 15px; border-bottom: 1px solid rgba(212,175,55,0.2);">Gelir Modeli</th>
              <th style="padding: 15px; border-bottom: 1px solid rgba(212,175,55,0.2);">Başlangıç Sermayesi</th>
              <th style="padding: 15px; border-bottom: 1px solid rgba(212,175,55,0.2);">Aktif Çaba (Başlangıçta)</th>
              <th style="padding: 15px; border-bottom: 1px solid rgba(212,175,55,0.2);">Risk Seviyesi</th>
              <th style="padding: 15px; border-bottom: 1px solid rgba(212,175,55,0.2);">Potansiyel Getiri</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">01. Temettü Hisseleri</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Yüksek</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #F5D061;">Orta</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Yıllık %4-8</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">02. Gayrimenkul / Airbnb</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Çok Yüksek</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Orta</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #2ECC71;">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Yüksek</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">03. Dijital Ürün İmparatorluğu</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Sıfır</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Çok Yüksek</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #2ECC71;">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Sınırsız</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">04. Affiliate Marketing</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Yüksek</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #2ECC71;">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Yüksek</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">05. YouTube Kanalı</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Çok Yüksek</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #2ECC71;">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Çok Yüksek</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">06. Borsa Yatırım Fonları (ETF)</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Çok Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #F5D061;">Orta</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Yıllık %8-10</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">07. Uygulama/SaaS Geliştirme</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Yüksek</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #F5D061;">Orta</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Sınırsız</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">08. Stok Fotoğraf / Video</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Orta</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #2ECC71;">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Düşük</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">09. Blog ve Niş Web Siteleri</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Çok Yüksek</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #F5D061;">Orta</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Yüksek</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">10. Otomatik Vending Makineleri</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Orta</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Orta</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #F5D061;">Orta</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Orta</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">11. Kripto Staking / DeFi</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Orta</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #E74C3C;">Çok Yüksek</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Çok Yüksek</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">12. Domain Yatırımcılığı</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Orta</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #F5D061;">Orta</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Dalgalı</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">13. P2P Lending Platformları</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Orta</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Çok Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #E74C3C;">Yüksek</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">%10-14</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">14. Print on Demand</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Sıfır</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Orta</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #2ECC71;">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Orta</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">15. Yatırım Fonları & Eurobond</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Yüksek</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Çok Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #2ECC71;">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Yıllık %6-8</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">16. Güneş Enerjisi (GES)</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Çok Yüksek</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #2ECC71;">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Yüksek</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">17. Müzik/Beat Telifleri</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Yüksek</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #2ECC71;">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Orta</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">18. E-Ticaret Depo Kiralama</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Yüksek</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Orta</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #2ECC71;">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Orta</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">19. Franchising / İsim Hakkı</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Yüksek</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Çok Yüksek</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #F5D061;">Orta</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Çok Yüksek</td></tr>
            <tr><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">20. Abonelik Bültenleri</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Sıfır</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Çok Yüksek</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #2ECC71;">Düşük</td><td style="padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">Yüksek</td></tr>
          </tbody>
        </table>
      </div>

      <div class="article-alert" style="margin-top: 60px; background: linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(0,0,0,0.4) 100%);">
        <h3 style="margin-top: 0; color: var(--gold-300);">Büyük Uyarı: Pasif Gelir Bir "Gecede Zengin Olma" Yalanı Değildir!</h3>
        <p style="margin-bottom: 0;">En büyük yanılgı, pasif gelirin "sahilde kokteyl yudumlarken gökten para yağması" sanılmasıdır. Oysa fizik kurallarında olduğu gibi, ekonomide de <strong>yoktan enerji (veya değer) var edilemez.</strong> Pasif gelir; bugün çok yoğun çalışarak veya ciddi bir sermaye koyarak bir sistem inşa etmeniz ve o sistemin <em>gelecekte</em> size sürekli nakit akışı sağlamasıdır. Yani başlangıçta devasa bir <strong>aktif çaba, zaman fedakarlığı, disiplin veya sermaye</strong> gerektirir.</p>
        <p style="margin-top: 16px; margin-bottom: 0;"><strong>Kusursuz Başlangıç Stratejisi:</strong> Maaşlı işinize (aktif gelir kaynağınıza) dört elle sarılın. O işten kazandığınız paranın ve zamanın bir kısmını tüketim yerine üretime kaydırın. Gündüzleri faturalarınızı ödemek için çalışın, <strong>akşam saat 18:00'den gece 01:00'e kadar ise kendi pasif gelir sistemlerinizi ve özgürlüğünüzü inşa etmek için çalışın.</strong> Kendinize birden çok gelir kaynağı (Multiple Streams of Income) yaratmak, sizi işsizlikten, patron mobbinginden, enflasyondan ve finansal anksiyeteden koruyacak en güçlü çelik yelektir.</p>
      </div>
`;

MAKALELER.splice(1, 0, {
    slug: "pasif-gelir-kaynaklari-rehberi-2024",
    baslik: "Pasif Gelir Kaynakları ve Stratejileri (2024 Rehberi)",
    yazar: "Zengince Akademi",
    tarih: "22 Kasım 2024",
    okumaSuresi: "15 Dakika",
    kategori: "Yatırım",
    kapakGorseli: "/images/passive_income.png",
    ozet: "Uyurken para kazanmanın matematiğini keşfedin. Temettü emekliliğinden dijital gayrimenkullere kadar 20 farklı gerçek pasif gelir modeli ve başlama rehberi.",
    icerik: newIcerik
});

let outText = "'use strict';\n\nconst MAKALELER = [\n";

MAKALELER.forEach((m, idx) => {
    let str = `  {
    "slug": ${JSON.stringify(m.slug)},
    "baslik": ${JSON.stringify(m.baslik)},
    "yazar": ${JSON.stringify(m.yazar)},
    "tarih": ${JSON.stringify(m.tarih)},
    "okumaSuresi": ${JSON.stringify(m.okumaSuresi)},
    "kategori": ${JSON.stringify(m.kategori)},
    "kapakGorseli": ${JSON.stringify(m.kapakGorseli)},
    "ozet": ${JSON.stringify(m.ozet)},
    "icerik": \`\n${m.icerik}\n    \`\n  }`;
    if (idx < MAKALELER.length - 1) {
        str += ",\n";
    }
    outText += str;
});

outText += "\n];\n\nconst MAKALE_KATEGORILERI = " + JSON.stringify(MAKALE_KATEGORILERI, null, 2) + ";\n\nmodule.exports = { MAKALELER, MAKALE_KATEGORILERI };\n";

fs.writeFileSync(filePath, outText, 'utf8');
console.log("GENERATED SUCCESSFULLY");
