"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { verifiedExperiences, communityExperiences } from "@/lib/mock-data";
import { Subject, Level, Experience } from "@/lib/types";
import Tabs from "@/components/ui/Tabs";
import Filters from "@/components/library/Filters";
import ExperienceCard from "@/components/library/ExperienceCard";
import Dashboard from "@/components/library/Dashboard";
import TeacherDashboard from "@/components/teacher/TeacherDashboard";
import { Library as LibraryIcon, Sparkles } from "lucide-react";

export default function LibraryPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  const [selectedSubject, setSelectedSubject] = useState<Subject | "all">("all");
  const [selectedLevel, setSelectedLevel] = useState<Level | "all">("all");

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  const filterExperiences = (experiences: Experience[]) => {
    return experiences.filter((exp) => {
      const matchesSubject =
        selectedSubject === "all" || exp.subject === selectedSubject;
      const matchesLevel =
        selectedLevel === "all" || exp.level === selectedLevel;
      return matchesSubject && matchesLevel;
    });
  };

  const filteredVerified = filterExperiences(verifiedExperiences);
  const filteredCommunity = filterExperiences(communityExperiences);

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="text-primary mx-auto mb-4 animate-pulse" size={48} />
          <p className="text-neutral-600 dark:text-neutral-400 dark:text-neutral-500">Chargement...</p>
        </div>
      </div>
    );
  }

  // If user is a teacher, show the teacher dashboard
  if (user.role === "teacher") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary/5 dark:from-neutral-900 dark:to-primary/10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <LibraryIcon className="text-primary" size={40} />
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
                Espace <span className="text-gradient">Professeur</span>
              </h1>
            </div>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 dark:text-neutral-500">
              Gérez vos classes et suivez la progression de vos élèves
            </p>
          </div>

          {/* Teacher Dashboard */}
          <TeacherDashboard />
        </div>
      </div>
    );
  }

  // Student tabs
  const tabs = [
    {
      id: "dashboard",
      label: "Mon Dashboard",
      content: <Dashboard />,
    },
    {
      id: "verified",
      label: "Expériences vérifiées",
      content: (
        <div>
          <Filters
            selectedSubject={selectedSubject}
            selectedLevel={selectedLevel}
            onSubjectChange={setSelectedSubject}
            onLevelChange={setSelectedLevel}
          />

          {filteredVerified.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-500 dark:text-neutral-400 dark:text-neutral-500">
                Aucune expérience ne correspond à vos filtres.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVerified.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          )}

          <div className="mt-6 text-sm text-neutral-500 dark:text-neutral-400 dark:text-neutral-500 text-center">
            {filteredVerified.length} expérience
            {filteredVerified.length > 1 ? "s" : ""} trouvée
            {filteredVerified.length > 1 ? "s" : ""}
          </div>
        </div>
      ),
    },
    {
      id: "community",
      label: "Expériences de la communauté",
      content: (
        <div>
          <Filters
            selectedSubject={selectedSubject}
            selectedLevel={selectedLevel}
            onSubjectChange={setSelectedSubject}
            onLevelChange={setSelectedLevel}
          />

          {filteredCommunity.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-neutral-500 dark:text-neutral-400 dark:text-neutral-500">
                Aucune expérience ne correspond à vos filtres.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCommunity.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          )}

          <div className="mt-6 text-sm text-neutral-500 dark:text-neutral-400 dark:text-neutral-500 text-center">
            {filteredCommunity.length} expérience
            {filteredCommunity.length > 1 ? "s" : ""} trouvée
            {filteredCommunity.length > 1 ? "s" : ""}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary/5 dark:from-neutral-900 dark:to-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <LibraryIcon className="text-primary" size={40} />
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
              Ma <span className="text-gradient">Bibliothèque</span>
            </h1>
          </div>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 dark:text-neutral-500">
            Explorez et lancez vos expériences éducatives immersives
          </p>
        </div>

        {/* Tabs with content */}
        <Tabs tabs={tabs} defaultTab="dashboard" />
      </div>
    </div>
  );
}
