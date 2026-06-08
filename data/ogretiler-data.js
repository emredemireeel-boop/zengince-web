'use strict';

const OGRETILER = [
  {
    slug: 'bilesik-faiz-gucu',
    baslik: 'Bileşik Faizin Büyüsü',
    altBaslik: 'Dünyanın 8. Harikası',
    ikon: '📈',
    kategori: 'temel',
    kisa: 'Albert Einstein\'ın "dünyanın 8. harikası" dediği bileşik faiz, küçük birikimleri devasa servetlere dönüştüren matematiksel mucizedir.',
    detay: `Bileşik faiz, kazancınızın da kazanç üretmeye başladığı noktadır. Zaman en büyük kaldıracınızdır. Warren Buffett servetinin %99'unu 50 yaşından sonra kazandı.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Bileşik faiz (Compound Interest), lineer düşünen insan beyninin kavramakta en çok zorlandığı matematiksel anomalidir. Paranızın sadece bir kez değil, kendi yarattığı "yavrular" üzerinden de sınırsızca para doğurmasıdır.</p>
      
      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Kar Topu Etkisi (Snowball Effect)</h2>
      <p style="margin-bottom: 20px;">Zirveden yuvarlanan küçük bir kar topunu hayal edin. Başlangıçta o kadar küçüktür ki, topladığı kar miktarı gözle görülmez. Ancak aşağı indikçe yüzey alanı büyür ve her tam tur dönüşünde, bir önceki turda topladığından çok daha fazla karı bünyesine katar. Finansal dünyada bu "yüzey alanı" anaparanız, "tur" ise zamandır.</p>
      
      <p style="margin-bottom: 20px;">10.000 Doları yıllık %10 getiri ile yatırırsanız, ilk yıl 1.000 Dolar kazanırsınız. İkinci yıl getiri oranınız hala %10'dur ancak artık 10.000 üzerinden değil, 11.000 Dolar üzerinden hesaplanır ve 1.100 Dolar kazanırsınız. Bu 100 Dolarlık fark başlangıçta önemsiz görünse de, denklem 20. veya 30. yıla ulaştığında grafik bir "hokey sopası" gibi aniden dikleşerek stratosfere çıkar.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Warren Buffett Anomalisi:</strong> Dünyanın en büyük yatırımcılarından Warren Buffett'ın net serveti bugün 130 Milyar Doların üzerindedir. Ancak insanların %99'unun bilmediği sarsıcı gerçek şudur: <strong>Buffett bu servetinin %99'unu 50 yaşından SONRA kazanmıştır.</strong> 11 yaşında yatırıma başlayan Buffett, 70 yıl boyunca bileşik faizin formülünü kesintisiz çalıştırmış ve o amansız "hokey sopası" eğrisinin ucunu yakalamıştır.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Zaman: En Acımasız Çarpan</h3>
      <p style="margin-bottom: 20px;">Matematiksel formülde <code style="background:rgba(0,0,0,0.5); padding: 2px 6px; border-radius: 4px;">A = P(1 + r/n)^(nt)</code> yer alan 't' (zaman) bir değişkendir ancak üs konumundadır. Bu yüzden 20 yaşında yatırıma başlayan biri ile 30 yaşında başlayan biri arasındaki fark "10 yıl" değil, yüz binlerce dolardır. Yoksullar zamanı satarak para kazanır; zenginler ise zamanı parayı katlamak için bir silah olarak kullanır.</p>
    `,
    altin_kural: 'Ne kadar erken başlarsanız, bileşik faiz o kadar çok sizin için çalışır.',
    rakamlar: [
      { etiket: 'Buffett Serveti', deger: '$130 Milyar+' },
      { etiket: '50 yaş sonrası', deger: '%99' },
      { etiket: 'İlk yatırım yaşı', deger: '11' }
    ]
  },
  {
    slug: '80-20-kurali',
    baslik: '80/20 Kuralı (Pareto Prensibi)',
    altBaslik: 'Az ile Çoğu Elde Et',
    ikon: '⚖️',
    kategori: 'strateji',
    kisa: 'Sonuçların %80\'i, çabaların %20\'sinden gelir. Bu evrensel prensip, enerjinizi nereye yönlendireceğinizi belirler.',
    detay: `Tüm fırsatları kovalamak yerine, en yüksek getirili %20'ye odaklanın. "Hayır" demek, en güçlü zenginlik aracınızdır.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">İtalyan ekonomist Vilfredo Pareto'nun 1896'da bahçesindeki bezelyelerin %80'inin, ektiği tohumların sadece %20'sinden çıktığını fark etmesiyle başlayan bu keşif, evrenin en asimetrik ve acımasız kanunudur: Girdiler ve çıktılar eşit dağılmaz.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">İş Dünyasının Görünmez Yasası</h2>
      <p style="margin-bottom: 20px;">Ortalama bir insanın zihni doğrusaldır (lineer). 10 saat çalışırsan 10 birim kazanırsın, 20 saat çalışırsan 20 birim kazanırsın sanır. Oysa gerçek milyarderler dünyasında bu durum tam tersidir. Apple'ın devasa kârının %80'i, yüzlerce ürün arasından sadece iPhone'dan (ürünlerin %20'sinden daha azı) gelir.</p>
      
      <p style="margin-bottom: 20px;">Bir iş kurduğunuzda, müşterilerinizin %20'si toplam cironuzun %80'ini oluşturur. Daha da kötüsü, müşteri destek departmanınızın uğraştığı sorunların %80'ini, size en az para kazandıran o toksik müşterilerin %20'si yaratır. Zenginler bu asimetriyi bildikleri için <strong>kötü müşteriyi kovmaktan</strong> çekinmezler.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>"Hayır" Demenin Matematiksel Gücü:</strong> Warren Buffett'a göre Steve Jobs'un en büyük dehası, Apple'a döndüğünde üretimdeki 350 farklı ürünü 10'a indirmesidir. Pareto prensibinin ustaları, zamanlarının %80'ini çalan ama sadece %20 getiri sağlayan tüm o verimsiz toplantılara, projelere ve insanlara acımasızca "Hayır" derler.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Zenginlik Uygulaması</h3>
      <p style="margin-bottom: 20px;">Günlük hayatınızda şu acımasız soruyu sorun: <em>"Bana en büyük finansal ve mental getiriyi sağlayan o %20'lik faaliyetim nedir?"</em> Geri kalan %80'lik kısmı ya tamamen silin (delete), ya delege edin (outsource) ya da otomatize edin. Gücünüzü lazer gibi o daracık %20'ye odakladığınızda, rakipleriniz sizin nasıl bu kadar hızlı büyüdüğünüze anlam veremeyecektir.</p>
    `,
    altin_kural: 'Her şeyi yapmaya çalışmak, hiçbir şeyi tam yapamamamak demektir.',
    rakamlar: [
      { etiket: 'Sonuçların', deger: '%80' },
      { etiket: 'Çabadan', deger: '%20' },
      { etiket: 'Verimlilik', deger: '4x Artış' }
    ]
  },
  {
    slug: 'varlik-vs-yukumluluk',
    baslik: 'Varlık vs Yükümlülük',
    altBaslik: 'Zenginliğin Temel Denklemi',
    ikon: '💎',
    kategori: 'temel',
    kisa: 'Zenginler varlık satın alır, yoksullar yükümlülük satın alıp varlık sanır. Bu fark, zenginliğin DNA\'sıdır.',
    detay: `Varlık cebinize para koyar, yükümlülük cebinizden para alır. Zenginler önce varlık alır, o varlıklar da lüksleri öder.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Zengin Baba Yoksul Baba kitabının yazarı Robert Kiyosaki, finansal dünyanın en kafa karıştırıcı kavramlarını iki basit cümleye indirgemiştir: Varlık (Asset) cebinize para koyan şeydir. Yükümlülük (Liability) ise cebinizden para alan şeydir.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Orta Sınıfın En Büyük Yanılgısı</h2>
      <p style="margin-bottom: 20px;">Ortalama bir insan maaşı arttığında, anında gidip 3 milyon liralık bir araba veya kredisi 30 yıl sürecek büyük bir ev satın alır. Bunları "en büyük varlıklarım" olarak adlandırır. Oysa gerçek finansal mühendislikte, içinde oturduğunuz ev veya kapınızdaki araba bir <strong>Yükümlülük</strong>tür.</p>
      
      <p style="margin-bottom: 20px;">Neden mi? Çünkü o araba her ay benzin, sigorta, bakım, kasko ve vergi masrafı çıkararak cebinizden nakit çeker (Cash Outflow). İçinde oturduğunuz ev, emlak vergisi ve aidat ödetir; size her ay kira geliri getirmez. Oysa bir dükkan alıp kiraya verdiğinizde, o dükkan her ay banka hesabınıza para pompalar (Cash Inflow). İşte o bir Varlıktır.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Sıra Dışı Zenginlik Akışı:</strong> Yoksullar maaşlarını alıp direkt harcarlar. Orta sınıf, maaşını alıp lüks arabalar ve kredi kartı borçları (yükümlülükler) alır. Zenginler ise maaşlarını veya gelirlerini sadece ve sadece VARLIK (hisse senedi, tahvil, gayrimenkul, iş) satın almak için kullanırlar. Bir gün o lüks arabayı alacaklarsa bile, parayı kendi ceplerinden değil, <strong>o varlıkların ürettiği kâr (temettü/kira) ile</strong> alırlar.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Kişisel Bilançonuzu İnceleyin</h3>
      <p style="margin-bottom: 20px;">Gerçek servetinizi görmek için evinizi ve arabanızı hesaplamadan çıkarın. Geriye kalan ve sizin hiçbir efor sarf etmenize gerek kalmadan, siz uyurken bile size nakit akışı üreten sistemleriniz (dijital ürünleriniz, hisseleriniz, gayrimenkulleriniz) var mı? Cevap hayırsa, dünyanın en lüks evinde bile yaşasanız, "bordro kölesi"siniz demektir.</p>
    `,
    altin_kural: 'Lüks eşyalarınızı maaşınızla değil, yatırımlarınızın getirisiyle ödeyin.',
    rakamlar: [
      { etiket: 'Varlık Tanımı', deger: '+ Nakit Akışı' },
      { etiket: 'Yükümlülük', deger: '- Nakit Çıkışı' },
      { etiket: 'Zenginlik Testi', deger: 'Uyurken Kazan' }
    ]
  },
  {
    slug: 'gelir-akislari',
    baslik: '7 Gelir Akışı',
    altBaslik: 'Milyonerlerin Sırrı',
    ikon: '🌊',
    kategori: 'strateji',
    kisa: 'Ortalama bir milyonerin 7 farklı gelir akışı vardır. Tek gelir kaynağına bağımlılık, finansal en büyük risktir.',
    detay: `Gelir kaynaklarınızı çeşitlendirerek finansal kalenizin surlarını aşılmaz hale getirin.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Bir masanın tek bir bacağı varsa, o bacak kırıldığında masa devrilir. Ancak bir masanın yedi bacağı varsa, üçü kırılsa dahi o masa ayakta kalmaya devam eder. Ortalama bir milyonerin IRS (ABD Vergi Dairesi) kayıtlarına göre tam olarak 7 farklı gelir akışı vardır.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Gelirin Anatomisi</h2>
      <p style="margin-bottom: 20px;">Milyonerler parayı tek bir kaynaktan, yani patronlarının iki dudağının arasından gelecek bir maaştan (Earned Income) beklemezler. Gelir portföylerini tıpkı bir yatırım portföyü gibi çeşitlendirirler:</p>
      
      <ul style="color: var(--text-secondary); font-size: 1.15rem; line-height: 1.8; margin-bottom: 24px;">
        <li><strong>Kazanılmış Gelir (Maaş):</strong> İlk basamaktır. Sermaye biriktirmek için kullanılır.</li>
        <li><strong>Kâr Geliri (Ticaret):</strong> Al-sat veya e-ticaret yapılarak elde edilen operasyonel kâr.</li>
        <li><strong>Faiz Geliri:</strong> Banka mevduatı, Hazine Bonosu veya borç vermeden risksiz sağlanan nakit.</li>
        <li><strong>Kira Geliri:</strong> Gayrimenkul, arsa veya araç kiralayarak sağlanan düzenli aylık akış.</li>
        <li><strong>Temettü Geliri:</strong> Ortak olunan dev şirketlerin (Coca Cola, Apple vb.) her 3 ayda bir hesaba yatırdığı kâr payı.</li>
        <li><strong>Sermaye Kazancı:</strong> Alınan hissenin veya evin değerinin artıp satılmasıyla elde edilen "büyük vuruşlar".</li>
        <li><strong>Telif (Royalty) Geliri:</strong> Patentler, yazılımlar, kitaplar veya YouTube videolarından gelen "bir kere yap, sonsuza kadar kazan" tipi gelirler.</li>
      </ul>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Sıfırdan Başlayanların Hatası:</strong> Finansal okuryazarlığı yeni keşfedenler, aynı anda 7 gelir akışını birden inşa etmeye çalışıp tükenmişlik sendromuna (Burnout) girerler. Gerçek strateji, bir akışı tamamen otomatize edip sorunsuz çalışır hale getirdikten SONRA ikincisine geçmektir. Odaklanmadan imparatorluk kurulmaz.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Damlaya Damlaya Göl Olur</h3>
      <p style="margin-bottom: 20px;">Yeni kurduğunuz bir gelir akışı (Örneğin bir e-kitap veya temettü) size ayda sadece 100 TL kazandırıyor olabilir. Bunu küçümsemeyin. O 100 TL, sizin zamanınızı satmadan kazandığınız, sistemi kanıtlanmış "Özgürlük Parası"dır. Sistemi buldunuz, geriye sadece o sisteme kaldıraç uygulamak ve ölçeklemek (Scale) kalmıştır.</p>
    `,
    altin_kural: 'Tek bir maaşa bağımlı olmak, finansal bir diktatörlükte yaşamaktır.',
    rakamlar: [
      { etiket: 'Ort. Akış', deger: '7 Farklı Yol' },
      { etiket: 'En Kırılgan', deger: 'Maaş Geliri' },
      { etiket: 'En Özgür', deger: 'Telif/Temettü' }
    ]
  },
  {
    slug: 'zenginlik-mindset',
    baslik: 'Zenginlik Zihniyeti',
    altBaslik: 'Düşüncen Servetini Belirler',
    ikon: '🧠',
    kategori: 'zihniyet',
    kisa: 'Zenginlik önce zihinde başlar. Para hakkındaki inançlarınız, banka hesabınızı doğrudan şekillendirir.',
    detay: `Zenginlik psikolojisi, rakamlardan çok daha güçlüdür. Kendinizi neye layık görüyorsanız, piyasa size onu öder.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Piyango kazananların %70'inin 5 yıl içinde kazandıklarından çok daha büyük bir borç batağıyla iflas ettiklerini biliyor muydunuz? Bunun sebebi, ceplerindeki rakamların değişmesine rağmen, zihinlerindeki "Termostatın" hala yoksulluğa ayarlı olmasıdır.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Para Bir İlizyondur, Gerçek Olan Yazılımdır</h2>
      <p style="margin-bottom: 20px;">T. Harv Eker, zihnimizi bir "Finansal Termostat"a benzetir. Eğer sizin zihninizdeki termostat 10.000 TL'ye ayarlıysa ve siz tesadüfen 100.000 TL kazanırsanız, bilinçaltınız panikler. O parayı kaybetmek, saçma sapan bir yere yatırmak veya lüks harcamalarla tüketmek için elinden geleni yapar; ta ki banka hesabınız o "güvenli hissettiği" 10.000 TL seviyesine düşene kadar.</p>
      
      <p style="margin-bottom: 20px;">Toplum, bize çocukluktan itibaren paranın kirli, zenginlerin ise zalim olduğunu aşılar. "Para ağaçta yetişmez", "Para tüm kötülüklerin anasıdır", "Namusuyla para kazanılmaz". Bu toksik yazılımlar beyninizde durduğu sürece, evren size hiçbir zaman büyük bir servet teslim etmeyecektir.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Sorumluluk İlkesi:</strong> Yoksul zihniyet her zaman şikayet eder, hükümeti suçlar, ekonomiyi suçlar, patronunu suçlar. Kurban rolündedir. Zengin zihniyet ise radikal bir sorumluluk alır. <em>"Eğer batıyorsam bu benim hatam, eğer çıkıyorsam bu benim eserim."</em> Mazeret üreten bir beynin para üretmesi biyolojik olarak imkansızdır.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Parayı Suçluluk Duymadan Sevmek</h3>
      <p style="margin-bottom: 20px;">Zenginlik zihniyeti, paranın ahlaki bir değer taşımadığına inanır. Para, sadece sizin insanlığa ne kadar fayda sağladığınızı (ne kadar büyük bir problem çözdüğünüzü) ölçen tarafsız bir cetveldir. İyi bir insanın elinde para hastane yapar, kötü bir insanın elinde savaş çıkarır. Parayı istemek, etki alanınızı genişletmek istemektir.</p>
    `,
    altin_kural: 'Bilinçaltı inançlarınız, tüm strateji ve taktikleri her zaman yenecektir.',
    rakamlar: [
      { etiket: 'Psikoloji', deger: '%80 Etken' },
      { etiket: 'Teknik Bilgi', deger: '%20 Etken' },
      { etiket: 'Mazeret', deger: 'Sıfır Toleras' }
    ]
  },
  {
    slug: 'pasif-gelir',
    baslik: 'Pasif Gelir İnşası',
    altBaslik: 'Uyurken Kazanın',
    ikon: '💤',
    kategori: 'strateji',
    kisa: 'Warren Buffett: "Uyurken para kazanmanın bir yolunu bulamazsanız, ölene kadar çalışırsınız." Pasif gelir, finansal özgürlüğün anahtarıdır.',
    detay: `Saat satmayı bırakıp, sistem inşa etmeyi öğrenmelisiniz.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Zaman, evrendeki en acımasız ve sınırlandırılmış kaynaktır. Ne kadar yetenekli, ne kadar zeki veya ne kadar motive olursanız olun, günde sadece 24 saatiniz var. Eğer geliriniz sadece bu saatleri satarak (maaş) elde ediliyorsa, gelirinizin matematiksel bir üst tavanı var demektir.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Sistem Mühendisliği</h2>
      <p style="margin-bottom: 20px;">Pasif gelir, sizin fiziksel varlığınızdan ve harcadığınız saatlerden "koparılmış" (decoupled) gelirdir. Siz uyurken, tatildeyken veya hastayken çalışmaya devam eden bir fabrikadır. Ancak internetteki kirli bilginin aksine, pasif gelir "kolay" veya "emek verilmeden" elde edilen bir gelir DEĞİLDİR.</p>
      
      <p style="margin-bottom: 20px;">Gerçekte, pasif gelir başlangıçta çok yüksek oranda <strong>Asimetrik Aktif Emek</strong> gerektirir. Bir YouTube kanalı kurmak, bir SaaS (Hizmet Olarak Yazılım) kodlamak veya temettü veren hisseler için başlangıç sermayesini biriktirmek yıllar süren ağır ve karşılıksız bir bedel ödemeyi gerektirir. Siz o "sistemi" (boruyu) inşa ederken hiç su akmaz. Ancak boru hattı tamamlandığında, ömür boyu suyunuz olur.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Boru Hattı Hikayesi:</strong> Bir köyde suya ihtiyaç vardır. İlk adam (Aktif Gelir), her gün nehirden kovalarla su taşır ve çok para kazanır. Ancak hastalandığında veya yaşlandığında parası kesilir. İkinci adam (Pasif Gelir), yıllarca tek kuruş kazanmadan şehre nehirden bir boru hattı döşer. Tamamlandığında musluğu açar; köye sınırsız su, kendisine de uyurken sınırsız para akar.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Dijital Gayrimenkul Devrimi</h3>
      <p style="margin-bottom: 20px;">Eskiden pasif gelir elde etmenin tek yolu devasa fabrikalar, apartmanlar veya tahviller satın almaktı. Milyonlarca dolar gerektirirdi. Bugün, "Dijital Gayrimenkuller" (Kod, Yazılım, Blog, YouTube Kanalı, Online Kurs) sayesinde sıfır sermaye ve sadece yüksek odaklanma ile kendi dijital boru hatlarınızı kurabilirsiniz. İnternet, tarihin en büyük pasif gelir demokratikleştiricisidir.</p>
    `,
    altin_kural: 'Maaşınız hayatta kalmanızı, yatırımlarınız ve pasif geliriniz özgürlüğünüzü finanse eder.',
    rakamlar: [
      { etiket: 'Başlangıç', deger: 'Sıfır Kazanç, Çok Emek' },
      { etiket: 'Sonuç', deger: 'Az Emek, Sonsuz Kazanç' },
      { etiket: 'Maliyet', deger: 'Sabır & Ter' }
    ]
  },
  {
    slug: 'kaldirac-gucu',
    baslik: 'Kaldıraç Gücü',
    altBaslik: 'Dünyayı Yerinden Oynatın',
    ikon: '⚡',
    kategori: 'strateji',
    kisa: 'Arşimet: "Bana yeterince uzun bir kaldıraç ve bir dayanak noktası verin, dünyayı yerinden oynatayım." Modern zenginlik, kaldıraç üzerine kuruludur.',
    detay: `Fizik kuralları finansta da geçerlidir. Kaldıraç, eforunuzu binlerce kat çarpan devasa bir güçtür.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Eğer bir taşı sadece kendi kas gücünüzle kaldırmaya çalışırsanız, limitiniz bellidir. Ancak altına uzun bir demir çubuk (kaldıraç) ve bir taş koyarsanız, kendi ağırlığınızın yüzlerce katını itebilirsiniz. Zenginler, hayatın her alanında kas gücü yerine bu "demir çubukları" ararlar.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Naval Ravikant'ın 4 Kaldıraç Sınıfı</h2>
      <p style="margin-bottom: 20px;">Silikon Vadisi'nin efsanevi meleği Naval Ravikant, servet yaratımını kaldıraçlar üzerinden 4'e ayırır:</p>
      <ul style="color: var(--text-secondary); font-size: 1.15rem; line-height: 1.8; margin-bottom: 24px;">
        <li><strong>1. Emek Kaldıracı:</strong> İnsanları sizin için çalıştırmaktır. (CEO olmak, ekip kurmak). En eski ve yönetmesi en stresli olan kaldıraçtır.</li>
        <li><strong>2. Sermaye Kaldıracı:</strong> Parayı kullanarak (borç/kredi veya yatırım) diğer paraları kazanmaktır. (Warren Buffett modeli). İşe yarar ama hata yaparsanız sizi sıfırlar.</li>
        <li><strong>3. Kod Kaldıracı:</strong> Uyurken sizin için binlerce işlem yapan, yorulmayan, sendika kurmayan "Yazılımlar". (Mark Zuckerberg modeli). Mükemmel ve sınırsızdır.</li>
        <li><strong>4. Medya Kaldıracı:</strong> Kitap, video, podcast veya tweet. İçeriği bir kere üretirsiniz, milyonlarca insana aynı anda kopyalanır (Joe Rogan modeli).</li>
      </ul>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>İzinsiz Kaldıraçlar (Permissionless Leverage):</strong> İlk iki kaldıraç (emek ve sermaye) için birinden "izin" almanız gerekir. İnsanların sizi takip etmesi veya bankanın size kredi vermesi şarttır. Ancak yeni çağın kaldıraçları olan Kod ve Medya <strong>izinsizdir</strong>. Bir yazılım kodlamak veya YouTube videosu çekmek için kimseden onay beklemezsiniz. Bu yüzden yeni nesil milyarderler genellikle kodlayıcılar veya medya dehalarıdır.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Asimetrik Etki Alanı</h3>
      <p style="margin-bottom: 20px;">Kaldıraçlı bir dünyada hatalarınız sizi yok edebilir, doğrularınız ise sizi efsane yapabilir. Ancak kaldıraç, modern ekonomide "çalışkanlık"tan çok daha önemlidir. Eğer ne kadar "çok" çalıştığınız önemli olsaydı, dünyanın en zenginleri günde 16 saat madende ter döken işçiler olurdu. Oysa zenginliği belirleyen eforun miktarı değil, uygulandığı kaldıracın uzunluğudur.</p>
    `,
    altin_kural: 'Kaldıracınız ne kadar büyükse, şans faktörüne o kadar az ihtiyaç duyarsınız.',
    rakamlar: [
      { etiket: 'Kod & Medya', deger: 'Sıfır Marjinal Maliyet' },
      { etiket: 'Sermaye', deger: 'Yüksek Risk / Getiri' },
      { etiket: 'Emek', deger: 'Zor Ölçeklenir' }
    ]
  },
  {
    slug: 'tasarruf-sanati',
    baslik: 'Tasarruf Sanatı',
    altBaslik: 'İlk Kuralı Öğrenin',
    ikon: '🏦',
    kategori: 'temel',
    kisa: 'Babil\'in en zengin adamının ilk kuralı: "Kazandığınızın en az onda birini kendinize ödeyin." Tasarruf, zenginliğin başlangıç noktasıdır.',
    detay: `Kazancınızın yüzde kaçını elinizde tuttuğunuz, zenginliğinizi belirleyen asıl metriktir.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Yüksek gelirli doktorların veya ünlü futbolcuların iflas haberlerini sıkça duyarsınız. Bunun sebebi basittir: Zenginlik, ne kadar kazandığınız değil, kazandığınız paradan ne kadarını koruyabildiğiniz ve yatırıma çevirebildiğinizdir.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Önce Kendinize Ödeyin Prensibi</h2>
      <p style="margin-bottom: 20px;">Orta sınıfın bütçe mantığı şöyledir: Maaşını alır; ev sahibine öder, kredi kartlarına öder, restorana öder, markete öder. Ay sonunda <em>kalırsa</em> yatırım yapmaya çalışır (ki genelde kalmaz). Buna "Artıktan tasarruf" denir.</p>
      
      <p style="margin-bottom: 20px;">Zengin zihniyet ise şu acımasız kuralı uygular: "Önce Kendine Öde". Maaş hesaba yattığı saniye, o paranın %20'si otomatik talimatla yatırım hesabına (hisseye, altına, fona) kesilir. Geriye kalan %80 ile yaşamak için çözüm bulunur. O %20 dokunulmazdır, sizin gelecekteki özgürlüğünüzün fidyedir.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Yaşam Tarzı Enflasyonu (Lifestyle Creep):</strong> Çoğu insanın zengin olamamasının 1 numaralı nedenidir. Maaşınız 30.000 TL iken 25.000 TL harcarsınız. Maaşınız 50.000 TL'ye çıkınca aniden arabanızı veya evinizi "yükseltir" ve harcamanızı da 45.000 TL'ye çıkarırsınız. Geliriniz arttıkça lüks algınız da aynı oranda artıyorsa, farenin koştuğu o tekerleğin (Rat Race) içinde ölene kadar koşmaya devam edersiniz.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Tasarruf Oranı (Savings Rate)</h3>
      <p style="margin-bottom: 20px;">Finansal dünyada ne zaman emekli olabileceğinizi belirleyen tek bir formül vardır: Tasarruf Oranınız. Eğer maaşınızın %10'unu tasarruf ediyorsanız, emekli olmak için yaklaşık 40 yıl çalışmanız gerekir. Ancak maaşınızın %50'sini tasarruf edip doğru yatırım yaparsanız, (Maaşınız asgari ücret dahi olsa) matematiksel olarak 15-17 yıl içinde çalışmak zorunda kalmayacak noktaya ulaşırsınız.</p>
    `,
    altin_kural: 'Tasarruf, gelecekteki özgürlüğünüzü bugünkü lükslerinizden daha çok sevmektir.',
    rakamlar: [
      { etiket: 'Minimum Alt Sınır', deger: 'Maaşın %10\'u' },
      { etiket: 'FIRE Oranı', deger: 'Maaşın %50\'si' },
      { etiket: 'Enflasyon', deger: 'Lüks Artışı' }
    ]
  },
  {
    slug: 'deger-yaratma',
    baslik: 'Değer Yaratma Sanatı',
    altBaslik: 'Para, Çözülen Sorunların Ölçüsüdür',
    ikon: '🎨',
    kategori: 'zihniyet',
    kisa: 'Para, topluma sunduğunuz değerin bir yansımasıdır. Daha çok para kazanmak istiyorsanız, daha çok insanın sorununu çözün.',
    detay: `Piyasa adaletsiz değildir, sadece sizin ona sunduğunuz değeri fiyatlar.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Maaşınızın adaletsiz olduğunu düşündüğünüzde unutmayın: Piyasa sizin ne kadar iyi bir insan olduğunuza, ne kadar yorulduğunuza veya ailenizin ne kadar masrafı olduğuna bakmaz. Piyasa sadece çözdüğünüz problemin zorluğuna ve o problemi kaç kişi için çözdüğünüze bakar.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Milyar Dolarlık Formül</h2>
      <p style="margin-bottom: 20px;">Elon Musk neden dünyanın en zengin adamı? Çünkü fosil yakıtlara olan bağımlılık gibi "küresel ve zor" bir sorunu (Tesla) ve uzay lojistiğinin maliyeti gibi devasa bir engeli (SpaceX) çözüyor. Sorunun çapı ne kadar büyükse, karşılığında gelen para da o kadar büyüktür.</p>
      
      <p style="margin-bottom: 20px;">Neden kasiyerler veya kuryeler asgari ücret alır? Kötü insanlar oldukları için veya yorulmadıkları için değil. Yaptıkları işin (sorun çözme eyleminin) yerine getirilebilirliği çok kolay olduğu içindir (Low Barrier to Entry). Birkaç saatlik eğitimle dünyadaki herkes o işi yapabilir. Kolay değişilebilen biriyseniz, kazancınız minimumda kalır.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Ölçeklendirme Çarpanı (Scale):</strong> Harika bir diyetisyenseniz ve birebir danışmanlık veriyorsanız, zengin olma limitiniz "gündüz saatleri" kadardır. Değer yaratıyorsunuz ama "ölçeklenemiyorsunuz". Aynı diyetisyen bilgisini bir yapay zeka algoritmasına veya kapsamlı bir video eğitim serisine döküp 1 Milyon insana 10 Dolardan satarsa (10 Milyon Dolar), işte o zaman zenginlik başlar. Değeri ölçeklemek şarttır.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Odak Değişimi</h3>
      <p style="margin-bottom: 20px;">"Nasıl daha çok para kazanırım?" sorusu bencildir ve zihninizi kilitler. Doğru soru şudur: <strong>"İnsanların hangi acılı, zor ve pahalı problemini onlar için daha kolay, hızlı ve ucuz hale getirebilirim?"</strong> Sorunu bulduğunuz ve çözümü milyonlara ulaştırabildiğiniz an, para bir yan ürün olarak kendiliğinden size akacaktır.</p>
    `,
    altin_kural: 'Yerine konması imkansız bir sorun çözücü (Problem Solver) olun.',
    rakamlar: [
      { etiket: 'Piyasanın baktığı', deger: 'Çözülen Sorun' },
      { etiket: 'Sır', deger: 'Ölçeklenebilirlik' },
      { etiket: 'Düşük Kazanç', deger: 'Kolay İkame' }
    ]
  },
  {
    slug: 'finansal-ozgurluk',
    baslik: 'Finansal Özgürlük Yol Haritası',
    altBaslik: 'Nihai Hedef',
    ikon: '🗽',
    kategori: 'temel',
    kisa: 'Finansal özgürlük, pasif gelirinizin giderlerinizi karşıladığı noktadır. Bu noktadan sonra çalışmak bir zorunluluk değil, tercihtir.',
    detay: `Zenginliğin asıl amacı size lüks arabalar almak değil, kendi zamanınızın kontrolünü size geri vermektir.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Paranın satın alabileceği en lüks, en nadide ve en pahalı nesne ne bir Ferrari ne de bir malikanedir; paranın satın alabileceği tek gerçek varlık "Seçme Özgürlüğü"dür. Pazartesi sabahı o alarmı kurmak veya kurmamak konusundaki tam egemenliktir.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Özgürlüğün Matematiksel Formülü (FIRE)</h2>
      <p style="margin-bottom: 20px;">Finansal Bağımsızlık ve Erken Emeklilik (FIRE) hareketinin kalbinde çok basit, devrilmesi zor bir matematiksel model yatar: <strong>%4 Kuralı (Trinity Çalışması).</strong></p>
      
      <p style="margin-bottom: 20px;">Eğer biriken yatırım portföyünüzün (hisse senedi + tahvil) içinden her yıl maksimum %4'ünü çekerseniz, paranız siz ölene kadar (enflasyona rağmen) asla bitmez. Formül basittir: <em>Yıllık Gideriniz × 25 = Finansal Özgürlük Rakamınız.</em> Ayda 50.000 TL harcıyorsanız (Yılda 600.000 TL), sizin tam olarak finansal özgür (emekli) olabilmeniz için 15 Milyon TL'lik bir yatırım portföyüne ihtiyacınız vardır.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>"F-You Money" Konsepti:</strong> Bu argo finansal terim, bankada "hayır" deme gücüne sahip olacak kadar paranızın olması demektir. İşinizde toksik bir patronunuz mu var? Şartlar size uymuyor mu? Gözünüzü kırpmadan "Ayrılıyorum" diyebildiğiniz o "Kırılma Noktası"ndaki nakit gücü, insana omurgasını dik tutma ve hayatının kontrolünü eline alma özgüveni verir.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Özgürlüğün Paradoksu</h3>
      <p style="margin-bottom: 20px;">İlginçtir ki, finansal özgürlüğüne ulaşan insanların %90'ı "çalışmayı" bırakmazlar. Tam tersine, varoluşsal bir hafifleme yaşadıkları için, korkusuzca sadece tutkulu oldukları işleri yapmaya başlarlar ve genellikle özgürlüklerinden sonra daha da çok para kazanırlar. Çünkü çaresizlik kokan kararlar değil, bolluk zihniyetine dayalı stratejik kararlar verirler.</p>
    `,
    altin_kural: 'Zenginlik bir statü sembolü değil, zamanın nihai kontrolüdür.',
    rakamlar: [
      { etiket: 'FIRE Çarpanı', deger: 'Yıllık Gider × 25' },
      { etiket: 'Güvenli Çekim', deger: '%4 Kuralı' },
      { etiket: 'Hedef', deger: 'Seçme Özgürlüğü' }
    ]
  },
  {
    slug: 'asimetrik-risk-getiri',
    baslik: 'Asimetrik Risk ve Getiri',
    altBaslik: 'Yatırımın Kutsal Kasesi',
    ikon: '⚖️',
    kategori: 'strateji',
    kisa: 'En başarılı yatırımcılar kumar oynamaz; kaybedeceklerinin çok az, kazanacaklarının ise sınırsız olduğu "asimetrik" fırsatları avlarlar.',
    detay: `Asimetrik fırsatlarda aşağı yönlü riskiniz sınırlı (örneğin sadece yatırdığınız kadar), ancak yukarı yönlü potansiyeliniz sınırsızdır (10x, 100x).`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Borsada veya iş dünyasında çoğu insan 1 birim risk alarak 1 birim kazanmaya çalışır (Simetrik Risk). Oysa efsanevi yatırımcı Paul Tudor Jones'un dediği gibi: "Eğer 1 dolar riske atıp 5 dolar kazanamıyorsam, o masaya oturmam."</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Sınırlı Kayıp, Sınırsız Kazanç</h2>
      <p style="margin-bottom: 20px;">Asimetri (orantısızlık) zenginliğin gizli şifresidir. Bir startup şirketine 10.000 TL yatırdığınızı düşünün. En kötü senaryoda (şirket batarsa) kaybedeceğiniz maksimum tutar 10.000 TL'dir. Risk "sınırlıdır". Ancak o şirket bir sonraki Uber veya Trendyol olursa, o 10.000 TL size 10 Milyon TL olarak dönebilir. Kazanç "sınırsızdır".</p>
      
      <p style="margin-bottom: 20px;">Simetrik risk alan bir memur (zaman satıp maaş alan), tüm ayını (risk) vererek sadece o ayın parasını alır. Yukarı yönlü sürprizi yoktur. Asimetrik risk alan bir yazar ise kitabını yazmak için aylarını riske atar, ancak kitap tutarsa milyonlar satarak ömür boyu asimetrik getiri sağlar.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>"Tura Gelirse Kazanırım, Yazı Gelirse Çok Az Kaybederim" Yaklaşımı:</strong> Mohnish Pabrai bu durumu "Heads I win, tails I don't lose much" olarak özetler. Gerçek yatırımcılar, piyasanın aşırı korktuğu dönemlerde, zaten fiyatı dibe vurmuş ve daha fazla düşme ihtimali matematiksel olarak çok zayıf olan şirketleri (Değer Yatırımı) alarak bu asimetriyi kendi lehlerine kurarlar.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Kariyerde Asimetri</h3>
      <p style="margin-bottom: 20px;">Kendi hayatınızda asimetrik fırsatlar yaratın: Yeni bir kodlama dili öğrenmek, size sadece birkaç ayınıza mal olur (sınırlı risk), ancak sizi global bir teknoloji şirketine sokabilir (sınırsız getiri). Biriyle tanışmak, bir mail atmak, bir proje yayınlamak... Bunların hepsinin maliyeti sıfıra yakındır, ama getirileri hayatınızı değiştirebilir.</p>
    `,
    altin_kural: 'Sadece aşağı yönlü riskin tamamen korunduğu oyunları oynayın.',
    rakamlar: [
      { etiket: 'İdeal Risk/Getiri', deger: '1\'e 5 (1:5 R/R)' },
      { etiket: 'Maksimum Kayıp', deger: '1 Birim' },
      { etiket: 'Potansiyel', deger: 'Sınırsız (10x+)' }
    ]
  },
  {
    slug: 'firsat-maliyeti',
    baslik: 'Fırsat Maliyeti',
    altBaslik: 'Görünmez Finansal Katil',
    ikon: '👻',
    kategori: 'temel',
    kisa: 'Bir şeyi seçtiğinizde, seçmediğiniz diğer şeyin getirisinden vazgeçmiş olursunuz. Her kararın gizli bir bedeli vardır.',
    detay: `500.000 TL'ye araba aldığınızda sadece o parayı harcamazsınız; o paranın 10 yıl boyunca borsada üreteceği 3 milyon TL'lik potansiyel getiriyi de "yakmış" olursunuz.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Ekonominin en temel kuralı olan Fırsat Maliyeti (Opportunity Cost), sadece zenginlerin ve yatırımcıların her saniye düşündüğü "görünmez" bir hesap makinesidir. Bir eylemi seçmek, o eylem yerine yapılabilecek diğer en iyi alternatiften feragat etmek demektir.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Görünmeyen Bedeller</h2>
      <p style="margin-bottom: 20px;">Hafta sonu Netflix izleyerek geçirdiğiniz 10 saatin maliyeti "sıfır lira" değildir. O 10 saatin maliyeti, o sürede yeni bir beceri öğrenip maaşınızı artırarak kazanabileceğiniz on binlerce liradır.</p>
      
      <p style="margin-bottom: 20px;">Aynı şekilde lüks tüketimdeki fırsat maliyeti çok daha yıkıcıdır. Cebinizdeki 100.000 TL ile son model bir akıllı telefon alırsanız, o telefonun maliyeti 100.000 TL değildir. Eğer o parayı %10 reel getiri sağlayan bir endeks fonuna koysaydınız, o para 20 yıl sonra (enflasyondan arındırılmış haliyle) 672.000 TL olacaktı. <strong>Yani o telefonun size gerçek maliyeti 672.000 TL'dir.</strong></p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>"Neye Hayır Diyorum?" Sorusu:</strong> Charlie Munger (Buffett'ın ortağı), her yatırım kararından önce şunu sorardı: "Bu şirketi alırsam, paramı bağladığım için başka hangi harika fırsatı kaçırmış olacağım?" Seçim yapmak her zaman bir vazgeçiştir. Bir hisseye "evet" demek, diğer tüm hisselere "hayır" demektir.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Parayı Zaman Üzerinden Okumak</h3>
      <p style="margin-bottom: 20px;">Fırsat maliyeti zihniyetiyle düşünmeye başladığınızda, menüdeki fiyatlara "para" olarak değil "zaman" ve "gelecekteki servet" olarak bakmaya başlarsınız. "Bu ayakkabı 5.000 TL" demek yerine, "Bu ayakkabı benim hayatımdan 3 günlük mesai çalıyor ve emekliliğimi 2 ay geciktiriyor" dersiniz. Bu zihniyet, sizi lüks tüketim bağımlılığından otomatik olarak kurtaracaktır.</p>
    `,
    altin_kural: 'Her evet, yüzlerce hayır anlamına gelir. Seçiminizin bedelini bilin.',
    rakamlar: [
      { etiket: 'Zaman Maliyeti', deger: 'Kaçırılan Mesai' },
      { etiket: 'Sermaye Maliyeti', deger: 'Kaçırılan Bileşik Faiz' },
      { etiket: 'Odak Maliyeti', deger: 'Bölünmüş Enerji' }
    ]
  },
  {
    slug: 'ekonomik-hendek',
    baslik: 'Sürdürülebilir Rekabet Avantajı (Moat)',
    altBaslik: 'Buffett\'ın Kale Savunması',
    ikon: '🏰',
    kategori: 'strateji',
    kisa: 'Bir şirketin (veya kişinin) rakipleri tarafından taklit edilmesini, pazar payını kaybetmesini zorlaştıran koruyucu bariyerlere "Moat" (Hendek) denir.',
    detay: `Eğer kolayca taklit edilebiliyorsanız veya daha ucuza yapılabiliyorsanız, kâr marjınız eninde sonunda sıfıra inecektir. Zenginlik "hendek" kazarak korunur.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Orta Çağ kalelerinin etrafında, düşmanların surlara yaklaşmasını engellemek için içi su ve timsah dolu devasa hendekler (Moat) bulunurdu. Warren Buffett, 1999 yılında bu terimi finans literatürüne kazandırarak "Ekonomik Hendek" kavramını yarattı.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Kapitalizmin Kanlı Yasası</h2>
      <p style="margin-bottom: 20px;">Kapitalizmde bir kural vardır: Nerede yüksek kâr varsa, oraya anında acımasız rakipler hücum eder ve o kâr marjını kan revan içinde sıfıra çekene kadar rekabet ederler. Sizi bu "kan gölünden" (Kızıl Okyanus) koruyan tek şey, şirketinizin etrafına kazdığınız Ekonomik Hendektir.</p>
      
      <p style="margin-bottom: 20px;">Hendek türleri 4'e ayrılır: <br>
      1. <strong>Ağ Etkisi (Network Effect):</strong> Ne kadar çok insan kullanırsa o kadar değerli olur (Instagram, WhatsApp, Visa). Rakibin aynısını yapması yetmez, kullanıcıları da çalması gerekir.<br>
      2. <strong>Değiştirme Maliyeti (Switching Costs):</strong> Müşterinin sizi bırakmasının çok acılı veya pahalı olmasıdır (Apple ekosistemi, SAP yazılımları).<br>
      3. <strong>Maliyet Avantajı:</strong> Rakiplerinizin asla inemeyeceği kadar ucuza üretebilme gücü (Amazon, Walmart, BİM).<br>
      4. <strong>Marka / Kalite (Intangible Assets):</strong> İnsanların sadece o logo için %300 fazla para ödemeye razı olması (Coca-Cola, Rolex, Ferrari).</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Kişisel Hendek İnşası (Personal Moat):</strong> Bu strateji sadece şirketler için değil, SİZİN KARİYERİNİZ için de geçerlidir. Eğer yaptığınız işi, 3 aylık kursa giden bir yeni mezun veya bir Yapay Zeka daha ucuza yapabiliyorsa, <strong>hiçbir hendeğiniz yoktur</strong> ve maaşınız düşmeye mahkumdur. Kendinizi, spesifik bilginizle (Specific Knowledge), çevrenizle ve eşsiz deneyiminizle taklit edilemez hale getirin.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Hendeksiz İşler Ölüme Mahkumdur</h3>
      <p style="margin-bottom: 20px;">Hendeksiz bir şirkete yatırım yapmak (veya böyle bir işte çalışmak), kalenizin kapılarını ardına kadar açık bırakmaktır. Mükemmel bir ilk çeyrek geçirebilirsiniz, ancak rakipler kokuyu aldığında fiyat savaşları başlayacak ve herkes kaybedecektir. Zenginler her zaman <strong>tekeli (Monopoly)</strong> arar.</p>
    `,
    altin_kural: 'Eğer rekabet ediyorsanız, bir yerlerde hata yapmışsınız demektir. Sürdürülebilir tekel olun.',
    rakamlar: [
      { etiket: 'Network Etkisi', deger: 'En Güçlü Hendek' },
      { etiket: 'Değiştirme', deger: 'Yüksek Acı Maliyeti' },
      { etiket: 'Marka Değeri', deger: 'Fiyatlandırma Gücü' }
    ]
  },
  {
    slug: 'opsiyonellik',
    baslik: 'Opsiyonellik (Optionality)',
    altBaslik: 'Nassim Taleb Felsefesi',
    ikon: '🎲',
    kategori: 'strateji',
    kisa: 'Opsiyonellik, gelecekteki fırsatlardan yararlanabilme "hakkına" sahip olup, "zorunluluğuna" sahip olmamaktır. Esneklik, en büyük güçtür.',
    detay: `Kriz anlarında elinde nakit bulunduran (opsiyonu olan) kişi piyasanın kralı olurken, tüm parasını bağlamış (zorunlu) kişi iflas eder.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Efsanevi risk analisti ve yazar Nassim Nicholas Taleb'in "Antikırılganlık" konseptinin merkezinde Opsiyonellik (Optionality) yatar. Opsiyonellik, bir şeye sahip olmak zorunda kalmadan, işler iyi gittiğinde o şeyin faydalarından yararlanma hakkına sahip olmaktır.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Neden Nakit Çöptür, Ama Opsiyondur?</h2>
      <p style="margin-bottom: 20px;">Finansal danışmanlar sık sık "Nakit çöptür, enflasyona erir" derler. Bu kısmen doğrudur, ancak nakit aynı zamanda <strong>en yüksek opsiyonelliğe sahip varlıktır.</strong> 2008 Küresel Krizi veya 2020 Pandemi çöküşü sırasında elinde hisse senedi veya gayrimenkul olan herkes kan ağlarken; elinde "Nakit Opsiyonu" olanlar (Buffett gibi) piyasadaki dev şirketleri %60 indirimle satın alarak tarihin en büyük servet transferini gerçekleştirdiler.</p>
      
      <p style="margin-bottom: 20px;">Eğer 10 yıllık, cayması çok pahalı bir ev kredisine (mortgage) girdiyseniz, hayatınızdaki tüm opsiyonelliği sıfırlamışsınız demektir. Şehrinizde iş kalmasa da ayrılamazsınız, maaşınız düşse de o işte kalmak "zorundasınızdır". Ancak esnek olan, likit olan ve borçsuz olan kişi, hayatın sunduğu yeni ve daha kârlı yollara (opsiyonlara) anında sapabilir.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Partiye Girme Bileti:</strong> Opsiyonelliği yüksek tutmak bazen kısa vadede size para kaybettirebilir (nakdin enflasyona ezilmesi gibi). Ancak bunu finansal fırtınalar için ödenen bir "sigorta primi" olarak görün. Fırtına koptuğunda, o bilet sizi batan gemiden kurtarıp en lüks filikaya bindirecektir.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Zorunluluktan Kaçış</h3>
      <p style="margin-bottom: 20px;">Finansal bağımsızlık, aslında bir "Opsiyonellik Satın Alma" eylemidir. Zenginlik size özel jetler vermek zorunda değildir, ama size istediğiniz gün çalışmayı bırakma veya sevmediğiniz patrona "Hayır" deme opsiyonunu verir. Hayatınızdaki zorunlulukları (borçları, toksik sözleşmeleri) minimize edin, opsiyonları (nakit, likit varlıklar, taşınabilir beceriler) maksimize edin.</p>
    `,
    altin_kural: 'Planlarınızın en az %30\'u hata payı ve esneklik (opsiyonellik) içermelidir.',
    rakamlar: [
      { etiket: 'Nakit Gücü', deger: 'Piyasa Çöküşü Opsiyonu' },
      { etiket: 'Esneklik', deger: 'Antikırılganlık' },
      { etiket: 'Borç', deger: 'Sıfır Opsiyonellik' }
    ]
  },
  {
    slug: 'dolar-maliyeti-ortalamasi',
    baslik: 'Dolar Maliyeti Ortalaması (DCA)',
    altBaslik: 'Piyasanın Zamanlamasını Yenmek',
    ikon: '📅',
    kategori: 'strateji',
    kisa: 'Piyasayı zamanlamaya (dipten alıp tepeden satmaya) çalışmak aptalların oyunudur. Akıllılar "Düzenli Alım" (DCA) yaparak duygularını sistemden çıkarırlar.',
    detay: `Hisse senedi, fon veya kriptoya her ay aynı gün aynı miktarda para yatırın. Düşünce daha çok adet, çıkınca daha az adet alarak maliyeti kusursuzca ortalarsınız.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Borsada veya kripto paralarda yapılan en ölümcül hata "Zamanlama" (Market Timing) hatasıdır. Milyonlarca yatırımcı, ellerindeki nakitle "en dip noktayı" yakalamayı bekler, ancak piyasa o dip noktayı asla göstermeden yukarı fırlar. Veya tepede açgözlülükle tüm parayı yatırıp, ertesi gün başlayan ayı piyasasında %50 içeride kalırlar.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Duyguların Matematiksel Katili</h2>
      <p style="margin-bottom: 20px;">Dolar Maliyeti Ortalaması (Dollar Cost Averaging - DCA) bu psikolojik işkenceyi bitiren, sıkıcı ama devasa kazançlı bir robottur. Elinize geçen 10.000 TL'nin tamamını tek seferde yatırmak yerine, bu parayı her ay aynı gün 1.000 TL olacak şekilde 10 aya bölersiniz.</p>
      
      <p style="margin-bottom: 20px;">Piyasa düşerse sevinirsiniz: Çünkü 1.000 TL'nizle o varlıktan çok daha fazla "adet" (lot/coin) alırsınız.<br>Piyasa çıkarsa sevinirsiniz: Çünkü zaten içeride olan paranız değerlenmektedir.<br>DCA, stresi yok eder ve maliyetinizi uzun vadeli ortalamaya çekerek yatırımın en büyük düşmanı olan "panik" duygusunu devreden çıkarır.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>"Time in the Market > Timing the Market":</strong> Tarihsel veriler kanıtlamıştır ki, borsada kalma <em>süreniz</em> (Time in the market), piyasanın tepesini ve dibini tahmin etme <em>zamanlamanızdan</em> (Timing the market) çok daha yüksek getiri sağlar. S&P 500 endeksindeki en iyi getiriyi sağlayan 10 günü (panik yapıp çıkarak) kaçıran bir yatırımcının 20 yıllık kârı yarı yarıya düşmektedir.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Otomatik Zenginleşme Sistemi</h3>
      <p style="margin-bottom: 20px;">DCA sisteminin tek şartı "disiplin"dir. İster ekonomi krizde olsun, ister faizler artsın, ister savaş çıksın... Ayın 15'i geldiğinde o 1.000 TL'lik alım "otomatik" yapılmalıdır. Robotik bir soğukkanlılıkla 10 yıl boyunca sürekli alım yapan bir DCA yatırımcısının, piyasayı yenmeye çalışan bir trader'a (al-satçı) kaybetme ihtimali istatistiksel olarak sıfıra yakındır.</p>
    `,
    altin_kural: 'Borsayı zamanlamaya çalışmak zeka değil, kibir göstergesidir.',
    rakamlar: [
      { etiket: 'Strateji', deger: 'Sürekli / Düzenli Alım' },
      { etiket: 'Duygu Durumu', deger: 'Sıfır Panik/Açgözlülük' },
      { etiket: 'Sonuç', deger: 'Ortalanmış Maliyet' }
    ]
  },
  {
    slug: 'beklenen-deger',
    baslik: 'Beklenen Değer (Expected Value)',
    altBaslik: 'Olasılıklarla Düşünmek',
    ikon: '🎯',
    kategori: 'zihniyet',
    kisa: 'Dünyadaki en iyi poker oyuncuları ellerindeki kartlara değil, kazanma olasılıkları ve masadaki potun matematiksel beklentisine göre karar verirler.',
    detay: `Bir yatırım %90 ihtimalle 1.000 TL kaybettirip, %10 ihtimalle 100.000 TL kazandıracaksa, o yatırımın "Beklenen Değeri" pozitiftir ve o risk alınmalıdır.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">İnsan beyni "kesinlik" arayacak şekilde evrimleşmiştir. Mağara döneminde belirsizlik ölüm demekti. Ancak modern kapitalizmde kesinlik, düşük getirinin garantisidir. Zenginler olayları "evet/hayır" veya "doğru/yanlış" olarak değil, "Olasılık Ağaçları" olarak görürler.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Beklenen Değer Formülü (EV)</h2>
      <p style="margin-bottom: 20px;">Bir kararın mantıklı olup olmadığını ölçen tek matematiksel gerçek "Expected Value" (EV) hesaplamasıdır. <br>
      <strong>Formül:</strong> (Kazanma İhtimali × Kazanılacak Tutar) - (Kaybetme İhtimali × Kaybedilecek Tutar).</p>
      
      <p style="margin-bottom: 20px;">Diyelim ki bir arkadaşınızın girişimine 10.000 TL yatıracaksınız. Bu girişimin batma ihtimali %80 (ki genelde öyledir). Ancak eğer başarılı olursa (%20 ihtimal) size 200.000 TL kazandıracak.<br>
      Negatif EV: %80 × 10.000 TL = -8.000 TL (Kayıp beklentisi)<br>
      Pozitif EV: %20 × 200.000 TL = +40.000 TL (Kazanç beklentisi)<br>
      <strong>Net Beklenen Değer: +32.000 TL.</strong><br>
      Çoğu insan "%80 batacak" diyerek korkup kaçar. Ancak profesyonel bir yatırımcı, beklenen değeri pozitif olduğu için bu riski (kendi bütçesi sarsılmayacak oranda) seve seve alır.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Hata Yapma Özgürlüğü:</strong> Amazon'un kurucusu Jeff Bezos, kariyeri boyunca Fire Phone gibi milyarlarca dolarlık fiyasko projeler üretti ve kaybetti. Ancak başarısız olma ihtimali çok yüksek (%90) olan ama tutarsa dünyayı değiştirecek (%10) "Amazon Web Services (AWS)" ve "Amazon Prime" gibi projelere girmekte hiç tereddüt etmedi. AWS tek başına bugün Amazon'un trilyon dolarlık kâr motorudur. Pozitif EV oyunlarında 10 kere yanılabilir, 1 kere haklı çıkarak her şeyi kazanabilirsiniz.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Karar Günlüğü Tutmak</h3>
      <p style="margin-bottom: 20px;">Sonuçlar yanıltıcı olabilir (Buna Resulting denir). Harika bir kumarbaz elini doğru oynar ama şanssızlıktan kaybedebilir; berbat bir amatör hatalı oynar ama şans eseri kazanabilir. Önemli olan sonucun ne olduğu değil, kararı alırkenki "Beklenen Değer" (EV) matematiğinizin doğru olup olmadığıdır. Süreci kusursuz hale getirin, sonuçlar uzun vadede yasaya (Büyük Sayılar Kanunu) boyun eğecektir.</p>
    `,
    altin_kural: 'Sonuçlara göre değil, aldığınız riskin matematiksel kalitesine göre kendinizi yargılayın.',
    rakamlar: [
      { etiket: 'Formül (EV)', deger: '(İhtimal × Kazanç) - (İhtimal × Kayıp)' },
      { etiket: 'Karar Matrisi', deger: 'Kazanma Olasılığı' },
      { etiket: 'Hata Payı', deger: 'Sonuçlara Bağlanmama' }
    ]
  }
];

const OGRETI_KATEGORILER = {
  'temel': { baslik: 'Temel Prensipler', emoji: '🏛️' },
  'strateji': { baslik: 'Strateji & Taktik', emoji: '♟️' },
  'zihniyet': { baslik: 'Zihniyet & Psikoloji', emoji: '🧠' }
};

module.exports = { OGRETILER, OGRETI_KATEGORILER };
