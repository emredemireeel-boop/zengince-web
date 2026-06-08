'use strict';

const YATIRIM_ARACLARI = [
  {
    slug: "hisse-senedi",
    baslik: "Hisse Senetleri (Borsa)",
    kisaOzet: "Halka açık şirketlerin ortaklık paylarıdır. Borsadan hisse aldığınızda, o şirketin yasal bir mikro-ortağı olursunuz.",
    tanim: "Hisse senedi (Stock), bir şirketin anaparasının eşdeğer parçalarından biridir. Şirket kâr ederse ve büyürse, hissenin değeri artar. Ayrıca şirket kârını 'temettü' olarak ortaklarına (size) dağıtabilir.",
    icon: "📈",
    renk: "#3498DB",
    skorlar: {
          "risk": 7,
          "getiriPotansiyeli": 8,
          "likidite": 9,
          "zamanIhtiyaci": 6
    },
    ayrintilar: {
          "vergiDurumu": "BIST hisselerinde kâr amaçlı alım satımda (istisnalar hariç) ve %0 stopaj uygulanır. Yabancı hisse senetlerinde ise elde edilen kâr beyana tabidir ve gelir vergisi ödenir.",
          "psikolojikZorluk": "Piyasa çöktüğünde portföyün %30-40 eridiğini görmek ciddi panik yaratır. Dürtüsel satma eğilimi yüksektir.",
          "bilesikGetiriGucu": "Çok Yüksek. Alınan temettüler (kâr payları) ile tekrar hisse alındığında, kartopu etkisi (bileşik getiri) yıllar içinde devasa boyutlara ulaşır.",
          "uzmanlikIhtiyaci": "Finansal tabloları okuma (Temel Analiz), şirket yönetimi analizi ve grafikleri yorumlama (Teknik Analiz) yetkinliği gerektirir."
    },
    avantajlar: [
          "Uzun vadede enflasyonu yenen en güçlü yatırım araçlarından biridir.",
          "Temettü (kâr payı) verimliliği yüksek şirketler pasif gelir sağlar.",
          "Anında alınıp satılabilir (Yüksek likidite).",
          "Küçük sermayelerle dünyanın en büyük şirketlerine ortak olma imkanı verir."
    ],
    dezavantajlar: [
          "Kısa vadede çok yüksek dalgalanma (volatilite) gösterebilir.",
          "Şirket veya makro ekonomi kötü giderse ciddi anapara kaybı riski vardır.",
          "Doğru şirketleri seçmek zaman, araştırma ve finansal okuryazarlık gerektirir."
    ],
    nasilAlinir: "Bankanızın mobil uygulamasından 'Yatırım/Borsa' hesabı açarak veya SPK lisanslı aracı kurumlar üzerinden anında alınabilir.",
    tarihselOrnek: "Eğer 10 yıl önce Apple (AAPL) veya güçlü bir Türk şirketine (Örn: THYAO, FROTO) 10.000 TL yatırıp hiç dokunmasaydınız, temettü gelirleriyle birlikte enflasyonun çok üzerinde, katlanarak artan bir servetiniz olurdu.",
    kimlerIcinUygun: "Parasını en az 3-5 yıl piyasada tutabilecek, günlük düşüşlerde panik yapmayacak ve temel/teknik analize veya şirket araştırmasına ilgi duyan yatırımcılar.",
    altinKural: "Tüm paranızı tek bir hisseye yatırmayın (Çeşitlendirme yapın) ve asla ihtiyacınız olan acil durum parasıyla borsaya girmeyin."
  },
  {
    slug: "yatirim-fonlari",
    baslik: "Yatırım Fonları (TEFAS / ETF)",
    kisaOzet: "Profesyonel portföy yöneticilerinin, binlerce yatırımcıdan topladığı parayı çeşitli araçlarda yönettiği sepetlerdir.",
    tanim: "Yatırım fonları, kendi başınıza tek tek hisse senedi veya tahvil seçmek yerine, bu işi uzmanlara devrettiğiniz bir havuz sistemidir. Tek bir fon payı alarak anında 50 farklı şirkete veya emtiaya ortak olabilirsiniz.",
    icon: "🧺",
    renk: "#9B59B6",
    skorlar: {
          "risk": 5,
          "getiriPotansiyeli": 6,
          "likidite": 8,
          "zamanIhtiyaci": 2
    },
    ayrintilar: {
          "vergiDurumu": "Hisse senedi yoğun fonlarda stopaj genelde %0'dır. Ancak altın, döviz, değişken veya borçlanma araçları fonlarında elde edilen kârdan %7.5 - %10 stopaj kesintisi (kaynağında otomatik) yapılır.",
          "psikolojikZorluk": "Düşük/Orta. Fonlar çeşitlendirilmiş olduğu için tek bir hisse senedi kadar sert dalgalanmaz, daha huzurlu bir uyku sağlar.",
          "bilesikGetiriGucu": "Orta-Yüksek. Fon içindeki şirketlerden gelen temettüler fonda tutulup anaparaya eklendiği için otomatik bileşik getiri sağlar.",
          "uzmanlikIhtiyaci": "Neredeyse hiç. Sadece risk profilinize uygun fon türünü (tematik, hisse, borçlanma) seçmek yeterlidir."
    },
    avantajlar: [
          "Çok yüksek çeşitlendirme (Diversifikasyon) sağlar, riski böler.",
          "Piyasayı takip etme ve şirket inceleme derdi yoktur, uzmanlar yönetir.",
          "Çok küçük paralarla (Örn: 10 TL) bile yatırım yapılabilir.",
          "Tematik fonlar sayesinde sadece Teknoloji, Sağlık veya Yenilenebilir Enerji gibi belirli sektörlere kolayca yatırım yapılabilir."
    ],
    dezavantajlar: [
          "Yönetim gider kesintisi (yıllık komisyon) alırlar. Bu da getiriyi hafifçe törpüler.",
          "Çok güvenli fonların getirisi enflasyonun altında kalabilir.",
          "Satış işlemi hisse senedi gibi anında gerçekleşmez, paranın hesaba geçmesi 1-3 gün sürebilir (Valör)."
    ],
    nasilAlinir: "TEFAS (Türkiye Elektronik Fon Alım Satım Platformu) sayesinde, kendi bankanızın uygulamasından diğer tüm banka/kurum fonlarını tek tıkla alabilirsiniz.",
    tarihselOrnek: "Teknoloji hisselerine ilgi duyuyorsunuz ama hangisini alacağınızı bilmiyorsunuz. 'Yabancı Teknoloji Sektörü Fonu' aldığınızda, Apple, Microsoft, Nvidia gibi devlerin hepsine tek bir fon payıyla yatırım yapmış olursunuz.",
    kimlerIcinUygun: "Ekran takip edecek vakti olmayanlar, borsaya girmek isteyen ama hisse seçmeyi bilmeyenler, pasif ve uzun vadeli birikim yapanlar.",
    altinKural: "Risk profilinize uygun fonlar seçin. Gençseniz hisse ağırlıklı, emekliliğe yakınsanız borçlanma aracı ağırlıklı fonları tercih edin."
  },
  {
    slug: "altin-ve-kiymetli-madenler",
    baslik: "Altın ve Kıymetli Madenler",
    kisaOzet: "İnsanlığın binlerce yıllık en güvenli limanı. Enflasyona ve krizlere karşı serveti koruma aracıdır.",
    tanim: "Fiziki veya banka hesabı üzerinden alınan altın, gümüş gibi değerli madenlerdir. Altın bir şirket gibi değer üretmez veya kâr payı dağıtmaz, ancak kıt olduğu için enflasyona ve para basımına karşı alım gücünüzü korur.",
    icon: "🥇",
    renk: "#F1C40F",
    skorlar: {
          "risk": 3,
          "getiriPotansiyeli": 4,
          "likidite": 9,
          "zamanIhtiyaci": 1
    },
    ayrintilar: {
          "vergiDurumu": "Fiziki altında veya borsadaki altın sertifikalarında (ALTINS1) stopaj yoktur. Banka makas (alım-satım) farkları bir tür gizli işlem maliyetidir.",
          "psikolojikZorluk": "Çok Düşük. Fiyatı düşse bile 'Altın altındır, eninde sonunda çıkar' psikolojisi ile en rahat elde tutulan varlıktır.",
          "bilesikGetiriGucu": "Yok. Altın doğurmaz. 1 kg altınınız varsa, 10 yıl sonra da 1 kg altınınız olur. Sadece birim fiyatı değişir.",
          "uzmanlikIhtiyaci": "Hiç. Sadece ons ve gram/dolar paritelerinin temel matematiğini anlamak yeterlidir."
    },
    avantajlar: [
          "Kriz, savaş ve enflasyon dönemlerinde 'Güvenli Liman' (Safe Haven) olarak çalışır.",
          "Dünyanın her yerinde geçerliliği vardır.",
          "Sıfıra inme (iflas etme) riski teorik olarak yoktur.",
          "Hiçbir finansal bilgi gerektirmez."
    ],
    dezavantajlar: [
          "Bileşik getiri üretmez, kâr payı (temettü) veya kira vermez. Sadece durur.",
          "Fiziki saklaması güvenlik riski taşır.",
          "Uzun vadeli verilerde, reel getirisi borsanın (hisse senetlerinin) gerisinde kalır."
    ],
    nasilAlinir: "Kuyumculardan fiziki olarak, bankalardan gram altın hesapları üzerinden veya borsadan 'Altın Sertifikası (ALTINS1)' olarak alınabilir.",
    tarihselOrnek: "1970'lerde 1 ons altın ile alınabilen kaliteli bir takım elbise, bugün de 1 ons altın (yaklaşık 2300$) ile alınabilmektedir. Altın zenginleştirmez, standardınızı korur.",
    kimlerIcinUygun: "Mevcut servetini enflasyona karşı korumak isteyen muhafazakar yatırımcılar, portföyünde krizlere karşı sigorta arayanlar.",
    altinKural: "Altın bir zenginleşme aracı değil, zenginliği koruma aracıdır. Portföyün tamamı değil, %10-20'lik bir 'sigorta' parçası olması önerilir."
  },
  {
    slug: "gayrimenkul",
    baslik: "Gayrimenkul (Emlak)",
    kisaOzet: "Fiziksel toprağa, konuta veya ticari mülke yapılan, kira getirisi ve değer artışı sağlayan geleneksel yatırım.",
    tanim: "Ev, arsa, tarla veya dükkan gibi fiziksel mülklerin satın alınmasıdır. Hem değer artışından (kapital kazancı) hem de aylık kira getirisinden kazanç sağlayan çift motorlu bir sistemdir.",
    icon: "🏢",
    renk: "#E67E22",
    skorlar: {
          "risk": 4,
          "getiriPotansiyeli": 7,
          "likidite": 2,
          "zamanIhtiyaci": 5
    },
    ayrintilar: {
          "vergiDurumu": "Alım satımda %4 tapu harcı ödenir. Alındıktan sonra 5 yıl içinde satılırsa Değer Artış Kazancı Vergisi çıkar. Kira gelirleri ise her yıl mart ayında beyan edilip Gelir Vergisine tabidir.",
          "psikolojikZorluk": "Orta-Yüksek. Evin değeri düşmese bile kötü kiracı, hasar, boya, tadilat, hukuki süreçler gibi insan ilişkilerine dayalı ciddi stres faktörleri barındırır.",
          "bilesikGetiriGucu": "Orta. Kira gelirleri alınıp tekrar gayrimenkule veya başka araçlara yatırıldığında bileşik etki yaratılır ancak çok yüksek sermaye gerektirdiği için zinciri kırmak kolaydır.",
          "uzmanlikIhtiyaci": "Lokal piyasa analizi (Amortisman süresi hesaplama), pazarlık yeteneği ve temel gayrimenkul hukuku bilgisi."
    },
    avantajlar: [
          "Fiziksel ve somut bir varlıktır, psikolojik olarak güvende hissettirir.",
          "Düzenli bir pasif gelir (Kira) akışı sağlar.",
          "Kredi (Kaldıraç) kullanılarak, başkasının (bankanın) parasıyla yatırım yapmaya çok uygundur.",
          "Enflasyon dönemlerinde değeri ve kirası enflasyonla birlikte artar."
    ],
    dezavantajlar: [
          "Likiditesi çok düşüktür. Acil paraya ihtiyacınız olduğunda bir evi 1 saatte satamazsınız.",
          "Giriş bariyeri (başlangıç sermayesi) çok yüksektir.",
          "Kiracı sorunları, bakım, vergi ve onarım gibi görünmez operasyonel maliyetleri (ve stresleri) vardır."
    ],
    nasilAlinir: "Geleneksel olarak tapu müdürlüklerinden alınır. Alternatif olarak GYO (Gayrimenkul Yatırım Ortaklığı) hisseleri alarak 100 TL ile bile emlak sektörüne yatırım yapılabilir.",
    tarihselOrnek: "Bir evi %20 peşinat ve %80 kredi ile aldığınızda, evin değeri artarken borcunuzun nominal kalması (enflasyon karşısında erimesi), kaldıraç etkisinin tarihteki en yaygın zenginleşme modelidir.",
    kimlerIcinUygun: "Büyük sermayesi olanlar, düzenli ve nispeten risksiz nakit akışı arayanlar, fiziksel varlıklara dokunmayı sevenler.",
    altinKural: "Emlak yatırımı yaparken sadece evin bugünkü değerine değil, kira çarpanına (Amortisman süresi) odaklanın."
  },
  {
    slug: "kripto-paralar",
    baslik: "Kripto Varlıklar (Bitcoin vb.)",
    kisaOzet: "Merkeziyetsiz, blokzincir (blockchain) teknolojisi üzerinde çalışan yüksek riskli dijital varlıklar.",
    tanim: "Herhangi bir devlete veya merkez bankasına bağlı olmayan, dijital ve şifrelenmiş değer değişim araçlarıdır. Bitcoin bir değer saklama aracı olarak görülürken, altcoinler teknoloji projelerine benzer.",
    icon: "₿",
    renk: "#F39C12",
    skorlar: {
          "risk": 10,
          "getiriPotansiyeli": 10,
          "likidite": 10,
          "zamanIhtiyaci": 8
    },
    ayrintilar: {
          "vergiDurumu": "Türkiye'de mevcut durumda (yasa tasarıları hariç) bireysel yatırımcılar için bir vergilendirme yoktur ancak küresel borsalarda regülasyonlar hızla gelişmektedir.",
          "psikolojikZorluk": "Maksimum Seviye (10/10). 7/24 açık olduğu için uyku bozukluğu yapabilir. %80 çöküşler normal karşılandığı için çelik gibi sinirler gerektirir. FOMO (Fırsatı kaçırma korkusu) çok güçlüdür.",
          "bilesikGetiriGucu": "Staking/DeFi ile mümkün. Sahip olunan kripto paralar ağa kilitlenerek (Stake edilerek) yıllık kripto cinsi getiri sağlanabilir.",
          "uzmanlikIhtiyaci": "Blokzincir temelleri, cüzdan güvenliği (Soğuk Cüzdan kullanımı), tokenomics (arz/talep mekaniği) ve siber güvenlik farkındalığı şarttır."
    },
    avantajlar: [
          "Tarihin en hızlı büyüyen varlık sınıflarından biridir, getiri potansiyeli astronomiktir.",
          "7/24 piyasa açıktır, hafta sonu bile işlem yapılabilir.",
          "Dünyanın her yerine saniyeler içinde, banka izni olmadan transfer edilebilir.",
          "Sınırlı arzı olanlar (Örn: Bitcoin) dijital altın işlevi görebilir."
    ],
    dezavantajlar: [
          "Risk ve volatilite devasadır. Birkaç gün içinde %50 değer kaybedebilir.",
          "Regülasyon (yasal düzenleme) eksikliği nedeniyle borsa iflasları ve hacklenme riskleri vardır.",
          "Temel değerini (Intrinsic value) hesaplamak klasik modellere göre çok zordur."
    ],
    nasilAlinir: "Binance, Paribu, BtcTurk gibi merkezi kripto para borsaları üzerinden TL veya Dolar ile alınabilir.",
    tarihselOrnek: "Bitcoin, ortaya çıkışından bu yana yaşanan döngüsel ayı piyasalarında %80'in üzerinde düşüşler yaşasa da, 4 yıllık halving (yarılanma) döngüleriyle uzun vadede eski zirvelerini sürekli aşmıştır.",
    kimlerIcinUygun: "Risk toleransı çok yüksek olan, parasının tamamını kaybetme ihtimalini uykusu kaçmadan göze alabilen, genç ve teknolojiye inanan yatırımcılar.",
    altinKural: "Asla 'Kaybetmeyi göze alamayacağınız' bir miktarla bu piyasaya girmeyin ve varlıklarınızı borsalarda değil, kendi soğuk cüzdanınızda tutun."
  },
  {
    slug: "mevduat-ve-tahvil",
    baslik: "Mevduat ve Sabit Getiriler",
    kisaOzet: "Paranızı belirli bir faiz oranı karşılığında bankaya veya devlete (Tahvil/Bono) ödünç verme işlemi.",
    tanim: "Vadeli mevduat, paranızı bankaya kiralayıp karşılığında kesin bir faiz getirisi almaktır. Tahvil ise devlete veya şirketlere borç verip vade sonunda anapara + faizini almaktır. Sürpriz yoktur, getiri baştan bellidir.",
    icon: "🏦",
    renk: "#27AE60",
    skorlar: {
          "risk": 1,
          "getiriPotansiyeli": 2,
          "likidite": 6,
          "zamanIhtiyaci": 1
    },
    ayrintilar: {
          "vergiDurumu": "Vadeli mevduat ve tahvil gelirlerinde kaynağında kesilen (otomatik) %5 ile %15 arası vadeye göre değişen bir stopaj (vergi) uygulaması vardır.",
          "psikolojikZorluk": "Sıfır. Vade bitiminde ne alacağınızı ilk günden kuruşu kuruşuna bilirsiniz. Sadece enflasyon farkedildiğinde hissettirmeden bir moral bozukluğu yapabilir.",
          "bilesikGetiriGucu": "Mümkün. Kazanılan faiz, anaparaya eklenip tekrar faize yatırılırsa bileşikleşir. Ancak enflasyonun altındaki faiz oranlarında reel bileşik büyüme sağlanamaz.",
          "uzmanlikIhtiyaci": "Hiç yok. Banka uygulamasındaki faiz oranını ve enflasyonu karşılaştırabilmek yeterlidir."
    },
    avantajlar: [
          "Anapara kaybı riski (devlet garantisi sınırlarında) neredeyse sıfırdır.",
          "Getiri oranı baştan garantidir, sürpriz yaşamazsınız.",
          "Stres seviyesi sıfırdır, piyasa çöktü mü diye ekran takip etmezsiniz."
    ],
    dezavantajlar: [
          "Enflasyonun yüksek olduğu dönemlerde, aldığınız faiz enflasyonun altında kalır (Reel kayıp).",
          "Zenginleştirmez, sadece paranızı park ettiğiniz geçici bir duraktır.",
          "Vadeden önce bozulduğunda faiz getirisi kaybedilir."
    ],
    nasilAlinir: "Mobil bankacılık uygulamalarından 'Vadeli Hesap Açılışı' yaparak saniyeler içinde başlatılabilir. Tahviller de bankaların yatırım menüsünden alınır.",
    tarihselOrnek: "Merkez bankalarının faiz artırdığı dönemlerde nakitte kalıp risksiz getiri elde etmek cazipken, enflasyonun yüksek seyrettiği dönemlerde faiz %40, enflasyon %60 ise paranız her yıl net %20 erir.",
    kimlerIcinUygun: "Kısa süre sonra (Örn: 3 ay sonra ev/araba alacak) o paraya kesin ihtiyacı olanlar, risk toleransı sıfır olan yaşlı yatırımcılar.",
    altinKural: "Enflasyon oranının faiz oranından yüksek olduğu ekonomilerde, mevduatta kalmak yavaş yavaş fakirleşmeyi garantilemektir."
  },
  {
    slug: "bireysel-emeklilik-bes",
    baslik: "Bireysel Emeklilik Sistemi (BES)",
    kisaOzet: "Devletin yüksek oranlı katkı (%30) sunduğu, gelecekteki emeklilik yıllarınız için tasarlanmış uzun vadeli birikim fonları.",
    tanim: "Aylık düzenli veya toplu ödemeler yaparak, paranızın profesyonellerce yönetilen fonlarda değerlendirildiği bir sistemdir. Temel amacı bugünkü gelirinizle gelecekteki emekliliğinizi finanse etmektir.",
    icon: "👴",
    renk: "#8E44AD",
    skorlar: {
          "risk": 4,
          "getiriPotansiyeli": 6,
          "likidite": 2,
          "zamanIhtiyaci": 1
    },
    ayrintilar: {
          "vergiDurumu": "10 yıl sistemde kalıp 56 yaşını doldurduğunuzda stopaj vergisi %5'e düşer. Erken çıkışlarda devlet katkısını kaybeder ve %15'e varan stopaj ödersiniz.",
          "psikolojikZorluk": "Sıfıra Yakın. Aylık kredi kartınızdan otomatik çekildiği için paranızın varlığını unutursunuz, bu da stresi sıfırlar.",
          "bilesikGetiriGucu": "Çok Yüksek. Düzenli yatırımlar + Devlet Katkısı + Fon getirileri yıllar içinde efsanevi bir kartopu (bileşik) etkisi yaratır.",
          "uzmanlikIhtiyaci": "Çok Düşük. Sadece sistemdeki paranızın hangi fonlara (hisse, altın, faiz) yatırılacağını risk profilinize göre seçmeniz (veya otomatik robotlara devretmeniz) gerekir."
    },
    avantajlar: [
          "Türkiye'de yatırılan anaparaya %30 Devlet Katkısı verilmesi (dünyadaki en yüksek teşviklerden biridir).",
          "Otomatik kesildiği için 'istemsiz' tasarruf yapmanızı sağlar.",
          "Paranın zor çekilmesi, sizi 'panik satışından' veya gereksiz harcamalardan korur.",
          "İçerisindeki fon değişim hakkı ile piyasa şartlarına göre pozisyon alınabilir."
    ],
    dezavantajlar: [
          "10 yıl ve 56 yaş kuralından önce çıkarsanız devlet katkısının büyük kısmını (%85'e kadar) yakarsınız.",
          "Sistemde giriş aidatı ve yıllık yönetim gider kesintileri vardır.",
          "Likiditesi düşüktür; parayı hemen çekip araba/ev almak için kullanılamaz."
    ],
    nasilAlinir: "Herhangi bir sigorta veya emeklilik şirketinden (bankalar üzerinden de) saniyeler içinde sözleşme başlatılabilir.",
    tarihselOrnek: "Ayda sadece 1.000 TL yatırarak başlayan ve agresif hisse senedi fonlarını seçen bir yatırımcı, 15 yıl sonunda devlet katkısı ve bileşik getiri ile birlikte reel olarak (enflasyondan arındırılmış) devasa bir emeklilik ikramiyesine ulaşır.",
    kimlerIcinUygun: "Birikim yapma disiplini olmayanlar, finansal özgürlüğünü 50'li yaşlarına garantilemek isteyenler, uzun vadede paraya dokunmayacak olanlar.",
    altinKural: "BES bir kumbara değildir. Sisteme dahil olduktan sonra standart fonlarda kalmayın; yaşınız gençse mutlaka hisse senedi ağırlıklı agresif BES fonlarına geçiş yapın."
  },
  {
    slug: "eurobond",
    baslik: "Eurobond (Dolar/Euro Tahvili)",
    kisaOzet: "Devletlerin veya büyük şirketlerin yurt dışından döviz cinsinden (Genelde Dolar) borçlanmak için ihraç ettiği borçlanma senetleri.",
    tanim: "Türkiye Cumhuriyeti Hazine'sine veya büyük holdinglere Dolar veya Euro vererek borç sağladığınız, karşılığında size 6 ayda bir döviz cinsinden nakit kupon (faiz) ödeyen yatırım aracıdır.",
    icon: "💵",
    renk: "#16A085",
    skorlar: {
          "risk": 3,
          "getiriPotansiyeli": 5,
          "likidite": 7,
          "zamanIhtiyaci": 2
    },
    ayrintilar: {
          "vergiDurumu": "Kupon gelirleri belirli bir istisna tutarını (Örn: 2024 için 230.000 TL) geçerse Gelir Vergisi beyannamesi verilmesi zorunludur. Alım satım kazançları da vergiye tabidir.",
          "psikolojikZorluk": "Düşük. Her 6 ayda bir hesabınıza şıkır şıkır Dolar yatması psikolojik olarak inanılmaz bir rahatlama (pasif gelir) sağlar.",
          "bilesikGetiriGucu": "Orta. Gelen kupon ödemeleri (Dolarlar) yenilip içilmez, gidip onlarla tekrar Eurobond alınırsa bileşik etki harika çalışır.",
          "uzmanlikIhtiyaci": "Orta. Ülkenin CDS (Risk) primini, kupon oranını ve vergi beyannamesi verme zorunluluklarını bilmek gerekir."
    },
    avantajlar: [
          "Düzenli, nakit ve döviz cinsinden sarsılmaz bir pasif gelir yaratır (Dolarla maaş almak gibi).",
          "Ülke iflas etmediği (default) sürece anapara ve faiz ödemesi devlet garantisindedir.",
          "Kur riskinden (TL'nin değer kaybından) %100 korur.",
          "Getirileri global banka mevduatlarına göre çok daha yüksektir (Örn: Dolar bazında yıllık %7-9 arası)."
    ],
    dezavantajlar: [
          "Minimum giriş tutarı genelde yüksektir (En az 10.000 Dolar veya muadili ile alınabilir).",
          "Vadeden önce bozdurulmak istendiğinde, o günkü faiz oranlarına göre (CDS yükselmişse) anaparadan zarar edilebilir.",
          "Vergi beyannamesi doldurma süreci muhasebesel bir yük getirebilir."
    ],
    nasilAlinir: "Bankaların yatırım hesaplarından, mesai saatleri içerisinde veya Eurobond fonları (Döviz cinsi) aracılığıyla parçalı olarak da alınabilir.",
    tarihselOrnek: "100.000 Dolar ile %8 kupon ödemeli bir Eurobond aldınız. Artık hiçbir şey yapmasanız da, her 6 ayda bir hesabınıza net 4.000 Dolar (Yılda 8.000 Dolar) nakit yatar.",
    kimlerIcinUygun: "Belli bir sermayeye ulaşmış, sermayesini kur riskine karşı korurken dolar bazında yüksek nakit akışı (emeklilik benzeri pasif gelir) isteyen yatırımcılar.",
    altinKural: "Eurobond'u vadesinden önce satıp trade (al-sat) etmek için değil, vade sonuna kadar elinizde tutup düzenli dolar maaşı (kupon) almak için alın."
  },
  {
    slug: "kitle-fonlamasi",
    baslik: "Kitle Fonlaması (Startup Yatırımcılığı)",
    kisaOzet: "Henüz borsaya açılmamış, yolun başındaki teknoloji girişimlerine (Startup) çok küçük paralarla ortak olma imkanı.",
    tanim: "Crowdfunding; iyi bir fikri olan ancak sermayesi olmayan girişimcilerin, binlerce küçük yatırımcıdan (kitle) fon topladığı sistemdir. Başarılı olan bir proje geleceğin Yemeksepeti veya Trendyol'u olabilir.",
    icon: "🚀",
    renk: "#D35400",
    skorlar: {
          "risk": 10,
          "getiriPotansiyeli": 10,
          "likidite": 1,
          "zamanIhtiyaci": 7
    },
    ayrintilar: {
          "vergiDurumu": "Elde edilen hisse senetleri 2 yıldan fazla elde tutulursa, şirketin satılmasından doğan değer artış kazançları gelir vergisinden istisna tutulur.",
          "psikolojikZorluk": "Yüksek. Yatırdığınız paranın %90 ihtimalle sıfıra ineceğini, şirket batarsa paranızın kül olacağını baştan kabullenmeniz gerekir.",
          "bilesikGetiriGucu": "Yok. Şirket satılana (Exit) veya halka arz olana kadar para içeride kitlidir, temettü de vermez.",
          "uzmanlikIhtiyaci": "Çok Yüksek. Sektör analizi, girişimci ekibin geçmişi, iş planının uygulanabilirliği ve değerleme kavramlarını bilmek şarttır."
    },
    avantajlar: [
          "Birkaç yüz lira ile bile 'Melek Yatırımcı' olma ayrıcalığı sunar.",
          "Girişim 'Unicorn' (milyar dolarlık şirket) olursa, yatırılan parayı 50x - 100x katlama (Asimetrik Getiri) potansiyeli vardır.",
          "Geleceğin teknolojilerine, yapay zeka veya temiz enerji projelerine doğrudan katkı sağlama tatmini verir."
    ],
    dezavantajlar: [
          "Likidite sıfıra yakındır. Girişim başarıya ulaşana kadar (ki bu 5-10 yıl sürebilir) hisselerinizi satacak bir pazar yoktur.",
          "Başarısızlık oranı devasadır. Startup'ların %90'ı ilk 3 yılda batar.",
          "Girişimci parayı aldıktan sonra şirketi kötü yönetebilir, yatırımcı olarak müdahale şansınız sıfırdır."
    ],
    nasilAlinir: "SPK lisanslı Paya Dayalı Kitle Fonlaması platformları (Örn: Fonbulucu, StartupMarket) üzerinden e-Devlet şifresiyle kayıt olunup, EFT ile kolayca yatırım yapılabilir.",
    tarihselOrnek: "Uber'in kuruluş aşamasında Jason Calacanis'in yaptığı 25.000 Dolarlık melek yatırım, şirket borsaya açıldığında 100 Milyon Doların üzerinde bir değere ulaşmıştı.",
    kimlerIcinUygun: "Risk sermayesi ayırabilen, parasının tamamını kaybetmeyi göze alan, start-up ekosistemine meraklı maceraperest yatırımcılar.",
    altinKural: "Bu alana asla portföyünüzün %5'inden fazlasını ayırmayın ve tek bir girişime değil, en az 10 farklı girişime ufak ufak yatırım yaparak kendi 'Melek Fonunuzu' kurun."
  },
  {
    slug: "emtia-piyasalari",
    baslik: "Emtia Piyasaları (Gümüş, Petrol vb.)",
    kisaOzet: "Altın haricindeki diğer kıymetli madenler, enerji kaynakları ve tarım ürünleri gibi fiziki değeri olan mallar.",
    tanim: "Gümüş, platin, bakır gibi madenler; petrol, doğalgaz gibi enerji kaynakları; veya buğday, kahve gibi tarım ürünlerine yapılan yatırımlardır. Genellikle endüstriyel talebe göre fiyatlanırlar.",
    icon: "🛢️",
    renk: "#7F8C8D",
    skorlar: {
          "risk": 6,
          "getiriPotansiyeli": 6,
          "likidite": 8,
          "zamanIhtiyaci": 5
    },
    ayrintilar: {
          "vergiDurumu": "Emtia yatırım fonları üzerinden alındığında standart fon stopajlarına tabidir (%7.5 - %10). VİOP üzerinden işlem yapıldığında %10 stopaj uygulanır.",
          "psikolojikZorluk": "Orta-Yüksek. Altın kadar sakin değildir. Petrol veya bakır gibi ürünler, dünyadaki savaşlar, pandemiler veya resesyon korkularıyla çok sert fiyat hareketleri yapabilir.",
          "bilesikGetiriGucu": "Yok. Altın gibi emtialar da kendi kendine çoğalmaz, temettü veya faiz ödemez. Sadece birim fiyat üzerinden al-sat kârı elde edilir.",
          "uzmanlikIhtiyaci": "Yüksek. Makroekonomi, merkez bankası politikaları, arz-talep şokları (örn: kuraklık sebebiyle kahve fiyatının artması) gibi küresel olayları takip etmeyi gerektirir."
    },
    avantajlar: [
          "Hisse senedi piyasaları çökerken veya aşırı enflasyon varken portföyü koruyan (hedge eden) harika bir sigortadır.",
          "Dünya nüfusu arttıkça ve sanayi büyüdükçe (özellikle bakır, gümüş gibi iletkenler) bu kaynaklara olan fiziksel talep hep artacaktır.",
          "Emtia sepeti fonlarıyla tüm dünyaya tek tıkla yatırım yapılabilir."
    ],
    dezavantajlar: [
          "Kendi başlarına bir değer (kâr) üretmedikleri için uzun vadede borsanın (şirketlerin) getirisinin çok altında kalırlar.",
          "Fiziki olarak alıp saklamak (örneğin 1 varil petrol veya 1 ton buğday) imkansıza yakındır, bu yüzden fonlar veya kontratlar (kağıt üstünde) alınmak zorundadır.",
          "Jeopolitik risklerden anında ve çok sert etkilenirler."
    ],
    nasilAlinir: "En kolay ve güvenli yolu bankanızdan 'Emtia Sepeti Fonu', 'Gümüş Fonu' veya 'Petrol Yabancı BYF' almaktır.",
    tarihselOrnek: "2020 Pandemisinin başında uçakların durmasıyla petrol fiyatları tarihte ilk kez eksiye düşmüş, ancak 1 yıl sonra tekrar rekor seviyelere fırlayarak devasa kazanç ve kayıplara sahne olmuştur.",
    kimlerIcinUygun: "Portföyünün riskini dağıtmak isteyen, makroekonomik döngüleri (enflasyon/resesyon) okuyabilen ileri düzey yatırımcılar.",
    altinKural: "Emtialara aşık olunmaz. Emtialar alınır, döngüleri bittiğinde satılır. Portföyün merkezinde değil, her zaman kenarında 'koruyucu/fırsatçı' olarak tutulmalıdır."
  },
  {
    slug: "turev-kaldiracli-islemler",
    baslik: "Kaldıraçlı İşlemler (VİOP / Forex)",
    kisaOzet: "Elinizdeki paranın çok daha fazlasıyla işlem yapabildiğiniz veya varlıkların düşüşüne de bahis oynayabildiğiniz türev araçlar.",
    tanim: "Vadeli İşlem ve Opsiyon Piyasası (VİOP) veya Forex, varlıkları gerçekten satın almadığınız, o varlıkların 'gelecekteki' fiyatı üzerine (yükseliş veya düşüş) kontratlar yaptığınız, borçla (kaldıraçla) büyütülmüş piyasalardır.",
    icon: "⚡",
    renk: "#C0392B",
    skorlar: {
          "risk": 10,
          "getiriPotansiyeli": 10,
          "likidite": 10,
          "zamanIhtiyaci": 9
    },
    ayrintilar: {
          "vergiDurumu": "VİOP hisse senedi ve endeks kontratlarında stopaj %0, diğerlerinde (altın, döviz kontratları) %10'dur. Forex ise regülasyonlar gereği SPK onaylı kurumlarda yapılır ve çok sıkı kurallara tabidir.",
          "psikolojikZorluk": "Aşırı Yüksek. Paranızın sıfırlanma (Margin Call - Teminat Tamamlama Çağrısı) riski vardır. Saatlerce ekran başında stres dolu dakikalar geçirilir.",
          "bilesikGetiriGucu": "Yok. Bu piyasalar yatırım değil, kısa vadeli spekülasyon veya korunma (hedge) amaçlıdır.",
          "uzmanlikIhtiyaci": "Maksimum Seviye. Başarılı olmak için derin teknik analiz, risk yönetimi matematiği ve robot gibi duygusuz bir psikoloji şarttır."
    },
    avantajlar: [
          "Piyasa çökerken bile 'Kısa Pozisyon' (Short) açarak para kazanmanızı sağlar.",
          "Kaldıraç sayesinde az bir anaparayla çok büyük hacimli kârlar (veya zararlar) edilebilir.",
          "İhracatçı/İthalatçı şirketlerin kur riskini sigortalaması (Hedging) için mükemmel bir araçtır."
    ],
    dezavantajlar: [
          "Bireysel yatırımcıların %80'inden fazlası bu piyasalarda tüm parasını kaybeder.",
          "Kaldıraç iki ucu keskin kılıçtır; %5'lik bir ters hareket, paranızın %50'sini yok edebilir.",
          "Uzun vadeli birikim psikolojisine aykırıdır, kumar bağımlılığına dönüşebilir."
    ],
    nasilAlinir: "Bankalardan veya aracı kurumlardan VİOP hesabı açarak ve gerekli risk bildirim formlarını imzalayarak girilebilir.",
    tarihselOrnek: "10.000 TL ile 1:10 kaldıraç kullanarak 100.000 TL'lik pozisyon açtığınızda, varlığın fiyatı %10 artarsa paranızı ikiye katlarsınız (10.000 TL kâr). Ancak fiyat %10 düşerse anaparanız tamamen sıfırlanır.",
    kimlerIcinUygun: "Kur riski taşıyan ticaret erbapları veya sadece kaybetmeyi tamamen göze aldığı, profesyonel trade (al-sat) yeteneklerine sahip tam zamanlı spekülatörler.",
    altinKural: "Kaldıraçlı piyasalar, finansal özgürlük yaratmak için değil, halihazırda var olan büyük servetleri hedge etmek (sigortalamak) için dizayn edilmiştir. Bilmiyorsanız uzak durun."
  },
  {
    slug: "kendine-yatirim",
    baslik: "Kendine Yatırım (Eğitim ve İş)",
    kisaOzet: "En yüksek ROI (Yatırım Getirisi) sunan, enflasyondan, krizlerden ve piyasa çöküşlerinden etkilenmeyen tek varlık sınıfı.",
    tanim: "Yeni bir dil öğrenmek, yazılım/dijital pazarlama gibi yüksek gelirli bir yetenek (High-income skill) kazanmak, mentorluk almak veya kendi işini/şirketini kurmak için harcanan zaman ve paradır.",
    icon: "🧠",
    renk: "#2980B9",
    skorlar: {
          "risk": 1,
          "getiriPotansiyeli": 10,
          "likidite": 0,
          "zamanIhtiyaci": 10
    },
    ayrintilar: {
          "vergiDurumu": "Kendi işinizi kurduğunuzda, devlet size personel maaşları, teknolojik cihaz alımları ve yemek/yol giderlerini vergiden düşme (gider gösterme) gibi muazzam yasal avantajlar sağlar.",
          "psikolojikZorluk": "Yüksek. Kendi sınırlarınızı aşmak, başarısızlık korkusuyla yüzleşmek ve yıllarca emek verip hemen sonuç alamamak ciddi bir irade gerektirir.",
          "bilesikGetiriGucu": "Sonsuz. Öğrendiğiniz her yeni yetenek, önceki yeteneğinizin üzerine eklenerek çarpan etkisi (Synergy) yaratır. 10 yılda değeriniz 100 katına çıkabilir.",
          "uzmanlikIhtiyaci": "Başlamak için sıfır, ilerlemek için ise sürekli öğrenme ve adaptasyon."
    },
    avantajlar: [
          "Dünyadaki tüm borsalar çökse, tüm bankalar batsa bile kimse yeteneklerinizi ve beyninizdekileri sizden alamaz.",
          "Getiri potansiyelinin bir tavanı yoktur. %5000 getiri elde etmeniz mümkündür.",
          "Öğrendiğiniz bir yetenekle (Örn: Yazılım) sadece kendi ülkenizdeki değil, dünyadaki tüm müşterilere döviz bazlı hizmet verebilirsiniz.",
          "Enflasyona karşı %100 bağışıktır, çünkü yeteneğinizin değerini her zaman güncel enflasyona göre (maaş/fatura) yeniden fiyatlarsınız."
    ],
    dezavantajlar: [
          "Sonuçları hemen görülmez. Yıllarca fedakarlık, çalışma ve disiplin gerektirir.",
          "Pasif değil, son derece aktif bir yatırımdır. Emek vermeyi bırakırsanız getiri durur.",
          "Sadece para yetmez, en değerli varlığınız olan 'zamanınızı' devasa miktarda harcamanız gerekir."
    ],
    nasilAlinir: "Kitap okuyarak, kaliteli online eğitimler (Udemy, Coursera) alarak, sektörünüzdeki uzmanlarla ağ kurarak veya hafta sonları kendi projenizi kodlayarak/tasarlayarak başlar.",
    tarihselOrnek: "Benjamin Franklin: 'Bilgiye yapılan yatırım her zaman en iyi faizi verir.' 2.000 TL ile alınan bir finans/yazılım eğitiminin size ömür boyu milyonlarca lira kazandırma potansiyeli, 2.000 TL ile alınacak hiçbir hisse veya kripto parada yoktur.",
    kimlerIcinUygun: "İçinde bulunduğu maddi durumdan kurtulmak için sorumluluk almaya hazır olan, sürekli gelişime inanan vizyoner herkes.",
    altinKural: "Paranız azken (Örn: 10.000 TL altı), o parayı borsada veya kriptoda %20 büyütmeye çalışmak size sadece zaman kaybettirir. O paranın %100'ünü kendinizi geliştirmeye yatırıp gelirinizi artırın. Borsa yatırımı, kazancınız büyüdükten sonra başlar."
  },
  {
    slug: "yabanci-hisse-senetleri",
    baslik: "Yabancı Hisse Senetleri (Wall Street)",
    kisaOzet: "Apple, Microsoft, Tesla gibi küresel teknoloji ve sanayi devlerine ortak olarak portföyü dolar bazında büyütmek.",
    tanim: "ABD (S&P 500, Nasdaq) veya Avrupa borsalarında işlem gören şirketlerin hisselerini ifade eder. Türkiye'deki kur ve ülke riskinden (ülke riski) tamamen izole, global bir yatırım türüdür.",
    icon: "🌎",
    renk: "#2980B9",
    skorlar: {
          "risk": 6,
          "getiriPotansiyeli": 8,
          "likidite": 9,
          "zamanIhtiyaci": 5
    },
    ayrintilar: {
          "vergiDurumu": "Türk borsasının aksine, yurtdışı borsalardan elde edilen alım-satım kârları ve temettüler yıllık Gelir Vergisi beyannamesine tabidir (Çifte vergilendirmeyi önleme anlaşmaları dikkate alınır).",
          "psikolojikZorluk": "Düşük/Orta. Dünyanın en büyük ve stabil şirketlerine ortak olduğunuz için yerel hisselere göre daha az streslidir, ancak küresel krizlerde (Örn: Fed faiz kararları) dalgalanır.",
          "bilesikGetiriGucu": "Çok Yüksek. S&P 500 endeksi tarihsel olarak yıllık ortalama %9-10 civarı dolar bazlı bileşik getiri sağlamıştır.",
          "uzmanlikIhtiyaci": "Orta. Küresel ekonomiyi, İngilizce finansal raporları ve döviz/vergi mevzuatını takip etmeyi gerektirir."
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
          "risk": 2,
          "getiriPotansiyeli": 1,
          "likidite": 10,
          "zamanIhtiyaci": 1
    },
    ayrintilar: {
          "vergiDurumu": "Kambiyo muamele vergisi (binde 2) gibi alım anında uygulanan küçük vergiler dışında ekstra bir gelir vergisi beyanı gerektirmez.",
          "psikolojikZorluk": "Çok Düşük. Ancak enflasyonun döviz artışından yüksek olduğu yıllarda 'Param dolarda ama yine de alım gücüm düşüyor' stresi yaşatır.",
          "bilesikGetiriGucu": "Sıfır. Yastık altındaki 100 Dolar, 20 yıl sonra yine 100 Dolardır. Üstelik ABD enflasyonu nedeniyle 20 yıl sonra o 100 Doların alım gücü yarı yarıya düşmüş olur.",
          "uzmanlikIhtiyaci": "Hiç Yok. Herkesin bildiği ve en çok başvurduğu ilkel korunma yöntemidir."
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
          "risk": 4,
          "getiriPotansiyeli": 5,
          "likidite": 8,
          "zamanIhtiyaci": 4
    },
    ayrintilar: {
          "vergiDurumu": "Normal BIST hisselerinde olduğu gibi %0 stopaj uygulanır (Mevcut kanunlar çerçevesinde kâr amaçlı bireysel alım satımlarda).",
          "psikolojikZorluk": "Düşük. Genellikle ilk günlerde tavan (maksimum yükseliş) serileri yaptığı için yatırımcıya anında bir dopamin ve mutluluk verir. Asıl zorluk, hissenin düşüşe geçtiği noktada ne zaman satılacağına karar vermektir.",
          "bilesikGetiriGucu": "Orta. Halka arzdan alınan hisse uzun yıllar elde tutulup şirketin büyümesine ortak olunursa çok yüksek bileşik getiri yaratabilir.",
          "uzmanlikIhtiyaci": "Düşük-Orta. SPK tarafından yayınlanan 'İzahname' adlı resmi belgeyi (şirketin borçluluk durumu, fonu nerede kullanacağı) okuma kültürü gerektirir."
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
          "risk": 7,
          "getiriPotansiyeli": 8,
          "likidite": 1,
          "zamanIhtiyaci": 8
    },
    ayrintilar: {
          "vergiDurumu": "Ülkeden ülkeye değişmekle birlikte, koleksiyon eserleri fiziksel ve kayıtsız el değiştirebildiği için (veya gümrükteki antrepolarda saklandığında) geleneksel sistemlerden farklı ve kapalı bir vergi dinamiğine sahiptir.",
          "psikolojikZorluk": "Düşük. Eserin fiyatı günlük bir ekranda yanıp sönmez. Evinizin duvarında duran bir tabloya bakarken sadece keyif alırsınız.",
          "bilesikGetiriGucu": "Yok. Bir tablo başka tablolar doğurmaz. Sadece zaman geçtikçe nadirliği artar ve zenginlerin sayısı arttıkça o esere olan talep birim fiyatı yukarı çeker.",
          "uzmanlikIhtiyaci": "Çok Yüksek. Sahte eserleri anlama (Orijinallik), müzayede dinamiklerini bilme, ressamların veya saat mekanizmalarının tarihini inceleyecek tutkuya sahip olmak şarttır."
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

module.exports = { YATIRIM_ARACLARI };
