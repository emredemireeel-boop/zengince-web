const fs = require('fs');
const path = require('path');

// 1. Update index.js
const indexPath = path.join(__dirname, 'index.js');
let indexContent = fs.readFileSync(indexPath, 'utf8');

const tickerApiCode = `
// ── API: Piyasa Verileri (Ticker) ─────────────────────────────────────────────
app.get('/api/ticker', async (req, res) => {
  let btc = null, bist = null, gold = null;
  
  try {
    const btcRes = await fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT');
    const btcData = await btcRes.json();
    btc = {
      price: parseFloat(btcData.lastPrice),
      change: parseFloat(btcData.priceChangePercent)
    };
  } catch(e) { console.error("BTC fetch error:", e.message); }
  
  try {
    const bistRes = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/XU100.IS');
    const bistData = await bistRes.json();
    const bistMeta = bistData.chart.result[0].meta;
    bist = {
      price: bistMeta.regularMarketPrice,
      change: ((bistMeta.regularMarketPrice - bistMeta.chartPreviousClose) / bistMeta.chartPreviousClose) * 100
    };
  } catch(e) { console.error("BIST fetch error:", e.message); }
  
  try {
    const goldRes = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/GC=F');
    const usdRes = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/TRY=X');
    
    if (goldRes.ok && usdRes.ok) {
      const goldData = await goldRes.json();
      const usdData = await usdRes.json();
      
      const goldOzUsd = goldData.chart.result[0].meta.regularMarketPrice;
      const goldPrev = goldData.chart.result[0].meta.chartPreviousClose;
      
      const usdTry = usdData.chart.result[0].meta.regularMarketPrice;
      const usdPrev = usdData.chart.result[0].meta.chartPreviousClose;
      
      const currentGram = (goldOzUsd * usdTry) / 31.1034768;
      const prevGram = (goldPrev * usdPrev) / 31.1034768;
      
      gold = {
        price: parseFloat(currentGram.toFixed(2)),
        change: parseFloat((((currentGram - prevGram) / prevGram) * 100).toFixed(2))
      };
    }
  } catch(e) { console.error("GOLD fetch error:", e.message); }
  
  res.json({
    success: true,
    data: { btc, bist, gold }
  });
});

// ── Auth İşlemleri ────────────────────────────────────────────────────────────`;

if (!indexContent.includes('/api/ticker')) {
    indexContent = indexContent.replace('// ── Auth İşlemleri ────────────────────────────────────────────────────────────', tickerApiCode);
    fs.writeFileSync(indexPath, indexContent, 'utf8');
    console.log("index.js API patched.");
}

// 2. Update views/forum.ejs
const forumPath = path.join(__dirname, 'views', 'forum.ejs');
let forumContent = fs.readFileSync(forumPath, 'utf8');

// The block to replace:
const oldTickerBlock = `<div style="display:flex; padding-left: 16px; align-items:center; gap: 32px; white-space: nowrap; overflow:hidden;">
          <span style="font-size: 11px; color: var(--gold-200); font-weight: 700; font-family: monospace; padding: 4px 8px; background: rgba(212,175,55,0.1); border-radius: 6px;">
            PİYASALAR
          </span>
          <span style="width: 1px; height: 18px; background: var(--card-border); display: inline-block; margin: 0 8px;"></span>
          <div style="display:flex; gap: 8px; font-size:12px;">
            <span style="color:var(--text-muted); font-weight:600;">BIST 100</span>
            <span style="font-weight:700; font-family:monospace;">10.450</span>
            <span style="color:var(--success);">▲ %1.2</span>
          </div>
          <div style="display:flex; gap: 8px; font-size:12px;">
            <span style="color:var(--text-muted); font-weight:600;">Bitcoin</span>
            <span style="font-weight:700; font-family:monospace;">$64,300</span>
            <span style="color:var(--danger);">▼ %0.5</span>
          </div>
          <div style="display:flex; gap: 8px; font-size:12px;">
            <span style="color:var(--text-muted); font-weight:600;">Gram Altın</span>
            <span style="font-weight:700; font-family:monospace;">2.450 ₺</span>
            <span style="color:var(--success);">▲ %0.8</span>
          </div>
        </div>`;

const newTickerBlock = `<div style="display:flex; padding-left: 16px; align-items:center; gap: 32px; white-space: nowrap; overflow:hidden;" id="market-ticker-container">
          <span style="font-size: 11px; color: var(--gold-200); font-weight: 700; font-family: monospace; padding: 4px 8px; background: rgba(212,175,55,0.1); border-radius: 6px;">
            PİYASALAR
          </span>
          <span style="width: 1px; height: 18px; background: var(--card-border); display: inline-block; margin: 0 8px;"></span>
          <span style="color:var(--text-muted); font-size:12px;" id="ticker-loading">Canlı Veriler Yükleniyor...</span>
        </div>`;

if (forumContent.includes('10.450')) {
    forumContent = forumContent.replace(oldTickerBlock, newTickerBlock);
    
    // Add client-side fetch script before closing </body> or </div>
    const scriptToAppend = `
<script>
  async function loadLiveTicker() {
    try {
      const res = await fetch('/api/ticker');
      const json = await res.json();
      if (json.success && json.data) {
        const d = json.data;
        const container = document.getElementById('market-ticker-container');
        
        const formatMoney = (val, currency) => {
          return new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 2 }).format(val) + ' ' + currency;
        };

        const formatChange = (change) => {
          const sign = change >= 0 ? '▲' : '▼';
          const color = change >= 0 ? 'var(--success)' : 'var(--danger)';
          return \\\`<span style="color:\\\${color};">\\\${sign} %\\\${Math.abs(change).toFixed(2)}</span>\\\`;
        };

        let html = \\\`
          <span style="font-size: 11px; color: var(--gold-200); font-weight: 700; font-family: monospace; padding: 4px 8px; background: rgba(212,175,55,0.1); border-radius: 6px;">
            PİYASALAR (CANLI)
          </span>
          <span style="width: 1px; height: 18px; background: var(--card-border); display: inline-block; margin: 0 8px;"></span>\\\`;

        if (d.bist) {
          html += \\\`
          <div style="display:flex; gap: 8px; font-size:12px;">
            <span style="color:var(--text-muted); font-weight:600;">BIST 100</span>
            <span style="font-weight:700; font-family:monospace;">\\\${formatMoney(d.bist.price, '')}</span>
            \\\${formatChange(d.bist.change)}
          </div>\\\`;
        }

        if (d.btc) {
          html += \\\`
          <div style="display:flex; gap: 8px; font-size:12px;">
            <span style="color:var(--text-muted); font-weight:600;">Bitcoin</span>
            <span style="font-weight:700; font-family:monospace;">$\\\${new Intl.NumberFormat('en-US').format(d.btc.price)}</span>
            \\\${formatChange(d.btc.change)}
          </div>\\\`;
        }

        if (d.gold) {
          html += \\\`
          <div style="display:flex; gap: 8px; font-size:12px;">
            <span style="color:var(--text-muted); font-weight:600;">Gram Altın</span>
            <span style="font-weight:700; font-family:monospace;">\\\${formatMoney(d.gold.price, '₺')}</span>
            \\\${formatChange(d.gold.change)}
          </div>\\\`;
        }

        if (!d.bist && !d.btc && !d.gold) {
          html += '<span style="color:var(--text-muted); font-size:12px;">Piyasa verileri alınamadı.</span>';
        }

        container.innerHTML = html;
      }
    } catch(e) {
      document.getElementById('ticker-loading').textContent = 'Piyasa verileri alınamadı.';
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    loadLiveTicker();
    // Verileri her 30 saniyede bir otomatik olarak canlı günceller
    setInterval(loadLiveTicker, 30000);
  });
</script>
`;
    // Insert script just before <%- include('partials/footer') %>
    forumContent = forumContent.replace("<%- include('partials/footer') %>", scriptToAppend + "\n<%- include('partials/footer') %>");
    
    fs.writeFileSync(forumPath, forumContent, 'utf8');
    console.log("forum.ejs UI patched.");
}

console.log("DONE!");
