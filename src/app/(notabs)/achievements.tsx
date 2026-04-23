import { useClaimedAchievements } from "@/src/components/context/ClaimedAchievementsContext";
import { useChests } from "@/src/components/context/InventoryContext";
import { useLearnedItemsContext } from "@/src/components/context/LearnedItemsContext";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import BackButton from "@/src/components/ui/BackButton";
import { useBooks } from "@/src/hooks/useBooks";
import { useQuestions } from "@/src/hooks/useQuestions";
import { cn } from "@/src/lib/utils";
import {
  Box,
  Boxes,
  CalendarCheck,
  Check,
  Clock,
  Gift,
  Lock,
  SquareDashed,
  Star,
  Tag,
  Trophy,
  Zap,
} from "lucide-react-native";
import { useRef, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// ─── Types ────────────────────────────────────────────────────────────────────

type ChestVariant = "common" | "gold" | "prismatic";

type RedeemResult =
  | { success: true; variant: ChestVariant; amount: number }
  | { success: false; error: string };

// ─── Helpers ──────────────────────────────────────────────────────────────────

function timeUntilMidnight(): string {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const diff = midnight.getTime() - now.getTime();
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  return `${h}g ${m}m`;
}

// ─── Chest variant config ─────────────────────────────────────────────────────

const CHEST_CONFIG = {
  common: {
    label: "Zwykła Skrzynka",
    Icon: SquareDashed,
    textColor: "text-gray-400",
    borderColor: "border-gray-500",
    bgColor: "bg-gray-500/10",
    hexColor: "#9ca3af",
  },
  gold: {
    label: "Złota Skrzynka",
    Icon: Box,
    textColor: "text-amber-400",
    borderColor: "border-amber-500",
    bgColor: "bg-amber-500/10",
    hexColor: "#f59e0b",
  },
  prismatic: {
    label: "Pryzmatyczna Skrzynka",
    Icon: Boxes,
    textColor: "text-violet-400",
    borderColor: "border-violet-500",
    bgColor: "bg-violet-500/10",
    hexColor: "#8b5cf6",
  },
} as const;

// ─── Progress milestones ──────────────────────────────────────────────────────

const PROGRESS_MILESTONES = [
  {
    threshold: 10,
    variant: "common" as ChestVariant,
    label: "Pierwsze Kroki",
    emoji: "🌱",
  },
  {
    threshold: 25,
    variant: "gold" as ChestVariant,
    label: "Ćwierć Drogi",
    emoji: "⚡",
  },
  {
    threshold: 50,
    variant: "gold" as ChestVariant,
    label: "Półmetek",
    emoji: "🔥",
  },
  {
    threshold: 75,
    variant: "prismatic" as ChestVariant,
    label: "Trzy Czwarte",
    emoji: "🚀",
  },
  {
    threshold: 100,
    variant: "prismatic" as ChestVariant,
    label: "Mistrz Matury",
    emoji: "🏆",
  },
] as const;

// ─── Daily Chest Card ─────────────────────────────────────────────────────────

function DailyChestCard() {
  const { canClaimDaily, claimDaily } = useClaimedAchievements();
  const { adjustChestCount } = useChests();
  const [awardedVariant, setAwardedVariant] = useState<ChestVariant | null>(
    null,
  );

  function handleClaim() {
    if (!canClaimDaily || awardedVariant) return;
    const variant = claimDaily();
    if (variant) {
      adjustChestCount(variant, 1);
      setAwardedVariant(variant);
    }
  }

  const claimed = !canClaimDaily || !!awardedVariant;
  const cfg = awardedVariant ? CHEST_CONFIG[awardedVariant] : null;

  return (
    <TouchableOpacity
      activeOpacity={claimed ? 1 : 0.7}
      onPress={handleClaim}
      disabled={claimed}
    >
      <View
        className={cn(
          "w-full rounded-3xl border-l-4 p-4 bg-background-secondary",
          cfg
            ? cfg.borderColor
            : claimed
              ? "border-foreground/10"
              : "border-primary",
        )}
      >
        <View className="flex-row items-center gap-4">
          {/* Icon */}
          <View
            className={cn(
              "w-12 h-12 rounded-2xl items-center justify-center shrink-0",
              cfg ? cfg.bgColor : claimed ? "bg-foreground/5" : "bg-primary/15",
            )}
          >
            {cfg ? (
              <cfg.Icon size={24} color={cfg.hexColor} />
            ) : (
              <Gift size={24} color={claimed ? "#4b5563" : "#a78bfa"} />
            )}
          </View>

          {/* Text */}
          <View className="flex-1 min-w-0">
            <Text
              className={cn(
                "font-pbold text-base",
                cfg
                  ? cfg.textColor
                  : claimed
                    ? "text-foreground/30"
                    : "text-primary",
              )}
            >
              Dzienna Skrzynka
            </Text>

            {cfg ? (
              <Text
                className={cn("font-pregular text-xs mt-0.5", cfg.textColor)}
              >
                Zdobyłeś {cfg.label} • Wróć jutro!
              </Text>
            ) : claimed ? (
              <View className="flex-row items-center gap-1.5 mt-0.5">
                <Clock size={11} color="#6b7280" />
                <Text className="font-pregular text-xs text-foreground/40">
                  Odblokuje się za {timeUntilMidnight()}
                </Text>
              </View>
            ) : (
              <Text className="font-pregular text-xs text-foreground/50 mt-0.5">
                Szansa na złotą (20%) lub pryzmatyczną (5%)
              </Text>
            )}
          </View>

          {/* Right status icon */}
          <View
            className={cn(
              "w-9 h-9 rounded-full items-center justify-center shrink-0",
              cfg ? cfg.bgColor : claimed ? "bg-foreground/5" : "bg-primary/15",
            )}
          >
            {claimed ? (
              <Check size={16} color={cfg ? cfg.hexColor : "#4b5563"} />
            ) : (
              <Zap size={16} color="#a78bfa" />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// ─── Milestone Card ───────────────────────────────────────────────────────────

function MilestoneCard({
  threshold,
  variant,
  label,
  emoji,
  progress,
}: {
  threshold: number;
  variant: ChestVariant;
  label: string;
  emoji: string;
  progress: number;
}) {
  const { isMilestoneClaimed, isEligibleForMilestone, claimProgressMilestone } =
    useClaimedAchievements();
  const { adjustChestCount } = useChests();
  const [justClaimed, setJustClaimed] = useState(false);

  const claimed = isMilestoneClaimed(threshold) || justClaimed;
  const eligible = isEligibleForMilestone(threshold, progress);
  const locked = !claimed && !eligible;
  const cfg = CHEST_CONFIG[variant];
  const fill = Math.min(100, Math.round((progress / threshold) * 100));

  function handleClaim() {
    if (!eligible || claimed) return;
    const v = claimProgressMilestone(threshold);
    if (v) {
      adjustChestCount(v, 1);
      setJustClaimed(true);
    }
  }

  return (
    <TouchableOpacity
      activeOpacity={eligible && !claimed ? 0.7 : 1}
      onPress={handleClaim}
      disabled={!eligible || claimed}
    >
      <View
        className={cn(
          "w-full rounded-3xl border-l-4 p-4 bg-background-secondary",
          claimed
            ? cfg.borderColor
            : eligible
              ? "border-primary"
              : "border-foreground/10",
        )}
      >
        <View className="flex-row items-center gap-4">
          {/* Icon */}
          <View
            className={cn(
              "w-12 h-12 rounded-2xl items-center justify-center shrink-0",
              claimed
                ? cfg.bgColor
                : locked
                  ? "bg-foreground/5"
                  : "bg-primary/10",
            )}
          >
            {locked ? (
              <Lock size={20} color="#374151" />
            ) : (
              <Text style={{ fontSize: 22, lineHeight: 28 }}>{emoji}</Text>
            )}
          </View>

          {/* Middle */}
          <View className="flex-1 min-w-0">
            <View className="flex-row items-center gap-2 flex-wrap">
              <Text
                className={cn(
                  "font-pbold text-sm",
                  claimed
                    ? cfg.textColor
                    : locked
                      ? "text-foreground/30"
                      : "text-foreground",
                )}
              >
                {label}
              </Text>
              <View
                className={cn(
                  "rounded-full px-2 py-0.5",
                  claimed ? cfg.bgColor : "bg-foreground/8",
                )}
              >
                <Text
                  className={cn(
                    "font-psemibold text-[10px]",
                    claimed ? cfg.textColor : "text-foreground/30",
                  )}
                >
                  {threshold}% postępu
                </Text>
              </View>
            </View>

            {claimed ? (
              <Text
                className={cn("font-pregular text-xs mt-0.5", cfg.textColor)}
              >
                Skrzynka odebrana
              </Text>
            ) : eligible ? (
              <Text className="font-pregular text-xs text-primary mt-0.5">
                Dotknij aby odebrać!
              </Text>
            ) : (
              <View className="mt-2 w-full h-1.5 rounded-full bg-foreground/8 overflow-hidden">
                <View
                  className="h-full rounded-full bg-foreground/20"
                  style={{ width: `${fill}%` }}
                />
              </View>
            )}
          </View>

          {/* Right status */}
          <View
            className={cn(
              "w-9 h-9 rounded-full items-center justify-center shrink-0",
              claimed
                ? cfg.bgColor
                : eligible
                  ? "bg-primary/15"
                  : "bg-foreground/5",
            )}
          >
            {claimed ? (
              <Check size={16} color={cfg.hexColor} />
            ) : (
              <cfg.Icon size={16} color={eligible ? "#a78bfa" : "#374151"} />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// ─── Redeem Code Card ─────────────────────────────────────────────────────────

function RedeemCodeCard() {
  const { redeemCode } = useClaimedAchievements();
  const { adjustChestCount } = useChests();

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RedeemResult | null>(null);
  const inputRef = useRef<TextInput>(null);

  async function handleRedeem() {
    const trimmed = code.trim();
    if (!trimmed || loading) return;

    setLoading(true);
    setResult(null);

    // Small delay for UX feedback
    await new Promise((r) => setTimeout(r, 500));

    const res = redeemCode(trimmed);

    if (res.success) {
      adjustChestCount(res.variant, res.amount);
      setCode("");
    }

    setResult(res);
    setLoading(false);
  }

  const cfg = result?.success ? CHEST_CONFIG[result.variant] : null;

  const errorMessage =
    !result || result.success
      ? null
      : result.error === "already_used"
        ? "Ten kod został już wykorzystany."
        : "Nieprawidłowy kod.";

  return (
    <View className="w-full rounded-3xl border-l-4 border-foreground/10 p-4 bg-background-secondary gap-4">
      {/* Header */}
      <View className="flex-row items-center gap-3">
        <View className="w-12 h-12 rounded-2xl items-center justify-center bg-foreground/5">
          <Tag size={22} color="#6b7280" />
        </View>
        <View className="flex-1">
          <Text className="font-pbold text-base text-foreground">
            Kod Promocyjny
          </Text>
          <Text className="font-pregular text-xs text-foreground/40 mt-0.5">
            Wpisz kod aby otrzymać skrzynki
          </Text>
        </View>
      </View>

      {/* Input row */}
      <View className="flex-row gap-2 items-center">
        <TextInput
          ref={inputRef}
          value={code}
          onChangeText={(t) => {
            setCode(t.toUpperCase());
            if (result) setResult(null);
          }}
          placeholder="WPISZ KOD..."
          placeholderTextColor="#4b5563"
          autoCapitalize="characters"
          autoCorrect={false}
          returnKeyType="done"
          onSubmitEditing={handleRedeem}
          className="flex-1 bg-foreground/5 rounded-2xl px-4 h-12 font-pmedium text-sm text-foreground"
          style={{ letterSpacing: 2 }}
        />
        <TouchableOpacity
          onPress={handleRedeem}
          disabled={!code.trim() || loading}
          activeOpacity={0.7}
          className="rounded-2xl overflow-hidden"
        >
          <View
            className={cn(
              "h-12 px-5 items-center justify-center",
              code.trim() && !loading ? "bg-primary" : "bg-foreground/8",
            )}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#a78bfa" />
            ) : (
              <Text
                className={cn(
                  "font-pbold text-sm",
                  code.trim() ? "text-white" : "text-foreground/30",
                )}
              >
                Odbierz
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>

      {/* Result feedback */}
      {result && (
        <View
          className={cn(
            "rounded-2xl px-4 py-3 flex-row items-center gap-3",
            result.success
              ? (cfg?.bgColor ?? "bg-primary/10")
              : "bg-red-500/10",
          )}
        >
          {result.success ? (
            <>
              <Check
                size={16}
                color={cfg?.hexColor ?? "#a78bfa"}
                strokeWidth={2.5}
              />
              <Text
                className={cn("font-pmedium text-sm flex-1", cfg?.textColor)}
              >
                Otrzymałeś {result.amount}× {CHEST_CONFIG[result.variant].label}
                !
              </Text>
            </>
          ) : (
            <Text className="text-red-400 font-pmedium text-sm flex-1">
              {errorMessage}
            </Text>
          )}
        </View>
      )}
    </View>
  );
}

// ─── Stats Row ────────────────────────────────────────────────────────────────

function StatsRow({ totalProgress }: { totalProgress: number }) {
  const { claimedMilestones, canClaimDaily } = useClaimedAchievements();
  const claimedCount = Object.keys(claimedMilestones).length;

  return (
    <View className="flex-row gap-3 w-full">
      <View className="flex-1 bg-background-secondary rounded-3xl p-4 items-center gap-1">
        <Trophy size={18} color="#f59e0b" />
        <Text className="font-pbold text-xl text-amber-400">
          {claimedCount}
        </Text>
        <Text className="font-pregular text-[10px] text-foreground/40 text-center">
          Osiągnięcia
        </Text>
      </View>
      <View className="flex-1 bg-background-secondary rounded-3xl p-4 items-center gap-1">
        <Star size={18} color="#8b5cf6" />
        <Text className="font-pbold text-xl text-violet-400">
          {Math.round(totalProgress)}%
        </Text>
        <Text className="font-pregular text-[10px] text-foreground/40 text-center">
          Postęp
        </Text>
      </View>
      <View className="flex-1 bg-background-secondary rounded-3xl p-4 items-center gap-1">
        <CalendarCheck size={18} color="#34d399" />
        <Text className="font-pbold text-sm text-emerald-400 text-center">
          {canClaimDaily ? "Dostępna" : "Odebrana"}
        </Text>
        <Text className="font-pregular text-[10px] text-foreground/40 text-center">
          Dzienna
        </Text>
      </View>
    </View>
  );
}

// ─── Section Label ────────────────────────────────────────────────────────────

function SectionLabel({ text, sub }: { text: string; sub?: string }) {
  return (
    <View className="px-1">
      <Text className="font-pbold text-base text-foreground">{text}</Text>
      {sub && (
        <Text className="font-pregular text-xs text-foreground/40 mt-0.5">
          {sub}
        </Text>
      )}
    </View>
  );
}

// ─── Main Screen ──────────────────────────────────────────────────────────────

export default function Achievements() {
  const { books } = useBooks();
  const { questions } = useQuestions();
  const { counts } = useLearnedItemsContext();

  const totalItems = books.length + questions.length;
  const totalProgress = totalItems > 0 ? (counts.total / totalItems) * 100 : 0;

  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-6 items-start justify-center pb-10 px-1"
      >
        <BackButton text="Osiągnięcia" />

        <StatsRow totalProgress={totalProgress} />

        <View className="w-full gap-3">
          <SectionLabel text="Dzienna Nagroda" sub="Odbierz co 24 godziny" />
          <DailyChestCard />
        </View>

        <View className="w-full gap-3">
          <SectionLabel
            text="Osiągnięcia Postępu"
            sub="Skrzynki za naukę materiału"
          />
          {PROGRESS_MILESTONES.map((m) => (
            <MilestoneCard key={m.threshold} {...m} progress={totalProgress} />
          ))}
        </View>

        {/* ── Redeem Code ── */}
        <View className="w-full gap-3">
          <SectionLabel
            text="Kod Promocyjny"
            sub="Masz kod? Odbierz darmowe skrzynki"
          />
          <RedeemCodeCard />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
