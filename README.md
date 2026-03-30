# Hub2gether landing page

Landing page vitrine single-file (`index.html`) en français.

## Inclus
- Nouvelle charte couleur Hub2gether (`#0F2E22`, `#7FE3BF`, `#FFEC6D`)
- Emplacements PNG personnalisables pour logo et visuels dashboard
- Animations d'apparition au scroll (`IntersectionObserver`)
- Section tarifs dynamique avec carrousel vertical piloté par le scroll
- Compteurs animés sur les chiffres clés et statistiques

## Ajouter vos PNG

Déposez vos visuels ici :

- `assets/logo-hub2gether.png`
- `assets/dashboard1vitrine.png`
- `assets/entreprise-rh.png`
- `assets/entreprise-tournois.png`
- `assets/entreprise-paiements.png`
- `assets/entreprise-partenaires.png`

Utilisation dans la page :
- navbar + footer : `logo-hub2gether.png`
- visuel principal hero : `dashboard1vitrine.png`
- visuels dynamiques section entreprise : `entreprise-*.png`

> Si une image est absente, un fallback est affiché automatiquement.

## Lancer en local

```bash
python3 -m http.server 8000
```

Ouvrir ensuite: `http://localhost:8000`.
