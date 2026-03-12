// pages/Testimonials.jsx
import { TESTIMONIALS } from '../data/testimonials'
import styles from './Testimonials.module.css'

export default function Testimonials({ t, lang }) {
  const lbl = (obj) => obj[lang] ?? obj.fr
  return (
    <section id="temoignages" className={styles.section}>
      <div className={`${styles.header} reveal`}>
        <div className="section-label" style={{justifyContent:'center'}}>{t('Ils Nous Font Confiance', 'They Trust Us', 'ثقوا بنا')}</div>
        <h2 className="section-title light" style={{textAlign:'center'}}><em>{t('Témoignages', 'Testimonials', 'شهادات')}</em></h2>
      </div>
      <div className={styles.grid}>
        {TESTIMONIALS.map((tm, i) => (
          <div key={i} className={`${styles.card} reveal`}>
            <div className={styles.stars}>{tm.stars}</div>
            <div className={styles.quote}>"</div>
            <p className={styles.text}>{lbl(tm.text)}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{tm.avatar}</div>
              <div>
                <div className={styles.name}>{tm.name}</div>
                <div className={styles.role}>{lbl(tm.role)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
