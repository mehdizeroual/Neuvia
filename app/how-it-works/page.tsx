"use client";

import { motion } from "framer-motion";
import { Brain, Users, CheckCircle2, Rocket } from "lucide-react";
import Card from "@/components/ui/Card";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      icon: <Brain size={40} className="text-primary" />,
      title: "Conception par l'IA",
      description:
        "Notre intelligence artificielle génère des mondes éducatifs immersifs basés sur les programmes scolaires et les objectifs pédagogiques définis.",
    },
    {
      number: "02",
      icon: <Users size={40} className="text-secondary" />,
      title: "Validation pédagogique",
      description:
        "Chaque expérience est revue et validée par des enseignants et des experts de l'Éducation nationale pour garantir sa pertinence pédagogique.",
    },
    {
      number: "03",
      icon: <CheckCircle2 size={40} className="text-primary" />,
      title: "Publication",
      description:
        "Une fois validée, l'expérience est publiée sur la plateforme et devient accessible à tous les élèves et enseignants.",
    },
    {
      number: "04",
      icon: <Rocket size={40} className="text-secondary" />,
      title: "Apprentissage immersif",
      description:
        "Les élèves explorent les expériences à leur rythme, interagissent avec les contenus et développent leurs connaissances de manière engageante.",
    },
  ];

  const features = [
    {
      title: "Adaptation au niveau",
      description:
        "Chaque expérience s'adapte au niveau de l'élève, du collège au lycée.",
    },
    {
      title: "Suivi de progression",
      description:
        "Les enseignants peuvent suivre la progression de leurs élèves en temps réel.",
    },
    {
      title: "Contenus interactifs",
      description:
        "Des quiz, des simulations et des activités pratiques pour renforcer l'apprentissage.",
    },
    {
      title: "Multi-matières",
      description:
        "Histoire, Sciences, Mathématiques et bien d'autres disciplines couvertes.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              Comment <span className="text-gradient">ça marche</span> ?
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 dark:text-neutral-500 max-w-3xl mx-auto">
              Découvrez le processus de création et d'utilisation des expériences
              éducatives Neuvia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 text-center">
            Le processus de création
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/4 left-full w-full h-0.5 bg-gradient-primary -z-10" />
                )}

                <Card className="h-full">
                  <div className="text-6xl font-bold text-gradient opacity-20 mb-4">
                    {step.number}
                  </div>
                  <div className="flex justify-start mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 dark:text-neutral-500">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary/5 dark:from-neutral-900 dark:to-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 text-center">
            Fonctionnalités clés
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 dark:text-neutral-500">{feature.description}</p>
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
              <Button size="lg">Commencer maintenant</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
            Technologie et sécurité
          </h2>

          <div className="space-y-6 text-lg text-neutral-700 dark:text-neutral-300">
            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                Intelligence artificielle avancée
              </h3>
              <p>
                Notre IA utilise des modèles de génération de contenu de pointe
                pour créer des expériences riches et variées, tout en respectant
                strictement les programmes scolaires.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                Sécurité et confidentialité
              </h3>
              <p>
                Toutes les données sont chiffrées et stockées conformément au
                RGPD. La protection des données des élèves est notre priorité
                absolue.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                Accessibilité
              </h3>
              <p>
                La plateforme est accessible sur tous les appareils (ordinateur,
                tablette, smartphone) et fonctionne avec les navigateurs modernes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
