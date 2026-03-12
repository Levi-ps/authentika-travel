// pages/Mice.jsx
import { useState } from 'react'
import styles from './Mice.module.css'
export default function Mice({ t }) {
  const [sent, setSent] = useState(false)
  const services = [
    { icon:'🎤', fr:'Conférences & Séminaires', en:'Conferences & Seminars', ar:'مؤتمرات وندوات', descFr:"Salles équipées, logistique complète.", descEn:"Equipped venues, full logistics.", descAr:"قاعات مجهزة ولوجستيك كامل." },
    { icon:'🏆', fr:'Incentives & Team Building', en:'Incentives & Team Building', ar:'حوافز وبناء الفريق', descFr:"Rallyes désert, bivouac d'équipe.", descEn:"Desert rallies, team bivouacs.", descAr:"رالي الصحراء ومخيمات الفريق." },
    { icon:'🎉', fr:'Galas & Événements', en:'Galas & Events', ar:'حفلات وفعاليات', descFr:"Soirées sous les étoiles, dîners berbères.", descEn:"Evenings under the stars, Berber dinners.", descAr:"أمسيات تحت النجوم وعشاء أمازيغي." },
    { icon:'✈️', fr:'Transferts & Logistique', en:'Transfers & Logistics', ar:'نقل ولوجستيك', descFr:"Vols charters, flotte 4x4.", descEn:"Charter flights, 4x4 fleet.", descAr:"رحلات تشارتر وأسطول رباعي الدفع." },
  ]
  const lbl = (obj) => t(obj.fr, obj.en, obj.ar)
  const desc = (s) => t(s.descFr, s.descEn, s.descAr)
  return (
    <section id="mice" className={styles.section}>
      <div className={styles.grid}>
        <div className="reveal">
          <div className="section-label" style={{color:'rgba(255,255,255,0.4)'}}>{t('Voyages d\'Entreprise','Corporate Travel','سفر الأعمال')}</div>
          <h2 className="section-title light">{t(<>MICE & <em>Entreprises</em></>,<>MICE & <em>Corporate</em></>,<>سياحة الأعمال <em>والشركات</em></>)}</h2>
          <p className={styles.intro}>{t("Meetings, Incentives, Conférences & Événements dans le cadre exceptionnel du Sud tunisien. Programmes clé en main alliant team building désert, séminaires dans des ksour et galas sous les étoiles sahariennes.","Meetings, Incentives, Conferences & Events in the exceptional setting of southern Tunisia. Turnkey programs combining desert team building, ksour seminars and Saharan galas.","اجتماعات وحوافز ومؤتمرات وفعاليات في الإطار الاستثنائي للجنوب التونسي.")}</p>
          <div className={styles.services}>
            {services.map((s,i) => (
              <div key={i} className={styles.service}>
                <span className={styles.svcIcon}>{s.icon}</span>
                <div className={styles.svcTitle}>{lbl(s)}</div>
                <p className={styles.svcDesc}>{desc(s)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.formBox} reveal`}>
          <div className={styles.formTitle}>{t('Demande MICE / Entreprises','MICE / Corporate Request','طلب MICE / شركات')}</div>
          <p className={styles.formSub}>{t('Partagez votre projet et recevez une offre sur mesure sous 48h.','Share your project and receive a tailor-made offer within 48h.','شاركنا مشروعكم واحصلوا على عرض مخصص في 48 ساعة.')}</p>
          <div className="form-row-2">
            <div className="form-field"><label>{t('Société','Company','الشركة')}</label><input type="text" style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(201,168,76,0.15)',color:'white',padding:'0.8rem 1rem',fontFamily:'var(--font-body)',fontSize:'0.82rem',outline:'none'}}/></div>
            <div className="form-field"><label>{t('Participants','Attendees','المشاركون')}</label><input type="number" style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(201,168,76,0.15)',color:'white',padding:'0.8rem 1rem',fontFamily:'var(--font-body)',fontSize:'0.82rem',outline:'none'}}/></div>
          </div>
          <div className="form-field">
            <label>{t('Type d\'événement','Event type','نوع الفعالية')}</label>
            <select style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(201,168,76,0.15)',color:'white',padding:'0.8rem 1rem',fontFamily:'var(--font-body)',fontSize:'0.82rem',outline:'none'}}>
              <option>{t('Séminaire / Conférence','Seminar','ندوة/مؤتمر')}</option>
              <option>Incentive / Team Building</option>
              <option>{t('Gala / Soirée','Gala / Evening','حفلة')}</option>
            </select>
          </div>
          <div className="form-row-2">
            <div className="form-field"><label>{t('Date souhaitée','Date','التاريخ')}</label><input type="date" style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(201,168,76,0.15)',color:'white',padding:'0.8rem 1rem',fontFamily:'var(--font-body)',fontSize:'0.82rem',outline:'none'}}/></div>
            <div className="form-field"><label>Budget</label><select style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(201,168,76,0.15)',color:'white',padding:'0.8rem 1rem',fontFamily:'var(--font-body)',fontSize:'0.82rem',outline:'none'}}><option>&lt; 5 000 TND</option><option>5-15 000 TND</option><option>15-50 000 TND</option><option>&gt; 50 000 TND</option></select></div>
          </div>
          <div className="form-field"><label>Email</label><input type="email" style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(201,168,76,0.15)',color:'white',padding:'0.8rem 1rem',fontFamily:'var(--font-body)',fontSize:'0.82rem',outline:'none'}}/></div>
          <div className="form-field"><label>{t('Message','Message','رسالة')}</label><textarea rows="3" style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(201,168,76,0.15)',color:'white',padding:'0.8rem 1rem',fontFamily:'var(--font-body)',fontSize:'0.82rem',outline:'none',resize:'none',width:'100%'}}/></div>
          <button className="btn-submit" onClick={()=>{setSent(true);setTimeout(()=>setSent(false),3000)}}>
            {sent?`✓ ${t('Envoyé !','Sent!','تم الإرسال!')}`:t('Envoyer la Demande','Send Request','إرسال الطلب')}
          </button>
        </div>
      </div>
    </section>
  )
}
