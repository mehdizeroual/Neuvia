"use client";

import { mockUserStats } from "@/lib/mock-stats";
import StatsCard from "./StatsCard";
import CompletedExperienceRow from "./CompletedExperienceRow";
import {
  BookOpen,
  TrendingUp,
  Clock,
  Award,
  Flame,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import Card from "@/components/ui/Card";

export default function Dashboard() {
  const stats = mockUserStats;

  // Calculer les stats par matière
  const subjectStats = stats.completedExperiences.reduce(
    (acc, exp) => {
      if (!acc[exp.subject]) {
        acc[exp.subject] = { count: 0, totalScore: 0 };
      }
      acc[exp.subject].count++;
      acc[exp.subject].totalScore += exp.score;
      return acc;
    },
    {} as Record<string, { count: number; totalScore: number }>
  );

  const subjectAverages = Object.entries(subjectStats).map(
    ([subject, data]) => ({
      subject,
      average: (data.totalScore / data.count).toFixed(1),
      count: data.count,
    })
  );

  // Tri des expériences récentes
  const recentExperiences = [...stats.completedExperiences]
    .sort((a, b) => b.completedAt.getTime() - a.completedAt.getTime())
    .slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Stats principales */}
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          Vue d'ensemble
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Expériences réalisées"
            value={stats.totalExperiences}
            icon={<BookOpen size={24} />}
            color="primary"
          />
          <StatsCard
            title="Moyenne générale"
            value={`${stats.averageScore}/20`}
            icon={<TrendingUp size={24} />}
            color="success"
            subtitle="Très bien !"
          />
          <StatsCard
            title="Temps d'apprentissage"
            value={`${Math.floor(stats.totalTimeSpent / 60)}h ${
              stats.totalTimeSpent % 60
            }m`}
            icon={<Clock size={24} />}
            color="secondary"
          />
          <StatsCard
            title="Série en cours"
            value={`${stats.currentStreak} jours`}
            icon={<Flame size={24} />}
            color="warning"
            subtitle="Continue comme ça !"
          />
        </div>
      </div>

      {/* Performance par matière */}
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          Performance par matière
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subjectAverages.map(({ subject, average, count }) => {
            const avgNum = parseFloat(average);
            const isGood = avgNum >= 14;

            return (
              <Card key={subject}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-lg">
                      {subject}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {count} expérience{count > 1 ? "s" : ""}
                    </p>
                  </div>
                  <Award
                    className={isGood ? "text-amber-500" : "text-neutral-400"}
                    size={24}
                  />
                </div>
                <div className="flex items-end gap-2">
                  <span
                    className={`text-3xl font-bold ${
                      isGood
                        ? "text-green-500"
                        : avgNum >= 10
                        ? "text-amber-500"
                        : "text-red-500"
                    }`}
                  >
                    {average}/20
                  </span>
                  <span
                    className={`flex items-center text-sm mb-1 ${
                      isGood ? "text-green-500" : "text-neutral-500"
                    }`}
                  >
                    {isGood ? (
                      <>
                        <ArrowUp size={16} />
                        Excellent
                      </>
                    ) : avgNum >= 10 ? (
                      "Satisfaisant"
                    ) : (
                      <>
                        <ArrowDown size={16} />
                        À améliorer
                      </>
                    )}
                  </span>
                </div>

                {/* Barre de progression */}
                <div className="mt-4 h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      isGood
                        ? "bg-green-500"
                        : avgNum >= 10
                        ? "bg-amber-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${(avgNum / 20) * 100}%` }}
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Expériences récentes */}
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          Expériences récentes
        </h2>
        <div className="space-y-3">
          {recentExperiences.map((exp) => (
            <CompletedExperienceRow key={exp.id} experience={exp} />
          ))}
        </div>
      </div>

      {/* Message d'encouragement */}
      <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 border-primary/20">
        <div className="text-center py-6">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Excellent travail ! 🎉
          </h3>
          <p className="text-neutral-700 dark:text-neutral-300">
            Tu maintiens une moyenne de <strong>{stats.averageScore}/20</strong>{" "}
            sur {stats.totalExperiences} expériences. Continue à explorer et à
            apprendre !
          </p>
        </div>
      </Card>
    </div>
  );
}
