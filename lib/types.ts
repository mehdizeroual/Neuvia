export type Subject = "Histoire" | "Sciences" | "Mathématiques";
export type Level = "3ème" | "Seconde" | "Première" | "Terminale";

// Système de badges de progression
export type BadgeType = "exploration" | "discovery" | "mastery" | "excellence";

export interface ProgressBadge {
  type: BadgeType;
  label: string;
  icon: string; // Nom de l'icône Lucide
  earned: boolean;
  earnedAt?: Date;
}

// Configuration des badges
export const BADGE_CONFIG: Record<BadgeType, { label: string; icon: string; description: string }> = {
  exploration: { label: "Exploration", icon: "Search", description: "Début de l'expérience" },
  discovery: { label: "Découverte", icon: "Lightbulb", description: "Compréhension des concepts" },
  mastery: { label: "Maîtrise", icon: "Star", description: "Compétences acquises" },
  excellence: { label: "Excellence", icon: "Trophy", description: "Expertise complète" },
};

export interface Experience {
  id: string;
  title: string;
  description: string;
  subject: Subject;
  level: Level;
  verified: boolean;
  author?: string;
  views?: number;
  likes?: number;
  image?: string;
  // Champs étendus pour la page détail
  longDescription?: string;
  duration?: number; // en minutes
  learningObjectives?: string[];
  videoUrl?: string;
}

export interface ExperienceStats {
  experienceId: string;
  studentsPlayed: number;
  classesUsed: number;
  averageCompletionRate: number;
}

export type UserRole = "student" | "teacher";

export interface User {
  email: string;
  name?: string;
  role: UserRole;
}
