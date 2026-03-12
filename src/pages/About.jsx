// pages/About.jsx
import styles from './About.module.css'
import desertPhoto from '../assets/01_0_53719700-1758804826.jpg'
const PILLARS = [
  { icon:'🌊', fr:'Mer & Bien-être',       en:'Sea & Wellness',       ar:'البحر والعافية',      sub:'Djerba · Zarzis · Thalasso · Spa' },
  { icon:'🏜️',fr:'Désert & Aventure',      en:'Desert & Adventure',   ar:'الصحراء والمغامرة',  sub:'Erg Oriental · Ksour · Oasis' },
  { icon:'🏔️',fr:'Oasis de Montagne',      en:'Mountain Oases',       ar:'واحات الجبال',        sub:'Tozeur · Chebika · Tamerza' },
  { icon:'🎬', fr:'Star Wars',              en:'Star Wars',            ar:'حرب النجوم',          sub:'Tozeur · Matmata · Ong Jemel' },
  { icon:'🌿', fr:'Durabilité · DRV',       en:'Sustainability · DRV', ar:'الاستدامة · DRV',    sub:'Formateur & Coach Certifié' },
  { icon:'🎓', fr:'SME Loop · GIZ',         en:'SME Loop · GIZ',       ar:'SME Loop · GIZ',      sub:'Formateur Certifié' },
]

const MISSIONS = [
  { icon:'🌍', fr:'Valoriser le territoire',    en:'Showcase the territory',    ar:'تثمين التراب',       descFr:"Faire rayonner le patrimoine naturel, culturel et humain du Sud tunisien.",  descEn:"Showcase the natural, cultural and human heritage of southern Tunisia.",  descAr:"إبراز التراث الطبيعي والثقافي للجنوب التونسي." },
  { icon:'🤝', fr:'Soutenir les communautés',    en:'Support communities',       ar:'دعم المجتمعات',      descFr:"Créer un impact économique positif pour les artisans et guides locaux.",      descEn:"Create positive economic impact for local artisans and guides.",           descAr:"خلق أثر اقتصادي إيجابي للحرفيين والمرشدين المحليين." },
  { icon:'♻️', fr:'Promouvoir la durabilité',   en:'Promote sustainability',    ar:'تعزيز الاستدامة',    descFr:"Former et accompagner les professionnels vers des pratiques responsables.",   descEn:"Train professionals towards responsible practices.",                        descAr:"تدريب المهنيين نحو ممارسات مسؤولة." },
  { icon:'🎬', fr:'Ouvrir le Sud au monde',      en:'Open the South to world',   ar:'فتح الجنوب على العالم',descFr:"Attirer les fans de Star Wars, amateurs de bien-être et de culture berbère.", descEn:"Attract Star Wars fans, wellness lovers and Berber culture enthusiasts.",  descAr:"استقطاب محبو حرب النجوم وعشاق العافية." },
  { icon:'💡', fr:"Innover pour l'avenir",       en:'Innovate for tomorrow',     ar:'الابتكار للمستقبل',   descFr:"Intégrer le marketing territorial et l'économie circulaire dans chaque projet.", descEn:"Integrate territorial marketing and circular economy into every project.", descAr:"دمج التسويق الإقليمي والاقتصاد الدائري." },
]

export default function About({ t, lang }) {
  const pl = (p) => lang === 'fr' ? p.fr : lang === 'en' ? p.en : p.ar
  return (
    <section id="about" className={styles.section}>
      {/* Visual */}
      <div className={`${styles.visual} reveal`}>
        <div className={styles.mainImg}>
  <img src={desertPhoto} alt="Désert tunisien" style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}} />
</div>
        <div className={styles.floatBox}>
          <strong>+25</strong>
          <span>{t("Ans d'Expérience", 'Years Experience', 'سنوات خبرة')}</span>
        </div>
        <div className={styles.corner} />
      </div>

      {/* Text */}
      <div className="reveal">
        <div className="section-label">{t('Qui Sommes-Nous', 'About Us', 'من نحن')}</div>
        <h2 className="section-title">
          {t(
            <>Acteur Incontournable du <em>Tourisme Sud Tunisien</em></>,
            <>Essential Player in <em>South Tunisian Tourism</em></>,
            <>الفاعل الأساسي في <em>سياحة الجنوب التونسي</em></>
          )}
        </h2>

        <p className={styles.bodyText}>
          {t(
            <>Notre cœur d'activité bat au rythme des vagues turquoise de <strong>Djerba</strong> et de <strong>Zarzis</strong>, du souffle chaud des dunes de l'<strong>Erg Oriental</strong>, du silence millénaire des <strong>Ksour de Tataouine</strong>. Sans oublier <strong>Tozeur et Nefta</strong> et le site lunaire d'<strong>Ong Jemel</strong>.</>,
            <>Our heart beats to the rhythm of the turquoise waves of <strong>Djerba</strong> and <strong>Zarzis</strong>, the warm breath of the <strong>Eastern Erg</strong> dunes, and the silence of the <strong>Ksour of Tataouine</strong>. Plus <strong>Tozeur and Nefta</strong> and the lunar landscape of <strong>Ong Jemel</strong>.</>,
            <>يتمحور نشاطنا حول إيقاع أمواج <strong>جربة</strong> و<strong>زرزيس</strong> وكثبان <strong>العرق الشرقي</strong> وقصور <strong>تطاوين</strong>.</>
          )}
        </p>
        <p className={styles.bodyText}>
          {t(
            <>Avec plus de <strong>25 ans d'expérience</strong> et <strong>3 500 voyageurs satisfaits</strong>, Authentika Travel s'est imposé comme la référence du tourisme authentique. Pour les fans de cinéma, nous vous emmenons <strong>sur les traces de Star Wars</strong>.</>,
            <>With over <strong>25 years of experience</strong> and <strong>3,500 satisfied travelers</strong>, Authentika Travel is the reference for authentic tourism in southern Tunisia.</>,
            <>بفضل أكثر من <strong>25 عامًا من الخبرة</strong> و<strong>3500 رحالة سعيد</strong>، أصبحت المرجع في السياحة الأصيلة.</>
          )}
        </p>

        <div className={styles.pillars}>
          {PILLARS.map((p, i) => (
            <div key={i} className={styles.pillar}>
              <span className={styles.pillarIcon}>{p.icon}</span>
              <div>
                <strong>{pl(p)}</strong>
                <span>{p.sub}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.philoMissions} reveal`}>
          <div className={styles.philoBox}>
            <div className={styles.boxLabel}>{t('Notre Philosophie', 'Our Philosophy', 'فلسفتنا')}</div>
            <p className={styles.philoText}>
              {t(
                '"Voyager authentiquement, c\'est écouter le rythme de la terre qui vous accueille — que ce soit le murmure des vagues de Djerba, le souffle du vent sur les dunes ou le silence sacré des Ksour millénaires."',
                '"To travel authentically is to listen to the rhythm of the land that welcomes you — whether it is the murmur of the waves of Djerba, the breath of the wind on the Erg dunes or the sacred silence of the Ksour."',
                '"السفر الأصيل يعني الإصغاء لإيقاع الأرض التي تستقبلك — سواء كان همس أمواج جربة أو نسيم الرياح أو الصمت المقدس للقصور العريقة."'
              )}
            </p>
          </div>
          <div className={styles.missionBox}>
            <div className={`${styles.boxLabel} ${styles.missionLabel}`}>{t('Nos Missions', 'Our Missions', 'مهامنا')}</div>
            <ul className={styles.missionList}>
              {MISSIONS.map((m, i) => (
                <li key={i}>
                  <span>{m.icon}</span>
                  <span>
                    <strong>{pl(m)}</strong><br />
                    {lang === 'fr' ? m.descFr : lang === 'en' ? m.descEn : m.descAr}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
