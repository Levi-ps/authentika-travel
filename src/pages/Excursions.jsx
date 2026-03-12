// pages/Excursions.jsx
import { useState } from 'react'
import { EXCURSIONS } from '../data/excursions'
import styles from './Excursions.module.css'

const FILTERS = [
  { v:'all',     count:12, fr:'🌍 Toutes',     en:'🌍 All',       ar:'🌍 الكل' },
  { v:'1j',      count:6,  fr:'☀️ 1 Jour',     en:'☀️ 1 Day',     ar:'☀️ يوم واحد' },
  { v:'2j',      count:6,  fr:'🌅 2 Jours',    en:'🌅 2 Days',    ar:'🌅 يومان' },
  { v:'mer',     fr:'🌊 Mer',          en:'🌊 Sea',       ar:'🌊 بحر' },
  { v:'desert',  fr:'🏜️ Désert',       en:'🏜️ Desert',    ar:'🏜️ صحراء' },
  { v:'culture', fr:'🏺 Culture',      en:'🏺 Culture',   ar:'🏺 ثقافة' },
]

export default function Excursions({ t, lang }) {
  const [filter, setFilter] = useState('all')
  const lbl = (obj) => obj[lang] ?? obj.fr
  const visible = EXCURSIONS.filter(e => filter === 'all' || e.dur === filter || e.cats.includes(filter))

  const bookWhatsApp = (exc) => {
    const msg = `🗺️ Réservation Excursion — Authentika Travel\n📌 ${exc.title.fr}\n📍 ${exc.desc.fr}`
    window.open(`https://wa.me/21600000000?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="excursions" className={styles.section}>
      <div className="reveal">
        <div className="section-label" style={{color:'var(--gold)'}}>
          {t('Journées & Week-ends Inoubliables', 'Unforgettable Days & Weekends', 'أيام وعطل لا تُنسى')}
        </div>
        <h2 className="section-title light">
          {t(<>Nos <em>Excursions</em></>, <>Our <em>Excursions</em></>, <><em>جولاتنا</em></>)}
        </h2>
      </div>

      <div className="filter-bar reveal">
        {FILTERS.map(f => (
          <button
            key={f.v}
            className={`filter-btn-dark ${filter === f.v ? 'active' : ''}`}
            onClick={() => setFilter(f.v)}
          >
            {lbl(f)}
            {f.count && <span className="filter-count">{f.count}</span>}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map((e, i) => (
          <div key={i} className={`${styles.card} reveal`}>
            <div className={styles.imgWrap}>
              <div className={`${styles.imgBg} ${e.bg}`} />
              <span className={styles.emoji}>{e.icon}</span>
            </div>
            <div className={`${styles.durBadge} ${e.dur === '1j' ? styles.dur1 : styles.dur2}`}>
              {e.dur === '1j' ? `☀️ ${t('1 Jour','1 Day','يوم')}` : `🌅 ${t('2 Jours','2 Days','يومان')}`}
            </div>
            <div className={styles.body}>
              <div className={styles.tag}>{lbl(e.tag)}</div>
              <h3 className={styles.title}>{lbl(e.title)}</h3>
              <p className={styles.desc}>{lbl(e.desc)}</p>
              <div className={styles.footer}>
                <span className={styles.meta}>👥 {e.pax} {t('pers.','pers.','شخص')}</span>
                <button className="btn-wa" onClick={() => bookWhatsApp(e)}>
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
