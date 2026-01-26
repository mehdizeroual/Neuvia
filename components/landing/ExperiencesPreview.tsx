"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { verifiedExperiences } from "@/lib/mock-data";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ExperiencesPreview() {
  const previewExperiences = verifiedExperiences.slice(0, 3);

  return (
    <section className="py-20 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Nos <span className="text-gradient">expériences</span> phares
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 dark:text-neutral-500 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos expériences éducatives immersives,
            toutes validées par l'Éducation nationale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {previewExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="verified">
                      <CheckCircle2 size={12} className="mr-1" />
                      Validée EN
                    </Badge>
                    <Badge variant="default">{experience.level}</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 dark:text-neutral-500 text-sm mb-4">
                    {experience.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 dark:text-neutral-500">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {experience.subject}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/login">
            <Button size="lg">
              Découvrir toutes les expériences
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
