# 🚀 Configuration GitHub Actions pour Exonov Quantum

## 📋 Guide de Configuration

### 1. Ajouter les Secrets GitHub

Va dans **Settings** > **Secrets and variables** > **Actions** et ajoute :

#### Secrets Obligatoires :
- `NETLIFY_AUTH_TOKEN` : Token d'authentification Netlify
- `NETLIFY_SITE_ID` : ID de ton site Netlify

### 2. Obtenir le Token Netlify

#### Option A : Via l'interface Netlify
1. Va sur [netlify.com](https://netlify.com) 
2. **User Settings** > **Applications** > **Personal Access Tokens**
3. **New Access Token** 
4. Copie le token généré

#### Option B : Via CLI
```bash
npm install -g netlify-cli
netlify login
netlify env:list --site-id YOUR_SITE_ID
```

### 3. Obtenir le Site ID

#### Dans l'interface Netlify :
1. Va sur ton site **ExoQuanta**
2. **Site Settings** > **General** 
3. **Site Information** > **App ID**
4. Copie l'ID (format : `xxxx-xxxx-xxxx`)

#### Via URL :
L'URL de ton site : `https://app.netlify.com/sites/SITE_ID/overview`

### 4. Ajouter les Secrets

```
Name: NETLIFY_AUTH_TOKEN
Value: nfp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Name: NETLIFY_SITE_ID  
Value: xxxx-xxxx-xxxx-xxxx-xxxx
```

## 🔄 Workflow Automatique

Une fois configuré, **chaque push sur main** déclenchera :

1. ✅ **Build automatique** avec tests
2. 🚀 **Déploiement Netlify** automatique  
3. 💬 **Commentaires** sur commits/PRs
4. 📊 **Status checks** visibles

## 🔍 Monitoring

- **Actions** tab sur GitHub pour voir les builds
- **Commit status** avec ✅ ou ❌
- **Auto-deploy** à chaque modification

## 🛠️ Avantages

- **Zéro configuration** pour les futurs déploiements
- **Tests automatiques** avant déploiement
- **Rollback facile** en cas de problème
- **Historique complet** des déploiements

---

**URGENT** : Configure ces secrets MAINTENANT pour que le prochain push déclenche le déploiement automatique ! 🚀
