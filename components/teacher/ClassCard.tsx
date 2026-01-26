import { ClassGroup } from "@/lib/teacher-types";
import Card from "@/components/ui/Card";
import { Users, Trophy, ChevronRight } from "lucide-react";
import Link from "next/link";

interface ClassCardProps {
  classGroup: ClassGroup;
}

export default function ClassCard({ classGroup }: ClassCardProps) {
  const totalBadgesEarned = classGroup.students.reduce((sum, s) => sum + s.badgesEarned, 0);
  const totalBadgesPossible = classGroup.students.reduce((sum, s) => sum + s.totalBadges, 0);
  const badgePercentage = totalBadgesPossible > 0
    ? Math.round((totalBadgesEarned / totalBadgesPossible) * 100)
    : 0;

  const getProgressColor = (percentage: number) => {
    if (percentage >= 75) return "text-green-500";
    if (percentage >= 50) return "text-amber-500";
    return "text-red-500";
  };

  const getProgressBg = (percentage: number) => {
    if (percentage >= 75) return "bg-green-500";
    if (percentage >= 50) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <Link href={`/library/class/${classGroup.id}`}>
      <Card hover className="h-full cursor-pointer group">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-primary transition-colors">
              {classGroup.name}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {classGroup.level} - Section {classGroup.section}
            </p>
          </div>
          <ChevronRight
            className="text-neutral-400 group-hover:text-primary transition-colors"
            size={24}
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
              <Users size={18} />
              <span className="text-sm">{classGroup.students.length} élèves</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
              <Trophy size={18} />
              <span className="text-sm">Badges</span>
            </div>
            <span
              className={`text-xl font-bold ${getProgressColor(badgePercentage)}`}
            >
              {badgePercentage}%
            </span>
          </div>

          <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${getProgressBg(badgePercentage)}`}
              style={{ width: `${badgePercentage}%` }}
            />
          </div>

          <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
            {totalBadgesEarned} / {totalBadgesPossible} badges obtenus
          </p>
        </div>
      </Card>
    </Link>
  );
}
