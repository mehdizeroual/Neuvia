"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

interface RootLayoutContentProps {
  children: React.ReactNode;
}

export default function RootLayoutContent({ children }: RootLayoutContentProps) {
  const pathname = usePathname();
  const isLibraryPage = pathname?.startsWith("/library");

  // Sur les pages library, on n'affiche pas le header/footer (géré par AppLayout)
  if (isLibraryPage) {
    return <>{children}</>;
  }

  // Sur les autres pages, on affiche le header/footer classique
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
}
