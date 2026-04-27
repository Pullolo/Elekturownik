import ScreenWrapper from "@/src/components/ScreenWrapper";
import BackButton from "@/src/components/ui/BackButton";
import Button from "@/src/components/ui/Button";
import FilterChip from "@/src/components/ui/FilterChip";
import {
  BookTestQuestion,
  ClosedTestQuestion,
  Test,
} from "@/src/data/tests/types";
import { useTabBar } from "@/src/hooks/TabBarContext";
import { useBooks } from "@/src/hooks/useBooks";
import useColors from "@/src/hooks/useColors";
import { useEpochs } from "@/src/hooks/useEpochs";
import { useTestQuestions } from "@/src/hooks/useTestQuestions";
import { cn } from "@/src/lib/utils";
import { router } from "expo-router";
import {
  BookOpen,
  Gauge,
  Hash,
  Layers,
  PencilLine,
  Sparkles,
  X,
} from "lucide-react-native";
import { useEffect, useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";

const TEST_TYPES = ["Otwarty", "Zamknięty", "Matura"] as const;
const DIFFICULTIES = ["Mieszany", "Łatwy", "Średni", "Trudny"] as const;
const QUESTION_MIN = 1;
const QUESTION_MAX = 12;

export default function Tests() {
  const { tabBarHeight } = useTabBar();
  const { epochs } = useEpochs();
  const { books } = useBooks();
  const { test_questions } = useTestQuestions();

  // narrow to book questions only — grammar questions won't have epoch_id / book_id
  const bookQuestions = test_questions.filter(
    (q): q is BookTestQuestion => "book_id" in q,
  );

  // derive which epoch_ids and book_ids have at least one question
  const epochIdsWithQuestions = new Set(bookQuestions.map((q) => q.epoch_id));
  const bookIdsWithQuestions = new Set(bookQuestions.map((q) => q.book_id));

  const [testType, setTestType] = useState(0);
  const [selectedEpochIds, setSelectedEpochIds] = useState<number[]>([]);
  const [selectedBookIds, setSelectedBookIds] = useState<number[]>([]);
  const [difficulty, setDifficulty] = useState(1);
  const [numQuestions, setNumQuestions] = useState(8);

  // derive available books from selected epochs that also have questions
  const availableBooks = books.filter(
    (book) =>
      selectedEpochIds.includes(book.epoch_id) &&
      bookIdsWithQuestions.has(book.id),
  );

  // compute the max questions available for the current book + type + difficulty selection
  const dynamicMax = useMemo(() => {
    if (selectedBookIds.length === 0) return QUESTION_MAX;

    const selectedType = TEST_TYPES[testType];
    const selectedDifficulty = difficulty > 0 ? DIFFICULTIES[difficulty] : null;

    const count = bookQuestions.filter((q) => {
      if (!selectedBookIds.includes(q.book_id)) return false;
      if (q.question_type !== selectedType) return false;
      if (selectedDifficulty && q.difficulty !== selectedDifficulty)
        return false;
      return true;
    }).length;

    return Math.min(QUESTION_MAX, Math.max(0, count));
  }, [selectedBookIds, testType, difficulty, bookQuestions]);

  // clamp numQuestions whenever the ceiling changes
  useEffect(() => {
    if (dynamicMax === 0) return; // leave numQuestions as-is; button is disabled anyway
    setNumQuestions((n) => Math.min(Math.max(n, QUESTION_MIN), dynamicMax));
  }, [dynamicMax]);

  function toggleEpoch(id: number) {
    setSelectedEpochIds((prev) => {
      const next = prev.includes(id)
        ? prev.filter((e) => e !== id)
        : [...prev, id];

      // drop books that no longer belong to a selected epoch
      const validBookIds = new Set(
        books.filter((b) => next.includes(b.epoch_id)).map((b) => b.id),
      );
      setSelectedBookIds((sb) => sb.filter((bid) => validBookIds.has(bid)));
      return next;
    });
  }

  function toggleBook(id: number) {
    setSelectedBookIds((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id],
    );
  }

  function canGenerate() {
    return (
      selectedEpochIds.length > 0 &&
      selectedBookIds.length > 0 &&
      dynamicMax > 0
    );
  }

  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-4 items-start"
      >
        <BackButton text="Generator testów" />

        {/* ── Type ── */}
        <SectionCard>
          <SectionLabel text="Typ testu" Icon={PencilLine} />
          <View className="flex flex-row flex-wrap gap-2">
            {TEST_TYPES.map((value, i) => (
              <FilterChip
                key={`type_${i}`}
                active={testType === i}
                label={value}
                onPress={() => setTestType(i)}
              />
            ))}
          </View>
        </SectionCard>

        {/* ── Epochs ── */}
        <SectionCard>
          <SectionLabel text="Epoki" Icon={BookOpen} />
          <View className="flex flex-row flex-wrap gap-2">
            {epochs
              .filter((epoch) => epochIdsWithQuestions.has(epoch.id))
              .map((epoch) => (
                <FilterChip
                  key={epoch.id}
                  active={selectedEpochIds.includes(epoch.id)}
                  label={epoch.name}
                  onPress={() => toggleEpoch(epoch.id)}
                />
              ))}
          </View>
        </SectionCard>

        {/* ── Books (only shown when at least one epoch is selected) ── */}
        {selectedEpochIds.length > 0 && (
          <Animated.View
            layout={LinearTransition.springify()}
            className="w-full"
          >
            <SectionCard>
              <SectionLabel text="Lektury" Icon={Layers} />
              {availableBooks.length === 0 ? (
                <Text className="text-foreground/40 font-pregular text-xs">
                  Brak lektur dla wybranych epok.
                </Text>
              ) : (
                <View className="flex flex-col gap-2">
                  {selectedEpochIds.map((epochId) => {
                    const epochBooks = books.filter(
                      (b) =>
                        b.epoch_id === epochId &&
                        bookIdsWithQuestions.has(b.id),
                    );
                    if (!epochBooks.length) return null;
                    const epoch = epochs.find((e) => e.id === epochId)!;
                    return (
                      <View key={epochId} className="flex flex-col gap-2">
                        <Text className="text-foreground/30 font-psemibold text-xs uppercase tracking-widest">
                          {epoch.name}
                        </Text>
                        <View className="flex flex-row flex-wrap gap-2">
                          {epochBooks.map((book) => (
                            <FilterChip
                              key={book.id}
                              active={selectedBookIds.includes(book.id)}
                              label={book.title}
                              onPress={() => toggleBook(book.id)}
                            />
                          ))}
                        </View>
                      </View>
                    );
                  })}
                </View>
              )}
            </SectionCard>
          </Animated.View>
        )}

        {/* ── Difficulty ── */}
        <SectionCard>
          <SectionLabel text="Poziom trudności" Icon={Gauge} />
          <View className="flex flex-row gap-2">
            {DIFFICULTIES.map((label, i) => (
              <FilterChip
                key={`diff_${i}`}
                active={difficulty === i}
                label={label}
                onPress={() => setDifficulty(i)}
              />
            ))}
          </View>
        </SectionCard>

        {/* ── Number of questions ── */}
        <SectionCard>
          <View className="flex flex-row justify-between items-center">
            <SectionLabel text="Liczba pytań" Icon={Hash} />
            <View className="flex flex-row items-end gap-0.5">
              <Text className="text-primary font-pbold text-lg leading-none">
                {numQuestions}
              </Text>
              <Text className="text-foreground/30 font-pregular text-sm leading-none mb-px">
                /{dynamicMax}
              </Text>
            </View>
          </View>

          {/* stepper row */}
          <View className="flex flex-row items-center gap-3">
            <StepperButton
              label="−"
              onPress={() =>
                setNumQuestions((n) => Math.max(QUESTION_MIN, n - 1))
              }
              disabled={numQuestions <= QUESTION_MIN}
            />

            {/* track */}
            <View className="flex-1 h-1.5 rounded-full bg-foreground/10 overflow-hidden">
              <View
                className="h-full rounded-full bg-primary/50"
                style={{
                  width:
                    dynamicMax === QUESTION_MIN
                      ? "100%"
                      : `${
                          ((numQuestions - QUESTION_MIN) /
                            (dynamicMax - QUESTION_MIN)) *
                          100
                        }%`,
                }}
              />
            </View>

            <StepperButton
              label="+"
              onPress={() =>
                setNumQuestions((n) => Math.min(dynamicMax, n + 1))
              }
              disabled={numQuestions >= dynamicMax}
            />
          </View>

          {/* quick-pick dots */}
          <View className="flex flex-row justify-between px-0.5">
            {Array.from(
              { length: dynamicMax - QUESTION_MIN + 1 },
              (_, i) => i + QUESTION_MIN,
            ).map((n) => (
              <TouchableOpacity
                key={n}
                onPress={() => setNumQuestions(n)}
                hitSlop={{ top: 8, bottom: 8, left: 4, right: 4 }}
              >
                <View
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    n === numQuestions ? "bg-primary" : "bg-foreground/20",
                  )}
                />
              </TouchableOpacity>
            ))}
          </View>
        </SectionCard>

        {/* ── Generate ── */}
        <Button
          className="w-full"
          icon={canGenerate() ? Sparkles : X}
          text="Generuj test"
          variant={canGenerate() ? "success" : "error"}
          disabled={!canGenerate()}
          onPress={() => {
            const selectedType = TEST_TYPES[testType];
            const selectedDifficulty =
              difficulty > 0 ? DIFFICULTIES[difficulty] : null;

            const pool = bookQuestions.filter((q) => {
              if (!selectedBookIds.includes(q.book_id)) return false;
              if (q.question_type !== selectedType) return false;
              if (selectedDifficulty && q.difficulty !== selectedDifficulty)
                return false;
              return true;
            });

            // Fisher-Yates shuffle, then slice to desired count
            const shuffled = [...pool];
            for (let i = shuffled.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }

            const test: Test = shuffled.slice(0, numQuestions).map((q) => {
              if (q.question_type === "Zamknięty") {
                const closed = q as ClosedTestQuestion;
                const shuffledAnswers = [...closed.answers];
                for (let i = shuffledAnswers.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  [shuffledAnswers[i], shuffledAnswers[j]] = [
                    shuffledAnswers[j],
                    shuffledAnswers[i],
                  ];
                }
                return { ...closed, answers: shuffledAnswers };
              }
              return q;
            });
            router.push({
              pathname: "/(notabs)/test",
              params: { test: JSON.stringify(test) },
            });
          }}
        />
      </ScrollView>
    </ScreenWrapper>
  );
}

// ─── shared primitives ─────────────────────────────────────────────────────────

function SectionCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const colors = useColors();
  return (
    <Animated.View
      layout={LinearTransition.springify()}
      className={cn(
        "rounded-3xl p-5 flex flex-col gap-3 w-full self-start",
        colors.dark ? "bg-gray-950" : "bg-white",
        className,
      )}
    >
      {children}
    </Animated.View>
  );
}

function SectionLabel({ text, Icon }: { text: string; Icon?: React.FC<any> }) {
  const colors = useColors();
  return (
    <View className="flex flex-row items-center gap-2">
      {Icon && <Icon size={13} color={colors.foreground} />}
      <Text className="text-foreground/50 font-psemibold text-xs tracking-widest uppercase">
        {text}
      </Text>
    </View>
  );
}

function StepperButton({
  label,
  onPress,
  disabled,
}: {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}) {
  const colors = useColors();
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      className={cn(
        "w-8 h-8 rounded-xl items-center justify-center border border-foreground/10",
        colors.dark ? "bg-gray-900" : "bg-gray-50",
        disabled && "opacity-30",
      )}
    >
      <Text className="text-foreground font-pbold text-base leading-none">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
