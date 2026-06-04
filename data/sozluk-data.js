
'use strict';

const SOZLUK = [
  {
    "kavram": "%4 Kuralı (Safe Withdrawal Rate)",
    "aciklama": "Emeklilikte yatırımlarınızın her yıl %4'ünü çekerseniz, paranızın (tarihsel borsa verilerine göre) ömrünüz boyunca hiç bitmeyeceğini varsayan meşhur finans kuralıdır. (Örn: Yılda 400.000₺ harcıyorsanız, 10.000.000₺ yatırımınız olması gerekir).",
    "ingilizce": "4% Rule",
    "harf": "%",
    "slug": "4-kurali-safe-withdrawal-rate",
    "detayliAciklama": "Emeklilikte yatırımlarınızın her yıl %4'ünü çekerseniz, paranızın (tarihsel borsa verilerine göre) ömrünüz boyunca hiç bitmeyeceğini varsayan meşhur finans kuralıdır. (Örn: Yılda 400.000₺ harcıyorsanız, 10.000.000₺ yatırımınız olması gerekir).",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Açığa Satış (Short Selling)",
    "aciklama": "Bir yatırımcının, fiyatının düşeceğini öngördüğü bir varlığı ödünç alıp anında piyasada satması ve düştüğünde daha ucuzdan geri alarak aradaki farktan kâr elde etme stratejisidir. Riskli bir işlemdir.",
    "ingilizce": "Short Selling",
    "harf": "A",
    "slug": "aciga-satis-short-selling",
    "detayliAciklama": "Bir yatırımcının, fiyatının düşeceğini öngördüğü bir varlığı ödünç alıp anında piyasada satması ve düştüğünde daha ucuzdan geri alarak aradaki farktan kâr elde etme stratejisidir. Riskli bir işlemdir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Amortisman",
    "aciklama": "Bir varlığın kullanıldıkça veya zaman geçtikçe değer kaybetmesidir. Örneğin sıfır bir araba galeriden çıktığı an amortisman yüzünden %15 değer kaybeder. Zenginler amortismanı vergi avantajına dönüştürür.",
    "ingilizce": "Depreciation",
    "harf": "A",
    "slug": "amortisman",
    "detayliAciklama": "Bir varlığın kullanıldıkça veya zaman geçtikçe değer kaybetmesidir. Örneğin sıfır bir araba galeriden çıktığı an amortisman yüzünden %15 değer kaybeder. Zenginler amortismanı vergi avantajına dönüştürür.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Arbitraj",
    "aciklama": "Aynı varlığın veya malın iki farklı piyasadaki fiyat farkından (fiyat uyuşmazlığından) faydalanarak, ucuz olan yerden alıp anında pahalı olan yere satarak risksiz kâr elde etme işlemidir.",
    "ingilizce": "Arbitrage",
    "harf": "A",
    "slug": "arbitraj",
    "detayliAciklama": "Aynı varlığın veya malın iki farklı piyasadaki fiyat farkından (fiyat uyuşmazlığından) faydalanarak, ucuz olan yerden alıp anında pahalı olan yere satarak risksiz kâr elde etme işlemidir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Ayı Piyasası",
    "aciklama": "Piyasalarda karamsarlığın hakim olduğu, fiyatların uzun süre düşüş trendinde kaldığı (genellikle zirveden %20'den fazla düşüş) dönemdir. Pençesiyle yukarıdan aşağıya vuran ayıdan ilham alır.",
    "ingilizce": "Bear Market",
    "harf": "A",
    "slug": "ayi-piyasasi",
    "detayliAciklama": "Piyasalarda karamsarlığın hakim olduğu, fiyatların uzun süre düşüş trendinde kaldığı (genellikle zirveden %20'den fazla düşüş) dönemdir. Pençesiyle yukarıdan aşağıya vuran ayıdan ilham alır.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Bilanço",
    "aciklama": "Bir şirketin belirli bir tarihte sahip olduğu tüm varlıkları (parası, demirbaşları) ve yükümlülükleri (borçları, kredileri) gösteren finansal röntgendir.",
    "ingilizce": "Balance Sheet",
    "harf": "B",
    "slug": "bilanco",
    "detayliAciklama": "Bir şirketin belirli bir tarihte sahip olduğu tüm varlıkları (parası, demirbaşları) ve yükümlülükleri (borçları, kredileri) gösteren finansal röntgendir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Bileşik Getiri",
    "aciklama": "Sadece ana paranın değil, daha önce kazanılmış faizin/getirinin de tekrar faiz/getiri kazandırması durumudur. Uzun vadede servet yaratmanın en büyük sırrıdır (\"Dünyanın 8. Harikası\").",
    "ingilizce": "Compound Interest",
    "harf": "B",
    "slug": "bilesik-getiri",
    "detayliAciklama": "Sadece ana paranın değil, daha önce kazanılmış faizin/getirinin de tekrar faiz/getiri kazandırması durumudur. Uzun vadede servet yaratmanın en büyük sırrıdır (\"Dünyanın 8. Harikası\"). Bileşik getiri, matematikteki üstel büyümenin finansal dünyadaki karşılığıdır. Paranız sadece sizin yatırdığınız miktar üzerinden değil, o zamana kadar kazandırdığı kazanç üzerinden de kâr sağlamaya devam eder. Einstein'ın dediği gibi: 'Bileşik getiri dünyanın sekizinci harikasıdır. Onu anlayan kazanır, anlamayan bedelini öder.' Zaman, bileşik getirinin en büyük dostudur; bu yüzden ne kadar erken yatırım yapmaya başlarsanız o kadar zengin olursunuz.",
    "ornek": "Diyelim ki 25 yaşındasınız ve her ay borsaya sadece 2.000 TL yatırım yapıyorsunuz (yıllık ortalama %10 getiri ile). 65 yaşına geldiğinizde toplam cebinizden çıkan para sadece 960.000 TL olacaktır. Ancak bileşik getiri sayesinde portföyünüzün toplam değeri inanılmaz bir şekilde 12.600.000 TL civarına ulaşır! Bu aradaki 11.6 Milyon TL tamamen 'paranın kendi kendine doğurduğu' bir servettir.",
    "grafikTipi": "line",
    "grafikVerisi": {
      "labels": [
        "1. Yıl",
        "10. Yıl",
        "20. Yıl",
        "30. Yıl",
        "40. Yıl"
      ],
      "datasetLabel": "Portföy Değeri (Milyon TL)",
      "data": [
        0.02,
        0.4,
        1.5,
        4.5,
        12.6
      ]
    }
  },
  {
    "kavram": "Blokzincir",
    "aciklama": "Verilerin merkezi bir sunucu yerine dünya geneline yayılmış binlerce bilgisayara aynı anda kaydedildiği, değiştirilmesi ve hacklenmesi neredeyse imkansız olan dağıtık bir dijital kayıt defteri teknolojisidir.",
    "ingilizce": "Blockchain",
    "harf": "B",
    "slug": "blokzincir",
    "detayliAciklama": "Verilerin merkezi bir sunucu yerine dünya geneline yayılmış binlerce bilgisayara aynı anda kaydedildiği, değiştirilmesi ve hacklenmesi neredeyse imkansız olan dağıtık bir dijital kayıt defteri teknolojisidir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Boğa Piyasası",
    "aciklama": "Piyasalarda fiyatların gelecekte yükseleceği beklentisinin hakim olduğu, iyimserliğin tavan yaptığı ve varlıkların sürekli değer kazandığı döneme verilen addır. Boynuzlarıyla aşağıdan yukarı vuran boğadan ilham alır.",
    "ingilizce": "Bull Market",
    "harf": "B",
    "slug": "boga-piyasasi",
    "detayliAciklama": "Piyasalarda fiyatların gelecekte yükseleceği beklentisinin hakim olduğu, iyimserliğin tavan yaptığı ve varlıkların sürekli değer kazandığı döneme verilen addır. Boynuzlarıyla aşağıdan yukarı vuran boğadan ilham alır.",
    "ornek": "Örneğin 2020'nin sonlarından 2021'in sonuna kadar kripto para piyasasında çılgın bir boğa sezonu yaşandı. Bitcoin 10 bin dolardan 69 bin dolara çıkarken, piyasadaki hemen hemen herkes çok zeki bir yatırımcı olduğuna inanmıştı. Warren Buffett'ın dediği gibi: 'Suların çekildiğinde kimin çıplak yüzdüğünü görürüz.' Boğa piyasalarında herkes kâr eder."
  },
  {
    "kavram": "Bootstrapping",
    "aciklama": "Bir girişimi kurarken dışarıdan hiçbir melek yatırım veya risk sermayesi almadan, tamamen kendi öz kaynaklarınızla ve müşteriden gelen ilk gelirlerle şirketi büyütme stratejisidir.",
    "ingilizce": "Bootstrapping",
    "harf": "B",
    "slug": "bootstrapping",
    "detayliAciklama": "Bir girişimi kurarken dışarıdan hiçbir melek yatırım veya risk sermayesi almadan, tamamen kendi öz kaynaklarınızla ve müşteriden gelen ilk gelirlerle şirketi büyütme stratejisidir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Çeşitlendirme",
    "aciklama": "Tüm yumurtaları aynı sepete koymamaktır. Riskleri azaltmak için yatırım portföyünü hisse senedi, tahvil, altın, emlak gibi farklı varlık sınıflarına paylaştırma sanatıdır.",
    "ingilizce": "Diversification",
    "harf": "Ç",
    "slug": "cesitlendirme",
    "detayliAciklama": "Tüm yumurtaları aynı sepete koymamaktır. Riskleri azaltmak için yatırım portföyünü hisse senedi, tahvil, altın, emlak gibi farklı varlık sınıflarına paylaştırma sanatıdır.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "DCA (Dolar Maliyeti Ortalaması)",
    "aciklama": "Piyasanın o anki durumunu (yüksek veya düşük) umursamadan, belirli periyotlarla (örneğin her ayın 1'inde) aynı miktarda yatırımı istikrarlı şekilde yapmaktır. Stresi azaltan en güvenli uzun vade stratejilerinden biridir.",
    "ingilizce": "Dollar Cost Averaging",
    "harf": "D",
    "slug": "dca-dolar-maliyeti-ortalamasi",
    "detayliAciklama": "Piyasanın o anki durumunu (yüksek veya düşük) umursamadan, belirli periyotlarla (örneğin her ayın 1'inde) aynı miktarda yatırımı istikrarlı şekilde yapmaktır. Stresi azaltan en güvenli uzun vade stratejilerinden biridir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Değer Yatırımı",
    "aciklama": "Bir şirketin hisse fiyatının, şirketin \"gerçek içsel değerinin\" çok altına düştüğü anlarda satın almayı öngören yatırım stratejisidir. Benjamin Graham ve Warren Buffett bu ekolün öncüleridir.",
    "ingilizce": "Value Investing",
    "harf": "D",
    "slug": "deger-yatirimi",
    "detayliAciklama": "Bir şirketin hisse fiyatının, şirketin \"gerçek içsel değerinin\" çok altına düştüğü anlarda satın almayı öngören yatırım stratejisidir. Benjamin Graham ve Warren Buffett bu ekolün öncüleridir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Enflasyon",
    "aciklama": "Paranın satın alma gücünün zamanla düşmesi, fiyatların genel düzeyinin artmasıdır. Nakit parada beklemek, enflasyon yüzünden garantili olarak para kaybetmek demektir.",
    "ingilizce": "Inflation",
    "harf": "E",
    "slug": "enflasyon",
    "detayliAciklama": "Paranın satın alma gücünün zamanla düşmesi, fiyatların genel düzeyinin artmasıdır. Nakit parada beklemek, enflasyon yüzünden garantili olarak para kaybetmek demektir. Enflasyon kısaca paranızın 'erimesidir'. Piyasaya çok fazla para basıldığında veya üretim azaldığında her bir para biriminin değeri düşer. Nakit para aslında bir varlık değil, buz küpüdür; sıcakta (enflasyonda) tutarsanız zamanla su olur. Zenginler enflasyondan korkmaz, aksine enflasyonu kendi lehlerine bir silah (kaldıraç ve iyi borç) olarak kullanmayı bilirler.",
    "ornek": "Yıllar önce dedeniz yastık altına 100.000 TL saklamış olsun. O yıllarda o parayla belki bir ev veya araba alabiliyordu. Ancak bugün, 30 yıllık enflasyon yüzünden o 100.000 TL'nin alım gücü belki de sadece güzel bir akşam yemeğine denktir. Nakitte kalmak %100 oranında para kaybetme garantisidir.",
    "grafikTipi": "bar",
    "grafikVerisi": {
      "labels": [
        "2010",
        "2015",
        "2020",
        "2023",
        "2026"
      ],
      "datasetLabel": "100 TL'nin Alım Gücü Endeksi",
      "data": [
        100,
        80,
        50,
        20,
        8
      ]
    }
  },
  {
    "kavram": "ETF (Borsa Yatırım Fonu)",
    "aciklama": "İçerisinde yüzlerce şirketin hissesini barındıran ve tek bir hisse senedi gibi borsada alınıp satılabilen fonlardır (Örn: S&P 500 ETF'i). Warren Buffett, sıradan yatırımcılar için en iyi yatırımın geniş endeks ETF'leri olduğunu söyler.",
    "ingilizce": "Exchange Traded Fund",
    "harf": "E",
    "slug": "etf-borsa-yatirim-fonu",
    "detayliAciklama": "İçerisinde yüzlerce şirketin hissesini barındıran ve tek bir hisse senedi gibi borsada alınıp satılabilen fonlardır (Örn: S&P 500 ETF'i). Warren Buffett, sıradan yatırımcılar için en iyi yatırımın geniş endeks ETF'leri olduğunu söyler.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Fare Yarışı (Rat Race)",
    "aciklama": "Maaş al, faturaları öde, paran bitsin, tekrar maaş al döngüsüne verilen isimdir. Gelir arttıkça giderlerin de lüks tüketimle artması sonucu bu yarıştan çıkmak yatırım yapmadan imkansızlaşır.",
    "ingilizce": "Rat Race",
    "harf": "F",
    "slug": "fare-yarisi-rat-race",
    "detayliAciklama": "Maaş al, faturaları öde, paran bitsin, tekrar maaş al döngüsüne verilen isimdir. Gelir arttıkça giderlerin de lüks tüketimle artması sonucu bu yarıştan çıkmak yatırım yapmadan imkansızlaşır.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Fırsat Maliyeti",
    "aciklama": "Bir seçeneği tercih ettiğinizde, vazgeçtiğiniz en iyi alternatif seçeneğin size sağlayacağı fayda veya gelirdir. Parayı bankada tutmanın fırsat maliyeti, o parayı borsada yatırıp kazanabileceğiniz olası getiridir.",
    "ingilizce": "Opportunity Cost",
    "harf": "F",
    "slug": "firsat-maliyeti",
    "detayliAciklama": "Bir seçeneği tercih ettiğinizde, vazgeçtiğiniz en iyi alternatif seçeneğin size sağlayacağı fayda veya gelirdir. Parayı bankada tutmanın fırsat maliyeti, o parayı borsada yatırıp kazanabileceğiniz olası getiridir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Fiat Para (İtibari Para)",
    "aciklama": "Altın veya gümüş gibi fiziksel bir karşılığı olmayan, sadece devletin \"Bu paradır\" demesiyle ve yasalarla (kanun hükmünde) değeri korunan Dolar, TL, Euro gibi geleneksel para birimleridir.",
    "ingilizce": "Fiat Currency",
    "harf": "F",
    "slug": "fiat-para-itibari-para",
    "detayliAciklama": "Altın veya gümüş gibi fiziksel bir karşılığı olmayan, sadece devletin \"Bu paradır\" demesiyle ve yasalarla (kanun hükmünde) değeri korunan Dolar, TL, Euro gibi geleneksel para birimleridir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Finansal Özgürlük (FIRE)",
    "aciklama": "Çalışmak zorunda kalmadan, sadece varlıklarınızdan elde ettiğiniz pasif gelirle yaşam standartlarınızı ömür boyu sürdürebilme durumudur. FIRE (Financial Independence, Retire Early) bu akımın dünyadaki adıdır.",
    "ingilizce": "Financial Independence",
    "harf": "F",
    "slug": "finansal-ozgurluk-fire",
    "detayliAciklama": "Çalışmak zorunda kalmadan, sadece varlıklarınızdan elde ettiğiniz pasif gelirle yaşam standartlarınızı ömür boyu sürdürebilme durumudur. FIRE (Financial Independence, Retire Early) bu akımın dünyadaki adıdır.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Fiyat/Kazanç Oranı (F/K)",
    "aciklama": "Bir hisse senedinin pahalı mı yoksa ucuz mu olduğunu anlamak için kullanılan en temel metriktir. Yatırımcıların o şirketin 1 liralık kazancı için borsada kaç lira ödemeye razı olduğunu gösterir.",
    "ingilizce": "P/E Ratio",
    "harf": "F",
    "slug": "fiyat-kazanc-orani-f-k",
    "detayliAciklama": "Bir hisse senedinin pahalı mı yoksa ucuz mu olduğunu anlamak için kullanılan en temel metriktir. Yatırımcıların o şirketin 1 liralık kazancı için borsada kaç lira ödemeye razı olduğunu gösterir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "FOMO (Fırsatı Kaçırma Korkusu)",
    "aciklama": "Bir hissenin, projenin veya piyasanın çok hızlı yükseldiğini görüp, \"herkes zengin oluyor ben geride kaldım\" paniğiyle araştırmadan en tepeden yatırım yapma psikolojisidir.",
    "ingilizce": "Fear Of Missing Out",
    "harf": "F",
    "slug": "fomo-firsati-kacirma-korkusu",
    "detayliAciklama": "Bir hissenin, projenin veya piyasanın çok hızlı yükseldiğini görüp, \"herkes zengin oluyor ben geride kaldım\" paniğiyle araştırmadan en tepeden yatırım yapma psikolojisidir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Gelir Tablosu",
    "aciklama": "Bir şirketin belirli bir dönemde (örneğin 1 yıl içinde) elde ettiği tüm satış gelirlerini, giderlerini ve sonucunda ne kadar net kâr veya zarar ettiğini gösteren rapordur.",
    "ingilizce": "Income Statement",
    "harf": "G",
    "slug": "gelir-tablosu",
    "detayliAciklama": "Bir şirketin belirli bir dönemde (örneğin 1 yıl içinde) elde ettiği tüm satış gelirlerini, giderlerini ve sonucunda ne kadar net kâr veya zarar ettiğini gösteren rapordur.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Halka Arz (IPO)",
    "aciklama": "Özel bir şirketin hisselerini ilk kez borsada işlem görmesi için genel halka ve yatırımcılara satmasıdır. Şirketler genellikle yeni yatırımlar için sermaye toplamak amacıyla halka açılırlar.",
    "ingilizce": "Initial Public Offering",
    "harf": "H",
    "slug": "halka-arz-ipo",
    "detayliAciklama": "Özel bir şirketin hisselerini ilk kez borsada işlem görmesi için genel halka ve yatırımcılara satmasıdır. Şirketler genellikle yeni yatırımlar için sermaye toplamak amacıyla halka açılırlar.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Hedge Fon",
    "aciklama": "Genellikle sadece yüksek net değere sahip bireylerin (ultra zenginlerin) yatırım yapabildiği, riskten korunma veya piyasa ortalamasının çok üzerinde getiri sağlama amacıyla agresif ve karmaşık finansal stratejiler kullanan özel yatırım fonlarıdır.",
    "ingilizce": "Hedge Fund",
    "harf": "H",
    "slug": "hedge-fon",
    "detayliAciklama": "Genellikle sadece yüksek net değere sahip bireylerin (ultra zenginlerin) yatırım yapabildiği, riskten korunma veya piyasa ortalamasının çok üzerinde getiri sağlama amacıyla agresif ve karmaşık finansal stratejiler kullanan özel yatırım fonlarıdır.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Hisse Senedi",
    "aciklama": "Anonim şirketlerin sermayesini oluşturan eşit paylardan her biridir. Bir şirketin hisse senedini aldığınızda, yasal olarak o şirketin küçük bir bölümüne ortak olmuş olursunuz.",
    "ingilizce": "Stock / Equity",
    "harf": "H",
    "slug": "hisse-senedi",
    "detayliAciklama": "Anonim şirketlerin sermayesini oluşturan eşit paylardan her biridir. Bir şirketin hisse senedini aldığınızda, yasal olarak o şirketin küçük bir bölümüne ortak olmuş olursunuz.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "İyi Borç / Kötü Borç",
    "aciklama": "Kötü borç, değeri düşen şeyler (TV, araba, tatil) almak için yüksek faizle alınan kredidir. İyi borç ise, borçlanma maliyetinden daha fazla gelir getirecek yatırımlar (kiralık ev, iş kurma) yapmak için alınan düşük faizli borçtur.",
    "ingilizce": "Good Debt / Bad Debt",
    "harf": "İ",
    "slug": "iyi-borc-kotu-borc",
    "detayliAciklama": "Kötü borç, değeri düşen şeyler (TV, araba, tatil) almak için yüksek faizle alınan kredidir. İyi borç ise, borçlanma maliyetinden daha fazla gelir getirecek yatırımlar (kiralık ev, iş kurma) yapmak için alınan düşük faizli borçtur.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Kaldıraç (Leverage)",
    "aciklama": "Daha az kendi kaynağınızı kullanarak (başkalarının parası, başkalarının zamanı, kod veya medya) çok daha büyük bir sonuç veya getiri elde etme gücüdür. Kod yazmak ve video çekmek günümüzün en büyük bedava kaldıraçlarıdır.",
    "ingilizce": "Leverage",
    "harf": "K",
    "slug": "kaldirac-leverage",
    "detayliAciklama": "Daha az kendi kaynağınızı kullanarak (başkalarının parası, başkalarının zamanı, kod veya medya) çok daha büyük bir sonuç veya getiri elde etme gücüdür. Kod yazmak ve video çekmek günümüzün en büyük bedava kaldıraçlarıdır.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Kripto Para",
    "aciklama": "Blokzincir teknolojisini kullanan, herhangi bir merkez bankasına bağlı olmayan tamamen merkeziyetsiz dijital varlıklardır. Bitcoin, bu varlık sınıfının dijital altın olarak kabul edilen ilk örneğidir.",
    "ingilizce": "Cryptocurrency",
    "harf": "K",
    "slug": "kripto-para",
    "detayliAciklama": "Blokzincir teknolojisini kullanan, herhangi bir merkez bankasına bağlı olmayan tamamen merkeziyetsiz dijital varlıklardır. Bitcoin, bu varlık sınıfının dijital altın olarak kabul edilen ilk örneğidir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Likidite",
    "aciklama": "Sahip olduğunuz bir varlığın ne kadar hızlı ve değer kaybetmeden nakit paraya çevrilebildiğidir. Hisse senetleri yüksek likiditeye sahipken, gayrimenkuller düşük likiditeye sahiptir.",
    "ingilizce": "Liquidity",
    "harf": "L",
    "slug": "likidite",
    "detayliAciklama": "Sahip olduğunuz bir varlığın ne kadar hızlı ve değer kaybetmeden nakit paraya çevrilebildiğidir. Hisse senetleri yüksek likiditeye sahipken, gayrimenkuller düşük likiditeye sahiptir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Melek Yatırımcı",
    "aciklama": "Bir girişime henüz kuruluş (fikir veya tohum) aşamasındayken kendi kişisel servetiyle sermaye sağlayan, karşılığında hisse alan zengin ve genellikle tecrübeli bireylerdir.",
    "ingilizce": "Angel Investor",
    "harf": "M",
    "slug": "melek-yatirimci",
    "detayliAciklama": "Bir girişime henüz kuruluş (fikir veya tohum) aşamasındayken kendi kişisel servetiyle sermaye sağlayan, karşılığında hisse alan zengin ve genellikle tecrübeli bireylerdir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Mental Model",
    "aciklama": "Dünyanın nasıl işlediğini anlamak için farklı disiplinlerden (biyoloji, fizik, ekonomi vb.) ödünç alınmış düşünce çerçeveleridir. Başarılı kararlar almak için alet çantanızdaki temel araçlardır.",
    "ingilizce": "Mental Model",
    "harf": "M",
    "slug": "mental-model",
    "detayliAciklama": "Dünyanın nasıl işlediğini anlamak için farklı disiplinlerden (biyoloji, fizik, ekonomi vb.) ödünç alınmış düşünce çerçeveleridir. Başarılı kararlar almak için alet çantanızdaki temel araçlardır.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Ölçeklenebilirlik",
    "aciklama": "Bir iş modelinin veya sistemin, maliyetleri aynı hızda artırmadan gelirlerini ve kullanıcı sayısını eksponansiyel olarak büyütebilme kapasitesidir. Yazılım ve medya en ölçeklenebilir işlerdir.",
    "ingilizce": "Scalability",
    "harf": "Ö",
    "slug": "olceklenebilirlik",
    "detayliAciklama": "Bir iş modelinin veya sistemin, maliyetleri aynı hızda artırmadan gelirlerini ve kullanıcı sayısını eksponansiyel olarak büyütebilme kapasitesidir. Yazılım ve medya en ölçeklenebilir işlerdir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Pasif Gelir",
    "aciklama": "Aktif olarak zaman ve emek harcamadan (veya çok az harcayarak) düzenli olarak elde edilen gelirdir. Kira gelirleri, temettüler, kitap veya yazılım telifleri pasif gelirdir.",
    "ingilizce": "Passive Income",
    "harf": "P",
    "slug": "pasif-gelir",
    "detayliAciklama": "Aktif olarak zaman ve emek harcamadan (veya çok az harcayarak) düzenli olarak elde edilen gelirdir. Kira gelirleri, temettüler, kitap veya yazılım telifleri pasif gelirdir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Portföy",
    "aciklama": "Bir bireyin veya kurumun sahip olduğu finansal yatırımların bütünüdür. Bir yatırımcının portföyünde hisseler, tahviller, emlak, altın ve nakit aynı anda bulunabilir.",
    "ingilizce": "Portfolio",
    "harf": "P",
    "slug": "portfoy",
    "detayliAciklama": "Bir bireyin veya kurumun sahip olduğu finansal yatırımların bütünüdür. Bir yatırımcının portföyünde hisseler, tahviller, emlak, altın ve nakit aynı anda bulunabilir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Resesyon (Durgunluk)",
    "aciklama": "Bir ülkenin ekonomisinin üst üste iki çeyrek (6 ay) boyunca küçülmesi, işsizliğin artması ve ticari faaliyetlerin yavaşlaması durumudur.",
    "ingilizce": "Recession",
    "harf": "R",
    "slug": "resesyon-durgunluk",
    "detayliAciklama": "Bir ülkenin ekonomisinin üst üste iki çeyrek (6 ay) boyunca küçülmesi, işsizliğin artması ve ticari faaliyetlerin yavaşlaması durumudur.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Risk Sermayesi (Venture Capital)",
    "aciklama": "Gelecek vaat eden, yüksek büyüme potansiyeline sahip ancak henüz yolun başındaki teknoloji veya inovasyon odaklı girişimlere (start-up) yapılan profesyonel finansal yatırımlardır.",
    "ingilizce": "Venture Capital",
    "harf": "R",
    "slug": "risk-sermayesi-venture-capital",
    "detayliAciklama": "Gelecek vaat eden, yüksek büyüme potansiyeline sahip ancak henüz yolun başındaki teknoloji veya inovasyon odaklı girişimlere (start-up) yapılan profesyonel finansal yatırımlardır.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Stagflasyon",
    "aciklama": "Ekonomik olarak en kötü senaryolardan biridir. Ekonomik durgunluğun (işsizlik, büyümemezlik) yüksek enflasyonla (sürekli artan fiyatlar) aynı anda yaşandığı ekonomik kriz durumudur.",
    "ingilizce": "Stagflation",
    "harf": "S",
    "slug": "stagflasyon",
    "detayliAciklama": "Ekonomik olarak en kötü senaryolardan biridir. Ekonomik durgunluğun (işsizlik, büyümemezlik) yüksek enflasyonla (sürekli artan fiyatlar) aynı anda yaşandığı ekonomik kriz durumudur.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Tahvil",
    "aciklama": "Devletlerin veya büyük şirketlerin yatırımcılardan borç almak için çıkardıkları, belirli bir süre sonunda anaparayı ve vaat edilen faizi geri ödeme garantisi sunan resmi borç senetleridir.",
    "ingilizce": "Bond",
    "harf": "T",
    "slug": "tahvil",
    "detayliAciklama": "Devletlerin veya büyük şirketlerin yatırımcılardan borç almak için çıkardıkları, belirli bir süre sonunda anaparayı ve vaat edilen faizi geri ödeme garantisi sunan resmi borç senetleridir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Teknik Analiz",
    "aciklama": "Bir varlığın (hisse senedi, döviz, altın) geçmişteki fiyat hareketlerini ve işlem hacimlerini gösteren grafiklere bakarak, gelecekteki fiyat yönünü matematiksel formüllerle tahmin etme sanatıdır.",
    "ingilizce": "Technical Analysis",
    "harf": "T",
    "slug": "teknik-analiz",
    "detayliAciklama": "Bir varlığın (hisse senedi, döviz, altın) geçmişteki fiyat hareketlerini ve işlem hacimlerini gösteren grafiklere bakarak, gelecekteki fiyat yönünü matematiksel formüllerle tahmin etme sanatıdır.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Temel Analiz",
    "aciklama": "Bir şirketin finansal tablolarını (bilanço, gelir tablosu), yönetim kadrosunu, sektördeki rakiplerini ve ekonomik durumu inceleyerek şirketin gerçek değerini (içsel değerini) bulma yöntemidir.",
    "ingilizce": "Fundamental Analysis",
    "harf": "T",
    "slug": "temel-analiz",
    "detayliAciklama": "Bir şirketin finansal tablolarını (bilanço, gelir tablosu), yönetim kadrosunu, sektördeki rakiplerini ve ekonomik durumu inceleyerek şirketin gerçek değerini (içsel değerini) bulma yöntemidir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Temettü (Kâr Payı)",
    "aciklama": "Bir şirketin elde ettiği kârın, vergi ve yedek akçeler ayrıldıktan sonra hisse senedi sahiplerine nakit olarak dağıttığı paydır. Temettü emekliliği, pasif gelir stratejilerinden biridir.",
    "ingilizce": "Dividend",
    "harf": "T",
    "slug": "temettu-k-r-payi",
    "detayliAciklama": "Bir şirketin elde ettiği kârın, vergi ve yedek akçeler ayrıldıktan sonra hisse senedi sahiplerine nakit olarak dağıttığı paydır. Temettü emekliliği, pasif gelir stratejilerinden biridir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Teminat Çağrısı (Margin Call)",
    "aciklama": "Kaldıraçlı veya kredili işlem yapan bir yatırımcının zarar etmesi sonucunda, aracı kurumun \"Paran sıfırlanmak üzere, hesabına acilen nakit ekle\" diyerek yaptığı finansal kabus uyarısıdır.",
    "ingilizce": "Margin Call",
    "harf": "T",
    "slug": "teminat-cagrisi-margin-call",
    "detayliAciklama": "Kaldıraçlı veya kredili işlem yapan bir yatırımcının zarar etmesi sonucunda, aracı kurumun \"Paran sıfırlanmak üzere, hesabına acilen nakit ekle\" diyerek yaptığı finansal kabus uyarısıdır.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Varlık (Asset)",
    "aciklama": "Kendi kendine cebinize para koyan şeylerdir. Hisse senetleri, kira getiren gayrimenkuller, telif hakları veya kâr eden bir işletme varlıktır. Zenginler varlık satın alır.",
    "ingilizce": "Asset",
    "harf": "V",
    "slug": "varlik-asset",
    "detayliAciklama": "Kendi kendine cebinize para koyan şeylerdir. Hisse senetleri, kira getiren gayrimenkuller, telif hakları veya kâr eden bir işletme varlıktır. Zenginler varlık satın alır.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Volatilite",
    "aciklama": "Bir varlığın fiyatının belirli bir zaman dilimindeki dalgalanma şiddetidir. Kripto paralar çok yüksek volatiliteye (oynaklığa) sahipken, devlet tahvilleri düşük volatiliteye sahiptir.",
    "ingilizce": "Volatility",
    "harf": "V",
    "slug": "volatilite",
    "detayliAciklama": "Bir varlığın fiyatının belirli bir zaman dilimindeki dalgalanma şiddetidir. Kripto paralar çok yüksek volatiliteye (oynaklığa) sahipken, devlet tahvilleri düşük volatiliteye sahiptir.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  },
  {
    "kavram": "Yükümlülük (Liability)",
    "aciklama": "Cebinizden para çıkaran şeylerdir. Kredi kartı borcu, ihtiyaç dışı alınan lüks araba veya oturmak için alınan kredi ödemeli devasa bir ev yükümlülüktür. Fakirler ve orta sınıf yükümlülük satın alır ve bunları varlık sanır.",
    "ingilizce": "Liability",
    "harf": "Y",
    "slug": "yukumluluk-liability",
    "detayliAciklama": "Cebinizden para çıkaran şeylerdir. Kredi kartı borcu, ihtiyaç dışı alınan lüks araba veya oturmak için alınan kredi ödemeli devasa bir ev yükümlülüktür. Fakirler ve orta sınıf yükümlülük satın alır ve bunları varlık sanır.",
    "ornek": "Henüz detaylı bir vaka örneği eklenmedi. Zengince.com'u takip etmeye devam edin."
  }
];

// Alfabetik sıralama için hazırlık
SOZLUK.sort((a, b) => a.kavram.localeCompare(b.kavram, 'tr'));

module.exports = { SOZLUK };
