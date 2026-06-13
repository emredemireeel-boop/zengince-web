const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../data/deha-hamleleri-data.js');
let dataStr = fs.readFileSync(targetPath, 'utf8');

const masterclassContents = {
  "whatsapp-50-kisi-19-milyar-dolar": `
      <div class="article-intro" style="margin-bottom: 50px;">
        <p class="lead" style="font-size:1.35rem; color:var(--text-300); line-height:1.9;">
          <span class="dropcap" style="color:#25D366; font-family:var(--font-display); float:left; font-size:5.5rem; line-height:0.8; margin-right:15px; text-shadow:0 0 25px rgba(37,211,102,0.5);">G</span>eleneksel iş dünyasında şirket değerlemesi on yıllar boyunca fiziksel varlıklara göre yapıldı: Sahip olduğunuz fabrika sayısı, tır filonuz ve bordronuzdaki on binlerce çalışanın büyüklüğü... Ancak 19 Şubat 2014 tarihinde, Facebook (Meta) mütevazı bir ofiste çalışan 55 kişilik bir ekibi tam <strong>19 Milyar Dolara</strong> satın aldığında, Wall Street analistlerinin kullandığı tüm Excel tabloları çöktü. Bu olay, "Marjinal Maliyeti Sıfır" olan yazılım dünyasının, fiziksel dünyaya attığı en ağır ve sarsıcı tokattı.
        </p>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#25D366; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem; flex-shrink:0;">1</span>
        Kriz: Telekomünikasyon Tekellerinin Küresel Soygunu
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 25px;">2000'lerin başında GSM operatörleri dünyanın en kârlı iş modeline sahipti: SMS (Kısa Mesaj Servisi). Sadece 160 karakterden oluşan, ağ üzerinde hiçbir bant genişliği kaplamayan ve maliyeti teknik olarak "sıfır" olan bu bayt parçaları için kullanıcılardan mesaj başına 10-20 sent gibi fahiş ücretler alınıyordu. İnsanlar yurt dışındaki sevdiklerine mesaj atarken kelimelerin sesli harflerini yutmak zorundaydı. Operatörler için bu risksiz bir para basma makinesiydi.</p>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#25D366; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem; flex-shrink:0;">2</span>
        Deha Hamlesi: Erlang ve Minimalizm
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Yahoo'da altyapı mühendisliği yapan Jan Koum ve Brian Acton, Facebook'a iş başvurusunda bulunup <strong>reddedildikten</strong> sonra kolları sıvadılar. Jan Koum, KGB'nin telefonları dinlediği Sovyet Ukraynası'nda büyümüştü. Bu yüzden gizliliğe, reklamsızlığa ve saf iletişime saplantılıydı. Rakipleri uygulamalarına binlerce gereksiz özellik, oyun ve "sticker" doldururken, WhatsApp'ın masasında şu not asılıydı: <em>"Reklam Yok, Oyun Yok, Numara Yok."</em></p>
      
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:25px; margin-bottom:50px;">
        <div style="background:rgba(37,211,102,0.05); border:1px solid rgba(37,211,102,0.2); border-radius:12px; padding:25px;">
          <h4 style="color:#4ade80; font-size:1.2rem; margin-bottom:10px; display:flex; align-items:center; gap:10px;">💻 Erlang ve FreeBSD Mucizesi</h4>
          <p style="color:var(--text-400); font-size:0.95rem; line-height:1.6;">En büyük deha, mimari seçimiydi. Eşzamanlı milyonlarca bağlantıyı çökmeksizin yönetebilmek için Ericsson'un telefon santralleri için geliştirdiği <strong>Erlang</strong> dilini kullandılar. Sonuç? 1 milyon kullanıcıya 1 sunucu düşüyordu. Rakipleri yüzlerce sunucuyla boğuşurken, WhatsApp asimetrik bir teknolojik avantaj sağladı.</p>
        </div>
        <div style="background:rgba(37,211,102,0.05); border:1px solid rgba(37,211,102,0.2); border-radius:12px; padding:25px;">
          <h4 style="color:#4ade80; font-size:1.2rem; margin-bottom:10px; display:flex; align-items:center; gap:10px;">🦠 Sıfır Pazarlama Maliyeti (CAC)</h4>
          <p style="color:var(--text-400); font-size:0.95rem; line-height:1.6;">Şirketin hiçbir pazarlama bütçesi veya PR ekibi yoktu. Ürün o kadar hayati bir sorunu çözüyordu ki (uluslararası SMS ücretleri), Ağ Etkisi (Network Effect) ile viral oldu. Arkadaşınızla konuşmak için onu indirmeye zorluyordunuz. Pazarlamayı müşteriler yapıyordu.</p>
        </div>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#25D366; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem; flex-shrink:0;">3</span>
        Sonuç: Zamanın En Pahalı Şirketi
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">2014'e gelindiğinde WhatsApp günde 1 milyon yeni kayıt alıyordu. Facebook, bu "dikkat tekeli"ni elinden kaçırmamak için 19 Milyar Dolarlık o çılgın teklifi yaptı. İşin ironisi şuydu: Sadece 32 mühendis, 450 milyon kullanıcının verisini yönetiyordu.</p>
      
      <!-- Visual Comparison -->
      <div style="background:linear-gradient(135deg, #022c22, #064e3b); border:1px solid rgba(37,211,102,0.3); border-radius:24px; padding:40px; margin-bottom:50px; position:relative; overflow:hidden;">
        <h3 style="color:#fff; text-align:center; margin-top:0; margin-bottom:40px; font-family:var(--font-display); font-size:1.8rem;">Finans Tarihinin Çöktüğü An (2014)</h3>
        
        <div style="display:flex; justify-content:space-around; align-items:stretch; flex-wrap:wrap; gap:30px;">
          <!-- SONY -->
          <div style="flex:1; min-width:250px; background:rgba(0,0,0,0.5); padding:30px; border-radius:16px; text-align:center;">
            <div style="font-size:3rem; margin-bottom:15px; opacity:0.5;">🏭</div>
            <h4 style="color:#94a3b8; font-size:1.5rem; margin:0 0 20px 0;">SONY CORPORATION</h4>
            <div style="padding:15px; background:rgba(255,255,255,0.05); border-radius:8px; margin-bottom:15px;">
              <span style="display:block; color:var(--text-400); font-size:0.85rem;">Çalışan Sayısı</span>
              <strong style="color:#fff; font-size:2rem; font-family:monospace;">140,000</strong>
            </div>
            <div style="padding:15px; background:rgba(255,255,255,0.05); border-radius:8px;">
              <span style="display:block; color:var(--text-400); font-size:0.85rem;">Çalışan Başına Değer</span>
              <strong style="color:#94a3b8; font-size:1.5rem;">$135,000</strong>
            </div>
          </div>
          
          <div style="display:flex; align-items:center; justify-content:center; font-size:2rem; color:rgba(255,255,255,0.3); font-weight:bold;">VS</div>
          
          <!-- WHATSAPP -->
          <div style="flex:1; min-width:250px; background:rgba(37,211,102,0.1); border:1px solid #25D366; padding:30px; border-radius:16px; text-align:center; box-shadow:0 0 30px rgba(37,211,102,0.2);">
            <div style="font-size:3rem; margin-bottom:15px; text-shadow:0 0 20px #25D366;">📱</div>
            <h4 style="color:#25D366; font-size:1.5rem; margin:0 0 20px 0; text-shadow:0 0 10px rgba(37,211,102,0.5);">WHATSAPP</h4>
            <div style="padding:15px; background:rgba(37,211,102,0.1); border-radius:8px; margin-bottom:15px;">
              <span style="display:block; color:var(--text-400); font-size:0.85rem;">Çalışan Sayısı</span>
              <strong style="color:#25D366; font-size:2rem; font-family:monospace; text-shadow:0 0 10px rgba(37,211,102,0.5);">55</strong>
            </div>
            <div style="padding:15px; background:rgba(37,211,102,0.1); border-radius:8px; position:relative; overflow:hidden;">
              <span style="display:block; color:var(--text-400); font-size:0.85rem;">Çalışan Başına Değer</span>
              <strong style="color:#4ade80; font-size:1.8rem; text-shadow:0 0 15px rgba(74,222,128,0.8);">$345,454,000</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="article-alert" style="margin-top: 60px; background: linear-gradient(135deg, rgba(37,211,102,0.1) 0%, rgba(10,10,10,0.9) 100%); border: 1px solid rgba(37,211,102,0.3); border-left: 6px solid #25D366; border-radius: 16px; padding:40px; box-shadow:0 15px 40px rgba(0,0,0,0.6);">
        <div style="display:flex; align-items:center; gap:15px; margin-bottom:20px;">
          <div style="width:50px; height:50px; background:#25D366; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.8rem; box-shadow:0 0 20px rgba(37,211,102,0.6);">⚡</div>
          <h3 style="margin: 0; color: #25D366; font-family:var(--font-display); font-size:1.8rem; text-transform:uppercase; letter-spacing:1px;">Zengince Tokadı</h3>
        </div>
        <p style="margin-bottom: 0; color:#E0E0E0; font-size:1.2rem; line-height:1.8; text-shadow:0 2px 4px rgba(0,0,0,0.5);">
          Fiziksel bir restoranınız varsa, iki kat fazla müşteriye hizmet etmek için iki kat fazla garsona, alana ve sermayeye ihtiyacınız vardır. Oysa yazılımda kod bir kere yazılır ve <strong>marjinal kopyalama maliyeti sıfırdır.</strong> Yazılım tarihteki en asimetrik kaldıraçtır. Bedeninizi ve zamanınızı satmayı (maaşlı çalışmayı) bırakıp, uyurken bile sizin için sınırsızca çoğalabilen "kodlar" (veya dijital medya sistemleri) inşa etmelisiniz.
        </p>
      </div>
  `,

  "redbull-kendi-pazarini-yaratmak": `
      <div class="article-intro" style="margin-bottom: 50px;">
        <p class="lead" style="font-size:1.35rem; color:var(--text-300); line-height:1.9;">
          <span class="dropcap" style="color:#e11d48; font-family:var(--font-display); float:left; font-size:5.5rem; line-height:0.8; margin-right:15px; text-shadow:0 0 25px rgba(225,29,72,0.5);">B</span>ir ürün piyasaya süreceğinizi düşünün. Formül sizin değil (Taylandlı bir eczacıya ait), ürünü üretecek bir fabrikanız yok (tamamen taşeron), ve pazar araştırması raporlarında tüketiciler içeceğin tadı için "iğrenç, yapışkan ve ilaç gibi" diyor. Normalde böyle bir projenin kağıt üzerindeyken iptal edilmesi gerekir. Ancak Avusturyalı Dietrich Mateschitz, bu "iğrenç" sıvıyı, <strong>Veblen Etkisi</strong> ve usta işi bir algı manipülasyonu ile dünyanın en değerli markalarından birine dönüştürdü. O bize "Sıvı değil, Adrenalin sattı."
        </p>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#e11d48; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem; flex-shrink:0;">1</span>
        Kriz: Coca-Cola'nın Dominasyonu
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">1982'de Mateschitz Tayland'da jet-lag krizini "Krating Daeng" (Kızıl Boğa) isimli şurupla çözdüğünde, Batı dünyasında raflar Coca-Cola ve Pepsi'nin tekelindeydi. Geleneksel "Soğuk İçecek" pazarında onlarla savaşmak intihardı. Ayrıca Avrupa'da kimse kamyoncu şurubu içmek istemezdi.</p>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#e11d48; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem; flex-shrink:0;">2</span>
        Deha Hamlesi: Fabrikayı Yık, İllüzyonu İnşa Et
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Mateschitz, Taylandlı mucit Chaleo Yoovidhya ile efsanevi bir anlaşma yaptı. %49 - %49 ortaklık, %2 hisse ise Chaleo'nun oğluna verildi (Yani çoğunluk Taylandlılardaydı). Ancak kritik şart şuydu: <strong>"Şirketin tüm pazarlama ve konumlandırma kararları Mateschitz'e ait olacaktı."</strong> Mateschitz, ürünü karbonatladı (gazlandırdı) ve akılalmaz bir strateji izledi:</p>
      
      <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:30px; margin-bottom:40px;">
        <div style="background:linear-gradient(145deg, rgba(225,29,72,0.1), rgba(0,0,0,0.4)); border:1px solid rgba(225,29,72,0.2); padding:30px; border-radius:16px;">
          <h3 style="color:#e11d48; font-family:var(--font-display); margin-top:0; font-size:1.4rem;">❌ Üretimi Outsoure Et</h3>
          <p style="color:var(--text-300); font-size:1rem; line-height:1.7;">RedBull tek bir damla içecek bile üretmez. Üretimi Avusturyalı meyve suyu fabrikası Rauch'a havale ettiler. Şirketin milyarlarca dolarlık sermayesi makinelere, işçilere ve depolara değil, doğrudan "Algı"ya (Marketing) ayrıldı.</p>
        </div>
        <div style="background:linear-gradient(145deg, rgba(245,158,11,0.1), rgba(0,0,0,0.4)); border:1px solid rgba(245,158,11,0.2); padding:30px; border-radius:16px;">
          <h3 style="color:#f59e0b; font-family:var(--font-display); margin-top:0; font-size:1.4rem;">💎 Veblen Etkisi (Psikolojik Fiyat)</h3>
          <p style="color:var(--text-300); font-size:1rem; line-height:1.7;">İçeceğin kutusunu ince, uzun (tıbbi bir fişek gibi) yaptılar ve fiyatını Coca-Cola'nın 3 katına çıkardılar. Veblen etkisine göre, fiyatı artan ürünün "kalite" algısı da artar. Tüketiciler bilinçaltında "Bu kadar pahalıysa, gerçekten bir doping olmalı" dediler.</p>
        </div>
      </div>

      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;"><strong>Gerilla Pazarlama:</strong> İlk yıllarda gece kulüpleri ve üniversite kampüslerindeki çöp kutularını bilerek boş RedBull kutularıyla doldurdular. Kulüp DJ'lerine kasalarla bedava dağıttılar. Sokaktan geçen biri çöp kutusuna baktığında "Herkes bunu içiyor olmalı" yanılsamasına (Social Proof) kapıldı.</p>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#e11d48; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem; flex-shrink:0;">3</span>
        Sonuç: Dünyanın En Kârlı İçeceği
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Bugün RedBull bir gıda şirketi değildir. İki Formula 1 takımı (RedBull Racing), küresel futbol kulüpleri (Leipzig, Salzburg) ve bir uzay atlayışı organizasyonu olan devasa bir "Ekstrem Medya ve Eğlence" imparatorluğudur. Kutunun içindeki sıvının maliyeti birkaç senttir, ancak kutunun etrafındaki "hikaye" o tenekeyi dolarlara satmalarını sağlar.</p>
      
      <!-- Visual Chart -->
      <div style="background:rgba(255,255,255,0.02); border:1px solid rgba(225,29,72,0.3); border-radius:24px; padding:40px; margin-bottom:50px; text-align:center; box-shadow:0 10px 40px rgba(0,0,0,0.5);">
        <h3 style="color:#fff; font-family:var(--font-display); font-size:1.8rem; margin-top:0; margin-bottom:40px;">Marka İllüzyonu: F1 vs Kutu Kola</h3>
        
        <div style="display:flex; justify-content:center; gap:40px; flex-wrap:wrap; align-items:center;">
          <!-- Pie Chart -->
          <div style="width:220px; height:220px; border-radius:50%; background:conic-gradient(#e11d48 0% 85%, #334155 85% 100%); position:relative; display:flex; align-items:center; justify-content:center; box-shadow:0 0 30px rgba(225,29,72,0.3);">
            <div style="width:160px; height:160px; background:#111; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-direction:column; border:4px solid #1a1a1a;">
              <span style="font-size:2.5rem; font-weight:bold; color:#fff;">%85</span>
              <span style="font-size:0.85rem; color:var(--text-400); text-transform:uppercase; letter-spacing:1px; margin-top:5px;">Hikaye & Marka</span>
            </div>
          </div>
          
          <div style="text-align:left; max-width:350px; background:rgba(0,0,0,0.5); padding:30px; border-radius:16px;">
            <div style="margin-bottom:20px;">
              <div style="display:flex; align-items:center; margin-bottom:8px;">
                <div style="width:15px; height:15px; background:#e11d48; border-radius:3px; margin-right:12px; box-shadow:0 0 10px #e11d48;"></div>
                <span style="color:#fff; font-weight:bold; font-size:1.1rem;">Pazarlama, Sponsorluk (F1)</span>
              </div>
              <p style="color:var(--text-400); font-size:0.9rem; margin-left:27px; line-height:1.5;">Şirketin kâr marjını yaratan asıl unsur. Tüketici kutuyu açtığında bu heyecanı satın alıyor.</p>
            </div>
            <div>
              <div style="display:flex; align-items:center; margin-bottom:8px;">
                <div style="width:15px; height:15px; background:#334155; border-radius:3px; margin-right:12px;"></div>
                <span style="color:#cbd5e1; font-weight:bold; font-size:1.1rem;">Üretim ve Ham Madde (%15)</span>
              </div>
              <p style="color:var(--text-500); font-size:0.9rem; margin-left:27px; line-height:1.5;">Su, şeker, taurin ve alüminyum kutu maliyeti. (Tamamen dışarıdan tedarik edilir).</p>
            </div>
          </div>
        </div>
      </div>

      <div class="article-alert" style="margin-top: 60px; background: linear-gradient(135deg, rgba(225,29,72,0.1) 0%, rgba(10,10,10,0.9) 100%); border: 1px solid rgba(225,29,72,0.3); border-left: 6px solid #e11d48; border-radius: 16px; padding:40px; box-shadow:0 15px 40px rgba(0,0,0,0.6);">
        <div style="display:flex; align-items:center; gap:15px; margin-bottom:20px;">
          <div style="width:50px; height:50px; background:#e11d48; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.8rem; box-shadow:0 0 20px rgba(225,29,72,0.6);">⚡</div>
          <h3 style="margin: 0; color: #f43f5e; font-family:var(--font-display); font-size:1.8rem; text-transform:uppercase; letter-spacing:1px;">Zengince Tokadı</h3>
        </div>
        <p style="margin-bottom: 0; color:#E0E0E0; font-size:1.2rem; line-height:1.8; text-shadow:0 2px 4px rgba(0,0,0,0.5);">
          21. Yüzyılda kâr, ürünü "üreten" nasırlı ellerde değil, o ürünün "hikayesini" yazan beyinlerdedir. Meta (Emtia/Fabrika) işi yaparsanız rakipleriniz sizi fiyat kırarak ezer; ancak bir "Hikaye" yaratırsanız (RedBull'un adrenalini, Apple'ın statüsü), insanlar ürününüze mantıksızca yüksek bedeller öderler. <strong>Fiziksel üretim ucuzdur, algı yönetimi ise paha biçilemez.</strong>
        </p>
      </div>
  `,

  "de-beers-elmas-illuzyonu": `
      <div class="article-intro" style="margin-bottom: 50px;">
        <p class="lead" style="font-size:1.35rem; color:var(--text-300); line-height:1.9;">
          <span class="dropcap" style="color:#cbd5e1; font-family:var(--font-display); float:left; font-size:5.5rem; line-height:0.8; margin-right:15px; text-shadow:0 0 25px rgba(255,255,255,0.4);">T</span>icaret tarihinin en uzun soluklu, en kusursuz beyin yıkama operasyonuna hoş geldiniz. Bugün dünyadaki herkes elmasın çok nadir ve gerçek aşkın sembolü olduğuna inanır. Oysa 19. yüzyılın sonlarına kadar elmas, sadece Avrupa kraliyet ailelerinin taktığı yarı değerli bir taştı. Ta ki Cecil Rhodes ve Oppenheimer ailelerinin kurduğu De Beers karteli, insanlığın evlilik ritüelini hackleyene kadar.
        </p>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#cbd5e1; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem; flex-shrink:0;">1</span>
        Kriz: Kimberley Madenleri ve Bolluk Felaketi
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">1870'lerde Güney Afrika'da devasa elmas yatakları bulundu. Tonlarca elmas pazara akmaya başladı. Ancak arzın artması demek, elmasın sıradan bir cam parçası fiyatına düşmesi demekti. İngiliz yatırımcı Cecil Rhodes (Rhodesia, bugünkü Zimbabwe'ye adını veren sömürgeci), Rothschild'lerin fonuyla bölgedeki tüm madenleri acımasızca satın alıp tekel oluşturdu: <strong>De Beers.</strong></p>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#cbd5e1; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem; flex-shrink:0;">2</span>
        Deha Hamlesi: Kasalar ve N.W. Ayer Ajansı
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">De Beers, <strong>Merkezi Satış Organizasyonu (CSO)</strong> adında bir kartel kurdu. Tüm küresel üreticileri ellerindeki taşları sadece kendilerine satmaya zorladılar. Karşı çıkanı, o şirketin çıkardığı taşın aynısını piyasaya ucuza döküp batırarak ezdiler. Piyasaya sadece fiyatı yüksek tutacak kadar az taş verdiler, milyonlarca ton elmas Londra'daki dev çelik kasalara kilitlendi. <strong>Nadirlik gerçek değildi, tamamen tasarlanmıştı.</strong></p>
      
      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.1); border-left:4px solid #cbd5e1; padding:30px; border-radius:12px; margin-bottom:40px;">
        <h4 style="color:#f8fafc; font-size:1.3rem; margin-top:0; margin-bottom:15px;">"A Diamond is Forever" (Bir Elmas Sonsuza Kadardır)</h4>
        <p style="color:var(--text-300); font-size:1.1rem; line-height:1.8; margin-bottom:0;">Büyük Buhran (1930'lar) satışları vurunca, N.W. Ayer reklam ajansı ile tarihin en karanlık manipülasyonu başlatıldı. Ajansın gizli brifingi şuydu: <em>"Erkeklerin evlenirken mecburiyetten elmas almalarını sağlayacak bir psikoloji yaratın."</em> 1947'de o efsane slogan yazıldı: Aşkınız sonsuzsa, kanıtı sonsuza dek dayanan bu taştır.</p>
      </div>

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:25px; margin-bottom:50px;">
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:12px; padding:25px;">
          <h4 style="color:#e2e8f0; font-size:1.2rem; margin-bottom:10px;">💵 2 Aylık Maaş Kuralı (Fiyat Çıpası)</h4>
          <p style="color:var(--text-400); font-size:0.95rem; line-height:1.6;">Ajans, reklamlarında "Gerçek bir evlilik teklifi erkeğin 2 aylık maaşına eşit olmalıdır" kuralını uydurdu. Erkeğin gururuyla oynayarak, bir taşa ne kadar harcaması gerektiğini kitlelerin bilinçaltına çivilediler.</p>
        </div>
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:12px; padding:25px;">
          <h4 style="color:#e2e8f0; font-size:1.2rem; margin-bottom:10px;">🚫 İkinci El Pazarını Öldürmek</h4>
          <p style="color:var(--text-400); font-size:0.95rem; line-height:1.6;">"Sonsuza kadardır" vurgusunun asıl amacı aşıklar değil, arz/talep dengesiydi. Eğer yüzük sonsuza kadarsa asla satılmaz, yadigâr kalır. Böylece kuyumculara 2. el elmas gelmedi, arz hep kilitli kaldı.</p>
        </div>
      </div>

      <!-- Vault Visualization -->
      <div style="background:linear-gradient(to right, #020617, #0f172a); border:1px solid #334155; border-radius:24px; padding:40px; margin-bottom:50px; position:relative; overflow:hidden;">
        <h3 style="color:#fff; text-align:center; font-family:var(--font-display); font-size:1.8rem; margin-top:0; margin-bottom:30px;">Büyük Elmas İllüzyonu (Tedarik Zinciri)</h3>
        
        <div style="display:flex; justify-content:space-between; align-items:center; position:relative; z-index:2; gap:20px; flex-wrap:wrap;">
          <div style="text-align:center; flex:1;">
            <div style="font-size:3.5rem; filter:drop-shadow(0 0 10px rgba(255,255,255,0.2));">⛏️</div>
            <div style="color:#94a3b8; font-weight:bold; margin-top:10px;">Gerçek Arz (Bolluk)</div>
          </div>
          
          <div style="color:#334155; font-size:2rem; font-weight:bold;">➞</div>
          
          <div style="text-align:center; flex:1; background:rgba(255,255,255,0.05); padding:20px; border-radius:12px; border:1px solid #475569; position:relative;">
            <div style="position:absolute; top:-10px; right:-10px; background:#ef4444; color:#fff; font-size:0.7rem; font-weight:bold; padding:3px 8px; border-radius:10px;">%90 BLOKE</div>
            <div style="font-size:3.5rem; filter:drop-shadow(0 0 15px rgba(255,255,255,0.4));">🏦</div>
            <div style="color:#cbd5e1; font-weight:bold; margin-top:10px;">De Beers Kasaları</div>
          </div>
          
          <div style="color:#334155; font-size:2rem; font-weight:bold;">➞</div>
          
          <div style="text-align:center; flex:1;">
            <div style="font-size:3.5rem; filter:drop-shadow(0 0 20px rgba(255,255,255,0.6));">💍</div>
            <div style="color:#f8fafc; font-weight:bold; margin-top:10px;">Piyasaya Sızan (Kıtlık)</div>
          </div>
        </div>
      </div>

      <div class="article-alert" style="margin-top: 60px; background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(10,10,10,0.9) 100%); border: 1px solid rgba(255,255,255,0.2); border-left: 6px solid #cbd5e1; border-radius: 16px; padding:40px; box-shadow:0 15px 40px rgba(0,0,0,0.6);">
        <div style="display:flex; align-items:center; gap:15px; margin-bottom:20px;">
          <div style="width:50px; height:50px; background:#cbd5e1; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.8rem; box-shadow:0 0 20px rgba(255,255,255,0.4);">⚡</div>
          <h3 style="margin: 0; color: #f8fafc; font-family:var(--font-display); font-size:1.8rem; text-transform:uppercase; letter-spacing:1px;">Zengince Tokadı</h3>
        </div>
        <p style="margin-bottom: 0; color:#E0E0E0; font-size:1.2rem; line-height:1.8; text-shadow:0 2px 4px rgba(0,0,0,0.5);">
          Bir ürünün ticari değeri üretim maliyetiyle veya nadirliğiyle zerre kadar alakalı değildir; tek geçer akçe, tüketicinin uğruna ödemeye <strong>ikna edildiği</strong> fiyattır. Eğer arzı tekelinize alır ve kitlelerin en ilkel dürtülerine (aşk, statü korkusu) dokunan bir "kültür" icat ederseniz, doğada bolca bulunan sıradan bir karbon kristaline bile servetler ödetebilirsiniz. İnsanlar mantıklı makineler değildir, hikayelere inanırlar.
        </p>
      </div>
  `,

  "porsche-volkswagen-short-squeeze": `
      <div class="article-intro" style="margin-bottom: 50px;">
        <p class="lead" style="font-size:1.35rem; color:var(--text-300); line-height:1.9;">
          <span class="dropcap" style="color:#eab308; font-family:var(--font-display); float:left; font-size:5.5rem; line-height:0.8; margin-right:15px; text-shadow:0 0 25px rgba(234,179,8,0.5);">2</span>008 Küresel Finans Krizi Wall Street'i kan gölüne çevirirken, Almanya'da finans tarihinin gördüğü en acımasız ve kusursuz planlanmış piyasa pusularından biri yaşanıyordu. Sadece spor araba üreten küçük Porsche, bir hedge fon soğukkanlılığıyla kendisinden katbekat büyük Volkswagen (VW) imparatorluğunu yutmaya kalkmıştı. Bu olay finansal piyasalara <strong>"Infinity Squeeze" (Sonsuz Sıkışma)</strong> kavramını kanlı bir şekilde öğretecekti.
        </p>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#eab308; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem; flex-shrink:0;">1</span>
        Bağlam: Wall Street Kibri ve Açığa Satış
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">O dönem VW devasa bir pazar payına sahipti ancak sendikalar yüzünden kârlılığı çok düşüktü. 2008 krizi patladığında, New York ve Londra merkezli milyarder hedge fonları VW'nin çökeceğine emin olup devasa pozisyonlarda <strong>Açığa Satış (Short Selling)</strong> yaptılar. Açığa satış; elinizde olmayan hisseyi ödünç alıp yüksek fiyattan satmak, fiyat düşünce dipten geri alarak aradaki farkı cebe indirmektir. Fonlar o kadar emindi ki, piyasadaki hisselerin %12'sinden fazlasını açığa satmışlardı.</p>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#eab308; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem; flex-shrink:0;">2</span>
        Deha Hamlesi: Gizli Opsiyon Tuzağı
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Fonların bilmediği korkunç bir detay vardı. Porsche'nin efsanevi CEO'su Wendelin Wiedeking, VW'yi tamamen ele geçirmek istiyordu. Hisseleri doğrudan alsaydı fiyatlar uçacak ve yasal bildirim limitlerine takılacaktı. Alman yasalarındaki ölümcül boşluğu kullandılar:</p>
      
      <div style="background:rgba(234,179,8,0.05); border:1px solid rgba(234,179,8,0.2); border-left:4px solid #eab308; padding:30px; border-radius:12px; margin-bottom:40px;">
        <ul style="color:var(--text-300); font-size:1.1rem; line-height:1.8; margin:0; padding-left:20px;">
          <li style="margin-bottom:15px;">Porsche hisse almak yerine, yatırım bankalarından devasa miktarda <strong>Nakit Uzlaşmalı Alım Opsiyonları (Cash-settled Call Options)</strong> satın aldı. Bu türev araçlar hisse sayılmadığı için bildirim zorunluluğu yoktu; kimsenin ruhu duymadan piyasadaki potansiyel hisseleri hortumladılar.</li>
          <li style="margin-bottom:15px;">26 Ekim 2008 Pazar günü borsa kapalıyken o tarihi basın bülteni geldi: <em>"Porsche, VW'nin %42.6 hissesine sahip. Opsiyonlarla birlikte bu oran %74.1'i buluyor."</em></li>
          <li>Kabus matematiği: Alman yasalarına göre Aşağı Saksonya eyaletinin %20 satılamaz bloke hissesi vardı. (%74.1 + %20 = %94.1). Piyasada işlem görebilecek (Float) hisse oranı aniden <strong>%5.9'a düşmüştü!</strong> Ama hedge fonlar piyasanın %12'sini açığa satmıştı. Matematiksel olarak imkansız bir cendereye girmişlerdi.</li>
        </ul>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#eab308; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem; flex-shrink:0;">3</span>
        Sonuç: Katliam (Margin Call)
      </h2>
      
      <!-- Interactive Chart Visual -->
      <div style="background:#0f172a; border:1px solid #1e293b; border-radius:24px; padding:40px; margin-bottom:50px; position:relative; overflow:hidden;">
        <h3 style="color:#eab308; font-family:var(--font-display); text-align:center; margin-top:0; margin-bottom:30px; font-size:1.8rem;">Ekim 2008: Infinity Squeeze</h3>
        
        <div style="height:200px; width:100%; border-bottom:2px solid #334155; border-left:2px solid #334155; position:relative; display:flex; align-items:flex-end;">
          <!-- Graph Line (CSS polygon) -->
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="width:100%; height:100%; position:absolute; bottom:0; left:0;">
            <polyline points="0,80 20,85 40,75 50,70 60,90 70,10 80,5 90,40 100,50" fill="none" stroke="#eab308" stroke-width="2" style="filter:drop-shadow(0 0 10px rgba(234,179,8,0.8));"/>
            <polygon points="0,100 0,80 20,85 40,75 50,70 60,90 70,10 80,5 90,40 100,50 100,100" fill="url(#porscheGrad)" opacity="0.2"/>
            <defs>
              <linearGradient id="porscheGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#eab308" />
                <stop offset="100%" stop-color="transparent" />
              </linearGradient>
            </defs>
          </svg>
          
          <div style="position:absolute; left:65%; top:5%; background:rgba(234,179,8,0.1); border:1px solid #eab308; color:#eab308; padding:5px 10px; border-radius:6px; font-weight:bold; font-size:0.9rem; box-shadow:0 0 15px rgba(234,179,8,0.4);">
            1005€ (Paniğin Zirvesi)
          </div>
          <div style="position:absolute; left:0; top:80%; background:rgba(255,255,255,0.05); color:var(--text-400); padding:2px 8px; border-radius:4px; font-size:0.8rem;">~200€</div>
        </div>
        <p style="color:var(--text-400); text-align:center; margin-top:20px; font-size:0.9rem;">Pazartesi açılışında, açığa satan fonlar iflas etmemek için panikle her fiyattan hisse almaya çalıştı. Ancak hisse yoktu.</p>
      </div>

      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Pazartesi borsa açıldığında tam bir cehennem yaşandı. Açığa satış kuralları gereği, fiyat yükseldiğinde fonların hesapları eksiye düşer ve sistem (Margin Call) onları zorla hisse almaya zorlar. Ancak piyasada hisse kalmadığı için, fonlar panikle 200€, 500€, 800€, hatta 1005€ gibi akıl dışı rakamlara alım emri girmeye başladılar. Birkaç saatliğine VW, dünyanın en değerli şirketi oldu.</p>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Hedge fonlar milyarlarca dolar kaybetti. Hatta bu olayda devasa zarar eden Alman milyarder Adolf Merckle, trenin önüne atlayarak intihar etti. Porsche, sıradan bir araba şirketi olarak bir günde, arabalardan kazanabileceği 100 yıllık kârı sadece bu finansal mühendislik hamlesinden elde etti.</p>
      
      <div class="article-alert" style="margin-top: 60px; background: linear-gradient(135deg, rgba(234,179,8,0.1) 0%, rgba(10,10,10,0.9) 100%); border: 1px solid rgba(234,179,8,0.3); border-left: 6px solid #eab308; border-radius: 16px; padding:40px; box-shadow:0 15px 40px rgba(0,0,0,0.6);">
        <div style="display:flex; align-items:center; gap:15px; margin-bottom:20px;">
          <div style="width:50px; height:50px; background:#eab308; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.8rem; box-shadow:0 0 20px rgba(234,179,8,0.6);">⚡</div>
          <h3 style="margin: 0; color: #fde047; font-family:var(--font-display); font-size:1.8rem; text-transform:uppercase; letter-spacing:1px;">Zengince Tokadı</h3>
        </div>
        <p style="margin-bottom: 0; color:#E0E0E0; font-size:1.2rem; line-height:1.8; text-shadow:0 2px 4px rgba(0,0,0,0.5);">
          Finansal piyasalarda kibir ölümcüldür. "Zaten çok yükseldi, kesin düşecek" diyerek girdiğiniz açığa satış (Short) işlemleri, arka planda sizden çok daha zeki ve nakit gücü yüksek kurumsal bir oyuncunun kurduğu kusursuz bir tuzağın parçası olabilir. Geleneksel alış işlemlerinde zarara uğrama riskiniz %100'dür (sıfıra iner); ancak <strong>açığa satışta fiyat teorik olarak sonsuza kadar çıkabileceği için zararınız matematiksel olarak "Sonsuzdur".</strong>
        </p>
      </div>
  `
};

try {
  let modifiedDataStr = dataStr;
  let updateCount = 0;
  
  for (const slug in masterclassContents) {
      const startMarker = '"slug": "' + slug + '"';
      const startIndex = modifiedDataStr.indexOf(startMarker);
      if (startIndex === -1) {
          console.error("Could not find slug: " + slug);
          continue;
      }
      
      const icerikStartMarker = '"icerik": \`';
      const icerikStartIndex = modifiedDataStr.indexOf(icerikStartMarker, startIndex);
      if (icerikStartIndex === -1) continue;
      
      const startBacktickIndex = icerikStartIndex + icerikStartMarker.length - 1;
      
      const nextObjIndex = modifiedDataStr.indexOf('},', icerikStartIndex);
      let endBacktickIndex = modifiedDataStr.lastIndexOf('\`', nextObjIndex !== -1 ? nextObjIndex : modifiedDataStr.length);
      
      if (endBacktickIndex !== -1 && endBacktickIndex > startBacktickIndex) {
          modifiedDataStr = modifiedDataStr.substring(0, startBacktickIndex + 1) + '\\n' + masterclassContents[slug] + '\\n    ' + modifiedDataStr.substring(endBacktickIndex);
          updateCount++;
      }
  }
  
  fs.writeFileSync(targetPath, modifiedDataStr, 'utf8');
  console.log("Successfully deeply updated " + updateCount + " remaining Dehas!");
} catch (e) {
  console.error("Error:", e);
}
