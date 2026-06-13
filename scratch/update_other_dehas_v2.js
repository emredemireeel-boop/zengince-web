const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../data/deha-hamleleri-data.js');
let dataStr = fs.readFileSync(targetPath, 'utf8');

const newContents = {
  "whatsapp-50-kisi-19-milyar-dolar": `
      <div class="article-intro" style="margin-bottom: 40px;">
        <p class="lead" style="font-size:1.35rem; color:var(--text-300); line-height:1.9;">
          <span class="dropcap" style="color:#25D366; font-family:var(--font-display); float:left; font-size:4.5rem; line-height:0.8; margin-right:15px; text-shadow:0 0 20px rgba(37,211,102,0.4);">G</span>eleneksel iş dünyasında şirket değerlemesi on yıllar boyunca fiziksel varlıklara göre yapıldı: Sahip olduğunuz fabrika sayısı, lojistik ağınız, tır filonuz ve bordronuzdaki on binlerce çalışanın (headcount) büyüklüğü... Ancak 19 Şubat 2014 tarihinde, Silikon Vadisi'nin devlerinden Facebook (Meta), mütevazı bir ofiste çalışan 55 kişilik bir ekibi inanılmaz bir rakama, tam <strong>19 Milyar Dolara</strong> satın aldığında, ekonomi kitaplarındaki tüm kurallar kelimenin tam anlamıyla yırtılıp atıldı. Bu sadece bir satın alma değil, "Marjinal Maliyeti Sıfır" olan yazılım dünyasının fiziksel dünyaya attığı en büyük tokatlardan biriydi.
        </p>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#25D366; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">1</span>
        Kriz ve Bağlam: Telekomünikasyon Tekellerinin Sömürüsü
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">2000'li yılların başı ve ortasında, küresel telekomünikasyon operatörleri (GSM şirketleri) dünyanın en rahat ve kârlı iş modeline sahipti: SMS (Kısa Mesaj Servisi). Sadece 160 karakterden oluşan, ağ üzerinde neredeyse hiçbir bant genişliği kaplamayan bu veri paketleri için kullanıcılardan mesaj başına fahiş ücretler alınıyordu. İnsanlar sevdikleriyle mesajlaşırken kelimeleri kısaltmak, sesli harfleri yutmak zorundaydı. Operatörler için bu, maliyeti "sıfır" olan ama milyarlarca dolar basan bir para makinesiydi.</p>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Bu sisteme dışarıdan rakip olmak imkansız gibi görünüyordu; çünkü bir iletişim ağı kurmak demek milyarlarca dolarlık kablo çekmek, on binlerce baz istasyonu dikmek ve devasa veri merkezleri inşa etmek demekti. Sermaye bariyeri aşılamayacak kadar yüksekti. Ancak "İnternet Protokolü" (IP) ve akıllı telefonların yükselişi, eski dünyayı yıkacak olan o eşsiz arka kapıyı aralamıştı.</p>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#25D366; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">2</span>
        Mimarlar: Jan Koum ve Brian Acton
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Yahoo'da altyapı mühendisliği yapan Jan Koum ve Brian Acton, şirketten ayrıldıktan sonra bir yıl boyunca Güney Amerika'da gezip dinlendiler. Hatta Facebook'a iş başvurusunda bulundular ve her ikisi de reddedildi! (Brian Acton o dönem Twitter'a yazdığı mesajda <em>"Facebook beni reddetti, harika insanlarla tanışma fırsatıydı. Hayata devam"</em> diyecekti). Jan Koum'un çocukluğu, devletin (KGB) telefonları dinlediği Sovyetler Birliği dönemi Ukrayna'sında geçmişti. Bu yüzden gizliliğe, reklamsız iletişime ve güvenliğe saplantılı düzeyde önem veriyordu.</p>
      
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">2009'da iPhone'un Push Notification (Bildirim) altyapısını açmasıyla Koum, insanların durumlarını (Status) rehberlerindeki kişilerle paylaşabileceği "WhatsApp" fikrini buldu. Uygulama kısa sürede bir "ücretsiz mesajlaşma" devrimine dönüştü. Stratejileri inanılmaz derecede minimalist ve bir o kadar da acımasızdı:</p>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:25px; margin-bottom:50px;">
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-top:4px solid #25D366; border-radius:12px; padding:25px; box-shadow:0 10px 20px rgba(0,0,0,0.3);">
          <div style="font-size:2.5rem; margin-bottom:15px;">🧲</div>
          <h4 style="color:#25D366; font-size:1.2rem; margin-bottom:10px;">Sıfır Pazarlama Maliyeti (CAC)</h4>
          <p style="color:var(--text-400); font-size:0.95rem; line-height:1.6;">Şirketin hiçbir pazarlama ekibi veya PR ajansı yoktu. Ürün o kadar hayati bir sorunu (uluslararası ve yerel ücretsiz iletişim) çözüyordu ki, Ağ Etkisi (Network Effect) sayesinde viral olarak kendisini sattı. Bir kişi kurduğunda, arkadaşını da kurmaya zorluyordu.</p>
        </div>
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-top:4px solid #34d399; border-radius:12px; padding:25px; box-shadow:0 10px 20px rgba(0,0,0,0.3);">
          <div style="font-size:2.5rem; margin-bottom:15px;">🛑</div>
          <h4 style="color:#34d399; font-size:1.2rem; margin-bottom:10px;">Dikkat Dağıtıcıları Yok Etmek</h4>
          <p style="color:var(--text-400); font-size:0.95rem; line-height:1.6;">Koum'un masasında bantlı bir not duruyordu: <em>"Reklam Yok, Oyun Yok, Numara Yok."</em> Rakipleri uygulamalarına binlerce gereksiz özellik, oyun ve reklam doldururken, WhatsApp sadece hızlı ve güvenilir çalışmaya odaklandı.</p>
        </div>
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-top:4px solid #60a5fa; border-radius:12px; padding:25px; box-shadow:0 10px 20px rgba(0,0,0,0.3);">
          <div style="font-size:2.5rem; margin-bottom:15px;">⚡</div>
          <h4 style="color:#60a5fa; font-size:1.2rem; margin-bottom:10px;">Erlang ile Asimetrik Ölçeklenme</h4>
          <p style="color:var(--text-400); font-size:0.95rem; line-height:1.6;">Eşzamanlı milyonlarca bağlantıyı çökmeksizin yönetebilmek için Erlang programlama dilini ve FreeBSD işletim sistemini kullandılar. Tek bir sunucuda 2 milyondan fazla eşzamanlı bağlantıyı idare edebilecek kadar sunucuları optimize ettiler.</p>
        </div>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#25D366; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">3</span>
        Sonuç: Finans Tarihinin En Büyük Çarpanı
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">2014 yılına gelindiğinde WhatsApp'ın aktif kullanıcı sayısı 400 milyonu aşmıştı ve günde 1 milyon yeni kullanıcı kayıt oluyordu. Bu devasa ekosistemi sadece 32 mühendis ayakta tutuyordu. Facebook, bu inanılmaz "zaman ve dikkat tekeli"ni ele geçirmek ve gelecekteki en büyük rakibini yok etmek için 4 milyar doları nakit, 12 milyar doları hisse ve 3 milyar doları kısıtlı hisse senedi olmak üzere toplam 19 Milyar Dolarlık o tarihi teklifi yaptı. Anlaşma duyurulduğunda Koum ve Acton, imzaları ABD'de eskiden yemek fişi (food stamp) kuyruğuna girdikleri sosyal hizmetler binasının kapısında attılar.</p>
      
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
            <h4 style="color:#94a3b8; font-size:1.5rem; margin:0;">SONY (2014)</h4>
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
              <strong style="color:#25D366; font-size:1.8rem; text-shadow:0 0 10px rgba(37,211,102,0.3);">$345,454,000</strong>
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
          Yazılım ve kod, tarihteki en asimetrik ve güçlü kaldıraçtır. Fiziksel bir kahveyi satmak için kahve çekirdeğine, bardağa, dükkana ve çalışana ihtiyacınız vardır; bir kahveyi iki kere satamazsınız. Ancak <strong>bir yazılımı 1 kişi için üretmekle 1 milyar kişi için kopyalamak arasındaki "marjinal maliyet" neredeyse sıfırdır.</strong> Zamanınızı (saatlik ücret) veya bedeninizi (fiziksel işgücü) satmayı bırakıp, sonsuza kadar ücretsiz kopyalanabilen dijital sistemler veya kodlar inşa etmelisiniz. Modern çağda işçi sınıfından zenginliğe geçişin tek anahtarı budur.
        </p>
      </div>
  `,

  "redbull-kendi-pazarini-yaratmak": `
      <div class="article-intro" style="margin-bottom: 40px;">
        <p class="lead" style="font-size:1.35rem; color:var(--text-300); line-height:1.9;">
          <span class="dropcap" style="color:#e11d48; font-family:var(--font-display); float:left; font-size:4.5rem; line-height:0.8; margin-right:15px; text-shadow:0 0 20px rgba(225,29,72,0.4);">B</span>ir içecek markası kurduğunuzu düşünün. Formül size ait değil (Tayland'dan bir eczacının icadı), onu üretecek fabrikanız yok, içeceğin tadı pazar testlerinde "iğrenç" bulunuyor ve girmeye çalıştığınız pazarda Coca-Cola ve Pepsi gibi perakende raflarını yüzyıldır domine eden devasa tröstler var. Mantıksal olarak bu işin daha ilk ayda batması gerekir. Ancak Avusturyalı eski bir pazarlamacı olan Dietrich Mateschitz, ürünü fiziki bir sıvı olarak satmak yerine <strong>"Adrenalini, Macerayı ve Uykusuzluğu satarak"</strong> modern kapitalizmin en kârlı pazarlama dehasını yarattı.
        </p>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#e11d48; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">1</span>
        Kriz: Jet-Lag ve Kamyoncu Şurubu
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">1982 yılında Dietrich Mateschitz, Blendax isimli bir Alman kozmetik şirketi için uluslararası satış müdürü olarak çalışıyordu. Tayland'a yaptığı sıkıcı bir iş gezisi sırasında şiddetli bir jet-lag (saat farkı yorgunluğu) yaşadı. Yerel bir eczaneye girip uyanık kalmasını sağlayacak bir şeyler ararken "Krating Daeng" (Tay dilinde "Kızıl Boğa") adında, yerel kamyon şoförlerinin ve işçilerin uyanık kalmak için içtiği kalın, şurup gibi, kafein ve taurin dolu bir içecek keşfetti. Bir şişe içti ve yorgunluğu bir anda buharlaştı.</p>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">İçeceğin mucidi Chaleo Yoovidhya'yı buldu ve ona şu teklifi sundu: <em>"Senin içeceğini Batı dünyasına götüreceğim. Şirketi yarı yarıya paylaşacağız. Üretim senden, Avrupa'daki pazarlama benden."</em> Yoovidhya kabul etti. Mateschitz işinden istifa edip, Avrupa'nın damak tadına uysun diye şuruba gaz (karbonat) ekledi ve ambalajı modernleştirdi. Ancak İngiltere'deki pazar araştırma şirketlerinden gelen raporlar felaketti: İnsanlar içeceğin tadından, yapışkanlığından ve ilaç gibi kokusundan kelimenin tam anlamıyla nefret etmişti.</p>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#e11d48; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">2</span>
        Deha Hamlesi: Fabrikayı Boşver, Algıyı Yönet
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Test raporlarını umursamayan Mateschitz, geleneksel iş modellerini tamamen çöpe attı ve bir "İllüzyon İmparatorluğu" kurdu:</p>
      
      <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:30px; margin-bottom:40px;">
        <div style="background:linear-gradient(145deg, rgba(225,29,72,0.1), rgba(0,0,0,0.4)); border:1px solid rgba(225,29,72,0.2); padding:30px; border-radius:16px;">
          <h3 style="color:#e11d48; font-family:var(--font-display); margin-top:0; font-size:1.4rem;">❌ Fabrikasız (Outsource) Şirket</h3>
          <p style="color:var(--text-300); font-size:1rem; line-height:1.7;">RedBull aslında hiçbir şey "üretmez". İçeceğin üretimi, kutulanması ve tüm lojistiği Rauch adında Avusturyalı bir meyve suyu üreticisine taşere edilmiştir (outsource). RedBull'un milyarlarca dolarlık bütçesi fabrikalara, makinelere veya işçilere değil, tamamen <strong>marka inşasına</strong> gider.</p>
        </div>
        <div style="background:linear-gradient(145deg, rgba(245,158,11,0.1), rgba(0,0,0,0.4)); border:1px solid rgba(245,158,11,0.2); padding:30px; border-radius:16px;">
          <h3 style="color:#f59e0b; font-family:var(--font-display); margin-top:0; font-size:1.4rem;">🏷️ Yeni Kategori İcat Etmek</h3>
          <p style="color:var(--text-300); font-size:1rem; line-height:1.7;">Coca-Cola ile "soğuk içecek" kategorisinde yarışamazlardı. Bu yüzden "Enerji İçeceği" (Energy Drink) adında tamamen yepyeni bir kavram icat ettiler. Eğer var olan bir pazarda güçlü rakipler varsa, onlarla savaşmayın; kendi pazarınızı kurun ve orada 1 numara olun.</p>
        </div>
        <div style="background:linear-gradient(145deg, rgba(16,185,129,0.1), rgba(0,0,0,0.4)); border:1px solid rgba(16,185,129,0.2); padding:30px; border-radius:16px;">
          <h3 style="color:#10b981; font-family:var(--font-display); margin-top:0; font-size:1.4rem;">💎 Veblen Etkisi (Fiyatlandırma)</h3>
          <p style="color:var(--text-300); font-size:1rem; line-height:1.7;">Ambalaj geleneksel 330ml yerine ince ve küçük (250ml) tasarlandı. Fiyatı ise kola'nın neredeyse 3 katıydı. Eczane şişesine benzeyen bu tasarım ve yüksek fiyat, bilinçaltında "bu sıradan bir içecek değil, pahalı tıbbi bir performans artırıcı" algısı yarattı.</p>
        </div>
        <div style="background:linear-gradient(145deg, rgba(59,130,246,0.1), rgba(0,0,0,0.4)); border:1px solid rgba(59,130,246,0.2); padding:30px; border-radius:16px;">
          <h3 style="color:#3b82f6; font-family:var(--font-display); margin-top:0; font-size:1.4rem;">🎯 Gerilla Pazarlama</h3>
          <p style="color:var(--text-300); font-size:1rem; line-height:1.7;">İlk yıllarda gece kulüplerinin ve üniversitelerin etrafındaki çöp kutularını bilerek boş RedBull kutularıyla doldurdular. İnsanlar bunu görüp "Herkes bunu içiyor olmalı, çok popüler" diye düşündü (Social Proof Illusion).</p>
        </div>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#e11d48; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">3</span>
        Sonuç: Dünyanın En Kârlı İllüzyonu
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Zamanla RedBull bir içecek markası olmaktan çıkıp dünyanın en büyük "Ekstrem Spor Medyası" şirketine dönüştü. İki Formula 1 takımı (RedBull Racing), futbol kulüpleri (RB Leipzig, RB Salzburg), hava yarışları, Felix Baumgartner'in uzaydan atlayışı... RedBull, insanlara bir sıvı değil, cesaret, adrenalin ve statü satıyor. Şirket bugün milyarlarca kutu içeceği, üretim maliyetinin çok üzerinde bir fiyatla satarak akılalmaz bir brüt kâr marjı yakalıyor.</p>
      
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
              <span style="color:#94a3b8;">Ürün Maliyeti (Sıvı + Alüminyum Kutu) (%15)</span>
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
          21. Yüzyılda marjinal kâr, ürünü "üreten" nasırlı ellerde değil, o ürünün "hikayesini ve algısını" yöneten beyinlerdedir. Meta (Emtia/Fabrika) üretirseniz kuruşlarla, marka ve hikaye üretirseniz milyar dolarlarla oynarsınız. Eğer tüketici kutuyu açtığında sadece su ve şeker değil, bir "yaşam tarzı" içtiğine ikna olursa, maliyeti 10 sent olan bir sıvıyı 3 dolara gözünü kırpmadan satın alır. <strong>Fiziksel üretim ucuzdur, algı ise paha biçilemez.</strong>
        </p>
      </div>
  `,

  "de-beers-elmas-illuzyonu": `
      <div class="article-intro" style="margin-bottom: 40px;">
        <p class="lead" style="font-size:1.35rem; color:var(--text-300); line-height:1.9;">
          <span class="dropcap" style="color:#cbd5e1; font-family:var(--font-display); float:left; font-size:4.5rem; line-height:0.8; margin-right:15px; text-shadow:0 0 20px rgba(255,255,255,0.4);">T</span>icaret tarihinin en büyük, en uzun soluklu ve en kusursuz işleyen psikolojik illüzyonuna hoş geldiniz. Bugün dünyadaki hemen hemen herkes elmasın inanılmaz derecede nadir, paha biçilemez ve gerçek/sonsuz aşkın yegane sembolü olduğuna inanır. Oysa 19. yüzyılın sonlarına kadar elmas, sadece birkaç Avrupa kraliyet ailesinin taktığı, aslında doğada zümrüt veya yakut kadar bile nadir olmayan bir karbon kristaliydi. Ta ki tek bir şirket, insanlığın bilinçaltını hackleyene kadar.
        </p>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#cbd5e1; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">1</span>
        Kriz: Elmasın Sıradanlaşma Tehlikesi
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">1870'lerde Güney Afrika'daki Kimberley bölgesinde devasa elmas yatakları (madenleri) keşfedildi. Bir anda tonlarca elmas Avrupa pazarına akmaya başladı. İngiliz yatırımcılar dehşete düştü; çünkü arzın (üretimin) bu kadar kontrolsüz artması demek, elmasın ayrıcalıklı statüsünü kaybedip fiyatının sıradan bir cam parçası veya kuvars taşı seviyesine inmesi demekti. Fiyatların çökmesini engellemek için acil bir müdahale gerekiyordu.</p>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">İngiliz girişimci Cecil Rhodes, Rothschild ailesinden aldığı devasa finansmanla bölgedeki küçük madenlerin hepsini satın aldı veya acımasızca piyasadan sildi. 1888'de tüm bu madenleri tek bir tekel (monopol) çatısı altında birleştirdi: <strong>De Beers Consolidated Mines.</strong></p>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#cbd5e1; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">2</span>
        Deha Hamlesi: Arzı Boğmak ve "Aşkı" Satın Almak
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">De Beers'in kusursuz işleyen tekel yapısı iki ayak üzerine inşa edildi. Birincisi acımasız bir "Fiziksel Tedarik Yönetimi", ikincisi ise beyin yıkayan bir "Psikolojik Operasyon" (Marketing):</p>
      
      <!-- Vault Visualization -->
      <div style="background:linear-gradient(to right, rgba(15,23,42,0.9), rgba(30,41,59,0.9)); border:1px solid rgba(148,163,184,0.2); border-radius:24px; padding:40px; margin-bottom:50px; position:relative; overflow:hidden;">
        <div style="position:absolute; right:-50px; top:-50px; font-size:15rem; opacity:0.03; filter:blur(5px);">💎</div>
        
        <div style="display:flex; gap:30px; align-items:center; flex-wrap:wrap; position:relative; z-index:1;">
          <div style="flex:1; min-width:300px;">
            <h3 style="color:#f8fafc; font-family:var(--font-display); margin-top:0; font-size:1.8rem;">CSO ve Kasalar Dolusu Yapay Kıtlık</h3>
            <p style="color:var(--text-300); font-size:1.1rem; line-height:1.7;">De Beers, "Merkezi Satış Organizasyonu" (CSO) adında bir yapı kurdu. Dünyadaki tüm elmas üreticilerini, çıkardıkları taşları sadece kendilerine satmaya zorladılar. Karşı çıkanları, piyasayı o ülkenin taşlarıyla boğup iflas ettirerek cezalandırdılar. De Beers, üretiminin %90'ını kontrol altına aldı. Piyasaya sadece fiyatı yüksek tutacak kadar az sayıda elmas sızdırıp, geri kalan milyonlarca taşı Londra'daki devasa çelik kasalara kilitlediler. <strong>Elmas nadir değildi, nadirlik yapay olarak tasarlanmıştı.</strong></p>
          </div>
          <div style="width:200px; height:200px; background:rgba(0,0,0,0.5); border:2px solid #334155; border-radius:12px; position:relative; display:flex; align-items:center; justify-content:center; box-shadow:inset 0 0 50px rgba(0,0,0,1);">
            <div style="font-size:4rem; filter:drop-shadow(0 0 20px rgba(255,255,255,0.4));">🔒💎</div>
          </div>
        </div>
      </div>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:25px; margin-bottom:50px;">
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:12px; padding:25px;">
          <h4 style="color:#e2e8f0; font-size:1.2rem; margin-bottom:10px;">"A Diamond is Forever" Kampanyası</h4>
          <p style="color:var(--text-400); font-size:0.95rem; line-height:1.6;">1930'lardaki Büyük Buhran'da satışlar çökünce, De Beers N.W. Ayer reklam ajansıyla anlaştı. Amaç kitlelerin psikolojisini değiştirmekti. 1947'de o efsane slogan yaratıldı: <em>"A Diamond is Forever" (Bir elmas sonsuza kadardır).</em> Halka "aşkınız sonsuzsa, ona zamanın yok edemeyeceği bir taş alarak bunu kanıtlayın" mesajı kazındı.</p>
        </div>
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:12px; padding:25px;">
          <h4 style="color:#e2e8f0; font-size:1.2rem; margin-bottom:10px;">2 Aylık Maaş Kuralı (Fiyat Çıpası)</h4>
          <p style="color:var(--text-400); font-size:0.95rem; line-height:1.6;">Ajans sadece duyguyu değil, fiyatı da belirledi. Dergilere verdikleri ilanlarda şu kuralı dikte ettiler: <em>"Gerçek bir evlilik teklifi yüzüğünün bedeli, erkeğin 2 aylık maaşına eşit olmalıdır."</em> Bu, fiyatı doğrudan erkeğin gururuna ve gelirine bağlayan kusursuz bir tuzaktı.</p>
        </div>
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); border-radius:12px; padding:25px;">
          <h4 style="color:#e2e8f0; font-size:1.2rem; margin-bottom:10px;">İkinci El Pazarını Öldürmek</h4>
          <p style="color:var(--text-400); font-size:0.95rem; line-height:1.6;">"Sonsuza kadardır" vurgusunun en sinsi amacı şuydu: Evlilik bitsin ya da bitmesin, yüzük satılmamalı, aile yadigarı olarak kasada saklanmalıdır. Böylece kimse yüzüğünü kuyumcuya geri satmadı, piyasaya ikinci el elmas girmedi ve De Beers'in tekelci fiyatları asla düşmedi.</p>
        </div>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#cbd5e1; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">3</span>
        Sonuç: Kırılması İmkansız Bir Kültürel Tabu
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Kampanya öncesinde, 1930'larda ABD'deki evliliklerin sadece %10'unda elmas yüzük kullanılıyordu. Kampanyadan sonra bu oran %80'lere fırladı ve tüm dünyaya yayıldı. Bugün Hollywood filmlerinden mahalle kuyumcularına kadar herkesin tartışmasız kabul ettiği "evlilik teklifinin tektaşı" ritüeli, aslında eski bir reklam kampanyasının yan etkisidir. De Beers, sadece fiziksel bir taşı satmamış, evlilik kurumunun ritüelini yeniden yazarak "aşkın fiyatını" kendi tekeline almıştır.</p>
      
      <div class="article-alert" style="margin-top: 60px; background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(10,10,10,0.9) 100%); border: 1px solid rgba(255,255,255,0.2); border-left: 6px solid #cbd5e1; border-radius: 16px; padding:40px; box-shadow:0 15px 40px rgba(0,0,0,0.6);">
        <div style="display:flex; align-items:center; gap:15px; margin-bottom:20px;">
          <div style="width:50px; height:50px; background:#cbd5e1; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.8rem; box-shadow:0 0 20px rgba(255,255,255,0.4);">⚡</div>
          <h3 style="margin: 0; color: #f8fafc; font-family:var(--font-display); font-size:1.8rem; text-transform:uppercase; letter-spacing:1px;">Zengince Tokadı</h3>
        </div>
        <p style="margin-bottom: 0; color:#E0E0E0; font-size:1.2rem; line-height:1.8; text-shadow:0 2px 4px rgba(0,0,0,0.5);">
          Bir ürünün ticari değeri, onun fiziksel nadirliğinden veya üretim maliyetinden gelmez; asıl değer, insanların onun uğruna ödemeye <strong>"ikna edildikleri"</strong> bedelden ibarettir. Değer, tamamen sosyolojik ve psikolojik bir illüzyondur. Eğer arzı tekelinize alıp kısıtlar ve o ürüne insanların en zayıf noktalarından (aşk, statü, aidiyet) güçlü bir anlam yüklerseniz, sıradan bir taş parçasına bile nesiller boyu sürecek servetler ödetebilirsiniz.
        </p>
      </div>
  `,

  "porsche-volkswagen-short-squeeze": `
      <div class="article-intro" style="margin-bottom: 40px;">
        <p class="lead" style="font-size:1.35rem; color:var(--text-300); line-height:1.9;">
          <span class="dropcap" style="color:#eab308; font-family:var(--font-display); float:left; font-size:4.5rem; line-height:0.8; margin-right:15px; text-shadow:0 0 20px rgba(234,179,8,0.4);">2</span>008 Küresel Finans Krizi sırasında tüm piyasalar kan ağlarken, Almanya'da finans tarihinin gördüğü en kusursuz ve acımasız piyasa pusu operasyonlarından biri yaşanıyordu. Bu hikaye, sadece lüks spor araç üretmekle kalmayan, aynı zamanda arka planda dünyanın en sinsi hedge fonlarından biri gibi çalışan küçük Porsche'nin, hacim olarak kendisinden devasa büyüklükteki Volkswagen (VW) imparatorluğunu bir yılan gibi yutma girişimidir. Bu olay piyasalara "Infinity Squeeze" (Sonsuz Sıkışma) kavramını hediye etmiştir.
        </p>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#eab308; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">1</span>
        Bağlam: Wall Street'in Kibirli Açığa Satış Oyunu
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">O dönemde Volkswagen, pazar payı büyük ancak işçi sendikalarının gücü ve hantal yapısı nedeniyle kârlılığı çok düşük bir Alman devi olarak görülüyordu. 2008 Krizinin patlak vermesiyle birlikte, Londra ve New York merkezli milyarlarca dolarlık Hedge Fonları, VW hisselerinin değer kaybedeceğine kesin gözüyle bakarak yoğun bir şekilde <strong>Açığa Satış (Short Selling)</strong> yapmaya başladılar.</p>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;"><em>Açığa satış mekanizması basittir:</em> Fonlar, piyasadaki aracı kurumlardan belirli bir ücret karşılığında VW hisselerini ödünç alır ve bu hisseleri hemen yüksek fiyattan piyasaya satarlar. Fiyat beklendiği gibi çökünce, aynı hisseleri dipten ucuza satın alır, ödünç aldıkları kuruma geri verir ve aradaki devasa farkı cebe indirirler. Fonlar VW'nin batışına o kadar güveniyordu ki, piyasada işlem gören hisselerin çok büyük bir kısmını "short"lamışlardı.</p>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#eab308; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">2</span>
        Deha Hamlesi: Porshe'nin Opsiyon Tuzağı
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Fonların bilmediği korkunç bir detay vardı: Porsche'nin efsanevi CEO'su Wendelin Wiedeking ve finans şefi Holger Härter, yasalardaki bir boşluğu kullanarak VW hisselerini piyasadan sessizce silip süpürüyordu. Ama bunu hisse alarak yapmadılar:</p>
      
      <div style="background:rgba(234,179,8,0.05); border:1px solid rgba(234,179,8,0.2); border-left:4px solid #eab308; padding:30px; border-radius:12px; margin-bottom:40px;">
        <ul style="color:var(--text-300); font-size:1.1rem; line-height:1.8; margin:0; padding-left:20px;">
          <li style="margin-bottom:15px;">Porsche, hisse almak yerine yatırım bankaları üzerinden devasa miktarda <strong>Call Options (Alım Opsiyonları)</strong> ve "Nakit Uzlaşmalı Türev Sözleşmeler" (Cash-settled options) satın aldı. Alman yasalarına göre, hisse senedi alırsanız bunu kurumlara bildirmek zorundaydınız, ancak türev araçlarla yapılan bu arka kapı işlemleri bildirim limitlerine takılmıyordu.</li>
          <li style="margin-bottom:15px;">26 Ekim 2008'in sessiz bir Pazar günü, piyasalar kapalıyken Porsche o nükleer bomba etkisindeki basın bültenini yayınladı: <em>"Volkswagen'in %42.6 hissesine sahibiz. Ayrıca türev araçlarla da %31.5'lik hisse alma opsiyonunu elimizde tutuyoruz. Toplamda %74.1'lik payı kontrol ediyoruz."</em></li>
          <li>İşte ölümcül matematik buradaydı: Alman yasalarına göre Aşağı Saksonya eyaletinin de VW'de %20'lik dokunulmaz, satılamaz bloke hissesi vardı. (%74.1 + %20 = %94.1). Piyasada (Float) serbestçe alınıp satılabilecek hisse oranı aniden <strong>%6'nın altına</strong> inmişti!</li>
        </ul>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#eab308; color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">3</span>
        Sonuç: "The Infinity Squeeze" Katliamı
      </h2>
      
      <!-- Interactive Chart Visual -->
      <div style="background:#0f172a; border:1px solid #1e293b; border-radius:24px; padding:40px; margin-bottom:50px; position:relative; overflow:hidden;">
        <h3 style="color:#eab308; font-family:var(--font-display); text-align:center; margin-top:0; margin-bottom:30px; font-size:1.8rem;">Ekim 2008: Borsa Katliamı</h3>
        
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
        <p style="color:var(--text-400); text-align:center; margin-top:20px; font-size:0.9rem;">Pazartesi açılışında, VW hissesi birkaç gün içinde 200€'dan 1000€'nun üzerine fırladı ve VW dünyanın en değerli şirketi oldu.</p>
      </div>

      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Hedge fonlar haberi okuduklarında dehşete düştüler. Açığa satış kuralları gereği (Margin Call), ödünç aldıkları hisseleri piyasadan ne pahasına olursa olsun alıp sahiplerine iade etmek zorundaydılar (Short Cover). Ancak ortada satın alınabilecek hisse yoktu! Piyasada var olan %6'lık hisse için milyarlarca dolarlık alım emirleri panikle sisteme girildi.</p>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Pazartesi sabahı borsa açıldığında VW hisseleri rokete bağladı. Fiyat 200 Euro'lardan saniyeler içinde 1005 Euro'ya fırlayarak VW'yi birkaç saatliğine "Dünyanın En Değerli Şirketi" yaptı. Fonlar pozisyonlarını kapatabilmek için fiyata bakmaksızın milyarlarca dolar zararı göze almak zorunda kaldılar. Porsche, bir hedge fonun kanını emerek, bir gecede yıllarca otomobil üreterek yapabileceği kârın 10 katını cebine koydu. Maalesef bu olay, devasa zarar eden bazı milyarderlerin intiharına bile sebep olacak kadar yıkıcı bir piyasa anomalisiydi.</p>
      
      <div class="article-alert" style="margin-top: 60px; background: linear-gradient(135deg, rgba(234,179,8,0.1) 0%, rgba(10,10,10,0.9) 100%); border: 1px solid rgba(234,179,8,0.3); border-left: 6px solid #eab308; border-radius: 16px; padding:40px; box-shadow:0 15px 40px rgba(0,0,0,0.6);">
        <div style="display:flex; align-items:center; gap:15px; margin-bottom:20px;">
          <div style="width:50px; height:50px; background:#eab308; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.8rem; box-shadow:0 0 20px rgba(234,179,8,0.6);">⚡</div>
          <h3 style="margin: 0; color: #fde047; font-family:var(--font-display); font-size:1.8rem; text-transform:uppercase; letter-spacing:1px;">Zengince Tokadı</h3>
        </div>
        <p style="margin-bottom: 0; color:#E0E0E0; font-size:1.2rem; line-height:1.8; text-shadow:0 2px 4px rgba(0,0,0,0.5);">
          Finansal piyasalarda kurumsal kibir ölümcüldür. "Kesin düşecek" diyerek girdiğiniz yüksek kaldıraçlı işlemler, arka planda sizden çok daha zeki, acımasız ve nakit gücü yüksek bir rakibin kurduğu kusursuz bir tuzağın parçası olabilir. Geleneksel alış işlemlerinde edebileceğiniz maksimum zarar yatırdığınız parayla sınırlıyken (sıfıra iner), <strong>açığa satışın ve ters pozisyonun zararı matematiksel olarak sonsuzdur.</strong>
        </p>
      </div>
  `,

  "amazon-aws-maliyet-kar-merkezi": `
      <div class="article-intro" style="margin-bottom: 40px;">
        <p class="lead" style="font-size:1.35rem; color:var(--text-300); line-height:1.9;">
          <span class="dropcap" style="color:#f97316; font-family:var(--font-display); float:left; font-size:4.5rem; line-height:0.8; margin-right:15px; text-shadow:0 0 20px rgba(249,115,22,0.4);">B</span>ugün "Amazon" denilince sokaktaki herhangi bir insanın aklına karton kargo kutuları, devasa lojistik depoları ve hızlı teslimat gelir. Oysa Amazon'un e-ticaret ve perakende tarafı, operasyonel olarak yıllarca büyük zararlar etmiş, ancak son yıllarda kıl payı başa baş noktasına gelmiş devasa, hantal ve düşük kâr marjlı bir yapıdır. Amazon'u bugün trilyonlarca dolarlık piyasa değerine ulaştıran, şirketin tüm kârının ana motorunu oluşturan ve Jeff Bezos'u dünyanın en zengini yapan hamle ise e-ticaret değil, <strong>AWS (Amazon Web Services)</strong> adı verilen "Bulut Bilişim" icadıdır.
        </p>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#f97316; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">1</span>
        Kriz: Çılgın Altyapı Maliyetleri ve API Zorunluluğu
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">2000'li yılların başında Amazon inanılmaz bir hızla büyüyordu. Ancak bu büyüme korkunç bir BT (Bilgi Teknolojileri) karmaşasını beraberinde getirdi. Her yeni proje veya özellik için ekiplerin sunucu kurması aylar sürüyordu. Ayrıca "Black Friday" veya "Noel" dönemlerinde siteye devasa bir trafik girdiği için, bu tepe yükü (Peak Load) kaldırabilmek adına devasa veri merkezleri inşa etmek zorunda kaldılar. En büyük sorun şuydu: Yılın geriye kalan 300 günü bu sunucuların devasa işlem kapasitesi boşta yatıyor, ama elektrik, bakım ve soğutma giderleri şirketin bütçesinde kara delikler açıyordu.</p>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Jeff Bezos, 2002 yılında şirketi kökünden sarsan meşhur "API Manifestosu"nu yayınladı. Tüm yazılım ekiplerine, verilerini ve işlevlerini sadece ağ üzerinden erişilebilen hizmet arayüzleri (API) aracılığıyla birbirine açmasını, doğrudan veritabanı bağlantısı kullanılmasını kesin olarak yasakladı. Bu katı kural (uymayan kovuluyordu), Amazon'un iç altyapısını devasa bir legoya, yani modüler bir sisteme dönüştürdü.</p>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#f97316; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">2</span>
        Deha Hamlesi: Gider Merkezini Satılabilir Ürüne Çevirmek
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">2003 yılında Andy Jassy'nin öncülüğünde ekip müthiş bir aydınlanma yaşadı: <em>"Biz sadece kendi sitemizi ayakta tutmak için çok iyi bir altyapı yönetim ve işletim sistemi geliştirdik. Neden bu modüler altyapıyı (ve boşta duran o devasa sunucu kapasitemizi), kendi sunucularını kurmaya parası veya vakti olmayan dışarıdaki şirketlere de saatlik veya kullan-öde mantığıyla kiralamıyoruz?"</em></p>
      
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:30px; margin-bottom:50px;">
        <div style="background:rgba(249,115,22,0.05); border:1px solid rgba(249,115,22,0.2); padding:30px; border-radius:16px;">
          <h4 style="color:#fdba74; font-size:1.3rem; margin-top:0;">Donanımı Yazılıma Dönüştürmek (IaaS)</h4>
          <p style="color:var(--text-400); line-height:1.6; margin-bottom:0;">Şirketler aylar süren bürokratik süreçlerle fiziksel bilgisayar (server) satın alıp, onu depolara kurmak ve kablolamak zorundaydı. Amazon (EC2 ve S3 ile) bunu bir web arayüzünden kredi kartıyla saniyeler içinde kurulabilen "Sanal Sunuculara" indirgedi. İnternetin "İşletim Sistemi"ni yazmışlardı.</p>
        </div>
        <div style="background:rgba(249,115,22,0.05); border:1px solid rgba(249,115,22,0.2); padding:30px; border-radius:16px;">
          <h4 style="color:#fdba74; font-size:1.3rem; margin-top:0;">Kullandığın Kadar Öde (Pay-as-you-go)</h4>
          <p style="color:var(--text-400); line-height:1.6; margin-bottom:0;">Sermayesi olmayan Silikon Vadisi startup'ları, baştan milyonlarca dolar donanım yatırımı yapmak yerine Amazon'a sadece o saat kullandıkları işlemci gücü ve depolama alanı kadar ödeme yaptılar. Bu model Airbnb, Uber, Netflix gibi devlerin sıfır donanım yatırımıyla doğmasını sağladı.</p>
        </div>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#f97316; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">3</span>
        Sonuç: Trilyon Dolarlık Tekel ve Rakiplerin Uyku Molası
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Bezos'un en büyük şanslarından biri, Google ve Microsoft gibi teknoloji devlerinin Amazon'un ne yaptığını yıllarca anlayamamış (veya ciddiye almamış) olmasıdır. Onlar uyandığında (Azure ve GCP'yi kurduklarında) AWS çoktan dünyanın internet altyapısını ele geçirmişti. Bugün Netflix verilerini AWS'de tutuyor. Pentagon ve CIA sözleşmelerini AWS'ye veriyor.</p>
      
      <!-- Visual Display of AWS vs Retail -->
      <div style="background:linear-gradient(180deg, #1f2937, #111827); border:1px solid rgba(255,255,255,0.05); border-radius:24px; padding:40px; margin-bottom:50px;">
        <h3 style="color:#fff; text-align:center; margin-top:0; margin-bottom:40px; font-family:var(--font-display);">Amazon Karının Gerçek Kaynağı (Son Yıllar Ortalaması)</h3>
        
        <div style="display:flex; justify-content:center; gap:40px; flex-wrap:wrap;">
          <div style="flex:1; min-width:200px; background:rgba(0,0,0,0.3); padding:25px; border-radius:16px; border-top:4px solid #64748b;">
            <h4 style="color:#cbd5e1; text-align:center; font-size:1.2rem; margin-top:0;">🛒 E-Ticaret (Perakende)</h4>
            <div style="display:flex; justify-content:space-between; margin-bottom:10px; margin-top:20px;">
              <span style="color:var(--text-400);">Ciro Payı (Brüt Gelir)</span>
              <span style="color:#fff; font-weight:bold;">~%85</span>
            </div>
            <div style="width:100%; height:8px; background:#334155; border-radius:4px;"><div style="width:85%; height:100%; background:#94a3b8; border-radius:4px;"></div></div>
            
            <div style="display:flex; justify-content:space-between; margin-bottom:10px; margin-top:20px;">
              <span style="color:var(--text-400);">Kâr Payı (Faaliyet Kârı)</span>
              <span style="color:#fff; font-weight:bold;">~%25</span>
            </div>
            <div style="width:100%; height:8px; background:#334155; border-radius:4px;"><div style="width:25%; height:100%; background:#94a3b8; border-radius:4px;"></div></div>
          </div>
          
          <div style="flex:1; min-width:200px; background:rgba(249,115,22,0.05); padding:25px; border-radius:16px; border-top:4px solid #f97316; box-shadow:0 10px 30px rgba(249,115,22,0.15);">
            <h4 style="color:#f97316; text-align:center; font-size:1.2rem; margin-top:0; text-shadow:0 0 10px rgba(249,115,22,0.5);">☁️ AWS (Bulut Bilişim)</h4>
            <div style="display:flex; justify-content:space-between; margin-bottom:10px; margin-top:20px;">
              <span style="color:var(--text-400);">Ciro Payı (Brüt Gelir)</span>
              <span style="color:#fdba74; font-weight:bold;">~%15</span>
            </div>
            <div style="width:100%; height:8px; background:#334155; border-radius:4px;"><div style="width:15%; height:100%; background:#f97316; border-radius:4px; box-shadow:0 0 10px #f97316;"></div></div>
            
            <div style="display:flex; justify-content:space-between; margin-bottom:10px; margin-top:20px;">
              <span style="color:var(--text-400);">Kâr Payı (Faaliyet Kârı)</span>
              <span style="color:#fdba74; font-weight:bold; font-size:1.2rem;">~%75</span>
            </div>
            <div style="width:100%; height:8px; background:#334155; border-radius:4px;"><div style="width:75%; height:100%; background:#f97316; border-radius:4px; box-shadow:0 0 10px #f97316;"></div></div>
          </div>
        </div>
      </div>

      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Yukarıdaki şema her şeyi açıklıyor. Amazon e-ticaret tarafında kazandığı paranın neredeyse tamamını operasyona harcarken, asıl vurgunu bulut hizmetlerinden yapmaktadır. AWS'nin yarattığı bu "sınırsız nakit akışı" silahı sayesinde Amazon, e-ticaret tarafında rakiplerine karşı yıllarca acımasızca fiyat kırabilmiş, rakiplerini iflasa sürükleyerek perakende pazarını da tekeline alabilmiştir.</p>
      
      <div class="article-alert" style="margin-top: 60px; background: linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(10,10,10,0.9) 100%); border: 1px solid rgba(249,115,22,0.3); border-left: 6px solid #f97316; border-radius: 16px; padding:40px; box-shadow:0 15px 40px rgba(0,0,0,0.6);">
        <div style="display:flex; align-items:center; gap:15px; margin-bottom:20px;">
          <div style="width:50px; height:50px; background:#f97316; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.8rem; box-shadow:0 0 20px rgba(249,115,22,0.6);">⚡</div>
          <h3 style="margin: 0; color: #fdba74; font-family:var(--font-display); font-size:1.8rem; text-transform:uppercase; letter-spacing:1px;">Zengince Tokadı</h3>
        </div>
        <p style="margin-bottom: 0; color:#E0E0E0; font-size:1.2rem; line-height:1.8; text-shadow:0 2px 4px rgba(0,0,0,0.5);">
          Şirketinizin sizi yoran en büyük gider kalemi (Cost Center), doğru vizyon ve teknolojik mimariyle bakıldığında en büyük kâr merkezinize (Profit Center) dönüşebilir. Sizin çözmek için kan ter içinde kaldığınız devasa bir operasyonel sorun, aslında pazardaki diğer şirketlerin de yaşayıp çözemediği bir sorundur. Kendi yaranıza bulduğunuz ilacı, tüm dünyaya lisanslayarak satmayı öğrenin.
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
  console.log("Successfully updated all other Dehas with V2 Masterclass detail!");
} catch (e) {
  console.error("Error:", e);
}
