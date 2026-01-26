import { TeacherStats } from "@/lib/teacher-types";
import { Calendar, Search, Lightbulb, Star, Trophy } from "lucide-react";
import { BadgeType } from "@/lib/types";

interface RecentActivityListProps {
  activities: TeacherStats["recentActivity"];
}

// Composant pour afficher les badges
const BadgeIcons = ({ earned, total }: { earned: number; total: number }) => {
  const badgeTypes: BadgeType[] = ["exploration", "discovery", "mastery", "excellence"];

  const getIcon = (type: BadgeType, isEarned: boolean) => {
    const baseClass = `w-5 h-5 ${isEarned ? "" : "opacity-30"}`;
    const colorClass = isEarned ? getBadgeColor(type) : "text-neutral-400";

    switch (type) {
      case "exploration":
        return <Search key={type} className={`${baseClass} ${colorClass}`} />;
      case "discovery":
        return <Lightbulb key={type} className={`${baseClass} ${colorClass}`} />;
      case "mastery":
        return <Star key={type} className={`${baseClass} ${colorClass}`} />;
      case "excellence":
        return <Trophy key={type} className={`${baseClass} ${colorClass}`} />;
    }
  };

  return (
    <div className="flex items-center gap-1">
      {badgeTypes.map((type, index) => getIcon(type, index < earned))}
    </div>
  );
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

export default function RecentActivityList({
  activities,
}: RecentActivityListProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const getBadgesBgColor = (earned: number, total: number) => {
    const percentage = (earned / total) * 100;
    if (percentage === 100) return "bg-green-500/10 border-green-500/30";
    if (percentage >= 75) return "bg-blue-500/10 border-blue-500/30";
    if (percentage >= 50) return "bg-amber-500/10 border-amber-500/30";
    return "bg-neutral-500/10 border-neutral-500/30";
  };

  return (
    <div className="space-y-3">
      {activities.map((activity, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800"
        >
          <div className="flex-1">
            <p className="font-semibold text-neutral-900 dark:text-neutral-100">
              {activity.studentName}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {activity.experienceTitle}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1 flex items-center gap-1">
              <Calendar size={12} />
              {formatDate(activity.date)}
            </p>
          </div>
          <div
            className={`px-3 py-2 rounded-lg border ${getBadgesBgColor(
              activity.badgesEarned,
              activity.totalBadges
            )}`}
          >
            <BadgeIcons earned={activity.badgesEarned} total={activity.totalBadges} />
            <p className="text-xs text-center mt-1 text-neutral-600 dark:text-neutral-400">
              {activity.badgesEarned}/{activity.totalBadges}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
