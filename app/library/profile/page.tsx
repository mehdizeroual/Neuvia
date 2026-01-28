"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { User, Mail, LogOut, Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import Button from "@/components/ui/Button";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary/5 dark:from-neutral-900 dark:to-primary/10">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Mon <span className="text-gradient">Profil</span>
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Gérez vos informations personnelles
          </p>
        </div>

        {/* Profile Card */}
        <div className="p-6 rounded-2xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <User size={40} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {user.name || "Utilisateur"}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400">
                {user.role === "teacher" ? "Professeur" : "Élève"}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-100/50 dark:bg-neutral-700/50">
              <Mail size={20} className="text-neutral-500" />
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Email</p>
                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                  {user.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="p-6 rounded-2xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm mb-6">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
            Préférences
          </h3>
          <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-100/50 dark:bg-neutral-700/50">
            <div className="flex items-center gap-3">
              {theme === "dark" ? (
                <Moon size={20} className="text-indigo-400" />
              ) : (
                <Sun size={20} className="text-amber-500" />
              )}
              <div>
                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                  Thème
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {theme === "dark" ? "Mode sombre" : "Mode clair"}
                </p>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-lg bg-neutral-200 dark:bg-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-500 transition-colors"
            >
              Changer
            </button>
          </div>
        </div>

        {/* Logout */}
        <Button
          variant="outline"
          className="w-full justify-center text-red-600 border-red-200 hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-900/20"
          onClick={handleLogout}
        >
          <LogOut size={20} className="mr-2" />
          Se déconnecter
        </Button>
      </div>
    </div>
  );
}
