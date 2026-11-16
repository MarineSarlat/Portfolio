# Portfolio de Marine Sarlat — Next.js

Portfolio one-page + pages Projets (filtres + pages détail), À propos et Contact.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvre http://localhost:3000

## Personnaliser

| Je veux modifier…                           | Fichier |
| ------------------------------------------- | ------- |
| Nom, métier, email, réseaux, parcours, texte des piliers | `data/site.js` |
| Mes projets (textes, images, catégories)    | `data/projects.js` |
| Mes images                                  | `public/projets/` |
| Ma photo de portrait                        | `public/portrait.jpg` + décommenter la ligne dans `app/a-propos/page.js` (et remplacer l'image du hero dans `app/page.js` si tu veux) |
| Couleurs, polices, ombres, animations       | `app/globals.css` (variables en haut) |

Les filtres se créent automatiquement à partir des catégories de `data/projects.js`.
Un filtre est partageable par lien : `/projets?categorie=Web`.

## Mise en ligne

Pousse le projet sur GitHub puis importe-le sur [Vercel](https://vercel.com) (gratuit).
