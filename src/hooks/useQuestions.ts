import { questions } from "../data/questions";

export const useQuestions = () => {
  return {
    questions,
  };
};

export const useQuestion = (id: number) => {
  return questions.find((q) => q.id === id);
};
