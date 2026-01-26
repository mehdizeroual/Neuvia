"use client";

import { motion } from "framer-motion";
import { Brain, Users, Award, Zap } from "lucide-react";
import Card from "@/components/ui/Card";

export default function Features() {
  const features = [
    {
      icon: <Brain size={40} className="text-primary" />,
      title: "IA Pédagogique",
      description:
        "Une intelligence artificielle conçue spécifiquement pour l'apprentissage, adaptée aux programmes de l'Éducation nationale.",
    },
    {
      icon: <Users size={40} className="text-secondary" />,
      title: "Co-construction",
      description:
        "Développée en collaboration étroite avec des enseignants et l'Éducation nationale pour garantir la pertinence pédagogique.",
    },
    {
      icon: <Award size={40} className="text-primary" />,
      title: "Expériences Validées",
      description:
        "Contenus vérifiés et validés par l'Éducation nationale pour une qualité pédagogique optimale.",
    },
    {
      icon: <Zap size={40} className="text-secondary" />,
      title: "Engagement Maximal",
      description:
        "Des mondes immersifs qui transforment l'apprentissage en aventure captivante et mémorable.",
    },
  ];

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
            La révolution de{" "}
            <span className="text-gradient">l'éducation par l'IA</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 dark:text-neutral-500 max-w-3xl mx-auto">
            Neuvia combine la puissance de l'intelligence artificielle avec
            l'expertise pédagogique pour créer des expériences d'apprentissage
            uniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 dark:text-neutral-500">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
