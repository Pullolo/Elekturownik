import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Book, Question } from "../data/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function shuffleWithSeed<T>(arr: T[], seed: number): T[] {
  const shuffled = [...arr];
  const random = seededRandom(seed);

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export function getDailyQuestion(questions: Question[]): Question {
  const today = new Date();
  const year = today.getFullYear();

  // Day of year (0-indexed)
  const start = new Date(year, 0, 0);
  const diff = today.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24)) - 1;

  // Shuffle using year as seed — resets every year
  const shuffled = shuffleWithSeed(questions, year);

  // Cycle through if list < 365
  const index = dayOfYear % shuffled.length;
  return shuffled[index];
}

export const clamp = (text: string, maxLength: number) =>
  text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text;

export function pluralize(
  count: number,
  one: string,
  few: string,
  many: string,
): string {
  if (count === 1) return `${count} ${one}`;
  if (
    count % 10 >= 2 &&
    count % 10 <= 4 &&
    (count % 100 < 10 || count % 100 >= 20)
  )
    return `${count} ${few}`;
  return `${count} ${many}`;
}

export function getRandomPath(
  books: Book[],
  questions: Question[],
): string | null {
  const pickBook = Math.random() < 0.5;

  if (pickBook && books.length > 0) {
    const randomBook = books[Math.floor(Math.random() * books.length)];
    return `book/${randomBook.id}`;
  }

  if (questions.length > 0) {
    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];
    return `question/${randomQuestion.id}`;
  }

  // fallback if one array is empty
  if (books.length > 0) {
    const randomBook = books[Math.floor(Math.random() * books.length)];
    return `book/${randomBook.id}`;
  }

  return null;
}
