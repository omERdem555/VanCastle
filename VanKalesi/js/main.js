// Sidebar toggle for small screens
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
if(toggleBtn){
  toggleBtn.addEventListener('click', ()=>{
    sidebar.classList.toggle('open');
  });
}

// Highlight active link based on current URL
const links = document.querySelectorAll('.menu a');
links.forEach(link=>{
  const href = link.getAttribute('href');
  if(location.pathname.endsWith(href) || location.pathname.endsWith(href.replace('./',''))){
    links.forEach(l=>l.classList.remove('active'));
    link.classList.add('active');
  }

  // On small screens: close sidebar after clicking a menu link to improve navigation
  link.addEventListener('click', ()=>{
    if(window.innerWidth <= 800 && sidebar.classList.contains('open')){
      sidebar.classList.remove('open');
    }
  });
});

// --- Language switcher and simple translation system ---
const translations = {
  en: {

    // Giriş (Home) translations
    'nav.home':'Home',
    'nav.tarih':'Historical Background',
    'nav.urartu':'Urartu Period and Cuneiform',
    'nav.arkeoloji':'Archaeological Findings',
    'nav.osmanli':'Ottoman & Seljuk Structures',
    'nav.tanitim':'Promotion & Project Strategy',
    'nav.gorseller':'Images',
    'nav.sonuc':'Conclusion',
    'nav.kaynakca':'References',
    'nav.ulasim':'Transportation Options',
    'nav.yemeicme':'Food and Beverage Establishments',
    'nav.konaklama':'Accommodation Options',
    'nav.alisveris':'Shopping and Souvenir Places',
    

    //Başlık (Title) translations
    'title.home':'Home',
    'title.tarih':'Historical Background',
    'title.urartu':'Urartu Period and Cuneiform',
    'title.arkeoloji':'Archaeological Findings',
    'title.osmanli':'Ottoman & Seljuk Structures',
    'title.tanitim':'Promotion & Project Strategy',
    'title.gorseller':'Images',
    'title.sonuc':'Conclusion',
    'title.kaynakca':'References',
    'title.ulasim':'Transportation Options',
    'title.yemeicme':'Food and Beverage Establishments',
    'title.konaklama':'Accommodation Options',
    'title.alisveris':'Shopping and Souvenir Places',

    // Görseller (Images) translations
    'gorseller.loading':'Images are loading... If none are found, please add them to <code>assets/images/gorseller/</code> named gorsel-01.jpg, etc.',
    'gorseller.none':'No images found. Please add images to <code>assets/images/gorseller/</code> as gorsel-01.jpg ...',
    'gorseller.intro':'This page contains photographs of Van Castle and its surroundings.',


    // Giriş (Home) translations
    'home.intro':'Van Castle, located within the borders of Van province in Eastern Anatolia, is a magnificent historic fortress rising on the eastern shore of Lake Van. As the former capital of the Urartu Kingdom and for retaining traces of subsequent civilizations, it is one of the region’s most important cultural heritage sites. The castle and its surroundings were added to UNESCO’s Tentative List for World Heritage in 2016, yet visitor numbers remain below expectations despite its tourism potential. In particular, shortcomings in promotion and infrastructure have prevented Van Castle from receiving the national and international attention it deserves (Keleş Eriçok, 2019). Nevertheless, with its rich historical heritage and unique setting, the fortress is a major attraction for cultural tourism. Indeed, Van Castle is a multi-layered destination that includes structures from Urartu to the Ottoman period. Together with the ruins of the old city that surround the castle, this area offers visitors both natural scenery and an opportunity to experience millennia of history. This study will examine the historical background of Van Castle by period, analyze the original architectural and epigraphic heritage of the Urartu period in detail, evaluate the archaeological findings uncovered at the site, and finally present strategies and recommendations for promoting the castle and attracting visitors.',

    // Tarihi Arka Plan (Historical Background) translations
    'tarih.urartu.h':'Urartu Period (9th–6th c. BCE)',
    'tarih.urartu.p':'The foundations of Van Castle were laid by the Urartu Kingdom in the mid-9th century BCE. The fortress was established as the kingdom\'s capital, known as Tushpa, under King Sarduri I (Diker, 2015). In Assyrian sources called Turushpa, Tushpa was likely founded around 840–825 BCE. During the Urartian period the site was strengthened with defensive walls and served as an administrative center with palaces, temples, and storerooms. At the kingdom\'s height, kings ruled here; its strategic position made it both a military and administrative center. Throughout Urartian rule (c. 9th–mid-6th centuries BCE), Tushpa housed temples dedicated to major Urartian deities such as Haldi, Teisheba and Shivini, as well as royal burial monuments. By the late 6th century BCE Urartu weakened and fell to the Medes and then the Persians, ending Tushpa’s political prominence.',
    'tarih.pers.h':'Persian and Hellenistic Period (6th–1st c. BCE)',
    'tarih.pers.p':'After Urartu’s collapse, Van and its surroundings fell under Median and then Achaemenid Persian rule. The most notable remnant from this period at Van Castle is the trilingual cuneiform inscription carved by Persian King Xerxes I (reigned c. 486–465 BCE). Located on the southern cliff, the inscription—written in Old Persian, Babylonian and Elamite—praises Ahura Mazda and records royal titles and Darius’s succession. This Xerxes inscription is notable as the only Achaemenid royal inscription found outside Iran. Following the Persian period and Alexander’s campaigns, the region came under Macedonian, Hellenistic and early Roman (Artaxiad Armenian and Parthian) influences, but few clear architectural remains of these eras survive at the castle (Özbey, 2020). This suggests the fortress lost much of its former prominence and was overshadowed by surrounding settlements.',
    'tarih.orta.h':'Medieval and Seljuk Period (5th–15th c. CE)',
    'tarih.orta.p':'During the medieval period Van and its surroundings passed between the Byzantine Empire, the Armenian Vaspurakan kingdom and various Islamic polities. From the 11th century Seljuk conquests brought Turkic rule, and by the 12th century the area fell under the Ahlatshahs. Urban development continued in Van; the old Van Great Mosque (Eski Van Ulu Camii) is believed to have origins in this era (likely during Sökmen of Ahlat). A notable Seljuk-era element is the red-brick minaret of the Kızıl Minareli Mosque near the northern slopes (13th c.), while the mosque itself was later rebuilt (probably in Ottoman times). Throughout the Middle Ages the castle retained strategic importance for local dynasties (e.g., Kara Koyunlu, Ak Koyunlu), although relatively few monuments from these periods survive within the fortress; the main settlement expanded on the plain below.',
    'tarih.osmanli.h':'Ottoman Period (16th–20th c.)',
    'tarih.osmanli.p':'After alternating occupations by Safavid and Ottoman forces in the early 16th century, Van was fully incorporated into the Ottoman Empire during Suleiman the Magnificent’s campaigns (1548). Under Ottoman rule the castle regained military and administrative significance: fortifications were repaired and new defensive bastions were added to the inner fortress. The Süleyman Han Mosque erected on the summit during the Suleiman era became a symbolic marker of Ottoman rule (İpekyolu Municipality, 2023). A series of rammed-earth bastions and other Ottoman structures altered the castle silhouette (Diker, 2015). In later centuries the site suffered damage during conflicts, including 19th-century Russian occupations and the 1915 battles; the historic town declined and the castle’s heritage was later protected as an archaeological site. Today the fortress and surroundings serve as an open-air museum of remains from Urartu to the Ottoman period.',


    // Osmanlı ve Selçuklu Yapıları (Ottoman & Seljuk Structures) translations
    'osmanli.intro':'Van Castle and its surroundings contain some of the most important post‑Urartian architectural remains in the form of Islamic‑period structures from the Seljuk and Ottoman eras. These include mosques, tombs and examples of vernacular architecture. The old city to the north of the fortress (an abandoned settlement on the plain at the foot of the castle) preserves many Seljuk and Ottoman period structural remains.',
    'osmanli.ulu.h':'Old Van Great Mosque (Ulu Cami)',
    'osmanli.ulu.p':'The Ulu Mosque, known as the oldest mosque of Van, has no certain founding date but architectural features and historical records suggest a 12th‑century origin. Excavations and studies indicate it was likely built under the Ahlatshah rulers (Sökmen I or II). Work led by Prof. Oktay Aslanapa in the 1970s uncovered remains showing a rectangular east‑west prayer hall with a multi‑column (hypostyle) layout; today only foundations and wall fragments survive. Recent restoration efforts by the Governorship of Van aim to consolidate and partially restore the surviving fabric to preserve this 800–900‑year‑old heritage.',
    'osmanli.kizil.h':'Kızıl Minareli Mosque (Sinaniye Mosque)',
    'osmanli.kizil.p':'Located in the eastern quarter of the old city (Tebrizkapı), the Kızıl Minareli Mosque takes its name from a surviving red‑brick minaret that likely dates to the Seljuk period (c.13th century). The minaret stands on a stone base and features a geometric decorative band with tile fragments (baçini technique); its upper sections are largely ruined. The mosque building itself appears to be an Ottoman‑period construction (possibly 16th–17th century) and survives only as wall ruins; the monument is notable for preserving elements from different periods.',
    'osmanli.kaya.h':'Kaya Çelebi Mosque',
    'osmanli.kaya.p':'The Kaya Çelebi Mosque is an important Ottoman monument in the old city at the northern foot of the fortress. Commissioned by Kaya Çelebizade Koçi Bey in 1660, construction stalled after his execution and the building was completed only in the early 18th century, giving rise to the local “unfinished mosque” legend. Built of dressed stone with a near‑rectangular plan, it originally had a central dome with surrounding barrel vaults; main walls remain though the dome has collapsed. A decorated brick‑and‑stone minaret adjoins the mosque, and recent intervention by the General Directorate of Foundations has begun work toward restoration.',
    'osmanli.husrev.h':'Hüsrev Paşa Külliyesi',
    'osmanli.husrev.p':'The Hüsrev Pasha complex was endowed in the 16th century by Köse Hüsrev Pasha and built in 1567 by Lütfi Usta, a pupil of Mimar Sinan. The külliye included a mosque, madrasa, bath and imaret; 19th‑century earthquakes and wartime damage reduced it largely to foundations. Archival plans and drawings indicate a nine‑domed central plan and two minarets of differing construction (red brick and dressed stone). The site is protected within the archaeological area and is considered for restoration.',
    'osmanli.suleyman.h':'Süleyman Han Mosque',
    'osmanli.suleyman.p':'After Suleiman the Magnificent’s conquest of Van, a small commemorative mosque—the Süleyman Han Mosque—was erected on the fortress summit. It is a modest square, single‑domed building with a small minaret, restored in the late 20th century and brought back into liturgical use in the 2010s; it remains a symbolic visitor site with panoramic views over Lake Van.',
    'osmanli.sivil.h':'Vernacular Architecture and Other Remains',
    'osmanli.sivil.p':'Beyond mosques, the old city contains remains of baths, madrasas and caravanserais (for example Hüsrev Pasha Bath and the Tüccarbaşı/Katırcıoğlu Han). Epigraphic material such as gravestones and fountain inscriptions is curated in the Van Museum. A reconstructed traditional Van house (Van Evi) near the castle now functions as a museum and restaurant, enriching the visitor experience of local architecture.',
    'osmanli.summary':'Overall, Van Castle and the old city preserve important Islamic‑period architectural heritage from the Seljuk to the Ottoman eras, offering visitors a layered historical landscape which complements the earlier Urartian remains.',
    'urartu.p1':'The richest accumulation of historical material at Van Castle belongs to the Urartian period. Inscriptions, rock tombs and temple structures left by Urartian kings are found on the castle rock and surrounding cliffs. Cuneiform inscriptions in the Urartian language occur both on the fortress itself and on nearby rocks. Urartian cuneiform is formally adapted from Assyrian script; the Urartians used the Assyrian cuneiform system to write their own language. Urartian is an agglutinative language related to the Hurrian languages of Eastern Anatolia and the Caucasus and is not part of the Indo-European or Semitic families (Zimansky, 2011). Modern linguists have successfully deciphered Urartian: the recurrence of royal names known from Assyrian inscriptions in Urartian texts facilitated analysis. In the 1820s the traveler Friedrich Eduard Schulz copied Urartian inscriptions on the castle rock and these were published in 1840 (Schulz, 1840). Mid-19th-century progress in reading Assyrian-Babylonian cuneiform accelerated work on Urartian; notably the German philologist Johannes Friedrich published the first comprehensive grammar of Urartian in 1933, enabling extensive reading of Urartian cuneiform (Friedrich, 1933). As a result the phonetic values and grammatical structure of Urartian became understood; today royal inscriptions and year texts are largely readable. Urartian cuneiform texts typically record kings’ victories, conquests, public works and dedications to gods, offering an official historical narrative akin to Assyrian royal annals.',
    'urartu.p2':'One of the oldest Urartian cuneiform inscriptions at the castle is on the Madır Bastion (Sardur Bastion) at the western end. Attributed to Sarduri I, this inscription is among the earliest wall writings left by Urartian kings and likely records the founding of the fortress and the king\'s titles (Özbey, 2020). Urartian kings commonly recorded major building works and victories in cuneiform on rock; at Van Castle a series of inscriptions from different reigns survives. Among the best known is the long Horhor Inscription (Horhor Chronicle) on a southwestern rock face, a 13-line chronicle describing the victories and major events of King Argishti I (reigned c. 785–764 BCE). The Horhor Inscription documents Argishti’s campaigns and the kingdom’s northern expansion, making it a primary source for Urartian history (Genç & Konyar, 2019). Other significant inscriptions belong to rulers such as Sarduri II, Ishpuini and Menua; some Menua inscriptions (c. 810–785 BCE) detail public works like irrigation canals, notably the Shamram Canal, demonstrating advanced Urartian engineering.',
    'urartu.p3':'Linguistically, Urartian is an agglutinative language that uses rich suffixation particularly in verbal inflection. Its decipherment relied both on identifying personal names shared with Assyrian texts and on comparison with cognates in the related Hurrian language. Technically, the cuneiform used is nearly identical to Assyrian cuneiform: texts are written in columns left-to-right with each sign representing a syllable (usually an open or closed syllable). The Urartians also used Assyrian signs for numbers and some ideograms; titles such as “great king” or certain deity names are often rendered by Assyrian ideograms. Urartian inscriptions are now largely readable and are compiled in corpora such as the Corpus Inscriptionum Urarticarum (Salvini, 2008). Philological approaches together with archaeological context—comparison of copies and bilingual inscriptions—have been essential in interpretation. In short, the cuneiform inscriptions at Van Castle are primary documents for Urartian history, and research into their interpretation continues.',

    /* Arkeoloji (Archaeological Findings) translations */
    'arkeoloji.intro.p1':'Van Castle and its surroundings feature deeply stratified archaeological deposits due to continuous occupation over centuries. The Van Castle Mound (Van Castle Höyük), located northwest of the fortress just outside the outer walls, exemplifies this multi-layered historical accumulation. Excavations conducted in 1990 by Prof. M. Taner Tarhan and his team identified successive occupational layers (Tarhan & Sevin, 1992). At the base are prehistoric remains, above them an Early Urartian phase (likely a settlement predating the fortress), then a Late Urartian phase (the later stages of Tushpa), and finally layers dating to the medieval period (possibly Armenian or Islamic). These findings suggest that a settlement existed near Van Castle before the 1st millennium BCE and that occupation continued at the fortress’s foot after the Urartian period.',
    'arkeoloji.intro.p2':'Ceramic finds from the mound, especially in the medieval layers, show features consistent with medieval Islamic ceramics (Tarhan & Sevin, 1992). Small finds recovered from the mound (coins, arrowheads, etc.) provide evidence for the fortress’s military and commercial functions. Excavations at the Van Castle Mound continue intermittently and supply important data documenting continuous occupation of the region from the Bronze Age through the Middle Ages.',

    'arkeoloji.kaya.h':'Rock Tombs and Monumental Structures',
    'arkeoloji.kaya.p1':'The castle rock preserves numerous rock-cut architectural features dating to the Urartian period, foremost among them the monumental rock tombs of the Urartian kings. Carved at different points on the fortress rock, these tombs served as royal burial places. One of the most notable examples is the Founder\'s Tomb or Tomb of Sarduri I on the eastern slope: a structure formed by carving the rock from south to north and consisting of a sequence of chambers. The tomb includes a large entrance hall and three smaller rooms opening off it, and its entrance passage has a vaulted ceiling hewn out of the rock.',
    'arkeoloji.kaya.p2':'Immediately west of this monumental tomb there is another rock-cut tomb entrance, known as the Inner Fortress Tomb or Ishpuini-Menua Tomb. Similarly arranged with an antechamber and side rooms, it resembles the first in design. At the western end of the fortress, at a lower elevation, lies another monumental tomb known as the Horhor Cave or Tomb of Argishti I. This complex is considered one of the most developed examples of Urartian rock tomb architecture, with numerous rooms, niches and decorative elements. Its large entrance hall, many subsidiary chambers and molded wall profiles reflect refined Urartian stone‑working. The famous long inscription of Argishti (the Horhor Chronicle) was found at the entrance to the Horhor Tomb.',

    'arkeoloji.analikiz.h':'Analı‑Kız and Other Rock Monuments',
    'arkeoloji.analikiz.p1':'Another important archaeological feature from the Urartian period is the rock monument known as the Analı‑Kız Open‑Air Complex on the northern slope of the fortress. Commonly called Analı‑Kız but also referred to as the Treasury Gate in some sources, the structure consists of a flat platform cut into the rock at a height near the plain and two large rectangular rock niches behind it (Genç & Konyar, 2019). The Analı‑Kız area was excavated by Russian researchers Nicholas Marr and Iosif Orbeli in 1916, and it has since been described as an open‑air ritual space; the interpretation was partly informed by channel systems cut into the rock north of the niches, which were seen as possible libation channels.',
    'arkeoloji.analikiz.p2':'Recent research offers alternative views on the function of the complex. Excavations and literature reviews from the 2010s led Genç and Konyar (2019) to propose that Analı‑Kız may not be a classical temple. Their work indicates construction phases under Urartian kings Menua, Ishpuini and Sarduri II and describes the structure as a unique monumental unit specific to the capital Tushpa. The absence of cult statues or clear altar traces within the niches and evidence for possible enclosing walls has led the authors to suggest the site could be a monumental complex where royal stelae or annual inscriptions were displayed.',

    'arkeoloji.diger.h':'Other Finds and the Meher Gate',
    'arkeoloji.diger.p1':'Another noteworthy set of remains at Van Castle consists of rock‑cut rooms and niches, particularly on the citadel (the highest and most rugged portion of the fortress). Foundations carved into the main rock suggest a square, two‑room building that may have belonged to an Urartian temple (Özbey, 2020). Since Urartian temples are often square and tower‑like, the remains atop the fortress may indicate a sacred structure. In addition, a single‑room rectangular chamber cut into the northern slope yielded a cuneiform inscription from the reign of King Menua mentioning the term \"shirshini\", possibly denoting a special room or building type.',
    'arkeoloji.diger.p2':'Alongside Urartian architectural remains, later civilization traces are also present but more limited; direct evidence of Persian, Hellenistic or Roman construction within the fortress is scarce. Finds from these periods appear more commonly around the castle and across the Van plain. For example, foundations on the southern slopes near the old city could date to Late Roman–Early Byzantine phases (possibly a church or garrison), but such remains are fragmentary.',
    'arkeoloji.diger.p3':'The Meher Gate monument— a large rock‑cut niche on the southern face roughly 20 metres above the plain—brings together elements associated with both the Urartian and Persian periods. The niche likely dates to the Urartian era and may have served as an artificial temple doorway or a niche for a statue of Haldi (Tarhan & Sevin, 1975). In later centuries, Persian King Xerxes I inscribed his trilingual royal text on the niche’s inner surface. The surrounding Urartian frame and carving remain visible, illustrating how later empires repurposed existing monumental platforms for their inscriptions and propaganda.',

    'arkeoloji.summary':'In sum, the Urartian layers at Van Castle make the site resemble an open‑air museum: royal tombs, temple areas, cuneiform inscriptions and rock‑cut architecture are strongly present. The coexistence of traces from many different periods makes the castle and its surroundings an invaluable laboratory for archaeological research. Recent mound excavations have clarified stratigraphy and promise that further detailed study will illuminate the urban plan and life of ancient Tushpa.',


    // Tanıtım ve Proje Stratejisi (Promotion & Project Strategy) translations
    'tanitim.intro':'Van Castle’s tourism potential requires a comprehensive promotion and project strategy to reach broader audiences. Modern communication tools and cultural marketing methods should be used to the fullest extent; below are the key strategies and methods that can be followed for the castle’s promotion.',
    'tanitim.web.h':'Website Development',
    'tanitim.web.p':'A professional website offering content in Turkish and English (and other languages if possible) should be created. It should include the castle’s history, images, visitor information (opening hours, directions), virtual tour options and interactive maps. High-quality 3D models or aerial drone videos would enrich the online experience. The site must be mobile-friendly and include UNESCO Tentative List information, academic research links and event announcements; SEO should be used to improve discoverability for keywords like "Van Castle" and "Van Kalesi".',
    'tanitim.social.h':'Social Media Use',
    'tanitim.social.p':'Social media channels (Instagram, Facebook, Twitter/X, YouTube) should host official accounts with regular, high-quality visual content (photos, drone reels) and engagement activities (hashtag campaigns, contests, influencer visits) to raise awareness and drive visitation.',
    'tanitim.multilang.h':'Bilingual and Multilingual Content',
    'tanitim.multilang.p':'All promotional materials should be available in Turkish and English and where possible in additional languages. QR-coded panels, multilingual brochures, audio-guides and downloadable guidebooks improve accessibility for international visitors.',
    'tanitim.media.h':'Visual and Audio Materials',
    'tanitim.media.p':'Professional photography, short documentaries, drone footage, 3D visualizations and multilingual audio guides (or VR experiences) will significantly enhance the castle’s promotional reach across platforms and events.',
    'tanitim.brand.h':'Branding and Storytelling',
    'tanitim.brand.p':'Develop a brand story and slogan that highlights Van Castle’s unique values and layered history; combine academic accuracy with engaging narratives to attract broad audiences.',
    'tanitim.educ.h':'Education and Community Engagement',
    'tanitim.educ.p':'Educational programs in schools and collaborations with university departments can foster local ownership and produce trained guides; community participation through craft markets and festivals should be encouraged.',
    'tanitim.route.h':'Cultural Route and Integration',
    'tanitim.route.p':'Integrate Van Castle into a regional cultural route with signage, joint ticketing and transport connections to encourage longer visits and regional tourism packages.',
    'tanitim.pr.h':'Media and Public Relations',
    'tanitim.pr.p':'Proactively prepare press materials for major discoveries, collaborate with broadcasters and tour operators, and promote Van at tourism fairs with professional media kits.',
    'tanitim.conclusion':'In summary, the proposed strategy combines digital promotion with traditional methods to safeguard heritage and boost the local economy.',


    // Kaynakça (References) translations
    'kaynakca.diker':'Diker, H. F. (2015). Van Kalesi Osmanlı Dönemi Burçları Üzerine Gözlemler. Megaron, 10(3), 282–293. (A detailed study describing and assessing the earthen Ottoman-period bastions at Van Castle.)',
    'kaynakca.genc':'Genç, B. & Konyar, E. (2019). Van Kalesi Analıkız Yapısı: İşlev ve Kronolojisine Dair Bir Değerlendirme. Anadolu Araştırmaları, 22, 1–23. (An academic paper re-evaluating the function and chronology of the Analıkız rock monument (an open‑air Urartian shrine).)',
    'kaynakca.keles':'Keleş Eriçok, A. (2019). Van Gölü Havzası’nda Kültür Rotası Önerisi. Yüzüncü Yıl Üniversitesi Sosyal Bilimler Enstitüsü Dergisi, (45), 173–199. (A study evaluating the cultural tourism potential of the Van region and proposing an integrated cultural route.)',
    'kaynakca.ozbey':'Özbey, V. (2020). Van Kalesi. In N. Kozak (Ed.), Online Türkiye Turizm Ansiklopedisi. Accessed: 13.12.2025. (Encyclopedia entry summarizing Van Castle\'s history and remains by period.)',
    'kaynakca.shen':'Shen, C. (2025). Social media marketing and digital influence for visitor flow management in sustainable heritage tourism. Scientific Reports, 11 Dec 2025. (Online publication.)',
    'kaynakca.tarhan':'Tarhan, M. T. & Sevin, V. (1992). Van Kalesi ve Eski Van Şehri Kazıları 1990 Yılı Çalışmaları. Türk Tarih Kurumu Belleten, 56(217), 1081–1100. (A primary report detailing the 1990 excavations at Van Castle and the Old Van mound.)',
    'kaynakca.sehrivan':'Şehrivan Haber. (2025, 16 August). "Van Kalesi’ndeki sır açığa çıkıyor: 2.500 yıllık Serhas anıtı Türkçeye çevrildi". (News article reporting the translation of the 2,500-year-old Serhas monument at Van Castle and its significance for Achaemenid heritage.)',


    // Sonuç (Conclusion) translations
    'sonuc.p1':'Van Castle is a significant part of humanity’s heritage: the fortress traces a continuous history from the magnificent Urartian capital of Tushpa to the present. With monumental rock tombs, cuneiform inscriptions, medieval churches and Ottoman bastions, the site functions as an open‑air museum. Despite this extraordinary cultural wealth, the castle has not yet received the full national and international attention it merits. With the right strategies, however, Van Castle can readily become a compelling attraction.',
    'sonuc.p2':'To attract more visitors, accessibility and visibility must be improved. As detailed in this report, an active presence on digital platforms and targeted multilingual promotion will support that aim. Given the profile of modern tourists, a well‑executed social media and online campaign can produce measurable results; global studies show heritage destinations often see notable visitor increases when digital marketing is effectively applied (Shen, 2025).',
    'sonuc.p3':'Site management and visitor experience should also be enhanced. Installing clear signage, interpretive panels, shaded rest areas and visitor‑friendly amenities will increase dwell time and satisfaction. Pursuing permanent inscription on the UNESCO World Heritage List would markedly raise international recognition; this requires protecting the site’s authentic values and aligning management plans with international conservation standards.',
    'sonuc.p4':'A further recommendation is to adopt sustainable, participatory tourism practices. Strengthening local benefits from tourism will foster local ownership of the site: employ local guides, prioritise regional products (Van carpets, inlaid silver, etc.) in souvenir supply, and promote Van cuisine in accommodation facilities. Such measures help tourism support cultural continuity and local economic development.',
    'sonuc.p5':'In short, with appropriate conservation and promotion policies Van Castle can become a shining tourism destination in Eastern Anatolia. Scientific research, effective dissemination of findings, and visitor experiences that leave a lasting impression will together reinvigorate the glory of Tushpa. Through collaboration between planners, scholars and local authorities this unique heritage can be preserved and shared with the world.',
  

    'ulasim.p': 'Van Castle is an easily accessible tourist attraction due to its proximity to the city center of Van. It can be reached from the city center by municipal buses, minibuses, taxis, and private vehicles. For visitors from outside the city, Van Ferit Melen Airport provides air access to Van. Furthermore, Van Bus Terminal and railway connections facilitate travel to Van from various cities, making visits to Van Castle easier.',

    'yemeicme.p': 'For tourists visiting Van Castle, there are many dining options in and around the castle and in Van city center. Restaurants serving the traditional Van breakfast are particularly famous. Sütçü Kenan Breakfast Salon, Bak Hele Bak Breakfast Salon, and Van Breakfast House are frequently chosen by visitors. Meşhur Van Sofrası, Kervansaray Restaurant, and Sur Restaurant, offering regional cuisine, are among the prominent establishments. Additionally, Erciş Balık Evi, known for its fish dishes, and Akdamar Restaurant, notable for its scenic views, also serve visitors.',

    'konaklama.p': 'Van province offers a wide range of accommodation options to suit different budgets and expectations. Hotels located in the city center, such as DoubleTree by Hilton Van, Elite World Van Hotel, and Ramada by Wyndham Van, are popular choices due to their comfortable services. Additionally, Yakut Hotel, Royal Palas Hotel, Toprak Hotel, Hotel Dosco, and Akdamar Hotel also offer convenient accommodation alternatives for tourists thanks to their proximity to Van Castle.',

    'alisveris.p': 'Shopping areas in Van city center allow visitors to both meet their daily needs and purchase local products. Van AVM and Van Mall offer modern shopping opportunities. For those who prefer traditional shopping, Beşyol Square Bazaar, the shops on Kazım Karabekir Street, and Van Silversmiths Bazaar are important centers. Additionally, the Local Products Market offers products unique to Van, such as herbal cheese, honey, and carpets; while souvenir shops around Van Castle offer tourists local mementos.'
  }
};

function storeDefaultTexts(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{ if(!el.dataset.tr) el.dataset.tr = el.innerHTML; });
}

function applyTranslations(lang){
  storeDefaultTexts();
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    const txt = (lang === 'tr') ? el.dataset.tr : (translations[lang] && translations[lang][key]) ? translations[lang][key] : el.dataset.tr;
    el.innerHTML = txt;
  });
  document.querySelectorAll('.lang-switch button').forEach(btn=> btn.classList.toggle('active', btn.dataset.lang === lang));
  localStorage.setItem('lang', lang);
}

window.getTranslation = function(key){
  const lang = localStorage.getItem('lang') || 'tr';
  if(lang === 'tr') return document.querySelector('[data-i18n="'+key+'"]')?.dataset.tr || '';
  return translations[lang] && translations[lang][key] ? translations[lang][key] : document.querySelector('[data-i18n="'+key+'"]')?.dataset.tr || '';
};

// listen for clicks on language buttons
document.addEventListener('click', function(e){
  const btn = e.target.closest('.lang-switch button');
  if(btn){ applyTranslations(btn.dataset.lang); }
});

// apply stored language on load
document.addEventListener('DOMContentLoaded', function(){
  const lang = localStorage.getItem('lang') || 'tr';
  applyTranslations(lang);
});
