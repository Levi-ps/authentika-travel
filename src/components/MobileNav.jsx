// components/MobileNav.jsx
import styles from './MobileNav.module.css'

export default function MobileNav({ open, onClose, lang }) {
  const t = (fr, en, ar) => lang === 'fr' ? fr : lang === 'en' ? en : ar
  const links = [
    ['#about',        t('À Propos',      'About',     'من نحن')],
    ['#hotels',       t('Hôtels',        'Hotels',    'فنادق')],
    ['#vols',         t('Vols',          'Flights',   'رحلات')],
    ['#activites',    t('Activités',     'Activities','أنشطة')],
    ['#excursions',   t('Excursions',    'Excursions','جولات')],
    ['#circuits',     t('Circuits',      'Tours',     'مسارات')],
    ['#hebergements', t('Hébergements',  'Stays',     'إقامة')],
    ['#mice',         'MICE'],
    ['#contact',      'Contact'],
  ]
  return (
    <div className={`${styles.overlay} ${open ? styles.open : ''}`}>
      <button className={styles.close} onClick={onClose}>✕</button>
      {links.map(([href, label]) => (
        <a key={href} href={href} className={styles.link} onClick={onClose}>{label}</a>
      ))}
    </div>
  )
}
