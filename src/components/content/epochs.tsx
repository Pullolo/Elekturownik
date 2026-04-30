import SmallEpochCard from "@/src/components/lists/SmallEpochCard";
import SearchBar from "@/src/components/ui/SearchBar";
import { epochs } from "@/src/data/epochs";
import { EpochStudy } from "@/src/data/types";
import { useTabBar } from "@/src/hooks/TabBarContext";
import { useDebounce } from "@/src/hooks/useDebounce";
import { pluralize } from "@/src/lib/utils";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import ScrollToTopButton from "../navigation/ScrollToTopButton";

export default function Epochs({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (v: string) => void;
}) {
  const { tabBarHeight } = useTabBar();

  const listRef = useRef<FlatList>(null);
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

  const debouncedQuery = useDebounce(query, 500);

  const filteredEpochs = useMemo(() => {
    const q = debouncedQuery.toLowerCase().trim();
    return epochs.filter((epoch) => {
      // Search query — name, keywords, themes, motifs
      if (q) {
        const authors = epoch.creators
          .map((c) => c.name)
          .join(" ")
          .toLowerCase();
        const keywords = epoch.exam.keyConcepts.join(" ").toLowerCase();
        const themes = epoch.themes
          .map((t) => t.name)
          .join(" ")
          .toLowerCase();
        const motifs = epoch.motifs
          .map((m) => m.name)
          .join(" ")
          .toLowerCase();
        const searchable = [epoch.name, keywords, themes, motifs, authors]
          .join(" ")
          .toLowerCase();
        if (!searchable.includes(q)) return false;
      }

      return true;
    });
  }, [debouncedQuery]);

  const renderItem = useCallback(
    ({ item }: { item: EpochStudy }) => <SmallEpochCard epoch={item} />,
    [],
  );

  const header = (
    <TopOfTheEpochs
      query={query}
      onQueryChange={setQuery}
      resultCount={filteredEpochs.length}
    />
  );

  return (
    <>
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex w-full flex-col gap-2 justify-center pb-4"
        data={filteredEpochs}
        keyExtractor={(item) => `rendered-epoch-flat-list-${item.id.toString()}`}
        renderItem={renderItem}
        ListHeaderComponent={header}
        ListEmptyComponent={
          <View className="flex items-center justify-center py-16">
            <Text className="text-gray-400 text-base">Brak wyników</Text>
          </View>
        }
        onScroll={(e) => {
          const y = e.nativeEvent.contentOffset.y;

          if (y > 300 && !showScrollTop) {
            setShowScrollTop(true);
          } else if (y <= 300 && showScrollTop) {
            setShowScrollTop(false);
          }
        }}
        scrollEventThrottle={16}
        ref={listRef}
      />
      <Animated.View
        pointerEvents={showScrollTop ? "auto" : "none"}
        style={[style, {
          bottom: tabBarHeight + 20
        }]}
        className={"absolute right-36 left-36"}
      >
        <ScrollToTopButton listRef={listRef} />
      </Animated.View >
    </>
  );
}

type HeaderProps = {
  query: string;
  onQueryChange: (v: string) => void;
  resultCount: number;
};

function TopOfTheEpochs({ query, onQueryChange, resultCount }: HeaderProps) {
  return (
    <View className="w-full flex flex-col gap-4 pb-4">
      {/* Search bar */}
      <SearchBar
        placeholder="Szukaj epoki, motywu, autora…"
        query={query}
        onQueryChange={onQueryChange}
      />

      {/* Result count */}
      <Text className="text-xs text-gray-400 px-1">
        {`${resultCount} / ${pluralize(epochs.length, "epoka", "epoki", "epok")}`}
      </Text>
    </View>
  );
}
