'use strict';

const PODCASTLER = [
  {
    "slug": "kolay-degil",
    "baslik": "Kolay Değil",
    "sunucular": "Mustafa Namoğlu",
    "dil": "Türkçe",
    "kategori": "girisimcilik",
    "emoji": "💼",
    "platform": "Spotify / YouTube",
    "ozet": "İş dünyasının pembe tablolarını yırtıp atan, Türkiye şartlarında şirket kurmanın, ticaret yapmanın, batıp çıkmanın gerçekçi yüzünü tüm çıplaklığıyla anlatan harika bir seri.",
    "zenginlikDersi": "Girişimcilik dışarıdan havalı görünür ama içerisi kriz yönetimidir. Satış yapmayı ve risk almayı bilmeyenler masadan erken kalkar.",
    "nedenDinle": "Gerçek hayatta karşılığını bulan pratik ticaret tavsiyeleri almak ve pes etmemek için.",
    "sure": "40 - 60 Dakika"
  },
  {
    "slug": "zihnimin-kivrimlari",
    "baslik": "Zihnimin Kıvrımları",
    "sunucular": "M. Serdar Kuzuloğlu",
    "dil": "Türkçe",
    "kategori": "zihniyet",
    "emoji": "🧠",
    "platform": "Spotify / Apple Podcasts",
    "ozet": "Teknoloji yazarı Serdar Kuzuloğlu'nun değişen dünya, teknoloji trendleri ve insanın bu yeni çağdaki konumu üzerine derin, ufuk açıcı ufuk turları.",
    "zenginlikDersi": "Trendleri herkesten önce görüp adapte olanlar geleceğin kazananları olur. Zenginlik, değişimi öngörebilmektir.",
    "nedenDinle": "Vizyonunuzu geliştirmek, geleceğin mesleklerini ve ekonominin nereye evrildiğini anlamak için.",
    "sure": "20 - 30 Dakika"
  },
  {
    "slug": "farkli-dusun",
    "baslik": "Farklı Düşün",
    "sunucular": "Seyfeddin Başsaraç & Mert Bülbül",
    "dil": "Türkçe",
    "kategori": "teknoloji",
    "emoji": "💻",
    "platform": "Spotify / Apple Podcasts",
    "ozet": "Yazılım, teknoloji, girişimcilik ve ürün geliştirme üzerine Türkiye'nin en kaliteli sohbetlerinden biri. Sektördeki yenilikler ve global vizyon konuşuluyor.",
    "zenginlikDersi": "Değer üretmek, zenginliğe giden en kalıcı yoldur. Yazılım ve dijital ürünler günümüzün en büyük kaldıracıdır.",
    "nedenDinle": "Türkiye'den çıkıp global düşünmeyi ve dijital ürün geliştirme süreçlerini en içten haliyle öğrenmek için.",
    "sure": "1 - 1.5 Saat"
  },
  {
    "slug": "ilk-ceyrek",
    "baslik": "İlk Çeyrek",
    "sunucular": "Ahmet Kırtok & Konuklar",
    "dil": "Türkçe",
    "kategori": "yatirim",
    "emoji": "📈",
    "platform": "Spotify / Apple Podcasts",
    "ozet": "Melek yatırımcılar, fon yöneticileri ve başarılı start-up kurucularıyla yatırım turları, şirket değerlemeleri ve girişim ekosistemi üzerine profesyonel sohbetler.",
    "zenginlikDersi": "Yatırım almak sadece paraya ulaşmak değildir; doğru akıllı parayı (smart money) ve ağı (network) işine dahil etmektir.",
    "nedenDinle": "Büyük paraların nasıl yönetildiğini ve melek yatırımcıların zihniyetini kavramak için.",
    "sure": "1 Saat"
  },
  {
    "slug": "fularsiz-entellik",
    "baslik": "Fularsız Entellik",
    "sunucular": "Immanuel Tolstoyevski",
    "dil": "Türkçe",
    "kategori": "zihniyet",
    "emoji": "🧐",
    "platform": "Spotify / Web",
    "ozet": "Halk için halka rağmen eleştirel düşünce! Safsatalar, felsefe, ekonomi ve bilimi harmanlayarak dinleyiciye rasyonel bir analitik zeka aşılıyor.",
    "zenginlikDersi": "Duygusal kararlar fakirleştirir, rasyonel kararlar zenginleştirir. Kalabalıkların düştüğü mantık hatalarına düşmemek en büyük avantajınızdır.",
    "nedenDinle": "Eleştirel düşünme kaslarınızı geliştirmek ve manipülasyonlardan (özellikle finansal) korunmak için.",
    "sure": "40 - 50 Dakika"
  },
  {
    "slug": "ortamlarda-satilacak-bilgi",
    "baslik": "Ortamlarda Satılacak Bilgi",
    "sunucular": "Merve",
    "dil": "Türkçe",
    "kategori": "basari",
    "emoji": "🌟",
    "platform": "Spotify / Apple Podcasts",
    "ozet": "Kişisel gelişim, popüler bilim, tarih ve başarı psikolojisi üzerine herkesin anlayabileceği, vizyon genişleten eğlenceli ve son derece öğretici bir seri.",
    "zenginlikDersi": "Sürekli öğrenen (lifelong learner) biri olmak sizi her ortamda rakiplerinizden bir adım öne taşır.",
    "nedenDinle": "Günlük hayat koşturmacasında genel kültürünüzü artırmak ve sohbete değer katacak donanıma sahip olmak için.",
    "sure": "30 - 45 Dakika"
  },
  {
    "slug": "ortadogu-ve-balkanlar",
    "baslik": "Ortadoğu ve Balkanların En İyi Podcasti",
    "sunucular": "İlker Canikligil & Mustafa Seven",
    "dil": "Türkçe",
    "kategori": "girisimcilik",
    "emoji": "🎥",
    "platform": "Spotify / YouTube",
    "ozet": "Medya, prodüksiyon, ekonomi ve sanat üzerine konuşan, özellikle \"iş yapma biçimleri\" ve \"hizmet sektörü gerçekleri\" üzerine farklı bakış açıları sunan eğlenceli bir program.",
    "zenginlikDersi": "Farklı disiplinleri (sanat ve ticaret) birleştirenler, kendi nişlerinde benzersiz bir değer ve zenginlik yaratırlar.",
    "nedenDinle": "Kültür, ekonomi ve hayatın içinden gerçek iş tecrübelerini vizyoner bir bakış açısıyla dinlemek için.",
    "sure": "45 - 60 Dakika"
  },
  {
    "slug": "baris-ozcan",
    "baslik": "Barış Özcan (Video Podcast)",
    "sunucular": "Barış Özcan",
    "dil": "Türkçe",
    "kategori": "basari",
    "emoji": "🚀",
    "platform": "YouTube",
    "ozet": "Sanat, tasarım ve teknoloji çerçevesinde hayatı anlama ve anlamlandırma serüveni. İçerikleri sadece izlenmek için değil, podcast formatında dinlenmek için de kusursuz bir kurguya sahip.",
    "zenginlikDersi": "Hikaye anlatıcılığı (storytelling) ve düzenli disiplin (zinciri kırma), bireysel zenginliğin ve marka olmanın temelidir.",
    "nedenDinle": "Disiplin, uzay, teknoloji ve sanatla ufkunuzu genişletmek, daha kaliteli bir zihniyete ulaşmak için.",
    "sure": "15 - 20 Dakika"
  },
  {
    "slug": "nasil-olunur",
    "baslik": "Nasıl Olunur?",
    "sunucular": "Nilay Örnek",
    "dil": "Türkçe",
    "kategori": "basari",
    "emoji": "🎙️",
    "platform": "Spotify / Apple Podcasts",
    "ozet": "Farklı mesleklerden, alanında en iyisi olmuş ustalarla o işin \"nasıl\" yapılacağına dair derinlemesine, ilham verici röportajlar.",
    "zenginlikDersi": "Ustalık zaman alır. Zirvedekilerin ortak özelliği kendi işlerine duydukları sarsılmaz tutku ve yıllar süren istikrardır.",
    "nedenDinle": "Başarılı insanların mesleki sırlarını öğrenmek ve hangi sektörde olursanız olun ilham almak için.",
    "sure": "1 - 1.5 Saat"
  },
  {
    "slug": "naval-podcast",
    "baslik": "Naval (Bonus Kılavuz)",
    "sunucular": "Naval Ravikant",
    "dil": "İngilizce",
    "kategori": "yatirim",
    "emoji": "🧘‍♂️",
    "platform": "Spotify / Apple / Web",
    "ozet": "Melek yatırımcı ve filozof Naval Ravikant'ın \"Şans Olmadan Nasıl Zengin Olunur?\" (How to Get Rich) serisini anlattığı efsanevi başucu podcasti. (İngilizce olsa da dinlenmesi ZORUNLUDUR).",
    "zenginlikDersi": "Zenginlik, siz uyurken sizin için para kazandıran varlıklara (kod, medya, sermaye) sahip olmaktır. Zamanınızı kiralayarak zengin olamazsınız.",
    "nedenDinle": "Finansal özgürlüğü sadece parayla değil, aynı zamanda huzur ve felsefe ile birleştiren dünyanın en iyi zihniyet rehberi olduğu için.",
    "sure": "10 - 30 Dakika (Mini Bölümler)"
  }
];

const PODCAST_KATEGORILER = {
  "girisimcilik": {
    "baslik": "Girişimcilik",
    "emoji": "💡",
    "renk": "#F5D061"
  },
  "zihniyet": {
    "baslik": "Zihniyet",
    "emoji": "🧠",
    "renk": "#9B59B6"
  },
  "basari": {
    "baslik": "Başarı & Rutin",
    "emoji": "⚡",
    "renk": "#E74C3C"
  },
  "teknoloji": {
    "baslik": "Teknoloji",
    "emoji": "💻",
    "renk": "#3498DB"
  },
  "yatirim": {
    "baslik": "Yatırım & Finans",
    "emoji": "📈",
    "renk": "#2ECC71"
  }
};

module.exports = { PODCASTLER, PODCAST_KATEGORILER };
