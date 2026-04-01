import { useTabBar } from "@/src/hooks/TabBarContext";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TabBarIcon from "./TabBarIcon";

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();
  const { setTabBarHeight } = useTabBar();

  return (
    <View
      className="absolute left-4 right-4 rounded-[32px] overflow-hidden"
      style={{ bottom: insets.bottom + 16 }}
      onLayout={(e) =>
        setTabBarHeight(e.nativeEvent.layout.height + insets.bottom)
      }
    >
      <BlurView
        intensity={60}
        tint="systemChromeMaterial"
        className="flex-row justify-around items-center"
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const focused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TabBarIcon
              key={route.key}
              focused={focused}
              icon={options.tabBarIcon}
              accessibilityState={{ selected: focused }}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
            />
          );
        })}
      </BlurView>
    </View>
  );
};

export default TabBar;
