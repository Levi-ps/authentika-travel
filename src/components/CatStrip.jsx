// components/CatStrip.jsx
import styles from './CatStrip.module.css'

const CATS = [
  { icon:'🏠', href:'#',             fr:'Accueil',         en:'Home',        ar:'الرئيسية' },
  { icon:'🧭', href:'#about',        fr:'À Propos',        en:'About',       ar:'من نحن' },
  { icon:'🏨', href:'#hotels',       fr:'Hôtels',          en:'Hotels',      ar:'فنادق' },
  { icon:'✈️', href:'#vols',         fr:'Vols',            en:'Flights',     ar:'رحلات' },
  { icon:'🌅', href:'#activites',    fr:'Activités',       en:'Activities',  ar:'أنشطة' },
  { icon:'🚙', href:'#excursions',   fr:'Excursions',      en:'Excursions',  ar:'جولات' },
  { icon:'🗺️', href:'#circuits',    fr:'Circuits',        en:'Tours',       ar:'مسارات' },
  { icon:'🏕️', href:'#hebergements',fr:'Héberg. Alt.',    en:'Alt. Stays',  ar:'إقامة بديلة' },
  { icon:'💼', href:'#mice',         fr:'MICE Entreprises',en:'Corporate',   ar:'سياحة أعمال' },
  { icon:'🎓', href:'#formations',   fr:'Formations',      en:'Training',    ar:'تدريب' },
  { icon:'⭐', href:'#temoignages',  fr:'Témoignages',     en:'Reviews',     ar:'تقييمات' },
  { icon:'📩', href:'#contact',      fr:'Contact',         en:'Contact',     ar:'تواصل' },
]

export default function CatStrip({ lang }) {
  const label = (c) => lang === 'fr' ? c.fr : lang === 'en' ? c.en : c.ar
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        {CATS.map((c, i) => (
          <a key={i} href={c.href} className={`cat-btn ${styles.btn} ${i === 0 ? styles.active : ''}`}>
            <span>{c.icon}</span>{label(c)}
          </a>
        ))}
      </div>
    </div>
  )
}
