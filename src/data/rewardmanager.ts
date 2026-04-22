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

// ─── Emoji rewards ────────────────────────────────────────────────────────────

const EMOJI_REWARDS: Omit<Reward, "id">[] = [
  // Common
  { type: "emoji", rarity: "common", value: "👋", label: "Machnięcie" },
  { type: "emoji", rarity: "common", value: "😊", label: "Uśmiech" },
  { type: "emoji", rarity: "common", value: "🙂", label: "Spokój" },
  { type: "emoji", rarity: "common", value: "😄", label: "Radość" },
  { type: "emoji", rarity: "common", value: "🤝", label: "Uścisk dłoni" },

  // Uncommon
  { type: "emoji", rarity: "uncommon", value: "😎", label: "Luz" },
  { type: "emoji", rarity: "uncommon", value: "🌟", label: "Gwiazdka" },
  { type: "emoji", rarity: "uncommon", value: "🎉", label: "Świętowanie" },
  { type: "emoji", rarity: "uncommon", value: "🦊", label: "Lis" },
  { type: "emoji", rarity: "uncommon", value: "🌈", label: "Tęcza" },

  // Rare
  { type: "emoji", rarity: "rare", value: "🚀", label: "Rakieta" },
  { type: "emoji", rarity: "rare", value: "🎯", label: "Cel" },
  { type: "emoji", rarity: "rare", value: "💎", label: "Diament" },
  { type: "emoji", rarity: "rare", value: "🦁", label: "Lew" },
  { type: "emoji", rarity: "rare", value: "⚡", label: "Błyskawica" },

  // Epic
  { type: "emoji", rarity: "epic", value: "🔥", label: "Ogień" },
  { type: "emoji", rarity: "epic", value: "🐉", label: "Smok" },
  { type: "emoji", rarity: "epic", value: "🌌", label: "Galaktyka" },
  { type: "emoji", rarity: "epic", value: "⚔️", label: "Miecze" },
  { type: "emoji", rarity: "epic", value: "🦋", label: "Motyl" },

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
  { type: "emoji", rarity: "legendary", value: "💫", label: "Komet" },
];

// ─── Welcome text rewards ─────────────────────────────────────────────────────

const WELCOME_TEXT_REWARDS: Omit<Reward, "id">[] = [
  // Common
  {
    type: "welcome_text",
    rarity: "common",
    value: "Cześć! Miło cię widzieć.",
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
    value: "Hej! Co słychać?",
    label: "Pytanie",
  },
  {
    type: "welcome_text",
    rarity: "common",
    value: "Dzień dobry!",
    label: "Dzień dobry",
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
];

// ─── All rewards with IDs ─────────────────────────────────────────────────────

export const ALL_REWARDS: Reward[] = [
  ...EMOJI_REWARDS.map((r, i) => ({ ...r, id: `emoji_${i}` })),
  ...WELCOME_TEXT_REWARDS.map((r, i) => ({ ...r, id: `text_${i}` })),
];

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
