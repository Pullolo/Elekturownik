import {
  ClosedTestQuestion,
  MaturaTestQuestion,
  OpenTestQuestion,
  TestQuestion,
} from "./types";

export const test_questions3: TestQuestion[] = [
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 3,
    book_id: 11,
    question: "Kto jest autorem „Trenów”?",
    answers: [
      { value: "Mikołaj Rej", isCorrect: false },
      { value: "Jan Kochanowski", isCorrect: true },
      { value: "Piotr Skarga", isCorrect: false },
      { value: "Andrzej Frycz Modrzewski", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 3,
    book_id: 11,
    question: "Komu poświęcony jest cykl „Treny”?",
    answers: [
      { value: "Żonie poety", isCorrect: false },
      { value: "Ojcu poety", isCorrect: false },
      { value: "Córce Urszuli", isCorrect: true },
      { value: "Przyjacielowi poety", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 3,
    book_id: 11,
    question: "Ile trenów liczy cykl Jana Kochanowskiego?",
    answers: [
      { value: "15", isCorrect: false },
      { value: "19", isCorrect: true },
      { value: "21", isCorrect: false },
      { value: "12", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 3,
    book_id: 11,
    question: "Jaki gatunek literacki reprezentują „Treny”?",
    answers: [
      { value: "Epos", isCorrect: false },
      { value: "Fraszka", isCorrect: false },
      { value: "Pieśń", isCorrect: false },
      { value: "Tren", isCorrect: true },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 3,
    book_id: 11,
    question: "Który tren zawiera kryzys światopoglądowy poety?",
    answers: [
      { value: "Tren I", isCorrect: false },
      { value: "Tren V", isCorrect: false },
      { value: "Tren IX", isCorrect: true },
      { value: "Tren XIX", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 3,
    book_id: 11,
    question:
      "Do jakiego filozofa odwołuje się Kochanowski, krytykując jego poglądy w Trenach?",
    answers: [
      { value: "Arystotelesa", isCorrect: false },
      { value: "Epikura", isCorrect: false },
      { value: "Cycerona", isCorrect: false },
      { value: "Stoików", isCorrect: true },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 3,
    book_id: 11,
    question: "Który tren zawiera senne widzenie matki poety?",
    answers: [
      { value: "Tren XVII", isCorrect: false },
      { value: "Tren XIX", isCorrect: true },
      { value: "Tren XI", isCorrect: false },
      { value: "Tren XIII", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 3,
    book_id: 11,
    question: "Jaką funkcję pełni Urszulka w utworze?",
    answers: [
      { value: "Symbol niewinności i nadziei", isCorrect: true },
      { value: "Postać historyczna", isCorrect: false },
      { value: "Uosobienie śmierci", isCorrect: false },
      { value: "Aluzja polityczna", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 3,
    book_id: 11,
    question: "Wyjaśnij, czym jest tren jako gatunek literacki.",
    suggested_answer:
      "Tren to utwór żałobny poświęcony zmarłej osobie, wyrażający smutek, żal i refleksję nad śmiercią.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 3,
    book_id: 11,
    question: "Jakie emocje dominują w początkowych trenach?",
    suggested_answer:
      "Dominują smutek, rozpacz, żal i niedowierzanie po stracie dziecka.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 3,
    book_id: 11,
    question: "Na czym polega kryzys światopoglądowy poety w Trenach?",
    suggested_answer:
      "Poeta traci wiarę w stoickie i humanistyczne wartości, podważa sens cnoty i rozumu wobec cierpienia.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 3,
    book_id: 11,
    question: "Jaką funkcję pełni motyw snu w Trenach?",
    suggested_answer:
      "Motyw snu przynosi ukojenie i pocieszenie, pozwala na symboliczne spotkanie z bliskimi i odbudowę ładu światopoglądowego.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 3,
    book_id: 11,
    question: "Dlaczego „Treny” są uznawane za dzieło przełomowe?",
    suggested_answer:
      "Ponieważ przełamują konwencję trenu – są poświęcone dziecku, ukazują osobisty dramat i kryzys filozoficzny.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 3,
    book_id: 11,
    question: "Wyjaśnij znaczenie Trenu XI dla całego cyklu.",
    suggested_answer:
      "Tren XI ukazuje kulminację kryzysu – poeta kwestionuje sens cnoty i sprawiedliwości, co jest punktem zwrotnym cyklu.",
  } as OpenTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 3,
    book_id: 11,
    question:
      "Wyjaśnij, na czym polega dramat ojca w „Trenach” Jana Kochanowskiego. Odwołaj się do całego cyklu.",
    suggested_answer:
      "Dramat polega na utracie dziecka, załamaniu dotychczasowego systemu wartości oraz próbie odnalezienia sensu życia po tragedii.",
    max_points: 3,
    pointsExplanations: [
      "1 pkt – wskazanie utraty dziecka jako źródła cierpienia",
      "1 pkt – omówienie kryzysu światopoglądowego",
      "1 pkt – wskazanie próby odbudowy ładu",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 3,
    book_id: 11,
    question:
      "Zinterpretuj rolę Urszulki w „Trenach” jako postaci symbolicznej.",
    suggested_answer:
      "Urszulka symbolizuje niewinność, nadzieję oraz utracony sens życia; jej śmierć staje się impulsem do refleksji nad ludzkim losem.",
    max_points: 3,
    pointsExplanations: [
      "1 pkt – wskazanie symbolicznego charakteru postaci",
      "1 pkt – omówienie wartości, które reprezentuje",
      "1 pkt – odniesienie do funkcji w cyklu",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 3,
    book_id: 11,
    question: "Omów proces przemiany światopoglądowej poety w „Trenach”.",
    suggested_answer:
      "Poeta przechodzi od wiary w stoicyzm i harmonię do zwątpienia i buntu, by ostatecznie odzyskać równowagę dzięki refleksji i motywowi snu.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – opis początkowego światopoglądu",
      "1 pkt – ukazanie kryzysu",
      "1 pkt – opis przemiany",
      "1 pkt – wskazanie finału i odbudowy ładu",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 3,
    book_id: 12,
    question:
      "Który motyw jest charakterystyczny dla fraszek Jana Kochanowskiego?",
    answers: [
      { value: "Motyw vanitas", isCorrect: true },
      { value: "Motyw mesjanizmu", isCorrect: false },
      { value: "Motyw prometeizmu", isCorrect: false },
      { value: "Motyw katastrofizmu", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 3,
    book_id: 12,
    question: "Czym są fraszki w twórczości Kochanowskiego?",
    answers: [
      { value: "Długimi poematami epickimi", isCorrect: false },
      { value: "Krótkimi utworami o różnorodnej tematyce", isCorrect: true },
      { value: "Dramatami antycznymi", isCorrect: false },
      { value: "Pieśniami religijnymi", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 3,
    book_id: 12,
    question: 'Jaką filozofię reprezentuje pieśń "Serce roście"?',
    answers: [
      { value: "Stoicyzm", isCorrect: false },
      { value: "Epikureizm", isCorrect: true },
      { value: "Egzystencjalizm", isCorrect: false },
      { value: "Romantyzm", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 3,
    book_id: 12,
    question: "Która fraszka zawiera refleksję nad ludzką sławą?",
    answers: [
      { value: "Na zdrowie", isCorrect: false },
      { value: "O żywocie ludzkim", isCorrect: true },
      { value: "Na lipę", isCorrect: false },
      { value: "Do gór i lasów", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 3,
    book_id: 12,
    question: "Jaką funkcję pełni natura w pieśniach Kochanowskiego?",
    answers: [
      { value: "Jest wyłącznie tłem wydarzeń", isCorrect: false },
      { value: "Stanowi źródło harmonii i ładu", isCorrect: true },
      { value: "Symbolizuje chaos", isCorrect: false },
      { value: "Jest wrogiem człowieka", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 3,
    book_id: 12,
    question:
      'Jaką postawę reprezentuje podmiot liryczny w pieśni "Nie porzucaj nadzieje"?',
    answers: [
      { value: "Pesymizm", isCorrect: false },
      { value: "Stoicki spokój", isCorrect: true },
      { value: "Bunt", isCorrect: false },
      { value: "Fatalizm", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 3,
    book_id: 12,
    question: 'Kto jest autorem zbioru "Fraszki"?',
    answers: [
      { value: "Mikołaj Rej", isCorrect: false },
      { value: "Jan Kochanowski", isCorrect: true },
      { value: "Adam Mickiewicz", isCorrect: false },
      { value: "Juliusz Słowacki", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 3,
    book_id: 12,
    question: 'Fraszka "Na zdrowie" podkreśla wartość:',
    answers: [
      { value: "Bogactwa", isCorrect: false },
      { value: "Zdrowia", isCorrect: true },
      { value: "Sławy", isCorrect: false },
      { value: "Władzy", isCorrect: false },
    ],
  } as ClosedTestQuestion,

  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 3,
    book_id: 12,
    question: "Wyjaśnij, czym jest fraszka jako gatunek literacki.",
    suggested_answer:
      "Fraszka to krótki utwór poetycki o charakterze żartobliwym, refleksyjnym lub satyrycznym, często zakończony puentą.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 3,
    book_id: 12,
    question: "Jakie wartości propaguje Kochanowski w pieśniach?",
    suggested_answer:
      "Kochanowski propaguje umiar, harmonię, cnotę, życie zgodne z naturą oraz stoicki spokój i epikurejską radość życia.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 3,
    book_id: 12,
    question: "Na czym polega stoicyzm w twórczości Kochanowskiego?",
    suggested_answer:
      "Stoicyzm polega na zachowaniu równowagi duchowej, spokoju wobec zmienności losu oraz akceptacji tego, czego nie można zmienić.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 3,
    book_id: 12,
    question: 'Zinterpretuj przesłanie fraszki "O żywocie ludzkim".',
    suggested_answer:
      "Fraszka ukazuje marność ludzkiego życia i dążeń, podkreślając, że wszystko jest ulotne i zależne od losu.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 3,
    book_id: 12,
    question: "Jaką rolę pełni natura w pieśniach Kochanowskiego?",
    suggested_answer:
      "Natura jest źródłem harmonii, ładu i wzorem dla życia człowieka, zgodnego z zasadami epikureizmu i stoicyzmu.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 3,
    book_id: 12,
    question: "Omów funkcję puenty w fraszkach Kochanowskiego.",
    suggested_answer:
      "Puenta stanowi zaskakujące lub trafne podsumowanie utworu, często zawierające morał lub refleksję.",
  } as OpenTestQuestion,

  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 3,
    book_id: 12,
    question:
      "Na podstawie wybranej pieśni Jana Kochanowskiego omów, jak poeta przedstawia ideę życia szczęśliwego.",
    suggested_answer:
      "Poeta przedstawia życie szczęśliwe jako zgodne z naturą, pełne umiaru, radości i spokoju ducha, oparte na filozofii epikurejskiej i stoickiej.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – wskazanie pieśni",
      "1 pkt – omówienie idei szczęścia",
      "1 pkt – odniesienie do filozofii (stoicyzm/epikureizm)",
      "1 pkt – poprawność językowa",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 3,
    book_id: 12,
    question:
      "Na podstawie fraszek Jana Kochanowskiego przedstaw obraz człowieka renesansu.",
    suggested_answer:
      "Człowiek renesansu jest świadomy przemijania, ceni życie, naturę, rozum i harmonię, a także potrafi zachować dystans do świata.",
    max_points: 5,
    pointsExplanations: [
      "1 pkt – określenie cech człowieka renesansu",
      "2 pkt – odwołanie do konkretnych fraszek",
      "1 pkt – interpretacja",
      "1 pkt – poprawność językowa",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 3,
    book_id: 12,
    question:
      "Zinterpretuj znaczenie natury w pieśniach Jana Kochanowskiego, odwołując się do wybranego utworu.",
    suggested_answer:
      "Natura jest źródłem ładu i harmonii, daje człowiekowi ukojenie i stanowi wzór życia zgodnego z rozumem.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – wskazanie utworu",
      "1 pkt – opis roli natury",
      "1 pkt – interpretacja",
      "1 pkt – poprawność językowa",
    ],
  } as MaturaTestQuestion,
];
