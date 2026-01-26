import { CompletedExperience } from "@/lib/mock-stats";
import Badge from "@/components/ui/Badge";
import { Calendar, Clock, RotateCcw } from "lucide-react";

interface CompletedExperienceRowProps {
  experience: CompletedExperience;
}

export default function CompletedExperienceRow({
  experience,
}: CompletedExperienceRowProps) {
  const getScoreColor = (score: number) => {
    if (score >= 16) return "text-green-500";
    if (score >= 12) return "text-amber-500";
    return "text-red-500";
  };

  const getScoreBg = (score: number) => {
    if (score >= 16) return "bg-green-500/10 border-green-500/30";
    if (score >= 12) return "bg-amber-500/10 border-amber-500/30";
    return "bg-red-500/10 border-red-500/30";
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-primary dark:hover:border-primary transition-all duration-200">
      <div className="flex-1">
        <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
          {experience.experienceTitle}
        </h4>
        <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            {formatDate(experience.completedAt)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            {experience.duration} min
          </span>
          {experience.attempts > 1 && (
            <span className="inline-flex items-center gap-1">
              <RotateCcw size={14} />
              {experience.attempts} essais
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Badge variant="default">{experience.level}</Badge>
        <div
          className={`px-4 py-2 rounded-lg border font-bold text-lg ${getScoreBg(
            experience.score
          )} ${getScoreColor(experience.score)}`}
        >
          {experience.score}/20
        </div>
      </div>
    </div>
  );
}
