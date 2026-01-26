import { ReactNode } from "react";
import Card from "@/components/ui/Card";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  color?: "primary" | "secondary" | "success" | "warning";
  subtitle?: string;
}

export default function StatsCard({
  title,
  value,
  icon,
  color = "primary",
  subtitle,
}: StatsCardProps) {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    success: "bg-green-500/10 text-green-500",
    warning: "bg-amber-500/10 text-amber-500",
  };

  return (
    <Card className="text-center">
      <div className={`inline-flex p-4 rounded-full ${colorClasses[color]} mb-4`}>
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
        {value}
      </h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">{title}</p>
      {subtitle && (
        <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
          {subtitle}
        </p>
      )}
    </Card>
  );
}
