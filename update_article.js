const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'makaleler-data.js');
let content = fs.readFileSync(filePath, 'utf8');

const marker1 = '02.</span>';
const marker2 = 'Pasif Gelir Kaynakları Karşılaştırma Tablosu';

const index1 = content.indexOf(marker1);
const index2 = content.indexOf(marker2);

if (index1 === -1 || index2 === -1) {
    console.log("Could not find markers", index1, index2);
    process.exit(1);
}

// Find the start of the <h2> line before index2
let actualEndIndex = content.lastIndexOf('<h2', index2);

const before = content.substring(0, index1 + marker1.length);
const after = content.substring(actualEndIndex);

const replacement = ` 
        Gayrimenkul Yatırımı ve Kısa Dönem Kiralama (Airbnb) Stratejileri
      </h2>
      <p>Gayrimenkul, yüzyıllardır zenginlerin portföyündeki demirbaş varlıktır. Fiziksel bir varlık olması, krizlerde güvenli liman sayılması, enflasyona karşı mükemmel bir koruma sağlaması ve her ay düzenli nakit akışı yaratması onu eşsiz kılar. Ancak modern dünyada, standart "ev alıp kiraya verme" modeli eski cazibesini yitiriyor. Getiriyi maksimize etmenin yolları değişti.</p>
      <p>Eğer bir eviniz varsa, bunu standart bir kiracıya aylık 15.000 TL'ye vermek yerine, <strong>Airbnb, Booking veya Vrbo</strong> gibi platformlar üzerinden turistik/kısa dönemli kiralayarak gelirinizi 3'e hatta 4'e katlayabilirsiniz. Evi güzelce dekore edip profesyonel fotoğraflarını çekmek, pasif gelire giden ilk ve en önemli aktif efordur.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> Lokasyonu iyi olan bir ev alın veya kiralayın (Arbitraj). İçini "Instagramlanabilir" şekilde dekore edin. Temizlik ve anahtar teslimi için yerel bir şirketle anlaşıp sistemi tamamen otopilota bağlayın. Eğer ev alacak bütçeniz yoksa GYO hisselerini (REITs) inceleyin.</li>
        <li><strong>Avantajı:</strong> Enflasyona karşı fiziki bir koruma sağlar. Getirisi geleneksel kiraya göre çok yüksektir. Mülkünüz aynı zamanda değer kazanır (Capital gain).</li>
        <li><strong>Dezavantajı:</strong> Başlangıçta ciddi sermaye veya kredi çekme cesareti ister. Ayrıca misafir şikayetleri ve hasarlar bazen can sıkıcı olabilir.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">03.</span> 
        Dijital Ürün İmparatorluğu Kurmak (Eğitim, E-Kitap, Şablonlar)
      </h2>
      <p>İnternet çağının en büyük finansal kaldıracı (leverage) <strong>sıfır marjinal kopyalama maliyetidir</strong>. Fiziksel bir ayakkabı satmak isterseniz; her bir ayakkabı için deri almalı, işçi çalıştırmalı, depolamalı ve kargolamalısınız. Ancak dijital bir ürün yarattığınızda, onu üretmek sadece bir kez efor gerektirir. Üretildikten sonra 1 kişiye satmakla 1 milyon kişiye satmak arasında üretim maliyeti farkı yoktur.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> Uzman olduğunuz bir yazılım dili, kişisel gelişim taktiği veya tasarım becerisi bulun. Bunu Udemy için video eğitimine, Amazon KDP için bir e-kitaba veya Etsy için Canva şablonuna dönüştürün.</li>
        <li><strong>Avantajı:</strong> Kâr marjı %100'e yakındır. Kargo, iade veya depolama masrafı yoktur. Dünyanın her yerindeki müşteriye 7/24 otomatik satılır.</li>
        <li><strong>Dezavantajı:</strong> Ürünü yaratmak aylar süren yoğun bir aktif çalışma (yazma, çekim yapma, kurgu) gerektirir. Rekabet oldukça yüksektir.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">04.</span> 
        Affiliate Marketing (Satış Ortaklığı) Ağı İnşa Etmek
      </h2>
      <p>Kendinize ait bir ürününüz veya deponuz yoksa bile internetten devasa paralar kazanabilirsiniz. Affiliate Marketing, başkalarının ürünlerini veya hizmetlerini kendi kitlenize tanıtarak, sizin referansınızla yapılan her satıştan komisyon alma modelidir. Bloglar, YouTube kanalları ve Instagram sayfaları bunun için en uygun yerlerdir.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> Hepsiburada, Trendyol veya Amazon Associates gibi ortaklık programlarına kaydolun. Ürün incelemeleri yapan SEO uyumlu blog yazıları yazın veya inceleme videoları çekin. Linklerinizi açıklama kısımlarına yerleştirin.</li>
        <li><strong>Avantajı:</strong> Müşteri hizmetleri, kargo veya ürün tedariki ile uğraşmazsınız. Sadece trafiği yönlendirir ve paranızı alırsınız.</li>
        <li><strong>Dezavantajı:</strong> Kaliteli ve güvenilir bir kitle (trafik) oluşturmak uzun zaman alır. Komisyon oranları bazı sektörlerde düşüktür.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">05.</span> 
        YouTube: Kendi Dijital Gayrimenkulünüzü Yaratmak
      </h2>
      <p>YouTube günümüzün dijital gayrimenkulü, videolar ise o gayrimenkulün üzerinde 7/24 çalışan kiracılarınızdır. "Evergreen" (ölümsüz, modası geçmeyen) içerikler ürettiğinizde, bu videolar size yıllar boyunca dolar bazında reklam geliri (AdSense) getirmeye devam eder. Örneğin "Kravat nasıl bağlanır?" videosu 10 yıl sonra bile izlenir.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> İnsanların sürekli arattığı, kalıcı problemleri çözen konularda eğitici videolar çekin. Thumbnail (kapak fotoğrafı) tasarımını mükemmelleştirin.</li>
        <li><strong>Avantajı:</strong> Tamamen dolar bazlı gelir sağlar. Videolar bir kez çekilir, ömür boyu getiri sağlar. Sizi markalaştırır ve diğer iş kapılarını (sponsorluk, kitap satışı) açar.</li>
        <li><strong>Dezavantajı:</strong> Başlangıçta algoritmayı yenmek ve ilk 1000 aboneyi/4000 saati doldurmak aylarca süren ücretsiz bir amelelik gibi hissettirebilir.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">06.</span> 
        Borsa Yatırım Fonları (ETF) ve Robo-Danışmanlık
      </h2>
      <p>Hisse senedi seçmek ve bilanço okumak size göre değilse, Borsa Yatırım Fonları (ETF) hayat kurtarıcıdır. En bilinen örneği S&P 500 ETF'sidir. Paranız Amerikan borsasındaki en büyük 500 şirkete otomatik dağıtılır. Şirketlerden biri batsa bile diğer 499'u ayakta olduğu için riskiniz minimuma iner.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> Yerel veya uluslararası bir aracı kurumdan hesap açın. Her ay maaşınız yattığı gün, piyasanın durumuna bakmaksızın (Dolar Maliyet Ortalaması - DCA) düzenli VOO veya SPY fonu alın.</li>
        <li><strong>Avantajı:</strong> Yıllık ortalama %8-%10 dolar bazlı büyüme sunar. Bilgi, uzmanlık veya zaman gerektirmez; gerçekten "uyurken" çalışır.</li>
        <li><strong>Dezavantajı:</strong> Getirisi yavaş ve sıkıcıdır. Milyoner olmak için piyasa krizlerinde panik yapmadan 15-20 yıl beklemeniz gerekir.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">07.</span> 
        Uygulama, Yazılım (SaaS) ve Eklenti Geliştirme
      </h2>
      <p>Yazılım diline hakimseniz, geliştireceğiniz ufak bir mobil uygulama, tarayıcı eklentisi veya abonelik tabanlı bir yazılım (SaaS), dünyanın en kârlı pasif gelir modelidir. İnsanların çözülmemiş küçük sorunlarına (örneğin arka plan silme, alışkanlık takibi) odaklanın. Dünyanın her yerinden kullanıcılar aylık 5 dolar ödediğinde devasa bir ciro oluşur.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> Bir problem tespit edin, hızlı bir MVP (Minimum Viable Product) yazın ve Product Hunt gibi sitelerde lansmanını yapın. Abonelik sistemini (Stripe) bağlayın.</li>
        <li><strong>Avantajı:</strong> Ölçeklenebilirlik sonsuzdur. Fabrika büyütmeye gerek kalmadan sunucu kapasitenizi artırarak gelirinizi 100 katına çıkarabilirsiniz.</li>
        <li><strong>Dezavantajı:</strong> Teknik bilgi, sürekli güncelleme, bug çözümleri ve ciddi bir pazarlama eforu gerektirir.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">08.</span> 
        Stok Fotoğrafçılığı, Video B-Roll ve Ses Efekti Satışı
      </h2>
      <p>Görsel sanatlara ilginiz varsa, bu hobinizi pasif gelire dönüştürebilirsiniz. Shutterstock, Adobe Stock, Pond5 gibi platformlara yüklediğiniz yüksek kaliteli fotoğraflar, vektörel çizimler veya B-roll (kısa drone/şehircilik videoları), reklam ajansları tarafından yıllarca indirilebilir.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> Telefonunuzun iyi bir kamerası veya bir profesyonel makineyle bolca "kurumsal", "doğa" ve "teknoloji" konseptli görseller çekip portföyünüzü oluşturun.</li>
        <li><strong>Avantajı:</strong> Aynı eseri binlerce kez, telif (royalty) mantığıyla satabilirsiniz. Hobinizi paraya çevirmenin en stressiz yoludur.</li>
        <li><strong>Dezavantajı:</strong> Ajanslar çok düşük ödeme yapar (indirme başı 0.10$ gibi). Ciddi para kazanmak için on binlerce görselden oluşan dev bir arşiv gerekir.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">09.</span> 
        Blog ve Niş (Niche) Web Siteleri İnşa Etmek
      </h2>
      <p>Sadece belirli bir konuya odaklanan (Örneğin: Kahve makinesi incelemeleri, kamp ekipmanları) bir web sitesi kurup, insanların Google'da arattığı sorulara detaylı rehberler yazmaktır. Site Google'da üst sıralara çıktığında, Adsense ve Affiliate linkleriyle pasif bir darphaneye dönüşür.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> Ahrefs veya Semrush ile düşük rekabetli anahtar kelimeleri bulun. Kaliteli bir hosting alıp WordPress kurun ve aylarca durmadan o niş konuda makaleler yazın.</li>
        <li><strong>Avantajı:</strong> Yüksek trafik alan bir siteyi ileride aylık kârının 30-40 katına Flippa üzerinden satarak (Exit) tek kalemde servet kazanabilirsiniz.</li>
        <li><strong>Dezavantajı:</strong> Google güncellemeleri (Core Updates) tek gecede trafiğinizi silebilir. SEO çok uzun vadeli (6-12 ay) bir oyundur.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">10.</span> 
        Otomatik Vending (Otomat) Makineleri ve Self-Servis İşletmeler
      </h2>
      <p>Sadece dijitalde değil, fiziksel dünyada da pasif gelir mümkündür. Yaya trafiği yüksek plazalara veya üniversitelere koyacağınız kahve/atıştırmalık otomatları, siz başında durmadan, işçi maaşı ödemeden 7/24 satış yapar.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> İkinci el temiz bir makine satın alın. Bir plazanın veya spor salonunun yönetimiyle (kârdan küçük bir pay veya sabit kira vererek) anlaşıp makineyi yerleştirin.</li>
        <li><strong>Avantajı:</strong> Sigorta, yemek ücreti, çalışan kaprisi yoktur. Telemetri sistemleriyle telefondan stoğu izler, haftada 2 saat ayırıp dolum yaparsınız.</li>
        <li><strong>Dezavantajı:</strong> Vandalizm (makineye zarar verilmesi) riski, makine arızaları ve tamamen pasif olmaması (ürünleri fiziksel olarak dizmeniz gerekir) yorucu olabilir.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">11.</span> 
        Kripto Staking ve Merkeziyetsiz Finans (DeFi)
      </h2>
      <p>Kripto paralar sadece al-sat yapmak için değildir. DeFi dünyasında, elinizdeki coinleri bir ağın güvenliğini sağlamak için kilitleyerek (Staking) veya likidite havuzlarına sağlayarak yıllık %5 ile %20 arasında tamamen pasif bir getiri elde edebilirsiniz. Paranızı geleneksel bir bankaya vadeli hesaba yatırmak gibidir, ancak aracı banka olmadığı için faiz doğrudan size yatar.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> Güvenilir kripto borsalarında (Binance, Kraken) veya soğuk cüzdanınızda (Ledger) Ethereum, Solana gibi coinlerinizi "Stake" et butonuna basarak kilitleyin.</li>
        <li><strong>Avantajı:</strong> Banka faizlerinden çok daha yüksek getiriler sunar. İşlem saniyeler içinde halledilir.</li>
        <li><strong>Dezavantajı:</strong> Kripto piyasalarının yüksek volatilitesi ana paranızı eritebilir. Akıllı kontrat hacklenme riski (DeFi projelerinde) her zaman vardır.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">12.</span> 
        Domain (Alan Adı) Yatırımcılığı ve Otoparkı (Domain Parking)
      </h2>
      <p>Gelecekte değerlenebilecek jenerik marka isimleri taşıyan ".com" alan adlarını ucuza alıp, yüksek fiyata satmak popüler bir iştir. Ancak bu alan adlarını satılana kadar bekletirken "Domain Parking" servislerini bağlayarak, siteye yanlışlıkla giren kullanıcıların tıkladığı reklamlardan pasif gelir elde edebilirsiniz.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> Sedo veya GoDaddy gibi platformlardan veya doğrudan kayıt firmalarından akılda kalıcı alan adları satın alın ve Sedo Parking gibi sistemlere entegre edin.</li>
        <li><strong>Avantajı:</strong> Teknik bir web sitesi kurmanıza gerek kalmaz. Sadece alan adının sahip hakları size aittir ve satılana kadar kendini amorti eder.</li>
        <li><strong>Dezavantajı:</strong> Yıllık domain yenileme ücretleri birikebilir. Gerçekten jenerik ve trafik çeken domainler bulmak artık çok zordur.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">13.</span> 
        Kişilerarası Borç Verme (P2P Lending) Platformları
      </h2>
      <p>Sermayenizi bankaya mevduat olarak yatırarak faiz almak yerine, P2P Lending platformları sayesinde bankayı aradan çıkarabilirsiniz. Paranızı doğrudan krediye ihtiyacı olan girişimcilere veya bireylere borç verir, bankanın kazanacağı o devasa faiz farkını (kâr marjını) doğrudan siz elde edersiniz.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> Mintos, PeerBerry veya Türkiye'de yasal olarak faaliyet gösteren kitle fonlaması/borçlanma platformlarına üye olun ve paranızı onlarca farklı krediye dağıtın (çeşitlendirme).</li>
        <li><strong>Avantajı:</strong> Geleneksel tahvil veya banka faizlerine göre çok daha yüksek sabit getiri oranları (yıllık %10-14 döviz) sağlar.</li>
        <li><strong>Dezavantajı:</strong> Borçlunun krediyi ödeyememe (temerrüt) riski vardır. Platform iflas ederse sermayenizi kurtarmak zor olabilir.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">14.</span> 
        Print on Demand (Talebe Bağlı Baskı) Mağazaları
      </h2>
      <p>Tasarım vizyonunuz varsa, tişört, kupa, bez çanta veya telefon kılıfı tasarımları yapabilirsiniz. Tasarımlarınızı yüklediğiniz Print on Demand sistemlerinde; müşteri ürünü sipariş ettiğinde, şirket ürünü basar, kargolar ve iadeleri yönetir. Siz hiçbir fiziksel ürüne dokunmazsınız.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> Canva veya Adobe Illustrator'da tasarımlar hazırlayın. Printify veya Printful altyapısını kullanarak kendi Shopify veya Etsy mağazanıza bağlayın.</li>
        <li><strong>Avantajı:</strong> Stok maliyeti sıfırdır. Elinizde ürün patlaması veya depo kiralama derdi yoktur. Müşteri parasını ödemeden üretim yapılmaz.</li>
        <li><strong>Dezavantajı:</strong> Kâr marjları oldukça düşüktür (bir tişörtten 2-4 dolar kalabilir). Rekabet aşırı yüksektir, iyi pazarlama gerektirir.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">15.</span> 
        Yatırım Fonları (Mutual Funds) ve Eurobondlar
      </h2>
      <p>Paranızı profesyonel fon yöneticilerine emanet ettiğiniz bu sistemde, tecrübeli uzmanlar piyasayı sizin yerinize takip eder. Eurobondlar ise devletlerin veya şirketlerin döviz cinsinden borçlanma senetleridir ve size 6 ayda bir düzenli dolar kupon (faiz) ödemesi yaparlar.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> Türkiye'de TEFAS üzerinden banka uygulamanızla saniyeler içinde hisse senedi veya teknoloji fonları alabilirsiniz. Eurobond için bankanızın yatırım sekmesini kullanın.</li>
        <li><strong>Avantajı:</strong> Piyasayı günlük takip etme stresinden kurtarır. Eurobondlar döviz bazında garantili, düzenli ve pasif nakit akışı sağlar.</li>
        <li><strong>Dezavantajı:</strong> Fon yönetim kesinti ücretleri (yıllık %2-3) getirinizin bir kısmını tıraşlar.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">16.</span> 
        Güneş Enerjisi (GES) ve Temiz Enerji Yatırımları
      </h2>
      <p>Müstakil bir evinizin veya fabrikanızın çatısı varsa, Güneş Enerjisi Santrali (GES) kurarak kendi elektriğinizi üretebilir, tükettiğinizden arta kalanı ise devletin alım garantisiyle elektrik şebekesine satabilirsiniz. Çevreci ve son derece kârlı bir yatırımdır.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> Yetkili bir enerji mühendisliği firmasıyla anlaşıp çatı ölçümlerinizi yaptırın, teşvik/kredi başvurularını tamamlayıp panelleri kurdurun.</li>
        <li><strong>Avantajı:</strong> Güneş (hammadde) bedavadır. Kurulumdan sonra 20-25 yıl boyunca elektrik faturasından kurtulur ve üzerine pasif döviz/TL geliri elde edersiniz.</li>
        <li><strong>Dezavantajı:</strong> İlk kurulum (capex) maliyeti 10.000 - 15.000 Dolar gibi yüksek rakamlara çıkabilir. Yasal izin süreçleri yorucudur.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">17.</span> 
        Müzik, Beat ve Ses Efekti (Jingle) Telifleri
      </h2>
      <p>Müzisyenler veya ses prodüktörleri için yeteneklerini pasif gelire dönüştürmenin en iyi yoludur. YouTube videoları, belgeseller, reklamlar veya oyunlar için "No Copyright" arka plan müzikleri veya geçiş ses efektleri (whoosh, hit) üreterek bunları lisanslayabilirsiniz.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> FL Studio veya Ableton'da ürettiğiniz eserleri AudioJungle, Epidemic Sound veya Artlist gibi platformlara yükleyin.</li>
        <li><strong>Avantajı:</strong> Tıpkı fotoğrafçılık gibi, tek bir müzik parçası yıllar içinde binlerce kez satılabilir ve ömür boyu telif getirir.</li>
        <li><strong>Dezavantajı:</strong> Müzikal bir altyapı, kaliteli yazılım/donanım gerektirir. Sektördeki profesyonel rekabet çok yüksektir.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">18.</span> 
        E-Ticaret Depo Kiralama (Micro-Fulfillment)
      </h2>
      <p>Kullanmadığınız büyük bir boş alanınız, garajınız veya deponuz varsa, bunu e-ticaret yapan (Amazon, Trendyol satıcıları) küçük işletmelere ürün depolama ve paketleme (Fulfillment) alanı olarak kiralayabilirsiniz. Fiziksel gayrimenkulün ticari bir versiyonudur.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> Deponuzu güvenli, nemsiz ve raflı hale getirin. Çevrenizdeki e-ticaret KOBİ'lerine metrekare/palet bazında kiralama teklifleri sunun.</li>
        <li><strong>Avantajı:</strong> İnsanlarla konut kiralama stresi (kirayı ödemedi, evi yıprattı vb.) yaşamak yerine kurumsal ticari şirketlere hizmet verirsiniz.</li>
        <li><strong>Dezavantajı:</strong> Deponun sigortalanması, güvenliği (kamera, alarm) ve ürün sorumluluğu ekstra ciddiyet gerektirir.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">19.</span> 
        Lisans, İsim Hakları ve Franchising
      </h2>
      <p>Çok başarılı ve iyi markalaşmış bir kafe, temizlik şirketi veya yazılım işi kurduğunuzda, şubeleşip personel derdiyle uğraşmak yerine işletme modelinizi (Know-how) başkalarına satabilirsiniz. Bu fikri mülkiyetin pasif geliridir.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> İşletmenizin konseptini, tariflerini, tasarımını ve operasyonunu bir "Franchise El Kitabı" haline getirin ve isim hakkınızı yatırımcılara açın.</li>
        <li><strong>Avantajı:</strong> Başkalarının sermayesiyle sizin markanız büyür. Tüm operasyonu şube sahibi yapar, siz ciro üzerinden aylık %3-5 telif (Royalty) alırsınız.</li>
        <li><strong>Dezavantajı:</strong> Başarılı, kârlı ve ispatlanmış bir işletmeyi sıfırdan kurmak yıllar süren inanılmaz zorlu bir aktif mesai gerektirir.</li>
      </ul>

      <h2 style="margin-top: 50px; color: var(--gold-200); display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2.5rem; color: var(--gold-400); opacity: 0.5; font-weight: 800; font-family: var(--font-body);">20.</span> 
        Abonelik Tabanlı Bültenler (Substack/Patreon)
      </h2>
      <p>Eğer teknoloji, borsa analizleri, yapay zeka veya spesifik bir sektör hakkında derinlemesine, kimsenin bulamayacağı öngörüler üretebiliyorsanız, Substack üzerinden ücretli bir e-posta bülteni başlatabilirsiniz. Entelektüel bilginizi doğrudan nakde çevirmenin modern yoludur.</p>
      <ul>
        <li><strong>Nasıl Başlanır?</strong> Önce LinkedIn veya X (Twitter) üzerinden bedava kaliteli içerik üreterek kitlenizi toplayın. Ardından "En değerli tüyoları ve analizleri haftalık bültenimde 5$ karşılığında paylaşıyorum" diyerek Substack'e yönlendirin.</li>
        <li><strong>Avantajı:</strong> Düzenli, öngörülebilir ve aylık tekrarlayan (MRR) harika bir gelirdir. 1000 aboneniz olduğunda ayda 5.000$ kazanırsınız.</li>
        <li><strong>Dezavantajı:</strong> Tamamen pasif değildir. İnsanların aboneliği iptal etmemesi için her hafta o yüksek kaliteli içeriği araştırıp yazmak zorundasınız.</li>
      </ul>
      
`;

fs.writeFileSync(filePath, before + replacement + after, 'utf8');
console.log("SUCCESS!");
