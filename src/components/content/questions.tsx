import { useLearnedItemsContext } from "@/src/components/context/LearnedItemsContext";
import SmallQuestionCard from "@/src/components/lists/SmallQuestionCard";
import FilterChip from "@/src/components/ui/FilterChip";
import SearchBar from "@/src/components/ui/SearchBar";
import { questions } from "@/src/data/questions";
import { Question } from "@/src/data/types";
import { useTabBar } from "@/src/hooks/TabBarContext";
import { useDebounce } from "@/src/hooks/useDebounce";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import ScrollToTopButton from "../navigation/ScrollToTopButton";

type LearnedFilter = "Wszystkie" | "Nauczone" | "Nienauczone";

const LEARNED_FILTERS: LearnedFilter[] = [
  "Wszystkie",
  "Nauczone",
  "Nienauczone",
];

export default function Questions({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (v: string) => void;
}) {
  const { tabBarHeight } = useTabBar();
  const { isQuestionLearned } = useLearnedItemsContext();

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
  const [learnedFilter, setLearnedFilter] =
    useState<LearnedFilter>("Wszystkie");

  const filteredQuestions = useMemo(() => {
    const q = debouncedQuery.toLowerCase().trim();

    return questions.filter((question) => {
      const learned = isQuestionLearned(question.id.toString());

      // Learned filter
      if (learnedFilter === "Nauczone" && !learned) return false;
      if (learnedFilter === "Nienauczone" && learned) return false;

      // Search
      if (q) {
        const searchable = [question.book, question.question]
          .join(" ")
          .toLowerCase();

        if (!searchable.includes(q)) return false;
      }

      return true;
    });
  }, [debouncedQuery, learnedFilter, isQuestionLearned]);

  const renderItem = useCallback(
    ({ item }: { item: Question }) => (
      <SmallQuestionCard
        question={item}
        learned={isQuestionLearned(item.id.toString())}
      />
    ),
    [isQuestionLearned],
  );

  const header = (
    <TopOfTheQuestions
      query={query}
      onQueryChange={setQuery}
      learnedFilter={learnedFilter}
      onLearnedChange={setLearnedFilter}
      resultCount={filteredQuestions.length}
    />
  );

  return (
    <>
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex w-full flex-col gap-2 justify-center pb-4"
        data={filteredQuestions}
        keyExtractor={(item) =>
          `rendered-question-flat-list-${item.id.toString()}`
        }
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
  learnedFilter: LearnedFilter;
  onLearnedChange: (v: LearnedFilter) => void;
  resultCount: number;
};

function TopOfTheQuestions({
  query,
  onQueryChange,
  learnedFilter,
  onLearnedChange,
  resultCount,
}: HeaderProps) {
  return (
    <View className="w-full flex flex-col gap-4 pb-4">
      <SearchBar
        placeholder="Szukaj pytania..."
        query={query}
        onQueryChange={onQueryChange}
      />

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

      <Text className="text-xs text-gray-400 px-1">
        {`${resultCount} / ${questions.length} pytań`}
      </Text>
    </View>
  );
}
