"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { mockTeacherStats, mockClasses, mockTeacherExperiences } from "@/lib/mock-teacher-data";
import StatsCard from "@/components/library/StatsCard";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  Users,
  BookOpen,
  TrendingUp,
  Award,
  Plus,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import ClassCard from "./ClassCard";
import AddStudentModal from "./AddStudentModal";
import RecentActivityList from "./RecentActivityList";
import TeacherExperiencesList from "./TeacherExperiencesList";

export default function TeacherDashboard() {
  const router = useRouter();
  const stats = mockTeacherStats;
  const [isAddStudentModalOpen, setIsAddStudentModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {/* Stats principales */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Vue d'ensemble
          </h2>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => setIsAddStudentModalOpen(true)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Plus size={20} />
              Ajouter un élève
            </Button>
            <Button
              onClick={() => router.push("/library/create-experience")}
              className="flex items-center gap-2"
            >
              <Sparkles size={20} />
              Créer une nouvelle expérience
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Élèves"
            value={stats.totalStudents}
            icon={<Users size={24} />}
            color="primary"
            subtitle={`${stats.totalClasses} classes`}
          />
          <StatsCard
            title="Classes"
            value={stats.totalClasses}
            icon={<BookOpen size={24} />}
            color="secondary"
          />
          <StatsCard
            title="Badges obtenus"
            value={`${stats.totalBadgesEarned}/${stats.totalBadgesPossible}`}
            icon={<TrendingUp size={24} />}
            color="success"
            subtitle={`${Math.round((stats.totalBadgesEarned / stats.totalBadgesPossible) * 100)}% de réussite`}
          />
          <StatsCard
            title="Classe la plus active"
            value={stats.mostActiveClass}
            icon={<Award size={24} />}
            color="warning"
          />
        </div>
      </div>

      {/* Mes expériences */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Mes expériences
          </h2>
          <Button
            onClick={() => router.push("/library/create-experience")}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Plus size={16} />
            Nouvelle expérience
          </Button>
        </div>
        <TeacherExperiencesList experiences={mockTeacherExperiences} />
      </div>

      {/* Mes classes */}
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          Mes classes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockClasses.map((classGroup) => (
            <ClassCard key={classGroup.id} classGroup={classGroup} />
          ))}
        </div>
      </div>

      {/* Activité récente */}
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
          Activité récente
        </h2>
        <RecentActivityList activities={stats.recentActivity} />
      </div>

      {/* Modal d'ajout d'élève */}
      <AddStudentModal
        isOpen={isAddStudentModalOpen}
        onClose={() => setIsAddStudentModalOpen(false)}
        classes={mockClasses}
      />


    </div>
  );
}

