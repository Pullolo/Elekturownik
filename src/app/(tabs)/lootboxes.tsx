import LootBox, { ChestVariant } from "@/src/components/lootboxes/Lootbox";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import BackButton from "@/src/components/ui/BackButton";
import { useTabBar } from "@/src/hooks/TabBarContext";
import { useChestClasses } from "@/src/hooks/useChestClasses";
import useColors from "@/src/hooks/useColors";
import { cn } from "@/src/lib/utils";
import { Award, Backpack, Box, Boxes, SquareDashed } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";

export default function LootBoxes() {
  const [currentVariant, setCurrentVariant] = useState<ChestVariant>("common");
  const { tabBarHeight } = useTabBar();
  const colors = useColors();

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
          <LootBox amount={0} variant={currentVariant} />
          <Text className="font-pitalic text-xs text-foreground/20">
            {"Wciśnij aby otworzyć"}
          </Text>
        </View>

        {/* Result */}
        {/* todo: show result when loot box is opened (best if it exapnds (animated)) */}

        {/* Box selection */}
        <Animated.View
          layout={LinearTransition.springify()}
          className="w-full flex-col gap-3"
        >
          <TouchableOpacity
            activeOpacity={0.7}
            className={cn(
              `flex flex-col bg-background-secondary w-full rounded-3xl border-l-4 p-4 border-primary`,
            )}
          >
            <View className="flex flex-row gap-4 items-center w-full">
              <Backpack size={32} color={colors.primary} />
              <View className="flex flex-col items-start justify-center">
                <Text className={cn("font-pbold text-lg p-px text-primary")}>
                  {"Zobacz ekwipunek"}
                </Text>
                <Text
                  className={cn("font-pitalic text-xs text-foreground/40 p-px")}
                >
                  {"Wszystkie twoje zebrane przedmioty"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            className={cn(
              `flex flex-col bg-background-secondary w-full rounded-3xl border-l-4 p-4 border-secondary`,
            )}
          >
            <View className="flex flex-row gap-4 items-center w-full">
              <Award size={32} color={colors.secondary} />
              <View className="flex flex-col items-start justify-center">
                <Text className={cn("font-pbold text-lg p-px text-secondary")}>
                  {"Osiągnięcia"}
                </Text>
                <Text
                  className={cn("font-pitalic text-xs text-foreground/40 p-px")}
                >
                  {"Zdobywaj nagrody za postępy"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <ChestCard
            onPress={() => {
              setCurrentVariant("common");
            }}
            variant={"common"}
          />
          <ChestCard
            onPress={() => {
              setCurrentVariant("gold");
            }}
            variant={"gold"}
          />
          <ChestCard
            onPress={() => {
              setCurrentVariant("prismatic");
            }}
            variant={"prismatic"}
          />
        </Animated.View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export function ChestCard({
  variant,
  onPress,
}: {
  variant: ChestVariant;
  onPress?: () => void;
}) {
  const classes = useChestClasses(variant);

  const textVariants = {
    common: {
      title: "Zwykła Skrzynka",
      description: "Podstawowe nagrody",
    },
    gold: {
      title: "Złota Skrzynka",
      description: "Gwarantowane rzadkie lub lepsze",
    },
    prismatic: {
      title: "Pryzmatyczna Skrzynka",
      description: "Gwarantowane epickie lub lepsze",
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
        `flex flex-col bg-background-secondary w-full rounded-3xl border-l-4 p-4`,
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
            <Text
              className={cn("font-pitalic text-xs text-foreground/40 p-px")}
            >
              {text.description}
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center justify-center rounded-full bg-secondary/25 px-3 py-1 w-fit h-fit shrink-0">
          <Text className="text-secondary font-psemibold text-base h-fit">
            {`x${0}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
