// rewardManager.ts
// Manages all loot box rewards: emojis and welcome texts with rarities

export type Rarity = "common" | "uncommon" | "rare" | "epic" | "legendary";
export type RewardType = "emoji" | "welcome_text";
export type OwnedReward = { count: number; earnedAt: string; reward: Reward };

export interface Reward {
  id: string;
  type: RewardType;
  rarity: Rarity;
  value: string; // emoji character or text string
  label: string; // display name (in Polish)
}

// ─── Rarity config ───────────────────────────────────────────────────────────

export const RARITY_CONFIG: Record<
  Rarity,
  { label: string; color: string; glowColor: string; weight: number }
> = {
  common: {
    label: "Zwykły",
    color: "#9CA3AF",
    glowColor: "rgba(156,163,175,0.4)",
    weight: 50,
  },
  uncommon: {
    label: "Niepospolity",
    color: "#22C55E",
    glowColor: "rgba(34,197,94,0.4)",
    weight: 25,
  },
  rare: {
    label: "Rzadki",
    color: "#3B82F6",
    glowColor: "rgba(59,130,246,0.4)",
    weight: 15,
  },
  epic: {
    label: "Epicki",
    color: "#A855F7",
    glowColor: "rgba(168,85,247,0.4)",
    weight: 8,
  },
  legendary: {
    label: "Legendarny",
    color: "#F59E0B",
    glowColor: "rgba(245,158,11,0.5)",
    weight: 2,
  },
};

// ─── ID generation ────────────────────────────────────────────────────────────

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "");
}

function assignIds(rewards: Omit<Reward, "id">[], prefix: string): Reward[] {
  const seen = new Map<string, number>();
  return rewards.map((r) => {
    const base = `${prefix}_${slugify(r.label)}`;
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    const id = count === 0 ? base : `${base}_${count}`;
    return { ...r, id };
  });
}

// ─── Emoji rewards ────────────────────────────────────────────────────────────

const EMOJI_REWARDS: Omit<Reward, "id">[] = [
  // Common
  { type: "emoji", rarity: "common", value: "👋", label: "Machnięcie" },
  { type: "emoji", rarity: "common", value: "😊", label: "Uśmiech" },
  { type: "emoji", rarity: "common", value: "🙂", label: "Spokój" },
  { type: "emoji", rarity: "common", value: "😄", label: "Radość" },
  { type: "emoji", rarity: "common", value: "🤝", label: "Uścisk dłoni" },
  { type: "emoji", rarity: "common", value: "🌸", label: "Kwiat" },
  { type: "emoji", rarity: "common", value: "🍀", label: "Szczęście" },
  { type: "emoji", rarity: "common", value: "☀️", label: "Słońce" },
  { type: "emoji", rarity: "common", value: "🌙", label: "Księżyc" },
  { type: "emoji", rarity: "common", value: "🍎", label: "Jabłko" },
  { type: "emoji", rarity: "common", value: "🐱", label: "Kot" },
  { type: "emoji", rarity: "common", value: "🐶", label: "Pies" },
  { type: "emoji", rarity: "common", value: "🕊️", label: "Gołąb" },
  { type: "emoji", rarity: "common", value: "🎈", label: "Balon" },
  { type: "emoji", rarity: "common", value: "📘", label: "Książka" },

  // Uncommon
  { type: "emoji", rarity: "uncommon", value: "😎", label: "Luz" },
  { type: "emoji", rarity: "uncommon", value: "🌟", label: "Gwiazdka" },
  { type: "emoji", rarity: "uncommon", value: "🎉", label: "Świętowanie" },
  { type: "emoji", rarity: "uncommon", value: "🦊", label: "Lis" },
  { type: "emoji", rarity: "uncommon", value: "🌈", label: "Tęcza" },
  { type: "emoji", rarity: "uncommon", value: "🐼", label: "Panda" },
  { type: "emoji", rarity: "uncommon", value: "🦉", label: "Sowa" },
  { type: "emoji", rarity: "uncommon", value: "🌊", label: "Fala" },
  { type: "emoji", rarity: "uncommon", value: "🎵", label: "Melodia" },
  { type: "emoji", rarity: "uncommon", value: "🍕", label: "Pizza" },
  { type: "emoji", rarity: "uncommon", value: "🧩", label: "Puzzle" },
  { type: "emoji", rarity: "uncommon", value: "🎮", label: "Gra" },
  { type: "emoji", rarity: "uncommon", value: "🛹", label: "Deskorolka" },
  { type: "emoji", rarity: "uncommon", value: "🪄", label: "Magia" },
  { type: "emoji", rarity: "uncommon", value: "🌻", label: "Słonecznik" },

  // Rare
  { type: "emoji", rarity: "rare", value: "🚀", label: "Rakieta" },
  { type: "emoji", rarity: "rare", value: "🎯", label: "Cel" },
  { type: "emoji", rarity: "rare", value: "💎", label: "Diament" },
  { type: "emoji", rarity: "rare", value: "🦁", label: "Lew" },
  { type: "emoji", rarity: "rare", value: "⚡", label: "Błyskawica" },
  { type: "emoji", rarity: "rare", value: "🦅", label: "Orzeł" },
  { type: "emoji", rarity: "rare", value: "🌋", label: "Wulkan" },
  { type: "emoji", rarity: "rare", value: "🧠", label: "Umysł" },
  { type: "emoji", rarity: "rare", value: "🛰️", label: "Satelita" },
  { type: "emoji", rarity: "rare", value: "🏹", label: "Łucznik" },
  { type: "emoji", rarity: "rare", value: "🛡️", label: "Tarcza" },
  { type: "emoji", rarity: "rare", value: "🌪️", label: "Tornado" },
  { type: "emoji", rarity: "rare", value: "🐺", label: "Wilk" },
  { type: "emoji", rarity: "rare", value: "🦈", label: "Rekin" },
  { type: "emoji", rarity: "rare", value: "🏔️", label: "Szczyt" },

  // Epic
  { type: "emoji", rarity: "epic", value: "🔥", label: "Ogień" },
  { type: "emoji", rarity: "epic", value: "🐉", label: "Smok" },
  { type: "emoji", rarity: "epic", value: "🌌", label: "Galaktyka" },
  { type: "emoji", rarity: "epic", value: "⚔️", label: "Miecze" },
  { type: "emoji", rarity: "epic", value: "🦋", label: "Motyl" },
  { type: "emoji", rarity: "epic", value: "🦖", label: "Tytan" },
  { type: "emoji", rarity: "epic", value: "🌠", label: "Kosmiczny pył" },
  { type: "emoji", rarity: "epic", value: "👁️", label: "Proroctwo" },
  { type: "emoji", rarity: "epic", value: "🗿", label: "Monolit" },
  { type: "emoji", rarity: "epic", value: "🌋", label: "Inferno" },
  { type: "emoji", rarity: "epic", value: "🦂", label: "Skorpion" },
  { type: "emoji", rarity: "epic", value: "🧿", label: "Oko losu" },
  { type: "emoji", rarity: "epic", value: "🪐", label: "Planeta" },
  { type: "emoji", rarity: "epic", value: "🦾", label: "Moc stali" },
  { type: "emoji", rarity: "epic", value: "⚜️", label: "Herb" },

  // Legendary
  { type: "emoji", rarity: "legendary", value: "👑", label: "Korona" },
  {
    type: "emoji",
    rarity: "legendary",
    value: "🌠",
    label: "Spadająca gwiazda",
  },
  { type: "emoji", rarity: "legendary", value: "🦄", label: "Jednorożec" },
  { type: "emoji", rarity: "legendary", value: "🏆", label: "Trofeum" },
  { type: "emoji", rarity: "legendary", value: "💫", label: "Kometa" },
  { type: "emoji", rarity: "legendary", value: "🐲", label: "Pradawny smok" },
  { type: "emoji", rarity: "legendary", value: "☄️", label: "Kataklizm" },
  { type: "emoji", rarity: "legendary", value: "👁️‍🗨️", label: "Wszechwidzący" },
  { type: "emoji", rarity: "legendary", value: "🪽", label: "Boskie skrzydła" },
  { type: "emoji", rarity: "legendary", value: "🔱", label: "Trójząb" },
  { type: "emoji", rarity: "legendary", value: "🌞", label: "Boskie słońce" },
  { type: "emoji", rarity: "legendary", value: "🪭", label: "Wachlarz" },
];

// ─── Welcome text rewards ─────────────────────────────────────────────────────

const WELCOME_TEXT_REWARDS: Omit<Reward, "id">[] = [
  // Common
  {
    type: "welcome_text",
    rarity: "common",
    value: "Miło cię widzieć.",
    label: "Powitanie",
  },
  {
    type: "welcome_text",
    rarity: "common",
    value: "Witaj z powrotem!",
    label: "Powrót",
  },
  {
    type: "welcome_text",
    rarity: "common",
    value: "Co słychać?",
    label: "Pytanie",
  },
  {
    type: "welcome_text",
    rarity: "common",
    value: "Dzień dobry!",
    label: "Dzień dobry",
  },
  {
    type: "welcome_text",
    rarity: "common",
    value: "Fajnie, że jesteś!",
    label: "Obecność",
  },
  {
    type: "welcome_text",
    rarity: "common",
    value: "Dobrze cię znowu widzieć!",
    label: "Powitanie plus",
  },
  {
    type: "welcome_text",
    rarity: "common",
    value: "Startujemy?",
    label: "Start",
  },
  {
    type: "welcome_text",
    rarity: "common",
    value: "Nowy dzień, nowe możliwości!",
    label: "Nowy dzień",
  },

  // Uncommon
  {
    type: "welcome_text",
    rarity: "uncommon",
    value: "Świetnie, że znowu tu jesteś!",
    label: "Entuzjazm",
  },
  {
    type: "welcome_text",
    rarity: "uncommon",
    value: "Hej, nieźle ci idzie!",
    label: "Motywacja",
  },
  {
    type: "welcome_text",
    rarity: "uncommon",
    value: "Dobra robota, wracasz!",
    label: "Pochwała",
  },
  {
    type: "welcome_text",
    rarity: "uncommon",
    value: "Wracasz silniejszy niż wcześniej!",
    label: "Siła",
  },
  {
    type: "welcome_text",
    rarity: "uncommon",
    value: "Twoja konsekwencja robi wrażenie!",
    label: "Konsekwencja",
  },
  {
    type: "welcome_text",
    rarity: "uncommon",
    value: "Każdy powrót to kolejny krok naprzód.",
    label: "Postęp",
  },
  {
    type: "welcome_text",
    rarity: "uncommon",
    value: "Dziś nie Dziady, dziś żywi i gotowi do nauki.",
    label: "Dziady light",
  },
  {
    type: "welcome_text",
    rarity: "uncommon",
    value: "Nie panikuj. Nawet w kosmosie da się zdać maturę.",
    label: "Kosmiczny spokój",
  },

  // Rare
  {
    type: "welcome_text",
    rarity: "rare",
    value: "Witaj, wojowniku nauki!",
    label: "Wojownik",
  },
  {
    type: "welcome_text",
    rarity: "rare",
    value: "Legenda wraca do akcji!",
    label: "Legenda",
  },
  {
    type: "welcome_text",
    rarity: "rare",
    value: "Twoja wytrwałość inspiruje!",
    label: "Inspiracja",
  },
  {
    type: "welcome_text",
    rarity: "rare",
    value: "Witaj, zdobywco wiedzy!",
    label: "Zdobywca",
  },
  {
    type: "welcome_text",
    rarity: "rare",
    value: "Twój progres jest naprawdę imponujący.",
    label: "Imponujący",
  },
  {
    type: "welcome_text",
    rarity: "rare",
    value: "Mistrz wraca na swoje miejsce.",
    label: "Powrót mistrza",
  },
  {
    type: "welcome_text",
    rarity: "rare",
    value: "Niech Moc będzie z Tobą… szczególnie na matematyce.",
    label: "Moc maturzysty",
  },
  {
    type: "welcome_text",
    rarity: "rare",
    value: "Houston, mamy maturzystę gotowego do startu.",
    label: "Start misji",
  },
  {
    type: "welcome_text",
    rarity: "rare",
    value: "Jack Sparrow też improwizował. Ty też dasz radę.",
    label: "Piracka improwizacja",
  },
  {
    type: "welcome_text",
    rarity: "rare",
    value: "Twoja wiedza rośnie szybciej niż czarna dziura.",
    label: "Interstellar",
  },

  // Epic
  {
    type: "welcome_text",
    rarity: "epic",
    value: "Hej, geniuszu! Gotowy na wyzwania?",
    label: "Geniusz",
  },
  {
    type: "welcome_text",
    rarity: "epic",
    value: "Witaj, mistrzu! Świat czeka.",
    label: "Mistrz",
  },
  {
    type: "welcome_text",
    rarity: "epic",
    value: "Twoja energia jest niesamowita!",
    label: "Energia",
  },
  {
    type: "welcome_text",
    rarity: "epic",
    value: "Twoja obecność zmienia zasady gry.",
    label: "Zmiana gry",
  },
  {
    type: "welcome_text",
    rarity: "epic",
    value: "Witaj ponownie, architekcie sukcesu!",
    label: "Architekt",
  },
  {
    type: "welcome_text",
    rarity: "epic",
    value: "Dziś znowu zapiszesz historię.",
    label: "Historia",
  },
  {
    type: "welcome_text",
    rarity: "epic",
    value: "Dziś piszesz własnego Pana Tadeusza — tylko z lepszym endingiem.",
    label: "Własna epopeja",
  },
  {
    type: "welcome_text",
    rarity: "epic",
    value:
      "Nie jesteś spóźniony. Po prostu podróżujesz w czasie jak w Interstellar.",
    label: "Relatywność czasu",
  },
  {
    type: "welcome_text",
    rarity: "epic",
    value: "Matura to tylko boss fight. A Ty masz już endgame build.",
    label: "Boss fight",
  },
  {
    type: "welcome_text",
    rarity: "epic",
    value: "Kapitanie, kurs ustawiony: zdana matura.",
    label: "Kapitan",
  },
  {
    type: "welcome_text",
    rarity: "epic",
    value: "Nawet Mickiewicz zrobiłby Ci miejsce w pierwszej ławce.",
    label: "Mickiewicz approved",
  },

  // Legendary
  {
    type: "welcome_text",
    rarity: "legendary",
    value: "Witaj, Wybrańcu! Los jest po twojej stronie.",
    label: "Wybrańcy",
  },
  {
    type: "welcome_text",
    rarity: "legendary",
    value: "Legendarny powrót! Jesteś niepokonany.",
    label: "Niepokonany",
  },
  {
    type: "welcome_text",
    rarity: "legendary",
    value: "Chwała ci, Heronie! Jesteś wyjątkowy.",
    label: "Heros",
  },
  {
    type: "welcome_text",
    rarity: "legendary",
    value: "Powrót legendy został odnotowany przez los.",
    label: "Legenda losu",
  },
  {
    type: "welcome_text",
    rarity: "legendary",
    value: "Nie zatrzyma cię nic — nawet przeznaczenie.",
    label: "Przeznaczenie",
  },
  {
    type: "welcome_text",
    rarity: "legendary",
    value: "Witaj, istoto wyjątkowa. Świat znów nabiera sensu.",
    label: "Wyjątkowość",
  },
  {
    type: "welcome_text",
    rarity: "legendary",
    value: "Nawet cisza tęskni za Twoją obecnością.",
    label: "Tęsknota",
  },
  {
    type: "welcome_text",
    rarity: "legendary",
    value: "Wybraniec powrócił. Arkusze drżą, komisja przeczuwa legendę.",
    label: "Wybraniec",
  },
  {
    type: "welcome_text",
    rarity: "legendary",
    value: "Legenda mówi, że ktoś zdał wszystko bez stresu. To chyba Ty.",
    label: "Legenda matury",
  },
  {
    type: "welcome_text",
    rarity: "legendary",
    value: "Nie uczysz się do matury. To matura przygotowuje się na Ciebie.",
    label: "Odwrócenie losu",
  },
  {
    type: "welcome_text",
    rarity: "legendary",
    value: "Twoja obecność zakrzywia czasoprzestrzeń i próg zdawalności.",
    label: "Grawitacja sukcesu",
  },
  {
    type: "welcome_text",
    rarity: "legendary",
    value: "Nawet Gwiazda Śmierci nie budzi takiego respektu jak Twój progres.",
    label: "Galaktyczny respekt",
  },
  {
    type: "welcome_text",
    rarity: "legendary",
    value: "Dziś nie zdajesz egzaminu. Dziś egzamin zdaje Ciebie.",
    label: "Ostateczna próba",
  },
];

// ─── All rewards with stable slug-based IDs ───────────────────────────────────

export const ALL_REWARDS: Reward[] = [
  ...assignIds(EMOJI_REWARDS, "new_emoji"),
  ...assignIds(WELCOME_TEXT_REWARDS, "new_text"),
];

// Sanity check in development — catches any bugs in assignIds itself
if (process.env.NODE_ENV === "development") {
  const ids = ALL_REWARDS.map((r) => r.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length)
    throw new Error(`Duplicate reward IDs: ${dupes.join(", ")}`);
}

// ─── Loot table weights per chest variant ─────────────────────────────────────

const CHEST_RARITY_OVERRIDES: Record<
  "common" | "gold" | "prismatic",
  Partial<Record<Rarity, number>>
> = {
  common: {}, // use default weights
  gold: { common: 20, uncommon: 30, rare: 30, epic: 15, legendary: 5 },
  prismatic: { common: 0, uncommon: 10, rare: 25, epic: 40, legendary: 25 },
};

function weightedRandom(weights: Record<Rarity, number>): Rarity {
  const total = Object.values(weights).reduce((a, b) => a + b, 0);
  let roll = Math.random() * total;
  for (const [rarity, weight] of Object.entries(weights) as [
    Rarity,
    number,
  ][]) {
    roll -= weight;
    if (roll <= 0) return rarity;
  }
  return "common";
}

export function rollReward(
  chestVariant: "common" | "gold" | "prismatic",
  type?: RewardType,
): Reward {
  const baseWeights = Object.fromEntries(
    Object.entries(RARITY_CONFIG).map(([r, c]) => [r, c.weight]),
  ) as Record<Rarity, number>;

  const overrides = CHEST_RARITY_OVERRIDES[chestVariant];
  const weights = { ...baseWeights, ...overrides } as Record<Rarity, number>;

  const rarity = weightedRandom(weights);

  const pool = ALL_REWARDS.filter(
    (r) => r.rarity === rarity && (!type || r.type === type),
  );

  // fallback: any rarity of that type
  const fallbackPool =
    pool.length > 0
      ? pool
      : ALL_REWARDS.filter((r) => !type || r.type === type);

  return fallbackPool[Math.floor(Math.random() * fallbackPool.length)];
}

/**
 * Roll multiple distinct rewards from a chest.
 * Returns one emoji reward and one welcome_text reward.
 */
export function openChest(
  chestVariant: "common" | "gold" | "prismatic",
): Reward {
  if (Math.random() < 0.5) {
    return rollReward(chestVariant, "emoji");
  } else {
    return rollReward(chestVariant, "welcome_text");
  }
}
