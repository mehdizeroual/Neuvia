"use client";

import { motion } from "framer-motion";
import { Target, Users, Award, Lightbulb } from "lucide-react";
import Card from "@/components/ui/Card";

export default function AboutPage() {
  const values = [
    {
      icon: <Target size={40} className="text-primary" />,
      title: "Notre mission",
      description:
        "Révolutionner l'apprentissage en rendant l'éducation plus immersive, engageante et accessible à tous les élèves.",
    },
    {
      icon: <Users size={40} className="text-secondary" />,
      title: "Collaboration",
      description:
        "Travailler main dans la main avec l'Éducation nationale et les enseignants pour créer des contenus pertinents.",
    },
    {
      icon: <Award size={40} className="text-primary" />,
      title: "Excellence",
      description:
        "Garantir la qualité pédagogique de chaque expérience grâce à un processus de validation rigoureux.",
    },
    {
      icon: <Lightbulb size={40} className="text-secondary" />,
      title: "Innovation",
      description:
        "Exploiter les dernières avancées en IA pour créer des expériences d'apprentissage uniques et mémorables.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              À propos de <span className="text-gradient">Neuvia</span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 dark:text-neutral-500 max-w-3xl mx-auto">
              Nous sommes une équipe passionnée dédiée à transformer l'éducation
              grâce à l'intelligence artificielle et aux expériences immersives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Notre histoire
          </h2>
          <div className="space-y-4 text-lg text-neutral-700 dark:text-neutral-300">
            <p>
              Neuvia est née d'une conviction simple : l'éducation peut et doit
              être plus engageante, plus immersive et plus efficace. En
              combinant notre expertise en intelligence artificielle avec la
              rigueur pédagogique de l'Éducation nationale, nous avons créé une
              plateforme unique.
            </p>
            <p>
              Depuis notre lancement, nous travaillons en étroite collaboration
              avec des enseignants, des experts pédagogiques et l'Éducation
              nationale pour développer des expériences éducatives qui
              transforment réellement la manière dont les élèves apprennent.
            </p>
            <p>
              Aujourd'hui, Neuvia accompagne des milliers d'élèves dans leur
              parcours d'apprentissage, du collège au lycée, à travers des
              expériences immersives en Histoire, Sciences, Mathématiques et bien
              d'autres matières.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary/5 dark:from-neutral-900 dark:to-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 text-center">
            Nos valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 dark:text-neutral-500">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Partenariat avec l'Éducation nationale
          </h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
            Notre partenariat avec l'Éducation nationale est au cœur de notre
            démarche. Il nous permet de :
          </p>
          <ul className="list-disc list-inside text-lg text-neutral-700 dark:text-neutral-300 space-y-2 mb-6">
            <li>
              Garantir la conformité de nos contenus avec les programmes
              scolaires officiels
            </li>
            <li>
              Bénéficier de l'expertise pédagogique d'enseignants expérimentés
            </li>
            <li>
              Valider scientifiquement et pédagogiquement chaque expérience
            </li>
            <li>
              Assurer un alignement parfait avec les objectifs d'apprentissage
            </li>
          </ul>
          <p className="text-lg text-neutral-700 dark:text-neutral-300">
            Cette collaboration garantit que chaque expérience Neuvia est non
            seulement technologiquement innovante, mais aussi pédagogiquement
            pertinente et efficace.
          </p>
        </div>
      </section>
    </div>
  );
}
