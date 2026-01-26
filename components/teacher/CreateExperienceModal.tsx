"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { X, Sparkles, Loader2 } from "lucide-react";

interface CreateExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUBJECTS = [
  { value: "Histoire", label: "Histoire" },
  { value: "Sciences", label: "Sciences" },
  { value: "Mathématiques", label: "Mathématiques" },
];

const CLASS_LEVELS = [
  { value: "3ème", label: "3ème" },
  { value: "Seconde", label: "2nde" },
  { value: "Première", label: "1ère" },
];

export default function CreateExperienceModal({
  isOpen,
  onClose,
}: CreateExperienceModalProps) {
  const [formData, setFormData] = useState({
    subject: SUBJECTS[0].value,
    classLevel: CLASS_LEVELS[0].value,
    instructions: "",
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    // Mock generation
    setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
      setTimeout(() => {
        setGenerated(false);
        setFormData({
          subject: SUBJECTS[0].value,
          classLevel: CLASS_LEVELS[0].value,
          instructions: "",
        });
        onClose();
      }, 2000);
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-3xl p-6">
      <Card className="w-full max-w-lg p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="text-primary" size={28} />
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Créer une nouvelle expérience
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400">
            Configurez les paramètres de votre expérience éducative immersive.
          </p>
        </div>

        {generated ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-4">
              <Sparkles className="text-green-500" size={32} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              Expérience générée !
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Votre expérience en {formData.subject} pour les {formData.classLevel} a été créée.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Subject Dropdown */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Matière
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              >
                {SUBJECTS.map((subject) => (
                  <option key={subject.value} value={subject.value}>
                    {subject.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Class Level Dropdown */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Classe visée
              </label>
              <select
                name="classLevel"
                value={formData.classLevel}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              >
                {CLASS_LEVELS.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Instructions Textarea */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Instructions
              </label>
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                rows={4}
                placeholder="Décrivez le contenu et les objectifs pédagogiques de l'expérience..."
                className="w-full px-4 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                fullWidth
                disabled={isGenerating}
              >
                Annuler
              </Button>
              <Button type="submit" fullWidth disabled={isGenerating}>
                {isGenerating ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Génération...
                  </>
                ) : (
                  <>
                    <Sparkles size={18} className="mr-2" />
                    Générer
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </Card>
    </div>
  );
}
