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
    terms: [],
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
];
