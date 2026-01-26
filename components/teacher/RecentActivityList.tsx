import { TeacherStats } from "@/lib/teacher-types";
import { Calendar, Award } from "lucide-react";

interface RecentActivityListProps {
  activities: TeacherStats["recentActivity"];
}

export default function RecentActivityList({
  activities,
}: RecentActivityListProps) {
  const getScoreColor = (score: number) => {
    if (score >= 16) return "text-green-500 bg-green-500/10 border-green-500/30";
    if (score >= 12) return "text-amber-500 bg-amber-500/10 border-amber-500/30";
    return "text-red-500 bg-red-500/10 border-red-500/30";
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
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
            className={`px-4 py-2 rounded-lg border font-bold ${getScoreColor(
              activity.score
            )}`}
          >
            {activity.score}/20
          </div>
        </div>
      ))}
    </div>
  );
}
