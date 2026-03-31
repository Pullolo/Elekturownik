import { Lightbulb } from "lucide-react-native";
import { ReactNode, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default function ExpandableCard({
  text,
  children,
}: {
  text: string;
  children?: ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatedTouchable
      layout={LinearTransition.springify()} // 👈 this animates height automatically
      activeOpacity={0.7}
      className="w-full flex flex-col justify-center items-start bg-secondary rounded-3xl p-4 overflow-hidden"
      onPress={() => setExpanded(!expanded)}
    >
      <View className="w-full flex flex-row items-center justify-between">
        <View className="w-fit gap-2 flex flex-row items-center justify-start">
          <Lightbulb size={32} color={"#EE3F86"} />
          <Text className="text-primary font-pmedium text-lg">{text}</Text>
        </View>
        <Text className="text-primary font-pmedium text-3xl">
          {expanded ? "-" : "+"}
        </Text>
      </View>

      {expanded && children ? (
        <Animated.View entering={FadeIn} exiting={FadeOut}>
          {children}
        </Animated.View>
      ) : null}
    </AnimatedTouchable>
  );
}
