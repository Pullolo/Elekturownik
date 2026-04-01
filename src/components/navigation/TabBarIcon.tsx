import useColors from "@/src/hooks/useColors";
import { cn } from "@/src/lib/utils";
import { TouchableOpacity, View } from "react-native";

const TabBarIcon = ({
  focused,
  icon,
  accessibilityState,
  accessibilityLabel,
  onPress,
  onLongPress,
}: {
  focused: boolean;
  icon?: (props: {
    focused: boolean;
    color: string;
    size: number;
  }) => React.ReactNode;
  accessibilityState: { selected?: boolean };
  accessibilityLabel?: string;
  onPress: () => void;
  onLongPress: () => void;
}) => {
  const colors = useColors();

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      accessibilityRole="button"
      accessibilityState={accessibilityState}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      onLongPress={onLongPress}
      className={cn("justify-center items-center")}
    >
      <View
        className={cn("flex justify-center items-center rounded-full p-4 py-1")}
      >
        <View className={cn("w-fit aspect-square p-2 rounded-full")}>
          {icon?.({
            focused,
            color: focused ? colors.primary : colors.foregroundPrimary,
            size: 24,
          })}
        </View>

        <View
          className={cn(
            "size-2 rounded-full bg-primary",
            focused ? "visible" : "invisible",
          )}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TabBarIcon;
