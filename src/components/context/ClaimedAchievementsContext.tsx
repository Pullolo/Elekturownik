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

/**
 * one-time — redeemable once per device; blocked after first use.
 * infinite  — admin promo code; anyone can redeem it unlimited times,
 *             no tracking, no blocking. Great for event/social codes.
 */
export type RedeemCodeEntry =
  | { type: "one-time"; variant: ChestVariant; amount: number }
  | { type: "infinite"; variant: ChestVariant; amount: number };

export type RedeemResult =
  | { success: true; variant: ChestVariant; amount: number }
  | { success: false; error: "invalid" | "already_used" };

interface ClaimedAchievementsContextValue {
  // Daily
  lastDailyClaim: DailyClaimRecord | null;
  canClaimDaily: boolean;
  claimDaily: () => ChestVariant | null;

  // Progress milestones
  claimedMilestones: Record<string, ProgressMilestone>;
  claimProgressMilestone: (threshold: number) => ChestVariant | null;
  isMilestoneClaimed: (threshold: number) => boolean;
  isEligibleForMilestone: (
    threshold: number,
    currentProgress: number,
  ) => boolean;

  // Redeem codes
  redeemCode: (code: string) => RedeemResult;
  usedCodes: string[]; // only tracks one-time codes

  isLoaded: boolean;
}

// ─── Redeem Code Registry ─────────────────────────────────────────────────────
//
// one-time: each device can use it once (stored in AsyncStorage).
// infinite: no restrictions — anyone can redeem as many times as they want.
//           Perfect for admin codes shared on Discord, events, etc.

const REDEEM_CODES: Record<string, RedeemCodeEntry> = {
  // One-time codes (per device)
  WITAJ2025: { type: "one-time", variant: "common", amount: 3 },
  ZLOTYMATURA: { type: "one-time", variant: "gold", amount: 1 },
  PRYZMAT: { type: "one-time", variant: "prismatic", amount: 1 },
  PULLO: { type: "one-time", variant: "prismatic", amount: 5 },
  START: { type: "one-time", variant: "common", amount: 1 },
  ELEKTRON: { type: "one-time", variant: "common", amount: 3 },
  ASD: { type: "one-time", variant: "gold", amount: 2 },
  MISHATOGEJ: { type: "one-time", variant: "gold", amount: 1 },
  POTOP: { type: "one-time", variant: "gold", amount: 1 },
  PULLOLO: { type: "one-time", variant: "common", amount: 1 },
  TYSIX: { type: "one-time", variant: "common", amount: 1 },
  KRASNAL: { type: "one-time", variant: "common", amount: 1 },

  // Infinite admin codes — unlimited uses, no restrictions
  C24026769: { type: "infinite", variant: "common", amount: 3 },
  Z24026769: { type: "infinite", variant: "gold", amount: 3 },
  P24026769: { type: "infinite", variant: "prismatic", amount: 3 },
};

// ─── Constants ────────────────────────────────────────────────────────────────

const KEYS = {
  daily: "@achievements:daily",
  milestones: "@achievements:milestones",
  usedCodes: "@achievements:usedCodes", // only one-time codes tracked here
} as const;

function rollDailyChest(): ChestVariant {
  const roll = Math.random();
  if (roll < 0.05) return "prismatic";
  if (roll < 0.25) return "gold";
  return "common";
}

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
  const [usedCodes, setUsedCodes] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // ─── Load ──────────────────────────────────────────────────────────────────

  useEffect(() => {
    async function load() {
      try {
        const [rawDaily, rawMilestones, rawUsedCodes] =
          await AsyncStorage.multiGet([
            KEYS.daily,
            KEYS.milestones,
            KEYS.usedCodes,
          ]);
        if (rawDaily[1]) setLastDailyClaim(JSON.parse(rawDaily[1]));
        if (rawMilestones[1])
          setClaimedMilestones(JSON.parse(rawMilestones[1]));
        if (rawUsedCodes[1]) setUsedCodes(JSON.parse(rawUsedCodes[1]));
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

  // ─── Redeem codes ─────────────────────────────────────────────────────────

  const redeemCode = useCallback(
    (rawCode: string): RedeemResult => {
      const code = rawCode.trim().toUpperCase();
      const entry = REDEEM_CODES[code];

      if (!entry) {
        return { success: false, error: "invalid" };
      }

      if (entry.type === "one-time") {
        if (usedCodes.includes(code)) {
          return { success: false, error: "already_used" };
        }
        // Mark as used for this device
        const updated = [...usedCodes, code];
        setUsedCodes(updated);
        persist(KEYS.usedCodes, updated);
      }
      // infinite: skip all tracking — grant reward immediately every time

      return { success: true, variant: entry.variant, amount: entry.amount };
    },
    [usedCodes],
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
        redeemCode,
        usedCodes,
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
