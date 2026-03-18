import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function yearsPassed(from: Date): number {
  const today = new Date();
  let years = today.getFullYear() - from.getFullYear();
  const yearCompleted = today.getMonth() >= from.getMonth();
  if (!yearCompleted) {
    years--;
  }
  return years;
}

export function getTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function minutesToDuration(minutes: number) {
  const hours = Math.floor((minutes % (60 * 24)) / 60);
  const mins = minutes % 60;

  const parts = [];
  if (hours) parts.push(`${hours} hr`);
  if (mins) parts.push(`${mins} min`);

  return parts.join(" ") || "0 min";
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
