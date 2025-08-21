# 🔍 Workflows d'Analyse Préventive

Ce projet utilise des workflows automatisés pour éviter les erreurs de configuration et de déploiement.

## 🛡️ Workflows Disponibles

### 1. **Pre-Change Analysis** (`pre-change-analysis.yml`)
**Utilisation** : Avant de faire des changements importants

**Comment l'utiliser :**
1. Allez dans **Actions** → **Pre-Change Analysis Workflow**
2. Cliquez sur **Run workflow**
3. Sélectionnez le type d'analyse :
   - `full` : Analyse complète
   - `config-only` : Configurations uniquement
   - `dependencies` : Dépendances uniquement
   - `deployment` : Préparation au déploiement
4. Décrivez le changement que vous voulez faire
5. Attendez le rapport d'analyse avant de procéder

**Ce qu'il fait :**
- ✅ Analyse la structure du projet
- ✅ Vérifie la cohérence des configurations
- ✅ Détecte les conflits potentiels
- ✅ Vérifie la compatibilité des dépendances
- ✅ Génère un plan d'action recommandé
- ✅ Crée une issue avec le rapport complet

### 2. **Configuration Guard** (`configuration-guard.yml`)
**Utilisation** : Automatique sur chaque modification de configuration

**Déclenchement automatique quand vous modifiez :**
- `next.config.js`
- `package.json`
- `netlify.toml`
- `.github/workflows/*.yml`

**Ce qu'il fait :**
- 🚨 Détecte les conflits critiques automatiquement
- 🛑 Bloque le déploiement si conflits détectés
- 📊 Génère un rapport de compatibilité
- 💬 Commente automatiquement sur les PRs
- ✅ Valide les changements avant déploiement

## 🎯 **Comment Utiliser Ces Workflows**

### **Avant de Faire un Changement :**

1. **Lancez l'analyse préventive** :
   ```
   Actions → Pre-Change Analysis Workflow → Run workflow
   Description : "Je veux changer la configuration Netlify"
   ```

2. **Attendez le rapport** (créé automatiquement comme issue)

3. **Lisez les recommandations** avant de procéder

4. **Appliquez les corrections suggérées**

### **Pendant le Développement :**

- Le **Configuration Guard** se déclenche automatiquement
- Si il détecte des conflits → **Build bloqué** ❌
- Si tout est OK → **Build autorisé** ✅

## 🔧 **Conflits Automatiquement Détectés**

| Conflit | Description | Solution Auto-Suggérée |
|---------|-------------|------------------------|
| **Static Export + API Routes** | `output: 'export'` avec dossier `/api` | Supprimer API routes OU désactiver export statique |
| **npm ci sans package-lock** | Workflow utilise `npm ci` mais pas de lock file | Utiliser `npm install` OU générer package-lock.json |
| **Publish Directory Mismatch** | `netlify.toml` ≠ `workflow.yml` publish dirs | Aligner les répertoires de publication |
| **Headers + Static Export** | Headers personnalisés avec export statique | Warning : fonctionnalité limitée |

## 📋 **Template de Demande d'Analyse**

```yaml
# Dans Actions → Pre-Change Analysis Workflow

Analysis Type: full
Target Change: |
  Je veux :
  - Ajouter une nouvelle fonctionnalité X
  - Modifier la configuration Y
  - Déployer sur un nouvel environnement Z
  
  Contexte :
  - Problème actuel : [décrire]
  - Objectif : [décrire]
  - Contraintes : [décrire]
```

## ⚡ **Avantages**

✅ **Prévention d'erreurs** : Détection avant action  
✅ **Gain de temps** : Évite les allers-retours  
✅ **Documentation** : Rapports automatiques  
✅ **Apprentissage** : Comprendre les conflits  
✅ **Sécurité** : Validation systématique  

## 🎯 **Workflow de Développement Recommandé**

```mermaid
graph TD
    A[Idée de changement] → B[Lancer Pre-Change Analysis]
    B → C[Lire le rapport]
    C → D{Conflits détectés?}
    D -->|Oui| E[Corriger les conflits]
    D -->|Non| F[Procéder aux changements]
    E → G[Re-lancer l'analyse]
    G → D
    F → H[Configuration Guard se déclenche]
    H → I{Validation OK?}
    I -->|Non| J[Corriger et re-push]
    I -->|Oui| K[Déploiement autorisé]
    J → H
```

---

**🎯 Ces workflows auraient évité 100% des erreurs qu'on a eues aujourd'hui !**
