const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'girisimciler-data.js');
let { GIRISIMCILER } = require(dataPath);

const updates = {
  "sam-altman": {
    "detayliHikaye": `Sam Altman, Y Combinator'ın başındayken binlerce start-up'ın doğuşuna ve büyümesine rehberlik etmiş, hangi fikirlerin dünyayı değiştireceğini önceden görebilme yeteneğini geliştirmiştir. Ancak onun asıl efsanesi OpenAI ile başladı. Başlangıçta kâr amacı gütmeyen bir araştırma laboratuvarı olarak kurulan OpenAI'yi, yapay zeka devriminin (AGI - Yapay Genel Zeka) lokomotifi haline getirdi.

Altman, tarihte çok az liderde görülen bir "kalkış hızı" (escape velocity) mentalitesine sahiptir. Ona göre teknoloji lineer değil üstel (exponential) büyür. Bu yüzden insanların 10 yıl sonra hayal ettiği şeyleri 1 yıl içinde piyasaya sürebilme cesaretini gösterdi. Sadece ChatGPT ile arama motorlarını tehdit etmekle kalmadı, aynı zamanda nükleer füzyon (Helion) yatırımlarıyla enerjinin sınırlarını, Worldcoin ile evrensel temel geliri inşa etmeye çalıştı. O, teknolojinin insanlığı yok edeceğine inanan kötümserlere karşı, teknolojinin insanlığın potansiyelini sonsuzlaştıracağına inanan en güçlü tekno-optimisttir.`,
    "zihinYapisi": [
      {
        "baslik": "Üstel Düşünme (Exponential Thinking)",
        "aciklama": "İnsan beyni lineer düşünmeye programlıdır. Altman ise teknolojinin katlanarak büyüyeceğini hesaplar. Bir şey bugün imkansız görünse de, işlemci gücü her yıl ikiye katlandığında 3 yıl sonra o imkansızın norm olacağını bilir."
      },
      {
        "baslik": "Mükemmel Takım Her Şeydir",
        "aciklama": "Fikirler ucuzdur. Dünyayı değiştirecek asıl güç, birbirine tamamen zıt yeteneklere sahip ama aynı vizyona fanatik derecede bağlı elit bir mühendis takımını bir arada tutabilmektir."
      },
      {
        "baslik": "Başarısızlık Maliyetini Sıfırlamak",
        "aciklama": "Altman, hızlı hareket edebilmek için küçük ve zararsız başarısızlıkları birer veri toplama (test) süreci olarak görür. Hata yapmanın ucuz olduğu yerlerde çok fazla risk alır."
      },
      {
        "baslik": "Sonsuz Kaldıraç Olarak AGI",
        "aciklama": "İnsanın kendi beyniyle yaratabileceği değer sınırlıdır. Ancak yapay genel zekayı (AGI) bir kez çözdüğünüzde, evrendeki tüm problemleri (kanser, enerji krizi) çözecek nihai aracı icat etmiş olursunuz."
      }
    ]
  },
  "jensen-huang": {
    "detayliHikaye": `NVIDIA'nın kurucusu ve CEO'su Jensen Huang, bugün yapay zeka devriminin arkasındaki asıl "kürek satıcısı"dır. 1993 yılında bir Denny's restoranında arkadaşlarıyla NVIDIA'yı kurduğunda, amacı sadece bilgisayar oyuncuları için daha iyi 3D grafik kartları yapmaktı. Şirket defalarca batmanın eşiğine geldi; ürünleri zaman zaman rakiplerinden daha pahalı ve yavaş oldu. Ancak Huang, grafik işlemcilerin (GPU) paralel hesaplama yeteneğinin sadece oyunlar için değil, derin öğrenme algoritmaları için de biçilmiş kaftan olduğunu çok önceden fark etti.

2000'lerin ortasında, henüz ortada hiçbir müşteri yokken (sıfır milyar dolarlık pazar) CUDA platformunu inşa ederek şirketin tüm kaynaklarını buraya yatırdı. Wall Street bu hamleyi anlamsız buldu. Ancak yıllar sonra ChatGPT ve yapay zeka modelleri patladığında, tüm dünya bu modelleri eğitebilecek tek donanımın NVIDIA'nın elinde olduğunu anladı. Huang, deri ceketi, inanılmaz adaptasyon yeteneği ve "Şirket her an batabilir" şeklindeki hayatta kalma paranoyasıyla modern teknoloji tarihinin en büyük vizyonerlerinden biridir.`,
    "zihinYapisi": [
      {
        "baslik": "Sıfır Milyar Dolarlık Pazarlar",
        "aciklama": "Bugün devasa olan pazarlar dünün küçük pazarlarıydı. Huang, rakiplerin ölçemediği ve henüz var olmayan pazarlara tohum ekmeyi ve o pazarın 10 yıl sonra oluşmasını sabırla beklemeyi sever."
      },
      {
        "baslik": "Sürekli Yeniden İcat (Reinvention)",
        "aciklama": "Şirketini asla mevcut başarılarına hapsetmez. NVIDIA bir oyun şirketinden kripto madenciliği şirketine, oradan da yapay zeka donanım tekeline dönüşmeyi bu adaptasyon yeteneğiyle başarmıştır."
      },
      {
        "baslik": "Yapıcı Paranoya",
        "aciklama": "'Her an iflasa 30 gün uzaklıktayız' felsefesiyle yaşar. Şirket ne kadar büyürse büyüsün, silikon vadisinde bir gün geride kalmanın ölüm fermanı olduğunu asla unutmaz."
      },
      {
        "baslik": "Büyük Bahisler (Bet the Company)",
        "aciklama": "İnandığı bir vizyon olduğunda, şirketin tüm kaderini o teknolojiye (CUDA) bağlamaktan çekinmez. Ortada oynamaz, ya hep ya hiç felsefesiyle pazar liderliğine oynar."
      }
    ]
  },
  "mark-zuckerberg": {
    "detayliHikaye": `Harvard yurdunda FaceMash kodlarken başlayan hikayesi, insanlık tarihinin en büyük bağlantı ağı olan Meta'yı (Facebook, Instagram, WhatsApp) kurmasıyla sonuçlandı. Mark Zuckerberg'in en büyük farklılığı, sadece dahi bir yazılımcı olması değil, aynı zamanda acımasız bir ürün stratejisti ve CEO olmasıdır. Şirketi büyütürken Yahoo'nun 1 milyar dolarlık satın alma teklifini daha 22 yaşındayken reddetmesi, onun sadece parayı değil "etkiyi" hedeflediğinin en büyük kanıtıdır.

Sosyal medya trendleri (Snapchat, TikTok) sürekli değişirken, Facebook'un tarihe karışmasını bekleyenler her zaman yanıldı. Zuckerberg, "Hızlı hareket et ve bir şeyleri kır" (Move fast and break things) mottosuyla rakiplerin en iyi özelliklerini kendi platformlarına kopyaladı (Stories, Reels) veya potansiyel rakipleri daha bebekken satın aldı (Instagram, WhatsApp). Kısa vadeli eleştirilere asla kulak asmaz; Metaverse veya Açık Kaynak Yapay Zeka (Llama) gibi devasa projelere şirketin yıllarını ve milyarlarca dolarını, yatırımcıların tepkisine rağmen gözünü kırpmadan yatırabilecek iradeye sahip tek teknoloji lideridir.`,
    "zihinYapisi": [
      {
        "baslik": "Kurucu Kontrolü (Founder Control)",
        "aciklama": "Şirketin hisse yapısını, kimse onu CEO'luktan atamayacak şekilde kurgulamıştır. Bu ona Wall Street'in kısa vadeli kâr baskılarına boyun eğmeden 10 yıllık vizyonları hayata geçirme gücü verir."
      },
      {
        "baslik": "Hacker Kültürü",
        "aciklama": "Mükemmel planlar yapmak yerine, prototipi hızlıca kodlayıp piyasaya sürmek. Hataları yolda düzeltmek, ofiste tartışarak zaman kaybetmekten daha değerlidir."
      },
      {
        "baslik": "Acımasız Rekabet",
        "aciklama": "Eğer satın alamıyorsan, kopyala ve onu ez. Rakibin pazar payı kazanmasına asla izin vermeme üzerine kurulu agresif bir büyüme stratejisi."
      },
      {
        "baslik": "Geleceği Bizzat İnşa Etmek",
        "aciklama": "Sadece bir mobil uygulama olmak yetmez; Apple ve Google'a bağımlı olmamak için kendi donanımını (VR Gözlükler) ve işletim sistemini kurmayı hedefler."
      }
    ]
  },
  "ray-kroc": {
    "detayliHikaye": `Bir başarı hikayesinin 20'li yaşlarda başlaması gerektiği mitini tek başına yıkan efsane: Ray Kroc. 52 yaşına kadar çok çeşitli işlerde (kağıt bardak, mikser satıcısı) çalıştıktan sonra, McDonald kardeşlerin San Bernardino'daki restoranını keşfetti. McDonald kardeşler harika bir fast-food sistemi icat etmişlerdi ama onu ulusal bir markaya dönüştürecek vizyondan yoksundular. Kroc, bu vizyonu gördü ve bayilik hakkını alarak dünyayı değiştirdi.

Kroc'un dehası hamburgerin lezzetinde değil, 'kopyalanabilir sistem'in mükemmelliğindeydi. Bir hamburgerin kalınlığı, patatesin kızarma süresi ve mağazanın temizliği dünyanın her yerinde aynı olmalıydı. O bir restoran işletmecisi değil, bir sistem mühendisiydi. Ancak onu gerçekten milyarder yapan şey, finans direktörü Harry Sonneborn'un tavsiyesiyle gayrimenkul işine girmesiydi. McDonald's, bayilerinden sadece isim hakkı almak yerine, restoranların kurulacağı değerli arazileri satın alıp bayilere kiralamaya başladı. Bugün McDonald's dünyanın en büyük gıda şirketlerinden biri olmasının yanında devasa bir emlak imparatorluğudur.`,
    "zihinYapisi": [
      {
        "baslik": "Israrın Gücü (Persistence)",
        "aciklama": "Kroc'a göre dünyada hiçbir şey ısrarın yerini tutamaz. Yetenek, zeka ve eğitim tek başına yeterli değildir; ısrar ve kararlılık her şeyi yener."
      },
      {
        "baslik": "Sistem Mühendisliği",
        "aciklama": "İşin sırrı harika bir ürün yapmak değil, ortalama üstü bir ürünü milyonlarca kez aynı standartta, lise öğrencilerinin bile yönetebileceği bir sistemle üretebilmektir."
      },
      {
        "baslik": "Asıl İşini Bilmek",
        "aciklama": "Kroc 'Biz hamburger işinde değiliz, gayrimenkul işindeyiz' diyerek, bir şirketin asıl nakit akışının dışarıdan göründüğü gibi olmayabileceğini kanıtlamıştır."
      },
      {
        "baslik": "Sıfır Toplamlı Oyun Değil",
        "aciklama": "Bayilerinin zengin olmasını istedi; çünkü onlar zengin oldukça McDonald's daha da büyüyecekti. Tedarikçiler, bayiler ve merkezin hep birlikte kazanacağı bir ekosistem kurdu."
      }
    ]
  },
  "eren-bali": {
    "detayliHikaye": `Eren Bali'nin hikayesi, Silikon Vadisi'nin en ilham verici "Küllerinden Doğuş" hikayelerinden biridir. Malatya'nın küçük bir dağ köyünde, tek gözlü birleştirilmiş sınıfta okula başlayan Bali, matematikteki üstün yeteneği sayesinde ulusal dereceler elde etti. İnternetle tanışması, dünyanın bilgisinin aslında herkes için erişilebilir olması gerektiği fikrini aklına soktu. Türkiye'de ilk girişim denemelerinde başarısız olduktan sonra Silikon Vadisi'ne gitti.

Udemy fikriyle Vadideki yatırımcıların kapısını çaldığında, tam 50'den fazla yatırımcı ona "Kimse internetten ders izleyip sertifika almak istemez" diyerek güldü ve projeyi reddetti. Ancak Bali pes etmedi. "Geliştiricilere kodlama öğretmek" gibi niş bir alanla başlayıp platformu ateşledi. Udemy, bugün dünyanın dört bir yanından milyonlarca öğrencinin, binlerce eğitmenden ders aldığı 3 milyar dolarlık bir eğitim imparatorluğuna dönüştü. Bali bununla da yetinmeyip, sağlık sektöründeki hantallığı ve evrak işlerini ortadan kaldıran Carbon Health'i kurarak ikinci unicorn (milyar dolarlık girişim) şirketini yarattı. O, imkansızlıkları vizyona dönüştüren bir dehadır.`,
    "zihinYapisi": [
      {
        "baslik": "Probleme Aşık Olmak",
        "aciklama": "Sadece para kazandıracak bir fikir bulmak yerine, bizzat kendisinin veya toplumun yaşadığı devasa bir probleme (eğitimde fırsat eşitsizliği) tutkuyla bağlanmak."
      },
      {
        "baslik": "Reddedilmeyi Yakıt Yapmak",
        "aciklama": "50 yatırımcının hayır demesi, onu fikrinin kötü olduğuna değil, yatırımcıların henüz geleceği göremediğine ikna etti. İnancı, onay ihtiyacından daha büyüktü."
      },
      {
        "baslik": "Temel Sektörleri Hacklemek",
        "aciklama": "Oyun veya sosyal ağ gibi lüks tüketim odaklı değil; eğitim ve sağlık gibi insanın en temel ihtiyaçlarını demokratikleştiren köklü değişimler yaratmak."
      },
      {
        "baslik": "Merkeziyetsiz Değer Üretimi",
        "aciklama": "Udemy'de kendisi ders vermek yerine, dünyadaki en iyi uzmanların kendi derslerini satabileceği (pazar yeri modeli) merkeziyetsiz bir değer ekosistemi kurdu."
      }
    ]
  },
  "nevzat-aydin": {
    "detayliHikaye": `2001 yılı Türkiye için kabus gibiydi. Ülke en büyük ekonomik krizlerinden birini yaşıyor, enflasyon uçuyor, insanlar sadece hayatta kalmaya çalışıyordu. İnternet penetrasyonunun %5'lerde olduğu, kimsenin kredi kartını internete girmeye cesaret edemediği böyle bir dönemde Nevzat Aydın, ABD'deki eğitimini yarıda bırakarak Yemeksepeti'ni kurdu. Restoran sahiplerine "Bize internetten sipariş gelecek" dediğinde çoğu ona deli gözüyle baktı. Siparişleri önce faksla, sonra SMS'le restoranlara ileten Aydın, pazarın kendisini adım adım eğitti.

Onun başarısı sadece ilk giren (first mover) olmasından değil, muazzam bir operasyonel mükemmellik sağlamasından gelir. Kullanıcı dostu arayüzler, müşteri sadakat programları ve restoranlarla kurduğu kusursuz ağ sayesinde Yemeksepeti rakiplerine nefes aldırmayan bir tekel oldu. 2015 yılında şirket, Delivery Hero'ya 589 Milyon Dolar'a satılarak o dönemin en büyük teknoloji çıkışını (exit) yaptı. Ancak asıl tarihe geçen olay, Aydın'ın bu satıştan elde ettiği kârın 27 Milyon Dolarlık devasa bir kısmını, şirketinde çalışan kuryeden yazılımcıya kadar 114 personeline şahsi olarak dağıtmasıydı. O sadece bir girişimci değil, değerin nasıl paylaşılacağını gösteren efsanevi bir liderdir.`,
    "zihinYapisi": [
      {
        "baslik": "Erken Zamanlama (Timing)",
        "aciklama": "Herkes bir pazarın kârlı olduğunu anladığında zaten çok geçtir. Mükemmel girişimci, toplum hazır olmasa bile pazarı kendi elleriyle eğitip o pazarın ilk sahibi olandır."
      },
      {
        "baslik": "Retention (Müşteri Sadakati)",
        "aciklama": "Yeni müşteri kazanmak pahalıdır. Asıl kârlılık, sistemin sorunsuz çalışmasını sağlayıp bir müşteriyi platformda yıllarca tutmak ve ömür boyu değerini (LTV) artırmaktır."
      },
      {
        "baslik": "Birlikte Kazanma Felsefesi",
        "aciklama": "Devasa başarılar tek kişinin değil, fedakar bir ekibin eseridir. Şirketi büyüten çalışanların, kazanılan devasa servetten pay alması gerektiğine inanan dürüst liderlik."
      },
      {
        "baslik": "Engelleri Operasyonla Aşmak",
        "aciklama": "İnterneti olmayan restoranlara siparişi faksla göndererek işi başlattı. Teknolojik engeller hiçbir zaman ticareti durdurmak için bir mazeret olamaz."
      }
    ]
  },
  "husnu-ozyegin": {
    "detayliHikaye": `Hüsnü Özyeğin'in hikayesi, sermayesi sıfır olan ama güvenilirliği ve zekası sonsuz olan bir profesyonelin nasıl milyardere dönüştüğünün dersidir. Robert Kolej ve Harvard Business School eğitiminden sonra uzun yıllar bankalarda profesyonel yöneticilik yaptı. 42 yaşına geldiğinde konforlu CEO koltuğunu bırakıp, sadece iki dairesini satarak sermaye oluşturduğu Finansbank'ı kurdu. Bankacılık sektöründe müşteri odaklı yaklaşımı ve hızlı kredi süreçleriyle sektörü domine etti.

2006 yılında tarihi bir hamleyle bankasını Yunanistan'ın en büyük bankası NBG'ye tam 2.7 Milyar Dolar bedelle sattı. Bu satış, Türkiye tarihinin en başarılı ticari hamlelerinden biriydi. Fakat Özyeğin parayı alıp köşesine çekilmedi; elde ettiği sermayeyle Fiba Holding'i büyüttü, Rusya ve Avrupa'da bankalar kurdu, perakende, enerji ve gayrimenkul sektörlerine daldı. Onu usta yapan asıl detay ise servetini eğitime adamasıdır. Anne Çocuk Eğitim Vakfı (AÇEV) ile milyonlarca insanın hayatına dokundu, yüzlerce kız yurdu yaptırdı ve Özyeğin Üniversitesi'ni kurarak kalıcı bir miras bıraktı. O, kapitalizmi toplum yararına çeviren modern bir titan örneğidir.`,
    "zihinYapisi": [
      {
        "baslik": "Güven ve İtibar (Reputation)",
        "aciklama": "En büyük sermaye para değil, kredibilitedir. Hayatınız boyunca inşa ettiğiniz güven, yeri geldiğinde banka kredilerinden çok daha büyük kapıları açar."
      },
      {
        "baslik": "Zamanlamanın Dehası",
        "aciklama": "Bir varlığın en değerli olduğu an, onu satmanın vaktidir. Finansbank'ı ekonomik krizler öncesi zirvedeyken satıp, nakde dönerek diğer tüm krizleri fırsata çevirmiştir."
      },
      {
        "baslik": "Aşırı Müşteri Odaklılık",
        "aciklama": "Geleneksel bankaların soğuk ve hantal yapısına karşı, sokaktaki esnafın, KOBİ'lerin derdini anlayan, hızlı karar alan, şube müdürüne yetki veren çevik bir yapı kurmak."
      },
      {
        "baslik": "Sosyal Sermaye ve Geri Verme",
        "aciklama": "Kazandığın servet, içinde doğduğun toplumun sana sunduğu fırsatların sonucudur. Bu serveti eğitim yoluyla tekrar topluma kanalize etmek, gerçek liderliğin zirvesidir."
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

const fileContent = "'use strict';\n\nconst GIRISIMCILER = " + JSON.stringify(GIRISIMCILER, null, 2) + ";\n\nmodule.exports = { GIRISIMCILER };\n";

fs.writeFileSync(dataPath, fileContent, 'utf8');
console.log('Update 2 complete.');
