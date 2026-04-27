import { cn } from "@/src/lib/utils";
import { Pressable, Text } from "react-native";

export default function FilterChip({
  label,
  active,
  onPress,
  textClassName
}: {
  label: string;
  active: boolean;
  onPress: () => void;
  textClassName?: string
}) {
  return (
    <Pressable
      onPress={onPress}
      className={`px-3 py-1.5 rounded-full border ${active
          ? "bg-primary border-primary"
          : "bg-background border-foreground/10"
        }`}
    >
      <Text
        className={cn(`text-xs font-medium ${active ? "text-white" : "text-gray-600"
          }`, textClassName)}
      >
        {label}
      </Text>
    </Pressable>
  );
}
