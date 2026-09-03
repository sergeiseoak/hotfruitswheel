# Hot Fruits Wheel — hotfruitswheel.com

Site statique construit avec [Astro](https://astro.build). Le contenu se modifie via des fichiers
Markdown, sans toucher au code.

## Éditer le contenu

Chaque page de contenu est un fichier dans `src/content/pages/`. Le fichier `index.md` correspond
à la page d'accueil (`/`).

Chaque fichier commence par un en-tête (frontmatter) avec les métadonnées SEO, suivi du texte en
Markdown :

```markdown
---
lang: "fr-TN"
geo: "Tunisie"
brand: "1xCasino"
game: "Hot Fruits Wheel"
provider: "Amatic Industries"
metaTitle: "Titre affiché dans l'onglet du navigateur et Google"
metaDescription: "Description affichée dans les résultats Google"
h1: "Titre principal affiché en haut de la page"
publishDate: 2026-09-02
---

Le texte de la page ici, en Markdown normal : paragraphes, ## titres, listes,
[liens internes](/gratuit/), tableaux, etc.
```

Pour ajouter une nouvelle page de contenu de ce type (guide, comparatif, etc.), créez un nouveau
fichier `.md` dans `src/content/pages/` puis créez une route Astro correspondante dans
`src/pages/` qui l'affiche (sur le modèle de `src/pages/index.astro`) — ou dites-le à Claude, qui
peut l'automatiser.

Les pages `/gratuit/`, `/versions-amatic/` et `/comment-jouer/` sont pour l'instant des pages
d'attente (`src/pages/gratuit/index.astro`, etc.) — envoyez leur contenu au même format pour que
Claude les remplace par le vrai texte.

## Lien affilié (redirection masquée)

Le fichier `public/_redirects` contient la redirection 301 :

```
/info/ https://votre-lien-affilie... 301
```

Cloudflare Pages applique automatiquement ce fichier. Pour changer le lien ou en ajouter d'autres
(un par plateforme par exemple), ajoutez une ligne par redirection dans ce même fichier.

## Vérification Google Search Console

Le code de vérification est déjà inséré dans `src/layouts/BaseLayout.astro`
(constante `GOOGLE_SITE_VERIFICATION`).

## Développement local

```bash
npm install
npm run dev       # serveur de développement sur http://localhost:4321
npm run build     # génère le site statique dans dist/
npm run preview   # prévisualise le build de production
```

## Déploiement — GitHub + Cloudflare Pages

1. **Créer le dépôt GitHub**
   - Sur github.com → New repository → nommez-le (ex. `hotfruitswheel`)
   - Poussez ce dossier dans le dépôt :
     ```bash
     git init
     git add .
     git commit -m "Site initial"
     git branch -M main
     git remote add origin https://github.com/VOTRE-COMPTE/hotfruitswheel.git
     git push -u origin main
     ```

2. **Connecter Cloudflare Pages**
   - Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git
   - Sélectionnez le dépôt GitHub
   - Build command : `npm run build`
   - Build output directory : `dist`
   - Déployez

3. **Domaine personnalisé**
   - Dans le projet Pages → Custom domains → ajoutez `hotfruitswheel.com`
   - Suivez les instructions DNS affichées (si le domaine est déjà sur Cloudflare, c'est automatique)

4. **Mises à jour**
   - Chaque `git push` sur `main` redéploie automatiquement le site (nouveau contenu, nouvelles
     pages, modifications de design, etc.)

5. **Google Search Console**
   - search.google.com/search-console → ajoutez la propriété `hotfruitswheel.com`
   - La vérification par balise HTML est déjà en place (voir plus haut)
   - Une fois vérifié, ajoutez le sitemap : `sitemap-index.xml`
