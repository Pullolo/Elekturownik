import { test_questions } from "../data/tests/tests";

export const useTestQuestions = () => {
  return {
    test_questions,
  };
};

export const useTestQuestion = (id: number) => {
  return test_questions.find((q) => q.id === id);
};
