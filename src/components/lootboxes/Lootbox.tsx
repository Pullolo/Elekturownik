import { useChestClasses } from "@/src/hooks/useChestClasses";
import { cn } from "@/src/lib/utils";
import { Text, View } from "react-native";

export type ChestVariant = "common" | "gold" | "prismatic";

interface LootBoxProps {
  amount?: number;
  variant?: ChestVariant;
}

export default function LootBox({ amount, variant = "common" }: LootBoxProps) {
  const classes = useChestClasses(variant);

  return (
    <View className="w-36 h-32 items-center justify-start bg-background relative">
      {amount !== undefined && (
        <View className="absolute -top-8 -right-12 z-10 flex flex-row gap-1 rounded-full bg-primary/25 px-3 py-1">
          <Text className="text-primary font-psemibold text-base">
            {`x${amount}`}
          </Text>
        </View>
      )}
      {/* lootbox */}
      <View className="relative h-full w-full items-center justify-center">
        {/* Top Lid */}
        <View
          className={cn(
            "w-full h-[42%] rounded-2xl border-4 overflow-hidden relative",
            classes.topLid,
            classes.topBorder,
          )}
        >
          {/* center vertical stripe */}
          <View
            className={cn("absolute self-center h-full w-5", classes.topStripe)}
          />

          {/* top shine */}
          <View className="absolute top-2 left-2 right-2 h-4 rounded-xl bg-white/20" />

          {/* horizontal band */}
          <View
            className={cn(
              "absolute top-1/2 left-0 right-0 h-2",
              classes.topBand,
            )}
          />
        </View>
        {/* Bottom Chest */}
        <View
          className={cn(
            "w-full h-[58%] -mt-2 rounded-2xl border-4 overflow-hidden relative",
            classes.bottomChest,
            classes.bottomBorder,
          )}
        >
          {/* center vertical stripe */}
          <View
            className={cn(
              "absolute self-center h-full w-6",
              classes.bottomStripe,
            )}
          />

          {/* horizontal band */}
          <View
            className={cn(
              "absolute top-1/2 left-0 right-0 h-2",
              classes.bottomBand,
            )}
          />

          {/* Lock */}
          <View
            className={cn(
              "absolute top-0 self-center translate-y-2 w-12 h-12 rounded-xl items-center justify-center",
              classes.lockBg,
            )}
          >
            {/* lock shackle */}
            <View
              className={cn(
                "absolute top-2 w-5 h-5 rounded-full border-[4px]",
                classes.lockAccent.split(" ")[0],
              )}
            />

            {/* lock body */}
            <View
              className={cn(
                "absolute bottom-2 w-4 h-4 rounded-md",
                classes.lockAccent.split(" ")[1],
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
