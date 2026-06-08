const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.zengince.com';
const today = new Date().toISOString().split('T')[0];

// Import Data
const { KITAPLAR } = require('./data/kitaplar-data');
const { FILMLER } = require('./data/filmler-data');
const { BELGESELLER } = require('./data/belgeseller-data');
const { DIZILER } = require('./data/diziler-data');
const { GIRISIMCILER } = require('./data/girisimciler-data');
const { SOZLUK_TERIMLERI } = require('./data/sozluk-data');
const { OGRETILER } = require('./data/ogretiler-data');
const { ALISKANLIKLAR } = require('./data/aliskanliklar-data');
const { SAVUNMA_YONTEMLERI } = require('./data/savunma-data');
const { MAKALELER } = require('./data/makaleler-data');
const { IFLASLAR } = require('./data/basarisizliklar-data');
const { TASARRUF_MODELLERI } = require('./data/tasarruf-modelleri-data');
const { YATIRIM_ARACLARI } = require('./data/yatirim-araclari-data');
const { DEHA_HAMLELERI } = require('./data/deha-hamleleri-data');

// Static Routes
const staticRoutes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/forum', priority: '0.9', changefreq: 'hourly' },
  { url: '/makaleler', priority: '0.9', changefreq: 'daily' },
  { url: '/kitaplar', priority: '0.8', changefreq: 'weekly' },
  { url: '/filmler', priority: '0.8', changefreq: 'weekly' },
  { url: '/belgeseller', priority: '0.8', changefreq: 'weekly' },
  { url: '/diziler', priority: '0.8', changefreq: 'weekly' },
  { url: '/podcastler', priority: '0.8', changefreq: 'weekly' },
  { url: '/tasarruf-modelleri', priority: '0.8', changefreq: 'monthly' },
  { url: '/yatirim-araclari', priority: '0.9', changefreq: 'weekly' },
  { url: '/ogretiler', priority: '0.8', changefreq: 'monthly' },
  { url: '/girisimciler', priority: '0.8', changefreq: 'monthly' },
  { url: '/deha-hamleleri', priority: '0.8', changefreq: 'monthly' },
  { url: '/aliskanliklar', priority: '0.8', changefreq: 'monthly' },
  { url: '/alintilar', priority: '0.7', changefreq: 'weekly' },
  { url: '/finansal-savunma', priority: '0.8', changefreq: 'monthly' },
  { url: '/iflaslar', priority: '0.8', changefreq: 'monthly' },
  { url: '/sozluk', priority: '0.7', changefreq: 'monthly' },
  
  // Calculators
  { url: '/kdv-hesaplayici', priority: '0.6', changefreq: 'yearly' },
  { url: '/yuzde-hesaplayici', priority: '0.6', changefreq: 'yearly' },
  { url: '/hesaplayici', priority: '0.6', changefreq: 'yearly' },
  { url: '/kredi-hesaplayici', priority: '0.6', changefreq: 'yearly' },
  { url: '/ticaret-hesaplayici', priority: '0.6', changefreq: 'yearly' },
  { url: '/kidem-tazminati-hesaplayici', priority: '0.6', changefreq: 'yearly' },
  { url: '/kira-artisi-hesaplayici', priority: '0.6', changefreq: 'yearly' },
  { url: '/mevduat-hesaplayici', priority: '0.6', changefreq: 'yearly' },
  { url: '/butce-hesaplayici', priority: '0.6', changefreq: 'yearly' },
  { url: '/saatlik-ucret-hesaplayici', priority: '0.6', changefreq: 'yearly' },
  { url: '/aliskanlik-maliyeti', priority: '0.6', changefreq: 'yearly' },
  { url: '/sigara-alkol-hesaplayici', priority: '0.6', changefreq: 'yearly' },
  { url: '/fire-hesaplayici', priority: '0.6', changefreq: 'yearly' },
];

let sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemapXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Helper to add URL block
function addUrl(loc, priority, changefreq) {
  sitemapXml += '  <url>\n';
  sitemapXml += '    <loc>' + SITE_URL + loc + '</loc>\n';
  sitemapXml += '    <lastmod>' + today + '</lastmod>\n';
  sitemapXml += '    <changefreq>' + changefreq + '</changefreq>\n';
  sitemapXml += '    <priority>' + priority + '</priority>\n';
  sitemapXml += '  </url>\n';
}

// 1. Add Static Routes
staticRoutes.forEach(route => {
  addUrl(route.url, route.priority, route.changefreq);
});

// 2. Dynamic Routes Helper
function addDynamicRoutes(dataArray, basePath, priority = '0.7') {
  if (dataArray && Array.isArray(dataArray)) {
    dataArray.forEach(item => {
      if (item.slug) {
        addUrl('/' + basePath + '/' + item.slug, priority, 'monthly');
      }
    });
  }
}

// Add Dynamic Routes
addDynamicRoutes(KITAPLAR, 'kitaplar');
addDynamicRoutes(FILMLER, 'filmler');
addDynamicRoutes(BELGESELLER, 'belgeseller');
addDynamicRoutes(DIZILER, 'diziler');
addDynamicRoutes(GIRISIMCILER, 'girisimciler', '0.8');
addDynamicRoutes(OGRETILER, 'ogretiler', '0.8');
addDynamicRoutes(ALISKANLIKLAR, 'aliskanliklar', '0.8');
addDynamicRoutes(SAVUNMA_YONTEMLERI, 'finansal-savunma', '0.8');
addDynamicRoutes(MAKALELER, 'makaleler', '0.9');
addDynamicRoutes(IFLASLAR, 'iflaslar');
addDynamicRoutes(TASARRUF_MODELLERI, 'tasarruf-modelleri');
addDynamicRoutes(YATIRIM_ARACLARI, 'yatirim-araclari', '0.9');
addDynamicRoutes(DEHA_HAMLELERI, 'deha-hamleleri', '0.8');
addDynamicRoutes(SOZLUK_TERIMLERI, 'sozluk', '0.6');

sitemapXml += '</urlset>';

// Write Sitemap
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');
console.log('sitemap.xml successfully generated at: ' + sitemapPath);

// Write Robots.txt
const robotsTxt = "User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /mesajlar\nDisallow: /profil/\n\nSitemap: " + SITE_URL + "/sitemap.xml\n";

const robotsPath = path.join(__dirname, 'public', 'robots.txt');
fs.writeFileSync(robotsPath, robotsTxt, 'utf8');
console.log('robots.txt successfully generated at: ' + robotsPath);
