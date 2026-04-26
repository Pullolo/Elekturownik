import {
  ClosedTestQuestion,
  MaturaTestQuestion,
  OpenTestQuestion,
  TestQuestion,
} from "./types";

export const test_questions2: TestQuestion[] = [
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 2,
    book_id: 8,
    question: "Kto jest podmiotem lirycznym w „Lamencie świętokrzyskim”?",
    answers: [
      { value: "Jezus Chrystus", isCorrect: false },
      { value: "Maryja, matka Jezusa", isCorrect: true },
      { value: "Apostoł Jan", isCorrect: false },
      { value: "Anioł", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 2,
    book_id: 8,
    question: "Do kogo Maryja zwraca się w pierwszych słowach utworu?",
    answers: [
      { value: "Do Boga Ojca", isCorrect: false },
      { value: "Do ludzi (wszystkich wiernych)", isCorrect: true },
      { value: "Do aniołów", isCorrect: false },
      { value: "Do apostołów", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 8,
    question: "Jaką funkcję pełni apostrofa w „Lamencie świętokrzyskim”?",
    answers: [
      { value: "Buduje komizm sytuacyjny", isCorrect: false },
      { value: "Wzmacnia emocjonalność wypowiedzi", isCorrect: true },
      { value: "Ułatwia narrację epicką", isCorrect: false },
      { value: "Tworzy opis przyrody", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 8,
    question: "Jak przedstawiona jest Maryja w utworze?",
    answers: [
      { value: "Jako władczyni i królowa niebios", isCorrect: false },
      { value: "Jako cierpiąca matka", isCorrect: true },
      { value: "Jako bezosobowy symbol religijny", isCorrect: false },
      { value: "Jako prorokini", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 8,
    question: "Jaką scenę przedstawia utwór?",
    answers: [
      { value: "Zwiastowanie", isCorrect: false },
      { value: "Narodzenie Jezusa", isCorrect: false },
      { value: "Ukrzyżowanie Jezusa", isCorrect: true },
      { value: "Zmartwychwstanie", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 2,
    book_id: 8,
    question:
      "Jak nazywa się gatunek literacki, do którego należy „Lament świętokrzyski”?",
    answers: [
      { value: "Tren", isCorrect: false },
      { value: "Plankt", isCorrect: true },
      { value: "Psalm", isCorrect: false },
      { value: "Hymn", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 2,
    book_id: 8,
    question: "Która cecha utworu wskazuje na jego ludowy charakter?",
    answers: [
      { value: "Zastosowanie języka łacińskiego", isCorrect: false },
      { value: "Bezpośrednie zwroty i prosty język", isCorrect: true },
      { value: "Rozbudowana metaforyka filozoficzna", isCorrect: false },
      { value: "Obecność narratora wszechwiedzącego", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 2,
    book_id: 8,
    question: "Jakie uczucie dominuje w utworze?",
    answers: [
      { value: "Radość", isCorrect: false },
      { value: "Gniew", isCorrect: false },
      { value: "Rozpacz", isCorrect: true },
      { value: "Obojętność", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 2,
    book_id: 8,
    question: "Wyjaśnij, czym jest plankt.",
    suggested_answer:
      "Plankt to średniowieczny utwór liryczny wyrażający żal i rozpacz, najczęściej związany ze śmiercią lub cierpieniem.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 8,
    question:
      "Jakie środki stylistyczne wzmacniają emocjonalność wypowiedzi Maryi?",
    suggested_answer:
      "Apostrofy, powtórzenia, zdrobnienia, pytania retoryczne oraz wykrzyknienia.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 8,
    question:
      "Dlaczego „Lament świętokrzyski” uznaje się za przykład humanizacji postaci Maryi?",
    suggested_answer:
      "Ponieważ Maryja ukazana jest jako zwykła matka przeżywająca ból po stracie dziecka, a nie tylko jako postać boska.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 2,
    book_id: 8,
    question: "Jaką rolę pełni zwrot do innych matek w utworze?",
    suggested_answer:
      "Maryja utożsamia się z innymi matkami i ostrzega je przed bólem utraty dziecka, co uniwersalizuje jej cierpienie.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 2,
    book_id: 8,
    question: "Jaką funkcję pełni język potoczny w utworze?",
    suggested_answer:
      "Zbliża tekst do odbiorcy i podkreśla autentyczność emocji.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 2,
    book_id: 8,
    question:
      "Wyjaśnij, na czym polega dramatyzm sytuacji przedstawionej w utworze.",
    suggested_answer:
      "Dramatyzm wynika z kontrastu między miłością matki a brutalnością śmierci syna oraz bezsilnością wobec jego cierpienia.",
  } as OpenTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 8,
    question:
      "Wyjaśnij, w jaki sposób w „Lamencie świętokrzyskim” ukazano motyw cierpienia matki. Odwołaj się do utworu.",
    suggested_answer:
      "Maryja ukazana jest jako cierpiąca matka, która bezradnie patrzy na śmierć syna i wyraża swój ból poprzez emocjonalne wypowiedzi.",
    max_points: 3,
    pointsExplanations: [
      "1 pkt – wskazanie motywu cierpienia",
      "1 pkt – odniesienie do sytuacji Maryi",
      "1 pkt – poprawna interpretacja",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 2,
    book_id: 8,
    question:
      "Porównaj sposób przedstawienia Maryi w „Lamencie świętokrzyskim” z innym znanym Ci tekstem kultury.",
    suggested_answer:
      "W „Lamencie…” Maryja jest ukazana jako cierpiąca matka, natomiast w innych tekstach (np. ikonografii) często jako dostojna królowa niebios.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – wskazanie cech Maryi w lamencie",
      "1 pkt – przywołanie innego tekstu",
      "1 pkt – porównanie",
      "1 pkt – wniosek",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 8,
    question:
      "Omów funkcję środków stylistycznych w budowaniu emocji w utworze.",
    suggested_answer:
      "Środki stylistyczne wzmacniają ekspresję, podkreślają rozpacz i angażują emocjonalnie odbiorcę.",
    max_points: 3,
    pointsExplanations: [
      "1 pkt – wskazanie środków",
      "1 pkt – ich funkcja",
      "1 pkt – poprawność językowa",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 2,
    book_id: 9,
    question: "Jaką postać przybiera Śmierć w utworze?",
    answers: [
      { value: "Pięknej kobiety", isCorrect: false },
      { value: "Rozkładającego się trupa", isCorrect: true },
      { value: "Rycerza", isCorrect: false },
      { value: "Dziecka", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 2,
    book_id: 9,
    question: "Z kim rozmawia Śmierć w utworze?",
    answers: [
      { value: "Z królem", isCorrect: false },
      { value: "Z Mistrzem Polikarpem", isCorrect: true },
      { value: "Z aniołem", isCorrect: false },
      { value: "Z rycerzem", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 9,
    question: "Jaki jest główny motyw utworu?",
    answers: [
      { value: "Miłość dworska", isCorrect: false },
      { value: "Danse macabre", isCorrect: true },
      { value: "Heroizm rycerski", isCorrect: false },
      { value: "Apokalipsa", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 9,
    question: "Jaką funkcję pełni opis Śmierci?",
    answers: [
      { value: "Upiększającą", isCorrect: false },
      { value: "Dydaktyczną i moralizatorską", isCorrect: true },
      { value: "Rozrywkową", isCorrect: false },
      { value: "Patriotyczną", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 9,
    question: "Co symbolizuje Śmierć w utworze?",
    answers: [
      { value: "Sprawiedliwość społeczną", isCorrect: false },
      { value: "Nieuchronność końca życia", isCorrect: true },
      { value: "Bogactwo", isCorrect: false },
      { value: "Miłość", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 2,
    book_id: 9,
    question: "Jaką postawę wobec Śmierci prezentuje Mistrz Polikarp?",
    answers: [
      { value: "Obojętność", isCorrect: false },
      { value: "Ciekawość i lęk", isCorrect: true },
      { value: "Złość", isCorrect: false },
      { value: "Radość", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 2,
    book_id: 9,
    question: "Która cecha NIE charakteryzuje Śmierci w utworze?",
    answers: [
      { value: "Bezstronność", isCorrect: false },
      { value: "Sprawiedliwość", isCorrect: false },
      { value: "Uległość wobec ludzi", isCorrect: true },
      { value: "Nieuchronność", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 9,
    question: "Do jakiego gatunku literackiego należy utwór?",
    answers: [
      { value: "Tragedia", isCorrect: false },
      { value: "Dialog", isCorrect: true },
      { value: "Epos", isCorrect: false },
      { value: "Sonet", isCorrect: false },
    ],
  } as ClosedTestQuestion,

  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 2,
    book_id: 9,
    question: "Wyjaśnij, czym jest motyw danse macabre.",
    suggested_answer:
      "Motyw danse macabre to przedstawienie śmierci jako siły, która porywa wszystkich ludzi bez względu na ich status społeczny.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 9,
    question: "Jakie warstwy społeczne wymienia Śmierć w utworze?",
    suggested_answer:
      "Śmierć wymienia przedstawicieli różnych stanów, np. duchownych, rycerzy, chłopów, bogatych i biednych.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 9,
    question: "Jaką funkcję pełni groteska w opisie Śmierci?",
    suggested_answer:
      "Groteska potęguje grozę i jednocześnie ośmiesza śmierć, podkreślając jej wszechobecność i nieuchronność.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 2,
    book_id: 9,
    question: "Wyjaśnij dydaktyczny charakter utworu.",
    suggested_answer:
      "Utwór ma charakter moralizatorski, przypomina o przemijalności życia i konieczności przygotowania się na śmierć.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 2,
    book_id: 9,
    question: "Jak reaguje Mistrz Polikarp na widok Śmierci?",
    suggested_answer: "Mistrz Polikarp odczuwa strach i zdziwienie.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 2,
    book_id: 9,
    question: "Jak utwór przedstawia równość ludzi wobec śmierci?",
    suggested_answer:
      "Śmierć traktuje wszystkich jednakowo, niezależnie od ich pozycji społecznej, bogactwa czy władzy.",
  } as OpenTestQuestion,

  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 9,
    question:
      "Wyjaśnij, na czym polega uniwersalny charakter rozmowy Mistrza Polikarpa ze Śmiercią. Odwołaj się do całego utworu.",
    suggested_answer:
      "Uniwersalność polega na przedstawieniu śmierci jako nieuniknionej dla wszystkich ludzi oraz poruszeniu ponadczasowych refleksji o przemijaniu.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – wskazanie motywu śmierci",
      "1 pkt – omówienie jej powszechności",
      "1 pkt – odniesienie do utworu",
      "1 pkt – poprawność językowa",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 2,
    book_id: 9,
    question:
      "Scharakteryzuj sposób przedstawienia Śmierci w utworze i wyjaśnij jego funkcję.",
    suggested_answer:
      "Śmierć ukazana jest jako rozkładający się trup, co ma funkcję dydaktyczną i moralizatorską – przypomina o przemijaniu i odstrasza od grzechu.",
    max_points: 5,
    pointsExplanations: [
      "1 pkt – opis wyglądu Śmierci",
      "2 pkt – interpretacja funkcji",
      "1 pkt – odniesienie do kontekstu średniowiecznego",
      "1 pkt – poprawność wypowiedzi",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 9,
    question: "Wyjaśnij, jakie prawdy o człowieku i świecie ukazuje utwór.",
    suggested_answer:
      "Utwór ukazuje przemijalność życia, równość wszystkich wobec śmierci oraz konieczność życia zgodnego z zasadami moralnymi.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – wskazanie przemijalności",
      "1 pkt – równość wobec śmierci",
      "1 pkt – odniesienie do moralności",
      "1 pkt – poprawność językowa",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 2,
    book_id: 10,
    question: "Kim był Roland w „Pieśni o Rolandzie”?",
    answers: [
      { value: "Królem Franków", isCorrect: false },
      { value: "Rycerzem i wasalem Karola Wielkiego", isCorrect: true },
      { value: "Zdrajcą królestwa", isCorrect: false },
      { value: "Mnichem", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 2,
    book_id: 10,
    question: "Jak nazywał się róg Rolanda?",
    answers: [
      { value: "Durendal", isCorrect: false },
      { value: "Oliwant", isCorrect: true },
      { value: "Excalibur", isCorrect: false },
      { value: "Graal", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 10,
    question: "Kto zdradził Rolanda i jego oddział?",
    answers: [
      { value: "Oliwier", isCorrect: false },
      { value: "Ganelon", isCorrect: true },
      { value: "Turpin", isCorrect: false },
      { value: "Karol Wielki", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 10,
    question: "Gdzie rozgrywa się główna bitwa w utworze?",
    answers: [
      { value: "Pod Paryżem", isCorrect: false },
      { value: "W wąwozie Roncevaux", isCorrect: true },
      { value: "Pod Rzymem", isCorrect: false },
      { value: "Na pustyni", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 10,
    question: "Jaką funkcję pełnił arcybiskup Turpin?",
    answers: [
      { value: "Był królem Saracenów", isCorrect: false },
      { value: "Był dowódcą wojsk", isCorrect: false },
      { value: "Był duchownym i rycerzem", isCorrect: true },
      { value: "Był zdrajcą", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 2,
    book_id: 10,
    question: "Dlaczego Roland początkowo nie chciał zadąć w róg?",
    answers: [
      { value: "Bał się wroga", isCorrect: false },
      { value: "Nie miał siły", isCorrect: false },
      { value: "Uważał to za oznakę tchórzostwa", isCorrect: true },
      { value: "Zgubił róg", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 2,
    book_id: 10,
    question: "Jak nazywał się miecz Rolanda?",
    answers: [
      { value: "Durendal", isCorrect: true },
      { value: "Oliwant", isCorrect: false },
      { value: "Joyeuse", isCorrect: false },
      { value: "Clarent", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 2,
    book_id: 10,
    question: "Co Roland zrobił ze swoim mieczem przed śmiercią?",
    answers: [
      { value: "Oddał go królowi", isCorrect: false },
      { value: "Zniszczył go", isCorrect: false },
      {
        value: "Próbował go zniszczyć, by nie wpadł w ręce wroga",
        isCorrect: true,
      },
      { value: "Ukrył go w ziemi", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 2,
    book_id: 10,
    question: "Wyjaśnij, czym był etos rycerski w „Pieśni o Rolandzie”.",
    suggested_answer:
      "Etos rycerski obejmował odwagę, wierność władcy, honor, gotowość do walki i poświęcenia życia za wiarę oraz ojczyznę.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 10,
    question: "Dlaczego Roland jest uznawany za bohatera tragicznego?",
    suggested_answer:
      "Roland przez swoją dumę i honor nie wzywa pomocy na czas, co prowadzi do śmierci jego i towarzyszy.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 10,
    question: "Opisz rolę religii w „Pieśni o Rolandzie”.",
    suggested_answer:
      "Religia odgrywa kluczową rolę – konflikt ma charakter walki chrześcijan z poganami, a rycerze walczą w imię Boga.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 2,
    book_id: 10,
    question: "Kim był Oliwier i jaką pełnił rolę?",
    suggested_answer:
      "Oliwier był przyjacielem Rolanda, rozsądnym rycerzem, który doradzał mu wezwanie pomocy.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 2,
    book_id: 10,
    question: "Scharakteryzuj postać Ganelona.",
    suggested_answer:
      "Ganelon był zdrajcą, kierował się pychą i zemstą, doprowadził do śmierci Rolanda poprzez zdradę.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 10,
    question: "Jakie wartości reprezentuje Roland?",
    suggested_answer:
      "Roland reprezentuje honor, odwagę, wierność królowi i religii, choć także pychę.",
  } as OpenTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 10,
    question:
      "Na podstawie znajomości całego utworu wyjaśnij, w jaki sposób „Pieśń o Rolandzie” realizuje ideał średniowiecznego rycerza.",
    suggested_answer:
      "Utwór ukazuje rycerza jako odważnego, wiernego władcy i Bogu, gotowego oddać życie w walce. Roland spełnia te cechy, choć jego pycha prowadzi do tragedii.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – wskazanie cech rycerza",
      "1 pkt – odniesienie do Rolanda",
      "1 pkt – uwzględnienie religii",
      "1 pkt – wniosek interpretacyjny",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 2,
    book_id: 10,
    question:
      "Porównaj postawy Rolanda i Oliwiera. Która z nich jest bardziej racjonalna?",
    suggested_answer:
      "Roland kieruje się honorem i dumą, Oliwier rozsądkiem. Postawa Oliwiera jest bardziej racjonalna, ponieważ dąży do uniknięcia niepotrzebnej śmierci.",
    max_points: 5,
    pointsExplanations: [
      "1 pkt – opis Rolanda",
      "1 pkt – opis Oliwiera",
      "1 pkt – porównanie",
      "1 pkt – ocena racjonalności",
      "1 pkt – uzasadnienie",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 2,
    book_id: 10,
    question: "Wyjaśnij znaczenie motywu zdrady w utworze.",
    suggested_answer:
      "Zdrada Ganelona prowadzi do tragedii i ukazuje konsekwencje złamania zasad feudalnych oraz moralnych.",
    max_points: 3,
    pointsExplanations: [
      "1 pkt – wskazanie zdrady",
      "1 pkt – opis skutków",
      "1 pkt – interpretacja znaczenia",
    ],
  } as MaturaTestQuestion,
];
