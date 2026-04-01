import { Dot, Eye, EyeOff, LibraryBig } from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import useColors from "../hooks/useColors";

export default function ExamplesCard({ examples }: { examples: string[] }) {
  const colors = useColors();
  const [visible, setVisible] = useState<boolean[]>(
    Array(examples.length).fill(false),
  );

  return (
    <Animated.View
      layout={LinearTransition.springify()}
      className="w-full flex flex-col gap-4 justify-center items-start bg-secondary rounded-3xl p-4"
    >
      <View className="w-fit gap-2 flex flex-row items-center justify-start">
        <LibraryBig size={32} color={colors.primary} />
        <Text className="text-primary font-pmedium text-lg">
          {"Przykładowe konteksty"}
        </Text>
      </View>
      <View className="w-full flex flex-col gap-2 items-start justify-center">
        {examples.map((example, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setVisible((prev) => {
                  const updated = [...prev];
                  updated[index] = !updated[index];
                  return updated;
                });
              }}
              className="w-full flex flex-col gap-2 justify-center items-center"
              key={`mapped-example-${index}`}
              activeOpacity={0.7}
            >
              {index === 0 ? null : (
                <View className="w-full h-[1px] bg-pink-800/10 rounded-full z-50"></View>
              )}
              <View className="w-full gap-2 flex flex-row items-center justify-between">
                <View className="w-fit gap-2 flex flex-row items-center justify-start">
                  <Dot size={16} color={colors.foregroundPrimary} />
                  <Text className="text-pink-800 font-pmedium text-sm">
                    {visible[index] ? example : "*".repeat(example.length)}
                  </Text>
                </View>
                {visible[index] ? (
                  <Eye size={16} color={colors.foregroundPrimary} />
                ) : (
                  <EyeOff size={16} color={colors.foregroundPrimary} />
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </Animated.View>
  );
}
