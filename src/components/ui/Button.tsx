import useColors from "@/src/hooks/useColors";
import { cn } from "@/src/lib/utils";
import { LucideProps } from "lucide-react-native";
import { Text, TouchableOpacity } from "react-native";

export default function Button({
  text,
  variant = "primary",
  icon: Icon,
  onPress,
  disabled = false,
  className,
}: {
  text: string;
  variant?: "primary" | "secondary" | "success" | "error";
  icon?: React.FC<LucideProps>;
  onPress?: () => void;
  disabled?: boolean;
  className?: string;
}) {
  const colors = useColors();

  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return {
          bg: "bg-green-500/25",
          text: "text-green-500",
          iconColor: "#22c55e",
        };
      case "error":
        return {
          bg: "bg-red-500/25",
          text: "text-red-500",
          iconColor: "#ef4444",
        };
      case "secondary":
        return {
          bg: "bg-secondary/25",
          text: "text-secondary",
          iconColor: colors.secondary,
        };
      case "primary":
      default:
        return {
          bg: "bg-primary/25",
          text: "text-primary",
          iconColor: colors.primary,
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      className={cn(
        "flex flex-row items-center justify-center gap-2 px-6 py-3 rounded-2xl",
        disabled ? "opacity-50" : "",
        styles.bg,
        className,
      )}
    >
      {Icon ? <Icon size={24} color={styles.iconColor} /> : null}
      <Text className={cn("text-lg font-psemibold", styles.text)}>{text}</Text>
    </TouchableOpacity>
  );
}
