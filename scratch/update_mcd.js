const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../data/deha-hamleleri-data.js');
let dataStr = fs.readFileSync(targetPath, 'utf8');

// The icerik block we want to replace starts after `"slug": "mcdonalds-gayrimenkul-imparatorlugu"` 
// up to the closing backtick of icerik.
const startMarker = '"slug": "mcdonalds-gayrimenkul-imparatorlugu"';
const startIndex = dataStr.indexOf(startMarker);
if (startIndex === -1) {
  console.error("Could not find mcdonalds start marker");
  process.exit(1);
}

const icerikStartMarker = '"icerik": `';
const icerikStartIndex = dataStr.indexOf(icerikStartMarker, startIndex);
if (icerikStartIndex === -1) {
  console.error("Could not find icerik start marker");
  process.exit(1);
}

// Find the closing backtick for this icerik block
// We need to find the FIRST closing backtick that comes after the backtick of `icerik: \``
const startBacktickIndex = icerikStartIndex + icerikStartMarker.length - 1; 

// We need to search for the closing backtick.
// Let's just find `\n  },\n  {` which is the start of the next object, and look backwards for the backtick.
const nextObjIndex = dataStr.indexOf('},\n  {', icerikStartIndex);
let endBacktickIndex = dataStr.lastIndexOf('`', nextObjIndex);

if (endBacktickIndex === -1 || endBacktickIndex < startBacktickIndex) {
  console.error("Could not find end backtick");
  process.exit(1);
}

// Define the glorious new content
const newContent = `
      <div class="mcd-intro">
        <p class="lead" style="font-size:1.35rem; color:var(--text-300); margin-bottom:40px; line-height:1.9;"><span class="dropcap" style="color:var(--gold-400); font-family:var(--font-display); float:left; font-size:4.5rem; line-height:0.8; margin-right:15px; text-shadow:0 0 20px rgba(212,175,55,0.4);">H</span>erkes McDonald's'ı dünyanın en büyük fast-food zinciri, patates kızartması ve hamburger satan bir "restoran imparatorluğu" sanır. Oysa şirketin bilançosuna ve gelir tablosunun derinliklerine indiğinizde sarsıcı bir gerçekle karşılaşırsınız: McDonald's bir köfteci değil; dünyanın en büyük, en zeki ve en kârlı <strong>gayrimenkul şirketidir.</strong> (Hatta Katolik Kilisesi'nden sonra dünyanın en büyük toprak sahibidir.) Bu akılalmaz "pivot" hamlesi, sadece bir şirketi iflastan kurtarmakla kalmamış, modern kapitalizmin en büyük deha hamlelerinden biri olarak tarihe geçmiştir.</p>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:var(--gold-400); color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">1</span>
        Kriz: Aşçı Olma Tuzağı ve %1.9'luk Sefalet
      </h2>
      
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:30px; margin-bottom:40px;">
        <div style="background:rgba(255,50,50,0.05); border:1px solid rgba(255,50,50,0.2); border-radius:16px; padding:30px; position:relative; overflow:hidden;">
          <div style="position:absolute; top:-20px; right:-20px; font-size:6rem; opacity:0.1;">🍔</div>
          <h3 style="color:#f87171; font-family:var(--font-display); margin-top:0; font-size:1.5rem; border-bottom:1px solid rgba(255,50,50,0.2); padding-bottom:10px; margin-bottom:20px;">Zavallı Hamburgerci Modeli</h3>
          <ul style="color:var(--text-300); padding-left:20px; line-height:1.8;">
            <li>Sadece %1.9 franchise komisyonu</li>
            <li>Komisyonun %0.5'i direkt McDonald kardeşlere</li>
            <li>Kalan %1.4 ile devasa genel merkez masrafları</li>
            <li>Sıfır fiziksel varlık = Sıfır banka kredisi</li>
          </ul>
          <div style="margin-top:20px; font-weight:bold; color:#f87171; font-size:1.1rem; text-align:center; padding:10px; background:rgba(255,50,50,0.1); border-radius:8px;">Sonuç: Hızlı Büyüme, Kesin İflas</div>
        </div>
        
        <div style="background:rgba(50,255,100,0.05); border:1px solid rgba(50,255,100,0.2); border-radius:16px; padding:30px; position:relative; overflow:hidden;">
          <div style="position:absolute; top:-20px; right:-20px; font-size:6rem; opacity:0.1;">🏢</div>
          <h3 style="color:#34d399; font-family:var(--font-display); margin-top:0; font-size:1.5rem; border-bottom:1px solid rgba(50,255,100,0.2); padding-bottom:10px; margin-bottom:20px;">Gayrimenkul İmparatorluğu</h3>
          <ul style="color:var(--text-300); padding-left:20px; line-height:1.8;">
            <li>Arsalar satın alınır, mülk sahibi olunur</li>
            <li>Bayilere %9 varan astronomik kira bedelleri</li>
            <li>Kiralarla banka kredisi bayiye ödetilir</li>
            <li>Devasa fiziksel varlık = Sınırsız banka kredisi</li>
          </ul>
          <div style="margin-top:20px; font-weight:bold; color:#34d399; font-size:1.1rem; text-align:center; padding:10px; background:rgba(50,255,100,0.1); border-radius:8px;">Sonuç: Sınırsız Zenginlik</div>
        </div>
      </div>

      <p style="margin-bottom: 30px;">Kroc kıvranırken, eski bir finans ve emlak uzmanı olan <strong>Harry Sonneborn</strong> sahneye çıktı ve Ray Kroc'a iş dünyasının seyrini değiştirecek, Matrix'in kodlarını kıran şu meşhur cümleyi kurdu:</p>
      
      <div style="background: linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(20,20,20,0.8) 100%); border-left: 5px solid var(--gold-400); padding: 35px; border-radius: 0 16px 16px 0; margin-bottom: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); position:relative;">
        <span style="position:absolute; top:10px; left:15px; font-size:4rem; color:rgba(212,175,55,0.2); font-family:serif; line-height:1;">"</span>
        <p style="font-style: italic; font-size: 1.4rem; color: var(--gold-100); line-height:1.7; position:relative; z-index:2; margin:0;">
          Bay Kroc, siz aslında gıda işinde değilsiniz. Siz gayrimenkul işindesiniz. Sattığımız o hamburgerler, sadece kiracılarımızın (bayilerin) bize kiralarını ödeyebilmeleri için kullandıkları ufak birer araçtır.
        </p>
        <p style="text-align:right; margin-top:20px; color:var(--gold-400); font-weight:bold; letter-spacing:1px; margin-bottom:0;">— Harry Sonneborn, McDonald's İlk CFO'su</p>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 30px; display:flex; align-items:center; gap:15px;">
        <span style="background:var(--gold-400); color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">2</span>
        Kusursuz Finansal Makine: OPM (Other People's Money)
      </h2>
      
      <div class="financial-flow-diagram" style="background:var(--bg-dark); border:1px solid rgba(255,255,255,0.05); border-radius:24px; padding:40px; margin-bottom:40px; box-shadow:inset 0 0 50px rgba(0,0,0,0.5);">
        <div style="display:flex; flex-direction:column; gap:30px; position:relative;">
          <!-- Connecting Line -->
          <div style="position:absolute; left:40px; top:30px; bottom:30px; width:4px; background:linear-gradient(to bottom, #60a5fa, #34d399, var(--gold-400)); border-radius:2px;"></div>
          
          <div style="display:flex; align-items:center; gap:30px; position:relative; z-index:2;">
            <div style="min-width:80px; height:80px; border-radius:50%; background:#1e1e1e; border:4px solid #60a5fa; display:flex; align-items:center; justify-content:center; font-size:2rem; box-shadow:0 0 20px rgba(96,165,250,0.3);">🏦</div>
            <div>
              <h4 style="color:#60a5fa; font-size:1.3rem; margin:0 0 5px 0;">1. Banka Kredisi ile Arsa</h4>
              <p style="color:var(--text-300); margin:0; line-height:1.6;">McDonald's trafiği yoğun arazileri bulur, bunları bankadan mortgage çekerek kendi adına satın alır.</p>
            </div>
          </div>
          
          <div style="display:flex; align-items:center; gap:30px; position:relative; z-index:2;">
            <div style="min-width:80px; height:80px; border-radius:50%; background:#1e1e1e; border:4px solid #34d399; display:flex; align-items:center; justify-content:center; font-size:2rem; box-shadow:0 0 20px rgba(52,211,153,0.3);">🧑‍🍳</div>
            <div>
              <h4 style="color:#34d399; font-size:1.3rem; margin:0 0 5px 0;">2. Çaresiz Kiracı (Bayi)</h4>
              <p style="color:var(--text-300); margin:0; line-height:1.6;">Arsa ve dükkan hazır şekilde franchise sahibine "Kira = Cironun %9'u" şartıyla zorunlu olarak kiralanır.</p>
            </div>
          </div>
          
          <div style="display:flex; align-items:center; gap:30px; position:relative; z-index:2;">
            <div style="min-width:80px; height:80px; border-radius:50%; background:#1e1e1e; border:4px solid var(--gold-400); display:flex; align-items:center; justify-content:center; font-size:2rem; box-shadow:0 0 20px rgba(212,175,55,0.4);">💰</div>
            <div>
              <h4 style="color:var(--gold-300); font-size:1.3rem; margin:0 0 5px 0;">3. Sihirli Arbitraj</h4>
              <p style="color:var(--text-300); margin:0; line-height:1.6;">Kiracı, McDonald's'a yüksek kira öder. McDonald's bu kiranın küçük bir kısmıyla banka kredisini kapatır, arsanın tapusuna bedavaya sahip olur ve aradaki net farkla milyarlarca dolar kâr eder.</p>
            </div>
          </div>
        </div>
      </div>

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 20px; display:flex; align-items:center; gap:15px;">
        <span style="background:var(--gold-400); color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">3</span>
        Enflasyon Kalkanı: Zengince Simülatör v2.0
      </h2>
      <p style="margin-bottom: 30px;">Bu modelin asıl şeytani dehası enflasyon dönemlerinde ortaya çıkar. Enflasyon arttıkça hamburgerin fiyatı artar, fiyat artınca bayinin cirosu artar, ciro artınca McDonald's'ın %9'luk kira payı otomatik olarak fırlar. <strong>Ancak McDonald's'ın bankaya ödediği arsa kredisi SABİT kalır!</strong></p>
      
      <!-- INTERAKTİF SİMÜLATÖR V2 -->
      <div class="calculator-card" style="background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%); border: 1px solid rgba(212,175,55,0.2); border-radius: 24px; padding: 40px; margin: 50px 0; box-shadow: 0 20px 50px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1);">
        <div style="text-align:center; margin-bottom:30px;">
          <h3 style="color: var(--gold-300); margin: 0; font-family: var(--font-display); font-size: 1.8rem; text-transform:uppercase; letter-spacing:2px; text-shadow:0 0 15px rgba(212,175,55,0.4);">
            Zengince Simülatörü
          </h3>
          <p style="color:var(--text-400); font-size:0.9rem; margin-top:10px;">Sabit Kredi vs Enflasyon Makası</p>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr; gap: 35px; margin-bottom:40px;">
          <div class="slider-group" style="background:rgba(255,255,255,0.02); padding:20px; border-radius:16px; border:1px solid rgba(255,255,255,0.05);">
            <label style="display: flex; justify-content: space-between; margin-bottom: 15px; align-items:center;">
              <span style="color: var(--text-200); font-weight: 500; font-size:1.1rem;">🍔 Hamburger Fiyatı (Enflasyon)</span>
              <div style="background:rgba(212,175,55,0.1); padding:5px 15px; border-radius:8px; border:1px solid rgba(212,175,55,0.3);">
                <span id="burgerPriceVal" style="color: var(--gold-300); font-weight: bold; font-size: 1.4rem; font-family:monospace;">$5.00</span>
              </div>
            </label>
            <input type="range" id="burgerPrice" min="2" max="30" step="1" value="5" style="width: 100%; height:8px; border-radius:4px; appearance:none; background:rgba(255,255,255,0.1); outline:none; transition:all 0.3s;" class="premium-slider">
          </div>
          
          <div class="slider-group" style="background:rgba(255,255,255,0.02); padding:20px; border-radius:16px; border:1px solid rgba(255,255,255,0.05);">
            <label style="display: flex; justify-content: space-between; margin-bottom: 15px; align-items:center;">
              <span style="color: var(--text-200); font-weight: 500; font-size:1.1rem;">👥 Bayinin Aylık Satış Adedi</span>
              <div style="background:rgba(212,175,55,0.1); padding:5px 15px; border-radius:8px; border:1px solid rgba(212,175,55,0.3);">
                <span id="salesVolVal" style="color: var(--gold-300); font-weight: bold; font-size: 1.4rem; font-family:monospace;">20,000</span>
              </div>
            </label>
            <input type="range" id="salesVol" min="10000" max="100000" step="5000" value="20000" style="width: 100%; height:8px; border-radius:4px; appearance:none; background:rgba(255,255,255,0.1); outline:none; transition:all 0.3s;" class="premium-slider">
          </div>
        </div>

        <!-- Dashboard Display -->
        <div style="background: #000; border-radius: 20px; padding: 30px; border: 1px solid rgba(212,175,55,0.2); position:relative; overflow:hidden;">
          <!-- decorative glow -->
          <div style="position:absolute; top:-50%; left:-50%; width:200%; height:200%; background:radial-gradient(circle at center, rgba(212,175,55,0.05) 0%, transparent 70%); pointer-events:none; z-index:0;"></div>
          
          <div style="position:relative; z-index:1; display:flex; flex-direction:column; gap:20px;">
            <div style="display: flex; justify-content: space-between; align-items:center; flex-wrap:wrap; gap:10px;">
              <span style="color: var(--text-300); font-size:1.1rem;">Bayinin Toplam Brüt Cirosu:</span>
              <span id="totalRevenue" style="color: #fff; font-weight: bold; font-family: monospace; font-size: 1.4rem;">$100,000</span>
            </div>
            
            <div style="width:100%; height:1px; background:linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);"></div>
            
            <div style="display: flex; justify-content: space-between; align-items:center; flex-wrap:wrap; gap:10px;">
              <span style="color: #f87171; font-size:1.1rem; display:flex; align-items:center; gap:10px;">
                <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:#f87171; box-shadow:0 0 10px #f87171;"></span>
                McDonald's'ın Aldığı Kira (%9):
              </span>
              <span id="macRent" style="color: #f87171; font-weight: bold; font-family: monospace; font-size: 1.4rem;">+$9,000</span>
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items:center; flex-wrap:wrap; gap:10px;">
              <span style="color: #60a5fa; font-size:1.1rem; display:flex; align-items:center; gap:10px;">
                <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background:#60a5fa; box-shadow:0 0 10px #60a5fa;"></span>
                Bankaya Ödenen Kredi (SABİT):
              </span>
              <span style="color: #60a5fa; font-weight: bold; font-family: monospace; font-size: 1.4rem;">-$3,000</span>
            </div>
            
            <div style="width:100%; height:1px; background:linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent); margin-top:10px;"></div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; background:rgba(212,175,55,0.05); padding:20px; border-radius:12px; border:1px solid rgba(212,175,55,0.1); flex-wrap:wrap; gap:10px;">
              <span style="color: var(--gold-200); font-size: 1.3rem; font-weight: 800; text-transform: uppercase; letter-spacing: 2px;">Net Nakit Akışı:</span>
              <span id="macProfit" style="color: var(--gold-400); font-weight: 900; font-family: monospace; font-size: 2.5rem; text-shadow: 0 0 20px rgba(212,175,55,0.5); letter-spacing:-1px;">$6,000</span>
            </div>

            <!-- Profit Bar -->
            <div style="width:100%; height:6px; background:rgba(255,255,255,0.05); border-radius:3px; margin-top:10px; overflow:hidden;">
              <div id="profitBar" style="height:100%; width:20%; background:linear-gradient(90deg, #f59e0b, #fbbf24); box-shadow:0 0 10px rgba(251,191,36,0.8); transition:width 0.4s cubic-bezier(0.4, 0, 0.2, 1);"></div>
            </div>
          </div>
        </div>
      </div>
      <style>
        .premium-slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--gold-400);
          cursor: pointer;
          border: 3px solid #000;
          box-shadow: 0 0 15px rgba(212,175,55,0.8);
          transition: transform 0.1s;
        }
        .premium-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
      </style>
      <script>
        (function(){
          const priceSlider = document.getElementById('burgerPrice');
          const volSlider = document.getElementById('salesVol');
          
          const priceVal = document.getElementById('burgerPriceVal');
          const volVal = document.getElementById('salesVolVal');
          const revenueDisplay = document.getElementById('totalRevenue');
          const rentDisplay = document.getElementById('macRent');
          const profitDisplay = document.getElementById('macProfit');
          const profitBar = document.getElementById('profitBar');
          
          const fixedMortgage = 3000; 
          
          // Animate numbers function
          function animateValue(obj, start, end, duration, prefix) {
            let startTimestamp = null;
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              const currentVal = Math.floor(progress * (end - start) + start);
              obj.textContent = prefix + currentVal.toLocaleString();
              if (progress < 1) {
                window.requestAnimationFrame(step);
              } else {
                obj.textContent = prefix + end.toLocaleString();
              }
            };
            window.requestAnimationFrame(step);
          }

          let lastProfit = 6000;
          
          function updateCalc() {
            if(!priceSlider || !volSlider) return;
            const price = parseInt(priceSlider.value);
            const vol = parseInt(volSlider.value);
            
            priceVal.textContent = '$' + price.toFixed(2);
            volVal.textContent = vol.toLocaleString();
            
            const revenue = price * vol;
            const rent = revenue * 0.09; 
            const profit = rent - fixedMortgage;
            
            revenueDisplay.textContent = '$' + revenue.toLocaleString();
            rentDisplay.textContent = '+$' + rent.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0});
            
            animateValue(profitDisplay, lastProfit, profit, 300, '$');
            lastProfit = profit;
            
            const maxProfit = (30 * 100000 * 0.09) - fixedMortgage;
            const barWidth = Math.min(100, Math.max(2, (profit / maxProfit) * 100));
            profitBar.style.width = barWidth + '%';
            
            if (profit > 50000) {
              profitDisplay.style.color = '#fbbf24';
              profitDisplay.style.textShadow = '0 0 30px rgba(251, 191, 36, 0.8)';
              profitBar.style.background = 'linear-gradient(90deg, #fbbf24, #fff)';
            } else {
              profitDisplay.style.color = 'var(--gold-400)';
              profitDisplay.style.textShadow = '0 0 20px rgba(212,175,55,0.5)';
              profitBar.style.background = 'linear-gradient(90deg, #f59e0b, #fbbf24)';
            }
          }
          
          priceSlider.addEventListener('input', updateCalc);
          volSlider.addEventListener('input', updateCalc);
          setTimeout(updateCalc, 100);
        })();
      </script>
      <!-- İNTERAKTİF SİMÜLATÖR V2 BİTİŞ -->

      <h2 style="margin-top: 60px; color: var(--gold-200); font-family: var(--font-display); font-size: 2.2rem; margin-bottom: 20px; display:flex; align-items:center; gap:15px;">
        <span style="background:var(--gold-400); color:#000; width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:50%; font-size:1.5rem;">4</span>
        Günümüz Bilançosu: Devasa Toprak Ağalığı
      </h2>
      <p style="margin-bottom: 30px;">Bugün McDonald's'ın bilançosuna baktığınızda, yaklaşık <strong>40 Milyar Dolarlık gayrimenkul varlığı</strong> görürsünüz. Şirketin yıllık milyarlarca dolarlık işletme kârının %80'den fazlası hamburger satışından değil, doğrudan franchise sahiplerinden tahsil edilen <strong>kiralardan</strong> gelir.</p>
      
      <!-- Visual Balance Sheet -->
      <div style="background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); border-radius:20px; padding:30px; margin-bottom:40px; display:flex; gap:30px; align-items:center; flex-wrap:wrap; box-shadow:0 10px 30px rgba(0,0,0,0.3);">
        <div style="flex:1; min-width:200px;">
          <h4 style="color:var(--text-200); margin-top:0; font-size:1.2rem; margin-bottom:20px;">McDonald's Gerçek Gelir Dağılımı</h4>
          
          <div style="margin-bottom:20px;">
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
              <span style="color:var(--gold-300); font-weight:bold; font-size:1.1rem;">Kira ve Emlak Gelirleri</span>
              <span style="color:var(--gold-400); font-weight:bold; font-size:1.1rem;">~%82</span>
            </div>
            <div style="width:100%; height:16px; background:rgba(0,0,0,0.5); border-radius:8px; overflow:hidden; border:1px solid rgba(212,175,55,0.2);">
              <div style="width:82%; height:100%; background:linear-gradient(90deg, #b45309, var(--gold-400)); box-shadow:0 0 10px rgba(212,175,55,0.5);"></div>
            </div>
          </div>
          
          <div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
              <span style="color:#f87171; font-weight:bold; font-size:1.1rem;">Hamburger / Gıda Satışı</span>
              <span style="color:#f87171; font-weight:bold; font-size:1.1rem;">~%18</span>
            </div>
            <div style="width:100%; height:16px; background:rgba(0,0,0,0.5); border-radius:8px; overflow:hidden; border:1px solid rgba(248,113,113,0.2);">
              <div style="width:18%; height:100%; background:linear-gradient(90deg, #991b1b, #f87171);"></div>
            </div>
          </div>
        </div>
        
        <div style="flex:1; min-width:250px; background:rgba(0,0,0,0.3); padding:25px; border-radius:12px; border-left:4px solid var(--gold-400);">
          <p style="margin:0; color:var(--text-300); font-style:italic; line-height:1.7;">
            "Eğer bir bayi kurallara uymazsa, kalitesiz ürün satarsa veya isyan ederse; McDonald's sadece sözleşmeyi iptal etmekle kalmaz, ev sahibi olduğu için bayiyi direkt kapı dışarı eder. Bayi her şeyini kaybederken, McDonald's anahtarı alıp ertesi gün dükkanı yeni bir kiracıya devreder. Sıfır risk, sonsuz güç."
          </p>
        </div>
      </div>

      <div class="article-alert" style="margin-top: 60px; background: linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(10,10,10,0.9) 100%); border: 1px solid rgba(212,175,55,0.3); border-left: 6px solid var(--gold-400); border-radius: 16px; padding:40px; box-shadow:0 15px 40px rgba(0,0,0,0.6);">
        <div style="display:flex; align-items:center; gap:15px; margin-bottom:20px;">
          <div style="width:50px; height:50px; background:var(--gold-400); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.8rem; box-shadow:0 0 20px rgba(212,175,55,0.6);">⚡</div>
          <h3 style="margin: 0; color: var(--gold-300); font-family:var(--font-display); font-size:1.8rem; text-transform:uppercase; letter-spacing:1px;">Zengince Tokadı</h3>
        </div>
        <p style="margin-bottom: 0; color:#E0E0E0; font-size:1.2rem; line-height:1.8; text-shadow:0 2px 4px rgba(0,0,0,0.5);">
          Bir iş modelinin görünen (vitrin) yüzü ile gerçek paranın kazanıldığı (arka oda) tamamen farklı olabilir. Görünen yüz (hamburger ve patates), sadece insan trafiğini çeken ucuz bir yemdir; asıl servet (gayrimenkul değerlemesi ve kira kaldıracı) arka tarafta inşa edilir. Kendi işinizi tasarlarken kendinize şu acımasız soruyu sorun: <strong style="color:var(--gold-400);">"Ben masada sadece bir 'Aşçı' mıyım, yoksa masanın ve dükkanın bizzat 'Sahibi' miyim?"</strong> Operasyonel ve stresli işleri başkalarına (bayilere) yıkarken, fiziksel ve kalıcı varlıkları kendi bilançonuzda topladığınız an, oyunu siz kazanırsınız.
        </p>
      </div>
`;

const newDataStr = dataStr.substring(0, startBacktickIndex + 1) + '\n' + newContent + '\n    ' + dataStr.substring(endBacktickIndex);

fs.writeFileSync(targetPath, newDataStr, 'utf8');
console.log("Successfully updated McDonald's article content!");
