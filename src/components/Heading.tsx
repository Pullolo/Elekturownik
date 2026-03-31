import { Image } from "expo-image";
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
  const { name, avatar } = useUserData();

  return (
    <View className={cn("", className)}>
      <View className="flex flex-row gap-4 items-center">
        <View className="h-16 w-16 bg-amber-100 rounded-full overflow-hidden flex items-center justify-center">
          <Image
            style={{ width: "80%", height: "80%" }}
            source={{
              uri: avatar,
            }}
            contentFit="cover"
          />
        </View>
        <View>
          <Text className="text-foreground text-base font-pregular">
            {`${name}! 👋`}
          </Text>
          <Text className="text-foreground text-3xl font-pmedium">{text}</Text>
        </View>
      </View>
    </View>
  );
}
