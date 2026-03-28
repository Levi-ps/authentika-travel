import styles from './MapSection.module.css'

export default function MapSection({ t }) {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.218!2d10.181!3d36.806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ4JzIxLjYiTiAxMMKwMTAnNTEuNiJF!5e0!3m2!1sfr!2stn!4v1625123456789";

  return (
    <section className={styles.section}>
      <h2 className="section-title light">{t('Où nous trouver ?','Where to find us?','أين تجدنا؟')}</h2>
      <div className={styles.mapContainer}>
        <iframe src={mapUrl} width="100%" height="450" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} allowFullScreen="" loading="lazy"></iframe>
      </div>
    </section>
  )
}