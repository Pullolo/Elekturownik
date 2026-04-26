import {
  ClosedTestQuestion,
  MaturaTestQuestion,
  OpenTestQuestion,
  TestQuestion,
} from "./types";

export const test_questions1: TestQuestion[] = [
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 1,
    question: "Ile dni trwało stwarzanie świata według Księgi Rodzaju?",
    answers: [
      { value: "5 dni", isCorrect: false },
      { value: "6 dni", isCorrect: true },
      { value: "7 dni", isCorrect: false },
      { value: "8 dni", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 1,
    question: "Z czego Bóg stworzył człowieka według Księgi Rodzaju?",
    answers: [
      { value: "Z ognia", isCorrect: false },
      { value: "Z prochu ziemi", isCorrect: true },
      { value: "Z kamienia", isCorrect: false },
      { value: "Z wody", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 1,
    question: "Jak nazywał się ogród, w którym żyli Adam i Ewa?",
    answers: [
      { value: "Getsemani", isCorrect: false },
      { value: "Eden", isCorrect: true },
      { value: "Synaj", isCorrect: false },
      { value: "Jerycho", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 1,
    question: "Jakiego zakazu nie przestrzegli pierwsi ludzie?",
    answers: [
      { value: "Zakazu pracy", isCorrect: false },
      {
        value: "Zakazu spożywania owocu z drzewa poznania dobra i zła",
        isCorrect: true,
      },
      { value: "Zakazu rozmowy", isCorrect: false },
      { value: "Zakazu opuszczania ogrodu", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 1,
    question: "Kto zabił Abla?",
    answers: [
      { value: "Adam", isCorrect: false },
      { value: "Noe", isCorrect: false },
      { value: "Kain", isCorrect: true },
      { value: "Set", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 1,
    question: "Jakim znakiem Bóg potwierdził przymierze po potopie?",
    answers: [
      { value: "Tęczą", isCorrect: true },
      { value: "Gwiazdą", isCorrect: false },
      { value: "Gołębicą", isCorrect: false },
      { value: "Słońcem", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 1,
    question: "Dlaczego Bóg zesłał potop?",
    answers: [
      { value: "Ludzie byli zbyt biedni", isCorrect: false },
      { value: "Ludzie byli moralnie zepsuci", isCorrect: true },
      { value: "Noe o to poprosił", isCorrect: false },
      { value: "Zabrakło żywności", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 1,
    question: "Jaką próbę wiary przeszedł Abraham?",
    answers: [
      { value: "Miał zbudować arkę", isCorrect: false },
      { value: "Miał złożyć w ofierze Izaaka", isCorrect: true },
      { value: "Miał zburzyć wieżę Babel", isCorrect: false },
      { value: "Miał opuścić Eden", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 1,
    question: "Co symbolizuje wieża Babel?",
    answers: [
      { value: "Pokorę człowieka", isCorrect: false },
      { value: "Pychę człowieka", isCorrect: true },
      { value: "Zwycięstwo dobra", isCorrect: false },
      { value: "Jedność religijną", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 1,
    question: "Jak Biblia przedstawia akt stworzenia świata?",
    answers: [
      { value: "Jako walkę bogów", isCorrect: false },
      { value: "Jako stworzenie przez słowo Boga", isCorrect: true },
      { value: "Jako przypadkowy proces", isCorrect: false },
      { value: "Jako dzieło tytanów", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 1,
    question: "Wyjaśnij, czym był grzech pierworodny.",
    suggested_answer:
      "Grzech pierworodny polegał na nieposłuszeństwie Adama i Ewy wobec Boga przez spożycie owocu z drzewa poznania dobra i zła.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 1,
    question: "Dlaczego Noe zbudował arkę?",
    suggested_answer:
      "Noe zbudował arkę na polecenie Boga, aby ocalić rodzinę i zwierzęta przed potopem zesłanym jako kara za grzechy ludzi.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 1,
    question: "Wyjaśnij znaczenie motywu Kaina i Abla w kulturze.",
    suggested_answer:
      "Motyw Kaina i Abla symbolizuje bratobójstwo, zazdrość, konflikt między braćmi oraz skutki grzechu i zbrodni.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 1,
    question: "Jaką funkcję pełni motyw potopu w Księdze Rodzaju?",
    suggested_answer:
      "Motyw potopu ukazuje karę za grzechy ludzi, ale także możliwość odrodzenia świata i nowego początku.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 1,
    question: "Scharakteryzuj Abrahama jako wzór człowieka wierzącego.",
    suggested_answer:
      "Abraham ufa Bogu bezwarunkowo, jest posłuszny Jego poleceniom i gotów do największego poświęcenia, nawet ofiary z syna.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 1,
    question: "Wyjaśnij symboliczne znaczenie ogrodu Eden.",
    suggested_answer:
      "Ogród Eden symbolizuje raj, niewinność człowieka, harmonię z Bogiem i naturą oraz utracone szczęście.",
  } as OpenTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 1,
    question:
      "Omów motyw nieposłuszeństwa człowieka wobec Boga w Księdze Rodzaju. Odwołaj się do historii Adama i Ewy oraz jednego innego przykładu.",
    suggested_answer:
      "Motyw nieposłuszeństwa ukazuje skutki przekroczenia boskiego prawa. Adam i Ewa tracą raj, a budowniczowie wieży Babel zostają ukarani pomieszaniem języków.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – omówienie historii Adama i Ewy",
      "1 pkt – wskazanie drugiego przykładu",
      "1 pkt – wyjaśnienie konsekwencji nieposłuszeństwa",
      "1 pkt – trafny wniosek interpretacyjny",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 1,
    question:
      "Wyjaśnij, na czym polega biblijna koncepcja człowieka jako istoty wolnej, ale odpowiedzialnej za swoje wybory.",
    suggested_answer:
      "Człowiek ma wolną wolę i może wybierać między dobrem a złem, ale ponosi konsekwencje swoich decyzji, jak Adam i Ewa czy Kain.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – wyjaśnienie pojęcia wolnej woli",
      "1 pkt – odwołanie do przykładu z Księgi Rodzaju",
      "1 pkt – omówienie konsekwencji wyborów",
      "1 pkt – poprawny wniosek",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 1,
    question:
      "Czy cierpienie zawsze jest karą za grzech? Rozważ problem na podstawie Księgi Rodzaju.",
    suggested_answer:
      "Cierpienie często wynika z grzechu, ale może też być próbą wiary, jak w przypadku Abrahama. Nie zawsze jest wyłącznie karą.",
    max_points: 5,
    pointsExplanations: [
      "1 pkt – zajęcie stanowiska",
      "1 pkt – odwołanie do przykładu",
      "1 pkt – poprawna interpretacja",
      "1 pkt – uzasadnienie stanowiska",
      "1 pkt – spójny wniosek",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 1,
    question:
      "Omów motyw przymierza Boga z człowiekiem na podstawie Księgi Rodzaju.",
    suggested_answer:
      "Przymierze z Noem i Abrahamem pokazuje relację opartą na zaufaniu, posłuszeństwie oraz Bożej obietnicy i miłosierdziu.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – wyjaśnienie pojęcia przymierza",
      "1 pkt – odwołanie do przykładu",
      "1 pkt – omówienie znaczenia relacji Bóg–człowiek",
      "1 pkt – trafny wniosek",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 2,
    question: "Kim był Hiob według Biblii?",
    answers: [
      { value: "Królem Izraela", isCorrect: false },
      { value: "Sprawiedliwym i bogobojnym człowiekiem", isCorrect: true },
      { value: "Prorokiem", isCorrect: false },
      { value: "Kapłanem świątynnym", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 2,
    question: "Kto wystawił Hioba na próbę?",
    answers: [
      { value: "Anioł", isCorrect: false },
      { value: "Szatan za zgodą Boga", isCorrect: true },
      { value: "Król", isCorrect: false },
      { value: "Sam Hiob", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 2,
    question: "Jakie nieszczęścia spotkały Hioba?",
    answers: [
      { value: "Utrata zdrowia, majątku i dzieci", isCorrect: true },
      { value: "Wygnanie z kraju", isCorrect: false },
      { value: "Utrata władzy", isCorrect: false },
      { value: "Śmierć żony", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 2,
    question: "Jaką postawę reprezentuje Hiob wobec cierpienia?",
    answers: [
      { value: "Bunt i odrzucenie Boga", isCorrect: false },
      { value: "Pokorę i wiarę", isCorrect: true },
      { value: "Obojętność", isCorrect: false },
      { value: "Radość", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 2,
    question: "Jaką funkcję pełnią przyjaciele Hioba w utworze?",
    answers: [
      { value: "Pomagają mu materialnie", isCorrect: false },
      {
        value: "Reprezentują tradycyjne przekonanie o karze za grzechy",
        isCorrect: true,
      },
      { value: "Są wysłannikami Boga", isCorrect: false },
      { value: "Namawiają go do ucieczki", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 2,
    question: "Jak reaguje żona Hioba na jego cierpienie?",
    answers: [
      { value: "Wspiera go duchowo", isCorrect: false },
      { value: "Namawia go do bluźnierstwa przeciw Bogu", isCorrect: true },
      { value: "Opuszcza go", isCorrect: false },
      { value: "Modli się za niego", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 2,
    question: "Jak kończy się historia Hioba?",
    answers: [
      { value: "Umiera w cierpieniu", isCorrect: false },
      { value: "Odzyskuje zdrowie i majątek", isCorrect: true },
      { value: "Zostaje królem", isCorrect: false },
      { value: "Zostaje wygnany", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 2,
    question: "Jakie przesłanie niesie Księga Hioba?",
    answers: [
      { value: "Cierpienie zawsze jest karą za grzechy", isCorrect: false },
      { value: "Cierpienie może dotknąć niewinnych", isCorrect: true },
      { value: "Bóg nie ingeruje w życie ludzi", isCorrect: false },
      { value: "Człowiek powinien odrzucić wiarę", isCorrect: false },
    ],
  } as ClosedTestQuestion,

  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 2,
    question: "Kim był Hiob i jakie cechy go charakteryzowały?",
    suggested_answer:
      "Hiob był sprawiedliwym, bogobojnym i uczciwym człowiekiem, który unikał zła.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 2,
    question: "Wyjaśnij, na czym polegała próba Hioba.",
    suggested_answer:
      "Hiob został poddany próbie przez Szatana za zgodą Boga – stracił majątek, dzieci i zdrowie, aby sprawdzić jego wiarę.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 2,
    question: "Jak Hiob reagował na swoje cierpienie?",
    suggested_answer:
      "Hiob zachował wiarę i pokorę, choć zadawał pytania o sens cierpienia.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 2,
    question: "Jaką rolę odgrywają przyjaciele Hioba?",
    suggested_answer:
      "Przyjaciele próbują przekonać Hioba, że cierpi za grzechy, reprezentując tradycyjne przekonania religijne.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 2,
    question: "Wyjaśnij sens zakończenia Księgi Hioba.",
    suggested_answer:
      "Zakończenie ukazuje nagrodę za wierność i podkreśla, że Bóg ma plan, którego człowiek nie zawsze rozumie.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 2,
    question: "Co Hiob utracił podczas próby?",
    suggested_answer: "Hiob stracił dzieci, majątek oraz zdrowie.",
  } as OpenTestQuestion,

  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 2,
    question:
      "Na podstawie znajomości Księgi Hioba wyjaśnij, czy cierpienie zawsze jest karą za grzechy.",
    suggested_answer:
      "Cierpienie nie zawsze jest karą za grzechy – Hiob był niewinny, a mimo to cierpiał.",
    max_points: 2,
    pointsExplanations: [
      "1 pkt – wskazanie, że Hiob był niewinny",
      "1 pkt – wniosek, że cierpienie nie zawsze jest karą",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 2,
    question: "Omów postawę Hioba wobec Boga w obliczu cierpienia.",
    suggested_answer:
      "Hiob zachowuje wiarę i pokorę wobec Boga, mimo cierpienia i niezrozumienia swojej sytuacji.",
    max_points: 3,
    pointsExplanations: [
      "1 pkt – opis cierpienia Hioba",
      "1 pkt – wskazanie jego wiary/pokory",
      "1 pkt – wniosek interpretacyjny",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 2,
    question:
      "Wyjaśnij znaczenie postawy przyjaciół Hioba dla interpretacji utworu.",
    suggested_answer:
      "Przyjaciele reprezentują przekonanie o karze za grzechy, co kontrastuje z niewinnością Hioba.",
    max_points: 2,
    pointsExplanations: [
      "1 pkt – opis poglądów przyjaciół",
      "1 pkt – wskazanie kontrastu z postawą Hioba",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 2,
    question:
      "Odwołując się do Księgi Hioba, rozważ problem sensu cierpienia w życiu człowieka.",
    suggested_answer:
      "Cierpienie może mieć sens niezrozumiały dla człowieka, być próbą wiary lub elementem boskiego planu.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – przedstawienie problemu cierpienia",
      "1 pkt – odwołanie do Hioba",
      "1 pkt – interpretacja sensu cierpienia",
      "1 pkt – logiczna argumentacja",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 3,
    question: "Które zdanie najlepiej oddaje główną myśl Księgi Koheleta?",
    answers: [
      {
        value: "Człowiek może osiągnąć pełne szczęście dzięki bogactwu.",
        isCorrect: false,
      },
      {
        value: "Życie ludzkie jest marnością i przemijaniem.",
        isCorrect: true,
      },
      { value: "Najważniejsza jest wiedza naukowa.", isCorrect: false },
      {
        value: "Człowiek ma pełną kontrolę nad swoim losem.",
        isCorrect: false,
      },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 3,
    question:
      "Jak brzmi charakterystyczne powtarzające się stwierdzenie w Księdze Koheleta?",
    answers: [
      { value: "Miłość jest najważniejsza.", isCorrect: false },
      { value: "Marność nad marnościami.", isCorrect: true },
      { value: "Czas to pieniądz.", isCorrect: false },
      { value: "Człowiek jest panem świata.", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 3,
    question: "Kim jest podmiot mówiący w Księdze Koheleta?",
    answers: [
      { value: "Król Dawid", isCorrect: false },
      { value: "Kohelet – mędrzec i nauczyciel", isCorrect: true },
      { value: "Prorok Eliasz", isCorrect: false },
      { value: "Hiob", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 3,
    question: "Jaką postawę wobec życia zaleca Kohelet?",
    answers: [
      { value: "Całkowite odrzucenie świata", isCorrect: false },
      {
        value: "Umiarkowane korzystanie z życia i akceptację losu",
        isCorrect: true,
      },
      { value: "Nieustanną walkę o władzę", isCorrect: false },
      { value: "Unikanie wszelkiej pracy", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 3,
    question: "Co według Koheleta jest niezmienne w świecie?",
    answers: [
      { value: "Bogactwo ludzi", isCorrect: false },
      { value: "Porządek natury i cykliczność zdarzeń", isCorrect: true },
      { value: "Władza królów", isCorrect: false },
      { value: "Postęp technologiczny", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 3,
    question: "Jak Kohelet ocenia ludzką mądrość?",
    answers: [
      { value: "Jest całkowicie bezużyteczna", isCorrect: false },
      {
        value: "Jest lepsza od głupoty, ale nie daje pełnego szczęścia",
        isCorrect: true,
      },
      { value: "Zapewnia nieśmiertelność", isCorrect: false },
      { value: "Nie ma żadnego znaczenia", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 3,
    question: "Co symbolizuje słowo „marność” w Księdze Koheleta?",
    answers: [
      { value: "Bogactwo", isCorrect: false },
      { value: "Przemijanie i nietrwałość życia", isCorrect: true },
      { value: "Siłę człowieka", isCorrect: false },
      { value: "Wieczność", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 3,
    question:
      "Jaką funkcję pełni motyw „czasów” (np. „jest czas rodzenia i czas umierania”)?",
    answers: [
      { value: "Podkreśla chaos świata", isCorrect: false },
      { value: "Ukazuje porządek i rytm życia ludzkiego", isCorrect: true },
      { value: "Neguje sens życia", isCorrect: false },
      { value: "Promuje aktywność społeczną", isCorrect: false },
    ],
  } as ClosedTestQuestion,

  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 3,
    question: "Wyjaśnij znaczenie zwrotu „marność nad marnościami”.",
    suggested_answer:
      "Zwrot ten oznacza, że wszystko na świecie jest przemijające, nietrwałe i pozbawione trwałego sensu.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 3,
    question: "Jak Kohelet rozumie szczęście człowieka?",
    suggested_answer:
      "Szczęście polega na cieszeniu się chwilą, prostymi przyjemnościami życia i akceptacji tego, co przynosi los.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 3,
    question:
      "Jaką rolę odgrywa Bóg w wizji świata przedstawionej w Księdze Koheleta?",
    suggested_answer:
      "Bóg jest najwyższą instancją, która rządzi światem i wyznacza los człowieka, choć jego zamiary są dla ludzi nie do końca poznawalne.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 3,
    question: "Wyjaśnij, dlaczego Kohelet uznaje ludzką pracę za „marność”.",
    suggested_answer:
      "Ponieważ efekty pracy są nietrwałe, przemijają, a człowiek nie ma pewności, kto odziedziczy jego dorobek.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 3,
    question:
      "Podaj przykład jednego z przeciwstawnych „czasów” wymienionych w utworze.",
    suggested_answer: "Np. czas rodzenia i czas umierania.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 3,
    question: "Na czym polega pesymizm Koheleta?",
    suggested_answer:
      "Polega na przekonaniu, że życie jest przemijające, pozbawione trwałego sensu, a człowiek nie ma wpływu na swój los.",
  } as OpenTestQuestion,

  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 3,
    question:
      "Wyjaśnij sens fragmentu: „Wszystko ma swój czas”. Odwołaj się do Księgi Koheleta.",
    suggested_answer:
      "Fragment wskazuje na uporządkowany rytm świata, w którym każde wydarzenie ma swoje miejsce i moment. Człowiek powinien zaakceptować ten porządek.",
    max_points: 2,
    pointsExplanations: [
      "1 pkt – wyjaśnienie znaczenia fragmentu (cykliczność życia)",
      "1 pkt – odniesienie do sensu utworu",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 3,
    question:
      "Czy Księga Koheleta przedstawia pesymistyczną wizję świata? Uzasadnij, odwołując się do utworu.",
    suggested_answer:
      "Tak, ponieważ podkreśla przemijanie i marność życia, ale zawiera też elementy umiarkowanego optymizmu – zachętę do cieszenia się chwilą.",
    max_points: 3,
    pointsExplanations: [
      "1 pkt – zajęcie stanowiska",
      "1 pkt – argument odwołujący się do treści",
      "1 pkt – rozwinięcie i uzasadnienie",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 3,
    question:
      "Na podstawie Księgi Koheleta omów stosunek człowieka do przemijania.",
    suggested_answer:
      "Człowiek powinien zaakceptować przemijanie jako naturalny element życia i cieszyć się teraźniejszością.",
    max_points: 2,
    pointsExplanations: [
      "1 pkt – wskazanie przemijania jako tematu",
      "1 pkt – omówienie postawy człowieka",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 3,
    question:
      "Porównaj wizję życia w Księdze Koheleta z innym znanym Ci tekstem kultury.",
    suggested_answer:
      "Np. porównanie z filozofią stoicką – podobieństwo w akceptacji losu i umiarkowaniu.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – wskazanie drugiego tekstu",
      "1 pkt – opis wizji Koheleta",
      "1 pkt – opis drugiego tekstu",
      "1 pkt – porównanie",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 4,
    question: "Kto jest autorem Apokalipsy św. Jana według tradycji?",
    answers: [
      { value: "Św. Piotr", isCorrect: false },
      { value: "Św. Jan Apostoł", isCorrect: true },
      { value: "Św. Paweł", isCorrect: false },
      { value: "Św. Marek", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 4,
    question: "Na jakiej wyspie przebywał autor Apokalipsy?",
    answers: [
      { value: "Kreta", isCorrect: false },
      { value: "Cypr", isCorrect: false },
      { value: "Patmos", isCorrect: true },
      { value: "Rodos", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 4,
    question: "Ile pieczęci znajduje się na księdze otwieranej przez Baranka?",
    answers: [
      { value: "5", isCorrect: false },
      { value: "6", isCorrect: false },
      { value: "7", isCorrect: true },
      { value: "12", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 4,
    question: "Co symbolizują czterej jeźdźcy Apokalipsy?",
    answers: [
      { value: "Cztery pory roku", isCorrect: false },
      { value: "Nieszczęścia spadające na ludzkość", isCorrect: true },
      { value: "Cztery żywioły", isCorrect: false },
      { value: "Cztery Ewangelie", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 4,
    question: "Jaką liczbą oznaczono Bestię?",
    answers: [
      { value: "777", isCorrect: false },
      { value: "666", isCorrect: true },
      { value: "333", isCorrect: false },
      { value: "999", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 4,
    question: "Kim jest Baranek w Apokalipsie?",
    answers: [
      { value: "Aniołem", isCorrect: false },
      { value: "Chrystusem", isCorrect: true },
      { value: "Prorokiem", isCorrect: false },
      { value: "Jednym z apostołów", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 4,
    question: "Ile trąb ogłaszają aniołowie w Apokalipsie?",
    answers: [
      { value: "6", isCorrect: false },
      { value: "7", isCorrect: true },
      { value: "10", isCorrect: false },
      { value: "12", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 4,
    question: "Czym jest Nowe Jeruzalem?",
    answers: [
      { value: "Miastem grzeszników", isCorrect: false },
      { value: "Symbolicznym obrazem zbawienia", isCorrect: true },
      { value: "Miejscem kary", isCorrect: false },
      { value: "Świątynią zniszczoną", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 4,
    question: "Wyjaśnij znaczenie terminu „apokalipsa”.",
    suggested_answer:
      "Apokalipsa oznacza objawienie, odsłonięcie tajemnicy, szczególnie dotyczącej końca świata i losów ludzkości.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 4,
    question: "Jaką funkcję pełni symbolika w Apokalipsie św. Jana?",
    suggested_answer:
      "Symbolika służy ukazaniu rzeczywistości duchowej i eschatologicznej w sposób obrazowy, trudny do dosłownej interpretacji.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 4,
    question: "Kim jest Bestia w Apokalipsie i co symbolizuje?",
    suggested_answer:
      "Bestia symbolizuje zło, siły przeciwników Boga oraz systemy prześladowcze wobec wiernych.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 4,
    question: "Wyjaśnij znaczenie motywu Sądu Ostatecznego w Apokalipsie.",
    suggested_answer:
      "Sąd Ostateczny ukazuje ostateczne rozliczenie ludzkości, triumf dobra nad złem i sprawiedliwość Bożą.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 4,
    question: "Jaką rolę odgrywają aniołowie w Apokalipsie?",
    suggested_answer:
      "Aniołowie pełnią funkcję posłańców Boga, wykonują Jego wyroki i ogłaszają kolejne etapy wydarzeń apokaliptycznych.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 4,
    question: "Zinterpretuj symbolikę liczby siedem w Apokalipsie.",
    suggested_answer:
      "Liczba siedem symbolizuje pełnię, doskonałość i boski porządek, co widać w siedmiu pieczęciach, trąbach i czaszach.",
  } as OpenTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 4,
    question:
      "Wyjaśnij symboliczne znaczenie czterech jeźdźców Apokalipsy i ich rolę w wizji końca świata.",
    suggested_answer:
      "Czterej jeźdźcy symbolizują wojny, głód, zarazę i śmierć. Ukazują katastrofy poprzedzające koniec świata.",
    max_points: 3,
    pointsExplanations: [
      "1 pkt – wskazanie czterech jeźdźców jako symboli",
      "1 pkt – poprawne przypisanie znaczeń (wojna, głód, śmierć itd.)",
      "1 pkt – odniesienie do wizji końca świata",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 4,
    question:
      "Omów funkcję symboliki w Apokalipsie św. Jana, odwołując się do wybranych przykładów.",
    suggested_answer:
      "Symbolika w Apokalipsie pozwala ukazać rzeczywistość duchową, np. Bestia jako zło, Baranek jako Chrystus, liczba 7 jako pełnia.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – określenie funkcji symboliki",
      "1 pkt – podanie pierwszego przykładu",
      "1 pkt – podanie drugiego przykładu",
      "1 pkt – poprawna interpretacja",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 4,
    question:
      "Przedstaw wizję końca świata w Apokalipsie i jej znaczenie dla wierzących.",
    suggested_answer:
      "Apokalipsa ukazuje koniec świata jako triumf dobra nad złem i zapowiedź zbawienia dla sprawiedliwych.",
    max_points: 3,
    pointsExplanations: [
      "1 pkt – opis wizji końca świata",
      "1 pkt – wskazanie walki dobra ze złem",
      "1 pkt – odniesienie do znaczenia dla wierzących",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 5,
    question: "Kto był najwyższym bogiem w mitologii greckiej?",
    answers: [
      { value: "Hades", isCorrect: false },
      { value: "Zeus", isCorrect: true },
      { value: "Posejdon", isCorrect: false },
      { value: "Apollo", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 5,
    question: "Który z bogów władał morzami?",
    answers: [
      { value: "Zeus", isCorrect: false },
      { value: "Hades", isCorrect: false },
      { value: "Posejdon", isCorrect: true },
      { value: "Ares", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 5,
    question: "Kim był Prometeusz?",
    answers: [
      { value: "Bogiem wojny", isCorrect: false },
      {
        value: "Tytanem, który stworzył ludzi i dał im ogień",
        isCorrect: true,
      },
      { value: "Królem Teb", isCorrect: false },
      { value: "Synem Zeusa", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 5,
    question: "Jak miał na imię bohater, który pokonał Minotaura?",
    answers: [
      { value: "Perseusz", isCorrect: false },
      { value: "Tezeusz", isCorrect: true },
      { value: "Herakles", isCorrect: false },
      { value: "Odyseusz", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 5,
    question: "Czym była nić Ariadny?",
    answers: [
      { value: "Magiczny miecz", isCorrect: false },
      { value: "Sposób na odnalezienie drogi w labiryncie", isCorrect: true },
      { value: "Zaklęcie", isCorrect: false },
      { value: "Zbroja", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 5,
    question: "Jaką karę poniósł Syzyf?",
    answers: [
      { value: "Wieczne toczenie głazu pod górę", isCorrect: true },
      { value: "Zamiana w kamień", isCorrect: false },
      { value: "Wieczne błądzenie w labiryncie", isCorrect: false },
      { value: "Utrata pamięci", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 5,
    question: "Kto był matką Achillesa?",
    answers: [
      { value: "Hera", isCorrect: false },
      { value: "Tetyda", isCorrect: true },
      { value: "Afrodyta", isCorrect: false },
      { value: "Demeter", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 5,
    question: "Wyjaśnij, kim był Herakles.",
    suggested_answer:
      "Herakles był herosem, synem Zeusa i Alkmeny, znanym z wykonania dwunastu prac.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 5,
    question: "Na czym polegała kara Prometeusza?",
    suggested_answer:
      "Prometeusz był przykuty do skały, a orzeł codziennie wyjadał mu wątrobę, która odrastała.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 5,
    question: 'Wyjaśnij pojęcie "mit".',
    suggested_answer:
      "Mit to opowieść wyjaśniająca powstanie świata, bogów, zjawisk przyrody i losów człowieka.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 5,
    question: "Scharakteryzuj postać Dedala.",
    suggested_answer:
      "Dedal był wynalazcą i budowniczym labiryntu, symbolem rozumu i ludzkiej pomysłowości.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 5,
    question: "Co symbolizuje mit o Syzyfie?",
    suggested_answer:
      "Symbolizuje bezsensowny, wieczny trud oraz ludzkie zmaganie z losem.",
  } as OpenTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 5,
    question:
      "Wyjaśnij znaczenie mitu o Prometeuszu i jego aktualność we współczesnym świecie.",
    suggested_answer:
      "Mit ukazuje poświęcenie dla dobra ludzkości i bunt wobec władzy. Jest aktualny jako symbol walki o postęp.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt za wyjaśnienie treści mitu",
      "1 pkt za interpretację postawy Prometeusza",
      "1 pkt za wskazanie uniwersalnych wartości",
      "1 pkt za odniesienie do współczesności",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 5,
    question: "Porównaj postawy Dedala i Ikara.",
    suggested_answer:
      "Dedal symbolizuje rozum i rozwagę, Ikar – młodzieńczą brawurę i lekkomyślność.",
    max_points: 5,
    pointsExplanations: [
      "1 pkt za opis Dedala",
      "1 pkt za opis Ikara",
      "1 pkt za porównanie postaw",
      "1 pkt za interpretację symboliczną",
      "1 pkt za poprawność językową",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 5,
    question: 'Na podstawie mitologii wyjaśnij pojęcie "hybris".',
    suggested_answer:
      "Hybris to pycha wobec bogów, prowadząca do kary, np. w micie o Ikarze.",
    max_points: 3,
    pointsExplanations: [
      "1 pkt za definicję",
      "1 pkt za przykład",
      "1 pkt za wyjaśnienie skutków",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 6,
    question: "Kto jest głównym bohaterem „Iliady”?",
    answers: [
      { value: "Odyseusz", isCorrect: false },
      { value: "Achilles", isCorrect: true },
      { value: "Hektor", isCorrect: false },
      { value: "Agamemnon", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 6,
    question: "O jakie miasto toczy się wojna opisana w „Iliadzie”?",
    answers: [
      { value: "Sparta", isCorrect: false },
      { value: "Teby", isCorrect: false },
      { value: "Troja", isCorrect: true },
      { value: "Ateny", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 6,
    question: "Co było bezpośrednią przyczyną gniewu Achillesa?",
    answers: [
      { value: "Śmierć Patroklosa", isCorrect: false },
      { value: "Odebranie mu Bryzeidy przez Agamemnona", isCorrect: true },
      { value: "Klęska Greków", isCorrect: false },
      { value: "Zdrada Odyseusza", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 6,
    question: "Kim był Hektor?",
    answers: [
      { value: "Królem Sparty", isCorrect: false },
      { value: "Najdzielniejszym wojownikiem Trojan", isCorrect: true },
      { value: "Synem Achillesa", isCorrect: false },
      { value: "Bogiem wojny", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 6,
    question: "Kto zabił Patroklosa?",
    answers: [
      { value: "Achilles", isCorrect: false },
      { value: "Hektor", isCorrect: true },
      { value: "Parys", isCorrect: false },
      { value: "Agamemnon", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 6,
    question: "Który bóg szczególnie wspierał Trojan?",
    answers: [
      { value: "Atena", isCorrect: false },
      { value: "Apollo", isCorrect: true },
      { value: "Hera", isCorrect: false },
      { value: "Posejdon", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 6,
    question: "Jak kończy się pojedynek Achillesa z Hektorem?",
    answers: [
      { value: "Remisem", isCorrect: false },
      { value: "Śmiercią Achillesa", isCorrect: false },
      { value: "Śmiercią Hektora", isCorrect: true },
      { value: "Ucieczką obu bohaterów", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 6,
    question: "Kim był Patroklos dla Achillesa?",
    answers: [
      { value: "Bratem", isCorrect: false },
      { value: "Przyjacielem", isCorrect: true },
      { value: "Wrogiem", isCorrect: false },
      { value: "Niewolnikiem", isCorrect: false },
    ],
  } as ClosedTestQuestion,

  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 6,
    question: "Kim był Achilles i z czego słynął?",
    suggested_answer:
      "Achilles był największym wojownikiem Greków, słynącym z niezwykłej siły, odwagi i niemal nieśmiertelności.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 6,
    question: "Wyjaśnij znaczenie gniewu Achillesa dla przebiegu akcji.",
    suggested_answer:
      "Gniew Achillesa powoduje jego wycofanie się z walki, co prowadzi do strat Greków i zmienia przebieg wojny.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 6,
    question: "Opisz postać Hektora.",
    suggested_answer:
      "Hektor był odważnym i odpowiedzialnym obrońcą Troi, oddanym rodzinie i ojczyźnie.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 6,
    question: "Na czym polega tragizm bohaterów w „Iliadzie”?",
    suggested_answer:
      "Bohaterowie są uwikłani w konflikt między losem a wolą bogów, nie mogą uniknąć przeznaczenia, co prowadzi do ich tragedii.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 6,
    question: "Jaką rolę odgrywają bogowie w „Iliadzie”?",
    suggested_answer:
      "Bogowie ingerują w losy ludzi, wspierają różne strony konfliktu i wpływają na przebieg wydarzeń.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 6,
    question: "Wyjaśnij motyw heroizmu w „Iliadzie”.",
    suggested_answer:
      "Heroizm polega na odwadze, walce o honor i sławę, nawet kosztem życia.",
  } as OpenTestQuestion,

  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 6,
    question:
      "Omów motyw honoru w „Iliadzie”, odwołując się do wybranych postaci.",
    suggested_answer:
      "Honor jest kluczową wartością dla bohaterów, np. Achilles walczy o swoją godność, a Hektor o honor Troi.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – wskazanie motywu honoru",
      "1 pkt – przykład Achillesa",
      "1 pkt – przykład Hektora",
      "1 pkt – wniosek interpretacyjny",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 6,
    question: "Przedstaw rolę przeznaczenia w „Iliadzie”.",
    suggested_answer:
      "Przeznaczenie determinuje los bohaterów, którzy nie mogą go zmienić mimo prób.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – wskazanie roli fatum",
      "1 pkt – przykład bohatera",
      "1 pkt – omówienie wpływu bogów",
      "1 pkt – wniosek",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 6,
    question:
      "Na podstawie „Iliady” scharakteryzuj relację człowieka z bogami.",
    suggested_answer:
      "Relacja jest zależna – bogowie ingerują w życie ludzi, decydując o ich losie.",
    max_points: 3,
    pointsExplanations: [
      "1 pkt – opis relacji",
      "1 pkt – przykład ingerencji",
      "1 pkt – wniosek",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 7,
    question: "Kto jest autorem tragedii „Antygona”?",
    answers: [
      { value: "Eurypides", isCorrect: false },
      { value: "Sofokles", isCorrect: true },
      { value: "Ajschylos", isCorrect: false },
      { value: "Arystofanes", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 7,
    question: "Kim była Antygona dla Polinejkesa?",
    answers: [
      { value: "Siostrą", isCorrect: true },
      { value: "Matką", isCorrect: false },
      { value: "Żoną", isCorrect: false },
      { value: "Kuzynką", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 7,
    question: "Dlaczego Kreon zakazał pochówku Polinejkesa?",
    answers: [
      { value: "Ponieważ był zdrajcą Teb", isCorrect: true },
      { value: "Ponieważ był królem", isCorrect: false },
      { value: "Ponieważ był biedny", isCorrect: false },
      { value: "Ponieważ nie miał rodziny", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 7,
    question: "Jaką karę przewidział Kreon dla Antygony?",
    answers: [
      { value: "Wygnanie", isCorrect: false },
      { value: "Śmierć przez powieszenie", isCorrect: false },
      { value: "Zamurowanie w skalnej grocie", isCorrect: true },
      { value: "Uwięzienie", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 7,
    question: "Kim był Hajmon?",
    answers: [
      { value: "Synem Kreona i narzeczonym Antygony", isCorrect: true },
      { value: "Bratem Antygony", isCorrect: false },
      { value: "Kapłanem", isCorrect: false },
      { value: "Strażnikiem", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 7,
    question: "Jaką funkcję pełni chór w tragedii?",
    answers: [
      { value: "Relacjonuje wydarzenia i komentuje akcję", isCorrect: true },
      { value: "Jest głównym bohaterem", isCorrect: false },
      { value: "Zastępuje dialogi", isCorrect: false },
      { value: "Rozwiązuje konflikt", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 7,
    question: "Co symbolizuje konflikt Antygony i Kreona?",
    answers: [
      { value: "Konflikt pokoleń", isCorrect: false },
      { value: "Konflikt jednostki z losem", isCorrect: false },
      { value: "Konflikt prawa boskiego z ludzkim", isCorrect: true },
      { value: "Konflikt ekonomiczny", isCorrect: false },
    ],
  } as ClosedTestQuestion,
  {
    question_type: "Zamknięty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 7,
    question: "Jak kończy się los Antygony?",
    answers: [
      { value: "Ucieka", isCorrect: false },
      { value: "Zostaje ułaskawiona", isCorrect: false },
      { value: "Popełnia samobójstwo", isCorrect: true },
      { value: "Zostaje królową", isCorrect: false },
    ],
  } as ClosedTestQuestion,

  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 7,
    question: "Jakie były główne powody działania Antygony?",
    suggested_answer:
      "Antygona kierowała się prawem boskim, miłością do brata i obowiązkiem moralnym pochowania zmarłego.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 7,
    question: "Wyjaśnij, na czym polega tragizm Antygony.",
    suggested_answer:
      "Antygona musi wybierać między prawem boskim a ludzkim, a każda decyzja prowadzi do katastrofy.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 7,
    question: "Scharakteryzuj Kreona jako władcę.",
    suggested_answer:
      "Kreon jest surowy, autorytarny, stawia prawo państwowe ponad wszystko, ale jest też uparty i niezdolny do kompromisu.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 7,
    question: "Wyjaśnij rolę fatum w tragedii „Antygona”.",
    suggested_answer:
      "Fatum oznacza nieuchronność losu – bohaterowie nie mogą uniknąć przeznaczenia, które prowadzi do tragedii.",
  } as OpenTestQuestion,
  {
    question_type: "Otwarty",
    difficulty: "Łatwy",
    epoch_id: 1,
    book_id: 7,
    question: "Kim była Ismena i jakie miała podejście do konfliktu?",
    suggested_answer:
      "Ismena była siostrą Antygony i bała się sprzeciwić Kreonowi, wybierając posłuszeństwo wobec prawa.",
  } as OpenTestQuestion,

  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 7,
    question:
      "Wyjaśnij, na czym polega konflikt tragiczny w „Antygonie”. Odwołaj się do treści utworu.",
    suggested_answer:
      "Konflikt tragiczny polega na starciu równorzędnych racji – prawa boskiego i państwowego, reprezentowanych przez Antygonę i Kreona.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – wskazanie konfliktu",
      "1 pkt – omówienie racji Antygony",
      "1 pkt – omówienie racji Kreona",
      "1 pkt – wniosek o tragizmie",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Trudny",
    epoch_id: 1,
    book_id: 7,
    question:
      "Czy Kreon jest postacią jednoznacznie negatywną? Uzasadnij swoją odpowiedź.",
    suggested_answer:
      "Kreon nie jest jednoznacznie negatywny – działa w imię prawa państwowego, ale jego pycha i upór prowadzą do tragedii.",
    max_points: 5,
    pointsExplanations: [
      "1 pkt – zajęcie stanowiska",
      "2 pkt – argumenty",
      "1 pkt – odwołanie do tekstu",
      "1 pkt – spójność wypowiedzi",
    ],
  } as MaturaTestQuestion,
  {
    question_type: "Matura",
    difficulty: "Średni",
    epoch_id: 1,
    book_id: 7,
    question: "Omów znaczenie prawa boskiego i ludzkiego w „Antygonie”.",
    suggested_answer:
      "Prawo boskie reprezentuje Antygona, a ludzkie Kreon; konflikt między nimi prowadzi do tragedii bohaterów.",
    max_points: 4,
    pointsExplanations: [
      "1 pkt – wskazanie obu praw",
      "2 pkt – omówienie konfliktu",
      "1 pkt – wniosek",
    ],
  } as MaturaTestQuestion,
];
