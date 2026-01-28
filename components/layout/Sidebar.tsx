"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BadgeCheck,
  Users,
  Trophy,
  GraduationCap,
  BookOpen,
  PlusCircle,
  LogOut,
  User,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

const studentNavItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/library" },
  { icon: BadgeCheck, label: "Exp. vérifiées", href: "/library/verified" },
  { icon: Users, label: "Communauté", href: "/library/community" },
  { icon: Trophy, label: "Mes badges", href: "/library/badges" },
];

const teacherNavItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/library" },
  { icon: GraduationCap, label: "Mes classes", href: "/library/classes" },
  { icon: BookOpen, label: "Mes expériences", href: "/library/experiences" },
  { icon: PlusCircle, label: "Créer", href: "/library/create-experience" },
];

export default function Sidebar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const navItems = user?.role === "teacher" ? teacherNavItems : studentNavItems;

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const isActive = (href: string) => {
    if (href === "/library") {
      return pathname === "/library";
    }
    return pathname.startsWith(href);
  };

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-r border-neutral-200/50 dark:border-neutral-800/50">
      {/* Logo */}
      <div className="p-6 border-b border-neutral-200/50 dark:border-neutral-800/50">
        <Link href="/library" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-gradient">Neuvia</h1>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Theme Toggle */}
      <div className="px-4 py-2 border-t border-neutral-200/50 dark:border-neutral-800/50">
        <div className="flex items-center justify-between px-4 py-2">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">Thème</span>
          <ThemeToggle />
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-neutral-200/50 dark:border-neutral-800/50">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <User size={20} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">
              {user?.name || user?.email}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {user?.role === "teacher" ? "Professeur" : "Élève"}
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 mt-2 rounded-xl text-neutral-600 dark:text-neutral-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-all"
        >
          <LogOut size={20} />
          <span className="font-medium">Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}
