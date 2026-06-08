const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'kitaplar-data.js');
let content = fs.readFileSync(filePath, 'utf8');

const newBooks = [
  {
    slug: "siyah-kugu",
    baslik: "Siyah Kuğu (The Black Swan)",
    yazar: "Nassim Nicholas Taleb",
    kategori: "yatirim",
    puan: 4.8,
    yil: 2007,
    ozet: "Öngörülemeyen ve devasa etkisi olan nadir olayların (Siyah Kuğular) dünyamızı ve piyasaları nasıl şekillendirdiğini anlatan çarpıcı bir finans felsefesi eseri.",
    nedenOku: "Piyasalardaki sahte öngörü modellerine aldanmamak ve finansal portföyünüzü sürpriz felaketlere karşı nasıl 'kırılganlıktan uzak' (antifragile) hale getireceğinizi öğrenmek için.",
    onemliDers: "Tarihi ve piyasaları normal olaylar değil, öngörülemeyen ve hesaba katılmayan şoklar (Siyah Kuğular) belirler.",
    kapakGorseli: "https://tse2.mm.bing.net/th?q=The%20Black%20Swan%20Nassim%20Taleb%20book%20cover%20high%20resolution&w=500&h=750&c=7&rs=1&p=0",
    detayliOzet: "Eski bir opsiyon tüccarı olan Taleb, finansal piyasaların ve ekonomistlerin risk modellerinin tamamen hatalı olduğunu savunuyor. İnsan zihninin neden beklenmedik olaylara karşı kör olduğunu davranışsal psikoloji ve istatistikle açıklıyor. Krizlerden nasıl sağ çıkılacağını ve hatta nasıl kâr edileceğini anlatan, finansal düşünce yapınızı baştan sona sarsacak bir şaheser.",
    temelOgrenimler: [
      "Geçmiş verilere bakarak geleceği tahmin etmenin (Hindi yanılgısı) ölümcül tehlikesi.",
      "Pozitif Siyah Kuğulara (büyük fırsatlara) açık olurken, negatif Siyah Kuğulardan korunma stratejisi (Halter Stratejisi).",
      "Uzmanların ve finansal guruların piyasa öngörülerinin neden çoğu zaman şempanzelerden farksız olduğu.",
      "Kırılganlığı azaltıp, kaostan beslenen bir portföy yapısı kurmak."
    ]
  },
  {
    slug: "hizli-ve-yavas-dusunme",
    baslik: "Hızlı ve Yavaş Düşünme",
    yazar: "Daniel Kahneman",
    kategori: "mindset",
    puan: 4.7,
    yil: 2011,
    ozet: "Nobel ödüllü ekonomist Kahneman, zihnimizin nasıl çalıştığını (Sistem 1 ve Sistem 2) açıklayarak, yatırım ve para kararlarımızdaki mantıksız hataları ortaya döküyor.",
    nedenOku: "Borsada veya iş hayatında neden sıklıkla kendi ayağımıza sıktığımızı anlamak ve duygusal/bilişsel ön yargılarımızı hackleyerek daha rasyonel kararlar almak için.",
    onemliDers: "Bizler mantıklı karar vericiler değiliz; duygusal karar verip, sonradan buna mantıklı kılıflar uyduran varlıklarız.",
    kapakGorseli: "https://tse2.mm.bing.net/th?q=Thinking%20Fast%20and%20Slow%20Daniel%20Kahneman%20book%20cover%20high%20resolution&w=500&h=750&c=7&rs=1&p=0",
    detayliOzet: "Davranışsal ekonominin kurucularından Kahneman, zihnimizi iki sisteme ayırıyor: Hızlı, otomatik ve duygusal olan Sistem 1 ile; yavaş, analitik ve mantıksal olan Sistem 2. Yatırım yaparken neden zararda oturduğumuzu, neden kaybetme korkusunun kazanma arzusundan çok daha güçlü olduğunu (Kayıptan Kaçınma) bilimsel olarak açıklıyor. Finansal hataların anatomisi bu kitapta yatıyor.",
    temelOgrenimler: [
      "Kayıptan Kaçınma (Loss Aversion): 100 dolar kaybetmenin acısı, 100 dolar kazanmanın zevkinden psikolojik olarak 2 kat daha fazladır.",
      "Çıpalama Etkisi (Anchoring): Pazarlıklarda ve fiyat algımızda ilk duyduğumuz rakamın beynimizi nasıl manipüle ettiği.",
      "Batık Maliyet Yanılgısı (Sunk Cost Fallacy): Zarar eden bir yatırımdan, sadece çok emek/para harcadığımız için çıkamama hastalığı.",
      "Karar alırken Sistem 2'yi bilinçli olarak devreye sokma teknikleri."
    ]
  },
  {
    slug: "kisisel-mba",
    baslik: "Kişisel MBA (The Personal MBA)",
    yazar: "Josh Kaufman",
    kategori: "girisimcilik",
    puan: 4.6,
    yil: 2010,
    ozet: "Yüz binlerce dolar ödeyip işletme yüksek lisansı (MBA) yapmak yerine, iş dünyasının tüm temel prensiplerini (değer üretimi, pazarlama, satış, finans) tek kitapta sunan efsanevi rehber.",
    nedenOku: "İş dünyasının karmaşık jargonlarından sıyrılıp, bir şirketin nasıl para kazandığını, büyüdüğünü ve sistemleştirdiğini en yalın haliyle öğrenmek için.",
    onemliDers: "Bir işletme temel olarak 5 bölümden oluşur: Değer Üretimi, Pazarlama, Satış, Değer Teslimi ve Finans. Gerisi teferruattır.",
    kapakGorseli: "https://tse2.mm.bing.net/th?q=The%20Personal%20MBA%20Josh%20Kaufman%20book%20cover%20high%20resolution&w=500&h=750&c=7&rs=1&p=0",
    detayliOzet: "Josh Kaufman, geleneksel iş okullarının zaman ve para israfı olduğunu savunarak, başarılı bir iş kurmak ve yönetmek için bilmeniz gereken gerçek hayatta karşılığı olan iş konseptlerini damıtıyor. Fiyatlandırma stratejilerinden insan psikolojisine, sistem mühendisliğinden muhasebeye kadar ihtiyacınız olan tüm işletme zekasını hap bilgilerle sunuyor.",
    temelOgrenimler: [
      "Müşterilerin gerçekte ne satın aldığı (Statü, korkudan kaçınma, kolaylık vb. temel insani dürtüler).",
      "Demir Üçgen (Hızlı, Ucuz, Kaliteli): Müşteriye bunlardan en fazla ikisini sunabileceğiniz gerçeği.",
      "Kar marjlarını optimize etmenin ve yaşam boyu müşteri değeri (LTV) yaratmanın yolları.",
      "İşletmeyi siz olmadan da tıkır tıkır çalışacak bir 'sistemler bütününe' dönüştürmek."
    ]
  },
  {
    slug: "peynirimi-kim-kapti",
    baslik: "Peynirimi Kim Kaptı?",
    yazar: "Spencer Johnson",
    kategori: "kisisel-gelisim",
    puan: 4.5,
    yil: 1998,
    ozet: "Kısa bir masal üzerinden, hayattaki ve iş dünyasındaki ani değişimlere (ekonomik krizler, iflaslar, yeni teknolojiler) nasıl adapte olmamız gerektiğini anlatan bir klasik.",
    nedenOku: "Konfor alanınızdan çıkmak, finansal planlarınız altüst olduğunda paniklemek yerine yeni fırsatları (yeni peynirleri) aramaya başlamak için.",
    onemliDers: "Eğer değişmezsen, yok olursun. Eski peynirini bırakmazsan, yeni peyniri asla bulamazsın.",
    kapakGorseli: "https://tse2.mm.bing.net/th?q=Who%20Moved%20My%20Cheese%20book%20cover%20high%20resolution&w=500&h=750&c=7&rs=1&p=0",
    detayliOzet: "Labirentte yaşayan dört karakter (iki fare ve iki küçük insan) üzerinden değişimi metaforlaştıran bu hikaye, 'peynir' (para, kariyer, başarı) ortadan kaybolduğunda insanların verdiği farklı tepkileri inceliyor. Kimisi değişimi inkar edip yok olurken, kimisi hemen adapte olup yeni peynirin peşine düşüyor. Kriz dönemlerinde okunması gereken 1 numaralı motivasyon kitabı.",
    temelOgrenimler: [
      "Mevcut başarılara veya yatırımlara duygusal olarak aşırı bağlanmamak.",
      "Piyasa koşulları değiştiğinde şikayet etmeyi bırakıp derhal strateji değiştirmek.",
      "Korkunun bizi nasıl felç ettiğini anlamak ('Korkmasaydın ne yapardın?' felsefesi).",
      "Değişimi önceden sezmek için küçük sinyalleri (peynirin kokusunun değişmesi) takip etmek."
    ]
  }
];

// We need to inject these objects into the KITAPLAR array before `module.exports = { KITAPLAR, KITAP_KATEGORILER };`
// A robust way: find `module.exports` and inject the JSON string of new books.

let match = content.match(/module\.exports\s*=\s*\{/);
if (match) {
    let index = match.index;
    
    // Create the string to inject
    let newBooksString = newBooks.map(book => '  ' + JSON.stringify(book, null, 4).replace(/\\n/g, "\\n").replace(/^/gm, '  ')).join(',\\n');
    
    // We also need a comma before injecting if the array currently ends with }
    // Let's use regex to find the end of the KITAPLAR array.
    // It's defined as const KITAPLAR = [ ... ];
    
    // Replace the last }]; with },\n + newBooks + \n];
    let lastBracketIndex = content.lastIndexOf('];', index);
    if (lastBracketIndex !== -1) {
        let firstPart = content.substring(0, lastBracketIndex);
        let secondPart = content.substring(lastBracketIndex);
        
        // Remove trailing newlines and spaces before the closing bracket
        firstPart = firstPart.trimEnd();
        
        let newContent = firstPart + ',\\n' + newBooksString + '\\n' + secondPart;
        
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log("Successfully added 4 new books.");
    } else {
        console.log("Could not find the end of KITAPLAR array.");
    }
} else {
    console.log("Could not find module.exports.");
}
