import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Experience } from "@/lib/types";
import { CheckCircle2, Users, Eye, Heart, ArrowRight } from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Link href={`/library/experience/${experience.id}`} className="block h-full">
      <Card hover className="h-full flex flex-col">
        {/* Header with badges */}
        <div className="flex items-center justify-between mb-3">
          <Badge variant={experience.verified ? "verified" : "community"}>
            {experience.verified ? (
              <>
                <CheckCircle2 size={12} className="mr-1" />
                Validée EN
              </>
            ) : (
              <>
                <Users size={12} className="mr-1" />
                Communauté
              </>
            )}
          </Badge>
          <Badge variant="default">{experience.level}</Badge>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          {experience.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 flex-grow line-clamp-3">
          {experience.description}
        </p>

        {/* Subject */}
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 bg-gradient-primary text-white text-sm rounded-full font-medium">
            {experience.subject}
          </span>
        </div>

        {/* Stats for community experiences */}
        {!experience.verified && experience.author && (
          <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-4 pb-4 border-b border-neutral-200 dark:border-neutral-700">
            <span className="flex items-center gap-1">
              <Users size={14} />
              {experience.author}
            </span>
            {experience.views !== undefined && (
              <span className="flex items-center gap-1">
                <Eye size={14} />
                {experience.views}
              </span>
            )}
            {experience.likes !== undefined && (
              <span className="flex items-center gap-1">
                <Heart size={14} />
                {experience.likes}
              </span>
            )}
          </div>
        )}

        {/* CTA Button */}
        <Button variant="primary" fullWidth className="mt-auto">
          <ArrowRight size={16} className="mr-2" />
          Voir les détails
        </Button>
      </Card>
    </Link>
  );
}
