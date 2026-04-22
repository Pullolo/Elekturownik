import { ChestVariant } from "@/src/components/lootboxes/Lootbox";
import { Reward } from "@/src/data/rewardmanager";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface OwnedReward {
  reward: Reward;
  earnedAt: string;
  count: number;
}

export type ChestCounts = Record<ChestVariant, number>;

interface ActiveSelections {
  emojiId: string | null;
  textId: string | null;
}

interface InventoryContextValue {
  // State
  rewards: Record<string, OwnedReward>;
  ownedRewards: OwnedReward[];
  chests: ChestCounts;
  active: ActiveSelections;
  isLoaded: boolean;
  // Reward actions
  addReward: (reward: Reward) => Promise<void>;
  // Chest actions
  setChestCount: (variant: ChestVariant, count: number) => Promise<void>;
  adjustChestCount: (variant: ChestVariant, delta: number) => Promise<void>;
  // Active selection actions
  setActiveEmoji: (rewardId: string | null) => Promise<void>;
  setActiveText: (rewardId: string | null) => Promise<void>;
}

// ─── Storage keys ─────────────────────────────────────────────────────────────

const KEYS = {
  rewards: "@inventory:rewards",
  chests: "@inventory:chests",
  active: "@inventory:active",
} as const;

const DEFAULT_CHESTS: ChestCounts = { common: 3, gold: 1, prismatic: 1 };
const DEFAULT_ACTIVE: ActiveSelections = { emojiId: null, textId: null };

// ─── Context ──────────────────────────────────────────────────────────────────

const InventoryContext = createContext<InventoryContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function InventoryProvider({ children }: { children: ReactNode }) {
  const [rewards, setRewards] = useState<Record<string, OwnedReward>>({});
  const [chests, setChests] = useState<ChestCounts>(DEFAULT_CHESTS);
  const [active, setActive] = useState<ActiveSelections>(DEFAULT_ACTIVE);
  const [isLoaded, setIsLoaded] = useState(false);

  // ─── Load from AsyncStorage on mount ────────────────────────────────────────

  useEffect(() => {
    async function load() {
      try {
        const results = await AsyncStorage.multiGet([
          KEYS.rewards,
          KEYS.chests,
          KEYS.active,
        ]);
        const [rawRewards, rawChests, rawActive] = results;

        if (rawRewards[1]) setRewards(JSON.parse(rawRewards[1]));
        if (rawChests[1])
          setChests({ ...DEFAULT_CHESTS, ...JSON.parse(rawChests[1]) });
        if (rawActive[1])
          setActive({ ...DEFAULT_ACTIVE, ...JSON.parse(rawActive[1]) });
      } catch (e) {
        console.error("[Inventory] Failed to load:", e);
      } finally {
        setIsLoaded(true);
      }
    }
    load();
  }, []);

  // ─── Persist helper ──────────────────────────────────────────────────────────

  function persist(key: string, value: unknown) {
    AsyncStorage.setItem(key, JSON.stringify(value)).catch((e) =>
      console.error("[Inventory] Failed to save:", e),
    );
  }

  // ─── Reward actions ──────────────────────────────────────────────────────────

  const addReward = useCallback(async (reward: Reward) => {
    setRewards((prev) => {
      const existing = prev[reward.id];
      const updated = {
        ...prev,
        [reward.id]: existing
          ? { ...existing, count: existing.count + 1 }
          : { reward, earnedAt: new Date().toISOString(), count: 1 },
      };
      persist(KEYS.rewards, updated);
      return updated;
    });
  }, []);

  // ─── Chest actions ───────────────────────────────────────────────────────────

  const setChestCount = useCallback(
    async (variant: ChestVariant, count: number) => {
      setChests((prev) => {
        const updated = { ...prev, [variant]: Math.max(0, count) };
        persist(KEYS.chests, updated);
        return updated;
      });
    },
    [],
  );

  const adjustChestCount = useCallback(
    async (variant: ChestVariant, delta: number) => {
      setChests((prev) => {
        const updated = {
          ...prev,
          [variant]: Math.max(0, prev[variant] + delta),
        };
        persist(KEYS.chests, updated);
        return updated;
      });
    },
    [],
  );

  // ─── Active selection actions ────────────────────────────────────────────────

  const setActiveEmoji = useCallback(async (rewardId: string | null) => {
    setActive((prev) => {
      const updated = { ...prev, emojiId: rewardId };
      persist(KEYS.active, updated);
      return updated;
    });
  }, []);

  const setActiveText = useCallback(async (rewardId: string | null) => {
    setActive((prev) => {
      const updated = { ...prev, textId: rewardId };
      persist(KEYS.active, updated);
      return updated;
    });
  }, []);

  // ─── Derived ─────────────────────────────────────────────────────────────────

  const ownedRewards = Object.values(rewards).sort(
    (a, b) => new Date(b.earnedAt).getTime() - new Date(a.earnedAt).getTime(),
  );

  return (
    <InventoryContext.Provider
      value={{
        rewards,
        ownedRewards,
        chests,
        active,
        isLoaded,
        addReward,
        setChestCount,
        adjustChestCount,
        setActiveEmoji,
        setActiveText,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
}

// ─── Base hook ────────────────────────────────────────────────────────────────

function useInventory(): InventoryContextValue {
  const ctx = useContext(InventoryContext);
  if (!ctx)
    throw new Error("useInventory must be used inside <InventoryProvider>");
  return ctx;
}

// ─── useOwnedRewards ─────────────────────────────────────────────────────────

/**
 * Access collected rewards and add new ones.
 *
 * @example
 * const { ownedRewards, addReward } = useOwnedRewards();
 */
export function useOwnedRewards() {
  const { ownedRewards, rewards, addReward, isLoaded } = useInventory();
  return { ownedRewards, rewards, addReward, isLoaded };
}

// ─── useChests ───────────────────────────────────────────────────────────────

/**
 * Access and mutate chest counts.
 *
 * @example
 * const { chests, adjustChestCount } = useChests();
 * adjustChestCount("common", -1); // spend one
 * adjustChestCount("gold", +3);   // grant three
 */
export function useChests() {
  const { chests, setChestCount, adjustChestCount, isLoaded } = useInventory();
  return { chests, setChestCount, adjustChestCount, isLoaded };
}

// ─── useActiveRewards ────────────────────────────────────────────────────────

/**
 * Read and set the currently equipped emoji and welcome text rewards.
 *
 * @example
 * const { active, setActiveEmoji, setActiveText, activeEmoji, activeText } = useActiveRewards();
 */
export function useActiveRewards() {
  const { active, rewards, setActiveEmoji, setActiveText, isLoaded } =
    useInventory();

  const activeEmoji = active.emojiId ? (rewards[active.emojiId] ?? null) : null;
  const activeText = active.textId ? (rewards[active.textId] ?? null) : null;

  return {
    active,
    activeEmoji,
    activeText,
    setActiveEmoji,
    setActiveText,
    isLoaded,
  };
}

export { useInventory };
