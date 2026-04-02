import { Book } from "./types";

export const books: Book[] = [
  {
    id: 1,
    title: "Biblia – Księga Rodzaju",
    author: "tradycyjnie przypisywana Mojżeszowi",
    year: "ok. XIII–V w. p.n.e.",
    epoch: "Antyk",
    summary: {
      short:
        "Księga Rodzaju opisuje stworzenie świata i człowieka, historię pierwszych ludzi, upadek moralny ludzkości oraz początki narodu wybranego poprzez dzieje patriarchów.",
      detailed:
        "Księga Rodzaju rozpoczyna się opisem stworzenia świata przez Boga w sześciu dniach oraz odpoczynku siódmego dnia. Bóg stwarza człowieka – Adama i Ewę – i umieszcza ich w ogrodzie Eden, gdzie żyją w harmonii z naturą i Stwórcą. Zakaz spożywania owocu z drzewa poznania dobra i zła zostaje złamany pod wpływem węża, co prowadzi do grzechu pierworodnego i wygnania z raju.\n\nNastępnie przedstawiona jest historia Kaina i Abla – pierwszego bratobójstwa wynikającego z zazdrości. Ludzkość stopniowo pogrąża się w grzechu, co prowadzi do decyzji Boga o zesłaniu potopu. Noe, jako człowiek sprawiedliwy, zostaje wybrany do ocalenia siebie, swojej rodziny i przedstawicieli zwierząt. Po potopie Bóg zawiera przymierze z Noem.\n\nKolejnym ważnym wydarzeniem jest budowa wieży Babel – symbol ludzkiej pychy i próby dorównania Bogu. Bóg karze ludzi pomieszaniem języków.\n\nDalsza część księgi skupia się na patriarchach. Abraham zostaje wybrany przez Boga i otrzymuje obietnicę licznego potomstwa oraz ziemi. Jego wiara zostaje wystawiona na próbę poprzez nakaz ofiarowania syna Izaaka. Następnie przedstawione są dzieje Izaaka, Jakuba (który otrzymuje imię Izrael) oraz jego syna Józefa. Historia Józefa ukazuje motyw zdrady przez braci, niewoli w Egipcie oraz ostatecznego przebaczenia i pojednania.\n\nKsięga kończy się osiedleniem Izraelitów w Egipcie, co przygotowuje grunt pod dalsze wydarzenia biblijne.",
      timeline: [
        {
          title: "Stworzenie świata",
          description:
            "Bóg stwarza świat w sześć dni i odpoczywa siódmego dnia.",
        },
        {
          title: "Grzech pierworodny",
          description: "Adam i Ewa łamią zakaz Boga i zostają wygnani z raju.",
        },
        {
          title: "Kain i Abel",
          description: "Kain zabija Abla z zazdrości – pierwsze bratobójstwo.",
        },
        {
          title: "Potop",
          description:
            "Bóg niszczy grzeszną ludzkość, ocala Noego i jego rodzinę.",
        },
        {
          title: "Wieża Babel",
          description: "Bóg miesza języki ludzi, karząc ich pychę.",
        },
        {
          title: "Abraham",
          description: "Zawarcie przymierza Boga z Abrahamem i próba wiary.",
        },
        {
          title: "Józef w Egipcie",
          description: "Historia zdrady, cierpienia i przebaczenia.",
        },
      ],
    },
    characters: [
      {
        name: "Bóg",
        description:
          "Stwórca świata, najwyższa istota, sprawiedliwy i miłosierny sędzia.",
        traits: ["wszechmocny", "sprawiedliwy", "miłosierny", "surowy"],
        role: "Twórca świata i moralny autorytet",
      },
      {
        name: "Adam",
        description: "Pierwszy człowiek stworzony przez Boga.",
        traits: ["niewinny", "uległy", "słaby"],
        role: "Symbol człowieczeństwa i grzechu pierworodnego",
      },
      {
        name: "Ewa",
        description: "Pierwsza kobieta, żona Adama.",
        traits: ["ciekawska", "uległa pokusie"],
        role: "Współuczestniczka grzechu pierworodnego",
      },
      {
        name: "Kain",
        description: "Pierwszy syn Adama i Ewy, zabójca brata.",
        traits: ["zazdrosny", "impulsywny"],
        role: "Symbol zła i zazdrości",
      },
      {
        name: "Abel",
        description: "Drugi syn Adama i Ewy, ofiara bratobójstwa.",
        traits: ["niewinny", "wierny"],
        role: "Symbol sprawiedliwości",
      },
      {
        name: "Noe",
        description: "Sprawiedliwy człowiek ocalony z potopu.",
        traits: ["posłuszny", "wierny", "prawy"],
        role: "Symbol ocalenia i nowego początku",
      },
      {
        name: "Abraham",
        description: "Patriarcha narodu wybranego.",
        traits: ["wierny", "posłuszny", "oddany"],
        role: "Symbol wiary i przymierza z Bogiem",
      },
      {
        name: "Izaak",
        description: "Syn Abrahama, niemal złożony w ofierze.",
        traits: ["posłuszny"],
        role: "Symbol zaufania Bogu",
      },
      {
        name: "Jakub (Izrael)",
        description: "Syn Izaaka, ojciec dwunastu pokoleń Izraela.",
        traits: ["przebiegły", "wytrwały"],
        role: "Założyciel narodu izraelskiego",
      },
      {
        name: "Józef",
        description:
          "Syn Jakuba, sprzedany przez braci, później ważna postać w Egipcie.",
        traits: ["wierny", "cierpliwy", "wybaczający"],
        role: "Symbol przebaczenia i opatrzności",
      },
    ],
    themes: [
      {
        name: "Stworzenie świata",
        description: "Ukazanie Boga jako wszechmocnego Stwórcy.",
      },
      {
        name: "Grzech i kara",
        description: "Konsekwencje nieposłuszeństwa wobec Boga.",
      },
      {
        name: "Wiara i posłuszeństwo",
        description: "Postawy bohaterów wobec Boga (np. Abraham).",
      },
      {
        name: "Przymierze",
        description: "Relacja Boga z ludźmi oparta na obietnicy i wierności.",
      },
      {
        name: "Przebaczenie",
        description: "Motyw pojednania, szczególnie w historii Józefa.",
      },
    ],
    motifs: [
      {
        name: "Raj",
        meaning: "Stan pierwotnej harmonii człowieka z Bogiem.",
      },
      {
        name: "Drzewo poznania dobra i zła",
        meaning: "Symbol zakazu i granic moralnych.",
      },
      {
        name: "Potop",
        meaning: "Oczyszczenie świata z grzechu.",
      },
      {
        name: "Wieża Babel",
        meaning: "Symbol ludzkiej pychy.",
      },
      {
        name: "Ofiara",
        meaning: "Wyraz oddania i wiary (Abraham i Izaak).",
      },
    ],
    contexts: [
      {
        title: "Biblia jako tekst kultury",
        description:
          "Podstawa cywilizacji europejskiej, źródło archetypów i motywów.",
      },
      {
        title: "Mitologia",
        description:
          "Porównanie z mitami o stworzeniu świata w innych kulturach.",
      },
      {
        title: "Literatura romantyczna",
        description: "Motywy biblijne w utworach takich jak 'Kordian'.",
      },
      {
        title: "Historia religii",
        description: "Rozwój monoteizmu i religii abrahamowych.",
      },
    ],
    quotes: [
      {
        text: "Na początku Bóg stworzył niebo i ziemię.",
        explanation: "Podkreślenie boskiego aktu stworzenia i początku świata.",
      },
      {
        text: "Bądźcie płodni i rozmnażajcie się.",
        explanation: "Nakaz Boga dotyczący rozwoju ludzkości.",
      },
      {
        text: "Nie jest dobrze, żeby człowiek był sam.",
        explanation: "Uzasadnienie stworzenia kobiety.",
      },
    ],
    terms: [
      {
        name: "grzech pierworodny",
        meaning: "Pierwszy grzech ludzi, skutkujący utratą raju.",
      },
      {
        name: "przymierze",
        meaning: "Umowa między Bogiem a ludźmi.",
      },
      {
        name: "patriarcha",
        meaning: "Przodek narodu izraelskiego.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Omów motyw grzechu i kary w Księdze Rodzaju.",
        "Na czym polega próba wiary Abrahama?",
        "Jaką funkcję pełni motyw potopu?",
        "Wyjaśnij symbolikę wieży Babel.",
        "Omów postać Józefa jako przykład przebaczenia.",
      ],
      keywords: [
        "Bóg",
        "stworzenie",
        "grzech",
        "potop",
        "Abraham",
        "przymierze",
        "wiara",
        "symbol",
      ],
      commonMistakes: [
        "Mylenie wydarzeń chronologicznych",
        "Pomijanie kontekstu religijnego",
        "Zbyt ogólne interpretacje",
        "Brak odniesień do symboliki",
      ],
      introStarters: [
        "Księga Rodzaju stanowi fundament tradycji biblijnej...",
        "Jednym z najważniejszych motywów w Księdze Rodzaju jest...",
        "Analizując fragmenty Księgi Rodzaju, warto zwrócić uwagę na...",
      ],
    },
  },
  {
    id: 2,
    title: "Biblia – Księga Hioba",
    author: "anonimowy",
    year: "ok. VI–IV w. p.n.e.",
    epoch: "Antyk",
    summary: {
      short:
        "Księga Hioba opowiada historię sprawiedliwego człowieka, który mimo swojej niewinności doświadcza ogromnego cierpienia, co staje się pretekstem do rozważań nad sensem bólu, sprawiedliwością Boga i ludzką wiarą.",
      detailed:
        "Hiob to człowiek prawy, bogaty i bogobojny. Na niebiańskim zgromadzeniu szatan podważa jego wierność, twierdząc, że jest ona wynikiem dostatniego życia. Bóg pozwala wystawić Hioba na próbę. W krótkim czasie Hiob traci majątek, dzieci i zdrowie, zostaje dotknięty trądem.\n\nMimo ogromnego cierpienia początkowo nie bluźni Bogu, wypowiada słynne słowa: „Pan dał, Pan zabrał”. Z czasem jednak zaczyna zadawać pytania o sens swojego losu. Odwiedzają go przyjaciele (Elifaz, Bildad, Sofar), którzy próbują przekonać go, że cierpienie jest karą za grzechy. Hiob nie zgadza się z nimi – wie, że jest niewinny.\n\nRozpoczyna się dyskusja filozoficzna o sprawiedliwości Boga. Hiob wyraża bunt i rozpacz, ale nie traci całkowicie wiary. W końcu przemawia sam Bóg z wichru, nie udzielając bezpośredniej odpowiedzi, lecz ukazując ogrom swojej mocy i tajemniczość świata.\n\nHiob uznaje swoją małość wobec Boga i pokornie przyjmuje Jego wolę. W nagrodę zostaje przywrócony do dawnego życia – odzyskuje zdrowie, majątek i otrzymuje nowe dzieci.\n\nKsięga nie daje jednoznacznej odpowiedzi na pytanie o sens cierpienia, ale wskazuje na jego tajemniczy, niezależny od ludzkiego rozumienia charakter.",
      timeline: [
        {
          title: "Hiob jako człowiek sprawiedliwy",
          description:
            "Przedstawienie bohatera jako bogatego, pobożnego i moralnie nieskazitelnego człowieka.",
        },
        {
          title: "Zakład Boga z szatanem",
          description:
            "Szatan kwestionuje bezinteresowność wiary Hioba, Bóg pozwala go doświadczyć.",
        },
        {
          title: "Utrata dóbr i rodziny",
          description: "Hiob traci majątek i dzieci, lecz zachowuje wiarę.",
        },
        {
          title: "Choroba Hioba",
          description:
            "Hiob zostaje dotknięty ciężką chorobą i popada w skrajne cierpienie.",
        },
        {
          title: "Rozmowy z przyjaciółmi",
          description: "Dyskusja o winie, sprawiedliwości i sensie cierpienia.",
        },
        {
          title: "Bunt i rozpacz Hioba",
          description:
            "Hiob zaczyna kwestionować sens swojego losu, choć nie odrzuca Boga.",
        },
        {
          title: "Przemowa Boga",
          description:
            "Bóg objawia swoją potęgę, nie odpowiadając wprost na pytania Hioba.",
        },
        {
          title: "Pokora i nagroda",
          description:
            "Hiob uznaje swoją ograniczoność, zostaje nagrodzony i odzyskuje dobrobyt.",
        },
      ],
    },
    characters: [
      {
        name: "Hiob",
        description:
          "Główny bohater, człowiek sprawiedliwy, doświadczony przez cierpienie.",
        traits: ["pobożny", "wytrwały", "cierpliwy", "refleksyjny", "pokorny"],
        role: "Symbol niewinnego cierpienia i niezłomnej wiary.",
      },
      {
        name: "Bóg",
        description:
          "Stwórca, który dopuszcza próbę Hioba, ukazując swoją wszechmoc.",
        traits: [
          "wszechmocny",
          "tajemniczy",
          "sprawiedliwy",
          "niedostępny poznawczo",
        ],
        role: "Uosobienie boskiej woli i porządku świata.",
      },
      {
        name: "Szatan",
        description: "Oskarżyciel podważający wierność Hioba.",
        traits: ["sceptyczny", "prowokujący", "cyniczny"],
        role: "Inicjator próby Hioba.",
      },
      {
        name: "Elifaz, Bildad, Sofar",
        description:
          "Przyjaciele Hioba reprezentujący tradycyjną teologię odpłaty.",
        traits: ["dogmatyczni", "moralizujący", "schematyczni"],
        role: "Reprezentanci przekonania, że cierpienie jest karą za grzech.",
      },
      {
        name: "Żona Hioba",
        description: "Kobieta namawiająca Hioba do porzucenia wiary.",
        traits: ["zrozpaczona", "zbuntowana"],
        role: "Kontrast wobec postawy Hioba.",
      },
    ],
    themes: [
      {
        name: "Cierpienie niewinnego",
        description: "Problem cierpienia niezawinionego i jego sensu.",
      },
      {
        name: "Sprawiedliwość Boga",
        description:
          "Rozważania nad tym, czy Bóg zawsze nagradza dobro i karze zło.",
      },
      {
        name: "Wiara i próba",
        description: "Wiara jako wartość poddawana próbom i doświadczeniom.",
      },
      {
        name: "Granice ludzkiego poznania",
        description: "Człowiek nie jest w stanie zrozumieć boskich planów.",
      },
    ],
    motifs: [
      {
        name: "cierpienie",
        meaning:
          "Doświadczenie egzystencjalne prowadzące do refleksji nad sensem życia.",
      },
      {
        name: "próba wiary",
        meaning: "Sprawdzian autentyczności relacji człowieka z Bogiem.",
      },
      {
        name: "bunt wobec Boga",
        meaning: "Naturalna reakcja człowieka na niezrozumiałe cierpienie.",
      },
      {
        name: "pokora",
        meaning: "Uznanie własnych ograniczeń wobec boskiej potęgi.",
      },
    ],
    contexts: [
      {
        title: "Biblia – inne księgi mądrościowe",
        description:
          "Podobne rozważania o sensie życia i cierpienia pojawiają się w Księdze Koheleta.",
      },
      {
        title: "Mitologia grecka – Prometeusz",
        description:
          "Motyw cierpienia niewinnego bohatera poświęcającego się dla wyższych wartości.",
      },
      {
        title: "„Dziady cz. III” Adama Mickiewicza",
        description:
          "Konrad jako buntownik wobec Boga, podobnie jak Hiob kwestionujący sens cierpienia.",
      },
      {
        title: "Filozofia egzystencjalna",
        description:
          "Rozważania nad sensem cierpienia i absurdem ludzkiego losu.",
      },
    ],
    quotes: [
      {
        text: "Pan dał, Pan zabrał. Niech będzie imię Pańskie błogosławione.",
        explanation: "Wyraz pokory Hioba wobec woli Boga mimo tragedii.",
      },
      {
        text: "Dlaczego dałeś światło nieszczęśliwym?",
        explanation: "Pytanie o sens życia w obliczu cierpienia.",
      },
      {
        text: "Jam jest mały, cóż Ci odpowiem?",
        explanation: "Uznanie przez Hioba własnej ograniczoności wobec Boga.",
      },
    ],
    terms: [
      {
        name: "teodycea",
        meaning:
          "Próba usprawiedliwienia Boga wobec istnienia zła i cierpienia.",
      },
      {
        name: "cierpienie niezawinione",
        meaning: "Ból, który nie wynika z winy jednostki.",
      },
      {
        name: "hiobowa wieść",
        meaning: "Nagła, tragiczna wiadomość.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Omów problem cierpienia niewinnego na podstawie Księgi Hioba.",
        "Czy Hiob jest przykładem człowieka wierzącego bezinteresownie?",
        "Jaką wizję Boga przedstawia Księga Hioba?",
        "Czy bunt wobec Boga jest uzasadniony?",
      ],
      keywords: [
        "cierpienie",
        "teodycea",
        "wiara",
        "Bóg",
        "próba",
        "pokora",
        "bunt",
      ],
      commonMistakes: [
        "Sprowadzanie przesłania księgi do prostego morału o nagrodzie za cierpienie.",
        "Pomijanie filozoficznego wymiaru dialogów.",
        "Traktowanie Hioba jako biernej postaci bez refleksji.",
      ],
      introStarters: [
        "Księga Hioba należy do najważniejszych tekstów podejmujących problem cierpienia.",
        "Motyw cierpienia niewinnego od wieków fascynuje filozofów i pisarzy.",
        "Jednym z najtrudniejszych pytań egzystencjalnych jest sens ludzkiego bólu.",
      ],
    },
  },
  {
    id: 3,
    title: "Biblia – Księga Koheleta",
    author: "tradycyjnie przypisywana Salomonowi",
    year: "ok. III w. p.n.e.",
    epoch: "Antyk",
    summary: {
      short:
        "Księga Koheleta to refleksyjny traktat filozoficzny o sensie życia, przemijaniu i marności ludzkich działań, podkreślający nietrwałość świata i konieczność pogodzenia się z losem oraz zaufania Bogu.",
      detailed:
        "Księga Koheleta ma charakter filozoficzno-refleksyjny i przedstawia rozważania mędrca (Koheleta) nad kondycją człowieka i sensem jego istnienia. Utwór rozpoczyna się słynnym stwierdzeniem o marności wszystkiego („Marność nad marnościami”). Autor analizuje różne aspekty ludzkiego życia: pracę, mądrość, bogactwo, przyjemności, dochodząc do wniosku, że wszystkie one są przemijające i nie dają trwałego spełnienia.\n\nKohelet zauważa cykliczność świata – wszystko ma swój czas: narodziny, śmierć, radość i smutek. Człowiek nie ma wpływu na bieg wydarzeń, a jego życie jest podporządkowane prawom natury i woli Boga. Autor podkreśla, że zarówno mądry, jak i głupi kończą tak samo – śmiercią.\n\nMimo pesymistycznego tonu Kohelet nie odrzuca życia. Wskazuje, że należy cieszyć się drobnymi przyjemnościami: jedzeniem, pracą, relacjami, ponieważ są one darem od Boga. Jednocześnie przypomina o konieczności bojaźni Bożej i przestrzegania przykazań jako jedynej trwałej wartości.\n\nUtwór kończy się podsumowaniem: najważniejsze jest bać się Boga i przestrzegać Jego praw, gdyż wszystko inne jest ulotne. Księga stanowi głęboką refleksję nad ludzką egzystencją, łącząc pesymizm poznawczy z umiarkowanym hedonizmem i religijnym moralizmem.",
      timeline: [
        {
          title: "Teza o marności świata",
          description:
            "Kohelet rozpoczyna rozważania od stwierdzenia, że wszystko jest marnością i przemijaniem.",
        },
        {
          title: "Analiza ludzkich działań",
          description:
            "Autor bada sens pracy, mądrości i przyjemności, dochodząc do ich nietrwałości.",
        },
        {
          title: "Cykliczność życia",
          description:
            "Przedstawienie idei, że wszystko ma swój czas i rytm ustalony przez Boga.",
        },
        {
          title: "Refleksja nad śmiercią",
          description:
            "Podkreślenie, że wszyscy ludzie – niezależnie od statusu – podlegają śmierci.",
        },
        {
          title: "Wskazanie sensu życia",
          description:
            "Zachęta do cieszenia się życiem i jednoczesnego życia zgodnego z wolą Boga.",
        },
      ],
    },
    characters: [
      {
        name: "Kohelet (Kaznodzieja)",
        description:
          "Mędrzec i narrator prowadzący rozważania nad sensem życia i kondycją człowieka.",
        traits: [
          "refleksyjny",
          "pesymistyczny",
          "mądry",
          "doświadczony",
          "filozoficzny",
        ],
        role: "Podmiot mówiący, który analizuje rzeczywistość i formułuje wnioski egzystencjalne.",
      },
    ],
    themes: [
      {
        name: "Marność świata",
        description:
          "Przekonanie, że wszystkie ludzkie działania są nietrwałe i ostatecznie pozbawione sensu.",
      },
      {
        name: "Przemijanie",
        description:
          "Nieuchronność upływu czasu i śmierci jako podstawowy element ludzkiej egzystencji.",
      },
      {
        name: "Sens życia",
        description:
          "Poszukiwanie odpowiedzi na pytanie o cel ludzkiego istnienia.",
      },
      {
        name: "Bóg i człowiek",
        description:
          "Relacja człowieka z Bogiem jako jedyny trwały fundament egzystencji.",
      },
      {
        name: "Cykliczność natury",
        description:
          "Powtarzalność procesów przyrody jako kontrast dla krótkotrwałości ludzkiego życia.",
      },
    ],
    motifs: [
      {
        name: "Vanitas",
        meaning:
          "Motyw marności podkreślający nietrwałość życia i dóbr doczesnych.",
      },
      {
        name: "Czas",
        meaning:
          "Każda czynność ma swój określony moment, który nie zależy od człowieka.",
      },
      {
        name: "Śmierć",
        meaning:
          "Uniwersalny kres życia, który niweluje różnice między ludźmi.",
      },
      {
        name: "Mądrość",
        meaning:
          "Choć cenna, nie daje ostatecznego sensu ani nie chroni przed śmiercią.",
      },
    ],
    contexts: [
      {
        title: "Biblia jako księga mądrościowa",
        description:
          "Księga Koheleta należy do ksiąg dydaktycznych, podobnie jak Księga Hioba czy Przysłów.",
      },
      {
        title: "Filozofia starożytna",
        description:
          "Podobieństwo do nurtów sceptycyzmu i stoicyzmu w refleksji nad losem człowieka.",
      },
      {
        title: "Motyw vanitas w baroku",
        description:
          "Inspiracja dla późniejszej literatury barokowej, podkreślającej marność życia (np. poezja Morsztyna).",
      },
      {
        title: "Egzystencjalizm",
        description:
          "Zbieżność z nowożytnymi refleksjami nad sensem życia i absurdalnością istnienia.",
      },
    ],
    quotes: [
      {
        text: "Marność nad marnościami i wszystko marność.",
        explanation:
          "Najbardziej znane zdanie księgi, podsumowujące jej główną tezę o bezsensie ludzkich działań.",
      },
      {
        text: "Wszystko ma swój czas.",
        explanation:
          "Podkreślenie porządku świata, który nie zależy od człowieka.",
      },
      {
        text: "Nie ma nic lepszego dla człowieka, niż żeby jadł i pił.",
        explanation:
          "Zachęta do cieszenia się prostymi przyjemnościami życia jako darami Boga.",
      },
      {
        text: "Boga się bój i przykazań Jego przestrzegaj.",
        explanation:
          "Ostateczny wniosek księgi – jedyna trwała wartość w życiu człowieka.",
      },
    ],
    terms: [
      {
        name: "Vanitas",
        meaning: "Motyw marności świata i przemijania wszystkich rzeczy.",
      },
      {
        name: "Mądrość biblijna",
        meaning:
          "Refleksyjny nurt literatury biblijnej skupiony na sensie życia i moralności.",
      },
      {
        name: "Egzystencjalizm",
        meaning: "Kierunek filozoficzny badający sens istnienia człowieka.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Na czym polega motyw vanitas w Księdze Koheleta?",
        "Jak Kohelet rozumie sens życia?",
        "Czy Księga Koheleta ma wydźwięk pesymistyczny czy realistyczny?",
        "Jakie znaczenie ma motyw czasu w Księdze Koheleta?",
        "Jakie wartości uznaje Kohelet za najważniejsze?",
      ],
      keywords: [
        "vanitas",
        "marność",
        "przemijanie",
        "czas",
        "Bóg",
        "sens życia",
        "egzystencja",
      ],
      commonMistakes: [
        "Uznawanie księgi wyłącznie za pesymistyczną, bez dostrzeżenia jej afirmacji życia.",
        "Pomijanie religijnego wymiaru przesłania.",
        "Mylenie Koheleta z postacią historyczną zamiast literacką.",
        "Brak odniesienia do motywu czasu i cykliczności.",
      ],
      introStarters: [
        "Księga Koheleta to jeden z najbardziej refleksyjnych tekstów biblijnych, podejmujący problem sensu życia człowieka.",
        "Motyw marności świata stanowi centralny punkt rozważań Koheleta.",
        "Rozważania Koheleta wpisują się w uniwersalną refleksję nad przemijaniem i ludzką egzystencją.",
        "Analiza Księgi Koheleta pozwala dostrzec ponadczasowy charakter pytań o sens życia.",
      ],
    },
  },
  {
    id: 4,
    title: "Biblia – Apokalipsa św. Jana",
    author: "św. Jan Apostoł",
    year: "I wiek n.e.",
    epoch: "Antyk",
    summary: {
      short:
        "Symboliczna wizja końca świata, sądu ostatecznego oraz ostatecznego zwycięstwa dobra nad złem, ukazana poprzez prorocze objawienia św. Jana.",
      detailed:
        "Apokalipsa św. Jana to księga prorocza Nowego Testamentu, napisana w formie wizji objawionych Janowi na wyspie Patmos. Rozpoczyna się wprowadzeniem, w którym autor przedstawia się jako świadek objawienia Chrystusa.\n\nNastępnie pojawia się wizja siedmiu Kościołów Azji Mniejszej, do których skierowane są listy zawierające napomnienia i pochwały. Kolejna część ukazuje Boga zasiadającego na tronie oraz Baranka (symbol Chrystusa), który jako jedyny jest godzien otworzyć księgę zapieczętowaną siedmioma pieczęciami.\n\nOtwarcie kolejnych pieczęci przynosi katastrofy i znaki końca: pojawiają się Czterej Jeźdźcy Apokalipsy (wojna, głód, zaraza, śmierć), prześladowania oraz klęski żywiołowe. Następnie siedmiu aniołów trąbi na trąbach, zapowiadając kolejne nieszczęścia.\n\nW dalszej części pojawia się wizja walki dobra ze złem: Smok (Szatan) walczy z Niewiastą (symbol Kościoła lub Maryi), a Bestia symbolizuje zło i prześladowanie wiernych. Wprowadzona zostaje liczba Bestii – 666.\n\nKulminacją jest ostateczna walka, w której Chrystus zwycięża siły zła. Następuje Sąd Ostateczny – umarli są sądzeni według swoich czynów.\n\nZakończenie przynosi wizję nowego nieba i nowej ziemi oraz Nowego Jeruzalem – miejsca wiecznego szczęścia dla zbawionych. Księga kończy się zapowiedzią powtórnego przyjścia Chrystusa.",
      timeline: [
        {
          title: "Objawienie Jana",
          description:
            "Jan otrzymuje wizję Chrystusa i polecenie spisania objawienia.",
        },
        {
          title: "Listy do siedmiu Kościołów",
          description: "Napomnienia i wskazówki dla wspólnot chrześcijańskich.",
        },
        {
          title: "Otwarcie siedmiu pieczęci",
          description:
            "Pojawienie się Czterech Jeźdźców Apokalipsy i pierwszych znaków końca.",
        },
        {
          title: "Siedem trąb",
          description: "Kolejne katastrofy i plagi spadające na świat.",
        },
        {
          title: "Walka dobra ze złem",
          description: "Symboliczne starcie Smoka, Bestii i sił Boga.",
        },
        {
          title: "Sąd Ostateczny",
          description: "Zmarli zostają osądzeni według swoich czynów.",
        },
        {
          title: "Nowe Jeruzalem",
          description:
            "Powstanie nowego świata – miejsca szczęścia dla zbawionych.",
        },
      ],
    },
    characters: [
      {
        name: "Jan",
        description: "Autor wizji, prorok i świadek objawienia.",
        traits: ["wierny", "posłuszny Bogu", "proroczy"],
        role: "Narrator i odbiorca objawienia",
      },
      {
        name: "Baranek",
        description: "Symbol Chrystusa, który odkupił świat.",
        traits: ["święty", "potężny", "zbawiciel"],
        role: "Zwycięzca nad złem",
      },
      {
        name: "Bóg",
        description: "Stwórca i sędzia świata.",
        traits: ["sprawiedliwy", "wszechmocny", "wieczny"],
        role: "Najwyższy sędzia",
      },
      {
        name: "Smok",
        description: "Symbol Szatana i sił zła.",
        traits: ["zły", "niszczycielski", "przebiegły"],
        role: "Przeciwnik Boga",
      },
      {
        name: "Bestia",
        description: "Symbol zła i prześladowań chrześcijan.",
        traits: ["okrutna", "potężna", "demoralizująca"],
        role: "Narzędzie zła",
      },
      {
        name: "Niewiasta",
        description: "Symbol Kościoła lub Maryi.",
        traits: ["czysta", "zagrożona", "chroniona"],
        role: "Reprezentacja dobra i wiary",
      },
    ],
    themes: [
      {
        name: "Koniec świata",
        description:
          "Wizja ostatecznego kresu historii i przemiany rzeczywistości.",
      },
      {
        name: "Walka dobra ze złem",
        description: "Konflikt między Bogiem a Szatanem jako centralny motyw.",
      },
      {
        name: "Sąd Ostateczny",
        description: "Rozliczenie ludzi z ich czynów.",
      },
      {
        name: "Zbawienie",
        description: "Nagroda dla wiernych i sprawiedliwych.",
      },
    ],
    motifs: [
      {
        name: "Apokalipsa",
        meaning: "Objawienie i koniec świata.",
      },
      {
        name: "Czterej Jeźdźcy",
        meaning: "Symbole nieszczęść dotykających ludzkość.",
      },
      {
        name: "Liczba 666",
        meaning: "Symbol zła i Antychrysta.",
      },
      {
        name: "Nowe Jeruzalem",
        meaning: "Symbol zbawienia i wiecznego szczęścia.",
      },
    ],
    contexts: [
      {
        title: "Biblia",
        description:
          "Ostatnia księga Nowego Testamentu, domykająca całość objawienia.",
      },
      {
        title: "Prześladowania chrześcijan w Cesarstwie Rzymskim",
        description:
          "Historyczne tło powstania tekstu – czas represji religijnych.",
      },
      {
        title: "Motyw apokalipsy w kulturze",
        description: "Np. „Dies irae”, literatura katastroficzna XX wieku.",
      },
    ],
    quotes: [
      {
        text: "Jam Alfa i Omega, początek i koniec.",
        explanation: "Bóg jako początek i kres wszystkiego.",
      },
      {
        text: "Kto ma uszy, niechaj słucha.",
        explanation: "Wezwanie do refleksji nad przesłaniem.",
      },
      {
        text: "Oto czynię wszystko nowe.",
        explanation: "Zapowiedź odnowienia świata.",
      },
    ],
    terms: [
      {
        name: "Apokalipsa",
        meaning: "Objawienie, odsłonięcie prawdy o końcu świata.",
      },
      {
        name: "Symbolizm",
        meaning: "Użycie znaków i obrazów o ukrytym znaczeniu.",
      },
      {
        name: "Eschatologia",
        meaning: "Nauka o rzeczach ostatecznych.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Omów symbolikę Apokalipsy św. Jana.",
        "Jak przedstawiona jest walka dobra ze złem?",
        "Jaką wizję końca świata ukazuje Apokalipsa?",
        "Wyjaśnij znaczenie motywu Sądu Ostatecznego.",
      ],
      keywords: [
        "apokalipsa",
        "symbolizm",
        "eschatologia",
        "sąd ostateczny",
        "dobro i zło",
        "Biblia",
      ],
      commonMistakes: [
        "Traktowanie tekstu dosłownie zamiast symbolicznie.",
        "Mylenie Apokalipsy z katastrofą zamiast objawieniem.",
        "Pomijanie kontekstu historycznego prześladowań.",
      ],
      introStarters: [
        "Apokalipsa św. Jana to jedno z najbardziej symbolicznych dzieł literatury biblijnej.",
        "Motyw końca świata od wieków fascynuje twórców i odbiorców kultury.",
        "Wizja Sądu Ostatecznego stanowi centralny element chrześcijańskiej eschatologii.",
      ],
    },
  },
  {
    id: 5,
    title: "Mitologia, cz. I Grecja",
    author: "Jan Parandowski",
    year: 1924,
    epoch: "XX-lecie międzywojenne",
    summary: {
      short:
        "Zbiór mitów greckich opracowanych i zinterpretowanych przez Jana Parandowskiego, ukazujący wierzenia starożytnych Greków, ich bogów, herosów oraz wyobrażenia o świecie i człowieku.",
      detailed:
        "„Mitologia” Jana Parandowskiego to literackie opracowanie mitów starożytnej Grecji, które przedstawia system wierzeń, wyobrażenia o powstaniu świata, bogach, herosach i losach ludzi. Autor rozpoczyna od kosmogonii – opowieści o powstaniu świata z Chaosu, wyłonieniu się Gai (Ziemi), Uranosa (Nieba) oraz narodzinach tytanów. Następnie ukazuje walkę o władzę między pokoleniami bogów – Kronos obala Uranosa, a później sam zostaje pokonany przez Zeusa.\n\nW kolejnych częściach przedstawiony jest świat bogów olimpijskich – Zeus jako najwyższy władca, Hera jako jego małżonka, Atena jako bogini mądrości, Apollo – sztuki i światła, Artemida – łowów, Afrodyta – miłości, Ares – wojny, Hefajstos – ognia i rzemiosła, Hermes – posłaniec bogów. Ukazany zostaje także świat podziemny rządzony przez Hadesa.\n\nNastępnie autor prezentuje mity o człowieku – jego stworzeniu przez Prometeusza, który daje ludziom ogień, za co zostaje ukarany przez Zeusa. Pojawia się także historia Pandory i jej puszki jako wyjaśnienie źródła nieszczęść.\n\nKolejna część skupia się na mitach heroicznych. Opisane są dzieje Perseusza (pokonanie Meduzy), Heraklesa (dwanaście prac), Tezeusza (zabicie Minotaura), Jazona i Argonautów (wyprawa po złote runo), a także tragiczne losy Edypa i Antygony. Ważnym elementem jest także wojna trojańska – konflikt między Grekami a Trojanami, w którym uczestniczą herosi tacy jak Achilles, Hektor czy Odyseusz.\n\nOstatnia część przedstawia powroty bohaterów, zwłaszcza Odyseusza, oraz refleksję nad losem człowieka, jego cierpieniem, przeznaczeniem i relacją z bogami. Mitologia Parandowskiego nie tylko opowiada historie, ale także interpretuje je jako uniwersalne opowieści o ludzkiej naturze, moralności i losie.",
      timeline: [
        {
          title: "Powstanie świata",
          description:
            "Chaos, narodziny Gai, Uranosa, tytanów oraz walka Kronosa i Zeusa o władzę.",
        },
        {
          title: "Panowanie bogów olimpijskich",
          description:
            "Ukształtowanie się świata bogów i ich wpływ na losy ludzi.",
        },
        {
          title: "Stworzenie człowieka",
          description:
            "Prometeusz tworzy człowieka i daje mu ogień, co prowadzi do jego kary.",
        },
        {
          title: "Mity heroiczne",
          description:
            "Czyny herosów takich jak Herakles, Tezeusz, Perseusz czy Jazon.",
        },
        {
          title: "Wojna trojańska",
          description:
            "Konflikt Greków z Trojanami oraz udział herosów i bogów.",
        },
        {
          title: "Powroty bohaterów",
          description: "Losy Odyseusza i refleksja nad ludzkim losem.",
        },
      ],
    },
    characters: [
      {
        name: "Zeus",
        description: "Najwyższy bóg olimpijski, władca nieba i piorunów.",
        traits: ["potężny", "sprawiedliwy", "kapryśny"],
        role: "Najwyższy władca bogów",
      },
      {
        name: "Prometeusz",
        description: "Tytan, który stworzył człowieka i dał mu ogień.",
        traits: ["odważny", "buntowniczy", "dobroczyńca ludzkości"],
        role: "Symbol poświęcenia dla ludzi",
      },
      {
        name: "Herakles",
        description:
          "Największy heros grecki, znany z wykonania dwunastu prac.",
        traits: ["silny", "wytrwały", "odważny"],
        role: "Uosobienie heroizmu",
      },
      {
        name: "Atena",
        description: "Bogini mądrości, strategii i sprawiedliwej wojny.",
        traits: ["mądra", "rozsądna", "sprawiedliwa"],
        role: "Opiekunka bohaterów",
      },
      {
        name: "Odyseusz",
        description: "Król Itaki, bohater wojny trojańskiej i symbol sprytu.",
        traits: ["inteligentny", "przebiegły", "wytrwały"],
        role: "Bohater podróżnik",
      },
      {
        name: "Hades",
        description: "Bóg podziemi i świata zmarłych.",
        traits: ["surowy", "sprawiedliwy", "niedostępny"],
        role: "Władca świata zmarłych",
      },
    ],
    themes: [
      {
        name: "Los i przeznaczenie",
        description:
          "Człowiek jest podporządkowany fatum, którego nie może uniknąć.",
      },
      {
        name: "Relacja człowieka z bogami",
        description: "Bogowie ingerują w życie ludzi, nagradzając lub karząc.",
      },
      {
        name: "Heroizm",
        description:
          "Bohaterowie podejmują nadludzkie wyzwania, często kosztem własnego życia.",
      },
      {
        name: "Pycha i kara",
        description: "Hybris prowadzi do upadku i kary ze strony bogów.",
      },
    ],
    motifs: [
      {
        name: "Motyw labiryntu",
        meaning: "Symbol zagubienia i poszukiwania drogi wyjścia (Tezeusz).",
      },
      {
        name: "Motyw podróży",
        meaning: "Symbol dojrzewania i poznawania świata (Odyseusz).",
      },
      {
        name: "Motyw kary",
        meaning: "Konsekwencje buntu przeciw bogom (Prometeusz, Syzyf).",
      },
      {
        name: "Motyw przemiany",
        meaning: "Metamorfozy jako wyraz ingerencji bogów w życie ludzi.",
      },
    ],
    contexts: [
      {
        title: "Biblia",
        description:
          "Porównanie mitu o stworzeniu świata z biblijną Księgą Rodzaju.",
      },
      {
        title: "Antygona Sofoklesa",
        description: "Motyw konfliktu między prawem boskim a ludzkim.",
      },
      {
        title: "Kultura europejska",
        description:
          "Mitologia jako fundament kultury, sztuki i literatury europejskiej.",
      },
      {
        title: "Filozofia antyczna",
        description:
          "Wpływ mitów na rozwój myśli filozoficznej w starożytnej Grecji.",
      },
    ],
    quotes: [
      {
        text: "Mit jest opowieścią świętą.",
        explanation:
          "Podkreślenie religijnego i symbolicznego znaczenia mitów.",
      },
      {
        text: "Człowiek jest igraszką losu.",
        explanation: "Ukazanie zależności człowieka od przeznaczenia.",
      },
    ],
    terms: [
      {
        name: "Mit",
        meaning: "Opowieść wyjaśniająca powstanie świata, zjawisk i wierzeń.",
      },
      {
        name: "Fatum",
        meaning: "Nieuchronne przeznaczenie kierujące losem człowieka.",
      },
      {
        name: "Hybris",
        meaning: "Pycha prowadząca do kary boskiej.",
      },
      {
        name: "Heros",
        meaning: "Półbóg lub bohater o nadludzkich zdolnościach.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Omów rolę mitów w kulturze antycznej.",
        "Wyjaśnij pojęcie fatum na przykładach z mitologii.",
        "Przedstaw motyw kary za pychę w mitologii.",
        "Scharakteryzuj relację między bogami a ludźmi.",
      ],
      keywords: [
        "mit",
        "fatum",
        "hybris",
        "bogowie olimpijscy",
        "heros",
        "Prometeusz",
      ],
      commonMistakes: [
        "Traktowanie mitów jako zwykłych bajek bez znaczenia symbolicznego.",
        "Mylenie bohaterów i ich czynów.",
        "Brak odniesienia do kontekstów kulturowych.",
      ],
      introStarters: [
        "Mitologia grecka stanowi fundament kultury europejskiej...",
        "Jednym z najważniejszych motywów mitologii jest problem przeznaczenia...",
        "Relacja między bogami a ludźmi w mitologii ukazuje...",
      ],
    },
  },
  {
    id: 6,
    title: "Iliada (fragmenty)",
    author: "Homer",
    year: "VIII w. p.n.e.",
    epoch: "Antyk",
    summary: {
      short:
        "Epos opowiada o wydarzeniach z ostatniego roku wojny trojańskiej, koncentrując się na gniewie Achillesa i jego konsekwencjach dla losów Greków i Trojan.",
      detailed:
        "Akcja „Iliady” obejmuje niewielki wycinek wojny trojańskiej, skupiając się na konflikcie Achillesa z Agamemnonem. Spór wybucha, gdy Agamemnon odbiera Achillesowi brankę Bryzeidę, co obraża honor herosa. Achilles wycofuje się z walki, co prowadzi do przewagi Trojan.\n\nHektor, najdzielniejszy z Trojan, odnosi sukcesy na polu bitwy, spychając Greków pod ich okręty. W obliczu zagrożenia Patroklos, przyjaciel Achillesa, wyrusza do walki w jego zbroi. Początkowo odnosi sukcesy, lecz zostaje zabity przez Hektora.\n\nŚmierć Patroklosa wywołuje u Achillesa ogromny gniew i pragnienie zemsty. Powraca na pole bitwy, gdzie doprowadza do licznych zwycięstw Greków i w końcu zabija Hektora w pojedynku. Następnie znieważa jego ciało, ciągnąc je za rydwanem.\n\nKulminacją utworu jest scena spotkania Achillesa z Priamem, królem Troi, który przybywa do obozu Greków, by wykupić ciało syna. Achilles, poruszony jego cierpieniem, oddaje ciało Hektora. Epos kończy się pogrzebem Hektora, podkreślając przemijalność życia i tragizm wojny.",
      timeline: [
        {
          title: "Spór Achillesa z Agamemnonem",
          description:
            "Konflikt o brankę Bryzeidę prowadzi do wycofania się Achillesa z walki.",
        },
        {
          title: "Sukcesy Trojan",
          description:
            "Pod wodzą Hektora Trojanie zdobywają przewagę nad Grekami.",
        },
        {
          title: "Śmierć Patroklosa",
          description:
            "Patroklos ginie z rąk Hektora, co staje się punktem zwrotnym utworu.",
        },
        {
          title: "Powrót Achillesa",
          description: "Achilles wraca do walki, by pomścić przyjaciela.",
        },
        {
          title: "Pojedynek Achillesa z Hektorem",
          description: "Achilles zabija Hektora i znieważa jego ciało.",
        },
        {
          title: "Spotkanie z Priamem",
          description:
            "Priam prosi Achillesa o zwrot ciała syna, co prowadzi do chwilowego pojednania.",
        },
      ],
    },
    characters: [
      {
        name: "Achilles",
        description:
          "Najdzielniejszy z Greków, syn Tetydy, bohater o ogromnej sile i dumie.",
        traits: ["odważny", "porywczy", "honorowy", "mściwy"],
        role: "Główny bohater, którego gniew stanowi oś fabularną utworu.",
      },
      {
        name: "Hektor",
        description:
          "Najważniejszy obrońca Troi, syn Priama, wzór rycerza i patrioty.",
        traits: ["odważny", "lojalny", "odpowiedzialny", "szlachetny"],
        role: "Przeciwnik Achillesa, symbol heroizmu i obowiązku wobec ojczyzny.",
      },
      {
        name: "Agamemnon",
        description: "Wódz Greków, brat Menelaosa, dumny i autorytarny.",
        traits: ["pyszny", "władczy", "egoistyczny"],
        role: "Wywołuje konflikt z Achillesem.",
      },
      {
        name: "Patroklos",
        description:
          "Najbliższy przyjaciel Achillesa, wierny i odważny wojownik.",
        traits: ["lojalny", "odważny", "oddany"],
        role: "Jego śmierć motywuje Achillesa do powrotu do walki.",
      },
      {
        name: "Priam",
        description:
          "Król Troi, ojciec Hektora, symbol ojcowskiego cierpienia.",
        traits: ["pokorny", "odważny", "kochający"],
        role: "Ukazuje ludzką stronę konfliktu poprzez swoją prośbę do Achillesa.",
      },
      {
        name: "Helena",
        description:
          "Najpiękniejsza kobieta świata, której porwanie stało się przyczyną wojny.",
        traits: ["piękna", "refleksyjna", "pełna żalu"],
        role: "Symbol przyczyny konfliktu.",
      },
    ],
    themes: [
      {
        name: "Gniew",
        description:
          "Gniew Achillesa jest siłą napędową wydarzeń i prowadzi do tragedii.",
      },
      {
        name: "Honor i sława",
        description:
          "Bohaterowie kierują się kodeksem honorowym i pragnieniem nieśmiertelnej sławy.",
      },
      {
        name: "Los (fatum)",
        description:
          "Ludzkie życie podlega nieuchronnemu przeznaczeniu, którego nie można uniknąć.",
      },
      {
        name: "Wojna i jej okrucieństwo",
        description: "Epos ukazuje brutalność wojny oraz cierpienie ludzi.",
      },
      {
        name: "Człowieczeństwo",
        description:
          "Scena z Priamem ukazuje zdolność do współczucia nawet u największego wojownika.",
      },
    ],
    motifs: [
      {
        name: "Motyw heroizmu",
        meaning: "Ukazuje ideał wojownika gotowego poświęcić życie dla chwały.",
      },
      {
        name: "Motyw śmierci",
        meaning: "Podkreśla nieuchronność śmierci i przemijalność życia.",
      },
      {
        name: "Motyw przyjaźni",
        meaning:
          "Relacja Achillesa i Patroklosa ukazuje siłę więzi międzyludzkich.",
      },
      {
        name: "Motyw zemsty",
        meaning: "Zemsta Achillesa napędza akcję i prowadzi do tragedii.",
      },
    ],
    contexts: [
      {
        title: "Mitologia grecka",
        description:
          "Postacie i wydarzenia wpisują się w świat mitologii, gdzie bogowie ingerują w losy ludzi.",
      },
      {
        title: "Biblia",
        description:
          "Motyw cierpienia i przemijalności można porównać z Księgą Hioba.",
      },
      {
        title: "Antyczny ideał bohatera",
        description: "Achilles i Hektor reprezentują różne modele heroizmu.",
      },
      {
        title: "„Pieśń o Rolandzie”",
        description: "Podobny etos rycerski i motyw honoru.",
      },
    ],
    quotes: [
      {
        text: "Gniew, bogini, opiewaj Achilla, syna Peleusa...",
        explanation:
          "Inwokacja zapowiada główny temat utworu – gniew Achillesa.",
      },
      {
        text: "Tak więc los człowieczy jest krótki i pełen cierpienia.",
        explanation: "Ukazuje tragizm ludzkiego życia i przemijalność.",
      },
    ],
    terms: [
      {
        name: "Epos",
        meaning:
          "Rozbudowany utwór epicki, przedstawiający losy bohaterów na tle wydarzeń historycznych lub legendarnych.",
      },
      {
        name: "Inwokacja",
        meaning: "Uroczysty zwrot do bóstwa na początku utworu.",
      },
      {
        name: "Fatum",
        meaning: "Nieuchronne przeznaczenie, któremu podlegają bohaterowie.",
      },
      {
        name: "Heksametr",
        meaning: "Miara wierszowa charakterystyczna dla eposów antycznych.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Na czym polega tragizm Achillesa?",
        "Jak przedstawiony jest motyw honoru w „Iliadzie”?",
        "Porównaj postawy Achillesa i Hektora.",
        "Jaką rolę odgrywa los w życiu bohaterów?",
        "Czy Achilles jest bohaterem pozytywnym?",
      ],
      keywords: [
        "gniew Achillesa",
        "honor",
        "heroizm",
        "fatum",
        "wojna trojańska",
        "tragizm",
      ],
      commonMistakes: [
        "Mylenie wydarzeń z całej wojny trojańskiej z treścią „Iliady”.",
        "Pomijanie roli Patroklosa w przemianie Achillesa.",
        "Sprowadzanie Achillesa wyłącznie do postaci negatywnej.",
        "Brak odniesień do kontekstu antycznego.",
      ],
      introStarters: [
        "„Iliada” Homera to jedno z najważniejszych dzieł literatury antycznej, ukazujące...",
        "Motyw heroizmu w „Iliadzie” realizowany jest poprzez postaci takie jak...",
        "Konflikt Achillesa i Agamemnona stanowi punkt wyjścia do refleksji nad...",
        "Epos Homera ukazuje człowieka uwikłanego w konflikt między honorem a...",
      ],
    },
  },
  {
    id: 7,
    title: "Antygona",
    author: "Sofokles",
    year: "ok. 442 p.n.e.",
    epoch: "Antyk",
    summary: {
      short:
        "Tragedia ukazująca konflikt między prawem boskim a ludzkim na przykładzie decyzji Antygony, która sprzeciwia się zakazowi Kreona i grzebie brata, za co zostaje skazana na śmierć.",
      detailed:
        "Akcja tragedii rozgrywa się w Tebach po bratobójczej walce Eteoklesa i Polinejkesa. Nowy władca, Kreon, nakazuje pochować Eteoklesa z honorami, natomiast zakazuje grzebania Polinejkesa jako zdrajcy. Antygona, siostra poległych, uznaje prawo boskie za nadrzędne wobec ludzkiego i postanawia pochować brata mimo zakazu. Jej siostra Ismena odmawia udziału w tym czynie.\n\nAntygona zostaje przyłapana na łamaniu zakazu i doprowadzona przed Kreona. Władca, nieugięty i przekonany o słuszności swoich praw, skazuje ją na śmierć poprzez zamurowanie w skalnej grocie. Hajmon, syn Kreona i narzeczony Antygony, próbuje przekonać ojca do zmiany decyzji, lecz bezskutecznie.\n\nWieszcz Tejrezjasz ostrzega Kreona przed gniewem bogów i konsekwencjami jego decyzji. Kreon w końcu decyduje się uwolnić Antygonę i pochować Polinejkesa, lecz jest już za późno – Antygona popełnia samobójstwo. Hajmon, odnajdując ją martwą, odbiera sobie życie, a jego matka Eurydyka, dowiedziawszy się o śmierci syna, również popełnia samobójstwo. Kreon zostaje sam, złamany i świadomy swojej winy.",
      timeline: [
        {
          title: "Zakaz Kreona",
          description: "Kreon obejmuje władzę i zakazuje pochówku Polinejkesa.",
        },
        {
          title: "Decyzja Antygony",
          description: "Antygona postanawia pochować brata mimo zakazu.",
        },
        {
          title: "Schwytanie Antygony",
          description:
            "Strażnicy przyłapują Antygonę i doprowadzają ją przed Kreona.",
        },
        {
          title: "Wyrok",
          description: "Kreon skazuje Antygonę na śmierć.",
        },
        {
          title: "Interwencja Hajmona",
          description: "Syn Kreona próbuje wpłynąć na decyzję ojca.",
        },
        {
          title: "Przepowiednia Tejrezjasza",
          description: "Wieszcz ostrzega Kreona przed konsekwencjami.",
        },
        {
          title: "Tragiczny finał",
          description: "Śmierć Antygony, Hajmona i Eurydyki.",
        },
      ],
    },
    characters: [
      {
        name: "Antygona",
        description:
          "Córka Edypa, która kieruje się prawem boskim i moralnością.",
        traits: ["odważna", "zdeterminowana", "wierna zasadom", "tragiczna"],
        role: "Bohaterka tragiczna",
      },
      {
        name: "Kreon",
        description: "Król Teb, który stawia prawo państwowe ponad boskim.",
        traits: ["dumny", "autorytarny", "nieugięty", "tragiczny"],
        role: "Władca tyran",
      },
      {
        name: "Ismena",
        description:
          "Siostra Antygony, podporządkowana władzy i bojąca się konsekwencji.",
        traits: ["uległa", "ostrożna", "lojalna"],
        role: "Kontrast bohaterki",
      },
      {
        name: "Hajmon",
        description:
          "Syn Kreona i narzeczony Antygony, próbujący pogodzić konflikt.",
        traits: ["rozsądny", "lojalny", "uczuciowy"],
        role: "Pośrednik",
      },
      {
        name: "Tejrezjasz",
        description:
          "Ślepy wieszcz, który ostrzega Kreona przed gniewem bogów.",
        traits: ["mądry", "proroczy", "autorytatywny"],
        role: "Wieszcz",
      },
      {
        name: "Chór",
        description:
          "Zbiorowy komentator wydarzeń, reprezentujący społeczeństwo.",
        traits: ["refleksyjny", "tradycyjny"],
        role: "Komentator",
      },
    ],
    themes: [
      {
        name: "Konflikt prawa boskiego i ludzkiego",
        description:
          "Centralny problem tragedii – starcie dwóch systemów wartości.",
      },
      {
        name: "Wina i kara",
        description: "Kreon ponosi konsekwencje swoich decyzji.",
      },
      {
        name: "Tragizm jednostki",
        description: "Bohaterowie są uwikłani w sytuacje bez dobrego wyjścia.",
      },
      {
        name: "Władza i pycha",
        description: "Pycha Kreona prowadzi do jego upadku.",
      },
    ],
    motifs: [
      {
        name: "Prawo",
        meaning: "Zderzenie norm boskich i ludzkich.",
      },
      {
        name: "Śmierć",
        meaning: "Nieunikniona konsekwencja tragicznych wyborów.",
      },
      {
        name: "Rodzina",
        meaning: "Silne więzi rodzinne jako motyw działań bohaterów.",
      },
      {
        name: "Bunt",
        meaning: "Sprzeciw wobec niesprawiedliwości.",
      },
    ],
    contexts: [
      {
        title: "Mitologia grecka",
        description:
          "Historia rodu Labdakidów i losów Edypa stanowi tło wydarzeń.",
      },
      {
        title: "Biblia",
        description: "Motyw posłuszeństwa wobec prawa boskiego ponad ludzkim.",
      },
      {
        title: "Totalitaryzm XX wieku",
        description: "Konflikt jednostki z opresyjną władzą.",
      },
      {
        title: "Kordian",
        description: "Dylematy moralne jednostki wobec władzy.",
      },
    ],
    quotes: [
      {
        text: "Nie urodziłam się, by współnienawidzić, lecz by współkochać.",
        explanation:
          "Wyraża system wartości Antygony – miłość ponad nienawiść.",
      },
      {
        text: "Państwo to ja.",
        explanation:
          "Postawa Kreona utożsamiającego siebie z władzą absolutną.",
      },
    ],
    terms: [
      {
        name: "Tragizm",
        meaning:
          "Sytuacja bez dobrego rozwiązania, każdy wybór prowadzi do klęski.",
      },
      {
        name: "Katharsis",
        meaning: "Oczyszczenie emocjonalne widza poprzez przeżywanie tragedii.",
      },
      {
        name: "Hybris",
        meaning: "Pycha bohatera prowadząca do jego upadku.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Na czym polega konflikt tragiczny w Antygonie?",
        "Czy Antygona miała rację, sprzeciwiając się Kreonowi?",
        "Jaką rolę odgrywa władza w życiu człowieka?",
        "Czy prawo boskie powinno być ważniejsze od ludzkiego?",
      ],
      keywords: [
        "konflikt tragiczny",
        "prawo boskie",
        "prawo ludzkie",
        "hybris",
        "tragizm",
        "Antygona",
        "Kreon",
      ],
      commonMistakes: [
        "Utożsamianie Antygony wyłącznie z buntem bez kontekstu religijnego.",
        "Pomijanie roli Tejrezjasza.",
        "Brak analizy tragizmu Kreona.",
        "Zbyt ogólne omawianie konfliktu.",
      ],
      introStarters: [
        "Tragedia Sofoklesa ukazuje ponadczasowy konflikt wartości.",
        "Jednym z najważniejszych problemów poruszonych w Antygonie jest...",
        "Postać Antygony stanowi przykład bohatera tragicznego, ponieważ...",
      ],
    },
  },
  {
    id: 8,
    title: "Lament świętokrzyski (fragmenty)",
    author: "Anonim",
    year: "XV w.",
    epoch: "Średniowiecze",
    summary: {
      short:
        "Monolog Matki Boskiej opłakującej śmierć Jezusa, ukazujący jej ludzkie cierpienie i bezsilność wobec losu.",
      detailed:
        "Utwór ma formę bezpośredniego, emocjonalnego monologu Matki Boskiej stojącej pod krzyżem Chrystusa. Maryja zwraca się do różnych adresatów: do ludzi, do swojego Syna oraz do anioła Gabriela. Prosi o współczucie i zrozumienie swojego bólu, podkreślając, że doświadcza cierpienia jak każda matka tracąca dziecko. Opisuje mękę Jezusa, jego fizyczne cierpienie oraz własną bezradność wobec jego losu. Wyraża żal, że nie może ulżyć synowi w cierpieniu ani umrzeć zamiast niego. Wspomina moment zwiastowania, kontrastując dawną radość z obecną tragedią. Utwór ukazuje Maryję nie jako niedostępną królową niebios, lecz jako zwykłą matkę przeżywającą ogromny ból. Całość ma charakter lamentacyjny i silnie emocjonalny, a jej celem jest wzbudzenie współczucia i refleksji nad cierpieniem.",
      timeline: [
        {
          title: "Zwrot do odbiorców",
          description:
            "Maryja zwraca się do ludzi, prosząc o współczucie i uwagę wobec swojego cierpienia.",
        },
        {
          title: "Opis męki Chrystusa",
          description:
            "Matka obserwuje cierpienie Jezusa na krzyżu i opisuje jego fizyczny ból.",
        },
        {
          title: "Bezradność matki",
          description:
            "Maryja wyraża rozpacz z powodu niemożności pomocy synowi.",
        },
        {
          title: "Wspomnienie zwiastowania",
          description:
            "Kontrast między radosnym zwiastowaniem a tragiczną teraźniejszością.",
        },
        {
          title: "Kulminacja lamentu",
          description:
            "Maryja osiąga szczyt emocjonalnego bólu, podkreślając swoją ludzką naturę.",
        },
      ],
    },
    characters: [
      {
        name: "Matka Boska",
        description:
          "Matka Jezusa, ukazana jako cierpiąca kobieta przeżywająca śmierć syna.",
        traits: ["cierpiąca", "bezradna", "emocjonalna", "ludzka", "kochająca"],
        role: "Cierpiąca matka",
      },
      {
        name: "Jezus Chrystus",
        description:
          "Syn Maryi, ukrzyżowany, którego męka jest centralnym punktem lamentu.",
        traits: ["cierpiący", "niewinny", "ofiarny"],
        role: "Ukrzyżowany syn",
      },
      {
        name: "Archanioł Gabriel",
        description:
          "Posłaniec zwiastowania, przywołany przez Maryję jako kontrast do obecnej sytuacji.",
        traits: ["boski", "posłaniec"],
        role: "Zwiastun boski",
      },
    ],
    themes: [
      {
        name: "Cierpienie matki",
        description:
          "Ukazanie bólu matki tracącej dziecko jako doświadczenia uniwersalnego i ludzkiego.",
      },
      {
        name: "Humanizacja sacrum",
        description:
          "Przedstawienie postaci świętej jako zwykłego człowieka odczuwającego emocje.",
      },
      {
        name: "Męka Chrystusa",
        description:
          "Opis cierpienia Jezusa jako centralnego wydarzenia religijnego i emocjonalnego.",
      },
      {
        name: "Bezradność wobec losu",
        description:
          "Niemożność zmiany przeznaczenia i cierpienia bliskiej osoby.",
      },
    ],
    motifs: [
      {
        name: "Stabat Mater",
        meaning: "Motyw Matki Boskiej stojącej pod krzyżem i opłakującej syna.",
      },
      {
        name: "Matka bolejąca",
        meaning:
          "Obraz matki przeżywającej największy możliwy ból – śmierć dziecka.",
      },
      {
        name: "Kontrast",
        meaning: "Zestawienie radości zwiastowania z tragedią ukrzyżowania.",
      },
      {
        name: "Lament",
        meaning: "Forma wypowiedzi wyrażająca żal, ból i rozpacz.",
      },
    ],
    contexts: [
      {
        title: "Biblia",
        description:
          "Opis męki Chrystusa w Ewangeliach stanowi podstawę fabularną utworu.",
      },
      {
        title: "Średniowieczna pobożność",
        description:
          "Silne skupienie na emocjonalnym przeżywaniu religii i współczuciu dla cierpienia Chrystusa.",
      },
      {
        title: "Motyw Stabat Mater",
        description:
          "Popularny w średniowieczu motyw literacki i ikonograficzny przedstawiający Maryję pod krzyżem.",
      },
      {
        title: "Teocentryzm",
        description:
          "Dominująca w średniowieczu koncepcja świata podporządkowanego Bogu i religii.",
      },
    ],
    quotes: [
      {
        text: "Posłuchajcie, bracia miła",
        explanation:
          "Bezpośredni zwrot do odbiorców, mający wzbudzić współczucie i uwagę.",
      },
      {
        text: "O anjele Gabryjele, gdzieś jest ono twe wesele",
        explanation: "Wyrażenie żalu i kontrast wobec radosnego zwiastowania.",
      },
      {
        text: "Synku miły i wybrany",
        explanation:
          "Czuły zwrot podkreślający relację matki i dziecka oraz emocjonalny charakter utworu.",
      },
    ],
    terms: [
      {
        name: "Lament",
        meaning:
          "Utwór wyrażający żal i rozpacz, często o charakterze religijnym.",
      },
      {
        name: "Stabat Mater",
        meaning: "Motyw przedstawiający Matkę Boską stojącą pod krzyżem.",
      },
      {
        name: "Deesis",
        meaning:
          "Motyw w sztuce przedstawiający Chrystusa oraz wstawiających się za ludźmi Maryję i Jana Chrzciciela.",
      },
      {
        name: "Apokryf",
        meaning:
          "Utwór religijny nieuznany za kanoniczny, rozwijający wątki biblijne.",
      },
    ],
    exam: {
      possibleQuestions: [
        'Jak w "Lamencie świętokrzyskim" przedstawiona jest Matka Boska?',
        "Na czym polega humanizacja postaci Maryi w utworze?",
        'Jakie funkcje pełni motyw cierpienia w "Lamencie świętokrzyskim"?',
        "Omów emocjonalny charakter utworu i jego środki wyrazu.",
        "Jakie znaczenie ma motyw Stabat Mater w literaturze średniowiecznej?",
      ],
      keywords: [
        "cierpienie",
        "Matka Boska",
        "lament",
        "Stabat Mater",
        "humanizacja",
        "średniowiecze",
        "męka Chrystusa",
      ],
      commonMistakes: [
        "Traktowanie Maryi wyłącznie jako postaci boskiej, bez uwzględnienia jej ludzkich emocji.",
        "Pomijanie kontekstu religijnego i biblijnego utworu.",
        "Niedostrzeganie kontrastu między zwiastowaniem a ukrzyżowaniem.",
        "Ograniczanie analizy do streszczenia bez interpretacji.",
      ],
      introStarters: [
        "„Lament świętokrzyski” to jeden z najważniejszych przykładów średniowiecznej liryki religijnej, ukazujący głębokie emocje Matki Boskiej.",
        "Utwór anonimowego autora przedstawia Maryję w sposób niezwykle ludzki, co stanowi przełom w średniowiecznym postrzeganiu sacrum.",
        "Motyw cierpienia matki w „Lamencie świętokrzyskim” nabiera uniwersalnego wymiaru, wykraczając poza kontekst religijny.",
      ],
    },
  },
  {
    id: 9,
    title: "Rozmowa Mistrza Polikarpa ze Śmiercią (fragmenty)",
    author: "Anonim",
    year: "XV wiek",
    epoch: "Średniowiecze",
    summary: {
      short:
        "Utwór przedstawia dialog uczonego Polikarpa ze spersonifikowaną Śmiercią, która ukazuje swoją wszechwładzę i nieuchronność, krytykując jednocześnie ludzkie wady i grzechy.",
      detailed:
        "Utwór rozpoczyna się modlitwą Mistrza Polikarpa, który prosi Boga o możliwość ujrzenia Śmierci. Jego prośba zostaje spełniona – przed uczonym pojawia się przerażająca postać Śmierci, ukazana jako rozkładające się ciało kobiety, co podkreśla jej makabryczny charakter. Śmierć podejmuje dialog z Polikarpem, tłumacząc swoją rolę w świecie. Wyjaśnia, że jest nieunikniona i dotyka wszystkich ludzi, niezależnie od ich pozycji społecznej, majątku czy moralności.\n\nW dalszej części rozmowy Śmierć wylicza różne grupy społeczne – duchowieństwo, rycerstwo, mieszczan, chłopów – i wskazuje ich wady oraz grzechy. Szczególnie ostro krytykuje przedstawicieli Kościoła za hipokryzję i chciwość. Ukazuje świat jako miejsce moralnego upadku, gdzie ludzie zapominają o wartościach duchowych.\n\nŚmierć podkreśla swoją potęgę – nikt nie jest w stanie jej uniknąć ani przekupić. Jest narzędziem boskiej sprawiedliwości, które przypomina o przemijaniu i konieczności życia zgodnego z zasadami moralnymi. Utwór ma charakter dydaktyczny i moralizatorski – jego celem jest skłonienie odbiorcy do refleksji nad własnym życiem i przygotowania się na śmierć.\n\nRozmowa kończy się uświadomieniem Polikarpa o nieuchronności śmierci oraz potrzebie życia w zgodzie z wartościami chrześcijańskimi.",
      timeline: [
        {
          title: "Modlitwa Polikarpa",
          description:
            "Mistrz Polikarp prosi Boga o możliwość zobaczenia Śmierci.",
        },
        {
          title: "Pojawienie się Śmierci",
          description:
            "Ukazuje się makabryczna postać Śmierci jako rozkładające się ciało kobiety.",
        },
        {
          title: "Rozmowa",
          description:
            "Śmierć wyjaśnia swoją rolę i nieuchronność wobec wszystkich ludzi.",
        },
        {
          title: "Krytyka społeczeństwa",
          description: "Śmierć wylicza grzechy różnych stanów społecznych.",
        },
        {
          title: "Moralne przesłanie",
          description:
            "Utwór kończy się refleksją nad koniecznością życia zgodnego z zasadami moralnymi.",
        },
      ],
    },
    characters: [
      {
        name: "Mistrz Polikarp",
        description:
          "Uczony, który pragnie poznać tajemnicę śmierci i prowadzi z nią dialog.",
        traits: ["ciekawość", "pobożność", "rozumność", "refleksyjność"],
        role: "Poszukujący prawdy uczony",
      },
      {
        name: "Śmierć",
        description:
          "Spersonifikowana postać ukazana jako rozkładające się ciało kobiety, symbolizująca nieuchronność kresu życia.",
        traits: ["nieubłagana", "wszechpotężna", "ironiczna", "bezwzględna"],
        role: "Uosobienie nieuchronności",
      },
    ],
    themes: [
      {
        name: "Nieuchronność śmierci",
        description:
          "Śmierć dotyka każdego człowieka bez względu na jego status społeczny czy majątek.",
      },
      {
        name: "Vanitas",
        description: "Motyw przemijania i marności życia doczesnego.",
      },
      {
        name: "Krytyka społeczna",
        description:
          "Utwór ukazuje wady i grzechy różnych grup społecznych, zwłaszcza duchowieństwa.",
      },
      {
        name: "Moralitet",
        description:
          "Tekst pełni funkcję dydaktyczną, wskazując na konieczność życia zgodnego z zasadami moralnymi.",
      },
    ],
    motifs: [
      {
        name: "Dance macabre",
        meaning:
          "Motyw tańca śmierci ukazujący równość wszystkich ludzi wobec śmierci.",
      },
      {
        name: "Ars moriendi",
        meaning:
          "Sztuka dobrego umierania – przygotowanie się na śmierć poprzez życie moralne.",
      },
      {
        name: "Rozkład ciała",
        meaning: "Podkreślenie fizycznego aspektu śmierci i przemijania.",
      },
    ],
    contexts: [
      {
        title: "Biblia",
        description:
          "Motyw przemijania i sądu ostatecznego, który podkreśla konieczność życia moralnego.",
      },
      {
        title: "Danse macabre w sztuce średniowiecznej",
        description:
          "Popularny motyw ukazujący śmierć jako równą dla wszystkich stanów społecznych.",
      },
      {
        title: "Moralitety średniowieczne",
        description:
          "Utwory dydaktyczne, które pouczały o właściwym życiu i przygotowaniu do śmierci.",
      },
    ],
    quotes: [
      {
        text: "Ja jestem śmierć, co wszystko morzy.",
        explanation: "Podkreślenie wszechwładzy i nieuchronności śmierci.",
      },
      {
        text: "Wszystkich ludzi ja zrównam.",
        explanation:
          "Motyw równości wszystkich wobec śmierci, niezależnie od statusu.",
      },
    ],
    terms: [
      {
        name: "Personifikacja",
        meaning:
          "Nadanie cech ludzkich pojęciu abstrakcyjnemu – tutaj Śmierci.",
      },
      {
        name: "Moralitet",
        meaning:
          "Utwór dydaktyczny ukazujący walkę dobra ze złem i pouczający odbiorcę.",
      },
      {
        name: "Vanitas",
        meaning: "Motyw marności i przemijania życia ludzkiego.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Jak przedstawiona jest śmierć w utworze?",
        "Na czym polega uniwersalizm przesłania utworu?",
        "Jakie funkcje pełni krytyka społeczna w tekście?",
        "W jaki sposób utwór realizuje założenia moralitetu?",
        "Jakie znaczenie ma motyw danse macabre?",
      ],
      keywords: [
        "śmierć",
        "vanitas",
        "moralitet",
        "średniowiecze",
        "danse macabre",
        "krytyka społeczna",
        "ars moriendi",
      ],
      commonMistakes: [
        "Traktowanie utworu wyłącznie jako groteski bez dostrzeżenia jego funkcji dydaktycznej.",
        "Pomijanie krytyki duchowieństwa.",
        "Niedostrzeganie uniwersalnego charakteru przesłania.",
      ],
      introStarters: [
        "Motyw śmierci stanowi jeden z kluczowych tematów literatury średniowiecznej.",
        "Utwór „Rozmowa Mistrza Polikarpa ze Śmiercią” jest przykładem moralitetu o silnym przesłaniu dydaktycznym.",
        "Średniowieczna wizja świata opierała się na przekonaniu o przemijalności życia doczesnego.",
      ],
    },
  },
  {
    id: 10,
    title: "Pieśń o Rolandzie (fragmenty)",
    author: "anonim",
    year: "XI wiek",
    epoch: "Średniowiecze",
    summary: {
      short:
        "Epos rycerski opowiadający o bohaterskiej śmierci Rolanda podczas odwrotu wojsk Karola Wielkiego z Hiszpanii, zdradzie Ganelona i konflikcie z Saracenami.",
      detailed:
        "Utwór rozpoczyna się w momencie, gdy Karol Wielki po siedmiu latach walk w Hiszpanii zdobywa niemal całe terytorium oprócz Saragossy, rządzonej przez króla Marsyla. Marsyl, chcąc uniknąć dalszej walki, proponuje pozorny pokój i wysyła posłów do Karola. Na dworze Karola trwa narada, kto ma udać się jako posłaniec do Marsyla. Roland proponuje swojego ojczyma Ganelona, co ten odbiera jako zniewagę. Ganelon, pałający żądzą zemsty, zdradza Rolanda i zawiera tajne porozumienie z Saracenami – ustala zasadzkę na tylną straż wojsk Franków.\n\nPodczas odwrotu armii Karola przez Pireneje Roland dowodzi tylną strażą. Towarzyszy mu m.in. Oliwier oraz arcybiskup Turpin. Gdy Saraceni atakują, Oliwier nakłania Rolanda, by zadął w róg (olifant) i wezwał pomoc, lecz Roland odmawia, kierując się honorem rycerskim i dumą. Dochodzi do krwawej bitwy, w której Frankowie, mimo ogromnej przewagi wroga, walczą niezwykle dzielnie. Kolejni bohaterowie giną, w tym Oliwier.\n\nWidząc klęskę, Roland w końcu dmie w róg tak mocno, że pękają mu skronie. Karol słyszy sygnał i zawraca, lecz jest już za późno. Roland umiera, kładąc się twarzą ku Hiszpanii, ofiarowując Bogu swoją rękawicę i miecz Durendal. Zostaje ukazany jako wzór idealnego rycerza chrześcijańskiego.\n\nKarol mści się na Saracenach, pokonując ich armię i zmuszając Marsyla do ucieczki. Następnie powraca do Akwizgranu, gdzie Ganelon zostaje oskarżony o zdradę. Dochodzi do sądu bożego – pojedynek rozstrzyga o jego winie. Ganelon zostaje uznany za zdrajcę i skazany na śmierć. Utwór kończy się wizją kolejnej wyprawy Karola w obronie chrześcijaństwa.",
      timeline: [
        {
          title: "Propozycja pokoju Marsyla",
          description:
            "Król Saracenów wysyła posłów do Karola Wielkiego, oferując pozorną uległość.",
        },
        {
          title: "Zdrada Ganelona",
          description:
            "Ganelon zawiera tajne porozumienie z Saracenami, planując zasadzkę na Rolanda.",
        },
        {
          title: "Bitwa w wąwozie Roncevaux",
          description:
            "Tylna straż Franków pod dowództwem Rolanda zostaje zaatakowana przez Saracenów.",
        },
        {
          title: "Śmierć Rolanda",
          description:
            "Roland umiera jako bohater, oddając życie za wiarę i ojczyznę.",
        },
        {
          title: "Zemsta Karola",
          description: "Karol Wielki pokonuje Saracenów i przywraca porządek.",
        },
        {
          title: "Sąd nad Ganelonem",
          description: "Zdrajca zostaje skazany na śmierć po sądzie bożym.",
        },
      ],
    },
    characters: [
      {
        name: "Roland",
        description:
          "Bratanek Karola Wielkiego, wybitny rycerz i dowódca tylnej straży.",
        traits: ["odwaga", "honor", "duma", "lojalność", "pobożność"],
        role: "Wzór rycerza chrześcijańskiego",
      },
      {
        name: "Karol Wielki",
        description:
          "Król Franków, władca chrześcijański prowadzący walki z Saracenami.",
        traits: ["mądrość", "sprawiedliwość", "pobożność", "determinacja"],
        role: "Władca chrześcijański",
      },
      {
        name: "Ganelon",
        description:
          "Ojczym Rolanda, który dopuszcza się zdrady z powodu urażonej dumy.",
        traits: ["zdradliwość", "mściwość", "pycha"],
        role: "Zdrajca",
      },
      {
        name: "Oliwier",
        description:
          "Przyjaciel Rolanda, rozsądny rycerz nawołujący do rozwagi.",
        traits: ["roztropność", "odwaga", "lojalność"],
        role: "Rozsądny towarzysz",
      },
      {
        name: "Turpin",
        description:
          "Arcybiskup i wojownik, łączący funkcję duchowną i rycerską.",
        traits: ["pobożność", "odwaga", "poświęcenie"],
        role: "Duchowny wojownik",
      },
      {
        name: "Marsyl",
        description: "Król Saracenów, przeciwnik Karola Wielkiego.",
        traits: ["podstępność", "determinacja"],
        role: "Wróg chrześcijaństwa",
      },
    ],
    themes: [
      {
        name: "Honor rycerski",
        description:
          "Postawa Rolanda pokazuje, że honor i odwaga są najwyższymi wartościami rycerza.",
      },
      {
        name: "Walka dobra ze złem",
        description:
          "Konflikt chrześcijaństwa z Saracenami ma wymiar religijny i moralny.",
      },
      {
        name: "Zdrada i kara",
        description:
          "Zdrada Ganelona zostaje ukarana zgodnie z zasadami sprawiedliwości.",
      },
      {
        name: "Śmierć bohatera",
        description: "Śmierć Rolanda ma charakter heroiczny i sakralny.",
      },
    ],
    motifs: [
      {
        name: "Motyw rycerza idealnego",
        meaning:
          "Roland jako wzór cnót rycerskich: odwagi, lojalności i wiary.",
      },
      {
        name: "Motyw zdrady",
        meaning: "Ganelon symbolizuje zagrożenie wewnętrzne dla wspólnoty.",
      },
      {
        name: "Motyw śmierci",
        meaning: "Śmierć jako moment chwały i przejścia do życia wiecznego.",
      },
      {
        name: "Motyw walki religijnej",
        meaning:
          "Konflikt ukazany jako starcie dwóch światów – chrześcijaństwa i islamu.",
      },
    ],
    contexts: [
      {
        title: "Średniowieczny etos rycerski",
        description:
          "Kodeks wartości rycerskich, takich jak honor, lojalność wobec władcy i obrona wiary.",
      },
      {
        title: "Wyprawy krzyżowe",
        description:
          "Historyczne tło walk chrześcijan z muzułmanami w średniowieczu.",
      },
      {
        title: "Biblia",
        description: "Motyw walki dobra ze złem oraz nagrody za wierność Bogu.",
      },
      {
        title: "Chanson de geste",
        description: "Gatunek epicki opiewający czyny bohaterów i rycerzy.",
      },
    ],
    quotes: [
      {
        text: "Roland czuje, że śmierć go dosięga.",
        explanation:
          "Ukazuje moment przejścia bohatera i jego świadomość nadchodzącego końca.",
      },
      {
        text: "Bogu poleca swoją rękawicę.",
        explanation: "Symbol oddania się Bogu i wiary w zbawienie.",
      },
    ],
    terms: [
      {
        name: "epos rycerski",
        meaning: "Utwór epicki opisujący czyny rycerzy i bohaterów.",
      },
      {
        name: "chanson de geste",
        meaning: "Średniowieczna pieśń o czynach bohaterskich.",
      },
      {
        name: "etos rycerski",
        meaning: "Zespół zasad moralnych obowiązujących rycerza.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Czy Roland jest idealnym rycerzem?",
        "Na czym polega tragizm bohatera w „Pieśni o Rolandzie”?",
        "Jakie wartości reprezentuje średniowieczny rycerz?",
        "Omów motyw zdrady na przykładzie Ganelona.",
      ],
      keywords: [
        "etos rycerski",
        "honor",
        "lojalność",
        "zdrada",
        "średniowiecze",
        "bohater",
        "religia",
      ],
      commonMistakes: [
        "Mylenie wydarzeń historycznych z literacką fikcją.",
        "Pomijanie religijnego wymiaru utworu.",
        "Uznawanie Rolanda za postać bez wad (ignorowanie jego pychy).",
      ],
      introStarters: [
        "„Pieśń o Rolandzie” to jeden z najważniejszych eposów średniowiecznych, ukazujący ideał rycerza chrześcijańskiego.",
        "Motyw rycerza idealnego znajduje swoje pełne odzwierciedlenie w postaci Rolanda.",
        "Średniowieczna literatura często ukazywała konflikt dobra ze złem w wymiarze religijnym.",
      ],
    },
  },
  {
    id: 11,
    title: "Makbet",
    author: "William Szekspir",
    year: "ok. 1606",
    epoch: "Barok",
    summary: {
      short:
        "Tragedia ukazująca mechanizm rodzenia się zbrodni i jej konsekwencje. Makbet, pod wpływem przepowiedni i ambicji, dokonuje morderstwa króla, co prowadzi do jego moralnego upadku i ostatecznej klęski.",
      detailed:
        "Akcja rozpoczyna się od spotkania trzech wiedźm, które zapowiadają Makbetowi, że zostanie królem Szkocji. Wkrótce część przepowiedni się spełnia – Makbet zostaje tanem Kawdoru. Pod wpływem tych wydarzeń oraz namowy żony zaczyna rozważać zamordowanie króla Duncana.\n\nPo przybyciu króla do zamku Makbeta, Lady Makbet przekonuje męża do dokonania zbrodni. Makbet zabija Duncana we śnie i zostaje królem. Od tego momentu zaczyna popadać w coraz większy lęk i paranoję.\n\nAby utrzymać władzę, Makbet zleca zabójstwo Banka – przyjaciela, którego potomkowie według przepowiedni mają zostać królami. Banko ginie, ale jego syn Fleance ucieka. Duch Banka nawiedza Makbeta podczas uczty, co zdradza jego winę.\n\nMakbet ponownie odwiedza wiedźmy, które przekazują mu kolejne przepowiednie: ma się strzec Makdufa, nikt zrodzony z kobiety go nie zabije, a pokona go dopiero ten, kto przyjdzie z lasu Birnam. Makbet interpretuje te słowa jako gwarancję bezpieczeństwa.\n\nW międzyczasie Makduf ucieka do Anglii, a Makbet każe zamordować jego rodzinę. Lady Makbet zaczyna popadać w obłęd, dręczona wyrzutami sumienia. W końcu popełnia samobójstwo.\n\nWojska angielskie wraz z Makdufem ruszają przeciwko Makbetowi. Żołnierze maskują się gałęziami z lasu Birnam, co symbolicznie spełnia przepowiednię. W finale Makduf zabija Makbeta, ujawniając, że nie został „zrodzony z kobiety” w sposób naturalny (urodzony przez cesarskie cięcie). Tron obejmuje prawowity następca – Malcolm.",
      timeline: [
        {
          title: "Przepowiednia wiedźm",
          description:
            "Makbet i Banko spotykają wiedźmy, które zapowiadają przyszłość.",
        },
        {
          title: "Spełnienie pierwszej przepowiedni",
          description: "Makbet zostaje tanem Kawdoru.",
        },
        {
          title: "Zbrodnia na Duncanie",
          description: "Makbet zabija króla z inspiracji Lady Makbet.",
        },
        {
          title: "Objęcie tronu",
          description: "Makbet zostaje królem Szkocji.",
        },
        {
          title: "Zabójstwo Banka",
          description: "Makbet eliminuje zagrożenie dla swojej władzy.",
        },
        {
          title: "Kolejne przepowiednie",
          description: "Wiedźmy utwierdzają Makbeta w poczuciu bezpieczeństwa.",
        },
        {
          title: "Upadek Lady Makbet",
          description: "Popada w obłęd i popełnia samobójstwo.",
        },
        {
          title: "Atak na Makbeta",
          description: "Wojska Malcolma i Makdufa ruszają na zamek.",
        },
        {
          title: "Śmierć Makbeta",
          description: "Makduf zabija Makbeta i przywraca porządek.",
        },
      ],
    },
    characters: [
      {
        name: "Makbet",
        description:
          "Szkocki rycerz, który pod wpływem ambicji i manipulacji dokonuje zbrodni i staje się tyranem.",
        traits: ["ambitny", "uległy", "zbrodniczy", "paranoiczny", "tragiczny"],
        role: "Tragiczny bohater",
      },
      {
        name: "Lady Makbet",
        description:
          "Żona Makbeta, inicjatorka zbrodni, która później popada w obłęd.",
        traits: [
          "ambitna",
          "bezwzględna",
          "manipulująca",
          "zdeterminowana",
          "wrażliwa",
        ],
        role: "Inspiratorka zbrodni",
      },
      {
        name: "Banko",
        description:
          "Przyjaciel Makbeta, uczciwy rycerz, którego potomkowie mają zostać królami.",
        traits: ["lojalny", "rozsądny", "uczciwy", "ostrożny"],
        role: "Moralne przeciwieństwo",
      },
      {
        name: "Makduf",
        description:
          "Szkocki szlachcic, przeciwnik Makbeta, mściciel jego zbrodni.",
        traits: ["odważny", "sprawiedliwy", "zdeterminowany"],
        role: "Mściciel tyrana",
      },
      {
        name: "Duncan",
        description: "Król Szkocji, zamordowany przez Makbeta.",
        traits: ["dobry", "sprawiedliwy", "ufny"],
        role: "Prawowity władca",
      },
      {
        name: "Malcolm",
        description: "Syn Duncana, który odzyskuje tron.",
        traits: ["rozsądny", "ostrożny", "sprawiedliwy"],
        role: "Prawowity następca",
      },
      {
        name: "Wiedźmy",
        description: "Nadprzyrodzone istoty przepowiadające przyszłość.",
        traits: ["tajemnicze", "manipulujące", "złowrogie"],
        role: "Siły nadprzyrodzone",
      },
    ],
    themes: [
      {
        name: "Władza",
        description:
          "Ukazana jako siła demoralizująca, prowadząca do zbrodni i tyranii.",
      },
      {
        name: "Ambicja",
        description:
          "Nieposkromiona ambicja Makbeta i Lady Makbet prowadzi do ich upadku.",
      },
      {
        name: "Zbrodnia i kara",
        description:
          "Każda zbrodnia pociąga za sobą konsekwencje psychiczne i moralne.",
      },
      {
        name: "Wina i sumienie",
        description:
          "Bohaterowie nie potrafią uwolnić się od wyrzutów sumienia.",
      },
      {
        name: "Los i przeznaczenie",
        description: "Pytanie o to, czy człowiek jest panem swojego losu.",
      },
    ],
    motifs: [
      {
        name: "Krew",
        meaning: "Symbol winy i nieusuwalnego grzechu.",
      },
      {
        name: "Sen",
        meaning:
          "Oznacza spokój sumienia, którego bohaterowie zostają pozbawieni.",
      },
      {
        name: "Szaleństwo",
        meaning: "Efekt wyrzutów sumienia i moralnego upadku.",
      },
      {
        name: "Przepowiednia",
        meaning: "Siła wpływająca na decyzje bohaterów.",
      },
      {
        name: "Natura",
        meaning: "Zaburzenie porządku świata po dokonaniu zbrodni.",
      },
    ],
    contexts: [
      {
        title: "Biblia",
        description: "Motyw winy, kary i moralnego upadku człowieka.",
      },
      {
        title: "Antygona",
        description: "Konflikt moralny i konsekwencje wyborów bohatera.",
      },
      {
        title: "Zbrodnia i kara",
        description: "Psychologiczne skutki popełnienia zbrodni.",
      },
      {
        title: "Filozofia baroku",
        description: "Pesymistyczna wizja świata i człowieka.",
      },
    ],
    quotes: [
      {
        text: "Życie jest tylko przechodnim półcieniem...",
        explanation:
          "Makbet wyraża nihilistyczną wizję życia jako pozbawionego sensu.",
      },
      {
        text: "Precz, przeklęta plamo!",
        explanation:
          "Lady Makbet nie może zmyć symbolicznej krwi ze swoich rąk.",
      },
      {
        text: "Nie można powiedzieć: zrobiłem – i zapomnieć.",
        explanation: "Zbrodnia pozostawia trwały ślad w psychice.",
      },
    ],
    terms: [
      {
        name: "Tragizm",
        meaning:
          "Sytuacja bez wyjścia, w której każda decyzja prowadzi do katastrofy.",
      },
      {
        name: "Katarzis",
        meaning: "Oczyszczenie emocjonalne widza poprzez przeżycie tragedii.",
      },
      {
        name: "Hamartia",
        meaning: "Błąd tragiczny bohatera – w tym przypadku ambicja.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Czy Makbet jest bohaterem tragicznym?",
        "Jaką rolę odgrywa ambicja w życiu człowieka?",
        "Czy człowiek jest odpowiedzialny za swoje czyny mimo wpływu losu?",
        "Jak władza wpływa na człowieka?",
        "Rola sumienia w życiu człowieka.",
      ],
      keywords: [
        "ambicja",
        "władza",
        "zbrodnia",
        "sumienie",
        "tragizm",
        "los",
        "przeznaczenie",
      ],
      commonMistakes: [
        "Twierdzenie, że to wiedźmy są bezpośrednią przyczyną zbrodni.",
        "Pomijanie roli Lady Makbet.",
        "Brak analizy przemiany psychicznej Makbeta.",
        "Sprowadzanie utworu tylko do historii kryminalnej.",
      ],
      introStarters: [
        "Tragedia Williama Szekspira „Makbet” ukazuje mechanizm moralnego upadku człowieka...",
        "Jednym z najważniejszych problemów poruszonych w „Makbecie” jest kwestia ambicji...",
        "Postać Makbeta stanowi przykład bohatera tragicznego, którego los prowadzi do katastrofy...",
      ],
    },
  },
  {
    id: 12,
    title: "Skąpiec",
    author: "Molier",
    year: 1668,
    epoch: "Barok",
    summary: {
      short:
        "Komedia przedstawiająca historię Harpagona – chorobliwie skąpego człowieka, który podporządkowuje życie swoje i swoich dzieci żądzy posiadania pieniędzy.",
      detailed:
        "Akcja utworu koncentruje się wokół Harpagona – bogatego, lecz skrajnie skąpego mieszczanina. Jego obsesja na punkcie pieniędzy wpływa destrukcyjnie na życie rodzinne. Harpagon planuje wydać swoją córkę Elizę za bogatego starca Anzelma, mimo że dziewczyna kocha Walerego. Jednocześnie zamierza ożenić się z młodą Marianną, w której zakochany jest jego syn Kleant.\n\nKleant, nie mając pieniędzy przez skąpstwo ojca, próbuje zdobyć środki na życie poprzez pożyczkę u lichwiarza, którym okazuje się być… jego własny ojciec. Konflikt rodzinny się zaostrza. Harpagon nie zważa na uczucia dzieci, kierując się wyłącznie chęcią oszczędzania i zysku.\n\nKulminacyjnym momentem jest kradzież szkatułki z pieniędzmi Harpagona. Zrozpaczony bohater wpada w panikę, podejrzewając wszystkich wokół. Ostatecznie okazuje się, że za kradzieżą stoi służący Strzałka działający na rzecz Kleanta.\n\nW finale dochodzi do rozwiązania konfliktów: Anzelm okazuje się ojcem Walerego i Marianny, co pozwala na szczęśliwe zakończenie – młodzi mogą się pobrać. Harpagon odzyskuje swoją szkatułkę i zgadza się na małżeństwa dzieci, pod warunkiem że nie będzie musiał za nie płacić.\n\nKomedia kończy się triumfem miłości i rozsądku nad chciwością, choć Harpagon pozostaje niepoprawnym skąpcem.",
      timeline: [
        {
          title: "Prezentacja Harpagona",
          description:
            "Poznajemy głównego bohatera – obsesyjnie przywiązanego do pieniędzy skąpca.",
        },
        {
          title: "Konflikty miłosne",
          description:
            "Kleant i Eliza kochają osoby, których nie akceptuje Harpagon.",
        },
        {
          title: "Planowane małżeństwa",
          description:
            "Harpagon chce poślubić Mariannę i wydać córkę za Anzelma.",
        },
        {
          title: "Kradzież szkatułki",
          description:
            "Znika skarb Harpagona, co wywołuje chaos i podejrzenia.",
        },
        {
          title: "Rozwiązanie intrygi",
          description:
            "Ujawnienie tożsamości Anzelma i szczęśliwe zakończenie dla młodych.",
        },
      ],
    },
    characters: [
      {
        name: "Harpagon",
        description:
          "Bogaty mieszczanin, który ponad wszystko kocha pieniądze i podporządkowuje im swoje życie.",
        traits: [
          "skąpy",
          "podejrzliwy",
          "egoistyczny",
          "despotyczny",
          "śmieszny",
        ],
        role: "Uosobienie skąpstwa",
      },
      {
        name: "Kleant",
        description:
          "Syn Harpagona, zakochany w Mariannie, buntuje się przeciw ojcu.",
        traits: ["uczuciowy", "odważny", "zdeterminowany"],
        role: "Syn buntownik",
      },
      {
        name: "Eliza",
        description:
          "Córka Harpagona, zakochana w Walerym, posłuszna, lecz pragnąca szczęścia.",
        traits: ["lojalna", "uczuciowa", "posłuszna"],
        role: "Córka zakochana",
      },
      {
        name: "Walery",
        description:
          "Ukochany Elizy, służący Harpagona, ukrywający swoje pochodzenie.",
        traits: ["sprytny", "oddany", "cierpliwy"],
        role: "Zakochany sługa",
      },
      {
        name: "Marianna",
        description:
          "Ubogą dziewczyna, w której zakochani są Kleant i Harpagon.",
        traits: ["delikatna", "uczciwa", "wrażliwa"],
        role: "Obiekt miłości",
      },
      {
        name: "Anzelm",
        description:
          "Bogaty starzec, który chce poślubić Elizę, a później okazuje się ojcem Walerego i Marianny.",
        traits: ["dobry", "szlachetny"],
        role: "Ojciec odnaleziony",
      },
      {
        name: "Strzałka",
        description: "Sługa Kleanta, sprytny i przebiegły.",
        traits: ["inteligentny", "sprytny"],
        role: "Sługa pomocnik",
      },
    ],
    themes: [
      {
        name: "Skąpstwo",
        description:
          "Główna wada Harpagona, która niszczy relacje rodzinne i prowadzi do konfliktów.",
      },
      {
        name: "Miłość",
        description:
          "Uczucie młodych bohaterów przeciwstawione egoizmowi i interesowności.",
      },
      {
        name: "Konflikt pokoleń",
        description: "Starcie między młodymi bohaterami a autorytarnym ojcem.",
      },
      {
        name: "Hipokryzja społeczna",
        description:
          "Ukazywanie pozorów i interesowności w relacjach międzyludzkich.",
      },
    ],
    motifs: [
      {
        name: "Pieniądz",
        meaning: "Symbol wartości nadrzędnej dla Harpagona.",
      },
      {
        name: "Szkatułka",
        meaning: "Uosobienie obsesji i lęku przed utratą majątku.",
      },
      {
        name: "Małżeństwo",
        meaning:
          "Traktowane jako transakcja finansowa, a nie związek uczuciowy.",
      },
      {
        name: "Maska",
        meaning: "Ukrywanie prawdziwych intencji i tożsamości.",
      },
    ],
    contexts: [
      {
        title: "Komedia klasyczna",
        description:
          "Utwór wpisuje się w nurt komedii klasycystycznej – jedność miejsca, czasu i akcji, typizacja postaci.",
      },
      {
        title: "Literatura francuska XVII wieku",
        description:
          "Twórczość Moliera jako krytyka wad społecznych i obyczajów epoki Ludwika XIV.",
      },
      {
        title: "„Zemsta” Aleksandra Fredry",
        description:
          "Podobieństwo w ukazywaniu konfliktów i komizmu charakterów.",
      },
      {
        title: "Biblia",
        description:
          "Motyw chciwości jako grzechu (np. przypowieści o bogaczu).",
      },
    ],
    quotes: [
      {
        text: "Trzeba jeść, żeby żyć, a nie żyć, żeby jeść.",
        explanation:
          "Ironia sytuacyjna – Harpagon ogranicza potrzeby życiowe do minimum, by oszczędzać.",
      },
      {
        text: "Moje pieniądze! Moje drogie pieniądze!",
        explanation:
          "Ukazuje obsesję bohatera i jego emocjonalne przywiązanie do majątku.",
      },
    ],
    terms: [
      {
        name: "komedia charakterów",
        meaning:
          "Utwór ukazujący wyolbrzymione cechy bohaterów dla efektu komicznego.",
      },
      {
        name: "skąpstwo",
        meaning:
          "Nadmierne przywiązanie do pieniędzy i niechęć do ich wydawania.",
      },
      {
        name: "klasycyzm",
        meaning:
          "Prąd literacki oparty na zasadach harmonii, ładu i naśladowania antyku.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Jaką funkcję pełni skąpstwo Harpagona w utworze?",
        "Czy Harpagon jest postacią tylko komiczną, czy także tragiczną?",
        "Jak Molier krytykuje społeczeństwo w „Skąpcu”?",
        "Na czym polega konflikt pokoleń w utworze?",
        "Czy pieniądze mogą zniszczyć relacje międzyludzkie?",
      ],
      keywords: [
        "skąpstwo",
        "komedia charakterów",
        "Molier",
        "pieniądz",
        "konflikt pokoleń",
        "miłość",
        "hipokryzja",
      ],
      commonMistakes: [
        "Sprowadzanie utworu wyłącznie do komedii bez dostrzeżenia jego krytycznego wymiaru",
        "Pomijanie roli pieniądza jako głównego motywu",
        "Nieodróżnianie komizmu postaci od komizmu sytuacyjnego",
      ],
      introStarters: [
        "„Skąpiec” Moliera to klasyczna komedia charakterów, która w sposób satyryczny ukazuje ludzkie przywary.",
        "Motyw pieniądza jako siły destrukcyjnej dla relacji międzyludzkich jest centralnym problemem „Skąpca”.",
        "Postać Harpagona stanowi ponadczasowy przykład człowieka owładniętego obsesją posiadania.",
      ],
    },
  },
  {
    id: 13,
    title: "Żona modna i Pijaństwo",
    author: "Ignacy Krasicki",
    year: 1779,
    epoch: "Oświecenie",
    summary: {
      short:
        "Dwie satyry ukazujące wady polskiej szlachty: bezmyślne naśladownictwo cudzoziemszczyzny oraz pijaństwo jako narodową przywarę.",
      detailed:
        "„Żona modna” to satyra przedstawiająca historię małżeństwa zawartego z wyrachowania. Narrator, Piotr, opowiada o swojej żonie, która jest typową przedstawicielką modnej, zafascynowanej zagranicą szlachcianki. Kobieta narzuca mężowi kosztowny i nienaturalny styl życia – przebudowuje dwór, wprowadza francuskie zwyczaje, zatrudnia licznych służących i wydaje ogromne sumy pieniędzy. Jej działania prowadzą do ruiny finansowej męża. Satyra ukazuje krytykę powierzchownego kosmopolityzmu i życia ponad stan.\n\n„Pijaństwo” ma formę dialogu dwóch szlachciców. Jeden z nich opowiada o uczcie, podczas której uczestnicy popadają w coraz większe upojenie alkoholowe. Rozmowa ukazuje mechanizmy usprawiedliwiania pijaństwa oraz jego destrukcyjny wpływ na jednostkę i społeczeństwo. Krasicki demaskuje absurd sytuacji, w której pijaństwo jest traktowane jako norma społeczna i element kultury szlacheckiej.\n\nOba utwory pełnią funkcję dydaktyczną – autor poprzez ironię i satyrę piętnuje wady społeczne i nawołuje do reform moralnych.",
      timeline: [
        {
          title: "Ślub Piotra",
          description:
            "Piotr zawiera małżeństwo z modną kobietą, licząc na korzyści majątkowe.",
        },
        {
          title: "Zmiany w gospodarstwie",
          description:
            "Żona wprowadza kosztowne, zagraniczne zwyczaje i przebudowuje dwór.",
        },
        {
          title: "Rozrzutność",
          description:
            "Kobieta wydaje ogromne sumy pieniędzy, doprowadzając męża do ruiny.",
        },
        {
          title: "Uczta w „Pijaństwie”",
          description: "Szlachcice uczestniczą w libacji alkoholowej.",
        },
        {
          title: "Narastające upojenie",
          description:
            "Biesiadnicy tracą kontrolę, a rozmowa staje się chaotyczna.",
        },
        {
          title: "Refleksja moralna",
          description:
            "Utwór kończy się krytyką pijaństwa jako społecznej patologii.",
        },
      ],
    },
    characters: [
      {
        name: "Piotr",
        description:
          "Szlachcic i narrator „Żony modnej”, który opowiada o swoim nieudanym małżeństwie.",
        traits: ["naiwny", "uległy", "praktyczny", "rozczarowany"],
        role: "Narrator i ofiara małżeństwa",
      },
      {
        name: "Żona modna",
        description:
          "Młoda szlachcianka zafascynowana modą zagraniczną, żyjąca ponad stan.",
        traits: ["rozrzutna", "snobistyczna", "powierzchowna", "egoistyczna"],
        role: "Symbol cudzoziemszczyzny",
      },
      {
        name: "Rozmówca w „Pijaństwie”",
        description:
          "Szlachcic relacjonujący przebieg uczty i własne doświadczenia.",
        traits: ["bezkrytyczny", "naiwny", "towarzyski"],
        role: "Relacjonujący uczestnik uczty",
      },
      {
        name: "Drugi szlachcic",
        description: "Rozmówca analizujący opowieść i komentujący pijaństwo.",
        traits: ["krytyczny", "rozsądny", "refleksyjny"],
        role: "Głos rozsądku",
      },
    ],
    themes: [
      {
        name: "Krytyka cudzoziemszczyzny",
        description:
          "Autor piętnuje bezrefleksyjne naśladowanie zagranicznych wzorców kosztem własnej tradycji.",
      },
      {
        name: "Pijaństwo jako wada narodowa",
        description:
          "Satyra ukazuje alkoholizm jako powszechny i akceptowany problem społeczny.",
      },
      {
        name: "Rozrzutność i życie ponad stan",
        description:
          "Krasicki krytykuje brak umiaru i niegospodarność szlachty.",
      },
      {
        name: "Małżeństwo z wyrachowania",
        description:
          "Związek oparty na interesie prowadzi do konfliktów i nieszczęścia.",
      },
      {
        name: "Dydaktyzm oświeceniowy",
        description:
          "Utwory mają charakter moralizatorski i służą poprawie społeczeństwa.",
      },
    ],
    motifs: [
      {
        name: "Moda",
        meaning: "Symbol bezmyślnego naśladownictwa i utraty tożsamości.",
      },
      {
        name: "Alkohol",
        meaning: "Obraz moralnego upadku i społecznej degeneracji.",
      },
      {
        name: "Dwór szlachecki",
        meaning:
          "Miejsce przemian obyczajowych i konfliktu tradycji z nowoczesnością.",
      },
      {
        name: "Rozmowa",
        meaning: "Forma ukazania różnych postaw i poglądów.",
      },
    ],
    contexts: [
      {
        title: "Oświecenie w Polsce",
        description:
          "Epoka reform i krytyki społecznej, w której literatura pełniła funkcję dydaktyczną.",
      },
      {
        title: "Komisja Edukacji Narodowej",
        description:
          "Działania reformatorskie mające na celu poprawę moralności i edukacji społeczeństwa.",
      },
      {
        title: "Satyra europejska (np. Molier)",
        description: "Tradycja krytyki obyczajów poprzez komizm i ironię.",
      },
      {
        title: "Sarmatyzm",
        description:
          "Kultura szlachecka, której wady – takie jak pijaństwo i konserwatyzm – są krytykowane przez Krasickiego.",
      },
    ],
    quotes: [
      {
        text: "Kupmy wioskę – rzecze żona.",
        explanation: "Ukazuje rozrzutność i brak realizmu bohaterki.",
      },
      {
        text: "Piliśmy zdrowie – i piliśmy dalej.",
        explanation: "Oddaje mechanizm niekontrolowanego pijaństwa.",
      },
    ],
    terms: [
      {
        name: "Satyra",
        meaning: "Utwór literacki ośmieszający i krytykujący wady społeczne.",
      },
      {
        name: "Ironia",
        meaning:
          "Środek stylistyczny polegający na ukrytej sprzeczności między dosłownym a rzeczywistym znaczeniem.",
      },
      {
        name: "Dydaktyzm",
        meaning: "Funkcja pouczająca literatury.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Jak Ignacy Krasicki krytykuje wady polskiej szlachty w swoich satyrach?",
        "Na czym polega problem cudzoziemszczyzny w „Żonie modnej”?",
        "Jaką funkcję pełni dialog w „Pijaństwie”?",
        "W jaki sposób satyra może wpływać na społeczeństwo?",
        "Jakie środki stylistyczne wykorzystuje Krasicki, aby osiągnąć efekt komiczny?",
      ],
      keywords: [
        "satyra",
        "oświecenie",
        "cudzoziemszczyzna",
        "pijaństwo",
        "krytyka społeczna",
        "dydaktyzm",
      ],
      commonMistakes: [
        "Traktowanie utworów wyłącznie jako humorystycznych, bez dostrzeżenia ich funkcji moralizatorskiej.",
        "Brak rozróżnienia między narratorem a autorem.",
        "Pomijanie kontekstu historycznego epoki oświecenia.",
        "Niedostrzeganie ironii i przesady jako środków krytyki.",
      ],
      introStarters: [
        "Ignacy Krasicki jako czołowy przedstawiciel oświecenia wykorzystuje satyrę do krytyki społeczeństwa...",
        "W literaturze oświecenia szczególną rolę odgrywała funkcja dydaktyczna, co widoczne jest w utworach...",
        "Analizując „Żonę modną” i „Pijaństwo”, można zauważyć, że autor piętnuje przede wszystkim...",
        "Satyra jako gatunek literacki pozwala na ukazanie wad społecznych w sposób prześmiewczy, lecz jednocześnie pouczający...",
      ],
    },
  },
  {
    id: 14,
    title: "Romantyczność",
    author: "Adam Mickiewicz",
    year: 1822,
    epoch: "Romantyzm",
    summary: {
      short:
        "Ballada ukazuje konflikt między rozumem a wiarą i uczuciem na przykładzie historii Karusi, która rozmawia ze zmarłym ukochanym. Utwór manifestuje romantyczne podejście do poznania świata.",
      detailed:
        "Akcja utworu rozgrywa się w małym miasteczku, gdzie zgromadzony lud obserwuje młodą dziewczynę – Karusię. Dziewczyna zachowuje się w sposób niezwykły: rozmawia z niewidzialnym dla innych duchem swojego zmarłego ukochanego, Jasieńka. Karusia przeżywa silne emocje – radość ze spotkania miesza się z rozpaczą wynikającą z jego nieobecności. Ludzie zgromadzeni wokół niej wierzą w prawdziwość jej przeżyć i traktują je jako kontakt ze światem nadprzyrodzonym.\n\nWśród obserwatorów znajduje się także starzec – reprezentant racjonalizmu i oświeceniowego światopoglądu. Poddaje on w wątpliwość doświadczenia Karusi, tłumacząc je jako przejaw obłędu lub urojenia. W jego przekonaniu poznanie świata powinno opierać się na rozumie i empirii.\n\nNarrator (utożsamiany z romantycznym poetą) opowiada się po stronie ludu i Karusi. Odrzuca chłodny racjonalizm starca, podkreślając znaczenie wiary, intuicji i uczucia jako narzędzi poznania rzeczywistości. W kulminacyjnym momencie wygłasza manifest romantyzmu: „Czucie i wiara silniej mówi do mnie / Niż mędrca szkiełko i oko”.\n\nBallada kończy się afirmacją ludowej wizji świata i przekonania o istnieniu rzeczywistości duchowej, niedostępnej dla rozumu.",
      timeline: [
        {
          title: "Zgromadzenie ludu",
          description: "Mieszkańcy obserwują dziwne zachowanie Karusi.",
        },
        {
          title: "Widzenie Karusi",
          description: "Dziewczyna rozmawia z duchem zmarłego ukochanego.",
        },
        {
          title: "Reakcja ludu",
          description: "Lud wierzy w autentyczność doświadczenia dziewczyny.",
        },
        {
          title: "Głos starca",
          description: "Starzec podważa zjawisko, reprezentując racjonalizm.",
        },
        {
          title: "Manifest narratora",
          description:
            "Narrator opowiada się za uczuciem i wiarą jako sposobem poznania.",
        },
      ],
    },
    characters: [
      {
        name: "Karusia",
        description:
          "Młoda dziewczyna, która widzi ducha swojego zmarłego ukochanego i przeżywa intensywne emocje.",
        traits: [
          "wrażliwa",
          "emocjonalna",
          "mistyczna",
          "zakochana",
          "cierpiąca",
        ],
        role: "Symbol romantycznej wizji świata",
      },
      {
        name: "Jasieńko",
        description: "Zmarły ukochany Karusi, pojawiający się jako duch.",
        traits: ["nieobecny", "duchowy", "idealizowany"],
        role: "Obiekt miłości Karusi",
      },
      {
        name: "Starzec",
        description:
          "Reprezentant racjonalizmu, sceptyczny wobec przeżyć Karusi.",
        traits: ["racjonalny", "sceptyczny", "chłodny", "empiryczny"],
        role: "Reprezentant oświecenia",
      },
      {
        name: "Narrator",
        description:
          "Podmiot mówiący, który opowiada się po stronie romantycznego poznania świata.",
        traits: ["refleksyjny", "emocjonalny", "zaangażowany"],
        role: "Rzecznik romantyzmu",
      },
      {
        name: "Lud",
        description:
          "Zgromadzeni mieszkańcy, którzy wierzą w nadprzyrodzony wymiar wydarzeń.",
        traits: ["wierzący", "prosty", "intuicyjny", "zbiorowy"],
        role: "Nośnik mądrości ludowej",
      },
    ],
    themes: [
      {
        name: "Konflikt rozumu i uczucia",
        description:
          "Utwór ukazuje spór między racjonalizmem a romantycznym poznaniem opartym na emocjach i wierze.",
      },
      {
        name: "Poznanie pozarozumowe",
        description:
          "Podkreślenie roli intuicji, wiary i doświadczenia duchowego w poznawaniu świata.",
      },
      {
        name: "Ludowość",
        description:
          "Afirmacja ludowej wizji świata jako źródła prawdy o rzeczywistości.",
      },
      {
        name: "Miłość silniejsza niż śmierć",
        description:
          "Relacja Karusi i Jasieńka ukazuje trwałość uczucia mimo śmierci.",
      },
    ],
    motifs: [
      {
        name: "Duch",
        meaning: "Symbol istnienia świata nadprzyrodzonego i życia po śmierci.",
      },
      {
        name: "Miłość",
        meaning: "Siła łącząca bohaterów ponad granicą śmierci.",
      },
      {
        name: "Szaleństwo",
        meaning: "Granica między obłędem a duchowym poznaniem.",
      },
      {
        name: "Lud",
        meaning: "Źródło prawdy i autentycznego doświadczenia świata.",
      },
      {
        name: "Widzenie",
        meaning: "Poznanie intuicyjne, niedostępne dla rozumu.",
      },
    ],
    contexts: [
      {
        title: "Ballady i romanse",
        description:
          "Debiutancki tom Mickiewicza z 1822 roku, uznawany za początek romantyzmu w Polsce.",
      },
      {
        title: "Kordian",
        description:
          "Dramat Słowackiego również ukazujący konflikt między rozumem a emocją.",
      },
      {
        title: "Biblia",
        description:
          "Motyw kontaktu ze światem duchowym i wiary w rzeczywistość niewidzialną.",
      },
      {
        title: "Oświecenie",
        description:
          "Epoka poprzedzająca romantyzm, oparta na kulcie rozumu, przeciwko której występuje utwór.",
      },
    ],
    quotes: [
      {
        text: "Czucie i wiara silniej mówi do mnie / Niż mędrca szkiełko i oko",
        explanation:
          "Manifest romantyzmu – wyższość intuicji i wiary nad rozumem.",
      },
      {
        text: "Miej serce i patrzaj w serce!",
        explanation:
          "Wezwanie do kierowania się uczuciem jako sposobem poznania świata.",
      },
    ],
    terms: [
      {
        name: "Ballada",
        meaning:
          "Gatunek łączący elementy epiki, liryki i dramatu, często z elementami fantastycznymi.",
      },
      {
        name: "Romantyzm",
        meaning:
          "Epoka literacka kładąca nacisk na uczucia, indywidualizm i duchowość.",
      },
      {
        name: "Ludowość",
        meaning:
          "Zainteresowanie kulturą i wierzeniami ludu jako źródłem prawdy.",
      },
      {
        name: "Irracjonalizm",
        meaning:
          "Przekonanie o istnieniu rzeczywistości wykraczającej poza rozum.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Na czym polega konflikt światopoglądowy w „Romantyczności”?",
        "Jaką rolę pełni lud w utworze Mickiewicza?",
        "Czy Karusia jest szalona czy uprzywilejowana poznawczo?",
        "Wyjaśnij znaczenie manifestu romantycznego w balladzie.",
        "Jakie elementy romantyczne można wskazać w utworze?",
      ],
      keywords: [
        "romantyzm",
        "irracjonalizm",
        "ludowość",
        "uczucie",
        "wiara",
        "duch",
        "konflikt rozumu i serca",
      ],
      commonMistakes: [
        "Uznawanie Karusi wyłącznie za osobę obłąkaną",
        "Pomijanie roli narratora jako rzecznika romantyzmu",
        "Brak odniesienia do kontekstu epoki",
        "Niedostrzeganie funkcji ludu w utworze",
      ],
      introStarters: [
        "„Romantyczność” Adama Mickiewicza to jeden z najważniejszych manifestów polskiego romantyzmu...",
        "Ballada Mickiewicza ukazuje fundamentalny konflikt między rozumem a uczuciem...",
        "Utwór „Romantyczność” stanowi symboliczny początek nowej epoki literackiej...",
      ],
    },
  },
  {
    id: 15,
    title: "Dziady cz. III",
    author: "Adam Mickiewicz",
    year: "1832",
    epoch: "Romantyzm",
    summary: {
      short:
        "Dramat romantyczny ukazujący losy polskiej młodzieży prześladowanej przez carat oraz przemianę Gustawa w Konrada – poetę i buntownika, który podejmuje walkę duchową z Bogiem w imię narodu.",
      detailed:
        "Akcja dramatu rozgrywa się głównie w Wilnie oraz w klasztorze bazylianów, przekształconym przez władze carskie w więzienie dla polskiej młodzieży. Utwór rozpoczyna się sceną przemiany Gustawa w Konrada – bohater odrzuca swoją przeszłość romantycznego kochanka i przyjmuje rolę poety-patrioty.\n\nW scenach więziennych poznajemy losy młodych Polaków represjonowanych przez carat. Ukazane są brutalne przesłuchania, wywózki na Sybir oraz cierpienia więźniów. Postać Sobolewskiego relacjonuje wywózkę dzieci i młodzieży, co podkreśla okrucieństwo zaborcy.\n\nCentralnym punktem dramatu jest Wielka Improwizacja – monolog Konrada, który jako poeta i jednostka wybitna buntuje się przeciwko Bogu. Domaga się od Stwórcy władzy nad duszami ludzi, aby móc zbawić naród. Jego pycha prowadzi jednak do bluźnierstwa.\n\nRównolegle ukazana jest postawa księdza Piotra – pokornego zakonnika, który reprezentuje wiarę i zawierzenie Bogu. W jego widzeniu pojawia się mesjanistyczna wizja Polski jako Chrystusa narodów – narodu cierpiącego za inne.\n\nW dramacie pojawia się także scena salonu warszawskiego, ukazująca obojętność elit wobec losów ojczyzny oraz kontrast między patriotami a kosmopolityczną arystokracją.\n\nW końcowych scenach ukazane są losy senatora Nowosilcowa – symbolu tyranii i represji. Dramat nie ma jednoznacznego zakończenia, pozostawia pytania o sens cierpienia i przyszłość Polski.",
      timeline: [
        {
          title: "Przemiana Gustawa w Konrada",
          description:
            "Bohater odrzuca rolę kochanka i staje się poetą-patriotą.",
        },
        {
          title: "Sceny więzienne",
          description: "Ukazanie prześladowań młodzieży polskiej przez carat.",
        },
        {
          title: "Wielka Improwizacja",
          description:
            "Konrad buntuje się przeciwko Bogu i domaga się władzy nad duszami.",
        },
        {
          title: "Widzenie księdza Piotra",
          description: "Mesjanistyczna wizja Polski jako Chrystusa narodów.",
        },
        {
          title: "Salon warszawski",
          description: "Krytyka elit i ich obojętności wobec spraw narodowych.",
        },
        {
          title: "Sceny z Nowosilcowem",
          description: "Ukazanie okrucieństwa rosyjskiej władzy.",
        },
      ],
    },
    characters: [
      {
        name: "Konrad",
        description:
          "Poeta i patriota, dawny Gustaw, buntujący się przeciwko Bogu w imię narodu.",
        traits: ["indywidualizm", "pycha", "patriotyzm", "geniusz", "bunt"],
        role: "Romantyczny bohater narodowy",
      },
      {
        name: "Ksiądz Piotr",
        description:
          "Pokorny zakonnik, który otrzymuje prorocze wizje dotyczące losów Polski.",
        traits: ["pokora", "wiara", "mistycyzm", "oddanie", "proroczość"],
        role: "Prorok i duchowy przewodnik",
      },
      {
        name: "Senator Nowosilcow",
        description:
          "Carski urzędnik odpowiedzialny za prześladowania Polaków.",
        traits: ["okrucieństwo", "cynizm", "władza", "bezlitosność"],
        role: "Uosobienie tyranii carskiej",
      },
      {
        name: "Gustaw",
        description: "Dawna tożsamość Konrada – romantyczny kochanek.",
        traits: ["uczuciowość", "romantyzm", "cierpienie"],
        role: "Poprzednie wcielenie bohatera",
      },
      {
        name: "Sobolewski",
        description: "Więzień opowiadający o wywózkach młodzieży na Sybir.",
        traits: ["empatia", "patriotyzm", "wrażliwość"],
        role: "Świadek cierpienia narodu",
      },
      {
        name: "Rollison",
        description: "Młody więzień torturowany przez władze carskie.",
        traits: ["niewinność", "cierpienie", "odwaga"],
        role: "Ofiara represji",
      },
    ],
    themes: [
      {
        name: "Mesjanizm",
        description: "Polska jako naród wybrany, cierpiący za inne narody.",
      },
      {
        name: "Walka jednostki z Bogiem",
        description:
          "Konrad buntuje się przeciwko Stwórcy w imię dobra narodu.",
      },
      {
        name: "Martyrologia narodu",
        description: "Ukazanie cierpień Polaków pod zaborami.",
      },
      {
        name: "Patriotyzm",
        description: "Poświęcenie jednostki dla dobra ojczyzny.",
      },
    ],
    motifs: [
      {
        name: "Motyw cierpienia",
        meaning: "Cierpienie jako droga do odkupienia i wolności.",
      },
      {
        name: "Motyw prometeizmu",
        meaning: "Bunt jednostki w imię dobra ogółu.",
      },
      {
        name: "Motyw mesjanizmu",
        meaning: "Naród jako ofiara zbawcza.",
      },
      {
        name: "Motyw więzienia",
        meaning: "Symbol zniewolenia politycznego i duchowego.",
      },
    ],
    contexts: [
      {
        title: "Powstanie listopadowe",
        description:
          "Klęska powstania wpłynęła na powstanie dramatu i jego pesymistyczny wydźwięk.",
      },
      {
        title: "Biblia",
        description: "Motyw cierpienia i odkupienia na wzór Chrystusa.",
      },
      {
        title: "Kordian",
        description: "Porównanie różnych modeli bohatera romantycznego.",
      },
      {
        title: "Sytuacja polityczna XIX wieku",
        description: "Represje carskie wobec Polaków i brak niepodległości.",
      },
    ],
    quotes: [
      {
        text: "Nazywam się Milijon – bo za miliony kocham i cierpię katusze.",
        explanation: "Konrad utożsamia się z całym narodem polskim.",
      },
      {
        text: "Ciemno wszędzie, głucho wszędzie...",
        explanation: "Podkreślenie nastroju tajemniczości i grozy.",
      },
      {
        text: "Polska Chrystusem narodów.",
        explanation: "Wyraz idei mesjanizmu narodowego.",
      },
    ],
    terms: [
      {
        name: "Mesjanizm",
        meaning: "Koncepcja narodu wybranego, który cierpi dla innych.",
      },
      {
        name: "Improwizacja",
        meaning: "Spontaniczna wypowiedź bohatera, wyraz jego emocji i myśli.",
      },
      {
        name: "Prometeizm",
        meaning: "Postawa poświęcenia jednostki dla dobra ogółu.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Omów koncepcję mesjanizmu w Dziadach cz. III.",
        "Scharakteryzuj postawę Konrada jako bohatera romantycznego.",
        "Porównaj postawy Konrada i księdza Piotra.",
        "Jak przedstawiona jest martyrologia narodu polskiego?",
      ],
      keywords: [
        "mesjanizm",
        "Konrad",
        "Improwizacja",
        "martyrologia",
        "patriotyzm",
        "romantyzm",
      ],
      commonMistakes: [
        "Mylenie Gustawa z Konradem jako odrębnych postaci.",
        "Pomijanie kontekstu historycznego.",
        "Nadmierne uproszczenie mesjanizmu.",
        "Brak analizy Wielkiej Improwizacji.",
      ],
      introStarters: [
        "Dziady cz. III Adama Mickiewicza to jedno z najważniejszych dzieł polskiego romantyzmu...",
        "Utwór Mickiewicza powstał w kontekście dramatycznych wydarzeń historycznych...",
        "Centralnym problemem dramatu jest relacja jednostki z Bogiem oraz los narodu...",
      ],
    },
  },
  {
    id: 16,
    title: "Lalka",
    author: "Bolesław Prus",
    year: "1887–1889",
    epoch: "Pozytywizm",
    summary: {
      short:
        "Powieść realistyczna ukazująca losy Stanisława Wokulskiego – kupca zakochanego w arystokratce Izabeli Łęckiej – oraz panoramę społeczeństwa polskiego drugiej połowy XIX wieku.",
      detailed:
        "Akcja powieści toczy się w Warszawie lat 70. XIX wieku. Głównym bohaterem jest Stanisław Wokulski – człowiek ambitny, przedsiębiorczy, który dorobił się majątku dzięki handlowi i udziałowi w wojnie rosyjsko-tureckiej.\n\nWokulski zakochuje się w Izabeli Łęckiej, arystokratce zubożałej, lecz nadal dumnej ze swojego pochodzenia. Aby zdobyć jej względy, kupuje sklep galanteryjny, wspiera jej rodzinę finansowo i stara się wejść do środowiska arystokracji.\n\nRównolegle poznajemy Ignacego Rzeckiego – starego subiekta i romantyka, który prowadzi pamiętnik. Jego zapiski ukazują przeszłość Wokulskiego oraz jego własne ideały związane z epoką napoleońską.\n\nWokulski angażuje się również w działalność społeczną – pomaga ubogim, wspiera naukowców (np. Ochockiego), próbuje realizować ideały pozytywistyczne. Jednak jego miłość do Izabeli okazuje się złudzeniem – kobieta traktuje go z pogardą i zdradza jego uczucia.\n\nKulminacyjnym momentem jest odkrycie przez Wokulskiego flirtu Izabeli z innym mężczyzną (Starskim). Bohater przeżywa załamanie i podejmuje próbę samobójczą.\n\nLosy Wokulskiego pozostają niejasne – znika on w tajemniczych okolicznościach. Rzecki umiera, a świat przedstawiony ukazuje rozpad dawnych wartości i brak perspektyw dla jednostek próbujących łączyć romantyzm z pozytywizmem.",
      timeline: [
        {
          title: "Przeszłość Wokulskiego",
          description:
            "Udział w powstaniu styczniowym, zesłanie na Syberię, późniejsza kariera handlowa.",
        },
        {
          title: "Początek akcji",
          description:
            "Wokulski wraca z Bułgarii jako bogaty kupiec i inwestuje w sklep.",
        },
        {
          title: "Miłość do Izabeli",
          description:
            "Wokulski zakochuje się w Łęckiej i stara się zdobyć jej względy.",
        },
        {
          title: "Awans społeczny",
          description:
            "Bohater wchodzi w środowisko arystokracji, wspiera finansowo rodzinę Łęckich.",
        },
        {
          title: "Rozczarowanie",
          description:
            "Odkrycie zdrady Izabeli i kryzys emocjonalny Wokulskiego.",
        },
        {
          title: "Zakończenie",
          description: "Zniknięcie Wokulskiego i śmierć Rzeckiego.",
        },
      ],
    },
    characters: [
      {
        name: "Stanisław Wokulski",
        description:
          "Kupiec, przedsiębiorca, romantyk i pozytywista, zakochany w Izabeli.",
        traits: [
          "ambitny",
          "pracowity",
          "uczuciowy",
          "wewnętrznie rozdarty",
          "inteligentny",
        ],
        role: "Tragiczny bohater epoki",
      },
      {
        name: "Izabela Łęcka",
        description:
          "Arystokratka, obiekt miłości Wokulskiego, reprezentantka próżnej arystokracji.",
        traits: ["piękna", "wyniosła", "egoistyczna", "bierna", "snobistyczna"],
        role: "Obiekt miłości",
      },
      {
        name: "Ignacy Rzecki",
        description:
          "Subiekt, przyjaciel Wokulskiego, romantyk wierzący w ideały napoleońskie.",
        traits: [
          "lojalny",
          "nostalgiczny",
          "uczciwy",
          "samotny",
          "wierny ideałom",
        ],
        role: "Narrator pamiętnika",
      },
      {
        name: "Tomasz Łęcki",
        description: "Ojciec Izabeli, zubożały arystokrata żyjący ponad stan.",
        traits: ["lekkomyślny", "dumny", "niepraktyczny", "zadłużony"],
        role: "Upadła arystokracja",
      },
      {
        name: "Julian Ochocki",
        description:
          "Naukowiec i idealista, reprezentant postępu technicznego.",
        traits: ["inteligentny", "ambitny", "racjonalny", "nowoczesny"],
        role: "Pozytywista naukowiec",
      },
      {
        name: "Helena Stawska",
        description:
          "Młoda wdowa, uczciwa i skromna kobieta, przeciwieństwo Izabeli.",
        traits: ["pracowita", "moralna", "ciepła", "skromna"],
        role: "Wzór kobiety pozytywistycznej",
      },
      {
        name: "Kazimierz Starski",
        description: "Arystokrata, lekkoduch, flirtujący z Izabelą.",
        traits: ["lekkomyślny", "uwodzicielski", "cyniczny"],
        role: "Antagonista miłosny",
      },
    ],
    themes: [
      {
        name: "Miłość niespełniona",
        description:
          "Uczucie Wokulskiego do Izabeli prowadzi do jego klęski i rozczarowania.",
      },
      {
        name: "Konflikt romantyzmu i pozytywizmu",
        description:
          "Wokulski łączy cechy romantyka i pozytywisty, co prowadzi do jego wewnętrznego rozdarcia.",
      },
      {
        name: "Społeczeństwo polskie",
        description:
          "Powieść ukazuje przekrój społeczny – arystokrację, mieszczaństwo i biedotę.",
      },
      {
        name: "Upadek arystokracji",
        description:
          "Arystokracja jest ukazana jako pasożytnicza i niezdolna do pracy.",
      },
      {
        name: "Praca i postęp",
        description: "Pozytywistyczne idee pracy organicznej i rozwoju nauki.",
      },
    ],
    motifs: [
      {
        name: "Miasto",
        meaning: "Warszawa jako przestrzeń społecznych kontrastów.",
      },
      {
        name: "Pieniądz",
        meaning: "Środek awansu społecznego, ale też źródło iluzji.",
      },
      {
        name: "Lalka",
        meaning:
          "Symbol uprzedmiotowienia i sztuczności – odnosi się do Izabeli i społeczeństwa.",
      },
      {
        name: "Pamiętnik",
        meaning: "Forma narracji ukazująca subiektywną wizję świata Rzeckiego.",
      },
    ],
    contexts: [
      {
        title: "Pozytywizm polski",
        description:
          "Epoka po powstaniu styczniowym, nacisk na pracę organiczną i rozwój społeczny.",
      },
      {
        title: "Powstanie styczniowe",
        description:
          "Wpływ klęski powstania na losy bohaterów i zmianę ideologii.",
      },
      {
        title: "Ojciec Goriot – Honoré de Balzac",
        description:
          "Podobieństwo w ukazaniu społeczeństwa i relacji pieniądz–miłość.",
      },
      {
        title: "Zbrodnia i kara – Fiodor Dostojewski",
        description:
          "Psychologiczna analiza bohatera i jego wewnętrznych konfliktów.",
      },
    ],
    quotes: [
      {
        text: "Człowiek jest to rzecz święta, której krzywdzić nikomu nie wolno.",
        explanation:
          "Wyraz pozytywistycznego humanizmu i szacunku dla jednostki.",
      },
      {
        text: "Miłość jest jak ogień – może ogrzać, ale i spalić.",
        explanation: "Ukazuje destrukcyjną siłę uczucia Wokulskiego.",
      },
    ],
    terms: [
      {
        name: "Realizm",
        meaning:
          "Dokładne odzwierciedlenie rzeczywistości społecznej i psychologicznej.",
      },
      {
        name: "Pozytywizm",
        meaning: "Epoka stawiająca na naukę, pracę i rozwój społeczny.",
      },
      {
        name: "Praca organiczna",
        meaning: "Koncepcja współdziałania wszystkich warstw społecznych.",
      },
      {
        name: "Narracja pamiętnikarska",
        meaning: "Forma narracji oparta na zapiskach bohatera.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Czy Stanisław Wokulski jest bardziej romantykiem czy pozytywistą?",
        "Obraz społeczeństwa polskiego w Lalce.",
        "Motyw niespełnionej miłości w Lalce.",
        "Rola pieniądza w życiu bohaterów.",
        "Znaczenie tytułu powieści.",
      ],
      keywords: [
        "Wokulski",
        "Izabela Łęcka",
        "pozytywizm",
        "romantyzm",
        "miłość",
        "społeczeństwo",
        "realizm",
        "Warszawa",
      ],
      commonMistakes: [
        "Uznawanie Wokulskiego wyłącznie za pozytywistę.",
        "Pomijanie roli Rzeckiego jako narratora.",
        "Brak analizy społeczeństwa jako całości.",
        "Redukowanie powieści do wątku miłosnego.",
      ],
      introStarters: [
        "„Lalka” Bolesława Prusa to jedna z najważniejszych powieści polskiego pozytywizmu, ukazująca...",
        "W powieści „Lalka” autor przedstawia złożony obraz społeczeństwa XIX wieku, w którym...",
        "Postać Stanisława Wokulskiego stanowi przykład bohatera rozdartego między...",
      ],
    },
  },
  {
    id: 17,
    title: "Potop (fragmenty)",
    author: "Henryk Sienkiewicz",
    year: "1886",
    epoch: "Pozytywizm",
    summary: {
      short:
        "Historia przemiany Andrzeja Kmicica na tle najazdu szwedzkiego na Rzeczpospolitą. Od awanturnika i zdrajcy do bohatera narodowego.",
      detailed:
        "Akcja powieści rozgrywa się w czasie najazdu szwedzkiego na Polskę (tzw. potopu szwedzkiego w latach 1655–1660). Główny bohater, Andrzej Kmicic, młody szlachcic i żołnierz, przybywa do majątku Billewiczów, gdzie poznaje swoją narzeczoną Oleńkę Billewiczównę. Początkowo daje się poznać jako człowiek porywczy, gwałtowny i skłonny do przemocy – jego oddział dopuszcza się licznych nadużyć, co powoduje konflikt z okoliczną szlachtą i rozczarowanie Oleńki.\n\nKmicic wchodzi w służbę Janusza Radziwiłła, który zdradza Rzeczpospolitą i przechodzi na stronę Szwedów. Bohater, nieświadomy początkowo zdrady magnata, staje się jego narzędziem. Po odkryciu prawdy przeżywa wewnętrzny kryzys i postanawia odkupić swoje winy.\n\nPrzyjmuje fałszywe nazwisko Babinicz i zaczyna działać na rzecz ojczyzny. Bierze udział w obronie Jasnej Góry, gdzie wykazuje się odwagą i patriotyzmem. Jego czyny przyczyniają się do przełomu w wojnie i wzrostu ducha narodowego.\n\nStopniowo zdobywa uznanie oraz przebaczenie Oleńki i społeczeństwa. Ostatecznie zostaje zrehabilitowany przez króla Jana Kazimierza i odzyskuje dobre imię. Powieść kończy się triumfem moralnym bohatera oraz zwycięstwem nad Szwedami.",
      timeline: [
        {
          title: "Przyjazd Kmicica do Billewiczów",
          description:
            "Poznanie Oleńki i pierwsze konflikty z lokalną szlachtą.",
        },
        {
          title: "Służba u Radziwiłła",
          description:
            "Kmicic wspiera zdrajcę, nieświadomie uczestnicząc w zdradzie.",
        },
        {
          title: "Przemiana bohatera",
          description:
            "Odkrycie zdrady Radziwiłła i decyzja o naprawieniu błędów.",
        },
        {
          title: "Obrona Jasnej Góry",
          description: "Kmicic jako Babinicz walczy w obronie klasztoru.",
        },
        {
          title: "Rehabilitacja",
          description: "Odzyskanie honoru i uznania oraz miłości Oleńki.",
        },
      ],
    },
    characters: [
      {
        name: "Andrzej Kmicic",
        description:
          "Główny bohater powieści, początkowo porywczy i nieodpowiedzialny, później przechodzi moralną przemianę i staje się patriotą.",
        traits: ["porywczy", "odważny", "lojalny", "impulsywny", "honorowy"],
        role: "Bohater dynamiczny i patriota",
      },
      {
        name: "Oleńka Billewiczówna",
        description:
          "Narzeczona Kmicica, kobieta szlachetna i moralna, stanowi dla niego autorytet i motywację do zmiany.",
        traits: ["pobożna", "rozsądna", "wierna", "honorowa"],
        role: "Ideał moralny bohatera",
      },
      {
        name: "Janusz Radziwiłł",
        description:
          "Magnat litewski, który zdradza Rzeczpospolitą i przechodzi na stronę Szwedów.",
        traits: ["ambitny", "zdradziecki", "dumny"],
        role: "Zdrajca ojczyzny",
      },
      {
        name: "Michał Wołodyjowski",
        description: "Wybitny żołnierz i patriota, wzór rycerskich cnót.",
        traits: ["odważny", "lojalny", "honorowy"],
        role: "Wzór rycerza",
      },
      {
        name: "Augustyn Kordecki",
        description: "Przeor Jasnej Góry, duchowy przywódca obrony klasztoru.",
        traits: ["pobożny", "odważny", "charyzmatyczny"],
        role: "Duchowy przywódca narodu",
      },
    ],
    themes: [
      {
        name: "Patriotyzm",
        description: "Ukazanie walki o ojczyznę i gotowości do poświęceń.",
      },
      {
        name: "Przemiana bohatera",
        description: "Droga Kmicica od awanturnika do bohatera narodowego.",
      },
      {
        name: "Zdrada",
        description: "Postawa Radziwiłła jako przykład zdrady narodowej.",
      },
      {
        name: "Honor i odkupienie",
        description: "Motyw odzyskiwania dobrego imienia poprzez czyny.",
      },
    ],
    motifs: [
      {
        name: "Wojna",
        meaning: "Tło wydarzeń i próba dla bohaterów.",
      },
      {
        name: "Miłość",
        meaning: "Relacja Kmicica i Oleńki jako siła przemiany.",
      },
      {
        name: "Religia",
        meaning: "Obrona Jasnej Góry jako symbol wiary i jedności narodowej.",
      },
      {
        name: "Honor",
        meaning: "Kluczowa wartość determinująca działania bohaterów.",
      },
    ],
    contexts: [
      {
        title: "Potop szwedzki",
        description:
          "Historyczne wydarzenie z XVII wieku, najazd Szwecji na Rzeczpospolitą.",
      },
      {
        title: "Trylogia Sienkiewicza",
        description:
          "Cykl powieści historycznych mających podnieść ducha narodowego Polaków.",
      },
      {
        title: "Biblia",
        description:
          "Motywy winy, kary i odkupienia obecne w przemianie Kmicica.",
      },
      {
        title: "Konrad Wallenrod",
        description:
          "Podobieństwo do bohatera działającego pod przybranym nazwiskiem dla dobra ojczyzny.",
      },
    ],
    quotes: [
      {
        text: "Jam nie z soli ani z roli, ale z tego, co mnie boli.",
        explanation: "Wyraża emocjonalność i wewnętrzne przeżycia bohatera.",
      },
      {
        text: "Rzeczpospolita to wielka rzecz.",
        explanation: "Podkreślenie wartości ojczyzny i patriotyzmu.",
      },
    ],
    terms: [
      {
        name: "Potop szwedzki",
        meaning: "Najazd Szwecji na Polskę w XVII wieku.",
      },
      {
        name: "Sarmatyzm",
        meaning:
          "Ideologia szlachty polskiej oparta na kulcie tradycji i wolności.",
      },
      {
        name: "Rehabilitacja",
        meaning: "Odzyskanie dobrego imienia przez bohatera.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Omów przemianę Andrzeja Kmicica.",
        "Jakie znaczenie ma motyw patriotyzmu w Potopie?",
        "Czy Kmicic zasługuje na miano bohatera?",
        "Rola religii w Potopie.",
        "Zdrada i jej konsekwencje w powieści.",
      ],
      keywords: [
        "patriotyzm",
        "przemiana",
        "honor",
        "zdrada",
        "wojna",
        "miłość",
        "religia",
      ],
      commonMistakes: [
        "Pomijanie przemiany Kmicica",
        "Mylenie postaci historycznych i fikcyjnych",
        "Brak kontekstu historycznego",
        "Sprowadzanie powieści tylko do romansu",
      ],
      introStarters: [
        "Powieść Henryka Sienkiewicza Potop ukazuje...",
        "Jednym z najważniejszych motywów w Potopie jest...",
        "Postać Andrzeja Kmicica stanowi przykład...",
        "Na tle wydarzeń historycznych autor przedstawia...",
      ],
    },
  },
  {
    id: 18,
    title: "Zbrodnia i kara",
    author: "Fiodor Dostojewski",
    year: 1866,
    epoch: "Pozytywizm",
    summary: {
      short:
        "Powieść psychologiczna ukazująca historię Rodiona Raskolnikowa, który dokonuje morderstwa, próbując udowodnić swoją teorię o jednostkach wybitnych, a następnie zmaga się z poczuciem winy i moralnym rozdarciem.",
      detailed:
        "Akcja powieści rozgrywa się w Petersburgu. Rodion Raskolnikow, ubogi były student prawa, opracowuje teorię o ludziach „zwyczajnych” i „niezwyczajnych”, którym wolno przekraczać normy moralne dla wyższych celów. W przekonaniu, że należy do tych drugich, decyduje się zamordować lichwiarkę Alonę Iwanownę, którą uważa za „wszy”. Podczas zbrodni niespodziewanie zabija także jej siostrę Lizawietę.\n\nPo dokonaniu morderstwa Raskolnikow popada w chorobę i psychiczne rozbicie. Przeżywa halucynacje, paranoję i narastające poczucie winy. Jednocześnie prowadzi wewnętrzną walkę między pychą a sumieniem.\n\nW jego życiu pojawiają się ważne postacie: Sonia Marmieładowa – prostytutka o głębokiej wierze, która staje się jego moralnym przewodnikiem; Porfiry Pietrowicz – śledczy prowadzący sprawę, który stopniowo demaskuje psychikę Raskolnikowa; oraz Dunia – siostra bohatera, gotowa poświęcić się dla rodziny.\n\nRaskolnikow próbuje uzasadniać swój czyn filozoficznie, ale nie potrafi uciec od wyrzutów sumienia. Sonia przekonuje go do przyznania się do winy i przyjęcia kary jako drogi do odkupienia.\n\nOstatecznie bohater przyznaje się do zbrodni i zostaje zesłany na Syberię. Tam, dzięki miłości Soni i własnemu cierpieniu, zaczyna proces moralnego odrodzenia.",
      timeline: [
        {
          title: "Plan zbrodni",
          description:
            "Raskolnikow tworzy teorię o jednostkach wybitnych i planuje zabójstwo lichwiarki.",
        },
        {
          title: "Morderstwo",
          description:
            "Zabija Alonę Iwanownę oraz przypadkowo jej siostrę Lizawietę.",
        },
        {
          title: "Choroba i rozpad psychiczny",
          description: "Po zbrodni bohater popada w gorączkę i paranoję.",
        },
        {
          title: "Śledztwo Porfirego",
          description: "Porfiry prowadzi psychologiczną grę z Raskolnikowem.",
        },
        {
          title: "Relacja z Sonią",
          description: "Sonia wpływa na przemianę moralną bohatera.",
        },
        {
          title: "Przyznanie się",
          description: "Raskolnikow decyduje się wyznać winę.",
        },
        {
          title: "Zesłanie i odrodzenie",
          description: "Na Syberii rozpoczyna się jego duchowa przemiana.",
        },
      ],
    },
    characters: [
      {
        name: "Rodion Raskolnikow",
        description:
          "Były student prawa, morderca kierujący się teorią o nadludziach.",
        traits: [
          "inteligentny",
          "dumny",
          "wewnętrznie rozdarty",
          "samotny",
          "wrażliwy",
        ],
        role: "Główny bohater",
      },
      {
        name: "Sonia Marmieładowa",
        description:
          "Prostytutka, głęboko religijna, symbol miłości i przebaczenia.",
        traits: ["pokorna", "wierząca", "empatyczna", "poświęcająca się"],
        role: "Moralny przewodnik",
      },
      {
        name: "Porfiry Pietrowicz",
        description: "Sędzia śledczy prowadzący sprawę Raskolnikowa.",
        traits: ["inteligentny", "przenikliwy", "cierpliwy", "ironiczny"],
        role: "Śledczy psycholog",
      },
      {
        name: "Dunia (Awdotia Romanowna)",
        description: "Siostra Raskolnikowa, silna i oddana rodzinie.",
        traits: ["odważna", "lojalna", "poświęcająca się"],
        role: "Siostra bohatera",
      },
      {
        name: "Dymitr Razumichin",
        description: "Przyjaciel Raskolnikowa, reprezentuje zdrowy rozsądek.",
        traits: ["uczciwy", "pracowity", "lojalny", "serdeczny"],
        role: "Przyjaciel bohatera",
      },
      {
        name: "Arkadiusz Swidrygajłow",
        description: "Postać demoniczna, ukazująca moralny upadek.",
        traits: ["amoralny", "cyniczny", "tajemniczy"],
        role: "Antybohater",
      },
    ],
    themes: [
      {
        name: "Wina i kara",
        description:
          "Psychologiczne i moralne konsekwencje popełnionej zbrodni.",
      },
      {
        name: "Granice moralności",
        description: "Pytanie o to, czy jednostka może stać ponad prawem.",
      },
      {
        name: "Cierpienie jako oczyszczenie",
        description: "Cierpienie prowadzi do moralnego odrodzenia.",
      },
      {
        name: "Alienacja jednostki",
        description: "Samotność bohatera wynikająca z jego przekonań.",
      },
    ],
    motifs: [
      {
        name: "Zbrodnia",
        meaning: "Symbol przekroczenia norm moralnych.",
      },
      {
        name: "Kara",
        meaning: "Nie tylko fizyczna, ale przede wszystkim psychiczna.",
      },
      {
        name: "Sen",
        meaning: "Ukazuje podświadomość i wyrzuty sumienia bohatera.",
      },
      {
        name: "Miasto",
        meaning: "Petersburg jako przestrzeń chaosu i moralnego upadku.",
      },
    ],
    contexts: [
      {
        title: "Filozofia Nietzschego",
        description:
          "Koncepcja nadczłowieka jako kontekst dla teorii Raskolnikowa.",
      },
      {
        title: "Biblia",
        description: "Motywy winy, kary i odkupienia (np. historia Łazarza).",
      },
      {
        title: "Realizm rosyjski XIX wieku",
        description: "Ukazanie życia społecznego i psychologii jednostki.",
      },
      {
        title: "Sytuacja społeczna w Rosji",
        description: "Ubóstwo, nierówności społeczne i kryzys moralny.",
      },
    ],
    quotes: [
      {
        text: "Człowiek jest podły... i dlatego cierpi.",
        explanation: "Ukazuje pesymistyczną wizję natury ludzkiej.",
      },
      {
        text: "Zabiłem nie człowieka, lecz zasadę!",
        explanation: "Próba usprawiedliwienia zbrodni przez ideologię.",
      },
      {
        text: "Idź natychmiast, stań na skrzyżowaniu, pokłoń się ziemi...",
        explanation: "Sonia nawołuje do pokuty i przyznania się do winy.",
      },
    ],
    terms: [
      {
        name: "Raskolnikowizm",
        meaning: "Ideologia dzieląca ludzi na lepszych i gorszych.",
      },
      {
        name: "Psychologizm",
        meaning: "Skupienie na analizie psychiki bohatera.",
      },
      {
        name: "Realizm",
        meaning: "Dokładne odwzorowanie rzeczywistości społecznej.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Czy Raskolnikow jest zbrodniarzem czy ofiarą własnej ideologii?",
        "Jaką rolę odgrywa Sonia w przemianie bohatera?",
        "Czy zbrodnia może być usprawiedliwiona wyższym celem?",
        "Na czym polega psychologizm powieści Dostojewskiego?",
      ],
      keywords: [
        "Raskolnikow",
        "wina",
        "kara",
        "psychologizm",
        "moralność",
        "Sonia",
        "zbrodnia",
      ],
      commonMistakes: [
        "Sprowadzanie utworu tylko do kryminału.",
        "Ignorowanie przemiany wewnętrznej bohatera.",
        "Pomijanie roli Soni jako symbolu odkupienia.",
      ],
      introStarters: [
        "Powieść Fiodora Dostojewskiego „Zbrodnia i kara” stanowi jedno z najważniejszych dzieł literatury psychologicznej.",
        "Problem winy i odpowiedzialności moralnej od wieków fascynuje twórców literatury.",
        "Postać Raskolnikowa pozwala na analizę granic ludzkiej moralności.",
      ],
    },
  },
  {
    id: 19,
    title: "Wesele",
    author: "Stanisław Wyspiański",
    year: 1901,
    epoch: "Młoda Polska",
    summary: {
      short:
        "Dramat ukazujący spotkanie inteligencji i chłopów podczas wesela, które staje się symbolicznym obrazem polskiego społeczeństwa niezdolnego do wspólnego działania i odzyskania niepodległości.",
      detailed:
        "Akcja dramatu rozgrywa się w Bronowicach pod Krakowem podczas wesela poety Lucjana Rydla (Pan Młody) z chłopką Jadwigą Mikołajczykówną (Panna Młoda). W wydarzeniu uczestniczą przedstawiciele inteligencji i chłopstwa. Już od początku widoczny jest brak prawdziwego porozumienia między tymi grupami – inteligencja idealizuje lud, a chłopi odnoszą się do niej z dystansem.\n\nW pierwszym akcie poznajemy rozmowy gości, które ujawniają stereotypy, uprzedzenia i powierzchowność relacji. W drugim akcie pojawiają się postaci fantastyczne – widma i zjawy, które odwiedzają bohaterów. Każda z nich symbolizuje ich wewnętrzne lęki, kompleksy lub narodowe problemy. Stańczyk ukazuje Dziennikarzowi jego polityczną bierność, Rycerz przypomina Poecie o utraconym ideale bohaterstwa, Hetman uosabia zdradę narodową, a Upiór przypomina o krwawych konfliktach społecznych.\n\nNajważniejszym momentem jest pojawienie się Wernyhory – legendarnego proroka, który przekazuje Gospodarzowi złoty róg jako symbol wezwania do narodowego powstania. Gospodarz powierza misję Jaśkowi, jednak ten gubi róg, schylając się po czapkę z pawimi piórami. Symbolizuje to utratę szansy na wyzwolenie przez lekkomyślność i brak odpowiedzialności.\n\nDramat kończy się chocholim tańcem – hipnotycznym, bezwolnym ruchem uczestników wesela, symbolizującym marazm, uśpienie narodu i niemożność podjęcia działania.",
      timeline: [
        {
          title: "Rozpoczęcie wesela",
          description:
            "Spotkanie inteligencji i chłopów, rozmowy ujawniające różnice społeczne.",
        },
        {
          title: "Konflikty i stereotypy",
          description:
            "Dialogi pokazujące brak porozumienia między warstwami społecznymi.",
        },
        {
          title: "Pojawienie się widm",
          description:
            "Zjawy konfrontują bohaterów z ich słabościami i historią narodu.",
        },
        {
          title: "Wizyta Wernyhory",
          description:
            "Przekazanie złotego rogu jako symbolu szansy na powstanie.",
        },
        {
          title: "Utrata rogu",
          description:
            "Jasiek gubi róg, co symbolizuje zaprzepaszczenie okazji do działania.",
        },
        {
          title: "Chocholi taniec",
          description: "Finałowy obraz marazmu i bezsilności społeczeństwa.",
        },
      ],
    },
    characters: [
      {
        name: "Gospodarz",
        description:
          "Właściciel domu, reprezentant inteligencji związanej z ludem.",
        traits: ["patriotyzm", "naiwność", "odpowiedzialność"],
        role: "Pośrednik między warstwami",
      },
      {
        name: "Pan Młody",
        description: "Inteligent zafascynowany kulturą ludową.",
        traits: ["naiwność", "idealizm", "powierzchowność"],
        role: "Inteligent zauroczony ludem",
      },
      {
        name: "Panna Młoda",
        description: "Prosta chłopka, żona Pana Młodego.",
        traits: ["prostota", "naturalność", "tradycyjność"],
        role: "Reprezentantka chłopstwa",
      },
      {
        name: "Dziennikarz",
        description:
          "Konserwatywny publicysta, sceptyczny wobec działań narodowych.",
        traits: ["ironia", "bierność", "pesymizm"],
        role: "Symbol bierności elit",
      },
      {
        name: "Poeta",
        description: "Artysta, który utracił wiarę w swoją rolę społeczną.",
        traits: ["dekadentyzm", "zwątpienie", "refleksyjność"],
        role: "Symbol kryzysu artysty",
      },
      {
        name: "Jasiek",
        description: "Młody chłopak, który gubi złoty róg.",
        traits: ["lekkomyślność", "niedojrzałość"],
        role: "Zaprzepaszczona szansa",
      },
      {
        name: "Wernyhora",
        description: "Legendarny prorok wzywający do powstania.",
        traits: ["mistycyzm", "autorytet"],
        role: "Symbol narodowej misji",
      },
      {
        name: "Chochoł",
        description: "Postać symboliczna inicjująca taniec.",
        traits: ["tajemniczość", "hipnotyczność"],
        role: "Symbol marazmu narodu",
      },
    ],
    themes: [
      {
        name: "Brak jedności narodowej",
        description:
          "Konflikt między inteligencją a chłopstwem uniemożliwia wspólne działanie.",
      },
      {
        name: "Niespełniona idea powstania",
        description:
          "Naród nie potrafi wykorzystać szansy na odzyskanie niepodległości.",
      },
      {
        name: "Krytyka społeczeństwa",
        description: "Wyspiański ukazuje wady wszystkich warstw społecznych.",
      },
      {
        name: "Mit chłopa",
        description:
          "Idealizacja ludu przez inteligencję okazuje się powierzchowna.",
      },
    ],
    motifs: [
      {
        name: "Chocholi taniec",
        meaning: "Symbol uśpienia i bezsilności narodu.",
      },
      {
        name: "Złoty róg",
        meaning: "Symbol szansy na powstanie i wolność.",
      },
      {
        name: "Widma",
        meaning: "Uosobienie historii, win i kompleksów narodowych.",
      },
      {
        name: "Wieś",
        meaning:
          "Idealizowana przestrzeń, która nie spełnia oczekiwań inteligencji.",
      },
    ],
    contexts: [
      {
        title: "Autentyczne wesele Rydla",
        description:
          "Inspiracją była rzeczywista uroczystość Lucjana Rydla w Bronowicach.",
      },
      {
        title: "Sytuacja Polski pod zaborami",
        description:
          "Brak niepodległości i podziały społeczne wpływały na postawy bohaterów.",
      },
      {
        title: "Romantyzm",
        description: "Nawiązania do idei mesjanizmu i powstań narodowych.",
      },
      {
        title: "Chłopomania",
        description: "Moda inteligencji na fascynację kulturą ludową.",
      },
      {
        title: "Dziady cz. III",
        description:
          "Podobna symbolika narodowa i obecność postaci fantastycznych.",
      },
    ],
    quotes: [
      {
        text: "Miałeś, chamie, złoty róg...",
        explanation: "Symbol utraconej szansy na odzyskanie niepodległości.",
      },
      {
        text: "Niech na całym świecie wojna, byle polska wieś zaciszna...",
        explanation: "Wyraz egoizmu i braku odpowiedzialności społecznej.",
      },
      {
        text: "Cóż tam, panie, w polityce?",
        explanation:
          "Początek rozmowy ujawniającej powierzchowność zainteresowania sprawami narodowymi.",
      },
    ],
    terms: [
      {
        name: "Symbolizm",
        meaning:
          "Kierunek literacki wykorzystujący symbole do ukazywania głębszych znaczeń.",
      },
      {
        name: "Chłopomania",
        meaning: "Fascynacja inteligencji kulturą ludową.",
      },
      {
        name: "Dramat symboliczny",
        meaning: "Utwór, w którym wydarzenia mają znaczenie metaforyczne.",
      },
    ],
    exam: {
      possibleQuestions: [
        'Jaką wizję społeczeństwa polskiego przedstawia Wyspiański w "Weselu"?',
        "Symbolika chocholego tańca – omów znaczenie.",
        'Czy w "Weselu" istnieje szansa na odzyskanie niepodległości?',
        "Rola widm i postaci fantastycznych w dramacie.",
        "Konflikt inteligencji i chłopstwa – analiza.",
      ],
      keywords: [
        "chocholi taniec",
        "złoty róg",
        "widma",
        "symbolizm",
        "chłopomania",
        "marazm",
        "naród",
        "bierność",
      ],
      commonMistakes: [
        "Sprowadzanie utworu wyłącznie do realistycznego obrazu wesela.",
        "Pomijanie znaczenia symboliki.",
        "Brak analizy relacji między warstwami społecznymi.",
        "Nieinterpretowanie postaci fantastycznych.",
      ],
      introStarters: [
        'Dramat Stanisława Wyspiańskiego "Wesele" stanowi jedno z najważniejszych dzieł Młodej Polski, będące diagnozą społeczeństwa polskiego.',
        '"Wesele" to utwór symboliczny, w którym autor ukazuje narodowe słabości i niemożność wspólnego działania.',
        'Analizując "Wesele", należy zwrócić uwagę na jego wielowarstwową symbolikę oraz kontekst historyczny.',
      ],
    },
  },
  {
    id: 20,
    title: "Chłopi (fragmenty)",
    author: "Władysław Stanisław Reymont",
    year: "1904–1909",
    epoch: "Młoda Polska",
    summary: {
      short:
        "„Chłopi” to realistyczna epopeja ukazująca życie społeczności wiejskiej w Lipcach, podporządkowane rytmowi natury i tradycji, skupiona wokół konfliktów rodzinnych, miłości oraz walki o ziemię.",
      detailed:
        "Akcja powieści toczy się we wsi Lipce i została podzielona na cztery tomy odpowiadające porom roku: Jesień, Zima, Wiosna i Lato. Centralną postacią jest Maciej Boryna – najbogatszy gospodarz we wsi, który decyduje się poślubić młodą i piękną Jagnę Paczesiównę. Małżeństwo to budzi sprzeciw jego syna Antka, który jest zakochany w Jagnie.\n\nJesień rozpoczyna się od przygotowań do ślubu Boryny i Jagny. Konflikt między ojcem a synem narasta, szczególnie gdy Antek nie chce podporządkować się woli ojca w kwestii gospodarstwa. Zima przynosi zaostrzenie konfliktu – dochodzi do bójki między Antkiem a Boryną, po której Antek zostaje wyrzucony z domu.\n\nWiosną pojawiają się nowe napięcia – Jagna wdaje się w romans z Antkiem, co prowadzi do skandalu. Tymczasem Boryna bierze udział w sporze o las z dworem i zostaje ciężko ranny podczas walki o prawo do korzystania z lasu.\n\nLatem następuje kulminacja wydarzeń. Boryna umiera po powrocie do pracy w polu, symbolicznie jednocząc się z ziemią. Jagna zostaje uznana przez społeczność za niemoralną i wygnana ze wsi. Antek przejmuje gospodarstwo po ojcu i staje się nowym gospodarzem.\n\nCałość utworu ukazuje cykliczność życia, podporządkowanie człowieka naturze oraz silne więzi społeczne i tradycyjne rządzące życiem chłopów.",
      timeline: [
        {
          title: "Ślub Boryny z Jagną",
          description:
            "Maciej Boryna żeni się z młodą Jagną, co wywołuje konflikt z synem Antkiem.",
        },
        {
          title: "Konflikt ojca i syna",
          description: "Antek sprzeciwia się ojcu i zostaje wyrzucony z domu.",
        },
        {
          title: "Romans Jagny i Antka",
          description:
            "Jagna wdaje się w relację z Antkiem, co prowadzi do skandalu.",
        },
        {
          title: "Spór o las",
          description:
            "Chłopi walczą z dworem o prawo do korzystania z lasu, Boryna zostaje ranny.",
        },
        {
          title: "Śmierć Boryny",
          description:
            "Maciej Boryna umiera podczas pracy na roli, symbolicznie związany z ziemią.",
        },
        {
          title: "Wygnanie Jagny",
          description:
            "Społeczność wiejska usuwa Jagnę ze wsi jako karę za niemoralne zachowanie.",
        },
      ],
    },
    characters: [
      {
        name: "Maciej Boryna",
        description:
          "Najbogatszy gospodarz we wsi Lipce, silny i dumny, przywiązany do ziemi i tradycji.",
        traits: ["dumny", "pracowity", "autorytarny", "tradycjonalista"],
        role: "Gospodarz i patriarcha",
      },
      {
        name: "Antek Boryna",
        description: "Syn Macieja, zbuntowany i namiętny, zakochany w Jagnie.",
        traits: ["porywczy", "zbuntowany", "namiętny", "ambitny"],
        role: "Syn i buntownik",
      },
      {
        name: "Jagna Paczesiówna",
        description:
          "Piękna młoda kobieta, obiekt pożądania wielu mężczyzn, niezrozumiana przez społeczność.",
        traits: ["piękna", "bierna", "emocjonalna", "niezależna"],
        role: "Kobieta wykluczona",
      },
      {
        name: "Hanka Borynowa",
        description:
          "Żona Antka, silna i zaradna kobieta, walcząca o byt swojej rodziny.",
        traits: ["pracowita", "wytrwała", "odważna", "lojalna"],
        role: "Żona i matka",
      },
      {
        name: "Dominikowa",
        description: "Matka Jagny, kierująca się interesem materialnym.",
        traits: ["chciwa", "pragmatyczna", "dominująca"],
        role: "Matka Jagny",
      },
    ],
    themes: [
      {
        name: "Związek człowieka z naturą",
        description:
          "Życie bohaterów podporządkowane jest rytmowi przyrody i cyklowi pór roku.",
      },
      {
        name: "Konflikt pokoleń",
        description:
          "Spór między Boryną a Antkiem odzwierciedla napięcia między tradycją a zmianą.",
      },
      {
        name: "Społeczność i jej normy",
        description:
          "Wieś jako zamknięta wspólnota narzuca jednostce surowe zasady moralne.",
      },
      {
        name: "Miłość i namiętność",
        description: "Uczucia bohaterów prowadzą do konfliktów i tragedii.",
      },
      {
        name: "Walka o ziemię",
        description: "Ziemia stanowi najwyższą wartość i źródło konfliktów.",
      },
    ],
    motifs: [
      {
        name: "Ziemia",
        meaning: "Symbol życia, bogactwa i sensu istnienia chłopa.",
      },
      {
        name: "Pory roku",
        meaning: "Podkreślają cykliczność życia i jego naturalny rytm.",
      },
      {
        name: "Wesele",
        meaning: "Symbol wspólnoty, ale też konfliktów społecznych.",
      },
      {
        name: "Religia",
        meaning: "Element życia codziennego, porządkujący świat wartości.",
      },
    ],
    contexts: [
      {
        title: "Realizm i naturalizm",
        description:
          "Utwór ukazuje realistyczny obraz życia chłopów, z elementami naturalizmu (np. brutalność życia, determinacja biologiczna).",
      },
      {
        title: "Młoda Polska",
        description:
          "Zainteresowanie wsią jako źródłem autentyczności i siły narodowej.",
      },
      {
        title: "Pan Tadeusz",
        description:
          "Podobieństwo do epopei narodowej – ukazanie społeczności i tradycji.",
      },
      {
        title: "Pozytywizm",
        description:
          "Kontynuacja zainteresowania warstwami społecznymi i realizmem.",
      },
    ],
    quotes: [
      {
        text: "Ziemia żywi, ziemia karmi, ziemia daje wszystko.",
        explanation: "Podkreślenie fundamentalnej roli ziemi w życiu chłopa.",
      },
      {
        text: "Na ziemi wszystko się rodzi i wszystko umiera.",
        explanation: "Wyraz cykliczności życia i podporządkowania naturze.",
      },
    ],
    terms: [
      {
        name: "Epopeja",
        meaning: "Rozbudowany utwór epicki ukazujący życie zbiorowości.",
      },
      {
        name: "Naturalizm",
        meaning:
          "Kierunek literacki ukazujący człowieka jako istotę zdeterminowaną przez naturę i środowisko.",
      },
      {
        name: "Realizm",
        meaning: "Dokładne odwzorowanie rzeczywistości w literaturze.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Jaką rolę odgrywa ziemia w życiu bohaterów „Chłopów”?",
        "Na czym polega konflikt pokoleń w powieści Reymonta?",
        "Jak społeczność wiejska wpływa na jednostkę?",
        "Omów obraz wsi w „Chłopach”.",
        "Jaką funkcję pełni natura w utworze?",
      ],
      keywords: [
        "ziemia",
        "wieś",
        "społeczność",
        "natura",
        "cykliczność",
        "konflikt",
        "tradycja",
      ],
      commonMistakes: [
        "Traktowanie Jagny wyłącznie jako postaci negatywnej.",
        "Pomijanie znaczenia natury i pór roku.",
        "Sprowadzanie utworu tylko do wątku miłosnego.",
        "Ignorowanie roli społeczności wiejskiej.",
      ],
      introStarters: [
        "„Chłopi” Władysława Reymonta to jedno z najważniejszych dzieł literatury polskiej ukazujące życie wsi...",
        "Powieść Reymonta przedstawia realistyczny obraz społeczności chłopskiej...",
        "Jednym z kluczowych problemów w „Chłopach” jest relacja człowieka z naturą...",
      ],
    },
  },
  {
    id: 21,
    title: "Przedwiośnie",
    author: "Stefan Żeromski",
    year: 1924,
    epoch: "XX-lecie międzywojenne",
    summary: {
      short:
        "Powieść ukazuje losy Cezarego Baryki – młodego człowieka dojrzewającego w czasie rewolucji i odbudowy Polski, który poszukuje własnej tożsamości i wizji ojczyzny.",
      detailed:
        "Akcja powieści rozpoczyna się w Baku, gdzie dorasta Cezary Baryka – syn polskich emigrantów. Jego ojciec, Seweryn Baryka, zostaje powołany do armii rosyjskiej podczas I wojny światowej. W czasie jego nieobecności Cezary ulega wpływom rewolucji bolszewickiej – początkowo fascynuje się ideą równości społecznej, jednak szybko doświadcza jej brutalnych konsekwencji, w tym śmierci matki.\n\nPo powrocie ojca Cezary wyrusza z nim do Polski. Seweryn snuje wizję kraju jako miejsca nowoczesnego i sprawiedliwego – opowiada o „szklanych domach”. Ojciec jednak umiera w drodze, a Cezary dociera do odrodzonej Polski sam.\n\nW Polsce trafia do majątku w Nawłoci, gdzie poznaje środowisko ziemiańskie. Obserwuje jego powierzchowność, brak odpowiedzialności społecznej i oderwanie od realiów życia chłopów. Przeżywa zawód miłosny związany z Laurą Kościeniecką.\n\nNastępnie trafia do Warszawy, gdzie spotyka Gajowca – zwolennika stopniowych reform państwa – oraz Lulka – reprezentanta radykalnej lewicy. Cezary konfrontuje różne wizje przyszłości Polski: idealistyczną, rewolucyjną i realistyczną.\n\nPowieść kończy się symboliczną sceną marszu robotników na Belweder, do którego przyłącza się Cezary, co pozostawia otwarte pytanie o jego wybór ideowy i przyszłość Polski.",
      timeline: [
        {
          title: "Dzieciństwo w Baku",
          description: "Cezary dorasta w dostatku, wychowywany przez matkę.",
        },
        {
          title: "Rewolucja bolszewicka",
          description:
            "Cezary angażuje się w rewolucję, doświadcza jej okrucieństwa i śmierci matki.",
        },
        {
          title: "Podróż do Polski",
          description:
            "Wędrówka z ojcem, opowieść o szklanych domach, śmierć Seweryna.",
        },
        {
          title: "Pobyt w Nawłoci",
          description:
            "Poznanie życia ziemiaństwa, romans z Laurą, rozczarowanie elitami.",
        },
        {
          title: "Warszawa",
          description: "Spotkania z Gajowcem i Lulkiem, spór ideologiczny.",
        },
        {
          title: "Marsz robotników",
          description:
            "Cezary dołącza do manifestacji – symboliczny wybór drogi życiowej.",
        },
      ],
    },
    characters: [
      {
        name: "Cezary Baryka",
        description:
          "Główny bohater, młody Polak poszukujący sensu życia i idei, którym mógłby zaufać.",
        traits: ["buntowniczy", "wrażliwy", "poszukujący", "impulsywny"],
        role: "Bohater poszukujący tożsamości",
      },
      {
        name: "Seweryn Baryka",
        description:
          "Ojciec Cezarego, patriota wierzący w odrodzenie Polski i jej rozwój.",
        traits: ["idealistyczny", "patriotyczny", "opiekuńczy"],
        role: "Ojciec i wizjoner",
      },
      {
        name: "Jadwiga Baryka",
        description:
          "Matka Cezarego, oddana rodzinie, cierpiąca podczas rewolucji.",
        traits: ["poświęcająca się", "cierpliwa", "kochająca"],
        role: "Matka ofiara rewolucji",
      },
      {
        name: "Szymon Gajowiec",
        description:
          "Urzędnik państwowy reprezentujący umiarkowaną wizję odbudowy Polski.",
        traits: ["rozsądny", "racjonalny", "patriotyczny"],
        role: "Reformator państwowy",
      },
      {
        name: "Antoni Lulek",
        description:
          "Student i zwolennik komunizmu, propagator radykalnych zmian społecznych.",
        traits: ["ideologiczny", "radykalny", "rewolucyjny"],
        role: "Radykał polityczny",
      },
      {
        name: "Laura Kościeniecka",
        description:
          "Kobieta, w której zakochuje się Cezary, reprezentuje świat ziemiaństwa.",
        traits: ["kokieteryjna", "emocjonalna", "egoistyczna"],
        role: "Obiekt miłosny bohatera",
      },
    ],
    themes: [
      {
        name: "Poszukiwanie tożsamości",
        description:
          "Cezary próbuje odnaleźć swoje miejsce między różnymi ideologiami i wizjami Polski.",
      },
      {
        name: "Obraz odrodzonej Polski",
        description:
          "Powieść ukazuje problemy społeczne, gospodarcze i polityczne młodego państwa.",
      },
      {
        name: "Rewolucja",
        description:
          "Żeromski przedstawia zarówno jej atrakcyjność, jak i destrukcyjne skutki.",
      },
      {
        name: "Społeczna niesprawiedliwość",
        description:
          "Kontrast między bogactwem elit a biedą chłopów i robotników.",
      },
    ],
    motifs: [
      {
        name: "Szklane domy",
        meaning:
          "Symbol utopijnej wizji Polski – nowoczesnej, sprawiedliwej i dostatniej.",
      },
      {
        name: "Podróż",
        meaning:
          "Proces dojrzewania bohatera i jego przemiany światopoglądowej.",
      },
      {
        name: "Rewolucja",
        meaning:
          "Znak chaosu, przemian społecznych i zagrożenia dla jednostki.",
      },
    ],
    contexts: [
      {
        title: "Rewolucja bolszewicka 1917",
        description:
          "Tło historyczne wydarzeń w Baku i wpływ ideologii komunistycznej na bohatera.",
      },
      {
        title: "Odzyskanie niepodległości przez Polskę",
        description:
          "Sytuacja młodego państwa po 1918 roku i jego problemy strukturalne.",
      },
      {
        title: "„Lalka” Bolesława Prusa",
        description: "Podobny motyw rozczarowania społeczeństwem i elitami.",
      },
      {
        title: "„Kordian” Juliusza Słowackiego",
        description: "Motyw młodego bohatera poszukującego sensu życia i idei.",
      },
    ],
    quotes: [
      {
        text: "Polska to jest wielka rzecz.",
        explanation:
          "Wyraża patriotyzm i znaczenie ojczyzny w świadomości bohaterów.",
      },
      {
        text: "Szklane domy...",
        explanation:
          "Symbol idealistycznej wizji Polski przekazanej przez Seweryna Barykę.",
      },
    ],
    terms: [
      {
        name: "Utopia",
        meaning:
          "Wyidealizowana wizja społeczeństwa, niemożliwa do realizacji.",
      },
      {
        name: "Rewolucja",
        meaning: "Gwałtowna zmiana ustroju społecznego i politycznego.",
      },
      {
        name: "Ideologia",
        meaning: "System poglądów politycznych i społecznych.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Jakie wizje Polski przedstawia „Przedwiośnie”?",
        "Na czym polega dojrzewanie Cezarego Baryki?",
        "Jak Żeromski ocenia rewolucję?",
        "Co symbolizują szklane domy?",
      ],
      keywords: [
        "szklane domy",
        "rewolucja",
        "tożsamość",
        "Polska po 1918",
        "ideologie",
      ],
      commonMistakes: [
        "Uznawanie, że autor jednoznacznie popiera rewolucję",
        "Pomijanie znaczenia Nawłoci jako krytyki elit",
        "Interpretowanie zakończenia jako jednoznacznego wyboru bohatera",
      ],
      introStarters: [
        "„Przedwiośnie” Stefana Żeromskiego to powieść ukazująca...",
        "Jednym z kluczowych problemów poruszanych w utworze jest...",
        "Postać Cezarego Baryki stanowi przykład...",
      ],
    },
  },
  {
    id: 22,
    title: "Ferdydurke (fragmenty)",
    author: "Witold Gombrowicz",
    year: 1937,
    epoch: "XX-lecie międzywojenne",
    summary: {
      short:
        "Powieść groteskowa ukazująca proces „upupiania” jednostki przez społeczeństwo, które narzuca jej formy, role i schematy zachowań.",
      detailed:
        "Trzydziestoletni Józio Kowalski zostaje nagle „porwany” przez profesora Pimkę i cofnięty do szkoły, gdzie zostaje ponownie uczniem. W szkole doświadcza absurdu systemu edukacyjnego, który zamiast rozwijać indywidualność, wtłacza uczniów w schematy. Szczególnie widoczne jest to w konflikcie między uczniami Miętusem i Syfonem – pierwszy buntuje się przeciw formie, drugi reprezentuje bezrefleksyjne podporządkowanie.\n\nNastępnie Józio trafia do nowoczesnej rodziny Młodziaków, która deklaruje postępowość i wolność, jednak w rzeczywistości również funkcjonuje w ramach społecznych konwenansów. Józio próbuje zdemaskować ich hipokryzję, prowokując sytuacje kompromitujące ich „nowoczesność”.\n\nW ostatniej części bohater udaje się na wieś do dworku Hurleckich. Tam obserwuje relacje między panami a służbą oraz próbuje sprowokować „bratanie się” klas społecznych poprzez działania Miętusa. Jednak i tutaj okazuje się, że każda próba wyjścia poza formę kończy się jej odtworzeniem.\n\nCałość kończy się refleksją nad niemożnością ucieczki od formy – człowiek zawsze funkcjonuje w relacjach społecznych, które go określają i deformują.",
      timeline: [
        {
          title: "Porwanie przez Pimkę",
          description:
            "Józio zostaje cofnięty do szkoły i poddany procesowi „upupienia”.",
        },
        {
          title: "Szkoła i konflikt uczniów",
          description:
            "Zderzenie postaw Miętusa i Syfona ukazuje absurd systemu edukacji.",
        },
        {
          title: "Pobyt u Młodziaków",
          description: "Demaskacja pozornej nowoczesności i wolności.",
        },
        {
          title: "Dworek Hurleckich",
          description: "Analiza relacji klasowych i próba ich przełamania.",
        },
        {
          title: "Refleksja końcowa",
          description: "Uświadomienie nieuchronności formy w życiu społecznym.",
        },
      ],
    },
    characters: [
      {
        name: "Józio Kowalski",
        description:
          "Trzydziestoletni bohater, który zostaje cofnięty do szkoły i doświadcza narzucania form społecznych.",
        traits: ["refleksyjny", "zagubiony", "ironiczny", "buntowniczy"],
        role: "Ofiara formy społecznej",
      },
      {
        name: "Profesor Pimko",
        description:
          "Nauczyciel, który narzuca Józiowi rolę ucznia i symbolizuje opresyjny system edukacji.",
        traits: ["autorytarny", "konserwatywny", "schematyczny"],
        role: "Strażnik formy szkolnej",
      },
      {
        name: "Miętus",
        description:
          "Uczeń buntujący się przeciwko formom społecznym i dążący do autentyczności.",
        traits: ["buntowniczy", "prowokacyjny", "radykalny"],
        role: "Bunt przeciw formie",
      },
      {
        name: "Syfon",
        description:
          "Uczeń podporządkowany systemowi, reprezentujący bezkrytyczne przyjęcie formy.",
        traits: ["uległy", "posłuszny", "naiwny"],
        role: "Uosobienie konformizmu",
      },
      {
        name: "Zuta Młodziakówna",
        description:
          "Nowoczesna dziewczyna wychowywana w duchu postępu, lecz uwikłana w społeczne schematy.",
        traits: ["pozornie wyzwolona", "świadoma", "konwencjonalna"],
        role: "Symbol pozornej nowoczesności",
      },
      {
        name: "Młodziakowie",
        description:
          "Rodzina reprezentująca nowoczesność, która okazuje się jedynie kolejną formą społeczną.",
        traits: ["postępowi", "hipokrytyczni", "schematyczni"],
        role: "Reprezentanci nowoczesnej formy",
      },
      {
        name: "Hurleccy",
        description:
          "Ziemiańska rodzina reprezentująca tradycyjny porządek społeczny.",
        traits: ["konserwatywni", "hierarchiczni"],
        role: "Tradycyjny porządek społeczny",
      },
    ],
    themes: [
      {
        name: "Forma",
        description:
          "Człowiek jest nieustannie kształtowany przez społeczne formy i role, których nie może uniknąć.",
      },
      {
        name: "Niedojrzałość",
        description:
          "Stan narzucany jednostce przez innych, który ogranicza jej rozwój i autonomię.",
      },
      {
        name: "Krytyka edukacji",
        description:
          "Szkoła jako instytucja wtłaczająca jednostkę w schematy i tłumiąca indywidualność.",
      },
      {
        name: "Relacje międzyludzkie",
        description:
          "Kontakty między ludźmi są zawsze zdeterminowane przez role i maski społeczne.",
      },
      {
        name: "Tożsamość",
        description:
          "Jednostka nie posiada stabilnej tożsamości – jest ona tworzona przez innych.",
      },
    ],
    motifs: [
      {
        name: "Gęba",
        meaning: "Społeczna maska narzucana jednostce przez innych.",
      },
      {
        name: "Pupa",
        meaning: "Symbol infantylizacji i podporządkowania.",
      },
      {
        name: "Łydka",
        meaning: "Symbol nowoczesności i erotyzmu, ale także powierzchowności.",
      },
      {
        name: "Szkoła",
        meaning: "Miejsce reprodukcji form społecznych.",
      },
      {
        name: "Dwór",
        meaning: "Symbol tradycyjnego porządku i hierarchii społecznej.",
      },
    ],
    contexts: [
      {
        title: "XX-lecie międzywojenne",
        description:
          "Epoka poszukiwania nowych form wyrazu i krytyki tradycyjnych struktur społecznych.",
      },
      {
        title: "Awangarda literacka",
        description:
          "Eksperymenty formalne i groteska jako sposób wyrażania krytyki rzeczywistości.",
      },
      {
        title: "Filozofia egzystencjalna",
        description: "Problematyka tożsamości i autentyczności jednostki.",
      },
      {
        title: "Szewcy – Witkacy",
        description:
          "Podobna groteskowa wizja społeczeństwa i krytyka form społecznych.",
      },
      {
        title: "Proces – Franz Kafka",
        description: "Motyw jednostki uwikłanej w absurdalny system.",
      },
    ],
    quotes: [
      {
        text: "Słowacki wielkim poetą był.",
        explanation:
          "Parodia szkolnego nauczania i bezrefleksyjnego powtarzania utartych sądów.",
      },
      {
        text: "Nie ma ucieczki przed gębą, jak tylko w inną gębę.",
        explanation:
          "Ukazuje nieuchronność form społecznych i brak możliwości autentyczności.",
      },
    ],
    terms: [
      {
        name: "Groteska",
        meaning:
          "Połączenie elementów komicznych i tragicznych w celu ukazania absurdów rzeczywistości.",
      },
      {
        name: "Upupienie",
        meaning: "Proces infantylizacji jednostki i odbierania jej autonomii.",
      },
      {
        name: "Forma",
        meaning: "Zbiór narzuconych ról i schematów społecznych.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Na czym polega problem formy w Ferdydurke?",
        "Jak Gombrowicz przedstawia szkołę jako instytucję?",
        "Czy możliwa jest ucieczka od formy?",
        "Jakie znaczenie mają motywy gęby i pupy?",
        "W jaki sposób Ferdydurke jest powieścią groteskową?",
      ],
      keywords: [
        "forma",
        "gęba",
        "pupa",
        "groteska",
        "niedojrzałość",
        "tożsamość",
        "konformizm",
        "bunt",
      ],
      commonMistakes: [
        "Traktowanie utworu dosłownie zamiast symbolicznie",
        "Pomijanie znaczenia groteski",
        "Uproszczenie pojęcia formy",
        "Brak odniesienia do kontekstów filozoficznych",
      ],
      introStarters: [
        "Powieść Witolda Gombrowicza „Ferdydurke” stanowi jedno z najważniejszych dzieł literatury XX-lecia międzywojennego, podejmujących problem tożsamości jednostki.",
        "Motyw formy w „Ferdydurke” jest kluczowy dla zrozumienia przesłania utworu i ukazuje ograniczenia narzucane człowiekowi przez społeczeństwo.",
        "Groteskowy charakter „Ferdydurke” pozwala autorowi na krytyczne spojrzenie na rzeczywistość społeczną i mechanizmy rządzące ludzkimi relacjami.",
      ],
    },
  },
  {
    id: 23,
    title: "Proszę państwa do gazu",
    author: "Tadeusz Borowski",
    year: 1946,
    epoch: "Współczesność",
    summary: {
      short:
        "Opowiadanie przedstawia jeden dzień pracy więźniów w obozie Auschwitz, którzy uczestniczą w rozładunku transportu ludzi przeznaczonych do komór gazowych. Ukazuje dehumanizację i moralne wyniszczenie człowieka w warunkach obozowych.",
      detailed:
        "Narrator Tadek, więzień obozu Auschwitz, pracuje przy rampie kolejowej, gdzie przyjmowane są transporty Żydów. Razem z innymi więźniami zajmuje się wyładowywaniem ludzi i ich dobytku. Przyjazd transportu to moment chaosu i brutalnej selekcji – jedni zostają skierowani do pracy, inni bezpośrednio do komór gazowych.\n\nTadek i jego współpracownicy, mimo świadomości losu przybyłych, skupiają się głównie na zdobyciu jak największej ilości jedzenia i wartościowych przedmiotów. Obóz narzuca logikę przetrwania za wszelką cenę, co prowadzi do zobojętnienia wobec cierpienia innych.\n\nPodczas rozładunku obserwujemy dramatyczne sceny: rozdzielanie rodzin, panikę, próby ratunku dzieci. Jednocześnie więźniowie funkcyjni, tacy jak Tadek, wykonują swoją pracę mechanicznie, często wykorzystując sytuację dla własnych korzyści.\n\nNarrator ukazuje obozową rzeczywistość jako świat odwróconych wartości – moralność zostaje zawieszona, a podstawowym celem staje się przeżycie. Utwór kończy się refleksją nad tym, jak system obozowy niszczy człowieczeństwo zarówno ofiar, jak i współuczestników zbrodni.",
      timeline: [
        {
          title: "Praca w obozie",
          description:
            "Tadek pracuje w komandzie obsługującym rampę kolejową w Auschwitz.",
        },
        {
          title: "Przyjazd transportu",
          description:
            "Na rampę przybywa transport Żydów przeznaczonych do selekcji.",
        },
        {
          title: "Selekcja",
          description:
            "Więźniowie i esesmani decydują, kto trafi do pracy, a kto do komory gazowej.",
        },
        {
          title: "Grabież mienia",
          description:
            "Więźniowie przeszukują bagaże, szukając jedzenia i wartościowych przedmiotów.",
        },
        {
          title: "Refleksja narratora",
          description:
            "Tadek ukazuje moralną degradację ludzi w systemie obozowym.",
        },
      ],
    },
    characters: [
      {
        name: "Tadek",
        description:
          "Narrator i więzień Auschwitz, pracujący przy rozładunku transportów.",
        traits: [
          "zobojętniały",
          "pragmatyczny",
          "inteligentny",
          "przystosowany",
        ],
        role: "Narrator i świadek",
      },
      {
        name: "Henri",
        description: "Więzień funkcyjny, cyniczny i nastawiony na przetrwanie.",
        traits: ["cyniczny", "sprytny", "bezlitosny", "egoistyczny"],
        role: "Więzień funkcyjny",
      },
      {
        name: "Transportowani Żydzi",
        description: "Ofiary przywożone do obozu, nieświadome swojego losu.",
        traits: ["zdezorientowani", "przerażeni", "bezbronni"],
        role: "Ofiary systemu",
      },
      {
        name: "Esesmani",
        description:
          "Niemieccy funkcjonariusze nadzorujący selekcję i eksterminację.",
        traits: ["bezwzględni", "okrutni", "zdystansowani"],
        role: "Oprawcy systemowi",
      },
    ],
    themes: [
      {
        name: "Dehumanizacja",
        description:
          "Obóz koncentracyjny pozbawia ludzi godności i redukuje ich do roli przedmiotów.",
      },
      {
        name: "Moralność w ekstremalnych warunkach",
        description:
          "System obozowy zmusza ludzi do działań sprzecznych z ich wcześniejszymi wartościami.",
      },
      {
        name: "Walka o przetrwanie",
        description:
          "Najważniejszym celem więźniów staje się przeżycie, nawet kosztem innych.",
      },
      {
        name: "Zło systemowe",
        description:
          "Zło nie wynika tylko z jednostek, lecz z całego systemu totalitarnego.",
      },
    ],
    motifs: [
      {
        name: "Obóz koncentracyjny",
        meaning: "Symbol piekła na ziemi i upadku cywilizacji.",
      },
      {
        name: "Transport",
        meaning: "Symbol drogi ku śmierci i złudnej nadziei.",
      },
      {
        name: "Gaz",
        meaning: "Metafora przemysłowego mordowania ludzi.",
      },
      {
        name: "Jedzenie",
        meaning: "Symbol walki o przetrwanie i degradacji moralnej.",
      },
    ],
    contexts: [
      {
        title: "II wojna światowa i Holokaust",
        description:
          "Utwór odnosi się do rzeczywistych wydarzeń związanych z zagładą Żydów i funkcjonowaniem obozów koncentracyjnych.",
      },
      {
        title: "Literatura obozowa",
        description:
          'Podobne tematy podejmują m.in. "Inny świat" Gustawa Herlinga-Grudzińskiego oraz "Medaliony" Zofii Nałkowskiej.',
      },
      {
        title: "Totalitaryzm",
        description:
          "System nazistowski jako przykład ideologii prowadzącej do uprzedmiotowienia człowieka.",
      },
      {
        title: "Egzystencjalizm",
        description:
          "Refleksja nad kondycją człowieka w sytuacjach granicznych.",
      },
    ],
    quotes: [
      {
        text: "Ludzie ludziom zgotowali ten los.",
        explanation:
          "Ukazuje odpowiedzialność człowieka za zbrodnie i okrucieństwo wobec innych.",
      },
      {
        text: "Proszę państwa do gazu.",
        explanation:
          "Ironia i brutalność języka maskującego rzeczywistość śmierci.",
      },
    ],
    terms: [
      {
        name: "lagier",
        meaning: "Niemiecki obóz koncentracyjny.",
      },
      {
        name: "selekcja",
        meaning: "Proces decydowania o życiu lub śmierci więźniów.",
      },
      {
        name: "dehumanizacja",
        meaning: "Pozbawienie człowieka cech ludzkich.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Jak Borowski przedstawia moralność człowieka w obozie koncentracyjnym?",
        "Na czym polega dehumanizacja w opowiadaniu?",
        "Czy Tadek jest ofiarą czy współuczestnikiem systemu?",
        "Jak język wpływa na odbiór rzeczywistości obozowej?",
      ],
      keywords: [
        "dehumanizacja",
        "Holokaust",
        "lagier",
        "moralność",
        "totalitaryzm",
        "przetrwanie",
      ],
      commonMistakes: [
        "Ocenianie bohaterów bez uwzględnienia warunków obozowych.",
        "Utożsamianie narratora bezpośrednio z autorem.",
        "Pomijanie kontekstu historycznego Holokaustu.",
      ],
      introStarters: [
        "Opowiadanie Tadeusza Borowskiego ukazuje ekstremalne doświadczenie człowieka w obozie koncentracyjnym.",
        "Literatura obozowa podejmuje próbę opisania rzeczywistości granicznej, czego przykładem jest utwór Borowskiego.",
        "Problem moralności w warunkach totalitaryzmu stanowi centralny temat opowiadania.",
      ],
    },
  },
  {
    id: 24,
    title: "Inny świat",
    author: "Gustaw Herling-Grudziński",
    year: 1951,
    epoch: "Współczesność",
    summary: {
      short:
        "„Inny świat” to autobiograficzna relacja z pobytu autora w sowieckim łagrze, ukazująca ekstremalne warunki życia, degradację moralną człowieka oraz walkę o zachowanie godności w nieludzkim systemie totalitarnym.",
      detailed:
        "Utwór ma charakter wspomnieniowy i dokumentalny. Narrator – alter ego autora – zostaje aresztowany przez NKWD podczas II wojny światowej pod zarzutem działalności antyradzieckiej. Po brutalnym śledztwie zostaje skazany i trafia do łagru w Jercewie.\n\nPobyt w obozie ukazany jest jako życie w „innym świecie” – rzeczywistości rządzonej odwróconymi wartościami moralnymi. Więźniowie zmuszeni są do niewolniczej pracy przy wyrębie lasu w ekstremalnych warunkach klimatycznych. Głód, choroby i wyczerpanie prowadzą do stopniowej degradacji fizycznej i psychicznej.\n\nNarrator obserwuje różne postawy więźniów: od całkowitego upodlenia i walki o przetrwanie za wszelką cenę, po próby zachowania godności i solidarności. Szczególnie wstrząsające są historie współwięźniów, np. Kostylewa, który buntuje się przeciw systemowi, czy Natalii Lwowny, kobiety zmuszonej do dramatycznych wyborów.\n\nW łagrze funkcjonuje specyficzna hierarchia – uprzywilejowani są więźniowie kryminalni, podczas gdy polityczni znajdują się na najniższym szczeblu. System obozowy opiera się na terrorze, donosicielstwie i demoralizacji.\n\nNarrator przeżywa ciężką chorobę (szkorbut) i trafia do obozowego szpitala, gdzie warunki są nieco lepsze. Tam obserwuje kolejne przykłady moralnych dylematów i ludzkich dramatów.\n\nPo podpisaniu układu Sikorski–Majski narrator zostaje zwolniony z łagru i opuszcza „inny świat”. Jego doświadczenia pozostają jednak trwałym świadectwem nieludzkiego systemu i przestrogą przed totalitaryzmem.",
      timeline: [
        {
          title: "Aresztowanie",
          description:
            "Narrator zostaje zatrzymany przez NKWD i oskarżony o działalność antyradziecką.",
        },
        {
          title: "Śledztwo i wyrok",
          description:
            "Po brutalnym przesłuchaniu zostaje skazany na pobyt w łagrze.",
        },
        {
          title: "Transport do Jercewa",
          description: "Podróż do obozu w nieludzkich warunkach.",
        },
        {
          title: "Życie w łagrze",
          description:
            "Codzienna walka o przetrwanie, praca ponad siły, głód i choroby.",
        },
        {
          title: "Pobyt w szpitalu",
          description:
            "Narrator trafia do obozowego szpitala z powodu choroby.",
        },
        {
          title: "Obserwacje współwięźniów",
          description:
            "Historie innych więźniów ukazujące różne postawy wobec cierpienia.",
        },
        {
          title: "Zwolnienie",
          description: "Po układzie Sikorski–Majski narrator opuszcza łagier.",
        },
      ],
    },
    characters: [
      {
        name: "Narrator",
        description:
          "Alter ego autora, więzień łagru, obserwator rzeczywistości obozowej.",
        traits: ["refleksyjny", "wrażliwy", "wytrwały", "krytyczny"],
        role: "Świadek systemu",
      },
      {
        name: "Kostylew",
        description:
          "Więzień buntujący się przeciw systemowi, który wybiera śmierć zamiast uległości.",
        traits: ["zbuntowany", "dumny", "tragiczny"],
        role: "Symbol oporu",
      },
      {
        name: "Natalia Lwowna",
        description:
          "Więźniarka zmuszona do dramatycznych wyborów moralnych w obozie.",
        traits: ["tragiczna", "zdeterminowana", "złamana"],
        role: "Ofiara systemu",
      },
      {
        name: "Gorcew",
        description: "Więzień, który przystosowuje się do warunków łagru.",
        traits: ["pragmatyczny", "zdemoralizowany"],
        role: "Przystosowany więzień",
      },
      {
        name: "Lekarze obozowi",
        description:
          "Postacie reprezentujące ograniczone możliwości niesienia pomocy w systemie łagrowym.",
        traits: ["bezsilni", "empatyczni"],
        role: "Pomoc medyczna",
      },
    ],
    themes: [
      {
        name: "Totalitaryzm",
        description:
          "System sowiecki jako mechanizm zniewolenia, kontroli i dehumanizacji człowieka.",
      },
      {
        name: "Granice człowieczeństwa",
        description:
          "Ekstremalne warunki ujawniają granice moralności i wytrzymałości psychicznej.",
      },
      {
        name: "Walka o godność",
        description:
          "Próby zachowania człowieczeństwa mimo nieludzkich warunków.",
      },
      {
        name: "Cierpienie i śmierć",
        description:
          "Codzienność łagru naznaczona bólem, chorobami i śmiercią.",
      },
    ],
    motifs: [
      {
        name: "Łagier",
        meaning: "Symbol zniewolenia i totalitarnego terroru.",
      },
      {
        name: "Głód",
        meaning: "Narządzie kontroli i degradacji człowieka.",
      },
      {
        name: "Praca przymusowa",
        meaning: "Forma wyniszczenia fizycznego i psychicznego.",
      },
      {
        name: "Choroba",
        meaning: "Konsekwencja warunków życia i symbol słabości człowieka.",
      },
    ],
    contexts: [
      {
        title: "System łagrów w ZSRR",
        description:
          "Historyczny kontekst funkcjonowania obozów pracy przymusowej w Związku Radzieckim.",
      },
      {
        title: "II wojna światowa",
        description: "Okoliczności aresztowania i deportacji autora.",
      },
      {
        title: "Literatura łagrowa",
        description:
          "Porównanie z innymi utworami, np. „Archipelag GUŁag” Aleksandra Sołżenicyna.",
      },
      {
        title: "Egzystencjalizm",
        description:
          "Refleksja nad sensem życia i granicami człowieczeństwa w ekstremalnych warunkach.",
      },
    ],
    quotes: [
      {
        text: "Tu otwierał się przede mną inny świat.",
        explanation:
          "Podkreślenie odmienności rzeczywistości łagru, rządzącej się własnymi prawami.",
      },
      {
        text: "Człowiek jest ludzki w ludzkich warunkach.",
        explanation:
          "Teza ukazująca wpływ warunków na moralność i zachowanie człowieka.",
      },
    ],
    terms: [
      {
        name: "Łagier",
        meaning: "Obóz pracy przymusowej w ZSRR.",
      },
      {
        name: "NKWD",
        meaning: "Radziecka policja polityczna odpowiedzialna za represje.",
      },
      {
        name: "Totalitaryzm",
        meaning:
          "System polityczny oparty na pełnej kontroli nad społeczeństwem.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Jakie są granice człowieczeństwa w „Innym świecie”?",
        "W jaki sposób system totalitarny wpływa na jednostkę?",
        "Czy w łagrze możliwe jest zachowanie godności?",
        "Jakie postawy przyjmują więźniowie wobec cierpienia?",
      ],
      keywords: [
        "łagier",
        "totalitaryzm",
        "dehumanizacja",
        "godność",
        "cierpienie",
        "przymusowa praca",
      ],
      commonMistakes: [
        "Sprowadzanie utworu tylko do opisu obozu bez analizy moralnej.",
        "Brak odniesienia do kontekstu historycznego.",
        "Pomijanie refleksyjnego charakteru narracji.",
        "Mylenie łagrów z obozami nazistowskimi.",
      ],
      introStarters: [
        "„Inny świat” Gustawa Herlinga-Grudzińskiego to przejmujące świadectwo życia w łagrze...",
        "Literatura łagrowa ukazuje ekstremalne warunki, w których wystawiona zostaje ludzka moralność...",
        "Doświadczenie totalitaryzmu w „Innym świecie” stanowi punkt wyjścia do refleksji nad naturą człowieka...",
      ],
    },
  },
  {
    id: 25,
    title: "Zdążyć przed Panem Bogiem",
    author: "Hanna Krall",
    year: 1977,
    epoch: "Współczesność",
    summary: {
      short:
        "Reportaż będący zapisem rozmowy z Markiem Edelmanem – jednym z przywódców powstania w getcie warszawskim – ukazujący walkę o godność i sens życia w obliczu Zagłady.",
      detailed:
        "Utwór ma formę reportażu-literackiej rozmowy między Hanną Krall a Markiem Edelmanem – ostatnim żyjącym przywódcą powstania w getcie warszawskim. Edelman opowiada o realiach życia w getcie: głodzie, chorobach, deportacjach do Treblinki oraz stopniowym uświadamianiu sobie nieuchronności śmierci.\n\nJednym z głównych tematów jest organizacja powstania w getcie warszawskim w 1943 roku. Edelman podkreśla, że powstanie nie miało charakteru militarnego zwycięstwa – jego celem było godne umieranie i sprzeciw wobec biernego poddania się zagładzie.\n\nWspomina selekcje, w których decydowano, kto ma jeszcze chwilę życia, a kto zostanie wysłany na śmierć. Ukazuje dramatyczne wybory moralne – lekarzy, którzy musieli decydować, kogo ratować. Szczególne miejsce zajmuje postać Janusza Korczaka, który dobrowolnie poszedł na śmierć z dziećmi.\n\nEdelman opowiada również o miłości w czasach Zagłady (np. historia pary, która chce umrzeć razem), o przypadkach heroizmu i zwykłego człowieczeństwa.\n\nPo wojnie Edelman zostaje lekarzem kardiologiem – ratuje ludzkie życie. Jego zawód stanowi symboliczne przeciwieństwo doświadczenia wojny: zamiast wybierać, kto umrze, stara się „zdążyć przed Panem Bogiem”, czyli uratować człowieka przed śmiercią.\n\nUtwór ma charakter refleksyjny – ukazuje absurd śmierci, przypadkowość ocalenia oraz pytania o sens życia, Boga i moralność w sytuacjach granicznych.",
      timeline: [
        {
          title: "Życie w getcie warszawskim",
          description:
            "Codzienność naznaczona głodem, chorobami i deportacjami do obozów zagłady.",
        },
        {
          title: "Deportacje do Treblinki",
          description:
            "Masowe wywózki Żydów, które uświadamiają mieszkańcom getta nieuchronność śmierci.",
        },
        {
          title: "Powstanie w getcie warszawskim",
          description:
            "Zbrojny opór jako próba godnego umierania i sprzeciwu wobec Zagłady.",
        },
        {
          title: "Upadek powstania",
          description:
            "Zniszczenie getta i śmierć większości jego mieszkańców.",
        },
        {
          title: "Powojenne życie Edelmana",
          description:
            "Praca jako lekarz kardiolog i próba ratowania ludzkiego życia.",
        },
      ],
    },
    characters: [
      {
        name: "Marek Edelman",
        description:
          "Jeden z przywódców powstania w getcie warszawskim, po wojnie lekarz kardiolog.",
        traits: [
          "odważny",
          "racjonalny",
          "empatyczny",
          "refleksyjny",
          "zdeterminowany",
        ],
        role: "Świadek i narrator wydarzeń",
      },
      {
        name: "Hanna Krall",
        description:
          "Autorka reportażu, prowadzi rozmowę z Edelmanem i porządkuje jego relację.",
        traits: ["dociekliwa", "wrażliwa", "obiektywna"],
        role: "Autorka i rozmówczyni",
      },
      {
        name: "Janusz Korczak",
        description:
          "Lekarz i pedagog, który dobrowolnie poszedł na śmierć z dziećmi z sierocińca.",
        traits: ["heroiczny", "oddany", "empatyczny", "moralny"],
        role: "Symbol moralnego wyboru",
      },
      {
        name: "Anielewicz (Mordechaj Anielewicz)",
        description:
          "Dowódca Żydowskiej Organizacji Bojowej, przywódca powstania.",
        traits: ["charyzmatyczny", "odważny", "zdeterminowany"],
        role: "Przywódca powstania",
      },
      {
        name: "Lekarze z getta",
        description:
          "Osoby zmuszone do dokonywania selekcji pacjentów i podejmowania dramatycznych decyzji.",
        traits: ["tragiczni", "odpowiedzialni", "rozdarci moralnie"],
        role: "Ofiary dylematów moralnych",
      },
    ],
    themes: [
      {
        name: "Walka o godność",
        description:
          "Powstanie jako próba zachowania człowieczeństwa mimo pewnej śmierci.",
      },
      {
        name: "Śmierć i życie",
        description:
          "Nieustanne balansowanie między życiem a śmiercią oraz refleksja nad ich sensem.",
      },
      {
        name: "Przypadek i los",
        description:
          "Ocalenie często zależy od przypadku, a nie zasług czy moralności.",
      },
      {
        name: "Rola lekarza",
        description:
          "Kontrast między wybieraniem, kto umrze w getcie, a ratowaniem życia po wojnie.",
      },
      {
        name: "Bóg i moralność",
        description:
          "Pytania o obecność Boga i sens cierpienia w obliczu Zagłady.",
      },
    ],
    motifs: [
      {
        name: "Getto",
        meaning: "Symbol izolacji, cierpienia i skrajnych warunków życia.",
      },
      {
        name: "Selekcja",
        meaning:
          "Dramatyczny wybór między życiem a śmiercią, odczłowieczenie ofiar.",
      },
      {
        name: "Powstanie",
        meaning: "Akt oporu i walki o godność, mimo braku szans na zwycięstwo.",
      },
      {
        name: "Serce",
        meaning: "Symbol życia, które Edelman próbuje ratować jako lekarz.",
      },
      {
        name: "Śmierć zbiorowa",
        meaning: "Masowość Zagłady i jej dehumanizujący charakter.",
      },
    ],
    contexts: [
      {
        title: "Holokaust",
        description: "Systematyczna zagłada Żydów podczas II wojny światowej.",
      },
      {
        title: "Powstanie w getcie warszawskim (1943)",
        description:
          "Zbrojny opór Żydów przeciwko Niemcom jako akt desperacji i godności.",
      },
      {
        title: "Literatura faktu",
        description:
          "Reportaż jako gatunek ukazujący rzeczywistość poprzez świadectwo.",
      },
      {
        title: "Inny świat – Gustaw Herling-Grudziński",
        description:
          "Podobne ukazanie sytuacji granicznych i moralnych wyborów w obozach.",
      },
      {
        title: "Medaliony – Zofia Nałkowska",
        description: "Literatura dokumentująca okrucieństwo wojny i Zagłady.",
      },
    ],
    quotes: [
      {
        text: "Najważniejsze jest życie.",
        explanation:
          "Podkreśla nadrzędną wartość życia w obliczu śmierci i doświadczeń wojennych.",
      },
      {
        text: "Zdążyć przed Panem Bogiem.",
        explanation:
          "Metafora ratowania życia – lekarz próbuje wyprzedzić śmierć.",
      },
      {
        text: "Ilu ludzi można uratować.",
        explanation:
          "Ukazuje pragmatyczne podejście Edelmana do życia i śmierci.",
      },
    ],
    terms: [
      {
        name: "Reportaż",
        meaning:
          "Gatunek literacki oparty na faktach, przedstawiający rzeczywiste wydarzenia.",
      },
      {
        name: "Holokaust",
        meaning:
          "Zagłada Żydów dokonana przez nazistowskie Niemcy podczas II wojny światowej.",
      },
      {
        name: "Getto",
        meaning: "Wydzielona dzielnica, w której przymusowo osiedlano Żydów.",
      },
      {
        name: "Selekcja",
        meaning: "Proces wyboru ludzi przeznaczonych do życia lub śmierci.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Czy człowiek może zachować godność w sytuacji granicznej?",
        "Jakie znaczenie ma motyw lekarza w utworze?",
        "Jak Marek Edelman rozumie walkę i bohaterstwo?",
        "Jakie dylematy moralne ukazuje utwór?",
        "Czy życie ludzkie ma wartość absolutną?",
      ],
      keywords: [
        "Holokaust",
        "getto",
        "powstanie",
        "godność",
        "śmierć",
        "życie",
        "lekarz",
        "moralność",
        "wybór",
        "reportaż",
      ],
      commonMistakes: [
        "Traktowanie powstania jako próby zwycięstwa militarnego.",
        "Pomijanie roli przypadku w ocaleniu.",
        "Uproszczone ocenianie decyzji bohaterów.",
        "Brak odniesienia do kontekstu historycznego.",
      ],
      introStarters: [
        "Utwór Hanny Krall stanowi wyjątkowe świadectwo doświadczeń Holokaustu...",
        "Reportaż 'Zdążyć przed Panem Bogiem' ukazuje dramatyczne wybory moralne w sytuacjach granicznych...",
        "Motyw walki o godność w obliczu śmierci jest jednym z najważniejszych problemów poruszanych w utworze...",
      ],
    },
  },
  {
    id: 26,
    title: "Dżuma",
    author: "Albert Camus",
    year: 1947,
    epoch: "Współczesność",
    summary: {
      short:
        "Powieść ukazuje epidemię dżumy w Oranie jako metaforę ludzkiego losu, zła i absurdu istnienia, a także próbę odpowiedzi na pytanie, jak zachować człowieczeństwo w obliczu cierpienia.",
      detailed:
        "Akcja powieści rozgrywa się w algierskim mieście Oran, które zostaje dotknięte epidemią dżumy. Początkowo mieszkańcy ignorują niepokojące sygnały, takie jak masowe umieranie szczurów. Doktor Bernard Rieux jako pierwszy dostrzega powagę sytuacji. Wkrótce choroba zaczyna zbierać śmiertelne żniwo, a miasto zostaje odizolowane od świata.\n\nW obliczu epidemii bohaterowie przyjmują różne postawy. Rieux walczy z chorobą jako lekarz i humanista. Jean Tarrou organizuje oddziały sanitarne, widząc w walce z dżumą moralny obowiązek. Raymond Rambert początkowo próbuje uciec z miasta, by wrócić do ukochanej, lecz ostatecznie decyduje się zostać i pomagać innym. Ojciec Paneloux interpretuje epidemię jako karę boską, jednak jego poglądy ewoluują po śmierci niewinnego dziecka.\n\nSytuacja w mieście pogarsza się – rośnie liczba zgonów, szerzy się panika i poczucie bezsensu. Ludzie doświadczają izolacji, rozłąki i cierpienia. Mimo to wielu bohaterów podejmuje walkę, kierując się solidarnością i poczuciem obowiązku.\n\nW końcu epidemia zaczyna ustępować. Miasto zostaje otwarte, a mieszkańcy wracają do normalnego życia. Rieux ujawnia, że to on był narratorem kroniki wydarzeń. Podkreśla, że dżuma nigdy nie znika całkowicie i może powrócić, co symbolizuje ciągłą obecność zła w świecie.",
      timeline: [
        {
          title: "Pojawienie się szczurów",
          description:
            "Mieszkańcy Oranu zauważają masowe umieranie szczurów, co jest pierwszym sygnałem nadchodzącej epidemii.",
        },
        {
          title: "Wybuch epidemii",
          description:
            "Liczba zachorowań rośnie, lekarze diagnozują dżumę, a miasto zostaje zamknięte.",
        },
        {
          title: "Organizacja walki",
          description:
            "Rieux, Tarrou i inni bohaterowie tworzą oddziały sanitarne i walczą z chorobą.",
        },
        {
          title: "Kulminacja cierpienia",
          description:
            "Śmierć dziecka i rosnąca liczba ofiar pogłębiają refleksję nad sensem cierpienia.",
        },
        {
          title: "Wygaśnięcie epidemii",
          description:
            "Choroba ustępuje, miasto zostaje otwarte, a mieszkańcy wracają do życia.",
        },
      ],
    },
    characters: [
      {
        name: "Bernard Rieux",
        description:
          "Lekarz i narrator powieści, który walczy z epidemią, kierując się etyką i humanizmem.",
        traits: ["odpowiedzialny", "empatyczny", "racjonalny", "odważny"],
        role: "Lekarz i narrator",
      },
      {
        name: "Jean Tarrou",
        description:
          "Przyjaciel Rieux, organizator oddziałów sanitarnych, filozofujący obserwator życia.",
        traits: ["refleksyjny", "zaangażowany", "solidarny"],
        role: "Organizator walki",
      },
      {
        name: "Raymond Rambert",
        description:
          "Dziennikarz, który początkowo chce uciec z miasta, ale ostatecznie zostaje i pomaga innym.",
        traits: ["egoistyczny", "uczuciowy", "przemiana moralna"],
        role: "Przemiana bohatera",
      },
      {
        name: "Ojciec Paneloux",
        description:
          "Duchowny interpretujący epidemię jako karę boską, przechodzi kryzys wiary.",
        traits: ["religijny", "dogmatyczny", "refleksyjny"],
        role: "Interpretator religijny",
      },
      {
        name: "Joseph Grand",
        description:
          "Urzędnik, skromny człowiek próbujący napisać doskonałe zdanie.",
        traits: ["pracowity", "nieśmiały", "wytrwały"],
        role: "Symbol zwyczajności",
      },
      {
        name: "Cottard",
        description:
          "Człowiek czerpiący korzyści z epidemii, czujący się bezpieczny w chaosie.",
        traits: ["egoistyczny", "lękliwy", "niemoralny"],
        role: "Antybohater społeczny",
      },
    ],
    themes: [
      {
        name: "Absurd istnienia",
        description:
          "Świat jest pozbawiony sensu, a człowiek musi zmierzyć się z jego bezsensem.",
      },
      {
        name: "Cierpienie i śmierć",
        description:
          "Powieść ukazuje powszechność cierpienia i jego niezależność od winy człowieka.",
      },
      {
        name: "Solidarność ludzka",
        description:
          "W obliczu zagrożenia bohaterowie jednoczą się i pomagają sobie nawzajem.",
      },
      {
        name: "Moralność i odpowiedzialność",
        description:
          "Człowiek powinien działać etycznie mimo braku sensu świata.",
      },
    ],
    motifs: [
      {
        name: "Epidemia",
        meaning: "Symbol zła, totalitaryzmu i zagrożenia dla ludzkości.",
      },
      {
        name: "Izolacja",
        meaning:
          "Oddzielenie ludzi od bliskich i świata, pogłębiające cierpienie.",
      },
      {
        name: "Walka",
        meaning: "Nieustanne zmaganie się człowieka z losem i absurdem.",
      },
      {
        name: "Śmierć dziecka",
        meaning: "Podkreślenie niewinnego cierpienia i kryzysu wiary.",
      },
    ],
    contexts: [
      {
        title: "Egzystencjalizm",
        description:
          "Filozofia podkreślająca absurd życia i konieczność nadania mu sensu przez działanie.",
      },
      {
        title: "II wojna światowa",
        description: "Dżuma jako metafora okupacji i totalitaryzmu.",
      },
      {
        title: "Biblia",
        description:
          "Motyw plagi jako kary oraz pytanie o sens cierpienia niewinnych.",
      },
      {
        title: "Inny świat Gustawa Herlinga-Grudzińskiego",
        description:
          "Obraz człowieka w sytuacji granicznej i próba zachowania moralności.",
      },
    ],
    quotes: [
      {
        text: "Dżuma nigdy nie umiera ani nie znika.",
        explanation: "Zło jest zawsze obecne i może powrócić w każdej chwili.",
      },
      {
        text: "Jedynym sposobem walki z dżumą jest uczciwość.",
        explanation:
          "Uczciwość oznacza moralne działanie i solidarność z innymi.",
      },
    ],
    terms: [
      {
        name: "Absurd",
        meaning: "Poczucie bezsensu świata i życia ludzkiego.",
      },
      {
        name: "Egzystencjalizm",
        meaning:
          "Kierunek filozoficzny skupiający się na wolności i odpowiedzialności człowieka.",
      },
      {
        name: "Parabola",
        meaning: "Utwór o znaczeniu dosłownym i symbolicznym.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Czy człowiek może zachować moralność w obliczu zła?",
        "Jakie postawy przyjmują bohaterowie wobec epidemii?",
        "Dżuma jako metafora – co symbolizuje?",
        "Na czym polega absurd w powieści Camusa?",
      ],
      keywords: [
        "absurd",
        "egzystencjalizm",
        "solidarność",
        "cierpienie",
        "moralność",
        "epidemia",
      ],
      commonMistakes: [
        "Traktowanie dżumy wyłącznie jako choroby, bez interpretacji symbolicznej.",
        "Pomijanie kontekstu egzystencjalizmu.",
        "Uproszczona charakterystyka bohaterów bez analizy ich postaw.",
      ],
      introStarters: [
        "Powieść „Dżuma” Alberta Camusa stanowi głęboką refleksję nad kondycją człowieka w obliczu zła.",
        "Jednym z kluczowych problemów poruszanych w „Dżumie” jest absurd ludzkiego istnienia.",
        "Albert Camus w swojej powieści ukazuje różnorodne postawy wobec cierpienia i zagrożenia.",
      ],
    },
  },
  {
    id: 27,
    title: "Rok 1984",
    author: "George Orwell",
    year: 1949,
    epoch: "Współczesność",
    summary: {
      short:
        "Powieść przedstawia totalitarny świat Oceanii, w którym jednostka jest całkowicie podporządkowana władzy Partii, a główny bohater Winston Smith podejmuje próbę buntu przeciwko systemowi.",
      detailed:
        "Akcja powieści rozgrywa się w totalitarnym państwie Oceanii, rządzonym przez wszechwładną Partię i jej symbolicznego przywódcę – Wielkiego Brata. Główny bohater, Winston Smith, pracuje w Ministerstwie Prawdy, gdzie zajmuje się fałszowaniem historii zgodnie z aktualną linią Partii.\n\nWinston zaczyna odczuwać wewnętrzny bunt wobec systemu – prowadzi potajemny dziennik, co jest przestępstwem myślozbrodni. Nawiązuje romans z Julią, która również sprzeciwia się Partii, choć w sposób bardziej pragmatyczny niż ideowy. Razem próbują stworzyć przestrzeń wolności i autentyczności.\n\nWinston wierzy, że istnieje zorganizowana opozycja – Bractwo – i zostaje wciągnięty w pozorną konspirację przez O’Briena, wysokiego funkcjonariusza Partii. Ostatecznie okazuje się to pułapką.\n\nWinston i Julia zostają aresztowani przez Policję Myśli. W Ministerstwie Miłości Winston poddawany jest brutalnym torturom fizycznym i psychicznym. O’Brien łamie jego wolę, zmuszając go do zaakceptowania ideologii Partii, w tym paradoksalnych twierdzeń (np. że 2+2=5).\n\nKulminacją jest zdrada Julii przez Winstona w obliczu jego największego lęku (pokój 101). Po „reedukacji” Winston zostaje wypuszczony – jest już całkowicie złamany i podporządkowany. Powieść kończy się jego wewnętrzną kapitulacją – Winston kocha Wielkiego Brata.",
      timeline: [
        {
          title: "Wprowadzenie do świata",
          description:
            "Opis totalitarnego systemu Oceanii i życia Winstona Smitha.",
        },
        {
          title: "Początek buntu",
          description:
            "Winston zaczyna pisać dziennik i kwestionować rzeczywistość.",
        },
        {
          title: "Relacja z Julią",
          description:
            "Rozwój zakazanego romansu i próba stworzenia prywatnej przestrzeni wolności.",
        },
        {
          title: "Pozorna konspiracja",
          description: "Kontakt z O’Brienem i wstąpienie do rzekomego Bractwa.",
        },
        {
          title: "Aresztowanie",
          description: "Zdrada i zatrzymanie przez Policję Myśli.",
        },
        {
          title: "Tortury i reedukacja",
          description: "Złamanie Winstona w Ministerstwie Miłości.",
        },
        {
          title: "Ostateczna przemiana",
          description: "Winston akceptuje system i kocha Wielkiego Brata.",
        },
      ],
    },
    characters: [
      {
        name: "Winston Smith",
        description:
          "Główny bohater, urzędnik Ministerstwa Prawdy, który buntuje się przeciwko totalitarnej władzy.",
        traits: ["refleksyjny", "zbuntowany", "samotny", "poszukujący prawdy"],
        role: "Buntownik przeciw systemowi",
      },
      {
        name: "Julia",
        description:
          "Kochanka Winstona, młoda kobieta sprzeciwiająca się Partii poprzez prywatne akty nieposłuszeństwa.",
        traits: ["praktyczna", "zmysłowa", "sprytna", "antysystemowa"],
        role: "Partnerka i współbuntowniczka",
      },
      {
        name: "O’Brien",
        description:
          "Członek Partii Wewnętrznej, który udaje sprzymierzeńca Winstona, a następnie go zdradza.",
        traits: [
          "inteligentny",
          "okrutny",
          "manipulacyjny",
          "lojalny wobec Partii",
        ],
        role: "Oprawca i ideolog",
      },
      {
        name: "Wielki Brat",
        description:
          "Symboliczny przywódca Partii, wszechobecny w propagandzie.",
        traits: ["wszechobecny", "autorytarny", "symboliczny"],
        role: "Symbol totalitarnej władzy",
      },
      {
        name: "Pan Charrington",
        description:
          "Właściciel sklepu, który okazuje się agentem Policji Myśli.",
        traits: ["pozornie życzliwy", "fałszywy", "podstępny"],
        role: "Ukryty agent systemu",
      },
    ],
    themes: [
      {
        name: "Totalitaryzm",
        description:
          "Powieść ukazuje mechanizmy działania państwa totalitarnego, które kontroluje wszystkie aspekty życia jednostki.",
      },
      {
        name: "Manipulacja prawdą",
        description:
          "Fałszowanie historii i języka służy utrzymaniu władzy i kontroli nad społeczeństwem.",
      },
      {
        name: "Zniewolenie jednostki",
        description:
          "Człowiek w systemie totalitarnym traci wolność, tożsamość i możliwość samodzielnego myślenia.",
      },
      {
        name: "Miłość i zdrada",
        description:
          "Relacja Winstona i Julii pokazuje kruchość więzi w obliczu terroru systemu.",
      },
    ],
    motifs: [
      {
        name: "Wielki Brat",
        meaning: "Symbol wszechobecnej kontroli i inwigilacji.",
      },
      {
        name: "Nowomowa",
        meaning:
          "Język ograniczający możliwość myślenia i wyrażania sprzeciwu.",
      },
      {
        name: "Teleekran",
        meaning: "Narzędzie nieustannej kontroli obywateli.",
      },
      {
        name: "Pokój 101",
        meaning:
          "Symbol ostatecznego złamania człowieka poprzez jego największy lęk.",
      },
    ],
    contexts: [
      {
        title: "Totalitaryzmy XX wieku",
        description:
          "Powieść nawiązuje do systemów takich jak stalinizm i nazizm, ukazując mechanizmy kontroli i propagandy.",
      },
      {
        title: "Propaganda i manipulacja",
        description:
          "Odwołanie do rzeczywistych praktyk fałszowania informacji w państwach totalitarnych.",
      },
      {
        title: "„Folwark zwierzęcy” George’a Orwella",
        description:
          "Inna powieść autora ukazująca krytykę systemu totalitarnego w formie alegorii.",
      },
      {
        title: "„Proces” Franza Kafki",
        description:
          "Podobny motyw jednostki bezsilnej wobec opresyjnego systemu.",
      },
    ],
    quotes: [
      {
        text: "Wielki Brat patrzy.",
        explanation:
          "Symbol wszechobecnej kontroli i inwigilacji społeczeństwa.",
      },
      {
        text: "Wolność to wolność powiedzenia, że dwa plus dwa równa się cztery.",
        explanation: "Podkreślenie znaczenia prawdy i niezależnego myślenia.",
      },
      {
        text: "Jeśli chcesz zobaczyć przyszłość, wyobraź sobie but depczący ludzką twarz – wiecznie.",
        explanation: "Obraz brutalności i trwałości systemu totalitarnego.",
      },
    ],
    terms: [
      {
        name: "Nowomowa",
        meaning:
          "Język stworzony przez Partię w celu ograniczenia myślenia obywateli.",
      },
      {
        name: "Myślozbrodnia",
        meaning:
          "Przestępstwo polegające na myśleniu sprzecznym z ideologią Partii.",
      },
      {
        name: "Policja Myśli",
        meaning: "Organ kontrolujący lojalność obywateli wobec systemu.",
      },
      {
        name: "Dwójmyślenie",
        meaning:
          "Zdolność akceptowania sprzecznych twierdzeń jako prawdziwych.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Jakie mechanizmy kontroli stosuje władza w „Roku 1984”?",
        "Czy bunt jednostki w systemie totalitarnym ma sens?",
        "Jaką rolę odgrywa język w kształtowaniu rzeczywistości?",
        "W jaki sposób Orwell ukazuje manipulację prawdą?",
      ],
      keywords: [
        "totalitaryzm",
        "propaganda",
        "manipulacja",
        "inwigilacja",
        "nowomowa",
        "wolność",
        "bunt",
      ],
      commonMistakes: [
        "Sprowadzanie powieści wyłącznie do historii miłosnej.",
        "Brak odniesienia do kontekstu historycznego totalitaryzmu.",
        "Niedostrzeganie roli języka jako narzędzia władzy.",
        "Pomijanie znaczenia zakończenia i przemiany Winstona.",
      ],
      introStarters: [
        "„Rok 1984” George’a Orwella to jedna z najważniejszych antyutopii XX wieku, ukazująca mechanizmy działania państwa totalitarnego.",
        "Powieść Orwella stanowi ostrzeżenie przed nieograniczoną władzą i manipulacją rzeczywistością.",
        "Analizując „Rok 1984”, można dostrzec, jak system totalitarny niszczy jednostkę i jej tożsamość.",
      ],
    },
  },
  {
    id: 28,
    title: "Tango",
    author: "Sławomir Mrożek",
    year: 1964,
    epoch: "Współczesność",
    summary: {
      short:
        "Dramat groteskowy ukazujący konflikt pokoleń oraz kryzys wartości w świecie pozbawionym zasad, w którym bunt młodego inteligenta kończy się triumfem prymitywnej siły.",
      detailed:
        "Akcja dramatu rozgrywa się w domu Stomila i Eleonory, gdzie panuje chaos obyczajowy i brak jakichkolwiek zasad. Starsze pokolenie odrzuciło tradycję i normy społeczne, doprowadzając do anarchii. Artur, ich syn, buntuje się przeciwko tej sytuacji i pragnie przywrócić porządek oraz wartości.\n\nArtur planuje ślub z Alą, który ma symbolizować powrót do tradycji i ładu społecznego. Jednak jego działania są pozbawione autentyczności i mają charakter sztucznego eksperymentu. W międzyczasie okazuje się, że Ala zdradza Artura z Edkiem – prostakiem reprezentującym brutalną siłę.\n\nArtur próbuje zbudować system oparty na idei i formie, jednak nie znajduje realnego oparcia w świecie, który utracił wszelkie wartości. W konfrontacji z Edkiem przegrywa – zostaje przez niego zabity.\n\nPo śmierci Artura władzę przejmuje Edek, symbol triumfu siły nad intelektem. Dramat kończy się symbolicznym tańcem tanga, który oznacza zwycięstwo prymitywizmu i konformizmu nad kulturą i ideą.",
      timeline: [
        {
          title: "Chaos w domu",
          description: "Ukazanie rodziny żyjącej bez zasad i norm społecznych.",
        },
        {
          title: "Bunt Artura",
          description:
            "Artur sprzeciwia się anarchii i chce przywrócić porządek.",
        },
        {
          title: "Plan ślubu",
          description:
            "Artur planuje ślub z Alą jako symbol powrotu do tradycji.",
        },
        {
          title: "Zdrada Ali",
          description: "Ala zdradza Artura z Edkiem, co podważa jego projekt.",
        },
        {
          title: "Konflikt z Edkiem",
          description: "Artur próbuje narzucić swoją wizję, lecz przegrywa.",
        },
        {
          title: "Śmierć Artura",
          description: "Edek zabija Artura – triumf siły nad ideą.",
        },
        {
          title: "Tango",
          description: "Symboliczne zwycięstwo prymitywizmu i masowości.",
        },
      ],
    },
    characters: [
      {
        name: "Artur",
        description:
          "Syn Stomila i Eleonory, inteligent poszukujący ładu i sensu w świecie pozbawionym wartości.",
        traits: ["inteligentny", "zbuntowany", "ideowy", "naiwny"],
        role: "Buntownik przywracający porządek",
      },
      {
        name: "Edek",
        description:
          "Prosty, brutalny człowiek, reprezentujący siłę fizyczną i prymitywizm.",
        traits: ["prymitywny", "brutalny", "sprytny", "dominujący"],
        role: "Symbol siły i masowości",
      },
      {
        name: "Stomil",
        description:
          "Ojciec Artura, artysta odrzucający tradycję i konwenanse.",
        traits: ["ekscentryczny", "bierny", "nonkonformistyczny"],
        role: "Reprezentant anarchii",
      },
      {
        name: "Eleonora",
        description: "Matka Artura, kobieta żyjąca bez zasad moralnych.",
        traits: ["lekkomyślna", "niemoralna", "swobodna"],
        role: "Uosobienie rozpadu obyczajów",
      },
      {
        name: "Ala",
        description:
          "Kuzynka Artura, jego narzeczona, zdradzająca go z Edkiem.",
        traits: ["naiwna", "uległa", "zmienna"],
        role: "Przedmiot ideowego eksperymentu",
      },
      {
        name: "Eugeniusz",
        description: "Wuj Artura, podporządkowany i bierny.",
        traits: ["uległy", "słaby", "konformistyczny"],
        role: "Ofiara systemu",
      },
      {
        name: "Eugenia",
        description: "Babcia Artura, reprezentująca dawny porządek.",
        traits: ["tradycyjna", "bezradna"],
        role: "Relikt przeszłości",
      },
    ],
    themes: [
      {
        name: "Kryzys wartości",
        description:
          "Utwór ukazuje świat pozbawiony norm moralnych i społecznych, gdzie wszystko jest dozwolone.",
      },
      {
        name: "Konflikt pokoleń",
        description:
          "Młode pokolenie buntuje się przeciw anarchii stworzonej przez starszych.",
      },
      {
        name: "Upadek kultury",
        description:
          "Triumf prymitywizmu nad intelektem symbolizuje degradację kultury.",
      },
      {
        name: "Władza siły",
        description:
          "Ostatecznie rządzi ten, kto posiada siłę fizyczną, a nie idee.",
      },
    ],
    motifs: [
      {
        name: "Taniec",
        meaning:
          "Symbol podporządkowania się masowości i triumfu prymitywizmu.",
      },
      {
        name: "Ślub",
        meaning: "Próba przywrócenia tradycji i ładu społecznego.",
      },
      {
        name: "Chaos",
        meaning: "Brak zasad i norm jako punkt wyjścia konfliktu.",
      },
      {
        name: "Bunt",
        meaning: "Próba zmiany rzeczywistości przez jednostkę.",
      },
    ],
    contexts: [
      {
        title: "Teatr absurdu",
        description:
          "Utwór wpisuje się w nurt teatru absurdu, ukazując bezsens i chaos współczesnego świata.",
      },
      {
        title: "Totalitaryzm XX wieku",
        description:
          "Triumf Edka można odczytać jako metaforę przejęcia władzy przez brutalne systemy polityczne.",
      },
      {
        title: "Ferdydurke",
        description:
          "Podobnie jak u Gombrowicza, pojawia się problem formy i niedojrzałości.",
      },
      {
        title: "Rok 1984",
        description: "Motyw dominacji siły i kontroli nad jednostką.",
      },
    ],
    quotes: [
      {
        text: "Postęp wsteczny.",
        explanation:
          "Paradoks ukazujący cofanie się cywilizacji mimo pozornego rozwoju.",
      },
      {
        text: "Teraz ja będę rządził.",
        explanation: "Słowa Edka symbolizujące przejęcie władzy przez siłę.",
      },
    ],
    terms: [
      {
        name: "Groteska",
        meaning:
          "Połączenie elementów komicznych i tragicznych w celu ukazania absurdów rzeczywistości.",
      },
      {
        name: "Teatr absurdu",
        meaning:
          "Nurt dramatyczny ukazujący bezsens życia i brak logicznego porządku świata.",
      },
      {
        name: "Konformizm",
        meaning:
          "Bezkrytyczne podporządkowanie się obowiązującym normom lub władzy.",
      },
    ],
    exam: {
      possibleQuestions: [
        'Na czym polega konflikt pokoleń w "Tangu"?',
        "Jaką rolę pełni Edek w dramacie Mrożka?",
        "Czy bunt Artura ma sens?",
        "Jakie znaczenie ma finałowy taniec?",
        'Jak "Tango" ukazuje kryzys wartości?',
      ],
      keywords: [
        "groteska",
        "absurd",
        "kryzys wartości",
        "bunt",
        "siła vs intelekt",
        "anarchia",
        "forma",
      ],
      commonMistakes: [
        "Traktowanie Artura jako jednoznacznie pozytywnego bohatera",
        "Pomijanie symbolicznego znaczenia tanga",
        "Niedostrzeganie ironii i groteski",
        "Interpretowanie dramatu wyłącznie realistycznie",
      ],
      introStarters: [
        'Dramat Sławomira Mrożka "Tango" stanowi przenikliwą analizę kryzysu wartości we współczesnym świecie.',
        'Jednym z kluczowych problemów poruszanych w "Tangu" jest konflikt pokoleń i wynikający z niego chaos aksjologiczny.',
        "Mrożek w swoim dramacie ukazuje świat, w którym tradycyjne normy zostały całkowicie odrzucone.",
      ],
    },
  },
  {
    id: 29,
    title: "Górą „Edek”",
    author: "Marek Nowakowski",
    year: "1970 (tom „Prawo prerii”)",
    epoch: "Współczesność",
    summary: {
      short:
        "Opowiadanie ukazuje brutalną rzeczywistość środowiska przestępczego, w którym liczy się siła i spryt. Tytułowy Edek zdobywa dominację dzięki bezwzględności, co odzwierciedla zasadę „prawa prerii” – wygrywa silniejszy.",
      detailed:
        "Akcja opowiadania rozgrywa się w środowisku półświatka, gdzie obowiązują nieformalne, brutalne zasady przypominające „prawo prerii”. Narrator przedstawia historię Edka – postaci, która stopniowo zdobywa pozycję lidera w grupie.\n\nEdek nie wyróżnia się początkowo niczym szczególnym, jednak jego determinacja, spryt i brak skrupułów pozwalają mu zyskać przewagę nad innymi. W świecie przedstawionym nie obowiązują normy moralne ani zasady sprawiedliwości – liczy się siła fizyczna, zdolność manipulacji i bezwzględność.\n\nW relacjach między bohaterami widoczna jest rywalizacja, nieufność i ciągła walka o dominację. Edek stopniowo eliminuje konkurentów, zdobywa autorytet i podporządkowuje sobie innych. Jego sukces nie wynika z moralnej wyższości, lecz z umiejętności dostosowania się do brutalnych reguł świata.\n\nNarrator ukazuje, że w tym środowisku nie ma miejsca na słabość – każdy, kto ją okaże, zostaje zepchnięty na margines. Historia Edka jest ilustracją mechanizmu rządzącego rzeczywistością społeczną opisywaną przez Nowakowskiego: triumfuje ten, kto jest bardziej bezwzględny.\n\nOpowiadanie ma charakter uniwersalny – ukazuje nie tylko realia marginesu społecznego, ale także mechanizmy władzy i dominacji obecne w różnych strukturach społecznych.",
      timeline: [
        {
          title: "Przedstawienie środowiska",
          description:
            "Ukazanie realiów półświatka i obowiązujących w nim brutalnych zasad.",
        },
        {
          title: "Pojawienie się Edka",
          description:
            "Wprowadzenie bohatera jako jednego z uczestników grupy.",
        },
        {
          title: "Budowanie pozycji",
          description:
            "Edek stopniowo zdobywa przewagę dzięki sprytowi i bezwzględności.",
        },
        {
          title: "Konflikty i rywalizacja",
          description: "Zmagania między bohaterami o dominację w grupie.",
        },
        {
          title: "Triumf Edka",
          description:
            "Edek osiąga pozycję lidera, podporządkowując sobie innych.",
        },
      ],
    },
    characters: [
      {
        name: "Edek",
        description:
          "Główny bohater, który dzięki brutalności i sprytowi zdobywa dominację w środowisku przestępczym.",
        traits: [
          "bezwzględny",
          "sprytny",
          "zdeterminowany",
          "silny",
          "dominujący",
        ],
        role: "Antybohater dominujący",
      },
      {
        name: "Narrator",
        description:
          "Obserwator wydarzeń, przedstawiający świat półświatka i mechanizmy nim rządzące.",
        traits: ["obiektywny", "spostrzegawczy", "zdystansowany"],
        role: "Świadek wydarzeń",
      },
      {
        name: "Członkowie środowiska",
        description:
          "Postaci reprezentujące półświatek, rywalizujące ze sobą o pozycję i władzę.",
        traits: ["agresywni", "nieufni", "rywalizujący"],
        role: "Tło społeczne konfliktu",
      },
    ],
    themes: [
      {
        name: "Walka o władzę",
        description:
          "Ukazanie mechanizmów zdobywania i utrzymywania dominacji w grupie.",
      },
      {
        name: "Prawo silniejszego",
        description:
          "Świat przedstawiony opiera się na zasadzie, że wygrywa najsilniejszy i najbardziej bezwzględny.",
      },
      {
        name: "Moralność w świecie przestępczym",
        description:
          "Brak tradycyjnych norm moralnych i zastąpienie ich brutalnymi regułami przetrwania.",
      },
      {
        name: "Społeczna marginalizacja",
        description:
          "Ukazanie życia ludzi funkcjonujących na obrzeżach społeczeństwa.",
      },
    ],
    motifs: [
      {
        name: "Prawo prerii",
        meaning:
          "Symbol brutalnych zasad rządzących światem, w którym liczy się tylko siła.",
      },
      {
        name: "Przemoc",
        meaning: "Podstawowe narzędzie zdobywania i utrzymywania władzy.",
      },
      {
        name: "Dominacja",
        meaning:
          "Dążenie do podporządkowania innych jako główny cel bohaterów.",
      },
      {
        name: "Margines społeczny",
        meaning: "Środowisko funkcjonujące poza normami społecznymi.",
      },
    ],
    contexts: [
      {
        title: "Realizm literatury współczesnej",
        description:
          "Nowakowski przedstawia autentyczne realia życia na marginesie społecznym, unikając idealizacji.",
      },
      {
        title: "Literatura o półświatku",
        description:
          "Podobne motywy pojawiają się w twórczości Leopolda Tyrmanda czy w filmach kryminalnych PRL.",
      },
      {
        title: "„Tango” Sławomira Mrożka",
        description:
          "Postać Edka jako symbol triumfu prymitywnej siły nad kulturą i intelektem.",
      },
      {
        title: "Sytuacja społeczna PRL",
        description:
          "Marginalizacja pewnych grup społecznych i rozwój środowisk przestępczych w realiach powojennej Polski.",
      },
    ],
    quotes: [
      {
        text: "Prawo prerii – wygrywa silniejszy.",
        explanation:
          "Kluczowa zasada rządząca światem przedstawionym, podkreślająca brutalność relacji międzyludzkich.",
      },
      {
        text: "Górą Edek.",
        explanation:
          "Symboliczny finał historii – triumf jednostki bezwzględnej i silnej.",
      },
    ],
    terms: [
      {
        name: "Prawo prerii",
        meaning:
          "Zasada mówiąca, że w świecie pozbawionym norm moralnych zwycięża najsilniejszy.",
      },
      {
        name: "Antybohater",
        meaning:
          "Postać pozbawiona cech moralnych typowych dla bohatera, często budząca ambiwalentne odczucia.",
      },
      {
        name: "Realizm",
        meaning:
          "Kierunek literacki dążący do wiernego odzwierciedlenia rzeczywistości.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Jakie zasady rządzą światem przedstawionym w opowiadaniu?",
        "Czy Edek może być uznany za bohatera pozytywnego?",
        "Na czym polega „prawo prerii” i jak wpływa na relacje między bohaterami?",
        "Jak Nowakowski ukazuje marginalizację społeczną?",
        "Porównaj postać Edka z bohaterem „Tanga” Sławomira Mrożka.",
      ],
      keywords: [
        "prawo prerii",
        "siła",
        "dominacja",
        "przemoc",
        "antybohater",
        "margines społeczny",
        "realizm",
      ],
      commonMistakes: [
        "Interpretowanie Edka jako bohatera pozytywnego",
        "Pomijanie kontekstu społecznego PRL",
        "Brak odniesienia do symbolicznego znaczenia „prawa prerii”",
        "Zbyt dosłowne traktowanie opowiadania bez interpretacji uniwersalnej",
      ],
      introStarters: [
        "Opowiadanie Marka Nowakowskiego „Górą Edek” ukazuje brutalne mechanizmy rządzące światem społecznym...",
        "Jednym z kluczowych problemów poruszonych w utworze jest kwestia dominacji i walki o władzę...",
        "Motyw prawa silniejszego stanowi centralny punkt interpretacyjny opowiadania...",
        "Postać Edka można odczytywać jako symbol przemian społecznych i kryzysu wartości...",
      ],
    },
  },
  {
    id: 30,
    title: "Profesor Andrews w Warszawie",
    author: "Olga Tokarczuk",
    year: 2001,
    epoch: "Współczesność",
    summary: {
      short:
        "Opowiadanie przedstawia historię angielskiego profesora, który przypadkowo trafia do Warszawy w czasie stanu wojennego i doświadcza chaosu, izolacji oraz absurdów rzeczywistości PRL.",
      detailed:
        "Profesor Andrews, brytyjski uczony, przybywa do Polski na konferencję naukową. Z powodu problemów komunikacyjnych i organizacyjnych trafia do Warszawy w momencie wprowadzenia stanu wojennego. Miasto pogrążone jest w chaosie – nie działają telefony, transport publiczny funkcjonuje w ograniczonym zakresie, a obcokrajowiec nie rozumie sytuacji politycznej ani języka.\n\nProfesor zostaje pozostawiony sam sobie. Próbuje odnaleźć się w obcej rzeczywistości, jednak napotyka liczne trudności: brak możliwości kontaktu z kimkolwiek, brak informacji oraz nieprzyjazne, zamknięte społeczeństwo. Przemieszczając się po mieście, obserwuje codzienność Polaków, którzy zdają się funkcjonować w stanie permanentnego napięcia i niedoboru.\n\nAndrews doświadcza uczucia wyobcowania i zagubienia. Jego próby zrozumienia sytuacji kończą się niepowodzeniem – rzeczywistość PRL jawi się jako absurdalna i nieprzenikniona. Spotkania z przypadkowymi ludźmi są fragmentaryczne i nie prowadzą do głębszego porozumienia.\n\nKulminacyjnym momentem jest całkowita izolacja bohatera – fizyczna i mentalna. Profesor staje się symbolem człowieka wyrwanego z własnego kontekstu kulturowego i wrzuconego w rzeczywistość, której nie potrafi odczytać.\n\nOpowiadanie kończy się bez jednoznacznego rozwiązania – Andrews pozostaje zagubiony, a jego doświadczenie ukazuje względność poznania i granice komunikacji międzykulturowej.",
      timeline: [
        {
          title: "Przyjazd do Polski",
          description:
            "Profesor Andrews przybywa na konferencję naukową do Polski.",
        },
        {
          title: "Zaburzenie planów",
          description:
            "Z powodu nieporozumień trafia do Warszawy zamiast do właściwego miejsca.",
        },
        {
          title: "Stan wojenny",
          description:
            "Zostaje uwięziony w Warszawie w czasie wprowadzenia stanu wojennego.",
        },
        {
          title: "Izolacja",
          description: "Nie może się skontaktować z nikim ani opuścić miasta.",
        },
        {
          title: "Obserwacja rzeczywistości",
          description:
            "Doświadcza absurdów życia w PRL i obserwuje zachowania mieszkańców.",
        },
        {
          title: "Poczucie zagubienia",
          description:
            "Uświadamia sobie własną bezradność i niemożność zrozumienia sytuacji.",
        },
      ],
    },
    characters: [
      {
        name: "Profesor Andrews",
        description:
          "Angielski uczony, główny bohater, który trafia do Warszawy w czasie stanu wojennego i doświadcza kulturowego oraz egzystencjalnego zagubienia.",
        traits: [
          "zagubiony",
          "racjonalny",
          "bezradny",
          "obserwator",
          "wyobcowany",
        ],
        role: "Obcy obserwator rzeczywistości",
      },
      {
        name: "Przypadkowi mieszkańcy Warszawy",
        description:
          "Postacie epizodyczne, reprezentujące społeczeństwo PRL, zamknięte i funkcjonujące w realiach ograniczeń.",
        traits: ["zdystansowani", "ostrożni", "przystosowani", "nieufni"],
        role: "Tło społeczne PRL",
      },
    ],
    themes: [
      {
        name: "Obcość i wyobcowanie",
        description:
          "Bohater doświadcza całkowitej izolacji w obcym kraju, co ukazuje trudność adaptacji w nieznanym środowisku.",
      },
      {
        name: "Absurd rzeczywistości",
        description:
          "PRL jawi się jako świat pełen niezrozumiałych reguł i chaosu, trudny do racjonalnego wyjaśnienia.",
      },
      {
        name: "Granice poznania",
        description:
          "Opowiadanie ukazuje, jak ograniczone jest ludzkie poznanie w obliczu odmiennych kultur i języków.",
      },
      {
        name: "Komunikacja międzykulturowa",
        description:
          "Brak wspólnego języka i kodu kulturowego uniemożliwia porozumienie.",
      },
      {
        name: "Stan wojenny",
        description:
          "Tło historyczne wpływa na atmosferę zagrożenia i dezorganizacji życia społecznego.",
      },
    ],
    motifs: [
      {
        name: "Podróż",
        meaning:
          "Symbol poznania świata, ale też źródło zagubienia i dezorientacji.",
      },
      {
        name: "Labirynt",
        meaning:
          "Warszawa jako przestrzeń trudna do zrozumienia i opuszczenia.",
      },
      {
        name: "Milczenie",
        meaning: "Brak komunikacji i niemożność porozumienia się.",
      },
      {
        name: "Obcy",
        meaning: "Człowiek wykluczony z danej wspólnoty kulturowej.",
      },
    ],
    contexts: [
      {
        title: "Stan wojenny w Polsce",
        description:
          "Wydarzenie historyczne z 1981 roku, które wprowadziło ograniczenia w życiu społecznym i politycznym.",
      },
      {
        title: "Egzystencjalizm",
        description:
          "Filozofia podkreślająca samotność jednostki i absurd istnienia, widoczna w doświadczeniu bohatera.",
      },
      {
        title: "Proces – Franz Kafka",
        description:
          "Podobieństwo w ukazaniu absurdalnej i niezrozumiałej rzeczywistości.",
      },
      {
        title: "Inny świat – Gustaw Herling-Grudziński",
        description: "Motyw konfrontacji jednostki z opresyjnym systemem.",
      },
    ],
    quotes: [
      {
        text: "Świat wokół niego przestał być zrozumiały.",
        explanation:
          "Oddaje poczucie dezorientacji i utraty kontroli nad rzeczywistością.",
      },
      {
        text: "Nie rozumiał języka, nie rozumiał ludzi.",
        explanation: "Podkreśla barierę komunikacyjną i kulturową.",
      },
    ],
    terms: [
      {
        name: "Stan wojenny",
        meaning:
          "Sytuacja nadzwyczajna wprowadzona w Polsce w 1981 roku, ograniczająca prawa obywatelskie.",
      },
      {
        name: "Narracja personalna",
        meaning: "Narracja skupiona na perspektywie jednego bohatera.",
      },
      {
        name: "Absurd",
        meaning: "Brak logicznego porządku w rzeczywistości przedstawionej.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Jak przedstawiono doświadczenie obcości w opowiadaniu?",
        "W jaki sposób rzeczywistość PRL została ukazana jako absurdalna?",
        "Jakie znaczenie ma brak komunikacji między bohaterem a otoczeniem?",
        "Jak stan wojenny wpływa na losy bohatera?",
        "Czy profesor Andrews jest tylko obserwatorem, czy także uczestnikiem wydarzeń?",
      ],
      keywords: [
        "obcość",
        "PRL",
        "stan wojenny",
        "absurd",
        "izolacja",
        "komunikacja",
        "Tokarczuk",
      ],
      commonMistakes: [
        "Pomijanie kontekstu historycznego stanu wojennego.",
        "Traktowanie opowiadania wyłącznie jako realistycznego, bez dostrzeżenia elementów absurdu.",
        "Niedocenianie roli języka jako bariery komunikacyjnej.",
        "Brak analizy perspektywy obcokrajowca.",
      ],
      introStarters: [
        "Opowiadanie Olgi Tokarczuk ukazuje problem obcości jednostki w nieznanej rzeczywistości.",
        "Jednym z kluczowych tematów utworu jest konfrontacja człowieka z niezrozumiałym systemem społecznym.",
        "Autorka przedstawia rzeczywistość PRL z perspektywy outsidera, co potęguje jej absurdalność.",
        "Motyw zagubienia i izolacji stanowi istotny element konstrukcji utworu.",
      ],
    },
  },
  {
    id: 31,
    title: "Miejsce",
    author: "Andrzej Stasiuk",
    year: "1995",
    epoch: "Współczesność",
    summary: {
      short:
        "Opowiadanie ukazuje historię opuszczonej cerkwi w Beskidach i jej powolnego niszczenia przez ludzi, którzy traktują ją jako źródło materiałów budowlanych. Narrator obserwuje proces degradacji miejsca, które kiedyś miało znaczenie duchowe.",
      detailed:
        "Akcja opowiadania rozgrywa się w Beskidzie Niskim, w przestrzeni opuszczonej wsi po wysiedleniach ludności łemkowskiej. Centralnym punktem jest dawna cerkiew – miejsce niegdyś święte, dziś opuszczone i zapomniane.\n\nNarrator obserwuje stopniową degradację świątyni. Najpierw cerkiew stoi jeszcze jako całość, choć już opuszczona i pozbawiona swojej funkcji religijnej. Z czasem zaczynają pojawiać się ludzie, którzy rozbierają jej elementy – najpierw zabierają wyposażenie, potem fragmenty konstrukcji. Drewno staje się materiałem użytkowym, a nie nośnikiem sacrum.\n\nProces niszczenia odbywa się powoli i bez refleksji. Kolejni mieszkańcy okolicznych terenów traktują cerkiew jako zasób, z którego można coś zabrać. Narrator zauważa, że miejsce traci swoją tożsamość – przestaje być przestrzenią duchową, a staje się pustką.\n\nW końcu z cerkwi pozostaje niewiele – jedynie ślady, które świadczą o jej dawnym istnieniu. Miejsce zostaje wchłonięte przez naturę i zapomnienie. Opowiadanie kończy się refleksją nad przemijaniem, utratą pamięci i obojętnością człowieka wobec dziedzictwa kulturowego.",
      timeline: [
        {
          title: "Opuszczenie wsi",
          description:
            "W wyniku wysiedleń ludności łemkowskiej wieś zostaje opuszczona, a cerkiew traci swoją funkcję.",
        },
        {
          title: "Pierwsze oznaki degradacji",
          description:
            "Cerkiew stoi jeszcze, ale zaczyna niszczeć i popadać w zapomnienie.",
        },
        {
          title: "Rozbieranie świątyni",
          description:
            "Ludzie zaczynają zabierać elementy cerkwi, traktując ją jako źródło materiałów.",
        },
        {
          title: "Całkowite zniszczenie",
          description:
            "Z cerkwi pozostają tylko fragmenty i ślady jej dawnej obecności.",
        },
        {
          title: "Zanik pamięci",
          description:
            "Miejsce traci znaczenie i zostaje zapomniane, pochłonięte przez naturę.",
        },
      ],
    },
    characters: [
      {
        name: "Narrator",
        description:
          "Obserwator wydarzeń, który relacjonuje proces niszczenia cerkwi i refleksyjnie komentuje przemijanie.",
        traits: ["refleksyjny", "wrażliwy", "obserwujący", "melancholijny"],
        role: "Świadek przemijania",
      },
      {
        name: "Mieszkańcy okolicy",
        description:
          "Anonimowi ludzie, którzy rozbierają cerkiew i wykorzystują jej elementy do własnych celów.",
        traits: ["praktyczni", "obojętni", "bezrefleksyjni"],
        role: "Sprawcy degradacji",
      },
      {
        name: "Dawni mieszkańcy (Łemkowie)",
        description:
          "Nieobecna, ale istotna grupa – pierwotni użytkownicy cerkwi, którzy zostali wysiedleni.",
        traits: ["nieobecni", "wykorzenieni", "zapomniani"],
        role: "Utracona wspólnota",
      },
    ],
    themes: [
      {
        name: "Przemijanie",
        description:
          "Utwór ukazuje nieuchronność zaniku miejsc, ludzi i pamięci.",
      },
      {
        name: "Zniszczenie dziedzictwa kulturowego",
        description:
          "Cerkiew jako symbol kultury zostaje zniszczona przez ludzką obojętność.",
      },
      {
        name: "Pamięć i zapomnienie",
        description:
          "Narrator ukazuje, jak szybko miejsce może zostać zapomniane i pozbawione znaczenia.",
      },
      {
        name: "Sacrum i profanum",
        description:
          "Świątynia traci swój święty charakter i zostaje sprowadzona do funkcji użytkowej.",
      },
      {
        name: "Wykorzenienie",
        description:
          "Los wysiedlonych mieszkańców wskazuje na dramat utraty miejsca i tożsamości.",
      },
    ],
    motifs: [
      {
        name: "Cerkiew",
        meaning: "Symbol sacrum, kultury i pamięci, który ulega degradacji.",
      },
      {
        name: "Ruina",
        meaning: "Obraz przemijania i upadku wartości.",
      },
      {
        name: "Pustka",
        meaning: "Znak braku ludzi, historii i znaczenia.",
      },
      {
        name: "Natura",
        meaning:
          "Siła, która ostatecznie pochłania ślady ludzkiej działalności.",
      },
      {
        name: "Milczenie",
        meaning: "Brak świadków i pamięci o dawnym życiu miejsca.",
      },
    ],
    contexts: [
      {
        title: "Akcja „Wisła”",
        description:
          "Przymusowe wysiedlenia ludności łemkowskiej i ukraińskiej po II wojnie światowej, które doprowadziły do opuszczenia wielu wsi.",
      },
      {
        title: "Literatura małych ojczyzn",
        description:
          "Nurt ukazujący znaczenie lokalnych przestrzeni i ich utraty (np. twórczość Stasiuka).",
      },
      {
        title: "„Panny z Wilka” Jarosława Iwaszkiewicza",
        description:
          "Motyw przemijania i powrotu do miejsc związanych z przeszłością.",
      },
      {
        title: "„Dolina Issy” Czesława Miłosza",
        description:
          "Refleksja nad utraconą przestrzenią dzieciństwa i przemijaniem świata.",
      },
      {
        title: "Postmodernizm",
        description:
          "Fragmentaryczność świata, brak stałych wartości i refleksja nad rozpadem znaczeń.",
      },
    ],
    quotes: [
      {
        text: "To miejsce już nic nie znaczyło.",
        explanation:
          "Podkreśla utratę sensu i znaczenia dawnej przestrzeni sakralnej.",
      },
      {
        text: "Rozbierali ją kawałek po kawałku.",
        explanation: "Symbol stopniowego niszczenia kultury i tradycji.",
      },
      {
        text: "Zostało tylko miejsce.",
        explanation: "Puenta ukazująca pustkę i brak pamięci o przeszłości.",
      },
    ],
    terms: [
      {
        name: "Sacrum",
        meaning: "Sfera świętości, związana z religią i duchowością.",
      },
      {
        name: "Profanum",
        meaning: "Sfera codzienności, pozbawiona wymiaru sakralnego.",
      },
      {
        name: "Mała ojczyzna",
        meaning:
          "Bliska jednostce przestrzeń, z którą jest emocjonalnie związana.",
      },
      {
        name: "Narracja pierwszoosobowa",
        meaning:
          "Sposób opowiadania, w którym narrator jest uczestnikiem lub świadkiem wydarzeń.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Jaką funkcję pełni motyw miejsca w opowiadaniu Stasiuka?",
        "W jaki sposób autor ukazuje problem przemijania?",
        "Jak przedstawione jest zniszczenie dziedzictwa kulturowego?",
        "Na czym polega konflikt między sacrum a profanum w utworze?",
        "Jakie znaczenie ma kontekst historyczny dla interpretacji opowiadania?",
      ],
      keywords: [
        "przemijanie",
        "pamięć",
        "zapomnienie",
        "cerkiew",
        "sacrum",
        "ruina",
        "wysiedlenia",
        "mała ojczyzna",
      ],
      commonMistakes: [
        "Traktowanie opowiadania wyłącznie jako opisu przyrody.",
        "Pomijanie kontekstu historycznego (Akcja „Wisła”).",
        "Brak analizy symboliki cerkwi.",
        "Niedostrzeganie refleksyjnego charakteru narracji.",
      ],
      introStarters: [
        "Opowiadanie Andrzeja Stasiuka „Miejsce” to refleksyjny obraz przemijania i utraty pamięci o przeszłości.",
        "Motyw miejsca w literaturze często wiąże się z tożsamością i pamięcią – tak jest również w utworze Stasiuka.",
        "Współczesna literatura często podejmuje temat rozpadu wartości, co doskonale ukazuje „Miejsce”.",
        "Problem zaniku dziedzictwa kulturowego jest jednym z kluczowych zagadnień opowiadania Stasiuka.",
      ],
    },
  },
  {
    id: 32,
    title: "Podróże z Herodotem (fragmenty)",
    author: "Ryszard Kapuściński",
    year: 2004,
    epoch: "Współczesność",
    summary: {
      short:
        "Reporterska opowieść o podróżach autora po świecie, spleciona z refleksjami nad dziełem Herodota i naturą poznania innych kultur.",
      detailed:
        "„Podróże z Herodotem” to utwór o charakterze autobiograficznym i eseistyczno-reporterskim, w którym Ryszard Kapuściński opisuje swoje pierwsze wyjazdy zagraniczne jako młody dziennikarz oraz późniejsze podróże po Azji i Afryce. Kluczowym motywem jest towarzysząca mu przez lata lektura „Dziejów” Herodota.\n\nNarracja rozpoczyna się od momentu, gdy Kapuściński otrzymuje egzemplarz dzieła Herodota przed swoją pierwszą podróżą do Indii. Książka ta staje się dla niego przewodnikiem po świecie, inspiracją do refleksji oraz punktem odniesienia dla jego własnych doświadczeń reporterskich.\n\nAutor opisuje swoje zetknięcie z odmiennymi kulturami, językami i rzeczywistościami społecznymi. Ukazuje trudności podróżowania w realiach XX wieku – brak infrastruktury, nieznajomość języków, niepewność polityczną. W Indiach doświadcza chaosu, różnorodności i duchowości, które kontrastują z europejskim porządkiem.\n\nKolejne fragmenty przedstawiają podróże do Chin, gdzie Kapuściński obserwuje społeczeństwo poddane rygorom komunizmu, oraz do Afryki, gdzie styka się z konfliktami, rewolucjami i biedą. Autor analizuje mechanizmy władzy, przemocy oraz relacje między ludźmi różnych kultur.\n\nRównolegle Kapuściński przywołuje postać Herodota – starożytnego historyka i podróżnika. Dostrzega w nim swojego poprzednika: człowieka ciekawego świata, otwartego na inność, próbującego zrozumieć obce cywilizacje. Porównuje własne doświadczenia z relacjami Herodota, zauważając podobieństwa w ludzkich zachowaniach mimo upływu wieków.\n\nUtwór ma charakter refleksyjny – autor zastanawia się nad rolą reportera, znaczeniem podróży oraz możliwością poznania „Innego”. Podkreśla, że prawdziwe poznanie wymaga empatii, pokory i wyjścia poza własne schematy kulturowe.\n\nCałość stanowi nie tylko zapis podróży, ale także filozoficzną medytację nad historią, kulturą i naturą człowieka.",
      timeline: [
        {
          title: "Początek kariery",
          description:
            "Kapuściński jako młody dziennikarz otrzymuje książkę Herodota i wyjeżdża do Indii.",
        },
        {
          title: "Podróż do Indii",
          description:
            "Pierwsze zetknięcie z odmienną kulturą, doświadczenie chaosu i różnorodności.",
        },
        {
          title: "Refleksje nad Herodotem",
          description:
            "Porównanie własnych doświadczeń z opisami starożytnego historyka.",
        },
        {
          title: "Podróże do Chin",
          description:
            "Obserwacja społeczeństwa komunistycznego i mechanizmów kontroli.",
        },
        {
          title: "Podróże po Afryce",
          description:
            "Doświadczenie konfliktów, rewolucji i problemów postkolonialnych.",
        },
        {
          title: "Dojrzała refleksja",
          description:
            "Zrozumienie znaczenia empatii i otwartości w poznawaniu świata.",
        },
      ],
    },
    characters: [
      {
        name: "Ryszard Kapuściński",
        description:
          "Narrator i główny bohater, reporter podróżujący po świecie i refleksyjnie analizujący swoje doświadczenia.",
        traits: [
          "ciekawość świata",
          "refleksyjność",
          "empatia",
          "odwaga",
          "dociekliwość",
        ],
        role: "Narrator i reporter",
      },
      {
        name: "Herodot",
        description:
          "Starożytny historyk, autor „Dziejów”, duchowy przewodnik Kapuścińskiego.",
        traits: [
          "dociekliwość",
          "otwartość",
          "obserwacja",
          "ciekawość",
          "krytycyzm",
        ],
        role: "Mistrz i inspiracja",
      },
      {
        name: "Mieszkańcy odwiedzanych krajów",
        description:
          "Zbiorowy bohater reprezentujący różne kultury, społeczeństwa i systemy polityczne.",
        traits: ["różnorodność", "inność", "złożoność", "autentyczność"],
        role: "Reprezentanci kultur świata",
      },
    ],
    themes: [
      {
        name: "Podróż jako poznanie",
        description:
          "Podróż jest sposobem zdobywania wiedzy o świecie i o sobie.",
      },
      {
        name: "Spotkanie z Innym",
        description:
          "Konfrontacja z odmiennymi kulturami prowadzi do refleksji nad własną tożsamością.",
      },
      {
        name: "Rola reportera",
        description:
          "Reporter jako świadek historii i mediator między kulturami.",
      },
      {
        name: "Historia i pamięć",
        description:
          "Zestawienie współczesności z opisami Herodota ukazuje uniwersalność ludzkich doświadczeń.",
      },
      {
        name: "Relatywizm kulturowy",
        description:
          "Brak jednej uniwersalnej perspektywy – każda kultura ma własne wartości i logikę.",
      },
    ],
    motifs: [
      {
        name: "Podróż",
        meaning: "Symbol poznania, doświadczenia i rozwoju.",
      },
      {
        name: "Książka Herodota",
        meaning: "Symbol ciągłości kultury i inspiracji intelektualnej.",
      },
      {
        name: "Inny",
        meaning: "Obcy jako wyzwanie poznawcze i moralne.",
      },
      {
        name: "Granica",
        meaning: "Przekraczanie barier geograficznych i mentalnych.",
      },
      {
        name: "Reporter",
        meaning: "Pośrednik między światami i kulturami.",
      },
    ],
    contexts: [
      {
        title: "„Dzieje” Herodota",
        description:
          "Starożytne dzieło historyczne stanowiące punkt odniesienia dla refleksji Kapuścińskiego.",
      },
      {
        title: "Reportaż literacki XX wieku",
        description:
          "Rozwój gatunku łączącego faktografię z refleksją literacką.",
      },
      {
        title: "Dekolonizacja Afryki i Azji",
        description:
          "Procesy polityczne wpływające na sytuację społeczną opisywanych regionów.",
      },
      {
        title: "Zimna wojna",
        description:
          "Tło polityczne wpływające na realia podróży i funkcjonowanie państw.",
      },
      {
        title: "Globalizacja",
        description: "Zderzenie kultur i rosnąca mobilność ludzi w XX wieku.",
      },
    ],
    quotes: [
      {
        text: "Żeby poznać innych, trzeba najpierw poznać siebie.",
        explanation:
          "Podkreślenie znaczenia autorefleksji w procesie poznawania świata.",
      },
      {
        text: "Podróż to wyzwanie i ryzyko.",
        explanation:
          "Ukazanie trudności i niepewności związanych z odkrywaniem nowych miejsc.",
      },
      {
        text: "Herodot był pierwszym reporterem świata.",
        explanation:
          "Wskazanie na ciągłość tradycji opisywania rzeczywistości.",
      },
    ],
    terms: [
      {
        name: "reportaż literacki",
        meaning:
          "Gatunek łączący dokumentalność z elementami literackimi i refleksją autora.",
      },
      {
        name: "Inny",
        meaning:
          "Osoba reprezentująca odmienną kulturę, system wartości lub sposób życia.",
      },
      {
        name: "relatywizm kulturowy",
        meaning: "Pogląd, że normy i wartości są zależne od kultury.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Jaką rolę odgrywa Herodot w utworze Kapuścińskiego?",
        "Na czym polega spotkanie z Innym w „Podróżach z Herodotem”?",
        "Jak Kapuściński rozumie rolę reportera?",
        "Czy podróż jest sposobem poznania świata? Omów na podstawie utworu.",
        "Jakie znaczenie ma kontekst historyczny w książce Kapuścińskiego?",
      ],
      keywords: [
        "podróż",
        "reportaż",
        "Herodot",
        "Inny",
        "kultura",
        "poznanie",
        "empatia",
        "relatywizm",
      ],
      commonMistakes: [
        "Traktowanie utworu jako zwykłego reportażu bez warstwy refleksyjnej.",
        "Pomijanie roli Herodota jako kluczowego kontekstu.",
        "Brak odniesienia do problemu Innego.",
        "Zbyt powierzchowne streszczenie bez interpretacji.",
      ],
      introStarters: [
        "„Podróże z Herodotem” Ryszarda Kapuścińskiego to utwór łączący reportaż z refleksją filozoficzną...",
        "Motyw podróży jako drogi poznania świata i siebie jest kluczowy w książce Kapuścińskiego...",
        "Postać Herodota w utworze pełni funkcję przewodnika intelektualnego...",
        "Kapuściński w swoim dziele podejmuje problem spotkania z Innym i jego konsekwencji...",
      ],
    },
  },
  {
    id: 33,
    title: "Balladyna",
    author: "Juliusz Słowacki",
    year: 1839,
    epoch: "Romantyzm",
    summary: {
      short:
        "Tragiczna historia Balladyny, która w dążeniu do władzy popełnia kolejne zbrodnie, aż zostaje ukarana przez siły wyższe.",
      detailed:
        "Akcja dramatu rozgrywa się w legendarnej Polsce. Pustelnik (wygnany król Popiel III) ukrywa się w lesie. Kirkor, szlachetny rycerz, poszukuje żony i za radą Pustelnika trafia do chaty ubogiej wdowy, matki dwóch córek: Balladyny i Aliny. Postanawia poślubić tę, która pierwsza zbierze dzban malin.\n\nPodczas zbierania malin Balladyna, ogarnięta zazdrością i żądzą zwycięstwa, zabija swoją siostrę Alinę. Wraca do domu i kłamie, że siostra uciekła. Wychodzi za Kirkora, lecz na jej czole pojawia się krwawa plama – znak zbrodni.\n\nBalladyna szybko popada w spiralę zbrodni: zabija Grabca (który przez czary Goplany staje się królem dzwonków), a także Kostryna, swojego wspólnika i kochanka. Pozbywa się również świadków swoich czynów.\n\nTymczasem Kirkor walczy o władzę w kraju, a Balladyna obejmuje tron jako królowa. Jako sędzia wydaje wyroki – nie wiedząc, że są one de facto wyrokami na nią samą.\n\nW finale Balladyna zostaje ukarana przez siły nadprzyrodzone – ginie rażona piorunem jako symbol boskiej sprawiedliwości. Jej historia staje się przestrogą przed moralnym upadkiem i żądzą władzy.",
      timeline: [
        {
          title: "Spotkanie Kirkora z wdową",
          description:
            "Kirkor poznaje Balladynę i Alinę oraz ogłasza konkurs na zbieranie malin.",
        },
        {
          title: "Zbrodnia Balladyny",
          description: "Balladyna zabija Alinę, aby zdobyć rękę Kirkora.",
        },
        {
          title: "Ślub i pierwsze oznaki winy",
          description:
            "Balladyna wychodzi za Kirkora, a na jej czole pojawia się krwawa plama.",
        },
        {
          title: "Kolejne zbrodnie",
          description:
            "Balladyna zabija Grabca i Kostryna oraz eliminuje świadków.",
        },
        {
          title: "Objęcie władzy",
          description: "Balladyna zostaje królową i wydaje wyroki jako sędzia.",
        },
        {
          title: "Kara",
          description:
            "Balladyna ginie rażona piorunem – triumf sprawiedliwości.",
        },
      ],
    },
    characters: [
      {
        name: "Balladyna",
        description:
          "Starsza córka wdowy, ambitna i bezwzględna kobieta, która dla władzy popełnia kolejne zbrodnie.",
        traits: [
          "ambitna",
          "okrutna",
          "bezwzględna",
          "zdeterminowana",
          "zbrodnicza",
        ],
        role: "Tragiczna bohaterka",
      },
      {
        name: "Alina",
        description:
          "Młodsza siostra Balladyny, dobra i niewinna dziewczyna, która ginie z jej ręki.",
        traits: ["dobra", "niewinna", "pracowita", "uczciwa"],
        role: "Ofiara zbrodni",
      },
      {
        name: "Kirkor",
        description:
          "Szlachetny rycerz, który pragnie znaleźć dobrą żonę i przywrócić sprawiedliwość w kraju.",
        traits: ["szlachetny", "sprawiedliwy", "naiwny", "honorowy"],
        role: "Idealista rycerz",
      },
      {
        name: "Wdowa",
        description:
          "Matka Balladyny i Aliny, symbol prostoty i moralności ludowej.",
        traits: ["troskliwa", "uboga", "uczciwa"],
        role: "Matka i moralność",
      },
      {
        name: "Goplana",
        description:
          "Królowa jeziora Gopło, istota nadprzyrodzona ingerująca w losy bohaterów.",
        traits: ["kapryśna", "magiczna", "emocjonalna"],
        role: "Siła nadprzyrodzona",
      },
      {
        name: "Grabiec",
        description:
          "Prosty chłop, kochanek Goplany, przemieniony w króla dzwonków.",
        traits: ["naiwny", "wesoły", "prostolinijny"],
        role: "Postać komiczna",
      },
      {
        name: "Kostryn",
        description:
          "Rycerz i wspólnik Balladyny, który pomaga jej zdobyć władzę.",
        traits: ["ambitny", "zdradliwy", "okrutny"],
        role: "Wspólnik zbrodni",
      },
      {
        name: "Pustelnik",
        description:
          "Wygnany król Popiel III, który żyje w ukryciu i zna prawdę o władzy.",
        traits: ["mądry", "doświadczony", "tajemniczy"],
        role: "Wygnany król",
      },
    ],
    themes: [
      {
        name: "Wina i kara",
        description:
          "Balladyna ponosi konsekwencje swoich zbrodni – kara jest nieunikniona.",
      },
      {
        name: "Żądza władzy",
        description:
          "Ambicja prowadzi bohaterkę do moralnego upadku i zbrodni.",
      },
      {
        name: "Sprawiedliwość",
        description:
          "Ostatecznie triumfuje sprawiedliwość boska, choć ludzka zawodzi.",
      },
      {
        name: "Moralność",
        description: "Kontrast między dobrem (Alina) a złem (Balladyna).",
      },
    ],
    motifs: [
      {
        name: "Zbrodnia",
        meaning: "Początek moralnego upadku bohaterki i źródło jej winy.",
      },
      {
        name: "Kara boska",
        meaning: "Nieuchronność sprawiedliwości wyższej.",
      },
      {
        name: "Natura",
        meaning: "Tło wydarzeń i przestrzeń działania sił nadprzyrodzonych.",
      },
      {
        name: "Władza",
        meaning: "Cel działań Balladyny, który prowadzi do jej zguby.",
      },
    ],
    contexts: [
      {
        title: "Makbet – William Szekspir",
        description:
          "Podobieństwo bohaterów: żądza władzy prowadząca do zbrodni i upadku.",
      },
      {
        title: "Romantyzm",
        description:
          "Obecność elementów fantastycznych, ludowości i moralności.",
      },
      {
        title: "Biblia",
        description: "Motyw kary za grzech oraz sprawiedliwości boskiej.",
      },
      {
        title: "Kordian – Juliusz Słowacki",
        description: "Rozważania nad władzą i moralnością jednostki.",
      },
    ],
    quotes: [
      {
        text: "Zbrodnia to niesłychana, pani zabiła pana.",
        explanation:
          "Symboliczny cytat wskazujący na wagę zbrodni i jej konsekwencje.",
      },
      {
        text: "Nie ma zbrodni bez kary.",
        explanation: "Podkreślenie nieuchronności sprawiedliwości.",
      },
    ],
    terms: [
      {
        name: "Dramat romantyczny",
        meaning:
          "Gatunek łączący elementy realistyczne i fantastyczne, łamiący zasady klasyczne.",
      },
      {
        name: "Fantastyka",
        meaning: "Obecność postaci i zdarzeń nadprzyrodzonych.",
      },
      {
        name: "Tragizm",
        meaning: "Nieuchronność konfliktu prowadzącego do katastrofy bohatera.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Czy Balladyna jest postacią tragiczną?",
        "Motyw winy i kary w Balladynie.",
        "Jak władza wpływa na człowieka?",
        "Rola elementów fantastycznych w dramacie.",
        "Porównanie Balladyny i Makbeta.",
      ],
      keywords: [
        "wina",
        "kara",
        "władza",
        "zbrodnia",
        "romantyzm",
        "fantastyka",
        "moralność",
      ],
      commonMistakes: [
        "Utożsamianie Balladyny wyłącznie z postacią negatywną bez analizy jej tragizmu.",
        "Pomijanie roli fantastyki.",
        "Brak odniesienia do kontekstów literackich.",
        "Niedostrzeganie symboliki kary.",
      ],
      introStarters: [
        "Dramat romantyczny Juliusza Słowackiego „Balladyna” ukazuje...",
        "Jednym z najważniejszych problemów poruszonych w „Balladynie” jest...",
        "Postać Balladyny można interpretować jako przykład...",
        "Motyw winy i kary w literaturze znajduje wyraz w...",
      ],
    },
  },
  {
    id: 34,
    title: "Bajki",
    author: "Ignacy Krasicki",
    year: "1779",
    epoch: "Oświecenie",
    summary: {
      short:
        "Zbiór krótkich utworów dydaktycznych, w których poprzez alegoryczne historie ze świata ludzi i zwierząt autor ukazuje wady ludzkie oraz formułuje uniwersalne prawdy moralne.",
      detailed:
        "„Bajki” Ignacego Krasickiego to zbiór krótkich utworów o charakterze dydaktycznym i satyrycznym. Autor posługuje się alegorią, najczęściej przedstawiając bohaterów jako zwierzęta, które symbolizują ludzkie cechy i postawy. W utworach takich jak „Kruk i lis”, „Jagnię i wilcy” czy „Ptaszki w klatce” Krasicki ukazuje mechanizmy rządzące światem społecznym: przewagę silniejszych nad słabszymi, obłudę, pychę, głupotę oraz brak sprawiedliwości.\n\nKażda bajka kończy się morałem – wyrażonym wprost lub wynikającym z fabuły. Autor krytykuje społeczeństwo swoich czasów, wskazując na uniwersalne wady ludzkie, takie jak chciwość, naiwność czy brak rozsądku. Jednocześnie ukazuje, że świat rzadko bywa sprawiedliwy, a cnota nie zawsze jest nagradzana.\n\n„Ptaszki w klatce” poruszają temat utraty wolności i wartości ojczyzny, zestawiając doświadczenie młodego i starego ptaka. „Jagnię i wilcy” pokazuje bezsilność niewinnych wobec przemocy, a „Kruk i lis” demaskuje łatwowierność i próżność. Krasicki, jako twórca oświeceniowy, wykorzystuje bajki jako narzędzie edukacyjne – ucząc poprzez krótką, trafną formę.",
      timeline: [
        {
          title: "Prezentacja świata alegorycznego",
          description:
            "Wprowadzenie bohaterów – najczęściej zwierząt symbolizujących ludzkie cechy.",
        },
        {
          title: "Konflikt lub sytuacja problemowa",
          description:
            "Bohaterowie wchodzą w interakcję ujawniającą ich wady lub postawy.",
        },
        {
          title: "Kulminacja wydarzeń",
          description:
            "Dochodzi do ujawnienia prawdy o bohaterach lub niesprawiedliwości świata.",
        },
        {
          title: "Morał",
          description:
            "Wyrażenie uniwersalnej prawdy o człowieku i społeczeństwie.",
        },
      ],
    },
    characters: [
      {
        name: "Lis",
        description: "Symbol sprytu, przebiegłości i manipulacji.",
        traits: ["sprytny", "podstępny", "inteligentny"],
        role: "Symbol Przebiegłości",
      },
      {
        name: "Kruk",
        description: "Uosobienie próżności i łatwowierności.",
        traits: ["naiwny", "próżny", "łatwowierny"],
        role: "Ofiara Manipulacji",
      },
      {
        name: "Wilk",
        description: "Symbol siły i bezwzględności.",
        traits: ["okrutny", "silny", "dominujący"],
        role: "Uosobienie Siły",
      },
      {
        name: "Jagnię",
        description: "Symbol niewinności i bezbronności.",
        traits: ["niewinne", "słabe", "bezbronne"],
        role: "Symbol Niewinności",
      },
      {
        name: "Ptaszki w klatce",
        description: "Bohaterowie symbolizujący różne doświadczenia wolności.",
        traits: ["refleksyjne", "zależne", "świadome"],
        role: "Symbol Wolności",
      },
    ],
    themes: [
      {
        name: "Krytyka ludzkich wad",
        description:
          "Ukazanie takich cech jak pycha, chciwość, głupota i obłuda.",
      },
      {
        name: "Niesprawiedliwość świata",
        description:
          "Silniejsi dominują nad słabszymi, a moralność nie gwarantuje sukcesu.",
      },
      {
        name: "Dydaktyzm",
        description:
          "Utwory mają na celu pouczanie i kształtowanie postaw moralnych.",
      },
      {
        name: "Wolność",
        description:
          "Ukazanie wartości wolności, szczególnie w kontekście ojczyzny.",
      },
    ],
    motifs: [
      {
        name: "Alegoria",
        meaning:
          "Postacie i wydarzenia symbolizują uniwersalne prawdy o człowieku.",
      },
      {
        name: "Zwierzęta",
        meaning: "Uosabiają ludzkie cechy i zachowania.",
      },
      {
        name: "Morał",
        meaning: "Podsumowanie utworu zawierające naukę dla odbiorcy.",
      },
      {
        name: "Władza silniejszych",
        meaning: "Ukazanie dominacji siły nad sprawiedliwością.",
      },
    ],
    contexts: [
      {
        title: "Oświecenie",
        description:
          "Epoka racjonalizmu i dydaktyzmu, w której literatura miała funkcję edukacyjną.",
      },
      {
        title: "Bajki Ezopa",
        description:
          "Antyczna tradycja bajek jako źródło inspiracji dla Krasickiego.",
      },
      {
        title: "Satyra oświeceniowa",
        description:
          "Krytyka społeczeństwa i obyczajów poprzez ironię i humor.",
      },
      {
        title: "Sytuacja polityczna Polski XVIII wieku",
        description: "Upadek państwa i refleksja nad kondycją społeczeństwa.",
      },
    ],
    quotes: [
      {
        text: "Często i gęsto bywa, że kto pod kim dołki kopie, sam w nie wpada.",
        explanation: "Przestroga przed działaniem na szkodę innych.",
      },
      {
        text: "Prawdziwa cnota krytyk się nie boi.",
        explanation:
          "Wartości moralne nie wymagają obrony przed opinią innych.",
      },
      {
        text: "Wśród serdecznych przyjaciół psy zająca zjadły.",
        explanation: "Krytyka fałszywej przyjaźni i obłudy.",
      },
    ],
    terms: [
      {
        name: "Bajka",
        meaning: "Krótki utwór dydaktyczny zakończony morałem.",
      },
      {
        name: "Alegoria",
        meaning: "Ukryte znaczenie przedstawione za pomocą symboli.",
      },
      {
        name: "Morał",
        meaning: "Wniosek lub nauka płynąca z utworu.",
      },
      {
        name: "Satyra",
        meaning: "Utwór krytykujący wady społeczne i ludzkie.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Jaką funkcję pełnią bajki Krasickiego?",
        "W jaki sposób autor ukazuje ludzkie wady?",
        "Na czym polega uniwersalność bajek Krasickiego?",
        "Omów rolę morału w bajkach.",
        "Jak przedstawiona jest niesprawiedliwość świata w wybranych bajkach?",
      ],
      keywords: [
        "dydaktyzm",
        "morał",
        "alegoria",
        "satyra",
        "krytyka społeczeństwa",
        "zwierzęta symboliczne",
      ],
      commonMistakes: [
        "Traktowanie bajek wyłącznie jako utworów dla dzieci.",
        "Pomijanie znaczenia alegorii.",
        "Brak odniesienia do kontekstu oświecenia.",
        "Niewłaściwe interpretowanie morału.",
      ],
      introStarters: [
        "Ignacy Krasicki, czołowy przedstawiciel polskiego oświecenia, wykorzystuje bajkę jako narzędzie dydaktyczne...",
        "Bajki Krasickiego stanowią przykład literatury moralizatorskiej, która poprzez prostą formę przekazuje głębokie prawdy...",
        "Analizując bajki Krasickiego, można dostrzec krytyczny obraz społeczeństwa XVIII wieku...",
      ],
    },
  },
  {
    id: 35,
    title: "Dziady cz. II",
    author: "Adam Mickiewicz",
    year: "1823",
    epoch: "Romantyzm",
    summary: {
      short:
        "Dramat romantyczny przedstawiający obrzęd dziadów, podczas którego żywi nawiązują kontakt z duchami, by pomóc im osiągnąć zbawienie.",
      detailed:
        "Akcja utworu rozgrywa się w noc zaduszną w kaplicy na cmentarzu. Guślarz przewodzi obrzędowi dziadów – ludowemu rytuałowi przywoływania duchów zmarłych, aby ulżyć ich cierpieniom i pomóc im osiągnąć zbawienie.\n\nJako pierwsze pojawiają się duchy lekkie – Józio i Rózia, dzieci, które za życia nie zaznały cierpienia. Ich kara polega na niemożności dostania się do nieba, ponieważ nie poznały smaku goryczy. Proszą o ziarnko goryczy, ale nie mogą go otrzymać – ich stan pozostaje niezmieniony.\n\nNastępnie pojawia się duch pośredni – Zły Pan, okrutny dziedzic, który za życia znęcał się nad poddanymi. Jest dręczony przez ptaki symbolizujące jego ofiary i nie może zaznać spokoju. Jego kara to wieczny głód i cierpienie.\n\nKolejnym duchem jest Zosia – pasterka, która nie potrafiła kochać i odrzucała uczucia innych. Jej dusza zawieszona jest między niebem a ziemią, ponieważ nie zaznała ani prawdziwej miłości, ani cierpienia. Prosi o możliwość doświadczenia uczucia, ale jej los pozostaje zawieszony.\n\nNa końcu pojawia się tajemnicze Widmo – milcząca postać młodzieńca, którego tożsamość nie zostaje w pełni wyjaśniona (interpretowany jako duch Gustawa). Widmo nie bierze udziału w dialogu, lecz jego obecność wprowadza atmosferę tajemnicy i zapowiada dalsze wydarzenia w cyklu dramatycznym.\n\nObrzęd kończy się wraz z nadejściem świtu. Dramat ukazuje moralny porządek świata, w którym każdy czyn niesie konsekwencje po śmierci.",
      timeline: [
        {
          title: "Rozpoczęcie obrzędu",
          description:
            "Guślarz i zgromadzeni wieśniacy rozpoczynają rytuał dziadów w kaplicy.",
        },
        {
          title: "Duchy dzieci",
          description:
            "Pojawiają się Józio i Rózia – duchy lekkie, które nie zaznały cierpienia.",
        },
        {
          title: "Zły Pan",
          description:
            "Ukazuje się duch okrutnego dziedzica dręczonego przez ptaki.",
        },
        {
          title: "Zosia",
          description:
            "Pojawia się duch dziewczyny, która nie potrafiła kochać.",
        },
        {
          title: "Widmo",
          description:
            "Milcząca postać tajemniczego młodzieńca pojawia się i znika.",
        },
        {
          title: "Zakończenie obrzędu",
          description: "Świt kończy rytuał i przywoływanie duchów.",
        },
      ],
    },
    characters: [
      {
        name: "Guślarz",
        description:
          "Przewodnik obrzędu dziadów, pośrednik między światem żywych a umarłych.",
        traits: ["mądry", "tajemniczy", "doświadczony", "autorytatywny"],
        role: "Przewodnik obrzędu",
      },
      {
        name: "Józio i Rózia",
        description:
          "Duchy dzieci, które nie zaznały cierpienia i nie mogą wejść do nieba.",
        traits: ["niewinne", "lekkie", "naiwne"],
        role: "Duchy lekkie",
      },
      {
        name: "Zły Pan",
        description:
          "Okrutny dziedzic ukarany za brak litości wobec poddanych.",
        traits: ["okrutny", "egoistyczny", "bezwzględny"],
        role: "Duch pośredni",
      },
      {
        name: "Zosia",
        description:
          "Pasterka, która nie potrafiła odwzajemnić miłości i została zawieszona między światami.",
        traits: ["lekkomyślna", "obojętna uczuciowo", "samotna"],
        role: "Duch pośredni",
      },
      {
        name: "Widmo",
        description:
          "Tajemniczy duch młodzieńca, symbol niespełnionej miłości.",
        traits: ["milczący", "tajemniczy", "nostalgiczny"],
        role: "Zapowiedź Gustawa",
      },
      {
        name: "Chór wieśniaków",
        description:
          "Uczestnicy obrzędu, którzy wspierają Guślarza i komentują wydarzenia.",
        traits: ["wierzący", "tradycyjni", "zbiorowi"],
        role: "Uczestnicy rytuału",
      },
    ],
    themes: [
      {
        name: "Sprawiedliwość moralna",
        description:
          "Każdy czyn człowieka ma konsekwencje po śmierci – dobro jest nagradzane, zło karane.",
      },
      {
        name: "Cierpienie jako warunek zbawienia",
        description:
          "Brak doświadczenia cierpienia uniemożliwia osiągnięcie pełni człowieczeństwa i zbawienia.",
      },
      {
        name: "Miłość i jej brak",
        description:
          "Nieumiejętność kochania prowadzi do duchowego zawieszenia i niespełnienia.",
      },
      {
        name: "Relacja żywych i umarłych",
        description:
          "Świat żywych i zmarłych przenikają się poprzez obrzędy i wierzenia ludowe.",
      },
    ],
    motifs: [
      {
        name: "Dziady",
        meaning:
          "Obrzęd kontaktu z duchami, symbol więzi między światem żywych i umarłych.",
      },
      {
        name: "Duchy",
        meaning:
          "Reprezentują konsekwencje ludzkich czynów i moralny porządek świata.",
      },
      {
        name: "Cierpienie",
        meaning: "Warunek konieczny do osiągnięcia zbawienia.",
      },
      {
        name: "Wina i kara",
        meaning: "Każdy grzech spotyka się z odpowiednią karą po śmierci.",
      },
      {
        name: "Ludowość",
        meaning: "Źródło prawd moralnych i metafizycznych.",
      },
    ],
    contexts: [
      {
        title: "Ludowe wierzenia słowiańskie",
        description:
          "Obrzęd dziadów wywodzi się z tradycji ludowej i ukazuje wiarę w kontakt ze zmarłymi.",
      },
      {
        title: "Biblia",
        description:
          "Motyw kary za grzechy i moralnego porządku świata nawiązuje do chrześcijańskiej wizji życia po śmierci.",
      },
      {
        title: "Romantyzm",
        description:
          "Utwór eksponuje ludowość, irracjonalizm i zainteresowanie światem duchów.",
      },
      {
        title: "Dziady cz. IV",
        description:
          "Postać Widma zapowiada historię Gustawa i motyw nieszczęśliwej miłości.",
      },
    ],
    quotes: [
      {
        text: "Bo kto nie był ni razu człowiekiem, temu człowiek nic nie pomoże.",
        explanation:
          "Podkreśla znaczenie doświadczenia cierpienia i empatii w osiągnięciu zbawienia.",
      },
      {
        text: "Kto nie doznał goryczy ni razu, ten nie dozna słodyczy w niebie.",
        explanation:
          "Ukazuje konieczność cierpienia jako warunku szczęścia wiecznego.",
      },
    ],
    terms: [
      {
        name: "Dramat romantyczny",
        meaning:
          "Gatunek łączący elementy różnych form literackich, łamiący zasady klasyczne.",
      },
      {
        name: "Synkretyzm",
        meaning: "Łączenie różnych rodzajów literackich w jednym utworze.",
      },
      {
        name: "Ludowość",
        meaning: "Inspiracja tradycją, wierzeniami i kulturą ludu.",
      },
      {
        name: "Fantastyka",
        meaning: "Obecność zjawisk nadprzyrodzonych i duchów.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Jaką rolę pełni cierpienie w Dziadach cz. II?",
        "Na czym polega moralny porządek świata przedstawiony w utworze?",
        "Jakie znaczenie ma obrzęd dziadów?",
        "Jakie funkcje pełnią duchy w dramacie Mickiewicza?",
        "Omów ludowość jako źródło prawdy w Dziadach cz. II.",
      ],
      keywords: [
        "cierpienie",
        "moralność",
        "duchy",
        "ludowość",
        "obrzęd",
        "wina i kara",
        "romantyzm",
      ],
      commonMistakes: [
        "Sprowadzanie utworu wyłącznie do opisu obrzędu bez analizy moralnej.",
        "Pomijanie znaczenia cierpienia jako warunku zbawienia.",
        "Mylenie części II z innymi częściami Dziadów.",
        "Brak odniesienia do kontekstu ludowego i religijnego.",
      ],
      introStarters: [
        "Dziady cz. II Adama Mickiewicza to dramat romantyczny ukazujący ludowy obrzęd jako źródło prawd moralnych.",
        "W utworze Mickiewicza świat żywych i umarłych przenikają się, odsłaniając uniwersalne zasady sprawiedliwości.",
        "Motyw cierpienia w Dziadach cz. II stanowi klucz do zrozumienia romantycznej wizji człowieka i jego losu.",
      ],
    },
  },
  {
    id: 36,
    title: "Pan Tadeusz",
    author: "Adam Mickiewicz",
    year: "1834",
    epoch: "Romantyzm",
    summary: {
      short:
        "Epopeja narodowa ukazująca życie polskiej szlachty na Litwie w przededniu kampanii napoleońskiej, łącząca wątek miłosny Tadeusza i Zosi z konfliktem o zamek oraz nadziejami na odzyskanie niepodległości.",
      detailed:
        "Akcja utworu rozgrywa się w latach 1811–1812 na Litwie, w Soplicowie. Młody Tadeusz Soplica wraca z nauki do domu swojego stryja, Sędziego. Na miejscu poznaje Zosię, wychowanicę Telimeny, oraz spotyka Telimenę, z którą nawiązuje przelotny romans.\n\nRównolegle rozwija się spór o zamek między Sędzią Soplicą a Hrabią Horeszką, potomkiem dawnego właściciela. Konflikt ten ma swoje źródło w przeszłości – Jacek Soplica, ojciec Tadeusza, zabił Stolnika Horeszkę podczas rosyjskiego ataku, co zostało uznane za zdradę narodową.\n\nW Soplicowie pojawia się tajemniczy ksiądz Robak, który okazuje się być Jackiem Soplicą. Jako emisariusz przygotowuje szlachtę do powstania u boku Napoleona. Próbuje także naprawić swoje winy i doprowadzić do pojednania między zwaśnionymi rodami.\n\nDochodzi do zajazdu – zbrojnego napadu na Soplicowo, zorganizowanego przez Gerwazego i Hrabiego. Interweniują wojska rosyjskie, co prowadzi do walki. W trakcie starcia ksiądz Robak zostaje śmiertelnie ranny, ratując życie Hrabiemu i Gerwazemu.\n\nPrzed śmiercią Robak wyjawia swoją tożsamość i zostaje symbolicznie oczyszczony z win. Spór zostaje zakończony, a Tadeusz i Zosia zaręczają się, co symbolizuje pojednanie rodów.\n\nOstatnia księga przedstawia rok 1812 – wkroczenie wojsk Napoleona na Litwę i nadzieje Polaków na odzyskanie niepodległości. Utwór kończy się obrazem narodowej wspólnoty i tradycji, m.in. poprzez opis poloneza.",
      timeline: [
        {
          title: "Powrót Tadeusza",
          description:
            "Tadeusz wraca do Soplicowa i poznaje Zosię oraz Telimenę.",
        },
        {
          title: "Spór o zamek",
          description: "Konflikt między Soplicami a Hrabią o własność zamku.",
        },
        {
          title: "Romans i intrygi",
          description:
            "Relacje Tadeusza z Telimeną oraz rozwój uczucia do Zosi.",
        },
        {
          title: "Zajazd",
          description: "Zbrojna napaść na Soplicowo i walka z Rosjanami.",
        },
        {
          title: "Śmierć Jacka Soplicy",
          description: "Robak ujawnia swoją tożsamość i umiera jako bohater.",
        },
        {
          title: "Finał i nadzieja",
          description: "Zaręczyny Tadeusza i Zosi oraz wkroczenie Napoleona.",
        },
      ],
    },
    characters: [
      {
        name: "Tadeusz Soplica",
        description:
          "Młody szlachcic, syn Jacka Soplicy, dojrzewający bohater uczący się odpowiedzialności.",
        traits: [
          "naiwny",
          "uczuciowy",
          "honorowy",
          "niedojrzały",
          "patriotyczny",
        ],
        role: "Młody bohater dojrzewający",
      },
      {
        name: "Zosia",
        description:
          "Młoda, skromna dziewczyna, wychowanka Telimeny, symbol niewinności i tradycji.",
        traits: ["niewinna", "łagodna", "skromna", "pracowita"],
        role: "Symbol tradycji i niewinności",
      },
      {
        name: "Jacek Soplica (ksiądz Robak)",
        description:
          "Ojciec Tadeusza, dawny awanturnik, który po przemianie staje się patriotą i emisariuszem.",
        traits: ["porywczy", "odważny", "pokutujący", "patriotyczny"],
        role: "Bohater tragiczny odkupiony",
      },
      {
        name: "Sędzia Soplica",
        description:
          "Strój Tadeusza, strażnik tradycji i obyczajów szlacheckich.",
        traits: ["rozsądny", "tradycjonalista", "gościnny", "patriotyczny"],
        role: "Strażnik tradycji szlacheckiej",
      },
      {
        name: "Telimena",
        description:
          "Krewna Sopliców, kobieta światowa, kokieteryjna i pragmatyczna.",
        traits: ["kokieteryjna", "światowa", "pragmatyczna", "romantyczna"],
        role: "Kobieta światowa i kokietka",
      },
      {
        name: "Hrabia Horeszko",
        description:
          "Arystokrata, spadkobierca Horeszków, romantyczny marzyciel.",
        traits: ["romantyczny", "impulsywny", "dumny"],
        role: "Romantyczny arystokrata marzyciel",
      },
      {
        name: "Gerwazy",
        description: "Sługa Horeszków, wierny pamięci Stolnika, żądny zemsty.",
        traits: ["lojalny", "mściwy", "honorowy"],
        role: "Strażnik pamięci rodu",
      },
    ],
    themes: [
      {
        name: "Patriotyzm",
        description:
          "Ukazanie miłości do ojczyzny i nadziei na odzyskanie niepodległości.",
      },
      {
        name: "Tradycja szlachecka",
        description: "Obraz życia, obyczajów i wartości polskiej szlachty.",
      },
      {
        name: "Przemiana bohatera",
        description:
          "Historia Jacka Soplicy jako przykład moralnego odkupienia.",
      },
      {
        name: "Miłość",
        description:
          "Relacje uczuciowe bohaterów jako element dojrzewania i pojednania.",
      },
    ],
    motifs: [
      {
        name: "Arkadia",
        meaning: "Soplicowo jako idealizowana kraina dzieciństwa i harmonii.",
      },
      {
        name: "Dom",
        meaning: "Symbol stabilności, tradycji i wspólnoty narodowej.",
      },
      {
        name: "Zemsta",
        meaning: "Siła napędzająca konflikt, ale ostatecznie przezwyciężona.",
      },
      {
        name: "Natura",
        meaning:
          "Opis przyrody jako element budujący nastrój i tożsamość narodową.",
      },
    ],
    contexts: [
      {
        title: "Kampania napoleońska 1812",
        description:
          "Nadzieje Polaków związane z Napoleonem jako wybawcą narodu.",
      },
      {
        title: "Romantyzm",
        description: "Epoka podkreślająca uczucia, indywidualizm i patriotyzm.",
      },
      {
        title: "Biblia",
        description:
          "Motyw winy i odkupienia Jacka Soplicy nawiązuje do schematów biblijnych.",
      },
      {
        title: "Kordian",
        description: "Porównanie postaw patriotycznych i walki o wolność.",
      },
    ],
    quotes: [
      {
        text: "Litwo! Ojczyzno moja! ty jesteś jak zdrowie;",
        explanation:
          "Porównanie ojczyzny do zdrowia podkreśla jej wartość i znaczenie.",
      },
      {
        text: "Szlachta na koń wsiędzie, ja z synowcem na czele",
        explanation: "Wyraz gotowości do walki o ojczyznę.",
      },
    ],
    terms: [
      {
        name: "Epopeja narodowa",
        meaning:
          "Utwór epicki przedstawiający dzieje narodu na tle historycznym.",
      },
      {
        name: "Inwokacja",
        meaning: "Uroczysty wstęp do utworu, często zawierający apostrofę.",
      },
      {
        name: "Zajazd",
        meaning:
          "Szlachecki sposób rozstrzygania sporów poprzez zbrojny najazd.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Czy Jacek Soplica jest bohaterem tragicznym?",
        "Jaką rolę odgrywa tradycja w Panu Tadeuszu?",
        "Obraz szlachty polskiej w Panu Tadeuszu.",
        "Motyw ojczyzny w Panu Tadeuszu.",
      ],
      keywords: [
        "patriotyzm",
        "szlachta",
        "tradycja",
        "romantyzm",
        "ojczyzna",
        "Napoleon",
      ],
      commonMistakes: [
        "Mylenie Jacka Soplicy z księdzem Robakiem jako odrębnymi postaciami.",
        "Pomijanie kontekstu historycznego kampanii Napoleona.",
        "Zbyt powierzchowna analiza przemiany bohatera.",
      ],
      introStarters: [
        "Pan Tadeusz Adama Mickiewicza to epopeja narodowa, która...",
        "W utworze Mickiewicza szczególne znaczenie odgrywa...",
        "Jednym z kluczowych problemów poruszanych w Panu Tadeuszu jest...",
      ],
    },
  },
  {
    id: 37,
    title: "Zemsta",
    author: "Aleksander Fredro",
    year: 1834,
    epoch: "Romantyzm",
    summary: {
      short:
        "Komedia ukazująca konflikt dwóch szlachciców – Cześnika i Rejenta – oraz jego rozwiązanie dzięki miłości młodego pokolenia.",
      detailed:
        "Akcja „Zemsty” rozgrywa się w zamku podzielonym między dwóch zwaśnionych sąsiadów: Cześnika Raptusiewicza i Rejenta Milczka. Spór dotyczy muru granicznego, który Rejent chce naprawić, a Cześnik – zburzyć.\n\nCześnik planuje ożenić się z bogatą wdową Podstoliną, by poprawić swoją sytuację materialną. Jednocześnie opiekuje się swoją bratanicą Klarą, która zakochana jest w Wacławie – synu Rejenta. Miłość ta jest utrudniona przez konflikt rodzin.\n\nRejent z kolei planuje ożenić swojego syna z Podstoliną, kierując się interesem finansowym. Wacław, mimo nacisków ojca, pozostaje wierny Klarze.\n\nDo akcji wkracza Papkin – samochwała i tchórz, który próbuje zdobyć rękę Klary, lecz zostaje przez nią wyśmiany. Papkin pełni rolę komiczną i pośredniczy w sporach.\n\nKonflikt między Cześnikiem a Rejentem eskaluje, prowadząc do intryg i prób przechytrzenia przeciwnika. Ostatecznie jednak młodzi – Klara i Wacław – potajemnie się pobierają, co zmusza zwaśnionych do pogodzenia się.\n\nUtwór kończy się pojednaniem stron, co ma charakter ironiczny i wskazuje na zwycięstwo młodego pokolenia nad zacofanymi sporami starszych.",
      timeline: [
        {
          title: "Spór o mur",
          description: "Cześnik i Rejent kłócą się o naprawę muru granicznego.",
        },
        {
          title: "Plany małżeńskie",
          description:
            "Cześnik chce poślubić Podstolinę, Rejent planuje wydać za nią Wacława.",
        },
        {
          title: "Miłość Klary i Wacława",
          description: "Młodzi zakochują się mimo konfliktu rodzin.",
        },
        {
          title: "Intrygi i działania Papkina",
          description: "Papkin próbuje zdobyć Klarę i pośredniczy w sporze.",
        },
        {
          title: "Potajemny ślub",
          description: "Klara i Wacław biorą ślub bez wiedzy opiekunów.",
        },
        {
          title: "Pojednanie",
          description: "Konflikt zostaje rozwiązany dzięki małżeństwu młodych.",
        },
      ],
    },
    characters: [
      {
        name: "Cześnik Raptusiewicz",
        description:
          "Porywczy szlachcic, współwłaściciel zamku, przeciwnik Rejenta.",
        traits: ["impulsywny", "gwałtowny", "honorowy", "tradycjonalista"],
        role: "Skłócony sąsiad",
      },
      {
        name: "Rejent Milczek",
        description: "Spokojny, lecz podstępny szlachcic, przeciwnik Cześnika.",
        traits: ["cichy", "obłudny", "przebiegły", "religijny pozornie"],
        role: "Przebiegły antagonista",
      },
      {
        name: "Klara",
        description: "Bratanica Cześnika, zakochana w Wacławie.",
        traits: ["rozsądna", "stanowcza", "inteligentna", "uczuciowa"],
        role: "Rozsądna bohaterka",
      },
      {
        name: "Wacław",
        description: "Syn Rejenta, zakochany w Klarze.",
        traits: ["lojalny", "uczciwy", "romantyczny", "posłuszny"],
        role: "Zakochany młodzieniec",
      },
      {
        name: "Papkin",
        description: "Samochwała i tchórz, próbujący zdobyć względy Klary.",
        traits: ["próżny", "tchórzliwy", "gadatliwy", "fantasta"],
        role: "Postać komiczna",
      },
      {
        name: "Podstolina",
        description: "Wdowa zainteresowana korzystnym małżeństwem.",
        traits: ["wyrachowana", "praktyczna", "zmienna", "interesowna"],
        role: "Kalkulująca wdowa",
      },
      {
        name: "Dyndalski",
        description: "Sługa Cześnika, wykonujący jego polecenia.",
        traits: ["posłuszny", "lojalny", "prostolinijny"],
        role: "Sługa Cześnika",
      },
    ],
    themes: [
      {
        name: "Spór sąsiedzki",
        description:
          "Ukazanie konfliktu jako absurdalnego i wyniszczającego relacje społeczne.",
      },
      {
        name: "Miłość młodych",
        description:
          "Miłość Klary i Wacława jako siła zdolna przezwyciężyć konflikty.",
      },
      {
        name: "Krytyka szlachty",
        description:
          "Ukazanie wad polskiej szlachty: kłótliwości, pieniactwa i egoizmu.",
      },
      {
        name: "Małżeństwo jako transakcja",
        description:
          "Małżeństwo traktowane jako narzędzie poprawy sytuacji materialnej.",
      },
    ],
    motifs: [
      {
        name: "Mur",
        meaning: "Symbol konfliktu i podziału między ludźmi.",
      },
      {
        name: "Miłość",
        meaning: "Siła jednocząca i rozwiązująca konflikty.",
      },
      {
        name: "Zemsta",
        meaning: "Bezcelowe dążenie do odwetu prowadzące do absurdu.",
      },
      {
        name: "Maska i pozór",
        meaning: "Fałsz i obłuda w zachowaniu bohaterów.",
      },
    ],
    contexts: [
      {
        title: "Satyra na szlachtę polską",
        description:
          "Utwór wpisuje się w tradycję krytyki wad szlachty obecnej także w „Panu Tadeuszu”.",
      },
      {
        title: "Komedia charakterów",
        description:
          "Nawiązanie do tradycji komedii Moliera, gdzie postacie reprezentują określone cechy.",
      },
      {
        title: "Polska szlachecka XVIII wieku",
        description:
          "Obraz mentalności i obyczajów szlachty w czasach przedrozbiorowych.",
      },
      {
        title: "Motyw konfliktu pokoleń",
        description:
          "Podobny do konfliktów przedstawionych w „Romeo i Julii” Szekspira.",
      },
    ],
    quotes: [
      {
        text: "Niech się dzieje wola nieba, z nią się zawsze zgadzać trzeba.",
        explanation:
          "Ironiczne podkreślenie pozornej pokory wobec losu, często używane przez Rejenta.",
      },
      {
        text: "Jeśli nie chcesz mojej zguby, krokodyla daj mi luby.",
        explanation:
          "Komizm postaci Papkina i jego egzaltowanego stylu wypowiedzi.",
      },
    ],
    terms: [
      {
        name: "Komedia",
        meaning:
          "Utwór dramatyczny o charakterze humorystycznym, często zakończony szczęśliwie.",
      },
      {
        name: "Komizm sytuacyjny",
        meaning:
          "Humor wynikający z wydarzeń i sytuacji przedstawionych w utworze.",
      },
      {
        name: "Komizm postaci",
        meaning: "Humor wynikający z cech charakteru bohaterów.",
      },
      {
        name: "Intryga",
        meaning:
          "Splot wydarzeń i działań bohaterów prowadzących do rozwiązania konfliktu.",
      },
    ],
    exam: {
      possibleQuestions: [
        "Na czym polega komizm w „Zemście”?",
        "Scharakteryzuj konflikt między Cześnikiem a Rejentem.",
        "Jaką rolę odgrywa Papkin w utworze?",
        "Czy „Zemsta” ma charakter dydaktyczny?",
        "Jak Fredro przedstawia polską szlachtę?",
      ],
      keywords: [
        "komedia",
        "spór",
        "szlachta",
        "miłość",
        "mur",
        "Papkin",
        "intryga",
      ],
      commonMistakes: [
        "Traktowanie konfliktu jako poważnego zamiast komicznego.",
        "Pomijanie roli Papkina jako postaci kluczowej dla komizmu.",
        "Brak odniesienia do krytyki szlachty.",
        "Mylenie motywacji bohaterów (np. Podstoliny).",
      ],
      introStarters: [
        "„Zemsta” Aleksandra Fredry to klasyczna komedia ukazująca...",
        "Utwór Fredry przedstawia konflikt, który ma charakter przede wszystkim...",
        "Analizując „Zemstę”, warto zwrócić uwagę na...",
        "Jednym z najważniejszych elementów komedii Fredry jest...",
      ],
    },
  },
];
