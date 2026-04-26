import { test_questions1 } from "./1";
import { test_questions10 } from "./10";
import { test_questions2 } from "./2";
import { test_questions3 } from "./3";
import { test_questions4 } from "./4";
import { test_questions5 } from "./5";
import { test_questions6 } from "./6";
import { test_questions7 } from "./7";
import { test_questions8 } from "./8";
import { test_questions9 } from "./9";
import { TestQuestion } from "./types";

const raw_questions: TestQuestion[] = [
  ...test_questions1,
  ...test_questions2,
  ...test_questions3,
  ...test_questions4,
  ...test_questions5,
  ...test_questions6,
  ...test_questions7,
  ...test_questions8,
  ...test_questions9,
  ...test_questions10,
];

function withIds<T>(items: Omit<T, "id">[]): (T & { id: number })[] {
  return items.map((item, i) => ({ ...item, id: i + 1 }) as T & { id: number });
}
export const test_questions = withIds<TestQuestion>(raw_questions);
