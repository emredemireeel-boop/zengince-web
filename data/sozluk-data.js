'use strict';

const SOZLUK_TERIMLERI = [
  {
    slug: 'aciga-satis-short-selling',
    terim: 'Açığa Satış (Short Selling)',
    kategori: 'Borsa & Yatırım',
    kisaTanim: 'Sahip olunmayan bir hisse senedini ödünç alıp satarak, fiyat düştüğünde daha ucuza yerine koyma ve aradaki farktan kâr etme stratejisi.',
    detay: `
      <p>Açığa satış (Short Selling), finansal piyasalarda yatırımcıların bir varlığın fiyatının <strong>düşeceğine</strong> dair bahis oynadığı agresif bir yatırım stratejisidir. Geleneksel yatırımcılar "ucuzdan al, pahalıdan sat" mantığıyla çalışırken, açığa satış yapanlar "pahalıdan sat, ucuzdan al" mantığıyla çalışır.</p>
      
      <h3 style="margin-top: 30px; color: var(--gold-200);">Nasıl Çalışır?</h3>
      <p>Diyelim ki X şirketinin hissesi şu an 100 TL ve siz şirketin kötü bir bilanço açıklayacağını, hissenin düşeceğini düşünüyorsunuz.</p>
      <ol>
        <li>Aracı kurumunuzdan X şirketine ait 1.000 adet hisseyi (size ait olmayan) <strong>ödünç alırsınız</strong>.</li>
        <li>Bu hisseleri piyasada anında 100 TL'den satarsınız. (Cebinize 100.000 TL nakit girer, ancak kuruma 1.000 hisse borçlusunuzdur).</li>
        <li>Tahmininiz doğru çıkar ve bir ay sonra hisse fiyatı 60 TL'ye düşer.</li>
        <li>Piyasadan 60 TL'ye 1.000 adet hisseyi geri satın alırsınız (Cebinizden 60.000 TL çıkar).</li>
        <li>Aracı kuruma baştaki 1.000 adet hisse borcunuzu iade edersiniz.</li>
        <li><strong>Sonuç:</strong> 100.000 TL gelir, 60.000 TL gider. Aradaki 40.000 TL sizin net kârınızdır.</li>
      </ol>

      <h3 style="margin-top: 30px; color: var(--gold-200);">En Büyük Riski (Sonsuz Kayıp)</h3>
      <p>Normal bir hisse satın aldığınızda, hisse sıfıra düşse bile en fazla yatırdığınız parayı (%100'ünü) kaybedersiniz. Ancak açığa satışta zarar potansiyeli <strong>matematiksel olarak sonsuzdur.</strong> Eğer hisse fiyatı 100 TL'den 1.000 TL'ye çıkarsa, o hisseleri kuruma geri vermek için her fiyattan almak zorunda kalırsınız ve yatırdığınız paranın katbekat fazlasını kaybedebilirsiniz. (Bkz: Porsche - Volkswagen Short Squeeze veya GameStop olayı).</p>
    `,
    ilgiliTerimler: ['Kaldiracli Islem', 'Hedge Fon', 'Ayı Piyasası']
  },
  {
    slug: 'bilesik-faiz-compound-interest',
    terim: 'Bileşik Faiz (Compound Interest)',
    kategori: 'Temel Finans',
    kisaTanim: 'Hem anaparanın hem de önceki dönemlerde kazanılmış olan faizlerin üzerinden hesaplanan faizdir. "Faizin faiz getirmesi" olarak bilinir.',
    detay: `
      <p>Bileşik faiz, Albert Einstein'ın "Dünyanın 8. harikası" olarak adlandırdığı söylenen, küçük birikimleri yıllar içinde devasa servetlere dönüştüren finansal bir güçtür. Paranızın kendi kendine para doğurma sürecidir.</p>
      
      <h3 style="margin-top: 30px; color: var(--gold-200);">Basit Faiz vs. Bileşik Faiz</h3>
      <p>10.000 TL'yi yıllık %10 getiri ile yatırdığınızı varsayalım:</p>
      <ul>
        <li><strong>Basit Faiz:</strong> Her yıl sadece anapara (10.000 TL) üzerinden 1.000 TL faiz alırsınız. 20 yılın sonunda toplam 30.000 TL'niz olur. Kazanç tamamen doğrusaldır.</li>
        <li><strong>Bileşik Faiz:</strong> İlk yıl 1.000 TL kazanırsınız ve toplamınız 11.000 TL olur. Ancak ikinci yıl, %10'luk getiri 10.000 üzerinden değil, 11.000 üzerinden (anapara + ilk yılın faizi) hesaplanır. Yani 2. yıl kazancınız 1.100 TL olur. 20 yılın sonunda (kazanılan faizler anaparaya eklenerek büyüdüğü için) paranız yaklaşık <strong>67.275 TL</strong> olur!</li>
      </ul>

      <h3 style="margin-top: 30px; color: var(--gold-200);">Bileşik Faizin En Büyük Dostu: Zaman</h3>
      <p>Bileşik faiz grafiklerine bakıldığında büyüme ilk yıllarda yavaş ve düz gibidir. Asıl "patlama" (hokey sopası eğrisi) uzun yıllar sonra başlar. Bu yüzden yatırım yapmaya 20 yaşında başlamakla 30 yaşında başlamak arasındaki fark ufak bir rakam değil, kelimenin tam anlamıyla milyonlarca liradır.</p>
    `,
    ilgiliTerimler: ['Enflasyon', 'Temettü Verimi', 'Pasif Gelir']
  },
  {
    slug: 'ebitda-favok',
    terim: 'EBITDA (FAVÖK)',
    kategori: 'Kurumsal Finansman',
    kisaTanim: 'Faiz, Amortisman ve Vergi Öncesi Kâr. Bir şirketin operasyonel nakit üretme gücünü gösteren en temel metriklerden biridir.',
    detay: `
      <p>EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization), Türkçe karşılığıyla <strong>FAVÖK</strong> (Faiz, Amortisman ve Vergi Öncesi Kâr), yatırımcıların ve analistlerin bir şirketi değerlerken en çok kullandıkları bilanço göstergelerinden biridir.</p>
      
      <h3 style="margin-top: 30px; color: var(--gold-200);">Neden Net Kâr Yerine EBITDA Kullanılır?</h3>
      <p>İki farklı şirketi karşılaştırdığınızı düşünün. Biri çok borçludur (çok faiz öder), diğeri borçsuzdur. Biri farklı bir vergi rejimine tabidir, diğeri bambaşka. Eğer sadece "Net Kâr"a bakarsanız, borçlu veya farklı vergi dilimindeki şirketin asıl "iş yapma becerisini" doğru göremezsiniz.</p>
      <p>EBITDA; vergi, kredi faizi gibi "finansal ve yasal" yükleri tablodan çıkartır. Sadece şirketin "Çekirdek Operasyonunun" (örneğin ayakkabı üretip satmanın) kendi başına ne kadar para ürettiğine odaklanır.</p>

      <h3 style="margin-top: 30px; color: var(--gold-200);">Tehlikesi Nedir?</h3>
      <p>Warren Buffett, EBITDA rakamlarından nefret etmesiyle ünlüdür. Çünkü "Amortismanları" (yani eskimiş bir fabrikayı veya yazılımı yenilemek için harcanması gereken gerçek parayı) hesaba katmaz. Bir şirket çok yüksek EBITDA açıklayabilir ancak makineleri paslanmak üzere olduğu için gelecek yıl devasa bir sermaye harcaması yapmak zorunda kalabilir.</p>
    `,
    ilgiliTerimler: ['Net Kar', 'Nakit Akışı (Cash Flow)', 'LBO (Leveraged Buyout)']
  },
  {
    slug: 'fiat-para',
    terim: 'Fiat Para (İtibari Para)',
    kategori: 'Makroekonomi',
    kisaTanim: 'Altın veya gümüş gibi fiziksel bir varlık tarafından desteklenmeyen, değerini sadece hükümetin yasal bir ödeme aracı olarak kabul etmesinden (ve halkın güveninden) alan para birimi.',
    detay: `
      <p>Cebinizdeki Dolar, Euro, Türk Lirası veya Yen... Bunların tamamı "Fiat" paradır. Fiat kelimesi Latince'de "Öyle olsun" veya "Kararname" anlamına gelir. Yani devlet bir kağıt parçasına basarak "Bu 100 değerindedir" der ve öyle olur.</p>
      
      <h3 style="margin-top: 30px; color: var(--gold-200);">Geçmişte Nasıldı? (Altın Standardı)</h3>
      <p>1971 yılına kadar ABD Doları doğrudan altına endeksliydi. (Bretton Woods sistemi). 35 ABD Doları her zaman 1 ons altına eşitti. Yani devlet kafasına göre sınırsız dolar basamazdı; kasasındaki altın kadar basabilirdi. O dönemdeki paralar, birer "borç senedi" değil, kasadaki altının birer makbuzuydu.</p>

      <h3 style="margin-top: 30px; color: var(--gold-200);">Modern Fiat Sisteminin Sorunu</h3>
      <p>1971'de Başkan Nixon "Altın standardını" iptal ettiğinden beri dünya fiat para sistemiyle işlemektedir. Devletler veya Merkez Bankaları, herhangi bir karşılık (altın vb.) göstermeksizin istedikleri kadar para basabilirler (Para Arzı - Money Supply). Sınırsız basılabilen her şeyin değeri matematiksel olarak düşmeye mahkumdur. İşte bu "gizli vergi"ye Enflasyon denir.</p>
      <p>Zenginlerin nakit para yerine sürekli gayrimenkul, hisse senedi veya Bitcoin gibi "Sınırlı/Üretimi Zor Varlıklara" (Hard Assets) yatırım yapmasının temel sebebi, Fiat paranın zamanla eriyen bir buz küpü olduğunu bilmeleridir.</p>
    `,
    ilgiliTerimler: ['Enflasyon', 'Altın Standardı', 'Kripto Para']
  },
  {
    slug: 'kaldirac-leverage',
    terim: 'Kaldıraç (Leverage)',
    kategori: 'Finansal Strateji',
    kisaTanim: 'Başkalarının parasını, zamanını veya emeğini kullanarak kendi özkaynağınızın çok ötesinde pozisyon alma ve getiri potansiyelini katlama sanatı.',
    detay: `
      <p>Kaldıraç (Leverage), zenginliğin temel yapı taşlarından biridir. Fizikte olduğu gibi finansta da kaldıraç, ufak bir kuvvet uygulayarak devasa yükleri kaldırmanızı sağlar.</p>
      
      <h3 style="margin-top: 30px; color: var(--gold-200);">Finansal Kaldıraç (Borç ile Büyümek)</h3>
      <p>1 Milyon TL nakdiniz var. Bu parayla 1 Milyon TL'lik bir ev alırsanız kaldıraç kullanmamış olursunuz. Ev %20 değer kazanırsa 200 Bin TL kâr edersiniz (%20 getiri).</p>
      <p>Ancak, 1 Milyon TL nakdinizle bankadan 4 Milyon TL kredi çekip, <strong>5 Milyon TL'lik</strong> bir ev aldığınızı varsayalım. Eğer bu ev %20 değer kazanırsa (5 Milyon -> 6 Milyon), elde ettiğiniz kâr 1 Milyon TL olur. Kendi koyduğunuz özsermaye sadece 1 Milyon TL olduğu için, paranızı %100 oranında katlamış olursunuz! Bu, borcun kaldıraç etkisidir.</p>

      <h3 style="margin-top: 30px; color: var(--gold-200);">Kaldıracın Karanlık Yüzü</h3>
      <p>Warren Buffett'ın dediği gibi: <em>"Zeki insanları iflasa sürükleyen 3 şey vardır: Likör, kadınlar ve kaldıraç."</em></p>
      <p>Kaldıraç kârı katladığı gibi zararı da katlar. Eğer o 5 Milyonluk ev %20 değer kaybederse, 4 Milyona düşer. Sizin koyduğunuz 1 Milyon TL sermayenin tamamı silinir (%100 zarar) ve bankaya devasa faiz ödemekle baş başa kalırsınız. 2008 Küresel Krizi, tamamen aşırı kullanılmış finansal kaldıraçların patlamasıyla oluşmuştur.</p>
      
      <h3 style="margin-top: 30px; color: var(--gold-200);">Modern Kaldıraç Türleri</h3>
      <p>Borç dışında modern zamanların en tehlikesiz ve güçlü kaldıraçları <strong>Kod ve Medya</strong>dır. Bir yazılımı 1 kişi için yazmakla 10 milyon kişi için kopyalamak arasında ekstra bir maliyet (marjinal maliyet) yoktur. Bu yüzden yazılımcılar ve içerik üreticileri asimetrik olarak çok zenginleşmektedir.</p>
    `,
    ilgiliTerimler: ['LBO (Leveraged Buyout)', 'Marjin Çağrısı', 'İyi Borç']
  },
  {
    slug: 'lbo-kalkiracli-satin-alma',
    terim: 'LBO (Kaldıraçlı Satın Alma)',
    kategori: 'Şirket Birleşmeleri',
    kisaTanim: 'Bir şirketi satın alırken, paranın çok büyük bir kısmını borçlanarak (krediyle) bulmak ve bu kredi borcunu doğrudan satın alınan şirketin sırtına yükleme operasyonu.',
    detay: `
      <p>LBO (Leveraged Buyout), Wall Street'in Özel Sermaye Fonları (Private Equity) tarafından sıklıkla kullanılan "başkalarının parasıyla şirket alma" oyunudur.</p>
      
      <h3 style="margin-top: 30px; color: var(--gold-200);">Nasıl Yapılır?</h3>
      <p>Diyelim ki 100 Milyon Dolarlık istikrarlı bir şirket var.</p>
      <ol>
        <li>Özel sermaye fonu masaya kendi cebinden sadece 20 Milyon Dolar koyar.</li>
        <li>Kalan 80 Milyon Doları devasa bankalardan kredi (borç) olarak alır.</li>
        <li>Şirketi satın alır almaz, çekilen 80 Milyon Dolarlık banka kredisi borcunu ve faizini doğrudan "şirketin kendi bilançosuna" transfer eder. (Şirketin varlıklarını ipotek gösterir).</li>
        <li>Şirket artık kazandığı tüm kârı, yeni sahibinin onu alırken çektiği kredinin faizini ödemek için bankalara yollar.</li>
        <li>Birkaç yıl sonra, şirket biraz toparlanırsa fon bu şirketi 150 Milyon Dolara satar. Kendi koyduğu 20 Milyon Doları birkaç yıl içinde katlar.</li>
      </ol>

      <h3 style="margin-top: 30px; color: var(--gold-200);">Sonuçları Nelerdir?</h3>
      <p>LBO operasyonları, satın alınan şirketin nakit akışını adeta bir parazit gibi emer. Şirketin tüm kârı AR-GE'ye, işçilere veya mağaza yenilemelerine gitmek yerine banka faizlerine gider. Çoğu devasa perakende zinciri (örneğin Toys "R" Us veya Sears), bir LBO kurbanı olmuş, aşırı borç yükünün altında kalarak iflas etmiştir.</p>
    `,
    ilgiliTerimler: ['EBITDA (FAVÖK)', 'Açığa Satış (Short Selling)', 'Kaldıraç (Leverage)']
  },
  {
    slug: 'temettu-dividend',
    terim: 'Temettü (Dividend)',
    kategori: 'Borsa & Yatırım',
    kisaTanim: 'Bir şirketin elde ettiği net kârın belirli bir kısmını hissedarlarına (ortaklarına) nakit olarak dağıtmasıdır.',
    detay: `
      <p>Temettü (Kâr Payı), borsa yatırımcılarının hisse senedi alırken fiyatın yükselmesi dışında para kazanmalarının en temel ikinci yoludur. Bir hisse senedi alarak şirkete ortak olursunuz; şirket para kazandığında bu kârı sizinle paylaşır.</p>
      
      <h3 style="margin-top: 30px; color: var(--gold-200);">Nasıl Çalışır?</h3>
      <p>Eğer Coca-Cola hissesinden 1.000 adet aldıysanız ve Coca-Cola o yıl hisse başına 2 Dolar temettü dağıtma kararı alırsa, hisse fiyatı hiç değişmese (hatta düşse bile) cebinize 2.000 Dolar nakit para girer. Bu para doğrudan banka hesabınıza yatar.</p>

      <h3 style="margin-top: 30px; color: var(--gold-200);">Zenginlikteki Rolü: Temettü Kartopu Etkisi</h3>
      <p>Finansal özgürlüğün sırrı, aldığınız bu temettü nakdini harcamak yerine <strong>tekrar o şirketin hissesini almak için</strong> kullanmaktır (DRIP - Dividend Reinvestment Plan). Böylece ertesi yıl daha fazla hisseniz olur, daha fazla temettü alırsınız. Bu süreç bir kar topu gibi yıllarca büyür ve bileşik faizin mucizesini çalıştırır.</p>
      
      <h3 style="margin-top: 30px; color: var(--gold-200);">Her Şirket Temettü Verir mi?</h3>
      <p>Hayır. Özellikle teknoloji şirketleri (örneğin Amazon, Tesla, Meta) yıllarca temettü vermemiştir. Çünkü bu şirketler kazandıkları parayı hissedarlara dağıtmak yerine, yapay zeka veya yeni sunucular almak için "şirketin içine" (AR-GE) geri yatırmayı tercih ederler ki şirket daha çok büyüsün. Genelde büyümesini tamamlamış, köklü, "nakit ineği" olarak adlandırılan şirketler (Bankalar, Telekom şirketleri, FMCG markaları) düzenli temettü öderler.</p>
    `,
    ilgiliTerimler: ['Bileşik Faiz (Compound Interest)', 'Nakit Akışı (Cash Flow)', 'EBITDA (FAVÖK)']
  },
  {
    slug: 'marjin-cagrisi-margin-call',
    terim: 'Marjin Çağrısı (Margin Call)',
    kategori: 'Borsa & Yatırım',
    kisaTanim: 'Kaldıraçlı veya kredili işlem yapan bir yatırımcının hesabındaki teminat miktarının kritik seviyenin altına düşmesi sonucu, aracı kurumun "Acil para yatır yoksa pozisyonunu zararına kapatacağım" uyarısı.',
    detay: `
      <p>Finans dünyasının en korkutucu uyarılarından biridir. Yatırımcıların telefonlarının ter içinde kalmasına sebep olur.</p>
      
      <h3 style="margin-top: 30px; color: var(--gold-200);">Olayın Mantığı</h3>
      <p>Kaldıraçlı işlem yaparken aracı kuruma belirli bir miktar para yatırırsınız (Buna Marjin veya Teminat denir). Örneğin cebinizdeki 10.000 Doları teminat göstererek kurumdan krediyle 100.000 Dolarlık Bitcoin aldınız.</p>
      <p>Eğer Bitcoin düşmeye başlarsa, aracı kurum kurum kendi verdiği kredinin risk altına girmesine izin vermez. Zarar 8.000 Dolara ulaştığında (yani cebinizdeki 10.000 Dolarlık teminatınız erimek üzereyken), kurum size telefon açar (veya mail atar):</p>
      <p><em>"Sayın yatırımcı, Margin Call yemiş bulunmaktasınız. Hesabınızdaki teminat sınırın altına düştü. Hemen 5.000 Dolar nakit eklemezseniz, tüm zararınızı kesinleştirip Bitcoinlerinizi otomatik olarak (Liquidate) satacağız."</em></p>

      <h3 style="margin-top: 30px; color: var(--gold-200);">Piyasaları Çökerten Domino Etkisi</h3>
      <p>Piyasalar aniden ve sert bir şekilde düşmeye başladığında yüz binlerce yatırımcı aynı anda Margin Call yer. Birçoğunun hesaba yatıracak ekstra nakdi olmadığı için aracı kurumlar herkesin malını aynı anda zorla ve panikle satmaya başlar. Herkes satmaya zorlandığı için fiyatlar daha da düşer, daha çok kişi Margin Call yer. 2008 krizi, 2020 Pandemi çöküşü ve kriptodaki ani çöküş şelaleleri tamamen bu "Marjin Patlaması" zincirleme reaksiyonuyla oluşur.</p>
    `,
    ilgiliTerimler: ['Kaldıraç (Leverage)', 'Açığa Satış (Short Selling)', 'Fiat Para']
  }
];

const SOZLUK_KATEGORILERI = {
  'Borsa & Yatırım': { renk: '#3498DB', emoji: '📈' },
  'Temel Finans': { renk: '#2ECC71', emoji: '🏛️' },
  'Kurumsal Finansman': { renk: '#9B59B6', emoji: '🏢' },
  'Makroekonomi': { renk: '#E74C3C', emoji: '🌍' },
  'Finansal Strateji': { renk: '#F1C40F', emoji: '♟️' },
  'Şirket Birleşmeleri': { renk: '#34495E', emoji: '🤝' }
};

module.exports = { SOZLUK_TERIMLERI, SOZLUK_KATEGORILERI };
