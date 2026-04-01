export type Book = {
  id: number;
  title: string;
  author: string;
  year: number | string;
  epoch: string;

  summary: Summary;
  characters: Character[];
  themes: Theme[];
  motifs: Motif[];

  contexts: Context[];
  quotes: Quote[];

  exam: ExamSection;
};

type Summary = {
  short: string; // 3–5 zdań
  detailed: string; // dłuższe
  timeline?: TimelineEvent[];
};

type TimelineEvent = {
  title: string;
  description: string;
};

type Character = {
  name: string;
  description: string;
  traits: string[];
  role: string; // np. "bohater romantyczny"
};

type Theme = {
  name: string;
  description: string;
};

type Motif = {
  name: string;
  meaning: string;
};

export type Context = {
  title: string; // np. "Kamienie na szaniec"
  description: string;
};

type Quote = {
  text: string;
  explanation: string;
};

type ExamSection = {
  possibleQuestions: string[];
  keywords: string[];
  commonMistakes: string[];
  introStarters: string[];
};

export type Question = {
  id: number;
  book: string;
  book_id: number;
  time: string;
  question: string;
  question_explanation: string;
  tips: string[];
  contexts: Context[];
  schema: {
    rule: string;
    starter: string;
  }[];
  suggested_answer: string[];
};
