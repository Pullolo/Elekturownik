import useColors from "@/src/hooks/useColors";
import { cn } from "@/src/lib/utils";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  LayoutChangeEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Segment<T extends string> = {
  key: T;
  label: string;
  icon?: React.FC<{ size: number; color: string }>;
};

type SegmentedControlProps<T extends string> = {
  segments: Segment<T>[];
  selected: T;
  onChange: (key: T) => void;
};

export default function SegmentedControl<T extends string>({
  segments,
  selected,
  onChange,
}: SegmentedControlProps<T>) {
  const colors = useColors();
  const [containerWidth, setContainerWidth] = useState(0);
  const selectedIndex = segments.findIndex((s) => s.key === selected);
  const translateX = useRef(new Animated.Value(0)).current;

  const PADDING = 4;
  const segmentWidth =
    containerWidth > 0 ? (containerWidth - PADDING * 2) / segments.length : 0;

  useEffect(() => {
    if (containerWidth === 0) return;
    Animated.spring(translateX, {
      toValue: selectedIndex * segmentWidth,
      useNativeDriver: true,
      damping: 20,
      stiffness: 220,
      mass: 0.7,
    }).start();
  }, [selectedIndex, segmentWidth, containerWidth, translateX]);

  const handleLayout = (e: LayoutChangeEvent) =>
    setContainerWidth(e.nativeEvent.layout.width);

  return (
    <View
      onLayout={handleLayout}
      className={cn(
        "flex-row rounded-[18px] p-1 relative",
        colors.dark ? "bg-white/[0.06]" : "bg-black/[0.05]",
      )}
    >
      {/* Sliding pill — inline style only for dynamic pixel values & shadow */}
      {containerWidth > 0 && (
        <Animated.View
          className={cn(
            "absolute top-1 bottom-1 left-1",
            colors.dark
              ? "bg-background-secondary border border-primary/30"
              : "bg-white",
          )}
          style={{
            width: segmentWidth,
            transform: [{ translateX }],
            shadowColor: colors.primary,
            shadowOpacity: colors.dark ? 0.25 : 0.08,
            shadowRadius: 6,
            shadowOffset: { width: 0, height: 2 },
            elevation: 3,
            borderRadius: 16,
          }}
        />
      )}

      {segments.map((segment) => {
        const isSelected = segment.key === selected;

        return (
          <TouchableOpacity
            key={segment.key}
            onPress={() => onChange(segment.key)}
            activeOpacity={0.7}
            className="flex-1 flex-row items-center justify-center gap-1.5 py-2 px-3 z-10"
          >
            {segment.icon && (
              <segment.icon
                size={12}
                color={isSelected ? colors.primary : colors.foregroundSecondary}
              />
            )}
            <Text
              className={cn(
                "text-xs",
                isSelected
                  ? "text-primary font-psemibold"
                  : "text-foreground-secondary font-pmedium",
              )}
            >
              {segment.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
