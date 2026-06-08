const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'girisimciler-data.js');
let { GIRISIMCILER } = require('./data/girisimciler-data.js');

GIRISIMCILER = GIRISIMCILER.map(g => {
    // We update the foto URL to a stable Bing search proxy
    const query = encodeURIComponent(g.isim + " Portrait");
    g.foto = `https://tse1.mm.bing.net/th?q=${query}&w=400&h=400&c=7&rs=1&p=0`;
    return g;
});

let outText = "'use strict';\n\nconst GIRISIMCILER = [\n";
GIRISIMCILER.forEach((g, idx) => {
    let str = `  {
    "slug": ${JSON.stringify(g.slug)},
    "isim": ${JSON.stringify(g.isim)},
    "unvan": ${JSON.stringify(g.unvan)},
    "foto": ${JSON.stringify(g.foto)},
    "ozet": ${JSON.stringify(g.ozet)},
    "netDeger": ${JSON.stringify(g.netDeger)},
    "zihinYapisi": ${JSON.stringify(g.zihinYapisi, null, 6).replace(/\n/g, '\n    ')},
    "kitapOnerisi": ${JSON.stringify(g.kitapOnerisi)},
    "altinSoz": ${JSON.stringify(g.altinSoz)},
    "detayliHikaye": \`\n${g.detayliHikaye}\n    \`\n  }`;
    if (idx < GIRISIMCILER.length - 1) {
        str += ",\n";
    }
    outText += str;
});

outText += "\n];\n\nmodule.exports = { GIRISIMCILER };\n";

fs.writeFileSync(filePath, outText, 'utf8');
console.log("GIRISIMCILER IMAGES FIXED");
