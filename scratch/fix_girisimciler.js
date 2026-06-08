const fs = require('fs');
const path = './data/girisimciler-data.js';
let content = fs.readFileSync(path, 'utf8');

const replacements = {
  'Naval Ravikant': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Naval_Ravikant_TechCrunch_Disrupt_2011_%28cropped%29.jpg/800px-Naval_Ravikant_TechCrunch_Disrupt_2011_%28cropped%29.jpg',
  'Warren Buffett': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Warren_Buffett_KU_School_of_Business_2017_crop.jpg/800px-Warren_Buffett_KU_School_of_Business_2017_crop.jpg',
  'Charlie Munger': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Charlie_Munger.jpg/800px-Charlie_Munger.jpg',
  'Ray Dalio': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ray_Dalio_2011.jpg/800px-Ray_Dalio_2011.jpg',
  'Elon Musk': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/800px-Elon_Musk_Royal_Society_%28crop1%29.jpg',
  'Steve Jobs': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/800px-Steve_Jobs_Headshot_2010-CROP2.jpg',
  'Jeff Bezos': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/800px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg',
  'Peter Thiel': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Peter_Thiel_at_the_2016_Republican_National_Convention.jpg/800px-Peter_Thiel_at_the_2016_Republican_National_Convention.jpg',
  'Sam Altman': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sam_Altman_2019.jpg/800px-Sam_Altman_2019.jpg',
  'Jensen Huang': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Jensen_Huang_%28cropped%29.jpg/800px-Jensen_Huang_%28cropped%29.jpg',
  'Mark Zuckerberg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg/800px-Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg'
};

const { GIRISIMCILER } = require('./data/girisimciler-data.js');

GIRISIMCILER.forEach(g => {
  if (replacements[g.isim]) {
    g.foto = replacements[g.isim];
  }
});

let ray = GIRISIMCILER.find(g => g.slug === 'ray-kroc');
if (ray) {
  ray.foto = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Ray_Kroc.jpg/800px-Ray_Kroc.jpg';
  ray.ozet = 'Dünyanın en iyi hamburgerini yapmak yerine, dünyanın en iyi kopyalanabilir restoran ve emlak sistemini kurarak fast-food devrimini başlattı.';
  ray.netDeger = '$600M (Ölümünde)';
  ray.kitapOnerisi = 'Grinding It Out (Ray Kroc)';
  ray.altinSoz = ray.soz || 'Eğer risk almaktan korkuyorsanız, ticaretten defolun gidin.';
  ray.zihinYapisi = [
    {
      baslik: 'Asıl Gelir Modelini Bulmak',
      aciklama: "McDonald's sadece hamburger satmaz, aslında franchisee'lere kiraladığı emlaklardan kazanır. Sektörünüzdeki asıl kâr noktasını bulun."
    },
    {
      baslik: 'Israrın Gücü (Persistence)',
      aciklama: 'Yeteneğin, eğitimin veya dehanın yerini hiçbir şey ısrar kadar dolduramaz.'
    },
    {
      baslik: 'Ölçeklenebilirlik',
      aciklama: 'İki küçük restoranda mükemmel olan bir sistemi, on binlerce restorana hatasız şekilde ölçeklendirin.'
    }
  ];
  delete ray.soz;
  delete ray.anaFelsefe;
  delete ray.sirri;
  delete ray.ogutler;
}

const newContent = "'use strict';\n\nconst GIRISIMCILER = " + JSON.stringify(GIRISIMCILER, null, 2) + ";\n\nmodule.exports = { GIRISIMCILER };\n";
fs.writeFileSync(path, newContent, 'utf8');
console.log('Fixed Ray Kroc and all images.');
