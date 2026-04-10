import { useLearnedItemsContext } from "@/src/components/context/LearnedItemsContext";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import BackButton from "@/src/components/ui/BackButton";
import { useBooks } from "@/src/hooks/useBooks";
import useColors from "@/src/hooks/useColors";
import { useVariantClasses, Variant } from "@/src/hooks/useProgressVariants";
import { useQuestions } from "@/src/hooks/useQuestions";
import { BadgeQuestionMark, BookOpen, LucideProps } from "lucide-react-native";
import React, { useEffect, useRef } from "react";
import { Animated, Easing, ScrollView, Text, View } from "react-native";

// ─── Animated Progress Bar ────────────────────────────────────────────────────

function ProgressBar({
  progress,
  variant,
  delay = 0,
}: {
  progress: number;
  variant: Variant;
  delay?: number;
}) {
  const v = useVariantClasses()[variant];
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: progress,
      duration: 1200,
      delay,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [progress, anim, delay]);

  const width = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  const badgeLeft = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  const pct = Math.round(progress * 100);

  return (
    <View className="w-full">
      {/* Track */}
      <View className={`w-full rounded-full overflow-hidden h-3.5 ${v.track}`}>
        {/* Fill — width must stay inline: it's an Animated interpolated value */}
        <Animated.View
          className={`h-full rounded-full ${v.fill}`}
          style={{ width }}
        />
      </View>

      {/* Floating badge — left/transform must stay inline: Animated values */}
      <Animated.View
        className="absolute -top-7"
        style={{ left: badgeLeft, transform: [{ translateX: -24 }] }}
      >
        <View className={`${v.badge} rounded-lg px-1.5 py-0.5`}>
          <Text className={`${v.badgeText} text-xs font-pbold`}>{pct}%</Text>
        </View>
      </Animated.View>
    </View>
  );
}

// ─── Milestone Dots ───────────────────────────────────────────────────────────

function MilestoneDots({
  progress,
  variant,
  milestones = [25, 50, 75, 100],
}: {
  progress: number;
  variant: Variant;
  milestones?: number[];
}) {
  const v = useVariantClasses()[variant];

  return (
    <View className="flex-row justify-between mt-2">
      {milestones.map((m) => {
        const reached = progress * 100 >= m;
        return (
          <View key={m} className="items-center gap-1">
            <View
              className={`w-2 h-2 rounded-full ${reached ? v.dot : v.dotMuted}`}
            />
            <Text
              className={`text-[10px] font-pregular ${reached ? v.text : v.textMuted}`}
            >
              {m}%
            </Text>
          </View>
        );
      })}
    </View>
  );
}

// ─── Stat Pill ────────────────────────────────────────────────────────────────

function StatPill({
  label,
  value,
  variant,
}: {
  label: string;
  value: string | number;
  variant: Variant;
}) {
  const v = useVariantClasses()[variant];

  return (
    <View
      className={`flex-1 rounded-3xl p-4 items-center justify-center ${v.bg}`}
    >
      <Text className={`text-2xl font-pbold leading-8 ${v.text}`}>{value}</Text>
      <Text
        className={`text-[11px] font-pregular text-center mt-0.5 ${v.textMuted}`}
      >
        {label}
      </Text>
    </View>
  );
}

// ─── Motivational Card ────────────────────────────────────────────────────────

function MotivationCard({ progress }: { progress: number }) {
  const messages = [
    {
      min: 0,
      emoji: "🌱",
      text: "Każda wielka podróż\nzaczyna się od pierwszego kroku.",
    },
    {
      min: 0.1,
      emoji: "🔥",
      text: "Dobry start! Nie zatrzymuj się\n— rytm to klucz.",
    },
    {
      min: 0.3,
      emoji: "⚡",
      text: "Świetna robota! Jesteś już\nw połowie drogi do sukcesu.",
    },
    {
      min: 0.5,
      emoji: "🚀",
      text: "Ponad połowa za Tobą!\nMatura nie ma szans.",
    },
    {
      min: 0.75,
      emoji: "🏆",
      text: "Prawie na szczycie!\nJesteś gwiazdą tej matury.",
    },
    {
      min: 0.95,
      emoji: "🎓",
      text: "Absolutny mistrz!\nJesteś gotowy na wszystko.",
    },
  ];

  const msg =
    [...messages].reverse().find((m) => progress >= m.min) ?? messages[0];

  return (
    <View className="w-full rounded-3xl px-5 py-6 bg-foreground-primary/10 flex flex-row items-center gap-4">
      <Text className="text-4xl mb-2 shrink-0">{msg.emoji}</Text>
      <Text className="text-primary font-psemibold text-base leading-6 flex-1">
        {`„${msg.text}”`}
      </Text>
    </View>
  );
}

// ─── Category Row ─────────────────────────────────────────────────────────────

function CategoryRow({
  label,
  learned,
  total,
  variant,
}: {
  label: string;
  learned: number;
  total: number;
  variant: Variant;
}) {
  const v = useVariantClasses()[variant];
  const pct = total > 0 ? Math.round((learned / total) * 100) : 0;

  return (
    <View className="flex-row items-center justify-between py-3">
      <View className="flex-row items-center gap-3 flex-1">
        <View className={`w-2.5 h-2.5 rounded-full ${v.dot}`} />
        <Text className={`text-sm font-pmedium ${v.text}`}>{label}</Text>
      </View>
      <Text className={`text-sm font-pbold ${v.text}`}>
        {learned}/{total}
      </Text>
      <View className={`ml-3 rounded-full px-2.5 py-0.5 ${v.bg}`}>
        <Text className={`text-[11px] font-pbold ${v.text}`}>{pct}%</Text>
      </View>
    </View>
  );
}

// ─── Progress Card ────────────────────────────────────────────────────────────

function ProgressCard({
  title,
  subtitle,
  Icon,
  progress,
  learned,
  total,
  variant,
  delay,
}: {
  title: string;
  subtitle: string;
  Icon: React.FC<LucideProps>;
  progress: number;
  learned: number;
  total: number;
  variant: Variant;
  delay?: number;
}) {
  const v = useVariantClasses()[variant];
  const colors = useColors();

  return (
    <View className="w-full bg-background-secondary rounded-3xl p-6 gap-5">
      {/* Header */}
      <View className="flex-row items-center justify-between">
        <View className="flex flex-col justify-center">
          <Text
            className={`text-[11px] font-pregular uppercase tracking-widest opacity-70 ${v.text}`}
          >
            {subtitle}
          </Text>
          <Text className={`text-[22px] font-pbold leading-7 ${v.text}`}>
            {title}
          </Text>
        </View>
        <View
          className={`p-3 rounded-full items-center justify-center ${v.bg}`}
        >
          <Icon
            size={32}
            color={
              variant === "primary"
                ? colors.primary
                : variant === "dark"
                  ? colors.foregroundPrimary
                  : colors.secondary
            }
          />
        </View>
      </View>

      {/* Bar — needs top padding to make room for the floating badge */}
      <View className="pt-9">
        <ProgressBar progress={progress} variant={variant} delay={delay} />
      </View>

      <MilestoneDots progress={progress} variant={variant} />

      {/* Footer */}
      <View className="flex-row justify-between">
        <Text className={`text-xs font-pregular opacity-50 ${v.text}`}>
          Nauczone
        </Text>
        <Text className={`text-xs font-pbold ${v.text}`}>
          {learned} / {total}
        </Text>
      </View>
    </View>
  );
}

// ─── Main Screen ──────────────────────────────────────────────────────────────

export default function Progress() {
  const { questions } = useQuestions();
  const { books } = useBooks();
  const { counts } = useLearnedItemsContext();

  const bookProgress = books.length > 0 ? counts.books / books.length : 0;
  const questionProgress =
    questions.length > 0 ? counts.questions / questions.length : 0;
  const totalProgress =
    books.length + questions.length > 0
      ? counts.total / (books.length + questions.length)
      : 0;

  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-6 items-start justify-center pb-10 px-1"
      >
        <BackButton text="Postępy" />

        {/* ── Stat pills ── */}
        <View className="flex-row gap-3 w-full">
          <StatPill
            label="Łącznie nauczone"
            value={counts.total}
            variant="primary"
          />
          <StatPill
            label="Pozostało"
            value={books.length + questions.length - counts.total}
            variant="dark"
          />
          <StatPill
            label="Ukończono"
            value={`${Math.round(totalProgress * 100)}%`}
            variant="secondary"
          />
        </View>

        {/* ── Books bar ── */}
        <ProgressCard
          title="Spis Lektur"
          subtitle="Lektury"
          Icon={BookOpen}
          progress={bookProgress}
          learned={counts.books}
          total={books.length}
          variant="primary"
          delay={100}
        />

        {/* ── Questions bar ── */}
        <ProgressCard
          title="Lista Pytań"
          subtitle="Pytania"
          Icon={BadgeQuestionMark}
          progress={questionProgress}
          learned={counts.questions}
          total={questions.length}
          variant="dark"
          delay={300}
        />

        {/* ── Breakdown ── */}
        <View className="w-full bg-background-secondary rounded-3xl px-6 py-4">
          <Text className="text-base font-pbold text-primary mb-1">
            Szczegóły
          </Text>
          <View className="w-full h-px bg-primary/10 mb-1" />
          <CategoryRow
            label="Lektury"
            learned={counts.books}
            total={books.length}
            variant="primary"
          />
          <View className="w-full h-px bg-primary/8" />
          <CategoryRow
            label="Pytania maturalne"
            learned={counts.questions}
            total={questions.length}
            variant="dark"
          />
          <View className="w-full h-px bg-primary/8" />
          <CategoryRow
            label="Razem"
            learned={counts.total}
            total={books.length + questions.length}
            variant="secondary"
          />
        </View>

        {/* ── Motivation ── */}
        <MotivationCard progress={totalProgress} />
      </ScrollView>
    </ScreenWrapper>
  );
}
