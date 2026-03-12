// pages/Vols.jsx
import { useState } from 'react'
import styles from './Vols.module.css'

export default function Vols({ t }) {
  const [tab, setTab] = useState('retour')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [depart, setDepart] = useState('')
  const [retour, setRetour] = useState('')
  const [pax, setPax] = useState({ va:1, ve:0, vb:0 })
  const [volFiltre, setVolFiltre] = useState('all')
  const [confirmed, setConfirmed] = useState(false)

  const changePax = (k, d) => setPax(p => ({ ...p, [k]: Math.max(k==='va'?1:0, Math.min(9, p[k]+d)) }))

  const summary = [
    `✈️ ${from||'?'} → ${to||'?'}`,
    `📅 ${t('Départ','Departure','الذهاب')} : ${depart||'?'}${retour?` | ${t('Retour','Return','العودة')} : ${retour}`:''}`,
    `👥 ${pax.va} ${t('adulte(s)','adult(s)','بالغ')}${pax.ve>0?`, ${pax.ve} ${t('enfant(s)','child(ren)','طفل')}`:''}`,
  ]

  return (
    <section id="vols" className={styles.section}>
      <div className="reveal">
        <div className="section-label" style={{color:'rgba(255,255,255,0.5)'}}>{t('Partout dans le monde','Worldwide Flights','رحلات حول العالم')}</div>
        <h2 className="section-title light">{t(<>Réservez Votre <em>Vol</em></>,<>Book Your <em>Flight</em></>,<>احجز <em>رحلتك الجوية</em></>)}</h2>
      </div>

      <div className={`${styles.box} reveal`}>
        <div className={styles.tabs}>
          {[{v:'retour',l:t('↔ Aller-Retour','↔ Round Trip','↔ ذهاب وإياب')},{v:'simple',l:t('→ Aller Simple','→ One Way','→ ذهاب فقط')},{v:'multi',l:t('⇌ Multi-destinations','⇌ Multi-city','⇌ متعدد الوجهات')}].map(tb=>(
            <button key={tb.v} className={`${styles.tabBtn} ${tab===tb.v?styles.activeTab:''}`} onClick={()=>setTab(tb.v)}>{tb.l}</button>
          ))}
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>{t('✈️ Ville de départ','✈️ From','✈️ مدينة الإقلاع')}</label>
            <input type="text" value={from} onChange={e=>setFrom(e.target.value)} placeholder="Paris, Lyon, Tunis..." className={styles.input}/>
          </div>
          <button className={styles.swap} onClick={()=>{setFrom(to);setTo(from)}} title="Inverser">⇄</button>
          <div className={styles.field}>
            <label>{t('🛬 Destination','🛬 To','🛬 الوجهة')}</label>
            <select value={to} onChange={e=>setTo(e.target.value)} className={styles.input}>
              <option value="">— {t('Choisir','Choose','اختر')} —</option>
              <optgroup label="🇹🇳 Tunisie">
                <option value="DJE">🏝️ Djerba – Zarzis (DJE)</option>
                <option value="TOE">🏜️ Tozeur – Nefta (TOE)</option>
                <option value="TUN">🕌 Tunis (TUN)</option>
                <option value="MIR">⛵ Monastir (MIR)</option>
              </optgroup>
              <optgroup label="🌍 International">
                <option value="CDG">🇫🇷 Paris CDG</option>
                <option value="LYS">🇫🇷 Lyon</option>
                <option value="BRU">🇧🇪 Bruxelles</option>
                <option value="GVA">🇨🇭 Genève</option>
                <option value="FRA">🇩🇪 Francfort</option>
                <option value="LHR">🇬🇧 Londres</option>
              </optgroup>
            </select>
          </div>
          <div className={styles.field}>
            <label>{t('📅 Date départ','📅 Departure','📅 تاريخ الذهاب')}</label>
            <input type="date" value={depart} onChange={e=>setDepart(e.target.value)} className={styles.input}/>
          </div>
          {tab !== 'simple' && (
            <div className={styles.field}>
              <label>{t('📅 Date retour','📅 Return','📅 تاريخ العودة')}</label>
              <input type="date" value={retour} onChange={e=>setRetour(e.target.value)} className={styles.input}/>
            </div>
          )}
        </div>

        <div className={styles.grid4}>
          {/* Passagers */}
          <div className={styles.colBox}>
            <div className={styles.colTitle}>👥 {t('Passagers','Passengers','المسافرون')}</div>
            {[{k:'va',l:t('Adultes','Adults','بالغون'),s:'12+'},{k:'ve',l:t('Enfants','Children','أطفال'),s:'2–11'},{k:'vb',l:t('Bébés','Infants','رضّع'),s:'0–23m'}].map(({k,l,s})=>(
              <div key={k} className={styles.counterRow}>
                <span className={styles.counterLabel}>{l}<small>{s}</small></span>
                <div className={styles.counter}>
                  <button onClick={()=>changePax(k,-1)}>−</button>
                  <span>{pax[k]}</span>
                  <button onClick={()=>changePax(k,1)}>+</button>
                </div>
              </div>
            ))}
          </div>
          {/* Options */}
          <div className={styles.colBox}>
            <div className={styles.colTitle}>💰 {t('Options','Options','خيارات')}</div>
            <label className={styles.checkLabel}><input type="checkbox" defaultChecked style={{accentColor:'var(--gold)'}}/> 🧳 {t('Bagages inclus','Baggage included','الأمتعة مشمولة')}</label>
            <label className={styles.checkLabel}><input type="checkbox" style={{accentColor:'var(--gold)'}}/> 🍽️ {t('Repas inclus','Meal included','الوجبات مشمولة')}</label>
          </div>
          {/* Filtres */}
          <div className={styles.colBox}>
            <div className={styles.colTitle}>🔧 {t('Filtres','Filters','المرشّحات')}</div>
            {[{v:'direct',l:t('✈️ Vols directs','✈️ Direct only','✈️ مباشر فقط')},{v:'escale',l:t('🔁 Avec escale','🔁 With stopover','🔁 مع توقف')},{v:'all',l:t('🌐 Tous les vols','🌐 All flights','🌐 جميع الرحلات')}].map(f=>(
              <label key={f.v} className={styles.radioLabel}>
                <input type="radio" name="vf" value={f.v} checked={volFiltre===f.v} onChange={()=>setVolFiltre(f.v)} style={{accentColor:'var(--gold)'}}/> {f.l}
              </label>
            ))}
          </div>
          {/* Tarifs */}
          <div className={styles.colBox}>
            <div className={styles.colTitle}>🛡️ {t('Tarifs','Fares','التعريفات')}</div>
            {[{v:'all',l:t('💲 Tous les tarifs','💲 All fares','💲 جميع الأسعار')},{v:'remb',l:t('✅ Remboursables','✅ Refundable','✅ قابل للاسترداد')}].map(f=>(
              <label key={f.v} className={styles.radioLabel}>
                <input type="radio" name="vr" value={f.v} defaultChecked={f.v==='all'} style={{accentColor:'var(--gold)'}}/> {f.l}
              </label>
            ))}
          </div>
        </div>

        <button className={styles.searchBtn} onClick={()=>setConfirmed(true)}>
          🔍 {t('Rechercher mon vol','Search my flight','البحث عن رحلتي')}
        </button>
      </div>

      {confirmed && (
        <div id="vol-confirm" className="confirm-box gold-border reveal">
          <div style={{fontSize:'3rem',flexShrink:0}}>✅</div>
          <div>
            <div className="confirm-title">{t('Recherche de vol reçue !','Flight search received!','تم استلام طلب رحلتك!')}</div>
            <p className="confirm-text">{t(<>Notre équipe vous contacte <strong>dans les 2 heures</strong>.</>,<>Our team will contact you <strong>within 2 hours</strong>.</>,<>سيتصل بك فريقنا <strong>خلال ساعتين</strong>.</>)}</p>
            <div className="confirm-summary">{summary.map((l,i)=><div key={i}>{l}</div>)}</div>
            <div className="confirm-actions">
              <a href={`https://wa.me/21600000000?text=${encodeURIComponent('✈️ Demande vol — Authentika Travel\n'+summary.join('\n'))}`} target="_blank" rel="noreferrer" className="btn-wa-big">💬 WhatsApp</a>
              <a href="mailto:contact@authentika-travel.tn" className="btn-email-big">✉️ Email</a>
              <button className="btn-reset" onClick={()=>setConfirmed(false)}>↩ {t('Nouvelle recherche','New search','بحث جديد')}</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
