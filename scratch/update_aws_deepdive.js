const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../data/deha-hamleleri-data.js');
let dataStr = fs.readFileSync(targetPath, 'utf8');

const awsContent = `
      <!-- GİRİŞ: GÖZ YANILSAMASI -->
      <div class="article-intro" style="margin-bottom: 50px;">
        <p class="lead" style="font-size:1.35rem; color:var(--text-300); line-height:1.9;">
          <span class="dropcap" style="color:#f97316; font-family:var(--font-display); float:left; font-size:5.5rem; line-height:0.8; margin-right:15px; text-shadow:0 0 25px rgba(249,115,22,0.5);">B</span>ugün "Amazon" denildiğinde sokaktaki ortalama bir insanın veya sıradan bir yatırımcının aklına devasa kargo depoları, karton kutular, kuryeler ve e-ticaret sitesi gelir. Oysa bu, tarihin en büyük göz yanılsamalarından biridir. Amazon'un e-ticaret operasyonu, muazzam ciro yapmasına rağmen lojistik maliyetleri yüzünden kâr marjı neredeyse %0 ile %2 arasında gidip gelen devasa bir "hamaliye" işidir.
        </p>
        <p class="lead" style="font-size:1.35rem; color:var(--text-300); line-height:1.9;">
          Amazon'u 2 Trilyon Dolarlık bir deve dönüştüren, Jeff Bezos'u dünyanın en zengin adamı yapan ve şirketin faaliyet kârının %70'inden fazlasını tek başına üreten gizli güç e-ticaret değildir. O gizli güç, şirketin kendi içindeki bir operasyonel krizden doğan <strong>AWS (Amazon Web Services)</strong> yani Bulut Bilişim devrimidir. Bu vaka, bir şirketin en büyük "Gider Merkezini" (Cost Center), dünyanın en büyük "Kâr Merkezine" (Profit Center) dönüştürmesinin en destansı örneğidir.
        </p>
      </div>

      <!-- BÖLÜM 1: KAOS VE ÇAMUR -->
      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#f97316; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem; flex-shrink:0;">1</span>
        Kaos: "Çamurda Yürüyen Mühendisler"
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 25px;">2000'li yılların başlarında Amazon e-ticaret alanında inanılmaz bir hızla büyüyordu. Ancak şirket içeriden çürümeye başlamıştı. Her yeni proje (örneğin siteye yeni bir buton veya hizmet eklemek) başlatılmak istendiğinde, yazılım ekipleri projeyi kodlamaktan çok, o kodun çalışacağı sunucuları satın almak, veritabanlarını kurmak, işletim sistemlerini ayarlamak ve sunucu depolarını soğutmakla uğraşıyordu.</p>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Dönemin AWS CEO'su (ve şu anki Amazon CEO'su) Andy Jassy o günleri şöyle anlatıyor: <em>"Mühendislerimiz zamanlarının %70'ini sadece altyapı kurmakla, geri kalan %30'unu ise asıl işimiz olan yazılımı geliştirmekle geçiriyordu. Üstelik her ekip kendi altyapısını sıfırdan kuruyordu. Şirket adeta dizlerine kadar çamura batmış, hareket edemeyen bir deve dönüşmüştü."</em> Ayrıca, "Black Friday" gibi alışverişin patladığı günler için devasa veri merkezleri kuruluyordu, ancak yılın geri kalan 300 günü bu sunucular %10 kapasiteyle "boşta" çalışarak elektrik ve kira tüketiyordu.</p>

      <!-- BÖLÜM 2: DİKTATÖRÜN MANİFESTOSU -->
      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#f97316; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem; flex-shrink:0;">2</span>
        Deha Hamlesi: Bezos'un Efsanevi "API Manifestosu"
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">2002 yılında Jeff Bezos, şirketin içindeki bu teknolojik spagetti (karmaşa) yapısını çözmek için Silikon Vadisi tarihine geçen o efsanevi e-postayı (API Mandate) tüm şirkete gönderdi. Bu e-posta bir tavsiye değil, bir diktatörlük emriydi:</p>

      <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.1); border-left:4px solid #f97316; padding:30px; border-radius:12px; margin-bottom:40px; font-family: monospace; font-size: 1.05rem; color: #cbd5e1; line-height: 1.7; box-shadow:inset 0 0 20px rgba(0,0,0,0.5);">
        <ol style="margin:0; padding-left:20px;">
          <li style="margin-bottom:15px;">Bundan sonra tüm ekipler verilerini ve işlevlerini sadece <strong>Servis Arayüzleri (API)</strong> aracılığıyla dışa açacaktır.</li>
          <li style="margin-bottom:15px;">Ekipler birbirleriyle sadece bu arayüzler üzerinden iletişim kurmalıdır.</li>
          <li style="margin-bottom:15px;">Başka hiçbir iletişim türüne izin verilmeyecektir: Doğrudan veritabanı okumak, paylaşılan bellek kullanmak, arka kapılar açmak YASAKTIR.</li>
          <li style="margin-bottom:15px;">Bu servis arayüzleri istisnasız olarak <strong>"dışarıdaki yazılımcılara da sunulabilecek şekilde" (externalizable)</strong> tasarlanmalıdır. Hiçbir mazeret kabul edilmez.</li>
          <li style="color:#ef4444; font-weight:bold; margin-top:20px; list-style-type:none; margin-left:-20px;">"Bu kurallara uymayan herkes işten kovulacaktır. Teşekkürler; harika bir gün dilerim!" - Jeff</li>
        </ol>
      </div>

      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Bu emir Amazon'u sıradan bir e-ticaret sitesi olmaktan çıkarıp, <strong>"Modüler Hizmetler Bütününe"</strong> dönüştürdü. Artık Amazon'un ödeme sistemi, envanter sistemi veya sunucu sistemi birbirine sıkı sıkıya bağlı değil, LEGO parçaları gibi birbirinden bağımsız çalışan, "kiralık servisler" haline gelmişti.</p>

      <!-- BÖLÜM 3: IaaS DEVRİMİ -->
      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#f97316; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem; flex-shrink:0;">3</span>
        Dönüşüm: "İşletim Sistemini" Kiraya Vermek
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">2003 yılında Andy Jassy, Bezos'un evindeki bir beyin fırtınası toplantısında şu müthiş aydınlanmayı yaşadı: <em>"Biz e-ticaret operasyonumuz yüzünden inanılmaz bir altyapı kurma (sunucu, depolama, veritabanı) yeteneği geliştirdik. Bizim yaşadığımız bu 'çamurda yürüme' problemini dünyadaki tüm şirketler ve startup'lar yaşıyor. Peki neden sadece kitap ve CD satmakla yetiniyoruz? Neden bu geliştirdiğimiz sunucu altyapısını ve boşta yatan kapasitemizi diğer şirketlere 'hizmet olarak' satmıyoruz?"</em></p>

      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:25px; margin-bottom:50px;">
        <div style="background:rgba(249,115,22,0.05); border:1px solid rgba(249,115,22,0.2); border-radius:12px; padding:25px;">
          <div style="font-size:2.5rem; margin-bottom:15px;">💽</div>
          <h4 style="color:#fdba74; font-size:1.2rem; margin-bottom:10px;">Donanımın Ölümü (S3 ve EC2)</h4>
          <p style="color:var(--text-400); font-size:0.95rem; line-height:1.6;">2006'da AWS resmen kuruldu ve S3 (Depolama) ile EC2 (Sanal Sunucu) hizmetleri başlatıldı. Eskiden bir şirket kurmak için aylar süren süreçlerle fiziksel bilgisayar (server) almak, onları bir odaya kilitlemek, soğutmak ve sistem yöneticileri tutmak zorundaydınız. AWS ile fiziksel donanım, bir web sitesindeki "Satın Al" butonuna dönüştü. Saniyeler içinde yüzlerce sanal sunucu ayağa kaldırılabiliyordu.</p>
        </div>
        <div style="background:rgba(249,115,22,0.05); border:1px solid rgba(249,115,22,0.2); border-radius:12px; padding:25px;">
          <div style="font-size:2.5rem; margin-bottom:15px;">⏱️</div>
          <h4 style="color:#fdba74; font-size:1.2rem; margin-bottom:10px;">"Kullandığın Kadar Öde" (Utility Model)</h4>
          <p style="color:var(--text-400); font-size:0.95rem; line-height:1.6;">Amazon, interneti bir elektrik şebekesi gibi modelledi. Evde elektriği ne kadar kullanırsanız faturanız o kadar gelir. Amazon da şirketlere <em>"Sadece sitemize giren trafik veya depoladığınız megabayt kadar para ödeyeceksiniz"</em> dedi. Bu model, devasa başlangıç sermayesi olmayan Silikon Vadisi startup'larının önünü açtı. Netflix, Airbnb, Uber, Pinterest gibi devler, AWS altyapısı sayesinde sıfır donanım yatırımıyla büyüdüler.</p>
        </div>
      </div>

      <!-- BÖLÜM 4: RAKİPLERİN UYKUSU -->
      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#f97316; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem; flex-shrink:0;">4</span>
        Strateji: "Senin Marjın, Benim Fırsatımdır"
      </h2>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Jeff Bezos'un en ünlü sözü şudur: <em>"Your margin is my opportunity" (Senin yüksek kâr marjın, benim için fırsattır).</em> IBM, Oracle ve HP gibi eski nesil donanım/yazılım devleri %70-80 brüt kâr marjlarıyla çalışmaya alışkındı. Bezos ise AWS fiyatlarını sürekli aşağı çekerek kâr marjını rakiplerin nefes alamayacağı kadar daralttı.</p>
      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Bu düşük fiyatlandırma stratejisinin en büyük faydası, devleri <strong>uykuda yakalamasıydı.</strong> Google ve Microsoft, Amazon'un perakende şirketi olmak yerine yavaş yavaş "Dünyanın İnternet Altyapısı" haline geldiğini yıllarca fark etmedi. Microsoft (Azure) ve Google (GCP) uyanıp bulut işine girdiklerinde, Amazon 7 yıllık bir tekel avantajı yakalamıştı. Hatta öyle bir tekeldi ki, Amazon'un en büyük video-streaming rakibi Netflix ve perakende rakiplerinin bir kısmı bile mecburen AWS kullanmak zorundaydı; çünkü sistem o kadar iyiydi ki dışarıda kalmak intihardı.</p>

      <!-- BÖLÜM 5: FİNANSAL TABLO VE GERÇEKLER -->
      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:#f97316; color:#fff; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem; flex-shrink:0;">5</span>
        Bilanço Gerçekleri: Truva Atının İçindeki Altın
      </h2>
      
      <!-- Premium Visual Display of AWS vs Retail -->
      <div style="background:linear-gradient(180deg, #1f2937, #0f172a); border:1px solid rgba(255,255,255,0.05); border-radius:24px; padding:40px; margin-bottom:50px; position:relative; overflow:hidden;">
        <div style="position:absolute; top:-20%; left:-10%; width:50%; height:140%; background:linear-gradient(90deg, rgba(255,255,255,0.02) 0%, transparent 100%); transform:skewX(-15deg); pointer-events:none;"></div>
        
        <h3 style="color:#fff; text-align:center; margin-top:0; margin-bottom:40px; font-family:var(--font-display); font-size:1.8rem;">Amazon'un Gizli Finansal Anatomisi</h3>
        <p style="text-align:center; color:var(--text-400); margin-top:-30px; margin-bottom:40px; font-size:0.95rem;">Son Yıllardaki Tipik Faaliyet Kârı (Operating Income) Dağılımı</p>
        
        <div style="display:flex; justify-content:center; gap:40px; flex-wrap:wrap; position:relative; z-index:2;">
          
          <!-- E-Commerce Block -->
          <div style="flex:1; min-width:280px; background:rgba(0,0,0,0.4); padding:35px; border-radius:20px; border-top:4px solid #64748b; position:relative;">
            <div style="position:absolute; top:15px; right:20px; font-size:2rem; opacity:0.2;">📦</div>
            <h4 style="color:#cbd5e1; font-size:1.4rem; margin-top:0; margin-bottom:25px; display:flex; align-items:center; gap:10px;">
              Kuzey Amerika & Uluslararası E-Ticaret
            </h4>
            
            <div style="margin-bottom:25px;">
              <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span style="color:var(--text-400); font-size:0.9rem; text-transform:uppercase; letter-spacing:1px;">Toplam Cirodaki Payı</span>
                <span style="color:#fff; font-weight:bold; font-size:1.1rem;">~%84</span>
              </div>
              <div style="width:100%; height:12px; background:#334155; border-radius:6px; overflow:hidden;">
                <div style="width:84%; height:100%; background:linear-gradient(90deg, #64748b, #94a3b8); border-radius:6px;"></div>
              </div>
              <p style="font-size:0.8rem; color:var(--text-500); margin-top:8px;">Devasa nakit akışı yaratır ama lojistik giderleri nedeniyle kâr bırakmaz.</p>
            </div>
            
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span style="color:var(--text-400); font-size:0.9rem; text-transform:uppercase; letter-spacing:1px;">Faaliyet Kârındaki Payı</span>
                <span style="color:#cbd5e1; font-weight:bold; font-size:1.3rem;">~%25</span>
              </div>
              <div style="width:100%; height:12px; background:#334155; border-radius:6px; overflow:hidden;">
                <div style="width:25%; height:100%; background:linear-gradient(90deg, #475569, #64748b); border-radius:6px;"></div>
              </div>
            </div>
          </div>
          
          <!-- AWS Block -->
          <div style="flex:1; min-width:280px; background:linear-gradient(145deg, rgba(249,115,22,0.1), rgba(0,0,0,0.5)); padding:35px; border-radius:20px; border-top:4px solid #f97316; box-shadow:0 15px 35px rgba(249,115,22,0.15); position:relative; overflow:hidden;">
            <div style="position:absolute; top:-20px; right:-20px; width:150px; height:150px; background:radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%); border-radius:50%;"></div>
            <div style="position:absolute; top:15px; right:20px; font-size:2rem; opacity:0.8; filter:drop-shadow(0 0 10px rgba(249,115,22,0.5));">☁️</div>
            
            <h4 style="color:#f97316; font-size:1.4rem; margin-top:0; margin-bottom:25px; text-shadow:0 0 10px rgba(249,115,22,0.3); display:flex; align-items:center; gap:10px;">
              AWS (Amazon Web Services)
            </h4>
            
            <div style="margin-bottom:25px;">
              <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span style="color:var(--text-300); font-size:0.9rem; text-transform:uppercase; letter-spacing:1px;">Toplam Cirodaki Payı</span>
                <span style="color:#fdba74; font-weight:bold; font-size:1.1rem;">~%16</span>
              </div>
              <div style="width:100%; height:12px; background:#334155; border-radius:6px; overflow:hidden;">
                <div style="width:16%; height:100%; background:linear-gradient(90deg, #ea580c, #f97316); border-radius:6px; box-shadow:0 0 15px #f97316;"></div>
              </div>
              <p style="font-size:0.8rem; color:var(--text-400); margin-top:8px;">Satış gelirinin küçük bir kısmı, ancak marjinal maliyeti neredeyse sıfırdır.</p>
            </div>
            
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span style="color:#fff; font-size:0.9rem; text-transform:uppercase; letter-spacing:1px;">Faaliyet Kârındaki Payı</span>
                <span style="color:#f97316; font-weight:bold; font-size:2rem; text-shadow:0 0 15px rgba(249,115,22,0.6);">~%75</span>
              </div>
              <div style="width:100%; height:12px; background:#334155; border-radius:6px; overflow:hidden; box-shadow:inset 0 0 5px rgba(0,0,0,0.5);">
                <div style="width:75%; height:100%; background:linear-gradient(90deg, #f97316, #fdba74); border-radius:6px; box-shadow:0 0 15px #f97316; position:relative;">
                  <div style="position:absolute; top:0; left:0; width:100%; height:100%; background:linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); animation: shine 2s infinite;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p style="color:#94a3b8; font-size:1rem; margin-top:30px; text-align:center; font-style:italic;">* Rakamlar çeyreklik dönemlere göre değişkenlik gösterse de, AWS istikrarlı olarak şirketin asıl kazanç motorudur.</p>
      </div>

      <p style="font-size:1.15rem; color:var(--text-300); line-height:1.8; margin-bottom: 30px;">Yukarıdaki şema bu deha hamlesinin özetidir. Amazon e-ticaret tarafında kazandığı milyarlarca doları uçaklara, kamyonlara ve depolara (operasyonel gidere) harcarken, asıl vurgunu bulut hizmetlerinin (AWS) sunduğu <strong>%30'lara varan astronomik işletme kâr marjından</strong> yapmaktadır. AWS'nin yarattığı bu "sınırsız nakit akışı" (Cash Flow) silahı sayesinde Amazon, e-ticaret tarafında rakiplerine karşı yıllarca acımasızca fiyat kırabilmiş, zararına satış yapmayı göze alarak rakiplerini iflasa sürüklemiş ve perakende pazarını tekeline alabilmiştir.</p>
      
      <!-- ZENGİNCE TOKADI -->
      <div class="article-alert" style="margin-top: 60px; background: linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(10,10,10,0.9) 100%); border: 1px solid rgba(249,115,22,0.3); border-left: 6px solid #f97316; border-radius: 16px; padding:40px; box-shadow:0 15px 40px rgba(0,0,0,0.6);">
        <div style="display:flex; align-items:center; gap:15px; margin-bottom:20px;">
          <div style="width:50px; height:50px; background:#f97316; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.8rem; box-shadow:0 0 20px rgba(249,115,22,0.6);">⚡</div>
          <h3 style="margin: 0; color: #fdba74; font-family:var(--font-display); font-size:1.8rem; text-transform:uppercase; letter-spacing:1px;">Zengince Tokadı</h3>
        </div>
        <p style="margin-bottom: 0; color:#E0E0E0; font-size:1.2rem; line-height:1.8; text-shadow:0 2px 4px rgba(0,0,0,0.5);">
          Şirketinizin sizi yoran en büyük gider kalemi (Cost Center), doğru vizyon ve teknolojik mimariyle bakıldığında en büyük kâr merkezinize (Profit Center) dönüşebilir. Sizin çözmek için kan ter içinde kaldığınız devasa bir operasyonel sorun, aslında pazardaki diğer şirketlerin de yaşayıp çözemediği bir sorundur. Çözdüğünüz sorunu kendinize saklamayın. <strong>Kendi yaranıza bulduğunuz ilacı paketleyin, ürünleştirin ve tüm dünyaya lisanslayarak satın. Asıl servet operasyon hamallığında değil, altyapı sahipliğindedir.</strong>
        </p>
      </div>
`;

// Replace specifically for AWS
try {
  let modifiedDataStr = dataStr;
  const slug = "amazon-aws-maliyet-kar-merkezi";
  const startMarker = '"slug": "' + slug + '"';
  const startIndex = modifiedDataStr.indexOf(startMarker);
  
  if (startIndex === -1) {
      throw new Error("Could not find AWS slug!");
  }
  
  const icerikStartMarker = '"icerik": \`';
  const icerikStartIndex = modifiedDataStr.indexOf(icerikStartMarker, startIndex);
  const startBacktickIndex = icerikStartIndex + icerikStartMarker.length - 1;
  
  // Find the next item's slug to locate the end backtick reliably
  const nextObjIndex = modifiedDataStr.indexOf('},', icerikStartIndex);
  let endBacktickIndex = modifiedDataStr.lastIndexOf('\`', nextObjIndex !== -1 ? nextObjIndex : modifiedDataStr.length);
  
  if (endBacktickIndex !== -1 && endBacktickIndex > startBacktickIndex) {
      modifiedDataStr = modifiedDataStr.substring(0, startBacktickIndex + 1) + '\\n' + awsContent + '\\n    ' + modifiedDataStr.substring(endBacktickIndex);
      fs.writeFileSync(targetPath, modifiedDataStr, 'utf8');
      console.log("Successfully deeply updated AWS!");
  } else {
      console.error("Could not find the end backtick for AWS.");
  }
} catch (e) {
  console.error("Error:", e);
}
