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
        className={cn(
          "flex justify-center items-center rounded-full px-2 py-1 relative",
        )}
      >
        <View className={cn("w-fit aspect-square p-2 rounded-full z-10")}>
          {icon?.({
            focused,
            color: focused ? colors.primary : colors.foregroundPrimary,
            size: 24,
          })}
        </View>


        {focused && (
          <View
            pointerEvents="none"
            className={cn(
              "size-12 rounded-full absolute justify-center items-center"
            )}
            style={{ zIndex: 0 }}
          >
            <View
              className="rounded-full size-0"
              style={{
                boxShadow: `0 0 40px 15px ${colors.primary}`,
              }}
            />
          </View>
        )}
      </View>
    </TouchableOpacity >
  );
};

export default TabBarIcon;
