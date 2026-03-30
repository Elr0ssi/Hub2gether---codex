# Hub2gether landing page

Landing page vitrine single-file (`index.html`) en français.

## Inclus
- Nouvelle charte couleur Hub2gether (`#0F2E22`, `#7FE3BF`, `#FFEC6D`)
- Emplacements logo PNG personnalisable (navigation, mini-dashboard, footer)
- Animations d'apparition au scroll (`IntersectionObserver`)
- Section tarifs dynamique avec carrousel vertical piloté par le scroll
- Compteurs animés sur les chiffres clés et statistiques

## Ajouter votre logo PNG

Déposez votre logo ici :

- `assets/logo-hub2gether.png`

Le site l'utilise automatiquement dans :
- la barre de navigation
- le mini dashboard de la hero
- le footer

> Si l'image est absente, un fallback stylisé "H2" est affiché automatiquement.

## Lancer en local

```bash
python3 -m http.server 8000
```

Ouvrir ensuite: `http://localhost:8000`.
