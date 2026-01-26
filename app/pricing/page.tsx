"use client";

import { motion } from "framer-motion";
import {
    Check,
    X,
    Sparkles,
    Users,
    Wrench,
    LineChart,
    Settings,
    Headphones,
    Crown,
    Star,
    Zap,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

interface PricingFeature {
    label: string;
    icon: React.ReactNode;
    decouverte: string | boolean;
    essentiel: string | boolean;
    premium: string | boolean;
}

const pricingPlans = [
    {
        name: "Découverte",
        price: 9.99,
        description: "Parfait pour découvrir l'univers Neuvia",
        icon: <Star className="w-8 h-8" />,
        popular: false,
        color: "from-cyan-400 to-cyan-600",
        shadowColor: "shadow-cyan-500/20",
    },
    {
        name: "Essentiel",
        price: 29.99,
        description: "L'essentiel pour une utilisation régulière",
        icon: <Zap className="w-8 h-8" />,
        popular: true,
        color: "from-primary to-secondary",
        shadowColor: "shadow-primary/30",
    },
    {
        name: "Premium",
        price: 49.99,
        description: "L'expérience complète sans limites",
        icon: <Crown className="w-8 h-8" />,
        popular: false,
        color: "from-purple-500 to-pink-500",
        shadowColor: "shadow-purple-500/20",
    },
];

const features: PricingFeature[] = [
    {
        label: "Comptes utilisateurs",
        icon: <Users className="w-5 h-5" />,
        decouverte: "1 compte",
        essentiel: "Jusqu'à 3 comptes",
        premium: "Jusqu'à 5 comptes",
    },
    {
        label: "Accès aux expériences Neuvia",
        icon: <Sparkles className="w-5 h-5" />,
        decouverte: "3 expériences / matière",
        essentiel: "Accès complet",
        premium: "Accès complet + accès anticipé",
    },
    {
        label: "Création de scénarios",
        icon: <Wrench className="w-5 h-5" />,
        decouverte: false,
        essentiel: false,
        premium: "Outil no-code",
    },
    {
        label: "Suivi de progression",
        icon: <LineChart className="w-5 h-5" />,
        decouverte: "Basique",
        essentiel: "Avancé",
        premium: "Avancé + analyses",
    },
    {
        label: "Paramétrage & contrôle",
        icon: <Settings className="w-5 h-5" />,
        decouverte: "Standard",
        essentiel: "Avancé",
        premium: "Avancé",
    },
    {
        label: "Support",
        icon: <Headphones className="w-5 h-5" />,
        decouverte: "Email",
        essentiel: "Prioritaire",
        premium: "Prioritaire + onboarding",
    },
];

function FeatureValue({ value }: { value: string | boolean }) {
    if (value === false) {
        return (
            <div className="flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-500" />
                </div>
            </div>
        );
    }
    if (value === true) {
        return (
            <div className="flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-500" />
                </div>
            </div>
        );
    }
    return (
        <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
            {value}
        </span>
    );
}

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">
                                Offres flexibles
                            </span>
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                            Choisissez votre{" "}
                            <span className="text-gradient">formule idéale</span>
                        </h1>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                            Des offres adaptées à tous vos besoins, de la découverte à
                            l'utilisation intensive. Commencez votre aventure Neuvia dès
                            aujourd'hui.
                        </p>
                    </motion.div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                                            Plus populaire
                                        </div>
                                    </div>
                                )}
                                <div
                                    className={`h-full rounded-2xl bg-white dark:bg-neutral-900 border-2 transition-all duration-300 hover:scale-[1.02] ${plan.popular
                                        ? "border-primary shadow-2xl " + plan.shadowColor
                                        : "border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-xl"
                                        }`}
                                >
                                    {/* Card Header */}
                                    <div className="p-8 text-center border-b border-neutral-100 dark:border-neutral-800">
                                        <div
                                            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} text-white mb-4 shadow-lg ${plan.shadowColor}`}
                                        >
                                            {plan.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                                            {plan.name}
                                        </h3>
                                        <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-6">
                                            {plan.description}
                                        </p>
                                        <div className="flex items-end justify-center gap-1">
                                            <span className="text-5xl font-bold text-neutral-900 dark:text-neutral-100">
                                                {plan.price.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€
                                            </span>
                                            <span className="text-neutral-500 dark:text-neutral-400 mb-2">
                                                / mois
                                            </span>
                                        </div>
                                    </div>

                                    {/* Features List */}
                                    <div className="p-8">
                                        <ul className="space-y-4 mb-8">
                                            {features.slice(0, 5).map((feature, featureIndex) => {
                                                const value =
                                                    index === 0
                                                        ? feature.decouverte
                                                        : index === 1
                                                            ? feature.essentiel
                                                            : feature.premium;
                                                const isAvailable = value !== false;

                                                return (
                                                    <li
                                                        key={featureIndex}
                                                        className={`flex items-center gap-3 ${!isAvailable ? "opacity-50" : ""
                                                            }`}
                                                    >
                                                        <div
                                                            className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${isAvailable
                                                                ? "text-green-500"
                                                                : "text-neutral-400"
                                                                }`}
                                                        >
                                                            {isAvailable ? (
                                                                <Check className="w-4 h-4" />
                                                            ) : (
                                                                <X className="w-4 h-4" />
                                                            )}
                                                        </div>
                                                        <span
                                                            className={`text-sm ${isAvailable
                                                                ? "text-neutral-700 dark:text-neutral-300"
                                                                : "text-neutral-400 dark:text-neutral-600"
                                                                }`}
                                                        >
                                                            {feature.label}
                                                            {typeof value === "string" && isAvailable && (
                                                                <span className="block text-xs text-neutral-500 dark:text-neutral-400">
                                                                    {value}
                                                                </span>
                                                            )}
                                                        </span>
                                                    </li>
                                                );
                                            })}
                                        </ul>

                                        <Button
                                            variant={plan.popular ? "primary" : "outline"}
                                            fullWidth
                                            size="lg"
                                        >
                                            {plan.popular ? "Commencer" : "Choisir"}
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 bg-white dark:bg-neutral-900">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                            Comparaison détaillée
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Découvrez toutes les fonctionnalités incluses dans chaque offre
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="overflow-x-auto"
                    >
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-neutral-200 dark:border-neutral-700">
                                    <th className="text-left py-4 px-4 font-semibold text-neutral-900 dark:text-neutral-100">
                                        Fonctionnalités
                                    </th>
                                    {pricingPlans.map((plan) => (
                                        <th
                                            key={plan.name}
                                            className="text-center py-4 px-4 min-w-[160px]"
                                        >
                                            <div
                                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${plan.color} text-white text-sm font-bold`}
                                            >
                                                {plan.name}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((feature, index) => (
                                    <motion.tr
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                        className="border-b border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                                    >
                                        <td className="py-5 px-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-primary">
                                                    {feature.icon}
                                                </div>
                                                <span className="font-medium text-neutral-800 dark:text-neutral-200">
                                                    {feature.label}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-5 px-4 text-center">
                                            <FeatureValue value={feature.decouverte} />
                                        </td>
                                        <td className="py-5 px-4 text-center bg-primary/5 dark:bg-primary/10">
                                            <FeatureValue value={feature.essentiel} />
                                        </td>
                                        <td className="py-5 px-4 text-center">
                                            <FeatureValue value={feature.premium} />
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-neutral-50 dark:bg-neutral-950">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-purple-600 p-12 text-center"
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-2xl translate-x-1/2 translate-y-1/2" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Des questions sur nos offres ?
                            </h2>
                            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                                Notre équipe est disponible pour vous accompagner dans le choix
                                de la formule la plus adaptée à vos besoins.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/contact">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary"
                                    >
                                        Nous contacter
                                    </Button>
                                </Link>
                                <Link href="/">
                                    <Button
                                        variant="ghost"
                                        size="lg"
                                        className="text-white hover:bg-white/10"
                                    >
                                        Retour à l'accueil
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
