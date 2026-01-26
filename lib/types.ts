export type Subject = "Histoire" | "Sciences" | "Mathématiques";
export type Level = "3ème" | "Seconde" | "Première" | "Terminale";

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
