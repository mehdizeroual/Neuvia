"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { motion } from "framer-motion";
import { Experience } from "@/lib/types";
import { experienceStats } from "@/lib/mock-data";
import { getExperienceById, formatNumber } from "@/lib/utils";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ImmersiveVideoPlayer from "@/components/library/ImmersiveVideoPlayer";
import {
  ArrowLeft,
  Play,
  Users,
  School,
  Clock,
  CheckCircle2,
  BookOpen,
  Eye,
  Heart,
  User,
} from "lucide-react";

export default function ExperienceDetailPage() {
  const router = useRouter();
  const params = useParams();
  const experienceId = params.id as string;
  const { user, isLoading } = useAuth();

  const [experience, setExperience] = useState<Experience | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
      return;
    }

    const foundExperience = getExperienceById(experienceId);
    if (foundExperience) {
      setExperience(foundExperience);
    }
  }, [user, isLoading, router, experienceId]);

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!experience) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          Expérience non trouvée
        </p>
        <Button variant="outline" onClick={() => router.push("/library")}>
          <ArrowLeft size={16} className="mr-2" />
          Retour à la bibliothèque
        </Button>
      </div>
    );
  }

  const stats = experienceStats[experienceId];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary/5 dark:from-neutral-900 dark:to-primary/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Bouton retour */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.push("/library")}
            className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Retour à la bibliothèque</span>
          </motion.button>

          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant={experience.verified ? "verified" : "community"}>
                {experience.verified ? (
                  <>
                    <CheckCircle2 size={14} className="mr-1" />
                    Validée EN
                  </>
                ) : (
                  "Communauté"
                )}
              </Badge>
              <Badge variant="default">{experience.level}</Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              {experience.title}
            </h1>

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary text-white text-sm font-medium">
              {experience.subject}
            </span>
          </motion.div>

          {/* Contenu principal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne gauche - Description et objectifs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Description */}
              <Card>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                  Description
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {experience.longDescription || experience.description}
                </p>
              </Card>

              {/* Objectifs pédagogiques */}
              {experience.learningObjectives &&
                experience.learningObjectives.length > 0 && (
                  <Card>
                    <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                      <BookOpen size={20} className="text-primary" />
                      Objectifs pédagogiques
                    </h2>
                    <ul className="space-y-3">
                      {experience.learningObjectives.map((objective, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-neutral-600 dark:text-neutral-300"
                        >
                          <CheckCircle2
                            size={18}
                            className="text-green-500 mt-0.5 flex-shrink-0"
                          />
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}

              {/* Auteur (pour les expériences communautaires) */}
              {!experience.verified && experience.author && (
                <Card>
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                    <User size={20} className="text-secondary" />
                    Créé par
                  </h2>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                        {experience.author.charAt(0)}
                      </div>
                      <span className="text-neutral-900 dark:text-white font-medium">
                        {experience.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
                      {experience.views && (
                        <span className="flex items-center gap-1">
                          <Eye size={16} />
                          {formatNumber(experience.views)}
                        </span>
                      )}
                      {experience.likes && (
                        <span className="flex items-center gap-1">
                          <Heart size={16} />
                          {formatNumber(experience.likes)}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              )}
            </motion.div>

            {/* Colonne droite - Stats et CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Statistiques */}
              <Card>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                  Statistiques
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4 text-center">
                    <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                      {stats ? formatNumber(stats.studentsPlayed) : "-"}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      élèves
                    </p>
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4 text-center">
                    <School className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                      {stats ? formatNumber(stats.classesUsed) : "-"}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      classes
                    </p>
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4 text-center">
                    <Clock className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                      {experience.duration || "-"}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      minutes
                    </p>
                  </div>
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4 text-center">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                      {stats ? `${stats.averageCompletionRate}%` : "-"}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      complétion
                    </p>
                  </div>
                </div>
              </Card>

              {/* Bouton CTA */}
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => setIsVideoOpen(true)}
                className="shadow-glow"
              >
                <Play size={20} className="mr-2" />
                Tester l'expérience
              </Button>

              <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                Appuyez sur ESC pour quitter à tout moment
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lecteur vidéo immersif */}
      <ImmersiveVideoPlayer
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={experience.videoUrl || ""}
        experienceTitle={experience.title}
      />
    </>
  );
}
