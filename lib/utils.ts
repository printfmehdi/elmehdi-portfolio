import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateFromObj(input: Date): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** "Aug 2024" */
export function formatMonthYear(input: Date): string {
  return new Date(input).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

/** "Aug 2024 – Present" / "Nov 2021 – Jun 2024" */
export function formatPeriod(start: Date, end: Date | "Present", ongoing = false): string {
  const endText =
    end === "Present" || ongoing ? "Present" : formatMonthYear(end);
  return `${formatMonthYear(start)} – ${endText}`;
}

/** Human readable duration, e.g. "2 yrs 3 mos". */
export function formatDuration(start: Date, end: Date | "Present"): string {
  const s = new Date(start);
  const e = end === "Present" ? new Date() : new Date(end);
  let months =
    (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth()) + 1;
  months = Math.max(months, 1);
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rest) parts.push(`${rest} mo${rest > 1 ? "s" : ""}`);
  return parts.join(" ");
}
