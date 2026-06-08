'use strict';

const express = require('express');
const compression = require('compression');
const path = require('path');
const fs = require('fs');

const { KITAPLAR, KITAP_KATEGORILER } = require('./data/kitaplar-data');
const { FILMLER, FILM_TURLERI } = require('./data/filmler-data');
const { BELGESELLER, BELGESEL_TURLERI } = require('./data/belgeseller-data');
const { DIZILER, DIZI_TURLERI } = require('./data/diziler-data');
const { PODCASTLER, PODCAST_KATEGORILER } = require('./data/podcastler-data');
const { GIRISIMCILER } = require('./data/girisimciler-data');
const { SOZLUK_TERIMLERI, SOZLUK_KATEGORILERI } = require('./data/sozluk-data');
const { OGRETILER, OGRETI_KATEGORILER } = require('./data/ogretiler-data');
const { ALINTILAR, ALINTI_KATEGORILER } = require('./data/alintilar-data');
const { ALISKANLIKLAR, ALISKANLIK_KATEGORILER } = require('./data/aliskanliklar-data');
const { SAVUNMA_YONTEMLERI } = require('./data/savunma-data');
const { MAKALELER, MAKALE_KATEGORILERI } = require('./data/makaleler-data');
const { IFLASLAR, IFLAS_KATEGORILERI } = require('./data/basarisizliklar-data');
const { TASARRUF_MODELLERI } = require('./data/tasarruf-modelleri-data');
const { YATIRIM_ARACLARI } = require('./data/yatirim-araclari-data');
const { DEHA_HAMLELERI, DEHA_KATEGORILERI } = require('./data/deha-hamleleri-data');

// JSON veritabanı yolları
const forumDbPath = path.join(__dirname, 'data', 'forum.json');
const messagesDbPath = path.join(__dirname, 'data', 'messages.json');

// Yardımcı Fonksiyonlar
function getForumData() {
  const data = fs.readFileSync(forumDbPath, 'utf8');
  return JSON.parse(data);
}

function saveForumData(data) {
  fs.writeFileSync(forumDbPath, JSON.stringify(data, null, 2), 'utf8');
}

function getMessagesData() {
  if (!fs.existsSync(messagesDbPath)) {
    fs.writeFileSync(messagesDbPath, '{}', 'utf8');
  }
  const data = fs.readFileSync(messagesDbPath, 'utf8');
  return JSON.parse(data);
}

function saveMessagesData(data) {
  fs.writeFileSync(messagesDbPath, JSON.stringify(data, null, 2), 'utf8');
}

function calculateRank(db, username) {
  if (username === 'misafir_uye') return 'Çaylak';
  let count = 0;
  Object.values(db.FORUM_ENTRIES).forEach(entries => {
    count += entries.filter(e => e.authorUsername === username).length;
  });
  // Yeni entry'i de sayarsak (bu fonskiyon çağrılmadan hemen önce veya sonra olabilir ama count + 1 gibi düşünebiliriz)
  // Şimdilik sadece mevcut count'a bakalım
  if (count < 5) return 'Çaylak';
  if (count < 20) return 'Sürücü';
  if (count < 50) return 'Usta';
  if (count < 100) return 'Uzman';
  if (count < 500) return 'Tutkun';
  return 'Efsane';
}

const app = express();
const PORT = process.env.PORT || 3002;

const SITE_URL = 'https://www.zengince.com';

// ── Gzip Sıkıştırma ──────────────────────────────────────────────────────
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// ── Ana Sayfa (Açılış Sayfası) ────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.render('anasayfa', {
    title: 'Zengince | Finansal Özgürlüğe Adım Atın',
    desc: 'Zenginlik öğretileri, tasarruf, bütçe yönetimi ve yatırım stratejileri ile finansal özgürlük yolculuğunuza başlayın.',
    canonical: SITE_URL
  });
});

// ── Forum ──────────────────────────────────────────────────────────────────────
app.get('/forum', (req, res) => {
  const db = getForumData();
  res.render('forum', {
    title: 'Zengince Forum — Finans, Borsa ve Yatırım Topluluğu',
    desc: 'Borsa, Kripto Para, Gayrimenkul ve Finansal Özgürlük hakkında binlerce yatırımcının deneyimlerini paylaştığı topluluk.',
    canonical: `${SITE_URL}/forum`,
    forumKategorileri: db.FORUM_KATEGORILERI,
    forumBasliklari: db.FORUM_BASLIKLARI,
    stats: {
      totalThreads: db.FORUM_BASLIKLARI.length,
      totalEntries: db.FORUM_BASLIKLARI.reduce((acc, curr) => acc + curr.entryCount, 0),
      totalUsers: 1450
    }
  });
});

// ── Forum Detay Sayfası ────────────────────────────────────────────────────────
app.get('/forum/:id', (req, res) => {
  const threadId = req.params.id;
  const db = getForumData();
  const thread = db.FORUM_BASLIKLARI.find(t => t.id === threadId);
  
  if (!thread) {
    return res.status(404).render('hakkinda', {
      title: '404 — Başlık Bulunamadı | Zengince Forum',
      desc: 'Aradığınız forum başlığı bulunamadı.',
      canonical: SITE_URL
    });
  }

  // Eğer veri dosyasında entry yoksa boş dizi gönder
  const entries = db.FORUM_ENTRIES[threadId] || [];

  res.render('forum-detay', {
    title: `${thread.title} | Zengince Forum`,
    desc: `${thread.authorUsername} tarafından ${thread.category} kategorisinde açılan konu: ${thread.title}. Oku ve tartışmaya katıl.`,
    canonical: `${SITE_URL}/forum/${threadId}`,
    thread: thread,
    entries: entries
  });
});

// ── API: Yeni Entry (Yanıt) Ekleme ─────────────────────────────────────────────
app.post('/api/new-entry', (req, res) => {
  const { threadId, content, username } = req.body;
  
  if (!threadId || !content) return res.status(400).json({ error: 'Eksik veri' });

  const db = getForumData();
  const authorUsername = username || 'misafir_uye';
  
  if (!db.FORUM_ENTRIES[threadId]) {
    db.FORUM_ENTRIES[threadId] = [];
  }

  const userRank = calculateRank(db, authorUsername);

  const newEntry = {
    id: 'e' + Date.now(),
    authorUsername: authorUsername,
    authorLevel: userRank,
    content: content,
    createdAt: 'Az önce',
    upvotes: 0,
    isThreadStarter: false
  };

  db.FORUM_ENTRIES[threadId].push(newEntry);
  
  // Başlıktaki entry sayısını artır
  const threadIndex = db.FORUM_BASLIKLARI.findIndex(t => t.id === threadId);
  if (threadIndex !== -1) {
    db.FORUM_BASLIKLARI[threadIndex].entryCount += 1;
    db.FORUM_BASLIKLARI[threadIndex].lastActivity = 'Az önce';
    db.FORUM_BASLIKLARI[threadIndex].lastAuthor = authorUsername;
  }

  saveForumData(db);
  res.json({ success: true, entry: newEntry });
});

// ── API: Upvote ────────────────────────────────────────────────────────────────
app.post('/api/upvote', (req, res) => {
  const { threadId, entryId } = req.body;
  if (!threadId || !entryId) return res.status(400).json({ error: 'Eksik veri' });

  const db = getForumData();
  const entries = db.FORUM_ENTRIES[threadId];
  
  if (entries) {
    const entry = entries.find(e => e.id === entryId);
    if (entry) {
      entry.upvotes += 1;
      saveForumData(db);
      return res.json({ success: true, newUpvotes: entry.upvotes });
    }
  }
  
  res.status(404).json({ error: 'Entry bulunamadı' });
});

// ── API: Yeni Başlık (Thread) Açma ─────────────────────────────────────────────
app.post('/api/new-thread', (req, res) => {
  const { title, category, content, username, pollOptions } = req.body;
  
  if (!title || !category || !content) {
    return res.status(400).json({ error: 'Başlık, kategori ve içerik zorunludur.' });
  }

  const db = getForumData();
  const authorUsername = username || 'misafir_uye';
  const userRank = calculateRank(db, authorUsername);
  
  const threadId = 't' + Date.now();
  const slugUrl = '/forum/' + threadId;

  const newThread = {
    id: threadId,
    title: title,
    category: category,
    isHot: false,
    lastActivity: 'Az önce',
    lastAuthor: authorUsername,
    authorLevel: userRank,
    entryCount: 1,
    lastEntry: content.substring(0, 50) + '...',
    slugUrl: slugUrl,
    viewCount: 0,
    createdAt: Date.now()
  };

  // Eğer anket eklendiyse
  if (pollOptions && Array.isArray(pollOptions) && pollOptions.length > 1) {
    newThread.poll = {
      totalVotes: 0,
      votedUsers: [],
      options: pollOptions.map((opt, i) => ({ id: 'opt_' + i, text: opt, votes: 0 }))
    };
  }

  const newEntry = {
    id: 'e' + Date.now(),
    authorUsername: authorUsername,
    authorLevel: userRank,
    content: content,
    createdAt: 'Az önce',
    upvotes: 0,
    isThreadStarter: true
  };

  db.FORUM_BASLIKLARI.unshift(newThread); // En üste ekle
  db.FORUM_ENTRIES[threadId] = [newEntry];
  
  saveForumData(db);
  res.json({ success: true, redirectUrl: slugUrl });
});

// ── API: Ankete Oy Verme ────────────────────────────────────────────────────────
app.post('/api/vote-poll', (req, res) => {
  const { threadId, optionId, username } = req.body;
  if (!threadId || !optionId || !username) return res.status(400).json({ error: 'Eksik veri' });

  const db = getForumData();
  const threadIndex = db.FORUM_BASLIKLARI.findIndex(t => t.id === threadId);
  
  if (threadIndex !== -1) {
    const thread = db.FORUM_BASLIKLARI[threadIndex];
    if (thread.poll) {
      if (thread.poll.votedUsers.includes(username)) {
        return res.status(400).json({ error: 'Zaten oy kullandınız.' });
      }
      
      const option = thread.poll.options.find(o => o.id === optionId);
      if (option) {
        option.votes += 1;
        thread.poll.totalVotes += 1;
        thread.poll.votedUsers.push(username);
        saveForumData(db);
        return res.json({ success: true, poll: thread.poll });
      }
    }
  }
  
  res.status(404).json({ error: 'Anket bulunamadı.' });
});

// ── Kullanıcı Profil Sayfası ───────────────────────────────────────────────────
app.get('/profil/:username', (req, res) => {
  const username = req.params.username;
  const db = getForumData();
  
  // Kullanıcının açtığı başlıkları ve yazdığı entryleri bul
  const userThreads = db.FORUM_BASLIKLARI.filter(t => t.lastAuthor === username); // Basitlik için
  let totalUpvotes = 0;
  let entryCount = 0;
  
  Object.values(db.FORUM_ENTRIES).forEach(entries => {
    entries.forEach(entry => {
      if (entry.authorUsername === username) {
        totalUpvotes += entry.upvotes;
        entryCount++;
      }
    });
  });

  res.render('profil', {
    title: `@${username} Profili | Zengince Forum`,
    desc: `${username} kullanıcısının profil sayfası.`,
    canonical: `${SITE_URL}/profil/${username}`,
    username: username,
    stats: {
      threadCount: userThreads.length,
      entryCount: entryCount,
      totalUpvotes: totalUpvotes,
      level: entryCount > 5 ? 'Usta' : 'Çaylak'
    },
    recentThreads: userThreads.slice(0, 5)
  });
});


// ── API: Piyasa Verileri (Ticker) ─────────────────────────────────────────────
app.get('/api/ticker', async (req, res) => {
  try {
    const btcRes = await fetch('https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT');
    const btcData = await btcRes.json();
    
    const bistRes = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/XU100.IS');
    const bistData = await bistRes.json();
    const bistMeta = bistData.chart.result[0].meta;
    
    const goldRes = await fetch('https://finans.truncgil.com/v3/today.json');
    const goldData = await goldRes.json();
    
    res.json({
      success: true,
      data: {
        btc: {
          price: parseFloat(btcData.lastPrice),
          change: parseFloat(btcData.priceChangePercent)
        },
        bist: {
          price: bistMeta.regularMarketPrice,
          change: ((bistMeta.regularMarketPrice - bistMeta.chartPreviousClose) / bistMeta.chartPreviousClose) * 100
        },
        gold: {
          price: parseFloat(goldData['gram-altin'].Selling.replace('.','').replace(',','.')),
          change: parseFloat(goldData['gram-altin'].Change.replace('%','').replace(',','.'))
        }
      }
    });
  } catch(e) {
    console.error("Ticker fetch error:", e);
    res.status(500).json({success: false});
  }
});

// ── Auth İşlemleri ────────────────────────────────────────────────────────────
app.get('/giris', (req, res) => {
  res.render('giris', {
    title: 'Giriş Yap | Zengince',
    desc: 'Zengince forumuna giriş yapın.',
    canonical: `${SITE_URL}/giris`
  });
});

app.get('/kayit', (req, res) => {
  res.render('kayit', {
    title: 'Kayıt Ol | Zengince',
    desc: 'Zengince forumuna kayıt olun.',
    canonical: `${SITE_URL}/kayit`
  });
});

// ── Mesajlaşma (DM) Arayüzü & API ──────────────────────────────────────────────
app.get('/mesajlar', (req, res) => {
  res.render('mesajlar', {
    title: 'Mesajlar | Zengince',
    desc: 'Kullanıcılarla özel mesajlaşın.',
    canonical: `${SITE_URL}/mesajlar`,
    toUser: req.query.to || ''
  });
});

app.get('/api/messages/:username', (req, res) => {
  const username = req.params.username;
  const db = getMessagesData();
  
  const userConversations = {};
  Object.keys(db).forEach(convId => {
    const participants = convId.split('_');
    if (participants.includes(username)) {
      const otherUser = participants[0] === username ? participants[1] : participants[0];
      userConversations[otherUser] = db[convId];
    }
  });
  
  res.json({ success: true, conversations: userConversations });
});

app.post('/api/send-message', (req, res) => {
  const { from, to, text } = req.body;
  if (!from || !to || !text) return res.status(400).json({ error: 'Eksik veri' });
  
  const db = getMessagesData();
  const convId = [from, to].sort().join('_'); 
  
  if (!db[convId]) db[convId] = [];
  
  const newMsg = {
    id: 'm' + Date.now(),
    from: from,
    to: to,
    text: text,
    date: Date.now()
  };
  
  db[convId].push(newMsg);
  saveMessagesData(db);
  
  res.json({ success: true, message: newMsg });
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

// ── Belgeseller ──────────────────────────────────────────────────────────
app.get('/belgeseller', (req, res) => {
  res.render('belgeseller', {
    title: 'Zenginlik Belgeselleri — Finans ve Gerçek Hikayeler | Zengince',
    desc: 'Finansal dünyayı, dolandırıcılıkları ve gerçek zenginlik hikayelerini anlatan en etkileyici belgeseller.',
    canonical: SITE_URL + '/belgeseller',
    belgeseller: BELGESELLER,
    turler: BELGESEL_TURLERI
  });
});

app.get('/belgeseller/:slug', (req, res) => {
  const belgesel = BELGESELLER.find(b => b.slug === req.params.slug);
  
  if (!belgesel) {
    return res.status(404).send('Belgesel bulunamadı.');
  }

  res.render('belgesel-detay', {
    title: `${belgesel.baslik} İncelemesi | Zengince Belgeseller`,
    path: '/belgeseller',
    belgesel: belgesel,
    tur: BELGESEL_TURLERI[belgesel.tur] || { baslik: 'Genel' }
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

// ── İflaslar ve Başarısızlık Hikayeleri ─────────────────────────────────
app.get('/iflaslar', (req, res) => {
  res.render('iflaslar', {
    title: 'Büyük İflaslar ve Başarısızlık Hikayeleri | Zengince',
    desc: 'Tarihin en büyük şirket batışlarından ve kişisel iflaslardan çıkarılacak ibretlik finansal dersler.',
    canonical: SITE_URL + '/iflaslar',
    iflaslar: IFLASLAR,
    kategoriler: IFLAS_KATEGORILERI
  });
});

app.get('/iflaslar/:slug', (req, res) => {
  const iflas = IFLASLAR.find(i => i.slug === req.params.slug);
  
  if (!iflas) {
    return res.status(404).send('İflas hikayesi bulunamadı.');
  }

  res.render('iflas-detay', {
    title: `${iflas.sirket} Neden Battı? | Zengince İflaslar`,
    path: '/iflaslar',
    iflas: iflas
  });
});

// ── Deha Hamleleri (Vaka Analizleri) ────────────────────────────────────
app.get('/deha-hamleleri', (req, res) => {
  res.render('deha-hamleleri', {
    title: 'Deha Hamleleri: Büyük Finansal Zaferler | Zengince',
    desc: "McDonald's gayrimenkul dehası, RedBull'un pazarlama illüzyonu, WhatsApp'ın kaldıraç gücü. Tarihin en zekice hamlelerinden öğrenin.",
    canonical: SITE_URL + '/deha-hamleleri',
    hamleler: DEHA_HAMLELERI,
    kategoriler: DEHA_KATEGORILERI
  });
});

app.get('/deha-hamleleri/:slug', (req, res) => {
  const hamle = DEHA_HAMLELERI.find(h => h.slug === req.params.slug);
  
  if (!hamle) {
    return res.status(404).send('Vaka bulunamadı.');
  }

  res.render('deha-hamle-detay', {
    title: `${hamle.baslik} | Zengince Vaka Analizleri`,
    path: '/deha-hamleleri',
    h: hamle,
    kategori_bilgisi: DEHA_KATEGORILERI[hamle.kategori] || { emoji: '🏆', renk: '#D4AF37' }
  });
});

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

app.get('/ogretiler/:slug', (req, res) => {
  const ogreti = OGRETILER.find(o => o.slug === req.params.slug);
  
  if (!ogreti) {
    return res.status(404).send('Öğreti bulunamadı.');
  }

  res.render('ogreti-detay', {
    title: `${ogreti.baslik} | Zenginlik Öğretileri`,
    path: '/ogretiler',
    ogreti: ogreti,
    kategori_bilgisi: OGRETI_KATEGORILER[ogreti.kategori] || { emoji: '📚', baslik: 'Genel' }
  });
});

// ── Tasarruf Modelleri ──────────────────────────────────────────────────
app.get('/tasarruf-modelleri', (req, res) => {
  res.render('tasarruf-modelleri', {
    title: 'En Etkili 10 Tasarruf ve Bütçe Modeli | Zengince',
    desc: '50/30/20 Kuralı, Zarf Sistemi, Kakeibo ve diğer tüm kanıtlanmış bütçeleme sistemlerini öğrenin.',
    canonical: SITE_URL + '/tasarruf-modelleri',
    modeller: TASARRUF_MODELLERI
  });
});

app.get('/tasarruf-modelleri/:slug', (req, res) => {
  const model = TASARRUF_MODELLERI.find(m => m.slug === req.params.slug);
  
  if (!model) {
    return res.status(404).send('Model bulunamadı.');
  }

  res.render('tasarruf-detay', {
    title: `${model.baslik} Nedir? Nasıl Uygulanır? | Zengince`,
    path: '/tasarruf-modelleri',
    model: model
  });
});

// ── Yatırım Araçları (Assets 101) ───────────────────────────────────────
app.get('/yatirim-araclari', (req, res) => {
  res.render('yatirim-araclari', {
    title: 'Yatırım Araçları Rehberi (Assets 101) | Zengince',
    desc: 'Hisse senedi, altın, kripto ve gayrimenkul gibi temel yatırım araçlarının risklerini ve anatomisini öğrenin.',
    canonical: SITE_URL + '/yatirim-araclari',
    araclar: YATIRIM_ARACLARI
  });
});

app.get('/yatirim-araclari/:slug', (req, res) => {
  const arac = YATIRIM_ARACLARI.find(a => a.slug === req.params.slug);
  
  if (!arac) {
    return res.status(404).send('Yatırım aracı bulunamadı.');
  }

  res.render('yatirim-araci-detay', {
    title: `${arac.baslik} Analizi: Risk ve Getiri Potansiyeli | Zengince`,
    path: '/yatirim-araclari',
    arac: arac
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

app.get('/kredi-hesaplayici', (req, res) => {
  res.render('kredi-hesaplayici', {
    title: 'Kredi Hesaplama Aracı 2024 - İhtiyaç, Konut ve Taşıt Kredisi | Zengince',
    desc: 'Güncel banka faiz oranlarıyla (BSMV/KKDF dahil) kredi taksit hesaplama işlemi yapın ve ödeyeceğiniz gerçek fırsat maliyetini öğrenin.',
    canonical: SITE_URL + '/kredi-hesaplayici'
  });
});

app.get('/ticaret-hesaplayici', (req, res) => {
  res.render('ticaret-hesaplayici', {
    title: 'Ticaret ve E-Ticaret Kâr Marjı Hesaplayıcı | Zengince',
    desc: 'Pazaryeri komisyonu, KDV, kargo ve reklam giderlerinizi hesaplayarak e-ticaretteki gerçek net kârınızı ve hedeflenen satış fiyatınızı bulun.',
    canonical: SITE_URL + '/ticaret-hesaplayici'
  });
});

app.get('/mevduat-hesaplayici', (req, res) => {
  res.render('mevduat-hesaplayici', {
    title: 'Mevduat Faizi Hesaplama ve Reel Getiri Analizi 2024 | Zengince',
    desc: 'Banka mevduat faiz getirinizi güncel stopaj oranlarıyla net olarak hesaplayın ve enflasyon karşısındaki gerçek alım gücü kaybınızı (reel getiri) anında görün.',
    canonical: SITE_URL + '/mevduat-hesaplayici'
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

app.get('/kidem-tazminati-hesaplayici', (req, res) => {
  res.render('kidem-tazminati-hesaplayici', {
    title: 'Kıdem ve İhbar Tazminatı Hesaplama Aracı 2024 | Zengince',
    desc: 'Aylık brüt maaşınız üzerinden en güncel oranlarla kıdem tazminatı ve ihbar tazminatı hesaplama işleminizi saniyeler içinde yapın.',
    canonical: SITE_URL + '/kidem-tazminati-hesaplayici'
  });
});

app.get('/kira-artisi-hesaplayici', (req, res) => {
  res.render('kira-artisi-hesaplayici', {
    title: 'Kira Artış Oranı Hesaplama (TEFE-TÜFE) 2024 | Zengince',
    desc: 'TÜİK tarafından açıklanan güncel 12 aylık TÜFE ortalamasına göre yasal kira artış oranınızı ve yeni kiranızı hesaplayın.',
    canonical: SITE_URL + '/kira-artisi-hesaplayici'
  });
});

app.get('/kdv-hesaplayici', (req, res) => {
  res.render('kdv-hesaplayici', {
    title: 'KDV Hesaplama Aracı (Dahil / Hariç) 2024 | Zengince',
    desc: 'Güncel oranlarla (%1, %10, %20) KDV dahil ve KDV hariç tutarları anında hesaplayın. Fatura ve ticaret işlemlerinizde kolaylık.',
    canonical: SITE_URL + '/kdv-hesaplayici'
  });
});

app.get('/yuzde-hesaplayici', (req, res) => {
  res.render('yuzde-hesaplayici', {
    title: 'Yüzde Hesaplama Aracı — Günlük Pratik Matematik | Zengince',
    desc: 'Yüzde kaçıdır, yüzde değişim, kâr oranı ve indirim tutarı hesaplama işlemlerini 4 farklı basit formülle tek ekranda yapın.',
    canonical: SITE_URL + '/yuzde-hesaplayici'
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
    sozluk: SOZLUK_TERIMLERI,
    kategoriler: SOZLUK_KATEGORILERI
  });
});

app.get('/sozluk/:slug', (req, res) => {
  const terim = SOZLUK_TERIMLERI.find(t => t.slug === req.params.slug);
  
  if (!terim) {
    return res.status(404).send('Terim bulunamadı.');
  }

  // Rastgele 5 ilgili terim önerisi (kendisinden hariç)
  const rastgeleTerimler = [...SOZLUK_TERIMLERI]
    .filter(t => t.slug !== req.params.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  res.render('terim-detay', {
    title: `${terim.terim} Nedir? | Zengince Sözlük`,
    path: '/sozluk',
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
    { loc: '/belgeseller', priority: '0.8', changefreq: 'weekly' },
    { loc: '/diziler', priority: '0.8', changefreq: 'weekly' },
    { loc: '/podcastler', priority: '0.8', changefreq: 'weekly' },
    { loc: '/girisimciler', priority: '0.8', changefreq: 'weekly' },
    { loc: '/deha-hamleleri', priority: '0.8', changefreq: 'weekly' },
    { loc: '/iflaslar', priority: '0.8', changefreq: 'weekly' },
    { loc: '/sozluk', priority: '0.8', changefreq: 'monthly' },
    { loc: '/alintilar', priority: '0.8', changefreq: 'monthly' },
    { loc: '/aliskanliklar', priority: '0.8', changefreq: 'monthly' },
    { loc: '/finansal-savunma', priority: '0.9', changefreq: 'monthly' },
    { loc: '/tasarruf-modelleri', priority: '0.9', changefreq: 'monthly' },
    { loc: '/yatirim-araclari', priority: '0.9', changefreq: 'monthly' },
    { loc: '/makaleler', priority: '0.9', changefreq: 'weekly' },
    { loc: '/hesaplayici', priority: '0.7', changefreq: 'monthly' },
    { loc: '/butce-hesaplayici', priority: '0.7', changefreq: 'monthly' },
    { loc: '/kredi-hesaplayici', priority: '0.9', changefreq: 'monthly' },
    { loc: '/ticaret-hesaplayici', priority: '0.9', changefreq: 'monthly' },
    { loc: '/mevduat-hesaplayici', priority: '0.9', changefreq: 'monthly' },
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
  BELGESELLER.forEach(b => addUrl(`/belgeseller/${b.slug}`, '0.7', 'monthly'));
  DIZILER.forEach(d => addUrl(`/diziler/${d.slug}`, '0.7', 'monthly'));
  PODCASTLER.forEach(p => addUrl(`/podcastler/${p.slug}`, '0.7', 'monthly'));
  GIRISIMCILER.forEach(g => addUrl(`/girisimciler/${g.slug}`, '0.7', 'monthly'));
  ALISKANLIKLAR.forEach(a => addUrl(`/aliskanliklar/${a.slug}`, '0.7', 'monthly'));
  SAVUNMA_YONTEMLERI.forEach(s => addUrl(`/finansal-savunma/${s.slug}`, '0.8', 'monthly'));
  MAKALELER.forEach(m => addUrl(`/makaleler/${m.slug}`, '0.8', 'monthly'));
  DEHA_HAMLELERI.forEach(h => addUrl(`/deha-hamleleri/${h.slug}`, '0.7', 'monthly'));
  IFLASLAR.forEach(i => addUrl(`/iflaslar/${i.slug}`, '0.7', 'monthly'));
  TASARRUF_MODELLERI.forEach(m => addUrl(`/tasarruf-modelleri/${m.slug}`, '0.8', 'monthly'));
  YATIRIM_ARACLARI.forEach(y => addUrl(`/yatirim-araclari/${y.slug}`, '0.8', 'monthly'));

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
