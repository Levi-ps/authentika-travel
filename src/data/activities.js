// data/activities.js

export const ACTIVITIES = [
  { icon:'🚤',  bg:'am1', cats:['mer','sensation'],   tag:{fr:'🌊 Mer',      en:'🌊 Sea',    ar:'🌊 بحر'},   title:{fr:'Jet Ski & Plongée',                 en:'Jet Ski & Diving',                  ar:'جت سكي وغوص'},          sub:{fr:'Djerba · Zarzis · Côte',              en:'Djerba · Zarzis · Coast',            ar:'جربة · زرزيس'} },
  { icon:'🪂',  bg:'am2', cats:['mer','sensation'],   tag:{fr:'⚡ Sensation', en:'⚡ Thrill', ar:'⚡ إثارة'}, title:{fr:'Parachute Ascensionnel',             en:'Parasailing',                        ar:'المظلة الصاعدة'},        sub:{fr:'Djerba · Vue panoramique',            en:'Djerba · Panoramic view',            ar:'جربة · منظر بانورامي'} },
  { icon:'🚵',  bg:'a7',  cats:['desert','sensation'], tag:{fr:'⚡ Sensation', en:'⚡ Thrill', ar:'⚡ إثارة'}, title:{fr:'Quad & Buggy dans les Dunes',        en:'Quad & Buggy in the Dunes',          ar:'رباعي في الكثبان'},      sub:{fr:'Erg Oriental · Douz',                 en:'Eastern Erg · Douz',                 ar:'العرق الشرقي · دوز'} },
  { icon:'🐪',  bg:'a1',  cats:['desert'],             tag:{fr:'🐪 Phare',    en:'🐪 Top',   ar:'🐪 نجم'},   title:{fr:'Balade à Dos de Dromadaire',         en:'Camel Ride',                         ar:'جولة على الجمل'},       sub:{fr:'Erg Oriental · Coucher de soleil',    en:'Eastern Erg · Sunset',               ar:'العرق الشرقي · غروب'} },
  { icon:'🌌',  bg:'a4',  cats:['desert'],             tag:{fr:'🌌 Phare',    en:'🌌 Top',   ar:'🌌 نجم'},   title:{fr:'Nuit sous les Étoiles',             en:'Stargazing Night',                   ar:'ليلة تحت النجوم'},       sub:{fr:'Camp nomade · Bivouac',               en:'Nomad camp · Bivouac',               ar:'مخيم البدو · مبيت'} },
  { icon:'🏔️', bg:'om',  cats:['nature','culture'],   tag:{fr:'🌿 Nature',  en:'🌿 Nature', ar:'🌿 طبيعة'}, title:{fr:'Oasis de Montagne',                 en:'Mountain Oases',                     ar:'واحات الجبال'},          sub:{fr:'Chebika · Tamerza · Mides',           en:'Chebika · Tamerza · Mides',          ar:'شبيكة · تامزة · ميدس'} },
  { icon:'🥾',  bg:'an2', cats:['nature','desert'],    tag:{fr:'🌿 Nature',  en:'🌿 Nature', ar:'🌿 طبيعة'}, title:{fr:'Randonnée Pédestre au Dahar',        en:'Hiking in the Dahar',                ar:'المشي في جبال الدهار'}, sub:{fr:'Tataouine · Sentiers berbères',       en:'Tataouine · Berber trails',          ar:'تطاوين · مسارات أمازيغية'} },
  { icon:'🏰',  bg:'a5',  cats:['culture'],             tag:{fr:'🏛️ Patrimoine',en:'🏛️ Heritage',ar:'🏛️ تراث'},title:{fr:'Tour des Ksour Millénaires',        en:'Millennial Ksour Tour',              ar:'جولة القصور الألفية'},  sub:{fr:'Ksar Ouled Soltane · Ksar Hadada',   en:'Ksar Ouled Soltane · Ksar Hadada',   ar:'قصر أولاد سلطان'} },
  { icon:'🎬',  bg:'sw',  cats:['cinema','desert'],    tag:{fr:'⭐ Exclusif', en:'⭐ Exclusive',ar:'⭐ حصري'}, title:{fr:'Sur les Traces de Star Wars',        en:'In the Footsteps of Star Wars',      ar:'على خطى حرب النجوم'},   sub:{fr:'Tozeur · Matmata · Ksar Hadada',     en:'Tozeur · Matmata · Ksar Hadada',     ar:'توزر · مطماطة'} },
  { icon:'🐪',  bg:'oj',  cats:['cinema','desert'],    tag:{fr:'🎬 Star Wars',en:'🎬 Star Wars',ar:'🎬 حرب النجوم'},title:{fr:'Ong Jemel – Planète Tatooine', en:'Ong Jemel – Planet Tatooine',        ar:'عنق الجمل – تاتوين'},   sub:{fr:'Tozeur · Paysage lunaire',            en:'Tozeur · Lunar landscape',           ar:'توزر · منظر قمري'} },
  { icon:'🏺',  bg:'a3',  cats:['culture'],             tag:{fr:'🤝 Local',   en:'🤝 Local',  ar:'🤝 محلي'},  title:{fr:'Ateliers Poterie & Artisanat',      en:'Pottery & Crafts Workshop',          ar:'ورشة الفخار'},           sub:{fr:'Guermessa · Artisans berbères',       en:'Guermessa · Berber artisans',        ar:'غرمسة · حرفيون'} },
  { icon:'🌴',  bg:'a2',  cats:['culture'],             tag:{fr:'🌴 Découverte',en:'🌴 Discovery',ar:'🌴 اكتشاف'},title:{fr:'Tozeur & Nefta – Perles du Djerid',en:'Tozeur & Nefta – Djerid Gems',      ar:'توزر ونفطة – جواهر الجريد'},sub:{fr:'Palmeraie · Chott El-Jérid',       en:'Palm grove · Chott El-Jerid',        ar:'غابة النخيل · شط الجريد'} },
]

export const ACTIVITY_FILTERS = [
  { v:'all',     labelKey:'actAll' },
  { v:'mer',     labelKey:'actMer' },
  { v:'desert',  labelKey:'actDesert' },
  { v:'nature',  labelKey:'actNature' },
  { v:'culture', labelKey:'actCulture' },
  { v:'sensation',labelKey:'actSensation' },
  { v:'cinema',  labelKey:'actCinema' },
]
