import { useState } from 'react'
import styles from './Hotels.module.css'

export default function Hotels({ t }) {
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [rooms, setRooms] = useState([{ id: 1, adults: 2, children: 0 }])
  const [total, setTotal] = useState(0)

  const nuits = checkin && checkout ? Math.round((new Date(checkout)-new Date(checkin))/86400000) : 0

  const updateRoom = (id, k, d) => {
    setRooms(rooms.map(r => r.id === id ? { ...r, [k]: Math.max(k==='adults'?1:0, r[k]+d) } : r))
  }

  const calculer = () => {
    const prixBase = 120; // Prix moyen par adulte
    const resultat = rooms.reduce((acc, r) => acc + (r.adults * prixBase + r.children * 60), 0) * nuits;
    setTotal(resultat);
  }

  return (
    <section className={styles.section} id="hotels">
      <h2 className="section-title light" style={{textAlign:'center', color:'var(--gold)'}}>
        {t('Trouvez Votre Hôtel Idéal','Find Your Perfect Hotel','ابحث عن فندقك المثالي')}
      </h2>
      
      <div className={styles.engine}>
        <div className={styles.row}>
           <div className={styles.field}>
              <label>Arrivée</label>
              <input type="date" onChange={e => setCheckin(e.target.value)} className={styles.input} />
           </div>
           <div className={styles.field}>
              <label>Départ</label>
              <input type="date" onChange={e => setCheckout(e.target.value)} className={styles.input} />
           </div>
           <div className={styles.nuitsDisplay}>{nuits} {t('nuits','nights','ليالي')}</div>
        </div>

        <div className={styles.roomsList}>
          {rooms.map((room, i) => (
            <div key={room.id} className={styles.roomCard}>
              <span style={{color:'var(--gold)'}}>Chambre {i+1}</span>
              <div className={styles.counters}>
                <button onClick={() => updateRoom(room.id, 'adults', -1)} className={styles.btnCount}>-</button>
                <span>{room.adults} Ad.</span>
                <button onClick={() => updateRoom(room.id, 'adults', 1)} className={styles.btnCount}>+</button>
                
                <button onClick={() => updateRoom(room.id, 'children', -1)} className={styles.btnCount} style={{marginLeft:'10px'}}>-</button>
                <span>{room.children} Enf.</span>
                <button onClick={() => updateRoom(room.id, 'children', 1)} className={styles.btnCount}>+</button>
              </div>
            </div>
          ))}
        </div>

        <button onClick={calculer} className={styles.searchBtn}>
          {t('Vérifier le prix','Check Price','تحقق من السعر')}
        </button>

        {total > 0 && (
          <div className={styles.result}>
            <h3>Total : {total} DT</h3>
          </div>
        )}
      </div>
    </section>
  )
}