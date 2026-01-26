import { Experience, ExperienceStats } from "./types";

// Vidéo placeholder pour la démo
const PLACEHOLDER_VIDEO = "https://www.w3schools.com/html/mov_bbb.mp4";

export const verifiedExperiences: Experience[] = [
  {
    id: "v1",
    title: "La Révolution française en immersion",
    description: "Plongez au cœur de la Révolution française et vivez les événements majeurs qui ont façonné notre république.",
    longDescription: "Cette expérience immersive vous transporte en 1789, au cœur des événements qui ont bouleversé la France. Vous vivrez la prise de la Bastille, les débats de l'Assemblée nationale, et comprendrez les enjeux sociaux et politiques de cette période charnière. L'IA adapte le parcours à votre niveau et répond à vos questions en temps réel.",
    subject: "Histoire",
    level: "3ème",
    verified: true,
    image: "/images/revolution.jpg",
    duration: 45,
    learningObjectives: [
      "Comprendre les causes de la Révolution française",
      "Identifier les acteurs clés de la période",
      "Analyser l'impact sur la société française moderne"
    ],
    videoUrl: PLACEHOLDER_VIDEO
  },
  {
    id: "v2",
    title: "Le système solaire en 3D",
    description: "Explorez les planètes, leurs satellites et comprenez les phénomènes astronomiques dans un environnement interactif.",
    longDescription: "Embarquez pour un voyage extraordinaire à travers notre système solaire. Visitez chaque planète, observez leurs caractéristiques uniques, et comprenez les lois qui régissent le mouvement des corps célestes. Cette expérience vous permet de manipuler le temps et l'espace pour observer des phénomènes comme les éclipses ou les saisons.",
    subject: "Sciences",
    level: "Seconde",
    verified: true,
    image: "/images/solar-system.jpg",
    duration: 50,
    learningObjectives: [
      "Connaître les caractéristiques des planètes du système solaire",
      "Comprendre les lois de Kepler sur le mouvement des planètes",
      "Expliquer les phénomènes astronomiques courants"
    ],
    videoUrl: PLACEHOLDER_VIDEO
  },
  {
    id: "v3",
    title: "Les fonctions mathématiques interactives",
    description: "Manipulez des fonctions en temps réel et visualisez leurs transformations géométriques.",
    longDescription: "Découvrez le monde fascinant des fonctions mathématiques de manière intuitive. Modifiez les paramètres d'une fonction et observez instantanément son graphique se transformer. Comprenez visuellement les notions de dérivée, de continuité et de limites grâce à des animations dynamiques.",
    subject: "Mathématiques",
    level: "Seconde",
    verified: true,
    image: "/images/functions.jpg",
    duration: 35,
    learningObjectives: [
      "Maîtriser les transformations de fonctions (translation, symétrie)",
      "Comprendre graphiquement la notion de dérivée",
      "Analyser le comportement asymptotique des fonctions"
    ],
    videoUrl: PLACEHOLDER_VIDEO
  },
  {
    id: "v4",
    title: "La Seconde Guerre mondiale : témoignages",
    description: "Découvrez la Seconde Guerre mondiale à travers des témoignages reconstitués et des archives historiques.",
    longDescription: "Une expérience poignante qui vous plonge dans le quotidien des civils et des soldats pendant la Seconde Guerre mondiale. À travers des témoignages reconstitués par l'IA et des archives historiques, comprenez les enjeux du conflit et le courage de ceux qui l'ont vécu.",
    subject: "Histoire",
    level: "Terminale",
    verified: true,
    image: "/images/ww2.jpg",
    duration: 60,
    learningObjectives: [
      "Comprendre les causes et le déroulement du conflit mondial",
      "Analyser l'impact sur les populations civiles",
      "Étudier la mémoire et les leçons de cette période"
    ],
    videoUrl: PLACEHOLDER_VIDEO
  },
  {
    id: "v5",
    title: "La chimie des réactions",
    description: "Expérimentez les réactions chimiques dans un laboratoire virtuel sécurisé et éducatif.",
    longDescription: "Entrez dans un laboratoire de chimie virtuel où tout est possible sans aucun danger. Réalisez des expériences spectaculaires, observez les réactions à l'échelle moléculaire, et comprenez les principes fondamentaux de la chimie. L'IA vous guide et répond à toutes vos questions.",
    subject: "Sciences",
    level: "Première",
    verified: true,
    image: "/images/chemistry.jpg",
    duration: 40,
    learningObjectives: [
      "Comprendre les mécanismes des réactions chimiques",
      "Maîtriser l'équilibrage des équations chimiques",
      "Appliquer les règles de sécurité en laboratoire"
    ],
    videoUrl: PLACEHOLDER_VIDEO
  },
  {
    id: "v6",
    title: "La géométrie dans l'espace",
    description: "Visualisez et manipulez des solides en 3D pour comprendre les propriétés géométriques.",
    longDescription: "Explorez la géométrie dans l'espace de manière intuitive. Manipulez des solides en 3D, découpez-les, dépliez-les et découvrez leurs propriétés. Cette expérience rend les concepts abstraits tangibles et facilite la compréhension des volumes et des aires.",
    subject: "Mathématiques",
    level: "3ème",
    verified: true,
    image: "/images/geometry.jpg",
    duration: 30,
    learningObjectives: [
      "Reconnaître et nommer les solides usuels",
      "Calculer les volumes et les aires des solides",
      "Représenter des solides en perspective"
    ],
    videoUrl: PLACEHOLDER_VIDEO
  },
  {
    id: "v7",
    title: "Les grandes découvertes",
    description: "Suivez les explorateurs du XVe siècle et comprenez l'impact des grandes découvertes sur le monde.",
    longDescription: "Embarquez aux côtés de Christophe Colomb, Vasco de Gama et Magellan pour revivre les grandes découvertes. Naviguez sur les océans, découvrez de nouvelles terres et comprenez comment ces voyages ont transformé le monde et ouvert l'ère de la mondialisation.",
    subject: "Histoire",
    level: "Seconde",
    verified: true,
    image: "/images/discoveries.jpg",
    duration: 55,
    learningObjectives: [
      "Situer les grandes découvertes dans leur contexte historique",
      "Comprendre les motivations des explorateurs",
      "Analyser les conséquences sur les civilisations"
    ],
    videoUrl: PLACEHOLDER_VIDEO
  },
  {
    id: "v8",
    title: "L'ADN et la génétique",
    description: "Plongez au cœur de la cellule et découvrez les mécanismes de l'hérédité génétique.",
    longDescription: "Réduisez-vous à l'échelle moléculaire et explorez l'intérieur d'une cellule. Observez la structure de l'ADN, suivez le processus de réplication et comprenez comment l'information génétique est transmise de génération en génération.",
    subject: "Sciences",
    level: "Terminale",
    verified: true,
    image: "/images/dna.jpg",
    duration: 45,
    learningObjectives: [
      "Décrire la structure de l'ADN",
      "Expliquer les mécanismes de réplication et transcription",
      "Comprendre les bases de l'hérédité"
    ],
    videoUrl: PLACEHOLDER_VIDEO
  }
];

export const communityExperiences: Experience[] = [
  {
    id: "c1",
    title: "Découverte de l'Égypte antique",
    description: "Explorez les pyramides, les hiéroglyphes et la vie quotidienne dans l'Égypte des pharaons.",
    longDescription: "Voyagez dans le temps jusqu'à l'Égypte des pharaons. Explorez l'intérieur des pyramides, déchiffrez les hiéroglyphes et découvrez les mystères de cette civilisation fascinante. Une aventure éducative créée avec passion par un professeur d'histoire.",
    subject: "Histoire",
    level: "3ème",
    verified: false,
    author: "Prof. Martin",
    views: 1245,
    likes: 187,
    image: "/images/egypt.jpg",
    duration: 40,
    learningObjectives: [
      "Découvrir la civilisation égyptienne antique",
      "Comprendre le système d'écriture hiéroglyphique",
      "Analyser l'organisation sociale de l'Égypte ancienne"
    ],
    videoUrl: PLACEHOLDER_VIDEO
  },
  {
    id: "c2",
    title: "Les volcans actifs du monde",
    description: "Découvrez les volcans les plus impressionnants et comprenez les phénomènes volcaniques.",
    longDescription: "Approchez-vous au plus près des volcans les plus actifs de la planète en toute sécurité. Observez les éruptions, explorez les cratères et comprenez les forces géologiques qui façonnent notre Terre. Une expérience spectaculaire et éducative.",
    subject: "Sciences",
    level: "Seconde",
    verified: false,
    author: "Marie Dupont",
    views: 892,
    likes: 156,
    image: "/images/volcanoes.jpg",
    duration: 35,
    learningObjectives: [
      "Comprendre le fonctionnement des volcans",
      "Identifier les différents types d'éruptions",
      "Analyser les risques volcaniques"
    ],
    videoUrl: PLACEHOLDER_VIDEO
  },
  {
    id: "c3",
    title: "Théorème de Pythagore en action",
    description: "Applications concrètes du théorème de Pythagore dans des situations réelles.",
    longDescription: "Découvrez comment le théorème de Pythagore s'applique dans la vie quotidienne et dans de nombreux métiers. De l'architecture à la navigation, cette expérience vous montre l'utilité concrète des mathématiques à travers des défis interactifs.",
    subject: "Mathématiques",
    level: "3ème",
    verified: false,
    author: "Jean Lefèvre",
    views: 2134,
    likes: 312,
    image: "/images/pythagore.jpg",
    duration: 25,
    learningObjectives: [
      "Maîtriser le théorème de Pythagore",
      "Appliquer le théorème dans des situations concrètes",
      "Résoudre des problèmes géométriques"
    ],
    videoUrl: PLACEHOLDER_VIDEO
  },
  {
    id: "c4",
    title: "La Renaissance italienne",
    description: "Voyagez dans l'Italie de la Renaissance et découvrez les grands artistes de l'époque.",
    longDescription: "Flânez dans les rues de Florence au XVe siècle et rencontrez les plus grands artistes de la Renaissance. Visitez les ateliers de Léonard de Vinci, admirez les œuvres de Michel-Ange et comprenez ce mouvement artistique révolutionnaire.",
    subject: "Histoire",
    level: "Seconde",
    verified: false,
    author: "Sophie Bernard",
    views: 1567,
    likes: 234,
    image: "/images/renaissance.jpg",
    duration: 50,
    learningObjectives: [
      "Situer la Renaissance dans son contexte historique",
      "Identifier les artistes majeurs et leurs œuvres",
      "Comprendre les innovations artistiques de l'époque"
    ],
    videoUrl: PLACEHOLDER_VIDEO
  },
  {
    id: "c5",
    title: "Les écosystèmes marins",
    description: "Plongez dans les océans et découvrez la biodiversité marine et les chaînes alimentaires.",
    longDescription: "Explorez les profondeurs des océans et découvrez la richesse incroyable de la vie marine. Des récifs coralliens aux abysses, observez les espèces et comprenez les équilibres fragiles des écosystèmes marins menacés par le changement climatique.",
    subject: "Sciences",
    level: "Première",
    verified: false,
    author: "Pierre Rousseau",
    views: 1089,
    likes: 198,
    image: "/images/ocean.jpg",
    duration: 45,
    learningObjectives: [
      "Identifier les différents écosystèmes marins",
      "Comprendre les chaînes alimentaires océaniques",
      "Analyser les menaces sur les océans"
    ],
    videoUrl: PLACEHOLDER_VIDEO
  },
  {
    id: "c6",
    title: "Les probabilités au quotidien",
    description: "Comprenez les probabilités à travers des exemples concrets du quotidien.",
    longDescription: "Les probabilités sont partout dans notre vie ! Cette expérience vous montre comment les utiliser pour prendre de meilleures décisions, comprendre les statistiques dans les médias et même gagner aux jeux (de manière responsable).",
    subject: "Mathématiques",
    level: "Terminale",
    verified: false,
    author: "Claire Moreau",
    views: 743,
    likes: 124,
    image: "/images/probability.jpg",
    duration: 30,
    learningObjectives: [
      "Calculer des probabilités simples et conditionnelles",
      "Interpréter des statistiques",
      "Appliquer les probabilités à des situations réelles"
    ],
    videoUrl: PLACEHOLDER_VIDEO
  },
  {
    id: "c7",
    title: "La guerre froide expliquée",
    description: "Comprenez les enjeux de la guerre froide et son impact sur le monde contemporain.",
    longDescription: "Vivez les tensions de la guerre froide de l'intérieur. Assistez aux moments clés comme la crise des missiles de Cuba, la chute du mur de Berlin, et comprenez comment cette période a façonné le monde dans lequel nous vivons aujourd'hui.",
    subject: "Histoire",
    level: "Terminale",
    verified: false,
    author: "Thomas Petit",
    views: 1876,
    likes: 267,
    image: "/images/cold-war.jpg",
    duration: 55,
    learningObjectives: [
      "Comprendre l'origine et les enjeux de la guerre froide",
      "Analyser les crises majeures de cette période",
      "Évaluer l'héritage de la guerre froide"
    ],
    videoUrl: PLACEHOLDER_VIDEO
  },
  {
    id: "c8",
    title: "L'énergie et ses transformations",
    description: "Découvrez les différentes formes d'énergie et leurs transformations dans notre quotidien.",
    longDescription: "L'énergie est au cœur de notre quotidien. Cette expérience vous fait découvrir ses différentes formes, ses transformations et les enjeux de la transition énergétique. Manipulez des systèmes énergétiques et comprenez les défis de demain.",
    subject: "Sciences",
    level: "3ème",
    verified: false,
    author: "Émilie Dubois",
    views: 934,
    likes: 145,
    image: "/images/energy.jpg",
    duration: 35,
    learningObjectives: [
      "Identifier les différentes formes d'énergie",
      "Comprendre les transformations énergétiques",
      "Analyser les enjeux de la transition énergétique"
    ],
    videoUrl: PLACEHOLDER_VIDEO
  }
];

// Statistiques d'utilisation des expériences
export const experienceStats: Record<string, ExperienceStats> = {
  v1: {
    experienceId: "v1",
    studentsPlayed: 2847,
    classesUsed: 156,
    averageCompletionRate: 87
  },
  v2: {
    experienceId: "v2",
    studentsPlayed: 3215,
    classesUsed: 189,
    averageCompletionRate: 92
  },
  v3: {
    experienceId: "v3",
    studentsPlayed: 1876,
    classesUsed: 98,
    averageCompletionRate: 78
  },
  v4: {
    experienceId: "v4",
    studentsPlayed: 4123,
    classesUsed: 234,
    averageCompletionRate: 95
  },
  v5: {
    experienceId: "v5",
    studentsPlayed: 2156,
    classesUsed: 112,
    averageCompletionRate: 84
  },
  v6: {
    experienceId: "v6",
    studentsPlayed: 1543,
    classesUsed: 87,
    averageCompletionRate: 81
  },
  v7: {
    experienceId: "v7",
    studentsPlayed: 2678,
    classesUsed: 145,
    averageCompletionRate: 89
  },
  v8: {
    experienceId: "v8",
    studentsPlayed: 3456,
    classesUsed: 178,
    averageCompletionRate: 91
  },
  c1: {
    experienceId: "c1",
    studentsPlayed: 987,
    classesUsed: 45,
    averageCompletionRate: 82
  },
  c2: {
    experienceId: "c2",
    studentsPlayed: 654,
    classesUsed: 32,
    averageCompletionRate: 79
  },
  c3: {
    experienceId: "c3",
    studentsPlayed: 1234,
    classesUsed: 67,
    averageCompletionRate: 88
  },
  c4: {
    experienceId: "c4",
    studentsPlayed: 876,
    classesUsed: 41,
    averageCompletionRate: 85
  },
  c5: {
    experienceId: "c5",
    studentsPlayed: 543,
    classesUsed: 28,
    averageCompletionRate: 76
  },
  c6: {
    experienceId: "c6",
    studentsPlayed: 432,
    classesUsed: 23,
    averageCompletionRate: 74
  },
  c7: {
    experienceId: "c7",
    studentsPlayed: 1098,
    classesUsed: 56,
    averageCompletionRate: 90
  },
  c8: {
    experienceId: "c8",
    studentsPlayed: 567,
    classesUsed: 31,
    averageCompletionRate: 77
  }
};
