const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'girisimciler-data.js');

// Read the existing data
const { GIRISIMCILER } = require(dataPath);

// New traffic-driving entrepreneurs
const newGirisimciler = [
  {
    "slug": "mrbeast-jimmy-donaldson",
    "isim": "MrBeast (Jimmy Donaldson)",
    "unvan": "YouTube Kralı & Dijital Girişimci",
    "foto": "https://tse1.mm.bing.net/th?q=MrBeast%20Portrait&w=400&h=400&c=7&rs=1&p=0",
    "ozet": "İçerik üretimini bir medya imparatorluğuna dönüştürerek, algoritmayı hackleyen ve modern dikkat ekonomisinin zirvesine oturan dijital deha.",
    "netDeger": "$500M+",
    "zihinYapisi": [
          {
                "baslik": "Maksimum Yeniden Yatırım (Reinvestment)",
                "aciklama": "Kazandığı tüm parayı lüks araçlara değil, bir sonraki videoyu daha çılgın ve büyük yapmak için tekrar prodüksiyona yatırdı. Büyümenin tek sırrı: Kazandığını işine gömmek."
          },
          {
                "baslik": "Dikkat Ekonomisi (Attention Economy)",
                "aciklama": "Günümüzde petrol paradan çok 'dikkat'tir. Dikkat çekmeyi başarırsan (harika küçük resimler, sürükleyici ilk 10 saniye), bunu Feastables veya Burger gibi milyar dolarlık fiziksel ürünlere dönüştürebilirsin."
          },
          {
                "baslik": "Algoritma Değil, İnsan Psikolojisi",
                "aciklama": "YouTube algoritmasını yenmeye çalışmaz. O, insan psikolojisinin neye tıklamak istediğini ve neyi izlerken sıkılmadığını milisaniye milisaniye analiz eden bir nöro-pazarlamacıdır."
          },
          {
                "baslik": "Aşırı Takıntı (Obsession)",
                "aciklama": "Günde 15 saatini sadece YouTube analitiklerini inceleyerek geçiren Jimmy, 'Eğer bir işe rakiplerinizin hayal edemeyeceği kadar takıntılıysanız, kaybetmeniz imkansızdır' felsefesini savunur."
          }
    ],
    "kitapOnerisi": "Contagious: Why Things Catch On",
    "altinSoz": "Sadece dünyanın en iyi videolarını yapmak istiyorum. Geri kalan her şey (para, şöhret, şirketler) bunun doğal bir yan ürünü.",
    "detayliHikaye": "MrBeast'in hikayesi, geleneksel iş adamı tiplemesini kökünden yıkar. Kuzey Carolina'da sıkıcı bir odada yıllarca Minecraft videoları çeken ve kimsenin izlemediği sıradan bir çocuktu. Ancak o, vazgeçmek yerine YouTube'un nasıl çalıştığını saplantı haline getirdi. Yüz binlerce kez 1'den 100.000'e kadar saydığı o meşhur videodan sonra viralliğin formülünü buldu. O formül şuydu: İnsanların hayal bile edemeyeceği absürtlükte fedakarlıklar yapmak.\\n\\nBugün MrBeast sadece bir YouTuber değil. O, Netflix'ten daha büyük bir izlenme sayısına sahip devasa bir medya holdingidir. Sadece dijitalde kalmamış, elindeki devasa 'Dikkat (Attention)' gücünü Feastables çikolatalarına ve MrBeast Burger'a yönlendirerek geleneksel gıda devlerine kafa tutmuştur. Dijital çağda sıfır sermaye ile bir imparatorluk kurmak isteyen herkesin, MrBeast'in içerik kalitesi ve %100 yeniden yatırım (reinvestment) stratejisini incelemesi şarttır."
  },
  {
    "slug": "alex-hormozi",
    "isim": "Alex Hormozi",
    "unvan": "Acquisition.com Kurucusu",
    "foto": "https://tse1.mm.bing.net/th?q=Alex%20Hormozi%20Portrait&w=400&h=400&c=7&rs=1&p=0",
    "ozet": "Fitness salonları batarken geliştirdiği 'Karşı Konulamaz Teklif' modeliyle servet yapan, modern büyüme ve satış stratejilerinin hiper-mantıklı ustası.",
    "netDeger": "$100M+",
    "zihinYapisi": [
          {
                "baslik": "$100M Teklifler",
                "aciklama": "İnsanlara öylesine muazzam bir değer sunun ki, 'Hayır' derken kendilerini aptal gibi hissetsinler. Fiyat rekabeti yerine, değer inşası yaparak pazarın dışına çıkın."
          },
          {
                "baslik": "Hacim (Volume) Her Şeydir",
                "aciklama": "Günde 10 soğuk arama yapıp işin büyümediğini söylemek matematiksizliktir. Günde 1000 kişiye ulaşıp ardından stratejiyi tartışın. Hacim, yeteneği döver."
          },
          {
                "baslik": "Ücretsiz Değer Dağıtmak",
                "aciklama": "Rakiplerinin binlerce dolara sattığı eğitimleri bedavaya vererek piyasadaki tüm iyi niyeti (goodwill) toplar. Bu güven ağı, milyarlık şirketleri satın alırken en büyük kaldıracıdır."
          },
          {
                "baslik": "Duygusuz İcraat",
                "aciklama": "Motivasyon bir efsanedir. Yataktan kalkmak istemeseniz bile yapmanız gerekeni yapmalısınız. İş dünyası hislerle değil, input/output (girdi/çıktı) matematiğiyle çalışır."
          }
    ],
    "kitapOnerisi": "$100M Offers: How To Make Offers So Good People Feel Stupid Saying No",
    "altinSoz": "Zengin olmak için ekstra bir zekaya ihtiyacınız yok; sadece başkalarının 10 katı daha fazla sıkılmaya dayanabilmelisiniz.",
    "detayliHikaye": "Alex Hormozi, spor salonu işletmeciliğinden başlayıp, yatırım dünyasının en popüler yüzlerinden biri haline gelen bir pazarlama dehasıdır. İşleri ters gittiğinde ve banka hesabında sadece son birkaç bin doları kaldığında, sektörü suçlamak yerine stratejisini değiştirdi. Sadece spor salonu satmak yerine, spor salonlarına müşteri getirme garantisi veren ve riskleri ortadan kaldıran 'Karşı Konulamaz Teklifler' (Grand Slam Offers) sundu.\\n\\nGym Launch şirketini inanılmaz bir hızla büyütüp sattıktan sonra, eşi Leila ile Acquisition.com'u kurdu. Hormozi'nin günümüzdeki popülaritesinin sırrı, iş dünyasının sıkıcı kavramlarını kaslı vücudu, rahat giyimi ve acımasız derecede dürüst diliyle anlatmasıdır. O, sahte motivasyon konuşmacılarının aksine işin matematiğini, yüksek hacimli çalışmayı ve saf disiplini savunur. İnternette verdiği bedava içeriklerle milyonlarca takipçi kazanmış ve modern girişimcilerin idolü olmuştur."
  },
  {
    "slug": "pavel-durov",
    "isim": "Pavel Durov",
    "unvan": "Telegram & VK Kurucusu",
    "foto": "https://tse1.mm.bing.net/th?q=Pavel%20Durov%20Portrait&w=400&h=400&c=7&rs=1&p=0",
    "ozet": "Rusya'nın Mark Zuckerberg'i olarak anılan, devlet baskısına boyun eğmeyip ülkesini terk eden, özgürlük ve gizlilik odaklı Telegram'ın isyankar milyarderi.",
    "netDeger": "$15B+",
    "zihinYapisi": [
          {
                "baslik": "Tavizsiz Özgürlük (Libertarianism)",
                "aciklama": "Kullanıcı verilerini satmayı ve sansürü kesin bir dille reddeder. Gerçek değerin, insanların özgürce iletişim kurabildiği şifreli ve güvenli alanlar yaratmak olduğuna inanır."
          },
          {
                "baslik": "Minimalizm ve Göçebelik",
                "aciklama": "Milyarder olmasına rağmen yatlar, evler veya mülkler satın almaz. Hiçbir devlete bağlı kalmamak için sürekli seyahat eden bir dijital göçebedir. Mülkiyetin insanı esir ettiğini savunur."
          },
          {
                "baslik": "Odaklanmış Küçük Ekipler",
                "aciklama": "Telegram gibi yüz milyonlarca kullanıcısı olan bir uygulamayı binlerce kişiyle değil, sadece dünyanın en iyi şifreleme uzmanlarından oluşan 30-40 kişilik elit bir ekiple yönetir."
          },
          {
                "baslik": "Para Kazanmak İkinci Plandadır",
                "aciklama": "VK'yı kurarken de Telegram'ı kurarken de önceliği para kazanmak değil, devasa bir kullanıcı kitlesine ulaşan mükemmel bir ürün yaratmak olmuştur. Kâr optimizasyonu her zaman sonradan gelir."
          }
    ],
    "kitapOnerisi": "The Sovereign Individual",
    "altinSoz": "Özgürlük paha biçilemezdir. Sırf rahatlık veya para için başkalarının senin verilerine veya hayatına hükmetmesine izin verme.",
    "detayliHikaye": "Pavel Durov, teknoloji dünyasının en ilginç ve asi figürlerinden biridir. Rusya'da VKontakte'yi (VK) kurduğunda devasa bir başarı yakaladı. Ancak devlet, muhalif grupların verilerini ve gruplarını kapatmasını istediğinde, Durov bunu reddetti ve kendi şirketinden istifaya zorlandı. Ülkesini terk etmek zorunda kalan Durov, intikamını almak yerine dünyanın en güvenli ve özgür iletişim ağı olan Telegram'ı kodladı.\\n\\nBugün Telegram, devasa medya organlarının, kripto para topluluklarının ve baskıcı rejimlerdeki muhaliflerin sığınağıdır. Durov, Silikon Vadisi milyarderlerinin gösterişli hayatından tamamen uzaktır. Gittiği her yerde kod yazan, tek bir merkeze bağlı kalmayan, siyah tişörtü ve fit fiziğiyle tam bir siber-isyan ikonudur. Yakın zamandaki gözaltı ve hukuki savaşları, onun sansüre karşı direniş felsefesini daha da popüler hale getirmiş ve modern teknoloji tarihinin tartışılmaz figürlerinden biri yapmıştır."
  }
];

// Add new items to the array
GIRISIMCILER.push(...newGirisimciler);

// Create the new file content string cleanly
const fileContent = "'use strict';\\n\\nconst GIRISIMCILER = " + JSON.stringify(GIRISIMCILER, null, 4) + ";\\n\\nmodule.exports = { GIRISIMCILER };\\n";

// Write back to the file
fs.writeFileSync(dataPath, fileContent, 'utf8');

console.log('Successfully added 3 traffic-driving entrepreneurs.');
