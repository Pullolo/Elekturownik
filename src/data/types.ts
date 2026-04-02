export type Book = {
  id: number;
  title: string;
  author: string;
  year: number | string;
  epoch:
    | "Antyk"
    | "Średniowiecze"
    | "Renesans"
    | "Barok"
    | "Oświecenie"
    | "Romantyzm"
    | "Pozytywizm"
    | "Młoda Polska"
    | "XX-lecie międzywojenne"
    | "Współczesność";

  summary: Summary;
  characters: Character[];
  themes: Theme[];
  motifs: Motif[];

  contexts: Context[];
  quotes: Quote[];
  terms: Term[];

  exam: ExamSection;
};

type Summary = {
  short: string; // 3–5 zdań
  detailed: string; // dłuższe, nawet kilka akapitów
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
  //Tematy / główne wątki
  name: string;
  description: string;
};

type Motif = {
  //Motywy np. Mesjanizm
  name: string;
  meaning: string;
};

export type Context = {
  title: string; // np. "Kamienie na szaniec" / "Gwiezdne wojny"
  description: string;
};

type Quote = {
  text: string;
  explanation: string;
};

type Term = {
  name: string; //np. Groteska
  meaning: string;
};

type ExamSection = {
  possibleQuestions: string[];
  keywords: string[];
  commonMistakes: string[];
  introStarters: string[]; //jak zaczac wypowiedz
};

export type Question = {
  id: number;
  book: string; //chodzi o tytul
  book_id: number;
  time: string; //zawsze 15 min
  question: string; //pytanie jawne
  question_explanation: string; //pytanie wytlumaczone prostym jezykiem
  tips: string[]; //proste jedno lub kilko wyrazowe wskazowki na co zwrocic uwage np. "Więzienie" lub "Konsekwencje"
  contexts: Context[];
  schema: {
    //Schemat wypowiedzi
    rule: string; //np. Wstęp
    starter: string; //Przykład
  }[];
  suggested_answer: string[]; //Pełna wyczerpująca odpowiedź na pytanie jawne
};
