"use client";

import { Subject, Level } from "@/lib/types";

interface FiltersProps {
  selectedSubject: Subject | "all";
  selectedLevel: Level | "all";
  onSubjectChange: (subject: Subject | "all") => void;
  onLevelChange: (level: Level | "all") => void;
}

export default function Filters({
  selectedSubject,
  selectedLevel,
  onSubjectChange,
  onLevelChange,
}: FiltersProps) {
  const subjects: Array<Subject | "all"> = [
    "all",
    "Histoire",
    "Sciences",
    "Mathématiques",
  ];
  const levels: Array<Level | "all"> = [
    "all",
    "3ème",
    "Seconde",
    "Première",
    "Terminale",
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 mb-8">
      {/* Subject Filter */}
      <div className="flex-1">
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Matière
        </label>
        <div className="flex flex-wrap gap-2">
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => onSubjectChange(subject)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedSubject === subject
                  ? "bg-gradient-primary text-white shadow-glow"
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              }`}
            >
              {subject === "all" ? "Toutes" : subject}
            </button>
          ))}
        </div>
      </div>

      {/* Level Filter */}
      <div className="flex-1">
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Niveau
        </label>
        <div className="flex flex-wrap gap-2">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => onLevelChange(level)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedLevel === level
                  ? "bg-secondary text-white shadow-glow-purple"
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              }`}
            >
              {level === "all" ? "Tous" : level}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
