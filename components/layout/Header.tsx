"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { LogOut, Library, User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-3xl border-b-2 border-white/50 dark:border-white/20 shadow-xl">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={user ? "/library" : "/"} className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-gradient">Neuvia</h1>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {user ? (
            <>
              <Link
                href="/library"
                className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors"
              >
                <Library size={20} />
                <span className="hidden sm:inline">Bibliothèque</span>
              </Link>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 dark:text-neutral-500">
                  <User size={18} />
                  <span className="text-sm hidden sm:inline">{user.email}</span>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="flex items-center gap-2"
                >
                  <LogOut size={18} />
                  <span className="hidden sm:inline">Déconnexion</span>
                </Button>
              </div>
            </>
          ) : (
            <>
              <Link
                href="/about"
                className="text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors hidden md:inline"
              >
                À propos
              </Link>
              <Link
                href="/how-it-works"
                className="text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors hidden md:inline"
              >
                Comment ça marche
              </Link>
              <Link
                href="/pricing"
                className="text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors hidden md:inline"
              >
                Tarifs
              </Link>
              <Link href="/login">
                <Button size="sm">Se connecter</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
