"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { mockClasses } from "@/lib/mock-teacher-data";
import ClassCard from "@/components/teacher/ClassCard";
import { GraduationCap, Plus } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ClassesPage() {
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
              <GraduationCap className="text-primary" size={36} />
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                Mes <span className="text-gradient">Classes</span>
              </h1>
            </div>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              {mockClasses.length} classe{mockClasses.length > 1 ? "s" : ""} - {mockClasses.reduce((acc, c) => acc + c.students.length, 0)} élèves au total
            </p>
          </div>
          <Button>
            <Plus size={20} className="mr-2" />
            Nouvelle classe
          </Button>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockClasses.map((classGroup) => (
            <ClassCard key={classGroup.id} classGroup={classGroup} />
          ))}
        </div>
      </div>
    </div>
  );
}
