import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function yearsPassed(from: Date): number{
  const today = new Date()
  let years = today.getFullYear() - from.getFullYear()
  const yearCompleted = today.getMonth() >= from.getMonth()
  if (!yearCompleted){
    years--;
  }
  return years;
}