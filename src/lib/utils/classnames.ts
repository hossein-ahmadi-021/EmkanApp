import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateClamp(figmaValue: number, figmaDesignHeight = 1150) {
  const minSize = figmaValue * 0.8;
  const preferredSize = (figmaValue / figmaDesignHeight) * 100;
  const maxSize = figmaValue * 1.2;

  return `clamp(${minSize}px, ${preferredSize.toFixed(2)}vh, ${maxSize}px)`;
}
