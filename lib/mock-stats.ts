import { BadgeType, ProgressBadge, BADGE_CONFIG } from "./types";

export interface CompletedExperience {
  id: string;
  experienceTitle: string;
  subject: string;
  level: string;
  completedAt: Date;
  badges: ProgressBadge[]; // Badges de progression
  duration: number; // Durée en minutes
  attempts: number;
}

// Helper pour créer des badges à partir d'un niveau atteint
export function createBadgesFromLevel(level: number): ProgressBadge[] {
  const badgeTypes: BadgeType[] = ["exploration", "discovery", "mastery", "excellence"];
  return badgeTypes.map((type, index) => ({
    type,
    label: BADGE_CONFIG[type].label,
    icon: BADGE_CONFIG[type].icon,
    earned: index < level,
    earnedAt: index < level ? new Date() : undefined,
  }));
}

// Compte les badges obtenus
export function countEarnedBadges(badges: ProgressBadge[]): number {
  return badges.filter(b => b.earned).length;
}

export interface UserStats {
  totalExperiences: number;
  totalBadgesEarned: number;
  totalBadgesPossible: number;
  totalTimeSpent: number; // En minutes
  bestSubject: string;
  currentStreak: number; // Jours consécutifs
  completedExperiences: CompletedExperience[];
}

export const mockUserStats: UserStats = {
  totalExperiences: 12,
  totalBadgesEarned: 42,
  totalBadgesPossible: 48, // 12 expériences x 4 badges
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
      badges: createBadgesFromLevel(4), // Excellence
      duration: 45,
      attempts: 1,
    },
    {
      id: "v2",
      experienceTitle: "Le système solaire en 3D",
      subject: "Sciences",
      level: "Seconde",
      completedAt: new Date("2025-12-27"),
      badges: createBadgesFromLevel(4), // Excellence
      duration: 35,
      attempts: 2,
    },
    {
      id: "v3",
      experienceTitle: "Les fonctions mathématiques interactives",
      subject: "Mathématiques",
      level: "Seconde",
      completedAt: new Date("2025-12-26"),
      badges: createBadgesFromLevel(3), // Maîtrise
      duration: 40,
      attempts: 1,
    },
    {
      id: "v4",
      experienceTitle: "La Seconde Guerre mondiale : témoignages",
      subject: "Histoire",
      level: "Terminale",
      completedAt: new Date("2025-12-25"),
      badges: createBadgesFromLevel(4), // Excellence
      duration: 50,
      attempts: 1,
    },
    {
      id: "v5",
      experienceTitle: "La chimie des réactions",
      subject: "Sciences",
      level: "Première",
      completedAt: new Date("2025-12-24"),
      badges: createBadgesFromLevel(3), // Maîtrise
      duration: 38,
      attempts: 2,
    },
    {
      id: "v6",
      experienceTitle: "La géométrie dans l'espace",
      subject: "Mathématiques",
      level: "3ème",
      completedAt: new Date("2025-12-23"),
      badges: createBadgesFromLevel(2), // Découverte
      duration: 30,
      attempts: 3,
    },
    {
      id: "v7",
      experienceTitle: "Les grandes découvertes",
      subject: "Histoire",
      level: "Seconde",
      completedAt: new Date("2025-12-22"),
      badges: createBadgesFromLevel(4), // Excellence
      duration: 42,
      attempts: 1,
    },
    {
      id: "c1",
      experienceTitle: "Découverte de l'Égypte antique",
      subject: "Histoire",
      level: "3ème",
      completedAt: new Date("2025-12-21"),
      badges: createBadgesFromLevel(4), // Excellence
      duration: 35,
      attempts: 1,
    },
    {
      id: "c2",
      experienceTitle: "Les volcans actifs du monde",
      subject: "Sciences",
      level: "Seconde",
      completedAt: new Date("2025-12-20"),
      badges: createBadgesFromLevel(3), // Maîtrise
      duration: 28,
      attempts: 2,
    },
    {
      id: "v8",
      experienceTitle: "L'ADN et la génétique",
      subject: "Sciences",
      level: "Terminale",
      completedAt: new Date("2025-12-19"),
      badges: createBadgesFromLevel(4), // Excellence
      duration: 48,
      attempts: 1,
    },
    {
      id: "c3",
      experienceTitle: "Théorème de Pythagore en action",
      subject: "Mathématiques",
      level: "3ème",
      completedAt: new Date("2025-12-18"),
      badges: createBadgesFromLevel(3), // Maîtrise
      duration: 32,
      attempts: 2,
    },
    {
      id: "c4",
      experienceTitle: "La Renaissance italienne",
      subject: "Histoire",
      level: "Seconde",
      completedAt: new Date("2025-12-17"),
      badges: createBadgesFromLevel(4), // Excellence
      duration: 44,
      attempts: 1,
    },
  ],
};
