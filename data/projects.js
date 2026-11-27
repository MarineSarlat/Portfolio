// ✏️ Ajoute, modifie ou supprime tes projets ici.
// - Les filtres de la page Projets se créent tout seuls à partir des catégories.
// - `image` = visuel de couverture ; `fit: "contain"` montre l'image entière (utile pour une affiche).
// - `gallery` = images de la page détail ; `wide: true` pour une image pleine largeur.
// - Place tes fichiers dans /public/projets/ et référence-les avec "/projets/mon-fichier.jpg".

export const projects = [
  {
    slug: "site-portfolio",
    title: "Projet personnel : déploiement de mon portfolio professionnel",
    category: "Web",
    year: "2026",
    image: "/projets/portfolio.png",
    fit: "cover",
    summary:
      "Développement complet d’un site web professionnel en Next.js pour présenter mes projets et mon parcours.",
    tags: ["Prestashop", "PHP", "CSS", "UI/UX"],
    role: "Intégration, Développement, Design",
    tools: "Next.js, React",
    intro: [
      "Développement complet d’un site web professionnel en Next.js pour présenter mes projets et mon parcours.",
      "L’objectif était de créer un site web responsive et interactif, avec une navigation fluide et des animations pour présenter les différentes sections de mon portfolio et mes projets.",
     <a href="https://github.com/MarineSarlat/Portfolio" target="_blank" rel="noopener noreferrer">Cliquer ici pour consulter mon code source</a>
    ],
    // Ajout de l'URL du site pour l'iframe interactive
    iframeUrl: "https://portfolio-marine.vercel.app/",
    
  },
  
    {
    slug: "mmi-du-reve-a-la-realite",                 // ← court, en minuscules, sans accents ni espaces (sert pour l'adresse /projets/mon-projet-video)
    title: "MMI - Du rêve à la réalité",             // ← titre affiché
    category: "Audiovisuel",                  // ← catégorie : crée le filtre automatiquement
    year: "2025",                             // ← année
    image: "/projets/JefilmemaFormation.png",   // ← IMAGE de la carte (voir étape 2)
    fit: "cover",                             // "cover" = image remplit la carte, "contain" = image entière visible
    summary: "Trophée de Bronze au concours vidéo Je filme ma formation", // ←
    tags: ["Audiovisuel", "Montage", "Vidéo"],        // ← petits mots-clés
    role: "Écriture, réalisation, montage",             // ← ton rôle (page projet)
    tools: "DaVinci Resolve",                    // ← tes outils (page projet)
    intro: [
      "Trophée de Bronze au concours vidéo Je filme ma formation, sur 588 vidéos sélectionnées",   // ← 
      "Création d’une vidéo promotionnelle de 3 minutes sur la formation BUT MMI de l’IUT de Béziers, en équipe de 4. Pour mener à bien ce projet, nous avons élaboré un découpage technique afin de structurer les différentes étapes de réalisation.", // ←
    ],
    gallery: [
      // 👇 TA VIDÉO YOUTUBE : colle simplement le lien de la vidéo
      { embed: "https://youtu.be/N7kIC1hZXwU", caption: "MMI - Du rêve à la réalité", wide: true },

      // Tu peux ajouter d'autres vidéos ou des images à la suite :
      // { embed: "https://youtu.be/YYYYYYYYYYY", caption: "Deuxième vidéo", wide: true },
      // { src: "/projets/autre-image.jpg", caption: "Une image du projet", wide: true },
    { src: "/projets/dt.png", caption: "Decoupage technique", wide: true },
    ],
  },
  {
    slug: "site-wordpress-entreprise",
    title: "Refonte du site web pour la chanteuse Emilie Limie",
    category: "Web",
    year: "2026",
    image: "/projets/emilie.png",
    fit: "cover",
    summary:
      "Création et développement d'un site vitrine sous WordPress sur mesure pour une entreprise.",
    tags: ["WordPress", "PHP", "CSS", "UI/UX"],
    role: "Intégration, Développement, Design",
    tools: "WordPress, Elementor, Figma",
    intro: [
      "Développement complet d'un site web professionnel sous WordPress.",
      "En tant que cheffe de projet lors de l’événement pédagogique « Marathon MMI 2025 », j’ai coordonné une équipe de 6 personnes pour concevoir, en seulement 4 jours, une communication numérique globale (charte graphique, affiches, interview vidéo et site WordPress). J’ai également pris en charge la conception technique et l’intégration complète du site web sous WordPress. La qualité de notre travail a convaincu la cliente, Emilie Limiè, de remplacer définitivement son ancien site par le nouveau que nous avions réalisé.",
    ],
    // Ajout de l'URL du site pour l'iframe interactive
    iframeUrl: "https://emilielimiemusic.fr/",
   
  },
  {
    slug: "bob-l-eponge",
    title: "Les maisons de l'univers de Bob l'éponge",
    category: "3D",
    year: "2026",
    image: "/projets/bob1.webp",
    fit: "contain",
    summary:
      "Modélisation 3D des maisons de l'univers de Bob l'éponge.",
    tags: ["3D", "Modélisation", "Conception"],
    role: "Création 3D, modélisation",
    tools: "3ds Max",
    intro: [
      "Premier projet de modélisation 3D.",
      "J'ai choisi de recréer les maisons emblématiques de l'univers de Bob l'éponge. Pour cela, j'ai travaillé sur la forme, les courbes, les modifiers et les couleurs pour obtenir un rendu fidèle à l'original.",
    ],
    gallery: [{ src: "/projets/bob1.webp", caption: "Vue de haut maisons - 3D", wide: true, pad: true }, 
      { src: "/projets/bob2.webp", caption: "Vue de face maisons - 3D", wide: true, pad: true }],
  },
  {
    slug: "maquette-site-cabinet-architecture",
    title: "LGS - Maquette du site d'un cabinet d'architecture",
    category: "UX/UI",
    year: "2026",
    image: "/projets/accueil1.png",
    fit: "cover",
    summary:
      "Maquette de la page d'accueil et de la navigation en panneau pour un cabinet d'architecture.",
    tags: ["Wireframe", "Architecture de l'information", "UX"],
    role: "UX design, wireframes, maquette, prototypage",
    tools: "Figma",
    intro: [
      "Maquette fonctionnelle du site d'un cabinet d'architecture : présentation des associés, projets récents, témoignages, distinction et inscription à la newsletter.",
      "Les courbes en arrière-plan guident le regard le long de la page, et la navigation en panneau garde l'accès aux grandes expertises du cabinet.",
    ],
    gallery: [{ src: "/projets/maquette.png", caption: "Maquette de la page d'accueil et navigation en panneau", pad: true },
      { src: "/projets/accueil1.png", caption: "Page d'accueil version desktop", pad: true },
      { src: "/projets/accueil2.png", caption: "Page d'accueil version desktop - 2", pad: true },
      { src: "/projets/accueil3.png", caption: "Page d'accueil version desktop - 3", pad: true },
      { src: "/projets/panneaudenavigation.png", caption: "Navigation en panneau", pad: true }
    ],
  },
  {
    slug: "bref-marine-sarlat",                 // ← court, en minuscules, sans accents ni espaces (sert pour l'adresse /projets/mon-projet-video)
    title: "Bref je m'appelle Marine Sarlat",             // ← titre affiché
    category: "Audiovisuel",                  // ← catégorie : crée le filtre automatiquement
    year: "2025",                             // ← année
    image: "/projets/Bref.png",   // ← IMAGE de la carte (voir étape 2)
    fit: "cover",                             // "cover" = image remplit la carte, "contain" = image entière visible
    summary: "Création d'un CV vidéo pour ma recherche d'alternance", // ←
    tags: ["Audiovisuel", "Montage", "Vidéo"],        // ← petits mots-clés
    role: "Écriture, réalisation, figuration, montage",             // ← ton rôle (page projet)
    tools: "DaVinci Resolve",                    // ← tes outils (page projet)
    intro: [
      "Création d'un CV vidéo pour ma recherche d'alternance",   // ← 
      "Projet personnel dans lequel je me suis fixé pour objectif de me présenter en 75 secondes, en étant accrocheuse et percutante, tout en expliquant qui je suis et en retraçant mon parcours.", 
    ],
    gallery: [
      // 👇 TA VIDÉO YOUTUBE : colle simplement le lien de la vidéo
      { embed: "https://youtu.be/8KaYJG0k8Sc?si=QIvPjdQzsJ9H1rZn", caption: "Bref", wide: true },

      // Tu peux ajouter d'autres vidéos ou des images à la suite :
      // { embed: "https://youtu.be/YYYYYYYYYYY", caption: "Deuxième vidéo", wide: true },
      // { src: "/projets/autre-image.jpg", caption: "Une image du projet", wide: true },
    ],
  },
  
  {
    slug: "site-jeu-unity",
    title: "Premier jeu vidéo sous Unity : Les Dents de la Mer Enfant ",
    category: "Jeu Vidéo",
    year: "2026",
    image: "/projets/unity.png",
    fit: "cover",
    summary:
      "Exercice de création d’un jeu vidéo sous Unity.",
    tags: ["Unity", "C#", "JavaScript", "UI/UX"],
    role: "Intégration, Développement, Design",
    tools: "Unity, C#",
    intro: [
      "Exercice de création d’un jeu vidéo sous Unity.",
      "L’objectif était de créer un jeu intégrant la gestion des collisions entre le joueur et les ennemis, ainsi que le système de vie du joueur et des ennemis. J’ai également travaillé sur l’interface utilisateur afin d’afficher les points de vie du joueur et son score.",
    ],
    // Ajout de l'iframe interactive Itch.io
    iframeUrl: "https://itch.io/embed-upload/20647945?color=333333",
   
  },
  
  {
    slug: "alice",
    title: "Exercice du Monde Onirique, In and Out d'Alice au pays des merveilles",
    category: "Graphisme",
    year: "2025",
    image: "/projets/alice.png",
    fit: "cover",
    summary:
      "Exercice de création graphique inspiré de l’univers onirique d’Alice au pays des merveilles..",
    tags: ["Graphisme", "Illustration", "Photoshop", "InDesign"],
    role: "Illustration, Photoshop, InDesign",
    tools: "Illustrator, InDesign, Photoshop",
    intro: [
      "Exercice de création graphique inspiré de l’univers onirique d’Alice au pays des merveilles.",
      "Cet exercice m’a permis de travailler sur la composition, les couleurs et les textures afin de créer un univers immersif, mêlant des éléments photographiques réels et des éléments dessinés.",
    ],
    gallery: [
      { src: "/projets/alice.png", caption: "Alice dans le monde onirique", wide: true },
    ],
  },
  {
    slug: "site-prestashop",
    title: "Sylavanian Families - Exercice Prestashop",
    category: "Web",
    year: "2025",
    image: "/projets/prestashop.png",
    fit: "cover",
    summary:
      "Exercice de prise en main de Prestashop.",
    tags: ["Prestashop", "PHP", "CSS", "UI/UX"],
    role: "Intégration, Développement, Design",
    tools: "Prestashop",
    intro: [
      "Développement complet d’un site web professionnel sous PrestaShop.",
      "L’objectif était de prendre en main les différentes fonctionnalités de la plateforme, de l’ajout de produits à la gestion des commandes, en passant par la personnalisation du thème et l’optimisation de l’expérience utilisateur.",
    ],
    // Ajout de l'URL du site pour l'iframe interactive
    iframeUrl: "https://web-mmi2.iutbeziers.fr/~marine.sarlat/prestashop_edition_basic_version_8/",
    gallery: [
      { src: "/projets/prestashop.png", caption: "page d'accueil", wide: true },
    ],
  },
  
  {
    slug: "roomies-application-colocation",
    title: "Roomies - Application de colocation",
    category: "UX/UI",
    year: "2025",
    image: "/projets/roomies-ecrans.jpg",
    fit: "contain",
    summary:
      "Conception d'une application mobile de colocation : calendrier, tâches, dépenses, messagerie et compatibilité entre colocataires.",
    tags: ["UI / UX", "Prototype", "Figma"],
    role: "UX / UI design, prototypage",
    tools: "Figma",
    intro: [
      "Roomies simplifie la vie à plusieurs : répartition des tâches ménagères, suivi des dépenses communes, calendrier partagé, messagerie et profils de colocataires avec un indice de compatibilité.",
      "J'ai conçu l'ensemble du parcours, de l'onboarding aux écrans de gestion, avec un univers vert doux relevé de touches de rose pour une application chaleureuse et lisible.",
    ],
    gallery: [{ src: "/projets/roomies-ecrans.jpg", caption: "Vue d'ensemble des écrans — Figma", wide: true, pad: true }],
  },
  {
    slug: "rock-en-seine-paname-on-the-beach",
    title: "Rock en Seine — Paname on the Beach",
    category: "Graphisme",
    year: "2025",
    image: "/projets/rock-affiche.jpg",
    fit: "cover",
    summary:
      "Univers graphique estival et solaire pour une édition imaginaire du festival : affiche d'abribus, dépliant programme et billetterie.",
    tags: ["Direction artistique", "Illustration", "Mise en page"],
    role: "Direction artistique, illustration, mise en page",
    tools: "Illustrator, InDesign, Photoshop",
    intro: [
      "Pour ce projet, j'ai imaginé une édition « Paname on the Beach » du festival Rock en Seine : Paris rencontre l'esprit des plages et du surf, entre guitares, palmiers et hibiscus.",
      "J'ai décliné cet univers sur trois supports complémentaires : une affiche d'abribus, un dépliant programme avec plan et horaires, et un billet d'entrée pour le forfait 4 jours. Palette chaude, rose et violet, pour une identité immédiatement reconnaissable.",
    ],
    gallery: [
      { src: "/projets/rock-affiche.jpg", caption: "Affiche d'abribus", pad: true },
      { src: "/projets/rock-depliant-1.jpg", caption: "Dépliant — couverture, plan et accès", wide: true },
      { src: "/projets/rock-depliant-2.jpg", caption: "Dépliant — programmation 2025", wide: true },
      { src: "/projets/rock-billet.jpg", caption: "Billetterie — forfait 4 jours", wide: true },
    ],
  },
  {
    slug: "cine-club",
    title: "Site Ciné CLub",
    category: "Web",
    year: "2026",
    image: "/projets/cineclub2.png",
    fit: "contain",
    summary:
      "Réalisation d'un site web next.js pour les passionné de séries.",
    tags: ["Web", "Développement", "Design"],
    role: "Développement, design",
    tools: "Next.js, React, CSS",
    intro: [
      "Réalisation d’un site web sous Next.js destiné aux passionnés de séries.",
      "J’ai travaillé sur la mise en place d’un système d’authentification avec gestion des erreurs à l’aide de Better Auth. Le site repose sur un ensemble de _components et d’_actions, ainsi que sur des relations avec une base de données permettant de stocker, gérer et récupérer correctement les données.",
     <a href="https://github.com/MarineSarlat/SiteWeb5-mi-session-2" target="_blank" rel="noopener noreferrer">Cliquer ici pour consulter mon code source</a>
     
    ],
    gallery: [{ src: "/projets/cineclub1.png", caption: "page-connexion", wide: true, pad: true }, 
      { src: "/projets/cineclub2.png", caption: "page-site", wide: true, pad: true },
      { src: "/projets/cineclub3.png", caption: "page-site-detail", wide: true, pad: true },
      { src: "/projets/cineclub4.png", caption: "page-site-recherche", wide: true, pad: true }],
  },
  {
    slug: "arbre-noel",
    title: "Affiches numériques pour les arbres de Noël de Fabrikus World",
    category: "Graphisme",
    year: "2025",
    image: "/projets/arbreNoel1.png",
    fit: "cover",
    summary:
      "Visuel pour les affiches de leurs journées événements Arbres de Noël avec des comités d'entreprises.",
    tags: ["Direction artistique", "Illustration", "Photoshop", "InDesign"],
    role: "Direction artistique, Illustration, Photoshop, InDesign",
    tools: "Illustrator, InDesign, Photoshop",
    intro: [
      "Création de visuels pour les affiches des journées événementielles « Arbres de Noël », organisées par Fabrikus World pour ses entreprises partenaires.",
      "En respectant la direction artistique du parc, j’ai intégré les éléments indispensables demandés par mon entreprise dans un visuel festif et coloré, mêlant des éléments de Noël et les personnages emblématiques du parc.",
    ],
    gallery: [
      { src: "/projets/arbreNoel1.png", caption: "Affiche 1 des arbres de Noël", wide: true },
      { src: "/projets/arbreNoel2.png", caption: "Affiche 2 des arbres de Noël", wide: true },
    ],
  },
  {
    slug: "site-repaire-obscur",
    title: "Premier jeu vidéo à partir du template Phaser : Repaire Obscur",
    category: "Jeu Vidéo",
    year: "2026",
    image: "/projets/phaser.png",
    fit: "cover",
    summary:
      "Exercice de création d’un jeu vidéo sous Phaser.",
    tags: ["Phaser", "JavaScript", "CSS", "UI/UX"],
    role: "Intégration, Développement, Design",
    tools: "Phaser, JavaScript",
    intro: [
      "Exercice de création d’un jeu vidéo sous Phaser.",
      "L’objectif était de concevoir un jeu vidéo multijoueur et interactif, dans lequel les personnages peuvent interagir avec les plateformes et évoluer à travers différentes scènes.",
      <a href="https://github.com/MarineSarlat/repaire-obscur" target="_blank" rel="noopener noreferrer">Cliquer ici pour consulter mon code source</a>
      
    ],
    // Ajout de l'URL du site pour l'iframe interactive
    iframeUrl: "https://marinesarlat.github.io/repaire-obscur/",
   
},
  {
    slug: "b-roll",                 // ← court, en minuscules, sans accents ni espaces (sert pour l'adresse /projets/mon-projet-video)
    title: "B-Roll",             // ← titre affiché
    category: "Audiovisuel",                  // ← catégorie : crée le filtre automatiquement
    year: "2025",                             // ← année
    image: "/projets/B-Roll.png",   // ← IMAGE de la carte (voir étape 2)
    fit: "cover",                             // "cover" = image remplit la carte, "contain" = image entière visible
    summary: "Réalisation d'une vidéo présentant la recette d'un smoothie bowl", // ←
    tags: ["Audiovisuel", "Montage", "Vidéo"],        // ← petits mots-clés
    role: "Écriture, réalisation,figuration",             // ← ton rôle (page projet)
    tools: "DaVinci Resolve",                    // ← tes outils (page projet)
    intro: [
      "Vidéo de présentation de la recette d'un smoothie bowl",   // ← 
      "En équipe nous avons créé un storyboard en réfléchissant préciser aux transisiotns entre les plans pour recréer le style B-Roll.", // ←
    ],
    pdfUrl: "/projets/broll.pdf",
    gallery: [
      // 👇 TA VIDÉO YOUTUBE : colle simplement le lien de la vidéo
      { embed: "https://youtu.be/I_az7UBsXU0", caption: "B-Roll", wide: true },

      // Tu peux ajouter d'autres vidéos ou des images à la suite :
      // { embed: "https://youtu.be/YYYYYYYYYYY", caption: "Deuxième vidéo", wide: true },
      // { src: "/projets/autre-image.jpg", caption: "Une image du projet", wide: true },
    ],
  },
  {
    slug: "site-mission-aurora",
    title: "Exercice : site mission Aurora",
    category: "Web",
    year: "2026",
    image: "/projets/aurora.png",
    fit: "cover",
    summary:
      "Exercice de création d’un site web sous Next.js pour la mission Aurora, un projet fictif de recherche spatiale.",
    tags: ["Next.js", "PHP", "CSS", "UI/UX"],
    role: "Intégration, Développement, Design",
    tools: "Next.js, Tailwind CSS",
    intro: [
      "Exercice de création d’un site web sous Next.js pour la mission Aurora, un projet fictif de recherche spatiale.",
      "L’objectif était de concevoir un site web responsive et interactif, avec une navigation fluide et des animations permettant de présenter les différentes sections de la mission ainsi que son équipage.",
      <a href="https://github.com/MarineSarlat/mission-aurora" target="_blank" rel="noopener noreferrer">Cliquer ici pour consulter mon code source</a>
     
    ],
    // Ajout de l'URL du site pour l'iframe interactive
    iframeUrl: "https://mission-aurora-drab.vercel.app/",
    gallery: [
      { src: "/projets/aurora.png", caption: "page d'accueil", wide: true },
    ],
},
  {
    slug: "sofa",
    title: "SOFA - Modélisation 3D d'un canapé",
    category: "3D",
    year: "2026",
    image: "/projets/Sofa1.webp",
    fit: "contain",
    summary:
      "Box Modelling d'un canapé pour un projet pointant sur l'utilisation de la fonction Editable Poly.",
    tags: ["3D", "Modélisation", "Conception"],
    role: "Création 3D, modélisation",
    tools: "3ds Max",
    intro: [
      "Box Modelling d'un canapé pour un projet pointant sur l'utilisation de la fonction Editable Poly.",
      "J'ai travaillé sur le découpage des éléments, en utilisant des extrusions et un modifier Turbosmooth.",
    ],
    gallery: [{ src: "/projets/Sofa1.webp", caption: "Vue de face canapé - 3D", wide: true, pad: true },
      { src: "/projets/Sofa2.webp", caption: "Vue de côté canapé - 3D", wide: true, pad: true }
    ],
  },
    {
    slug: "affiche-vias",
    title: "Affiche commerciale Fabrikus World destinée aux commerçants de Vias",
    category: "Graphisme",
    year: "2026",
    image: "/projets/afficheFW.png",
    fit: "cover",
    summary:
      "Affiche commerciale pour les commerçants de Vias, pour promouvoir le parc d'attractions Fabrikus World.",
    tags: ["Direction artistique", "Illustration", "Photoshop", "InDesign"],
    role: "Direction artistique, Illustration, Photoshop, InDesign",
    tools: "Illustrator, InDesign, Photoshop",
    intro: [
      "Affiche commerciale pour les commerçants de Vias, pour promouvoir le parc d'attractions Fabrikus World.",
      "Cette affiche regroupe des informations essentielles, telles que le calendrier d’ouverture du parc et ses principaux tarifs. J’ai travaillé sur la composition, les couleurs et les textures afin de créer un univers immersif et attractif, donnant envie aux touristes qui découvriront cette affiche de venir visiter le parc.",
    ],
    gallery: [
      { src: "/projets/afficheFW.png", caption: "Affiche commerciale Fabrikus World", wide: true },
    ],
  },
  
  
];

export const categories = ["Tout", ...Array.from(new Set(projects.map((p) => p.category)))];
