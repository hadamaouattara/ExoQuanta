# 🌌 EXONOV QUANTUM

<div align="center">
  <h1>🚀 Plateforme de Simulation Quantique Avancée</h1>
  <p><strong>Révolutionnez votre approche de la physique quantique avec n8n intégré</strong></p>
  
  [![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-exoquanta.netlify.app-blueviolet?style=for-the-badge)](https://exoquanta.netlify.app)
  [![Version](https://img.shields.io/badge/Version-1.0.0-purple?style=for-the-badge)]()
  [![Framework](https://img.shields.io/badge/Framework-Next.js_15-black?style=for-the-badge&logo=next.js)]()
  [![Deployment](https://img.shields.io/badge/Deployment-Netlify-00C7B7?style=for-the-badge&logo=netlify)]()
  [![n8n](https://img.shields.io/badge/Backend-n8n_Workflows-red?style=for-the-badge&logo=n8n)]()
</div>

---

## ⚛️ Vue d'ensemble

**Exonov Quantum** est une plateforme révolutionnaire de simulation quantique qui transforme la façon dont nous explorons et comprenons la physique quantique. Avec une interface futuriste, des outils de pointe et une **intégration n8n complète**, explorez les mystères du monde quantique comme jamais auparavant.

### 🌟 Fonctionnalités Principales

- **🔬 Simulation Multi-Qubits** - Simulez des systèmes complexes jusqu'à 8 qubits
- **🌀 Algorithmes Quantiques** - Hadamard, Grover, Shor, QFT et plus encore
- **📊 Dashboard Temps Réel** - Surveillance complète des workflows n8n
- **🔗 Intégration n8n** - Contrôlez vos 13+ workflows quantiques directement
- **⚡ API Bridge** - Connexion transparente avec votre instance n8n
- **🎯 Interface Futuriste** - Design moderne avec animations quantiques
- **📈 Analytics Avancées** - Statistiques d'exécution et monitoring

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+ 
- npm ou yarn
- Git
- **Instance n8n active** (optionnel pour le mode démo)

### Installation

```bash
# Cloner le repository
git clone https://github.com/hadamaouattara/ExoQuanta.git
cd ExoQuanta

# Installer les dépendances
npm install

# Configuration n8n (optionnel)
cp .env.example .env.local
# Éditez .env.local avec vos paramètres n8n

# Démarrer en mode développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir l'application.

## 🔗 Configuration n8n

### Variables d'Environnement

Créez un fichier `.env.local` avec :

```bash
# Instance n8n
N8N_BASE_URL=https://votre-instance-n8n.com
N8N_API_KEY=votre_cle_api_n8n
NEXT_PUBLIC_N8N_URL=https://votre-instance-n8n.com
```

### Guide Complet de Configuration

📖 **[Guide Détaillé n8n](docs/N8N_CONFIGURATION.md)** - Instructions complètes pour :
- Génération de clé API n8n
- Configuration des credentials
- Résolution des problèmes
- Optimisation des workflows

## 🛠️ Technologies

### Frontend
- **Next.js 15** - Framework React avec App Router
- **React 18** - Interface utilisateur réactive
- **Tailwind CSS** - Styling moderne et responsive
- **Framer Motion** - Animations fluides
- **Three.js** - Visualisations 3D (prévu)

### Backend & Intégration
- **n8n** - Workflows et automatisation quantique
- **API Routes** - Bridge Next.js ↔ n8n
- **Netlify** - Déploiement et hosting
- **WebSockets** - Temps réel (prévu)

## 📁 Structure du Projet

```
ExoQuanta/
├── app/                          # Pages Next.js (App Router)
│   ├── page.jsx                 # 🏠 Page d'accueil Exonov Quantum
│   ├── dashboard/               # 📊 Dashboard workflows n8n
│   │   └── page.jsx            # Interface de contrôle temps réel
│   ├── simulation/              # ⚛️ Simulateur quantique
│   │   └── page.jsx            # Interface de simulation interactive
│   ├── api/                     # 🔌 API Routes pour n8n
│   │   ├── workflows/           # Gestion des workflows
│   │   └── executions/          # Statistiques d'exécution
│   └── layout.jsx               # Layout principal
├── docs/                        # 📚 Documentation
│   └── N8N_CONFIGURATION.md    # Guide configuration n8n
├── components/                  # 🧩 Composants réutilisables
├── styles/                      # 🎨 Styles globaux
├── public/                      # 📦 Assets statiques
├── .env.example                 # 🔧 Template configuration
└── package.json                 # 📦 Configuration et dépendances
```

## 🌐 Déploiement

### Netlify (Recommandé)

L'application est automatiquement déployée sur Netlify à chaque push sur `main`.

**URL Live**: [https://exoquanta.netlify.app](https://exoquanta.netlify.app)

### Variables d'Environnement Netlify

Dans **Site Settings** > **Environment Variables** :

```
N8N_BASE_URL = https://votre-instance-n8n.com
N8N_API_KEY = votre_cle_api_n8n
NEXT_PUBLIC_N8N_URL = https://votre-instance-n8n.com
```

## 🎮 Fonctionnalités

### 🏠 Page d'Accueil
- Design futuriste avec animations quantiques
- États quantiques en temps réel
- Navigation intuitive
- Présentation des fonctionnalités

### 📊 Dashboard Workflows
- **Surveillance temps réel** de vos 13+ workflows n8n
- **Statistiques d'exécution** : succès, échecs, performance
- **Contrôle direct** : lancer, arrêter, configurer
- **Alertes intelligentes** pour les problèmes détectés
- **Historique complet** des exécutions

### ⚛️ Simulateur Quantique
- **6 algorithmes** : Hadamard, Grover, Shor, Bell, QFT, Téléportation
- **Jusqu'à 8 qubits** avec visualisation en temps réel
- **Résultats détaillés** : probabilités, amplitudes, phases
- **Historique des simulations**
- **Intégration n8n** pour le traitement avancé

## 🔬 Workflows n8n Intégrés

### Workflows Actuels Détectés
- **🔬 Quantum | 01 - Health Check** - Surveillance système
- **🔬 Quantum | 02 - Credits Probe** - Monitoring des crédits  
- **🔬 Quantum | 03 - Router** - Routage intelligent
- **🔧 Quantum Workflow Optimizer** - Optimisation automatique
- **🔬 Quantum | 05 - Portfolio QAOA** - Optimisation quantique
- **🔬 Quantum | 06 - Arbitrage Commodities** - Trading algorithmique
- **🔬 Quantum | 07 - Telemetry** - Collecte de télémétrie
- **🔬 Quantum | 04 - Job Runner** - Exécuteur de tâches
- **🔧 GitHub File Creator** - Intégration GitHub
- **🔮 Quantum Portfolio with Prophet** - Prédictions IA
- **🧪 Quantum Portfolio Test Suite** - Tests automatisés
- **🔬 Quantum Portfolio QAOA - OPTIMIZED** - Version optimisée
- **neuroquantix** - Module de base

### Statistiques Actuelles
- **13 workflows** au total
- **8 workflows actifs**
- **76 exécutions** (7 derniers jours)
- **Taux d'échec 100%** ⚠️ - Configuration requise

## 🛠️ Résolution des Problèmes

### ⚠️ Problème Principal : Taux d'échec 100%

**Cause identifiée** : `Node does not have any credentials set` dans le workflow **📧 Email Risk Report**

#### Solutions Recommandées :

1. **Configuration des Credentials Email**
   ```bash
   # Dans n8n, configurez un credential SMTP :
   Host: smtp.gmail.com
   Port: 587
   Username: votre-email@gmail.com
   Password: votre-mot-de-passe-app
   ```

2. **Mise à Jour des Workflows**
   - Ouvrir le workflow **📧 Email Risk Report**
   - Assigner les credentials au node Email
   - Sauvegarder et activer

3. **Vérification API**
   ```bash
   # Tester la connexion n8n
   curl -H "X-N8N-API-KEY: votre_cle" \
        https://votre-n8n.com/api/v1/workflows
   ```

## 🎨 Design System

### Couleurs Principales
- **Purple Gradient**: `from-purple-600 to-pink-600`
- **Cyan Accent**: `cyan-400`
- **Dark Background**: `from-slate-900 via-purple-900 to-slate-900`

### Typographie
- **Headings**: Inter (Bold/Extra Bold)
- **Body**: Inter (Regular/Medium)
- **Code**: JetBrains Mono

## 🔮 États Quantiques Supportés

### Algorithmes Disponibles
- **|0⟩**: État fondamental
- **|1⟩**: État excité  
- **|+⟩**: Superposition positive
- **|-⟩**: Superposition négative
- **|↑⟩**: Spin up
- **|↓⟩**: Spin down
- **|ψ⟩**: États intriqués
- **|Φ⟩**: États de Bell

### Opérations Quantiques
- **Hadamard** : Superposition uniforme
- **Grover** : Recherche quantique amplifiée
- **Shor** : Factorisation quantique
- **QFT** : Transformée de Fourier quantique
- **Teleportation** : Transfert d'état via intrication
- **Bell States** : Intrication maximale

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. **Fork** le projet
2. Créez votre **feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** vos changements (`git commit -m 'Add AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une **Pull Request**

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🎯 Roadmap

### Phase 1 : Foundation ✅
- [x] 🎨 **Interface Futuriste** - Design moderne et responsive
- [x] 🔗 **Intégration n8n** - API bridge et dashboard temps réel
- [x] ⚛️ **Simulateur Quantique** - 6 algorithmes interactifs
- [x] 📊 **Dashboard Analytics** - Monitoring complet workflows

### Phase 2 : Advanced Features (Q1 2025)
- [ ] 🔧 **Configuration Automatique** - Setup n8n one-click
- [ ] 📱 **Application Mobile** - React Native app
- [ ] 🤖 **IA Quantique** - Assistant intelligent intégré
- [ ] 🌐 **API Publique** - Endpoints pour développeurs

### Phase 3 : Scale & Optimize (Q2 2025)
- [ ] ☁️ **Cloud Hosting** - Infrastructure dédiée
- [ ] 🔄 **WebSockets** - Updates temps réel
- [ ] 📈 **Machine Learning** - Optimisation prédictive
- [ ] 🌍 **Multi-tenant** - Support organisations

### Phase 4 : Enterprise (Q3 2025)
- [ ] 🏢 **Enterprise Features** - SSO, RBAC, audit
- [ ] 🔒 **Security Enhanced** - Chiffrement bout à bout
- [ ] 📊 **Advanced Analytics** - Business intelligence
- [ ] 🚀 **Performance** - Optimisations GPU

## 📞 Contact & Support

### 🌐 Liens Utiles
- **Website**: [exoquanta.netlify.app](https://exoquanta.netlify.app)
- **GitHub**: [@hadamaouattara](https://github.com/hadamaouattara)
- **Project**: [ExoQuanta Repository](https://github.com/hadamaouattara/ExoQuanta)

### 📚 Documentation
- **[Configuration n8n](docs/N8N_CONFIGURATION.md)** - Guide complet
- **[API Documentation](docs/API.md)** - Endpoints et exemples (bientôt)
- **[Troubleshooting](docs/TROUBLESHOOTING.md)** - Résolution problèmes (bientôt)

### 🆘 Support
- **GitHub Issues** : [Signaler un problème](https://github.com/hadamaouattara/ExoQuanta/issues)
- **Discussions** : [Questions & idées](https://github.com/hadamaouattara/ExoQuanta/discussions)
- **Email** : support@exonov-quantum.com (bientôt)

## 🏆 Crédits

### Technologies Utilisées
- **[Next.js](https://nextjs.org/)** - Framework React
- **[n8n](https://n8n.io/)** - Workflow automation
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Framer Motion](https://www.framer.com/motion/)** - Animations
- **[Netlify](https://www.netlify.com/)** - Deployment platform

### Inspiration
- **Physique Quantique** - Les mystères de l'univers
- **Design Futuriste** - Esthétique cyberpunk
- **Open Source** - Communauté collaborative

---

<div align="center">
  <p><strong>🌌 Propulsé par Exonov Quantum Engine v1.0</strong></p>
  <p>Connecté à n8n • Déployé sur Netlify • Open Source MIT</p>
  <p>© 2025 Exonov Quantum. Révolutionnant la physique quantique.</p>
  
  <br>
  
  **[🚀 DÉMARRER MAINTENANT](https://exoquanta.netlify.app) | [📖 DOCUMENTATION](docs/N8N_CONFIGURATION.md) | [🔗 CONFIGURER N8N](docs/N8N_CONFIGURATION.md#configuration)**
</div>
