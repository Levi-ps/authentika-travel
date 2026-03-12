// data/circuits.js

export const CIRCUITS = [
  {
    emoji:'⛵', bg:'cn1', days:4, diff:'easy', dur:'court', cats:['mer','culture'], featured:false,
    diffLabel:{fr:'🌊 Culturel',   en:'🌊 Cultural',    ar:'🌊 ثقافي'},
    title:   {fr:'Archipel, Mosquée & Marabout',              en:'Archipelago, Mosque & Marabout',                ar:'الأرخبيل والمسجد والمرابط'},
    stops:   ['🏝️ Djerba','⛵ Kerkennah','🕌 Zarzis','🌊 Bhiret El Bibène'],
    desc:    {fr:"Entre îles, sanctuaires et traditions maritimes — immersion dans l'âme spirituelle du Sud.",en:"Between islands, sanctuaries and maritime traditions — an immersion in the spiritual soul of the South.",ar:"بين الجزر والمقامات والتقاليد البحرية."},
  },
  {
    emoji:'⛰️', bg:'cn2', days:3, diff:'med',  dur:'court', cats:['desert'], featured:false,
    diffLabel:{fr:'🏜️ Aventure',   en:'🏜️ Adventure',  ar:'🏜️ مغامرة'},
    title:   {fr:'Dunes & Montagnes',                         en:'Dunes & Mountains',                             ar:'الكثبان والجبال'},
    stops:   ['🏔️ Chebika','💧 Tamerza','🌿 Mides','🏜️ Erg Oriental'],
    desc:    {fr:"Des oasis de montagne aux grandes dunes sahariennes — un contraste époustouflant.",en:"From mountain oases to the great Saharan dunes — a breathtaking contrast.",ar:"من واحات الجبال إلى الكثبان الصحراوية الكبرى."},
  },
  {
    emoji:'🐪', bg:'cn3', days:10, diff:'hard', dur:'long',  cats:['desert'], featured:true,
    diffLabel:{fr:'🏆 Expédition', en:'🏆 Expedition',   ar:'🏆 استكشاف'},
    title:   {fr:'Randonnée Chamélière – Trek dans le Sahara',en:"Camel Trek – Journey through the Sahara",        ar:'رحلة الجمال – مسير في الصحراء'},
    stops:   ['🐪 Douz','🏜️ Erg Oriental','💧 Ksar Ghilane','🌴 Kébili','⛺ Bivouac'],
    desc:    {fr:"Le circuit le plus immersif — 10 jours de trek à dos de dromadaire à travers le Sahara tunisien.",en:"Authentika's most immersive circuit — 10 days of camel trekking across the Tunisian Sahara.",ar:"أكثر مساراتنا انغماساً. 10 أيام من رحلة الجمال عبر الصحراء التونسية."},
  },
  {
    emoji:'🌅', bg:'cn4', days:7, diff:'med',  dur:'moyen', cats:['desert'], featured:false,
    diffLabel:{fr:'🏜️ Aventure',   en:'🏜️ Adventure',  ar:'🏜️ مغامرة'},
    title:   {fr:'Sahara Latitude 33°A',                      en:'Sahara Latitude 33°A',                          ar:'الصحراء خط عرض 33'},
    stops:   ['🌴 Tozeur','🏜️ Erg Oriental','💧 Ksar Ghilane','🏰 Tataouine'],
    desc:    {fr:"Sur le 33e parallèle, là où le Sahara tunisien atteint sa splendeur maximale. 7 jours inoubliables.",en:"On the 33rd parallel, where the Tunisian Sahara reaches its maximum splendour. 7 unforgettable days.",ar:"على خط العرض 33 شمالاً، حيث تبلغ الصحراء التونسية ذروة روعتها."},
  },
  {
    emoji:'⭐', bg:'cn5', days:4, diff:'sw',   dur:'court', cats:['cinema','desert'], featured:false,
    diffLabel:{fr:'🎬 Exclusif',   en:'🎬 Exclusive',   ar:'🎬 حصري'},
    title:   {fr:'Star Wars dans le Sud Tunisien',            en:'Star Wars in Southern Tunisia',                 ar:'حرب النجوم في الجنوب التونسي'},
    stops:   ['🎬 Tozeur/Nefta','🏜️ Ong Jemel','🏰 Ksar Hadada','🏡 Matmata','🌄 Sidi Bouhlel'],
    desc:    {fr:"Suivez les traces de la saga. Les décors de Tatooine vous attendent !",en:"Follow in the footsteps of the saga. The sets of Tatooine await!",ar:"اتبع آثار الملحمة الأسطورية. ديكورات كوكب تاتوين في انتظارك!"},
  },
  {
    emoji:'🌄', bg:'cn6', days:3, diff:'easy', dur:'court', cats:['desert','culture'], featured:false,
    diffLabel:{fr:'✨ Initiation', en:'✨ Beginner',     ar:'✨ مبتدئ'},
    title:   {fr:'Échappée dans le Sud',                      en:'Escape to the South',                           ar:'هروب إلى الجنوب'},
    stops:   ['🏝️ Djerba','🏰 Tataouine','🏜️ Douz'],
    desc:    {fr:"Idéal pour une première découverte — mer, désert et culture berbère en 3 jours.",en:"Ideal for a first discovery — sea, desert and Berber culture in 3 days.",ar:"المسار المثالي لاكتشاف الجنوب التونسي لأول مرة."},
  },
  {
    emoji:'🌊', bg:'cn7', days:3, diff:'easy', dur:'court', cats:['mer','desert','culture'], featured:false,
    diffLabel:{fr:'🌊 Nature',     en:'🌊 Nature',       ar:'🌊 طبيعة'},
    title:   {fr:'Mer, Lagunes & Dahar',                      en:'Sea, Lagoons & Dahar',                          ar:'البحر والبحيرات والدهار'},
    stops:   ['🌊 Zarzis','🦩 Bhiret El Bibène','🏔️ Dahar','🏰 Tataouine'],
    desc:    {fr:"Trois-en-un : lagunes de Bhiret, plages de Zarzis, montagne mystérieuse du Dahar.",en:"Three-in-one: Bhiret lagoons, Zarzis beaches, mysterious Dahar mountain.",ar:"مسار ثلاثي في واحد: بحيرات البيبان وشواطئ زرزيس وجبل الدهار."},
  },
  {
    emoji:'💎', bg:'cn8', days:4, diff:'easy', dur:'court', cats:['mer','desert','culture'], featured:false,
    diffLabel:{fr:'💎 Panoramique',en:'💎 Panoramic',    ar:'💎 بانورامي'},
    title:   {fr:'Trésors de Tunisie',                        en:'Treasures of Tunisia',                          ar:'كنوز تونس'},
    stops:   ['🕌 Tunis','🏛️ Carthage','🌹 Hammamet','🏝️ Djerba','🏜️ Douz'],
    desc:    {fr:"Le grand tour panoramique — du nord au sud, de la Méditerranée au Sahara. 4 jours.",en:"The great panoramic tour — from north to south, Mediterranean to Sahara. 4 days.",ar:"الجولة البانورامية الكبرى من الشمال إلى الجنوب. 4 أيام."},
  },
]
