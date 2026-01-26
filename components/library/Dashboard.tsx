"use client";

import { mockUserStats, countEarnedBadges } from "@/lib/mock-stats";
import StatsCard from "./StatsCard";
import CompletedExperienceRow from "./CompletedExperienceRow";
import {
  BookOpen,
  Trophy,
  Clock,
  Award,
  Flame,
  Search,
  Lightbulb,
  Star,
} from "lucide-react";
import Card from "@/components/ui/Card";
import { BADGE_CONFIG, BadgeType } from "@/lib/types";

export default function Dashboard() {
  const stats = mockUserStats;

  // Calculer les stats de badges par matière
  const subjectStats = stats.completedExperiences.reduce(
    (acc, exp) => {
      if (!acc[exp.subject]) {
        acc[exp.subject] = { count: 0, badgesEarned: 0, totalBadges: 0 };
      }
      acc[exp.subject].count++;
      acc[exp.subject].badgesEarned += countEarnedBadges(exp.badges);
      acc[exp.subject].totalBadges += 4;
      return acc;
    },
    {} as Record<string, { count: number; badgesEarned: number; totalBadges: number }>
  );

  const subjectAverages = Object.entries(subjectStats).map(
    ([subject, data]) => ({
      subject,
      badgesEarned: data.badgesEarned,
      totalBadges: data.totalBadges,
      percentage: Math.round((data.badgesEarned / data.totalBadges) * 100),
      count: data.count,
    })
  );

  // Tri des expériences récentes
  const recentExperiences = [...stats.completedExperiences]
    .sort((a, b) => b.completedAt.getTime() - a.completedAt.getTime())
    .slice(0, 5);

  const badgePercentage = Math.round((stats.totalBadgesEarned / stats.totalBadgesPossible) * 100);

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
            title="Badges obtenus"
            value={`${stats.totalBadgesEarned}/${stats.totalBadgesPossible}`}
            icon={<Trophy size={24} />}
            color="success"
            subtitle={`${badgePercentage}% de réussite`}
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

      {/* Légende des badges */}
      <Card className="bg-neutral-50 dark:bg-neutral-900/50">
        <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          Signification des badges
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(Object.keys(BADGE_CONFIG) as BadgeType[]).map((type) => {
            const config = BADGE_CONFIG[type];
            const IconComponent =
              type === "exploration" ? Search :
              type === "discovery" ? Lightbulb :
              type === "mastery" ? Star : Trophy;
            const colorClass =
              type === "exploration" ? "text-blue-500" :
              type === "discovery" ? "text-amber-500" :
              type === "mastery" ? "text-purple-500" : "text-green-500";

            return (
              <div key={type} className="flex items-center gap-3">
                <IconComponent className={`w-6 h-6 ${colorClass}`} />
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-100 text-sm">
                    {config.label}
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    {config.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Performance par matière */}
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          Progression par matière
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subjectAverages.map(({ subject, badgesEarned, totalBadges, percentage, count }) => {
            const isGood = percentage >= 75;
            const isSatisfactory = percentage >= 50;

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
                        : isSatisfactory
                        ? "text-amber-500"
                        : "text-red-500"
                    }`}
                  >
                    {badgesEarned}/{totalBadges}
                  </span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                    badges
                  </span>
                </div>

                <p className={`text-sm mt-1 ${
                  isGood ? "text-green-500" : isSatisfactory ? "text-amber-500" : "text-neutral-500"
                }`}>
                  {isGood ? "Excellent !" : isSatisfactory ? "Satisfaisant" : "À améliorer"}
                </p>

                {/* Barre de progression */}
                <div className="mt-4 h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      isGood
                        ? "bg-green-500"
                        : isSatisfactory
                        ? "bg-amber-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${percentage}%` }}
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
            Excellent travail !
          </h3>
          <p className="text-neutral-700 dark:text-neutral-300">
            Tu as obtenu <strong>{stats.totalBadgesEarned} badges</strong> sur {stats.totalBadgesPossible} possibles ({badgePercentage}%).
            Continue à explorer et à débloquer de nouveaux badges !
          </p>
        </div>
      </Card>
    </div>
  );
}
