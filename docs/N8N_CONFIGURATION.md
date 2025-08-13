# 🔗 Configuration n8n pour Exonov Quantum

## Vue d'ensemble
Ce guide vous explique comment connecter votre instance n8n existante à Exonov Quantum pour un contrôle et une surveillance en temps réel de vos workflows quantiques.

## 📋 Prérequis

### Instance n8n Active
- n8n version 1.0+ recommandée
- API activée et accessible
- Clé API générée

### Variables d'Environnement
Créez un fichier `.env.local` à la racine du projet :

```bash
# Configuration n8n
N8N_BASE_URL=https://votre-instance-n8n.com
N8N_API_KEY=votre_cle_api_n8n

# Configuration optionnelle
NEXT_PUBLIC_N8N_URL=https://votre-instance-n8n.com
```

## 🔑 Génération de la Clé API n8n

### Méthode 1: Interface Web n8n
1. Connectez-vous à votre instance n8n
2. Allez dans **Settings** > **API Keys**
3. Cliquez sur **Create API Key**
4. Donnez un nom : `Exonov-Quantum-Dashboard`
5. Copiez la clé générée

### Méthode 2: Via l'API REST
```bash
curl -X POST http://votre-n8n:5678/api/v1/api-keys \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_AUTH_TOKEN" \
  -d '{
    "label": "Exonov Quantum Dashboard"
  }'
```

## 🚀 Configuration du Dashboard

### 1. Variables d'Environnement Netlify
Si vous déployez sur Netlify, ajoutez ces variables dans les **Site Settings** :

```
N8N_BASE_URL = https://votre-instance-n8n.com
N8N_API_KEY = votre_cle_api_n8n
NEXT_PUBLIC_N8N_URL = https://votre-instance-n8n.com
```

### 2. Test de Connexion
Redémarrez l'application et vérifiez :
- `/api/workflows` - Doit retourner vos workflows
- `/api/executions` - Doit retourner les statistiques d'exécution
- Dashboard en temps réel opérationnel

## 🔧 Résolution des Problèmes

### Erreur : "Node does not have any credentials set"

#### Solution 1: Configuration des Credentials Email
1. Dans n8n, allez à **Credentials**
2. Créez un nouveau credential **Email (SMTP)**
3. Configurez vos paramètres SMTP :
   ```
   Host: smtp.gmail.com (pour Gmail)
   Port: 587
   Secure: true
   Username: votre-email@gmail.com
   Password: votre-mot-de-passe-app
   ```

#### Solution 2: Mise à Jour des Workflows
1. Ouvrez le workflow **📧 Email Risk Report**
2. Sélectionnez le node Email
3. Assignez les credentials configurés
4. Sauvegardez et activez

### Erreur : Taux d'échec 100%

#### Vérifications :
1. **Credentials manquants** : Tous les nodes ont-ils leurs credentials ?
2. **URLs incorrectes** : Vérifiez les endpoints dans vos workflows
3. **Permissions API** : La clé API a-t-elle les bonnes permissions ?
4. **Connectivité réseau** : L'instance n8n est-elle accessible ?

#### Actions correctives :
```bash
# Test de connectivité
curl -H "X-N8N-API-KEY: votre_cle" \
     https://votre-n8n.com/api/v1/workflows

# Vérification des workflows actifs
curl -H "X-N8N-API-KEY: votre_cle" \
     https://votre-n8n.com/api/v1/executions
```

## 📊 Workflows Recommandés pour Exonov Quantum

### Workflows de Base Déjà Configurés
- **🔬 Quantum | 01 - Health Check** - Surveillance système
- **🔬 Quantum | 02 - Credits Probe** - Monitoring des crédits
- **🔬 Quantum | 03 - Router** - Routage intelligent
- **🔬 Quantum | 05 - Portfolio QAOA** - Optimisation quantique
- **🔬 Quantum | 06 - Arbitrage Commodities** - Trading algorithmique

### Configuration Recommandée
1. **Activez tous les workflows de monitoring**
2. **Configurez les notifications email**
3. **Définissez des webhooks pour les alertes**
4. **Programmez les exécutions automatiques**

## 🔐 Sécurité

### Bonnes Pratiques
- **Clé API** : Stockez-la de manière sécurisée
- **HTTPS** : Utilisez toujours HTTPS pour n8n
- **Rotation** : Changez régulièrement les clés API
- **Monitoring** : Surveillez les accès API

### Configuration CORS (si nécessaire)
```json
{
  "endpoints": {
    "rest": "api",
    "webhook": "webhook",
    "webhookTest": "webhook-test"
  },
  "security": {
    "cors": {
      "enabled": true,
      "origin": ["https://exoquanta.netlify.app"]
    }
  }
}
```

## 🚀 Déploiement en Production

### Checklist de Déploiement
- [ ] Variables d'environnement configurées
- [ ] Clé API générée et testée
- [ ] Tous les credentials configurés
- [ ] Workflows activés
- [ ] Tests de connectivité réussis
- [ ] Monitoring activé

### Surveillance Continue
- **Dashboard Exonov Quantum** : Monitoring en temps réel
- **Alertes email** : Notifications automatiques
- **Logs centralisés** : Traçabilité complète
- **Métriques de performance** : Analyse des tendances

## 📞 Support

### Ressources
- [Documentation n8n API](https://docs.n8n.io/api/)
- [Guide Credentials n8n](https://docs.n8n.io/credentials/)
- [Community n8n](https://community.n8n.io/)

### Contact Exonov Quantum
- **GitHub Issues** : [ExoQuanta Repository](https://github.com/hadamaouattara/ExoQuanta/issues)
- **Documentation** : [README.md](../README.md)

---

🌌 **Exonov Quantum Dashboard** - Propulsé par n8n + Next.js
