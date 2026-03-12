// pages/Hotels.jsx
import { useState } from 'react'
import styles from './Hotels.module.css'

const DESTINATIONS = [
  { group:'🌊 Sud — Mer & Désert', opts:[{v:'djerba',l:'🏝️ Djerba'},{v:'zarzis',l:'🌊 Zarzis'},{v:'douz',l:'🌴 Douz'},{v:'tozeur',l:'🏜️ Tozeur'},{v:'tataouine',l:'🏰 Tataouine'}]},
  { group:'🏖️ Centre — Côte', opts:[{v:'sousse',l:'🌅 Sousse'},{v:'monastir',l:'⛵ Monastir'},{v:'hammamet',l:'🌹 Hammamet'}]},
  { group:'🌆 Nord', opts:[{v:'tunis',l:'🕌 Tunis'},{v:'tabarka',l:'🌲 Tabarka'}]},
]

export default function Hotels({ t }) {
  const [dest, setDest] = useState('all')
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [cat, setCat] = useState('all')
  const [counts, setCounts] = useState({ rooms:1, adults:2, children:0, baby:0 })
  const [region, setRegion] = useState('all')
  const [confirmed, setConfirmed] = useState(false)

  const nuits = checkin && checkout ? Math.round((new Date(checkout)-new Date(checkin))/86400000) : 0
  const change = (k, d) => setCounts(c => ({ ...c, [k]: Math.max(k==='adults'||k==='rooms'?1:0, Math.min(10, c[k]+d)) }))

  const regions = [
    {v:'all', fr:'🌍 Toute la Tunisie', en:'🌍 All Tunisia', ar:'🌍 كل تونس'},
    {v:'sud', fr:'🌊 Sud', en:'🌊 South', ar:'🌊 الجنوب'},
    {v:'centre', fr:'🏖️ Centre', en:'🏖️ Center', ar:'🏖️ الوسط'},
    {v:'nord', fr:'🌆 Nord', en:'🌆 North', ar:'🌆 الشمال'},
  ]

  const summary = [
    `📍 ${dest==='all'?t('Toute la Tunisie','All Tunisia','كل تونس'):dest}`,
    `📅 ${t('Séjour','Stay','الإقامة')} : ${checkin||'?'} → ${checkout||'?'}${nuits>0?` (${nuits} ${t('nuit(s)','night(s)','ليلة')})`:''}`,
    `👤 ${counts.adults} ${t('adulte(s)','adult(s)','بالغ')}${counts.children>0?`, ${counts.children} ${t('enfant(s)','child(ren)','طفل')}`:''}`,
    `🛏️ ${counts.rooms} ${t('chambre(s)','room(s)','غرفة')}`,
  ]

  return (
    <section id="hotels" className={styles.section}>
      <div className="reveal">
        <div className="section-label" style={{color:'var(--gold)'}}>{t('Toute la Tunisie','All Tunisia','كل تونس')}</div>
        <h2 className="section-title light">{t(<>Trouvez Votre <em>Hôtel Idéal</em></>,<>Find Your <em>Perfect Hotel</em></>,<>ابحث عن <em>فندقك المثالي</em></>)}</h2>
      </div>

      <div className={`${styles.engine} reveal`}>
        <div className={styles.row}>
          <div className={styles.field} style={{flex:2}}>
            <label>{t('📍 Destination','📍 Destination','📍 الوجهة')}</label>
            <select value={dest} onChange={e=>setDest(e.target.value)} className={styles.input}>
              <option value="all">{t('— Toutes les destinations —','— All destinations —','— جميع الوجهات —')}</option>
              {DESTINATIONS.map((g,i)=>(
                <optgroup key={i} label={g.group}>
                  {g.opts.map(o=><option key={o.v} value={o.v}>{o.l}</option>)}
                </optgroup>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label>{t('📅 Arrivée','📅 Check-in','📅 الوصول')}</label>
            <input type="date" value={checkin} onChange={e=>setCheckin(e.target.value)} className={styles.input}/>
          </div>
          <div className={styles.field}>
            <label>{t('📅 Départ','📅 Check-out','📅 المغادرة')}</label>
            <input type="date" value={checkout} onChange={e=>setCheckout(e.target.value)} className={styles.input}/>
          </div>
          <div className={styles.field}>
            <label>{t('🌙 Nuitée(s)','🌙 Night(s)','🌙 ليلة')}</label>
            <div className={styles.nuitsDisplay}>{nuits>0?`${nuits} ${t('nuit(s)','night(s)','ليلة')}`:'—'}</div>
          </div>
        </div>
        <div className={styles.row}>
          {[{k:'rooms',l:t('🛏️ Chambre(s)','🛏️ Room(s)','🛏️ غرفة')},{k:'adults',l:t('👤 Adulte(s)','👤 Adult(s)','👤 بالغ')},{k:'children',l:t('🧒 Enfant(s)','🧒 Child(ren)','🧒 طفل')},{k:'baby',l:t('🍼 Lit bébé','🍼 Baby cot','🍼 سرير')}].map(({k,l})=>(
            <div key={k} className={styles.field}>
              <label>{l}</label>
              <div className={styles.counter}>
                <button onClick={()=>change(k,-1)}>−</button>
                <span>{counts[k]}</span>
                <button onClick={()=>change(k,1)}>+</button>
              </div>
            </div>
          ))}
          <div className={styles.field}>
            <label>{t('⭐ Catégorie','⭐ Category','⭐ التصنيف')}</label>
            <select value={cat} onChange={e=>setCat(e.target.value)} className={styles.input}>
              <option value="all">{t('Toutes','All','الكل')}</option>
              <option value="5">★★★★★</option><option value="4">★★★★</option><option value="3">★★★</option><option value="eco">♻️ Éco</option>
            </select>
          </div>
          <button className={styles.searchBtn} onClick={()=>setConfirmed(true)}>🔍 {t('Rechercher','Search','بحث')}</button>
        </div>
      </div>

      <div className={`${styles.regionTabs} reveal`}>
        {regions.map(r=>(
          <button key={r.v} className={`${styles.regionBtn} ${region===r.v?styles.activeRegion:''}`} onClick={()=>setRegion(r.v)}>
            {r[t('fr','en','ar')]||r.fr}
          </button>
        ))}
      </div>

      {confirmed && (
        <div id="hotels-confirm" className="confirm-box reveal">
          <div style={{fontSize:'3rem',flexShrink:0}}>✅</div>
          <div>
            <div className="confirm-title">{t('Votre recherche a bien été reçue !','Your search has been received!','تم استلام بحثك!')}</div>
            <p className="confirm-text">{t(<>Notre équipe vous contacte <strong>dans les 2 heures</strong>.</>,<>Our team will contact you <strong>within 2 hours</strong>.</>,<>سيتصل بك فريقنا <strong>خلال ساعتين</strong>.</>)}</p>
            <div className="confirm-summary">{summary.map((l,i)=><div key={i}>{l}</div>)}</div>
            <div className="confirm-actions">
              <a href={`https://wa.me/21600000000?text=${encodeURIComponent('🏨 Demande hôtel — Authentika Travel\n'+summary.join('\n'))}`} target="_blank" rel="noreferrer" className="btn-wa-big">💬 WhatsApp</a>
              <a href="mailto:contact@authentika-travel.tn" className="btn-email-big">✉️ Email</a>
              <button className="btn-reset" onClick={()=>setConfirmed(false)}>↩ {t('Nouvelle recherche','New search','بحث جديد')}</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
