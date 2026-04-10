import { Dot, Eye, EyeOff, LibraryBig } from "lucide-react-native";
import { useState } from "react";
import { Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";
import { Context } from "../data/types";
import useColors from "../hooks/useColors";
import { clamp } from "../lib/utils";
import { AnimatedTouchable } from "./ExpandableCard";

export default function ExamplesCard({ examples }: { examples: Context[] }) {
  const colors = useColors();
  const [visible, setVisible] = useState<boolean[]>(
    Array(examples.length).fill(false),
  );

  return (
    <Animated.View
      layout={LinearTransition.springify()}
      className="w-full flex flex-col gap-4 justify-center items-start bg-background-secondary rounded-3xl p-4"
    >
      <View className="w-fit gap-2 flex flex-row items-center justify-start">
        <LibraryBig size={32} color={colors.secondary} />
        <Text className="text-secondary font-pmedium text-lg">
          {"Przykładowe konteksty"}
        </Text>
      </View>
      <View className="w-full flex flex-col gap-2 items-start justify-center">
        {examples.map((example, index) => {
          return (
            <AnimatedTouchable
              onPress={() => {
                setVisible((prev) => {
                  const updated = [...prev];
                  updated[index] = !updated[index];
                  return updated;
                });
              }}
              layout={LinearTransition.springify()}
              className="w-full flex flex-col gap-2 justify-center items-center"
              key={`mapped-example-${index}`}
              activeOpacity={0.7}
            >
              {index === 0 ? null : (
                <View className="w-full h-[1px] bg-foreground-primary/10 rounded-full z-50"></View>
              )}
              <View className="w-full gap-2 flex flex-row items-start justify-between">
                <View className="w-fit gap-2 flex flex-row items-start justify-start flex-1">
                  <Dot
                    size={16}
                    color={colors.secondary}
                    className="shrink-0"
                  />
                  {visible[index] ? (
                    <Animated.View
                      entering={FadeIn}
                      exiting={FadeOut}
                      className="flex flex-col gap-1"
                    >
                      <Text className="text-foreground/75 font-psemibold text-sm">
                        {example.title}
                      </Text>
                      <Text className="text-foreground/50 font-pregular text-xs leading-relaxed">
                        {example.description}
                      </Text>
                    </Animated.View>
                  ) : (
                    <Animated.Text
                      entering={FadeIn}
                      exiting={FadeOut}
                      className="text-foreground/75 font-psemibold text-sm flex-1 text-wrap"
                    >
                      {clamp("*".repeat(example.title.length), 38, "***")}
                    </Animated.Text>
                  )}
                </View>
                <View className="w-fit h-fit flex justify-center items-center shrink-0">
                  {visible[index] ? (
                    <Eye size={16} color={colors.secondary} />
                  ) : (
                    <EyeOff size={16} color={colors.secondary} />
                  )}
                </View>
              </View>
            </AnimatedTouchable>
          );
        })}
      </View>
    </Animated.View>
  );
}
