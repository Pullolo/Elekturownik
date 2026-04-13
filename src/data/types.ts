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
  epoch_id: number;
  summary: Summary;
  characters: Character[];
  themes: Theme[];
  motifs: Motif[];

  contexts: Context[];
  quotes: Quote[];
  terms: Term[];

  exam: ExamSection;
};

export type Summary = {
  short: string; // 3–5 zdań
  detailed: string; // dłuższe, nawet kilka akapitów
  timeline?: TimelineEvent[];
};

export type TimelineEvent = {
  title: string;
  description: string;
};

export type Character = {
  name: string;
  description: string;
  traits: string[];
  role: string; // np. "bohater romantyczny"
};

export type Theme = {
  //Tematy / główne wątki
  name: string;
  description: string;
};

export type Motif = {
  //Motywy np. Mesjanizm
  name: string;
  meaning: string;
};

export type Context = {
  title: string; // np. "Kamienie na szaniec" / "Gwiezdne wojny"
  description: string;
};

export type Quote = {
  text: string;
  explanation: string;
};

export type Term = {
  name: string; //np. Groteska
  meaning: string;
};

export type ExamSection = {
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

export type Idea = {
  name: string;
  description: string;
};

// 1 = łatwy, 2 = średni, 3 = trudny
export type Difficulty = 1 | 2 | 3;

export type Genre = {
  name: string;
  characteristics: string;
  difficulty: Difficulty;
  examples: string[]; // konkretne tytuły reprezentujące gatunek
};

export type Creator = {
  name: string;
  initials: string; // np. "AM" — do avatara
  description: string;
  nationality: string; // np. "Polska"
  yearsLived: string; // np. "1798–1855"
  quote: string; // najsłynniejszy cytat
  works: string[];
};

export type Work = {
  title: string;
  book_id?: number;
  author: string;
  year: string; // np. "1834" lub "1832–1834"
  significance: string;
  difficulty: Difficulty;
};

export type HistoricalEvent = {
  name: string;
  description: string;
};

// "opozycja" = epoka jest reakcją na tamtą
// "następstwo" = naturalne przejście / kontynuacja
// "równoległa" = współistnienie
export type ComparisonType = "opozycja" | "następstwo" | "równoległa";

export type Comparison = {
  withEpoch: string;
  type: ComparisonType;
  differences: string[];
  similarities: string[];
};

export type TimelineEventEpoch = {
  year: string; // np. "1822" lub "1830–31"
  name: string;
  description: string;
};

export type EpochExamSection = {
  typicalQuestions: string[];
  keyConcepts: string[]; // słowa-klucze — wyświetlane jako tagi z trackerem
  commonMistakes: string[];
  essayTopics: string[];
  oralExamTips: string[];
  introStarters: string[];
  conclusionStarters: string[];
  quickFacts: string[];
};

// ─── Main type ────────────────────────────────────────────────────────────────

export type EpochStudy = {
  id: number;
  name:
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

  timeframe: string; // np. "XVIII / XIX w."
  description: string;

  // Nastrój epoki — 3–6 krótkich słów/fraz wyświetlanych jako kolorowe pigułki
  moodTags: string[];

  // Ciekawostka wyróżniona wizualnie w headerze
  funFact: string;

  philosophy: string[];
  worldview: string;

  keyIdeas: Idea[];
  characteristics: string[];

  genres: Genre[];
  motifs: Motif[];
  themes: Theme[];

  creators: Creator[];
  works: Work[];

  // Chronologiczna oś czasu — osobna od historicalContext
  timeline: TimelineEventEpoch[];

  historicalContext: HistoricalEvent[];
  culturalContext: string[];

  comparisons: Comparison[];

  exam: EpochExamSection;
};
