"use client";

import { useState } from "react";
import { verifiedExperiences } from "@/lib/mock-data";
import { Subject, Level, Experience } from "@/lib/types";
import Filters from "@/components/library/Filters";
import ExperienceCard from "@/components/library/ExperienceCard";
import { BadgeCheck } from "lucide-react";

export default function VerifiedExperiencesPage() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | "all">("all");
  const [selectedLevel, setSelectedLevel] = useState<Level | "all">("all");

  const filterExperiences = (experiences: Experience[]) => {
    return experiences.filter((exp) => {
      const matchesSubject =
        selectedSubject === "all" || exp.subject === selectedSubject;
      const matchesLevel =
        selectedLevel === "all" || exp.level === selectedLevel;
      return matchesSubject && matchesLevel;
    });
  };

  const filteredExperiences = filterExperiences(verifiedExperiences);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary/5 dark:from-neutral-900 dark:to-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BadgeCheck className="text-primary" size={36} />
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
              Expériences <span className="text-gradient">vérifiées</span>
            </h1>
          </div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Expériences validées par Neuvia et conformes aux programmes scolaires
          </p>
        </div>

        {/* Filters */}
        <Filters
          selectedSubject={selectedSubject}
          selectedLevel={selectedLevel}
          onSubjectChange={setSelectedSubject}
          onLevelChange={setSelectedLevel}
        />

        {/* Grid */}
        {filteredExperiences.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-neutral-500 dark:text-neutral-400">
              Aucune expérience ne correspond à vos filtres.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        )}

        <div className="mt-6 text-sm text-neutral-500 dark:text-neutral-400 text-center">
          {filteredExperiences.length} expérience
          {filteredExperiences.length > 1 ? "s" : ""} trouvée
          {filteredExperiences.length > 1 ? "s" : ""}
        </div>
      </div>
    </div>
  );
}
