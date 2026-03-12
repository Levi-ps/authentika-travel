# 🏺 Authentika Travel — React App

Site web React pour l'agence de tourisme Authentika Travel.
Tourisme authentique & durable dans le Sud tunisien.

---

## 🚀 Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev

# 3. Build de production
npm run build
```

---

## 📁 Structure du projet

```
src/
├── App.jsx                   # Composant racine — orchestre toutes les sections
├── main.jsx                  # Point d'entrée React / DOM
│
├── styles/
│   ├── variables.css         # Tokens CSS (couleurs, typo, espacement)
│   └── global.css            # Styles globaux, animations, utilitaires
│
├── hooks/
│   ├── useLanguage.js        # Gestion FR / EN / AR + fonction t()
│   └── useReveal.js          # Animation scroll-reveal via IntersectionObserver
│
├── data/                     # Données statiques (modifier ici pour mettre à jour le contenu)
│   ├── activities.js         # 12 activités avec filtres
│   ├── circuits.js           # 8 circuits authentiques
│   ├── excursions.js         # 12 excursions 1j / 2j
│   ├── formations.js         # 6 formations certifiées
│   ├── hebergements.js       # 6 hébergements alternatifs
│   └── testimonials.js       # 3 témoignages clients
│
├── components/               # Composants de mise en page réutilisables
│   ├── Topbar.jsx / .module.css      # Barre supérieure (contact, langues)
│   ├── Navbar.jsx / .module.css      # Navigation principale avec mega-menu
│   ├── MobileNav.jsx / .module.css   # Menu mobile plein écran
│   ├── CatStrip.jsx / .module.css    # Barre de catégories sticky
│   └── BackToTop.jsx / .module.css   # Bouton retour en haut
│
└── pages/                    # Sections de la page principale
    ├── Hero.jsx / .module.css
    ├── About.jsx / .module.css
    ├── Hotels.jsx / .module.css
    ├── Vols.jsx / .module.css
    ├── Activities.jsx / .module.css
    ├── Excursions.jsx / .module.css
    ├── Circuits.jsx / .module.css
    ├── Hebergements.jsx / .module.css
    ├── Mice.jsx / .module.css
    ├── Formations.jsx / .module.css
    ├── Testimonials.jsx / .module.css
    ├── Contact.jsx / .module.css
    └── Footer.jsx / .module.css
```

---

## 🌍 Multilingue (FR / EN / AR)

Chaque texte utilise la fonction `t(fr, en, ar)` fournie par le hook `useLanguage`.

```jsx
// Dans n'importe quel composant :
const { t, lang } = useLanguage()   // ou reçu en props depuis App.jsx

t('Bonjour', 'Hello', 'مرحبا')
```

Le sélecteur de langue se trouve dans la `<Topbar />`.

---

## 🎨 Personnaliser les couleurs

Toutes les couleurs sont dans `src/styles/variables.css` :

```css
--gold: #C9A84C;
--ksour: #7A3B1E;
--oasis: #2E6B4F;
/* ... */
```

---

## 📦 Modifier le contenu

- **Activités** → `src/data/activities.js`
- **Circuits** → `src/data/circuits.js`
- **Excursions** → `src/data/excursions.js`
- **Hébergements** → `src/data/hebergements.js`
- **Formations** → `src/data/formations.js`
- **Témoignages** → `src/data/testimonials.js`

---

## 📱 Responsive

Breakpoints définis dans `variables.css` :
- `1200px` — tablette paysage
- `768px` — tablette portrait
- `599px` — mobile

---

## ✅ Stack technique

- **React 18** + **Vite 5**
- **CSS Modules** (isolation des styles par composant)
- **Google Fonts** : Playfair Display · Raleway · Tajawal
- Aucune dépendance externe (zéro librairie UI tierce)

---

## 📞 Contact agence

- **WhatsApp** : +216 XX XXX XXX
- **Email** : contact@authentika-travel.tn
- **Web** : authentika-travel.tn
