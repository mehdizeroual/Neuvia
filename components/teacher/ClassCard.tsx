import { ClassGroup } from "@/lib/teacher-types";
import Card from "@/components/ui/Card";
import { Users, TrendingUp, ChevronRight } from "lucide-react";
import Link from "next/link";

interface ClassCardProps {
  classGroup: ClassGroup;
}

export default function ClassCard({ classGroup }: ClassCardProps) {
  const averageScore =
    classGroup.students.reduce((sum, s) => sum + s.averageScore, 0) /
    classGroup.students.length;

  const getScoreColor = (score: number) => {
    if (score >= 14) return "text-green-500";
    if (score >= 10) return "text-amber-500";
    return "text-red-500";
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
              <TrendingUp size={18} />
              <span className="text-sm">Moyenne</span>
            </div>
            <span
              className={`text-xl font-bold ${getScoreColor(averageScore)}`}
            >
              {averageScore.toFixed(1)}/20
            </span>
          </div>

          <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${
                averageScore >= 14
                  ? "bg-green-500"
                  : averageScore >= 10
                  ? "bg-amber-500"
                  : "bg-red-500"
              }`}
              style={{ width: `${(averageScore / 20) * 100}%` }}
            />
          </div>
        </div>
      </Card>
    </Link>
  );
}
