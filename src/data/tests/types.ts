export interface TestQuestion {
  id: number;
  question_type: "Otwarty" | "Zamknięty" | "Matura";
  difficulty: "Łatwy" | "Średni" | "Trudny";
}

export interface BookTestQuestion extends TestQuestion {
  epoch_id: number; //uzupelnia uzytkownik (np. 1, Antyk)
  book_id: number; //uzupelnia uzytkownik (np. 7, Iliada)
}

export interface MaturaTestQuestion extends OpenTestQuestion {
  max_points: number;
  pointsExplanations: string[];
}

export interface OpenTestQuestion extends BookTestQuestion {
  question: string;
  suggested_answer: string;
}

export interface ClosedTestQuestion extends BookTestQuestion {
  question: string;
  answers: ClosedAnswer[];
}

export type ClosedAnswer = {
  value: string;
  isCorrect: boolean;
};

export type Test = TestQuestion[];
