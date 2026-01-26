"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary/5 dark:from-neutral-900 dark:to-primary/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Contactez-<span className="text-gradient">nous</span>
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 dark:text-neutral-500 max-w-2xl mx-auto">
            Une question, une suggestion ou besoin d'aide ? Notre équipe est là
            pour vous accompagner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">Email</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 dark:text-neutral-500">contact@neuvia.fr</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 dark:text-neutral-500 mt-1">
                    Nous répondons sous 24h
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Phone className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">Téléphone</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 dark:text-neutral-500">01 XX XX XX XX</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 dark:text-neutral-500 mt-1">
                    Lun-Ven, 9h-18h
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">Adresse</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 dark:text-neutral-500">
                    Paris, France
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 dark:text-neutral-500 mt-1">
                    Siège social
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                Envoyez-nous un message
              </h2>

              {submitted ? (
                <div className="p-6 bg-primary/10 border border-primary rounded-lg text-center">
                  <div className="text-primary mb-2">
                    <Send size={48} className="mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 dark:text-neutral-500">
                    Nous avons bien reçu votre message et nous vous
                    répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Nom complet"
                      name="name"
                      type="text"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      fullWidth
                    />

                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="votre.email@exemple.fr"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      fullWidth
                    />
                  </div>

                  <Input
                    label="Sujet"
                    name="subject"
                    type="text"
                    placeholder="De quoi souhaitez-vous parler ?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    fullWidth
                  />

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Votre message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" fullWidth>
                    <Send size={20} className="mr-2" />
                    Envoyer le message
                  </Button>

                  <p className="text-sm text-neutral-500 dark:text-neutral-400 dark:text-neutral-500 text-center">
                    <strong>Note :</strong> Ceci est une démonstration. Le
                    formulaire ne soumet pas réellement de données.
                  </p>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
