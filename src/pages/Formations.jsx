// pages/Formations.jsx
import { FORMATIONS } from '../data/formations'
import styles from './Formations.module.css'
export default function Formations({ t, lang }) {
  const lbl = (obj) => obj[lang] ?? obj.fr
  return (
    <section id="formations" className={styles.section}>
      <div className="reveal">
        <div className="section-label">{t('Expertise & Certifications','Expertise & Certifications','الخبرة والشهادات')}</div>
        <h2 className="section-title">{t(<>Formations & <em>Accompagnement</em></>,<>Training & <em>Support</em></>,<>التدريب <em>والمرافقة</em></>)}</h2>
      </div>
      <div className={styles.grid}>
        {FORMATIONS.map((f,i) => (
          <div key={i} className={`${styles.card} reveal`}>
            <div className={`${styles.head} ${f.bg}`}>
              <span className={styles.icon}>{f.icon}</span>
              <div className={styles.org}>{f.org}</div>
            </div>
            <div className={styles.body}>
              <div className={styles.title}>{lbl(f.title)}</div>
              <p className={styles.desc}>{lbl(f.desc)}</p>
              <div className={styles.topics}>{f.topics.map((tp,j)=><span key={j}>{tp}</span>)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
