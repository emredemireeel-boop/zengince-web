const fs = require('fs');
const path = require('path');

// 1. Fix makaleler-data.js
const makalelerPath = path.join(__dirname, 'data', 'makaleler-data.js');
let { MAKALELER, MAKALE_KATEGORILERI } = require('./data/makaleler-data.js');

MAKALELER = MAKALELER.filter(m => m.slug !== 'sosyal-sermaye-stratejik-networking');

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

fs.writeFileSync(makalelerPath, outText, 'utf8');

// 2. Fix aliskanliklar-data.js
const aliskanlikPath = path.join(__dirname, 'data', 'aliskanliklar-data.js');
let { ALISKANLIKLAR, ALISKANLIK_KATEGORILER } = require('./data/aliskanliklar-data.js');

const networkingHabit = ALISKANLIKLAR.find(a => a.slug === 'networking');
if (networkingHabit) {
    networkingHabit.kapakGorseli = '/images/sosyal_sermaye.png'; // apply new image
    networkingHabit.detayliIcerik = `
      <p><span class="dropcap">G</span>eleneksel finansal eğitim bize hep paranın nasıl yönetileceğini öğretir ancak çok daha kritik bir sermaye türünü es geçer: <strong>Sosyal Sermaye.</strong> İş dünyasında ve yatırım ekosisteminde çok ünlü bir söz vardır: <em>"Ağınız, net değerinizdir (Your network is your net worth)."</em> Ne kadar zeki olduğunuzun, ne kadar çok çalıştığınızın veya hangi okullardan mezun olduğunuzun bir noktadan sonra hiçbir önemi kalmaz. Zirveye giden yol, kapıları sizin için açacak olan insanlardan geçer.</p>
      
      <p>Bu alışkanlık rehberinde, sıfırdan nasıl güçlü bir sosyal ağ (network) kurabileceğinizi, zenginlerin ve elitlerin ilişki yönetimi sırlarını ve "stratejik networking" sanatının psikolojik temellerini en derin ayrıntılarına kadar inceleyeceğiz.</p>

      <div class="article-alert">
        <strong>"Ayna Nöronlar ve 5 Kişi Kuralı:</strong><br>
        Psikoloji bilimi kanıtlamıştır ki, en çok vakit geçirdiğiniz 5 kişinin ortalaması olursunuz. İnsan beyni "Ayna Nöronlar" sayesinde etrafındaki insanların alışkanlıklarını, şikayetlerini ve finansal zihniyetini otomatik olarak kopyalar. Eğer etrafınızdaki 5 kişi sürekli ekonomiden şikayet edip hafta sonu maç izlemeyi konuşuyorsa, beyniniz asla yeni bir yatırım fırsatı aramaya programlanmayacaktır. Çevrenizi acımasızca temizleyin ve sizi yukarı çeken zihinlerle donatın.
      </div>

      <h2 style="margin-top: 40px; color: var(--gold-200);">Zayıf Bağların Gücü (The Strength of Weak Ties)</h2>
      <p>Sosyolog Mark Granovetter'ın çığır açan araştırmasına göre, hayatınızı değiştirecek en büyük fırsatlar (yeni bir iş, büyük bir yatırımcı, harika bir ortaklık) en yakın arkadaşlarınızdan veya ailenizden (güçlü bağlar) <strong>gelmez</strong>. Çünkü yakın çevreniz sizinle aynı bilgi havuzuna ve aynı tanıdıklara sahiptir. </p>
      <p>Gerçek fırsatlar, sadece birkaç kez karşılaştığınız, eski iş arkadaşlarınız, konferansta tanıştığınız kişiler veya LinkedIn'deki uzak bağlantılarınızdan yani <strong>zayıf bağlardan</strong> gelir. Bu yüzden zenginler, farklı sektörlerden ve farklı çevrelerden insanlarla yüzeysel de olsa sürekli temas halinde kalarak köprüler kurarlar.</p>

      <h2 style="margin-top: 40px; color: var(--gold-200);">Networking Bir "Avcılık" Değil, "Çiftçilik"tir</h2>
      <p>Fakirlik zihniyetindeki insanlar networking'i bir avcılık sporu sanır: İhtiyaçları olduğunda dışarı çıkarlar, kartvizit dağıtırlar, hemen bir şey istemek için insanlara saldırırlar ve alacaklarını aldıktan sonra ortadan kaybolurlar. Bu yaklaşım son derece itici ve değersiz hissettiricidir.</p>
      <p>Zenginlik zihniyetindeki insanlar ise networking'i bir <strong>çiftçilik</strong> olarak görür. Ortada hiçbir çıkar veya ihtiyaç yokken tohumları ekerler (ilişki kurarlar), onları sularlar (değer katarlar, yardım ederler, hal hatır sorarlar) ve yıllar sonra, zamanı geldiğinde bu tarladan meyve toplarlar. İhtiyacınız olmadan önce bir ağ kurun!</p>

      <h2 style="margin-top: 40px; color: var(--gold-200);">Üst Düzey Ağ Kurma Stratejileri</h2>
      <ul>
        <li style="margin-bottom: 12px;"><strong>Önce Değer Verin (Give Before You Ask):</strong> Güçlü, zengin ve meşgul insanların yanına gidip "Bana yatırım yapar mısınız?" derseniz reddedilirsiniz. Onlara karşılıksız bir değer sunun: Onların ilgilendiği bir haberi yollayın, aradıkları yetenekli bir çalışanı onlara yönlendirin. Beklentisiz değer sunan kişi masada her zaman yer bulur.</li>
        <li style="margin-bottom: 12px;"><strong>Gatekeeper (Kapı Tutucu) Yönetimi:</strong> Hedeflediğiniz dev şirketin CEO'suna direkt ulaşamazsınız. Onların etrafında özel asistanlar, danışmanlar veya sekreterler (Gatekeepers) vardır. Bu kişileri aşılacak bir duvar değil, kazanılacak bir müttefik olarak görün. Onlara CEO'ya gösterdiğiniz saygının aynısını gösterdiğinizde, sizi o masaya onlar oturtacaktır.</li>
        <li style="margin-bottom: 12px;"><strong>Dijital Sosyal Sermaye (Inbound Networking):</strong> Kendi sektörünüzle ilgili derinlemesine analizler paylaşın, başarılarınızı değil öğrendiklerinizi anlatın. Siz düzenli olarak yüksek kaliteli bilgi paylaştıkça, insanlar sizinle doğal bir şekilde bağlantı kurmak isteyecektir. İnsanları kovalayan siz olmazsınız, sizin otoriteniz insanları size çeker.</li>
        <li style="margin-bottom: 12px;"><strong>Sessiz Zenginlik ve Şıklık Sırrı:</strong> Gerçek güç sessizdir. Güvenilirlik, abartılı sözler vermekle değil, verdiğiniz küçük sözleri bile tutmakla inşa edilir. Dinleme sanatı en büyük hiledir; bir insanı telefonunuza bakmadan tüm dikkatinizle dinlediğinizde size karşı derin bir sempati duyar.</li>
      </ul>
`;
}

let aliskanlikOut = "'use strict';\n\nconst ALISKANLIKLAR = [\n";
ALISKANLIKLAR.forEach((a, idx) => {
    let str = `  {
    "slug": ${JSON.stringify(a.slug)},
    "baslik": ${JSON.stringify(a.baslik)},
    "ikon": ${JSON.stringify(a.ikon)},
    "saat": ${JSON.stringify(a.saat)},
    "kategori": ${JSON.stringify(a.kategori)},
    "aciklama": ${JSON.stringify(a.aciklama)},
    "nasil": ${JSON.stringify(a.nasil, null, 4).replace(/\n/g, '\n    ')},
    "istatistik": ${JSON.stringify(a.istatistik)},
    "kaynak": ${JSON.stringify(a.kaynak)},
    "kapakGorseli": ${JSON.stringify(a.kapakGorseli)},
    "detayliIcerik": \`\n${a.detayliIcerik}\n    \`\n  }`;
    if (idx < ALISKANLIKLAR.length - 1) {
        str += ",\n";
    }
    aliskanlikOut += str;
});

aliskanlikOut += "\n];\n\nconst ALISKANLIK_KATEGORILER = " + JSON.stringify(ALISKANLIK_KATEGORILER, null, 2) + ";\n\nmodule.exports = { ALISKANLIKLAR, ALISKANLIK_KATEGORILER };\n";

fs.writeFileSync(aliskanlikPath, aliskanlikOut, 'utf8');
console.log("FIXED BOTH MAKALELER AND ALISKANLIKLAR");
