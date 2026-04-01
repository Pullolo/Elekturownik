import { Book } from "./types";

export const books: Book[] = [
  {
    id: 1,
    title: "Dziady cz. III",
    author: "Adam Mickiewicz",
    year: 1832,
    epoch: "Romantyzm",
    summary: {
      short:
        "„Dziady cz. III” ukazują losy młodzieży polskiej prześladowanej przez władze carskie. Utwór przedstawia cierpienie narodu oraz jego walkę o wolność. Centralną postacią jest Konrad, buntujący się przeciwko Bogu w imię dobra ojczyzny. Dramat ma charakter patriotyczny i mesjanistyczny.",
      detailed:
        "Akcja dramatu rozgrywa się po upadku powstania i dotyczy represji wobec młodzieży polskiej. W scenach więziennych ukazane są brutalne przesłuchania i zsyłki na Sybir. Główny bohater, Konrad, przechodzi przemianę i w Wielkiej Improwizacji buntuje się przeciwko Bogu, domagając się władzy nad duszami ludzi. W dramacie pojawia się także ksiądz Piotr, który reprezentuje pokorę i wiarę oraz wygłasza widzenie przyszłości Polski. Utwór ukazuje konflikt między jednostką a Bogiem oraz przedstawia Polskę jako naród-męczennika.",
      timeline: [
        {
          title: "Sceny więzienne",
          description:
            "Młodzież polska zostaje uwięziona i przesłuchiwana przez władze carskie.",
        },
        {
          title: "Wielka Improwizacja",
          description:
            "Konrad buntuje się przeciwko Bogu i żąda władzy nad ludźmi.",
        },
        {
          title: "Widzenie księdza Piotra",
          description:
            "Proroctwo dotyczące przyszłości Polski jako narodu wybranego.",
        },
        {
          title: "Salon warszawski",
          description: "Krytyka społeczeństwa obojętnego na los ojczyzny.",
        },
      ],
    },
    characters: [
      {
        name: "Konrad",
        description: "Główny bohater dramatu, poeta i patriota.",
        traits: ["buntowniczy", "indywidualista", "patriota"],
        role: "bohater romantyczny",
      },
      {
        name: "Ksiądz Piotr",
        description: "Pokorny zakonnik, przeciwieństwo Konrada.",
        traits: ["wierzący", "pokorny", "proroczy"],
        role: "postać symboliczna",
      },
      {
        name: "Senator Nowosilcow",
        description: "Przedstawiciel władzy carskiej, prześladowca młodzieży.",
        traits: ["okrutny", "bezwzględny", "cyniczny"],
        role: "antagonista",
      },
      {
        name: "Więźniowie",
        description: "Młodzież polska represjonowana przez zaborców.",
        traits: ["patriotyczni", "solidarni", "cierpiący"],
        role: "zbiorowy bohater",
      },
    ],
    themes: [
      {
        name: "Patriotyzm",
        description: "Miłość do ojczyzny i gotowość do poświęcenia.",
      },
      {
        name: "Walka o wolność",
        description: "Dążenie narodu do odzyskania niepodległości.",
      },
      {
        name: "Bunt jednostki",
        description: "Sprzeciw wobec Boga i świata w imię wyższych wartości.",
      },
    ],
    motifs: [
      {
        name: "Martyrologia",
        meaning: "Cierpienie narodu polskiego pod zaborami.",
      },
      {
        name: "Mesjanizm",
        meaning: "Polska jako naród wybrany, który ma zbawić inne narody.",
      },
      {
        name: "Więzienie",
        meaning: "Symbol zniewolenia i represji.",
      },
    ],
    contexts: [
      {
        title: "Kamienie na szaniec",
        description:
          "Podobnie jak w „Dziadach”, młodzież walczy o wolność ojczyzny i ponosi ofiary.",
      },
      {
        title: "Syzyfowe prace",
        description:
          "Ukazanie walki młodzieży z rusyfikacją i zachowania tożsamości narodowej.",
      },
      {
        title: "Przedwiośnie",
        description: "Refleksja nad losem Polski i młodego pokolenia.",
      },
    ],
    quotes: [
      {
        text: "Nazywam się Milijon - bo za miliony kocham i cierpię katusze.",
        explanation: "Konrad utożsamia się z całym narodem.",
      },
      {
        text: "Człowieku! gdybyś wiedział, jaka twoja władza!",
        explanation: "Podkreślenie potencjału jednostki.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Losy młodzieży polskiej pod zaborami.",
        "Bunt jednostki wobec Boga.",
        "Rola cierpienia w życiu narodu.",
      ],
      keywords: [
        "martyrologia narodu",
        "represje carskie",
        "patriotyzm",
        "mesjanizm",
        "bunt romantyczny",
      ],
      commonMistakes: [
        "streszczanie zamiast analizy",
        "brak kontekstu",
        "brak tezy",
      ],
      introStarters: [
        "„Dziady cz. III” Adama Mickiewicza to dramat ukazujący...",
        "Losy młodzieży polskiej pod zaborami przedstawione w utworze...",
      ],
    },
  },
  {
    id: 2,
    title: "Iliada",
    author: "Homer",
    year: "ok. VIII w. p.n.e.",
    epoch: "Antyk",

    summary: {
      short:
        "Epos o wojnie trojańskiej skupiający się na gniewie Achillesa i jego skutkach.",

      detailed:
        "Akcja utworu obejmuje końcowy etap wojny trojańskiej. Achilles obraża się na Agamemnona i wycofuje z walki, co osłabia Achajów. Po śmierci Patroklosa wraca do walki i zabija Hektora. Utwór ukazuje honor, los i konsekwencje gniewu.",

      timeline: [
        {
          title: "Spór z Agamemnonem",
          description: "Achilles wycofuje się z walki.",
        },
        {
          title: "Śmierć Patroklosa",
          description: "Przyjaciel Achillesa ginie.",
        },
        {
          title: "Zabicie Hektora",
          description: "Achilles mści się na Trojanach.",
        },
      ],
    },

    characters: [
      {
        name: "Achilles",
        description: "Największy wojownik Achajów.",
        traits: ["gniewny", "honorowy"],
        role: "bohater",
      },
      {
        name: "Hektor",
        description: "Obrońca Troi.",
        traits: ["odważny"],
        role: "przeciwnik",
      },
    ],

    themes: [
      {
        name: "Honor",
        description: "Najważniejsza wartość wojownika.",
      },
      {
        name: "Wojna",
        description: "Cierpienie i chwała.",
      },
    ],

    motifs: [
      {
        name: "Gniew",
        meaning: "Siła napędzająca wydarzenia.",
      },
    ],

    contexts: [],
    quotes: [],
    exam: {
      possibleQuestions: [],
      keywords: ["Achilles", "wojna"],
      commonMistakes: [],
      introStarters: [],
    },
  },
  {
    id: 3,
    title: "Antygona",
    author: "Sofokles",
    year: "V w. p.n.e.",
    epoch: "Antyk",

    summary: {
      short: "Tragedia o konflikcie prawa boskiego i ludzkiego.",

      detailed:
        "Antygona sprzeciwia się zakazowi Kreona i grzebie brata. Zostaje skazana na śmierć. Utwór ukazuje konflikt wartości oraz nieuchronność losu.",

      timeline: [
        {
          title: "Zakaz Kreona",
          description: "Brat Antygony nie może być pochowany.",
        },
        {
          title: "Bunt Antygony",
          description: "Bohaterka łamie prawo.",
        },
        {
          title: "Tragiczny finał",
          description: "Śmierć bohaterów.",
        },
      ],
    },

    characters: [
      {
        name: "Antygona",
        description: "Córka Edypa.",
        traits: ["odważna"],
        role: "bohater tragiczny",
      },
      {
        name: "Kreon",
        description: "Władca Teb.",
        traits: ["uparty"],
        role: "antagonista",
      },
    ],

    themes: [
      {
        name: "Prawo",
        description: "Boskie vs ludzkie.",
      },
    ],

    motifs: [
      {
        name: "Los",
        meaning: "Nieuniknione przeznaczenie.",
      },
    ],

    contexts: [],
    quotes: [],
    exam: {
      possibleQuestions: [],
      keywords: ["tragedia"],
      commonMistakes: [],
      introStarters: [],
    },
  },
  {
    id: 4,
    title: "Lament świętokrzyski",
    author: "anonim",
    year: "XV w.",
    epoch: "Średniowiecze",

    summary: {
      short: "Monolog Matki Boskiej opłakującej śmierć Jezusa.",

      detailed:
        "Utwór przedstawia cierpienie Maryi pod krzyżem. Zwraca się do ludzi i prosi o współczucie. Ma charakter emocjonalny i religijny.",

      timeline: [
        {
          title: "Wezwanie",
          description: "Prośba o wysłuchanie.",
        },
        {
          title: "Cierpienie",
          description: "Opis bólu matki.",
        },
      ],
    },

    characters: [
      {
        name: "Matka Boska",
        description: "Podmiot liryczny.",
        traits: ["cierpiąca"],
        role: "matka",
      },
    ],

    themes: [
      {
        name: "Cierpienie",
        description: "Ból matki.",
      },
    ],

    motifs: [
      {
        name: "Krzyż",
        meaning: "Symbol męki.",
      },
    ],

    contexts: [],
    quotes: [],
    exam: {
      possibleQuestions: [],
      keywords: ["lament"],
      commonMistakes: [],
      introStarters: [],
    },
  },
  {
    id: 5,
    title: "Rozmowa Mistrza Polikarpa ze Śmiercią (fragmenty)",
    author: "anonim",
    year: "XV w.",
    epoch: "Średniowiecze",

    summary: {
      short:
        "Dialog ukazujący spotkanie człowieka ze Śmiercią i jej nieuchronność.",

      detailed:
        "Mistrz Polikarp spotyka Śmierć, która tłumaczy, że każdy człowiek musi umrzeć. Wyśmiewa ludzkie wady i podkreśla równość wszystkich wobec śmierci.",

      timeline: [
        {
          title: "Spotkanie",
          description: "Polikarp widzi Śmierć.",
        },
        {
          title: "Dialog",
          description: "Śmierć tłumaczy swoją rolę.",
        },
      ],
    },

    characters: [
      {
        name: "Śmierć",
        description: "Uosobienie końca życia.",
        traits: ["nieubłagana"],
        role: "symbol",
      },
    ],

    themes: [
      {
        name: "Śmierć",
        description: "Nieuniknioność.",
      },
    ],

    motifs: [
      {
        name: "Danse macabre",
        meaning: "Równość wobec śmierci.",
      },
    ],

    contexts: [],
    quotes: [],
    exam: {
      possibleQuestions: [],
      keywords: ["memento mori"],
      commonMistakes: [],
      introStarters: [],
    },
  },
  {
    id: 6,
    title: "Pieśń o Rolandzie",
    author: "anonim",
    year: "XI w.",
    epoch: "Średniowiecze",

    summary: {
      short: "Epos o bohaterskiej śmierci Rolanda i etosie rycerskim.",

      detailed:
        "Roland walczy w zasadzce i mimo przewagi wroga nie wzywa pomocy. Ginie jako bohater wierny królowi i Bogu.",

      timeline: [
        {
          title: "Zdrada",
          description: "Zasadzka na Rolanda.",
        },
        {
          title: "Bitwa",
          description: "Heroiczna walka.",
        },
        {
          title: "Śmierć",
          description: "Roland umiera.",
        },
      ],
    },

    characters: [
      {
        name: "Roland",
        description: "Rycerz Karola Wielkiego.",
        traits: ["odważny"],
        role: "bohater",
      },
    ],

    themes: [
      {
        name: "Honor",
        description: "Najważniejsza wartość.",
      },
    ],

    motifs: [
      {
        name: "Róg",
        meaning: "Symbol dumy.",
      },
    ],

    contexts: [],
    quotes: [],
    exam: {
      possibleQuestions: [],
      keywords: ["rycerz"],
      commonMistakes: [],
      introStarters: [],
    },
  },
  {
    id: 7,
    title: "Makbet",
    author: "William Shakespeare",
    year: "ok. 1606",
    epoch: "Renesans",

    summary: {
      short: "Tragedia o żądzy władzy i jej konsekwencjach.",

      detailed:
        "Makbet zabija króla Dunkana, by zdobyć władzę. Stopniowo popada w tyranię i zostaje pokonany.",

      timeline: [
        {
          title: "Przepowiednia",
          description: "Wiedźmy przepowiadają władzę.",
        },
        {
          title: "Zbrodnia",
          description: "Makbet zabija króla.",
        },
        {
          title: "Upadek",
          description: "Zostaje pokonany.",
        },
      ],
    },

    characters: [
      {
        name: "Makbet",
        description: "Król Szkocji.",
        traits: ["ambitny"],
        role: "bohater tragiczny",
      },
    ],

    themes: [
      {
        name: "Władza",
        description: "Niszczy człowieka.",
      },
    ],

    motifs: [
      {
        name: "Krew",
        meaning: "Symbol winy.",
      },
    ],

    contexts: [],
    quotes: [],
    exam: {
      possibleQuestions: [],
      keywords: ["ambicja"],
      commonMistakes: [],
      introStarters: [],
    },
  },
  {
    id: 8,
    title: "Skąpiec",
    author: "Molier",
    year: 1668,
    epoch: "Barok",

    summary: {
      short:
        "Komedia ukazująca chorobliwą chciwość Harpagona oraz jej wpływ na relacje rodzinne i społeczne.",

      detailed:
        "Harpagon to bogaty skąpiec, który ponad wszystko ceni pieniądze. Jego obsesja prowadzi do konfliktów z dziećmi – Elizą i Kleantem – których chce wydać za mąż i ożenić z powodów finansowych. Sam zamierza poślubić młodą Mariannę, którą kocha jego syn. Gdy znika szkatułka z pieniędzmi, Harpagon popada w panikę. Ostatecznie konflikty zostają rozwiązane, ale bohater pozostaje niezmieniony. Utwór ośmiesza skąpstwo i pokazuje jego destrukcyjny wpływ.",

      timeline: [
        {
          title: "Przedstawienie Harpagona",
          description: "Poznajemy jego obsesję na punkcie pieniędzy.",
        },
        {
          title: "Konflikty rodzinne",
          description: "Dzieci sprzeciwiają się decyzjom ojca.",
        },
        {
          title: "Zniknięcie szkatułki",
          description: "Harpagon wpada w panikę.",
        },
        {
          title: "Rozwiązanie akcji",
          description:
            "Małżeństwa zostają ustalone, ale Harpagon się nie zmienia.",
        },
      ],
    },

    characters: [
      {
        name: "Harpagon",
        description: "Bogaty skąpiec, główny bohater.",
        traits: ["chciwy", "podejrzliwy", "egoistyczny"],
        role: "bohater komiczny",
      },
      {
        name: "Kleant",
        description: "Syn Harpagona.",
        traits: ["zbuntowany", "zakochany"],
        role: "postać pozytywna",
      },
      {
        name: "Eliza",
        description: "Córka Harpagona.",
        traits: ["lojalna", "uczuciowa"],
        role: "postać pozytywna",
      },
      {
        name: "Marianna",
        description: "Ukochana Kleanta.",
        traits: ["skromna", "dobra"],
        role: "obiekt uczuć",
      },
    ],

    themes: [
      {
        name: "Chciwość",
        description: "Skąpstwo jako wada prowadząca do konfliktów.",
      },
      {
        name: "Rodzina",
        description: "Relacje rodzinne zniszczone przez pieniądze.",
      },
      {
        name: "Miłość vs pieniądze",
        description: "Konflikt wartości materialnych i uczuć.",
      },
    ],

    motifs: [
      {
        name: "Szkatułka",
        meaning: "Symbol bogactwa i obsesji Harpagona.",
      },
      {
        name: "Małżeństwo",
        meaning: "Środek do osiągania korzyści finansowych.",
      },
    ],

    contexts: [
      {
        title: "Makbet",
        description:
          "Obsesja (władzy/pieniędzy) prowadzi do destrukcji człowieka.",
      },
    ],

    quotes: [
      {
        text: "Moje pieniądze! Kto mi je ukradł?!",
        explanation: "Ukazuje obsesję Harpagona.",
      },
    ],

    exam: {
      possibleQuestions: [
        "Jak chciwość wpływa na człowieka?",
        "Czy Harpagon jest postacią tylko komiczną?",
      ],
      keywords: ["skąpstwo", "komedia", "chciwość", "Harpagon"],
      commonMistakes: [
        "traktowanie utworu tylko jako zabawnego",
        "pomijanie krytyki społecznej",
      ],
      introStarters: ["„Skąpiec” Moliera to komedia ukazująca..."],
    },
  },
  {
    id: 9,
    title: "Lalka",
    author: "Bolesław Prus",
    year: 1890,
    epoch: "Pozytywizm",

    summary: {
      short:
        "„Lalka” to powieść o niespełnionej miłości Stanisława Wokulskiego do Izabeli Łęckiej oraz o społeczeństwie polskim w XIX wieku. Ukazuje konflikt między idealizmem a realizmem oraz problemy klasowe.",

      detailed:
        "Stanisław Wokulski, kupiec i były powstaniec, zakochuje się w arystokratce Izabeli Łęckiej. Zdobywa majątek, by zdobyć jej względy, jednak jego uczucie nie zostaje odwzajemnione. Równolegle ukazane są losy Ignacego Rzeckiego, który reprezentuje dawny świat wartości. Powieść przedstawia różne warstwy społeczne oraz krytykuje arystokrację i pokazuje trudności awansu społecznego.",

      timeline: [
        {
          title: "Powrót Wokulskiego",
          description: "Wokulski wraca z wojny i rozwija swój biznes.",
        },
        {
          title: "Miłość do Izabeli",
          description: "Zakochuje się w Łęckiej i próbuje zdobyć jej względy.",
        },
        {
          title: "Kariera i majątek",
          description: "Zdobywa fortunę dzięki handlowi.",
        },
        {
          title: "Rozczarowanie",
          description: "Odkrywa prawdziwą naturę Izabeli.",
        },
        {
          title: "Zniknięcie Wokulskiego",
          description: "Bohater znika w niewyjaśnionych okolicznościach.",
        },
      ],
    },

    characters: [
      {
        name: "Stanisław Wokulski",
        description: "Kupiec, główny bohater powieści.",
        traits: ["pracowity", "romantyczny", "ambitny"],
        role: "bohater tragiczny",
      },
      {
        name: "Izabela Łęcka",
        description: "Arystokratka, obiekt uczuć Wokulskiego.",
        traits: ["wyniosła", "egoistyczna", "zimna"],
        role: "obiekt miłości",
      },
      {
        name: "Ignacy Rzecki",
        description: "Subiekt i przyjaciel Wokulskiego.",
        traits: ["lojalny", "nostalgiczny", "uczciwy"],
        role: "narrator pamiętnika",
      },
    ],

    themes: [
      {
        name: "Miłość niespełniona",
        description:
          "Uczucie Wokulskiego do Izabeli nie zostaje odwzajemnione.",
      },
      {
        name: "Społeczeństwo",
        description: "Obraz różnych warstw społecznych w XIX wieku.",
      },
      {
        name: "Konflikt epok",
        description: "Zderzenie romantyzmu i pozytywizmu.",
      },
    ],

    motifs: [
      {
        name: "Miłość",
        meaning: "Siła napędzająca działania bohatera.",
      },
      {
        name: "Pieniądz",
        meaning: "Środek do osiągnięcia celu i awansu społecznego.",
      },
      {
        name: "Samotność",
        meaning: "Izolacja bohatera w społeczeństwie.",
      },
    ],

    contexts: [
      {
        title: "Dziady cz. III",
        description: "Konflikt jednostki ze światem i idealizm bohatera.",
      },
      {
        title: "Przedwiośnie",
        description: "Rozczarowanie rzeczywistością społeczną.",
      },
    ],

    quotes: [
      {
        text: "Miłość jest potęgą.",
        explanation: "Pokazuje siłę uczucia Wokulskiego.",
      },
    ],

    exam: {
      possibleQuestions: [
        "Czy miłość może zniszczyć człowieka?",
        "Obraz społeczeństwa w Lalce.",
        "Konflikt idealizmu i realizmu.",
      ],
      keywords: [
        "Wokulski",
        "miłość niespełniona",
        "społeczeństwo",
        "pozytywizm",
        "arystokracja",
      ],
      commonMistakes: [
        "pomijanie Rzeckiego",
        "brak kontekstu epoki",
        "streszczanie zamiast analizy",
      ],
      introStarters: [
        "„Lalka” Bolesława Prusa to powieść ukazująca...",
        "Problem niespełnionej miłości w „Lalce” można rozpatrywać jako...",
      ],
    },
  },
  {
    id: 10,
    title: "Potop",
    author: "Henryk Sienkiewicz",
    year: 1886,
    epoch: "Pozytywizm",

    summary: {
      short:
        "Powieść historyczna ukazująca losy Andrzeja Kmicica podczas potopu szwedzkiego oraz jego przemianę moralną.",

      detailed:
        "Akcja powieści rozgrywa się w czasie najazdu szwedzkiego na Polskę. Andrzej Kmicic, początkowo porywczy i nieodpowiedzialny, dopuszcza się błędów i zdrady. Stopniowo jednak przechodzi przemianę – staje się patriotą, walczy za ojczyznę i broni Jasnej Góry. Utwór ukazuje wartości takie jak honor, miłość do ojczyzny i możliwość odkupienia win.",

      timeline: [
        {
          title: "Początkowe błędy Kmicica",
          description: "Bohater działa impulsywnie i popełnia złe decyzje.",
        },
        {
          title: "Zdrada i upadek",
          description: "Zostaje uznany za zdrajcę.",
        },
        {
          title: "Przemiana",
          description: "Kmicic zmienia swoje postępowanie.",
        },
        {
          title: "Obrona Jasnej Góry",
          description: "Walcząc za ojczyznę, odzyskuje honor.",
        },
      ],
    },

    characters: [
      {
        name: "Andrzej Kmicic",
        description: "Główny bohater powieści.",
        traits: ["porywczy", "odważny", "zdolny do przemiany"],
        role: "bohater dynamiczny",
      },
      {
        name: "Oleńka",
        description: "Ukochana Kmicica.",
        traits: ["wierna", "moralna"],
        role: "postać pozytywna",
      },
      {
        name: "Janusz Radziwiłł",
        description: "Magnat i zdrajca.",
        traits: ["ambitny", "zdradziecki"],
        role: "antagonista",
      },
    ],

    themes: [
      {
        name: "Patriotyzm",
        description: "Miłość do ojczyzny i walka o jej wolność.",
      },
      {
        name: "Przemiana bohatera",
        description: "Droga od winy do odkupienia.",
      },
      {
        name: "Honor",
        description: "Odzyskanie dobrego imienia poprzez czyny.",
      },
    ],

    motifs: [
      {
        name: "Wojna",
        meaning: "Tło wydarzeń i próba charakteru bohatera.",
      },
      {
        name: "Odkupienie",
        meaning: "Możliwość naprawy błędów.",
      },
    ],

    contexts: [
      {
        title: "Iliada",
        description: "Motyw wojny i bohatera walczącego za wartości.",
      },
      {
        title: "Makbet",
        description: "Różne drogi bohaterów – upadek vs odkupienie.",
      },
    ],

    quotes: [
      {
        text: "Rzeczpospolita jest jak okręt na wzburzonym morzu.",
        explanation: "Obraz sytuacji Polski w czasie potopu.",
      },
    ],

    exam: {
      possibleQuestions: [
        "Na czym polega przemiana Kmicica?",
        "Jak „Potop” ukazuje patriotyzm?",
      ],
      keywords: ["Kmicic", "patriotyzm", "przemiana", "honor"],
      commonMistakes: [
        "brak analizy przemiany bohatera",
        "opowiadanie całej fabuły",
      ],
      introStarters: [
        "„Potop” Henryka Sienkiewicza to powieść historyczna ukazująca...",
      ],
    },
  },
  {
    id: 11,
    title: "Zbrodnia i kara",
    author: "Fiodor Dostojewski",
    year: 1866,
    epoch: "Realizm",

    summary: {
      short:
        "Historia Rodiona Raskolnikowa, który popełnia morderstwo i zmaga się z wyrzutami sumienia.",

      detailed:
        "Raskolnikow, ubogi student, zabija lichwiarkę, wierząc, że jest jednostką wybitną. Po zbrodni popada w obłęd i poczucie winy. Sonia pomaga mu odnaleźć drogę do skruchy i moralnego odrodzenia.",

      timeline: [
        {
          title: "Plan zbrodni",
          description: "Raskolnikow planuje morderstwo.",
        },
        { title: "Zabójstwo", description: "Dokonuje zbrodni." },
        { title: "Wyrzuty sumienia", description: "Zmaga się psychicznie." },
        { title: "Przyznanie się", description: "Oddaje się w ręce policji." },
      ],
    },

    characters: [
      {
        name: "Raskolnikow",
        description: "Student.",
        traits: ["inteligentny", "zagubiony"],
        role: "bohater tragiczny",
      },
      {
        name: "Sonia",
        description: "Prostytutka.",
        traits: ["dobra", "wierząca"],
        role: "postać moralna",
      },
    ],

    themes: [
      { name: "Wina", description: "Konsekwencje zbrodni." },
      { name: "Moralność", description: "Granice dobra i zła." },
    ],

    motifs: [
      { name: "Zbrodnia", meaning: "Przekroczenie norm." },
      { name: "Kara", meaning: "Odpowiedzialność." },
    ],

    contexts: [
      {
        title: "Lalka",
        description: "Psychologia bohatera.",
      },
    ],

    quotes: [
      {
        text: "Cierpienie i ból są zawsze nieodłączne.",
        explanation: "Konsekwencje czynów.",
      },
    ],

    exam: {
      possibleQuestions: ["Czy cel uświęca środki?"],
      keywords: ["wina", "kara"],
      commonMistakes: ["brak analizy psychologicznej"],
      introStarters: [
        "„Zbrodnia i kara” Dostojewskiego to powieść psychologiczna...",
      ],
    },
  },
  {
    id: 12,
    title: "Wesele",
    author: "Stanisław Wyspiański",
    year: 1901,
    epoch: "Młoda Polska",

    summary: {
      short:
        "Dramat ukazujący społeczeństwo polskie i jego niezdolność do działania. Symboliczna wizja narodu pogrążonego w marazmie.",

      detailed:
        "Akcja toczy się podczas wesela inteligenta z chłopką. Spotykają się różne warstwy społeczne. Pojawiają się zjawy symbolizujące historię Polski. Wernyhora daje złoty róg jako znak powstania, ale zostaje on zgubiony, co symbolizuje zaprzepaszczenie szansy.",

      timeline: [
        { title: "Wesele", description: "Spotkanie gości." },
        { title: "Zjawy", description: "Pojawienie się duchów." },
        { title: "Złoty róg", description: "Symbol powstania." },
        { title: "Chocholi taniec", description: "Symbol marazmu." },
      ],
    },

    characters: [
      {
        name: "Gospodarz",
        description: "Pan domu.",
        traits: ["gościnny"],
        role: "postać realistyczna",
      },
      {
        name: "Poeta",
        description: "Artysta.",
        traits: ["wrażliwy"],
        role: "inteligencja",
      },
    ],

    themes: [
      { name: "Naród", description: "Stan społeczeństwa polskiego." },
      { name: "Bierność", description: "Brak działania." },
    ],

    motifs: [
      { name: "Złoty róg", meaning: "Szansa na wolność." },
      { name: "Taniec", meaning: "Uśpienie narodu." },
    ],

    contexts: [
      {
        title: "Pan Tadeusz",
        description: "Obraz społeczeństwa.",
      },
    ],

    quotes: [
      {
        text: "Miałeś chamie złoty róg...",
        explanation: "Symbol zmarnowanej szansy.",
      },
    ],

    exam: {
      possibleQuestions: ["Dlaczego naród nie potrafi się zjednoczyć?"],
      keywords: ["symbolizm", "naród"],
      commonMistakes: ["pomijanie symboli"],
      introStarters: [
        "„Wesele” Stanisława Wyspiańskiego to dramat symboliczny...",
      ],
    },
  },
  {
    id: 13,
    title: "Chłopi (fragmenty)",
    author: "Władysław Reymont",
    year: "1904–1909",
    epoch: "Młoda Polska",

    summary: {
      short:
        "Powieść ukazująca życie społeczności wiejskiej oraz rytm życia podporządkowany naturze.",

      detailed:
        "Akcja rozgrywa się we wsi Lipce i przedstawia życie jej mieszkańców na przestrzeni czterech pór roku. Centralną postacią jest Maciej Boryna – bogaty gospodarz. Utwór ukazuje konflikty społeczne, miłość, pracę i obyczaje wsi. Ważną rolę odgrywa natura, która wyznacza rytm życia ludzi.",

      timeline: [
        {
          title: "Jesień",
          description: "Ślub Boryny z Jagną.",
        },
        {
          title: "Zima",
          description: "Konflikty i napięcia.",
        },
        {
          title: "Wiosna",
          description: "Prace polowe i rozwój wydarzeń.",
        },
        {
          title: "Lato",
          description: "Kulminacja wydarzeń.",
        },
      ],
    },

    characters: [
      {
        name: "Maciej Boryna",
        description: "Najbogatszy gospodarz.",
        traits: ["dumny", "pracowity"],
        role: "przywódca wsi",
      },
      {
        name: "Jagna",
        description: "Młoda kobieta, żona Boryny.",
        traits: ["piękna", "niezależna"],
        role: "postać kontrowersyjna",
      },
    ],

    themes: [
      {
        name: "Życie wsi",
        description: "Codzienność chłopów.",
      },
      {
        name: "Natura",
        description: "Rytm życia zgodny z porami roku.",
      },
      {
        name: "Społeczność",
        description: "Relacje między mieszkańcami.",
      },
    ],

    motifs: [
      {
        name: "Pory roku",
        meaning: "Struktura powieści i rytm życia.",
      },
      {
        name: "Ziemia",
        meaning: "Najważniejsza wartość dla chłopów.",
      },
    ],

    contexts: [
      {
        title: "Potop",
        description: "Różne obrazy społeczeństwa polskiego.",
      },
    ],

    quotes: [
      {
        text: "Ziemia to skarb największy.",
        explanation: "Ukazuje znaczenie ziemi dla chłopów.",
      },
    ],

    exam: {
      possibleQuestions: [
        "Jaką rolę odgrywa natura w „Chłopach”?",
        "Obraz społeczeństwa wiejskiego.",
      ],
      keywords: ["wieś", "natura", "Boryna", "Reymont"],
      commonMistakes: ["pomijanie znaczenia natury"],
      introStarters: [
        "„Chłopi” Władysława Reymonta to powieść realistyczna ukazująca...",
      ],
    },
  },
  {
    id: 14,
    title: "Przedwiośnie",
    author: "Stefan Żeromski",
    year: 1924,
    epoch: "XX-lecie międzywojenne",

    summary: {
      short:
        "Powieść o dojrzewaniu Cezarego Baryki i jego poszukiwaniu miejsca w odradzającej się Polsce.",

      detailed:
        "Cezary dorasta w Baku, gdzie doświadcza rewolucji. Po śmierci matki trafia do Polski, gdzie zderza się z rzeczywistością daleką od marzeń o „szklanych domach”. Poznaje różne wizje naprawy państwa i ostatecznie bierze udział w marszu robotników.",

      timeline: [
        { title: "Baku", description: "Dzieciństwo i rewolucja." },
        { title: "Śmierć matki", description: "Traumatyczne doświadczenie." },
        { title: "Podróż do Polski", description: "Poznanie ojczyzny." },
        { title: "Nawłoć", description: "Życie wśród ziemiaństwa." },
        { title: "Marsz", description: "Udział w demonstracji." },
      ],
    },

    characters: [
      {
        name: "Cezary Baryka",
        description: "Główny bohater.",
        traits: ["buntowniczy", "poszukujący"],
        role: "bohater dynamiczny",
      },
      {
        name: "Seweryn Baryka",
        description: "Ojciec Cezarego.",
        traits: ["patriotyczny"],
        role: "autorytet",
      },
    ],

    themes: [
      { name: "Ojczyzna", description: "Poszukiwanie tożsamości." },
      { name: "Rewolucja", description: "Skutki przemian społecznych." },
    ],

    motifs: [
      { name: "Szklane domy", meaning: "Utopia." },
      { name: "Podróż", meaning: "Droga do dojrzałości." },
    ],

    contexts: [
      {
        title: "Lalka",
        description: "Rozczarowanie rzeczywistością.",
      },
    ],

    quotes: [
      {
        text: "Szklane domy!",
        explanation: "Symbol marzeń o idealnym państwie.",
      },
    ],

    exam: {
      possibleQuestions: ["Czy Polska spełniła marzenia bohatera?"],
      keywords: ["Baryka", "rewolucja", "Polska"],
      commonMistakes: ["brak kontekstu historycznego"],
      introStarters: ["„Przedwiośnie” Stefana Żeromskiego ukazuje..."],
    },
  },
  {
    id: 15,
    title: "Ferdydurke",
    author: "Witold Gombrowicz",
    year: 1937,
    epoch: "XX-lecie międzywojenne",

    summary: {
      short: "Groteskowa powieść o formie i niedojrzałości człowieka.",

      detailed:
        "Józio zostaje cofnięty do szkoły, gdzie doświadcza narzucania form społecznych. Spotyka różne środowiska, które pokazują sztuczność relacji i brak autentyczności. Powieść krytykuje społeczne maski.",

      timeline: [
        { title: "Szkoła", description: "Powrót do uczniowskiej roli." },
        { title: "Młodziakowie", description: "Nowoczesna rodzina." },
        { title: "Dwór", description: "Starcie kultur." },
      ],
    },

    characters: [
      {
        name: "Józio",
        description: "Główny bohater.",
        traits: ["zagubiony"],
        role: "bohater groteskowy",
      },
    ],

    themes: [
      { name: "Forma", description: "Społeczne role." },
      { name: "Niedojrzałość", description: "Brak autentyczności." },
    ],

    motifs: [
      { name: "Gęba", meaning: "Maska społeczna." },
      { name: "Upupianie", meaning: "Infantylizacja." },
    ],

    contexts: [
      {
        title: "Tango",
        description: "Krytyka społeczeństwa.",
      },
    ],

    quotes: [
      {
        text: "Słowacki wielkim poetą był.",
        explanation: "Ironia wobec edukacji.",
      },
    ],

    exam: {
      possibleQuestions: ["Czy człowiek może być sobą?"],
      keywords: ["forma", "groteska"],
      commonMistakes: ["dosłowne czytanie"],
      introStarters: ["„Ferdydurke” Gombrowicza to powieść groteskowa..."],
    },
  },
];
