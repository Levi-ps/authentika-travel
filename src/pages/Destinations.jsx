import styles from './Destinations.module.css'
const LISTE = [
  { name: 'Djerba', img: 'https://images.unsplash.com/photo-1583212292354-0c1496d0859a?w=600' },
  { name: 'Tozeur', img: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?w=600' },
  { name: 'Hammamet', img: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?w=600' }
]

export default function Destinations({ t }) {
  return (
    <section id="destinations" className={styles.section}>
      <h2 className="section-title light">{t('Nos Destinations','Our Destinations','وجهاتنا')}</h2>
      <div className={styles.grid}>
        {LISTE.map((d, i) => (
          <div key={i} className={styles.card}>
            <img src={d.img} alt={d.name} />
            <div className={styles.overlay}><h3>{d.name}</h3></div>
          </div>
        ))}
      </div>
    </section>
  )
}