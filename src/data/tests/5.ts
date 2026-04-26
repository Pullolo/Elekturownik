import {
  ClosedTestQuestion,
  MaturaTestQuestion,
  OpenTestQuestion,
  TestQuestion,
} from "./types";

export const test_questions5: TestQuestion[] = [
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 5,
    book_id: 15,
    question: "Autorem satyr „Żona modna” i „Pijaństwo” jest:",
    answers: [
      { value: "Ignacy Krasicki", isCorrect: true },
      { value: "Adam Mickiewicz", isCorrect: false },
      { value: "Jan Kochanowski", isCorrect: false },
      { value: "Juliusz Słowacki", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 5,
    book_id: 15,
    question:
      "Jaką formę literacką reprezentują utwory „Żona modna” i „Pijaństwo”?",
    answers: [
      { value: "Satyra", isCorrect: true },
      { value: "Tragedia", isCorrect: false },
      { value: "Ballada", isCorrect: false },
      { value: "Epos", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 5,
    book_id: 15,
    question: "Głównym celem satyry „Żona modna” jest krytyka:",
    answers: [
      { value: "nadmiernego przywiązania do tradycji", isCorrect: false },
      { value: "bezmyślnego naśladowania cudzoziemskich mód", isCorrect: true },
      { value: "ubóstwa szlachty", isCorrect: false },
      { value: "życia wiejskiego", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 5,
    book_id: 15,
    question:
      "Bohater „Żony modnej” decyduje się na małżeństwo przede wszystkim ze względu na:",
    answers: [
      { value: "miłość", isCorrect: false },
      { value: "korzyści materialne", isCorrect: true },
      { value: "presję rodziny", isCorrect: false },
      { value: "chęć podróży", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 5,
    book_id: 15,
    question: "W „Pijaństwie” narrator przedstawia problem alkoholizmu jako:",
    answers: [
      { value: "zjawisko zabawne i nieszkodliwe", isCorrect: false },
      { value: "poważną wadę społeczną", isCorrect: true },
      { value: "element tradycji narodowej", isCorrect: false },
      { value: "problem jednostkowy", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 5,
    book_id: 15,
    question: "Jaką funkcję pełni ironia w satyrach Krasickiego?",
    answers: [
      {
        value: "Podkreśla komizm sytuacji i wzmacnia krytykę",
        isCorrect: true,
      },
      { value: "Służy wyłącznie rozrywce czytelnika", isCorrect: false },
      { value: "Ukrywa sens utworu", isCorrect: false },
      { value: "Zastępuje morał", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 5,
    book_id: 15,
    question: "Gdzie rozgrywa się akcja „Żony modnej”?",
    answers: [
      { value: "W dworku szlacheckim", isCorrect: true },
      { value: "Na dworze królewskim", isCorrect: false },
      { value: "W mieście", isCorrect: false },
      { value: "Na polu bitwy", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 5,
    book_id: 15,
    question: "Który środek stylistyczny dominuje w „Pijaństwie”?",
    answers: [
      { value: "Dialog", isCorrect: true },
      { value: "Opis przyrody", isCorrect: false },
      { value: "Monolog liryczny", isCorrect: false },
      { value: "Narracja pierwszoosobowa refleksyjna", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 5,
    book_id: 15,
    question: "Postać żony w „Żonie modnej” jest przykładem:",
    answers: [
      { value: "idealnej gospodyni", isCorrect: false },
      { value: "kobiety rozsądnej", isCorrect: false },
      { value: "snobki i osoby rozrzutnej", isCorrect: true },
      { value: "ofiary losu", isCorrect: false },
    ],
  } as ClosedTestQuestion,

  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 5,
    book_id: 15,
    question: "Wyjaśnij, czym jest satyra jako gatunek literacki.",
    suggested_answer:
      "Satyra to utwór literacki o charakterze krytycznym i ośmieszającym, który ukazuje wady ludzkie i społeczne w celu ich napiętnowania.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 5,
    book_id: 15,
    question: "Jakie cechy oświecenia widoczne są w satyrach Krasickiego?",
    suggested_answer:
      "Widoczne są racjonalizm, dydaktyzm, krytyka wad społecznych oraz dążenie do poprawy społeczeństwa.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 5,
    book_id: 15,
    question: "Scharakteryzuj bohatera „Żony modnej”.",
    suggested_answer:
      "Bohater jest naiwnym szlachcicem, który kieruje się korzyściami materialnymi i nie przewiduje konsekwencji swojego wyboru.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 5,
    book_id: 15,
    question: "Jaką funkcję pełni morał w satyrach Krasickiego?",
    suggested_answer:
      "Morał wskazuje właściwą postawę, podsumowuje krytykę i pełni funkcję dydaktyczną.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 5,
    book_id: 15,
    question: "Jakie zjawisko społeczne krytykuje „Pijaństwo”?",
    suggested_answer:
      "Utwór krytykuje powszechne nadużywanie alkoholu wśród szlachty.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 5,
    book_id: 15,
    question: "Wyjaśnij, na czym polega komizm w „Żonie modnej”.",
    suggested_answer:
      "Komizm wynika z kontrastu między oczekiwaniami bohatera a rzeczywistością oraz z przesadnego zachowania żony.",
  } as OpenTestQuestion,

  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 5,
    book_id: 15,
    question:
      "Wyjaśnij, w jaki sposób Ignacy Krasicki wykorzystuje satyrę do krytyki społeczeństwa w „Żonie modnej”. Odwołaj się do treści utworu.",
    suggested_answer:
      "Krasicki ukazuje wady społeczne poprzez przerysowane postacie i sytuacje, krytykując snobizm, rozrzutność i brak rozsądku.",
    max_points: 3,
    pointsExplanations: [
      "1 pkt – wskazanie, że utwór ma charakter krytyczny",
      "1 pkt – omówienie przykładów wad (np. snobizm, rozrzutność)",
      "1 pkt – odniesienie do konkretnej sytuacji z utworu",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 5,
    book_id: 15,
    question:
      "Porównaj sposób przedstawienia wad ludzkich w „Pijaństwie” i „Żonie modnej”.",
    suggested_answer:
      "W obu utworach wady są ukazane poprzez wyolbrzymienie i ironię, jednak w „Pijaństwie” dominuje dialog, a w „Żonie modnej” narracja fabularna.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – wskazanie podobieństw",
      "1 pkt – wskazanie różnic",
      "1 pkt – odniesienie do formy utworów",
      "1 pkt – poprawność merytoryczna",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 5,
    book_id: 15,
    question:
      "Na podstawie znajomości satyry „Pijaństwo” wyjaśnij, jakie są skutki nałogu alkoholowego.",
    suggested_answer:
      "Skutki to utrata zdrowia, godności, majątku oraz konflikty społeczne i rodzinne.",
    max_points: 3,
    pointsExplanations: [
      "1 pkt – wskazanie skutków zdrowotnych lub społecznych",
      "1 pkt – odniesienie do utworu",
      "1 pkt – poprawność wypowiedzi",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 5,
    book_id: 36,
    question: "Kto jest autorem „Bajek”?",
    answers: [
      { value: "Ignacy Krasicki", isCorrect: true },
      { value: "Adam Mickiewicz", isCorrect: false },
      { value: "Jan Kochanowski", isCorrect: false },
      { value: "Mikołaj Rej", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 5,
    book_id: 36,
    question: "Jaką funkcję pełni morał w bajce?",
    answers: [
      { value: "Rozwija akcję", isCorrect: false },
      { value: "Nadaje rytm utworowi", isCorrect: false },
      { value: "Zawiera pouczenie lub wniosek", isCorrect: true },
      { value: "Opisuje bohaterów", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 5,
    book_id: 36,
    question: "Która cecha jest typowa dla bohaterów bajek Krasickiego?",
    answers: [
      { value: "Są postaciami historycznymi", isCorrect: false },
      { value: "Reprezentują określone cechy ludzkie", isCorrect: true },
      { value: "Nie mają charakteru alegorycznego", isCorrect: false },
      { value: "Są zawsze ludźmi", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 5,
    book_id: 36,
    question: "Jaką cechę symbolizuje lis w wielu bajkach Krasickiego?",
    answers: [
      { value: "Głupotę", isCorrect: false },
      { value: "Spryt i przebiegłość", isCorrect: true },
      { value: "Odwagę", isCorrect: false },
      { value: "Lenistwo", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 5,
    book_id: 36,
    question: "Czym charakteryzują się bajki epigramatyczne?",
    answers: [
      { value: "Rozbudowaną fabułą", isCorrect: false },
      { value: "Zwięzłością i pointą", isCorrect: true },
      { value: "Brakiem morału", isCorrect: false },
      { value: "Długimi opisami przyrody", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 5,
    book_id: 36,
    question: "Jaką postawę krytykuje bajka „Jagnię i wilcy”?",
    answers: [
      { value: "Nadmierną ambicję", isCorrect: false },
      { value: "Nadużywanie władzy przez silniejszych", isCorrect: true },
      { value: "Lenistwo", isCorrect: false },
      { value: "Brak wykształcenia", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 5,
    book_id: 36,
    question: "Jaką funkcję pełni alegoria w bajkach?",
    answers: [
      { value: "Upiększa język", isCorrect: false },
      { value: "Ukrywa znaczenie dosłowne", isCorrect: false },
      { value: "Przedstawia cechy ludzkie poprzez symbole", isCorrect: true },
      { value: "Wprowadza element fantastyczny", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 5,
    book_id: 36,
    question: "Jaki gatunek literacki reprezentują „Bajki” Krasickiego?",
    answers: [
      { value: "Tragedia", isCorrect: false },
      { value: "Bajka", isCorrect: true },
      { value: "Epos", isCorrect: false },
      { value: "Sonet", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 5,
    book_id: 36,
    question: "Jaką cechę ludzką krytykuje bajka „Malarze”?",
    answers: [
      { value: "Pycha i brak umiejętności", isCorrect: true },
      { value: "Odwaga", isCorrect: false },
      { value: "Uczciwość", isCorrect: false },
      { value: "Skromność", isCorrect: false },
    ],
  } as ClosedTestQuestion,

  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 5,
    book_id: 36,
    question: "Wyjaśnij, czym jest morał w bajce.",
    suggested_answer:
      "Morał to pouczenie lub wniosek wynikający z treści utworu, często wyrażony wprost.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 5,
    book_id: 36,
    question: "Podaj dwie cechy charakterystyczne bajek Ignacego Krasickiego.",
    suggested_answer: "Zwięzłość oraz obecność morału; alegoryczność postaci.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 5,
    book_id: 36,
    question: "Dlaczego w bajkach często występują zwierzęta?",
    suggested_answer:
      "Ponieważ symbolizują ludzkie cechy i pozwalają ukazać wady oraz zachowania ludzi w sposób alegoryczny.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 5,
    book_id: 36,
    question: "Wyjaśnij znaczenie alegorii w bajkach Krasickiego.",
    suggested_answer:
      "Alegoria polega na przedstawianiu postaci i zdarzeń jako symboli cech ludzkich, dzięki czemu bajki mają uniwersalne znaczenie moralne.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 5,
    book_id: 36,
    question: "Jaką rolę pełni ironia w bajkach Krasickiego?",
    suggested_answer:
      "Ironia służy krytyce ludzkich wad i ośmieszaniu negatywnych postaw.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 5,
    book_id: 36,
    question: "Wyjaśnij przesłanie wybranej bajki Krasickiego.",
    suggested_answer:
      "Uczeń powinien wskazać konkretną bajkę i jej morał, np. że silniejszy często wykorzystuje słabszego.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 5,
    book_id: 36,
    question: "Jakie wartości promują bajki Krasickiego?",
    suggested_answer: "Rozsądek, umiar, uczciwość oraz krytyczne myślenie.",
  } as OpenTestQuestion,

  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 5,
    book_id: 36,
    question:
      "Wyjaśnij, na czym polega dydaktyczny charakter bajek Ignacego Krasickiego. Odwołaj się do wybranych utworów.",
    suggested_answer:
      "Bajki mają charakter dydaktyczny, ponieważ zawierają morały i uczą właściwych postaw poprzez przykłady bohaterów.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – wskazanie dydaktycznego charakteru",
      "1 pkt – odwołanie do przykładu bajki",
      "1 pkt – poprawne wyjaśnienie morału",
      "1 pkt – spójność wypowiedzi",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 5,
    book_id: 36,
    question:
      "Omów funkcję alegorii w bajkach Krasickiego. W odpowiedzi uwzględnij interpretację wybranych przykładów.",
    suggested_answer:
      "Alegoria pozwala przedstawiać ludzkie cechy poprzez symbole, co czyni przekaz uniwersalnym i ponadczasowym.",
    max_points: 5,
    pointsExplanations: [
      "1 pkt – wyjaśnienie pojęcia alegorii",
      "2 pkt – przykłady z bajek",
      "1 pkt – interpretacja znaczenia",
      "1 pkt – poprawność językowa",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 5,
    book_id: 36,
    question:
      "Przeanalizuj, w jaki sposób Krasicki krytykuje ludzkie wady w swoich bajkach.",
    suggested_answer:
      "Krasicki wykorzystuje ironię, alegorię i kontrast, aby ukazać wady takie jak pycha, głupota czy niesprawiedliwość.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – wskazanie wad",
      "1 pkt – omówienie środków artystycznych",
      "1 pkt – przykład",
      "1 pkt – wnioski",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 5,
    book_id: 36,
    question:
      "Porównaj sposób przedstawiania świata w bajkach Krasickiego z rzeczywistością społeczną epoki oświecenia.",
    suggested_answer:
      "Bajki odzwierciedlają społeczne nierówności i ludzkie wady, krytykując rzeczywistość epoki poprzez alegorię.",
    max_points: 5,
    pointsExplanations: [
      "1 pkt – odniesienie do epoki",
      "2 pkt – analiza bajek",
      "1 pkt – porównanie",
      "1 pkt – wnioski",
    ],
  } as MaturaTestQuestion,
];
