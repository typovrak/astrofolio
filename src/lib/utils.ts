import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date, day: boolean = true, month: "short" | "long" = "short") {
  return Intl.DateTimeFormat("fr", {
    month,
    day: day ? "2-digit" : undefined,
    year: "numeric",
  }).format(date);
}

export function readingTime(html: string, short: boolean = false) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min${short ? "" : " de lecture"}`;
}
