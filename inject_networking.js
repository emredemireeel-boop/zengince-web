const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'makaleler-data.js');
let content = fs.readFileSync(filePath, 'utf8');

const { MAKALELER, MAKALE_KATEGORILERI } = require('./data/makaleler-data.js');

if (MAKALELER.some(m => m.slug === 'sosyal-sermaye-stratejik-networking')) {
    console.log("Already exists");
    process.exit(0);
}

const newIcerik = `
      <p><span class="dropcap">G</span>eleneksel finansal eğitim bize hep paranın nasıl yönetileceğini öğretir ancak çok daha kritik bir sermaye türünü es geçer: <strong>Sosyal Sermaye.</strong> İş dünyasında ve yatırım ekosisteminde çok ünlü bir söz vardır: <em>"Ağınız, net değerinizdir (Your network is your net worth)."</em> Ne kadar zeki olduğunuzun, ne kadar çok çalıştığınızın veya hangi okullardan mezun olduğunuzun bir noktadan sonra hiçbir önemi kalmaz. Zirveye giden yol, kapıları sizin için açacak olan insanlardan geçer.</p>
      
      <p>Bu makalede, sıfırdan nasıl güçlü bir sosyal ağ (network) kurabileceğinizi, zenginlerin ve elitlerin ilişki yönetimi sırlarını ve "stratejik networking" sanatının psikolojik temellerini en derin ayrıntılarına kadar inceleyeceğiz.</p>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">01.</span> 
        Sosyal Sermaye Gerçekte Nedir?
      </h2>
      <p>Sosyal sermaye, basitçe telefon rehberinizdeki kişi sayısı değildir. Bir kriz anında sizi tereddütsüz destekleyecek, size yatırım yapacak, sizin için referans olacak ve sizi daha büyük fırsatlarla buluşturacak ilişkilerin <strong>kalitesi ve derinliğidir.</strong> Finansal sermaye (para) harcandıkça tükenir; oysa sosyal sermaye paylaşıldıkça ve kullanıldıkça <em>büyüyen</em> tek sermaye türüdür.</p>

      <div class="article-quote" style="border-left: 4px solid var(--gold-400); padding-left: 20px; font-style: italic; margin: 30px 0; background: rgba(212,175,55,0.05); padding: 20px; border-radius: 0 8px 8px 0;">
        "Kimi tanıdığınız önemlidir, ancak daha önemlisi <strong>kimin sizi tanıdığı</strong> ve sizin hakkınızda ne düşündüğüdür."
      </div>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">02.</span> 
        Zayıf Bağların Gücü (The Strength of Weak Ties)
      </h2>
      <p>Sosyolog Mark Granovetter'ın çığır açan araştırmasına göre, hayatınızı değiştirecek en büyük fırsatlar (yeni bir iş, büyük bir yatırımcı, harika bir ortaklık) en yakın arkadaşlarınızdan veya ailenizden (güçlü bağlar) <strong>gelmez</strong>. Çünkü yakın çevreniz sizinle aynı bilgi havuzuna ve aynı tanıdıklara sahiptir. </p>
      <p>Gerçek fırsatlar, sadece birkaç kez karşılaştığınız, eski iş arkadaşlarınız, konferansta tanıştığınız kişiler veya LinkedIn'deki uzak bağlantılarınızdan yani <strong>zayıf bağlardan</strong> gelir. Bu yüzden zenginler, farklı sektörlerden ve farklı çevrelerden insanlarla yüzeysel de olsa sürekli temas halinde kalarak köprüler kurarlar.</p>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">03.</span> 
        Networking Bir "Avcılık" Değil, "Çiftçilik"tir
      </h2>
      <p>Fakirlik zihniyetindeki insanlar networking'i bir avcılık sporu sanır: İhtiyaçları olduğunda dışarı çıkarlar, kartvizit dağıtırlar, hemen bir şey istemek için insanlara saldırırlar ve alacaklarını aldıktan sonra ortadan kaybolurlar. Bu yaklaşım son derece itici ve değersiz hissettiricidir.</p>
      <p>Zenginlik zihniyetindeki insanlar ise networking'i bir <strong>çiftçilik</strong> olarak görür. Ortada hiçbir çıkar veya ihtiyaç yokken tohumları ekerler (ilişki kurarlar), onları sularlar (değer katarlar, yardım ederler, hal hatır sorarlar) ve yıllar sonra, zamanı geldiğinde bu tarladan meyve toplarlar. İhtiyacınız olmadan önce bir ağ kurun!</p>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">04.</span> 
        Karşılıklılık İlkesi: "Önce Ver, Sonra Al"
      </h2>
      <p>Güçlü insanlarla (sizden daha zengin, daha başarılı kişilerle) bağlantı kurmanın tek bir yolu vardır: <strong>Onlara nasıl değer katabileceğinizi bulmak.</strong> Güçlü insanların sizin CV'nize veya ne kadar zeki olduğunuza ihtiyacı yoktur; onların zaman kazanmaya, yeni perspektiflere veya spesifik sorunlarının çözülmesine ihtiyacı vardır.</p>
      <ul>
        <li>Tanıştığınız birine "Bana nasıl yardım edebilirsiniz?" diye sormak yerine, "Şu an uğraştığınız en büyük zorluk ne? Belki size bu konuda yardımcı olabilecek birini tanıyorumdur" deyin.</li>
        <li>Ücretsiz bir araştırma yapıp onlara gönderin.</li>
        <li>Onları potansiyel bir müşteri veya ortakla tanıştırın.</li>
      </ul>
      <p>Siz değer ürettiğinizde, psikolojik olarak "Karşılıklılık İlkesi" (Reciprocity) devreye girer ve o kişi size borçlu hisseder.</p>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">05.</span> 
        5 Kişi Kuralı: Ortalamanız Kaderinizdir
      </h2>
      <p>Jim Rohn'un meşhur sözünü hatırlayın: <em>"En çok vakit geçirdiğiniz 5 kişinin ortalamasısınız."</em></p>
      <p>Eğer etrafınızdaki 5 kişi sürekli ekonomik krizden şikayet eden, vizyonsuz, toksik ve tüketim odaklı insanlarsa, sizin 6. fakir olmanız sadece an meselesidir. Çünkü ayna nöronlarımız sayesinde çevremizdekilerin düşünce yapılarını, kelimelerini ve inanç sistemlerini kopyalarız.</p>
      <p>Stratejik networking, sadece yeni insanları hayatınıza dahil etmek değil, aynı zamanda sizi aşağı çeken enerjinizi emen "enerji vampirlerini" ve negatif insanları hayatınızdan acımasızca (ama nazikçe) çıkarmaktır. Çevrenizde sizden daha zeki, daha zengin ve daha vizyoner insanlar olmalı ki, odadaki "en aptal kişi" olarak sürekli öğrenmeye zorlanasınız.</p>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">06.</span> 
        Dijital Sosyal Sermaye (LinkedIn & Ötesi)
      </h2>
      <p>Bugünlerde sosyal sermayenizi büyütmek için golf kulüplerine üye olmanıza gerek yok. Dijital iziniz sizin yeni kartvizitinizdir. LinkedIn, Twitter (X) gibi platformlarda sadece içerik tüketmeyin, içerik <strong>üretin</strong>.</p>
      <p>Kendi sektörünüzle ilgili derinlemesine analizler paylaşın, başarılarınızı değil öğrendiklerinizi anlatın. Siz düzenli olarak yüksek kaliteli bilgi paylaştıkça, insanlar sizinle doğal bir şekilde bağlantı kurmak isteyecektir. Buna <strong>"Inbound Networking"</strong> denir; insanları kovalayan siz olmazsınız, sizin otoriteniz insanları size çeker.</p>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">07.</span> 
        Sessiz Zenginlik ve Şıklık Sırrı
      </h2>
      <p>Gerçekten güçlü bağlantılar kurmak istediğinizde, gösterişten (baştan aşağı logolu kıyafetler, sürekli lüks mekan paylaşımları) kaçının. Gerçek güç "sessizdir". Güvenilirlik; abartılı sözler vermekle değil, verdiğiniz küçük sözleri bile (örneğin "Sana o makaleyi saat 14:00'te atacağım" demek ve tam 14:00'te atmak) tutmakla inşa edilir.</p>
      <p>Ayrıca <strong>dinleme sanatı</strong> en büyük networking hilesidir. Çoğu insan konuşma sırasının kendisine gelmesini bekler. Bir insanı tüm dikkatinizle (telefonunuza bakmadan) dinlediğinizde, kendisini inanılmaz değerli hisseder ve size karşı derin bir sempati duyar.</p>

      <div class="article-alert" style="margin-top: 60px; background: linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(0,0,0,0.4) 100%);">
        <h3 style="margin-top: 0; color: var(--gold-300);">Aksiyon Planı: İlk 30 Gün</h3>
        <ul style="margin-bottom: 0;">
          <li><strong>Gün 1-10:</strong> Sektörünüzde veya ilgi alanınızda, şu an bulunduğunuz noktanın 2-3 adım ilerisinde olan 10 kişiyi belirleyin (LinkedIn vs.).</li>
          <li><strong>Gün 11-20:</strong> Onların içeriklerini samimi bir şekilde yorumlayın, paylaşımlarına değer katın. Onlara doğrudan bir şey istemeyen, sadece bir makale/bilgi hediye eden kısa bir mesaj atın.</li>
          <li><strong>Gün 21-30:</strong> Mevcut arkadaş çevrenizin bir denetimini yapın. Size ilham verenlerle daha çok vakit geçirme, sizi aşağı çekenlerle aranıza mesafe koyma kararı alın.</li>
        </ul>
      </div>
`;

MAKALELER.push({
    slug: "sosyal-sermaye-stratejik-networking",
    baslik: "Sosyal Sermaye: Stratejik Networking ve Çevre Edinme Sanatı",
    yazar: "Zengince Akademi",
    tarih: "22 Kasım 2024",
    okumaSuresi: "10 Dakika",
    kategori: "Psikoloji",
    kapakGorseli: "/images/sosyal_sermaye.png",
    ozet: "\"Ağınız, net değerinizdir.\" Finansal sermayeden çok daha güçlü olan Sosyal Sermaye'nin matematiği. İhtiyacınız olmadan önce güçlü bir ağı nasıl inşa edersiniz?",
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
