import { CompletedExperience, countEarnedBadges } from "@/lib/mock-stats";
import Badge from "@/components/ui/Badge";
import { Calendar, Clock, RotateCcw, Search, Lightbulb, Star, Trophy } from "lucide-react";
import { BADGE_CONFIG, BadgeType } from "@/lib/types";

interface CompletedExperienceRowProps {
  experience: CompletedExperience;
}

// Icônes pour chaque type de badge
const BadgeIcon = ({ type, earned }: { type: BadgeType; earned: boolean }) => {
  const baseClass = `w-6 h-6 ${earned ? "" : "opacity-30"}`;
  const colorClass = earned ? getBadgeColor(type) : "text-neutral-400";

  switch (type) {
    case "exploration":
      return <Search className={`${baseClass} ${colorClass}`} />;
    case "discovery":
      return <Lightbulb className={`${baseClass} ${colorClass}`} />;
    case "mastery":
      return <Star className={`${baseClass} ${colorClass}`} />;
    case "excellence":
      return <Trophy className={`${baseClass} ${colorClass}`} />;
  }
};

function getBadgeColor(type: BadgeType): string {
  switch (type) {
    case "exploration":
      return "text-blue-500";
    case "discovery":
      return "text-amber-500";
    case "mastery":
      return "text-purple-500";
    case "excellence":
      return "text-green-500";
  }
}

export default function CompletedExperienceRow({
  experience,
}: CompletedExperienceRowProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  const earnedCount = countEarnedBadges(experience.badges);

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

        {/* Badges de progression */}
        <div className="flex items-center gap-1 px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
          {experience.badges.map((badge) => (
            <div
              key={badge.type}
              className="relative group"
              title={`${BADGE_CONFIG[badge.type].label}: ${BADGE_CONFIG[badge.type].description}`}
            >
              <BadgeIcon type={badge.type} earned={badge.earned} />
            </div>
          ))}
          <span className="ml-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {earnedCount}/4
          </span>
        </div>
      </div>
    </div>
  );
}
