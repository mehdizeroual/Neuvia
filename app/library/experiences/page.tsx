"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { mockTeacherExperiences } from "@/lib/mock-teacher-data";
import TeacherExperiencesList from "@/components/teacher/TeacherExperiencesList";
import { BookOpen, Plus } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function TeacherExperiencesPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && user.role !== "teacher") {
      router.push("/library");
    }
  }, [user, router]);

  if (!user || user.role !== "teacher") {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary/5 dark:from-neutral-900 dark:to-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-secondary" size={36} />
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                Mes <span className="text-gradient">Expériences</span>
              </h1>
            </div>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              {mockTeacherExperiences.length} expérience{mockTeacherExperiences.length > 1 ? "s" : ""} créée{mockTeacherExperiences.length > 1 ? "s" : ""}
            </p>
          </div>
          <Link href="/library/create-experience">
            <Button>
              <Plus size={20} className="mr-2" />
              Nouvelle expérience
            </Button>
          </Link>
        </div>

        {/* Experiences Grid */}
        {mockTeacherExperiences.length > 0 ? (
          <TeacherExperiencesList experiences={mockTeacherExperiences} />
        ) : (
          <div className="text-center py-12">
            <BookOpen className="mx-auto mb-4 text-neutral-400" size={48} />
            <p className="text-neutral-500 dark:text-neutral-400 mb-4">
              Vous n'avez pas encore créé d'expérience
            </p>
            <Link href="/library/create-experience">
              <Button>
                <Plus size={20} className="mr-2" />
                Créer ma première expérience
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
