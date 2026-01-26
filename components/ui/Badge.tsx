import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "verified" | "community" | "pending" | "default";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold";

  const variants = {
    verified:
      "bg-primary/10 text-primary border border-primary/30",
    community:
      "bg-secondary/10 text-secondary border border-secondary/30",
    pending:
      "bg-neutral-300/50 text-neutral-600 dark:text-neutral-400 border border-neutral-400/30 dark:border-neutral-600/30",
    default: "bg-neutral-800 dark:bg-neutral-700 text-white border border-neutral-700 dark:border-neutral-600",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
