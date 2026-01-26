"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { UserRole } from "@/lib/types";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { LogIn, Sparkles, User, GraduationCap } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("student");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/library");
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    setIsLoading(true);

    try {
      const success = await login(email, password, role);
      if (success) {
        router.push("/library");
      } else {
        setError("Erreur de connexion");
      }
    } catch (err) {
      setError("Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white dark:via-neutral-950 to-secondary/5 px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-primary" size={32} />
            <h1 className="text-4xl font-bold text-gradient">Neuvia</h1>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400">
            Connectez-vous pour accéder à vos expériences éducatives
          </p>
        </div>

        <Card className="p-8">
          {/* Role Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
              Je suis :
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole("student")}
                className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all duration-200 ${
                  role === "student"
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-primary/50"
                }`}
              >
                <User size={32} />
                <span className="font-medium">Élève</span>
              </button>
              <button
                type="button"
                onClick={() => setRole("teacher")}
                className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all duration-200 ${
                  role === "teacher"
                    ? "border-secondary bg-secondary/5 text-secondary"
                    : "border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-secondary/50"
                }`}
              >
                <GraduationCap size={32} />
                <span className="font-medium">Professeur</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Adresse email"
              type="email"
              placeholder="votre.email@exemple.fr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              autoComplete="email"
            />

            <Input
              label="Mot de passe"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              autoComplete="current-password"
            />

            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              fullWidth
              size="lg"
              disabled={isLoading}
              className="flex items-center justify-center gap-2"
            >
              {isLoading ? (
                "Connexion en cours..."
              ) : (
                <>
                  <LogIn size={20} />
                  Se connecter {role === "teacher" ? "en tant que professeur" : ""}
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
              <strong>Démo :</strong> Sélectionnez votre rôle et utilisez n'importe quelle
              combinaison email/mot de passe pour vous connecter.
            </p>
          </div>
        </Card>

        <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-6">
          En vous connectant, vous acceptez nos{" "}
          <a href="/legal/terms" className="text-primary hover:underline">
            conditions générales
          </a>{" "}
          et notre{" "}
          <a href="/legal/privacy" className="text-primary hover:underline">
            politique de confidentialité
          </a>
          .
        </p>
      </div>
    </div>
  );
}
