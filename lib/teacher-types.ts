export type ClassLevel = "3ème" | "Seconde" | "Première" | "Terminale";
export type ClassSection = "A" | "B" | "C" | "D";

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  class: string; // Ex: "1ère A"
  averageScore: number;
  completedExperiences: number;
  lastActivity: Date;
}

export interface ClassGroup {
  id: string;
  name: string; // Ex: "1ère A"
  level: ClassLevel;
  section: ClassSection;
  students: Student[];
}

export interface TeacherStats {
  totalStudents: number;
  totalClasses: number;
  averageClassScore: number;
  mostActiveClass: string;
  recentActivity: {
    studentName: string;
    experienceTitle: string;
    score: number;
    date: Date;
  }[];
}
