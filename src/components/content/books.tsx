import { useLearnedItemsContext } from "@/src/components/context/LearnedItemsContext";
import SmallBookCard from "@/src/components/lists/SmallBookCard";
import FilterChip from "@/src/components/ui/FilterChip";
import SearchBar from "@/src/components/ui/SearchBar";
import { books } from "@/src/data/books";
import { Book } from "@/src/data/types";
import { useTabBar } from "@/src/hooks/TabBarContext";
import { useDebounce } from "@/src/hooks/useDebounce";
import { pluralize } from "@/src/lib/utils";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import ScrollToTopButton from "../navigation/ScrollToTopButton";

type EpochFilter = Book["epoch"] | "Wszystkie";
type LearnedFilter = "Wszystkie" | "Nauczone" | "Nienauczone";

const EPOCHS: EpochFilter[] = [
  "Wszystkie",
  "Antyk",
  "Średniowiecze",
  "Renesans",
  "Barok",
  "Oświecenie",
  "Romantyzm",
  "Pozytywizm",
  "Młoda Polska",
  "XX-lecie międzywojenne",
  "Współczesność",
];

const LEARNED_FILTERS: LearnedFilter[] = [
  "Wszystkie",
  "Nauczone",
  "Nienauczone",
];

export default function Books({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (v: string) => void;
}) {
  const { tabBarHeight } = useTabBar();
  const { isBookLearned } = useLearnedItemsContext();

  const debouncedQuery = useDebounce(query, 500);
  const [epochFilter, setEpochFilter] = useState<EpochFilter>("Wszystkie");
  const [learnedFilter, setLearnedFilter] =
    useState<LearnedFilter>("Wszystkie");
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


  const filteredBooks = useMemo(() => {
    const q = debouncedQuery.toLowerCase().trim();
    return books.filter((book) => {
      // Epoch filter
      if (epochFilter !== "Wszystkie" && book.epoch !== epochFilter)
        return false;

      // Learned filter
      const learned = isBookLearned(book.id.toString());
      if (learnedFilter === "Nauczone" && !learned) return false;
      if (learnedFilter === "Nienauczone" && learned) return false;

      // Search query — title, author, keywords, themes, motifs
      if (q) {
        const keywords = book.exam.keywords.join(" ").toLowerCase();
        const themes = book.themes
          .map((t) => t.name)
          .join(" ")
          .toLowerCase();
        const motifs = book.motifs
          .map((m) => m.name)
          .join(" ")
          .toLowerCase();
        const searchable = [
          book.title,
          book.author,
          book.epoch,
          keywords,
          themes,
          motifs,
        ]
          .join(" ")
          .toLowerCase();
        if (!searchable.includes(q)) return false;
      }

      return true;
    });
  }, [debouncedQuery, epochFilter, learnedFilter, isBookLearned]);

  const renderItem = useCallback(
    ({ item }: { item: Book }) => (
      <SmallBookCard book={item} learned={isBookLearned(item.id.toString())} />
    ),
    [isBookLearned],
  );

  const header = (
    <TopOfTheBooks
      query={query}
      onQueryChange={setQuery}
      epochFilter={epochFilter}
      onEpochChange={setEpochFilter}
      learnedFilter={learnedFilter}
      onLearnedChange={setLearnedFilter}
      resultCount={filteredBooks.length}
    />
  );

  return (
    <>
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex w-full flex-col gap-2 justify-center pb-4"
        data={filteredBooks}
        keyExtractor={(item) => `rendered-book-flat-list-${item.id.toString()}`}
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
  epochFilter: EpochFilter;
  onEpochChange: (v: EpochFilter) => void;
  learnedFilter: LearnedFilter;
  onLearnedChange: (v: LearnedFilter) => void;
  resultCount: number;
};

function TopOfTheBooks({
  query,
  onQueryChange,
  epochFilter,
  onEpochChange,
  learnedFilter,
  onLearnedChange,
  resultCount,
}: HeaderProps) {
  return (
    <View className="w-full flex flex-col gap-4 pb-4">
      {/* Search bar */}
      <SearchBar
        placeholder="Szukaj tytułu, autora, motywu…"
        query={query}
        onQueryChange={onQueryChange}
      />

      <View className="w-full flex flex-col gap-2">
        {/* Learned filter chips */}
        <View className="flex-row gap-2">
          {LEARNED_FILTERS.map((f) => (
            <FilterChip
              key={f}
              label={f}
              active={learnedFilter === f}
              onPress={() => onLearnedChange(f)}
            />
          ))}
        </View>

        {/* Epoch filter — horizontal scroll */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="flex-row gap-2 pr-4"
        >
          {EPOCHS.map((e) => (
            <FilterChip
              key={e}
              label={e}
              active={epochFilter === e}
              onPress={() => onEpochChange(e)}
            />
          ))}
        </ScrollView>
      </View>

      {/* Result count */}
      <Text className="text-xs text-gray-400 px-1">
        {`${resultCount} / ${pluralize(books.length, "lektura", "lektury", "lektur")}`}
      </Text>
    </View>
  );
}
