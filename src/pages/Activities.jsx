// pages/Activities.jsx
import { useState } from 'react'
import { ACTIVITIES } from '../data/activities'
import styles from './Activities.module.css'

const FILTERS = [
  { v:'all',       fr:'🌍 Toutes',          en:'🌍 All',          ar:'🌍 الكل' },
  { v:'mer',       fr:'🌊 Mer & Plage',     en:'🌊 Sea & Beach',  ar:'🌊 بحر وشاطئ' },
  { v:'desert',    fr:'🏜️ Désert',          en:'🏜️ Desert',       ar:'🏜️ صحراء' },
  { v:'nature',    fr:'🌿 Nature',           en:'🌿 Nature',        ar:'🌿 طبيعة' },
  { v:'culture',   fr:'🏺 Culture',          en:'🏺 Culture',       ar:'🏺 ثقافة' },
  { v:'sensation', fr:'⚡ Sensations',        en:'⚡ Thrills',       ar:'⚡ إثارة' },
  { v:'cinema',    fr:'🎬 Star Wars',        en:'🎬 Star Wars',    ar:'🎬 حرب النجوم' },
]

export default function Activities({ t, lang }) {
  const [filter, setFilter] = useState('all')
  const lbl = (obj) => obj[lang] ?? obj.fr
  const visible = ACTIVITIES.filter(a => filter === 'all' || a.cats.includes(filter))

  return (
    <section id="activites" className={styles.section}>
      <div className="reveal">
        <div className="section-label">{t('Vivre le Sud', 'Experience the South', 'عِش الجنوب')}</div>
        <h2 className="section-title">
          {t(<>Toutes Nos <em>Activités</em></>, <>All Our <em>Activities</em></>, <>جميع <em>أنشطتنا</em></>)}
        </h2>
      </div>

      <div className={`filter-bar reveal`}>
        {FILTERS.map(f => (
          <button
            key={f.v}
            className={`filter-btn-light ${filter === f.v ? 'active' : ''}`}
            onClick={() => setFilter(f.v)}
          >
            {lbl(f)}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map((a, i) => (
          <div key={i} className={`${styles.card} reveal`}>
            <div className={styles.imgWrap}>
              <div className={`${styles.imgBg} ${a.bg}`} />
              <span className={styles.emoji}>{a.icon}</span>
            </div>
            <div className={styles.label}>
              <strong>{lbl(a.title)}</strong>
              <span>{lbl(a.sub)}</span>
            </div>
            <div className={styles.tag}>{lbl(a.tag)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
