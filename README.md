# QR Menu Frontend 🍴

![image](https://github.com/user-attachments/assets/5d5f20b1-5995-4f59-b2cb-be789a26041b)


Une application web moderne permettant aux utilisateurs de consulter des menus numériques via un QR code. Ce projet est conçu pour les restaurants souhaitant proposer une expérience numérique simple et efficace à leurs clients.

## 🚀 Fonctionnalités principales

- **Affichage des menus** : Les clients peuvent consulter le menu complet d'un restaurant de manière interactive.
- **Navigation intuitive** : Une barre de navigation simplifie l'accès aux différentes sections de l'application.
- **Gestion des utilisateurs** : Interface pour connecter, inscrire ou gérer les comptes utilisateurs (administrateurs et clients).
- **Téléchargement en masse** : Possibilité d'importer des données via des fichiers CSV pour une configuration rapide des menus.
- **UI moderne et responsive** : Adaptée à tous les appareils (desktop, tablette et mobile).
- **Gestion des restaurants** : Intégration des informations spécifiques à chaque restaurant.

---

## 🛠️ Technologies utilisées

### Frontend
- **React.js** : Framework JavaScript pour construire des interfaces utilisateur.
- **Redux Toolkit** : Gestion centralisée de l'état.
- **Axios** : Gestion des requêtes HTTP vers le backend.
- **CSS/SCSS** : Stylisation des composants avec des animations modernes.
- **Tailwind CSS** (optionnel) : Gestion avancée des styles pour une personnalisation rapide.

### Outils et utilitaires
- **NPM/Yarn** : Gestionnaire de dépendances.
- **Lodash** : Manipulation avancée des données.
- **React Router** : Navigation entre les pages.
- **Formik + Yup** : Gestion et validation des formulaires.

---

## 📂 Structure du projet

```
QR_MENU_FrontEnd/
│
├── public/                  # Contient les fichiers statiques comme le favicon ou les images publiques
├── src/
│   ├── components/          # Composants React organisés par type (utility, users, restaurant, etc.)
│   ├── redux/               # Réducteurs, slices et actions Redux Toolkit
│   ├── pages/               # Pages principales de l'application
│   ├── styles/              # Fichiers CSS ou SCSS pour la stylisation
│   ├── utils/               # Fonctions utilitaires partagées
│   ├── App.js               # Point d'entrée de l'application
│   └── index.js             # Initialisation principale
│
├── package.json             # Liste des dépendances et scripts npm
├── README.md                # Documentation du projet
└── .gitignore               # Fichiers et dossiers à exclure de Git
```

---

## ⚙️ Installation

1. **Clonez le projet depuis GitHub** :
   ```bash
   git clone https://github.com/yassineelmiri/QR_MENU_FrontEnd.git
   cd QR_MENU_FrontEnd
   ```

2. **Installez les dépendances** :
   ```bash
   npm install
   ```

3. **Lancez l'application en mode développement** :
   ```bash
   npm start
   ```
   L'application sera accessible à l'adresse `http://localhost:3000`.

## 📖 Documentation des fonctionnalités

### Gestion des menus
- Les menus sont affichés sous forme de cartes avec des informations détaillées pour chaque plat.
- Supporte les filtres et le tri par catégories (entrée, plat principal, dessert, etc.).

### Authentification
- **Login/Signup** : Permet aux utilisateurs de se connecter ou de créer un compte.
- **Tableau de bord utilisateur** : Interface dédiée pour gérer les informations personnelles.

### Téléchargement CSV
- Importez rapidement des menus ou des informations utilisateur depuis un fichier CSV.

---

## 🛡️ Sécurité et meilleures pratiques

- **Validation des entrées utilisateur** : Formik et Yup sont utilisés pour prévenir les erreurs et les attaques potentielles.
- **Gestion des erreurs** : Axios intercepte les réponses pour afficher des messages d'erreur clairs à l'utilisateur.

---

## 📌 Scripts disponibles

- **`npm start`** : Lance l'application en mode développement.
- **`npm run build`** : Compile l'application pour la production.
- **`npm test`** : Exécute les tests unitaires.

---

## 📋 Contribuer

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité : `git checkout -b feature/new-feature`.
3. Soumettez un pull request.

---

## 📝 Auteurs

Développé par [Yassine Elmiri](https://github.com/yassineelmiri).  
