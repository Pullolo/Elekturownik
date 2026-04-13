import { EpochStudy } from "./types";

export const epochs: EpochStudy[] = [
  {
    id: 1,
    name: "Antyk",
    timeframe: "ok. VIII w. p.n.e. – V w. n.e.",
    description:
      "Antyk to epoka obejmująca rozwój kultury starożytnej Grecji i Rzymu, która ukształtowała fundamenty europejskiej filozofii, literatury i sztuki. Charakteryzuje się harmonijnym postrzeganiem świata, antropocentryzmem oraz dążeniem do ładu i doskonałości.",
    moodTags: [
      "Harmonia",
      "Racjonalizm",
      "Heroizm",
      "Ład i proporcja",
      "Humanizm",
    ],
    funFact:
      "Starożytni Grecy wierzyli, że muzyka i matematyka są ze sobą ściśle powiązane i rządzą harmonią wszechświata.",
    philosophy: [
      "Stoicyzm – dążenie do wewnętrznego spokoju i obojętności wobec losu",
      "Epikureizm – poszukiwanie szczęścia poprzez unikanie cierpienia",
      "Sokratyzm – poznanie samego siebie jako droga do mądrości",
      "Platonizm – świat idei jako doskonała rzeczywistość",
      "Arystotelizm – poznanie świata przez doświadczenie i logikę",
    ],
    worldview:
      "Antropocentryczny i harmonijny obraz świata, w którym człowiek jest miarą wszechrzeczy, a życie podporządkowane jest rozumowi, cnocie i równowadze.",
    keyIdeas: [
      {
        name: "Antropocentryzm",
        description:
          "Człowiek jako centrum zainteresowania i miara wszechrzeczy.",
      },
      {
        name: "Mimesis",
        description:
          "Naśladowanie rzeczywistości jako podstawowa funkcja sztuki.",
      },
      {
        name: "Kalokagatia",
        description: "Ideał harmonii ciała i ducha, piękna i dobra.",
      },
      {
        name: "Fatum",
        description:
          "Nieuchronność losu, któremu podlegają nawet bogowie i bohaterowie.",
      },
      {
        name: "Katarzis",
        description:
          "Oczyszczenie emocjonalne widza poprzez przeżycie tragedii.",
      },
    ],
    characteristics: [
      "Dążenie do harmonii i proporcji",
      "Wysoki poziom racjonalizmu i logiki",
      "Rozwój filozofii i nauki",
      "Mitologia jako fundament kultury",
      "Powstanie podstawowych gatunków literackich",
    ],
    genres: [
      {
        name: "Epos",
        characteristics:
          "Rozbudowany utwór narracyjny opowiadający o losach bohaterów na tle wydarzeń historycznych lub mitologicznych.",
        difficulty: 2,
        examples: ["Iliada", "Odyseja", "Eneida"],
      },
      {
        name: "Tragedia",
        characteristics:
          "Dramat ukazujący konflikt tragiczny prowadzący do nieuchronnej katastrofy bohatera.",
        difficulty: 3,
        examples: ["Antygona", "Król Edyp", "Medea"],
      },
      {
        name: "Komedia",
        characteristics:
          "Utwór o charakterze humorystycznym, często ośmieszający ludzkie wady.",
        difficulty: 1,
        examples: ["Chmury", "Lizystrata", "Żaby"],
      },
      {
        name: "Liryka",
        characteristics:
          "Utwory wyrażające emocje i refleksje podmiotu lirycznego.",
        difficulty: 1,
        examples: ["Ody Horacego", "Elegie"],
      },
    ],
    motifs: [
      {
        name: "Motyw heroizmu",
        meaning:
          "Bohater walczący z przeciwnościami losu w imię wyższych wartości.",
      },
      {
        name: "Motyw tragizmu",
        meaning:
          "Sytuacja bez wyjścia, w której każda decyzja prowadzi do katastrofy.",
      },
      {
        name: "Motyw losu",
        meaning: "Nieuchronność przeznaczenia rządzącego życiem człowieka.",
      },
      {
        name: "Motyw wędrówki",
        meaning: "Podróż jako metafora życia i poznania świata.",
      },
      {
        name: "Motyw bogów",
        meaning: "Interwencja sił nadprzyrodzonych w życie ludzi.",
      },
    ],
    themes: [
      {
        name: "Cnota i moralność",
        description:
          "Refleksja nad tym, czym jest dobre życie i jakie wartości powinien realizować człowiek.",
      },
      {
        name: "Relacja człowieka z losem",
        description: "Zmagania jednostki z nieuchronnym przeznaczeniem.",
      },
      {
        name: "Miłość i przyjaźń",
        description:
          "Ukazanie relacji międzyludzkich jako fundamentu życia społecznego.",
      },
      {
        name: "Władza i odpowiedzialność",
        description:
          "Rozważania nad rolą jednostki w społeczeństwie i konsekwencjami decyzji.",
      },
    ],
    creators: [
      {
        name: "Homer",
        initials: "HO",
        description:
          "Legendarny poeta grecki, autor najstarszych eposów europejskich.",
        nationality: "grecka",
        yearsLived: "VIII w. p.n.e.",
        quote: "Gniew, bogini, opiewaj Achilla, syna Peleusa.",
        works: ["Iliada", "Odyseja"],
      },
      {
        name: "Sofokles",
        initials: "SO",
        description: "Jeden z najwybitniejszych tragediopisarzy greckich.",
        nationality: "grecka",
        yearsLived: "496–406 p.n.e.",
        quote: "Nie ma nic potężniejszego niż człowiek.",
        works: ["Antygona", "Król Edyp"],
      },
      {
        name: "Horacy",
        initials: "HO",
        description: "Rzymski poeta liryczny, twórca zasad klasycyzmu.",
        nationality: "rzymska",
        yearsLived: "65–8 p.n.e.",
        quote: "Carpe diem.",
        works: ["Ody", "Pieśni"],
      },
      {
        name: "Arystoteles",
        initials: "AR",
        description: "Filozof i uczony, twórca teorii tragedii i poetyki.",
        nationality: "grecka",
        yearsLived: "384–322 p.n.e.",
        quote: "Człowiek jest z natury istotą społeczną.",
        works: ["Poetyka", "Metafizyka"],
      },
    ],
    works: [
      {
        title: "Iliada",
        book_id: 6,
        author: "Homer",
        year: "VIII w. p.n.e.",
        significance:
          "Fundamentalny epos ukazujący ideał bohatera i wartości heroiczne.",
        difficulty: 2,
      },
      {
        title: "Antygona",
        book_id: 7,
        author: "Sofokles",
        year: "V w. p.n.e.",
        significance: "Klasyczny przykład tragedii konfliktu moralnego.",
        difficulty: 3,
      },
      {
        title: "Ody",
        author: "Horacy",
        year: "I w. p.n.e.",
        significance: "Wzorzec liryki refleksyjnej i filozoficznej.",
        difficulty: 2,
      },
      {
        title: "Eneida",
        author: "Wergiliusz",
        year: "I w. p.n.e.",
        significance: "Epos narodowy Rzymu, nawiązujący do tradycji greckiej.",
        difficulty: 2,
      },
    ],
    timeline: [
      {
        year: "VIII w. p.n.e.",
        name: "Powstanie eposów Homera",
        description: "Ukształtowanie podstaw literatury europejskiej.",
      },
      {
        year: "V w. p.n.e.",
        name: "Rozkwit tragedii greckiej",
        description: "Działalność Sofoklesa, Eurypidesa i Ajschylosa.",
      },
      {
        year: "IV w. p.n.e.",
        name: "Działalność Arystotelesa",
        description: "Powstanie teorii literatury i filozofii.",
      },
      {
        year: "I w. p.n.e.",
        name: "Rozkwit literatury rzymskiej",
        description: "Twórczość Horacego i Wergiliusza.",
      },
    ],
    historicalContext: [
      {
        name: "Powstanie demokracji ateńskiej",
        description:
          "Rozwój systemu politycznego opartego na udziale obywateli.",
      },
      {
        name: "Podboje Aleksandra Wielkiego",
        description: "Rozprzestrzenienie kultury greckiej na ogromne obszary.",
      },
      {
        name: "Rozwój Imperium Rzymskiego",
        description: "Ekspansja polityczna i kulturowa Rzymu.",
      },
    ],
    culturalContext: [
      "Rozwój teatru greckiego",
      "Znaczenie mitologii",
      "Kult ciała i sportu",
      "Filozofia jako fundament życia",
    ],
    comparisons: [
      {
        withEpoch: "Średniowiecze",
        type: "opozycja",
        differences: [
          "Antropocentryzm vs teocentryzm",
          "Racjonalizm vs wiara",
          "Kult ciała vs asceza",
        ],
        similarities: [
          "Obecność uniwersalnych wartości",
          "Znaczenie moralności",
        ],
      },
      {
        withEpoch: "Renesans",
        type: "następstwo",
        differences: ["Większy nacisk na indywidualizm"],
        similarities: [
          "Antropocentryzm",
          "Inspiracja kulturą antyczną",
          "Renesans rozwija idee antyczne",
        ],
      },
    ],
    exam: {
      typicalQuestions: [
        "Wyjaśnij pojęcie tragizmu na przykładzie Antygony.",
        "Omów ideał bohatera antycznego.",
        "Jaką funkcję pełni mitologia w literaturze antycznej?",
      ],
      keyConcepts: ["Tragizm", "Fatum", "Katarzis", "Antropocentryzm"],
      commonMistakes: [
        "Mylenie epok i kontekstów historycznych",
        "Brak odniesienia do filozofii",
        "Powierzchowna analiza motywów",
      ],
      essayTopics: [
        "Czy człowiek jest panem swojego losu?",
        "Rola konfliktu tragicznego w literaturze antycznej",
        "Znaczenie mitów w kształtowaniu kultury",
      ],
      oralExamTips: [
        "Podawaj konkretne przykłady z tekstów",
        "Odwołuj się do filozofii",
        "Buduj logiczną argumentację",
      ],
      introStarters: [
        "Antyk stanowi fundament kultury europejskiej, w którym...",
        "Rozważając problem, warto odwołać się do literatury antycznej...",
        "Już w starożytności podejmowano refleksję nad...",
      ],
      conclusionStarters: [
        "Podsumowując, można stwierdzić, że...",
        "Analiza prowadzi do wniosku, iż...",
        "Ostatecznie należy podkreślić, że...",
      ],
      quickFacts: [
        "Antyk to kolebka literatury europejskiej",
        "Powstały podstawowe gatunki literackie",
        "Mitologia była fundamentem kultury",
        "Filozofia kształtowała światopogląd",
      ],
    },
  },
  {
    id: 2,
    name: "Średniowiecze",
    timeframe: "V–XV wiek",
    description:
      "Epoka obejmująca okres od upadku Cesarstwa Zachodniorzymskiego do początku renesansu. Zdominowana przez teocentryzm, podporządkowanie życia Bogu oraz rozwój kultury chrześcijańskiej.",
    moodTags: [
      "Teocentryzm",
      "Asceza",
      "Vanitas",
      "Dualizm świata",
      "Uniwersalizm chrześcijański",
    ],
    funFact:
      "W średniowieczu większość dzieł była anonimowa, ponieważ twórcy uważali, że tworzą na chwałę Boga, a nie dla własnej sławy.",
    philosophy: ["Augustynizm", "Tomizm", "Scholastyka"],
    worldview:
      "Świat postrzegany jako hierarchiczny, podporządkowany Bogu, z wyraźnym podziałem na sacrum i profanum.",
    keyIdeas: [
      {
        name: "Teocentryzm",
        description: "Bóg jako centrum świata i życia człowieka.",
      },
      {
        name: "Asceza",
        description:
          "Wyrzeczenie się dóbr doczesnych w imię wartości duchowych.",
      },
      {
        name: "Uniwersalizm",
        description:
          "Jedność kultury europejskiej oparta na łacinie i religii chrześcijańskiej.",
      },
      {
        name: "Dualizm",
        description: "Podział rzeczywistości na duchową i materialną.",
      },
      {
        name: "Memento mori",
        description: "Pamięć o śmierci jako element życia duchowego.",
      },
    ],
    characteristics: [
      "Dominacja religii w życiu społecznym i kulturze",
      "Anonimowość twórców",
      "Dydaktyczny charakter literatury",
      "Symbolizm i alegoryczność",
      "Dwujęzyczność: łacina i języki narodowe",
    ],
    genres: [
      {
        name: "Hagiografia",
        characteristics:
          "Żywoty świętych ukazujące wzorce ascetyczne i moralne.",
        difficulty: 1,
        examples: [
          "Legenda o św. Aleksym",
          "Żywot św. Franciszka",
          "Żywot św. Wojciecha",
        ],
      },
      {
        name: "Kronika",
        characteristics:
          "Utwory historyczne opisujące dzieje państw i władców.",
        difficulty: 2,
        examples: [
          "Kronika polska Galla Anonima",
          "Kronika Wincentego Kadłubka",
          "Roczniki Jana Długosza",
        ],
      },
      {
        name: "Liryka religijna",
        characteristics: "Pieśni i hymny o charakterze modlitewnym.",
        difficulty: 1,
        examples: ["Bogurodzica", "Lament świętokrzyski", "Dies irae"],
      },
      {
        name: "Epos rycerski",
        characteristics:
          "Utwory opowiadające o czynach bohaterów i kodeksie rycerskim.",
        difficulty: 2,
        examples: [
          "Pieśń o Rolandzie",
          "Pieśń o Nibelungach",
          "Dzieje Tristana i Izoldy",
        ],
      },
    ],
    motifs: [
      {
        name: "Danse macabre",
        meaning:
          "Motyw tańca śmierci ukazujący równość wszystkich wobec śmierci.",
      },
      {
        name: "Asceta",
        meaning: "Postać wyrzekająca się dóbr doczesnych dla zbawienia.",
      },
      {
        name: "Rycerz",
        meaning: "Wzorzec honoru, odwagi i wierności wartościom.",
      },
      {
        name: "Matka Boska bolejąca",
        meaning: "Motyw cierpienia matki po stracie syna.",
      },
      { name: "Vanitas", meaning: "Marność życia doczesnego." },
    ],
    themes: [
      {
        name: "Śmierć",
        description:
          "Nieunikniony element życia, często przedstawiany jako wyrównujący losy ludzi.",
      },
      { name: "Religia", description: "Centralny temat życia i twórczości." },
      {
        name: "Wzorce osobowe",
        description: "Asceta, rycerz, władca jako modele do naśladowania.",
      },
      {
        name: "Cierpienie",
        description: "Droga do zbawienia i zbliżenia się do Boga.",
      },
      { name: "Miłość", description: "Zarówno duchowa, jak i dworska." },
    ],
    creators: [
      {
        name: "św. Augustyn",
        initials: "ŚA",
        description: "Filozof i teolog, twórca augustynizmu.",
        nationality: "rzymska",
        yearsLived: "354–430",
        quote: "Niespokojne jest serce nasze, dopóki nie spocznie w Tobie.",
        works: ["Wyznania", "O państwie Bożym", "O Trójcy Świętej"],
      },
      {
        name: "św. Tomasz z Akwinu",
        initials: "TA",
        description: "Filozof i teolog, twórca tomizmu.",
        nationality: "włoska",
        yearsLived: "1225–1274",
        quote: "Wiara i rozum nie są sprzeczne.",
        works: [
          "Summa teologiczna",
          "Summa contra Gentiles",
          "Komentarze do Arystotelesa",
        ],
      },
      {
        name: "Gall Anonim",
        initials: "GA",
        description: "Pierwszy kronikarz polski.",
        nationality: "nieznana",
        yearsLived: "XI/XII w.",
        quote: "Nie dla własnej chwały piszę te dzieje.",
        works: [
          "Kronika polska",
          "Gesta principum Polonorum",
          "Opowieści o Piastach",
        ],
      },
      {
        name: "Dante Alighieri",
        initials: "DA",
        description:
          "Autor Boskiej komedii, łączącej średniowiecze z renesansem.",
        nationality: "włoska",
        yearsLived: "1265–1321",
        quote: "Porzućcie wszelką nadzieję, wy, którzy tu wchodzicie.",
        works: ["Boska komedia", "Nowe życie", "Monarchia"],
      },
    ],
    works: [
      {
        title: "Bogurodzica",
        author: "anonim",
        year: "XIII w.",
        significance: "Najstarsza polska pieśń religijna.",
        difficulty: 1,
      },
      {
        title: "Legenda o św. Aleksym",
        author: "anonim",
        year: "XV w.",
        significance: "Wzorzec ascety.",
        difficulty: 1,
      },
      {
        title: "Pieśń o Rolandzie",
        book_id: 10,
        author: "anonim",
        year: "XI w.",
        significance: "Wzorzec rycerza.",
        difficulty: 2,
      },
      {
        title: "Boska komedia",
        author: "Dante Alighieri",
        year: "XIV w.",
        significance: "Synteza światopoglądu średniowiecznego.",
        difficulty: 3,
      },
    ],
    timeline: [
      {
        year: "476",
        name: "Upadek Cesarstwa Zachodniorzymskiego",
        description: "Symboliczny początek epoki.",
      },
      {
        year: "966",
        name: "Chrzest Polski",
        description: "Początek chrześcijaństwa w Polsce.",
      },
      {
        year: "1096",
        name: "Pierwsza krucjata",
        description: "Wyprawy krzyżowe do Ziemi Świętej.",
      },
      {
        year: "1450",
        name: "Wynalezienie druku",
        description: "Przełom w kulturze i komunikacji.",
      },
    ],
    historicalContext: [
      {
        name: "Feudalizm",
        description:
          "System społeczno-polityczny oparty na zależnościach lennych.",
      },
      {
        name: "Dominacja Kościoła",
        description: "Kościół jako główna instytucja kulturotwórcza.",
      },
      { name: "Krucjaty", description: "Wyprawy religijne do Ziemi Świętej." },
    ],
    culturalContext: [
      "Rozwój uniwersytetów",
      "Architektura romańska i gotycka",
      "Rozkwit sztuki sakralnej",
      "Łacina jako język kultury",
    ],
    comparisons: [
      {
        withEpoch: "Antyk",
        type: "opozycja",
        differences: [
          "Antropocentryzm vs teocentryzm",
          "Racjonalizm vs wiara",
          "Indywidualizm vs anonimowość",
        ],
        similarities: [
          "Obecność filozofii",
          "Ważna rola edukacji",
          "Rozwój literatury",
        ],
      },
      {
        withEpoch: "Renesans",
        type: "następstwo",
        differences: [
          "Teocentryzm vs humanizm",
          "Asceza vs afirmacja życia",
          "Symbolizm vs realizm",
        ],
        similarities: [
          "Inspiracje antykiem",
          "Znaczenie edukacji",
          "Rozwój kultury",
        ],
      },
    ],
    exam: {
      typicalQuestions: [
        "Wyjaśnij pojęcie teocentryzmu.",
        "Scharakteryzuj wzorce osobowe średniowiecza.",
        "Omów motyw śmierci w literaturze epoki.",
      ],
      keyConcepts: [
        "Teocentryzm",
        "Asceza",
        "Uniwersalizm",
        "Vanitas",
        "Dualizm",
      ],
      commonMistakes: [
        "Mylenie średniowiecza z renesansem",
        "Brak przykładów literackich",
        "Niepoprawne rozumienie ascezy",
      ],
      essayTopics: [
        "Czy średniowiecze było epoką ciemnoty?",
        "Motyw śmierci w literaturze średniowiecznej.",
        "Wzorce osobowe jako narzędzie dydaktyczne.",
      ],
      oralExamTips: [
        "Podawaj konkretne przykłady utworów.",
        "Używaj terminologii epoki.",
        "Odwołuj się do kontekstów historycznych.",
      ],
      introStarters: [
        "Średniowiecze to epoka, która w sposób szczególny podporządkowała życie człowieka Bogu.",
        "Rozważając problematykę średniowiecza, należy zwrócić uwagę na dominację religii.",
        "Epoka średniowiecza przynosi charakterystyczny sposób postrzegania świata jako podporządkowanego Bogu.",
      ],
      conclusionStarters: [
        "Podsumowując, średniowiecze kształtowało człowieka poprzez religię i wzorce osobowe.",
        "Można zatem stwierdzić, że epoka ta miała ogromny wpływ na rozwój kultury europejskiej.",
        "Wnioskując, średniowiecze nie było epoką zacofania, lecz głębokiej refleksji duchowej.",
      ],
      quickFacts: [
        "Dominacja Kościoła",
        "Anonimowość twórców",
        "Łacina jako język nauki",
        "Motyw śmierci wszechobecny",
      ],
    },
  },
  {
    id: 3,
    name: "Renesans",
    timeframe: "XV–XVI wiek",
    description:
      "Epoka odrodzenia, w której nastąpił powrót do ideałów antyku, rozwój humanizmu oraz zainteresowanie człowiekiem jako centrum świata. Renesans przyniósł rozkwit sztuki, nauki i literatury, a także przełom w myśleniu o jednostce i jej miejscu w świecie.",
    moodTags: [
      "Harmonia",
      "Człowiek w centrum",
      "Optymizm poznawczy",
      "Równowaga ducha i ciała",
      "Powrót do antyku",
    ],
    funFact:
      "Leonardo da Vinci był symbolem 'człowieka renesansu' – łączył talent artystyczny z naukowym.",
    philosophy: [
      "Humanizm",
      "Antropocentryzm",
      "Stoicyzm",
      "Epikureizm",
      "Reformacja",
    ],
    worldview:
      "Świat postrzegany jako uporządkowany i poznawalny, a człowiek jako istota zdolna do rozwoju, szczęścia i doskonałości poprzez rozum i cnotę.",
    keyIdeas: [
      {
        name: "Humanizm",
        description:
          "Koncepcja stawiająca człowieka w centrum zainteresowania, podkreślająca jego godność, rozum i możliwości.",
      },
      {
        name: "Antropocentryzm",
        description:
          "Pogląd uznający człowieka za najważniejszy element świata, w przeciwieństwie do średniowiecznego teocentryzmu.",
      },
      {
        name: "Harmonia",
        description:
          "Idea równowagi między ciałem a duchem, naturą a kulturą, życiem doczesnym a wartościami duchowymi.",
      },
      {
        name: "Imitatio antiquorum",
        description:
          "Naśladowanie wzorców antycznych w literaturze, sztuce i filozofii.",
      },
      {
        name: "Reformacja",
        description:
          "Ruch religijny dążący do odnowy Kościoła, mający ogromny wpływ na kulturę i literaturę epoki.",
      },
    ],
    characteristics: [
      "Powrót do wzorców antycznych",
      "Rozwój języków narodowych",
      "Zainteresowanie naturą i nauką",
      "Racjonalizm i optymizm poznawczy",
      "Indywidualizm jednostki",
    ],
    genres: [
      {
        name: "Fraszka",
        characteristics:
          "Krótki, często żartobliwy utwór o charakterze refleksyjnym lub satyrycznym.",
        difficulty: 1,
        examples: ["Na lipę", "Na zdrowie", "O żywocie ludzkim"],
      },
      {
        name: "Pieśń",
        characteristics:
          "Utwór liryczny o podniosłym charakterze, poruszający tematy filozoficzne i moralne.",
        difficulty: 2,
        examples: ["Pieśń IX", "Pieśń XIV", "Pieśń o cnocie"],
      },
      {
        name: "Tren",
        characteristics:
          "Utwór żałobny wyrażający ból po stracie bliskiej osoby.",
        difficulty: 3,
        examples: ["Tren VIII", "Tren IX", "Tren XIX"],
      },
      {
        name: "Dialog",
        characteristics:
          "Forma literacka oparta na rozmowie, często wykorzystywana do przekazywania idei humanistycznych.",
        difficulty: 2,
        examples: [
          "Krótka rozprawa między trzema osobami",
          "Rozmowa Mistrza Polikarpa ze Śmiercią (reinterpretacje)",
          "Dialogi filozoficzne",
        ],
      },
    ],
    motifs: [
      {
        name: "Vanitas",
        meaning: "Motyw przemijania i kruchości życia ludzkiego.",
      },
      {
        name: "Arkadia",
        meaning: "Wyidealizowany obraz życia w zgodzie z naturą.",
      },
      {
        name: "Fortuna",
        meaning: "Zmienność losu i nieprzewidywalność życia.",
      },
      {
        name: "Cnota",
        meaning: "Najwyższa wartość moralna prowadząca do szczęścia.",
      },
      {
        name: "Natura",
        meaning: "Źródło harmonii i inspiracji dla człowieka.",
      },
    ],
    themes: [
      {
        name: "Człowiek i jego godność",
        description: "Ukazanie człowieka jako istoty rozumnej i wartościowej.",
      },
      {
        name: "Życie i przemijanie",
        description:
          "Refleksja nad kruchością życia i nieuchronnością śmierci.",
      },
      {
        name: "Harmonia świata",
        description: "Przekonanie o porządku i pięknie świata.",
      },
      {
        name: "Relacja z Bogiem",
        description:
          "Nowe spojrzenie na religię, bardziej osobiste i refleksyjne.",
      },
      {
        name: "Edukacja i rozwój",
        description: "Znaczenie nauki i samodoskonalenia.",
      },
    ],
    creators: [
      {
        name: "Jan Kochanowski",
        initials: "JK",
        description:
          "Najwybitniejszy poeta polskiego renesansu, twórca nowoczesnej poezji polskiej.",
        nationality: "polska",
        yearsLived: "1530–1584",
        quote:
          "Szlachetne zdrowie, nikt się nie dowie, jako smakujesz, aż się zepsujesz.",
        works: ["Treny", "Fraszki", "Pieśni"],
      },
      {
        name: "Mikołaj Rej",
        initials: "MR",
        description:
          "Ojciec literatury polskiej, propagator języka polskiego w literaturze.",
        nationality: "polska",
        yearsLived: "1505–1569",
        quote:
          "A niechaj narodowie wżdy postronni znają, iż Polacy nie gęsi, iż swój język mają.",
        works: [
          "Krótka rozprawa między trzema osobami",
          "Żywot człowieka poczciwego",
        ],
      },
      {
        name: "William Shakespeare",
        initials: "WS",
        description:
          "Angielski dramaturg i poeta, autor dramatów o uniwersalnej tematyce.",
        nationality: "angielska",
        yearsLived: "1564–1616",
        quote: "Być albo nie być, oto jest pytanie.",
        works: ["Hamlet", "Makbet", "Romeo i Julia"],
      },
      {
        name: "Francesco Petrarca",
        initials: "FP",
        description: "Włoski poeta, prekursor humanizmu i twórca sonetu.",
        nationality: "włoska",
        yearsLived: "1304–1374",
        quote: "Człowiek rodzi się dla chwały i wiedzy.",
        works: ["Sonety do Laury", "Listy"],
      },
    ],
    works: [
      {
        title: "Treny",
        book_id: 11,
        author: "Jan Kochanowski",
        year: "1580",
        significance: "Cykl utworów ukazujących kryzys światopoglądowy poety.",
        difficulty: 3,
      },
      {
        title: "Odprawa posłów greckich",
        author: "Jan Kochanowski",
        year: "1578",
        significance:
          "Pierwsza polska tragedia renesansowa o tematyce patriotycznej.",
        difficulty: 2,
      },
      {
        title: "Krótka rozprawa między trzema osobami",
        author: "Mikołaj Rej",
        year: "1543",
        significance: "Krytyka społeczna i religijna epoki.",
        difficulty: 2,
      },
      {
        title: "Hamlet",
        author: "William Shakespeare",
        year: "1603",
        significance: "Dramat o naturze człowieka i moralnych dylematach.",
        difficulty: 3,
      },
    ],
    timeline: [
      {
        year: "1450",
        name: "Wynalezienie druku",
        description: "Rozpowszechnienie książek i wiedzy.",
      },
      {
        year: "1492",
        name: "Odkrycie Ameryki",
        description: "Początek nowej epoki geograficznej i kulturowej.",
      },
      {
        year: "1517",
        name: "Początek reformacji",
        description: "Marcin Luter ogłasza swoje tezy.",
      },
      {
        year: "1573",
        name: "Konfederacja warszawska",
        description: "Gwarancja tolerancji religijnej w Polsce.",
      },
    ],
    historicalContext: [
      {
        name: "Rozwój drukarstwa",
        description: "Umożliwił szybkie rozpowszechnianie idei.",
      },
      {
        name: "Reformacja",
        description: "Podziały religijne i rozwój nowych nurtów.",
      },
      {
        name: "Wielkie odkrycia geograficzne",
        description: "Poszerzenie horyzontów poznawczych.",
      },
    ],
    culturalContext: [
      "Rozkwit sztuki i architektury",
      "Rozwój edukacji humanistycznej",
      "Powstanie uniwersytetów",
      "Mecenat artystyczny",
    ],
    comparisons: [
      {
        withEpoch: "Średniowiecze",
        type: "opozycja",
        differences: [
          "Teocentryzm vs antropocentryzm",
          "Asceza vs afirmacja życia",
          "Anonimowość vs indywidualizm",
        ],
        similarities: ["Obecność religii", "Motywy moralne"],
      },
      {
        withEpoch: "Barok",
        type: "następstwo",
        differences: [
          "Harmonia vs niepokój",
          "Racjonalizm vs emocjonalność",
          "Spokój vs dramatyzm",
        ],
        similarities: ["Refleksja nad życiem", "Obecność religii"],
      },
      {
        withEpoch: "Antyk",
        type: "równoległa",
        differences: [
          "Nowy kontekst historyczny",
          "Chrześcijaństwo vs politeizm",
        ],
        similarities: ["Harmonia", "Cnota", "Zainteresowanie człowiekiem"],
      },
    ],
    exam: {
      typicalQuestions: [
        "Wyjaśnij pojęcie humanizmu.",
        "Omów filozofię życia Jana Kochanowskiego.",
        "Scharakteryzuj ideał człowieka renesansu.",
      ],
      keyConcepts: ["Humanizm", "Antropocentryzm", "Stoicyzm", "Epikureizm"],
      commonMistakes: [
        "Mylenie renesansu z barokiem",
        "Brak odniesień do antyku",
        "Uproszczone rozumienie humanizmu",
      ],
      essayTopics: [
        "Człowiek wobec cierpienia na przykładzie Trenów.",
        "Ideał życia szczęśliwego w renesansie.",
        "Rola antyku w kulturze renesansu.",
      ],
      oralExamTips: [
        "Podawaj konkretne przykłady utworów",
        "Odwołuj się do filozofii epoki",
        "Buduj logiczną wypowiedź",
      ],
      introStarters: [
        "Renesans to epoka przełomu, w której człowiek znalazł się w centrum zainteresowania.",
        "Odrodzenie przyniosło nową wizję świata i człowieka.",
        "Epoka renesansu stanowi wyraźne odejście od średniowiecznego światopoglądu.",
      ],
      conclusionStarters: [
        "Podsumowując, renesans ukazuje człowieka jako istotę zdolną do harmonii i rozwoju.",
        "Ostatecznie można stwierdzić, że epoka ta była fundamentem nowoczesnej kultury.",
        "Renesans pozostawił trwały ślad w literaturze i filozofii europejskiej.",
      ],
      quickFacts: [
        "Renesans oznacza 'odrodzenie'.",
        "Epoka nawiązywała do antyku.",
        "Rozwój drukarstwa przyspieszył szerzenie idei.",
        "Języki narodowe zyskały znaczenie.",
      ],
    },
  },
  {
    id: 4,
    name: "Barok",
    timeframe: "koniec XVI wieku – połowa XVIII wieku",
    description:
      "Epoka kontrastów, niepokoju i przepychu, w której sztuka odzwierciedlała napięcia religijne, polityczne i egzystencjalne. Barok łączył skrajności: duchowość i zmysłowość, pesymizm i fascynację życiem.",
    moodTags: [
      "Niepokój egzystencjalny",
      "Przemijanie",
      "Kontrast",
      "Teatralność",
      "Przepych",
    ],
    funFact:
      "Barokowa fascynacja iluzją doprowadziła do rozwoju technik trompe-l'oeil, które 'oszukiwały oko' widza.",
    philosophy: [
      "Marinizm – kult formy i zaskoczenia",
      "Kontrreformacja – obrona katolicyzmu",
      "Sceptycyzm – niepewność poznania",
      "Stoicyzm – opanowanie wobec losu",
    ],
    worldview:
      "Człowiek jako istota rozdarta między doczesnością a wiecznością, świadoma przemijania i kruchości życia.",
    keyIdeas: [
      {
        name: "Vanitas",
        description:
          "Motyw marności życia i przemijania, przypominający o nietrwałości dóbr doczesnych.",
      },
      {
        name: "Konceptyzm",
        description:
          "Budowanie utworu wokół zaskakującego pomysłu, gry intelektualnej i paradoksu.",
      },
      {
        name: "Dualizm",
        description:
          "Postrzeganie świata jako zbioru sprzeczności: ciało–dusza, życie–śmierć.",
      },
      {
        name: "Teatralizacja życia",
        description:
          "Ukazywanie świata jako sceny, na której człowiek odgrywa rolę.",
      },
    ],
    characteristics: [
      "Bogactwo środków stylistycznych i ornamentyka",
      "Kontrasty i paradoksy",
      "Dynamiczność i ekspresja",
      "Religijność i mistycyzm",
      "Pesymizm i refleksja nad śmiercią",
    ],
    genres: [
      {
        name: "Sonet",
        characteristics:
          "Utwór liryczny o kunsztownej budowie, często refleksyjny i filozoficzny.",
        difficulty: 2,
        examples: [
          "Sonety metafizyczne Morsztyna",
          "Sonety Sępa-Szarzyńskiego",
          "Sonety religijne",
        ],
      },
      {
        name: "Kazanie",
        characteristics:
          "Forma retoryczna o charakterze dydaktycznym i religijnym.",
        difficulty: 1,
        examples: ["Kazania Skargi", "Kazania moralne", "Kazania polityczne"],
      },
      {
        name: "Pamiętnik",
        characteristics: "Utwór dokumentujący wydarzenia i refleksje autora.",
        difficulty: 1,
        examples: [
          "Pamiętniki Paska",
          "Relacje szlacheckie",
          "Dzienniki podróży",
        ],
      },
    ],
    motifs: [
      {
        name: "Vanitas",
        meaning: "Przemijanie życia i marność dóbr doczesnych.",
      },
      {
        name: "Memento mori",
        meaning: "Przypomnienie o nieuchronności śmierci.",
      },
      {
        name: "Teatr świata",
        meaning: "Świat jako scena, na której człowiek odgrywa role.",
      },
      {
        name: "Labirynt",
        meaning: "Symbol zagubienia człowieka w świecie.",
      },
    ],
    themes: [
      {
        name: "Przemijanie",
        description:
          "Refleksja nad kruchością życia i nieuchronnością śmierci.",
      },
      {
        name: "Religia",
        description: "Silna obecność tematów religijnych i mistycznych.",
      },
      {
        name: "Miłość",
        description: "Ukazywana jako zmysłowa, ale też ulotna i nietrwała.",
      },
      {
        name: "Człowiek i Bóg",
        description: "Relacja między jednostką a transcendencją.",
      },
    ],
    creators: [
      {
        name: "Jan Andrzej Morsztyn",
        initials: "JM",
        description: "Poeta dworski, mistrz konceptyzmu i marinizmu.",
        nationality: "polska",
        yearsLived: "1621–1693",
        quote: "Niestatek świata jest największą stałością.",
        works: ["Do trupa", "Niestatek", "Na kwiatki"],
      },
      {
        name: "Daniel Naborowski",
        initials: "DN",
        description:
          "Poeta refleksyjny, łączący stoicyzm z barokową metafizyką.",
        nationality: "polska",
        yearsLived: "1573–1640",
        quote: "Krótkość żywota.",
        works: ["Krótkość żywota", "Marność", "Cnota grunt wszystkiemu"],
      },
      {
        name: "Jan Chryzostom Pasek",
        initials: "JP",
        description: "Autor pamiętników ukazujących życie szlachty.",
        nationality: "polska",
        yearsLived: "1636–1701",
        quote: "Takie były czasy i obyczaje.",
        works: ["Pamiętniki", "Relacje wojenne", "Opisy obyczajów"],
      },
    ],
    works: [
      {
        title: "Do trupa",
        author: "Jan Andrzej Morsztyn",
        year: "ok. 1650",
        significance: "Przykład konceptyzmu i paradoksu barokowego.",
        difficulty: 2,
      },
      {
        title: "Krótkość żywota",
        author: "Daniel Naborowski",
        year: "ok. 1600",
        significance: "Refleksja nad przemijaniem życia.",
        difficulty: 2,
      },
      {
        title: "Pamiętniki",
        author: "Jan Chryzostom Pasek",
        year: "XVII w.",
        significance: "Źródło wiedzy o życiu szlachty.",
        difficulty: 1,
      },
    ],
    timeline: [
      {
        year: "1563",
        name: "Sobór trydencki",
        description: "Umocnienie kontrreformacji.",
      },
      {
        year: "1648",
        name: "Powstanie Chmielnickiego",
        description: "Konflikty osłabiające Rzeczpospolitą.",
      },
      {
        year: "1683",
        name: "Bitwa pod Wiedniem",
        description: "Zwycięstwo Jana III Sobieskiego nad Turkami.",
      },
    ],
    historicalContext: [
      {
        name: "Kontrreformacja",
        description: "Reakcja Kościoła katolickiego na reformację.",
      },
      {
        name: "Wojny XVII wieku",
        description: "Liczne konflikty osłabiające państwo.",
      },
      {
        name: "Kryzys Rzeczypospolitej",
        description: "Upadek polityczny i gospodarczy.",
      },
    ],
    culturalContext: [
      "Rozwój sztuki sakralnej",
      "Teatralizacja życia publicznego",
      "Wpływy włoskie i hiszpańskie",
      "Rozkwit retoryki",
    ],
    comparisons: [
      {
        withEpoch: "Renesans",
        type: "opozycja",
        differences: [
          "Renesans – harmonia, Barok – kontrast",
          "Renesans – optymizm, Barok – pesymizm",
          "Renesans – antropocentryzm, Barok – teocentryzm",
        ],
        similarities: [
          "Zainteresowanie człowiekiem",
          "Rozwój literatury",
          "Inspiracje antykiem",
        ],
      },
      {
        withEpoch: "Oświecenie",
        type: "następstwo",
        differences: [
          "Barok – emocje, Oświecenie – rozum",
          "Barok – religijność, Oświecenie – racjonalizm",
          "Barok – chaos, Oświecenie – porządek",
        ],
        similarities: [
          "Refleksja nad człowiekiem",
          "Rozwój filozofii",
          "Znaczenie edukacji",
        ],
      },
    ],
    exam: {
      typicalQuestions: [
        "Wyjaśnij motyw vanitas w literaturze baroku.",
        "Omów cechy konceptyzmu na przykładzie utworów.",
        "Scharakteryzuj obraz człowieka w baroku.",
      ],
      keyConcepts: ["vanitas", "konceptyzm", "teatralizacja", "dualizm"],
      commonMistakes: [
        "Mylenie baroku z renesansem",
        "Brak analizy środków stylistycznych",
        "Pomijanie kontekstu religijnego",
      ],
      essayTopics: [
        "Człowiek wobec przemijania w literaturze baroku.",
        "Rola kontrastu w poezji barokowej.",
        "Czy barok to epoka pesymizmu?",
      ],
      oralExamTips: [
        "Odwołuj się do konkretnych utworów",
        "Podkreśl kontekst historyczny",
        "Analizuj środki stylistyczne",
      ],
      introStarters: [
        "Barok to epoka pełna sprzeczności, w której...",
        "Rozważając literaturę baroku, warto zauważyć, że...",
        "Epoka baroku ukazuje człowieka jako istotę...",
      ],
      conclusionStarters: [
        "Podsumowując, barok ukazuje świat jako...",
        "Ostatecznie można stwierdzić, że literatura baroku...",
        "Analiza prowadzi do wniosku, że człowiek baroku...",
      ],
      quickFacts: [
        "Barok to epoka kontrastów",
        "Dominował motyw vanitas",
        "Rozwinęła się sztuka sakralna",
        "Literatura była silnie związana z religią",
      ],
    },
  },
  {
    id: 5,
    name: "Oświecenie",
    timeframe: "XVIII wiek (ok. 1680–1820)",
    description:
      "Epoka rozumu, nauki i krytycznego myślenia, w której dominowała wiara w postęp, edukację oraz racjonalne poznanie świata. Oświecenie dążyło do reform społecznych i politycznych, promując idee wolności, tolerancji i praw człowieka.",
    moodTags: [
      "Racjonalizm",
      "Wiara w postęp",
      "Krytycyzm",
      "Użyteczność",
      "Edukacja",
    ],
    funFact:
      "W Polsce okres Oświecenia nazywany jest często 'wiekiem stanisławowskim' od panowania Stanisława Augusta Poniatowskiego.",
    philosophy: [
      "Empiryzm Johna Locke'a – poznanie przez doświadczenie",
      "Racjonalizm Kartezjusza – rozum jako źródło wiedzy",
      "Deizm – wiara w Boga jako stwórcę, ale bez ingerencji w świat",
      "Utylitaryzm – działanie dla dobra ogółu",
      "Krytycyzm Immanuela Kanta – granice poznania ludzkiego",
    ],
    worldview:
      "Świat postrzegany jako uporządkowany i poznawalny dzięki rozumowi. Człowiek jako istota zdolna do doskonalenia siebie i społeczeństwa poprzez edukację i naukę.",
    keyIdeas: [
      {
        name: "Racjonalizm",
        description:
          "Przekonanie, że rozum jest najważniejszym narzędziem poznania i oceny rzeczywistości.",
      },
      {
        name: "Empiryzm",
        description: "Pogląd, że wiedza pochodzi z doświadczenia zmysłowego.",
      },
      {
        name: "Utylitaryzm",
        description:
          "Dążenie do działań przynoszących największe dobro dla największej liczby ludzi.",
      },
      {
        name: "Laicyzacja",
        description: "Oddzielenie życia społecznego i politycznego od religii.",
      },
      {
        name: "Tolerancja",
        description:
          "Akceptacja różnorodności poglądów, religii i stylów życia.",
      },
    ],
    characteristics: [
      "Kult rozumu i nauki",
      "Dążenie do reform społecznych",
      "Rozwój edukacji i instytucji naukowych",
      "Krytyka przesądów i fanatyzmu religijnego",
      "Literatura dydaktyczna i moralizatorska",
    ],
    genres: [
      {
        name: "Bajka",
        characteristics:
          "Krótki utwór alegoryczny z morałem, często z udziałem zwierząt.",
        difficulty: 1,
        examples: [
          "Bajki Ignacego Krasickiego",
          "Lis i kruk",
          "Jagnię i wilcy",
        ],
      },
      {
        name: "Satyra",
        characteristics:
          "Utwór ośmieszający wady społeczne i ludzkie, często ironiczny.",
        difficulty: 2,
        examples: ["Pijaństwo", "Do króla", "Żona modna"],
      },
      {
        name: "Poemat heroikomiczny",
        characteristics:
          "Utwór parodiujący epos, łączący styl wysoki z błahą tematyką.",
        difficulty: 3,
        examples: ["Monachomachia", "Myszeida", "Antymonachomachia"],
      },
      {
        name: "Komedia",
        characteristics:
          "Utwór dramatyczny ukazujący wady społeczne w sposób humorystyczny.",
        difficulty: 2,
        examples: ["Powrót posła", "Fircyk w zalotach", "Szkoła żon"],
      },
    ],
    motifs: [
      {
        name: "Rozum",
        meaning:
          "Symbol nadrzędnej wartości w poznaniu świata i organizacji życia społecznego.",
      },
      {
        name: "Edukacja",
        meaning: "Droga do poprawy społeczeństwa i rozwoju jednostki.",
      },
      {
        name: "Społeczeństwo",
        meaning: "Obiekt analizy i krytyki w celu jego ulepszenia.",
      },
      {
        name: "Władza",
        meaning:
          "Temat refleksji nad odpowiedzialnością i reformami politycznymi.",
      },
    ],
    themes: [
      {
        name: "Krytyka wad społecznych",
        description:
          "Ukazywanie i ośmieszanie negatywnych zachowań w celu ich eliminacji.",
      },
      {
        name: "Reformy państwa",
        description:
          "Postulaty zmian politycznych i społecznych dla dobra narodu.",
      },
      {
        name: "Rola edukacji",
        description: "Znaczenie nauki i wychowania w kształtowaniu obywateli.",
      },
      {
        name: "Tolerancja religijna",
        description: "Promowanie pokojowego współistnienia różnych wyznań.",
      },
    ],
    creators: [
      {
        name: "Ignacy Krasicki",
        initials: "IK",
        description:
          "Najwybitniejszy polski pisarz oświecenia, autor bajek i satyr.",
        nationality: "polska",
        yearsLived: "1735–1801",
        quote: "Prawdziwa cnota krytyk się nie boi.",
        works: [
          "Bajki",
          "Monachomachia",
          "Mikołaja Doświadczyńskiego przypadki",
        ],
      },
      {
        name: "Stanisław Staszic",
        initials: "SS",
        description:
          "Publicysta i działacz polityczny, zwolennik reform społecznych.",
        nationality: "polska",
        yearsLived: "1755–1826",
        quote: "Być narodowi użytecznym.",
        works: [
          "Uwagi nad życiem Jana Zamoyskiego",
          "Przestrogi dla Polski",
          "Ród ludzki",
        ],
      },
      {
        name: "Julian Ursyn Niemcewicz",
        initials: "JN",
        description:
          "Pisarz i polityk, autor komedii i utworów patriotycznych.",
        nationality: "polska",
        yearsLived: "1758–1841",
        quote: "Naród bez historii błądzi jak człowiek bez pamięci.",
        works: ["Powrót posła", "Śpiewy historyczne", "Kazimierz Wielki"],
      },
    ],
    works: [
      {
        title: "Monachomachia",
        author: "Ignacy Krasicki",
        year: "1778",
        significance:
          "Satyra na życie zakonne i krytyka zacofania duchowieństwa.",
        difficulty: 2,
      },
      {
        title: "Powrót posła",
        author: "Julian Ursyn Niemcewicz",
        year: "1791",
        significance: "Komedia polityczna wspierająca reformy Sejmu Wielkiego.",
        difficulty: 2,
      },
      {
        title: "Przestrogi dla Polski",
        author: "Stanisław Staszic",
        year: "1790",
        significance:
          "Analiza sytuacji politycznej i społecznej Polski oraz postulaty reform.",
        difficulty: 3,
      },
    ],
    timeline: [
      {
        year: "1687",
        name: "Publikacja 'Principia'",
        description:
          "Isaac Newton publikuje dzieło fundamentujące nowoczesną naukę.",
      },
      {
        year: "1773",
        name: "Komisja Edukacji Narodowej",
        description: "Pierwsze w Europie ministerstwo edukacji w Polsce.",
      },
      {
        year: "1789",
        name: "Rewolucja francuska",
        description: "Wydarzenie promujące idee wolności i równości.",
      },
      {
        year: "1791",
        name: "Konstytucja 3 maja",
        description: "Pierwsza nowoczesna konstytucja w Europie.",
      },
    ],
    historicalContext: [
      {
        name: "Rewolucja francuska",
        description:
          "Przełom polityczny i społeczny oparty na ideach oświecenia.",
      },
      {
        name: "Rozbiory Polski",
        description: "Upadek państwa polskiego i potrzeba reform.",
      },
      {
        name: "Rozwój nauki",
        description:
          "Postęp technologiczny i naukowy wpływający na światopogląd.",
      },
    ],
    culturalContext: [
      "Rozwój salonów literackich",
      "Powstanie encyklopedii",
      "Popularność czasopism i gazet",
      "Rozwój teatru publicznego",
    ],
    comparisons: [
      {
        withEpoch: "Barok",
        type: "opozycja",
        differences: [
          "Barok – emocjonalność, Oświecenie – racjonalizm",
          "Barok – religijność, Oświecenie – laicyzacja",
          "Barok – chaos, Oświecenie – porządek",
        ],
        similarities: [
          "Obie epoki podejmują refleksję nad człowiekiem",
          "Obecność literatury dydaktycznej",
          "Zainteresowanie moralnością",
        ],
      },
      {
        withEpoch: "Romantyzm",
        type: "następstwo",
        differences: [
          "Oświecenie – rozum, Romantyzm – uczucia",
          "Oświecenie – klasycyzm, Romantyzm – indywidualizm",
          "Oświecenie – uniwersalizm, Romantyzm – narodowość",
        ],
        similarities: [
          "Krytyka społeczeństwa",
          "Zainteresowanie człowiekiem",
          "Reakcja na rzeczywistość historyczną",
        ],
      },
    ],
    exam: {
      typicalQuestions: [
        "Wyjaśnij znaczenie racjonalizmu w oświeceniu.",
        "Omów funkcję dydaktyczną bajek Krasickiego.",
        "Scharakteryzuj ideę reform w literaturze oświecenia.",
      ],
      keyConcepts: [
        "racjonalizm",
        "empiryzm",
        "utylitaryzm",
        "dydaktyzm",
        "klasycyzm",
      ],
      commonMistakes: [
        "Mylenie oświecenia z romantyzmem",
        "Pomijanie kontekstu historycznego",
        "Niedostrzeganie funkcji moralizatorskiej utworów",
      ],
      essayTopics: [
        "Czy rozum powinien być nadrzędną wartością w życiu człowieka?",
        "Rola satyry w kształtowaniu społeczeństwa.",
        "Czy oświecenie rzeczywiście było epoką postępu?",
      ],
      oralExamTips: [
        "Podawaj konkretne przykłady utworów",
        "Odwołuj się do kontekstu historycznego",
        "Używaj terminologii literackiej",
      ],
      introStarters: [
        "Epoka oświecenia przyniosła fundamentalne zmiany w postrzeganiu świata...",
        "Rozum i nauka stały się kluczowymi wartościami w XVIII wieku...",
        "Oświecenie to czas intensywnych przemian społecznych i intelektualnych...",
      ],
      conclusionStarters: [
        "Podsumowując, oświecenie odegrało kluczową rolę w rozwoju nowoczesnego społeczeństwa...",
        "Można zatem stwierdzić, że idee tej epoki pozostają aktualne do dziś...",
        "W świetle powyższych rozważań widać wyraźnie znaczenie rozumu i edukacji...",
      ],
      quickFacts: [
        "Epoka rozumu i nauki",
        "Rozwój edukacji i reform",
        "Krytyka przesądów",
        "Literatura dydaktyczna",
      ],
    },
  },
  {
    id: 6,
    name: "Romantyzm",
    timeframe: "ok. 1822–1863",
    description:
      "Romantyzm to epoka buntu przeciw klasycznym normom, racjonalizmowi i oświeceniowej wierze w rozum. Podkreślał znaczenie uczuć, intuicji, indywidualizmu oraz duchowości. Literatura romantyczna koncentrowała się na jednostce wybitnej, narodzie oraz tajemniczych siłach natury i metafizyki.",
    moodTags: [
      "Bunt i wolność",
      "Mistycyzm",
      "Indywidualizm",
      "Cierpienie narodu",
      "Uczucie ponad rozum",
    ],
    funFact:
      "Za symboliczny początek romantyzmu w Polsce uznaje się wydanie 'Ballad i romansów' Adama Mickiewicza w 1822 roku.",
    philosophy: [
      "Irracjonalizm jako alternatywa dla rozumu",
      "Mesjanizm narodowy",
      "Kult jednostki wybitnej",
      "Historiozofia romantyczna",
      "Ludowość jako źródło prawdy",
    ],
    worldview:
      "Świat postrzegany był jako pełen tajemnic i sił nadprzyrodzonych, gdzie uczucia i wiara mają większe znaczenie niż rozum, a jednostka i naród są powiązane duchowo.",
    keyIdeas: [
      {
        name: "Mesjanizm",
        description:
          "Przekonanie, że naród polski jest 'Chrystusem narodów', który poprzez cierpienie odkupi inne narody.",
      },
      {
        name: "Irracjonalizm",
        description:
          "Odrzucenie dominacji rozumu na rzecz intuicji, wiary i uczuć jako sposobów poznania świata.",
      },
      {
        name: "Ludowość",
        description:
          "Zainteresowanie folklorem, wierzeniami ludowymi i kulturą prostego ludu jako źródłem autentyczności.",
      },
      {
        name: "Bohater romantyczny",
        description:
          "Jednostka wybitna, samotna, zbuntowana, często tragiczna, kierująca się emocjami.",
      },
    ],
    characteristics: [
      "Dominacja uczucia nad rozumem",
      "Zainteresowanie naturą i jej tajemniczością",
      "Motywy fantastyczne i metafizyczne",
      "Silne związki literatury z historią i polityką",
      "Indywidualizm i subiektywizm",
      "Synkretyzm gatunkowy",
    ],
    genres: [
      {
        name: "Ballada",
        characteristics:
          "Łączy elementy epiki, liryki i dramatu, zawiera elementy fantastyczne i moralne przesłanie.",
        difficulty: 1,
        examples: ["Romantyczność", "Świtezianka", "Lilije"],
      },
      {
        name: "Dramat romantyczny",
        characteristics:
          "Zrywa z zasadą trzech jedności, łączy różne style i gatunki, zawiera elementy fantastyczne.",
        difficulty: 3,
        examples: ["Dziady cz. III", "Kordian", "Nie-Boska komedia"],
      },
      {
        name: "Powieść poetycka",
        characteristics:
          "Utwór epicki o nastroju tajemniczości, fragmentarycznej fabule i silnym bohaterze.",
        difficulty: 2,
        examples: ["Konrad Wallenrod", "Giaur", "Lambro"],
      },
    ],
    motifs: [
      {
        name: "Miłość romantyczna",
        meaning:
          "Uczucie silne, często tragiczne, prowadzące do cierpienia lub śmierci.",
      },
      {
        name: "Samotność",
        meaning:
          "Bohater wyobcowany ze społeczeństwa, niezrozumiany przez innych.",
      },
      {
        name: "Natura",
        meaning:
          "Źródło prawdy i kontaktu z absolutem, często personifikowana.",
      },
      {
        name: "Duchy i zjawy",
        meaning: "Elementy świata nadprzyrodzonego ukazujące moralny porządek.",
      },
    ],
    themes: [
      {
        name: "Walka o wolność",
        description: "Literatura jako narzędzie walki narodowowyzwoleńczej.",
      },
      {
        name: "Cierpienie jednostki",
        description: "Ukazanie wewnętrznych konfliktów bohatera romantycznego.",
      },
      {
        name: "Historia i naród",
        description: "Refleksja nad losem Polski i jej rolą w dziejach świata.",
      },
    ],
    creators: [
      {
        name: "Adam Mickiewicz",
        initials: "AM",
        description:
          "Najwybitniejszy poeta romantyzmu polskiego, twórca mesjanizmu.",
        nationality: "polska",
        yearsLived: "1798–1855",
        quote: "Czucie i wiara silniej mówi do mnie niż mędrca szkiełko i oko.",
        works: ["Dziady", "Pan Tadeusz", "Konrad Wallenrod"],
      },
      {
        name: "Juliusz Słowacki",
        initials: "JS",
        description:
          "Poeta romantyczny, twórca dramatu romantycznego i wizji historiozoficznych.",
        nationality: "polska",
        yearsLived: "1809–1849",
        quote: "Polska Winkelriedem narodów!",
        works: ["Kordian", "Balladyna", "Beniowski"],
      },
      {
        name: "Zygmunt Krasiński",
        initials: "ZK",
        description:
          "Autor dramatów filozoficznych, analizujących konflikty społeczne.",
        nationality: "polska",
        yearsLived: "1812–1859",
        quote: "Przez cierpienie do prawdy.",
        works: ["Nie-Boska komedia", "Irydion", "Psalm miłości"],
      },
    ],
    works: [
      {
        title: "Dziady cz. III",
        book_id: 17,
        author: "Adam Mickiewicz",
        year: "1832",
        significance:
          "Arcydzieło dramatu romantycznego, ukazujące mesjanizm i walkę narodową.",
        difficulty: 3,
      },
      {
        title: "Kordian",
        author: "Juliusz Słowacki",
        year: "1834",
        significance:
          "Analiza psychologii bohatera romantycznego i krytyka spisków narodowych.",
        difficulty: 3,
      },
      {
        title: "Pan Tadeusz",
        book_id: 38,
        author: "Adam Mickiewicz",
        year: "1834",
        significance:
          "Epopeja narodowa ukazująca życie szlachty i tęsknotę za ojczyzną.",
        difficulty: 2,
      },
    ],
    timeline: [
      {
        year: "1822",
        name: "Wydanie Ballad i romansów",
        description: "Symboliczny początek romantyzmu w Polsce.",
      },
      {
        year: "1830",
        name: "Powstanie listopadowe",
        description: "Wydarzenie kształtujące świadomość narodową romantyków.",
      },
      {
        year: "1863",
        name: "Powstanie styczniowe",
        description: "Symboliczny koniec epoki romantyzmu w Polsce.",
      },
    ],
    historicalContext: [
      {
        name: "Rozbiory Polski",
        description:
          "Brak państwowości wpływał na tematykę narodową literatury.",
      },
      {
        name: "Emigracja",
        description:
          "Wielka Emigracja była środowiskiem twórczości romantycznej.",
      },
      {
        name: "Rewolucje europejskie",
        description: "Inspiracja ideami wolności i walki narodowej.",
      },
    ],
    culturalContext: [
      "Rozwój folkloru i zainteresowanie ludowością",
      "Wpływ filozofii niemieckiej",
      "Silne powiązania literatury z polityką",
    ],
    comparisons: [
      {
        withEpoch: "Oświecenie",
        type: "opozycja",
        differences: [
          "Rozum vs uczucie",
          "Klasycyzm vs swoboda formy",
          "Uniwersalizm vs indywidualizm",
        ],
        similarities: [
          "Zainteresowanie człowiekiem",
          "Dążenie do prawdy",
          "Refleksja nad społeczeństwem",
        ],
      },
      {
        withEpoch: "Pozytywizm",
        type: "następstwo",
        differences: [
          "Idealizm vs realizm",
          "Bohater indywidualny vs społeczeństwo",
          "Powstania vs praca organiczna",
        ],
        similarities: [
          "Troska o naród",
          "Znaczenie edukacji",
          "Zaangażowanie społeczne",
        ],
      },
    ],
    exam: {
      typicalQuestions: [
        "Omów cechy bohatera romantycznego.",
        "Wyjaśnij ideę mesjanizmu.",
        "Przedstaw rolę natury w romantyzmie.",
      ],
      keyConcepts: [
        "mesjanizm",
        "irracjonalizm",
        "bohater romantyczny",
        "ludowość",
      ],
      commonMistakes: [
        "Mylenie romantyzmu z pozytywizmem",
        "Brak znajomości kontekstu historycznego",
        "Zbyt ogólna analiza bohatera",
      ],
      essayTopics: [
        "Czy bunt romantyczny ma sens?",
        "Rola jednostki w historii narodu",
        "Miłość jako siła destrukcyjna",
      ],
      oralExamTips: [
        "Podawaj konkretne przykłady z lektur",
        "Odwołuj się do kontekstów historycznych",
        "Wyjaśniaj pojęcia własnymi słowami",
      ],
      introStarters: [
        "Romantyzm to epoka, która radykalnie zmieniła sposób postrzegania świata...",
        "W literaturze romantycznej szczególne miejsce zajmuje...",
        "Analizując romantyzm, należy zwrócić uwagę na...",
      ],
      conclusionStarters: [
        "Podsumowując, romantyzm ukazuje, że...",
        "Ostatecznie można stwierdzić, że epoka ta...",
        "W świetle powyższych rozważań widać, iż...",
      ],
      quickFacts: [
        "Początek: 1822",
        "Najważniejszy twórca: Mickiewicz",
        "Dominacja uczucia nad rozumem",
        "Silny związek z historią Polski",
      ],
    },
  },
  {
    id: 7,
    name: "Pozytywizm",
    timeframe: "1864–1890 (w Polsce po upadku powstania styczniowego)",
    description:
      "Epoka skupiona na pracy organicznej, rozwoju społecznym i nauce, będąca reakcją na klęskę romantycznych powstań. Literatura pozytywizmu koncentruje się na realizmie, problemach społecznych oraz edukacji.",
    moodTags: [
      "Praca u podstaw",
      "Realizm społeczny",
      "Wiara w naukę",
      "Utylitaryzm",
      "Emancypacja",
      "Postęp",
      "Rozsądek",
    ],
    funFact:
      "Pozytywiści często publikowali swoje powieści w odcinkach w gazetach, co zwiększało ich popularność i dostępność.",
    philosophy: [
      "Pozytywizm Augusta Comte'a",
      "Ewolucjonizm Herberta Spencera",
      "Utylitaryzm Johna Stuarta Milla",
      "Scjentyzm",
      "Empiryzm",
    ],
    worldview:
      "Świat postrzegany jako system, który można zrozumieć i ulepszyć dzięki nauce, edukacji i pracy społecznej. Odrzucenie irracjonalizmu na rzecz wiedzy i praktycznego działania.",
    keyIdeas: [
      {
        name: "Praca organiczna",
        description:
          "Społeczeństwo traktowane jako organizm, w którym wszystkie warstwy powinny współpracować dla wspólnego dobra.",
      },
      {
        name: "Praca u podstaw",
        description:
          "Edukacja i pomoc najniższym warstwom społecznym jako fundament rozwoju narodu.",
      },
      {
        name: "Emancypacja kobiet",
        description:
          "Postulat równouprawnienia kobiet, dostępu do edukacji i pracy.",
      },
      {
        name: "Asymilacja Żydów",
        description:
          "Włączenie społeczności żydowskiej w życie społeczne i narodowe.",
      },
      {
        name: "Realizm",
        description:
          "Dążenie do wiernego przedstawienia rzeczywistości społecznej i psychologicznej.",
      },
    ],
    characteristics: [
      "Dominacja realizmu i naturalizmu",
      "Tematyka społeczna i obyczajowa",
      "Narrator wszechwiedzący",
      "Rozbudowane opisy środowiska",
      "Postacie reprezentujące różne warstwy społeczne",
      "Krytyka zacofania i nierówności",
      "Literatura zaangażowana społecznie",
    ],
    genres: [
      {
        name: "Powieść realistyczna",
        characteristics:
          "Szczegółowe przedstawienie życia społecznego, wielowątkowość, narrator wszechwiedzący.",
        difficulty: 2,
        examples: ["Lalka", "Nad Niemnem", "Emancypantki"],
      },
      {
        name: "Nowela",
        characteristics:
          "Krótka forma z wyraźną puentą, skupienie na jednym problemie społecznym.",
        difficulty: 1,
        examples: ["Mendel Gdański", "Katarynka", "Sachem"],
      },
      {
        name: "Felieton",
        characteristics:
          "Publicystyczna forma komentująca bieżące wydarzenia, często ironiczna.",
        difficulty: 1,
        examples: [
          "Kroniki tygodniowe",
          "Felietony Prusa",
          "Teksty Świętochowskiego",
        ],
      },
      {
        name: "Powieść tendencyjna",
        characteristics:
          "Utwór podporządkowany idei społecznej, mający funkcję dydaktyczną.",
        difficulty: 2,
        examples: ["Marta", "Meir Ezofowicz", "Niziny"],
      },
    ],
    motifs: [
      {
        name: "Miasto",
        meaning:
          "Symbol nowoczesności, rozwoju, ale też nierówności społecznych.",
      },
      {
        name: "Praca",
        meaning:
          "Wartość moralna i fundament rozwoju jednostki oraz społeczeństwa.",
      },
      {
        name: "Bieda",
        meaning: "Problem społeczny wymagający reform i wsparcia.",
      },
      {
        name: "Nauka",
        meaning: "Droga do postępu i poprawy warunków życia.",
      },
      {
        name: "Kobieta",
        meaning: "Symbol walki o równouprawnienie i niezależność.",
      },
    ],
    themes: [
      {
        name: "Nierówności społeczne",
        description:
          "Ukazanie różnic między bogatymi a biednymi oraz potrzeba reform.",
      },
      {
        name: "Edukacja",
        description: "Znaczenie nauki jako narzędzia zmiany społecznej.",
      },
      {
        name: "Miłość a konwenanse",
        description: "Konflikt uczuć z normami społecznymi.",
      },
      {
        name: "Awans społeczny",
        description: "Możliwość zmiany statusu dzięki pracy i determinacji.",
      },
      {
        name: "Tożsamość narodowa",
        description: "Budowanie wspólnoty mimo braku państwa.",
      },
    ],
    creators: [
      {
        name: "Bolesław Prus",
        initials: "BP",
        description:
          "Mistrz realizmu, autor powieści społecznych i psychologicznych.",
        nationality: "polska",
        yearsLived: "1847–1912",
        quote: "Prawdziwa wiedza to znajomość przyczyn.",
        works: ["Lalka", "Faraon", "Katarynka"],
      },
      {
        name: "Eliza Orzeszkowa",
        initials: "EO",
        description:
          "Pisarka zaangażowana społecznie, poruszająca tematykę emancypacji i asymilacji.",
        nationality: "polska",
        yearsLived: "1841–1910",
        quote: "Ludzie żyją tak, jak myślą.",
        works: ["Nad Niemnem", "Marta", "Meir Ezofowicz"],
      },
      {
        name: "Henryk Sienkiewicz",
        initials: "HS",
        description:
          "Pisarz łączący realizm z elementami historycznymi, laureat Nagrody Nobla.",
        nationality: "polska",
        yearsLived: "1846–1916",
        quote: "Sława jest światłem, które oślepia.",
        works: ["Quo vadis", "Trylogia", "Latarnik"],
      },
      {
        name: "Maria Konopnicka",
        initials: "MK",
        description:
          "Autorka nowel i utworów patriotycznych, poruszająca problemy społeczne.",
        nationality: "polska",
        yearsLived: "1842–1910",
        quote: "Nie rzucim ziemi, skąd nasz ród.",
        works: ["Mendel Gdański", "Rota", "Nasza szkapa"],
      },
    ],
    works: [
      {
        title: "Lalka",
        book_id: 18,
        author: "Bolesław Prus",
        year: "1890",
        significance:
          "Panorama społeczeństwa polskiego i analiza psychologiczna bohatera.",
        difficulty: 3,
      },
      {
        title: "Nad Niemnem",
        author: "Eliza Orzeszkowa",
        year: "1888",
        significance:
          "Ukazanie wartości pracy i tradycji oraz konfliktów społecznych.",
        difficulty: 2,
      },
      {
        title: "Mendel Gdański",
        author: "Maria Konopnicka",
        year: "1890",
        significance: "Nowela poruszająca problem antysemityzmu.",
        difficulty: 2,
      },
      {
        title: "Latarnik",
        author: "Henryk Sienkiewicz",
        year: "1881",
        significance: "Obraz tęsknoty emigranta za ojczyzną.",
        difficulty: 1,
      },
    ],
    timeline: [
      {
        year: "1864",
        name: "Upadek powstania styczniowego",
        description:
          "Początek pozytywizmu w Polsce jako reakcja na klęskę powstania.",
      },
      {
        year: "1870",
        name: "Rozwój prasy",
        description: "Dynamiczny rozwój gazet i publikacji literackich.",
      },
      {
        year: "1880",
        name: "Rozkwit powieści realistycznej",
        description: "Powstanie najważniejszych dzieł epoki.",
      },
    ],
    historicalContext: [
      {
        name: "Zabory",
        description: "Polska pozostaje pod zaborami, brak niepodległości.",
      },
      {
        name: "Industrializacja",
        description: "Rozwój przemysłu i miast.",
      },
      {
        name: "Reformy społeczne",
        description: "Dążenie do poprawy warunków życia niższych warstw.",
      },
    ],
    culturalContext: [
      "Rozwój edukacji i nauki",
      "Wzrost znaczenia prasy",
      "Zmiany społeczne i urbanizacja",
      "Kształtowanie się nowoczesnego społeczeństwa",
    ],
    comparisons: [
      {
        withEpoch: "Romantyzm",
        type: "opozycja",
        differences: [
          "Racjonalizm vs irracjonalizm",
          "Praca vs walka zbrojna",
          "Realizm vs fantastyka",
        ],
        similarities: [
          "Troska o naród",
          "Zaangażowanie społeczne",
          "Silna rola literatury",
        ],
      },
      {
        withEpoch: "Młoda Polska",
        type: "następstwo",
        differences: [
          "Optymizm vs dekadentyzm",
          "Realizm vs symbolizm",
          "Nauka vs intuicja",
        ],
        similarities: [
          "Refleksja nad społeczeństwem",
          "Krytyka rzeczywistości",
          "Rozwój literatury",
        ],
      },
    ],
    exam: {
      typicalQuestions: [
        "Wyjaśnij ideę pracy organicznej.",
        "Omów obraz społeczeństwa w Lalce.",
        "Przedstaw rolę edukacji w pozytywizmie.",
      ],
      keyConcepts: [
        "Realizm",
        "Utylitaryzm",
        "Scjentyzm",
        "Praca u podstaw",
        "Emancypacja",
      ],
      commonMistakes: [
        "Mylenie pozytywizmu z romantyzmem",
        "Pomijanie kontekstu historycznego",
        "Zbyt ogólna analiza bohaterów",
      ],
      essayTopics: [
        "Czy praca może zmienić społeczeństwo?",
        "Obraz miasta w literaturze pozytywizmu.",
        "Rola jednostki w społeczeństwie.",
      ],
      oralExamTips: [
        "Podawaj konkretne przykłady z lektur",
        "Odwołuj się do kontekstu historycznego",
        "Używaj terminologii literackiej",
      ],
      introStarters: [
        "Pozytywizm to epoka, która narodziła się w odpowiedzi na...",
        "Jednym z kluczowych założeń pozytywizmu było...",
        "Analizując literaturę pozytywizmu, warto zwrócić uwagę na...",
      ],
      conclusionStarters: [
        "Podsumowując, pozytywizm ukazuje, że...",
        "Można zatem stwierdzić, iż literatura tej epoki...",
        "W efekcie rozważań dochodzimy do wniosku, że...",
      ],
      quickFacts: [
        "Epoka po upadku powstania styczniowego",
        "Dominacja realizmu",
        "Rozwój prasy",
        "Literatura zaangażowana społecznie",
        "Hasło: praca u podstaw",
      ],
    },
  },
  {
    id: 8,
    name: "Młoda Polska",
    timeframe: "ok. 1890–1918",
    description:
      "Epoka przełomu XIX i XX wieku, będąca reakcją na pozytywizm. Charakteryzuje się dekadentyzmem, symbolizmem oraz poszukiwaniem nowych form wyrazu artystycznego i sensu życia.",
    moodTags: [
      "Dekadentyzm",
      "Pesymizm",
      "Modernizm",
      "Symbolizm",
      "Niepokój egzystencjalny",
    ],
    funFact:
      "Nazwa epoki pochodzi od cyklu artykułów Artura Górskiego publikowanych w krakowskim 'Życiu'.",
    philosophy: ["schopenhaueryzm", "nietzscheanizm", "bergsonizm"],
    worldview:
      "Świat postrzegany jako pełen kryzysu wartości, konfliktów wewnętrznych i duchowego rozdarcia jednostki.",
    keyIdeas: [
      {
        name: "Dekadentyzm",
        description:
          "Przekonanie o schyłku cywilizacji, poczucie bezsensu życia i apatia.",
      },
      {
        name: "Symbolizm",
        description:
          "Ukazywanie rzeczywistości poprzez symbole i metafory, zamiast dosłowności.",
      },
      {
        name: "Sztuka dla sztuki",
        description:
          "Przekonanie, że sztuka nie musi pełnić funkcji użytkowej ani moralnej.",
      },
      {
        name: "Indywidualizm",
        description:
          "Podkreślenie wyjątkowości jednostki i jej przeżyć wewnętrznych.",
      },
    ],
    characteristics: [
      "Odejście od realizmu pozytywistycznego",
      "Eksperymenty formalne i stylistyczne",
      "Silne związki literatury z malarstwem i muzyką",
      "Nastrój pesymizmu i kryzysu wartości",
      "Zainteresowanie psychiką i podświadomością",
    ],
    genres: [
      {
        name: "Poezja symboliczna",
        characteristics:
          "Operuje symbolem, metaforą i nastrojem, unika dosłowności.",
        difficulty: 3,
        examples: ["Koniec wieku XIX", "Deszcz jesienny"],
      },
      {
        name: "Dramat modernistyczny",
        characteristics:
          "Łączy realizm z symbolizmem, często zawiera elementy fantastyczne.",
        difficulty: 3,
        examples: ["Wesele", "Wyzwolenie"],
      },
      {
        name: "Powieść psychologiczna",
        characteristics:
          "Skupia się na analizie psychiki bohatera i jego przeżyć.",
        difficulty: 2,
        examples: ["Ludzie bezdomni", "Dzieje grzechu"],
      },
    ],
    motifs: [
      {
        name: "Artysta",
        meaning: "Jednostka wybitna, często niezrozumiana przez społeczeństwo.",
      },
      {
        name: "Śmierć",
        meaning: "Symbol końca, ale też wyzwolenia od cierpienia.",
      },
      {
        name: "Miasto",
        meaning: "Przestrzeń alienacji i chaosu cywilizacyjnego.",
      },
      {
        name: "Natura",
        meaning: "Ucieczka od cywilizacji, źródło harmonii i spokoju.",
      },
    ],
    themes: [
      {
        name: "Kryzys wartości",
        description:
          "Zanik dawnych norm moralnych i poszukiwanie nowych sensów.",
      },
      {
        name: "Samotność jednostki",
        description: "Izolacja bohatera w świecie pełnym niezrozumienia.",
      },
      {
        name: "Konflikt artysty ze społeczeństwem",
        description:
          "Niezdolność twórcy do odnalezienia się w rzeczywistości społecznej.",
      },
    ],
    creators: [
      {
        name: "Stanisław Wyspiański",
        initials: "SW",
        description: "Dramaturg, poeta i malarz, twórca dramatu narodowego.",
        nationality: "polska",
        yearsLived: "1869–1907",
        quote: "A to Polska właśnie.",
        works: ["Wesele", "Wyzwolenie"],
      },
      {
        name: "Stefan Żeromski",
        initials: "SZ",
        description: "Pisarz poruszający problemy społeczne i moralne.",
        nationality: "polska",
        yearsLived: "1864–1925",
        quote: "Trzeba rozdzierać rany, aby się nie zabliźniły błoną podłości.",
        works: ["Ludzie bezdomni", "Przedwiośnie"],
      },
      {
        name: "Kazimierz Przerwa-Tetmajer",
        initials: "KT",
        description: "Poeta dekadencki, wyrażający nastroje pesymizmu.",
        nationality: "polska",
        yearsLived: "1865–1940",
        quote: "Nie wierzę w nic.",
        works: ["Koniec wieku XIX", "Melodia mgieł nocnych"],
      },
      {
        name: "Jan Kasprowicz",
        initials: "JK",
        description:
          "Poeta, którego twórczość ewoluowała od naturalizmu do symbolizmu.",
        nationality: "polska",
        yearsLived: "1860–1926",
        quote: "Dies irae!",
        works: ["Hymny", "Księga ubogich"],
      },
    ],
    works: [
      {
        title: "Wesele",
        book_id: 21,
        author: "Stanisław Wyspiański",
        year: "1901",
        significance: "Symboliczna diagnoza społeczeństwa polskiego.",
        difficulty: 3,
      },
      {
        title: "Ludzie bezdomni",
        author: "Stefan Żeromski",
        year: "1900",
        significance: "Ukazanie konfliktu między ideałami a rzeczywistością.",
        difficulty: 3,
      },
      {
        title: "Koniec wieku XIX",
        author: "Kazimierz Przerwa-Tetmajer",
        year: "1894",
        significance: "Manifest dekadentyzmu.",
        difficulty: 2,
      },
    ],
    timeline: [
      {
        year: "1890",
        name: "Początek Młodej Polski",
        description: "Narodziny nowych prądów artystycznych.",
      },
      {
        year: "1901",
        name: "Premiera 'Wesela'",
        description: "Jedno z najważniejszych wydarzeń teatralnych epoki.",
      },
      {
        year: "1918",
        name: "Odzyskanie niepodległości",
        description: "Zamknięcie epoki i początek nowych przemian.",
      },
    ],
    historicalContext: [
      {
        name: "Zabory Polski",
        description: "Brak niepodległości wpływał na tematykę literatury.",
      },
      {
        name: "Rewolucja 1905 roku",
        description: "Wydarzenia społeczne inspirujące twórców.",
      },
      {
        name: "Rozwój miast",
        description: "Urbanizacja i zmiany społeczne.",
      },
    ],
    culturalContext: [
      "Rozwój sztuk plastycznych i secesji",
      "Silne związki literatury z muzyką i malarstwem",
      "Kawiarnie artystyczne jako centra życia kulturalnego",
    ],
    comparisons: [
      {
        withEpoch: "Pozytywizm",
        type: "opozycja",
        differences: [
          "Pesymizm vs optymizm",
          "Indywidualizm vs praca u podstaw",
        ],
        similarities: ["Zainteresowanie społeczeństwem"],
      },
      {
        withEpoch: "XX-lecie międzywojenne",
        type: "następstwo",
        differences: [
          "Dekadentyzm vs energia odbudowy",
          "Symbolizm vs różnorodność stylów",
        ],
        similarities: ["Eksperymenty formalne"],
      },
    ],
    exam: {
      typicalQuestions: [
        "Wyjaśnij pojęcie dekadentyzmu.",
        "Zinterpretuj symbolikę 'Wesela'.",
        "Omów konflikt jednostki ze społeczeństwem.",
      ],
      keyConcepts: ["dekadentyzm", "symbolizm", "modernizm", "artysta"],
      commonMistakes: [
        "Mylenie Młodej Polski z pozytywizmem",
        "Brak analizy symboliki",
        "Zbyt ogólne interpretacje",
      ],
      essayTopics: [
        "Rola artysty w Młodej Polsce.",
        "Czy dekadentyzm to postawa pesymistyczna?",
        "Symbolika w dramacie Wyspiańskiego.",
      ],
      oralExamTips: [
        "Odwołuj się do konkretnych przykładów",
        "Analizuj symbole",
        "Pokazuj kontekst epoki",
      ],
      introStarters: [
        "Epoka Młodej Polski stanowi przełom w postrzeganiu sztuki i świata.",
        "Na przełomie XIX i XX wieku nastąpiła wyraźna zmiana w literaturze.",
        "Młoda Polska to czas kryzysu wartości i poszukiwania sensu.",
      ],
      conclusionStarters: [
        "Podsumowując, Młoda Polska ukazuje złożoność ludzkiej egzystencji.",
        "Analiza epoki pozwala dostrzec głęboki kryzys wartości.",
        "Wnioski prowadzą do refleksji nad rolą sztuki i artysty.",
      ],
      quickFacts: [
        "Epoka modernizmu polskiego",
        "Dominacja symbolizmu",
        "Silny wpływ filozofii europejskiej",
      ],
    },
  },
  {
    id: 9,
    name: "XX-lecie międzywojenne",
    timeframe: "1918–1939",
    description:
      "Epoka dynamicznych przemian społecznych, politycznych i artystycznych po odzyskaniu niepodległości. Literatura tego okresu ukazuje zarówno euforię wolności, jak i niepokój związany z kryzysem wartości oraz nadciągającą katastrofą.",
    moodTags: [
      "Niepokój cywilizacyjny",
      "Eksperyment artystyczny",
      "Katastrofizm",
      "Radość niepodległości",
      "Kryzys wartości",
    ],
    funFact:
      "Grupa Skamander spotykała się w kawiarni Pod Picadorem, gdzie promowała poezję codzienności i język potoczny.",
    philosophy: [
      "egzystencjalizm w zalążkowej formie",
      "freudyzm i psychoanaliza",
      "katastrofizm historiozoficzny",
      "pragmatyzm i realizm społeczny",
    ],
    worldview:
      "Człowiek jako jednostka zagubiona w nowoczesnym świecie, rozdarta między potrzebą sensu a doświadczeniem chaosu i kryzysu wartości.",
    keyIdeas: [
      {
        name: "Katastrofizm",
        description:
          "Przekonanie o nieuchronnym upadku cywilizacji, obecne szczególnie w poezji lat 30.",
      },
      {
        name: "Awangarda",
        description:
          "Dążenie do zerwania z tradycją i tworzenia nowych form wyrazu artystycznego.",
      },
      {
        name: "Realizm społeczny",
        description:
          "Ukazywanie rzeczywistości społecznej, problemów klasowych i nierówności.",
      },
      {
        name: "Psychologizm",
        description:
          "Skupienie na analizie psychiki bohatera i jego wewnętrznych przeżyć.",
      },
    ],
    characteristics: [
      "rozwój różnych nurtów artystycznych (awangarda, klasycyzm, realizm)",
      "eksperymenty formalne i językowe",
      "zainteresowanie psychologią i podświadomością",
      "krytyka społeczna i polityczna",
      "obecność motywów katastroficznych",
    ],
    genres: [
      {
        name: "Powieść psychologiczna",
        characteristics: "Analiza wnętrza bohatera, jego emocji i motywacji.",
        difficulty: 3,
        examples: ["Granica", "Ferdydurke"],
      },
      {
        name: "Poezja awangardowa",
        characteristics:
          "Eksperymenty językowe, metaforyka, odejście od tradycyjnych form.",
        difficulty: 3,
        examples: ["Europa", "Sponad"],
      },
      {
        name: "Reportaż",
        characteristics:
          "Dokumentalny opis rzeczywistości, często o charakterze społecznym.",
        difficulty: 2,
        examples: ["Na tropach Smętka", "Czarny Paryż"],
      },
      {
        name: "Dramat groteskowy",
        characteristics:
          "Łączenie tragizmu z komizmem, deformacja rzeczywistości.",
        difficulty: 3,
        examples: ["Szewcy", "W małym dworku"],
      },
    ],
    motifs: [
      {
        name: "Miasto",
        meaning: "Symbol nowoczesności, chaosu i anonimowości.",
      },
      {
        name: "Maska",
        meaning: "Ukrywanie prawdziwej tożsamości i gra społeczna.",
      },
      {
        name: "Szkoła",
        meaning:
          "Miejsce formowania jednostki, często przedstawiane krytycznie.",
      },
      {
        name: "Katastrofa",
        meaning: "Przestroga przed zagładą cywilizacji.",
      },
    ],
    themes: [
      {
        name: "Kryzys tożsamości",
        description:
          "Bohaterowie zmagają się z określeniem własnej roli w świecie.",
      },
      {
        name: "Relacje społeczne",
        description: "Analiza struktur społecznych i konfliktów klasowych.",
      },
      {
        name: "Nowoczesność",
        description:
          "Zachwyt i lęk wobec postępu technologicznego i cywilizacyjnego.",
      },
      {
        name: "Wolność",
        description:
          "Refleksja nad znaczeniem niepodległości i odpowiedzialności jednostki.",
      },
    ],
    creators: [
      {
        name: "Witold Gombrowicz",
        initials: "WG",
        description: "Twórca groteski i analizy form społecznych.",
        nationality: "polska",
        yearsLived: "1904–1969",
        quote:
          "Człowiek jest istotą, która nieustannie tworzy siebie poprzez formy.",
        works: ["Ferdydurke", "Trans-Atlantyk", "Dziennik"],
      },
      {
        name: "Bruno Schulz",
        initials: "BS",
        description:
          "Autor prozy poetyckiej, tworzący oniryczne wizje rzeczywistości.",
        nationality: "polska",
        yearsLived: "1892–1942",
        quote: "Rzeczywistość jest cieniem słowa.",
        works: ["Sklepy cynamonowe", "Sanatorium pod Klepsydrą"],
      },
      {
        name: "Zofia Nałkowska",
        initials: "ZN",
        description: "Pisarka analizująca psychikę i moralność człowieka.",
        nationality: "polska",
        yearsLived: "1884–1954",
        quote: "Ludzie ludziom zgotowali ten los.",
        works: ["Granica", "Medaliony"],
      },
      {
        name: "Julian Tuwim",
        initials: "JT",
        description: "Poeta Skamandra, twórca poezji codzienności.",
        nationality: "polska",
        yearsLived: "1894–1953",
        quote: "Poezja powinna być bliska życiu.",
        works: ["Kwiaty polskie", "Do prostego człowieka"],
      },
    ],
    works: [
      {
        title: "Ferdydurke",
        book_id: 24,
        author: "Witold Gombrowicz",
        year: "1937",
        significance: "Krytyka form społecznych i edukacji.",
        difficulty: 3,
      },
      {
        title: "Granica",
        author: "Zofia Nałkowska",
        year: "1935",
        significance: "Analiza moralności i odpowiedzialności.",
        difficulty: 2,
      },
      {
        title: "Sklepy cynamonowe",
        author: "Bruno Schulz",
        year: "1934",
        significance: "Oniryczna wizja świata dzieciństwa.",
        difficulty: 3,
      },
      {
        title: "Przedwiośnie",
        book_id: 23,
        author: "Stefan Żeromski",
        year: "1924",
        significance: "Obraz Polski po odzyskaniu niepodległości.",
        difficulty: 2,
      },
    ],
    timeline: [
      {
        year: "1918",
        name: "Odzyskanie niepodległości",
        description: "Polska wraca na mapę Europy po 123 latach zaborów.",
      },
      {
        year: "1920",
        name: "Bitwa warszawska",
        description: "Zatrzymanie ofensywy bolszewickiej.",
      },
      {
        year: "1926",
        name: "Przewrót majowy",
        description: "Przejęcie władzy przez Piłsudskiego.",
      },
      {
        year: "1939",
        name: "Wybuch II wojny światowej",
        description: "Zakończenie epoki międzywojennej.",
      },
    ],
    historicalContext: [
      {
        name: "Kryzys gospodarczy",
        description: "Globalny kryzys wpływający na sytuację społeczną.",
      },
      {
        name: "Rozwój totalitaryzmów",
        description: "Narastanie zagrożeń ze strony nazizmu i komunizmu.",
      },
      {
        name: "Urbanizacja",
        description: "Dynamiczny rozwój miast i przemysłu.",
      },
    ],
    culturalContext: [
      "rozwój kina i radia",
      "powstanie nowych kierunków artystycznych",
      "wpływ psychoanalizy na sztukę",
      "modernizacja społeczeństwa",
    ],
    comparisons: [
      {
        withEpoch: "Młoda Polska",
        type: "opozycja",
        differences: ["odejście od dekadentyzmu", "większy realizm"],
        similarities: ["zainteresowanie psychiką", "eksperymenty artystyczne"],
      },
      {
        withEpoch: "Współczesność",
        type: "następstwo",
        differences: [
          "brak doświadczenia wojny globalnej",
          "inne środki wyrazu",
        ],
        similarities: ["kryzys wartości", "niepokój egzystencjalny"],
      },
      {
        withEpoch: "Pozytywizm",
        type: "opozycja",
        differences: ["odrzucenie racjonalizmu", "większy subiektywizm"],
        similarities: ["zainteresowanie społeczeństwem"],
      },
    ],
    exam: {
      typicalQuestions: [
        "Omów problem formy w Ferdydurke.",
        "Przedstaw obraz społeczeństwa w Granicy.",
        "Zinterpretuj motyw miasta w literaturze epoki.",
      ],
      keyConcepts: ["groteska", "psychologizm", "katastrofizm", "awangarda"],
      commonMistakes: [
        "pomijanie kontekstu historycznego",
        "upraszczanie interpretacji groteski",
        "brak analizy psychologicznej bohaterów",
      ],
      essayTopics: [
        "Człowiek wobec form społecznych.",
        "Miasto jako przestrzeń egzystencji.",
        "Kryzys wartości w XX-leciu międzywojennym.",
      ],
      oralExamTips: [
        "odwołuj się do kontekstu historycznego",
        "analizuj język i formę",
        "podawaj konkretne przykłady",
      ],
      introStarters: [
        "XX-lecie międzywojenne to okres intensywnych przemian, które znalazły odzwierciedlenie w literaturze.",
        "Literatura tego okresu ukazuje człowieka zagubionego w świecie nowoczesności.",
        "Twórcy XX-lecia międzywojennego podejmowali próbę redefinicji wartości.",
      ],
      conclusionStarters: [
        "Podsumowując, literatura XX-lecia międzywojennego ukazuje złożoność ludzkiej egzystencji.",
        "Analiza utworów potwierdza, że epoka ta była czasem kryzysu i poszukiwań.",
        "Wnioski prowadzą do refleksji nad uniwersalnością problemów człowieka.",
      ],
      quickFacts: [
        "okres między dwiema wojnami światowymi",
        "rozwój awangardy i eksperymentów",
        "dominacja tematów społecznych i psychologicznych",
      ],
    },
  },
  {
    id: 10,
    name: "Współczesność",
    timeframe: "1939 – współcześnie",
    description:
      "Epoka literacka obejmująca okres od wybuchu II wojny światowej do czasów obecnych, charakteryzująca się różnorodnością nurtów, eksperymentów formalnych oraz refleksją nad kondycją człowieka w świecie naznaczonym traumą, technologią i globalizacją.",
    moodTags: [
      "Niepokój egzystencjalny",
      "Rozpad wartości",
      "Chaos",
      "Ironia",
      "Alienacja",
    ],
    funFact:
      "Literatura współczesna często zaciera granice między gatunkami, łącząc np. reportaż z literaturą piękną.",
    philosophy: [
      "egzystencjalizm",
      "postmodernizm",
      "absurd",
      "dekonstrukcja",
      "relatywizm poznawczy",
    ],
    worldview:
      "Świat postrzegany jako niejednoznaczny, pełen sprzeczności i pozbawiony jednej obiektywnej prawdy; jednostka zmaga się z poczuciem alienacji i kryzysem sensu.",
    keyIdeas: [
      {
        name: "Kryzys wartości",
        description:
          "Upadek tradycyjnych systemów moralnych i religijnych prowadzący do zagubienia jednostki.",
      },
      {
        name: "Absurd istnienia",
        description:
          "Przekonanie o bezsensowności życia i niemożności odnalezienia racjonalnego porządku świata.",
      },
      {
        name: "Fragmentaryczność rzeczywistości",
        description:
          "Postrzeganie świata jako zbioru niepowiązanych elementów, bez jednej spójnej narracji.",
      },
      {
        name: "Relatywizm prawdy",
        description:
          "Brak jednej uniwersalnej prawdy – każda interpretacja jest subiektywna.",
      },
    ],
    characteristics: [
      "różnorodność stylów i nurtów",
      "eksperymenty formalne",
      "łączenie gatunków literackich",
      "obecność ironii i groteski",
      "tematyka wojenna i powojenna",
      "refleksja nad technologią i globalizacją",
    ],
    genres: [
      {
        name: "powieść postmodernistyczna",
        characteristics:
          "fragmentaryczna fabuła, gra z czytelnikiem, intertekstualność",
        difficulty: 3,
        examples: ["Imię róży", "Sto lat samotności", "Gra w klasy"],
      },
      {
        name: "reportaż literacki",
        characteristics: "połączenie faktów z narracją literacką, subiektywizm",
        difficulty: 2,
        examples: ["Cesarz", "Heban", "Wojna nie ma w sobie nic z kobiety"],
      },
      {
        name: "dramat absurdu",
        characteristics:
          "brak logicznej fabuły, absurdalne dialogi, bezsens istnienia",
        difficulty: 3,
        examples: ["Czekając na Godota", "Krzesła", "Łysa śpiewaczka"],
      },
      {
        name: "poezja lingwistyczna",
        characteristics:
          "eksperymenty językowe, gra słowem, refleksja nad językiem",
        difficulty: 3,
        examples: ["Rozmowy z katem", "Sztuczne oddychanie", "Ocalenie"],
      },
    ],
    motifs: [
      {
        name: "wojna",
        meaning: "trauma, destrukcja, dehumanizacja człowieka",
      },
      {
        name: "miasto",
        meaning: "anonimowość, izolacja, chaos cywilizacyjny",
      },
      {
        name: "samotność",
        meaning: "alienacja jednostki w społeczeństwie",
      },
      {
        name: "ciało",
        meaning: "kruchość ludzkiej egzystencji i materialność istnienia",
      },
    ],
    themes: [
      {
        name: "Holokaust",
        description:
          "próba opisania niewyobrażalnej tragedii i granic człowieczeństwa",
      },
      {
        name: "tożsamość",
        description: "poszukiwanie siebie w świecie pełnym sprzecznych wpływów",
      },
      {
        name: "technologia",
        description: "wpływ rozwoju technologicznego na życie człowieka",
      },
      {
        name: "pamięć",
        description:
          "rola pamięci indywidualnej i zbiorowej w kształtowaniu tożsamości",
      },
    ],
    creators: [
      {
        name: "Tadeusz Różewicz",
        initials: "TR",
        description:
          "poeta i dramaturg ukazujący kryzys wartości po II wojnie światowej",
        nationality: "polska",
        yearsLived: "1921-2014",
        quote: "Mam dwadzieścia cztery lata ocalałem prowadzony na rzeź",
        works: ["Ocalony", "Kartoteka", "Niepokój"],
      },
      {
        name: "Wisława Szymborska",
        initials: "WS",
        description:
          "poetka analizująca codzienność z ironią i refleksją filozoficzną",
        nationality: "polska",
        yearsLived: "1923-2012",
        quote: "Tyle wiemy o sobie, ile nas sprawdzono",
        works: ["Koniec i początek", "Widok z ziarnkiem piasku", "Chwila"],
      },
      {
        name: "Albert Camus",
        initials: "AC",
        description:
          "pisarz i filozof egzystencjalizmu, autor koncepcji absurdu",
        nationality: "francuska",
        yearsLived: "1913-1960",
        quote: "Trzeba wyobrazić sobie Syzyfa szczęśliwym",
        works: ["Dżuma", "Obcy", "Mit Syzyfa"],
      },
      {
        name: "George Orwell",
        initials: "GO",
        description: "pisarz krytykujący totalitaryzm i manipulację językiem",
        nationality: "brytyjska",
        yearsLived: "1903-1950",
        quote:
          "Wolność to prawo do mówienia ludziom tego, czego nie chcą słyszeć",
        works: ["Rok 1984", "Folwark zwierzęcy"],
      },
    ],
    works: [
      {
        title: "Inny świat",
        book_id: 26,
        author: "Gustaw Herling-Grudziński",
        year: "1951",
        significance: "świadectwo życia w łagrach i dehumanizacji człowieka",
        difficulty: 2,
      },
      {
        title: "Zdążyć przed Panem Bogiem",
        book_id: 27,
        author: "Hanna Krall",
        year: "1977",
        significance:
          "reportaż o powstaniu w getcie warszawskim i moralnych wyborach",
        difficulty: 2,
      },
      {
        title: "Dżuma",
        book_id: 28,
        author: "Albert Camus",
        year: "1947",
        significance: "alegoria zła i ludzkiej solidarności",
        difficulty: 3,
      },
      {
        title: "Rok 1984",
        book_id: 29,
        author: "George Orwell",
        year: "1949",
        significance: "wizja totalitarnego państwa i manipulacji prawdą",
        difficulty: 2,
      },
    ],
    timeline: [
      {
        year: "1939",
        name: "Wybuch II wojny światowej",
        description: "początek globalnego konfliktu wpływającego na literaturę",
      },
      {
        year: "1945",
        name: "Zakończenie wojny",
        description: "początek refleksji nad traumą i odbudową świata",
      },
      {
        year: "1989",
        name: "Upadek komunizmu",
        description: "zmiany polityczne i nowe tematy w literaturze",
      },
    ],
    historicalContext: [
      {
        name: "II wojna światowa",
        description: "wydarzenie kształtujące świadomość pisarzy",
      },
      {
        name: "zimna wojna",
        description: "konflikt ideologiczny wpływający na literaturę",
      },
      {
        name: "globalizacja",
        description: "zacieranie granic kulturowych i wpływów literackich",
      },
    ],
    culturalContext: [
      "rozwój mediów masowych",
      "dominacja kultury popularnej",
      "rozwój technologii cyfrowej",
      "pluralizm światopoglądowy",
    ],
    comparisons: [
      {
        withEpoch: "XX-lecie międzywojenne",
        type: "następstwo",
        differences: [
          "większy pesymizm",
          "trauma wojny",
          "rozpad struktur społecznych",
        ],
        similarities: [
          "eksperymenty formalne",
          "zainteresowanie psychologią",
          "różnorodność nurtów",
        ],
      },
      {
        withEpoch: "Romantyzm",
        type: "opozycja",
        differences: [
          "brak wiary w jednostkę wybitną",
          "odrzucenie idealizmu",
          "dominacja ironii",
        ],
        similarities: [
          "zainteresowanie losem jednostki",
          "refleksja nad sensem życia",
          "emocjonalność",
        ],
      },
    ],
    exam: {
      typicalQuestions: [
        "Jak literatura współczesna przedstawia doświadczenie wojny?",
        "Na czym polega absurd w literaturze współczesnej?",
        "Jakie są cechy postmodernizmu?",
      ],
      keyConcepts: ["egzystencjalizm", "postmodernizm", "absurd", "ironia"],
      commonMistakes: [
        "utożsamianie wszystkich tekstów z jednym nurtem",
        "brak kontekstu historycznego",
        "zbyt ogólne interpretacje",
      ],
      essayTopics: [
        "Czy człowiek współczesny jest zagubiony?",
        "Motyw wojny w literaturze współczesnej",
        "Rola ironii w opisie rzeczywistości",
      ],
      oralExamTips: [
        "odwołuj się do konkretnych tekstów",
        "pokazuj kontekst historyczny",
        "analizuj środki stylistyczne",
      ],
      introStarters: [
        "Literatura współczesna stanowi odpowiedź na dramatyczne doświadczenia XX wieku.",
        "Współczesność to epoka wielości interpretacji i braku jednoznacznych odpowiedzi.",
        "Twórczość powojenna koncentruje się na kryzysie wartości i tożsamości.",
      ],
      conclusionStarters: [
        "Podsumowując, literatura współczesna ukazuje złożoność ludzkiego doświadczenia.",
        "Ostatecznie można stwierdzić, że współczesność redefiniuje pojęcie sensu życia.",
        "Analiza prowadzi do wniosku, że literatura ta stawia więcej pytań niż odpowiedzi.",
      ],
      quickFacts: [
        "brak jednego dominującego nurtu",
        "silna obecność tematyki wojennej",
        "rozwój reportażu literackiego",
        "częste użycie ironii",
      ],
    },
  },
];
