import useColors from "@/src/hooks/useColors";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export default function BackButton({ text = "Powrót" }: { text?: string }) {
  const colors = useColors();
  return (
    <TouchableOpacity
      onPress={() => {
        router.back();
      }}
      activeOpacity={0.7}
      className="flex flex-row w-full items-center justify-start gap-4"
    >
      <View className="w-fit flex flex-row justify-center items-center p-4 bg-primary/25 rounded-3xl">
        <ChevronLeft size={24} color={colors.primary} />
      </View>
      <Text className="text-2xl font-psemibold text-primary">{text}</Text>
    </TouchableOpacity>
  );
}
