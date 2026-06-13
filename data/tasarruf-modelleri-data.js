'use strict';

const TASARRUF_MODELLERI = [
  {
    slug: "50-30-20-kurali",
    baslik: "50/30/20 Kuralı",
    yazar: "Senatör Elizabeth Warren",
    kisaOzet: "Bütçelemenin altın standardı: Gelirinizi ihtiyaçlar, istekler ve finansal hedefler olarak üç basit kategoriye ayırın.",
    dagilim: [
      { yuzde: 50, isim: "İhtiyaçlar (Kira, Fatura, Market)", renk: "#E74C3C" },
      { yuzde: 30, isim: "İstekler (Eğlence, Dışarıda Yemek)", renk: "#3498DB" },
      { yuzde: 20, isim: "Tasarruf & Yatırım", renk: "#2ECC71" }
    ],
    nasilUygulanir: "Maaşınız yattığında ilk olarak %50'sini zorunlu harcamalara (kira, fatura, gıda, ulaşım) ayırın. Ardından hemen %20'lik kısmı yatırım hesabınıza aktarın (veya acil durum fonu/borç kapamaya). Kalan %30'luk kısımla bütçenizi aşmadan özgürce yaşayın, eğlenin ve hobilerinize harcayın.",
    ornekSenaryo: "Diyelim ki net aylık geliriniz 50.000 TL:\n\n• 25.000 TL (%50): Kira, aidat, elektrik, su, market alışverişi ve ulaşım kartınız için ayrılır. Bu para hayatta kalmanız için şarttır.\n• 15.000 TL (%30): Hafta sonu dışarıda yemek, sinema, Netflix aboneliği, yeni bir ayakkabı almak için 'Suçluluk hissetmeden' harcayacağınız bütçedir.\n• 10.000 TL (%20): Maaş yatar yatmaz hisse senedi fonuna, altına veya bireysel emekliliğe (BES) gönderilir.",
    kimlerIcinUygun: "Bütçe yapmaya yeni başlayanlar, her harcamasını tek tek Excel'e girmek gibi karmaşık tablolarla uğraşmak istemeyenler.",
    zenginlikDersi: "Finansal denge, kendinize bugünü yaşama alanı bırakırken geleceğinizi de güvence altına almaktan geçer. Her şeyi kısmak sürdürülebilir değildir.",
    icon: "⚖️"
  },
  {
    slug: "once-kendine-ode-80-20",
    baslik: "Önce Kendine Öde (80/20 Kuralı)",
    yazar: "George S. Clason (Babil'in En Zengin Adamı)",
    kisaOzet: "Harcamalardan kalanı biriktirmek yerine, birikimi yapıp kalanı harcama felsefesi.",
    dagilim: [
      { yuzde: 20, isim: "Tasarruf & Yatırım (Önce Kendine)", renk: "#2ECC71" },
      { yuzde: 80, isim: "Geri Kalan Her Şey", renk: "#95A5A6" }
    ],
    nasilUygulanir: "Bu model, gider kategorileriyle (kira ne kadar, mutfak ne kadar) hiç ilgilenmez. Tek kural vardır: Maaşınız yattığı saniye, gelirinizin en az %20'sini başka, zor ulaşılan bir hesaba aktarın. Geri kalan %80 ile ay sonunu getirecek şekilde yaşamınızı ayarlayın.",
    ornekSenaryo: "Aylık geliriniz 60.000 TL:\n\nAyın 1'inde maaş yattığında, sabah saat 09:05'te otomatik talimat ile 12.000 TL (%20) borsa/yatırım hesabınıza geçer. Geriye kalan 48.000 TL ana hesabınızdadır. Bu 48.000 TL ile kiranızı öder, kafenizi içer, tatile çıkarsınız. Eğer ayın 25'inde paranız biterse, yatırım hesabındaki o 12.000 TL'ye 'Yokmuş' gibi davranır, kalan 5 günü evde makarna yiyerek geçirirsiniz.",
    kimlerIcinUygun: "Kategori kategori bütçe yapmaktan nefret edenler, tasarrufu sona bıraktığı için ay sonunda sürekli parasız kalanlar.",
    zenginlikDersi: "Eğer paranızı harcadıktan sonra kalanı biriktirmeye çalışırsanız, o para asla kalmaz (Parkinson Yasası). Kendinizi en önemli alacaklınız olarak görün ve ilk faturayı kendinize kesin.",
    icon: "💰"
  },
  {
    slug: "sifir-tabanli-butce",
    baslik: "Sıfır Tabanlı Bütçe (Zero-Based)",
    yazar: "Dave Ramsey",
    kisaOzet: "Her bir kuruşun önceden atanmış bir görevi olduğu, ay sonunda elde 'sıfır' kalacak şekilde yapılan bütçeleme.",
    dagilim: [
      { yuzde: 100, isim: "Planlanmış Gelir Eksi Gider = 0", renk: "#E67E22" }
    ],
    nasilUygulanir: "Geliriniz = Giderler + Tasarruf + Borç Ödeme. Ay başında hesabınıza yatan paranın her kuruşunun nereye gideceğini kağıt üzerinde yazarsınız. Hesabınızda 'Ne olur ne olmaz' diye duran, görevi belli olmayan para olmamalıdır.",
    ornekSenaryo: "Aylık gelir: 45.000 TL.\n\nAy başlamadan bütçenizi yaparsınız:\n• Kira: 15.000 TL\n• Market: 8.000 TL\n• Faturalar: 3.000 TL\n• Kredi Kartı Borcu: 5.000 TL\n• Yatırım: 10.000 TL\n• Eğlence: 3.500 TL\nToplam: 44.500 TL. Kalan 500 TL nedir? Boşta kalamaz. O 500 TL'ye de 'Beklenmedik harcamalar' veya 'Ekstra Hisse Alımı' görevi verilir. Sonuç 45.000 - 45.000 = 0 olur.",
    kimlerIcinUygun: "Finansal kontrolünü tamamen eline almak isteyenler, büyük borç yükü olanlar, 'Maaşım nereye gidiyor anlamıyorum' diyenler.",
    zenginlikDersi: "Paranıza ne yapacağını siz söylemezseniz, onun nereye gittiğini merak etmek zorunda kalırsınız.",
    icon: "🎯"
  },
  {
    slug: "kakeibo",
    baslik: "Kakeibo (Japon Bütçe Sanatı)",
    yazar: "Hani Motoko (1904)",
    kisaOzet: "Maddi yönetimden çok finansal farkındalık ve 'mindfulness' (bilinçli tüketim) üzerine kurulu geleneksel Japon yaklaşımı.",
    dagilim: [
      { yuzde: 25, isim: "Temel İhtiyaçlar (Yaşamak)", renk: "#1ABC9C" },
      { yuzde: 25, isim: "Kültürel/Öğrenim (Okumak, Gelişmek)", renk: "#9B59B6" },
      { yuzde: 25, isim: "Sosyal Giderler & Eğlence (Bağ Kurmak)", renk: "#3498DB" },
      { yuzde: 25, isim: "Tasarruf & Ekstra", renk: "#2ECC71" }
    ],
    nasilUygulanir: "Her ayın başında elinize bir kalem defter alır ve kendinize şu 4 soruyu sorarsınız: 1. Ne kadar param var? 2. Ne kadar biriktirmek istiyorum? 3. Ne kadar harcıyorum? 4. Nasıl daha iyi olabilirim? Kakeibo'nun sırrı Excel veya uygulama kullanmak değil, harcamaları el yazısıyla deftere kaydetmektir.",
    ornekSenaryo: "Maaşınız 40.000 TL.\n\nAkşam eve geldiğinizde aldığınız o 300 TL'lik kahveyi ve 1500 TL'lik gereksiz tişörtü defterinize elinizle yazarsınız. Deftere yazma eylemi fiziksel bir farkındalık yaratır. Ay sonunda deftere bakarak 4. soruyu sorarsınız: 'O tişörtü almak bana kalıcı bir değer kattı mı? Yoksa anlık stresten mi aldım?' Kültürel harcamalar (kitap, müze, kurs) Kakeibo'da zorunlu bir gelişim kalemi olarak yer alır.",
    kimlerIcinUygun: "Parayla duygusal ilişkisini onarmak isteyenler, harcama farkındalığı kazanmak isteyenler, sürekli dürtüsel alışveriş yapanlar.",
    zenginlikDersi: "Zenginlik sadece daha az harcamak değil, harcanan paranın size mutluluk ve anlam katıp katmadığını bilinçli olarak sorgulamaktır.",
    icon: "🌸"
  },
  {
    slug: "zarf-sistemi",
    baslik: "Zarf Sistemi (Cash Envelope)",
    yazar: "Geleneksel / Dave Ramsey",
    kisaOzet: "Kredi kartlarının çekmeceye kilitlendiği, tamamen fiziksel nakit ve kategorize edilmiş zarflar üzerinden yürütülen bütçe yönetimi.",
    dagilim: [
      { yuzde: 100, isim: "Kategorize Edilmiş Nakit Zarflar", renk: "#F1C40F" }
    ],
    nasilUygulanir: "Maaş yattığı gün bankamatikten fiziksel nakit olarak çekilir (Kira ve faturalar hariç). Üzerinde 'Market', 'Dışarıda Yemek', 'Kişisel Bakım' yazan fiziki kağıt zarflarınız vardır. Paralar bu zarflara bölünür. Kural nettir: O ay market zarfındaki nakit bittiğinde, bir daha markete gidemezsiniz. Kredi kartı kullanılmaz.",
    ornekSenaryo: "Aylık eğlence/dışarıda yemek bütçenizi 4.000 TL olarak belirlediniz.\n\n4.000 TL nakit parayı 'Eğlence Zarfına' koydunuz. Ayın 20'sinde arkadaşlarınız lüks bir restorana davet etti. Zarfı açtınız ve sadece 300 TL kaldığını gördünüz. Kredi kartına uzanmak yok! Arkadaşlarınıza 'Üzgünüm, bu ayki bütçem bitti, kahve içmeye katılabilirim' dersiniz. Fiziki paranın bitmesi kesin bir sınırdır.",
    kimlerIcinUygun: "Kredi kartı ekstrelerinden korkanlar, kart limitini 'kendi parası' sananlar, fiziki parayla bağ kurarak harcarken acı hissetmek (friction) isteyenler.",
    zenginlikDersi: "Kartla harcamak beyinde 'para kaybı' hissi yaratmaz. Fiziksel paranın elden çıkışını hissetmek, bilinçaltında gereksiz harcamaları %20 oranında frenler.",
    icon: "✉️"
  },
  {
    slug: "70-20-10-kurali",
    baslik: "70/20/10 Kuralı",
    yazar: "Genel Finans Kuralı",
    kisaOzet: "50-30-20 kuralına alternatif, hayırseverlik veya agresif borç ödemeye odaklı, daha esnek bir model.",
    dagilim: [
      { yuzde: 70, isim: "Tüm Yaşam Giderleri (İhtiyaç+İstek)", renk: "#34495E" },
      { yuzde: 20, isim: "Tasarruf & Yatırım", renk: "#2ECC71" },
      { yuzde: 10, isim: "Agresif Borç Ödeme / Bağış", renk: "#E74C3C" }
    ],
    nasilUygulanir: "Gelirin %70'i yaşam (ihtiyaçlar ve eğlence tek potada) için kullanılır. %20 yatırıma gider. Kalan %10, normal kredi taksitleri haricinde 'ekstra' borç kapamaya gider. Borç bittiğinde ise bu %10 hayır kurumlarına bağışlanarak parayla olan manevi ilişki dengelenir.",
    ornekSenaryo: "Maaşınız 80.000 TL.\n\n• 56.000 TL (%70) ile kiranızı öder, alışverişinizi yapar, tatile gidersiniz. İhtiyaç-istek ayrımı yapmazsınız.\n• 16.000 TL (%20) doğrudan hisse fonlarına aktarılır.\n• 8.000 TL (%10) ile kredi kartı borcunuzu beklenenden çok daha hızlı kapatırsınız. Borcunuz bittiğinde ise her ay bu 8.000 TL'yi bir öğrenciye burs verir veya güvendiğiniz bir kuruma bağışlarsınız.",
    kimlerIcinUygun: "Hayat standartlarını detaylı ayırmak istemeyen, ancak gelirinin bir kısmıyla topluma fayda sağlama veya hızlı borç kapama motivasyonu olanlar.",
    zenginlikDersi: "Paranın bir kısmını başkalarına fayda sağlamak için karşılıksız vermek, paranın efendisi olduğunuzun en güçlü psikolojik kanıtıdır. Bolluk bilinci yaratır.",
    icon: "🎯"
  },
  {
    slug: "yuzde-60-cozumu",
    baslik: "%60 Çözümü (The 60% Solution)",
    yazar: "Richard Jenkins",
    kisaOzet: "Maaşın %60'ını 'Temel Yaşam' olarak kilitleyip, kalan %40'ı otomatik virmanlarla 4 farklı finansal hedefe bölen strateji.",
    dagilim: [
      { yuzde: 60, isim: "Sabit ve Temel Yaşam Giderleri", renk: "#E67E22" },
      { yuzde: 10, isim: "Emeklilik (Uzun Vade Fonlar)", renk: "#8E44AD" },
      { yuzde: 10, isim: "Uzun Vadeli Tasarruf (Ev, Araba peşinatı)", renk: "#2980B9" },
      { yuzde: 10, isim: "Kısa Vadeli Tasarruf (Tatil, Hastalık)", renk: "#27AE60" },
      { yuzde: 10, isim: "Eğlence ve Şımarıklık (Guilt-free)", renk: "#D35400" }
    ],
    nasilUygulanir: "Tüm faturalar, kira, gıda ve kıyafet dahil temel giderler gelirin %60'ına sığdırılmaya zorlanır. Kalan %40 ay başında bankanın otomatik talimatlarıyla farklı amaçlara yönelik açılmış 4 farklı alt hesaba dağıtılır.",
    ornekSenaryo: "Geliriniz 50.000 TL.\n\n30.000 TL (%60) tüm temel ihtiyaçlarınızdır. Ay başında otomatik olarak:\n• 5.000 TL Emeklilik BES/Fon hesabına\n• 5.000 TL Ev Peşinatı vadeli hesabına\n• 5.000 TL Yaz Tatili fonuna (Dolar hesabı vb.)\n• 5.000 TL 'Sorunsuz Harcama' kartınıza aktarılır.\nYazın tatil parası aramazsınız, çünkü o fon zaten dolmuştur.",
    kimlerIcinUygun: "Yatırımlarını tek potada tutmak yerine hedeflerine (emeklilik, tatil, peşinat) göre psikolojik kutulara ayırmak isteyenler.",
    zenginlikDersi: "Parayı amaca göre başından bölmek, örneğin tatile gitmek için acil durum fonunuzu veya emeklilik fonunuzu bozmanızı engeller.",
    icon: "📊"
  },
  {
    slug: "yarim-odeme-metodu",
    baslik: "Yarım Ödeme Metodu",
    yazar: "Geleneksel Metot",
    kisaOzet: "Büyük faturaların yarattığı şoku ve stresi azaltmak için, aylık büyük giderleri maaş dönemlerine bölme taktiği.",
    dagilim: [
      { yuzde: 50, isim: "Büyük Giderlerin 1. Yarısı (Ay ortası geliri)", renk: "#F39C12" },
      { yuzde: 50, isim: "Büyük Giderlerin 2. Yarısı (Ay sonu geliri)", renk: "#D35400" }
    ],
    nasilUygulanir: "Aylık en büyük giderleri tespit edin (Kira, Kredi taksiti). Eğer ayda iki kez (1'i ve 15'i) veya haftalık maaş alıyorsanız, büyük ödemeyi tek seferde yapmak yerine, her maaşınızdan o faturanın 'yarısını' bir kenara ayırır, zamanı gelince ödersiniz.",
    ornekSenaryo: "Her ayın 1'inde ve 15'inde 25.000'er TL avans/maaş alan birisiniz. Kiraniz 16.000 TL (Ayın 1'inde ödeniyor).\n\nAyın 1'inde kiranın tamamını (16.000 TL) öderseniz, elinizde 9.000 TL kalır ve 15'ine kadar sefalet çekersiniz. Bunun yerine:\nAyın 15'inde yatan avanstan 8.000 TL'yi kira için kenara ayırırsınız. Ayın 1'indeki maaştan da 8.000 TL eklersiniz. Böylece kira ödenir ve ayın 1'inde cebinizde 9.000 değil, 17.000 TL nakit kalır. Psikolojik baskı kırılır.",
    kimlerIcinUygun: "Nakit akışı düzensiz olanlar, freelancerlar, ayda iki kez (avans+maaş) şeklinde ödeme alanlar.",
    zenginlikDersi: "Zenginlik sadece daha çok para kazanmak değil, olan paranın zamanlamasını (Nakit Akışı - Cash Flow) stres yaratmayacak şekilde yönetmektir.",
    icon: "✂️"
  },
  {
    slug: "katki-payi-artisi",
    baslik: "Otomatik Artış Sistemi (Save Tomorrow)",
    yazar: "Richard Thaler (Nobel Ödüllü Ekonomist)",
    kisaOzet: "Davranışsal ekonomiye dayalı, bugünün acısını yaşamadan, maaş arttıkça tasarruf oranını 'çaktırmadan' artıran psikolojik hile.",
    dagilim: [
      { yuzde: 100, isim: "Her yeni maaş zammının %50'si doğrudan birikime", renk: "#2ECC71" }
    ],
    nasilUygulanir: "Şu an bütçeniz o kadar sıkışık ki, 1 TL bile tasarruf edemiyorsunuz. Bu sistem der ki: Bugün kendini sıkma. Ancak gelecekte alacağın HER MAAŞ ZAMMININ yarısını doğrudan yatırım hesabına aktaracağına bugün söz ver. Diğer yarısıyla hayat standardını yükselt.",
    ornekSenaryo: "Maaşınız 30.000 TL ve tasarruf edemiyorsunuz. Yılbaşında %40 zam aldınız ve maaşınız 42.000 TL'ye çıktı (12.000 TL Zam).\n\nKural gereği: Bu 12.000 TL'lik ekstra gelirin %50'si (6.000 TL) otomatik yatırım talimatına bağlanır. Kalan 6.000 TL sizin yeni harcama alanınızdır. Hayat standardınız artmıştır (Artık 36.000 harcıyorsunuz), ama aynı zamanda ayda 6.000 TL tasarruf eden birine dönüşmüşsünüzdür. Ve bunu yaparken hiç 'eksiklik' hissetmemişsinizdir.",
    kimlerIcinUygun: "Mevcut durumuyla sıfıra sıfır yaşayanlar, mevcut harcamalarından kesinti yapma fikrinden nefret edenler.",
    zenginlikDersi: "İnsan psikolojisi elindeki mevcut parayı kaybetmekten acı duyar (Loss Aversion). Ancak eline 'henüz hiç geçmemiş' bir parayı (gelecekteki zam) biriktirmek, var olanı kesmekten bin kat daha kolaydır.",
    icon: "📈"
  },
  {
    slug: "anti-butce",
    baslik: "Kural Yok (Anti-Bütçe)",
    yazar: "Paula Pant",
    kisaOzet: "Bütçe tablosu tutmayı reddeden ama tasarruf hedefini en baştan kestiği için finansal hedefe kesin ulaşan özgürlükçü yaklaşım.",
    dagilim: [
      { yuzde: 30, isim: "Hedeflenen Sabit Tasarruf Oranı", renk: "#2ECC71" },
      { yuzde: 70, isim: "Sıfır Suçlulukla Harcanabilir Bütçe", renk: "#95A5A6" }
    ],
    nasilUygulanir: "Sadece tek bir finansal hedef belirlersiniz (Örn: Ayda %30 yatırım). Maaş yattığı gün ilk iş bu %30 otomatik olarak yatırım hesabına geçer. Kalan %70 için KESİNLİKLE hesap tutulmaz. Kira, fatura, eğlence ayrımı yoktur.",
    ornekSenaryo: "Gelir 70.000 TL.\n\nHedefiniz %25 tasarruf etmek. Ayın 1'inde 17.500 TL yatırım fonlarına gider. Kalan 52.500 TL banka kartınızda durur. İsterseniz o 52.500 TL'nin 20.000'ini kiraya verin, 30.000'iyle tatile çıkın, kalanıyla makarna yiyin. Veya tam tersi kirayı ucuza getirip son model telefon alın. Sistemin umrunda değildir. Çünkü en önemli hedef (yatırım) zaten ilk günden başarılmıştır.",
    kimlerIcinUygun: "Excel tabloları tutmaktan nefret edenler, para harcarken sürekli suçluluk hissetmekten yorulanlar, yüksek geliri olanlar.",
    zenginlikDersi: "Sistemlerinizi ne kadar basitleştirir ve otomatikleştirirseniz, finansal hedeflere ulaşma ihtimaliniz o kadar artar. Mükemmel bir bütçe sürdürülemezse çöptür.",
    icon: "🤖"
  },
  {
    slug: "gosteris-orucu",
    baslik: "Gösteriş Orucu (Ego Detoksu)",
    yazar: "Zengince Akademi",
    kisaOzet: "Başkalarının 'vay be' demesi için harcanan her kuruşun 6 ay boyunca acımasızca kesildiği, radikal bir kapitalizm detoksu.",
    dagilim: [
      { yuzde: 100, isim: "Gösterişe Giden Tüm Parayı 'Özgürlük Fonuna' Çevir", renk: "#9B59B6" }
    ],
    nasilUygulanir: "Şu listeyi yapın: Sadece sosyal medyada paylaşmak veya ofistekilere 'statü' satmak için yaptığım harcamalar hangileri? Marka kahve, lüks tatil kredisi, pahalı kıyafetler. 6 ay boyunca bunları tamamen sıfırlayın. Bu harcamaların parasını 'Özgürlük Fonu' adında bir hisse/yatırım hesabına aktarın. 6 ay boyunca dışarıdan 'iflas etmiş' gibi görünün.",
    ornekSenaryo: "Diyelim ki her hafta sonu sırf hikaye atmak için 3000 TL hesap ödediğiniz mekanlara gidiyorsunuz. Ayda 12.000 TL yapar. Arabanızın sırf logosu için aylık 20.000 TL kredi ödüyorsunuz. Bu modeli uyguladığınızda hafta sonu evde kalır, arabanızı standart bir modelle değiştirirsiniz. Ayda açığa çıkan 32.000 TL ile temettü hissesi alırsınız. 6 ayın sonunda kimse sizi alkışlamaz ama sizin hesabınızda devasa bir 'Savaş Kasası' oluşur.",
    kimlerIcinUygun: "Sosyal medyadaki sahte hayatlardan bıkmış olanlar, çok kazanıp ay sonunu getiremeyen statü oyuncuları.",
    zenginlikDersi: "Zenginlik, hiç tanımadığın insanların sana saygı duymasını beklemek değil, patronunun yüzüne 'Hayır' diyebilecek finansal güce sahip olmaktır.",
    icon: "🧘‍♂️"
  },
  {
    slug: "f-you-fund",
    baslik: "Rest Çekme Fonu (F-You Money)",
    yazar: "J.L. Collins",
    kisaOzet: "Acil durum fonunun çok daha agresif, ofansif ve 'patrona rest çekebilme' garantisi veren psikolojik kalkan versiyonu.",
    dagilim: [
      { yuzde: 100, isim: "Rest Çekme Kasası (En Az 12 Aylık Gider)", renk: "#E74C3C" }
    ],
    nasilUygulanir: "Standart acil durum fonu buzdolabı bozulunca kullanılır. Rest Çekme Fonu ise ruhunuz bozulunca kullanılır. Hedefiniz, 12 aylık zorunlu yaşam giderinizi (kira, fatura, temel gıda) nakit veya hızlı nakde dönebilir şekilde (altın/döviz) biriktirmektir. Bu para ASLA tatile veya arabaya harcanmaz. Sadece özgürlüğünüz tehdit edildiğinde kilidi açılır.",
    ornekSenaryo: "Aylık yaşamsal gideriniz 25.000 TL. Hedefiniz 300.000 TL biriktirmektir. Bu parayı bankaya koyduğunuz gün, işteki tavrınız değişir. Patronunuz sizi hafta sonu mesaisine zorladığında, içinizde zerre korku olmaz çünkü 'Kovulsam bile 1 yıl boyunca hayatım gram değişmez' rahatlığına sahipsinizdir. O para size faiz getirmez, size 'dik duruş' ve inanılmaz bir özgüven getirir.",
    kimlerIcinUygun: "Mobbing altında çalışanlar, riskli girişimlerde bulunmak isteyenler, sürekli işten atılma korkusu yaşayanlar.",
    zenginlikDersi: "Bankadaki nakit para sadece satın alma gücü değildir; en büyük getirisi size sağladığı korkusuzluk ve seçenek yaratma gücüdür.",
    icon: "🔥"
  },
  {
    slug: "sifir-harcama-gunleri",
    baslik: "Sıfır Harcama Günleri (No-Spend Challenge)",
    yazar: "Minimalist Finans",
    kisaOzet: "Ayın belirli günlerinde para harcama kasını tamamen felç ederek, tüketim bağımlılığını şok tedavisiyle kesme yöntemi.",
    dagilim: [
      { yuzde: 100, isim: "Cüzdanın Kapalı Olduğu Günler (Harcama 0 TL)", renk: "#3498DB" }
    ],
    nasilUygulanir: "Takvimi açın ve ayın 10 gününü kırmızı kalemle işaretleyin. O günlerde kural mutlaktır: 1 bardak çay bile parayla satın alınamaz. Ulaşım kartı ve faturalar hariç cebinizden tek kuruş çıkmayacak. Yemeğinizi evden götürecek, dışarı çıkmayacak ve online alışveriş sitelerine girmeyeceksiniz. Kalan 20 gün normal yaşantınıza devam edebilirsiniz.",
    ornekSenaryo: "Her gün dışarıdan sipariş veren ve internette boş boş gezinirken sürekli bir şeyler alan birisiniz. Çarşamba gününü 'Sıfır Harcama' günü ilan ettiniz. Ofiste herkes kahve sipariş ederken siz evden getirdiğiniz filtre kahveyi içersiniz. Öğlen yemeğinde dünden kalan yemeği yersiniz. Akşam eve dönerken canınız çok tatlı çeker ama kuralı bozamazsınız. Ertesi sabah uyandığınızda o tatlıyı almadığınız için ölmediğinizi, aksine iradenizin güçlendiğini ve cebinizde 400 TL ekstra kaldığını fark edersiniz.",
    kimlerIcinUygun: "Dürtüsel (impulse) harcama hastaları, eline para geçtiği an bir yerlere saldıranlar, finansal iradesini güçlendirmek isteyenler.",
    zenginlikDersi: "Para harcamak modern insanın en hızlı dopamin kaynağıdır. Tüketmemeye dayanabilmek, finansal kasların en çok zorlandığı ama en hızlı geliştiği antrenmandır.",
    icon: "🛑"
  }
];

module.exports = { TASARRUF_MODELLERI };
