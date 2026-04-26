import {
  ClosedTestQuestion,
  MaturaTestQuestion,
  OpenTestQuestion,
  TestQuestion,
} from "./types";

export const test_questions9: TestQuestion[] = [
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 9,
    book_id: 23,
    question: "Kto jest głównym bohaterem powieści ?",
    answers: [
      { value: "Cezary Baryka", isCorrect: true },
      { value: "Zenon Ziembiewicz", isCorrect: false },
      { value: "Stanisław Wokulski", isCorrect: false },
      { value: "Tomasz Judym", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 9,
    book_id: 23,
    question: "Gdzie wychowywał się Cezary Baryka w dzieciństwie?",
    answers: [
      { value: "W Warszawie", isCorrect: false },
      { value: "W Baku", isCorrect: true },
      { value: "W Paryżu", isCorrect: false },
      { value: "W Wilnie", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 9,
    book_id: 23,
    question: "Kim był Seweryn Baryka?",
    answers: [
      { value: "Przyjacielem Cezarego", isCorrect: false },
      { value: "Ojcem Cezarego", isCorrect: true },
      { value: "Nauczycielem Cezarego", isCorrect: false },
      { value: "Politykiem", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 9,
    book_id: 23,
    question: "Czym były „szklane domy” w wizji Seweryna Baryki?",
    answers: [
      { value: "Realnymi budynkami w Polsce", isCorrect: false },
      { value: "Symbolem nowoczesnej, sprawiedliwej Polski", isCorrect: true },
      { value: "Miejscem pracy robotników", isCorrect: false },
      { value: "Zamkiem królewskim", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 9,
    book_id: 23,
    question:
      "Jak nazywał się majątek, do którego trafił Cezary po przyjeździe do Polski?",
    answers: [
      { value: "Korczyn", isCorrect: false },
      { value: "Nawłoć", isCorrect: true },
      { value: "Soplicowo", isCorrect: false },
      { value: "Lipce", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 9,
    book_id: 23,
    question: "Jaką postawę reprezentuje Szymon Gajowiec?",
    answers: [
      { value: "Rewolucyjną", isCorrect: false },
      { value: "Stopniowych reform", isCorrect: true },
      { value: "Anarchistyczną", isCorrect: false },
      { value: "Konserwatywną bez zmian", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 9,
    book_id: 23,
    question: "Jak kończy się los Cezarego Baryki w powieści?",
    answers: [
      { value: "Wyjeżdża za granicę", isCorrect: false },
      { value: "Zostaje politykiem", isCorrect: false },
      { value: "Dołącza do manifestacji robotniczej", isCorrect: true },
      { value: "Umiera", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 9,
    book_id: 23,
    question: "Kto jest autorem powieści ?",
    answers: [
      { value: "Bolesław Prus", isCorrect: false },
      { value: "Stefan Żeromski", isCorrect: true },
      { value: "Władysław Reymont", isCorrect: false },
      { value: "Eliza Orzeszkowa", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 9,
    book_id: 23,
    question: "Jaką funkcję pełni motyw rewolucji w utworze?",
    answers: [
      { value: "Ukazuje romantyczny zryw", isCorrect: false },
      { value: "Pokazuje chaos i destrukcję", isCorrect: true },
      { value: "Jest tłem miłosnym", isCorrect: false },
      { value: "Nie ma znaczenia", isCorrect: false },
    ],
  } as ClosedTestQuestion,

  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 9,
    book_id: 23,
    question: "Wyjaśnij znaczenie tytułu „Przedwiośnie”.",
    suggested_answer:
      "Tytuł symbolizuje etap przejściowy – czas niepewności i oczekiwania na odrodzenie Polski oraz przemiany społeczne.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 9,
    book_id: 23,
    question: "Scharakteryzuj Cezarego Barykę jako bohatera.",
    suggested_answer:
      "Cezary jest młodym idealistą, który przechodzi przemianę, poszukuje własnej drogi i krytycznie ocenia rzeczywistość społeczną.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 9,
    book_id: 23,
    question:
      "Na czym polegała wizja Polski przedstawiona przez Seweryna Barykę?",
    suggested_answer:
      "Była to utopijna wizja nowoczesnego państwa opartego na równości społecznej i rozwoju technologicznym.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 9,
    book_id: 23,
    question: "Porównaj poglądy Gajowca i Lulka.",
    suggested_answer:
      "Gajowiec reprezentuje reformizm i stopniowe zmiany, natomiast Lulek – radykalny komunizm i rewolucję.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 9,
    book_id: 23,
    question: "Jakie doświadczenia ukształtowały światopogląd Cezarego?",
    suggested_answer:
      "Rewolucja w Baku, śmierć matki, podróż do Polski oraz obserwacja nierówności społecznych.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 9,
    book_id: 23,
    question: "Jak autor ocenia rzeczywistość II Rzeczypospolitej?",
    suggested_answer:
      "Krytycznie – wskazuje na nierówności społeczne, chaos i brak realizacji ideałów niepodległości.",
  } as OpenTestQuestion,

  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 9,
    book_id: 23,
    question:
      "Wyjaśnij znaczenie motywu „szklanych domów” w kontekście całego utworu.",
    suggested_answer:
      "Motyw symbolizuje utopijną wizję nowoczesnej Polski oraz rozczarowanie rzeczywistością.",
    max_points: 3,
    pointsExplanations: [
      "1 pkt – wskazanie, że to wizja utopijna",
      "1 pkt – odniesienie do Polski",
      "1 pkt – wskazanie rozczarowania bohatera",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 9,
    book_id: 23,
    question:
      "Czy Cezary Baryka jest bohaterem pozytywnym? Uzasadnij swoją odpowiedź.",
    suggested_answer:
      "Odpowiedź powinna być uzasadniona – np. tak, bo szuka prawdy i sprawiedliwości; nie, bo jest impulsywny i niedojrzały.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – zajęcie stanowiska",
      "2 pkt – argumentacja",
      "1 pkt – odniesienie do utworu",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 9,
    book_id: 23,
    question: "Przedstaw różne wizje naprawy Polski ukazane w powieści.",
    suggested_answer:
      "Gajowiec – reformy, Lulek – rewolucja, Seweryn – utopia.",
    max_points: 5,
    pointsExplanations: [
      "1 pkt – wskazanie Gajowca",
      "1 pkt – wskazanie Lulka",
      "1 pkt – wskazanie Seweryna",
      "2 pkt – omówienie różnic",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 9,
    book_id: 23,
    question: "Omów funkcję zakończenia powieści.",
    suggested_answer:
      "Zakończenie jest otwarte i sugeruje dalsze poszukiwania drogi przez bohatera oraz niepewność przyszłości Polski.",
    max_points: 3,
    pointsExplanations: [
      "1 pkt – wskazanie otwartego zakończenia",
      "1 pkt – odniesienie do bohatera",
      "1 pkt – odniesienie do sytuacji Polski",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 9,
    book_id: 24,
    question: "Kto jest głównym bohaterem „Ferdydurke”?",
    answers: [
      { value: "Józio Kowalski", isCorrect: true },
      { value: "Miętus", isCorrect: false },
      { value: "Syfon", isCorrect: false },
      { value: "Profesor Pimko", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 9,
    book_id: 24,
    question: "Do jakiego miejsca zostaje cofnięty Józio?",
    answers: [
      { value: "Do szkoły", isCorrect: true },
      { value: "Na uniwersytet", isCorrect: false },
      { value: "Do pracy biurowej", isCorrect: false },
      { value: "Do wojska", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 9,
    book_id: 24,
    question: "Czym jest „forma” w ujęciu Gombrowicza?",
    answers: [
      { value: "Społecznym schematem narzucanym jednostce", isCorrect: true },
      { value: "Układem wersów w wierszu", isCorrect: false },
      { value: "Strukturą fabularną utworu", isCorrect: false },
      { value: "Rodzajem gatunku literackiego", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 9,
    book_id: 24,
    question: "Jaką funkcję pełni postać profesora Pimki?",
    answers: [
      { value: "Symbolizuje opresyjny system edukacji", isCorrect: true },
      { value: "Reprezentuje wolność artystyczną", isCorrect: false },
      { value: "Jest przyjacielem Józia", isCorrect: false },
      { value: "Uosabia młodość i bunt", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 9,
    book_id: 24,
    question: "Pojedynek na miny między Syfonem a Miętusem symbolizuje:",
    answers: [
      {
        value: "Absurd społecznych konfliktów i sztuczność form",
        isCorrect: true,
      },
      { value: "Realną walkę fizyczną", isCorrect: false },
      { value: "Rywalizację sportową", isCorrect: false },
      { value: "Spór polityczny", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 9,
    book_id: 24,
    question: "Jak nazywa się motyw przyprawiania „gęby”?",
    answers: [
      { value: "Narzucanie jednostce roli społecznej", isCorrect: true },
      { value: "Tworzenie maski teatralnej", isCorrect: false },
      { value: "Ukrywanie tożsamości", isCorrect: false },
      { value: "Przyjmowanie fałszywego nazwiska", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 9,
    book_id: 24,
    question:
      "Jak nazywa się młoda dziewczyna, którą obserwuje Józio w domu Młodziaków?",
    answers: [
      { value: "Zuta", isCorrect: true },
      { value: "Aniela", isCorrect: false },
      { value: "Helena", isCorrect: false },
      { value: "Iza", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 9,
    book_id: 24,
    question: "Rodzina Młodziaków reprezentuje:",
    answers: [
      { value: "Pozorną nowoczesność i liberalizm", isCorrect: true },
      { value: "Tradycyjny model rodziny", isCorrect: false },
      { value: "Arystokrację", isCorrect: false },
      { value: "Chłopstwo", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 9,
    book_id: 24,
    question: "Motyw „upupienia” oznacza:",
    answers: [
      { value: "Infantylizację i pozbawienie samodzielności", isCorrect: true },
      { value: "Proces dojrzewania", isCorrect: false },
      { value: "Awans społeczny", isCorrect: false },
      { value: "Rozwój intelektualny", isCorrect: false },
    ],
  } as ClosedTestQuestion,

  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 9,
    book_id: 24,
    question: "Wyjaśnij, czym jest „forma” w „Ferdydurke”.",
    suggested_answer:
      "Forma to narzucony jednostce schemat zachowań i ról społecznych, który ogranicza jej autentyczność.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 9,
    book_id: 24,
    question: "Na czym polega mechanizm „przyprawiania gęby”?",
    suggested_answer:
      "Polega na narzucaniu jednostce określonego wizerunku przez innych ludzi, co ogranicza jej indywidualność.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 9,
    book_id: 24,
    question: "Scharakteryzuj postać Miętusa.",
    suggested_answer:
      "Miętus to buntownik przeciwko formie, który pragnie autentyczności i próbuje ją odnaleźć poprzez prowokacyjne działania.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 9,
    book_id: 24,
    question: "Wyjaśnij znaczenie groteski w utworze.",
    suggested_answer:
      "Groteska służy ukazaniu absurdów rzeczywistości i krytyce społecznych konwenansów poprzez deformację i przerysowanie.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 9,
    book_id: 24,
    question: "Jaką funkcję pełni szkoła w powieści?",
    suggested_answer:
      "Szkoła symbolizuje system narzucający formy i ograniczający indywidualność uczniów.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 9,
    book_id: 24,
    question: "Dlaczego Józio nie może uciec od formy?",
    suggested_answer:
      "Ponieważ forma jest nieodłącznym elementem relacji społecznych i każda próba jej odrzucenia prowadzi do przyjęcia innej formy.",
  } as OpenTestQuestion,

  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 9,
    book_id: 24,
    question:
      "Na podstawie całego utworu wyjaśnij, w jaki sposób Gombrowicz ukazuje konflikt między jednostką a społeczeństwem.",
    suggested_answer:
      "Autor pokazuje, że jednostka jest nieustannie poddawana presji społecznych form, które ograniczają jej autentyczność i wolność.",
    max_points: 3,
    pointsExplanations: [
      "1 pkt – wskazanie konfliktu jednostka–społeczeństwo",
      "1 pkt – omówienie roli formy",
      "1 pkt – odwołanie do przykładu z utworu",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 9,
    book_id: 24,
    question:
      "Zinterpretuj znaczenie groteski jako środka wyrazu w „Ferdydurke”.",
    suggested_answer:
      "Groteska służy demaskowaniu sztuczności norm społecznych oraz ukazuje absurd rzeczywistości.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – definicja groteski",
      "1 pkt – wskazanie jej funkcji w utworze",
      "1 pkt – przykład z tekstu",
      "1 pkt – wniosek interpretacyjny",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 9,
    book_id: 24,
    question: "Omów problem dojrzewania w „Ferdydurke”.",
    suggested_answer:
      "Dojrzewanie jest ukazane jako proces pozorny, ponieważ bohater zostaje cofnięty do dzieciństwa i nie może osiągnąć pełnej autonomii.",
    max_points: 3,
    pointsExplanations: [
      "1 pkt – wskazanie problemu dojrzewania",
      "1 pkt – omówienie przykładu",
      "1 pkt – wniosek",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 9,
    book_id: 24,
    question: "Przeanalizuj rolę języka jako narzędzia formy w powieści.",
    suggested_answer:
      "Język w powieści jest narzędziem narzucania formy i manipulacji, utrwala schematy myślenia i ogranicza indywidualność.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – wskazanie roli języka",
      "1 pkt – omówienie związku z formą",
      "1 pkt – przykład",
      "1 pkt – wniosek",
    ],
  } as MaturaTestQuestion,
];
