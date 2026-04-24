import {
  useChests,
  useOwnedRewards,
} from "@/src/components/context/InventoryContext";
import LootBox, {
  ChestVariant,
  RewardResultCard,
} from "@/src/components/lootboxes/Lootbox";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import BackButton from "@/src/components/ui/BackButton";
import { Reward } from "@/src/data/rewardmanager";
import { useTabBar } from "@/src/hooks/TabBarContext";
import { useChestClasses } from "@/src/hooks/useChestClasses";
import useColors from "@/src/hooks/useColors";
import { cn } from "@/src/lib/utils";
import { router } from "expo-router";
import { Award, Backpack, Box, Boxes, SquareDashed } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";

export default function LootBoxes() {
  const [currentVariant, setCurrentVariant] = useState<ChestVariant>("common");
  const [canSwitchVariant, setCanSwitchVariant] = useState(true);
  const [reward, setReward] = useState<Reward | null>(null);
  const [chestKey, setChestKey] = useState(0);

  const { tabBarHeight } = useTabBar();
  const colors = useColors();

  const { chests, adjustChestCount } = useChests();
  const { addReward } = useOwnedRewards();

  function handleRewardRevealed(r: Reward) {
    // Deduct one chest and save the reward
    adjustChestCount(currentVariant, -1);
    addReward(r);
    setReward(r);
  }

  function handleClose() {
    setReward(null);
    setChestKey((k) => k + 1);
    setCanSwitchVariant(true);
  }

  const currentChestCount = chests[currentVariant];

  return (
    <ScreenWrapper className="items-center">
      <ScrollView
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-6 items-start justify-center pb-4"
      >
        <BackButton text="Skrzynki" />

        {/* Loot box */}
        <View className="flex-col flex justify-center w-full items-center pb-4 pt-6 gap-2">
          <LootBox
            key={chestKey}
            amount={currentChestCount}
            variant={currentVariant}
            onRewardRevealed={handleRewardRevealed}
            setCanSwitchVariant={setCanSwitchVariant}
          />
          {!reward && (
            <Text className="font-pitalic text-xs text-foreground/20">
              {currentChestCount > 0
                ? "Wciśnij aby otworzyć"
                : "Brak skrzynek tego typu"}
            </Text>
          )}
        </View>

        {/* Result panel */}
        {reward && (
          <View className="w-full">
            <RewardResultCard reward={reward} onClose={handleClose} />
          </View>
        )}

        {/* Box selection */}
        <Animated.View
          layout={LinearTransition.springify()}
          className="w-full flex-col gap-3"
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              router.push("/(notabs)/inventory");
            }}
            className="flex flex-col bg-background-secondary w-full rounded-3xl border-l-4 p-4 border-primary"
          >
            <View className="flex flex-row gap-4 items-center w-full">
              <Backpack size={32} color={colors.primary} />
              <View className="flex flex-col items-start justify-center">
                <Text className="font-pbold text-lg p-px text-primary">
                  {"Zobacz ekwipunek"}
                </Text>
                <Text className="font-pitalic text-xs text-foreground/40 p-px">
                  {"Wszystkie twoje zebrane przedmioty"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              router.push("/(notabs)/achievements");
            }}
            className="flex flex-col bg-background-secondary w-full rounded-3xl border-l-4 p-4 border-secondary"
          >
            <View className="flex flex-row gap-4 items-center w-full">
              <Award size={32} color={colors.secondary} />
              <View className="flex flex-col items-start justify-center">
                <Text className="font-pbold text-lg p-px text-secondary">
                  {"Osiągnięcia"}
                </Text>
                <Text className="font-pitalic text-xs text-foreground/40 p-px">
                  {"Zdobywaj nagrody za postępy"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <ChestCard
            onPress={() => {
              if (canSwitchVariant) setCurrentVariant("common");
            }}
            variant="common"
            count={chests.common}
          />
          <ChestCard
            onPress={() => {
              if (canSwitchVariant) setCurrentVariant("gold");
            }}
            variant="gold"
            count={chests.gold}
          />
          <ChestCard
            onPress={() => {
              if (canSwitchVariant) setCurrentVariant("prismatic");
            }}
            variant="prismatic"
            count={chests.prismatic}
          />
        </Animated.View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export function ChestCard({
  variant,
  onPress,
  count,
}: {
  variant: ChestVariant;
  onPress?: () => void;
  count: number;
}) {
  const classes = useChestClasses(variant);

  const textVariants = {
    common: { title: "Zwykła Skrzynka", description: "Podstawowe nagrody" },
    gold: {
      title: "Złota Skrzynka",
      description: "Lepsze szanse na rzadkie nagrody",
    },
    prismatic: {
      title: "Pryzmatyczna Skrzynka",
      description: "Gwarantowane niepospolite lub lepsze",
    },
  };
  const iconVariants = {
    common: SquareDashed,
    gold: Box,
    prismatic: Boxes,
  };

  const text = textVariants[variant];
  const Icon = iconVariants[variant];

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={cn(
        "flex flex-col bg-background-secondary w-full rounded-3xl border-l-4 p-4",
        classes.topBorder,
      )}
      onPress={onPress}
    >
      <View className="flex flex-row w-full justify-between items-start">
        <View className="flex flex-row gap-4 items-center flex-1">
          <Icon size={32} color={classes.hexColor} />
          <View className="flex flex-col items-start justify-center">
            <Text className={cn("font-pbold text-lg p-px", classes.text)}>
              {text.title}
            </Text>
            <Text className="font-pitalic text-xs text-foreground/40 p-px">
              {text.description}
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center justify-center rounded-full bg-secondary/25 px-3 py-1 w-fit h-fit shrink-0">
          <Text className="text-secondary font-psemibold text-base h-fit">
            {`x${count}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
