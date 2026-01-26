import { ClassGroup, Student, TeacherStats } from "./teacher-types";

// Prénoms et noms français pour générer des élèves
const firstNames = [
  "Alice", "Thomas", "Emma", "Lucas", "Léa", "Hugo", "Chloé", "Nathan", "Manon", "Antoine",
  "Sarah", "Maxime", "Julie", "Pierre", "Camille", "Louis", "Clara", "Gabriel", "Inès", "Raphaël",
  "Jade", "Arthur", "Louise", "Adam", "Zoé", "Jules", "Lina", "Paul", "Rose", "Ethan",
  "Ambre", "Noah", "Anna", "Théo", "Eva", "Léo", "Margot", "Tom", "Romane", "Mathis",
  "Justine", "Romain", "Océane", "Victor", "Pauline", "Alexandre", "Juliette", "Benjamin", "Anaïs", "Clément",
  "Marie", "Valentin", "Laura", "Quentin", "Charlotte", "Florian", "Mathilde", "Axel", "Mélanie", "Dylan"
];

const lastNames = [
  "Dupont", "Martin", "Bernard", "Petit", "Dubois", "Moreau", "Laurent", "Simon", "Michel", "Lefebvre",
  "Leroy", "Roux", "Garnier", "Faure", "Fournier", "Girard", "Mercier", "Lambert", "Bonnet", "François",
  "Martinez", "Legrand", "Garcia", "David", "Bertrand", "Robert", "Richard", "Durand", "Thomas", "Morel",
  "Petit", "Guerin", "Andre", "Lefevre", "Rousseau", "Blanc", "Vincent", "Muller", "Chevalier", "Henry"
];

// Fonction pour générer un élève
function generateStudent(id: string, className: string): Student {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const averageScore = Math.round((Math.random() * 8 + 10) * 10) / 10; // Entre 10 et 18
  const completedExperiences = Math.floor(Math.random() * 12) + 1;
  const daysAgo = Math.floor(Math.random() * 7);
  const lastActivity = new Date();
  lastActivity.setDate(lastActivity.getDate() - daysAgo);

  return {
    id,
    firstName,
    lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.fr`,
    class: className,
    averageScore,
    completedExperiences,
    lastActivity,
  };
}

// Générer 28 élèves pour Première A
const premiereAStudents: Student[] = Array.from({ length: 28 }, (_, i) =>
  generateStudent(`pa${i + 1}`, "Première A")
);

// Générer 26 élèves pour Première B
const premiereBStudents: Student[] = Array.from({ length: 26 }, (_, i) =>
  generateStudent(`pb${i + 1}`, "Première B")
);

// Générer 27 élèves pour Terminale A
const terminaleAStudents: Student[] = Array.from({ length: 27 }, (_, i) =>
  generateStudent(`ta${i + 1}`, "Terminale A")
);

export const mockStudents: Student[] = [
  ...premiereAStudents,
  ...premiereBStudents,
  ...terminaleAStudents,
];

// Expériences créées par le professeur
export interface TeacherExperience {
  id: string;
  title: string;
  subject: string;
  classLevel: string;
  createdAt: Date;
  usageCount: number;
  averageScore: number;
  status: "active" | "draft" | "archived";
}

export const mockTeacherExperiences: TeacherExperience[] = [
  {
    id: "exp1",
    title: "La Révolution française en immersion",
    subject: "Histoire",
    classLevel: "Première",
    createdAt: new Date("2025-11-15"),
    usageCount: 45,
    averageScore: 16.2,
    status: "active",
  },
  {
    id: "exp2",
    title: "L'ADN et la génétique moléculaire",
    subject: "Sciences",
    classLevel: "Terminale",
    createdAt: new Date("2025-11-20"),
    usageCount: 32,
    averageScore: 15.8,
    status: "active",
  },
  {
    id: "exp3",
    title: "Le système solaire en 3D",
    subject: "Sciences",
    classLevel: "Première",
    createdAt: new Date("2025-12-01"),
    usageCount: 58,
    averageScore: 17.1,
    status: "active",
  },
  {
    id: "exp4",
    title: "Les équations du second degré",
    subject: "Mathématiques",
    classLevel: "Première",
    createdAt: new Date("2025-12-10"),
    usageCount: 41,
    averageScore: 14.5,
    status: "active",
  },
  {
    id: "exp5",
    title: "La Seconde Guerre mondiale",
    subject: "Histoire",
    classLevel: "Terminale",
    createdAt: new Date("2025-12-18"),
    usageCount: 28,
    averageScore: 16.8,
    status: "active",
  },
  {
    id: "exp6",
    title: "Les réactions chimiques",
    subject: "Sciences",
    classLevel: "Première",
    createdAt: new Date("2026-01-05"),
    usageCount: 15,
    averageScore: 15.2,
    status: "active",
  },
  {
    id: "exp7",
    title: "Introduction aux probabilités",
    subject: "Mathématiques",
    classLevel: "Terminale",
    createdAt: new Date("2026-01-15"),
    usageCount: 8,
    averageScore: 0,
    status: "draft",
  },
];

export const mockClasses: ClassGroup[] = [
  {
    id: "c1",
    name: "Première A",
    level: "Première",
    section: "A",
    students: mockStudents.filter((s) => s.class === "Première A"),
  },
  {
    id: "c2",
    name: "Première B",
    level: "Première",
    section: "B",
    students: mockStudents.filter((s) => s.class === "Première B"),
  },
  {
    id: "c3",
    name: "Terminale A",
    level: "Terminale",
    section: "A",
    students: mockStudents.filter((s) => s.class === "Terminale A"),
  },
];

export const mockTeacherStats: TeacherStats = {
  totalStudents: mockStudents.length,
  totalClasses: mockClasses.length,
  averageClassScore: 15.2,
  mostActiveClass: "Première A",
  recentActivity: [
    {
      studentName: "Emma Bernard",
      experienceTitle: "La Révolution française en immersion",
      score: 18,
      date: new Date("2025-12-30"),
    },
    {
      studentName: "Sarah Leroy",
      experienceTitle: "L'ADN et la génétique",
      score: 17,
      date: new Date("2025-12-30"),
    },
    {
      studentName: "Léa Dubois",
      experienceTitle: "Le système solaire en 3D",
      score: 16,
      date: new Date("2025-12-30"),
    },
    {
      studentName: "Chloé Laurent",
      experienceTitle: "La chimie des réactions",
      score: 17,
      date: new Date("2025-12-30"),
    },
    {
      studentName: "Alice Dupont",
      experienceTitle: "Les grandes découvertes",
      score: 19,
      date: new Date("2025-12-29"),
    },
  ],
};
