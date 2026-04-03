import { LucideProps } from "lucide-react-native";
import { ReactNode, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";
import useColors from "../hooks/useColors";

export const AnimatedTouchable =
  Animated.createAnimatedComponent(TouchableOpacity);

export default function ExpandableCard({
  text,
  children,
  LIcon,
}: {
  text: string;
  children?: ReactNode;
  LIcon: React.FC<LucideProps>;
}) {
  const [expanded, setExpanded] = useState(false);
  const color = useColors();

  return (
    <AnimatedTouchable
      layout={LinearTransition.springify()}
      activeOpacity={0.7}
      className="w-full flex flex-col justify-center items-start bg-background-secondary rounded-3xl p-4 overflow-hidden"
      onPress={() => setExpanded(!expanded)}
    >
      <View className="w-full flex flex-row items-center justify-between">
        <View className="w-fit gap-2 flex flex-row items-center justify-start">
          <LIcon size={32} color={color.secondary} />
          <Text className="text-secondary font-pmedium text-lg">{text}</Text>
        </View>
        <Text className="text-secondary font-pmedium text-3xl">
          {expanded ? "-" : "+"}
        </Text>
      </View>

      {expanded && children ? (
        <Animated.View className={"w-full"} entering={FadeIn} exiting={FadeOut}>
          {children}
        </Animated.View>
      ) : null}
    </AnimatedTouchable>
  );
}
