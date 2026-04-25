import { useOwnedRewards } from "@/src/components/context/InventoryContext";
import {
  OwnedReward,
  Rarity,
  RARITY_CONFIG,
  Reward,
} from "@/src/data/rewardmanager";
import { cn } from "@/src/lib/utils";
import { Text, TouchableOpacity, View } from "react-native";
import useColors from "../hooks/useColors";
import Divider from "./ui/Divider";

// ─── Types ────────────────────────────────────────────────────────────────────

interface InventorySwitcherProps {
  /** Currently active emoji reward id */
  activeEmojiId: string | null;
  /** Currently active welcome text reward id */
  activeTextId: string | null;
  onSelectEmoji: (reward: Reward) => void;
  onSelectText: (reward: Reward) => void;
}

// ─── Emoji swatch ─────────────────────────────────────────────────────────────

function EmojiSwatch({
  owned,
  isActive,
  onPress,
}: {
  owned: OwnedReward;
  isActive: boolean;
  onPress: () => void;
}) {
  const config = RARITY_CONFIG[owned.reward.rarity as Rarity];

  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        "flex flex-col items-center gap-2 p-3 rounded-2xl border-2",
        isActive
          ? "border-primary bg-primary/5"
          : "border-foreground/10 bg-background-secondary",
      )}
      style={{ minWidth: 80 }}
    >
      {/* Emoji inside a rarity-tinted circle */}
      <View
        className="w-10 h-10 rounded-full items-center justify-center"
        style={{
          backgroundColor: config.color + "22",
          borderWidth: 1.5,
          borderColor: config.color + "55",
        }}
      >
        <Text className="text-xl text-center leading-tight p-px">
          {owned.reward.value}
        </Text>
      </View>

      {/* Label + count */}
      <View className="flex flex-row items-center gap-1">
        <Text
          className={cn(
            "text-xs font-pmedium text-center",
            isActive ? "text-primary" : "text-foreground",
          )}
          numberOfLines={1}
        >
          {owned.reward.label}
        </Text>
        {owned.count > 1 && (
          <Text className="text-foreground/40 font-pregular text-xs">
            x{owned.count}
          </Text>
        )}
      </View>

      {isActive && <View className="w-1.5 h-1.5 rounded-full bg-primary" />}
    </TouchableOpacity>
  );
}

// ─── Text swatch ──────────────────────────────────────────────────────────────

function TextSwatch({
  owned,
  isActive,
  onPress,
}: {
  owned: OwnedReward;
  isActive: boolean;
  onPress: () => void;
}) {
  const config = RARITY_CONFIG[owned.reward.rarity as Rarity];
  const colors = useColors();

  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        "flex flex-col gap-2 p-3 rounded-2xl border-2 flex-1",
        isActive
          ? "border-primary bg-primary/5"
          : "border-foreground/10 bg-background-secondary",
      )}
      style={{ minWidth: 100 }}
    >
      {/* Rarity bar — mirrors the dual-colour pill from MixedSwatch */}
      <View
        className="w-full h-1.5 rounded-full"
        style={{ backgroundColor: config.color + "55" }}
      />

      <View className="flex flex-col gap-0.5">
        <Text
          className={cn(
            "text-sm font-psemibold",
            isActive ? "text-primary" : "text-foreground",
          )}
          numberOfLines={2}
        >
          {owned.reward.value}
        </Text>
        <View className="flex-row items-center gap-1">
          <View
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: isActive ? colors.primary : config.color,
            }}
          />
          <Text className="text-foreground/40 text-xs font-pregular">
            {config.label}
            {owned.count > 1 ? ` · x${owned.count}` : ""}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function InventorySwitcher({
  activeEmojiId,
  activeTextId,
  onSelectEmoji,
  onSelectText,
}: InventorySwitcherProps) {
  const { ownedRewards } = useOwnedRewards();

  const emojiRewards = ownedRewards.filter((o) => o.reward.type === "emoji");
  const textRewards = ownedRewards.filter(
    (o) => o.reward.type === "welcome_text",
  );

  const activeEmoji = emojiRewards.find((o) => o.reward.id === activeEmojiId);
  const activeText = textRewards.find((o) => o.reward.id === activeTextId);

  if (ownedRewards.length === 0) {
    return (
      <View className="w-full items-center py-10 gap-2">
        <Text className="text-4xl">📦</Text>
        <Text className="text-foreground font-psemibold text-base">
          Brak przedmiotów
        </Text>
        <Text className="text-foreground/40 font-pregular text-sm text-center">
          Otwórz skrzynki, żeby zdobyć nagrody
        </Text>
      </View>
    );
  }

  return (
    <View className="w-full flex flex-col gap-5">
      <Text className="text-foreground font-psemibold text-lg">
        Twój ekwipunek
      </Text>

      {/* ── Emoji section ── */}
      {emojiRewards.length > 0 && (
        <View className="flex flex-col gap-2">
          <Text className="text-foreground/40 font-pmedium text-xs uppercase tracking-widest">
            Emoji
          </Text>
          <View className="flex flex-row flex-wrap gap-2">
            {emojiRewards.map((owned) => (
              <EmojiSwatch
                key={owned.reward.id}
                owned={owned}
                isActive={owned.reward.id === activeEmojiId}
                onPress={() => onSelectEmoji(owned.reward)}
              />
            ))}
          </View>
        </View>
      )}

      {emojiRewards.length > 0 && textRewards.length > 0 && <Divider />}

      {/* ── Welcome text section ── */}
      {textRewards.length > 0 && (
        <View className="flex flex-col gap-2">
          <Text className="text-foreground/40 font-pmedium text-xs uppercase tracking-widest">
            Powitania
          </Text>
          <View className="flex flex-row flex-wrap gap-2">
            {textRewards.map((owned) => (
              <TextSwatch
                key={owned.reward.id}
                owned={owned}
                isActive={owned.reward.id === activeTextId}
                onPress={() => onSelectText(owned.reward)}
              />
            ))}
          </View>
        </View>
      )}

      <Divider />

      {/* ── Active selection summary — mirrors ThemeSwitcher's bottom bar ── */}
      <View className="flex flex-col gap-2 p-4 bg-background-secondary rounded-2xl">
        <Text className="text-foreground/40 font-pmedium text-xs uppercase tracking-widest">
          Aktywne
        </Text>

        {/* Emoji row */}
        <View className="flex-row items-center gap-3">
          {activeEmoji ? (
            <>
              <View
                className="w-7 h-7 rounded-full items-center justify-center"
                style={{
                  backgroundColor:
                    RARITY_CONFIG[activeEmoji.reward.rarity].color + "22",
                  borderWidth: 1.5,
                  borderColor:
                    RARITY_CONFIG[activeEmoji.reward.rarity].color + "55",
                }}
              >
                <Text className="text-sm text-center leading-tight">
                  {activeEmoji.reward.value}
                </Text>
              </View>
              <Text className="text-foreground font-pmedium">
                Emoji:{" "}
                <Text className="text-primary font-psemibold">
                  {activeEmoji.reward.label}
                </Text>
              </Text>
            </>
          ) : (
            <>
              <View className="w-7 h-7 rounded-full bg-foreground/10 items-center justify-center">
                <Text className="text-sm">?</Text>
              </View>
              <Text className="text-foreground/40 font-pmedium">
                Emoji: brak
              </Text>
            </>
          )}
        </View>

        {/* Text row */}
        <View className="flex-row items-start gap-3">
          {activeText ? (
            <>
              <View
                className="w-7 h-7 rounded-full items-center justify-center"
                style={{
                  backgroundColor:
                    RARITY_CONFIG[activeText.reward.rarity].color + "22",
                  borderWidth: 1.5,
                  borderColor:
                    RARITY_CONFIG[activeText.reward.rarity].color + "55",
                }}
              >
                <View
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor:
                      RARITY_CONFIG[activeText.reward.rarity].color,
                  }}
                />
              </View>
              <Text className="text-foreground font-pmedium flex-1">
                Powitanie:{" "}
                <Text className="text-primary font-psemibold">
                  {activeText.reward.value}
                </Text>
              </Text>
            </>
          ) : (
            <>
              <View className="w-7 h-7 rounded-full bg-foreground/10 items-center justify-center">
                <Text className="text-sm">?</Text>
              </View>
              <Text className="text-foreground/40 font-pmedium">
                Powitanie: brak
              </Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
}
