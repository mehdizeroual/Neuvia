"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { mockClasses } from "@/lib/mock-teacher-data";
import { ClassGroup } from "@/lib/teacher-types";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ArrowLeft, Users, Trophy, Mail, Award, Search, Lightbulb, Star } from "lucide-react";

// Composant pour afficher les badges d'un élève
const StudentBadgeProgress = ({ earned, total }: { earned: number; total: number }) => {
  const percentage = total > 0 ? Math.round((earned / total) * 100) : 0;

  const getProgressColor = (pct: number) => {
    if (pct >= 75) return "text-green-500";
    if (pct >= 50) return "text-amber-500";
    return "text-red-500";
  };

  const getProgressBg = (pct: number) => {
    if (pct >= 75) return "bg-green-500/10 border-green-500/30";
    if (pct >= 50) return "bg-amber-500/10 border-amber-500/30";
    return "bg-red-500/10 border-red-500/30";
  };

  return (
    <div className={`px-3 py-1 rounded-lg border font-bold ${getProgressBg(percentage)} ${getProgressColor(percentage)}`}>
      {earned}/{total}
    </div>
  );
};

export default function ClassDetailPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const classId = params.id as string;

  const [classData, setClassData] = useState<ClassGroup | null>(null);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
      return;
    }

    if (user && user.role !== "teacher") {
      router.push("/library");
      return;
    }

    const foundClass = mockClasses.find((c) => c.id === classId);
    if (foundClass) {
      setClassData(foundClass);
    }
  }, [user, isLoading, router, classId]);

  if (isLoading || !user || !classData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-neutral-600 dark:text-neutral-400">Chargement...</p>
      </div>
    );
  }

  const totalBadgesEarned = classData.students.reduce((sum, s) => sum + s.badgesEarned, 0);
  const totalBadgesPossible = classData.students.reduce((sum, s) => sum + s.totalBadges, 0);
  const badgePercentage = totalBadgesPossible > 0
    ? Math.round((totalBadgesEarned / totalBadgesPossible) * 100)
    : 0;

  const totalExperiences = classData.students.reduce(
    (sum, s) => sum + s.completedExperiences,
    0
  );

  const getProgressColor = (pct: number) => {
    if (pct >= 75) return "text-green-500";
    if (pct >= 50) return "text-amber-500";
    return "text-red-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary/5 dark:from-neutral-900 dark:to-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => router.push("/library")}
            className="mb-6"
          >
            <ArrowLeft size={18} className="mr-2" />
            Retour au tableau de bord
          </Button>

          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                Classe <span className="text-gradient">{classData.name}</span>
              </h1>
              <div className="flex items-center gap-3">
                <Badge variant="default">{classData.level}</Badge>
                <Badge variant="default">{classData.section}</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                  Nombre d'élèves
                </p>
                <p className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                  {classData.students.length}
                </p>
              </div>
              <Users className="text-primary" size={32} />
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                  Badges obtenus
                </p>
                <p className={`text-3xl font-bold ${getProgressColor(badgePercentage)}`}>
                  {badgePercentage}%
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  {totalBadgesEarned} / {totalBadgesPossible}
                </p>
              </div>
              <Trophy className="text-secondary" size={32} />
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                  Expériences totales
                </p>
                <p className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                  {totalExperiences}
                </p>
              </div>
              <Award className="text-amber-500" size={32} />
            </div>
          </Card>
        </div>

        {/* Légende des badges */}
        <Card className="mb-8 bg-neutral-50 dark:bg-neutral-900/50">
          <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
            Signification des badges
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <Search className="w-6 h-6 text-blue-500" />
              <div>
                <p className="font-medium text-neutral-900 dark:text-neutral-100 text-sm">Exploration</p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">Début de l'expérience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-amber-500" />
              <div>
                <p className="font-medium text-neutral-900 dark:text-neutral-100 text-sm">Découverte</p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">Compréhension des concepts</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-purple-500" />
              <div>
                <p className="font-medium text-neutral-900 dark:text-neutral-100 text-sm">Maîtrise</p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">Compétences acquises</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-green-500" />
              <div>
                <p className="font-medium text-neutral-900 dark:text-neutral-100 text-sm">Excellence</p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">Expertise complète</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Students Table */}
        <Card>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Liste des élèves
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                    Nom
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                    Email
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                    Expériences
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                    Badges
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                    Dernière activité
                  </th>
                </tr>
              </thead>
              <tbody>
                {classData.students
                  .sort((a, b) => a.lastName.localeCompare(b.lastName))
                  .map((student) => (
                    <tr
                      key={student.id}
                      className="border-b border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="font-medium text-neutral-900 dark:text-neutral-100">
                          {student.firstName} {student.lastName}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 text-sm">
                          <Mail size={14} />
                          {student.email}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-neutral-900 dark:text-neutral-100 font-medium">
                          {student.completedExperiences}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex justify-center">
                          <StudentBadgeProgress
                            earned={student.badgesEarned}
                            total={student.totalBadges}
                          />
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
                        {new Intl.DateTimeFormat("fr-FR", {
                          day: "numeric",
                          month: "short",
                        }).format(student.lastActivity)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {classData.students.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-500 dark:text-neutral-400">
                Aucun élève dans cette classe pour le moment.
              </p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
