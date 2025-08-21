# API Routes supprimées pour compatibilité export statique

Les routes API ont été supprimées car elles sont incompatibles avec l'export statique Next.js.

## Fonctionnalités concernées :
- `/api/executions/` - Non utilisé (fichier vide)
- `/api/workflows/` - Non utilisé (fichier vide)

## Mode actuel :
- Export statique Next.js activé
- Toutes les données sont en mode démo/mock dans les composants
- Firebase Auth fonctionne côté client uniquement

## Pour réactiver les API routes :
1. Changer `output: 'export'` vers `output: undefined` dans next.config.js
2. Changer `publish = "out"` vers `publish = ".next"` dans netlify.toml
3. Recreer les fichiers API avec du contenu
