"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Sparkles, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-primary/5 to-secondary/5 dark:from-neutral-900 dark:via-primary/10 dark:to-secondary/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="text-primary" size={24} />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              En partenariat avec l'Éducation nationale
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Le futur de l'éducation
            <br />
            <span className="text-gradient">commence aujourd'hui</span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 dark:text-neutral-500 mb-12 max-w-3xl mx-auto">
            Neuvia transforme l'apprentissage grâce à l'intelligence artificielle
            et crée des expériences éducatives immersives et engageantes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/login">
              <Button size="lg" className="min-w-[200px]">
                <GraduationCap className="mr-2" size={20} />
                Découvrir la plateforme
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                Comment ça marche ?
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "100+", label: "Expériences éducatives" },
            { number: "15+", label: "Matières couvertes" },
            { number: "10K+", label: "Élèves accompagnés" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glassmorphism p-6 rounded-xl backdrop-blur-sm"
            >
              <div className="text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600 dark:text-neutral-400 dark:text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
