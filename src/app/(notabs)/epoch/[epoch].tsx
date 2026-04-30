import FullEpochView from "@/src/components/FullEpochView";
import ScrollToTopButton from "@/src/components/navigation/ScrollToTopButton";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import BackButton from "@/src/components/ui/BackButton";
import { useEpoch } from "@/src/hooks/useEpochs";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { ScrollView, Text } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function Book() {
  const { epoch: epochId } = useLocalSearchParams();

  const epoch = useEpoch(parseInt(epochId as string));

  const scrollViewRef = useRef<ScrollView>(null)

  const [showScrollTop, setShowScrollTop] = useState(false);
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(showScrollTop ? 1 : 0, {
      duration: 200,
    });
  }, [showScrollTop]);

  const style = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        {
          scale: 0.9 + 0.1 * opacity.value,
        },
        {
          translateY: 20 * (1 - opacity.value),
        },
      ],
    };
  });

  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-4 items-start justify-center pb-20"
        ref={scrollViewRef}
        onScroll={(e) => {
          const y = e.nativeEvent.contentOffset.y;

          if (y > 300 && !showScrollTop) {
            setShowScrollTop(true);
          } else if (y <= 300 && showScrollTop) {
            setShowScrollTop(false);
          }
        }}
        scrollEventThrottle={16}
      >
        <BackButton />

        {epoch ? (
          <FullEpochView epoch={epoch} />
        ) : (
          <Text className="w-full text-center text-primary font-psemibold text-xl">
            Nie znaleziono epoki
          </Text>
        )}
      </ScrollView>
      <Animated.View
        pointerEvents={showScrollTop ? "auto" : "none"}
        style={[style, {
          bottom: 30
        }]}
        className={"absolute right-36 left-36"}
      >
        <ScrollToTopButton listRef={scrollViewRef} />
      </Animated.View >
    </ScreenWrapper>
  );
}
