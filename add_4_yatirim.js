const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'yatirim-araclari-data.js');
let { YATIRIM_ARACLARI } = require('./data/yatirim-araclari-data.js');

const newItems = [
  {
    slug: "yabanci-hisse-senetleri",
    baslik: "Yabancı Hisse Senetleri (Wall Street)",
    kisaOzet: "Apple, Microsoft, Tesla gibi küresel teknoloji ve sanayi devlerine ortak olarak portföyü dolar bazında büyütmek.",
    tanim: "ABD (S&P 500, Nasdaq) veya Avrupa borsalarında işlem gören şirketlerin hisselerini ifade eder. Türkiye'deki kur ve ülke riskinden (ülke riski) tamamen izole, global bir yatırım türüdür.",
    icon: "🌎",
    renk: "#2980B9",
    skorlar: {
      risk: 6,
      getiriPotansiyeli: 8,
      likidite: 9,
      zamanIhtiyaci: 5
    },
    ayrintilar: {
      vergiDurumu: "Türk borsasının aksine, yurtdışı borsalardan elde edilen alım-satım kârları ve temettüler yıllık Gelir Vergisi beyannamesine tabidir (Çifte vergilendirmeyi önleme anlaşmaları dikkate alınır).",
      psikolojikZorluk: "Düşük/Orta. Dünyanın en büyük ve stabil şirketlerine ortak olduğunuz için yerel hisselere göre daha az streslidir, ancak küresel krizlerde (Örn: Fed faiz kararları) dalgalanır.",
      bilesikGetiriGucu: "Çok Yüksek. S&P 500 endeksi tarihsel olarak yıllık ortalama %9-10 civarı dolar bazlı bileşik getiri sağlamıştır.",
      uzmanlikIhtiyaci: "Orta. Küresel ekonomiyi, İngilizce finansal raporları ve döviz/vergi mevzuatını takip etmeyi gerektirir."
    },
    avantajlar: [
      "Dünyanın en yenilikçi ve en büyük bütçeli şirketlerine (Yapay zeka, uzay, ilaç) doğrudan ortak olursunuz.",
      "Hem hissenin kendi dolar bazlı yükselişinden hem de Dolar/TL kurunun artışından (Çift yönlü) kazanma şansı verir.",
      "Türkiye ekonomisindeki dalgalanmalara karşı portföyünüzü mükemmel şekilde hedge eder (sigortalar)."
    ],
    dezavantajlar: [
      "Vergi beyannamesi doldurmak karmaşık olabilir ve kazancın bir kısmı vergiye gider.",
      "Aracı kurumların uluslararası işlem komisyonları yerel borsaya göre daha yüksek olabilir.",
      "Türkiye saatiyle akşam saatlerinde piyasa açık olduğu için yaşam rutininizi etkileyebilir."
    ],
    nasilAlinir: "Artık birçok yerli banka ve aracı kurumun mobil uygulaması (Midas vb.) üzerinden tek tıkla parça hisse (Örn: 10 dolarlık Apple hissesi) alınabilmektedir.",
    tarihselOrnek: "S&P 500 endeks fonuna her ay düzenli olarak 100 dolar yatıran bir yatırımcı, 20 yılın sonunda hem dolar bazında hem de TL bazında devasa bir servet inşa etmiştir.",
    kimlerIcinUygun: "Sermayesinin bir kısmını ülke dışına (global piyasalara) çıkarmak isteyen, uzun vadeli düşünen ve dolar bazında getiri arayan yatırımcılar.",
    altinKural: "Tek bir yabancı hisse seçmek yerine, tüm ABD piyasasını kapsayan borsa yatırım fonlarını (ETF - Örn: VOO, QQQ) almak genellikle çoğu profesyonelin tercihidir."
  },
  {
    slug: "doviz-ve-nakit",
    baslik: "Döviz (Nakit Dolar / Euro)",
    kisaOzet: "Kendi ülkenizin enflasyonundan kaçmak için başka bir ülkenin itibari parasına (Fiat money) sığınmak.",
    tanim: "TL'nin değer kaybından korunmak amacıyla Dolar, Euro, Sterlin gibi yabancı ülke para birimlerini nakit veya vadesiz hesapta tutmaktır. Bu teknik olarak bir 'yatırım' değil, sadece bir değer saklama/savunma aracıdır.",
    icon: "💱",
    renk: "#7F8C8D",
    skorlar: {
      risk: 2,
      getiriPotansiyeli: 1,
      likidite: 10,
      zamanIhtiyaci: 1
    },
    ayrintilar: {
      vergiDurumu: "Kambiyo muamele vergisi (binde 2) gibi alım anında uygulanan küçük vergiler dışında ekstra bir gelir vergisi beyanı gerektirmez.",
      psikolojikZorluk: "Çok Düşük. Ancak enflasyonun döviz artışından yüksek olduğu yıllarda 'Param dolarda ama yine de alım gücüm düşüyor' stresi yaşatır.",
      bilesikGetiriGucu: "Sıfır. Yastık altındaki 100 Dolar, 20 yıl sonra yine 100 Dolardır. Üstelik ABD enflasyonu nedeniyle 20 yıl sonra o 100 Doların alım gücü yarı yarıya düşmüş olur.",
      uzmanlikIhtiyaci: "Hiç Yok. Herkesin bildiği ve en çok başvurduğu ilkel korunma yöntemidir."
    },
    avantajlar: [
      "Aşırı yüksek likiditeye sahiptir, dünyanın her yerinde anında harcanabilir.",
      "Gelişmekte olan ülkelerdeki ani devalüasyon şoklarına karşı anında kalkan görevi görür.",
      "Fiziki olarak tutulduğunda banka sistemi veya siber krizlerden etkilenmez."
    ],
    dezavantajlar: [
      "Döviz yatırım değildir. ABD'nin de kendi enflasyonu vardır (%2-5). Nakit dolar tutmak, paranızın daha yavaş erimesini izlemektir.",
      "Herhangi bir faiz, kâr payı veya temettü üretmez.",
      "Bankalar arası döviz makasları acil durumlarda çok açılabilir."
    ],
    nasilAlinir: "Döviz bürolarından fiziki olarak veya banka uygulamalarından saniyeler içinde alınabilir.",
    tarihselOrnek: "1990 yılında 10.000 Doları kasasına kilitleyen biri, 2024 yılında kasayı açtığında yine 10.000 Dolar bulur. Ancak 1990'da o parayla lüks bir araba alınabilirken, bugün belki sadece ikinci el bir araba alınabilir. Para erimiştir.",
    kimlerIcinUygun: "Çok yakında (1-6 ay içinde) döviz cinsinden bir ödeme yapacak olanlar veya piyasalar çökmeden önce nakitte bekleyip fırsat kollayanlar.",
    altinKural: "Zenginler döviz tutmaz, döviz üreten varlıklar (Hisse, emlak, şirket) tutarlar. Nakit dövizi sadece fırsatları değerlendirmek için bir cephane olarak kullanın."
  },
  {
    slug: "halka-arzlar",
    baslik: "Halka Arzlar (IPO)",
    kisaOzet: "Büyümek isteyen şirketlerin hisselerini borsada ilk kez genel halkın satışına (genellikle iskontolu) sunması süreci.",
    tanim: "Bir şirketin (Örn: Bir enerji firması veya gıda zinciri) büyüme finansmanı sağlamak için paylarının bir kısmını Borsa İstanbul'da (veya küresel borsalarda) ilk defa satışa çıkarmasıdır (Initial Public Offering).",
    icon: "🎊",
    renk: "#E74C3C",
    skorlar: {
      risk: 4,
      getiriPotansiyeli: 5,
      likidite: 8,
      zamanIhtiyaci: 4
    },
    ayrintilar: {
      vergiDurumu: "Normal BIST hisselerinde olduğu gibi %0 stopaj uygulanır (Mevcut kanunlar çerçevesinde kâr amaçlı bireysel alım satımlarda).",
      psikolojikZorluk: "Düşük. Genellikle ilk günlerde tavan (maksimum yükseliş) serileri yaptığı için yatırımcıya anında bir dopamin ve mutluluk verir. Asıl zorluk, hissenin düşüşe geçtiği noktada ne zaman satılacağına karar vermektir.",
      bilesikGetiriGucu: "Orta. Halka arzdan alınan hisse uzun yıllar elde tutulup şirketin büyümesine ortak olunursa çok yüksek bileşik getiri yaratabilir.",
      uzmanlikIhtiyaci: "Düşük-Orta. SPK tarafından yayınlanan 'İzahname' adlı resmi belgeyi (şirketin borçluluk durumu, fonu nerede kullanacağı) okuma kültürü gerektirir."
    },
    avantajlar: [
      "Şirketler borsaya ilk kez çıkarken genellikle gerçek değerinin %15-20 altında (iskontolu) bir fiyattan satılır. Bu da yatırımcıya baştan bir güvenlik marjı sağlar.",
      "Borsaya yeni girenler için piyasayı öğrenmenin en düşük riskli ve eğlenceli yollarından biridir.",
      "İlk haftalarda genellikle hızlı ve yüksek oransal getiriler sunar."
    ],
    dezavantajlar: [
      "Kurumsal yatırımcılara kıyasla bireysel yatırımcılara çok az (Örn: 500 TL'lik) hisse düşer. Oransal getiri yüksek olsa da miktar olarak zengin etmez.",
      "Her halka arz kaliteli değildir; bazı şirketler sadece borçlarını ödemek için halka açılabilir.",
      "Tavan serisi bozulduğunda küçük yatırımcılar arasında panik satışları yaşanır."
    ],
    nasilAlinir: "Bankanızın yatırım menüsünde 'Halka Arz' sekmesine girerek, talep toplama tarihlerinde (Örn: Perşembe-Cuma) başvuruda bulunulur.",
    tarihselOrnek: "Kaliteli bir yenilenebilir enerji şirketinin halka arzından 100 lot alıp bunu 5 yıl boyunca hiç satmayan yatırımcılar, hem şirketin bedelsiz sermaye artırımlarından hem de devasa sektör büyümesinden inanılmaz kârlar elde etmiştir.",
    kimlerIcinUygun: "Borsaya yeni başlayanlar, küçük sermayelerle risksiz-getirili denemeler yapmak isteyenler ve uzun vadeli değer yatırımı kovalayanlar.",
    altinKural: "Halka arz edilen şirketin kasasına girecek olan parayı nerede kullanacağına bakın: Yeni fabrika veya Ar-Ge için mi, yoksa geçmişteki kötü borçlarını ödemek için mi? Kötü şirketleri ilk günden eleyin."
  },
  {
    slug: "alternatif-yatirimlar-sanat-saat",
    baslik: "Alternatif (Sanat, Saat & Koleksiyon)",
    kisaOzet: "Zenginlerin favorisi; lüks saatler, nadir tablolar, klasik otomobiller ve limitli şaraplar gibi fiziksel statü varlıkları.",
    tanim: "Hisse senedi veya tahvil gibi finansal kağıtlar yerine, fiziksel, estetik ve kültürel değeri olan nadide eserlere yatırım yapmaktır. Hem sanatsal bir zevk hem de servet transferi aracıdır.",
    icon: "⌚",
    renk: "#8E44AD",
    skorlar: {
      risk: 7,
      getiriPotansiyeli: 8,
      likidite: 1,
      zamanIhtiyaci: 8
    },
    ayrintilar: {
      vergiDurumu: "Ülkeden ülkeye değişmekle birlikte, koleksiyon eserleri fiziksel ve kayıtsız el değiştirebildiği için (veya gümrükteki antrepolarda saklandığında) geleneksel sistemlerden farklı ve kapalı bir vergi dinamiğine sahiptir.",
      psikolojikZorluk: "Düşük. Eserin fiyatı günlük bir ekranda yanıp sönmez. Evinizin duvarında duran bir tabloya bakarken sadece keyif alırsınız.",
      bilesikGetiriGucu: "Yok. Bir tablo başka tablolar doğurmaz. Sadece zaman geçtikçe nadirliği artar ve zenginlerin sayısı arttıkça o esere olan talep birim fiyatı yukarı çeker.",
      uzmanlikIhtiyaci: "Çok Yüksek. Sahte eserleri anlama (Orijinallik), müzayede dinamiklerini bilme, ressamların veya saat mekanizmalarının tarihini inceleyecek tutkuya sahip olmak şarttır."
    },
    avantajlar: [
      "Borsalardaki çöküşlerden, faiz kararlarından ve küresel krizlerden büyük ölçüde bağımsızdır (Korelasyonu düşüktür).",
      "Kullanılabilir ve sergilenebilir bir varlıktır. Rolex'inizi takarken veya klasik otomobilinizi sürerken yatırımınızdan keyif alırsınız.",
      "Servetin devletlerden ve sistemden gizli, çok küçük bir hacimde taşınabilmesini sağlar (Örn: 2 Milyon dolarlık bir saat bileğinize sığar)."
    ],
    dezavantajlar: [
      "Likiditesi en kötü araçtır. Nakde ihtiyacınız olduğunda, o milyonluk tabloyu gerçek değerinden alacak koleksiyoneri bulmak aylar hatta yıllar sürebilir.",
      "Giriş bariyeri astronomiktir. Özel modelleri liste fiyatından almak için bile yıllarca sıra beklemek gerekir.",
      "Bakım, sigorta ve güvenlik maliyetleri yüksektir."
    ],
    nasilAlinir: "Christie's, Sotheby's gibi uluslararası müzayede evlerinden, özel galerilerden veya sertifikalı yetkili satıcılardan (butiklerden).",
    tarihselOrnek: "1970'lerde alınan limitli üretim bir Patek Philippe saat, o dönem pahalı bir harcama gibi görünse de, bugün açık artırmalarda başlangıç fiyatının yüzlerce katı değerinde satılarak enflasyonu ve borsayı geride bırakabilmektedir.",
    kimlerIcinUygun: "Temel yatırım araçlarında doygunluğa ulaşmış (Hisse, emlak) Ultra Yüksek Net Değere (UHNWI) sahip kişiler ve tutkulu koleksiyonerler.",
    altinKural: "Alternatif yatırımları 'Sadece fiyatı artacak' diye değil, 'Fiyatı hiç artmasa bile ona sahip olmaktan hayat boyu keyif alacağım' dediğiniz alanlarda yapın."
  }
];

YATIRIM_ARACLARI.push(...newItems);

let outText = "'use strict';\n\nconst YATIRIM_ARACLARI = [\n";
YATIRIM_ARACLARI.forEach((item, idx) => {
    let str = `  {
    slug: ${JSON.stringify(item.slug)},
    baslik: ${JSON.stringify(item.baslik)},
    kisaOzet: ${JSON.stringify(item.kisaOzet)},
    tanim: ${JSON.stringify(item.tanim)},
    icon: ${JSON.stringify(item.icon)},
    renk: ${JSON.stringify(item.renk)},
    skorlar: ${JSON.stringify(item.skorlar, null, 6).replace(/\n/g, '\n    ')},
    ayrintilar: ${JSON.stringify(item.ayrintilar, null, 6).replace(/\n/g, '\n    ')},
    avantajlar: ${JSON.stringify(item.avantajlar, null, 6).replace(/\n/g, '\n    ')},
    dezavantajlar: ${JSON.stringify(item.dezavantajlar, null, 6).replace(/\n/g, '\n    ')},
    nasilAlinir: ${JSON.stringify(item.nasilAlinir)},
    tarihselOrnek: ${JSON.stringify(item.tarihselOrnek)},
    kimlerIcinUygun: ${JSON.stringify(item.kimlerIcinUygun)},
    altinKural: ${JSON.stringify(item.altinKural)}
  }`;
    if (idx < YATIRIM_ARACLARI.length - 1) {
        str += ",\n";
    }
    outText += str;
});
outText += "\n];\n\nmodule.exports = { YATIRIM_ARACLARI };\n";

fs.writeFileSync(filePath, outText, 'utf8');
console.log("SUCCESSFULLY ADDED 4 NEW INVESTMENTS");
