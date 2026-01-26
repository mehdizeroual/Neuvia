"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
    Sparkles,
    Loader2,
    ArrowLeft,
    BookOpen,
    GraduationCap,
    FileText,
    Clock,
    Target,
    Lightbulb,
    CheckCircle2,
} from "lucide-react";

const SUBJECTS = [
    { value: "Histoire", label: "Histoire", icon: "📜" },
    { value: "Sciences", label: "Sciences", icon: "🔬" },
    { value: "Mathématiques", label: "Mathématiques", icon: "📐" },
    { value: "Géographie", label: "Géographie", icon: "🌍" },
    { value: "Français", label: "Français", icon: "📚" },
    { value: "Physique-Chimie", label: "Physique-Chimie", icon: "⚗️" },
];

const CLASS_LEVELS = [
    { value: "6ème", label: "6ème" },
    { value: "5ème", label: "5ème" },
    { value: "4ème", label: "4ème" },
    { value: "3ème", label: "3ème" },
    { value: "Seconde", label: "2nde" },
    { value: "Première", label: "1ère" },
    { value: "Terminale", label: "Terminale" },
];

const DURATION_OPTIONS = [
    { value: "15", label: "15 minutes" },
    { value: "30", label: "30 minutes" },
    { value: "45", label: "45 minutes" },
    { value: "60", label: "1 heure" },
    { value: "90", label: "1h30" },
];

const DIFFICULTY_LEVELS = [
    { value: "facile", label: "Facile", color: "text-green-500" },
    { value: "moyen", label: "Moyen", color: "text-yellow-500" },
    { value: "difficile", label: "Difficile", color: "text-orange-500" },
    { value: "expert", label: "Expert", color: "text-red-500" },
];

export default function CreateExperiencePage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: "",
        subject: "",
        classLevel: "",
        duration: "30",
        difficulty: "moyen",
        objectives: "",
        instructions: "",
        keywords: "",
    });

    const [isGenerating, setIsGenerating] = useState(false);
    const [generated, setGenerated] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsGenerating(true);
        // Mock generation
        setTimeout(() => {
            setIsGenerating(false);
            setGenerated(true);
        }, 3000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const isStep1Valid = formData.title && formData.subject && formData.classLevel;
    const isStep2Valid = formData.objectives && formData.instructions;

    const goToNextStep = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
    };

    const goToPreviousStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    if (generated) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary/5 dark:from-neutral-900 dark:to-primary/10">
                <div className="max-w-4xl mx-auto px-6 py-12">
                    <Card className="text-center py-16">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500/10 rounded-full mb-6 animate-bounce">
                            <CheckCircle2 className="text-green-500" size={48} />
                        </div>
                        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                            Expérience générée avec succès ! 🎉
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-2">
                            Votre expérience <span className="font-semibold text-primary">"{formData.title}"</span>
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-500 mb-8">
                            en {formData.subject} pour les {formData.classLevel} a été créée et est prête à être utilisée.
                        </p>

                        <div className="flex gap-4 justify-center">
                            <Button variant="outline" onClick={() => router.push("/library")}>
                                Retour au dashboard
                            </Button>
                            <Button onClick={() => {
                                setGenerated(false);
                                setCurrentStep(1);
                                setFormData({
                                    title: "",
                                    subject: "",
                                    classLevel: "",
                                    duration: "30",
                                    difficulty: "moyen",
                                    objectives: "",
                                    instructions: "",
                                    keywords: "",
                                });
                            }}>
                                <Sparkles size={18} className="mr-2" />
                                Créer une autre expérience
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary/5 dark:from-neutral-900 dark:to-primary/10">
            <div className="max-w-5xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="mb-10">
                    <button
                        onClick={() => router.push("/library")}
                        className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors mb-6 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Retour au dashboard
                    </button>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                            <Sparkles className="text-white" size={28} />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                                Créer une nouvelle <span className="text-gradient">expérience</span>
                            </h1>
                            <p className="text-neutral-600 dark:text-neutral-400 mt-1">
                                Configurez tous les paramètres de votre expérience éducative immersive
                            </p>
                        </div>
                    </div>
                </div>

                {/* Progress Steps */}
                <div className="mb-10">
                    <div className="flex items-center justify-between max-w-2xl mx-auto">
                        {[
                            { num: 1, label: "Informations", icon: BookOpen },
                            { num: 2, label: "Contenu", icon: FileText },
                            { num: 3, label: "Génération", icon: Sparkles },
                        ].map((step, index) => (
                            <div key={step.num} className="flex items-center">
                                <div className="flex flex-col items-center">
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${currentStep >= step.num
                                                ? "bg-gradient-primary text-white shadow-glow"
                                                : "bg-neutral-200 dark:bg-neutral-800 text-neutral-500"
                                            }`}
                                    >
                                        <step.icon size={20} />
                                    </div>
                                    <span
                                        className={`mt-2 text-sm font-medium ${currentStep >= step.num
                                                ? "text-primary"
                                                : "text-neutral-500"
                                            }`}
                                    >
                                        {step.label}
                                    </span>
                                </div>
                                {index < 2 && (
                                    <div
                                        className={`w-24 md:w-32 h-1 mx-2 rounded-full transition-all duration-300 ${currentStep > step.num
                                                ? "bg-gradient-primary"
                                                : "bg-neutral-200 dark:bg-neutral-800"
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit}>
                    {/* Step 1: Basic Info */}
                    {currentStep === 1 && (
                        <Card className="p-8 animate-fade-in">
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 flex items-center gap-3">
                                <BookOpen className="text-primary" size={28} />
                                Informations générales
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Title */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                        Titre de l'expérience *
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                        placeholder="Ex: La Révolution Française - Les grandes dates"
                                        className="w-full px-4 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                                    />
                                </div>

                                {/* Subject Selection */}
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                        Matière *
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {SUBJECTS.map((subject) => (
                                            <button
                                                key={subject.value}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, subject: subject.value })}
                                                className={`p-3 rounded-lg border-2 transition-all duration-200 text-left flex items-center gap-2 ${formData.subject === subject.value
                                                        ? "border-primary bg-primary/10 text-primary"
                                                        : "border-neutral-200 dark:border-neutral-700 hover:border-primary/50"
                                                    }`}
                                            >
                                                <span className="text-xl">{subject.icon}</span>
                                                <span className="font-medium text-sm">{subject.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Class Level & Duration */}
                                <div className="space-y-6">
                                    {/* Class Level */}
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                            <GraduationCap className="inline mr-2" size={16} />
                                            Classe visée *
                                        </label>
                                        <select
                                            name="classLevel"
                                            value={formData.classLevel}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                                        >
                                            <option value="">Sélectionner une classe</option>
                                            {CLASS_LEVELS.map((level) => (
                                                <option key={level.value} value={level.value}>
                                                    {level.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Duration */}
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                            <Clock className="inline mr-2" size={16} />
                                            Durée estimée
                                        </label>
                                        <select
                                            name="duration"
                                            value={formData.duration}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                                        >
                                            {DURATION_OPTIONS.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Difficulty */}
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                            <Target className="inline mr-2" size={16} />
                                            Niveau de difficulté
                                        </label>
                                        <div className="flex gap-2">
                                            {DIFFICULTY_LEVELS.map((level) => (
                                                <button
                                                    key={level.value}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, difficulty: level.value })}
                                                    className={`flex-1 py-2 px-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${formData.difficulty === level.value
                                                            ? `border-primary bg-primary/10 ${level.color}`
                                                            : "border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-primary/50"
                                                        }`}
                                                >
                                                    {level.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end mt-8">
                                <Button
                                    type="button"
                                    onClick={goToNextStep}
                                    disabled={!isStep1Valid}
                                >
                                    Continuer
                                    <ArrowLeft size={18} className="ml-2 rotate-180" />
                                </Button>
                            </div>
                        </Card>
                    )}

                    {/* Step 2: Content Details */}
                    {currentStep === 2 && (
                        <Card className="p-8 animate-fade-in">
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 flex items-center gap-3">
                                <FileText className="text-primary" size={28} />
                                Contenu pédagogique
                            </h2>

                            <div className="space-y-6">
                                {/* Objectives */}
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                        <Target className="inline mr-2" size={16} />
                                        Objectifs pédagogiques *
                                    </label>
                                    <textarea
                                        name="objectives"
                                        value={formData.objectives}
                                        onChange={handleChange}
                                        required
                                        rows={3}
                                        placeholder="Décrivez les objectifs d'apprentissage de cette expérience (ex: Comprendre les causes de la Révolution, Identifier les acteurs principaux...)"
                                        className="w-full px-4 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                                    />
                                </div>

                                {/* Instructions */}
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                        <Lightbulb className="inline mr-2" size={16} />
                                        Instructions détaillées *
                                    </label>
                                    <textarea
                                        name="instructions"
                                        value={formData.instructions}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        placeholder="Décrivez en détail le contenu, le scénario et les activités de l'expérience. Plus vous serez précis, meilleur sera le résultat généré..."
                                        className="w-full px-4 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                                    />
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                                        💡 Astuce : Mentionnez les événements clés, personnages historiques, concepts scientifiques ou formules que vous souhaitez intégrer.
                                    </p>
                                </div>

                                {/* Keywords */}
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                        Mots-clés (optionnel)
                                    </label>
                                    <input
                                        type="text"
                                        name="keywords"
                                        value={formData.keywords}
                                        onChange={handleChange}
                                        placeholder="Ex: révolution, monarchie, Bastille, Louis XVI (séparés par des virgules)"
                                        className="w-full px-4 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between mt-8">
                                <Button type="button" variant="outline" onClick={goToPreviousStep}>
                                    <ArrowLeft size={18} className="mr-2" />
                                    Retour
                                </Button>
                                <Button
                                    type="button"
                                    onClick={goToNextStep}
                                    disabled={!isStep2Valid}
                                >
                                    Continuer
                                    <ArrowLeft size={18} className="ml-2 rotate-180" />
                                </Button>
                            </div>
                        </Card>
                    )}

                    {/* Step 3: Review & Generate */}
                    {currentStep === 3 && (
                        <Card className="p-8 animate-fade-in">
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 flex items-center gap-3">
                                <Sparkles className="text-primary" size={28} />
                                Récapitulatif et génération
                            </h2>

                            {/* Summary Card */}
                            <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-xl p-6 mb-8">
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                                    {formData.title}
                                </h3>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                    <div className="flex items-center gap-2">
                                        <BookOpen size={18} className="text-primary" />
                                        <div>
                                            <p className="text-xs text-neutral-500">Matière</p>
                                            <p className="font-medium text-neutral-900 dark:text-neutral-100">
                                                {formData.subject}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <GraduationCap size={18} className="text-primary" />
                                        <div>
                                            <p className="text-xs text-neutral-500">Classe</p>
                                            <p className="font-medium text-neutral-900 dark:text-neutral-100">
                                                {formData.classLevel}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={18} className="text-primary" />
                                        <div>
                                            <p className="text-xs text-neutral-500">Durée</p>
                                            <p className="font-medium text-neutral-900 dark:text-neutral-100">
                                                {DURATION_OPTIONS.find((d) => d.value === formData.duration)?.label}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Target size={18} className="text-primary" />
                                        <div>
                                            <p className="text-xs text-neutral-500">Difficulté</p>
                                            <p className="font-medium text-neutral-900 dark:text-neutral-100 capitalize">
                                                {formData.difficulty}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                                            Objectifs pédagogiques
                                        </p>
                                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                                            {formData.objectives}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                                            Instructions
                                        </p>
                                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                                            {formData.instructions}
                                        </p>
                                    </div>
                                    {formData.keywords && (
                                        <div>
                                            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                                                Mots-clés
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {formData.keywords.split(",").map((keyword, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                                                    >
                                                        {keyword.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <Button type="button" variant="outline" onClick={goToPreviousStep}>
                                    <ArrowLeft size={18} className="mr-2" />
                                    Modifier
                                </Button>
                                <Button type="submit" size="lg" disabled={isGenerating}>
                                    {isGenerating ? (
                                        <>
                                            <Loader2 size={20} className="mr-2 animate-spin" />
                                            Génération en cours...
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles size={20} className="mr-2" />
                                            Générer l'expérience
                                        </>
                                    )}
                                </Button>
                            </div>
                        </Card>
                    )}
                </form>
            </div>
        </div>
    );
}
