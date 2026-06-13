const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../data/deha-hamleleri-data.js');
let dataStr = fs.readFileSync(targetPath, 'utf8');

const newContents = {
  "whatsapp-50-kisi-19-milyar-dolar": `
      <div class="article-intro" style="margin-bottom: 40px;">
        <p class="lead" style="font-size:1.35rem; color:var(--text-300); line-height:1.9;">
          <span class="dropcap" style="color:#25D366; font-family:var(--font-display); float:left; font-size:4.5rem; line-height:0.8; margin-right:15px; text-shadow:0 0 20px rgba(37,211,102,0.4);">G</span>eleneksel iş dünyasında şirket değerlemesi; sahip olduğunuz fabrika sayısına, lojistik ağınıza ve bordronuzdaki on binlerce çalışana (headcount) göre ölçülürdü. Ancak 2014 yılında Facebook (Meta), WhatsApp'ı inanılmaz bir rakama, tam <strong>19 Milyar Dolara</strong> satın aldığında, ekonomi kitaplarındaki kurallar tamamen yırtılıp atıldı.
        </p>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#25D366; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">1</span>
        Kriz: Telekomünikasyon Tekelleri
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">O yıllarda insanlar her bir SMS mesajı için GSM operatörlerine fahiş ücretler ödüyordu. SMS, telekom şirketlerinin en kârlı, en risksiz işlerinden biriydi. Bu sisteme rakip olmak imkansız gibi görünüyordu; çünkü bir iletişim ağı kurmak milyarlarca dolarlık kablo, baz istasyonu ve veri merkezi yatırımı gerektiriyordu.</p>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#25D366; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">2</span>
        Deha Hamlesi: "Sıfır Pazarlama, Sonsuz Yazılım Kaldıracı"
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Yahoo'dan ayrılan iki mühendis, Jan Koum ve Brian Acton, bir asırlık telekom endüstrisini <strong>"Yazılım Kaldıracı" (Software Leverage)</strong> ile paramparça ettiler. Stratejileri inanılmaz derecede minimalist ve acımasızdı:</p>
      
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:25px; margin-bottom:50px;">
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-top:4px solid #25D366; border-radius:12px; padding:25px; box-shadow:0 10px 20px rgba(0,0,0,0.3);">
          <div style="font-size:2.5rem; margin-bottom:15px;">🧲</div>
          <h4 style="color:#25D366; font-size:1.2rem; margin-bottom:10px;">Sıfır Müşteri Edinme Maliyeti (CAC)</h4>
          <p style="color:var(--text-400); font-size:0.95rem; line-height:1.6;">Şirketin hiçbir pazarlama ekibi veya PR ajansı yoktu. Ürün o kadar hayati bir sorunu (ücretsiz iletişim) çözüyordu ki, Ağ Etkisi (Network Effect) sayesinde viral olarak kendisini sattı.</p>
        </div>
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-top:4px solid #34d399; border-radius:12px; padding:25px; box-shadow:0 10px 20px rgba(0,0,0,0.3);">
          <div style="font-size:2.5rem; margin-bottom:15px;">🛑</div>
          <h4 style="color:#34d399; font-size:1.2rem; margin-bottom:10px;">Dikkati Dağıtan Her Şeyi Reddetmek</h4>
          <p style="color:var(--text-400); font-size:0.95rem; line-height:1.6;">Jan Koum'un masasında bantlı bir not duruyordu: <em>"Reklam Yok, Oyun Yok, Numara Yok."</em> Saf iletişim odaklı bu yaklaşım, kullanıcı sadakatini zirveye taşıdı.</p>
        </div>
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-top:4px solid #60a5fa; border-radius:12px; padding:25px; box-shadow:0 10px 20px rgba(0,0,0,0.3);">
          <div style="font-size:2.5rem; margin-bottom:15px;">⚡</div>
          <h4 style="color:#60a5fa; font-size:1.2rem; margin-bottom:10px;">Erlang Dili ile Asimetrik Ölçeklenme</h4>
          <p style="color:var(--text-400); font-size:0.95rem; line-height:1.6;">Eşzamanlı milyonlarca bağlantıyı çökmeksizin yönetebilmek için Erlang kullanıldı. 400 Milyon aktif kullanıcıyı sadece 30-40 arası deha düzeyindeki mühendis idare etti.</p>
        </div>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#25D366; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">3</span>
        Sonuç: Kişi Başına Düşen Rekor Değerleme
      </h2>
      
      <!-- Visual Comparison -->
      <div style="background:linear-gradient(135deg, rgba(20,20,20,0.8), rgba(0,0,0,0.9)); border:1px solid rgba(255,255,255,0.05); border-radius:24px; padding:40px; margin-bottom:50px; position:relative; overflow:hidden;">
        <div style="text-align:center; margin-bottom:30px;">
          <h3 style="color:#fff; font-family:var(--font-display); font-size:1.5rem; text-transform:uppercase; letter-spacing:1px; margin:0;">Geleneksel Şirket vs Yazılım Şirketi (2014)</h3>
          <p style="color:var(--text-400); font-size:0.9rem; margin-top:5px;">Aynı Piyasa Değerine Sahip İki Şirketin Karşılaştırması</p>
        </div>
        
        <div style="display:flex; justify-content:space-around; align-items:center; flex-wrap:wrap; gap:30px;">
          <!-- Sony -->
          <div style="text-align:center; flex:1; min-width:200px;">
            <div style="font-size:3rem; margin-bottom:10px; color:rgba(255,255,255,0.5);">🏭</div>
            <h4 style="color:#94a3b8; font-size:1.5rem; margin:0;">SONY</h4>
            <div style="margin-top:20px;">
              <span style="display:block; font-size:0.85rem; color:var(--text-400); text-transform:uppercase;">Çalışan Sayısı</span>
              <strong style="color:#fff; font-size:2.5rem; font-family:monospace;">140,000</strong>
            </div>
            <div style="margin-top:20px; border-top:1px dashed rgba(255,255,255,0.1); padding-top:15px;">
              <span style="display:block; font-size:0.85rem; color:var(--text-400); text-transform:uppercase;">Kişi Başı Değer Üretimi</span>
              <strong style="color:#94a3b8; font-size:1.5rem;">~$135,000</strong>
            </div>
          </div>
          
          <div style="font-size:2rem; color:rgba(255,255,255,0.2);">VS</div>
          
          <!-- WhatsApp -->
          <div style="text-align:center; flex:1; min-width:200px; background:rgba(37,211,102,0.05); border:1px solid rgba(37,211,102,0.2); padding:20px; border-radius:16px; box-shadow:0 0 30px rgba(37,211,102,0.1);">
            <div style="font-size:3rem; margin-bottom:10px; text-shadow:0 0 20px rgba(37,211,102,0.6);">📱</div>
            <h4 style="color:#25D366; font-size:1.5rem; margin:0; text-shadow:0 0 10px rgba(37,211,102,0.3);">WHATSAPP</h4>
            <div style="margin-top:20px;">
              <span style="display:block; font-size:0.85rem; color:var(--text-400); text-transform:uppercase;">Çalışan Sayısı</span>
              <strong style="color:#25D366; font-size:3.5rem; font-family:monospace; text-shadow:0 0 15px rgba(37,211,102,0.4);">55</strong>
            </div>
            <div style="margin-top:20px; border-top:1px dashed rgba(37,211,102,0.2); padding-top:15px;">
              <span style="display:block; font-size:0.85rem; color:var(--text-400); text-transform:uppercase;">Kişi Başı Değer Üretimi</span>
              <strong style="color:#25D366; font-size:1.8rem; text-shadow:0 0 10px rgba(37,211,102,0.3);">$345,000,000</strong>
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
          Yazılım ve kod, tarihteki en asimetrik ve güçlü kaldıraçtır. Bir yazılımı 1 kişi için üretmekle 1 milyar kişi için üretmek arasındaki "marjinal maliyet" neredeyse sıfırdır. Zamanınızı veya bedeninizi (işgücünüzü) satmayı bırakıp, <strong style="color:#25D366;">sonsuza kadar ücretsiz kopyalanabilen dijital sistemler veya kodlar inşa etmelisiniz.</strong> İşçi sınıfından zenginliğe geçişin tek anahtarı "Kaldıraç" (Leverage) kullanmaktır.
        </p>
      </div>
  `,

  "redbull-kendi-pazarini-yaratmak": `
      <div class="article-intro" style="margin-bottom: 40px;">
        <p class="lead" style="font-size:1.35rem; color:var(--text-300); line-height:1.9;">
          <span class="dropcap" style="color:#e11d48; font-family:var(--font-display); float:left; font-size:4.5rem; line-height:0.8; margin-right:15px; text-shadow:0 0 20px rgba(225,29,72,0.4);">B</span>ir içecek markası kurduğunuzu düşünün. Tarifi size ait değil (Tayland'dan bir formül), onu üretecek fabrikanız yok ve girmeye çalıştığınız pazarda Coca-Cola, Pepsi gibi perakende raflarını kapatmış yüzyıllık devasa tekeller var. Normal şartlarda bu işin ilk ayda batması gerekir. Ancak Dietrich Mateschitz, ürünü fiziki bir sıvı olarak satmak yerine <strong>"Adrenalini, Macerayı ve Uykusuzluğu satarak"</strong> tarihin en kârlı pazarlama hamlelerinden birini yaptı.
        </p>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#e11d48; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">1</span>
        Kriz: İçecek Sektöründe Raf Savaşları
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Mateschitz, Tayland'a yaptığı bir iş gezisinde kamyon şoförlerinin uyanık kalmak için içtiği "Krating Daeng" (Kızıl Boğa) isimli şurubu keşfetti. Formülü Avrupalıların damak tadına uyarlayıp (gazlandırarak) piyasaya sürmek istedi. Ancak İngiltere'deki pazar araştırma şirketlerinden gelen raporlar felaketti: İnsanlar içeceğin tadından, yapışkanlığından ve kokusundan kelimenin tam anlamıyla nefret etmişti.</p>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#e11d48; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">2</span>
        Deha Hamlesi: Üretimi Dışarı At, İllüzyon Yarat
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">RedBull, geleneksel kuralları tamamen çöpe attı ve bir "İllüzyon İmparatorluğu" kurdu:</p>
      
      <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:30px; margin-bottom:40px;">
        <div style="background:linear-gradient(145deg, rgba(225,29,72,0.1), rgba(0,0,0,0.4)); border:1px solid rgba(225,29,72,0.2); padding:30px; border-radius:16px;">
          <h3 style="color:#e11d48; font-family:var(--font-display); margin-top:0; font-size:1.4rem;">❌ Fabrikasız (Outsource) Üretim</h3>
          <p style="color:var(--text-300); font-size:1rem; line-height:1.7;">RedBull kendi içeceklerini üretmez. Üretim, alüminyum kutulama ve lojistik tamamen taşeron firmalara (Rauch) yaptırılır. Şirketin tüm bütçesi fabrikalara değil, doğrudan "marka algısına" yatırılır.</p>
        </div>
        <div style="background:linear-gradient(145deg, rgba(245,158,11,0.1), rgba(0,0,0,0.4)); border:1px solid rgba(245,158,11,0.2); padding:30px; border-radius:16px;">
          <h3 style="color:#f59e0b; font-family:var(--font-display); margin-top:0; font-size:1.4rem;">🏷️ Yeni Kategori İcat Etmek</h3>
          <p style="color:var(--text-300); font-size:1rem; line-height:1.7;">Kola veya gazozla rekabet etmek yerine "Enerji İçeceği" (Energy Drink) adında tamamen yepyeni bir pazar kategorisi uydurdular. Kendi yarattığınız kategoride rekabet yoktur, her zaman 1 Numara olursunuz.</p>
        </div>
        <div style="background:linear-gradient(145deg, rgba(16,185,129,0.1), rgba(0,0,0,0.4)); border:1px solid rgba(16,185,129,0.2); padding:30px; border-radius:16px;">
          <h3 style="color:#10b981; font-family:var(--font-display); margin-top:0; font-size:1.4rem;">💎 Veblen Etkisi (Fiyat Psikolojisi)</h3>
          <p style="color:var(--text-300); font-size:1rem; line-height:1.7;">İçeceğin ambalajı çok ince ve küçüktü (250ml) ama fiyatı Coca-Cola'nın 3-4 katıydı. Eczane şişesine benzeyen bu teneke "sıradan bir içecek" değil, "uyku açan tıbbi bir doping" algısı yarattı.</p>
        </div>
        <div style="background:linear-gradient(145deg, rgba(59,130,246,0.1), rgba(0,0,0,0.4)); border:1px solid rgba(59,130,246,0.2); padding:30px; border-radius:16px;">
          <h3 style="color:#3b82f6; font-family:var(--font-display); margin-top:0; font-size:1.4rem;">🪂 Medya ve Ekstrem Spor Şirketi</h3>
          <p style="color:var(--text-300); font-size:1rem; line-height:1.7;">RedBull dünyanın en büyük içerik üreticisidir. Uzaydan atlayan adam, F1 takımları, futbol kulüpleri... Tüketici o tenekeyi açtığında sıvı değil, "ekstrem yaşam tarzını" yudumlar.</p>
        </div>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#e11d48; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">3</span>
        Sonuç: Dünyanın En Kârlı Sıvısı
      </h2>
      
      <!-- Visual Chart -->
      <div style="background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:20px; padding:40px; margin-bottom:50px; text-align:center;">
        <h4 style="color:var(--text-200); font-size:1.3rem; margin-top:0; margin-bottom:30px;">RedBull Bütçe Dağılımı İllüzyonu</h4>
        
        <div style="display:flex; align-items:center; justify-content:center; gap:20px; flex-wrap:wrap;">
          <!-- Pie Chart CSS -->
          <div style="width:200px; height:200px; border-radius:50%; background:conic-gradient(#e11d48 0% 85%, #475569 85% 100%); position:relative; display:flex; align-items:center; justify-content:center; box-shadow:0 0 30px rgba(225,29,72,0.3);">
            <div style="width:140px; height:140px; background:#111; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-direction:column;">
              <span style="font-size:2rem; font-weight:bold; color:#fff;">%85</span>
              <span style="font-size:0.8rem; color:var(--text-400);">Pazarlama</span>
            </div>
          </div>
          
          <div style="text-align:left; max-width:300px; padding:20px;">
            <div style="margin-bottom:15px;">
              <div style="display:inline-block; width:15px; height:15px; background:#e11d48; border-radius:50%; margin-right:10px;"></div>
              <span style="color:#fff; font-weight:bold;">Pazarlama, Spor, Medya (%85)</span>
            </div>
            <div>
              <div style="display:inline-block; width:15px; height:15px; background:#475569; border-radius:50%; margin-right:10px;"></div>
              <span style="color:#94a3b8;">Ürün Maliyeti (Sıvı + Kutu) (%15)</span>
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
          21. Yüzyılda kâr, ürünü "üreten" ellerde değil, o ürünün "hikayesini ve algısını" yöneten beyinlerdedir. Meta (Emtia) üretirseniz kuruşlarla, marka ve hikaye üretirseniz milyar dolarlarla oynarsınız. <strong style="color:#fb7185;">Asıl işiniz fiziksel bir ürün satmak değil, insanların o ürünle sahip olmak istedikleri duyguyu (statü, enerji, macera) satmaktır.</strong>
        </p>
      </div>
  `,

  "de-beers-elmas-illuzyonu": `
      <div class="article-intro" style="margin-bottom: 40px;">
        <p class="lead" style="font-size:1.35rem; color:var(--text-300); line-height:1.9;">
          <span class="dropcap" style="color:#cbd5e1; font-family:var(--font-display); float:left; font-size:4.5rem; line-height:0.8; margin-right:15px; text-shadow:0 0 20px rgba(255,255,255,0.4);">T</span>icaret tarihinin en büyük illüzyonlarından birine hoş geldiniz. Hepimiz elmasın çok nadir, paha biçilemez ve sonsuz aşkın yegane sembolü olduğuna inanırız. Oysa 19. yüzyılın sonlarına kadar elmas, sadece Avrupalı kraliyet ailelerinin taktığı yarı değerli bir taştı ve doğada (örneğin zümrüt veya yakut kadar) nadir falan da değildi. Ta ki De Beers karteli piyasaya girene kadar.
        </p>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#cbd5e1; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">1</span>
        Kriz: Devasa Elmas Madenleri Keşfediliyor
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">1870'lerde Güney Afrika'da devasa elmas madenleri keşfedildi. Tonlarca elmas piyasaya akmaya başladı. Arzın (üretimin) bu kadar artması demek, elmas fiyatlarının dibe çakılması ve elmasın sıradan bir cam parçası değerine düşmesi demekti. İngiliz yatırımcılar, fiyatların düşmesini engellemek için tüm madenleri tek bir tekel (monopol) altında birleştirdiler: <strong>De Beers Consolidated Mines.</strong></p>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#cbd5e1; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">2</span>
        Deha Hamlesi: Arzı Boğmak ve "Aşkı" Satın Almak
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">De Beers'in dehası iki ayaklıydı. Birincisi acımasız bir "Tedarik Yönetimi", ikincisi ise beyin yıkayan bir "Psikolojik Operasyon" (Pazarlama):</p>
      
      <!-- Vault Visualization -->
      <div style="background:linear-gradient(to right, rgba(15,23,42,0.9), rgba(30,41,59,0.9)); border:1px solid rgba(148,163,184,0.2); border-radius:24px; padding:40px; margin-bottom:50px; position:relative; overflow:hidden;">
        <div style="position:absolute; right:-50px; top:-50px; font-size:15rem; opacity:0.03; filter:blur(5px);">💎</div>
        
        <div style="display:flex; gap:30px; align-items:center; flex-wrap:wrap; position:relative; z-index:1;">
          <div style="flex:1; min-width:300px;">
            <h3 style="color:#f8fafc; font-family:var(--font-display); margin-top:0; font-size:1.8rem;">Kasalar Dolusu Yapay Kıtlık</h3>
            <p style="color:var(--text-300); font-size:1.1rem; line-height:1.7;">De Beers, dünyadaki elmas üretiminin <strong>%90'ını</strong> kontrol altına aldı. Piyasaya sadece "kıtlık" hissi yaratacak kadar az elmas sızdırıp, geri kalan milyonlarca taşı devasa Londra kasalarına kilitlediler. Kıtlık yoktu, kıtlık <em>tasarlanmıştı</em>.</p>
          </div>
          <div style="width:200px; height:200px; background:rgba(0,0,0,0.5); border:2px solid #334155; border-radius:12px; position:relative; display:flex; align-items:center; justify-content:center; box-shadow:inset 0 0 50px rgba(0,0,0,1);">
            <div style="font-size:4rem; filter:drop-shadow(0 0 20px rgba(255,255,255,0.4));">🔒💎</div>
          </div>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:25px; margin-bottom:50px;">
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:12px; padding:25px;">
          <h4 style="color:#e2e8f0; font-size:1.2rem; margin-bottom:10px;">"A Diamond is Forever"</h4>
          <p style="color:var(--text-400); font-size:0.95rem; line-height:1.6;">1947'de tarihin en manipülatif kampanyasını başlattılar. Amaç, genç erkekleri evlenirken mutlaka elmas yüzük almaya ikna etmekti: <em>"Aşkınız sonsuzsa, ona zamanın yok edemeyeceği bir taş alın."</em></p>
        </div>
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:12px; padding:25px;">
          <h4 style="color:#e2e8f0; font-size:1.2rem; margin-bottom:10px;">Fiyat Çıpalaması</h4>
          <p style="color:var(--text-400); font-size:0.95rem; line-height:1.6;">Erkeklerin ne kadar harcaması gerektiğini de onlar belirledi: <em>"Gerçek aşkın bedeli, 2 aylık maaşınızdır."</em> Bu, bir ürünün fiyatını tüketicinin gelirine bağlayan ilk psikolojik manipülasyondu.</p>
        </div>
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:12px; padding:25px;">
          <h4 style="color:#e2e8f0; font-size:1.2rem; margin-bottom:10px;">İkinci El Pazarını Öldürmek</h4>
          <p style="color:var(--text-400); font-size:0.95rem; line-height:1.6;">"Sonsuza kadardır" vurgusu, yüzüğün satılmamasını, aile yadigarı olarak saklanmasını sağladı; böylece kimse yüzüğünü satmadı, piyasaya ikinci el elmas girmedi, arz hep düşük kaldı.</p>
        </div>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#cbd5e1; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">3</span>
        Sonuç: Kırılması İmkansız Bir Tabu
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">1930'larda ABD'deki evliliklerin sadece %10'unda elmas yüzük varken, kampanya sonrası bu oran %80'lere fırladı. Bugün tüm dünyada evlilik tekliflerinin tartışmasız ön koşulu olan tektaş pırlanta kültürü, aslında sadece 80 yıllık başarılı bir reklam kampanyasının ürünüdür. De Beers, sadece taşı değil, evlilik ritüelinin bizzat kendisini satmayı başarmıştır.</p>
      
      <div class="article-alert" style="margin-top: 60px; background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(10,10,10,0.9) 100%); border: 1px solid rgba(255,255,255,0.2); border-left: 6px solid #cbd5e1; border-radius: 16px; padding:40px; box-shadow:0 15px 40px rgba(0,0,0,0.6);">
        <div style="display:flex; align-items:center; gap:15px; margin-bottom:20px;">
          <div style="width:50px; height:50px; background:#cbd5e1; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.8rem; box-shadow:0 0 20px rgba(255,255,255,0.4);">⚡</div>
          <h3 style="margin: 0; color: #f8fafc; font-family:var(--font-display); font-size:1.8rem; text-transform:uppercase; letter-spacing:1px;">Zengince Tokadı</h3>
        </div>
        <p style="margin-bottom: 0; color:#E0E0E0; font-size:1.2rem; line-height:1.8; text-shadow:0 2px 4px rgba(0,0,0,0.5);">
          Bir ürünün değeri, onun fiziksel nadirliğinden değil, insanların onun uğruna ödemeye <strong>"ikna edildikleri"</strong> bedelden ibarettir. Değer her zaman algısaldır. Eğer arzı kısıtlar ve o ürüne güçlü, duygusal (aşk, statü) bir anlam yüklerseniz, taşa bile servet ödetebilirsiniz.
        </p>
      </div>
  `,

  "porsche-volkswagen-short-squeeze": `
      <div class="article-intro" style="margin-bottom: 40px;">
        <p class="lead" style="font-size:1.35rem; color:var(--text-300); line-height:1.9;">
          <span class="dropcap" style="color:#eab308; font-family:var(--font-display); float:left; font-size:4.5rem; line-height:0.8; margin-right:15px; text-shadow:0 0 20px rgba(234,179,8,0.4);">2</span>008 Küresel Finans Krizi tüm dünyayı kasıp kavururken, Almanya'da finans tarihinin en acımasız ve zekice tasarlanmış piyasa operasyonlarından biri yaşanıyordu. Bu hikaye, sadece araç üretmekle kalmayan, aynı zamanda bir hedge fon gibi çalışan Porsche'nin, kendisinden devasa büyüklükteki Volkswagen (VW) imparatorluğunu yutma girişimidir.
        </p>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#eab308; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">1</span>
        Bağlam: Hedge Fonların Açığa Satış Oyunu
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">O dönem Volkswagen, Almanya pazarında kârlılığı düşük, hantal bir dev olarak görülüyordu. Ekonomik kriz de patlak verince, Wall Street hedge fonları VW hisselerinin değer kaybedeceğine kesin gözüyle bakarak milyarlarca dolarlık <strong>Açığa Satış (Short Selling)</strong> yaptılar. (Açığa satış: Olmayan hisseyi yüksekten satıp, fiyat düşünce düşükten alarak yerine koyma ve aradaki farktan kâr etme sanatıdır). Fonlar, VW'nin çökeceğinden o kadar emindi ki, devasa pozisyonlar aldılar.</p>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#eab308; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">2</span>
        Deha Hamlesi: Sessiz Gizli Operasyon
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Ancak fonların bilmediği bir şey vardı: Porsche'nin efsanevi CEO'su Wendelin Wiedeking. Porsche, otomobil satmaktan elde ettiği nakdi kullanarak VW hisselerini piyasadan sessizce toplamaya başlamıştı. Almanya yasalarındaki bir boşluğu kullandılar:</p>
      
      <div style="background:rgba(234,179,8,0.05); border:1px solid rgba(234,179,8,0.2); border-left:4px solid #eab308; padding:30px; border-radius:12px; margin-bottom:40px;">
        <ul style="color:var(--text-300); font-size:1.1rem; line-height:1.8; margin:0; padding-left:20px;">
          <li style="margin-bottom:15px;">Doğrudan hisse almak yerine, bankalar üzerinden <strong>"Nakit Uzlaşmalı Opsiyonlar" (Cash-settled options)</strong> satın aldılar. Bu sayede yasal bildirim limitlerine takılmadan hisse sahipliğini gizlediler.</li>
          <li style="margin-bottom:15px;">Ekim 2008'in pazar günü Porsche şok bir basın bülteni yayınladı: <em>"Volkswagen'in %42.6 hissesine sahibiz. Opsiyonlarla birlikte bu oran %74.1'e ulaştı."</em></li>
          <li>Alman eyaleti Aşağı Saksonya'nın da VW'de %20 bloke hissesi vardı. Piyasada alınıp satılabilecek hisse neredeyse kalmamıştı!</li>
        </ul>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#eab308; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">3</span>
        Sonuç: Infinity Squeeze (Sonsuz Sıkışma)
      </h2>
      
      <!-- Interactive Chart Visual -->
      <div style="background:#0f172a; border:1px solid #1e293b; border-radius:24px; padding:40px; margin-bottom:50px; position:relative; overflow:hidden;">
        <h3 style="color:#eab308; font-family:var(--font-display); text-align:center; margin-top:0; margin-bottom:30px; font-size:1.8rem;">Ekim 2008: VW Hisse Grafiği Katliamı</h3>
        
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
          
          <div style="position:absolute; left:65%; top:5%; background:rgba(234,179,8,0.1); border:1px solid #eab308; color:#eab308; padding:5px 10px; border-radius:6px; font-weight:bold; font-size:0.9rem;">
            1005€ (Tarihi Zirve)
          </div>
        </div>
        <p style="color:var(--text-400); text-align:center; margin-top:20px; font-size:0.9rem;">Birkaç gün içinde VW hissesi 200€'dan 1000€'nun üzerine fırladı ve VW dünyanın en değerli şirketi oldu.</p>
      </div>

      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Hedge fonlar dehşete düştü. Piyasada serbestçe alınıp satılabilecek (Float) VW hisse oranı aniden <strong>%6'nın altına</strong> inmişti! Açığa satış yapan fonlar, sözleşmeleri gereği sattıkları hisseleri geri almak (Short Cover) zorundaydılar. Ancak ortada hisse yoktu, olan hisselerin hepsi Porsche'nin elindeydi.</p>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Pazartesi sabahı borsa açıldığında tam bir katliam yaşandı. Fonlar hisse bulabilmek için panikle her fiyattan emir girmeye başladılar. Açığa satış yapan hedge fonlar milyarlarca dolar zarar edip battılar. Porsche, bir gecede otomobil satarak yapabileceği 100 yıllık kârı, bu finansal mühendislik operasyonuyla elde etti.</p>
      
      <div class="article-alert" style="margin-top: 60px; background: linear-gradient(135deg, rgba(234,179,8,0.1) 0%, rgba(10,10,10,0.9) 100%); border: 1px solid rgba(234,179,8,0.3); border-left: 6px solid #eab308; border-radius: 16px; padding:40px; box-shadow:0 15px 40px rgba(0,0,0,0.6);">
        <div style="display:flex; align-items:center; gap:15px; margin-bottom:20px;">
          <div style="width:50px; height:50px; background:#eab308; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.8rem; box-shadow:0 0 20px rgba(234,179,8,0.6);">⚡</div>
          <h3 style="margin: 0; color: #fde047; font-family:var(--font-display); font-size:1.8rem; text-transform:uppercase; letter-spacing:1px;">Zengince Tokadı</h3>
        </div>
        <p style="margin-bottom: 0; color:#E0E0E0; font-size:1.2rem; line-height:1.8; text-shadow:0 2px 4px rgba(0,0,0,0.5);">
          Finansal piyasalarda kimin eli kimin cebinde belli değildir. "Kesin düşecek" diyerek girdiğiniz yüksek kaldıraçlı işlemler, arka planda sizden çok daha zeki ve nakit gücü yüksek bir kurumsal oyuncunun kurduğu kusursuz bir tuzağın parçası olabilir. <strong style="color:#eab308;">Alış işleminin zararı yatırdığınız parayla sınırlıyken, açığa satışın zararı matematiksel olarak sonsuzdur.</strong>
        </p>
      </div>
  `,

  "amazon-aws-maliyet-kar-merkezi": `
      <div class="article-intro" style="margin-bottom: 40px;">
        <p class="lead" style="font-size:1.35rem; color:var(--text-300); line-height:1.9;">
          <span class="dropcap" style="color:#f97316; font-family:var(--font-display); float:left; font-size:4.5rem; line-height:0.8; margin-right:15px; text-shadow:0 0 20px rgba(249,115,22,0.4);">B</span>ugün Amazon denilince herkesin aklına kargo kutuları, e-ticaret depoları ve ucuz alışveriş gelir. Oysa Amazon'un e-ticaret tarafı (özellikle perakende nakliyesi) operasyonel olarak yıllarca zarar etmiş, zar zor başa baş noktasında kalmış devasa ve hantal bir yapıdır. Amazon'u bugün trilyonlarca dolarlık değere taşıyan, şirketin tüm kârının ana motorunu oluşturan asıl deha hamlesi <strong>AWS (Amazon Web Services)</strong> adı verilen bulut bilişim hizmetidir.
        </p>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#f97316; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">1</span>
        Kriz: E-Ticaretin Çılgın Altyapı Maliyetleri
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">2000'li yılların başında Amazon hızla büyüyordu. Ancak "Black Friday" veya "Noel" gibi kampanya dönemlerinde siteye milyonlarca kullanıcı aynı anda girdiği için site çöküyordu. Amazon bu yükü kaldırabilmek için devasa sunucu tarlaları (Veri merkezleri) kurmak zorunda kaldı. Ancak sorun şuydu: Yılın 350 günü bu sunucuların devasa işlem gücü boşta yatıyor ama bakım, soğutma ve kira maliyetleri şirketin kanını emiyordu.</p>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#f97316; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">2</span>
        Deha Hamlesi: Altyapıyı Kiraya Vermek
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Jeff Bezos ve ekibi müthiş bir paradigma değişimi yaşadılar: <em>"Biz kendi sitemizi ayakta tutmak için çok iyi bir altyapı yönetim becerisi geliştirdik. Neden bu boşta duran sunucu kapasitemizi, sunucu kurmaya parası yetmeyen diğer teknoloji şirketlerine saatlik olarak kiralamıyoruz?"</em></p>
      
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:30px; margin-bottom:50px;">
        <div style="background:rgba(249,115,22,0.05); border:1px solid rgba(249,115,22,0.2); padding:30px; border-radius:16px;">
          <h4 style="color:#fdba74; font-size:1.3rem; margin-top:0;">Donanımı Yazılıma Dönüştürmek</h4>
          <p style="color:var(--text-400); line-height:1.6; margin-bottom:0;">Şirketler aylar süren süreçlerle fiziksel bilgisayar kasaları satın alıp kurmak zorundaydı. AWS, bunu bir web arayüzünden saniyeler içinde "sanal sunucu" olarak kiralama imkanı sundu.</p>
        </div>
        <div style="background:rgba(249,115,22,0.05); border:1px solid rgba(249,115,22,0.2); padding:30px; border-radius:16px;">
          <h4 style="color:#fdba74; font-size:1.3rem; margin-top:0;">Kullandığın Kadar Öde</h4>
          <p style="color:var(--text-400); line-height:1.6; margin-bottom:0;">Sermayesi olmayan startup'lar, donanım masrafı yapmak yerine Amazon'a sadece o ay kullandıkları internet trafiği kadar ödeme yaptılar. Bu, Silikon Vadisi'nde yüzlerce startup'ın doğmasını sağladı.</p>
        </div>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#f97316; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">3</span>
        Sonuç: Trilyon Dolarlık Bulut ve Kâr Motoru
      </h2>
      
      <!-- Visual Display of AWS vs Retail -->
      <div style="background:linear-gradient(180deg, #1f2937, #111827); border:1px solid rgba(255,255,255,0.05); border-radius:24px; padding:40px; margin-bottom:50px;">
        <h3 style="color:#fff; text-align:center; margin-top:0; margin-bottom:40px; font-family:var(--font-display);">Amazon Kârının Gerçek Kaynağı</h3>
        
        <div style="display:flex; justify-content:center; gap:40px; flex-wrap:wrap;">
          <div style="flex:1; min-width:200px; background:rgba(0,0,0,0.3); padding:25px; border-radius:16px; border-top:4px solid #64748b;">
            <h4 style="color:#cbd5e1; text-align:center; font-size:1.2rem; margin-top:0;">🛒 E-Ticaret (Perakende)</h4>
            <div style="display:flex; justify-content:space-between; margin-bottom:10px; margin-top:20px;">
              <span style="color:var(--text-400);">Ciro Payı</span>
              <span style="color:#fff; font-weight:bold;">~%85</span>
            </div>
            <div style="width:100%; height:8px; background:#334155; border-radius:4px;"><div style="width:85%; height:100%; background:#94a3b8; border-radius:4px;"></div></div>
            
            <div style="display:flex; justify-content:space-between; margin-bottom:10px; margin-top:20px;">
              <span style="color:var(--text-400);">Kâr Payı</span>
              <span style="color:#fff; font-weight:bold;">~%25</span>
            </div>
            <div style="width:100%; height:8px; background:#334155; border-radius:4px;"><div style="width:25%; height:100%; background:#94a3b8; border-radius:4px;"></div></div>
          </div>
          
          <div style="flex:1; min-width:200px; background:rgba(249,115,22,0.05); padding:25px; border-radius:16px; border-top:4px solid #f97316; box-shadow:0 10px 30px rgba(249,115,22,0.15);">
            <h4 style="color:#f97316; text-align:center; font-size:1.2rem; margin-top:0; text-shadow:0 0 10px rgba(249,115,22,0.5);">☁️ AWS (Bulut)</h4>
            <div style="display:flex; justify-content:space-between; margin-bottom:10px; margin-top:20px;">
              <span style="color:var(--text-400);">Ciro Payı</span>
              <span style="color:#fdba74; font-weight:bold;">~%15</span>
            </div>
            <div style="width:100%; height:8px; background:#334155; border-radius:4px;"><div style="width:15%; height:100%; background:#f97316; border-radius:4px; box-shadow:0 0 10px #f97316;"></div></div>
            
            <div style="display:flex; justify-content:space-between; margin-bottom:10px; margin-top:20px;">
              <span style="color:var(--text-400);">Kâr Payı</span>
              <span style="color:#fdba74; font-weight:bold; font-size:1.2rem;">~%75</span>
            </div>
            <div style="width:100%; height:8px; background:#334155; border-radius:4px;"><div style="width:75%; height:100%; background:#f97316; border-radius:4px; box-shadow:0 0 10px #f97316;"></div></div>
          </div>
        </div>
      </div>

      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Bugün Netflix, Airbnb, Uber ve hatta CIA bile verilerini Amazon AWS sunucularında tutuyor. Amazon'un e-ticaret kolu, AWS'nin yarattığı devasa nakit akışı sayesinde rakiplerine karşı fiyat kırma savaşlarını finanse edebiliyor. AWS, internetin adeta "elektrik ve su şebekesi" haline gelmiş durumda.</p>
      
      <div class="article-alert" style="margin-top: 60px; background: linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(10,10,10,0.9) 100%); border: 1px solid rgba(249,115,22,0.3); border-left: 6px solid #f97316; border-radius: 16px; padding:40px; box-shadow:0 15px 40px rgba(0,0,0,0.6);">
        <div style="display:flex; align-items:center; gap:15px; margin-bottom:20px;">
          <div style="width:50px; height:50px; background:#f97316; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.8rem; box-shadow:0 0 20px rgba(249,115,22,0.6);">⚡</div>
          <h3 style="margin: 0; color: #fdba74; font-family:var(--font-display); font-size:1.8rem; text-transform:uppercase; letter-spacing:1px;">Zengince Tokadı</h3>
        </div>
        <p style="margin-bottom: 0; color:#E0E0E0; font-size:1.2rem; line-height:1.8; text-shadow:0 2px 4px rgba(0,0,0,0.5);">
          Şirketinizin en büyük gider kalemi (Cost Center), doğru vizyonla bakıldığında en büyük kâr merkezinize (Profit Center) dönüşebilir. Sizin çözmek için ter döktüğünüz devasa bir operasyonel sorun, aslında diğer şirketlerin de yaşayıp çözemediği bir sorundur. <strong style="color:#f97316;">Kendi ilacınızı dışarıya satmayı öğrenin.</strong>
        </p>
      </div>
  `
};

// Parse the file and replace contents safely using JS parser
let parsedArray;
try {
  // Safe evaluation of the array since it's just data
  const dataExtract = dataStr.match(/const DEHA_HAMLELERI = (\[[\s\S]*?\]);\n\nconst DEHA_KATEGORILERI/);
  if (!dataExtract) {
      throw new Error("Could not extract DEHA_HAMLELERI array");
  }
  
  // We'll manually replace the strings in the raw file to avoid messing up other properties
  let modifiedDataStr = dataStr;
  
  for (const slug in newContents) {
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
      
      // Find end backtick by searching for the start of next object or end of array
      const nextObjIndex = modifiedDataStr.indexOf('},', icerikStartIndex);
      let endBacktickIndex = modifiedDataStr.lastIndexOf('\`', nextObjIndex !== -1 ? nextObjIndex : modifiedDataStr.length);
      
      if (endBacktickIndex !== -1 && endBacktickIndex > startBacktickIndex) {
          modifiedDataStr = modifiedDataStr.substring(0, startBacktickIndex + 1) + '\\n' + newContents[slug] + '\\n    ' + modifiedDataStr.substring(endBacktickIndex);
      }
  }
  
  fs.writeFileSync(targetPath, modifiedDataStr, 'utf8');
  console.log("Successfully updated all other Dehas!");
} catch (e) {
  console.error("Error:", e);
}
