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
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto max-w-4xl">
      <nav className="px-6 py-3 flex items-center justify-between rounded-full bg-white/20 dark:bg-white/5 backdrop-blur-2xl border border-white/30 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] ring-1 ring-inset ring-white/20 dark:ring-white/5">
        {/* Logo */}
        <Link href={user ? "/library" : "/"} className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-gradient">Neuvia</h1>
        </Link>

        {/* Navigation centrale */}
        <div className="hidden md:flex items-center gap-1">
          {!user && (
            <>
              <Link
                href="/about"
                className="px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-primary hover:bg-primary/5 rounded-full transition-all"
              >
                À propos
              </Link>
              <Link
                href="/how-it-works"
                className="px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-primary hover:bg-primary/5 rounded-full transition-all"
              >
                Comment ça marche
              </Link>
              <Link
                href="/pricing"
                className="px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-primary hover:bg-primary/5 rounded-full transition-all"
              >
                Tarifs
              </Link>
            </>
          )}
          {user && (
            <Link
              href="/library"
              className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-primary hover:bg-primary/5 rounded-full transition-all"
            >
              <Library size={18} />
              Bibliothèque
            </Link>
          )}
        </div>

        {/* Actions à droite */}
        <div className="flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100/50 dark:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400">
                <User size={16} />
                <span className="text-sm">{user.email}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-red-500 hover:bg-red-500/5 rounded-full transition-all"
              >
                <LogOut size={16} />
                <span className="hidden sm:inline">Déconnexion</span>
              </button>
            </div>
          ) : (
            <Link href="/login">
              <Button size="sm" className="rounded-full px-5">
                Se connecter
              </Button>
            </Link>
          )}

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
