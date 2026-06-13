'use strict';

const OGRETILER = [
  {
    slug: 'bilesik-faiz-gucu',
    baslik: 'Bileşik Faizin Büyüsü',
    altBaslik: 'Dünyanın 8. Harikası',
    ikon: '📈',
    kategori: 'temel',
    kisa: 'Albert Einstein\'ın "dünyanın 8. harikası" dediği bileşik faiz, küçük birikimleri devasa servetlere dönüştüren matematiksel mucizedir.',
    detay: `Bileşik faiz, kazancınızın da kazanç üretmeye başladığı noktadır. Zaman en büyük kaldıracınızdır. Warren Buffett servetinin %99'unu 50 yaşından sonra kazandı.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Bileşik faiz (Compound Interest), lineer düşünen insan beyninin kavramakta en çok zorlandığı matematiksel anomalidir. Paranızın sadece bir kez değil, kendi yarattığı "yavrular" üzerinden de sınırsızca para doğurmasıdır. Einstein'a atfedilen sözle: <em>"Bileşik faiz dünyanın 8. harikasıdır. Onu anlayan kazanır, anlamayan bedelini öder."</em></p>
      
      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Kar Topu Etkisi (Snowball Effect)</h2>
      <p style="margin-bottom: 20px;">Zirveden yuvarlanan küçük bir kar topunu hayal edin. Başlangıçta o kadar küçüktür ki, topladığı kar miktarı gözle görülmez. Ancak aşağı indikçe yüzey alanı büyür ve her tam tur dönüşünde, bir önceki turda topladığından çok daha fazla karı bünyesine katar. Finansal dünyada bu "yüzey alanı" anaparanız, "tur" ise zamandır.</p>
      
      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">1. Görsel Kanıt: Basit Faiz vs. Bileşik Faiz</h2>
      <p style="margin-bottom: 20px;">Farkı anlamanın en iyi yolu sayılara bakmaktır. 10.000 TL yatırdınız ve yıllık %10 getiri elde ediyorsunuz.</p>
      
      <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--glass-border); border-radius: 8px; margin: 30px 0; overflow: hidden;">
        <table style="width: 100%; text-align: left; border-collapse: collapse;">
          <thead>
            <tr style="background: rgba(212,175,55,0.1); border-bottom: 1px solid var(--gold-400);">
              <th style="padding: 15px; color: var(--gold-300);">Yıl</th>
              <th style="padding: 15px; color: var(--text-100);">Basit Faiz (Sadece Anaparaya)</th>
              <th style="padding: 15px; color: var(--gold-400);">Bileşik Faiz (Faizin Faizi)</th>
            </tr>
          </thead>
          <tbody style="color: var(--text-300);">
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
              <td style="padding: 15px;">Başlangıç</td>
              <td style="padding: 15px;">10.000 TL</td>
              <td style="padding: 15px;">10.000 TL</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
              <td style="padding: 15px;">1. Yıl</td>
              <td style="padding: 15px;">11.000 TL (+1.000)</td>
              <td style="padding: 15px;">11.000 TL (+1.000)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
              <td style="padding: 15px;">2. Yıl</td>
              <td style="padding: 15px;">12.000 TL (+1.000)</td>
              <td style="padding: 15px; color: var(--gold-200);">12.100 TL (+1.100)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
              <td style="padding: 15px;">10. Yıl</td>
              <td style="padding: 15px;">20.000 TL</td>
              <td style="padding: 15px; color: var(--gold-200); font-weight: bold;">25.937 TL</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
              <td style="padding: 15px;">30. Yıl</td>
              <td style="padding: 15px;">40.000 TL</td>
              <td style="padding: 15px; color: var(--gold-400); font-weight: bold;">174.494 TL</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style="margin-bottom: 20px;">Tablodan görebileceğiniz gibi, 30 yılın sonunda Basit Faiz paranızı sadece 4'e katlarken, Bileşik Faiz (paraya hiç dokunmadığınız için) paranızı tam <strong>17.4 katına</strong> çıkarır. Üstelik bunun için cebinizden ekstra 1 kuruş bile çıkmamıştır.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">2. Görsel Kanıt: Hokey Sopası Eğrisi (Hockey Stick Curve)</h2>
      <p style="margin-bottom: 20px;">Aylık 5.000 TL'lik düzenli bir yatırımın (%10 yıllık getiri ile) yıllara göre portföy büyüklüğü grafiği:</p>
      
      <div style="background: var(--dark-800); border: 1px solid var(--glass-border); border-radius: 12px; padding: 30px; margin: 30px 0;">
        <div style="display: flex; align-items: flex-end; height: 250px; gap: 15px; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); position: relative;">
          <div style="position: absolute; width: 100%; border-top: 1px dashed rgba(255,255,255,0.1); bottom: 25%;"></div>
          <div style="position: absolute; width: 100%; border-top: 1px dashed rgba(255,255,255,0.1); bottom: 50%;"></div>
          <div style="position: absolute; width: 100%; border-top: 1px dashed rgba(255,255,255,0.1); bottom: 75%;"></div>
          
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center; z-index: 1;">
            <span style="color: var(--text-300); font-size: 0.85rem; margin-bottom: 8px;">1.0 Milyon ₺</span>
            <div style="width: 60%; background: linear-gradient(to top, #374151, #6b7280); height: 10%; border-radius: 6px 6px 0 0;"></div>
            <span style="color: var(--text-muted); font-size: 0.85rem; margin-top: 10px;">10. Yıl</span>
          </div>
          
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center; z-index: 1;">
            <span style="color: var(--text-300); font-size: 0.85rem; margin-bottom: 8px;">3.8 Milyon ₺</span>
            <div style="width: 60%; background: linear-gradient(to top, #4b5563, #9ca3af); height: 35%; border-radius: 6px 6px 0 0;"></div>
            <span style="color: var(--text-muted); font-size: 0.85rem; margin-top: 10px;">20. Yıl</span>
          </div>

          <div style="flex: 1; display: flex; flex-direction: column; align-items: center; z-index: 1;">
            <span style="color: var(--gold-200); font-size: 0.85rem; margin-bottom: 8px; font-weight: bold;">11.3 Milyon ₺</span>
            <div style="width: 60%; background: linear-gradient(to top, var(--gold-600), var(--gold-400)); height: 60%; border-radius: 6px 6px 0 0; box-shadow: 0 0 15px rgba(212,175,55,0.3);"></div>
            <span style="color: var(--text-muted); font-size: 0.85rem; margin-top: 10px;">30. Yıl</span>
          </div>

          <div style="flex: 1; display: flex; flex-direction: column; align-items: center; z-index: 1;">
            <span style="color: var(--gold-400); font-size: 1rem; margin-bottom: 8px; font-weight: bold;">31.8 Milyon ₺!</span>
            <div style="width: 60%; background: linear-gradient(to top, #B8860B, #FFD700); height: 100%; border-radius: 6px 6px 0 0; box-shadow: 0 0 25px rgba(255,215,0,0.5);"></div>
            <span style="color: var(--text-muted); font-size: 0.85rem; margin-top: 10px; font-weight: bold;">40. Yıl</span>
          </div>
        </div>
        <p style="text-align: center; color: var(--text-400); font-size: 0.95rem; margin-top: 20px;">
          İlk 10 yılda portföy zar zor 1 Milyona ulaşırken, <strong>30. yıl ile 40. yıl arasındaki o son 10 yıllık periyotta</strong> portföye hiçbir şey yapmadan tam 20 Milyon TL eklenmiştir. Sihir, son periyotta patlar!
        </p>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">3. Görsel Kanıt: 20 Yaşındaki Ali vs 30 Yaşındaki Burak</h2>
      <p style="margin-bottom: 20px;">Zamanın nasıl en büyük kaldıraç olduğunu görmek için bu örneği inceleyelim. Her ikisi de piyasadan yıllık ortalama %10 getiri elde ediyor.</p>
      
      <div style="background: rgba(0,0,0,0.2); border: 1px solid var(--glass-border); border-radius: 12px; padding: 20px; margin: 30px 0;">
        <h4 style="color: var(--gold-300); margin-bottom: 15px; margin-top: 0;">👨‍🎓 Ali'nin Erken Hamlesi (Sadece 10 Yıl Yatırım)</h4>
        <ul style="color: var(--text-secondary); margin-bottom: 20px;">
          <li><strong>20 yaşında</strong> başlıyor.</li>
          <li>Her yıl <strong>36.000 TL</strong> yatırım yapıyor.</li>
          <li><strong>30 yaşına geldiğinde tamamen yatırımı bırakıyor.</strong> Sadece kazandıklarının bileşmesine izin veriyor. (Cebinden çıkan toplam: 360.000 TL)</li>
        </ul>
        
        <h4 style="color: var(--gold-300); margin-bottom: 15px;">👨‍💼 Burak'ın Gecikmesi (35 Yıl Boyunca Yatırım)</h4>
        <ul style="color: var(--text-secondary); margin-bottom: 20px;">
          <li><strong>30 yaşında</strong> başlıyor (Ali bıraktığında).</li>
          <li>Her yıl <strong>36.000 TL</strong> yatırım yapıyor.</li>
          <li><strong>65 yaşına kadar HİÇ DURMADAN her yıl para yatırıyor.</strong> (Cebinden çıkan toplam: 1.260.000 TL)</li>
        </ul>

        <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
          <h4 style="color: var(--white); text-align: center; margin-bottom: 20px;">65 Yaşına Geldiklerinde Bilanço</h4>
          
          <div style="display: flex; flex-direction: column; gap: 15px;">
            <div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span style="color: var(--gold-400); font-weight: bold;">Ali (Sadece 10 Yıl Yatırım Yaptı)</span>
                <span style="color: var(--white); font-weight: bold;">~ 16.7 Milyon TL</span>
              </div>
              <div style="width: 100%; background: rgba(255,255,255,0.05); height: 30px; border-radius: 15px; position: relative; overflow: hidden;">
                <div style="position: absolute; left: 0; top: 0; height: 100%; width: 100%; background: linear-gradient(90deg, var(--gold-600), var(--gold-400)); border-radius: 15px;"></div>
              </div>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span style="color: var(--text-300); font-weight: bold;">Burak (35 Yıl Boyunca Yatırım Yaptı)</span>
                <span style="color: var(--white); font-weight: bold;">~ 10.7 Milyon TL</span>
              </div>
              <div style="width: 100%; background: rgba(255,255,255,0.05); height: 30px; border-radius: 15px; position: relative; overflow: hidden;">
                <div style="position: absolute; left: 0; top: 0; height: 100%; width: 64%; background: linear-gradient(90deg, #4b5563, #9ca3af); border-radius: 15px;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p style="margin-bottom: 20px;">Burak, cebinden Ali'nin yaklaşık <strong>3.5 katı</strong> daha fazla para (1.260.000 TL) çıkarmasına ve Ali'den tam 25 yıl daha fazla süre boyunca çabalamasına rağmen Ali'ye yenilmiştir. <strong>Çünkü Ali, paraya sahip olmadığı bir dönemde "Zaman" isimli o sihirli kaldıracı kullanmıştır.</strong></p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">4. Örnek: Kahve Parası Yanılgısı (Latte Factor)</h2>
      <p style="margin-bottom: 20px;">Bileşik faizi anlamayanlar "Hergün içtiğim 100 liralık kahveden mi zengin olacağım?" diyerek bu sistemi küçümserler. Gelin matematiğini yapalım:</p>
      <div style="background: rgba(255,255,255,0.02); border-left: 4px solid var(--gold-400); padding: 20px; border-radius: 0 12px 12px 0; margin-bottom: 20px;">
        <ul style="color: var(--text-secondary); margin-bottom: 0; line-height: 1.8;">
          <li>Günde 100 TL harcama = Ayda 3.000 TL demektir.</li>
          <li>Bu parayı 30 yıl boyunca yatırmazsanız: 1 Milyon 80 Bin TL'lik nakit çıkışı olur.</li>
          <li>Aynı parayı yıllık <strong>%10 getiriyle</strong> yatırıma koysaydınız: 30 yıl sonra <strong>6.8 Milyon TL'niz</strong> olacaktı!</li>
        </ul>
      </div>
      <p style="margin-bottom: 20px;">Lüks tüketim yaparken, aslında o paranın gelecekteki 6.8 Milyon lirasını da çöpe atmış olursunuz. Küçük harcamalar bileşik faiz lensinden bakıldığında devasa servet kayıplarıdır.</p>

      
      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">5. Masterclass: Düşüşleri Yakıta Çevirmek (Maliyet Ortalaması)</h2>
      <p style="margin-bottom: 20px;">Bileşik faizi anlayanların en büyük korkusu "Ya piyasalar çökerse?" sorusudur. Oysa sistemin gerçek dehası burada ortaya çıkar. Düzenli alım yapıyorsanız (DCA - Dollar Cost Averaging), piyasa çöktüğünde aynı parayla <strong>çok daha fazla pay (hisse/fon)</strong> alırsınız. Piyasa toparlandığında ise elinizdeki bu artmış pay sayısı, bileşik faizin çarpan etkisini adeta roketler!</p>
      
      <div style="background: rgba(0,0,0,0.2); border: 1px dashed var(--gold-500); border-radius: 12px; padding: 25px; margin: 30px 0; position: relative;">
        <div style="position: absolute; top: -15px; left: 25px; background: var(--dark-900); padding: 0 15px; color: var(--gold-400); font-weight: bold; font-size: 0.9rem; letter-spacing: 1px; border: 1px solid var(--gold-500); border-radius: 20px;">KRİZ SİMÜLASYONU</div>
        <ul style="color: var(--text-secondary); margin-bottom: 0; margin-top: 10px; line-height: 1.8;">
          <li>Aylık 5.000 TL yatırım yapıyorsunuz. Fonun fiyatı 100 TL. (Elbette her ay <strong>50 pay</strong> alırsınız).</li>
          <li><strong>Kriz Çıktı!</strong> Fonun fiyatı %50 çökerek 50 TL'ye düştü. Herkes panikleyip satarken siz yine 5.000 TL yatırım yaptınız. Ancak bu sefer <strong>100 pay</strong> aldınız!</li>
          <li>Piyasa sadece eski haline (100 TL'ye) döndüğünde, krizde aldığınız o 100 payın değeri anında 10.000 TL olur. Üstüne bir de bileşik faiz işlemeye başladığında, kriz sizin en büyük zenginlik sıçramanız haline gelir. <em>Bileşik faiz döngüsünde krizler risk değil, indirim sezonudur.</em></li>
        </ul>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">6. Görünmez Düşman: Negatif Bileşik Faiz (Enflasyon)</h2>
      <p style="margin-bottom: 20px;">Bileşik faizin gücünü sadece sizin lehinize çalıştığında değil, <strong>aleyhinize</strong> çalıştığında da anlamalısınız. Enflasyon, paranızı "negatif" yönde bileşik faize sokan bir canavardır.</p>
      
      <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 30px;">
        <div style="flex: 1; min-width: 250px; background: rgba(239,68,68,0.05); border-top: 3px solid #ef4444; padding: 20px; border-radius: 0 0 8px 8px;">
          <h4 style="color: #fca5a5; margin-top: 0; margin-bottom: 10px;">📉 Yastık Altı Erimesi</h4>
          <p style="color: var(--text-300); font-size: 0.95rem; margin: 0;">Yıllık %10 enflasyon olan bir ülkede, cebinizdeki 100.000 TL'nin alım gücü 10 yıl sonra yarı yarıya düşmez. Negatif bileşik etkiden dolayı alım gücünüz <strong>yaklaşık 34.000 TL'ye</strong> çakılır! Para durduğu yerde adeta buharlaşır.</p>
        </div>
        <div style="flex: 1; min-width: 250px; background: rgba(16,185,129,0.05); border-top: 3px solid #10b981; padding: 20px; border-radius: 0 0 8px 8px;">
          <h4 style="color: #6ee7b7; margin-top: 0; margin-bottom: 10px;">📈 Reel Getiri Hedefi</h4>
          <p style="color: var(--text-300); font-size: 0.95rem; margin: 0;">Bu yüzden hedefiniz sadece "para kazanmak" değildir. Hedefiniz, enflasyon oranını (örn: %10) geçecek bir yatırım bulup (örn: %18 getiri), aradaki <strong>%8'lik Reel Getiri'yi</strong> bileşik faiz motoruna sokmaktır.</p>
        </div>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">Çift Motorlu Büyüme: Temettü (DRIP) Enjeksiyonu</h2>
      <p style="margin-bottom: 20px;">Sadece yatırdığınız anaparanın değerlenmesi (hisse veya fon fiyatının artması) birinci motordur. Eğer yatırım yaptığınız şirket veya fon size <strong>Nakdi Temettü (Kâr Payı)</strong> ödüyorsa ve siz bu parayı harcamak yerine tekrar aynı yatırımı almak için kullanıyorsanız (DRIP - Dividend Reinvestment Plan), bileşik faiz çift motorla çalışmaya başlar.</p>
      
      <div style="background: rgba(255,255,255,0.02); padding: 20px; border-radius: 8px; border-left: 4px solid var(--gold-300); margin-bottom: 40px;">
        <p style="margin: 0; color: var(--text-200); font-style: italic;">"Bir hisse senedi size temettü verdiğinde, bu size şirketin bir dalını kesip odun olarak vermesidir. O odunu şöminede yakıp (harcayıp) keyif yapabilirsiniz. Ya da o dalı tekrar toprağa dikip yeni bir ağaç olmasını izleyebilirsiniz. İkinci seçenek, dünyadaki en zengin ormanları yaratır."</p>
      </div>


      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">7. Gözden Kaçan Sır: 1 Yıl Ertelemenin Gerçek Faturası</h2>
      <p style="margin-bottom: 20px;">Birçok insan yatırıma başlamayı "Nasılsa seneye başlarım, alt tarafı 1 yıllık getiriyi kaçırırım" diyerek erteler. Bu, bileşik faiz konusundaki en büyük ve en acımasız yanılgıdır. <strong>Ertelediğiniz o bir yıl, grafiğin başındaki zayıf yılı değil, grafiğin en sonundaki o devasa "patlama" yılını çöpe atmanız demektir.</strong></p>
      
      <div style="background: rgba(0,0,0,0.4); border-left: 4px solid #ef4444; padding: 20px; border-radius: 0 8px 8px 0; margin-bottom: 25px;">
        <p style="color: #f87171; font-weight: bold; margin-top: 0; margin-bottom: 10px;">Matematiksel Kanıt:</p>
        <p style="color: var(--text-300); margin: 0; line-height: 1.7;">Aylık 5.000 TL yatırımla %10 getiri elde ediyorsunuz.</p>
        <ul style="color: var(--text-secondary); margin-top: 10px; margin-bottom: 0;">
          <li>30 Yılın Sonunda Toplam: <strong>11.3 Milyon TL</strong></li>
          <li>Sadece 1 yıl geç başlasaydınız (29 Yıl): <strong>10.1 Milyon TL</strong></li>
        </ul>
        <p style="color: var(--white); margin-top: 15px; margin-bottom: 0;"><strong>Kayıp: 1.2 Milyon TL!</strong> Sadece 1 yıl (toplamda yatırmadığınız 60.000 TL) için kaybettiğiniz servet tam 1.2 Milyon TL'dir. Çünkü siz ilk yılı değil, o efsanevi 30. yılı sildiniz!</p>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">8. Psikolojik Savaş: "Hayal Kırıklığı Vadisi" (Valley of Disappointment)</h2>
      <p style="margin-bottom: 20px;">Bileşik faiz matematiği kusursuzdur, ancak insanların %95'i bu servete asla ulaşamaz. Neden? Çünkü insan psikolojisi <em>doğrusal (lineer)</em> düşünmeye programlanmıştır, ancak bileşik faiz <em>eğrisel (eksponansiyel)</em> çalışır.</p>
      
      <div style="display: flex; gap: 20px; align-items: flex-start; margin-bottom: 30px; background: rgba(255,255,255,0.02); padding: 25px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
        <div style="flex: 1;">
          <h4 style="color: var(--gold-400); margin-top: 0; margin-bottom: 15px; font-size: 1.1rem;">📉 Çöküş Vadisi Nedir?</h4>
          <p style="color: var(--text-300); font-size: 0.95rem; line-height: 1.6;">Yatırıma başladığınız ilk 3-5 yılda, yatırdığınız anapara çok büyüktür ama getirdiği "faiz" çok komik ve küçüktür. Her ay para eklersiniz, ancak servetiniz sizin beklediğiniz "hızlı zenginlik" çizgisinin hep altında kalır. İşte bu bölgeye <strong>Hayal Kırıklığı Vadisi</strong> denir. İnsanların büyük çoğunluğu tam da bu vadide "Bu işe yaramıyor" diyerek sistemi bozar, parayı çeker ve araba/telefon alarak hokey sopası eğrisini kırar.</p>
        </div>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">9. Bileşik Motoru Kesen 3 Ölümcül Hata</h2>
      <p style="margin-bottom: 20px;">Dünyaca ünlü yatırımcı Charlie Munger'ın ilk kuralı şudur: <em>"Gerekmedikçe bileşik faizin çalışmasını asla kesintiye uğratmayın."</em> İşte o motoru durduran 3 yaygın hata:</p>
      
      <div style="display: grid; grid-template-columns: 1fr; gap: 15px; margin-bottom: 40px;">
        <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 8px; border-left: 3px solid #f59e0b;">
          <strong style="color: var(--white); display: block; margin-bottom: 8px; font-size: 1.1rem;">1. Sık Al-Sat Yapmak (Heyecan Bağımlılığı)</strong>
          <span style="color: var(--text-400); font-size: 0.95rem;">Sürekli fon veya hisse değiştirmek, komisyon ve vergiler ödemenize yol açar. Kar topunun büyümesi için uzun ve kesintisiz bir yamaca ihtiyacı vardır. Al-sat yapmak, kar topunu durdurup başka bir tepeye taşımaktır.</span>
        </div>
        <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 8px; border-left: 3px solid #f59e0b;">
          <strong style="color: var(--white); display: block; margin-bottom: 8px; font-size: 1.1rem;">2. Acil Durum Fonu Eksikliği</strong>
          <span style="color: var(--text-400); font-size: 0.95rem;">Arabanız bozulduğunda veya işsiz kaldığınızda nakdiniz yoksa, mecburen yatırım hesabınızı bozarsınız. O hesap bozulduğunda, 15 yıldır inşa ettiğiniz "zaman" kaldıracı sıfırlanır.</span>
        </div>
        <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 8px; border-left: 3px solid #f59e0b;">
          <strong style="color: var(--white); display: block; margin-bottom: 8px; font-size: 1.1rem;">3. Altın Yumurtlayan Tavuğu Kesmek</strong>
          <span style="color: var(--text-400); font-size: 0.95rem;">Portföy belli bir büyüklüğe ulaştığında (örneğin 500.000 TL), kişi bu parayı görüp lüks bir harcama yapar. Oysa o 500.000 TL, asıl trilyonları doğuracak olan altın yumurtlayan tavuktur. Ana motora dokunulmamalıdır.</span>
        </div>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">10. Satranç Tahtası Efsanesi (Eksponansiyel Büyümenin Sınırları)</h2>
      <p style="margin-bottom: 20px;">İnsan beyninin bileşik faizi neden algılayamadığını anlatan en ünlü tarihi metafor "Satranç Tahtası ve Buğday" efsanesidir. Efsaneye göre satrancı icat eden bilge, kraldan ödül olarak şunu ister: <em>"Satranç tahtasının ilk karesine 1 buğday tanesi koyun. İkinciye 2, üçüncüye 4, dördüncüye 8... Her karede ikiye katlayarak 64. kareye kadar gidin."</em></p>
      <p style="margin-bottom: 20px;">Kral bu isteği çok mütevazı bulup güler. Ancak hesaplama başladığında korkunç gerçek ortaya çıkar. İlk yarım tahta (32 kare) bittiğinde sadece 4 milyar buğday tanesi (yaklaşık 1 büyük tarla) gerekir. <strong>Ancak tahtanın ikinci yarısına geçildiğinde bileşik büyüme çıldırır.</strong> 64. kareye gelindiğinde gereken buğday miktarı, günümüz dünyasının 2.000 yıllık küresel buğday üretimine denktir! Bileşik faizin asıl sihri, <em>"tahtanın ikinci yarısında"</em> yatar. Yatırımlarınızın ilk 10 yılı tahtanın ilk yarısıdır, sıkıcıdır. Zenginlik, 15. yıldan sonraki o "ikinci yarıda" gizlidir.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">11. Sızıntı Yapan Kova: Vergi ve Komisyonun Negatif Etkisi (Tax Drag)</h2>
      <p style="margin-bottom: 20px;">Eğer bir hisseyi her yıl alıp satıyorsanız ve her yıl elde ettiğiniz kârın %20'sini vergi ve komisyon olarak ödüyorsanız, paranızın birleşmesine izin vermiyorsunuz demektir.</p>
      
      <div style="background: rgba(255,255,255,0.02); border-left: 4px solid #3b82f6; padding: 20px; border-radius: 0 12px 12px 0; margin-bottom: 20px;">
        <p style="color: var(--text-300); margin: 0; line-height: 1.7;"><strong>Al-Sat Yapan vs. Bekleyen Yatırımcı:</strong><br>
        100.000 TL'niz var. Yıllık %15 getiri elde ediyorsunuz.
        <br><br>
        <strong>Kişi A (Her yıl al-sat yapar, %20 vergi/kesinti öder):</strong> Yıllık net getirisi %12'ye düşer. 30 yıl sonra parası <strong>2.9 Milyon TL</strong> olur.
        <br>
        <strong>Kişi B (Alır ve 30 yıl HİÇ dokunmaz, vergiyi sadece 30. yılın sonunda öder):</strong> Parası yıllarca brüt %15 üzerinden bileşir (vergi ertelenir). 30 yılın sonunda 6.6 Milyon TL birikir, tek seferlik %20 vergisini öder ve eline <strong>5.3 Milyon TL</strong> geçer.</p>
      </div>
      <p style="margin-bottom: 20px;">Sadece vergiyi/kesintiyi son yıla ertelemek (parayı içeride tutarak brüt büyümesine izin vermek), Kişi B'ye tam <strong>2.4 Milyon TL</strong> ekstra bedava para kazandırmıştır! Zenginler, vergiyi ertelemenin matematiğini çok iyi bilirler.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">12. Finansın Ötesi: "Yüzde 1 Kuralı" ve Bilginin Bileşik Etkisi</h2>
      <p style="margin-bottom: 20px;">Bileşik etki sadece bir para yasası değil, evrensel bir doğa yasasıdır. Naval Ravikant'ın dediği gibi: <em>"Hayattaki tüm getiriler; ister servet, ister ilişkiler, ister bilgi olsun, bileşik faizden gelir."</em></p>
      
      <div style="display: flex; flex-direction: column; gap: 15px; margin-bottom: 30px;">
        <div style="background: rgba(16,185,129,0.05); border: 1px dashed #10b981; padding: 20px; border-radius: 8px; text-align: center;">
          <h4 style="color: #6ee7b7; margin-top: 0; font-size: 1.2rem;">Her Gün %1 Daha İyi Olmak (1.01^365)</h4>
          <p style="color: var(--text-200); font-size: 1.5rem; font-family: var(--font-display); margin: 10px 0;">(1.01)<sup>365</sup> = 37.7</p>
          <p style="color: var(--text-400); font-size: 0.95rem; margin: 0;">Eğer her gün dünden sadece %1 daha iyi olursanız (kitap okuyarak, çalışarak, spor yaparak), yılın sonunda tam <strong>37.7 kat</strong> daha iyi bir versiyonunuza dönüşürsünüz.</p>
        </div>
        <div style="background: rgba(239,68,68,0.05); border: 1px dashed #ef4444; padding: 20px; border-radius: 8px; text-align: center;">
          <h4 style="color: #fca5a5; margin-top: 0; font-size: 1.2rem;">Her Gün %1 Daha Kötü Olmak (0.99^365)</h4>
          <p style="color: var(--text-200); font-size: 1.5rem; font-family: var(--font-display); margin: 10px 0;">(0.99)<sup>365</sup> = 0.03</p>
          <p style="color: var(--text-400); font-size: 0.95rem; margin: 0;">Eğer her gün sadece %1 gerilerseniz, yılın sonunda yetenekleriniz ve potansiyeliniz neredeyse <strong>sıfıra (0.03)</strong> inecektir.</p>
        </div>
      </div>
      <p style="margin-bottom: 20px;">Günde 10 sayfa kitap okumak o gün hayatınızı değiştirmez. Ancak bunu 5 yıl boyunca yaptığınızda o bilginin bileşik etkisi, sizi bulunduğunuz odadaki en akıllı ve en tehlikeli insan yapar.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">13. Zaman Yolculuğu İllüzyonu: Gelecekteki Sizden Çalmak</h2>
      <p style="margin-bottom: 20px;">Bileşik faizi tam olarak idrak ettiğinizde, paranızı harcarken beyninizde otomatik bir <strong>"İndirgenmiş Nakit Akışı" (Discounted Cash Flow)</strong> makinesi çalışmaya başlar. Bugün vitrinde gördüğünüz ve çok istediğiniz 50.000 TL'lik o lüks saati alırken, aslında 50.000 TL harcamazsınız. Yıllık %10 getiri ile 30 yıllık bir zaman ufkunda, o saatin size gerçek maliyeti <strong>yaklaşık 870.000 TL'dir.</strong></p>
      
      <div style="background: rgba(0,0,0,0.5); padding: 20px; border-radius: 8px; border-top: 2px solid #a855f7; margin-bottom: 25px;">
        <p style="color: var(--text-200); font-size: 0.95rem; margin: 0;">Bu perspektife ulaştığınızda her harcamaya şu gözle bakarsınız: <em>"Bu anlık zevk, 60 yaşındaki halimden 870.000 TL çalmaya değer mi?"</em> Gelecekteki siz, şu anki sizden farklı bir insan değildir. Sadece zaman makinesinde ileri gitmiş halinizdir ve bugün yaptığınız her gereksiz harcama, o yaşlı ve yorgun insanın cebinden zorla para çalmaktır.</p>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">14. Kaldıracın İhaneti: Neden Borçla Yatırım Yapılmaz?</h2>
      <p style="margin-bottom: 20px;">Pek çok kişi bileşik faizin gücünü gördüğünde şu tehlikeli fikre kapılır: <em>"Madem faiz parayı bu kadar katlıyor, o zaman kredi çekeyim veya aracı kurumdan borç (margin) alayım, daha büyük anaparayla başlayayım!"</em> Bu, finansal bir intihardır. Buna "Kaldıraç" denir ve kaldıraç, bileşik faizin çift tarafı keskin kılıcıdır.</p>
      
      <ul style="color: var(--text-secondary); margin-bottom: 20px;">
        <li>Piyasa %50 düştüğünde ve kendi paranızlaysanız: Beklersiniz, piyasa toparlar. Sorun yoktur.</li>
        <li>Piyasa %50 düştüğünde ve <strong>borçlayken (2x Kaldıraç):</strong> Paranızın %100'ü erir (Margin Call). <strong>Sıfırlanırsınız (Wipeout).</strong></li>
      </ul>
      <p style="margin-bottom: 20px;">Bileşik büyüme sıfırla ("0") çarpıldığı an oyun biter. Sıfırın hiçbir üssü, çarpanı veya katsayısı yoktur. Sıfır sıfırdır. Sistemin tek bir kuralı vardır: Oyunda kalmak. Kaldıraç (borç), sizi masadan tek hamlede silebilen tek şeydir.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">15. İleri Seviye Gizem: Shannon'ın Şeytanı (Portföy Dengeleme)</h2>
      <p style="margin-bottom: 20px;">Bilgi teorisinin babası Claude Shannon, 1960'larda sadece portföy dengeleyerek (rebalancing) "yoktan" nasıl bileşik faiz yaratılacağını kanıtlamıştır. Bu konsept "Shannon'ın Şeytanı" olarak bilinir.</p>
      
      <div style="background: rgba(255,255,255,0.02); border-left: 4px solid var(--gold-400); padding: 25px; border-radius: 0 12px 12px 0; margin-bottom: 30px;">
        <h4 style="color: var(--gold-300); margin-top: 0; margin-bottom: 10px;">Sihir Nasıl Gerçekleşiyor?</h4>
        <p style="color: var(--text-300); font-size: 0.95rem; margin-bottom: 15px;">Diyelim ki paranızı %50 Hisse Senedi, %50 Altın olarak böldünüz. Piyasalarda sürekli bir dalgalanma olur.
        <br>1. Yıl: Hisse senetleri çok arttı, Altın düştü. Portföyünüz artık %60 Hisse, %40 Altın oldu.
        <br>2. Yıl Başı: Portföyü tekrar %50-%50 yapmak için "Değerlenmiş olan Hisseden" satıp, "Ucuzlamış olan Altından" alırsınız.</p>
        <p style="color: var(--text-100); font-size: 0.95rem; margin: 0;">İşte bu eylem, insan psikolojisine aykırı olan <strong>"Zirveden Sat, Dipten Al"</strong> kuralını size zorla, mekanik olarak yaptırır. Uzun vadede fiyatı hiç artmayan (yatay giden) ama çok dalgalanan iki varlığınız olsa bile, sadece bu periyodik "dengeleme" işlemi sayesinde sürekli, ekstra bir bileşik faiz yaratırsınız. Riski azaltırken, fazladan "bedava" kâr üretirsiniz.</p>
      </div>





<h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">Hesaplama Şifresi: 72 Kuralı</h2>
      <p style="margin-bottom: 20px;">Hesap makinesi olmadan paranızın ne zaman ikiye katlanacağını nasıl bulursunuz? Finansçıların kullandığı çok basit bir sihirbazlık numarası vardır: <strong>72 Kuralı.</strong> (72 / Yıllık Getiri Yüzdesi = Katlanma Yılı)</p>
      <ul style="color: var(--text-secondary); margin-bottom: 20px;">
        <li>Banka size yıllık <strong>%8</strong> faiz veriyorsa: 72 / 8 = Paranız <strong>9 yılda</strong> ikiye katlanır.</li>
        <li>Borsa size yıllık <strong>%12</strong> getiri sağlıyorsa: 72 / 12 = Paranız <strong>6 yılda</strong> ikiye katlanır.</li>
        <li>Kriptodan yıllık <strong>%24</strong> getiri sağlıyorsanız: 72 / 24 = Paranız <strong>3 yılda</strong> ikiye katlanır.</li>
      </ul>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 40px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Warren Buffett Anomalisi:</strong> Dünyanın en büyük yatırımcılarından Warren Buffett'ın net serveti bugün 130 Milyar Doların üzerindedir. Ancak insanların %99'unun bilmediği sarsıcı gerçek şudur: <strong>Buffett bu servetinin %99'unu 50 yaşından SONRA kazanmıştır.</strong> 11 yaşında yatırıma başlayan Buffett, 70 yıl boyunca bileşik faizin formülünü kesintisiz çalıştırmış ve o amansız "hokey sopası" eğrisinin ucunu yakalamıştır. Ortalama bir zekaya sahiptir, ancak piyasadaki kimsede olmayan tek bir şeye sahiptir: Kesintisiz bir 70 yıllık zaman vizyonu.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Matematiğin Arka Planı: A = P(1 + r/n)^(nt)</h3>
      <p style="margin-bottom: 20px;">Bu ünlü formülde yer alan <code>t</code> (zaman) değişkeni, anapara (<code>P</code>) gibi bir katsayı değildir; o bir <strong>"üs"tür</strong> (exponent). Beynimiz 2+2=4 gibi toplamsal (lineer) veya 2x5=10 gibi çarpımsal çalışmaya evrimleşmiştir. Ancak 2^10 = 1024'tür. İnsan zihni, üslü büyümenin o ilk 5-6 adımlık sıkıcı ve yatay sürecinde pes eder. %95'imiz bu nedenle borsada al-sat yapar, hızlı köşeyi dönmeye çalışır ve formülü kesintiye uğratarak sihirli döngüyü kendi elleriyle öldürür.</p>
      
      <p style="margin-bottom: 20px;">Bileşik faizin çalışması için üç şeye ihtiyacınız vardır: <strong>Anapara (Para), Getiri Oranı (Kaliteli Yatırım) ve Zaman (Sabır).</strong> İlk ikisini kontrol edemeseniz bile, üçüncüye sahipseniz maça 1-0 önde başlarsınız.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 60px; margin-bottom: 20px;">5. İnteraktif: Kendi Zenginlik Simülatörünüz</h2>
      <p style="margin-bottom: 20px;">Matematiği gördünüz, şimdi sıra sizde. Kendi "Bileşik Faiz" kar topunuzu başlatın. Aşağıdaki değerleri kendi bütçenize göre değiştirin ve zamanın parayı nasıl büktüğüne şahit olun.</p>

      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); border-radius: 12px; padding: 25px; margin: 30px 0; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 25px;">
          <div>
            <label style="display: block; color: var(--text-300); font-size: 0.9rem; margin-bottom: 8px;">Başlangıç Sermayesi (TL)</label>
            <input type="number" id="calc-initial" value="10000" style="width: 100%; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); color: var(--white); padding: 12px 15px; border-radius: 8px; font-family: inherit; font-size: 1rem; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='var(--gold-400)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'">
          </div>
          <div>
            <label style="display: block; color: var(--text-300); font-size: 0.9rem; margin-bottom: 8px;">Aylık Ek Yatırım (TL)</label>
            <input type="number" id="calc-monthly" value="3000" style="width: 100%; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); color: var(--white); padding: 12px 15px; border-radius: 8px; font-family: inherit; font-size: 1rem; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='var(--gold-400)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'">
          </div>
          <div>
            <label style="display: block; color: var(--text-300); font-size: 0.9rem; margin-bottom: 8px;">Yıllık Ortalama Getiri (%)</label>
            <input type="number" id="calc-rate" value="10" style="width: 100%; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); color: var(--white); padding: 12px 15px; border-radius: 8px; font-family: inherit; font-size: 1rem; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='var(--gold-400)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'">
          </div>
          <div>
            <label style="display: block; color: var(--text-300); font-size: 0.9rem; margin-bottom: 8px;">Yatırım Süresi (Yıl)</label>
            <input type="number" id="calc-years" value="20" style="width: 100%; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); color: var(--white); padding: 12px 15px; border-radius: 8px; font-family: inherit; font-size: 1rem; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='var(--gold-400)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'">
          </div>
        </div>
        
        <button id="calc-btn" style="background: linear-gradient(135deg, var(--gold-500), var(--gold-700)); color: #111; border: none; padding: 15px 24px; font-weight: 900; border-radius: 8px; cursor: pointer; width: 100%; font-size: 1.25rem; transition: transform 0.2s, box-shadow 0.2s; text-transform: uppercase; letter-spacing: 2px;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 5px 15px rgba(212,175,55,0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">HESAPLA 🚀</button>
        
        <div id="calc-result" style="margin-top: 30px; padding: 25px; background: rgba(0,0,0,0.6); border-radius: 12px; border-left: 5px solid var(--gold-400); display: none; position: relative; overflow: hidden;">
          <div style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(0,0,0,0) 70%); border-radius: 50%;"></div>
          
          <p style="margin: 0; color: var(--text-secondary); font-size: 1.05rem;">Seçtiğiniz sürenin sonunda ulaşacağınız devasa portföy:</p>
          <div style="font-size: 3rem; color: var(--gold-300); font-family: var(--font-display); font-weight: 900; margin: 10px 0; line-height: 1.2; text-shadow: 0 0 20px rgba(212,175,55,0.2);" id="calc-total">0 TL</div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
            <div style="background: rgba(255,255,255,0.02); padding: 15px; border-radius: 8px;">
              <span style="display: block; color: var(--text-muted); font-size: 0.85rem; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px;">Sizin Cebinizden Çıkan</span> 
              <strong style="color: var(--text-100); font-size: 1.2rem;" id="calc-principal">0 TL</strong>
            </div>
            <div style="background: rgba(212,175,55,0.05); padding: 15px; border-radius: 8px;">
              <span style="display: block; color: var(--gold-400); font-size: 0.85rem; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px;">Sistemin Kazandırdığı (Net Kâr)</span> 
              <strong style="color: var(--gold-200); font-size: 1.2rem;" id="calc-interest">0 TL</strong>
            </div>
          </div>

          <div id="calc-chart-container"></div>
        </div>
      </div>

      <script>
        // Use an IIFE to prevent variable scoping issues
        (function() {
          const initCalc = () => {
            const btn = document.getElementById('calc-btn');
            if(!btn) return;
            
            btn.addEventListener('click', function() {
              const initial = parseFloat(document.getElementById('calc-initial').value) || 0;
              const monthly = parseFloat(document.getElementById('calc-monthly').value) || 0;
              const rate = parseFloat(document.getElementById('calc-rate').value) || 0;
              const years = parseInt(document.getElementById('calc-years').value) || 0;
              
              const r = rate / 100 / 12; // monthly rate
              const n = years * 12; // total months
              
              let totalAmount = initial;
              let totalInvested = initial;
              
              let maxVal = 0;
              let step = Math.max(1, Math.floor(years / 10)); // up to 10 bars
              let milestones = [];
              
              for(let y = 1; y <= years; y++) {
                for(let m = 0; m < 12; m++) {
                  totalAmount = totalAmount * (1 + r) + monthly;
                  totalInvested += monthly;
                }
                
                if (y % step === 0 || y === years) {
                  // Only keep unique years to avoid duplicates if step condition overlaps
                  if (!milestones.find(m => m.year === y)) {
                    milestones.push({ year: y, total: totalAmount, invested: totalInvested });
                    if (totalAmount > maxVal) maxVal = totalAmount;
                  }
                }
              }
              
              const totalInterest = totalAmount - totalInvested;
              
              const formatter = new Intl.NumberFormat('tr-TR', {
                style: 'currency',
                currency: 'TRY',
                maximumFractionDigits: 0
              });
              
              document.getElementById('calc-total').innerText = formatter.format(totalAmount);
              document.getElementById('calc-principal').innerText = formatter.format(totalInvested);
              document.getElementById('calc-interest').innerText = formatter.format(totalInterest);
              
              // Draw dynamic HTML/CSS Chart
              let chartHTML = '<div style="display: flex; align-items: flex-end; height: 180px; gap: 8px; margin-top: 25px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">';
              
              milestones.forEach(m => {
                 let heightPct = maxVal > 0 ? (m.total / maxVal) * 100 : 0;
                 let investedHeightPct = m.total > 0 ? (m.invested / m.total) * 100 : 0;
                 let interestHeightPct = 100 - investedHeightPct;
                 
                 chartHTML += '<div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%;">' +
                      '<div style="width: 100%; height: ' + heightPct + '%; background: rgba(0,0,0,0.3); border-radius: 4px 4px 0 0; display: flex; flex-direction: column; justify-content: flex-end; overflow: hidden; position: relative; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">' +
                         '<div style="width: 100%; height: ' + interestHeightPct + '%; background: linear-gradient(to top, var(--gold-600), var(--gold-400));"></div>' +
                         '<div style="width: 100%; height: ' + investedHeightPct + '%; background: #4b5563;"></div>' +
                      '</div>' +
                      '<span style="color: var(--text-muted); font-size: 0.7rem; margin-top: 5px;">Yıl ' + m.year + '</span>' +
                    '</div>';
              });
              
              chartHTML += '</div>';
              chartHTML += '<div style="display:flex; gap:15px; justify-content:center; margin-top:10px; font-size:0.8rem;"><div style="display:flex; align-items:center; gap:5px;"><div style="width:12px; height:12px; background:#4b5563; border-radius:2px;"></div><span style="color:var(--text-300)">Sizin Yatırdığınız</span></div><div style="display:flex; align-items:center; gap:5px;"><div style="width:12px; height:12px; background:var(--gold-500); border-radius:2px;"></div><span style="color:var(--text-300)">Faiz (Büyüme)</span></div></div>';
              
              document.getElementById('calc-chart-container').innerHTML = chartHTML;

              const resultDiv = document.getElementById('calc-result');
              resultDiv.style.display = 'block';
              
              if (resultDiv.animate) {
                resultDiv.animate([
                  { transform: 'translateY(15px)', opacity: 0 },
                  { transform: 'translateY(0)', opacity: 1 }
                ], { duration: 500, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' });
              }
            });
          };
          
          if(document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initCalc);
          } else {
            initCalc();
          }
        })();
      </script>
    `,

    altin_kural: 'Ne kadar erken başlarsanız, bileşik faiz o kadar çok sizin için çalışır.',
    rakamlar: [
      { etiket: 'Buffett Serveti', deger: '$130 Milyar+' },
      { etiket: '50 yaş sonrası', deger: '%99' },
      { etiket: 'İlk yatırım yaşı', deger: '11' }
    ]
  },
  {
    slug: '80-20-kurali',
    baslik: '80/20 Kuralı (Pareto Prensibi)',
    altBaslik: 'Az ile Çoğu Elde Et',
    ikon: '⚖️',
    kategori: 'strateji',
    kisa: 'Sonuçların %80\'i, çabaların %20\'sinden gelir. Bu evrensel prensip, enerjinizi nereye yönlendireceğinizi belirler.',
    detay: `Tüm fırsatları kovalamak yerine, en yüksek getirili %20'ye odaklanın. "Hayır" demek, en güçlü zenginlik aracınızdır.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">İtalyan ekonomist Vilfredo Pareto'nun 1896'da bahçesindeki bezelyelerin %80'inin, ektiği tohumların sadece %20'sinden çıktığını fark etmesiyle başlayan bu keşif, evrenin en asimetrik ve acımasız kanunudur: Girdiler ve çıktılar eşit dağılmaz.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">İş Dünyasının Görünmez Yasası</h2>
      <p style="margin-bottom: 20px;">Ortalama bir insanın zihni doğrusaldır (lineer). 10 saat çalışırsan 10 birim kazanırsın, 20 saat çalışırsan 20 birim kazanırsın sanır. Oysa gerçek milyarderler dünyasında bu durum tam tersidir. Apple'ın devasa kârının %80'i, yüzlerce ürün arasından sadece iPhone'dan (ürünlerin %20'sinden daha azı) gelir.</p>
      
      <p style="margin-bottom: 20px;">Bir iş kurduğunuzda, müşterilerinizin %20'si toplam cironuzun %80'ini oluşturur. Daha da kötüsü, müşteri destek departmanınızın uğraştığı sorunların %80'ini, size en az para kazandıran o toksik müşterilerin %20'si yaratır. Zenginler bu asimetriyi bildikleri için <strong>kötü müşteriyi kovmaktan</strong> çekinmezler.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>"Hayır" Demenin Matematiksel Gücü:</strong> Warren Buffett'a göre Steve Jobs'un en büyük dehası, Apple'a döndüğünde üretimdeki 350 farklı ürünü 10'a indirmesidir. Pareto prensibinin ustaları, zamanlarının %80'ini çalan ama sadece %20 getiri sağlayan tüm o verimsiz toplantılara, projelere ve insanlara acımasızca "Hayır" derler.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Zenginlik Uygulaması</h3>
      <p style="margin-bottom: 20px;">Günlük hayatınızda şu acımasız soruyu sorun: <em>"Bana en büyük finansal ve mental getiriyi sağlayan o %20'lik faaliyetim nedir?"</em> Geri kalan %80'lik kısmı ya tamamen silin (delete), ya delege edin (outsource) ya da otomatize edin. Gücünüzü lazer gibi o daracık %20'ye odakladığınızda, rakipleriniz sizin nasıl bu kadar hızlı büyüdüğünüze anlam veremeyecektir.</p>
    `,
    altin_kural: 'Her şeyi yapmaya çalışmak, hiçbir şeyi tam yapamamamak demektir.',
    rakamlar: [
      { etiket: 'Sonuçların', deger: '%80' },
      { etiket: 'Çabadan', deger: '%20' },
      { etiket: 'Verimlilik', deger: '4x Artış' }
    ]
  },
  {
    slug: 'varlik-vs-yukumluluk',
    baslik: 'Varlık vs Yükümlülük',
    altBaslik: 'Zenginliğin Temel Denklemi',
    ikon: '💎',
    kategori: 'temel',
    kisa: 'Zenginler varlık satın alır, yoksullar yükümlülük satın alıp varlık sanır. Bu fark, zenginliğin DNA\'sıdır.',
    detay: `Varlık cebinize para koyar, yükümlülük cebinizden para alır. Zenginler önce varlık alır, o varlıklar da lüksleri öder.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Zengin Baba Yoksul Baba kitabının yazarı Robert Kiyosaki, finansal dünyanın en kafa karıştırıcı kavramlarını iki basit ve sarsıcı cümleye indirgemiştir: <strong>Varlık (Asset) cebinize para koyan şeydir. Yükümlülük (Liability) ise cebinizden para alan şeydir.</strong> Finansal özgürlüğün sırrı, bu iki kavram arasındaki amansız savaşı kazanmaktır.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">Orta Sınıfın En Büyük Yanılgısı: "Evim En Büyük Varlığımdır"</h2>
      <p style="margin-bottom: 20px;">Ortalama bir insan maaşı arttığında, anında gidip 5 milyon liralık bir araba veya kredisi 20 yıl sürecek gösterişli bir ev satın alır. Bunları gururla "en büyük varlıklarım" olarak adlandırır. Oysa gerçek finansal mühendislikte, <strong>içinde oturduğunuz ev veya kapınızdaki araba bir Yükümlülük'tür.</strong></p>
      
      <div style="background: rgba(239,68,68,0.05); border-left: 4px solid #ef4444; padding: 20px; border-radius: 0 12px 12px 0; margin-bottom: 30px;">
        <h4 style="color: #fca5a5; margin-top: 0; margin-bottom: 10px;">Neden Eviniz Bir Yükümlülüktür?</h4>
        <p style="color: var(--text-300); margin: 0; line-height: 1.7;">Çünkü o ev, her ay bankanıza kira yatırmaz. Tam tersine; emlak vergisi, zorunlu deprem sigortası, çatı tamiratı, aidat ve kredi faizi olarak sürekli <strong>cebinizden nakit çeker (Cash Outflow).</strong> Bankacıların o evi "varlık" olarak görmesinin tek sebebi, borcunuzu ödeyemediğinizde o eve el koyup kendilerine nakit yaratacak olmalarıdır. Yani eviniz sizin değil, <em>bankanın</em> varlığıdır!</p>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">Nakit Akışı Şeması (Sınıfların Anatomisi)</h2>
      <p style="margin-bottom: 20px;">İnsanların sosyoekonomik sınıflarını belirleyen şey ne kadar para kazandıkları değil, parayı kazandıktan sonra paranın nereye doğru aktığıdır. İşte finansal dünyanın X-Ray'i:</p>

      <div style="display: flex; flex-direction: column; gap: 20px; margin-bottom: 40px;">
        <!-- Yoksul Akışı -->
        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 20px; display: flex; align-items: center; flex-wrap: wrap; gap: 15px;">
          <div style="min-width: 120px; font-weight: bold; color: var(--text-400);">Yoksul Sınıf:</div>
          <div style="display: flex; align-items: center; gap: 10px; color: var(--text-300); font-size: 0.9rem;">
            <div style="background: #374151; padding: 8px 15px; border-radius: 4px;">Maaş (Gelir)</div>
            <span>➔</span>
            <div style="background: #ef4444; color: white; padding: 8px 15px; border-radius: 4px;">Vergi, Kira, Gıda (Gider)</div>
            <span>➔</span>
            <div style="color: var(--text-muted); font-style: italic;">0 TL (Sıfır Birikim)</div>
          </div>
        </div>
        
        <!-- Orta Sınıf Akışı -->
        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 20px; display: flex; align-items: center; flex-wrap: wrap; gap: 15px;">
          <div style="min-width: 120px; font-weight: bold; color: var(--text-300);">Orta Sınıf:</div>
          <div style="display: flex; align-items: center; gap: 10px; color: var(--text-300); font-size: 0.9rem;">
            <div style="background: #374151; padding: 8px 15px; border-radius: 4px;">Yüksek Maaş</div>
            <span>➔</span>
            <div style="background: #f59e0b; color: #111; padding: 8px 15px; border-radius: 4px; font-weight: bold;">Ev, Araba Kredisi (Yükümlülük)</div>
            <span>➔</span>
            <div style="background: #ef4444; color: white; padding: 8px 15px; border-radius: 4px;">Aylık Taksitler (Gider)</div>
          </div>
        </div>

        <!-- Zengin Sınıf Akışı -->
        <div style="background: rgba(212,175,55,0.05); border: 1px solid var(--gold-500); border-radius: 8px; padding: 20px; display: flex; align-items: center; flex-wrap: wrap; gap: 15px; box-shadow: 0 0 15px rgba(212,175,55,0.1);">
          <div style="min-width: 120px; font-weight: bold; color: var(--gold-400);">Zenginler:</div>
          <div style="display: flex; align-items: center; gap: 10px; color: var(--text-300); font-size: 0.9rem;">
            <div style="background: #374151; padding: 8px 15px; border-radius: 4px;">Sermaye</div>
            <span>➔</span>
            <div style="background: #10b981; color: #111; padding: 8px 15px; border-radius: 4px; font-weight: bold;">Hisse, Dükkan, İş (VARLIK)</div>
            <span>➔</span>
            <div style="background: var(--gold-500); color: #111; padding: 8px 15px; border-radius: 4px; font-weight: bold;">Kâr, Temettü, Kira (Gelir)</div>
          </div>
        </div>
      </div>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Gerçek Zenginliğin Kuralı:</strong> Zenginler lüks eşyalar almaz mı? Elbette alırlar. Ancak orta sınıf lüks bir arabayı "kendi maaşıyla" alırken, zenginler lüks bir arabayı "satın aldıkları varlıkların ürettiği kâr" ile bedavaya getirirler. Zenginlik, lüksü ödeyen bir makine (varlık) inşa etmektir.
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">Gerçek Varlık Sınıfları Nelerdir?</h2>
      <p style="margin-bottom: 20px;">Bordro köleliğinden (Maaşlı hayattan) kurtulmak için şu 4 gerçek varlık sınıfından bir veya birkaçını sepetinize eklemeniz gerekir:</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 40px;">
        <div style="background: rgba(255,255,255,0.02); padding: 20px; border-radius: 8px; border-top: 3px solid var(--gold-400);">
          <h4 style="color: var(--white); margin-top: 0;">1. İşletmeler ve Şirketler</h4>
          <p style="color: var(--text-400); font-size: 0.9rem; margin-bottom: 0;">Sizin fiziksel olarak orada olmanızı gerektirmeyen sistemler. Sizin yerinize çalışan personellerin olduğu veya dijital otomasyonla ürün satan (E-ticaret, SaaS) şirketler.</p>
        </div>
        <div style="background: rgba(255,255,255,0.02); padding: 20px; border-radius: 8px; border-top: 3px solid var(--gold-400);">
          <h4 style="color: var(--white); margin-top: 0;">2. Kağıt Varlıklar</h4>
          <p style="color: var(--text-400); font-size: 0.9rem; margin-bottom: 0;">Hisse senetleri (başka şirketlere ortaklık), tahviller, yatırım fonları. Bunlar yüksek likiditeye sahip, bir tıkla alınıp satılabilen ve temettü üreten varlıklardır.</p>
        </div>
        <div style="background: rgba(255,255,255,0.02); padding: 20px; border-radius: 8px; border-top: 3px solid var(--gold-400);">
          <h4 style="color: var(--white); margin-top: 0;">3. Gelir Üreten Gayrimenkul</h4>
          <p style="color: var(--text-400); font-size: 0.9rem; margin-bottom: 0;">İçinde oturduğunuz ev değil; kiraya verdiğiniz dükkan, arsa, depo veya apartman dairesi. Her ay size net bir pozitif nakit akışı sağlar.</p>
        </div>
        <div style="background: rgba(255,255,255,0.02); padding: 20px; border-radius: 8px; border-top: 3px solid var(--gold-400);">
          <h4 style="color: var(--white); margin-top: 0;">4. Fikri Mülkiyet (Dijital)</h4>
          <p style="color: var(--text-400); font-size: 0.9rem; margin-bottom: 0;">Yazdığınız bir kitap, kodladığınız bir yazılım, çektiğiniz bir YouTube videosu, patentler veya müzik telifleri. Bir kere üretilir, yıllarca pasif gelir üretir.</p>
        </div>
      </div>

      
      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">5. Zenginlerin Gizli Silahı: İyi Borç vs Kötü Borç</h2>
      <p style="margin-bottom: 20px;">Orta sınıf borçtan ölümüne korkarken (veya o borcu sadece tüketim için alırken), zenginler borcu bir <strong>kaldıraç aracı</strong> olarak kullanırlar. Yükümlülük gibi görünen bir kredi, doğru kullanıldığında dünyanın en kârlı varlığına dönüşebilir.</p>
      
      <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 30px;">
        <div style="flex: 1; min-width: 250px; background: rgba(239,68,68,0.05); border-left: 4px solid #ef4444; padding: 20px; border-radius: 8px;">
          <h4 style="color: #fca5a5; margin-top: 0; margin-bottom: 10px;">❌ Kötü Borç (Orta Sınıf)</h4>
          <p style="color: var(--text-300); font-size: 0.95rem; margin: 0;">iPhone almak, tatile gitmek veya bindiğiniz lüks arabayı yenilemek için bankadan çektiğiniz kredidir. Bu kredi her ay cebinizden nakit çeker ve satın aldığınız şeyin değeri her geçen gün düşer (Amortisman). Saf bir yükümlülüktür.</p>
        </div>
        <div style="flex: 1; min-width: 250px; background: rgba(16,185,129,0.05); border-left: 4px solid #10b981; padding: 20px; border-radius: 8px;">
          <h4 style="color: #6ee7b7; margin-top: 0; margin-bottom: 10px;">✅ İyi Borç (Zengin Sınıf)</h4>
          <p style="color: var(--text-300); font-size: 0.95rem; margin: 0;">Banka kredisiyle kiraya verilecek bir dükkan/ev almaktır. Bankaya her ay 15.000 TL kredi ödersiniz, ancak kiracı size 20.000 TL öder. Sizin cebinizden hiç para çıkmaz, kiracı bankanın borcunu öder, üstüne cebinize ayda 5.000 TL <strong>pozitif nakit akışı</strong> kalır. 10 yıl sonra dükkan tamamen sizin olur. Başkasının parasıyla varlık sahibi oldunuz!</p>
        </div>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">6. Sinsi Yükümlülük: Yaşam Tarzı Sürünmesi (Lifestyle Creep)</h2>
      <p style="margin-bottom: 20px;">Neden çok yüksek maaş alan doktorlar, mühendisler veya yöneticiler bile bazen ay sonunu getiremez? Çünkü <strong>Yaşam Tarzı Sürünmesi</strong> denilen psikolojik tuzağa düşerler. Maaşınız 50.000 TL'den 100.000 TL'ye çıktığında, beyniniz otomatik olarak "Artık daha lüks bir evde oturmalı, daha iyi bir arabaya binmeli, daha pahalı restoranlara gitmeliyim" der. Giderleriniz (yükümlülükleriniz), gelirinizle aynı oranda büyür.</p>
      
      <div style="background: rgba(255,255,255,0.02); border: 1px dashed var(--gold-500); padding: 20px; border-radius: 8px; margin-bottom: 25px;">
        <p style="color: var(--text-200); font-size: 1.05rem; margin: 0; font-style: italic;">"Geliriniz arttığında yaşam standardınızı yükseltmek yerine, <strong>yatırım standardınızı</strong> yükseltin. Ekstra gelen parayı varlık sütununa aktarın. Lüksü, o varlıklar size yeterince para kazandırmaya başladığında satın alın."</p>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">7. Param Yoksa Nasıl Varlık Alacağım? (Ter Sermayesi)</h2>
      <p style="margin-bottom: 20px;">Birçok kişinin en büyük bahanesi <em>"Varlık alacak param yok ki!"</em> şeklindedir. Oysa günümüz dünyasında (özellikle dijital çağda) varlık yaratmak için paraya ihtiyacınız yoktur. İhtiyacınız olan şey <strong>Ter Sermayesi (Sweat Equity)</strong>'dir.</p>
      <ul style="color: var(--text-secondary); margin-bottom: 30px;">
        <li>Vaktinizi Netflix izlemek (Yükümlülük) yerine kodlama öğrenip bir yazılım geliştirmeye (Varlık) ayırabilirsiniz.</li>
        <li>Sosyal medyada başkalarının hayatına bakarak zaman öldürmek yerine, kendi ilgi alanınızda bir kitle oluşturup (Audience - Dijital Varlık) bundan para kazanabilirsiniz.</li>
        <li>Hafta sonları uyumak yerine, bir e-kitap yazıp Amazon'a koyabilirsiniz (Fikri Mülkiyet Varlığı).</li>
      </ul>
      <p style="margin-bottom: 20px;">Paranız yoksa zamanınız ve enerjiniz vardır. Bunları tüketerek değil, bir şeyler <strong>inşa ederek</strong> yatırıma dönüştürebilirsiniz.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">8. Nihai Varlık: Zaman Milyonerliği (Time Billionaire)</h2>
      <p style="margin-bottom: 20px;">Sonuç olarak bütün bu Varlık vs. Yükümlülük oyununun tek bir amacı vardır: <strong>Zamanınızı Geri Satın Almak.</strong></p>
      <p style="margin-bottom: 20px;">Dünyanın en zengin insanı bankada milyarları olan değil, sabah uyandığında takvimine bakıp <em>"Bugün tamamen kendi istediğim şeyleri, kendi istediğim insanlarla yapacağım"</em> diyebilen kişidir. Satın aldığınız hisseler, kurduğunuz dijital işler, aldığınız dükkanlar aslında size para kazandırmaz; size <strong>özgürlüğünüzü ve zamanınızı</strong> kazandırır. Maaşlı bir işte "zamanınızı paraya satarsınız", varlık sütununda ise "paranız size zaman satın alır".</p>


      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">9. Vergi Kodlarının Acımasız Sırrı</h2>
      <p style="margin-bottom: 20px;">Dünyadaki tüm vergi sistemleri <strong>"Tüketenleri" cezalandırmak, "Üretenleri" ve "İstihdam Sağlayanları" ödüllendirmek</strong> üzerine kuruludur. Robert Kiyosaki bu haksız gibi görünen sistemi şu basit şemayla açıklar:</p>
      
      <div style="background: rgba(255,255,255,0.02); padding: 25px; border-radius: 12px; margin-bottom: 30px;">
        <ul style="color: var(--text-secondary); margin-bottom: 0; line-height: 1.8;">
          <li><strong style="color: #ef4444;">Çalışanların Döngüsü:</strong> Para Kazan ➔ <strong>Devlete Vergini Öde</strong> ➔ Kalan Parayla Yaşa. (En ağır vergiyi her zaman maaşlı çalışanlar peşin olarak öder).</li>
          <li><strong style="color: #10b981;">Varlık Sahiplerinin (Şirketlerin) Döngüsü:</strong> Para Kazan ➔ <strong>Parayı İşin/Kendin İçin Harca</strong> ➔ Sadece arta kalan para üzerinden vergi öde.</li>
        </ul>
      </div>
      <p style="margin-bottom: 20px;">Bir şirket (Varlık) sahibi olduğunuzda, yemeklerinizi, arabanızı, telefonunuzu ve seyahatlerinizi "şirket gideri" olarak gösterebilir, vergi matrahından düşersiniz. Maaşlı çalışan (Bordro Kölesi) ise kazandığı paranın üçte birini daha eline geçmeden devlete kaptırır. Varlık inşa etmek sadece para kazanmak değil, yasal yollardan vergiden korunmaktır.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">10. Sert Varlıklar (Hard Assets) vs Eriyebilen Yükümlülükler</h2>
      <p style="margin-bottom: 20px;">Paranın sınırsızca basıldığı ve enflasyonun her şeyi yuttuğu bir çağda yaşıyoruz. Bankada tuttuğunuz nakit para bir "Varlık" gibi görünse de, aslında alım gücü her gün düşen gizli bir "Yükümlülük"tür.</p>
      
      <div style="display: flex; gap: 15px; margin-bottom: 30px;">
        <div style="flex: 1; border-top: 3px solid var(--gold-400); background: rgba(212,175,55,0.05); padding: 20px; border-radius: 0 0 8px 8px;">
          <h4 style="color: var(--gold-300); margin-top: 0; font-size: 1.1rem;">Sert Varlıklar (Hard Assets)</h4>
          <p style="color: var(--text-300); font-size: 0.9rem; margin: 0;">Arzı kısıtlıdır. Sınırlı sayıdaki gayrimenkuller, altın veya sınırlı üretimli dijital varlıklar (Bitcoin). Hükümetler bunları matbaada basamaz. Enflasyonda fiyatları fırlayarak sizi korur.</p>
        </div>
        <div style="flex: 1; border-top: 3px solid #3b82f6; background: rgba(59,130,246,0.05); padding: 20px; border-radius: 0 0 8px 8px;">
          <h4 style="color: #60a5fa; margin-top: 0; font-size: 1.1rem;">Dijital Kaldıraç (Medya/Kod)</h4>
          <p style="color: var(--text-300); font-size: 0.9rem; margin: 0;">Yazılımlar ve İnternet Medyası kopyalanma maliyeti sıfır olan mucizevi varlıklardır. Bir kere kod yazarsınız veya bir video çekersiniz; milyonlarca insan siz uyurken onu tüketebilir.</p>
        </div>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">11. Zenginliğin 3 Aşamalı Yol Haritası</h2>
      <p style="margin-bottom: 20px;">Bu makaleden sonra hayatınızı üç net aşamaya bölmelisiniz. Şuan hangisindesiniz?</p>
      <div style="background: rgba(0,0,0,0.4); padding: 25px; border-radius: 12px; border-left: 4px solid var(--gold-500); margin-bottom: 40px;">
        <ol style="color: var(--text-secondary); margin: 0; padding-left: 20px; line-height: 1.8;">
          <li><strong style="color: #ef4444;">Faz 1: Hayatta Kalma (Survival)</strong><br> Maaş = Giderler. Maaşınız kesildiği an 1 ay içinde iflas edersiniz. Toplumun %80'i ölene kadar bu fazda kalır.</li>
          <li><strong style="color: #f59e0b;">Faz 2: Güvenlik (Security)</strong><br> Varlıklarınız var, net değeriniz pozitif. Acil bir durumda satıp 2-3 yıl yaşayabilirsiniz. Ancak Varlıklarınızın "Aylık Getirisi", sizin "Aylık Giderlerinizi" tam karşılamaz. Hala çalışmak zorundasınız.</li>
          <li><strong style="color: #10b981;">Faz 3: Mutlak Özgürlük (Freedom)</strong><br> Varlıklarınızın ürettiği <em>Pasif Nakit Akışı</em>, sizin lüks yaşam giderlerinizden bile fazladır. Artık çalışmak bir mecburiyet değil, sadece bir hobi tercihidir. <strong>Oyunu bitirdiniz.</strong></li>
        </ol>
      </div>


      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">12. Asimetrik Varlıklar (Asymmetric Risk) ve Siyah Kuğular</h2>
      <p style="margin-bottom: 20px;">Dünyanın en zengin yatırımcıları her zaman haklı çıkarak değil, "Asimetrik Risk" barındıran varlıklara yatırım yaparak zengin olurlar. Asimetri, kaybedeceğiniz miktarın <em>sınırlı</em>, kazanacağınız miktarın ise <em>sınırsız</em> olması durumudur.</p>
      
      <div style="background: rgba(0,0,0,0.5); padding: 25px; border-radius: 8px; border-left: 3px solid #a855f7; margin-bottom: 30px;">
        <ul style="color: var(--text-secondary); margin: 0; line-height: 1.7;">
          <li><strong>Simetrik Risk (Sıradan Varlık):</strong> Bir şirket hissesi alırsınız. İflas ederse %100 kaybedersiniz. İşler çok iyi giderse %100-%200 kazanırsınız.</li>
          <li><strong>Asimetrik Varlık (Melek Yatırımcılık / Erken Aşama Kripto / Start-up):</strong> 10.000 TL yatırırsınız. En kötü senaryoda paranız sıfırlanır (Kayıp limiti sabittir: 10.000 TL). Ancak işler iyi giderse (bir "Siyah Kuğu" olayı yaşanırsa), o para 1.000.000 TL'ye çıkabilir (Getiri limiti yoktur: %10.000).</li>
        </ul>
        <p style="color: var(--text-300); margin-top: 15px; margin-bottom: 0;">Zenginler, portföylerinin ufak bir kısmıyla sürekli asimetrik varlıklara "oltalar" atarlar. 9'u batsa bile tutan 1 tanesi tüm zararları kapatıp onları multi-milyoner yapar.</p>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">13. Bilanço Dışı Yükümlülükler (Off-Balance-Sheet Liabilities)</h2>
      <p style="margin-bottom: 20px;">Ev kredisini veya kredi kartı borcunu banka ekstresinde görebilirsiniz. Ancak insanı gizlice iflasa sürükleyen asıl yükümlülükler kağıt üzerinde yazmayanlardır:</p>
      
      <div style="display: grid; grid-template-columns: 1fr; gap: 15px; margin-bottom: 30px;">
        <div style="background: rgba(239,68,68,0.05); padding: 20px; border-radius: 8px; border-right: 3px solid #ef4444;">
          <strong style="color: #fca5a5; display: block; margin-bottom: 5px;">A. Sağlık İhmali (Ertelenmiş Hastane Faturası)</strong>
          <span style="color: var(--text-400); font-size: 0.95rem;">Bedeniniz sizin en büyük varlığınızdır (Earning Power). Spor yapmamak ve kötü beslenmek bugün bedavadır ancak 50 yaşında karşınıza çıkacak olan kalp ameliyatı ve ilaç faturaları, dünyanın en acımasız "gecikme faizine" sahip yükümlülüğüdür.</span>
        </div>
        <div style="background: rgba(239,68,68,0.05); padding: 20px; border-radius: 8px; border-right: 3px solid #ef4444;">
          <strong style="color: #fca5a5; display: block; margin-bottom: 5px;">B. Toksik İlişkiler ve Çevre</strong>
          <span style="color: var(--text-400); font-size: 0.95rem;">Sürekli şikayet eden, sizi lüks tüketim yarışına sokan ("Hadi kanka şu mekana gidelim, hesabı böleriz") arkadaş çevresi, net değerinizden her ay gizlice para çeken görünmez bir vergi dairesidir.</span>
        </div>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">14. Network (Ağ) Varlığı: Metcalfe Yasası</h2>
      <p style="margin-bottom: 20px;"><em>"Ağınız, Net Değerinizdir" (Your network is your net worth).</em> Teknolojide <strong>Metcalfe Yasası</strong>, bir ağın değerinin kullanıcı sayısının karesiyle orantılı olarak arttığını söyler. (2 kullanıcılı bir ağın değeri 4 ise, 10 kullanıcılı bir ağın değeri 100'dür).</p>
      <p style="margin-bottom: 20px;">Bu kural kişisel varlık inşasında da geçerlidir. Eğer etrafınızda farklı sektörlerde uzmanlaşmış, zeki ve dürüst 10 insan varsa, sizin "İlişki Varlığınız" (Relationship Asset) 100 kat daha değerlidir. Doğru insanlara ulaşabilme kapasitesi, bankadaki nakitten daha hızlı kapı açar ve sıfırdan şirket kurmanızı sağlar.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">15. Zenginlerin Zırhı: "Hiçbir Şeye Sahip Olma, Her Şeyi Kontrol Et"</h2>
      <p style="margin-bottom: 20px;">Milyarder John D. Rockefeller'ın en ünlü sözü şudur: <strong>"Kendi adına hiçbir şeye sahip olma, ama her şeyi kontrol et."</strong></p>
      
      <div style="background: rgba(255,255,255,0.02); padding: 25px; border-radius: 12px; border-left: 4px solid var(--gold-500); margin-bottom: 40px;">
        <p style="color: var(--text-300); font-size: 0.95rem; line-height: 1.7; margin: 0;">Orta sınıf, aldığı evi ve arabayı kendi adlarına kaydettirmekten gurur duyar. Ancak bir trafik kazası yapar ve dava edilirlerse, avukatlar tüm şahsi varlıklarına el koyabilir. Zenginler ise malikanelerini, arabalarını ve hisselerini <strong>Şirketler, Vakıflar veya Trust'lar</strong> (Güven Fonları) üzerine kaydederler. Şahıs olarak kağıt üzerinde "fakir" görünürler, kendi adlarına hiçbir şey yoktur (dolayısıyla onlara dava açıldığında alınacak bir şey de yoktur). Ancak o şirketlerin "kontrolü" onlardadır. Bu stratejiye <strong>Varlık Koruması (Asset Protection)</strong> denir ve zenginlik oyununun en son seviyesidir.</p>
      </div>


      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">16. Nihai İllüzyon: Nakit Para Kimin Yükümlülüğüdür?</h2>
      <p style="margin-bottom: 20px;">Bankadaki milyonlarca liranızın size ait bir varlık olduğunu mu sanıyorsunuz? Finansın en derin tavşan deliğine hoş geldiniz: <strong>Fiat (İtibari) Para Sistemi.</strong></p>
      
      <div style="background: rgba(239,68,68,0.05); border-left: 4px solid #ef4444; padding: 25px; border-radius: 0 12px 12px 0; margin-bottom: 30px;">
        <p style="color: var(--text-300); font-size: 0.95rem; line-height: 1.7; margin: 0;">Elinizde tuttuğunuz nakit para (TL, Dolar, Euro fark etmez), merkez bankalarının bilançosunda bir "Varlık" değil, bir <strong>"Yükümlülük" (Borç Senedi)</strong> olarak geçer. Siz, saatlerinizi ve yıllarınızı harcayarak Merkez Bankası'nın sınırsızca ve sıfır maliyetle üretebildiği kağıtları biriktiriyorsunuz. Eğer sadece "nakit" biriktiriyorsanız, sistemin en büyük kaybedenisiniz; çünkü başka bir kurumun yükümlülüğünü kendi varlığınız sanıyorsunuz. Gerçek zenginler nakit tutmazlar; nakdi anında <em>hükümetlerin basamayacağı</em> varlıklara (arsa, şirket, emtia) dönüştürürler.</p>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">17. Kognitif (Zihinsel) Yükümlülükler: Dikkat Ekonomisi</h2>
      <p style="margin-bottom: 20px;">Varlık yaratmak için gereken en önemli sermaye para değil, <strong>Odaklanma (Focus)</strong> kapasitesidir. Modern dünyadaki en tehlikeli yükümlülükler cebinizden para çalanlar değil, zihninizden "dikkat" çalanlardır.</p>
      
      <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 30px;">
        <div style="flex: 1; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 20px; border-radius: 8px;">
          <h4 style="color: var(--gold-400); margin-top: 0;">Zihinsel Varlıklar</h4>
          <p style="color: var(--text-400); font-size: 0.9rem; margin: 0;">Derin çalışma (Deep Work) becerisi, duygusal kontrol, okuma alışkanlığı, stratejik düşünme süreleri. Bunlar size para kazandıran sistemleri kurmanız için gereken "işlemci gücüdür."</p>
        </div>
        <div style="flex: 1; background: rgba(0,0,0,0.4); border: 1px solid rgba(239,68,68,0.2); padding: 20px; border-radius: 8px;">
          <h4 style="color: #fca5a5; margin-top: 0;">Zihinsel Yükümlülükler</h4>
          <p style="color: var(--text-400); font-size: 0.9rem; margin: 0;">Sürekli bildirim gelen telefonlar, Doomscrolling (sonsuz kaydırma), kontrol edemeyeceğiniz siyasi gündemler üzerine saatlerce tartışmak. Zihninizi yorar, karar yorgunluğuna (Decision Fatigue) sokar ve varlık inşa etme enerjinizi sömürür.</p>
        </div>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">18. Nesiller Arası Servet Laneti: "3 Kuşak Kuralı"</h2>
      <p style="margin-bottom: 20px;">Bütün bu kuralları uyguladınız ve mükemmel varlıklar yarattınız diyelim. Karşınıza finans tarihinin en acımasız istatistiği çıkar: <strong>"İlk nesil inşa eder, ikinci nesil harcar, üçüncü nesil yok eder."</strong></p>
      <p style="margin-bottom: 20px;">Zenginlerin en büyük kabusu, kendi çocuklarının birer <em>yükümlülüğe</em> dönüşmesidir. Çünkü varlık yaratma sürecindeki acıyı ve disiplini çekmemiş bir çocuk, o varlıkları sadece satılacak birer "harçlık" olarak görür. Bu yüzden asıl masterclass seviyesi varlıkları bırakmak değil, o varlıkları <strong>kurallara bağlamaktır.</strong></p>
      
      <div style="background: rgba(16,185,129,0.05); padding: 25px; border-radius: 12px; border-left: 4px solid #10b981; margin-bottom: 40px;">
        <p style="color: var(--text-300); font-size: 0.95rem; line-height: 1.7; margin: 0;">Çok zengin aileler çocuklarına şirket veya tapu bırakmazlar. Her şeyi bir "Aile Vakfına" (Family Trust) devrederler. Çocuklara sadece şu şartlarla para ödenir: <em>"Üniversiteyi bitirirsen fon sana şu kadar destek olur, kendi işini kurarsan vakıf senin işine şu kadar yatırım yapar. Ancak ana sermayeye dokunamazsın!"</em> Yani zenginler, aptalca davranma ihtimali olan mirasçılarını bile finansal bir sistemle kontrol altına alarak, varlıkların 100 yıl boyunca yok olmasını engellerler.</p>
      </div>

<h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 60px; margin-bottom: 20px;">İnteraktif: Finansal Röntgen (X-Ray)</h2>
      <p style="margin-bottom: 20px;">Şimdi sıra sizde. Kendi kişisel bilançonuzu dürüstçe çıkarın. Bakalım "Zenginlik Akışı"na mı sahipsiniz, yoksa "Orta Sınıf Tuzağı"nda mısınız?</p>

      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); border-radius: 12px; padding: 30px; margin: 30px 0; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
        
        <div style="display: flex; flex-wrap: wrap; gap: 30px; margin-bottom: 30px;">
          
          <!-- VARLIKLAR KOLONU -->
          <div style="flex: 1; min-width: 250px;">
            <h3 style="color: #10b981; border-bottom: 1px solid rgba(16,185,129,0.3); padding-bottom: 10px; margin-top: 0;">A. Varlıklarınız (Nakit Giren)</h3>
            <p style="font-size: 0.8rem; color: var(--text-400);">Her ay size ne kadar para getiriyor?</p>
            
            <div style="margin-bottom: 15px;">
              <label style="display: block; color: var(--text-300); font-size: 0.9rem; margin-bottom: 5px;">Hisse Senedi / Temettü (Aylık)</label>
              <input type="number" id="v-hisse" value="0" class="calc-input-varlik" style="width: 100%; background: rgba(0,0,0,0.5); border: 1px solid rgba(16,185,129,0.3); color: var(--white); padding: 10px 15px; border-radius: 6px; font-family: inherit; font-size: 1rem; outline: none;">
            </div>
            <div style="margin-bottom: 15px;">
              <label style="display: block; color: var(--text-300); font-size: 0.9rem; margin-bottom: 5px;">Kira Gelirleri (Net Aylık)</label>
              <input type="number" id="v-kira" value="0" class="calc-input-varlik" style="width: 100%; background: rgba(0,0,0,0.5); border: 1px solid rgba(16,185,129,0.3); color: var(--white); padding: 10px 15px; border-radius: 6px; font-family: inherit; font-size: 1rem; outline: none;">
            </div>
            <div style="margin-bottom: 15px;">
              <label style="display: block; color: var(--text-300); font-size: 0.9rem; margin-bottom: 5px;">Dijital Ürün / Telif (Aylık)</label>
              <input type="number" id="v-dijital" value="0" class="calc-input-varlik" style="width: 100%; background: rgba(0,0,0,0.5); border: 1px solid rgba(16,185,129,0.3); color: var(--white); padding: 10px 15px; border-radius: 6px; font-family: inherit; font-size: 1rem; outline: none;">
            </div>
            <div style="margin-bottom: 15px;">
              <label style="display: block; color: var(--text-300); font-size: 0.9rem; margin-bottom: 5px;">Faiz Gelirleri (Aylık)</label>
              <input type="number" id="v-faiz" value="0" class="calc-input-varlik" style="width: 100%; background: rgba(0,0,0,0.5); border: 1px solid rgba(16,185,129,0.3); color: var(--white); padding: 10px 15px; border-radius: 6px; font-family: inherit; font-size: 1rem; outline: none;">
            </div>
            
            <div style="margin-top: 20px; font-size: 1.1rem; color: #10b981; font-weight: bold; text-align: right;">
              Toplam Varlık Getirisi: <span id="v-toplam">0</span> TL
            </div>
          </div>

          <!-- YÜKÜMLÜLÜKLER KOLONU -->
          <div style="flex: 1; min-width: 250px;">
            <h3 style="color: #ef4444; border-bottom: 1px solid rgba(239,68,68,0.3); padding-bottom: 10px; margin-top: 0;">B. Yükümlülükleriniz (Nakit Çıkan)</h3>
            <p style="font-size: 0.8rem; color: var(--text-400);">Her ay zorunlu olarak ne kadar borç ödüyorsunuz?</p>
            
            <div style="margin-bottom: 15px;">
              <label style="display: block; color: var(--text-300); font-size: 0.9rem; margin-bottom: 5px;">Ev Kredisi / Yüksek Kira</label>
              <input type="number" id="y-ev" value="0" class="calc-input-yuk" style="width: 100%; background: rgba(0,0,0,0.5); border: 1px solid rgba(239,68,68,0.3); color: var(--white); padding: 10px 15px; border-radius: 6px; font-family: inherit; font-size: 1rem; outline: none;">
            </div>
            <div style="margin-bottom: 15px;">
              <label style="display: block; color: var(--text-300); font-size: 0.9rem; margin-bottom: 5px;">Araba Kredisi / Yakıt / Kasko</label>
              <input type="number" id="y-araba" value="0" class="calc-input-yuk" style="width: 100%; background: rgba(0,0,0,0.5); border: 1px solid rgba(239,68,68,0.3); color: var(--white); padding: 10px 15px; border-radius: 6px; font-family: inherit; font-size: 1rem; outline: none;">
            </div>
            <div style="margin-bottom: 15px;">
              <label style="display: block; color: var(--text-300); font-size: 0.9rem; margin-bottom: 5px;">Kredi Kartı Asgari/Taksit</label>
              <input type="number" id="y-kart" value="0" class="calc-input-yuk" style="width: 100%; background: rgba(0,0,0,0.5); border: 1px solid rgba(239,68,68,0.3); color: var(--white); padding: 10px 15px; border-radius: 6px; font-family: inherit; font-size: 1rem; outline: none;">
            </div>
            <div style="margin-bottom: 15px;">
              <label style="display: block; color: var(--text-300); font-size: 0.9rem; margin-bottom: 5px;">İhtiyaç / Tüketici Kredisi</label>
              <input type="number" id="y-kredi" value="0" class="calc-input-yuk" style="width: 100%; background: rgba(0,0,0,0.5); border: 1px solid rgba(239,68,68,0.3); color: var(--white); padding: 10px 15px; border-radius: 6px; font-family: inherit; font-size: 1rem; outline: none;">
            </div>

            <div style="margin-top: 20px; font-size: 1.1rem; color: #ef4444; font-weight: bold; text-align: right;">
              Toplam Yükümlülük Çıkışı: <span id="y-toplam">0</span> TL
            </div>
          </div>
          
        </div>
        
        <button id="xray-btn" style="background: linear-gradient(135deg, var(--gold-500), var(--gold-700)); color: #111; border: none; padding: 15px 24px; font-weight: 900; border-radius: 8px; cursor: pointer; width: 100%; font-size: 1.25rem; transition: transform 0.2s, box-shadow 0.2s; text-transform: uppercase; letter-spacing: 2px;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 5px 15px rgba(212,175,55,0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">FİNANSAL RÖNTGENİMİ ÇEK 🔍</button>
        
        <div id="xray-result" style="margin-top: 30px; padding: 25px; background: rgba(0,0,0,0.6); border-radius: 12px; display: none; text-align: center; border: 2px solid transparent;">
          <h3 id="xray-title" style="margin-top: 0; font-family: var(--font-display); font-size: 2rem;">Sonuç</h3>
          <p id="xray-desc" style="color: var(--text-300); font-size: 1.1rem; line-height: 1.6;"></p>
          <div style="font-size: 3rem; font-family: var(--font-display); font-weight: 900; margin: 20px 0;" id="xray-net">0 TL</div>
          <p style="color: var(--text-muted); font-size: 0.85rem; margin: 0;">* Net Pasif Nakit Akışı (Maaş Hariçtir)</p>
        </div>
      </div>

      <script>
        (function() {
          const initXRay = () => {
            const btn = document.getElementById('xray-btn');
            if(!btn) return;
            
            btn.addEventListener('click', function() {
              // Varlıklar
              const vHisse = parseFloat(document.getElementById('v-hisse').value) || 0;
              const vKira = parseFloat(document.getElementById('v-kira').value) || 0;
              const vDijital = parseFloat(document.getElementById('v-dijital').value) || 0;
              const vFaiz = parseFloat(document.getElementById('v-faiz').value) || 0;
              const totalVarlik = vHisse + vKira + vDijital + vFaiz;
              
              // Yükümlülükler
              const yEv = parseFloat(document.getElementById('y-ev').value) || 0;
              const yAraba = parseFloat(document.getElementById('y-araba').value) || 0;
              const yKart = parseFloat(document.getElementById('y-kart').value) || 0;
              const yKredi = parseFloat(document.getElementById('y-kredi').value) || 0;
              const totalYuk = yEv + yAraba + yKart + yKredi;
              
              const netFlow = totalVarlik - totalYuk;
              
              const formatter = new Intl.NumberFormat('tr-TR', {
                style: 'currency',
                currency: 'TRY',
                maximumFractionDigits: 0
              });
              
              document.getElementById('v-toplam').innerText = formatter.format(totalVarlik);
              document.getElementById('y-toplam').innerText = formatter.format(totalYuk);
              
              const resultDiv = document.getElementById('xray-result');
              const titleEl = document.getElementById('xray-title');
              const descEl = document.getElementById('xray-desc');
              const netEl = document.getElementById('xray-net');
              
              netEl.innerText = formatter.format(netFlow);
              
              if (netFlow > 0) {
                resultDiv.style.borderColor = '#10b981';
                titleEl.style.color = '#10b981';
                titleEl.innerText = 'Tebrikler: Zenginlik Akışı 🚀';
                descEl.innerText = 'Mükemmel! Siz uyurken varlıklarınız sizin yerinize çalışıyor ve borçlarınızı fazlasıyla ödüyor. Maaşınız kesilse bile hayatınıza bu pozitif nakit akışıyla devam edebilirsiniz.';
                netEl.style.color = '#10b981';
              } else if (netFlow < 0) {
                resultDiv.style.borderColor = '#ef4444';
                titleEl.style.color = '#ef4444';
                titleEl.innerText = 'Tehlike: Orta Sınıf Tuzağı 🚨';
                descEl.innerText = 'Sahip olduğunuzu sandığınız şeyler aslında size sahip! Yükümlülükleriniz her ay cebinizi gizlice boşaltıyor. Varlık üretmezseniz hayat boyu o borçları ödemek için bir patrona muhtaçsınız.';
                netEl.style.color = '#ef4444';
              } else {
                resultDiv.style.borderColor = '#f59e0b';
                titleEl.style.color = '#f59e0b';
                titleEl.innerText = 'Riskli: Fare Yarışı (Rat Race) ⚠️';
                descEl.innerText = 'Ne uzuyor ne kısalıyorsunuz. Gelen para olduğu gibi çıkıyor. En ufak bir krizde negatife düşersiniz. Acilen yeni bir varlık sınıfı inşa etmeye başlamalısınız.';
                netEl.style.color = '#f59e0b';
              }
              
              resultDiv.style.display = 'block';
              
              if (resultDiv.animate) {
                resultDiv.animate([
                  { transform: 'scale(0.95)', opacity: 0 },
                  { transform: 'scale(1)', opacity: 1 }
                ], { duration: 400, easing: 'ease-out' });
              }
            });
          };
          
          if(document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initXRay);
          } else {
            initXRay();
          }
        })();
      </script>

      <p style="margin-bottom: 20px;">Gerçek servetinizi görmek için evinizi ve arabanızı hesaplamadan çıkarın. Geriye kalan ve sizin hiçbir efor sarf etmenize gerek kalmadan, siz uyurken bile size nakit akışı üreten sistemleriniz (dijital ürünleriniz, hisseleriniz, gayrimenkulleriniz) var mı? Cevap hayırsa, dünyanın en lüks evinde bile yaşasanız, "bordro kölesi"siniz demektir.</p>
    `,
    altin_kural: 'Lüks eşyalarınızı maaşınızla değil, yatırımlarınızın getirisiyle ödeyin.',
    rakamlar: [
      { etiket: 'Varlık Tanımı', deger: '+ Nakit Akışı' },
      { etiket: 'Yükümlülük', deger: '- Nakit Çıkışı' },
      { etiket: 'Zenginlik Testi', deger: 'Uyurken Kazan' }
    ]
  },
  {
    slug: 'gelir-akislari',
    baslik: '7 Gelir Akışı',
    altBaslik: 'Milyonerlerin Sırrı',
    ikon: '🌊',
    kategori: 'strateji',
    kisa: 'Ortalama bir milyonerin 7 farklı gelir akışı vardır. Tek gelir kaynağına bağımlılık, finansal en büyük risktir.',
    detay: `Gelir kaynaklarınızı çeşitlendirerek finansal kalenizin surlarını aşılmaz hale getirin.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Bir masanın tek bir bacağı varsa, o bacak kırıldığında masa devrilir. Ancak bir masanın yedi bacağı varsa, üçü kırılsa dahi o masa ayakta kalmaya devam eder. Ortalama bir milyonerin IRS (ABD Vergi Dairesi) kayıtlarına göre tam olarak 7 farklı gelir akışı vardır. Ancak bu sadece bir sayıdan ibaret değildir; bu, <strong>Finansal Antikırılganlık (Antifragility)</strong> kalkanıdır.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">1. Gelirin Anatomisi: Vergi Dairesinin Röntgeni</h2>
      <p style="margin-bottom: 20px;">Milyonerler parayı tek bir kaynaktan (patronun iki dudağı arasından) beklemezler. Ancak sanılanın aksine bu 7 akış "eşit" büyüklükte değildir. Genellikle 1 ana motor (iş veya yüksek maaş) tüm nakdi üretir, diğer 6 akış ise bu paranın yatırıma dönüşmüş <em>pasif</em> halleridir. İşte IRS verilerindeki o 7 meşhur akış:</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; margin-bottom: 40px;">
        <div style="background: rgba(0,0,0,0.3); padding: 15px; border-left: 3px solid #ef4444;">
          <strong style="color: #fca5a5; font-size: 1.1rem; display: block; margin-bottom: 5px;">1. Kazanılmış Gelir (Maaş)</strong>
          <span style="color: var(--text-400); font-size: 0.9rem;">Aktif olarak zaman satılarak kazanılır. En yüksek vergi dilimindedir (%30-40). Ancak "Tohum Sermayesi" yaratmak için şarttır.</span>
        </div>
        <div style="background: rgba(0,0,0,0.3); padding: 15px; border-left: 3px solid #f59e0b;">
          <strong style="color: #fcd34d; font-size: 1.1rem; display: block; margin-bottom: 5px;">2. Ticari (Kâr) Geliri</strong>
          <span style="color: var(--text-400); font-size: 0.9rem;">Bir hizmet veya ürün satılarak elde edilen ticari fark (Al-Sat, E-ticaret, Danışmanlık). Ölçeklenebilir ilk adımdır.</span>
        </div>
        <div style="background: rgba(0,0,0,0.3); padding: 15px; border-left: 3px solid #10b981;">
          <strong style="color: #6ee7b7; font-size: 1.1rem; display: block; margin-bottom: 5px;">3. Kira Geliri</strong>
          <span style="color: var(--text-400); font-size: 0.9rem;">Gayrimenkul, araba, makine veya arsa kiralayarak elde edilir. Giderler vergiden düşülebildiği için çok verimlidir.</span>
        </div>
        <div style="background: rgba(0,0,0,0.3); padding: 15px; border-left: 3px solid #3b82f6;">
          <strong style="color: #93c5fd; font-size: 1.1rem; display: block; margin-bottom: 5px;">4. Temettü (Kâr Payı) Geliri</strong>
          <span style="color: var(--text-400); font-size: 0.9rem;">Borsadaki büyük şirketlere (Coca-Cola, Tüpraş) ortak olup, onların devasa işçilerinin ürettiği kârdan çeyreklik veya yıllık pay almaktır.</span>
        </div>
        <div style="background: rgba(0,0,0,0.3); padding: 15px; border-left: 3px solid #8b5cf6;">
          <strong style="color: #c4b5fd; font-size: 1.1rem; display: block; margin-bottom: 5px;">5. Sermaye Kazancı (Capital Gains)</strong>
          <span style="color: var(--text-400); font-size: 0.9rem;">Ucuza alınan bir varlığın (hisse, ev, arsa, Bitcoin) değerlendiğinde satılmasıyla ortaya çıkan toplu "Büyük Vuruş" parasıdır.</span>
        </div>
        <div style="background: rgba(0,0,0,0.3); padding: 15px; border-left: 3px solid #ec4899;">
          <strong style="color: #f9a8d4; font-size: 1.1rem; display: block; margin-bottom: 5px;">6. Faiz / Borç Verme Geliri</strong>
          <span style="color: var(--text-400); font-size: 0.9rem;">Mevduat faizi veya hazine bonosundan gelir. Güvenli limandır ancak enflasyona karşı koruması zayıftır.</span>
        </div>
        <div style="background: rgba(0,0,0,0.3); padding: 15px; border-left: 3px solid var(--gold-500);">
          <strong style="color: var(--gold-300); font-size: 1.1rem; display: block; margin-bottom: 5px;">7. Telif (Royalty) Geliri</strong>
          <span style="color: var(--text-400); font-size: 0.9rem;">"Bir kere yap, sonsuza kadar kazan." Yazılım kodları, kitaplar, YouTube videoları, müzikler, lisanslar. Yeni çağın en güçlü akışıdır.</span>
        </div>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">2. Kazanç Türlerinin Vergi Çarpışması</h2>
      <p style="margin-bottom: 20px;">7 gelir akışı kulağa hoş gelse de, hepsi eşit yaratılmamıştır. Zenginlik oyunu, gelirinizi "Aktif (Maaşlı) Kutudan" alıp, "Pasif Kutulara" taşımaktır. Neden mi?</p>
      
      <div style="background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 30px; overflow: hidden;">
        <table style="width: 100%; border-collapse: collapse; color: var(--text-300);">
          <thead>
            <tr style="background: rgba(0,0,0,0.5); border-bottom: 1px solid var(--glass-border);">
              <th style="padding: 15px; text-align: left; color: var(--white);">Gelir Kutusu</th>
              <th style="padding: 15px; text-align: left; color: var(--white);">Efor Türü</th>
              <th style="padding: 15px; text-align: left; color: #ef4444;">Vergi Yükü</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--glass-border);">
              <td style="padding: 15px;"><strong>Kazanılmış Gelir (Maaş)</strong></td>
              <td style="padding: 15px;">Fiziksel Zaman Satışı (Sınırlı)</td>
              <td style="padding: 15px; color: #ef4444; font-weight: bold;">En Yüksek (%30-40)</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--glass-border);">
              <td style="padding: 15px;"><strong>Portföy Geliri (Hisse, Bono)</strong></td>
              <td style="padding: 15px;">Para sizin için çalışır.</td>
              <td style="padding: 15px; color: #f59e0b;">Orta Seviye (Stopaj / Kurumlar)</td>
            </tr>
            <tr>
              <td style="padding: 15px;"><strong>Pasif Gelir (Kira, Telif, İşletme)</strong></td>
              <td style="padding: 15px;">Sistemler sizin için çalışır. (Sınırsız)</td>
              <td style="padding: 15px; color: #10b981; font-weight: bold;">En Düşük (Amortisman indirimleri)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Sıfırdan Başlayanların Ölümcül Hatası:</strong> Finansal okuryazarlığı yeni keşfedenler, aynı anda 7 gelir akışını birden (Borsa, E-ticaret, Emlak, YouTube...) inşa etmeye çalışıp <strong>tükenmişlik sendromuna (Burnout)</strong> girerler. Bu imkansızdır. Gerçek strateji: Ana mesleğinizle (1. Akış) "sermaye" üretmek ve bu sermayeyi sadece tek bir ek akışa (Örn: 2. Akış Temettü) odaklayıp otomatize etmektir. Su borusu tamamen bağlandıktan SONRA diğerlerine geçilir. Odaklanmadan imparatorluk kurulmaz.
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">3. Gerçekçi Oyun Planı: Akışları Birleştirmek</h2>
      <p style="margin-bottom: 20px;">Eğer bugün tek geliriniz maaşınızsa (Kırılgan Yapı), ilk hedefiniz 7 akış birden değil, sadece <strong>ikinci bir akış</strong> (Güvenlik Yapısı) inşa etmektir.</p>
      
      <ul style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 30px;">
        <li><strong>Faz 1: Maaş + Temettü.</strong> En kolayıdır. Kazandığınız paranın %20'siyle otomatik temettü hisseleri/fonları alınır. İki bacaklı masa oldunuz. Artık uyurken (çok az da olsa) para kazanıyorsunuz.</li>
        <li><strong>Faz 2: Dijital Kalıntı Bırakmak (Telif/Medya).</strong> Hafta sonlarınızı Netflix'e vermek yerine, bir kod/blog/video üretirsiniz. (Telif Akışı). Masanın üçüncü bacağı eklendi.</li>
        <li><strong>Faz 3: Çığ Etkisi.</strong> İlk iki pasif kaynaktan gelen ekstra sular, ana sermayenizi büyütür. Artık gayrimenkul veya büyük iş kurma lüksüne (Ticari/Kira Akışı) sahipsinizdir.</li>
      </ul>

      
      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">4. Zenginliğin 5 Seviyeli Hiyerarşisi</h2>
      <p style="margin-bottom: 20px;">Gelir akışları rastgele seçilmez; kişi zihinsel olarak geliştikçe bu hiyerarşide yukarı tırmanır:</p>
      
      <div style="background: rgba(0,0,0,0.5); padding: 25px; border-radius: 12px; border-left: 3px solid #a855f7; margin-bottom: 30px;">
        <ul style="color: var(--text-secondary); margin: 0; line-height: 1.8;">
          <li><strong style="color: #ef4444;">Seviye 1: Zamanı Paraya Satmak (Bordro Kölesi):</strong> Hayatınızın en verimli saatlerini başkasının hayallerini kurmak için satarsınız. (Aktif Maaş)</li>
          <li><strong style="color: #f59e0b;">Seviye 2: Kendi İşinin Kölesi Olmak (Freelance/Esnaf):</strong> Patron sizsinizdir ama tatile çıktığınız an gelir durur. Sistem size değil, siz sisteme bağımlısınızdır. (Aktif Ticaret)</li>
          <li><strong style="color: #3b82f6;">Seviye 3: Başkalarının Zamanını Satın Almak (İşveren):</strong> Çalışanların zamanını satın alıp kaldıraç oluşturursunuz. (Emek Kaldıracı)</li>
          <li><strong style="color: #10b981;">Seviye 4: Parayı Paraya Çevirmek (Yatırımcı):</strong> Uyurken bankadaki paranız sizin adınıza şirketlerin kârına ortak olur. (Sermaye Kaldıracı - Temettü)</li>
          <li><strong style="color: var(--gold-400);">Seviye 5: Fikirleri Paraya Çevirmek (Sistem Kurucu):</strong> Kod yazarak veya dijital medya üreterek "sıfır maliyetle sınırsız kopyalanan" varlıklar yaratırsınız. (Kod ve Medya Kaldıracı - Telif Geliri). <strong>Nihai zirvedir.</strong></li>
        </ul>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">5. Barbell (Halter) Stratejisi ile Antikırılganlık</h2>
      <p style="margin-bottom: 20px;">Filozof Nassim Nicholas Taleb'in <strong>"Halter Stratejisi"</strong>, 7 gelir akışını nasıl dağıtacağınızın matematiksel sırrıdır. Halterin ortası boştur, ağırlıklar iki uçtadır.</p>
      
      <div style="display: flex; gap: 15px; margin-bottom: 30px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 250px; border-top: 3px solid #10b981; background: rgba(16,185,129,0.05); padding: 20px; border-radius: 0 0 8px 8px;">
          <h4 style="color: #6ee7b7; margin-top: 0; font-size: 1.1rem;">Halterin Sol Ucu: %90 Aşırı Güvenlik</h4>
          <p style="color: var(--text-300); font-size: 0.9rem; margin: 0;">Enerjinizin ve sermayenizin %90'ı <strong>asla batmayacak</strong>, çok sıkıcı ve güvenli yerlerde olmalıdır: Devlet tahvilleri, köklü temettü şirketleri, risksiz yüksek maaşlı işiniz ve kirada olan tapulu eviniz. Burası sizi hayatta tutar.</p>
        </div>
        <div style="flex: 1; min-width: 250px; border-top: 3px solid #ef4444; background: rgba(239,68,68,0.05); padding: 20px; border-radius: 0 0 8px 8px;">
          <h4 style="color: #fca5a5; margin-top: 0; font-size: 1.1rem;">Halterin Sağ Ucu: %10 Aşırı Risk (Siyah Kuğu)</h4>
          <p style="color: var(--text-300); font-size: 0.9rem; margin: 0;">Kalan %10 enerjinizle <strong>batma ihtimali yüksek ama tutarsa 1000 kat kazandıracak</strong> asimetrik işler yaparsınız: Bir yazılım start-up'ı kurmak, YouTube kanalı açmak, erken aşama riskli yatırımlar yapmak. Batarsa sadece %10 kaybedersiniz (hayatınız etkilenmez), tutarsa multi-milyoner olursunuz.</p>
        </div>
      </div>
      <p style="margin-bottom: 20px;">Asla paranızı "orta riskli" (ne öldüren ne güldüren) işlere koymayın. Halterin ortasında duranlar, en ufak krizde ezilenlerdir.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">6. "Bir Kere İnşa Et, İki Kere Sat" (Ürünleştirme)</h2>
      <p style="margin-bottom: 20px;">Telif (Royalty) ve Dijital gelir akışlarının neden bu kadar ölümcül bir güce sahip olduğunu anlamak için "Marjinal Üretim Maliyeti" kavramını bilmelisiniz.</p>
      
      <div style="background: rgba(255,255,255,0.02); border: 1px dashed var(--gold-500); padding: 20px; border-radius: 8px; margin-bottom: 30px;">
        <p style="color: var(--text-200); font-size: 1.05rem; margin: 0; line-height: 1.7;">Eğer bir marangozsanız, 1. sandalyeyi yapmak 5 saatinizi alır. 1000. sandalyeyi yapmak da 5 saatinizi alır. Zamanınız doğrusaldır.<br><br>Eğer bir yazılımcı veya yazarsanız, 1. kopyayı üretmek (Örn: Bir E-Kitap veya Uygulama yazmak) 1000 saatinizi alır. Ancak <strong>1.000.000'uncu kopyayı üretmek SIFIR saatinizi alır.</strong> İnternet, çoğaltma maliyetini sıfıra indirmiştir. Yeni çağda zengin olmanın en garantili yolu, yeteneklerinizi "Hizmet" olmaktan çıkarıp "Ürün" haline getirmektir (Productize Yourself).</p>
      </div>

<h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Damlaya Damlaya Göl Olur Prensibi</h3>
      <p style="margin-bottom: 20px;">Yeni kurduğunuz bir gelir akışı (Örneğin ilk YouTube kanalınız veya temettü hesabınız) size ayda sadece 100 TL kazandırıyor olabilir. Bunu asla küçümsemeyin. O 100 TL, sizin <strong>"Zamanınızı Satmadan"</strong> kazandığınız, sistemi kanıtlanmış "Özgürlük Parası"dır. Kendi kendine dönen bir çark buldunuz demektir. O saatten sonra geriye kalan tek şey o çarka daha fazla ivme (kaldıraç) uygulamak ve sistemi devasa boyutlara ölçeklemektir.</p>
    `,
    altin_kural: 'Tek bir maaşa bağımlı olmak, finansal bir diktatörlükte yaşamaktır.',
    rakamlar: [
      { etiket: 'Ort. Akış', deger: '7 Farklı Yol' },
      { etiket: 'En Kırılgan', deger: 'Maaş Geliri' },
      { etiket: 'En Özgür', deger: 'Telif/Temettü' }
    ]
  },
  {
    slug: 'zenginlik-mindset',
    baslik: 'Zenginlik Zihniyeti',
    altBaslik: 'Düşüncen Servetini Belirler',
    ikon: '🧠',
    kategori: 'zihniyet',
    kisa: 'Zenginlik önce zihinde başlar. Para hakkındaki inançlarınız, banka hesabınızı doğrudan şekillendirir.',
    detay: `Zenginlik psikolojisi, rakamlardan çok daha güçlüdür. Kendinizi neye layık görüyorsanız, piyasa size onu öder.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Piyango kazananların %70'inin 5 yıl içinde kazandıklarından çok daha büyük bir borç batağıyla iflas ettiklerini biliyor muydunuz? Bunun sebebi, ceplerindeki rakamların değişmesine rağmen, zihinlerindeki "Termostatın" hala yoksulluğa ayarlı olmasıdır. Servet asla zihniyeti aşamaz; eğer aşarsa, zihniyet serveti hızla kendi seviyesine çeker.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">1. Finansal Termostatın Biyolojisi</h2>
      <p style="margin-bottom: 20px;">T. Harv Eker, zihnimizi bir "Finansal Termostat"a benzetir. Odanın termostatı 20 dereceye ayarlıysa ve dışarıdan sıcak hava gelip odayı 30 derece yapsa bile, klima anında devreye girip odayı tekrar 20 dereceye düşürür. İnsan beyni de tam olarak böyle çalışır.</p>
      
      <p style="margin-bottom: 20px;">Eğer sizin zihninizdeki termostat 20.000 TL'ye (hayatta kalma sınırı) ayarlıysa ve siz tesadüfen 500.000 TL kazanırsanız, bilinçaltınız panikler. O parayı "tehlikeli" veya "hak edilmemiş" olarak algılar. Onu kaybetmek, saçma sapan bir işe yatırmak, dolandırıcılara kaptırmak veya lüks harcamalarla tüketmek için elinden geleni yapar; ta ki banka hesabınız o "güvenli hissettiği" 20.000 TL seviyesine düşene kadar. Fakirliğin sebebi cebinizdeki deliğin değil, bilinçaltınızdaki yazılımın bozuk olmasıdır.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">2. Kıtlık Zihniyeti vs Bolluk Zihniyeti</h2>
      <p style="margin-bottom: 20px;">İnsanların paraya bakış açısı, dünyayı bir "Pasta" olarak nasıl gördüklerine bağlıdır:</p>
      
      <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 30px;">
        <div style="flex: 1; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.2); padding: 25px; border-radius: 8px;">
          <h4 style="color: #fca5a5; margin-top: 0; font-size: 1.2rem;">Kıtlık Zihniyeti (Zero-Sum Game)</h4>
          <p style="color: var(--text-300); font-size: 0.95rem; margin: 0; line-height: 1.6;">Dünyadaki zenginliği <strong>"Sınırlı Bir Pasta"</strong> olarak görürler. Biri büyük bir dilim aldıysa, kendilerine daha küçük bir dilim kalacağına inanırlar. "Zenginler benim paramı çalıyor" derler. Biri başardığında haset duyarlar. Rekabetçidirler, bilgiyi saklarlar, korkuyla yaşarlar.</p>
        </div>
        <div style="flex: 1; background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.2); padding: 25px; border-radius: 8px;">
          <h4 style="color: #6ee7b7; margin-top: 0; font-size: 1.2rem;">Bolluk Zihniyeti (Positive-Sum Game)</h4>
          <p style="color: var(--text-300); font-size: 0.95rem; margin: 0; line-height: 1.6;">Dünyadaki zenginliğin <strong>"Genişletilebilir Bir Pasta"</strong> olduğuna inanırlar. İnternet ve teknoloji sayesinde zenginliğin sonsuz olduğuna ve başkalarının başarısının kendi fırsatlarını artırdığına inanırlar. Başkalarının kazanmasına yardım ettikçe kendilerinin de kazanacağını bilirler.</p>
        </div>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">3. Zenginliğin Gizli Dili: Ne Konuşuyorsunuz?</h2>
      <p style="margin-bottom: 20px;">Eğer bir kişinin gelecekte zengin olup olmayacağını bilmek istiyorsanız, banka hesabına değil, kahve içerken <strong>ne konuştuğuna</strong> bakın. Eleanor Roosevelt'in o meşhur sözü, sınıfların kodunu çözer:</p>
      
      <ul style="color: var(--text-secondary); margin-bottom: 30px; line-height: 1.8;">
        <li><strong style="color: #ef4444;">Fakir Zihniyet "İnsanları" Konuşur:</strong> Dedikodu yapar. Komşunun ne aldığı, ünlünün kimi terk ettiği, patronun ona ne dediği ile meşguldür. Zihin enerjisi dışarıya akar.</li>
        <li><strong style="color: #f59e0b;">Orta Sınıf Zihniyeti "Olayları/Eşyaları" Konuşur:</strong> Futbol maçlarını, siyasi olayları, yeni çıkan araba modellerini veya indirimleri konuşur. Pasif tüketicidir.</li>
        <li><strong style="color: #10b981;">Zengin Zihniyet "Fikirleri ve Sistemleri" Konuşur:</strong> Gelecekteki trendleri, yapay zekayı, nasıl kaldıraç yaratacağını, insanlara nasıl değer katacağını tartışır. İki zengin yan yana geldiğinde şikayet etmezler, "Nasıl çözeriz?" diye sorarlar.</li>
      </ul>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Radikal Sorumluluk İlkesi:</strong> Yoksul zihniyet her zaman kurbandır (Victimhood). Başarısızlığı için hükümeti suçlar, ekonomiyi suçlar, ailesini suçlar. <em>Eğer suçu başkasına atarsanız, "GÜCÜ" de başkasına vermiş olursunuz.</em> Zengin zihniyet ise radikal bir sorumluluk alır. "Eğer batıyorsam bu benim hatam, eğer çıkıyorsam bu benim eserim." Mazeret üreten bir beynin para üretmesi nörolojik olarak imkansızdır.
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">4. Parayı Suçluluk Duymadan Sevmek</h2>
      <p style="margin-bottom: 20px;">Toplum, bize çocukluktan itibaren paranın kirli, zenginlerin ise zalim olduğunu aşılar. "Para ağaçta yetişmez", "Para tüm kötülüklerin anasıdır", "Namusuyla çok para kazanılmaz". Bu toksik yazılımlar beyninizde durduğu sürece, evren size hiçbir zaman büyük bir servet teslim etmeyecektir; çünkü beyniniz, zengin olduğunuzda "kötü bir insan" olacağınızdan korkmaktadır.</p>
      
      <p style="margin-bottom: 30px;">Zenginlik zihniyeti, paranın ahlaki bir değer taşımadığına inanır. Para, sadece sizin insanlığa ne kadar fayda sağladığınızı (ne kadar büyük bir problem çözdüğünüzü) ölçen tarafsız bir cetveldir, bir büyüteçtir. İyi bir insanın elinde para hastane ve okul yapar, kötü bir insanın elinde savaş çıkarır. Parayı istemek, etki alanınızı genişletmek istemektir.</p>


      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">5. Dopamin Bağımlılığı: Ertelenmiş Haz (Delayed Gratification)</h2>
      <p style="margin-bottom: 20px;">Stanford Üniversitesinin meşhur "Marshmallow Testi"ni duymuşsunuzdur. Çocuklara bir şekerleme verilir ve "Eğer bunu şimdi yemezsen, 15 dakika sonra sana iki tane vereceğim" denir. Hazlarını erteleyebilen çocukların 30 yıl sonra hem çok daha zengin hem de çok daha başarılı oldukları kanıtlanmıştır.</p>
      
      <p style="margin-bottom: 20px;">Yoksul zihniyet, modern çağın <strong>"Anında Dopamin"</strong> tuzağında yaşar. Acı çeker ve acısını dindirmek için kredi kartıyla asgari ücretinin 3 katı fiyata iPhone alır. O iPhone'u aldığı gün beynine muazzam bir dopamin salgılanır, ancak ertesi ay kredi kartı ekstresi geldiğinde kortizol (stres hormonu) ile boğulur. <strong>Zenginliğin tanımı şudur: Bugünün konforunu feda ederek, yarının özgürlüğünü inşa etmek.</strong> Eğer paranızı "bugün daha havalı görünmek" için harcıyorsanız, o parayı size faiziyle borç veren bankerin gelecekteki Ferrari'sini finanse ediyorsunuz demektir. Piyasa, sabırsızların parasının sabırlılara transfer edildiği bir cihazdır.</p>

      <div class="article-alert" style="background: rgba(0,0,0,0.5); border-left: 4px solid #a855f7; padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--text-300); font-size: 1.05rem; line-height: 1.7;">
        <strong style="color: #c084fc;">Statü Oyunları vs Servet Oyunları (Status vs Wealth Games):</strong> <br>
        Naval Ravikant harika bir ayrım yapar: Dünyada iki oyun oynanır. <br>
        <strong>1. Statü Oyunu:</strong> Sıfır toplamlıdır (Biri yukarı çıkarsa diğeri inmek zorundadır). Siyasettir, gösteriştir, sosyal medyadır. Orta sınıf, lüks arabalar ve marka kıyafetler alarak "Statü Oyunu" oynar. Zengin <em>görünmek</em> isterler.<br>
        <strong>2. Servet Oyunu:</strong> Pozitif toplamlıdır. Başkalarını ezmenize gerek yoktur. Gece pijamalarınızla kod yazarken veya dükkanınızı temizlerken oynarsınız. Zenginler "Statü"yü umursamazlar. En zengin insanlar genellikle gri bir tişörtle dolaşır, çünkü onaylanma ihtiyaçları yoktur. True wealth is the stuff you don't see (Gerçek zenginlik, dışarıdan görünmeyen şeydir; banka hesapları, yazılımlar, tapulardır).
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">6. "Ne Bildiğin" Değil, "Neyi Bildiğini Sandığın" Tehlikelidir</h2>
      <p style="margin-bottom: 20px;">Mark Twain'in finans dünyası için adeta altın kurallardan biri olan harika bir sözü vardır: <em>"Sizi belaya sokan şey bilmediğiniz şeyler değildir. Başınızı belaya sokan şey, kesinlikle emin olduğunuz ama aslında tamamen yanlış olan şeylerdir."</em></p>
      
      <ul style="color: var(--text-secondary); margin-bottom: 30px; line-height: 1.8;">
        <li><strong style="color: #ef4444;">Emin Olduğunuz Yanılgılar:</strong> "Ev fiyatları asla düşmez", "Devlet mutlaka beni kurtarır", "Bu kripto para kesin yükselecek", "Maaşlı iş en güvenli olandır." Bu zehirli varsayımlar, insanların tüm birikimlerini tek gecede kaybetmesinin nedenidir.</li>
        <li><strong style="color: #10b981;">Bilgisizliğin Gücü (Epistemolojik Alçakgönüllülük):</strong> En zengin yatırımcılar, geleceği "bilmediklerini" kabul edenlerdir. Piyasaların ne yöne gideceğini kimse bilemez. Zengin zihniyet geleceği tahmin etmeye çalışmaz; her türlü felaket senaryosunda hayatta kalacak (Antikırılgan) <strong>"Sistemler"</strong> inşa eder.</li>
      </ul>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">7. Paranın Duygusal Frekansı: Minnet ve Çaresizlik</h2>
      <p style="margin-bottom: 20px;">Bir iş görüşmesine çok borçlu ve "bu işe kesinlikle ihtiyacı olan" (çaresiz) bir şekilde giderseniz, o enerjiniz anında karşı tarafa geçer. Patron size asgari ücret teklif eder. Ancak cebinizde 1 yıllık nakdiniz (F-You Money) varsa ve rahatsanız, o görüşmede fiyatı siz belirlersiniz. Para, çaresizlik kokan insanlardan kaçar, ona ihtiyacı yokmuş gibi davrananlara yapışır.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">İnteraktif: Finansal Termostat Testi</h2>
      <p style="margin-bottom: 20px;">Bilinçaltınızdaki gizli termostatın kaç dereceye ayarlı olduğunu öğrenmek ister misiniz? Aşağıdaki senaryolara vereceğiniz en "dürüst" tepkileri işaretleyin.</p>

      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); border-radius: 12px; padding: 30px; margin: 30px 0; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
        
        <div class="mindset-question" style="margin-bottom: 25px;">
          <h4 style="color: var(--gold-300); margin-top: 0;">1. Yolda yürürken en yakın arkadaşınızın yepyeni, milyonluk bir spor araba aldığını gördünüz. İlk HİSSİNİZ nedir?</h4>
          <label style="display: block; margin-bottom: 10px; cursor: pointer;"><input type="radio" name="mq1" value="0"> "Kesin ailesinden para kaldı veya yasadışı bir şey yaptı." (Haset/Şüphe)</label>
          <label style="display: block; margin-bottom: 10px; cursor: pointer;"><input type="radio" name="mq1" value="1"> "Umarım borca girmemiştir, çok güzelmiş ama benim asla param yetmez." (Korku/Kıtlık)</label>
          <label style="display: block; margin-bottom: 10px; cursor: pointer;"><input type="radio" name="mq1" value="3"> "Müthiş! Akşam yemeğe çıkarıp o arabayı almasını sağlayan sistemi nasıl kurduğunu soracağım." (İlham/Öğrenme)</label>
        </div>

        <div class="mindset-question" style="margin-bottom: 25px;">
          <h4 style="color: var(--gold-300); margin-top: 0;">2. Piyangodan tesadüfen 5 Milyon TL kazandınız. O gece ne düşünürsünüz?</h4>
          <label style="display: block; margin-bottom: 10px; cursor: pointer;"><input type="radio" name="mq2" value="0"> "Hemen lüks bir ev, araba alayım, aileme ve dostlarıma dağıtayım." (Tüketim)</label>
          <label style="display: block; margin-bottom: 10px; cursor: pointer;"><input type="radio" name="mq2" value="1"> "Parayı bankaya vadeli faize atıp güvene alayım, sakın risk almayayım." (Güvenlik)</label>
          <label style="display: block; margin-bottom: 10px; cursor: pointer;"><input type="radio" name="mq2" value="3"> "Bu paranın %80'i ile hisse ve dükkan alıp pasif nakit akışı kurmalıyım. Lüks eşyaları o nakit akışıyla alırım." (Sistem)</label>
        </div>

        <div class="mindset-question" style="margin-bottom: 25px;">
          <h4 style="color: var(--gold-300); margin-top: 0;">3. İş yerinde patronunuz sizi haksız yere işten kovdu.</h4>
          <label style="display: block; margin-bottom: 10px; cursor: pointer;"><input type="radio" name="mq3" value="0"> "Hayat ne kadar adaletsiz, dava açacağım, herkes benim kötülüğümü istiyor." (Kurban psikolojisi)</label>
          <label style="display: block; margin-bottom: 10px; cursor: pointer;"><input type="radio" name="mq3" value="1"> "Eyvah faturaları nasıl ödeyeceğim, hemen başka birisine CV göndermeliyim." (Hayatta Kalma)</label>
          <label style="display: block; margin-bottom: 10px; cursor: pointer;"><input type="radio" name="mq3" value="3"> "Tek bir gelir akışına (maaşa) güvendiğim için bu tamamen benim hatam. Bunu bir daha yaşamamak için kendi sistemimi kurma vakti geldi." (Sorumluluk)</label>
        </div>

        <button id="mindset-btn" style="background: linear-gradient(135deg, var(--gold-500), var(--gold-700)); color: #111; border: none; padding: 15px 24px; font-weight: 900; border-radius: 8px; cursor: pointer; width: 100%; font-size: 1.25rem; text-transform: uppercase; letter-spacing: 1px;">TERMOSTATIMI ÖLÇ</button>
        
        <div id="mindset-result" style="margin-top: 30px; padding: 25px; background: rgba(0,0,0,0.6); border-radius: 12px; display: none; text-align: center; border: 2px solid transparent;">
          <h3 id="mindset-title" style="margin-top: 0; font-family: var(--font-display); font-size: 2rem;">Sonuç</h3>
          <p id="mindset-desc" style="color: var(--text-300); font-size: 1.1rem; line-height: 1.6;"></p>
        </div>
      </div>

      <script>
        (function() {
          const btn = document.getElementById('mindset-btn');
          if(!btn) return;
          
          btn.addEventListener('click', function() {
            let score = 0;
            let answered = 0;
            
            for(let i=1; i<=3; i++) {
              const selected = document.querySelector('input[name="mq'+i+'"]:checked');
              if(selected) {
                score += parseInt(selected.value);
                answered++;
              }
            }
            
            if(answered < 3) {
              alert("Lütfen önce tüm soruları en dürüst halinizle yanıtlayın.");
              return;
            }
            
            const resultDiv = document.getElementById('mindset-result');
            const titleEl = document.getElementById('mindset-title');
            const descEl = document.getElementById('mindset-desc');
            
            if(score <= 1) {
              resultDiv.style.borderColor = '#ef4444';
              titleEl.style.color = '#ef4444';
              titleEl.innerText = 'Kırmızı Alarm: Kurban & Kıtlık Zihniyeti';
              descEl.innerText = 'Termostatınız hayatta kalma (Minimum) seviyesine ayarlı. Para sizin için bir korku kaynağı ve dünyayı bir sıfır-toplam oyunu olarak görüyorsunuz. Piyangoyu kazansanız bile bilinçaltınız sizi tekrar yoksul yapacak. Stratejileri bırakıp önce içsel yazılımınızı ve travmalarınızı düzeltmelisiniz.';
            } else if(score <= 5) {
              resultDiv.style.borderColor = '#f59e0b';
              titleEl.style.color = '#f59e0b';
              titleEl.innerText = 'Sarı Alarm: Orta Sınıf Güvenlik Zihniyeti';
              descEl.innerText = 'Termostatınız konfor alanına ayarlı. Fakir değilsiniz ama risk almaktan ölesiye korkuyorsunuz. Zenginliği istiyorsunuz ancak bedelini (belirsizlik, risk) ödemeye hazır değilsiniz. "Güvenli maaş" hapishanesinden çıkıp, "Özgürlük" alanına sıçramanız gerekiyor.';
            } else {
              resultDiv.style.borderColor = '#10b981';
              titleEl.style.color = '#10b981';
              titleEl.innerText = 'Yeşil Işık: Sınırsız Bolluk (Zengin) Zihniyeti';
              descEl.innerText = 'Termostatınızın sınırı yok! Tüm sorumluluğu üzerinize alıyor, dünyadaki paranın sadece çözülen problemlerin bir ödülü olduğunu biliyorsunuz. Başarıdan ilham alıyor, sorunları fırsat olarak görüyorsunuz. Eğer matematiksel stratejileri (Bileşik Faiz, Varlıklar) de uygularsanız, milyoner olmanız sadece bir "Zaman" meselesi.';
            }
            
            resultDiv.style.display = 'block';
            
            if (resultDiv.animate) {
              resultDiv.animate([
                { transform: 'scale(0.95)', opacity: 0 },
                { transform: 'scale(1)', opacity: 1 }
              ], { duration: 400, easing: 'ease-out' });
            }
          });
        })();
      </script>
    `,
    altin_kural: 'Bilinçaltı inançlarınız, tüm strateji ve taktikleri her zaman yenecektir.',
    rakamlar: [
      { etiket: 'Psikoloji', deger: '%80 Etken' },
      { etiket: 'Teknik Bilgi', deger: '%20 Etken' },
      { etiket: 'Mazeret', deger: 'Sıfır Toleras' }
    ]
  },
  {
    slug: 'pasif-gelir',
    baslik: 'Pasif Gelir İnşası',
    altBaslik: 'Uyurken Kazanın',
    ikon: '💤',
    kategori: 'strateji',
    kisa: 'Warren Buffett: "Uyurken para kazanmanın bir yolunu bulamazsanız, ölene kadar çalışırsınız." Pasif gelir, finansal özgürlüğün anahtarıdır.',
    detay: `Saat satmayı bırakıp, sistem inşa etmeyi öğrenmelisiniz.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Zaman, evrendeki en acımasız ve sınırlandırılmış kaynaktır. Ne kadar yetenekli, ne kadar zeki veya ne kadar motive olursanız olun, günde sadece 24 saatiniz var. Eğer geliriniz sadece bu saatleri satarak (maaş) elde ediliyorsa, gelirinizin matematiksel bir üst tavanı var demektir. Zenginler saat satmaz, <strong>sistem inşa ederler.</strong></p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">1. Asimetrik Efor (Front-Loaded Sacrifice)</h2>
      <p style="margin-bottom: 20px;">İnternetteki "plajda laptopla çalışırken milyoner ol" yalanının aksine, pasif gelir "çalışmadan kazanılan para" DEĞİLDİR. Pasif gelir, <strong>eforun asimetrik olarak zamanın en başına yığılmasıdır (Front-loading).</strong></p>
      
      <div style="background: rgba(0,0,0,0.5); padding: 25px; border-radius: 8px; border-left: 3px solid #10b981; margin-bottom: 30px;">
        <ul style="color: var(--text-secondary); margin: 0; line-height: 1.7;">
          <li><strong>Aktif Gelir (Maaş):</strong> %100 efor harcarsınız, anında %100 maaş alırsınız. Çok adildir ama köleliktir. Hastalandığınızda %0 efor harcarsınız ve %0 para alırsınız.</li>
          <li><strong>Pasif Gelir (Sistem):</strong> İlk 1 yıl %1000 efor harcarsınız (Bir yazılım kodlar, bir kanal büyütür veya peşinat biriktirirsiniz) ve karşılığında <strong>%0 para alırsınız.</strong> Ancak sistem kurulduktan sonra, ömrünüzün sonuna kadar %0 efor harcayarak %1000 para alırsınız. Mükemmel derecede <em>adaletsizdir</em> ve zenginliğin sırrı da bu adaletsizlikte yatar.</li>
        </ul>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">2. Efor ve Sonucun Ayrışması (Decoupling)</h2>
      <p style="margin-bottom: 20px;">Naval Ravikant'ın ünlü kuralı: <em>"Eğer girdileriniz (harcadığınız saat) ile çıktılarınız (kazandığınız para) birbirine sıkı sıkıya bağlıysa, asla zengin olamazsınız."</em></p>
      <p style="margin-bottom: 20px;">Dünyanın en iyi cerrahı da olsanız, bir ameliyatı 1 saatte yapıyorsanız günde en fazla 15 ameliyat yapabilirsiniz. Kazancınız sınırlıdır. Ancak bir yazılım, tek bir tuşla aynı anda 1 Milyon kişinin sorununu çözebilir. Pasif gelir inşası, eforunuzu sonuçtan koparma (decoupling) mühendisliğidir. Uyurken para kazanamıyorsanız, uyanıkken hayatınızı satıyorsunuz demektir.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Kova Taşımak vs Boru Hattı Döşemek:</strong> Bir köyde suya ihtiyaç vardır. Birinci adam (Aktif Gelir), her gün nehirden kovalarla su taşır ve çok para kazanır. Tüm köy ona muhtaçtır. Ancak yorulduğunda para kesilir. İkinci adam (Pasif Gelir), 2 yıl boyunca tek kuruş kazanmadan nehirden köye bir boru hattı döşer. Birinci adam onunla dalga geçer. Ancak boru hattı bittiği gün, ikinci adam musluğu açar ve köyün tüm su piyasasını ele geçirir. Ömrünün sonuna kadar uyurken zengin olur. Hayatınız boyunca kova mı taşıyacaksınız, yoksa bir kez kan ter içinde boru mu döşeyeceksiniz?
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">3. Gerçek Pasif vs Sahte Pasif (Maintenance Cost)</h2>
      <p style="margin-bottom: 20px;">Her pasif gelir eşit derecede "pasif" değildir. Sistemin ayakta kalması için gereken <strong>Bakım Maliyeti (Maintenance Cost)</strong> gerçek özgürlüğünüzü belirler:</p>
      
      <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 30px;">
        <div style="flex: 1; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.2); padding: 20px; border-radius: 8px;">
          <h4 style="color: #fca5a5; margin-top: 0; font-size: 1.1rem;">Sahte Pasif (Yarı-Aktif)</h4>
          <p style="color: var(--text-400); font-size: 0.9rem; margin: 0;">Airbnb'den ev kiralamak, stoksuz e-ticaret (dropshipping) yapmak veya müşteri hizmetleri olan bir iş kurmak. Bunlar pasif görünür ama gece 3'te bir müşteri şikayeti veya patlayan bir su borusu için uyanmak zorundaysanız, aslında kendinize sadece yeni bir <strong>ikinci iş</strong> (part-time job) yaratmışsınızdır.</p>
        </div>
        <div style="flex: 1; background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.2); padding: 20px; border-radius: 8px;">
          <h4 style="color: #6ee7b7; margin-top: 0; font-size: 1.1rem;">Gerçek Pasif (Tam Kopuş)</h4>
          <p style="color: var(--text-400); font-size: 0.9rem; margin: 0;">S&P 500 Endeks Fonu, köklü şirketlerin temettüleri, telif hakları veya Amazon'da kendi kendine satılan bir e-kitap. Bunlar sıfır bakım gerektirir. Sisteme 5 yıl hiç bakmasanız bile arka planda para basmaya devam ederler. Asıl özgürlük buradadır.</p>
        </div>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">4. Dijital Gayrimenkul Devrimi</h2>
      <p style="margin-bottom: 20px;">Eskiden pasif gelir elde etmenin tek yolu devasa fabrikalar, apartmanlar veya tahviller satın almaktı. Milyonlarca dolar sermaye gerektirirdi. Bu yüzden sadece zenginler daha da zenginleşirdi.</p>
      <p style="margin-bottom: 20px;">Ancak bugün, internet sayesinde <strong>"Dijital Gayrimenkuller"</strong> (Kod, Yazılım SaaS, Blog, YouTube Kanalı, Online Kurs) inşa edebiliyoruz. Sıfır finansal sermaye ama yüksek "odaklanma sermayesi" ile kendi sanal apartmanlarınızı dikebilirsiniz. Her bir makaleniz, her bir videonuz internette sizin için 7/24 uykusuz çalışan, maaş istemeyen dijital işçilerinizdir. İnternet, tarihin en büyük pasif gelir demokratikleştiricisidir.</p>
    `,
    altin_kural: 'Maaşınız hayatta kalmanızı, yatırımlarınız ve pasif geliriniz özgürlüğünüzü finanse eder.',
    rakamlar: [
      { etiket: 'Başlangıç', deger: 'Sıfır Kazanç, Çok Emek' },
      { etiket: 'Sonuç', deger: 'Az Emek, Sonsuz Kazanç' },
      { etiket: 'Maliyet', deger: 'Sabır & Ter' }
    ]
  },
  {
    slug: 'kaldirac-gucu',
    baslik: 'Kaldıraç Gücü',
    altBaslik: 'Dünyayı Yerinden Oynatın',
    ikon: '⚡',
    kategori: 'strateji',
    kisa: 'Arşimet: "Bana yeterince uzun bir kaldıraç ve bir dayanak noktası verin, dünyayı yerinden oynatayım." Modern zenginlik, kaldıraç üzerine kuruludur.',
    detay: `Fizik kuralları finansta da geçerlidir. Kaldıraç, eforunuzu binlerce kat çarpan devasa bir güçtür.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Eğer bir taşı sadece kendi kas gücünüzle kaldırmaya çalışırsanız, limitiniz bellidir. Ancak altına uzun bir demir çubuk (kaldıraç) ve bir taş koyarsanız, kendi ağırlığınızın yüzlerce katını itebilirsiniz. Antik Yunan filozofu Arşimet'in dediği gibi: <em>"Bana yeterince uzun bir kaldıraç ve sağlam bir dayanak noktası verin, dünyayı yerinden oynatayım."</em> Finansal dünyada sıfırdan nasıl zengin olunur sorusunun tek matematiksel yanıtı bu sihirli çubuklarda yatar: <strong>Kaldıraç Gücü (Leverage)</strong>.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Kaldıraçlı İşlem ve Finansal Kaldıraç Nedir?</h2>
      <p style="margin-bottom: 20px;">Finansal okuryazarlık arayanların Google'da en çok arattığı <em>"Kaldıraç nedir?"</em> sorusunun en basit cevabı şudur: <strong>Kaldıraç, eforunuzu ve sermayenizi katlayarak (çarpan etkisiyle) sonuç almanızı sağlayan sistemdir.</strong> Zenginler, hayatın her alanında kendi kas güçleri (doğrusal efor) yerine bu çarpanları kullanırlar.</p>
      
      <p style="margin-bottom: 20px;">Silikon Vadisi'nin efsanevi yatırımcısı <strong>Naval Ravikant</strong>, zenginlik inşasını kaldıraçlar üzerinden 4 ana sınıfa ayırır:</p>

      <div style="background: rgba(0,0,0,0.5); padding: 25px; border-radius: 12px; border-left: 3px solid #3b82f6; margin-bottom: 30px;">
        <ul style="color: var(--text-secondary); margin: 0; line-height: 1.8;">
          <li><strong style="color: #60a5fa; font-size: 1.1rem;">1. Emek Kaldıracı (Other People's Time - OPT):</strong><br>İnsanları sizin için çalıştırmaktır (CEO olmak, personel işe almak). Tarihin en eski kaldıracıdır. Sınırlı olan 24 saatinizi, 10 kişi işe alarak günde 240 saate çıkarırsınız. Ancak yönetmesi en zor ve stresli olanıdır (insan faktörü).</li>
          <li style="margin-top: 15px;"><strong style="color: #fcd34d; font-size: 1.1rem;">2. Sermaye Kaldıracı (Other People's Money - OPM):</strong><br>Başkasının parasıyla (Kredi veya Yatırım) kendi servetinizi büyütmektir. Warren Buffett'ın zengin olma formülüdür. Ev alırken çektiğiniz Mortgage (Konut Kredisi) tipik bir sermaye kaldıracıdır. Paranızı katlar, ancak hata yaparsanız sizi iflasa sürükler.</li>
        </ul>
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">Yeni Nesil Zenginlerin Sırrı: İzinsiz Kaldıraçlar</h2>
      <p style="margin-bottom: 20px;">Eskiden kaldıraç kullanmak için "İzin" (Permission) gerekirdi. Birilerini işe almak için sermayeye (İzin), kredi çekmek için bankaya (İzin) ihtiyacınız vardı. Ancak internet devrimi, yepyeni ve <strong>"İzinsiz" (Permissionless Leverage)</strong> 2 yeni kaldıraç yarattı:</p>

      <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 30px;">
        <div style="flex: 1; min-width: 280px; background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.2); padding: 20px; border-radius: 8px;">
          <h4 style="color: #6ee7b7; margin-top: 0; font-size: 1.15rem;">3. Kod Kaldıracı (Yazılım)</h4>
          <p style="color: var(--text-400); font-size: 0.95rem; margin: 0;">Uyurken sizin için binlerce işlem yapan, yorulmayan, maaş istemeyen ve sendika kurmayan dijital işçilerinizdir (Yazılım, Yapay Zeka, Botlar). Mark Zuckerberg'in zenginlik modelidir. Marjinal kopyalama maliyeti sıfırdır.</p>
        </div>
        <div style="flex: 1; min-width: 280px; background: rgba(168,85,247,0.05); border: 1px solid rgba(168,85,247,0.2); padding: 20px; border-radius: 8px;">
          <h4 style="color: #c084fc; margin-top: 0; font-size: 1.15rem;">4. Medya Kaldıracı (İçerik)</h4>
          <p style="color: var(--text-400); font-size: 0.95rem; margin: 0;">Kitap, YouTube videosu, Podcast, Twitter (X) hesabı. İçeriği sadece bir kere üretirsiniz, ancak aynı anda 10 milyon insana dağıtılır. Uyurken bile kitlelere ulaşırsınız (Joe Rogan modeli).</p>
        </div>
      </div>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Sıfır Marjinal Maliyet (Zero Marginal Cost):</strong> Kod ve Medya kaldıraçları tarihteki en asimetrik servet yaratıcılarıdır. Bir videoyu 10 kişinin izlemesi ile 1 Milyon kişinin izlemesi arasındaki maliyet farkı SIFIRDIR. Kodlayıcılar ve içerik üreticilerinin bu kadar hızlı zengin olmasının matematiksel sebebi bu "sınırsız ölçeklenebilirlik" gücüdür.
      </div>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">Kaldıraçlı Dünyanın Riskleri: İki Ucu Keskin Kılıç</h2>
      <p style="margin-bottom: 20px;">Kaldıraç gücü muazzamdır, ancak <strong>Kaldıraç hataları da büyütür.</strong> Eğer %10 kâr elde edeceğiniz bir işe 10x kaldıraçla girerseniz, %100 (paranızın tamamı kadar) kâr edersiniz. Ancak piyasa sadece %10 aleyhinize giderse, %100 zarar edip sıfırlanırsınız (Buna Liquidation / Likidasyon denir).</p>
      
      <p style="margin-bottom: 30px;">Warren Buffett'ın meşhur uyarısını unutmayın: <em>"Akıllı adamların iflas etmesinin üç yolu vardır: İçki, Kadınlar ve Kaldıraç."</em> Borç (Sermaye Kaldıracı) alarak yatırım yaparken, en ufak bir piyasa çöküşünde elinizdeki tüm varlıkları bankaya kaptırma riskini taşıdığınızı bilmelisiniz. En iyi kaldıraç, sizi gece uykusuz bırakmayan, izinsiz (Kod ve Medya) kaldıraçlarıdır.</p>

      <div style="background: rgba(255,255,255,0.02); padding: 20px; border-radius: 12px; margin-top: 40px; border-top: 2px solid var(--gold-500);">
        <h3 style="color: var(--gold-400); margin-top: 0; font-size: 1.5rem; margin-bottom: 15px;">Sıkça Sorulan Sorular (SSS) - SEO</h3>
        
        <strong style="color: var(--white); font-size: 1.1rem; display: block; margin-bottom: 5px;">Borçla yatırım yapmak (Sermaye Kaldıracı) mantıklı mı?</strong>
        <p style="color: var(--text-400); margin-bottom: 15px; font-size: 0.95rem;">Doğru kullanıldığında (örneğin kira geliri krediyi ödeyen bir ev almak) zenginliğin en büyük sırrıdır (Buna "İyi Borç" denir). Ancak tüketim ürünleri (Lüks araba, tatil) için borçlanmak veya borsada bilmediğiniz coinlere margin (kaldıraçlı) işlem açmak finansal intihardır.</p>

        <strong style="color: var(--white); font-size: 1.1rem; display: block; margin-bottom: 5px;">Sıfırdan başlayan biri hangi kaldıracı kullanmalı?</strong>
        <p style="color: var(--text-400); margin-bottom: 0; font-size: 0.95rem;">Sermayeniz veya şirketiniz yoksa tek seçeneğiniz "İzinsiz Kaldıraçlar"dır. Yazılım kodlamayı öğrenin, bir blog açın, YouTube'a içerik üretin. Bunlar parasız başlanabilen, ancak doğru yapıldığında dünyayı yerinden oynatan modern zaman çubuklarıdır.</p>
      </div>

      <p style="margin-top: 30px; margin-bottom: 20px;">Kaldıraçlı bir dünyada hatalarınız sizi yok edebilir, doğrularınız ise sizi efsane yapabilir. Ancak unutmayın, modern ekonomide "çok çalışmak" yeterli değildir. Eğer çok çalışmak zengin etseydi, maden işçileri milyarder olurdu. Oysa zenginliği belirleyen eforun miktarı değil, uygulandığı kaldıracın uzunluğudur.</p>
    `,
    altin_kural: 'Kaldıracınız ne kadar büyükse, şans faktörüne o kadar az ihtiyaç duyarsınız.',
    rakamlar: [
      { etiket: 'Kod & Medya', deger: 'Sıfır Marjinal Maliyet' },
      { etiket: 'Sermaye', deger: 'Yüksek Risk / Getiri' },
      { etiket: 'Emek', deger: 'Zor Ölçeklenir' }
    ]
  },
  {
    slug: 'tasarruf-sanati',
    baslik: 'Tasarruf Sanatı',
    altBaslik: 'İlk Kuralı Öğrenin',
    ikon: '🏦',
    kategori: 'temel',
    kisa: 'Babil\'in en zengin adamının ilk kuralı: "Kazandığınızın en az onda birini kendinize ödeyin." Tasarruf, zenginliğin başlangıç noktasıdır.',
    detay: `Kazancınızın yüzde kaçını elinizde tuttuğunuz, zenginliğinizi belirleyen asıl metriktir.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Yüksek gelirli doktorların veya ünlü futbolcuların iflas haberlerini sıkça duyarsınız. Bunun sebebi basittir: Zenginlik, ne kadar kazandığınız değil, kazandığınız paradan ne kadarını koruyabildiğiniz ve yatırıma çevirebildiğinizdir.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Önce Kendinize Ödeyin Prensibi</h2>
      <p style="margin-bottom: 20px;">Orta sınıfın bütçe mantığı şöyledir: Maaşını alır; ev sahibine öder, kredi kartlarına öder, restorana öder, markete öder. Ay sonunda <em>kalırsa</em> yatırım yapmaya çalışır (ki genelde kalmaz). Buna "Artıktan tasarruf" denir.</p>
      
      <p style="margin-bottom: 20px;">Zengin zihniyet ise şu acımasız kuralı uygular: "Önce Kendine Öde". Maaş hesaba yattığı saniye, o paranın %20'si otomatik talimatla yatırım hesabına (hisseye, altına, fona) kesilir. Geriye kalan %80 ile yaşamak için çözüm bulunur. O %20 dokunulmazdır, sizin gelecekteki özgürlüğünüzün fidyedir.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Yaşam Tarzı Enflasyonu (Lifestyle Creep):</strong> Çoğu insanın zengin olamamasının 1 numaralı nedenidir. Maaşınız 30.000 TL iken 25.000 TL harcarsınız. Maaşınız 50.000 TL'ye çıkınca aniden arabanızı veya evinizi "yükseltir" ve harcamanızı da 45.000 TL'ye çıkarırsınız. Geliriniz arttıkça lüks algınız da aynı oranda artıyorsa, farenin koştuğu o tekerleğin (Rat Race) içinde ölene kadar koşmaya devam edersiniz.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Tasarruf Oranı (Savings Rate)</h3>
      <p style="margin-bottom: 20px;">Finansal dünyada ne zaman emekli olabileceğinizi belirleyen tek bir formül vardır: Tasarruf Oranınız. Eğer maaşınızın %10'unu tasarruf ediyorsanız, emekli olmak için yaklaşık 40 yıl çalışmanız gerekir. Ancak maaşınızın %50'sini tasarruf edip doğru yatırım yaparsanız, (Maaşınız asgari ücret dahi olsa) matematiksel olarak 15-17 yıl içinde çalışmak zorunda kalmayacak noktaya ulaşırsınız.</p>
    `,
    altin_kural: 'Tasarruf, gelecekteki özgürlüğünüzü bugünkü lükslerinizden daha çok sevmektir.',
    rakamlar: [
      { etiket: 'Minimum Alt Sınır', deger: 'Maaşın %10\'u' },
      { etiket: 'FIRE Oranı', deger: 'Maaşın %50\'si' },
      { etiket: 'Enflasyon', deger: 'Lüks Artışı' }
    ]
  },
  {
    slug: 'deger-yaratma',
    baslik: 'Değer Yaratma Sanatı',
    altBaslik: 'Para, Çözülen Sorunların Ölçüsüdür',
    ikon: '🎨',
    kategori: 'zihniyet',
    kisa: 'Para, topluma sunduğunuz değerin bir yansımasıdır. Daha çok para kazanmak istiyorsanız, daha çok insanın sorununu çözün.',
    detay: `Piyasa adaletsiz değildir, sadece sizin ona sunduğunuz değeri fiyatlar.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Maaşınızın adaletsiz olduğunu düşündüğünüzde unutmayın: Piyasa sizin ne kadar iyi bir insan olduğunuza, ne kadar yorulduğunuza veya ailenizin ne kadar masrafı olduğuna bakmaz. Piyasa sadece çözdüğünüz problemin zorluğuna ve o problemi kaç kişi için çözdüğünüze bakar.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Milyar Dolarlık Formül</h2>
      <p style="margin-bottom: 20px;">Elon Musk neden dünyanın en zengin adamı? Çünkü fosil yakıtlara olan bağımlılık gibi "küresel ve zor" bir sorunu (Tesla) ve uzay lojistiğinin maliyeti gibi devasa bir engeli (SpaceX) çözüyor. Sorunun çapı ne kadar büyükse, karşılığında gelen para da o kadar büyüktür.</p>
      
      <p style="margin-bottom: 20px;">Neden kasiyerler veya kuryeler asgari ücret alır? Kötü insanlar oldukları için veya yorulmadıkları için değil. Yaptıkları işin (sorun çözme eyleminin) yerine getirilebilirliği çok kolay olduğu içindir (Low Barrier to Entry). Birkaç saatlik eğitimle dünyadaki herkes o işi yapabilir. Kolay değişilebilen biriyseniz, kazancınız minimumda kalır.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Ölçeklendirme Çarpanı (Scale):</strong> Harika bir diyetisyenseniz ve birebir danışmanlık veriyorsanız, zengin olma limitiniz "gündüz saatleri" kadardır. Değer yaratıyorsunuz ama "ölçeklenemiyorsunuz". Aynı diyetisyen bilgisini bir yapay zeka algoritmasına veya kapsamlı bir video eğitim serisine döküp 1 Milyon insana 10 Dolardan satarsa (10 Milyon Dolar), işte o zaman zenginlik başlar. Değeri ölçeklemek şarttır.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Odak Değişimi</h3>
      <p style="margin-bottom: 20px;">"Nasıl daha çok para kazanırım?" sorusu bencildir ve zihninizi kilitler. Doğru soru şudur: <strong>"İnsanların hangi acılı, zor ve pahalı problemini onlar için daha kolay, hızlı ve ucuz hale getirebilirim?"</strong> Sorunu bulduğunuz ve çözümü milyonlara ulaştırabildiğiniz an, para bir yan ürün olarak kendiliğinden size akacaktır.</p>
    `,
    altin_kural: 'Yerine konması imkansız bir sorun çözücü (Problem Solver) olun.',
    rakamlar: [
      { etiket: 'Piyasanın baktığı', deger: 'Çözülen Sorun' },
      { etiket: 'Sır', deger: 'Ölçeklenebilirlik' },
      { etiket: 'Düşük Kazanç', deger: 'Kolay İkame' }
    ]
  },
  {
    slug: 'finansal-ozgurluk',
    baslik: 'Finansal Özgürlük Yol Haritası',
    altBaslik: 'Nihai Hedef',
    ikon: '🗽',
    kategori: 'temel',
    kisa: 'Finansal özgürlük, pasif gelirinizin giderlerinizi karşıladığı noktadır. Bu noktadan sonra çalışmak bir zorunluluk değil, tercihtir.',
    detay: `Zenginliğin asıl amacı size lüks arabalar almak değil, kendi zamanınızın kontrolünü size geri vermektir.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Paranın satın alabileceği en lüks, en nadide ve en pahalı nesne ne bir Ferrari ne de bir malikanedir; paranın satın alabileceği tek gerçek varlık "Seçme Özgürlüğü"dür. Pazartesi sabahı o alarmı kurmak veya kurmamak konusundaki tam egemenliktir.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Özgürlüğün Matematiksel Formülü (FIRE)</h2>
      <p style="margin-bottom: 20px;">Finansal Bağımsızlık ve Erken Emeklilik (FIRE) hareketinin kalbinde çok basit, devrilmesi zor bir matematiksel model yatar: <strong>%4 Kuralı (Trinity Çalışması).</strong></p>
      
      <p style="margin-bottom: 20px;">Eğer biriken yatırım portföyünüzün (hisse senedi + tahvil) içinden her yıl maksimum %4'ünü çekerseniz, paranız siz ölene kadar (enflasyona rağmen) asla bitmez. Formül basittir: <em>Yıllık Gideriniz × 25 = Finansal Özgürlük Rakamınız.</em> Ayda 50.000 TL harcıyorsanız (Yılda 600.000 TL), sizin tam olarak finansal özgür (emekli) olabilmeniz için 15 Milyon TL'lik bir yatırım portföyüne ihtiyacınız vardır.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>"F-You Money" Konsepti:</strong> Bu argo finansal terim, bankada "hayır" deme gücüne sahip olacak kadar paranızın olması demektir. İşinizde toksik bir patronunuz mu var? Şartlar size uymuyor mu? Gözünüzü kırpmadan "Ayrılıyorum" diyebildiğiniz o "Kırılma Noktası"ndaki nakit gücü, insana omurgasını dik tutma ve hayatının kontrolünü eline alma özgüveni verir.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Özgürlüğün Paradoksu</h3>
      <p style="margin-bottom: 20px;">İlginçtir ki, finansal özgürlüğüne ulaşan insanların %90'ı "çalışmayı" bırakmazlar. Tam tersine, varoluşsal bir hafifleme yaşadıkları için, korkusuzca sadece tutkulu oldukları işleri yapmaya başlarlar ve genellikle özgürlüklerinden sonra daha da çok para kazanırlar. Çünkü çaresizlik kokan kararlar değil, bolluk zihniyetine dayalı stratejik kararlar verirler.</p>
    `,
    altin_kural: 'Zenginlik bir statü sembolü değil, zamanın nihai kontrolüdür.',
    rakamlar: [
      { etiket: 'FIRE Çarpanı', deger: 'Yıllık Gider × 25' },
      { etiket: 'Güvenli Çekim', deger: '%4 Kuralı' },
      { etiket: 'Hedef', deger: 'Seçme Özgürlüğü' }
    ]
  },
  {
    slug: 'asimetrik-risk-getiri',
    baslik: 'Asimetrik Risk ve Getiri',
    altBaslik: 'Yatırımın Kutsal Kasesi',
    ikon: '⚖️',
    kategori: 'strateji',
    kisa: 'En başarılı yatırımcılar kumar oynamaz; kaybedeceklerinin çok az, kazanacaklarının ise sınırsız olduğu "asimetrik" fırsatları avlarlar.',
    detay: `Asimetrik fırsatlarda aşağı yönlü riskiniz sınırlı (örneğin sadece yatırdığınız kadar), ancak yukarı yönlü potansiyeliniz sınırsızdır (10x, 100x).`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Borsada veya iş dünyasında çoğu insan 1 birim risk alarak 1 birim kazanmaya çalışır (Simetrik Risk). Oysa efsanevi yatırımcı Paul Tudor Jones'un dediği gibi: "Eğer 1 dolar riske atıp 5 dolar kazanamıyorsam, o masaya oturmam."</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Sınırlı Kayıp, Sınırsız Kazanç</h2>
      <p style="margin-bottom: 20px;">Asimetri (orantısızlık) zenginliğin gizli şifresidir. Bir startup şirketine 10.000 TL yatırdığınızı düşünün. En kötü senaryoda (şirket batarsa) kaybedeceğiniz maksimum tutar 10.000 TL'dir. Risk "sınırlıdır". Ancak o şirket bir sonraki Uber veya Trendyol olursa, o 10.000 TL size 10 Milyon TL olarak dönebilir. Kazanç "sınırsızdır".</p>
      
      <p style="margin-bottom: 20px;">Simetrik risk alan bir memur (zaman satıp maaş alan), tüm ayını (risk) vererek sadece o ayın parasını alır. Yukarı yönlü sürprizi yoktur. Asimetrik risk alan bir yazar ise kitabını yazmak için aylarını riske atar, ancak kitap tutarsa milyonlar satarak ömür boyu asimetrik getiri sağlar.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>"Tura Gelirse Kazanırım, Yazı Gelirse Çok Az Kaybederim" Yaklaşımı:</strong> Mohnish Pabrai bu durumu "Heads I win, tails I don't lose much" olarak özetler. Gerçek yatırımcılar, piyasanın aşırı korktuğu dönemlerde, zaten fiyatı dibe vurmuş ve daha fazla düşme ihtimali matematiksel olarak çok zayıf olan şirketleri (Değer Yatırımı) alarak bu asimetriyi kendi lehlerine kurarlar.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Kariyerde Asimetri</h3>
      <p style="margin-bottom: 20px;">Kendi hayatınızda asimetrik fırsatlar yaratın: Yeni bir kodlama dili öğrenmek, size sadece birkaç ayınıza mal olur (sınırlı risk), ancak sizi global bir teknoloji şirketine sokabilir (sınırsız getiri). Biriyle tanışmak, bir mail atmak, bir proje yayınlamak... Bunların hepsinin maliyeti sıfıra yakındır, ama getirileri hayatınızı değiştirebilir.</p>
    `,
    altin_kural: 'Sadece aşağı yönlü riskin tamamen korunduğu oyunları oynayın.',
    rakamlar: [
      { etiket: 'İdeal Risk/Getiri', deger: '1\'e 5 (1:5 R/R)' },
      { etiket: 'Maksimum Kayıp', deger: '1 Birim' },
      { etiket: 'Potansiyel', deger: 'Sınırsız (10x+)' }
    ]
  },
  {
    slug: 'firsat-maliyeti',
    baslik: 'Fırsat Maliyeti',
    altBaslik: 'Görünmez Finansal Katil',
    ikon: '👻',
    kategori: 'temel',
    kisa: 'Bir şeyi seçtiğinizde, seçmediğiniz diğer şeyin getirisinden vazgeçmiş olursunuz. Her kararın gizli bir bedeli vardır.',
    detay: `500.000 TL'ye araba aldığınızda sadece o parayı harcamazsınız; o paranın 10 yıl boyunca borsada üreteceği 3 milyon TL'lik potansiyel getiriyi de "yakmış" olursunuz.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Ekonominin en temel kuralı olan Fırsat Maliyeti (Opportunity Cost), sadece zenginlerin ve yatırımcıların her saniye düşündüğü "görünmez" bir hesap makinesidir. Bir eylemi seçmek, o eylem yerine yapılabilecek diğer en iyi alternatiften feragat etmek demektir.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Görünmeyen Bedeller</h2>
      <p style="margin-bottom: 20px;">Hafta sonu Netflix izleyerek geçirdiğiniz 10 saatin maliyeti "sıfır lira" değildir. O 10 saatin maliyeti, o sürede yeni bir beceri öğrenip maaşınızı artırarak kazanabileceğiniz on binlerce liradır.</p>
      
      <p style="margin-bottom: 20px;">Aynı şekilde lüks tüketimdeki fırsat maliyeti çok daha yıkıcıdır. Cebinizdeki 100.000 TL ile son model bir akıllı telefon alırsanız, o telefonun maliyeti 100.000 TL değildir. Eğer o parayı %10 reel getiri sağlayan bir endeks fonuna koysaydınız, o para 20 yıl sonra (enflasyondan arındırılmış haliyle) 672.000 TL olacaktı. <strong>Yani o telefonun size gerçek maliyeti 672.000 TL'dir.</strong></p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>"Neye Hayır Diyorum?" Sorusu:</strong> Charlie Munger (Buffett'ın ortağı), her yatırım kararından önce şunu sorardı: "Bu şirketi alırsam, paramı bağladığım için başka hangi harika fırsatı kaçırmış olacağım?" Seçim yapmak her zaman bir vazgeçiştir. Bir hisseye "evet" demek, diğer tüm hisselere "hayır" demektir.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Parayı Zaman Üzerinden Okumak</h3>
      <p style="margin-bottom: 20px;">Fırsat maliyeti zihniyetiyle düşünmeye başladığınızda, menüdeki fiyatlara "para" olarak değil "zaman" ve "gelecekteki servet" olarak bakmaya başlarsınız. "Bu ayakkabı 5.000 TL" demek yerine, "Bu ayakkabı benim hayatımdan 3 günlük mesai çalıyor ve emekliliğimi 2 ay geciktiriyor" dersiniz. Bu zihniyet, sizi lüks tüketim bağımlılığından otomatik olarak kurtaracaktır.</p>
    `,
    altin_kural: 'Her evet, yüzlerce hayır anlamına gelir. Seçiminizin bedelini bilin.',
    rakamlar: [
      { etiket: 'Zaman Maliyeti', deger: 'Kaçırılan Mesai' },
      { etiket: 'Sermaye Maliyeti', deger: 'Kaçırılan Bileşik Faiz' },
      { etiket: 'Odak Maliyeti', deger: 'Bölünmüş Enerji' }
    ]
  },
  {
    slug: 'ekonomik-hendek',
    baslik: 'Sürdürülebilir Rekabet Avantajı (Moat)',
    altBaslik: 'Buffett\'ın Kale Savunması',
    ikon: '🏰',
    kategori: 'strateji',
    kisa: 'Bir şirketin (veya kişinin) rakipleri tarafından taklit edilmesini, pazar payını kaybetmesini zorlaştıran koruyucu bariyerlere "Moat" (Hendek) denir.',
    detay: `Eğer kolayca taklit edilebiliyorsanız veya daha ucuza yapılabiliyorsanız, kâr marjınız eninde sonunda sıfıra inecektir. Zenginlik "hendek" kazarak korunur.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Orta Çağ kalelerinin etrafında, düşmanların surlara yaklaşmasını engellemek için içi su ve timsah dolu devasa hendekler (Moat) bulunurdu. Warren Buffett, 1999 yılında bu terimi finans literatürüne kazandırarak "Ekonomik Hendek" kavramını yarattı.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Kapitalizmin Kanlı Yasası</h2>
      <p style="margin-bottom: 20px;">Kapitalizmde bir kural vardır: Nerede yüksek kâr varsa, oraya anında acımasız rakipler hücum eder ve o kâr marjını kan revan içinde sıfıra çekene kadar rekabet ederler. Sizi bu "kan gölünden" (Kızıl Okyanus) koruyan tek şey, şirketinizin etrafına kazdığınız Ekonomik Hendektir.</p>
      
      <p style="margin-bottom: 20px;">Hendek türleri 4'e ayrılır: <br>
      1. <strong>Ağ Etkisi (Network Effect):</strong> Ne kadar çok insan kullanırsa o kadar değerli olur (Instagram, WhatsApp, Visa). Rakibin aynısını yapması yetmez, kullanıcıları da çalması gerekir.<br>
      2. <strong>Değiştirme Maliyeti (Switching Costs):</strong> Müşterinin sizi bırakmasının çok acılı veya pahalı olmasıdır (Apple ekosistemi, SAP yazılımları).<br>
      3. <strong>Maliyet Avantajı:</strong> Rakiplerinizin asla inemeyeceği kadar ucuza üretebilme gücü (Amazon, Walmart, BİM).<br>
      4. <strong>Marka / Kalite (Intangible Assets):</strong> İnsanların sadece o logo için %300 fazla para ödemeye razı olması (Coca-Cola, Rolex, Ferrari).</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Kişisel Hendek İnşası (Personal Moat):</strong> Bu strateji sadece şirketler için değil, SİZİN KARİYERİNİZ için de geçerlidir. Eğer yaptığınız işi, 3 aylık kursa giden bir yeni mezun veya bir Yapay Zeka daha ucuza yapabiliyorsa, <strong>hiçbir hendeğiniz yoktur</strong> ve maaşınız düşmeye mahkumdur. Kendinizi, spesifik bilginizle (Specific Knowledge), çevrenizle ve eşsiz deneyiminizle taklit edilemez hale getirin.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Hendeksiz İşler Ölüme Mahkumdur</h3>
      <p style="margin-bottom: 20px;">Hendeksiz bir şirkete yatırım yapmak (veya böyle bir işte çalışmak), kalenizin kapılarını ardına kadar açık bırakmaktır. Mükemmel bir ilk çeyrek geçirebilirsiniz, ancak rakipler kokuyu aldığında fiyat savaşları başlayacak ve herkes kaybedecektir. Zenginler her zaman <strong>tekeli (Monopoly)</strong> arar.</p>
    `,
    altin_kural: 'Eğer rekabet ediyorsanız, bir yerlerde hata yapmışsınız demektir. Sürdürülebilir tekel olun.',
    rakamlar: [
      { etiket: 'Network Etkisi', deger: 'En Güçlü Hendek' },
      { etiket: 'Değiştirme', deger: 'Yüksek Acı Maliyeti' },
      { etiket: 'Marka Değeri', deger: 'Fiyatlandırma Gücü' }
    ]
  },
  {
    slug: 'opsiyonellik',
    baslik: 'Opsiyonellik (Optionality)',
    altBaslik: 'Nassim Taleb Felsefesi',
    ikon: '🎲',
    kategori: 'strateji',
    kisa: 'Opsiyonellik, gelecekteki fırsatlardan yararlanabilme "hakkına" sahip olup, "zorunluluğuna" sahip olmamaktır. Esneklik, en büyük güçtür.',
    detay: `Kriz anlarında elinde nakit bulunduran (opsiyonu olan) kişi piyasanın kralı olurken, tüm parasını bağlamış (zorunlu) kişi iflas eder.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;"><span class="dropcap">E</span>fsanevi risk analisti ve düşünür Nassim Nicholas Taleb'in <em>"Antikırılganlık"</em> (Antifragility) konseptinin merkezinde yatan, finans dünyasının ve hayatın en güçlü, ancak en az anlaşılan silahı: <strong>Opsiyonellik (Optionality)</strong>. Basit bir tabirle opsiyonellik; gelecekte karşınıza çıkacak potansiyel bir fırsattan veya durumdan faydalanma "hakkına" sahip olmak, ancak bunu yapmak "zorunda" kalmamaktır. Modern dünyada zenginliğin asıl ölçütü, banka hesabınızdaki sıfırların sayısı değil, hayatınızda sahip olduğunuz seçeneklerin, yani opsiyonların çokluğudur.</p>

      <h2 style="color: var(--gold-200); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">1. Zorunluluk Zindanı vs. Opsiyonellik Kalesi</h2>
      <p style="margin-bottom: 20px;">Sıradan insan, hayatını "zorunluluklar" (Obligations) üzerine inşa eder. Toplumun ona dikte ettiği "başarı" modeli, aslında bir hapishane inşasıdır: 120 ay vadeli ve yüksek faizli bir mortgage kredisi çekilir (aynı şehirde, aynı evde kalma zorunluluğu). Sadece tek bir şirkette ve tek bir yazılım dilinde geçerli olan spesifik bir beceri edinilir (o şirkete ve o patrona katlanma zorunluluğu). Her ay ödenmesi gereken devasa kredi kartı ekstreleri, araba kredileri ve aidatlar yaratılır (her ayın 1'inde o maaşı almak <em>zorunda</em> olma hali).</p>
      
      <p style="margin-bottom: 20px;"><strong>Matematiksel olarak zorunluluk, kırılganlıktır (Fragile).</strong> Eğer hayatınızda "kesinlikle" gerçekleşmesi gereken planlar varsa (işten atılmamak, şirketin batmaması, ekonominin bozulmaması), en ufak bir kara kuğu (Black Swan) olayı—örneğin bir ekonomik kriz, küresel bir virüs veya sektördeki bir yapay zeka devrimi—tüm kalenizi başınıza yıkar. Çünkü manevra yapacak alanınız (opsiyonunuz) yoktur.</p>
      
      <p style="margin-bottom: 30px;">Zengin zihniyet ise, parayı "Opsiyonellik" satın almak için kullanır. Likit nakit, dünyanın her yerinden internetle yapılabilen global yetenekler (yazılım, dijital pazarlama, metin yazarlığı) ve <strong>sıfır kişisel tüketici borcu</strong>! Patronunuz size haksızlık yaptığında veya ahlaki sınırlarınızı zorladığında, yüzüne karşı "Ben istifa ediyorum, yarın gelmiyorum" diyebilme lüksü, hayatın en saf, en paha biçilemez opsiyonelliğidir. Gerçek özgürlük, canınızın her istediğini yapabilmek değil; <em>canınızın istemediği hiçbir şeyi yapmaya mecbur kalmamaktır.</em></p>

      <div style="background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.2); padding: 30px; border-radius: 8px; margin-bottom: 50px; border-left: 5px solid #10b981;">
        <h3 style="margin-top: 0; color: #10b981; font-size: 1.6rem; margin-bottom: 15px;">2. Finansal Bekleme Odası: Neden Nakit Çöp Değildir?</h3>
        <p style="margin-bottom: 15px; color: var(--text-300);">Instagram'daki finansal gurular her zaman "Nakit çöptür, enflasyona erir, hemen bir varlığa bağlayın" der. Bu tavsiye kısmen doğrudur, enflasyon nakdin alım gücünü kemirir. Ancak nakit aynı zamanda evrendeki <strong>en yüksek opsiyonelliğe sahip varlıktır.</strong></p>
        <p style="margin-bottom: 0; color: var(--text-300);">Piyasalar panikle çöktüğünde (%40-%50 düşüşler yaşandığında), elindeki tüm sermayeyi en tepeden gayrimenkule, kriptoya veya hisseye bağlamış yatırımcı "zorunludur". Zararına satamaz, yeni bir fırsat yakalayamaz. Elinde "Kuru Sıkı Nakit" (Dry Powder) bulunduran kişi ise, o devasa düşüşlerde, piyasadaki panikleyenlerin ellerinden en değerli şirketleri ve varlıkları yarı fiyatına <strong>alma hakkına (opsiyonuna)</strong> sahiptir. Warren Buffett 2008 krizinde on milyarlarca dolarlık nakdiyle piyasaya girdiğinde bu hakkı kullandı. Nakdinizin enflasyon karşısında eridiği o %5-%10'luk kısım, büyük bir kriz günü geldiğinde piyasanın şah damarını kesmek ve servetinizi 10'a katlamak için önceden ödediğiniz bir <strong>"Sigorta Primi"dir</strong>.</p>
      </div>

      <h2 style="color: var(--gold-200); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">3. Kariyer ve Mekan Opsiyonelliği: Zincirleri Kırmak</h2>
      <p style="margin-bottom: 20px;">Opsiyonellik sadece parayla ilgili değildir; hayatın her alanına entegre edilmesi gereken bir yaşam felsefesidir.</p>
      
      <ul style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 40px; padding-left: 20px;">
        <li style="margin-bottom: 15px;"><strong style="color: #60a5fa;">Kariyer Opsiyonelliği (Halter Stratejisi):</strong> Tek bir sektöre bağlı kalmak ölümcüldür. Nassim Taleb buna Halter (Barbell) stratejisi der. Bir ucunda son derece sıkıcı, risksiz, maaşı düzenli bir işiniz olsun (Güvenlik). Ancak diğer ucunda, akşamları ve hafta sonları kendi yazılımınızı kodlayın, dijital bir iş kurun veya bir kitap yazın (Yüksek Opsiyon/Sınırsız Upside). Asla "orta riskli" tek bir alana hayatınızı gömmeyin.</li>
        <li style="margin-bottom: 15px;"><strong style="color: #f472b6;">Mekansal (Coğrafi) Opsiyonellik:</strong> Fiziksel bir ofise her sabah gitmek zorunda olmak bir zindandır. Remote (uzaktan) çalışılabilen bir meslek seçmek, "Nerede yaşayacağım?" sorusunda size sonsuz opsiyonellik sağlar. Şehriniz pahalılaşıyorsa veya vergi oranları artıyorsa, çantanızı toplayıp Bali'ye, Karadağ'a veya daha uygun bir sahil kasabasına taşınma "hakkınız" olur. Eğer bir dükkan işletiyorsanız, lokasyonunuza mahkumsunuzdur.</li>
        <li><strong style="color: #c084fc;">Sosyal Opsiyonellik:</strong> Farklı disiplinlerden, farklı ülkelerden, farklı sosyo-ekonomik sınıflardan geniş bir "Zayıf Bağlar" (Weak Ties) ağına sahip olmak. Yeni bir fırsat genelde yakın çevrenizden değil, bu zayıf bağlardan gelir. Ağınız ne kadar çeşitliyse, opsiyonlarınız o kadar fazladır.</li>
      </ul>

      <h2 style="color: var(--gold-200); font-family: var(--font-display); font-size: 2rem; margin-top: 50px; margin-bottom: 20px;">4. Asimetrik Risk: Kaybetmeyi Sınırlamak, Kazanmayı Sınırsız Yapmak</h2>
      <p style="margin-bottom: 20px;">Opsiyonelliğin matematiği <strong>"Asimetrik Risk"</strong> üzerine kuruludur. Çoğu insan kumar oynar gibi tüm hayatını tek bir seçeneğe bağlar. Evini satar, kredi çeker ve bir restoran açar. Restoran tutmazsa batar, iflas eder, ailesi dağılır. Burada risk "Simetrik" hatta negatiftir. Kayıp limitsiz ve yıkıcı, kazanç potansiyeli ise (bir restoranın alabileceği müşteri sınırlı olduğu için) tavanlıdır.</p>
      
      <p style="margin-bottom: 30px;">Zengince opsiyonellik ise şudur: Kaybetme riskinizin (downside) son derece <strong>sınırlı</strong>, önemsiz ve yönetilebilir olduğu; ancak kazanma potansiyelinizin (upside) neredeyse <strong>sonsuz</strong> olduğu küçük bahisler almaktır. Örneğin; 1 ay boyunca akşamları 2 saat harcayarak bir dijital e-kitap yazıp satışa koymak. En kötü senaryoda ne olur? Hiç satmaz. Sadece akşam izleyeceğiniz 30 saatlik Netflix dizisini kaybetmiş olursunuz (Zararınız komiktir). En iyi senaryoda ne olur? E-kitap viral olur, Amazon'da best-seller listesine girer ve uyurken size 50.000 Dolar kazandırır (Kazanç sınırsızdır). Zenginler hayatlarını bu asimetrik bahisleri arka arkaya alarak kurarlar.</p>

      <div class="article-alert" style="margin-top: 60px; background: linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(0,0,0,0.4) 100%); border-left: 4px solid var(--gold-400); border-radius: 8px;">
        <h3 style="margin-top: 0; color: var(--gold-300);">Partiye Girme Bileti (The Ticket to the Party)</h3>
        <p style="margin-bottom: 0;">Sürekli küçük, ucuz ve güvenli riskler alarak hayatın size "Şans" sunmasına izin verin. Yeni insanlarla tanışmak, blog açmak, yeni bir kodlama dili öğrenmek, erken aşamadaki fikirlere çok ufak melek yatırımlar yapmak... Bunlar sizin "opsiyon biletlerinizdir". Aldığınız biletlerin %90'ı hiçbir işe yaramayacaktır (sınırlı zarar), ancak içlerinden sadece biri tuttuğunda (Siyah Kuğu) tüm hayatınızı kökünden değiştirecektir. Opsiyonellik, şansın size çarpması için doğru kavşakta, elinizde biletle beklemektir.</p>
      </div>

      <!-- INTERACTIVE COMPONENT -->
      <div class="interactive-game" style="margin-top: 70px; background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 40px; box-shadow: 0 15px 40px rgba(0,0,0,0.6);">
        <h3 style="color: var(--gold-200); margin-top: 0; font-size: 1.8rem; margin-bottom: 15px; text-align: center;">🛡️ Hayatınızın Opsiyonellik & Kırılganlık Testi</h3>
        <p style="color: var(--text-300); margin-bottom: 30px; font-size: 1.1rem; text-align: center;">Mevcut yaşamınız bir sarsıntı anında un ufak mı olacak, yoksa sarsıntıdan beslenerek daha da mı güçlenecek? Aşağıdaki faktörleri seçerek opsiyonellik kalkanınızı test edin.</p>
        
        <div style="display: flex; flex-direction: column; gap: 20px; margin-bottom: 30px;">
          <div style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 8px; border-left: 3px solid var(--gold-500);">
            <label style="display: block; color: var(--gold-400); margin-bottom: 10px; font-weight: bold;">1. Acil Durum Nakdiniz (Dry Powder / F-You Money)</label>
            <select id="ops-cash" style="width: 100%; padding: 12px; background: #111; border: 1px solid var(--glass-border); color: white; border-radius: 8px; outline: none; font-size: 1rem; cursor: pointer;">
              <option value="-15">Her ay eksiye düşüyorum, maaş yatmadan kredi kartı dönmüyor.</option>
              <option value="-5">Neredeyse sıfır. İşsiz kalsam 1 ay sonra kirayı ödeyemem.</option>
              <option value="15">En az 6 ay hiç çalışmadan aynı standartta yaşayacak nakdim var.</option>
              <option value="30">3+ yıl yetecek, krizlerde şirket/hisse toplayacak 'Savaş Kasam' var.</option>
            </select>
          </div>
          
          <div style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 8px; border-left: 3px solid var(--gold-500);">
            <label style="display: block; color: var(--gold-400); margin-bottom: 10px; font-weight: bold;">2. Gelir Yapınızın ve Kariyerinizin Esnekliği</label>
            <select id="ops-income" style="width: 100%; padding: 12px; background: #111; border: 1px solid var(--glass-border); color: white; border-radius: 8px; outline: none; font-size: 1rem; cursor: pointer;">
              <option value="-15">Fiziksel ofise bağlıyım, sektörel yeteneğim dar, tek patrona %100 mecburum.</option>
              <option value="5">Maaşım var ama yeteneğim transfer edilebilir (Örn: Hemşire, Muhasebeci).</option>
              <option value="20">Gelirim lokasyondan bağımsız, uzaktan çalışabiliyor ve döviz kazanabiliyorum.</option>
              <option value="30">Asimetrik yeteneklerim ve dijital pasif gelir akışlarım var. Sistem bana çalışıyor.</option>
            </select>
          </div>

          <div style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 8px; border-left: 3px solid var(--gold-500);">
            <label style="display: block; color: var(--gold-400); margin-bottom: 10px; font-weight: bold;">3. Finansal/Fiziksel Borç ve Bağlılık Seviyeniz</label>
            <select id="ops-debt" style="width: 100%; padding: 12px; background: #111; border: 1px solid var(--glass-border); color: white; border-radius: 8px; outline: none; font-size: 1rem; cursor: pointer;">
              <option value="-20">Kapasitemin çok üstünde uzun vadeli ev/araç kredilerim var. Çiviliyim.</option>
              <option value="-5">Kredi yok ama aidatlar, abonelikler ve statü harcamalarımla maaşı eritiyorum.</option>
              <option value="15">Borcum sıfır, harcamalarım optimize. Ancak eşyam çok, taşınmam zor.</option>
              <option value="30">Sıfır borç, minimal yaşam. Yarın 2 valizle dünyanın diğer ucunda yeni hayata başlarım.</option>
            </select>
          </div>
        </div>
        
        <button onclick="window.hesaplaOpsiyonellik()" style="width: 100%; background: linear-gradient(135deg, var(--gold-400) 0%, var(--gold-600) 100%); color: #000; border: none; padding: 18px; font-weight: 900; font-size: 1.25rem; border-radius: 8px; cursor: pointer; transition: 0.3s; text-transform: uppercase; letter-spacing: 2px;">
          Kalkanımın Dayanıklılığını Ölç
        </button>
        
        <div id="ops-sonuc" style="margin-top: 35px; font-size: 1.15rem; line-height: 1.6; padding: 25px; border-radius: 12px; display: none; text-align: center; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);"></div>

        <script>
          window.hesaplaOpsiyonellik = function() {
            let p1 = parseInt(document.getElementById('ops-cash').value);
            let p2 = parseInt(document.getElementById('ops-income').value);
            let p3 = parseInt(document.getElementById('ops-debt').value);
            let total = p1 + p2 + p3;
            
            let sonucDiv = document.getElementById('ops-sonuc');
            sonucDiv.style.display = 'block';
            sonucDiv.style.opacity = 0;
            
            setTimeout(() => {
              sonucDiv.style.opacity = 1;
              sonucDiv.style.transition = "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
              
              if(total < 0) {
                sonucDiv.style.background = 'linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(153,27,27,0.3) 100%)';
                sonucDiv.style.border = '2px solid #ef4444';
                sonucDiv.innerHTML = "<h3 style='color:#fca5a5; margin-top:0; font-size: 1.8rem; font-family: var(--font-display);'>KIRILGAN (Skor: " + total + ") 🚨</h3><p style='color: #f87171;'>Hayatınız devasa bir Jenga kulesi gibi ve altından bir blok çekildiğinde hepsi çökecek. Kontrol sizde değil, sistemde. En ufak bir faiz artışı, hastalık veya işten çıkarma senaryosunda iflas edersiniz. Opsiyonsuzsunuz. Acilen tüketim orucuna girip, nakit kalkanı örmelisiniz.</p>";
              } else if(total < 40) {
                sonucDiv.style.background = 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(180,83,9,0.3) 100%)';
                sonucDiv.style.border = '2px solid #f59e0b';
                sonucDiv.innerHTML = "<h3 style='color:#fcd34d; margin-top:0; font-size: 1.8rem; font-family: var(--font-display);'>DAYANIKLI (Skor: " + total + ") ⚠️</h3><p style='color: #fbbf24;'>Kötü durumda değilsiniz, krizlerde hayatta kalabilirsiniz. Ancak henüz 'Antikırılgan' değilsiniz. Krizleri birer servet transferi fırsatına çevirecek cephaneniz eksik. Halterin riskli ucuna (asimetrik bahislere) biraz daha ağırlık verip, yeni beceriler eklemelisiniz.</p>";
              } else {
                sonucDiv.style.background = 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(6,95,70,0.3) 100%)';
                sonucDiv.style.border = '2px solid #10b981';
                sonucDiv.innerHTML = "<h3 style='color:#6ee7b7; margin-top:0; font-size: 1.8rem; font-family: var(--font-display);'>ANTİKIRILGAN (Skor: " + total + ") 🚀</h3><p style='color: #34d399;'>Mükemmel bir opsiyonellik ustasısınız. Sizin için krizler tehdit değil, ortalık kan gölüne dönerken piyasanın krallığını devralacağınız muazzam fırsatlardır. Hayatınızda 'Zorunda olmak' kavramı silinmiş. İstediğiniz an fişi çekip başka bir oyuna geçebilirsiniz. Tebrikler!</p>";
              }
            }, 100);
          };
        </script>
      </div>
    `,
    altin_kural: 'Planlarınızın en az %30\'u hata payı ve esneklik (opsiyonellik) içermelidir.',
    rakamlar: [
      { etiket: 'Nakit Gücü', deger: 'Kriz Opsiyonu' },
      { etiket: 'Esneklik', deger: 'Antikırılganlık' },
      { etiket: 'Borç', deger: 'Zorunluluk (Sıfır Opsiyon)' }
    ]
  },
  {
    slug: 'dolar-maliyeti-ortalamasi',
    baslik: 'Dolar Maliyeti Ortalaması (DCA)',
    altBaslik: 'Piyasanın Zamanlamasını Yenmek',
    ikon: '📅',
    kategori: 'strateji',
    kisa: 'Piyasayı zamanlamaya (dipten alıp tepeden satmaya) çalışmak aptalların oyunudur. Akıllılar "Düzenli Alım" (DCA) yaparak duygularını sistemden çıkarırlar.',
    detay: `Hisse senedi, fon veya kriptoya her ay aynı gün aynı miktarda para yatırın. Düşünce daha çok adet, çıkınca daha az adet alarak maliyeti kusursuzca ortalarsınız.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">Borsada veya kripto paralarda yapılan en ölümcül hata "Zamanlama" (Market Timing) hatasıdır. Milyonlarca yatırımcı, ellerindeki nakitle "en dip noktayı" yakalamayı bekler, ancak piyasa o dip noktayı asla göstermeden yukarı fırlar. Veya tepede açgözlülükle tüm parayı yatırıp, ertesi gün başlayan ayı piyasasında %50 içeride kalırlar.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Duyguların Matematiksel Katili</h2>
      <p style="margin-bottom: 20px;">Dolar Maliyeti Ortalaması (Dollar Cost Averaging - DCA) bu psikolojik işkenceyi bitiren, sıkıcı ama devasa kazançlı bir robottur. Elinize geçen 10.000 TL'nin tamamını tek seferde yatırmak yerine, bu parayı her ay aynı gün 1.000 TL olacak şekilde 10 aya bölersiniz.</p>
      
      <p style="margin-bottom: 20px;">Piyasa düşerse sevinirsiniz: Çünkü 1.000 TL'nizle o varlıktan çok daha fazla "adet" (lot/coin) alırsınız.<br>Piyasa çıkarsa sevinirsiniz: Çünkü zaten içeride olan paranız değerlenmektedir.<br>DCA, stresi yok eder ve maliyetinizi uzun vadeli ortalamaya çekerek yatırımın en büyük düşmanı olan "panik" duygusunu devreden çıkarır.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>"Time in the Market > Timing the Market":</strong> Tarihsel veriler kanıtlamıştır ki, borsada kalma <em>süreniz</em> (Time in the market), piyasanın tepesini ve dibini tahmin etme <em>zamanlamanızdan</em> (Timing the market) çok daha yüksek getiri sağlar. S&P 500 endeksindeki en iyi getiriyi sağlayan 10 günü (panik yapıp çıkarak) kaçıran bir yatırımcının 20 yıllık kârı yarı yarıya düşmektedir.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Otomatik Zenginleşme Sistemi</h3>
      <p style="margin-bottom: 20px;">DCA sisteminin tek şartı "disiplin"dir. İster ekonomi krizde olsun, ister faizler artsın, ister savaş çıksın... Ayın 15'i geldiğinde o 1.000 TL'lik alım "otomatik" yapılmalıdır. Robotik bir soğukkanlılıkla 10 yıl boyunca sürekli alım yapan bir DCA yatırımcısının, piyasayı yenmeye çalışan bir trader'a (al-satçı) kaybetme ihtimali istatistiksel olarak sıfıra yakındır.</p>
    `,
    altin_kural: 'Borsayı zamanlamaya çalışmak zeka değil, kibir göstergesidir.',
    rakamlar: [
      { etiket: 'Strateji', deger: 'Sürekli / Düzenli Alım' },
      { etiket: 'Duygu Durumu', deger: 'Sıfır Panik/Açgözlülük' },
      { etiket: 'Sonuç', deger: 'Ortalanmış Maliyet' }
    ]
  },
  {
    slug: 'beklenen-deger',
    baslik: 'Beklenen Değer (Expected Value)',
    altBaslik: 'Olasılıklarla Düşünmek',
    ikon: '🎯',
    kategori: 'zihniyet',
    kisa: 'Dünyadaki en iyi poker oyuncuları ellerindeki kartlara değil, kazanma olasılıkları ve masadaki potun matematiksel beklentisine göre karar verirler.',
    detay: `Bir yatırım %90 ihtimalle 1.000 TL kaybettirip, %10 ihtimalle 100.000 TL kazandıracaksa, o yatırımın "Beklenen Değeri" pozitiftir ve o risk alınmalıdır.`,
    icerik: `
      <p class="lead" style="font-size:1.3rem; color:var(--text-300); margin-bottom:40px;">İnsan beyni "kesinlik" arayacak şekilde evrimleşmiştir. Mağara döneminde belirsizlik ölüm demekti. Ancak modern kapitalizmde kesinlik, düşük getirinin garantisidir. Zenginler olayları "evet/hayır" veya "doğru/yanlış" olarak değil, "Olasılık Ağaçları" olarak görürler.</p>

      <h2 style="color: var(--white); font-family: var(--font-display); font-size: 2rem; margin-top: 40px; margin-bottom: 20px;">Beklenen Değer Formülü (EV)</h2>
      <p style="margin-bottom: 20px;">Bir kararın mantıklı olup olmadığını ölçen tek matematiksel gerçek "Expected Value" (EV) hesaplamasıdır. <br>
      <strong>Formül:</strong> (Kazanma İhtimali × Kazanılacak Tutar) - (Kaybetme İhtimali × Kaybedilecek Tutar).</p>
      
      <p style="margin-bottom: 20px;">Diyelim ki bir arkadaşınızın girişimine 10.000 TL yatıracaksınız. Bu girişimin batma ihtimali %80 (ki genelde öyledir). Ancak eğer başarılı olursa (%20 ihtimal) size 200.000 TL kazandıracak.<br>
      Negatif EV: %80 × 10.000 TL = -8.000 TL (Kayıp beklentisi)<br>
      Pozitif EV: %20 × 200.000 TL = +40.000 TL (Kazanç beklentisi)<br>
      <strong>Net Beklenen Değer: +32.000 TL.</strong><br>
      Çoğu insan "%80 batacak" diyerek korkup kaçar. Ancak profesyonel bir yatırımcı, beklenen değeri pozitif olduğu için bu riski (kendi bütçesi sarsılmayacak oranda) seve seve alır.</p>

      <div class="article-alert" style="background: rgba(212,175,55,0.08); border-left: 4px solid var(--gold-300); padding: 24px; border-radius: 0 12px 12px 0; margin: 32px 0; color: var(--white); font-size: 1.05rem; line-height: 1.7;">
        <strong>Hata Yapma Özgürlüğü:</strong> Amazon'un kurucusu Jeff Bezos, kariyeri boyunca Fire Phone gibi milyarlarca dolarlık fiyasko projeler üretti ve kaybetti. Ancak başarısız olma ihtimali çok yüksek (%90) olan ama tutarsa dünyayı değiştirecek (%10) "Amazon Web Services (AWS)" ve "Amazon Prime" gibi projelere girmekte hiç tereddüt etmedi. AWS tek başına bugün Amazon'un trilyon dolarlık kâr motorudur. Pozitif EV oyunlarında 10 kere yanılabilir, 1 kere haklı çıkarak her şeyi kazanabilirsiniz.
      </div>

      <h3 style="color: var(--gold-200); font-family: var(--font-display); font-size: 1.5rem; margin-top: 30px; margin-bottom: 15px;">Karar Günlüğü Tutmak</h3>
      <p style="margin-bottom: 20px;">Sonuçlar yanıltıcı olabilir (Buna Resulting denir). Harika bir kumarbaz elini doğru oynar ama şanssızlıktan kaybedebilir; berbat bir amatör hatalı oynar ama şans eseri kazanabilir. Önemli olan sonucun ne olduğu değil, kararı alırkenki "Beklenen Değer" (EV) matematiğinizin doğru olup olmadığıdır. Süreci kusursuz hale getirin, sonuçlar uzun vadede yasaya (Büyük Sayılar Kanunu) boyun eğecektir.</p>
    `,
    altin_kural: 'Sonuçlara göre değil, aldığınız riskin matematiksel kalitesine göre kendinizi yargılayın.',
    rakamlar: [
      { etiket: 'Formül (EV)', deger: '(İhtimal × Kazanç) - (İhtimal × Kayıp)' },
      { etiket: 'Karar Matrisi', deger: 'Kazanma Olasılığı' },
      { etiket: 'Hata Payı', deger: 'Sonuçlara Bağlanmama' }
    ]
  }
];

const OGRETI_KATEGORILER = {
  'temel': { baslik: 'Temel Prensipler', emoji: '🏛️' },
  'strateji': { baslik: 'Strateji & Taktik', emoji: '♟️' },
  'zihniyet': { baslik: 'Zihniyet & Psikoloji', emoji: '🧠' }
};

module.exports = { OGRETILER, OGRETI_KATEGORILER };
