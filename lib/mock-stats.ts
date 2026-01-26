export interface CompletedExperience {
  id: string;
  experienceTitle: string;
  subject: string;
  level: string;
  completedAt: Date;
  score: number; // Note sur 20
  duration: number; // Durée en minutes
  attempts: number;
}

export interface UserStats {
  totalExperiences: number;
  averageScore: number;
  totalTimeSpent: number; // En minutes
  bestSubject: string;
  currentStreak: number; // Jours consécutifs
  completedExperiences: CompletedExperience[];
}

export const mockUserStats: UserStats = {
  totalExperiences: 12,
  averageScore: 15.8,
  totalTimeSpent: 420, // 7 heures
  bestSubject: "Histoire",
  currentStreak: 5,
  completedExperiences: [
    {
      id: "v1",
      experienceTitle: "La Révolution française en immersion",
      subject: "Histoire",
      level: "3ème",
      completedAt: new Date("2025-12-28"),
      score: 18,
      duration: 45,
      attempts: 1,
    },
    {
      id: "v2",
      experienceTitle: "Le système solaire en 3D",
      subject: "Sciences",
      level: "Seconde",
      completedAt: new Date("2025-12-27"),
      score: 16,
      duration: 35,
      attempts: 2,
    },
    {
      id: "v3",
      experienceTitle: "Les fonctions mathématiques interactives",
      subject: "Mathématiques",
      level: "Seconde",
      completedAt: new Date("2025-12-26"),
      score: 14,
      duration: 40,
      attempts: 1,
    },
    {
      id: "v4",
      experienceTitle: "La Seconde Guerre mondiale : témoignages",
      subject: "Histoire",
      level: "Terminale",
      completedAt: new Date("2025-12-25"),
      score: 17,
      duration: 50,
      attempts: 1,
    },
    {
      id: "v5",
      experienceTitle: "La chimie des réactions",
      subject: "Sciences",
      level: "Première",
      completedAt: new Date("2025-12-24"),
      score: 15,
      duration: 38,
      attempts: 2,
    },
    {
      id: "v6",
      experienceTitle: "La géométrie dans l'espace",
      subject: "Mathématiques",
      level: "3ème",
      completedAt: new Date("2025-12-23"),
      score: 13,
      duration: 30,
      attempts: 3,
    },
    {
      id: "v7",
      experienceTitle: "Les grandes découvertes",
      subject: "Histoire",
      level: "Seconde",
      completedAt: new Date("2025-12-22"),
      score: 19,
      duration: 42,
      attempts: 1,
    },
    {
      id: "c1",
      experienceTitle: "Découverte de l'Égypte antique",
      subject: "Histoire",
      level: "3ème",
      completedAt: new Date("2025-12-21"),
      score: 16,
      duration: 35,
      attempts: 1,
    },
    {
      id: "c2",
      experienceTitle: "Les volcans actifs du monde",
      subject: "Sciences",
      level: "Seconde",
      completedAt: new Date("2025-12-20"),
      score: 15,
      duration: 28,
      attempts: 2,
    },
    {
      id: "v8",
      experienceTitle: "L'ADN et la génétique",
      subject: "Sciences",
      level: "Terminale",
      completedAt: new Date("2025-12-19"),
      score: 17,
      duration: 48,
      attempts: 1,
    },
    {
      id: "c3",
      experienceTitle: "Théorème de Pythagore en action",
      subject: "Mathématiques",
      level: "3ème",
      completedAt: new Date("2025-12-18"),
      score: 14,
      duration: 32,
      attempts: 2,
    },
    {
      id: "c4",
      experienceTitle: "La Renaissance italienne",
      subject: "Histoire",
      level: "Seconde",
      completedAt: new Date("2025-12-17"),
      score: 18,
      duration: 44,
      attempts: 1,
    },
  ],
};
