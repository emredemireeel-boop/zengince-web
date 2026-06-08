const fs = require('fs');
const path = require('path');

const targets = [
  { file: 'kitap-detay.ejs', varName: 'kitap', prefix: 'kitap' },
  { file: 'film-detay.ejs', varName: 'film', prefix: 'film' },
  { file: 'dizi-detay.ejs', varName: 'dizi', prefix: 'dizi' },
  { file: 'belgesel-detay.ejs', varName: 'belgesel', prefix: 'belgesel' },
  { file: 'makale-detay.ejs', varName: 'makale', prefix: 'makale' },
  { file: 'girisimci-detay.ejs', varName: 'g', prefix: 'girisimci' }, // index.js'de girisimci-detay.ejs'ye 'g' olarak gidiyor
  { file: 'tasarruf-detay.ejs', varName: 'model', prefix: 'tasarruf' },
  { file: 'yatirim-araci-detay.ejs', varName: 'arac', prefix: 'yatirim' },
  { file: 'aliskanlik-detay.ejs', varName: 'aliskanlik', prefix: 'aliskanlik' },
  { file: 'savunma-detay.ejs', varName: 'savunma', prefix: 'savunma' },
  { file: 'iflas-detay.ejs', varName: 'iflas', prefix: 'iflas' },
  { file: 'deha-hamle-detay.ejs', varName: 'h', prefix: 'deha' }, // index.js'de 'h' olarak gidiyor
  { file: 'terim-detay.ejs', varName: 'terim', prefix: 'terim' },
  { file: 'ogreti-detay.ejs', varName: 'ogreti', prefix: 'ogreti' }
];

const viewsDir = path.join(__dirname, 'views');

targets.forEach(target => {
  const filePath = path.join(viewsDir, target.file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Yorum satırı zaten eklenmişse atla
    if (content.includes("partials/comments")) return;

    const includeStr = `
<section class="section" style="padding-top: 0;">
  <div class="container">
    <%- include('partials/comments', { pageId: '${target.prefix}_' + ${target.varName}.slug }) %>
  </div>
</section>
`;

    // Footer'dan hemen önceye ekle
    content = content.replace("<%- include('partials/footer') %>", includeStr + "\n<%- include('partials/footer') %>");
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Updated: " + target.file);
  } else {
    console.log("Not found: " + target.file);
  }
});
