// pages/Circuits.jsx
import { useState } from 'react'
import { CIRCUITS } from '../data/circuits'
import styles from './Circuits.module.css'

const FILTERS = [
  { v:'all',    count:8, fr:'🌍 Tous',        en:'🌍 All',         ar:'🌍 الكل' },
  { v:'court',           fr:'⚡ 3–4 Jours',   en:'⚡ 3–4 Days',    ar:'⚡ 3-4 أيام' },
  { v:'moyen',           fr:'🌅 5–7 Jours',   en:'🌅 5–7 Days',    ar:'🌅 5-7 أيام' },
  { v:'long',            fr:'🏆 8–10 Jours',  en:'🏆 8–10 Days',   ar:'🏆 8-10 أيام' },
  { v:'desert',          fr:'🏜️ Désert',       en:'🏜️ Desert',      ar:'🏜️ صحراء' },
  { v:'mer',             fr:'🌊 Mer',          en:'🌊 Sea',          ar:'🌊 بحر' },
  { v:'cinema',          fr:'🎬 Star Wars',    en:'🎬 Star Wars',   ar:'🎬 حرب النجوم' },
]

const DIFF_CLASS = { easy:'diffEasy', med:'diffMed', hard:'diffHard', sw:'diffSw' }

export default function Circuits({ t, lang }) {
  const [filter, setFilter] = useState('all')
  const lbl = (obj) => obj[lang] ?? obj.fr
  const visible = CIRCUITS.filter(c => filter === 'all' || c.dur === filter || c.cats.includes(filter))

  const bookWhatsApp = (c) => {
    const msg = `🗺️ Demande Circuit — Authentika Travel\n📌 ${c.title.fr}\n📅 ${c.days} jours\n📍 ${c.stops.join(' · ')}`
    window.open(`https://wa.me/21600000000?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="circuits" className={styles.section}>
      <div className="reveal">
        <div className="section-label">{t('Voyages Complets', 'Complete Journeys', 'رحلات متكاملة')}</div>
        <h2 className="section-title">
          {t(<>Nos <em>Circuits</em> Authentiques</>, <>Our Authentic <em>Tours</em></>, <><em>مساراتنا</em> الأصيلة</>)}
        </h2>
      </div>

      <div className="filter-bar reveal">
        {FILTERS.map(f => (
          <button
            key={f.v}
            className={`filter-btn-dark ${filter === f.v ? 'active' : ''}`}
            onClick={() => setFilter(f.v)}
          >
            {lbl(f)} {f.count && <span className="filter-count">{f.count}</span>}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map((c, i) => (
          <div key={i} className={`${styles.card} ${c.featured ? styles.featured : ''} reveal`}>
            <div className={`${styles.imgWrap} ${c.bg}`}>
              <div className={styles.daysBadge}>
                {c.days}<small>{t('Jours','Days','أيام')}</small>
              </div>
              <div className={`${styles.diff} ${styles[DIFF_CLASS[c.diff]]}`}>
                {lbl(c.diffLabel)}
              </div>
              <span className={styles.emoji}>{c.emoji}</span>
            </div>
            <div className={styles.body}>
              {c.featured && (
                <div className={styles.featuredLabel}>⭐ {t('Circuit Signature','Signature Tour','مسار مميز')}</div>
              )}
              <h3 className={styles.title}>{lbl(c.title)}</h3>
              <div className={styles.stops}>
                {c.stops.map((s, j) => <span key={j}>{s}</span>)}
              </div>
              <p className={styles.desc}>{lbl(c.desc)}</p>
              <div className={styles.footer}>
                <div className={styles.meta}>
                  <span>👥 {t('Sur demande','On request','حسب الطلب')}</span>
                  <span>🏷️ {t('Sur devis','Quote on request','حسب الطلب')}</span>
                </div>
                <button
                  style={{background:'#25D366',color:'white',border:'none',padding:'0.45rem 1rem',fontSize:'0.62rem',fontWeight:800,letterSpacing:'0.08em',textTransform:'uppercase',cursor:'pointer',fontFamily:'var(--font-body)',whiteSpace:'nowrap'}}
                  onClick={() => bookWhatsApp(c)}
                >
                  💬 {t('Réserver','Book','احجز')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
