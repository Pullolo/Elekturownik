import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useUserData } from "../hooks/useUserData";
import { cn } from "../lib/utils";

export default function Heading({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const { avatar } = useUserData();
  const description = "Miło cię widzieć >.< ...";
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
  }, []);

  return (
    <View className={cn("", className)}>
      <View className="flex flex-row gap-4 items-center">
        <View className="h-16 w-16 bg-secondary rounded-full overflow-hidden flex items-center justify-center">
          <Image
            style={{ width: "80%", height: "80%" }}
            source={{
              uri: avatar,
            }}
            contentFit="cover"
          />
        </View>
        <View>
          <Text className="text-foreground text-3xl font-pmedium">
            {`${text} 🌸`}
          </Text>
          <Text className="text-foreground/50 text-sm font-pregular">
            {`${description.substring(0, timer)}${description.length > timer ? "_" : ""}`}
          </Text>
        </View>
      </View>
    </View>
  );
}
