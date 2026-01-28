"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import {
  LayoutDashboard,
  BadgeCheck,
  Users,
  Trophy,
  GraduationCap,
  BookOpen,
  PlusCircle,
  User,
} from "lucide-react";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

const studentNavItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Accueil", href: "/library" },
  { icon: BadgeCheck, label: "Vérifiées", href: "/library/verified" },
  { icon: Users, label: "Communauté", href: "/library/community" },
  { icon: Trophy, label: "Badges", href: "/library/badges" },
  { icon: User, label: "Profil", href: "/library/profile" },
];

const teacherNavItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Accueil", href: "/library" },
  { icon: GraduationCap, label: "Classes", href: "/library/classes" },
  { icon: BookOpen, label: "Exp.", href: "/library/experiences" },
  { icon: PlusCircle, label: "Créer", href: "/library/create-experience" },
  { icon: User, label: "Profil", href: "/library/profile" },
];

export default function MobileNav() {
  const { user } = useAuth();
  const pathname = usePathname();

  const navItems = user?.role === "teacher" ? teacherNavItems : studentNavItems;

  const isActive = (href: string) => {
    if (href === "/library") {
      return pathname === "/library";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-t border-neutral-200/50 dark:border-neutral-800/50 safe-area-bottom">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                active
                  ? "text-primary"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              <Icon size={22} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
