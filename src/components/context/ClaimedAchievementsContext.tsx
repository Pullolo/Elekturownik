import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChestVariant } from "../lootboxes/Lootbox";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface DailyClaimRecord {
  date: string; // "YYYY-MM-DD"
  variant: ChestVariant;
}

export interface ProgressMilestone {
  id: string; // e.g. "progress_10", "progress_25", etc.
  threshold: number; // 0–100
  variant: ChestVariant;
  claimedAt: string; // ISO timestamp
}

interface ClaimedAchievementsContextValue {
  // Daily
  lastDailyClaim: DailyClaimRecord | null;
  canClaimDaily: boolean;
  claimDaily: () => ChestVariant | null; // returns variant awarded or null if already claimed

  // Progress milestones
  claimedMilestones: Record<string, ProgressMilestone>; // keyed by milestone id
  claimProgressMilestone: (threshold: number) => ChestVariant | null; // returns variant or null
  isMilestoneClaimed: (threshold: number) => boolean;
  isEligibleForMilestone: (
    threshold: number,
    currentProgress: number,
  ) => boolean;

  isLoaded: boolean;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const KEYS = {
  daily: "@achievements:daily",
  milestones: "@achievements:milestones",
} as const;

/**
 * Daily chest probabilities:
 *  - prismatic: 5%
 *  - gold:      20%
 *  - common:    75%
 */
function rollDailyChest(): ChestVariant {
  const roll = Math.random();
  if (roll < 0.05) return "prismatic";
  if (roll < 0.25) return "gold";
  return "common";
}

/**
 * Progress milestone chest by threshold:
 *  - >= 75%: prismatic
 *  - >= 50%: gold
 *  - >= 25%: gold
 *  - < 25%:  common
 */
function milestoneChestForThreshold(threshold: number): ChestVariant {
  if (threshold >= 75) return "prismatic";
  if (threshold >= 25) return "gold";
  return "common";
}

function todayString(): string {
  return new Date().toISOString().slice(0, 10);
}

function milestoneId(threshold: number): string {
  return `progress_${threshold}`;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const ClaimedAchievementsContext =
  createContext<ClaimedAchievementsContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function ClaimedAchievementsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [lastDailyClaim, setLastDailyClaim] = useState<DailyClaimRecord | null>(
    null,
  );
  const [claimedMilestones, setClaimedMilestones] = useState<
    Record<string, ProgressMilestone>
  >({});
  const [isLoaded, setIsLoaded] = useState(false);

  // ─── Load ──────────────────────────────────────────────────────────────────

  useEffect(() => {
    async function load() {
      try {
        const [rawDaily, rawMilestones] = await AsyncStorage.multiGet([
          KEYS.daily,
          KEYS.milestones,
        ]);
        if (rawDaily[1]) setLastDailyClaim(JSON.parse(rawDaily[1]));
        if (rawMilestones[1])
          setClaimedMilestones(JSON.parse(rawMilestones[1]));
      } catch (e) {
        console.error("[ClaimedAchievements] Load failed:", e);
      } finally {
        setIsLoaded(true);
      }
    }
    load();
  }, []);

  function persist(key: string, value: unknown) {
    AsyncStorage.setItem(key, JSON.stringify(value)).catch((e) =>
      console.error("[ClaimedAchievements] Save failed:", e),
    );
  }

  // ─── Derived ──────────────────────────────────────────────────────────────

  const canClaimDaily =
    !lastDailyClaim || lastDailyClaim.date !== todayString();

  // ─── Daily claim ──────────────────────────────────────────────────────────

  const claimDaily = useCallback((): ChestVariant | null => {
    if (!canClaimDaily) return null;
    const variant = rollDailyChest();
    const record: DailyClaimRecord = { date: todayString(), variant };
    setLastDailyClaim(record);
    persist(KEYS.daily, record);
    return variant;
  }, [canClaimDaily]);

  // ─── Progress milestones ──────────────────────────────────────────────────

  const isMilestoneClaimed = useCallback(
    (threshold: number): boolean => {
      return !!claimedMilestones[milestoneId(threshold)];
    },
    [claimedMilestones],
  );

  /**
   * A milestone is eligible when:
   *  - the user's current progress is >= threshold
   *  - the milestone has NOT been claimed before (ever — even if they dip below)
   */
  const isEligibleForMilestone = useCallback(
    (threshold: number, currentProgress: number): boolean => {
      return (
        currentProgress >= threshold &&
        !claimedMilestones[milestoneId(threshold)]
      );
    },
    [claimedMilestones],
  );

  const claimProgressMilestone = useCallback(
    (threshold: number): ChestVariant | null => {
      const id = milestoneId(threshold);
      if (claimedMilestones[id]) return null;
      const variant = milestoneChestForThreshold(threshold);
      const milestone: ProgressMilestone = {
        id,
        threshold,
        variant,
        claimedAt: new Date().toISOString(),
      };
      setClaimedMilestones((prev) => {
        const updated = { ...prev, [id]: milestone };
        persist(KEYS.milestones, updated);
        return updated;
      });
      return variant;
    },
    [claimedMilestones],
  );

  return (
    <ClaimedAchievementsContext.Provider
      value={{
        lastDailyClaim,
        canClaimDaily,
        claimDaily,
        claimedMilestones,
        claimProgressMilestone,
        isMilestoneClaimed,
        isEligibleForMilestone,
        isLoaded,
      }}
    >
      {children}
    </ClaimedAchievementsContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useClaimedAchievements(): ClaimedAchievementsContextValue {
  const ctx = useContext(ClaimedAchievementsContext);
  if (!ctx)
    throw new Error(
      "useClaimedAchievements must be used inside <ClaimedAchievementsProvider>",
    );
  return ctx;
}
