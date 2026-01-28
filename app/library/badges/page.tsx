"use client";

import { mockUserStats, countEarnedBadges } from "@/lib/mock-stats";
import { BADGE_CONFIG, BadgeType } from "@/lib/types";
import { Trophy, Search, Lightbulb, Star, Award } from "lucide-react";
import { motion } from "framer-motion";

const badgeIcons: Record<BadgeType, React.ElementType> = {
  exploration: Search,
  discovery: Lightbulb,
  mastery: Star,
  excellence: Award,
};

const badgeColors: Record<BadgeType, string> = {
  exploration: "from-blue-400 to-blue-600",
  discovery: "from-green-400 to-green-600",
  mastery: "from-yellow-400 to-yellow-600",
  excellence: "from-purple-400 to-purple-600",
};

export default function BadgesPage() {
  const { completedExperiences, totalBadgesEarned, totalBadgesPossible } = mockUserStats;

  // Compter les badges par type
  const badgeCounts: Record<BadgeType, { earned: number; total: number }> = {
    exploration: { earned: 0, total: completedExperiences.length },
    discovery: { earned: 0, total: completedExperiences.length },
    mastery: { earned: 0, total: completedExperiences.length },
    excellence: { earned: 0, total: completedExperiences.length },
  };

  completedExperiences.forEach((exp) => {
    exp.badges.forEach((badge) => {
      if (badge.earned) {
        badgeCounts[badge.type].earned++;
      }
    });
  });

  const badgeTypes: BadgeType[] = ["exploration", "discovery", "mastery", "excellence"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary/5 dark:from-neutral-900 dark:to-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="text-yellow-500" size={36} />
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
              Mes <span className="text-gradient">Badges</span>
            </h1>
          </div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {totalBadgesEarned} badges obtenus sur {totalBadgesPossible} possibles
          </p>
        </div>

        {/* Progress Overview */}
        <div className="mb-12 p-6 rounded-2xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
              Progression globale
            </span>
            <span className="text-2xl font-bold text-gradient">
              {Math.round((totalBadgesEarned / totalBadgesPossible) * 100)}%
            </span>
          </div>
          <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary"
              initial={{ width: 0 }}
              animate={{ width: `${(totalBadgesEarned / totalBadgesPossible) * 100}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Badge Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {badgeTypes.map((type, index) => {
            const Icon = badgeIcons[type];
            const config = BADGE_CONFIG[type];
            const count = badgeCounts[type];
            const percentage = Math.round((count.earned / count.total) * 100);

            return (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${badgeColors[type]} flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                  {config.label}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                  {config.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                    {count.earned}/{count.total}
                  </span>
                  <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    {percentage}%
                  </span>
                </div>
                <div className="mt-2 h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${badgeColors[type]}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Recent Badges */}
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Badges par expérience
          </h2>
          <div className="space-y-4">
            {completedExperiences.map((exp, index) => {
              const earnedCount = countEarnedBadges(exp.badges);
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                      {exp.experienceTitle}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {exp.subject} - {exp.level}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {exp.badges.map((badge) => {
                      const Icon = badgeIcons[badge.type];
                      return (
                        <div
                          key={badge.type}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            badge.earned
                              ? `bg-gradient-to-br ${badgeColors[badge.type]}`
                              : "bg-neutral-200 dark:bg-neutral-700"
                          }`}
                        >
                          <Icon
                            size={20}
                            className={badge.earned ? "text-white" : "text-neutral-400 dark:text-neutral-500"}
                          />
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
