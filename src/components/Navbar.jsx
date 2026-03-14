       import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar({ t }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Authentika</div>

      {/* Le bouton Hamburger */}
      <div className={`${styles.hamburger} ${isOpen ? styles.active : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span><span></span><span></span>
      </div>

      {/* Les liens qui s'affichent/se cachent */}
      <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>{t('Accueil','Home','الرئيسية')}</a></li>
        <li><a href="#hotels" onClick={() => setIsOpen(false)}>{t('Hôtels','Hotels','فنادق')}</a></li>
        <li><a href="#destinations" onClick={() => setIsOpen(false)}>{t('Destinations','Destinations','وجهات')}</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>{t('Contact','Contact','اتصال')}</a></li>
      </ul>
    </nav>
  )
}
