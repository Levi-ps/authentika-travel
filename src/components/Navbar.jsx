// components/Navbar.jsx
import styles from './Navbar.module.css'

export default function Navbar({ lang, setLang, onMobileOpen }) {
  const t = (fr, en, ar) => lang === 'fr' ? fr : lang === 'en' ? en : ar

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Logo */}
        <a className={styles.logo} href="#">
          <div className={styles.logoIcon}>🏺</div>
          <div className={styles.logoText}>
            <strong>Authentika Travel</strong>
            <small>{t('Tourisme Sud Tunisien', 'South Tunisian Tourism', 'سياحة الجنوب التونسي')}</small>
          </div>
        </a>

        {/* Desktop tabs */}
        <ul className={styles.tabs}>
          <li><a className={styles.tabBtn} href="#about">{t('À Propos', 'About', 'من نحن')}</a></li>

          <li className={styles.hasDropdown}>
            <button className={styles.tabBtn}>{t('Hébergement', 'Stay', 'إقامة')} <span>▾</span></button>
            <div className={styles.dropdown}>
              <a href="#hotels"><span>🏨</span>{t('Hôtels', 'Hotels', 'فنادق')}</a>
              <a href="#hebergements"><span>🏕️</span>{t('Hébergements Alt.', 'Alt. Stays', 'إقامة بديلة')}</a>
            </div>
          </li>

          <li><a className={styles.tabBtn} href="#vols">{t('Vols', 'Flights', 'رحلات جوية')}</a></li>

          <li className={styles.hasDropdown}>
            <button className={styles.tabBtn}>{t('Découverte', 'Discover', 'اكتشاف')} <span>▾</span></button>
            <div className={styles.dropdown}>
              <a href="#activites"><span>🌅</span>{t('Activités', 'Activities', 'أنشطة')}</a>
              <a href="#excursions"><span>🚙</span>{t('Excursions', 'Excursions', 'جولات')}</a>
              <a href="#circuits"><span>🗺️</span>{t('Circuits', 'Tours', 'مسارات')}</a>
            </div>
          </li>

          <li className={styles.hasDropdown}>
            <button className={styles.tabBtn}>{t('MICE & Formations', 'MICE & Training', 'أعمال وتدريب')} <span>▾</span></button>
            <div className={styles.dropdown}>
              <a href="#mice"><span>💼</span>{t('MICE Entreprises', 'Corporate MICE', 'سياحة أعمال')}</a>
              <a href="#formations"><span>🎓</span>{t('Formations', 'Training', 'تدريب')}</a>
            </div>
          </li>
        </ul>

        <a href="#contact" className={styles.cta}>{t('Réserver', 'Book Now', 'احجز الآن')}</a>

        {/* Mobile hamburger */}
        <button className={styles.burger} onClick={onMobileOpen} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
