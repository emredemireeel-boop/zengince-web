'use strict';

const ALINTILAR = [
  // Warren Buffett
  { soz: 'Kural No. 1: Asla para kaybetmeyin. Kural No. 2: Asla Kural No. 1\'i unutmayın.', kisi: 'Warren Buffett', unvan: 'Yatırımcı & Berkshire Hathaway CEO', kategori: 'yatirim', emoji: '🎩' },
  { soz: 'Uyurken para kazanmanın bir yolunu bulamazsanız, ölene kadar çalışırsınız.', kisi: 'Warren Buffett', unvan: 'Yatırımcı & Berkshire Hathaway CEO', kategori: 'yatirim', emoji: '🎩' },
  { soz: 'Fiyat, ne ödediğinizdir. Değer, ne aldığınızdır.', kisi: 'Warren Buffett', unvan: 'Yatırımcı & Berkshire Hathaway CEO', kategori: 'yatirim', emoji: '🎩' },
  { soz: 'Başkası açgözlü olduğunda korkun, başkası korktuğunda açgözlü olun.', kisi: 'Warren Buffett', unvan: 'Yatırımcı & Berkshire Hathaway CEO', kategori: 'yatirim', emoji: '🎩' },

  // Robert Kiyosaki
  { soz: 'Zenginler varlık satın alır. Yoksullar yükümlülük satın alıp varlık sanır.', kisi: 'Robert Kiyosaki', unvan: 'Yazar & Yatırımcı', kategori: 'mindset', emoji: '💰' },
  { soz: 'Okulda öğrendiğiniz en önemli ders, bir iş bulmak değil, iş yaratmaktır.', kisi: 'Robert Kiyosaki', unvan: 'Yazar & Yatırımcı', kategori: 'girisimcilik', emoji: '💰' },
  { soz: 'Paranız sizin için çalışmıyorsa, siz paranız için çalışıyorsunuzdur.', kisi: 'Robert Kiyosaki', unvan: 'Yazar & Yatırımcı', kategori: 'mindset', emoji: '💰' },

  // Elon Musk
  { soz: 'Bazı insanlar değişimi sever, bazıları değişimden nefret eder. Ama değişim olmadan ilerleme olmaz.', kisi: 'Elon Musk', unvan: 'Tesla & SpaceX CEO', kategori: 'girisimcilik', emoji: '🚀' },
  { soz: 'Başarısızlık burada bir seçenektir. Hiç başarısız olmuyorsanız, yeterince yenilik yapmıyorsunuz demektir.', kisi: 'Elon Musk', unvan: 'Tesla & SpaceX CEO', kategori: 'girisimcilik', emoji: '🚀' },
  { soz: 'Çok çalışın. Her hafta 80-100 saat çalışın. Bu, başarı olasılığını artırır.', kisi: 'Elon Musk', unvan: 'Tesla & SpaceX CEO', kategori: 'girisimcilik', emoji: '🚀' },

  // Charlie Munger
  { soz: 'Hayatın en büyük karları, sabırlı olanlara aittir.', kisi: 'Charlie Munger', unvan: 'Yatırımcı & Berkshire Hathaway Başkan Yardımcısı', kategori: 'yatirim', emoji: '📚' },
  { soz: 'Zeki insanlarla takılın. İkinci sınıf insanlarla vakit geçirirseniz, ikinci sınıf sonuçlar alırsınız.', kisi: 'Charlie Munger', unvan: 'Yatırımcı & Berkshire Hathaway Başkan Yardımcısı', kategori: 'mindset', emoji: '📚' },
  { soz: 'Zengin olmanın en iyi yolu, zengin görünmeye çalışmamaktır.', kisi: 'Charlie Munger', unvan: 'Yatırımcı', kategori: 'mindset', emoji: '📚' },

  // Naval Ravikant
  { soz: 'Spesifik bilgi, eğitimle değil deneyimle kazanılır.', kisi: 'Naval Ravikant', unvan: 'AngelList Kurucu', kategori: 'mindset', emoji: '⚡' },
  { soz: 'Zamanınızı satarak zengin olamazsınız. Uyurken bile kazandıran varlıklar inşa etmelisiniz.', kisi: 'Naval Ravikant', unvan: 'AngelList Kurucu', kategori: 'para', emoji: '⚡' },
  { soz: 'Zenginlik, kaldıraçsız asla elde edilemez. Kodlama veya medya üretimi, yeni çağın kaldıraçlarıdır.', kisi: 'Naval Ravikant', unvan: 'AngelList Kurucu', kategori: 'para', emoji: '⚡' },

  // Jeff Bezos
  { soz: '10 yıl sonra neyin değişeceğini değil, neyin değişmeyeceğini sorun ve üzerine strateji kurun.', kisi: 'Jeff Bezos', unvan: 'Amazon Kurucu', kategori: 'girisimcilik', emoji: '📦' },
  { soz: 'Her gece, bu gece şirket batsa bile utanmayacağım kararlar aldım mı diye sorarım kendime.', kisi: 'Jeff Bezos', unvan: 'Amazon Kurucu', kategori: 'girisimcilik', emoji: '📦' },

  // Napoleon Hill
  { soz: 'Zihin neyi tasavvur edebilir ve neye inanabilirse, onu başarabilir.', kisi: 'Napoleon Hill', unvan: 'Yazar', kategori: 'mindset', emoji: '💎' },
  { soz: 'Başarısızlık, doğanın insanlığı daha büyük çabalara hazırlama planıdır.', kisi: 'Napoleon Hill', unvan: 'Yazar', kategori: 'mindset', emoji: '💎' },

  // Benjamin Franklin
  { soz: 'Bir yatırımın en iyi getirisi, bilgiye yapılan yatırımdır.', kisi: 'Benjamin Franklin', unvan: 'Kurucu Baba & Bilim İnsanı', kategori: 'yatirim', emoji: '🏛️' },
  { soz: 'Kuruşa dikkat edin, liralar kendine bakacaktır.', kisi: 'Benjamin Franklin', unvan: 'Kurucu Baba & Bilim İnsanı', kategori: 'para', emoji: '🏛️' },

  // Mark Cuban
  { soz: 'Zengin olmak istiyorsanız, tasarruf edin ve yatırım yapın. Para harcayarak zengin olan yoktur.', kisi: 'Mark Cuban', unvan: 'Milyarder Girişimci', kategori: 'para', emoji: '🏀' },
  { soz: 'İş dünyasında avantaj, bilgi ve hazırlıktan gelir. Her gün oku, her gün öğren.', kisi: 'Mark Cuban', unvan: 'Milyarder Girişimci', kategori: 'mindset', emoji: '🏀' },

  // Steve Jobs
  { soz: 'Yaptığınız işi sevmezseniz asla büyük başarı elde edemezsiniz.', kisi: 'Steve Jobs', unvan: 'Apple Kurucu', kategori: 'girisimcilik', emoji: '🍎' },
  { soz: 'Noktaları ileriye bakarak birleştiremezsiniz; ancak geriye bakarak birleştirebilirsiniz.', kisi: 'Steve Jobs', unvan: 'Apple Kurucu', kategori: 'mindset', emoji: '🍎' },

  // Andrew Carnegie
  { soz: 'Tüm yumurtalarınızı tek sepete koyun ve o sepeti çok iyi izleyin.', kisi: 'Andrew Carnegie', unvan: 'Çelik Kralı & Hayırsever', kategori: 'yatirim', emoji: '🏗️' },

  // Albert Einstein
  { soz: 'Bileşik faiz, dünyanın sekizinci harikasıdır. Anlayan kazanır, anlamayan öder.', kisi: 'Albert Einstein', unvan: 'Fizikçi', kategori: 'yatirim', emoji: '🧪' },

  // Jim Rohn
  { soz: 'Zenginlik, birikim yapmak değildir; bir alışkanlık sistemi kurmaktır.', kisi: 'Jim Rohn', unvan: 'Motivasyon Konuşmacısı', kategori: 'mindset', emoji: '🎤' },
  { soz: 'En çok vakit geçirdiğiniz 5 kişinin ortalamasısınız.', kisi: 'Jim Rohn', unvan: 'Motivasyon Konuşmacısı', kategori: 'mindset', emoji: '🎤' },

  // Tony Robbins
  { soz: 'Zenginlik, sahip olduğunuz değil hissettiğiniz yaşam kalitesidir.', kisi: 'Tony Robbins', unvan: 'Yaşam Koçu & Yazar', kategori: 'mindset', emoji: '🔥' },
  { soz: 'Başarılı insanlar, başarısız insanların yapmak istemediği şeyleri yaparlar.', kisi: 'Tony Robbins', unvan: 'Yaşam Koçu & Yazar', kategori: 'mindset', emoji: '🔥' },

  // George Clason
  { soz: 'Kazandığınızın en az onda birini kendinize ödeyin. Bu, zenginliğin ilk kuralıdır.', kisi: 'George S. Clason', unvan: 'Yazar', kategori: 'para', emoji: '🏛️' },

  // Ray Dalio
  { soz: 'Acı + Yansıtma = İlerleme', kisi: 'Ray Dalio', unvan: 'Bridgewater Kurucu', kategori: 'mindset', emoji: '📊' },
  { soz: 'Gerçeği — özellikle acı gerçekleri — kabul etmek, başarının ön koşuludur.', kisi: 'Ray Dalio', unvan: 'Bridgewater Kurucu', kategori: 'mindset', emoji: '📊' },

  // Peter Lynch
  { soz: 'Anlamadığınız bir şeye asla yatırım yapmayın.', kisi: 'Peter Lynch', unvan: 'Efsanevi Fon Yöneticisi', kategori: 'yatirim', emoji: '📈' },

  // Seneca
  { soz: 'Zenginlik akıl ile yönetilmeli; yoksa akıl zenginlik tarafından yönetilir.', kisi: 'Seneca', unvan: 'Stoacı Filozof', kategori: 'mindset', emoji: '🏛️' },

  // Oprah Winfrey
  { soz: 'Servet yaratmanın en büyük sırrı, kendinize gerçekten değer verebildiğiniz bir iş bulmaktır.', kisi: 'Oprah Winfrey', unvan: 'Medya Moğolu & Hayırsever', kategori: 'girisimcilik', emoji: '✨' },

  // Richard Branson
  { soz: 'İş fırsatları otobüs gibidir; her zaman bir sonraki gelir.', kisi: 'Richard Branson', unvan: 'Virgin Group Kurucu', kategori: 'girisimcilik', emoji: '🎈' },

  // Jack Ma
  { soz: 'Bugün zor, yarın daha da zor, ama öbür gün güzel olacak. Ama çoğu insan yarın akşam pes eder.', kisi: 'Jack Ma', unvan: 'Alibaba Kurucu', kategori: 'girisimcilik', emoji: '🐲' },

  // Henry Ford
  { soz: 'Yapabileceğinize ya da yapamayacağınıza inansanız da haklısınızdır.', kisi: 'Henry Ford', unvan: 'Ford Motor Kurucu', kategori: 'mindset', emoji: '🚗' },

  // Aristoteles
  { soz: 'Mükemmellik bir eylem değil, bir alışkanlıktır.', kisi: 'Aristoteles', unvan: 'Filozof', kategori: 'mindset', emoji: '🏛️' },

  // Thomas Edison
  { soz: 'Başarısızlıkla karşılaşmadım. Sadece işe yaramayan 10.000 yol keşfettim.', kisi: 'Thomas Edison', unvan: 'Mucit & İş İnsanı', kategori: 'girisimcilik', emoji: '💡' },

  // Walt Disney
  { soz: 'Hayal edebiliyorsanız, yapabilirsiniz.', kisi: 'Walt Disney', unvan: 'Disney Kurucu', kategori: 'mindset', emoji: '🏰' },

  // Morgan Housel
  { soz: 'Servet, göremediğiniz paradır. Harcamadığınız paradır. Daha sonrası için sakladığınız seçenektir.', kisi: 'Morgan Housel', unvan: 'Yazar & Yatırımcı', kategori: 'para', emoji: '🪙' },

  // Coco Chanel
  { soz: 'Başarının en iyi kokusu, ter kokusudur.', kisi: 'Coco Chanel', unvan: 'Moda İkonu & Girişimci', kategori: 'girisimcilik', emoji: '👗' },

  // Confucius
  { soz: 'Sevdiğiniz işi seçin ve hayatınızda bir gün bile çalışmak zorunda kalmayacaksınız.', kisi: 'Konfüçyüs', unvan: 'Filozof', kategori: 'mindset', emoji: '🏯' }
];

const ALINTI_KATEGORILER = {
  'yatirim': { baslik: 'Yatırım', emoji: '📈', renk: '#2ECC71' },
  'mindset': { baslik: 'Zihniyet', emoji: '🧠', renk: '#D4AF37' },
  'girisimcilik': { baslik: 'Girişimcilik', emoji: '🚀', renk: '#E74C3C' },
  'para': { baslik: 'Para Yönetimi', emoji: '💰', renk: '#3498DB' }
};

module.exports = { ALINTILAR, ALINTI_KATEGORILER };
