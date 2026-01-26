import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glassmorphism?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
  glassmorphism = false,
}: CardProps) {
  const baseStyles = "rounded-xl p-6 transition-all duration-300";
  const hoverStyles = hover
    ? "hover:shadow-xl hover:scale-105 cursor-pointer"
    : "";
  const glassStyles = glassmorphism
    ? "glassmorphism"
    : "bg-white dark:bg-neutral-900 shadow-lg border border-neutral-200 dark:border-neutral-800";

  return (
    <div className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
