import { twMerge } from "tailwind-merge";

export const cx = (...inputs) => twMerge(inputs);

export function getFormattedDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
