// pages/Hebergements.jsx
import { HEBERGEMENTS } from '../data/hebergements'
import styles from './Hebergements.module.css'
export default function Hebergements({ t, lang }) {
  const lbl = (obj) => obj[lang] ?? obj.fr
  return (
    <section id="hebergements" className={styles.section}>
      <div className="reveal">
        <div className="section-label" style={{color:'var(--gold)'}}>{t('Dormir Autrement','Stay Differently','نم بطريقة مختلفة')}</div>
        <h2 className="section-title light">{t(<><em>Hébergements</em> Alternatifs</>,<>Alternative <em>Stays</em></>,<><em>إقامات</em> بديلة</>)}</h2>
      </div>
      <div className={styles.grid}>
        {HEBERGEMENTS.map((h,i) => (
          <div key={i} className={`${styles.card} reveal`}>
            <div className={`${styles.img} ${h.bg}`}>
              <span>{h.icon}</span>
              <div className={styles.badge}><span>{lbl(h.badge)}</span></div>
            </div>
            <div className={styles.body}>
              <div className={styles.name}>{lbl(h.name)}</div>
              <div className={styles.loc}>📍 {h.loc}</div>
              <div className={styles.feats}>{h.feats.map((f,j)=><span key={j}>{f}</span>)}</div>
              <div className={styles.priceRow}>
                <span className={styles.price}><strong>{h.price}</strong><small>/{t('nuit','night','ليلة')}</small></span>
                <a href="#contact" className="card-link">{t('Réserver','Book','احجز')} →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
