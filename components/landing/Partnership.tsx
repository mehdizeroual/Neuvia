"use client";

import { motion } from "framer-motion";
import { Shield, Check } from "lucide-react";

export default function Partnership() {
  const benefits = [
    "Conformité totale aux programmes scolaires",
    "Validation par des experts pédagogiques",
    "Sécurité et confidentialité garanties",
    "Accessibilité pour tous les établissements",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-primary" size={40} />
              <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                En partenariat avec
                <br />
                <span className="text-gradient">l'Éducation nationale</span>
              </h2>
            </div>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 dark:text-neutral-500 mb-8">
              Neuvia a été développée en étroite collaboration avec l'Éducation
              nationale pour garantir une qualité pédagogique irréprochable et
              une parfaite adéquation avec les besoins des enseignants et des
              élèves.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glassmorphism p-12 rounded-2xl backdrop-blur-md">
              <div className="text-center">
                <div className="text-6xl font-bold text-gradient mb-4">
                  100%
                </div>
                <p className="text-xl text-neutral-700 dark:text-neutral-300 font-medium mb-6">
                  Des expériences validées par l'Éducation nationale
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white/50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">
                      8+
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400 dark:text-neutral-500">Matières</div>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-secondary mb-1">
                      50+
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400 dark:text-neutral-500">Modules</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
