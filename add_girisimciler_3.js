const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'girisimciler-data.js');
let content = fs.readFileSync(dataPath, 'utf8');

const newGirisimciler = [
  {
    "slug": "jack-ma",
    "isim": "Jack Ma",
    "unvan": "Alibaba Kurucusu",
    "foto": "https://tse1.mm.bing.net/th?q=Jack%20Ma%20Portrait&w=400&h=400&c=7&rs=1&p=0",
    "ozet": "KFC'ye bile işe alınmayan, defalarca reddedilen İngilizce öğretmeni, internetin gücünü kullanarak Çin'in en büyük e-ticaret imparatorluğunu kurdu.",
    "netDeger": "$24B+",
    "zihinYapisi": [
          {
                "baslik": "Reddedilmeyi Normalleştirmek",
                "aciklama": "Harvard'a 10 kez başvurdu, hepsinde reddedildi. Şehrine gelen KFC'ye başvuran 24 kişiden tek reddedilen o oldu. O, başarısızlığın bir son değil, sadece bir veri noktası olduğuna inanır."
          },
          {
                "baslik": "Rakipleri Yok Etmek Değil, Ekosistem Kurmak",
                "aciklama": "E-Bay, Çin pazarına girdiğinde Ma onlarla doğrudan savaşmak yerine, Çinli küçük üreticilerin bedava mağaza açabildiği ve ödemelerin güvenle yapıldığı bir ekosistem (Alipay) kurarak devleri dize getirdi."
          },
          {
                "baslik": "Şikayetçi Kalabalıklardan Beslenmek",
                "aciklama": "İnsanların en çok şikayet ettiği yerlerde en büyük fırsatlar yatar. Çin'de ticaretin güvensizliğinden ve zorluğundan şikayet edenler, Alibaba'nın doğuş sebebi olmuştur."
          },
          {
                "baslik": "Düşmanlarla Dans Etmek (Timsah Stratejisi)",
                "aciklama": "'E-Bay okyanustaki bir köpekbalığıysa, ben Yangtze nehrindeki bir timsahım. Okyanusta dövüşürsek kaybederim, ama nehirde ben kazanırım.' der. Kendi güçlü sahasında savaşmayı seçer."
          }
    ],
    "kitapOnerisi": "Alibaba: The House That Jack Ma Built",
    "altinSoz": "Bugün acı verici, yarın daha da acı verici olacak. Ama yarından sonraki gün güneş doğacak. Çoğu insan yarın akşam ölür.",
    "detayliHikaye": "Jack Ma'nın hikayesi, zekanın ve iyi okulların her şey olduğu efsanesini çökerten muazzam bir örnektir. O bir kod yazarı, teknoloji uzmanı veya elit bir iş adamı değildi. İngilizce pratik yapmak için her sabah bisikletiyle 40 dakika yol giderek turistlere rehberlik eden sıradan bir öğretmendi. Ancak 1995'te Amerika'da interneti ilk kez gördüğünde, Çin'deki kobileri dünyaya açmanın vizyonunu kurdu.\\n\\nKendi apartman dairesinde 18 arkadaşını toplayarak kurduğu Alibaba, ilk yıllarında hiç para kazanamadı. Silikon Vadisi yatırımcıları ona defalarca güldü. Ancak Jack Ma'nın karizması ve Çin pazarındaki küçük işletmelerin derdini çözme tutkusu, şirketi bir ticaret, lojistik ve finans tekeline dönüştürdü. O, teknolojiyi değil, insan psikolojisini ve ticaretin temeli olan 'güven' kavramını dijitalleştirerek Asya'nın en zenginlerinden biri oldu."
  },
  {
    "slug": "sara-blakely",
    "isim": "Sara Blakely",
    "unvan": "Spanx Kurucusu",
    "foto": "https://tse1.mm.bing.net/th?q=Sara%20Blakely%20Portrait&w=400&h=400&c=7&rs=1&p=0",
    "ozet": "Kapı kapı dolaşıp faks makinesi satarken, cebindeki 5000 dolar tasarrufla, dışarıdan hiç yatırım almadan kendi çabasıyla dünyanın en genç kendi kendini yetiştirmiş kadın milyarderi oldu.",
    "netDeger": "$1.3B+",
    "zihinYapisi": [
          {
                "baslik": "İhtiyacı Ürüne Dönüştürmek",
                "aciklama": "Beyaz pantolonunun içine giyecek uygun iç çamaşırı bulamadığı için kendi külotlu çorabının ayaklarını keserek Spanx fikrini buldu. Gerçek ihtiyaç, en iyi inovasyondur."
          },
          {
                "baslik": "Kısıtlı Kaynak Avantajı",
                "aciklama": "Avukat tutacak veya reklam verecek parası yoktu. Patentini bir kitap okuyarak kendisi yazdı. Ürününü lüks mağazalarda bizzat tanıttı. Sermaye eksikliği, yaratıcılığı körükleyen en büyük güçtür."
          },
          {
                "baslik": "Başarısızlığı Kutlamak",
                "aciklama": "Babası her akşam yemeğinde ona 'Bugün nede başarısız oldun?' diye sorardı. Eğer başarısız olduğu bir şey yoksa babası üzülürdü. Bu sayede hata yapma korkusundan tamamen arındı."
          },
          {
                "baslik": "Şirket Kültürü Olarak Mizah",
                "aciklama": "Kurumsal ve ciddi olmak yerine, samimi ve esprili bir marka dili yarattı. Müşterileriyle bir arkadaş gibi iletişim kurarak eşsiz bir marka sadakati inşa etti."
          }
    ],
    "kitapOnerisi": "The Spanx Story (Makaleler ve Röportajlar)",
    "altinSoz": "Paranın sizi değiştirdiği efsanesine inanmıyorum. Para, sadece zaten kimseniz, sizi o kişinin çok daha fazlası yapar.",
    "detayliHikaye": "Sara Blakely, iş dünyasındaki pek çok kalıbı yıkan bir girişimcidir. Sadece 5000 dolarlık bir birikimi varken, imalat fabrikalarını tek tek arayıp 'Ürünümü üretir misiniz?' dediğinde hepsi onu kapı dışarı etti, çünkü tekstil endüstrisini anlamıyordu ve erkek egemen bir sektördü. Fakat o, vazgeçmek yerine pes etmeden devam etti. Ürününü Neiman Marcus gibi prestijli mağazalara satabilmek için, mağaza müdürünü bizzat kadınlar tuvaletine götürüp ürünün öncesi ve sonrası etkisini canlı olarak gösterdi.\\n\\nSpanx'i devasa bir başarıya ulaştıran en önemli şey, dışarıdan tek bir kuruş bile yatırım almamış (bootstrapped) olmasıdır. Bu sayede şirketin %100 kontrolünü elinde tuttu. Şirketinin değerlemesi 1.2 milyar dolara ulaştığında, özel yatırım fonlarına hisse sattı ve kutlama olarak tüm çalışanlarına ikişer birinci sınıf uçak bileti ve 10 bin dolar nakit hediye ederek cömertliğin ve kadın girişimciliğinin ikonik bir sembolü haline geldi."
  },
  {
    "slug": "richard-branson",
    "isim": "Richard Branson",
    "unvan": "Virgin Group Kurucusu",
    "foto": "https://tse1.mm.bing.net/th?q=Richard%20Branson%20Portrait&w=400&h=400&c=7&rs=1&p=0",
    "ozet": "Disleksi hastası olduğu için okulu bırakan ama eğlenceyi, cesareti ve sınırları zorlamayı bir şirket stratejisi haline getirerek 400'den fazla şirket kuran maceraperest milyarder.",
    "netDeger": "$3B+",
    "zihinYapisi": [
          {
                "baslik": "Markayı Her Şeye Genişletmek (Brand Stretching)",
                "aciklama": "Çoğu şirket tek bir sektöre odaklanırken, Branson 'Virgin' markasının altındaki asi ve eğlenceli ruhu; müzikten hava yollarına, bankacılıktan uzay turizmine kadar her alana başarıyla taşıdı."
          },
          {
                "baslik": "Dezavantajı Avantaja Çevirmek",
                "aciklama": "Disleksi (öğrenme bozukluğu) yüzünden uzun raporları okuyamazdı. Bu yüzden şirketindeki tüm iletişimi aşırı basit, net ve anında anlaşılır formlara indirgeyerek kurumsal hantallığı yok etti."
          },
          {
                "baslik": "Müşterinin Gözünden Sektörü Yıkmak",
                "aciklama": "Virgin Atlantic'i kurmasının tek sebebi, Porto Riko'daki uçuşunun iptal olması ve hava yolu şirketinin müşteriye kötü davranmasıydı. Sektörü bilmese bile, müşteri odaklılıkla her devin devrilebileceğine inandı."
          },
          {
                "baslik": "Çalışan İlk, Müşteri İkinci",
                "aciklama": "Klasik 'müşteri her zaman haklıdır' mitsine karşı çıktı. 'Çalışanlarınıza mükemmel davranın, onlar zaten müşterilerinize mükemmel davranacaktır' felsefesiyle liderlik etti."
          }
    ],
    "kitapOnerisi": "Losing My Virginity (Otobiyografi)",
    "altinSoz": "Eğer birisi size harika bir fırsat sunarsa ve yapabileceğinizden emin değilseniz, 'Evet' deyin. Sonra nasıl yapılacağını öğrenirsiniz.",
    "detayliHikaye": "Sir Richard Branson'ın hayatı, kurumsal dünyanın kravatlı ve sıkıcı yapısına atılmış bir bombadır. Liseden ayrılırken müdürü ona 'Sen ya hapse gireceksin ya da milyoner olacaksın' demişti. Öğrenci dergisiyle başlayan serüveni, bir kilisenin mahzeninde indirimli plak satışına (Virgin Records) dönüştü. Mike Oldfield ve Sex Pistols gibi dev isimleri keşfederek müzik dünyasını salladı.\\n\\nAncak onu efsane yapan asıl hamlesi, müzik işindeyken hiç anlamadığı bir sektöre girip Virgin Atlantic havayollarını kurmasıdır. Sırf British Airways'in monopolünden ve kötü hizmetinden nefret ettiği için girdiği bu savaşta, iflasın eşiğine gelse de yaratıcı gerilla pazarlama taktikleriyle kazanan o oldu. Sıcak hava balonuyla okyanus geçmekten, kendi uzay şirketi Virgin Galactic ile uzaya çıkan ilk milyarder olmaya kadar, risk almayı bir yaşam tarzı haline getirmiştir. O, iş dünyasının rock yıldızıdır."
  }
];

let match = content.match(/module\.exports\s*=\s*\{/);
if (match) {
    let index = match.index;
    
    // Create the string to inject
    let newObjectsString = newGirisimciler.map(item => '  ' + JSON.stringify(item, null, 4).replace(/\\n/g, "\\n").replace(/^/gm, '  ')).join(',\\n');
    
    let lastBracketIndex = content.lastIndexOf('];', index);
    if (lastBracketIndex !== -1) {
        let firstPart = content.substring(0, lastBracketIndex);
        let secondPart = content.substring(lastBracketIndex);
        
        // Remove trailing newlines and spaces before the closing bracket
        firstPart = firstPart.trimEnd();
        
        let newContent = firstPart + ',\\n' + newObjectsString + '\\n' + secondPart;
        
        // Write the file
        fs.writeFileSync(dataPath, newContent, 'utf8');
        console.log("Successfully added 3 massive entrepreneurs.");
    } else {
        console.log("Could not find the end of GIRISIMCILER array.");
    }
} else {
    console.log("Could not find module.exports.");
}
