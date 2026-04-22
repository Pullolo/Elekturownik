import { Image } from "expo-image";
import { router } from "expo-router";
import { Settings2 } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import useColors from "../hooks/useColors";
import { cn } from "../lib/utils";
import { useUserData } from "./context/UserDataContext";

export default function Heading({
  text,
  className,
  emoji = "📖",
  description = "Miło cię widzieć!",
}: {
  text: string;
  className?: string;
  description?: string;
  emoji?: string;
}) {
  const colors = useColors();
  const { avatar, pickAvatar } = useUserData();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev >= description.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [description]);

  return (
    <View className={cn("w-full", className)}>
      <View className="w-full flex flex-row justify-between items-center">
        <View className="flex flex-row gap-4 items-center">
          <TouchableOpacity onPress={pickAvatar} activeOpacity={0.8}>
            <View className="h-16 w-16 bg-secondary/25 rounded-full overflow-hidden flex items-center justify-center">
              <Image
                style={{ width: "100%", height: "100%" }}
                source={{ uri: avatar }}
                contentFit="cover"
              />
            </View>
          </TouchableOpacity>
          <View>
            <Text className="text-foreground text-3xl font-pmedium">
              {`${text} ${emoji}`}
            </Text>
            <Text className="text-foreground/50 text-sm font-pregular">
              {`${description.substring(0, timer)}${description.length > timer ? "_" : ""}`}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            router.push("/(notabs)/settings");
          }}
          activeOpacity={0.7}
          className="w-fit flex flex-row justify-center items-center p-4 bg-primary/25 rounded-3xl"
        >
          <Settings2 size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
