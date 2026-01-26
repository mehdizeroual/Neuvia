import { verifiedExperiences, communityExperiences } from "./mock-data";
import { Experience } from "./types";

export function getExperienceById(id: string): Experience | undefined {
  return [...verifiedExperiences, ...communityExperiences].find(
    (exp) => exp.id === id
  );
}

export function formatNumber(num: number): string {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num.toString();
}
