// components/Topbar.jsx
import styles from './Topbar.module.css'

export default function Topbar({ lang, setLang }) {
  const labels = {
    fr: { phone: 'Tél', loc: 'Sud Tunisien' },
    en: { phone: 'Tel', loc: 'Southern Tunisia' },
    ar: { phone: 'هاتف', loc: 'الجنوب التونسي' },
  }
  const l = labels[lang]

  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        <span className={styles.item}><span>📞</span> +216 XX XXX XXX</span>
        <span className={styles.item}><span>✉️</span> contact@authentika-travel.tn</span>
        <span className={styles.item}><span>📍</span> {l.loc}</span>
      </div>
      <div className={styles.langGroup}>
        {['fr', 'en', 'ar'].map((code) => (
          <button
            key={code}
            className={`${styles.langBtn} ${lang === code ? styles.active : ''}`}
            onClick={() => setLang(code)}
          >
            {code.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )
}
