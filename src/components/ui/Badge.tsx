import useColors from "@/src/hooks/useColors";
import { cn } from "@/src/lib/utils";
import { LucideProps } from "lucide-react-native";
import { Text, TouchableOpacity } from "react-native";

export default function Badge({
  text,
  theme,
  LIcon,
  onPress,
}: {
  text: string;
  theme?:
    | "white"
    | "primary"
    | "secondary"
    | "noBackground"
    | "success"
    | "error";
  LIcon?: React.FC<LucideProps>;
  onPress?: () => void;
}) {
  const colors = useColors();

  const getThemeColor = (): string => {
    switch (theme) {
      case "success":
        return "#22c55e";
      case "error":
        return "#ef4444";
      case "secondary":
        return colors.secondary;
      case "primary":
      case "noBackground":
        return colors.primary;
      default:
        return "#fff";
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className={cn(
        "flex flex-row items-center justify-center gap-1 px-4 py-2 rounded-full",
        theme === "primary"
          ? "bg-primary/25"
          : theme === "secondary"
            ? "bg-secondary/25"
            : theme === "success"
              ? "bg-green-500/25"
              : theme === "error"
                ? "bg-red-500/25"
                : theme === "noBackground"
                  ? "bg-white/0"
                  : "bg-white/25",
      )}
    >
      {LIcon ? <LIcon size={12} color={getThemeColor()} /> : null}
      <Text
        className={cn(
          "text-xs font-psemibold w-fit",
          theme === "primary" || theme === "noBackground"
            ? "text-primary"
            : theme === "secondary"
              ? "text-secondary"
              : theme === "success"
                ? "text-green-500"
                : theme === "error"
                  ? "text-red-500"
                  : "text-white",
        )}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
