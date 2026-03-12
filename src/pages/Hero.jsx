// pages/Hero.jsx
import styles from './Hero.module.css'

export default function Hero({ t }) {
  const stats = [
    { num: '+25',   label: t('Ans d\'Expérience',       'Years Experience',    'سنوات خبرة') },
    { num: '3500+', label: t('Voyageurs Satisfaits',    'Happy Travelers',     'رحالة سعداء') },
    { num: '35+',   label: t('Circuits Authentiques',   'Authentic Tours',     'مسار أصيل') },
    { num: 'DRV',   label: t('Formateur & Coach Certifié · Durabilité & Marketing', 'Certified Trainer & Coach · Sustainability', 'مدرب ومدرب معتمد') },
    { num: 'GIZ',   label: t('Formateur Certifié SME Loop', 'GIZ Certified Trainer SME Loop', 'مدرب معتمد SME Loop من GIZ') },
  ]

  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.stars} />
      <div className={styles.pattern} />
      <div className={styles.dunes} />
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          {t(
            'Agent de Voyages · Formateur DRV · Coach Certifié · SME Loop GIZ',
            'Travel Agent · DRV Trainer · Certified Coach · SME Loop GIZ',
            'وكيل سياحة · مدرب DRV · مدرب معتمد · SME Loop GIZ'
          )}
        </div>
        <h1 className={styles.title}>
          Authentika Travel
          <em>{t("L'Âme du Sud Tunisien", 'The Soul of Southern Tunisia', 'روح الجنوب التونسي')}</em>
        </h1>
        <p className={styles.desc}>
          {t(
            "Acteur incontournable du tourisme sud tunisien responsable & durable. Formateur certifié DRV, Coach en Durabilité & Marketing Territorial, et Formateur SME Loop certifié GIZ — au service d'expériences authentiques au cœur des déserts, ksour et oasis du Sud.",
            'The essential player in responsible & sustainable South Tunisian tourism. DRV Certified Trainer, Sustainability & Territorial Marketing Coach, and GIZ-certified SME Loop Trainer.',
            'الفاعل الأساسي في السياحة الجنوبية التونسية المسؤولة والمستدامة.'
          )}
        </p>
        <div className={styles.actions}>
          <a href="#circuits" className="btn-gold">{t('Nos Circuits', 'Our Tours', 'مساراتنا')}</a>
          <a href="#contact" className="btn-ghost">{t('Demande Sur Mesure', 'Custom Request', 'طلب مخصص')}</a>
        </div>
      </div>

      <div className={styles.statsBar}>
        {stats.map((s, i) => (
          <div key={i} className={styles.stat}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
