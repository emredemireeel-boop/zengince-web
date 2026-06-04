'use strict';

const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3002;

const SITE_URL = 'https://www.zengince.com';

// ── Veri Dosyaları ────────────────────────────────────────────────────────
const { KITAPLAR, KITAP_KATEGORILER } = require('./data/kitaplar-data');
const { FILMLER, FILM_TURLERI } = require('./data/filmler-data');
const { DIZILER, DIZI_TURLERI } = require('./data/diziler-data');
const { PODCASTLER, PODCAST_KATEGORILER } = require('./data/podcastler-data');
const { GIRISIMCILER } = require('./data/girisimciler-data');
const { SOZLUK } = require('./data/sozluk-data');
const { OGRETILER, OGRETI_KATEGORILER } = require('./data/ogretiler-data');
const { ALINTILAR, ALINTI_KATEGORILER } = require('./data/alintilar-data');
const { ALISKANLIKLAR, ALISKANLIK_KATEGORILER } = require('./data/aliskanliklar-data');
const { SAVUNMA_YONTEMLERI } = require('./data/savunma-data');
const { MAKALELER, MAKALE_KATEGORILERI } = require('./data/makaleler-data');

// ── Gzip Sıkıştırma ──────────────────────────────────────────────────────
app.use(compression());

// ── EJS Template Engine ───────────────────────────────────────────────────
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Production'da EJS view cache aktif et
if (process.env.NODE_ENV === 'production') {
  app.enable('view cache');
}

// ── Güvenlik Başlıkları ──────────────────────────────────────────────────
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// ── Statik Dosyalar ─────────────────────────────────────────────────────
app.use(express.static(path.join(__dirname, 'public'), {
  index: false,
  maxAge: process.env.NODE_ENV === 'production' ? '7d' : 0,
  etag: true
}));

// ═══════════════════════════════════════════════════════════════════════════
// YARDIMCI FONKSİYONLAR
// ═══════════════════════════════════════════════════════════════════════════

// Haftanın kitabı/filmi seçimi (her hafta değişir)
function getWeeklyIndex(arrayLength) {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const weekNumber = Math.ceil(((now - start) / 86400000 + start.getDay() + 1) / 7);
  return weekNumber % arrayLength;
}

// Carousel için rastgele alıntılar seç
function getCarouselAlintilar(count) {
  const shuffled = [...ALINTILAR].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// ═══════════════════════════════════════════════════════════════════════════
// ROTALAR
// ═══════════════════════════════════════════════════════════════════════════

// ── Ana Sayfa ──────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.render('anasayfa', {
    title: 'Zengince — Zenginlik Eğitim Platformu | Kitaplar, Filmler, Öğretiler',
    desc: 'Zenginlik öğretileri, kitap ve film önerileri, altın sözler ve kanıtlanmış zenginlik alışkanlıkları ile finansal özgürlük yolculuğunuza başlayın.',
    canonical: SITE_URL,
    ogretiler: OGRETILER,
    haftaninKitabi: KITAPLAR[getWeeklyIndex(KITAPLAR.length)],
    haftaninFilmi: FILMLER[getWeeklyIndex(FILMLER.length)],
    carouselAlintilar: getCarouselAlintilar(8)
  });
});

// ── Kitaplar ────────────────────────────────────────────────────────────
app.get('/kitaplar', (req, res) => {
  res.render('kitaplar', {
    title: 'Zenginlik Kitapları — Mutlaka Okunması Gereken Finansal Kitaplar | Zengince',
    desc: 'Baba Zengin Yoksul Baba, Atomik Alışkanlıklar, Akıllı Yatırımcı ve daha fazlası. Zenginlik yolculuğunuzda okumanız gereken en etkili kitaplar.',
    canonical: SITE_URL + '/kitaplar',
    kitaplar: KITAPLAR,
    kategoriler: KITAP_KATEGORILER
  });
});

app.get('/kitaplar/:slug', (req, res) => {
  const kitap = KITAPLAR.find(k => k.slug === req.params.slug);
  
  if (!kitap) {
    return res.status(404).send('Kitap bulunamadı.');
  }

  res.render('kitap-detay', {
    title: `${kitap.baslik} | Zengince Kütüphane`,
    path: '/kitaplar',
    kitap: kitap,
    kategori: KITAP_KATEGORILER[kitap.kategori] || { baslik: 'Genel' }
  });
});

// ── Filmler ─────────────────────────────────────────────────────────────
app.get('/filmler', (req, res) => {
  res.render('filmler', {
    title: 'Zenginlik Filmleri & Belgeselleri — Finansal Dünyayı Anlatan Filmler | Zengince',
    desc: 'The Wolf of Wall Street, The Big Short, Pursuit of Happyness ve daha fazlası. Zenginlik ve finans dünyasını anlatan en etkileyici filmler.',
    canonical: SITE_URL + '/filmler',
    filmler: FILMLER,
    turler: FILM_TURLERI
  });
});

app.get('/filmler/:slug', (req, res) => {
  const film = FILMLER.find(f => f.slug === req.params.slug);
  
  if (!film) {
    return res.status(404).send('Film bulunamadı.');
  }

  res.render('film-detay', {
    title: `${film.baslik} İncelemesi | Zengince Sinema`,
    path: '/filmler',
    film: film,
    tur: FILM_TURLERI[film.tur] || { baslik: 'Genel' }
  });
});

// ── Diziler ─────────────────────────────────────────────────────────────
app.get('/diziler', (req, res) => {
  res.render('diziler', {
    title: 'Zenginlik Dizileri — Güç ve Para Dünyasını Anlatan Diziler | Zengince',
    desc: 'Succession, Billions, Ozark ve daha fazlası. Güç dinamikleri, yatırım ve stratejiyi anlatan en iyi dizi önerileri.',
    canonical: SITE_URL + '/diziler',
    diziler: DIZILER,
    turler: DIZI_TURLERI
  });
});

app.get('/diziler/:slug', (req, res) => {
  const dizi = DIZILER.find(d => d.slug === req.params.slug);
  
  if (!dizi) {
    return res.status(404).send('Dizi bulunamadı.');
  }

  res.render('dizi-detay', {
    title: `${dizi.baslik} İncelemesi | Zengince Diziler`,
    path: '/diziler',
    dizi: dizi,
    tur: DIZI_TURLERI[dizi.tur] || { baslik: 'Genel' }
  });
});

// ── Podcastler ──────────────────────────────────────────────────────────
app.get('/podcastler', (req, res) => {
  res.render('podcastler', {
    title: 'Zenginlik Podcastleri — En İyi Finans ve Girişimcilik Podcastleri | Zengince',
    desc: 'Naval, My First Million, Tim Ferriss ve daha fazlası. Zihniyetinizi geliştirecek en iyi podcast önerileri.',
    canonical: SITE_URL + '/podcastler',
    podcastler: PODCASTLER,
    kategoriler: PODCAST_KATEGORILER
  });
});

// ── Girişimciler ────────────────────────────────────────────────────────
app.get('/girisimciler', (req, res) => {
  res.render('girisimciler', {
    title: 'Usta Girişimciler ve Mental Modelleri | Zengince',
    desc: 'Warren Buffett, Elon Musk, Naval Ravikant ve daha fazlası. Dünyanın en başarılı insanlarının zihin yapıları.',
    canonical: SITE_URL + '/girisimciler',
    girisimciler: GIRISIMCILER
  });
});

app.get('/girisimciler/:slug', (req, res) => {
  const girisimci = GIRISIMCILER.find(g => g.slug === req.params.slug);

  if (!girisimci) {
    return res.status(404).send('Girişimci bulunamadı.');
  }

  res.render('girisimci-detay', {
    title: `${girisimci.isim} - Zihin Yapısı ve Serveti | Zengince`,
    path: '/girisimciler',
    g: girisimci
  });
});

// ── Makaleler (Blog) ────────────────────────────────────────────────────

// Alışkanlık Detay Sayfası
app.get('/aliskanliklar/:slug', (req, res) => {
  const slug = req.params.slug;
  const aliskanlik = ALISKANLIKLAR.find(a => a.slug === slug);
  
  if (!aliskanlik) {
    return res.status(404).render('404', { title: 'Alışkanlık Bulunamadı - Zengince' });
  }

  res.render('aliskanlik-detay', {
    title: aliskanlik.baslik + ' - Zenginlik Alışkanlıkları',
    aliskanlik: aliskanlik,
    kategoriAdi: ALISKANLIK_KATEGORILER[aliskanlik.kategori] ? ALISKANLIK_KATEGORILER[aliskanlik.kategori].baslik : ''
  });
});


// Finansal Savunma (Karanlık Finans)
app.get('/finansal-savunma', (req, res) => {
  res.render('savunma', {
    title: 'Finansal Savunma: Dolandırıcılık Anatomisi - Zengince',
    path: '/finansal-savunma',
    savunmalar: SAVUNMA_YONTEMLERI
  });
});

app.get('/finansal-savunma/:slug', (req, res) => {
  const slug = req.params.slug;
  const savunma = SAVUNMA_YONTEMLERI.find(s => s.slug === slug);
  
  if (!savunma) {
    return res.status(404).render('404', { title: 'Yöntem Bulunamadı - Zengince' });
  }

  res.render('savunma-detay', {
    title: savunma.baslik + ' - Finansal Savunma',
    savunma: savunma
  });
});

app.get('/makaleler', (req, res) => {
  res.render('makaleler', {
    title: 'Makaleler ve Blog | Zengince',
    path: '/makaleler',
    makaleler: MAKALELER,
    kategoriler: MAKALE_KATEGORILERI
  });
});

app.get('/makaleler/:slug', (req, res) => {
  const makale = MAKALELER.find(m => m.slug === req.params.slug);
  
  if (!makale) {
    return res.status(404).send('Makale bulunamadı.');
  }

  res.render('makale-detay', {
    title: `${makale.baslik} | Zengince`,
    path: '/makaleler',
    makale: makale,
    kategori_bilgisi: MAKALE_KATEGORILERI[makale.kategori] || { emoji: '📝', renk: '#D4AF37' }
  });
});

// ── Öğretiler ───────────────────────────────────────────────────────────
app.get('/ogretiler', (req, res) => {
  res.render('ogretiler', {
    title: 'Zenginlik Öğretileri — Finansal Özgürlüğün Temel Prensipleri | Zengince',
    desc: 'Bileşik faiz, 80/20 kuralı, pasif gelir, kaldıraç gücü ve daha fazlası. Zenginliğin temel taşlarını öğrenin.',
    canonical: SITE_URL + '/ogretiler',
    ogretiler: OGRETILER,
    kategoriler: OGRETI_KATEGORILER
  });
});

// ── Alıntılar ───────────────────────────────────────────────────────────
app.get('/alintilar', (req, res) => {
  res.render('alintilar', {
    title: 'Altın Sözler — Zenginlik Üzerine İlham Veren Alıntılar | Zengince',
    desc: 'Warren Buffett, Robert Kiyosaki, Elon Musk ve daha fazlasından ilham verici zenginlik alıntıları.',
    canonical: SITE_URL + '/alintilar',
    alintilar: ALINTILAR,
    kategoriler: ALINTI_KATEGORILER
  });
});

// ── Alışkanlıklar ───────────────────────────────────────────────────────
app.get('/aliskanliklar', (req, res) => {
  res.render('aliskanliklar', {
    title: 'Zenginlik Alışkanlıkları — Milyonerlerin Günlük Ritüelleri | Zengince',
    desc: 'Erken kalkma, günlük okuma, meditasyon, finansal takip ve daha fazlası. Zengin insanların kanıtlanmış alışkanlıkları.',
    canonical: SITE_URL + '/aliskanliklar',
    aliskanliklar: ALISKANLIKLAR,
    kategoriler: ALISKANLIK_KATEGORILER
  });
});

// ── Hesaplayıcı ─────────────────────────────────────────────────────────
app.get('/hesaplayici', (req, res) => {
  res.render('hesaplayici', {
    title: 'Bileşik Getiri Hesaplayıcı — Yatırımlarınızı Simüle Edin | Zengince',
    desc: 'Bileşik getiri hesaplama aracı ile yatırımlarınızın zaman içinde nasıl büyüyeceğini, faizin faizini görsel grafiklerle hesaplayın.',
    canonical: SITE_URL + '/hesaplayici'
  });
});

app.get('/butce-hesaplayici', (req, res) => {
  res.render('butce-hesaplayici', {
    title: 'Gelir Gider Dengesi ve Nakit Akışı Hesaplayıcı | Zengince',
    desc: 'Kişisel aylık bütçenizi planlayın, gelir ve giderlerinizi hesaplayarak net nakit akışınızı ve tasarruf oranınızı anında görün.',
    canonical: SITE_URL + '/butce-hesaplayici'
  });
});

app.get('/saatlik-ucret-hesaplayici', (req, res) => {
  res.render('saatlik-ucret-hesaplayici', {
    title: 'Gerçek Saatlik Ücret (Hayat Enerjisi) Hesaplayıcısı | Zengince',
    desc: 'Maaşınızın saatlik değeri gerçekten sandığınız kadar yüksek mi? İşe gidiş süreleri ve görünmez masraflarla hayat enerjinizi ucuza satıp satmadığınızı hesaplayın.',
    canonical: SITE_URL + '/saatlik-ucret-hesaplayici'
  });
});

app.get('/aliskanlik-maliyeti', (req, res) => {
  res.render('aliskanlik-maliyeti', {
    title: 'Alışkanlık Maliyeti Hesaplayıcısı | Zengince',
    desc: 'Günlük önemsiz gördüğünüz küçük harcamaların bileşik getiriyle gelecekteki milyonluk servetinizi nasıl yok ettiğini hesaplayın.',
    canonical: SITE_URL + '/aliskanlik-maliyeti'
  });
});

app.get('/sigara-alkol-hesaplayici', (req, res) => {
  res.render('sigara-alkol-hesaplayici', {
    title: 'Sigara ve Alkol Maliyeti Hesaplayıcısı | Zengince',
    desc: 'Hem sağlığınızı hem de servetinizi nasıl yok ediyorsunuz? Sigara ve alkole harcadığınız paranın gerçek fırsat maliyetini hesaplayın.',
    canonical: SITE_URL + '/sigara-alkol-hesaplayici'
  });
});

// ── Finansal Özgürlük (FIRE) Hesaplayıcı ────────────────────────────────
app.get('/fire-hesaplayici', (req, res) => {
  res.render('fire-hesaplayici', {
    title: 'Finansal Özgürlük (FIRE) Hesaplayıcısı — Özgürlük Rakamınızı Bulun | Zengince',
    desc: '%4 Kuralı ile çalışmayı tamamen bırakıp hayatınızın sonuna kadar yetecek olan finansal özgürlük rakamınızı anında hesaplayın.',
    canonical: SITE_URL + '/fire-hesaplayici'
  });
});

// ── Sözlük ──────────────────────────────────────────────────────────────
app.get('/sozluk', (req, res) => {
  res.render('sozluk', {
    title: 'Finansal Sözlük — Zenginliğin Dilini Öğrenin | Zengince',
    desc: 'Bileşik getiri, enflasyon, pasif gelir, ETF, hedge fon ve mental model gibi temel finansal kavramların basit anlatımı.',
    canonical: SITE_URL + '/sozluk',
    sozluk: SOZLUK
  });
});

app.get('/sozluk/:slug', (req, res) => {
  const terim = SOZLUK.find(t => t.slug === req.params.slug);
  
  if (!terim) {
    return res.status(404).send('Terim bulunamadı.');
  }

  // Rastgele 5 ilgili terim önerisi (kendisinden hariç)
  const rastgeleTerimler = [...SOZLUK]
    .filter(t => t.slug !== req.params.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  res.render('terim-detay', {
    title: `${terim.kavram} Nedir? | Zengince Sözlük`,
    terim: terim,
    rastgeleTerimler: rastgeleTerimler
  });
});

// ── Hakkında ────────────────────────────────────────────────────────────
app.get('/hakkinda', (req, res) => {
  res.render('hakkinda', {
    title: 'Hakkımızda — Zengince Zenginlik Eğitim Platformu',
    desc: 'Zengince, zenginlik öğretileri, kitap ve film önerileri ile finansal özgürlük yolculuğunuzda yanınızda olan eğitim platformudur.',
    canonical: SITE_URL + '/hakkinda'
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// SITEMAP.XML
// ═══════════════════════════════════════════════════════════════════════════
app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');

  const today = new Date().toISOString().split('T')[0];
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  const addUrl = (loc, priority, changefreq) => {
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}${loc}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  };

  // Ana sayfalar
  const mainPages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/ogretiler', priority: '0.9', changefreq: 'weekly' },
    { loc: '/kitaplar', priority: '0.9', changefreq: 'weekly' },
    { loc: '/filmler', priority: '0.8', changefreq: 'weekly' },
    { loc: '/diziler', priority: '0.8', changefreq: 'weekly' },
    { loc: '/podcastler', priority: '0.8', changefreq: 'weekly' },
    { loc: '/girisimciler', priority: '0.8', changefreq: 'weekly' },
    { loc: '/sozluk', priority: '0.8', changefreq: 'monthly' },
    { loc: '/alintilar', priority: '0.8', changefreq: 'monthly' },
    { loc: '/aliskanliklar', priority: '0.8', changefreq: 'monthly' },
    { loc: '/finansal-savunma', priority: '0.9', changefreq: 'monthly' },
    { loc: '/makaleler', priority: '0.9', changefreq: 'weekly' },
    { loc: '/hesaplayici', priority: '0.7', changefreq: 'monthly' },
    { loc: '/butce-hesaplayici', priority: '0.7', changefreq: 'monthly' },
    { loc: '/saatlik-ucret-hesaplayici', priority: '0.7', changefreq: 'monthly' },
    { loc: '/aliskanlik-maliyeti', priority: '0.7', changefreq: 'monthly' },
    { loc: '/sigara-alkol-hesaplayici', priority: '0.7', changefreq: 'monthly' },
    { loc: '/fire-hesaplayici', priority: '0.7', changefreq: 'monthly' },
    { loc: '/hakkinda', priority: '0.5', changefreq: 'yearly' }
  ];

  mainPages.forEach(p => addUrl(p.loc, p.priority, p.changefreq));

  // Dinamik alt sayfalar
  KITAPLAR.forEach(k => addUrl(`/kitaplar/${k.slug}`, '0.7', 'monthly'));
  FILMLER.forEach(f => addUrl(`/filmler/${f.slug}`, '0.7', 'monthly'));
  DIZILER.forEach(d => addUrl(`/diziler/${d.slug}`, '0.7', 'monthly'));
  PODCASTLER.forEach(p => addUrl(`/podcastler/${p.slug}`, '0.7', 'monthly'));
  GIRISIMCILER.forEach(g => addUrl(`/girisimciler/${g.slug}`, '0.7', 'monthly'));
  ALISKANLIKLAR.forEach(a => addUrl(`/aliskanliklar/${a.slug}`, '0.7', 'monthly'));
  SAVUNMA_YONTEMLERI.forEach(s => addUrl(`/finansal-savunma/${s.slug}`, '0.8', 'monthly'));
  MAKALELER.forEach(m => addUrl(`/makaleler/${m.slug}`, '0.8', 'monthly'));

  xml += '</urlset>';
  res.send(xml);
});

// ── robots.txt ──────────────────────────────────────────────────────────
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml`);
});

// ── 404 ─────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).render('hakkinda', {
    title: '404 — Sayfa Bulunamadı | Zengince',
    desc: 'Aradığınız sayfa bulunamadı.',
    canonical: SITE_URL
  });
});

// ═══════════════════════════════════════════════════════════════════════════
// SUNUCUYU BAŞLAT
// ═══════════════════════════════════════════════════════════════════════════
app.listen(PORT, () => {
  console.log(`\n  ✨ Zengince.com çalışıyor!`);
  console.log(`  🌐 http://localhost:${PORT}\n`);
});
