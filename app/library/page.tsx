"use client";

import { useAuth } from "@/lib/auth-context";
import Dashboard from "@/components/library/Dashboard";
import TeacherDashboard from "@/components/teacher/TeacherDashboard";
import { Library as LibraryIcon } from "lucide-react";

export default function LibraryPage() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  const isTeacher = user.role === "teacher";

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary/5 dark:from-neutral-900 dark:to-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <LibraryIcon className="text-primary" size={40} />
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
              {isTeacher ? (
                <>Espace <span className="text-gradient">Professeur</span></>
              ) : (
                <>Ma <span className="text-gradient">Bibliothèque</span></>
              )}
            </h1>
          </div>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            {isTeacher
              ? "Gérez vos classes et suivez la progression de vos élèves"
              : "Explorez et lancez vos expériences éducatives immersives"}
          </p>
        </div>

        {/* Dashboard */}
        {isTeacher ? <TeacherDashboard /> : <Dashboard />}
      </div>
    </div>
  );
}
