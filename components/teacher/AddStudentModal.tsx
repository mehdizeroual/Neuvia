"use client";

import { useState } from "react";
import { ClassGroup } from "@/lib/teacher-types";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { X, UserPlus } from "lucide-react";

interface AddStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  classes: ClassGroup[];
}

export default function AddStudentModal({
  isOpen,
  onClose,
  classes,
}: AddStudentModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    class: classes[0]?.name || "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        class: classes[0]?.name || "",
      });
      onClose();
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-6">
      <Card className="w-full max-w-md p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
        >
          <X size={24} />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Ajouter un élève
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Remplissez les informations de l'élève pour l'ajouter à votre classe.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-4">
              <UserPlus className="text-green-500" size={32} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              Élève ajouté !
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              {formData.firstName} {formData.lastName} a été ajouté(e) à la classe{" "}
              {formData.class}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Prénom"
              name="firstName"
              type="text"
              placeholder="Prénom de l'élève"
              value={formData.firstName}
              onChange={handleChange}
              required
              fullWidth
            />

            <Input
              label="Nom"
              name="lastName"
              type="text"
              placeholder="Nom de l'élève"
              value={formData.lastName}
              onChange={handleChange}
              required
              fullWidth
            />

            <Input
              label="Adresse email"
              name="email"
              type="email"
              placeholder="email@exemple.fr"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Classe
              </label>
              <select
                name="class"
                value={formData.class}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              >
                {classes.map((cls) => (
                  <option key={cls.id} value={cls.name}>
                    {cls.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                fullWidth
              >
                Annuler
              </Button>
              <Button type="submit" fullWidth>
                <UserPlus size={18} className="mr-2" />
                Ajouter
              </Button>
            </div>
          </form>
        )}
      </Card>
    </div>
  );
}
