// pages/Footer.jsx
import styles from './Footer.module.css'

export default function Footer({ t }) {
  const services = [
    ['#hotels',       '🏨 ' + t('Hôtels','Hotels','فنادق')],
    ['#vols',         '✈️ ' + t('Vols','Flights','رحلات')],
    ['#activites',    '🌅 ' + t('Activités','Activities','أنشطة')],
    ['#excursions',   '🚙 ' + t('Excursions','Excursions','جولات')],
    ['#hebergements', '🏕️ ' + t('Hébergements','Stays','إقامة')],
  ]
  const expertise = [
    ['#circuits',    '🗺️ ' + t('Circuits','Tours','مسارات')],
    ['#mice',        '💼 MICE'],
    ['#formations',  '🎓 ' + t('Formations GIZ','GIZ Training','تدريب GIZ')],
    ['#formations',  '🌿 ' + t('Coaching','Coaching','تدريب')],
  ]
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        {/* Brand */}
        <div>
          <div className={styles.brand}>
            <div className={styles.logoIcon}>🏺</div>
            <div>
              <strong>Authentika Travel</strong>
              <small>{t('Tourisme Sud Tunisien','South Tunisian Tourism','سياحة الجنوب التونسي')}</small>
            </div>
          </div>
          <p className={styles.desc}>
            {t(
              'Acteur incontournable du tourisme responsable & durable dans le Sud tunisien. Formateur certifié GIZ, coach en durabilité, concepteur de circuits authentiques.',
              'Essential player in responsible & sustainable tourism in southern Tunisia. GIZ certified trainer, sustainability coach, authentic tour designer.',
              'الفاعل الأساسي في السياحة المسؤولة في الجنوب التونسي.'
            )}
          </p>
        </div>
        {/* Services */}
        <div>
          <div className={styles.colTitle}>{t('Services','Services','الخدمات')}</div>
          <ul className={styles.links}>{services.map(([h,l],i) => <li key={i}><a href={h}>{l}</a></li>)}</ul>
        </div>
        {/* Expertise */}
        <div>
          <div className={styles.colTitle}>{t('Expertise','Expertise','الخبرة')}</div>
          <ul className={styles.links}>{expertise.map(([h,l],i) => <li key={i}><a href={h}>{l}</a></li>)}</ul>
        </div>
        {/* Contact */}
        <div>
          <div className={styles.colTitle}>Contact</div>
          <ul className={styles.links}>
            <li><a href="tel:+216">📞 +216 XX XXX XXX</a></li>
            <li><a href="mailto:contact@authentika-travel.tn">✉️ contact@authentika-travel.tn</a></li>
            <li><a href="#contact">📍 Tataouine / Douz / Tozeur</a></li>
            <li><a href="#">📘 Facebook</a></li>
            <li><a href="#">📸 Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.copy}>© 2026 Authentika Travel — {t('Tous droits réservés','All rights reserved','جميع الحقوق محفوظة')}</div>
        <div className={styles.badges}>
          <span className={styles.badge}>GIZ SME Loop</span>
          <span className={styles.badge}>♻️ Durable</span>
          <span className={styles.badge}>🏺 Authentique</span>
        </div>
      </div>
    </footer>
  )
}
