"use client";

import Card from "@/components/ui/Card";
import { TeacherExperience } from "@/lib/mock-teacher-data";
import {
    Sparkles,
    Users,
    TrendingUp,
    Calendar,
    MoreVertical,
    Edit,
    Trash2,
    Eye,
} from "lucide-react";
import { useState } from "react";

interface ExperienceCardProps {
    experience: TeacherExperience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
    const [showMenu, setShowMenu] = useState(false);

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat("fr-FR", {
            day: "numeric",
            month: "short",
            year: "numeric",
        }).format(date);
    };

    const getSubjectColor = (subject: string) => {
        switch (subject) {
            case "Histoire":
                return "bg-amber-500/10 text-amber-600 dark:text-amber-400";
            case "Sciences":
                return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";
            case "Mathématiques":
                return "bg-blue-500/10 text-blue-600 dark:text-blue-400";
            default:
                return "bg-neutral-500/10 text-neutral-600 dark:text-neutral-400";
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "active":
                return (
                    <span className="px-2 py-1 text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400 rounded-full">
                        Active
                    </span>
                );
            case "draft":
                return (
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full">
                        Brouillon
                    </span>
                );
            case "archived":
                return (
                    <span className="px-2 py-1 text-xs font-medium bg-neutral-500/10 text-neutral-600 dark:text-neutral-400 rounded-full">
                        Archivée
                    </span>
                );
        }
    };

    return (
        <Card className="p-5 hover:shadow-lg transition-all duration-200 group relative">
            {/* Menu contextuel */}
            <div className="absolute top-4 right-4">
                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="p-1.5 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
                >
                    <MoreVertical size={18} className="text-neutral-500" />
                </button>
                {showMenu && (
                    <div className="absolute right-0 mt-1 w-40 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-xl z-10">
                        <button className="w-full px-4 py-2 text-left text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 flex items-center gap-2 rounded-t-lg">
                            <Eye size={16} />
                            Voir
                        </button>
                        <button className="w-full px-4 py-2 text-left text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 flex items-center gap-2">
                            <Edit size={16} />
                            Modifier
                        </button>
                        <button className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2 rounded-b-lg">
                            <Trash2 size={16} />
                            Supprimer
                        </button>
                    </div>
                )}
            </div>

            {/* En-tête */}
            <div className="flex items-start gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Sparkles size={22} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 line-clamp-2">
                        {experience.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span
                            className={`px-2 py-0.5 text-xs font-medium rounded-md ${getSubjectColor(
                                experience.subject
                            )}`}
                        >
                            {experience.subject}
                        </span>
                        {getStatusBadge(experience.status)}
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-neutral-500 dark:text-neutral-400 mb-1">
                        <Users size={14} />
                    </div>
                    <p className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                        {experience.usageCount}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        utilisations
                    </p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-neutral-500 dark:text-neutral-400 mb-1">
                        <TrendingUp size={14} />
                    </div>
                    <p className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                        {experience.averageScore > 0
                            ? `${experience.averageScore}/20`
                            : "-"}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        moyenne
                    </p>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-neutral-500 dark:text-neutral-400 mb-1">
                        <Calendar size={14} />
                    </div>
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        {formatDate(experience.createdAt)}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">créée</p>
                </div>
            </div>
        </Card>
    );
}

interface TeacherExperiencesListProps {
    experiences: TeacherExperience[];
}

export default function TeacherExperiencesList({
    experiences,
}: TeacherExperiencesListProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
            ))}
        </div>
    );
}
