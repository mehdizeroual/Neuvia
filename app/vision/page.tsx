"use client";

import { motion } from "framer-motion";
import { BookOpen, Heart, Lightbulb, Globe } from "lucide-react";
import Card from "@/components/ui/Card";

export default function VisionPage() {
  const pillars = [
    {
      icon: <BookOpen size={48} className="text-primary" />,
      title: "Complémentarité avec l'enseignant",
      description:
        "Neuvia ne remplace pas l'enseignant mais l'accompagne. Notre technologie permet aux professeurs de proposer des expériences enrichies qui complètent leurs cours traditionnels.",
      points: [
        "Outil au service de la pédagogie",
        "Personnalisation des parcours d'apprentissage",
        "Libère du temps pour l'accompagnement individuel",
      ],
    },
    {
      icon: <Heart size={48} className="text-secondary" />,
      title: "Engagement et motivation",
      description:
        "L'immersion et l'interactivité transforment l'apprentissage en expérience captivante, renforçant la motivation et la rétention des connaissances.",
      points: [
        "Apprentissage par l'expérience",
        "Stimulation de la curiosité naturelle",
        "Réduction du décrochage scolaire",
      ],
    },
    {
      icon: <Lightbulb size={48} className="text-primary" />,
      title: "Innovation pédagogique",
      description:
        "Nous explorons continuellement de nouvelles approches pédagogiques basées sur les dernières recherches en sciences cognitives et en éducation.",
      points: [
        "Apprentissage actif et collaboratif",
        "Feedback immédiat et constructif",
        "Adaptation au rythme de chaque élève",
      ],
    },
    {
      icon: <Globe size={48} className="text-secondary" />,
      title: "Accessibilité universelle",
      description:
        "Notre mission est de rendre l'excellence éducative accessible à tous les élèves, quel que soit leur établissement ou leur situation géographique.",
      points: [
        "Égalité des chances dans l'éducation",
        "Réduction des inégalités territoriales",
        "Contenus adaptés aux besoins spécifiques",
      ],
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
              Notre <span className="text-gradient">vision pédagogique</span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 dark:text-neutral-500 max-w-3xl mx-auto">
              L'IA au service de l'éducation : une approche humaine, éthique et
              centrée sur l'apprenant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6 text-lg text-neutral-700 dark:text-neutral-300">
            <p>
              Chez Neuvia, nous croyons que l'intelligence artificielle peut
              révolutionner l'éducation, non pas en remplaçant l'humain, mais en
              amplifiant les capacités des enseignants et en enrichissant
              l'expérience d'apprentissage des élèves.
            </p>
            <p>
              Notre vision s'articule autour de quatre piliers fondamentaux qui
              guident chacune de nos décisions et innovations.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary/5 dark:from-neutral-900 dark:to-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">{pillar.icon}</div>
                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                        {pillar.title}
                      </h2>
                      <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                        {pillar.description}
                      </p>
                      <ul className="space-y-3">
                        {pillar.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center mt-1">
                              <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                            <span className="text-neutral-700 dark:text-neutral-300">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alignment with Programs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
            Alignement avec les programmes scolaires
          </h2>

          <div className="space-y-6 text-lg text-neutral-700 dark:text-neutral-300">
            <p>
              Chaque expérience Neuvia est méticuleusement conçue pour s'aligner
              avec les programmes officiels de l'Éducation nationale. Cette
              conformité n'est pas une contrainte mais une garantie de pertinence
              pédagogique.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
                Notre processus de validation
              </h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Analyse des objectifs pédagogiques officiels</li>
                <li>Conception de l'expérience par notre IA</li>
                <li>Revue par des enseignants de l'Éducation nationale</li>
                <li>Tests avec des groupes d'élèves pilotes</li>
                <li>Ajustements basés sur les retours</li>
                <li>Validation finale et publication</li>
              </ol>
            </div>

            <p>
              Cette rigueur garantit que chaque minute passée sur Neuvia
              contribue directement aux objectifs d'apprentissage des élèves.
            </p>
          </div>
        </div>
      </section>

      {/* Future */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              L'avenir de l'éducation
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
              Nous imaginons un futur où chaque élève bénéficie d'une éducation
              personnalisée, engageante et efficace. Un futur où l'IA et
              l'enseignant travaillent main dans la main pour révéler le potentiel
              de chaque apprenant.
            </p>
            <p className="text-xl font-bold text-gradient">
              Ensemble, construisons l'éducation de demain.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
