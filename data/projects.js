// ✏️ Ajoute, modifie ou supprime tes projets ici.
// - Les filtres de la page Projets se créent tout seuls à partir des catégories.
// - `image` = visuel de couverture ; `fit: "contain"` montre l'image entière (utile pour une affiche).
// - `gallery` = images de la page détail ; `wide: true` pour une image pleine largeur.
// - Place tes fichiers dans /public/projets/ et référence-les avec "/projets/mon-fichier.jpg".

export const projects = [
  
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
      "Trophée de Bronze au concours vidéo Je filme ma formation",   // ← 
      "Le but était de créer une vidéo promotionnelle de 3 min, en équipe, de la formation BUT MMI de l'IUT de Béziers", // ←
    ],
    gallery: [
      // 👇 TA VIDÉO YOUTUBE : colle simplement le lien de la vidéo
      { embed: "https://youtu.be/N7kIC1hZXwU", caption: "MMI - Du rêve à la réalité", wide: true },

      // Tu peux ajouter d'autres vidéos ou des images à la suite :
      // { embed: "https://youtu.be/YYYYYYYYYYY", caption: "Deuxième vidéo", wide: true },
      // { src: "/projets/autre-image.jpg", caption: "Une image du projet", wide: true },
    ],
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
      "Premier projet de modélisation 3D, j'ai choisi de recréer les maisons emblématiques de l'univers de Bob l'éponge.",
      "J'ai travaillé sur la forme, les courbes, les modifiers et les couleurs pour obtenir un rendu fidèle à l'original.",
    ],
    gallery: [{ src: "/projets/bob1.webp", caption: "Vue de haut maisons - 3D", wide: true, pad: true }, 
      { src: "/projets/bob2.webp", caption: "Vue de face maisons - 3D", wide: true, pad: true }],
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
    gallery: [
      // 👇 TA VIDÉO YOUTUBE : colle simplement le lien de la vidéo
      { embed: "https://youtu.be/I_az7UBsXU0", caption: "B-Roll", wide: true },

      // Tu peux ajouter d'autres vidéos ou des images à la suite :
      // { embed: "https://youtu.be/YYYYYYYYYYY", caption: "Deuxième vidéo", wide: true },
      // { src: "/projets/autre-image.jpg", caption: "Une image du projet", wide: true },
    ],
  },
  {
    slug: "alice",
    title: "Exercice du Monde Onirique, In and Out d'Alice au pays des merveilles",
    category: "Graphisme",
    year: "2025",
    image: "/projets/alice.png",
    fit: "cover",
    summary:
      "Exercice de création graphique inspiré du monde onirique d'Alice au pays des merveilles.",
    tags: ["Graphisme", "Illustration", "Photoshop", "InDesign"],
    role: "Illustration, Photoshop, InDesign",
    tools: "Illustrator, InDesign, Photoshop",
    intro: [
      "Exercice de création graphique inspiré du monde onirique d'Alice au pays des merveilles.",
      "C et exercice m'a permis de travailler sur la composition, les couleurs et les textures pour créer un univers onirique et immersif, comportant des éléments réelles et des éléments dessinés.",
    ],
    gallery: [
      { src: "/projets/alice.png", caption: "Alice dans le monde onirique", wide: true },
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
      "L'objectif était de moderniser l'image de marque de l'entreprise tout en garantissant une navigation fluide et responsive.",
    ],
    // Ajout de l'URL du site pour l'iframe interactive
    iframeUrl: "https://emilielimiemusic.fr/",
    
    gallery: [
      { src: "/projets/entreprise.png", caption: "Aperçu de la page d'accueil", wide: true },
    ],
},
  {
    slug: "arbre-noel",
    title: "Affiches numériquespour les arbres de Noël de Fabrikus World",
    category: "Graphisme",
    year: "2025",
    image: "/projets/arbreNoel1.png",
    fit: "cover",
    summary:
      "Visuel pour les affiches de leurs journées événement Arbres de Noël avec des comités d'entreprises.",
    tags: ["Direction artistique", "Illustration", "Photoshop", "InDesign"],
    role: "Direction artistique, Illustration, Photoshop, InDesign",
    tools: "Illustrator, InDesign, Photoshop",
    intro: [
      "Visuel pour les affiches de les journées événement Arbres de Noël organisé par Fabrikus World, pour les entreprises partenaires.",
      "En suivant la direction artistique du parc, j'ai gardé les éléments indispensables demandé par mon entreprise en les intégrant dans un visuel festif et coloré, avec des éléments de Noël et des personnages du parc.",
    ],
    gallery: [
      { src: "/projets/arbreNoel1.png", caption: "Affiche 1 des arbres de Noël", wide: true },
      { src: "/projets/arbreNoel2.png", caption: "Affiche 2 des arbres de Noël", wide: true },
    ],
  },
  
  {
    slug: "bref-marine-sarlat",                 // ← court, en minuscules, sans accents ni espaces (sert pour l'adresse /projets/mon-projet-video)
    title: "Bref je m'appelle Marine Sarlat",             // ← titre affiché
    category: "Audiovisuel",                  // ← catégorie : crée le filtre automatiquement
    year: "2026",                             // ← année
    image: "/projets/Bref.png",   // ← IMAGE de la carte (voir étape 2)
    fit: "cover",                             // "cover" = image remplit la carte, "contain" = image entière visible
    summary: "Création d'un CV vidéo pour présenter mes projets", // ←
    tags: ["Audiovisuel", "Montage", "Vidéo"],        // ← petits mots-clés
    role: "Écriture, réalisation, figuration, montage",             // ← ton rôle (page projet)
    tools: "DaVinci Resolve",                    // ← tes outils (page projet)
    intro: [
      "Création d'un CV vidéo permettant de présenter mes projets",   // ← 
      "En 75 seconds, il a fallu que je puisse être accrocheuse et percutante, tout en expliquant mes projets avec précision.", // ←
    ],
    gallery: [
      // 👇 TA VIDÉO YOUTUBE : colle simplement le lien de la vidéo
      { embed: "https://youtu.be/u72eKBB0Z20", caption: "Bref", wide: true },

      // Tu peux ajouter d'autres vidéos ou des images à la suite :
      // { embed: "https://youtu.be/YYYYYYYYYYY", caption: "Deuxième vidéo", wide: true },
      // { src: "/projets/autre-image.jpg", caption: "Une image du projet", wide: true },
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
      "Affiche commerciale pour les commerçants de Vias, pour promouvoir le parc d'attractionsFabrikus World.",
    tags: ["Direction artistique", "Illustration", "Photoshop", "InDesign"],
    role: "Direction artistique, Illustration, Photoshop, InDesign",
    tools: "Illustrator, InDesign, Photoshop",
    intro: [
      "Affiche commerciale pour les commerçants de Vias, pour promouvoir le parc d'attractions Fabrikus World.",
      "En suivant la direction artistique du parc, j'ai gardé les éléments indispensables demandé par mon entreprise en les intégrant dans un visuel festif et coloré, avec des éléments de Noël et des personnages du parc.",
    ],
    gallery: [
      { src: "/projets/afficheFW.png", caption: "Affiche commerciale Fabrikus World", wide: true },
    ],
  },
  {
    slug: "maquette-site-cabinet-architecture",
    title: "LGS - Maquette du site d'un cabinet d'architecture",
    category: "UX/UI",
    year: "2026",
    image: "/projets/wireframe-cover.jpg",
    fit: "cover",
    summary:
      "Wireframes de la page d'accueil et de la navigation en panneau pour un cabinet d'architecture.",
    tags: ["Wireframe", "Architecture de l'information", "UX"],
    role: "UX design, wireframes, maquette, prototypage",
    tools: "Figma",
    intro: [
      "Maquette fonctionnelle du site d'un cabinet d'architecture : présentation des associés, projets récents, témoignages, distinction et inscription à la newsletter.",
      "Les courbes en arrière-plan guident le regard le long de la page, et la navigation en panneau garde l'accès aux grandes expertises du cabinet toujours simple.",
    ],
    gallery: [{ src: "/projets/wireframe-accueil.jpg", caption: "Page d'accueil et navigation en panneau", pad: true }],
  },
];

export const categories = ["Tout", ...Array.from(new Set(projects.map((p) => p.category)))];
