// pages/Contact.jsx
import { useState } from 'react'
import styles from './Contact.module.css'
export default function Contact({ t }) {
  const [sent, setSent] = useState(false)
  const infos = [
    { icon:'📞', label:'Tel / WhatsApp', val:'+216 XX XXX XXX', href:'tel:+216' },
    { icon:'✉️', label:'Email', val:'contact@authentika-travel.tn', href:'mailto:contact@authentika-travel.tn' },
    { icon:'📍', label:t('Basé dans le Sud Tunisien','Based in Southern Tunisia','مقرنا في الجنوب'), val:'Tataouine / Douz / Tozeur' },
    { icon:'💼', label:'LinkedIn', val:'linkedin.com/in/authentika-travel', href:'#' },
  ]
  return (
    <section id="contact" className={styles.section}>
      <div className="reveal">
        <div className="section-label">{t('Nous Écrire','Get in Touch','تواصل معنا')}</div>
        <h2 className="section-title">{t(<>Démarrons <em>Votre Aventure</em></>,<>Start <em>Your Adventure</em></>,<>لنبدأ <em>مغامرتك</em></>)}</h2>
        <div className={styles.infoBlock}>
          {infos.map((item,i)=>(
            <div key={i} className={styles.infoItem}>
              <div className={styles.iconBox}>{item.icon}</div>
              <div><strong>{item.label}</strong>{item.href?<a href={item.href}>{item.val}</a>:<span>{item.val}</span>}</div>
            </div>
          ))}
        </div>
        <div className={styles.social}>
          {['📘','📸','▶️','💼'].map((s,i)=><a key={i} href="#" className={styles.socialBtn}>{s}</a>)}
        </div>
      </div>

      <div className={`${styles.formBox} reveal`}>
        <div className={styles.formTitle}>{t('Demande de Réservation','Booking Request','طلب حجز')}</div>
        <p className={styles.formSub}>{t('Circuits, hébergements, excursions, MICE ou formations — partagez votre projet et nous vous répondrons sous 24h.','Tours, accommodations, excursions, MICE or training — share your project and we\'ll reply within 24h.','مسارات أو إقامة أو جولات أو أعمال أو تدريب — شاركنا مشروعكم وسنرد خلال 24 ساعة.')}</p>
        <div className="form-row-2">
          <div className="form-field"><label>{t('Prénom','First Name','الاسم الأول')}</label><input type="text"/></div>
          <div className="form-field"><label>{t('Nom','Last Name','اللقب')}</label><input type="text"/></div>
        </div>
        <div className="form-field"><label>Email</label><input type="email" placeholder="votre@email.com"/></div>
        <div className="form-field"><label>{t('Téléphone / WhatsApp','Phone / WhatsApp','هاتف')}</label><input type="tel" placeholder="+216..."/></div>
        <div className="form-field">
          <label>{t('Je souhaite','I\'m interested in','أنا مهتم بـ')}</label>
          <select>
            <option>{t('— Sélectionnez —','— Select —','— اختر —')}</option>
            <option>{t('Circuit authentique','Authentic tour','مسار أصيل')}</option>
            <option>{t('Réservation hôtel','Hotel booking','حجز فندق')}</option>
            <option>{t('Hébergement alternatif','Alternative stay','إقامة بديلة')}</option>
            <option>{t('Excursion journée','Day excursion','جولة يومية')}</option>
            <option>MICE</option>
            <option>{t('Formation / Coaching','Training / Coaching','تدريب')}</option>
          </select>
        </div>
        <div className="form-field"><label>{t('Message','Message','رسالة')}</label><textarea rows="4" placeholder={t('Décrivez votre projet...','Describe your project...','صِف مشروعك...')}/></div>
        <button className="btn-submit" onClick={()=>{setSent(true);setTimeout(()=>setSent(false),3000)}}>
          {sent?`✓ ${t('Message envoyé !','Message sent!','تم الإرسال!')}`:t('Envoyer la Demande →','Send Request →','إرسال الطلب ←')}
        </button>
      </div>
    </section>
  )
}
