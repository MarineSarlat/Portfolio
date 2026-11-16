// ✏️ Toutes les infos de la page Distinctions sont ici : modifie, ajoute ou supprime des lignes.
// Les textes entre [crochets] sont des exemples à remplacer.

// Les 4 chiffres clés en haut de page
export const stats = [
  { value: "6", label: "titres de championne de France" },
  { value: "3", label: "médailles internationales" },
  { value: "17 h", label: "d'entraînement par semaine" },
  { value: "6 ans", label: "de chorégraphie en association" },
];

// Palmarès sportif. tone : gold | silver | bronze | rose | lilac
export const sport = {
  title: "Gymnastique aérobic",
  place: "Club formateur de Toulouse",
  period: "2017 – 2020",
  text: "Cinq années de sport de haut niveau, jusqu'à 17 heures d'entraînement par semaine. Une discipline à la croisée du sport, de la danse et de la scène, qui a forgé ma rigueur et mon sens du spectacle.",
  medals: [
    { count: 2, label: "Médailles d'or", detail: "Compétition internationale", tone: "gold" },
    { count: 1, label: "Médaille d'argent", detail: "Compétition internationale", tone: "silver" },
    { count: 6, label: "Titres de championne de France", detail: "", tone: "rose" },
    { count: 5, label: "Titres de vice-championne de France", detail: "", tone: "lilac" },
    { count: 2, label: "Médailles de bronze", detail: "", tone: "bronze" },
  ],
};

// Expérience sur scène (comédie musicale, chorégraphie…)
export const stage = [
  {
    year: "Depuis 6 ans",
    title: "Chorégraphe",
    place: "C Comme Comédie, Vendargues",
    text: "Création des chorégraphies de comédie musicale pour l'association : conception, transmission aux artistes et mise en scène des tableaux dansés.",
  },
  {
    year: "[Année]",
    title: "[Titre du spectacle]",
    place: "[Ton rôle · troupe ou lieu]",
    text: "[Une phrase sur ce spectacle : ton rôle, le public, ce que tu en as retiré.]",
  },
  {
    year: "[Année]",
    title: "[Titre du spectacle]",
    place: "[Ton rôle · troupe ou lieu]",
    text: "[Une phrase sur ce spectacle.]",
  },
];

// Distinctions liées à la création / aux études
export const creations = [
  {
    year: "2026",
    title: "Prix d'excellence",
    place: "IUT de Béziers · BUT MMI",
    text: "Prix d'excellence remis par l'IUT de Béziers dans le cadre du BUT MMI.",
  },
  {
    year: "2025",
    title: "Trophée de bronze",
    place: "Concours vidéo « Je filme ma formation »",
    text: "Vidéo promotionnelle de 3 minutes de la formation BUT MMI de l'IUT de Béziers, réalisée en équipe.",
  },
];