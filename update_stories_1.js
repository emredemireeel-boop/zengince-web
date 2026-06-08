const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'girisimciler-data.js');
let { GIRISIMCILER } = require(dataPath);

const updates = {
  "naval-ravikant": {
    "detayliHikaye": `Naval Ravikant'ın hikayesi, geleneksel Silikon Vadisi milyarderlerinden tamamen farklıdır. Hindistan'dan ABD'ye göç etmiş, yoksul bir çocukluk geçirmiş ve çocukluğunu kütüphanelerde kitap okuyarak geçirmiştir. Bu entelektüel temel, onu sadece bir girişimci değil, aynı zamanda modern bir filozof yapmıştır. Epinions gibi ilk girişimlerinde büyük ihanetlere uğramış, kurucular arası davalarla boğuşmuştur. Ancak pes etmek yerine, melek yatırımcılık dünyasındaki bilgi asimetrisini ve haksızlığı çözmek için AngelList'i kurmuştur.

Naval'ın asıl farkı, zenginliğe bakış açısıdır. O, "Zamanını satarak zengin olamazsın" ilkesini savunur. Zenginliği, sen uyurken bile sana kazandıran sistemler (kod, medya, sermaye, işçi) olarak tanımlar. Bugün Twitter fırtınaları (tweetstorms) ve podcast'leri, tüm dünyada milyonlarca insana finansal özgürlüğün bir rastlantı değil, öğrenilebilir bir beceri olduğunu öğretmektedir. O, para kazanmanın sadece bir yan ürün olduğu, asıl hedefin mutlak özgürlük (istediğin zaman, istediğin kişiyle, istediğin yerde olma) olduğu bir felsefeyi temsil eder.`,
    "zihinYapisi": [
      {
        "baslik": "Özgül Bilgi (Specific Knowledge)",
        "aciklama": "Seni sen yapan, okullarda öğretilemeyen bilgidir. Özgül bilgi, çocukken sana oyun gibi gelen ama başkalarına iş gibi görünen şeylerde gizlidir. Bu bilgiye sahip olduğunda, kimse seninle rekabet edemez çünkü kimse 'sen' olamaz."
      },
      {
        "baslik": "Sıfır Marjinal Maliyetli Kaldıraç",
        "aciklama": "Eskiden zengin olmak için ya paran (sermaye kaldıraç) ya da emrinde çalışan insanlar (emek kaldıraç) olması gerekirdi. Bugün ise izin gerektirmeyen (permissionless) kaldıraçlar var: Yazdığın bir kod veya çektiğin bir video. Bir kere üretirsin, milyonlarca kez bedavaya çoğaltılır."
      },
      {
        "baslik": "Karar Verme Çerçevesi",
        "aciklama": "Eğer iki seçenek arasında kalıyorsan ve ikisi de eşit derecede mantıklı geliyorsa, kısa vadede daha acı verici ve zor olanı seç. Çünkü beyin, kısa vadeli acıdan kaçmak için her zaman kolay olanı mantıklılaştırmaya çalışır."
      },
      {
        "baslik": "Zamanın Efendisi Olmak",
        "aciklama": "Takvimini başkalarının doldurmasına izin verirsen, onların hedefleri için çalışırsın. Zenginlik, sabah kalktığında 'Bugün sadece ne istiyorsam onu yapacağım' diyebilmektir."
      }
    ]
  },
  "warren-buffett": {
    "detayliHikaye": `Omaha'nın Kahini lakaplı Warren Buffett, modern zamanların en efsanevi yatırımcısıdır. Ancak onun serveti, Wall Street'in gürültülü ve panik dolu salonlarında değil, Omaha'nın sessiz bir köşesinde, saatlerce okuyarak ve düşünerek inşa edilmiştir. Buffett henüz çocukken kola şişeleri satarak ve pinball makineleri kiralayarak ticarete atılmış, kazandığı her kuruşu bir sonraki yatırımı için kullanmıştır.

Onun stratejisi çoğu insana inanılmaz derecede "sıkıcı" gelir: Sadece anladığın işlere yatırım yap, harika şirketleri adil fiyatlara al (adil şirketleri harika fiyatlara almak yerine) ve onları sonsuza kadar elinde tut. Dot-com balonu sırasında herkes teknoloji hisselerinden milyarlar kazanırken o reddettiği için "modası geçmiş" ilan edilmiş, ancak balon patladığında haklı çıkmıştır. Buffett'ın en büyük gücü IQ'su değil, duygusal zekasıdır. Piyasa panik halindeyken açgözlü, herkes açgözlüyken korkak olabilme iradesi, onu tarihin en istikrarlı servet yaratıcısı yapmıştır. Ve unutulmamalıdır ki servetinin %99'unu 50 yaşından sonra, bileşik getirinin mucizesi sayesinde elde etmiştir.`,
    "zihinYapisi": [
      {
        "baslik": "Bileşik Getirinin 8. Harikası",
        "aciklama": "Buffett'ın başarısı 1-2 harika hamleden değil, yarım asır boyunca büyük hatalar yapmaktan kaçınmasından gelir. Uzun vadeli, kesintisiz bir büyüme, kısa vadeli yüksek kazançlardan her zaman üstündür."
      },
      {
        "baslik": "Ekonomik Hendek (Moat)",
        "aciklama": "Buffett sadece etrafı derin bir hendekle (rekabet avantajı, marka gücü, ağ etkisi) çevrili, düşmanların saldıramayacağı şirketlere (kalelere) yatırım yapar."
      },
      {
        "baslik": "Etki Alanı (Circle of Competence)",
        "aciklama": "Her şeyi bilmene gerek yok. Kendi bilgi alanının sınırlarını çok iyi bilmen ve asla o sınırların dışına çıkıp anlamadığın işlere yatırım yapmaman yeterlidir."
      },
      {
        "baslik": "Hisse Senedi Değil, İşletme Sahibi Olmak",
        "aciklama": "Ekranda yanıp sönen fiyatlara değil, işletmenin gerçek içsel değerine odaklanır. Bir hisseyi aldığında yarın borsa 5 yıl kapalı kalsa bile rahat uyuyabilmelidir."
      }
    ]
  },
  "charlie-munger": {
    "detayliHikaye": `Charlie Munger, sadece Warren Buffett'ın sağ kolu değil, Berkshire Hathaway'in arkasındaki asıl felsefi beyindir. Avukatlık eğitimi alan Munger, çok genç yaşta evladını lösemiden kaybetmiş, boşanmış ve bir dönem ciddi maddi sıkıntılar yaşamıştır. Ancak o, yaşadığı trajedileri bir bahane olarak kullanmak yerine zihnini dünyanın en keskin karar alma makinesine dönüştürmüştür.

Munger, klasik finans eğitimini reddeder. Ona göre dünyayı sadece ekonomiyle anlamak, dünyayı tek gözle görmek demektir. Biyoloji, fizik, evrimsel psikoloji, tarih ve matematikten alınmış temel prensipleri birleştirerek kafasında devasa bir "mental modeller ağı" inşa etmiştir. Buffett'ı "ucuz ve kötü şirketleri" almaktan vazgeçirip "kaliteli şirketlere" yönlendiren kişi Munger'dır. Onun vizyonu, hayatta sadece para kazanmak değil, rasyonel düşünmeyi bir ahlaki zorunluluk haline getirmek ve "kendi kendini kandırma" aptallığına düşmemektir. İlerleyen yaşına rağmen sürekli kitap okuyan Munger, "Eğer her gece yatağa sabah kalktığından biraz daha akıllı girmiyorsan, hayatı israf ediyorsun demektir" diyerek bitmek bilmeyen öğrenme açlığını kanıtlamıştır.`,
    "zihinYapisi": [
      {
        "baslik": "Mental Modeller Kafesi",
        "aciklama": "Elinizde sadece bir çekiç varsa, her sorun size bir çivi gibi görünür. Munger, farklı disiplinlerden 100'e yakın zeka modeli (ör: Pareto ilkesi, termodinamik yasaları, evrim) kullanarak problemleri çok boyutlu analiz eder."
      },
      {
        "baslik": "Tersine Mühendislik (Inversion)",
        "aciklama": "Munger her soruna sondan başlar. 'Nasıl zengin olurum?' yerine 'İnsanları iflas ettiren kesin yollar nelerdir?' diye sorar ve sadece bu yollardan uzak durarak başarıyı garantiler."
      },
      {
        "baslik": "Lollapalooza Etkisi",
        "aciklama": "Birden fazla farklı psikolojik veya fiziksel faktörün (örneğin sosyal kanıt, teşvik ve kıtlık) aynı anda aynı yönde etki ederek olağanüstü, orantısız sonuçlar doğurmasıdır."
      },
      {
        "baslik": "Kendi Kendini Kandırmamak",
        "aciklama": "En kolay kandırabileceğin kişi kendinsindir. İnsanın egosunu bir kenara bırakıp, ne kadar inansa da karşıt kanıtları arama cesareti göstermesi rasyonalitenin temelidir."
      }
    ]
  },
  "ray-dalio": {
    "detayliHikaye": `Ray Dalio, sıradan bir borsa simsarıyken, 1980'lerde piyasalardaki büyük dalgalanmaları yanlış tahmin edip iflasın eşiğine gelmiş, hatta faturalarını ödeyebilmek için babasından borç almak zorunda kalmıştır. Ancak bu devasa yıkım, onun hayatının dönüm noktası oldu. "Ben haklıyım" demek yerine "Haklı olduğumu nasıl bilebilirim?" sorusunu sormaya başladı. Bu zihniyet dönüşümü, Bridgewater Associates'i kurmasını ve 160 milyar dolarlık dünyanın en büyük hedge fonuna dönüştürmesini sağladı.

Dalio, hem makro ekonomiyi hem de insan ilişkilerini kusursuz çalışan mekanik bir "makine" olarak görür. Kendi şirketinde "Radikal Şeffaflık" adını verdiği devrimsel bir kültür yarattı. Toplantılarda stajyerlerin bile Dalio'yu eleştirebildiği, tüm görüşmelerin kaydedilip herkese açık olduğu, fikirlerin kimin söylediğine göre değil "mantık ağırlığına" (believability) göre değerlendirildiği bir sistem kurdu. Krizleri önceden tahmin edebilen bilgisayar algoritmaları geliştirdi. Ona göre başarı, evrenin temel nedensellik kurallarını anlayıp, duyguları denklemin dışına atarak bir kod gibi yaşamaktır.`,
    "zihinYapisi": [
      {
        "baslik": "Radikal Gerçekçilik ve Şeffaflık",
        "aciklama": "Egonun gerçeği görmeni engellemesine izin verme. Gerçek ne kadar çirkin veya acı verici olursa olsun, onunla yüzleşmek, gözlerini kapatmaktan her zaman daha kârlıdır."
      },
      {
        "baslik": "Acı + Derin Düşünme = İlerleme",
        "aciklama": "Başarısızlıklar bir ceza değil, bir bulmacadır. Can yakan bir hata yaptığında, acı dindikten hemen sonra o hatanın kök nedenini bulup prensiplerini güncellersen evrimleşirsin."
      },
      {
        "baslik": "İdeal Liyakat Sistemi (Idea Meritocracy)",
        "aciklama": "Kararların demokrasideki gibi herkesin eşit oyuyla veya diktatörlükteki gibi patronun tek sözüyle değil, geçmişte o konuda kim haklı çıktıysa onun fikrine ağırlık verilerek alındığı bir algoritma."
      },
      {
        "baslik": "Ekonomik Makineyi Anlamak",
        "aciklama": "Tarih kendini tekrar eder. Dalio, krizleri tahmin edebilmek için yüzlerce yıl geriye giderek kredi döngülerinin, borç krizlerinin ve imparatorlukların yükseliş-çöküş paternlerini analiz etmiştir."
      }
    ]
  },
  "elon-musk": {
    "detayliHikaye": `Güney Afrika'da bilgisayar oyunları kodlayarak iş hayatına başlayan Elon Musk, PayPal'ı eBay'e sattığında 165 milyon dolar kazanmış genç bir milyonerdi. Ancak parayı alıp emekli olmak yerine, insanoğlunun en büyük üç sorununu çözmeye girişti: İnternet, temiz enerji ve uzay kolonizasyonu. Tüm servetini, kimsenin şans tanımadığı Tesla (elektrikli otomobiller) ve SpaceX'e (uzay roketleri) yatırdı. 

2008 yılı, Musk'ın deyimiyle "hayatının en kötü yılı" idi. SpaceX'in ilk üç roketi infilak etmiş, Tesla iflasın eşiğine gelmiş ve parası kelimenin tam anlamıyla sıfırlanmıştı. Ancak dördüncü roketin fırlatılması için borç bularak aldığı son bir risk, roketin yörüngeye oturmasıyla her şeyi değiştirdi. Musk, imkansız kelimesini reddeden, sektördeki yerleşik tabuları yıkan bir dehadır. Sadece araba veya roket üretmekle kalmadı, uydulardan küresel internet (Starlink), beyin-bilgisayar arayüzleri (Neuralink) ve yeraltı tünelleri (Boring Company) ile geleceği bizzat kodladı. O, vizyonun sınırlarının bittiği yerde başlayan bir mühendistir.`,
    "zihinYapisi": [
      {
        "baslik": "İlk Prensiplerden Düşünme (First Principles)",
        "aciklama": "Bir sorunu çözerken başkalarının ne yaptığına (analoji) bakmak yerine, sorunu fizik yasalarının izin verdiği en temel atomik parçalara ayırıp oradan yeniden inşa etmek."
      },
      {
        "baslik": "Aşırı Risk Toleransı",
        "aciklama": "Eğer hedefin insanlık için yeterince önemliyse, kendi iflasını, psikolojik çöküşünü ve kişisel servetini kaybetmeyi göze alabilmelisin."
      },
      {
        "baslik": "Zaman Sıkıştırma (Time Compression)",
        "aciklama": "Başkalarının 10 yılda yapacağı işleri 1 yıla sığdırmak için acımasız çalışma saatleri (haftada 100+ saat) uygulamak ve imkansız hedeflere meydan okumak."
      },
      {
        "baslik": "Eleştirel Geri Bildirim Döngüsü",
        "aciklama": "Egonun onayına değil, neyin yanlış olduğuna odaklan. Sürekli olarak arkadaşlarından ve müşterilerinden ürünün neresinin kötü olduğunu dürüstçe söylemelerini iste."
      }
    ]
  },
  "steve-jobs": {
    "detayliHikaye": `Evlatlık olarak büyüyen ve üniversiteyi terk eden Steve Jobs, hat sanatından (kaligrafi) aldığı ilhamla kişisel bilgisayarların sadece soğuk makineler değil, sanatsal bir ifade aracı olabileceğine inandı. Apple'ı bir garajda kurduktan sonra, kendi kurduğu şirketten kovulacak kadar aykırı bir karakterdi. Sürgünde geçirdiği yıllarda NeXT'i kurdu ve Pixar'ı satın alarak animasyon dünyasında devrim yarattı. 

Apple batmanın eşiğindeyken geri döndüğünde, ürün gamındaki karmaşayı acımasızca kesip atarak şirketi kurtardı. Jobs'ın takıntısı, ürünlerin iç devresinin bile (kimsenin görmeyeceği halde) mükemmel tasarlanmasıydı. O bir mühendis değil, bir ürün vizyoneriydi; insanların ne istediğini sormak yerine, onlara hayal edemeyecekleri bir ürün sundu (iPod, iPhone, iPad). Hastalığının son anlarına kadar mükemmellikten asla taviz vermedi. Jobs bize, teknolojinin insani duygularla buluştuğunda nasıl bir kültüre, hatta bir "dine" dönüşebileceğini gösterdi. Mesele sadece para kazanmak değildi, mesele evrende bir iz bırakmaktı.`,
    "zihinYapisi": [
      {
        "baslik": "Odaklanma ve Hayır Diyebilmek",
        "aciklama": "Gerçek odaklanma, yapılacaklar listesine tik atmak değil; iyi olan yüzlerce fikre, harika olan tek bir fikir için acımasızca 'hayır' diyebilmektir."
      },
      {
        "baslik": "Gerçekliği Bükme Alanı",
        "aciklama": "Zihnindeki inanç öylesine güçlüydü ki, mühendislerin 'imkansız' dediği şeyleri yapabileceklerine onları psikolojik olarak inandırıp imkansızı başarmalarını sağlardı."
      },
      {
        "baslik": "Tasarım İşlevselliktir",
        "aciklama": "Tasarım sadece bir nesnenin nasıl göründüğü veya hissettirdiği değildir; tasarım nesnenin nasıl çalıştığıdır. Müşteri deneyimi pürüzsüz ve sezgisel olmalıdır."
      },
      {
        "baslik": "Ölümü Bir Motivatör Olarak Kullanmak",
        "aciklama": "Her sabah aynaya bakıp 'Bugün hayatımın son günü olsaydı, şu an yaptığım şeyi yapar mıydım?' diye sorarak, hayatı dış beklentilerden arındırıp asıl amaca odaklanmak."
      }
    ]
  },
  "jeff-bezos": {
    "detayliHikaye": `Jeff Bezos, Wall Street'te harika bir kariyere sahipken internetin yılda %2300 büyüdüğünü gördüğünde istifa etti ve bir garajda Amazon'u kurdu. İlk başta sadece kitap satan bu küçük site, Bezos'un "Her Şey Mağazası" vizyonunun sadece ilk adımıydı. Yıllarca kâr açıklamadan agresif bir şekilde büyüdüğü için Wall Street analistleri tarafından sürekli eleştirildi ve şirketinin batacağı öngörüldü. Ancak Bezos rakiplerini değil, her zaman ufku izledi.

Onun felsefesi basit ama uygulaması acımasızdı: Müşteri takıntısı. Müşterilerin daha hızlı teslimat, daha ucuz fiyat ve daha fazla çeşit istediğini biliyordu. Lojistik merkezlerine devasa yatırımlar yaptı, Amazon Web Services (AWS) ile bulut teknolojisini icat edip internetin altyapısını domine etti ve Blue Origin ile uzaya gözünü dikti. Bezos'un zekası, kısa vadeli kâr dalgalanmalarına kulak tıkayıp, 5-10 yıllık devasa stratejik oyunlar kurabilmesindedir. O, dijital çağın en korkutucu ve aynı zamanda en ilham verici kapitalist imparatorudur.`,
    "zihinYapisi": [
      {
        "baslik": "Müşteri Takıntısı",
        "aciklama": "Pazarda iki tür şirket vardır: Rakiplere odaklananlar ve müşterilere odaklananlar. Rakiplere odaklanırsan onlar bir şey yapana kadar beklersin; müşteriye odaklanırsan her zaman yeni şeyler icat edersin."
      },
      {
        "baslik": "Pişmanlığı En Aza İndirme",
        "aciklama": "Hayatın sonunda geriye dönüp bakıldığında başarısızlıklardan değil, denenmemiş risklerden pişmanlık duyulur. Tüm büyük kararları 80 yaşındaki halinle düşün."
      },
      {
        "baslik": "İlk Gün (Day 1) Felsefesi",
        "aciklama": "Şirket ne kadar büyürse büyüsün, her zaman yeni kurulmuş bir girişimin (Day 1) çevikliğini, risk alma iştahını ve yenilikçiliğini korumak zorundadır. 'Day 2' durağanlık, gerileme ve ölümdür."
      },
      {
        "baslik": "Karar Alma Hızı",
        "aciklama": "Bilgilerin sadece %70'ine sahip olduğunda karar ver. Eğer %100'ünü beklersen çok geç kalmışsındır. Kötü bir kararı düzeltmek, hiç karar vermemekten daha ucuzdur."
      }
    ]
  },
  "peter-thiel": {
    "detayliHikaye": `Peter Thiel, Silikon Vadisi'nin standart sol-liberal düşünce yapısına meydan okuyan, satranç ustası, felsefe mezunu ve hukukçu bir milyarderdir. PayPal'ı kurarken (Elon Musk ile birlikte), dijital bir para birimi ile hükümetlerin para üzerindeki tekelini kırmayı hayal etti. PayPal'ın satışından sonra durmadı; Facebook'un ilk dış yatırımcısı oldu ve istihbarat servislerinin verilerini analiz eden Palantir'i kurdu.

Thiel'i farklı kılan şey, "Kontrarian" (aykırı) zihniyetidir. Herkesin inandığı doğrulardan kaçar. Rekabetin yüceltildiği bir dünyada, rekabetin şirketleri öldürdüğünü, asıl amacın kimsenin dokunamayacağı bir "tekel" kurmak olduğunu savunur. Sadece iş dünyasında değil, siyasette ve eğitimde de aykırıdır; "Thiel Fellowship" adını verdiği vakıfla, dahi gençlere üniversiteyi bırakmaları ve girişim kurmaları şartıyla 100 bin dolar hibe eder. Dünyayı yatay (var olanı kopyalamak) değil, dikey (sıfırdan bire yeni şeyler yaratmak) olarak büyütmenin insanlığın tek kurtuluşu olduğuna inanır.`,
    "zihinYapisi": [
      {
        "baslik": "Sıfırdan Bire (0'dan 1'e)",
        "aciklama": "Başkalarının yaptığını kopyalamak dünyayı 1'den n'e taşır. Ama tamamen yeni, daha önce var olmayan bir şey yaratmak dünyayı 0'dan 1'e taşır. Asıl değer yaratımı buradadır."
      },
      {
        "baslik": "Rekabet Kaybedenlerin İşidir",
        "aciklama": "Kapitalizm rekabet değil, sermaye birikimidir. Rekabetin olduğu yerde kâr marjları sıfırlanır. Harika bir iş, kimsenin yapmadığı çok niş bir alanda tekel olup sonra diğer alanlara yayılmaktır."
      },
      {
        "baslik": "Kontrarian Soru",
        "aciklama": "'Senin çok iyi bildiğin ve doğru olduğuna inandığın, ama dünyadaki insanların %99'unun sana katılmadığı o önemli gerçek nedir?' Bu sorunun cevabı senin en büyük fırsatındır."
      },
      {
        "baslik": "Sırlar ve Bulmacalar",
        "aciklama": "Evrende hala çözülmemiş büyük sırlar var. İnsanların çoğu her şeyin keşfedildiğine inanır. Fark yaratmak, herkesin imkansız ya da önemsiz gördüğü o gizli sırları ortaya çıkarmaktır."
      }
    ]
  }
};

for (let i = 0; i < GIRISIMCILER.length; i++) {
  let g = GIRISIMCILER[i];
  if (updates[g.slug]) {
    g.detayliHikaye = updates[g.slug].detayliHikaye;
    g.zihinYapisi = updates[g.slug].zihinYapisi;
  }
}

const fileContent = "\\'use strict\\';\\n\\nconst GIRISIMCILER = " + JSON.stringify(GIRISIMCILER, null, 2) + ";\\n\\nmodule.exports = { GIRISIMCILER };\\n";

fs.writeFileSync(dataPath, fileContent, 'utf8');
console.log('Update 1 complete.');
