const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'girisimciler-data.js');
let content = fs.readFileSync(filePath, 'utf8');

const newGirisimciler = [
  {
    "slug": "eren-bali",
    "isim": "Eren Bali",
    "unvan": "Udemy & Carbon Health Kurucusu",
    "foto": "https://tse1.mm.bing.net/th?q=Eren%20Bali%20Portrait&w=400&h=400&c=7&rs=1&p=0",
    "ozet": "Malatya'nın ücra bir köyünden çıkıp Silikon Vadisi'nde iki milyar dolarlık (unicorn) şirket kuran vizyoner Türk girişimcisi.",
    "netDeger": "$1B+",
    "zihinYapisi": [
          {
                "baslik": "Probleme Aşık Olmak",
                "aciklama": "Udemy'yi kurarken kendi eğitim eşitsizliği probleminden yola çıktı; çözdüğünüz sorun ne kadar derinse, etkiniz o kadar büyük olur."
          },
          {
                "baslik": "Asla Pes Etmemek",
                "aciklama": "Udemy'nin ilk yıllarında Silikon Vadisi'ndeki 50'den fazla yatırımcıdan 'hayır' cevabı almasına rağmen inancını kaybetmedi."
          },
          {
                "baslik": "Yıkıcı İnovasyon (Disruption)",
                "aciklama": "Mevcut olanı biraz daha iyi yapmak yerine, eğitim (Udemy) ve sağlık (Carbon Health) gibi devasa sektörlerin temel dinamiklerini kökten değiştirmek."
          }
    ],
    "kitapOnerisi": "Sıfırdan Bire (Peter Thiel)",
    "altinSoz": "Başarısız olmanın bin tane yolu var, başarılı olmanın ise sadece birkaç tane. O birkaç yolu bulana kadar denemek zorundasın.",
    "detayliHikaye": "Eren Bali, başarı hikayesinin hiçbir zaman imkanlarla değil, vizyonla ilgili olduğunun en büyük kanıtıdır. Malatya'da tek odalı bir köy okulunda eğitimine başlayan Bali, internetle tanıştıktan sonra dünyanın bilgisini parmaklarının ucuna getirebileceğini fark etti. Bu vizyonla dünyanın en büyük online eğitim platformu olan Udemy'yi kurdu. Ardından sağlık sektöründeki hantallığı fark ederek Carbon Health'i hayata geçirdi ve ikinci 'unicorn' girişimine imza attı. O, parayı değil, kitlelerin hayatına dokunan devasa sorunları çözmeyi hedefleyen bir dehadır."
  },
  {
    "slug": "nevzat-aydin",
    "isim": "Nevzat Aydın",
    "unvan": "Yemeksepeti Kurucu CEO",
    "foto": "https://tse1.mm.bing.net/th?q=Nevzat%20Ayd%C4%B1n%20Portrait&w=400&h=400&c=7&rs=1&p=0",
    "ozet": "Türkiye'de internet henüz emekleme aşamasındayken, 2001 krizinin ortasında dijital yemek siparişi pazarını sıfırdan inşa eden efsane.",
    "netDeger": "$300M+",
    "zihinYapisi": [
          {
                "baslik": "Zamanlamanın Gücü",
                "aciklama": "Pazara herkesin inandığı zamanda girmek kârı sıfırlar. Önemli olan doğru fikri, kimse henüz anlamadan hayata geçirmektir."
          },
          {
                "baslik": "Çalışan Odaklılık",
                "aciklama": "Şirket satıldığında, elde edilen 589 milyon dolarlık gelirin 27 milyon dolarını kendi çalışanlarına dağıtarak Türkiye'de eşi görülmemiş bir liderlik örneği sergiledi."
          },
          {
                "baslik": "Müşteri Sadakati (Retention)",
                "aciklama": "Kârın tek seferlik satışlardan değil, sürekli sipariş veren sadık müşteri kitlesi yaratmaktan geldiğini kanıtladı."
          }
    ],
    "kitapOnerisi": "Hard Thing About Hard Things",
    "altinSoz": "Eğer fikrinizi çalmalarından korkuyorsanız, icraatınız yeterince iyi değil demektir.",
    "detayliHikaye": "2001 yılında, Türkiye'nin en büyük ekonomik krizlerinden birinin ortasında, kimsenin internetten sipariş vereceğine inanmadığı bir dönemde Yemeksepeti'ni kurdu. Restoranları faks cihazlarına, daha sonra da web panellerine alıştıran Aydın, alışkanlıkları değiştiren adam oldu. Delivery Hero'ya 589 milyon dolar gibi devasa bir rakama satıldığında, asıl yankı uyandıran şey şirketin değeri değil, Nevzat Aydın'ın satıştan elde edilen kârın önemli bir kısmını çalışanlarına dağıtma kararıydı."
  },
  {
    "slug": "husnu-ozyegin",
    "isim": "Hüsnü Özyeğin",
    "unvan": "Fiba Holding Kurucusu & Hayırsever",
    "foto": "https://tse1.mm.bing.net/th?q=H%C3%BCsn%C3%BC%20%C3%96zye%C4%9Fin%20Portrait&w=400&h=400&c=7&rs=1&p=0",
    "ozet": "Finansal zekası ve müthiş zamanlamasıyla yoktan bankalar kurup milyar dolarlara satan, kazandığı serveti de eğitime vakfeden bir efsane.",
    "netDeger": "$2B+",
    "zihinYapisi": [
          {
                "baslik": "Fırsat Maliyeti (Opportunity Cost)",
                "aciklama": "En değerli varlığınız paranız değil, zamanınızdır. Para kaybedilebilir ama boşa geçen zamanın telafisi yoktur."
          },
          {
                "baslik": "Sıfırdan Değer Yaratmak",
                "aciklama": "Başkalarının batık veya kârsız gördüğü işletmeleri satın alıp, doğru operasyonel yönetimle altın yumurtlayan tavuklara çevirmek."
          },
          {
                "baslik": "Servetin Sorumluluğu",
                "aciklama": "Girişimci olarak sadece hissedarlara değil, içinde bulunduğun topluma ve ülkenin eğitim sistemine de borçlusun."
          }
    ],
    "kitapOnerisi": "Bir Dünya Kurmak (Hüsnü Özyeğin)",
    "altinSoz": "En karlı yatırım, daima eğitime ve insana yapılan yatırımdır.",
    "detayliHikaye": "Hüsnü Özyeğin, profesyonel yöneticilikten gelip sıfırdan banka (Finansbank) kuran nadir isimlerdendir. 2006 yılında bankasını 2.7 milyar dolara Yunanistan'ın en büyük bankasına satarak inanılmaz bir çıkış (exit) yaptı. Özyeğin'in asıl başarısı sadece şirket kurup satmak değil; holding şirketlerini farklı coğrafyalara (Rusya, Avrupa) başarıyla yaymasıdır. Ayrıca servetinin devasa bir kısmını bağışlayarak binlerce kız çocuğunun okumasını sağlamış ve Özyeğin Üniversitesi'ni kurarak Türkiye'ye kalıcı bir miras bırakmıştır."
  }
];

let match = content.match(/module\.exports\s*=\s*\{/);
if (match) {
    let index = match.index;
    
    // Create the string to inject
    let newObjectsString = newGirisimciler.map(item => '  ' + JSON.stringify(item, null, 4).replace(/\\n/g, "\\n").replace(/^/gm, '  ')).join(',\\n');
    
    let lastBracketIndex = content.lastIndexOf('];', index);
    if (lastBracketIndex !== -1) {
        let firstPart = content.substring(0, lastBracketIndex);
        let secondPart = content.substring(lastBracketIndex);
        
        // Remove trailing newlines and spaces before the closing bracket
        firstPart = firstPart.trimEnd();
        
        let newContent = firstPart + ',\\n' + newObjectsString + '\\n' + secondPart;
        
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log("Successfully added 3 Turkish entrepreneurs.");
    } else {
        console.log("Could not find the end of GIRISIMCILER array.");
    }
} else {
    console.log("Could not find module.exports.");
}
