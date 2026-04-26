import ScreenWrapper from "@/src/components/ScreenWrapper";
import BackButton from "@/src/components/ui/BackButton";
import Button from "@/src/components/ui/Button";
import {
  BookTestQuestion,
  ClosedTestQuestion,
  MaturaTestQuestion,
  OpenTestQuestion,
  Test as TestType,
} from "@/src/data/tests/types";
import { useTabBar } from "@/src/hooks/TabBarContext";
import useColors from "@/src/hooks/useColors";
import { cn } from "@/src/lib/utils";
import { router, useLocalSearchParams } from "expo-router";
import {
  AlertCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Circle,
  FileText,
  ListChecks,
  Star,
  XCircle,
} from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeIn,
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

// ─── Helpers ────────────────────────────────────────────────────────────────

function isOpen(q: BookTestQuestion): q is OpenTestQuestion {
  return q.question_type === "Otwarty";
}
function isClosed(q: BookTestQuestion): q is ClosedTestQuestion {
  return q.question_type === "Zamknięty";
}
function isMatura(q: BookTestQuestion): q is MaturaTestQuestion {
  return q.question_type === "Matura";
}

const DIFFICULTY_COLORS: Record<string, string> = {
  Łatwy: "text-emerald-400",
  Średni: "text-amber-400",
  Trudny: "text-rose-400",
};

const DIFFICULTY_BG: Record<string, string> = {
  Łatwy: "bg-emerald-400/10",
  Średni: "bg-amber-400/10",
  Trudny: "bg-rose-400/10",
};

// ─── Main Screen ────────────────────────────────────────────────────────────

export default function Test() {
  const { test: testJson } = useLocalSearchParams();
  const test: TestType = JSON.parse(testJson?.toString() ?? "[]");
  const { tabBarHeight } = useTabBar();
  const colors = useColors();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | null>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [finished, setFinished] = useState(false);

  const progressShared = useSharedValue((currentIndex + 1) / test.length);
  const progressStyle = useAnimatedStyle(() => ({
    width: `${progressShared.value * 100}%` as any,
  }));

  const question = test[currentIndex] as BookTestQuestion;

  function goNext() {
    if (currentIndex < test.length - 1) {
      const next = currentIndex + 1;
      progressShared.value = withSpring((next + 1) / test.length, {
        damping: 20,
        stiffness: 120,
      });
      setCurrentIndex(next);
    } else {
      setFinished(true);
    }
  }

  function goPrev() {
    if (currentIndex > 0) {
      const prev = currentIndex - 1;
      progressShared.value = withSpring((prev + 1) / test.length, {
        damping: 20,
        stiffness: 120,
      });
      setCurrentIndex(prev);
    }
  }

  function setAnswer(questionIndex: number, value: string | null) {
    setAnswers((prev) => ({ ...prev, [questionIndex]: value }));
  }

  function revealAnswer(questionIndex: number) {
    setRevealed((prev) => ({ ...prev, [questionIndex]: true }));
  }

  if (finished) {
    return (
      <SummaryScreen
        test={test}
        answers={answers}
        revealed={revealed}
        onRestart={() => {
          setCurrentIndex(0);
          setAnswers({});
          setRevealed({});
          setFinished(false);
        }}
        onBack={() => router.back()}
      />
    );
  }

  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={{ paddingBottom: tabBarHeight + 16 }}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-4 items-start"
      >
        {/* ── Header ── */}
        <View className="w-full flex flex-row items-center justify-between pb-4">
          <BackButton text="Test" />
          <Text className="text-foreground/40 font-psemibold text-xs">
            {currentIndex + 1} / {test.length}
          </Text>
        </View>

        {/* ── Progress bar ── */}
        <View className="w-full h-1 rounded-full bg-foreground/10 overflow-hidden">
          <Animated.View
            className="h-full rounded-full bg-primary"
            style={progressStyle}
          />
        </View>

        {/* ── Question card ── */}
        <View className="w-full">
          <QuestionCard
            question={question}
            questionIndex={currentIndex}
            answer={answers[currentIndex] ?? null}
            isRevealed={revealed[currentIndex] ?? false}
            setAnswer={(val) => setAnswer(currentIndex, val)}
            onReveal={() => revealAnswer(currentIndex)}
          />
        </View>

        {/* ── Navigation ── */}
        <Animated.View
          layout={LinearTransition.springify()}
          className="w-full flex flex-row gap-3"
        >
          <TouchableOpacity
            onPress={goPrev}
            disabled={currentIndex === 0}
            activeOpacity={0.7}
            className={cn(
              "w-12 h-12 rounded-2xl items-center justify-center border border-foreground/10",
              colors.dark ? "bg-gray-950" : "bg-white",
              currentIndex === 0 && "opacity-30",
            )}
          >
            <ChevronLeft size={20} color={colors.foreground} />
          </TouchableOpacity>

          <Button
            className="flex-1"
            text={currentIndex < test.length - 1 ? "Następne" : "Zakończ test"}
            icon={currentIndex < test.length - 1 ? ChevronRight : CheckCircle2}
            variant="success"
            onPress={goNext}
          />
        </Animated.View>
      </ScrollView>
    </ScreenWrapper>
  );
}

// ─── Question Card ───────────────────────────────────────────────────────────

function QuestionCard({
  question,
  questionIndex,
  answer,
  isRevealed,
  setAnswer,
  onReveal,
}: {
  question: BookTestQuestion;
  questionIndex: number;
  answer: string | null;
  isRevealed: boolean;
  setAnswer: (val: string | null) => void;
  onReveal: () => void;
}) {
  const colors = useColors();

  return (
    <Animated.View
      layout={LinearTransition.springify()}
      className={cn(
        "rounded-3xl p-5 flex flex-col gap-4 w-full",
        colors.dark ? "bg-gray-950" : "bg-white",
      )}
    >
      {/* ── Meta row ── */}
      <View className="flex flex-row items-center gap-2 flex-wrap">
        <TypeBadge type={question.question_type} />
        <DifficultyBadge difficulty={question.difficulty} />
      </View>

      {/* ── Question body ── */}
      {isClosed(question) && (
        <ClosedQuestion
          question={question}
          selectedAnswer={answer}
          setAnswer={setAnswer}
        />
      )}
      {isOpen(question) && !isMatura(question as any) && (
        <OpenQuestion
          question={question as OpenTestQuestion}
          isRevealed={isRevealed}
          onReveal={onReveal}
        />
      )}
      {isMatura(question as any) && (
        <MaturaQuestion
          question={question as unknown as MaturaTestQuestion}
          isRevealed={isRevealed}
          onReveal={onReveal}
        />
      )}
    </Animated.View>
  );
}

// ─── Closed Question ─────────────────────────────────────────────────────────

function ClosedQuestion({
  question,
  selectedAnswer,
  setAnswer,
}: {
  question: ClosedTestQuestion;
  selectedAnswer: string | null;
  setAnswer: (val: string | null) => void;
}) {
  const colors = useColors();
  const correctAnswer = question.answers.find((a) => a.isCorrect)?.value;
  const hasAnswered = selectedAnswer !== null;

  return (
    <View className="flex flex-col gap-3">
      <Text className="text-foreground font-psemibold text-base leading-relaxed">
        {question.question}
      </Text>

      <View className="flex flex-col gap-2">
        {question.answers.map((answer, i) => {
          const isSelected = selectedAnswer === answer.value;
          const isCorrect = answer.value === correctAnswer;

          let bgClass = colors.dark ? "bg-gray-900" : "bg-gray-50";
          let borderClass = "border-foreground/10";
          let textClass = "text-foreground";
          let IconComponent: React.FC<any> | null = null;

          if (hasAnswered) {
            if (isCorrect) {
              bgClass = "bg-emerald-500/10";
              borderClass = "border-emerald-500/30";
              textClass = "text-emerald-400";
              IconComponent = CheckCircle2;
            } else if (isSelected && !isCorrect) {
              bgClass = "bg-rose-500/10";
              borderClass = "border-rose-500/30";
              textClass = "text-rose-400";
              IconComponent = XCircle;
            }
          } else if (isSelected) {
            bgClass = "bg-primary/10";
            borderClass = "border-primary/30";
            textClass = "text-primary";
            IconComponent = Circle;
          }

          return (
            <TouchableOpacity
              key={i}
              onPress={() => !hasAnswered && setAnswer(answer.value)}
              disabled={hasAnswered}
              activeOpacity={0.7}
            >
              <View
                className={cn(
                  "flex flex-row items-center gap-3 p-4 rounded-2xl border",
                  bgClass,
                  borderClass,
                )}
              >
                <View className="w-6 h-6 items-center justify-center">
                  {IconComponent ? (
                    <IconComponent
                      size={18}
                      color={
                        isCorrect && hasAnswered
                          ? "#34d399"
                          : isSelected && !isCorrect && hasAnswered
                            ? "#f87171"
                            : colors.primary
                      }
                    />
                  ) : (
                    <View
                      className={cn(
                        "w-5 h-5 rounded-full border-2",
                        colors.dark
                          ? "border-foreground/20"
                          : "border-foreground/30",
                      )}
                    />
                  )}
                </View>
                <Text className={cn("flex-1 font-pregular text-sm", textClass)}>
                  {answer.value}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {hasAnswered && (
        <Animated.View
          entering={FadeIn}
          className={cn(
            "rounded-2xl p-3 flex flex-row items-center gap-2",
            selectedAnswer === correctAnswer
              ? "bg-emerald-500/10"
              : "bg-rose-500/10",
          )}
        >
          {selectedAnswer === correctAnswer ? (
            <CheckCircle2 size={14} color="#34d399" />
          ) : (
            <AlertCircle size={14} color="#f87171" />
          )}
          <Text
            className={cn(
              "font-psemibold text-xs",
              selectedAnswer === correctAnswer
                ? "text-emerald-400"
                : "text-rose-400",
            )}
          >
            {selectedAnswer === correctAnswer
              ? "Poprawna odpowiedź!"
              : `Poprawna: ${correctAnswer}`}
          </Text>
        </Animated.View>
      )}
    </View>
  );
}

// ─── Open Question ───────────────────────────────────────────────────────────

function OpenQuestion({
  question,
  isRevealed,
  onReveal,
}: {
  question: OpenTestQuestion;
  isRevealed: boolean;
  onReveal: () => void;
}) {
  const colors = useColors();

  return (
    <View className="flex flex-col gap-3">
      <Text className="text-foreground font-psemibold text-base leading-relaxed">
        {question.question}
      </Text>

      {!isRevealed ? (
        <Button
          text="Pokaż wzorcową odpowiedź"
          icon={FileText}
          variant="primary"
          onPress={onReveal}
        />
      ) : (
        <Animated.View
          entering={FadeIn}
          className={cn(
            "rounded-2xl p-4 flex flex-col gap-2 border border-primary/20",
            "bg-primary/5",
          )}
        >
          <View className="flex flex-row items-center gap-2">
            <FileText size={13} color={colors.primary} />
            <Text className="text-primary font-psemibold text-xs uppercase tracking-widest">
              Wzorcowa odpowiedź
            </Text>
          </View>
          <Text className="text-foreground font-pregular text-sm leading-relaxed">
            {question.suggested_answer}
          </Text>
        </Animated.View>
      )}
    </View>
  );
}

// ─── Matura Question ─────────────────────────────────────────────────────────

function MaturaQuestion({
  question,
  isRevealed,
  onReveal,
}: {
  question: MaturaTestQuestion;
  isRevealed: boolean;
  onReveal: () => void;
}) {
  const colors = useColors();

  return (
    <Animated.View className="flex flex-col gap-3">
      {/* Points badge */}
      <View className="flex flex-row items-center gap-2">
        <View className="flex flex-row items-center gap-1.5 bg-amber-400/10 rounded-full px-3 py-1">
          <Star size={11} color="#fbbf24" />
          <Text className="text-amber-400 font-psemibold text-xs">
            {question.max_points} pkt
          </Text>
        </View>
      </View>

      <Text className="text-foreground font-psemibold text-base leading-relaxed">
        {question.question}
      </Text>

      {!isRevealed ? (
        <Button
          text="Pokaż model odpowiedzi"
          icon={ListChecks}
          variant="primary"
          onPress={onReveal}
        />
      ) : (
        <Animated.View entering={FadeIn} className="flex flex-col gap-3">
          {/* Suggested answer */}
          <View
            className={cn(
              "rounded-2xl p-4 flex flex-col gap-2 border border-primary/20 bg-primary/5",
            )}
          >
            <View className="flex flex-row items-center gap-2">
              <FileText size={13} color={colors.primary} />
              <Text className="text-primary font-psemibold text-xs uppercase tracking-widest">
                Wzorcowa odpowiedź
              </Text>
            </View>
            <Text className="text-foreground font-pregular text-sm leading-relaxed">
              {question.suggested_answer}
            </Text>
          </View>

          {/* Points breakdown */}
          {question.pointsExplanations?.length > 0 && (
            <View
              className={cn(
                "rounded-2xl p-4 flex flex-col gap-2 border border-amber-400/20 bg-amber-400/5",
              )}
            >
              <View className="flex flex-row items-center gap-2">
                <Star size={13} color="#fbbf24" />
                <Text className="text-amber-400 font-psemibold text-xs uppercase tracking-widest">
                  Kryteria punktowania
                </Text>
              </View>
              {question.pointsExplanations.map((explanation, i) => (
                <View key={i} className="flex flex-row items-start gap-2">
                  <View className="w-5 h-5 rounded-full bg-amber-400/20 items-center justify-center mt-0.5 shrink-0">
                    <Text className="text-amber-400 font-pbold text-xs">
                      {i + 1}
                    </Text>
                  </View>
                  <Text className="text-foreground/70 font-pregular text-sm leading-relaxed flex-1">
                    {explanation}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </Animated.View>
      )}
    </Animated.View>
  );
}

// ─── Summary Screen ──────────────────────────────────────────────────────────

function SummaryScreen({
  test,
  answers,
  revealed,
  onRestart,
  onBack,
}: {
  test: TestType;
  answers: Record<number, string | null>;
  revealed: Record<number, boolean>;
  onRestart: () => void;
  onBack: () => void;
}) {
  const colors = useColors();
  const { tabBarHeight } = useTabBar();

  const closedQuestions = test.filter((q) =>
    isClosed(q as BookTestQuestion),
  ) as ClosedTestQuestion[];
  const totalClosed = closedQuestions.length;
  const correctClosed = closedQuestions.filter((q) => {
    const idx = test.indexOf(q);
    const correct = q.answers.find((a) => a.isCorrect)?.value;
    return answers[idx] === correct;
  }).length;
  const answeredOpen = test.filter((q, i) => {
    const bq = q as BookTestQuestion;
    return (isOpen(bq) || isMatura(bq as any)) && revealed[i] === true;
  }).length;
  const totalOpen = test.filter((q) => {
    const bq = q as BookTestQuestion;
    return isOpen(bq) || isMatura(bq as any);
  }).length;

  const scorePercent =
    totalClosed > 0 ? Math.round((correctClosed / totalClosed) * 100) : null;

  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={{ paddingBottom: tabBarHeight + 16 }}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-4 items-start"
      >
        <BackButton text="Wyniki testu" />

        {/* ── Score card ── */}
        <View
          className={cn(
            "w-full rounded-3xl p-6 flex flex-col gap-4 items-center",
            colors.dark ? "bg-gray-950" : "bg-white",
          )}
        >
          {scorePercent !== null ? (
            <>
              <View className="w-24 h-24 rounded-full bg-primary/10 border-4 border-primary/30 items-center justify-center">
                <Text className="text-primary font-pbold text-2xl">
                  {scorePercent}%
                </Text>
              </View>
              <View className="flex flex-col items-center gap-1">
                <Text className="text-foreground font-pbold text-lg">
                  {correctClosed} / {totalClosed}
                </Text>
                <Text className="text-foreground/40 font-pregular text-sm">
                  poprawnych odpowiedzi zamkniętych
                </Text>
              </View>
            </>
          ) : (
            <View className="flex flex-col items-center gap-2 py-4">
              <CheckCircle2 size={48} color={colors.primary} />
              <Text className="text-foreground font-pbold text-lg">
                Test ukończony!
              </Text>
              <Text className="text-foreground/40 font-pregular text-sm text-center">
                Sprawdź swoje odpowiedzi otwarte poniżej.
              </Text>
            </View>
          )}

          {totalOpen > 0 && (
            <View className="w-full rounded-2xl bg-foreground/5 p-3 flex flex-row items-center justify-between">
              <Text className="text-foreground/50 font-pregular text-sm">
                Pytania otwarte przejrzane
              </Text>
              <Text className="text-foreground font-psemibold text-sm">
                {answeredOpen} / {totalOpen}
              </Text>
            </View>
          )}
        </View>

        {/* ── Question review ── */}
        <SectionLabel text="Przegląd pytań" />

        {test.map((q, i) => {
          const bq = q as BookTestQuestion;
          const isCl = isClosed(bq);
          const correctAnswer = isCl
            ? (bq as ClosedTestQuestion).answers.find((a) => a.isCorrect)?.value
            : null;
          const userAnswer = answers[i];
          const isCorrect = isCl && userAnswer === correctAnswer;
          const wasAnswered = userAnswer !== null && userAnswer !== undefined;

          return (
            <View
              key={i}
              className={cn(
                "w-full rounded-3xl p-5 flex flex-col gap-2",
                colors.dark ? "bg-gray-950" : "bg-white",
              )}
            >
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row items-center gap-2">
                  <TypeBadge type={bq.question_type} />
                  <DifficultyBadge difficulty={bq.difficulty} />
                </View>
                <Text className="text-foreground/30 font-psemibold text-xs">
                  #{i + 1}
                </Text>
              </View>

              {isCl ? (
                <View className="flex flex-col gap-1.5">
                  <Text className="text-foreground font-pregular text-sm leading-relaxed">
                    {(bq as ClosedTestQuestion).question}
                  </Text>
                  <View
                    className={cn(
                      "rounded-xl p-3 flex flex-row items-center gap-2",
                      isCorrect ? "bg-emerald-500/10" : "bg-rose-500/10",
                    )}
                  >
                    {isCorrect ? (
                      <CheckCircle2 size={14} color="#34d399" />
                    ) : (
                      <XCircle size={14} color="#f87171" />
                    )}
                    <Text
                      className={cn(
                        "font-pregular text-xs flex-1",
                        isCorrect ? "text-emerald-400" : "text-rose-400",
                      )}
                    >
                      {wasAnswered
                        ? isCorrect
                          ? `Poprawnie: ${userAnswer}`
                          : `Twoja: ${userAnswer ?? "—"} · Poprawna: ${correctAnswer}`
                        : `Pominięte · Poprawna: ${correctAnswer}`}
                    </Text>
                  </View>
                </View>
              ) : (
                <Text className="text-foreground/50 font-pregular text-sm leading-relaxed">
                  {(bq as OpenTestQuestion).question}
                </Text>
              )}
            </View>
          );
        })}

        {/* ── Actions ── */}
        <Button
          className="w-full"
          text="Spróbuj ponownie"
          variant="primary"
          onPress={onRestart}
        />
        <Button
          className="w-full"
          text="Wróć do generatora"
          variant="success"
          onPress={onBack}
        />
      </ScrollView>
    </ScreenWrapper>
  );
}

// ─── Shared primitives ────────────────────────────────────────────────────────

function TypeBadge({ type }: { type: string }) {
  return (
    <View className="bg-primary/10 rounded-full px-2.5 py-1">
      <Text className="text-primary font-psemibold text-xs">{type}</Text>
    </View>
  );
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const color = DIFFICULTY_COLORS[difficulty] ?? "text-foreground/50";
  const bg = DIFFICULTY_BG[difficulty] ?? "bg-foreground/5";
  return (
    <View className={cn("rounded-full px-2.5 py-1", bg)}>
      <Text className={cn("font-psemibold text-xs", color)}>{difficulty}</Text>
    </View>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <Text className="text-foreground/40 font-psemibold text-xs tracking-widest uppercase px-1">
      {text}
    </Text>
  );
}
