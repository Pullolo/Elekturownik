import { clamp, cn, pluralize } from "@/src/lib/utils";
import { router } from "expo-router";
import {
  BookOpen,
  Brain,
  Check,
  Clock,
  ExternalLink,
  FileText,
  Landmark,
  Layers,
  Palette,
  Sparkles,
  SquareChartGantt,
  Star,
  Users,
  X,
  Zap,
} from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import {
  Comparison,
  Creator,
  EpochStudy,
  Genre,
  HistoricalEvent,
  TimelineEventEpoch,
  Work,
} from "../data/types";
import useColors from "../hooks/useColors";
import Badge from "./ui/Badge";

// ─── Shared primitives ────────────────────────────────────────────────────────

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

function Divider() {
  return <View className="w-full h-px bg-foreground/5" />;
}

function BulletRow({
  text,
  theme,
}: {
  text: string;
  theme?: "primary" | "secondary";
}) {
  if (theme === "secondary") {
    return (
      <View className="flex flex-row gap-2.5 items-start">
        <View className="w-1.5 h-1.5 rounded-full bg-secondary/40 mt-1.5 shrink-0" />
        <Text className="text-foreground/60 font-pregular text-xs leading-relaxed flex-1">
          {text}
        </Text>
      </View>
    );
  }
  return (
    <View className="flex flex-row gap-2.5 items-start">
      <View className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
      <Text className="text-foreground/60 font-pregular text-xs leading-relaxed flex-1">
        {text}
      </Text>
    </View>
  );
}

function DifficultyDots({ level }: { level: 1 | 2 | 3 }) {
  return (
    <View className="flex flex-row gap-1">
      {([1, 2, 3] as const).map((n) => (
        <View
          key={n}
          className={cn(
            "w-2 h-2 rounded-sm",
            n <= level ? "bg-primary/50" : "bg-foreground/10",
          )}
        />
      ))}
    </View>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

function HeaderSection({ epoch }: { epoch: EpochStudy }) {
  return (
    <SectionCard>
      <View className="flex flex-row justify-between items-start gap-2">
        <View className="flex flex-row gap-2 flex-wrap flex-1">
          <Badge text="Epoka" LIcon={BookOpen} theme="primary" />
        </View>
        <Text className="text-foreground/40 font-pregular text-sm max-w-[66%] shrink-0">
          {epoch.timeframe}
        </Text>
      </View>

      <View className="flex flex-col gap-1">
        <Text className="text-foreground font-pbold text-2xl leading-tight">
          {epoch.name}
        </Text>
        <View className="flex flex-row flex-wrap gap-1.5 mt-2">
          {epoch.moodTags.map((tag, i) => (
            <View
              key={i}
              className="bg-secondary/10 px-2.5 py-0.5 rounded-full"
            >
              <Text className="text-secondary font-psemibold text-xs">
                {tag}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <Divider />

      <Text className="text-foreground/60 font-pregular text-sm leading-relaxed">
        {epoch.description}
      </Text>

      {/* Fun fact */}
      <View className="bg-primary/5 rounded-2xl p-3 flex flex-row gap-3 items-start">
        <View className="w-7 h-7 rounded-lg bg-primary/15 items-center justify-center shrink-0">
          <Text className="text-primary font-pbold text-sm">!</Text>
        </View>
        <Text className="text-primary/80 font-pregular text-xs leading-relaxed flex-1">
          {epoch.funFact}
        </Text>
      </View>

      <Divider />

      <View className="flex flex-col gap-4">
        <SectionLabel text="Cechy Epoki" Icon={SquareChartGantt} />
        <View className="flex flex-col gap-2">
          {epoch.characteristics.map((c, i) => (
            <BulletRow key={i} text={c} theme="secondary" />
          ))}
        </View>
      </View>
    </SectionCard>
  );
}

// ─── Philosophy ───────────────────────────────────────────────────────────────

function PhilosophySection({
  philosophy,
  worldview,
}: {
  philosophy: string[];
  worldview: string;
}) {
  return (
    <SectionCard>
      <SectionLabel text="Filozofia i światopogląd" Icon={Brain} />
      <Text className="text-foreground/60 font-pregular text-sm leading-relaxed">
        {worldview}
      </Text>
      {philosophy.length > 0 && (
        <>
          <Divider />
          <View className="flex flex-col gap-2">
            {philosophy.map((p, i) => (
              <BulletRow key={i} text={p} />
            ))}
          </View>
        </>
      )}
    </SectionCard>
  );
}

// ─── Key Ideas ────────────────────────────────────────────────────────────────

function KeyIdeasSection({ keyIdeas }: { keyIdeas: EpochStudy["keyIdeas"] }) {
  return (
    <SectionCard>
      <SectionLabel
        text={pluralize(keyIdeas.length, "idea", "idee", "idei")}
        Icon={Zap}
      />
      <View className="flex flex-col gap-3">
        {keyIdeas.map((idea, i) => (
          <View
            key={i}
            className="bg-foreground/[0.03] rounded-2xl p-4 flex flex-col gap-1.5"
          >
            <Text className="text-foreground font-psemibold text-sm">
              {idea.name}
            </Text>
            <Text className="text-foreground/50 font-pregular text-xs leading-relaxed">
              {idea.description}
            </Text>
          </View>
        ))}
      </View>
    </SectionCard>
  );
}

// ─── Motifs ───────────────────────────────────────────────────────────────────

function MotifsSection({ motifs }: { motifs: EpochStudy["motifs"] }) {
  return (
    <SectionCard className="flex-1">
      <SectionLabel text="Motywy" />
      <View className="flex flex-col">
        {motifs.map((motif, i) => (
          <View
            key={i}
            className={cn(
              "flex flex-col gap-1 py-2.5",
              i < motifs.length - 1 && "border-b border-foreground/5",
              i === 0 && "pt-0",
            )}
          >
            <Text className="text-foreground font-psemibold text-xs">
              {motif.name}
            </Text>
            <Text className="text-foreground/50 font-pregular text-xs leading-relaxed">
              {motif.meaning}
            </Text>
          </View>
        ))}
      </View>
    </SectionCard>
  );
}

// ─── Themes ───────────────────────────────────────────────────────────────────

function ThemesSection({ themes }: { themes: EpochStudy["themes"] }) {
  return (
    <SectionCard className="flex-1">
      <SectionLabel text="Tematy" />
      <View className="flex flex-col">
        {themes.map((theme, i) => (
          <View
            key={i}
            className={cn(
              "flex flex-col gap-1 py-2.5",
              i < themes.length - 1 && "border-b border-foreground/5",
              i === 0 && "pt-0",
            )}
          >
            <Text className="text-foreground font-psemibold text-xs">
              {theme.name}
            </Text>
            <Text className="text-foreground/50 font-pregular text-xs leading-relaxed">
              {theme.description}
            </Text>
          </View>
        ))}
      </View>
    </SectionCard>
  );
}

// ─── Genres ───────────────────────────────────────────────────────────────────

function GenresSection({ genres }: { genres: Genre[] }) {
  return (
    <SectionCard>
      <SectionLabel
        text={pluralize(genres.length, "gatunek", "gatunki", "gatunków")}
        Icon={FileText}
      />
      <View className="flex flex-col">
        {genres.map((genre, i) => (
          <View
            key={i}
            className={cn(
              "flex flex-col gap-1.5 py-3",
              i < genres.length - 1 && "border-b border-foreground/5",
              i === 0 && "pt-0",
            )}
          >
            <View className="flex flex-row justify-between items-center gap-2">
              <Text className="text-foreground font-psemibold text-sm flex-1">
                {genre.name}
              </Text>
              <DifficultyDots level={genre.difficulty} />
            </View>
            <Text className="text-foreground/50 font-pregular text-xs leading-relaxed">
              {genre.characteristics}
            </Text>
            {genre.examples.length > 0 && (
              <View className="flex flex-row flex-wrap gap-1.5 mt-1">
                {genre.examples.map((ex, j) => (
                  <View
                    key={j}
                    className="border border-foreground/10 rounded-lg px-2 py-0.5 bg-foreground/[0.02] flex flex-row items-center w-fit"
                  >
                    <Text className="text-foreground/40 font-pitalic text-xs px-[1px]">
                      {ex}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
    </SectionCard>
  );
}

// ─── Creators ─────────────────────────────────────────────────────────────────

function CreatorCard({ creator }: { creator: Creator }) {
  const colors = useColors();

  return (
    <View
      className={cn(
        "rounded-2xl overflow-hidden",
        colors.dark ? "bg-background-secondary/40" : "bg-foreground/[0.03]",
      )}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        className="p-4 flex flex-row justify-between items-center gap-3"
      >
        <View className="flex flex-row gap-3 items-center flex-1">
          <View className="w-9 h-9 rounded-full bg-primary/15 items-center justify-center shrink-0">
            <Text className="text-primary font-psemibold text-xs">
              {creator.initials}
            </Text>
          </View>
          <View className="flex-1">
            <Text className="text-foreground font-psemibold text-sm">
              {creator.name}
            </Text>
            <Text className="text-foreground/40 font-pregular text-xs">
              {creator.yearsLived} · {creator.nationality}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <View className="px-4 pb-4 flex flex-col gap-3">
        <Divider />
        <Text className="text-foreground/50 font-pregular text-xs leading-relaxed">
          {creator.description}
        </Text>
        <View
          className="border-l-2 border-primary/30 pl-3"
          style={{ borderRadius: 0 }}
        >
          <Text className="text-foreground/60 text-xs leading-relaxed font-pitalic">
            {creator.quote}
          </Text>
        </View>
        {creator.works.length > 0 && (
          <View className="flex flex-row flex-wrap gap-1.5">
            {creator.works.map((work, j) => (
              <View
                key={j}
                className={cn(
                  "border border-foreground/10 rounded-lg px-2 py-0.5",
                  colors.dark ? "bg-gray-950" : "bg-white",
                )}
              >
                <Text
                  style={{ includeFontPadding: false }}
                  className="text-foreground/40 font-pitalic text-xs px-[1px]"
                >
                  {work}
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

function CreatorsSection({ creators }: { creators: Creator[] }) {
  return (
    <SectionCard>
      <SectionLabel
        text={pluralize(creators.length, "twórca", "twórcy", "twórców")}
        Icon={Users}
      />
      <View className="flex flex-col gap-2">
        {creators.map((creator, i) => (
          <CreatorCard key={i} creator={creator} />
        ))}
      </View>
    </SectionCard>
  );
}

// ─── Works ────────────────────────────────────────────────────────────────────

function WorksSection({ works }: { works: Work[] }) {
  const colors = useColors();

  return (
    <SectionCard>
      <SectionLabel
        text={pluralize(works.length, "dzieło", "dzieła", "dzieł")}
        Icon={Star}
      />
      <View className="flex flex-col gap-3">
        {works.map((work, i) => (
          <View
            key={i}
            className="border-l-2 border-primary/30 pl-3 flex flex-col gap-1 w-full"
            style={{ borderRadius: 0 }}
          >
            <View className="flex flex-row justify-between items-center gap-2 w-full">
              <View className="flex flex-row justify-start items-center gap-4 flex-1">
                <Text className="text-foreground font-psemibold text-sm">
                  {clamp(work.title, work.book_id ? 13 : 25)}
                </Text>
                {work.book_id && (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      router.push(`/(notabs)/book/${work.book_id}`);
                    }}
                    className="flex justify-center items-center flex-row py-1 px-3 rounded-full bg-secondary/20 gap-2 overflow-hidden"
                  >
                    <Text className="text-secondary font-psemibold text-xs">
                      {"Czytaj Więcej"}
                    </Text>
                    <ExternalLink size={12} color={colors.secondary} />
                  </TouchableOpacity>
                )}
              </View>
              <DifficultyDots level={work.difficulty} />
            </View>
            <Text className="text-foreground/40 font-pregular text-xs">
              {work.author} · {work.year}
            </Text>
            <Text className="text-foreground/50 font-pregular text-xs leading-relaxed">
              {work.significance}
            </Text>
          </View>
        ))}
      </View>
    </SectionCard>
  );
}

// ─── Timeline ─────────────────────────────────────────────────────────────────

function TimelineSection({ timeline }: { timeline: TimelineEventEpoch[] }) {
  return (
    <SectionCard>
      <SectionLabel text="Oś czasu" Icon={Clock} />
      <View className="flex flex-col">
        {timeline.map((event, i) => (
          <View key={i} className="flex flex-row gap-3">
            <View className="flex flex-col items-center w-4">
              <View className="w-2 h-2 rounded-full bg-primary/40 mt-1 shrink-0" />
              {i < timeline.length - 1 && (
                <View className="w-px flex-1 bg-foreground/10 my-1" />
              )}
            </View>
            <View className={cn("flex-1", i < timeline.length - 1 && "pb-4")}>
              <Text className="text-foreground font-psemibold text-sm">
                {event.year} — {event.name}
              </Text>
              <Text className="text-foreground/50 font-pregular text-xs leading-relaxed mt-1">
                {event.description}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </SectionCard>
  );
}

// ─── Historical Context ───────────────────────────────────────────────────────

function HistoricalContextSection({ events }: { events: HistoricalEvent[] }) {
  return (
    <SectionCard>
      <SectionLabel text="Kontekst historyczny" Icon={Landmark} />
      <View className="flex flex-col gap-2">
        {events.map((event, i) => (
          <View
            key={i}
            className="bg-foreground/[0.03] rounded-2xl p-3 flex flex-col gap-1"
          >
            <Text className="text-foreground font-psemibold text-sm">
              {event.name}
            </Text>
            <Text className="text-foreground/50 font-pregular text-xs leading-relaxed">
              {event.description}
            </Text>
          </View>
        ))}
      </View>
    </SectionCard>
  );
}

// ─── Cultural Context ─────────────────────────────────────────────────────────

function CulturalContextSection({ items }: { items: string[] }) {
  return (
    <SectionCard>
      <SectionLabel text="Kontekst kulturowy" Icon={Palette} />
      <View className="flex flex-col gap-2">
        {items.map((item, i) => (
          <BulletRow key={i} text={item} />
        ))}
      </View>
    </SectionCard>
  );
}

// ─── Comparisons ─────────────────────────────────────────────────────────────

const COMPARISON_BADGE: Record<
  Comparison["type"],
  { label: string; bg: string; text: string }
> = {
  opozycja: { label: "przeciwieństwo", bg: "bg-red-200", text: "text-red-800" },
  następstwo: {
    label: "następstwo",
    bg: "bg-amber-200",
    text: "text-amber-900",
  },
  równoległa: {
    label: "równoległa",
    bg: "bg-primary/10",
    text: "text-primary",
  },
};

function ComparisonsSection({ comparisons }: { comparisons: Comparison[] }) {
  return (
    <SectionCard>
      <SectionLabel text="Porównania z epokami" Icon={Layers} />
      <View className="flex flex-col gap-4">
        {comparisons.map((comp, i) => {
          const badge = COMPARISON_BADGE[comp.type];
          return (
            <View key={i} className="flex flex-col gap-2">
              {i > 0 && <Divider />}

              <View className="flex flex-row items-center gap-2 flex-wrap">
                <Text className="text-foreground font-psemibold text-sm px-[1px]">
                  vs. {comp.withEpoch}
                </Text>
                <View className="w-fit h-fit flex justify-center items-center rounded-full bg-white">
                  <View className={cn("px-2.5 py-0.5 rounded-full", badge.bg)}>
                    <Text className={cn("font-psemibold text-xs", badge.text)}>
                      {badge.label}
                    </Text>
                  </View>
                </View>
              </View>

              {comp.differences.length > 0 && (
                <View className="flex flex-col gap-1.5">
                  <Text className="text-foreground/40 font-psemibold text-xs">
                    Różnice
                  </Text>
                  {comp.differences.map((d, j) => (
                    <View key={j} className="flex flex-row gap-2 items-start">
                      <View className="w-4 h-4 rounded-full bg-red-200 items-center justify-center mt-0.5 shrink-0">
                        <X size={8} color="#F22" />
                      </View>
                      <Text className="text-foreground/60 font-pregular text-xs leading-relaxed flex-1">
                        {d}
                      </Text>
                    </View>
                  ))}
                </View>
              )}

              {comp.similarities.length > 0 && (
                <View className="flex flex-col gap-1.5">
                  <Text className="text-foreground/40 font-psemibold text-xs">
                    Podobieństwa
                  </Text>
                  {comp.similarities.map((s, j) => (
                    <View key={j} className="flex flex-row gap-2 items-start">
                      <View className="w-4 h-4 rounded-full bg-green-200 items-center justify-center mt-0.5 shrink-0">
                        <Check size={8} color="#0F6E56" />
                      </View>
                      <Text className="text-foreground/60 font-pregular text-xs leading-relaxed flex-1">
                        {s}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </View>
    </SectionCard>
  );
}

// ─── Exam ─────────────────────────────────────────────────────────────────────

function KeyConceptTracker({ concepts }: { concepts: string[] }) {
  return (
    <View className="flex flex-col gap-2">
      <View className="flex flex-row justify-between items-center">
        <Text className="text-foreground/40 font-psemibold text-xs">
          Słowa klucze
        </Text>
      </View>

      <View className="flex flex-row flex-wrap gap-1.5 mt-1">
        {concepts.map((kw, i) => (
          <TouchableOpacity key={i} activeOpacity={0.7}>
            <View className={cn("px-2.5 py-1 rounded-lg", "bg-primary/10")}>
              <Text className={cn("font-psemibold text-xs", "text-primary")}>
                {kw}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

function ExamSection({ exam }: { exam: EpochStudy["exam"] }) {
  return (
    <SectionCard>
      <SectionLabel text="Na egzamin" Icon={Sparkles} />

      <KeyConceptTracker concepts={exam.keyConcepts} />

      {exam.quickFacts.length > 0 && (
        <>
          <Divider />
          <View className="flex flex-col gap-2">
            <Text className="text-foreground/40 font-psemibold text-xs">
              Szybkie fakty
            </Text>
            {exam.quickFacts.map((fact, i) => (
              <BulletRow key={i} text={fact} />
            ))}
          </View>
        </>
      )}

      {exam.typicalQuestions.length > 0 && (
        <>
          <Divider />
          <View className="flex flex-col gap-2">
            <Text className="text-foreground/40 font-psemibold text-xs">
              Typowe pytania
            </Text>
            {exam.typicalQuestions.map((q, i) => (
              <BulletRow key={i} text={q} theme="secondary" />
            ))}
          </View>
        </>
      )}

      {exam.essayTopics.length > 0 && (
        <>
          <Divider />
          <View className="flex flex-col gap-2">
            <Text className="text-foreground/40 font-psemibold text-xs">
              Tematy rozprawek
            </Text>
            {exam.essayTopics.map((t, i) => (
              <BulletRow key={i} text={t} />
            ))}
          </View>
        </>
      )}

      {exam.commonMistakes.length > 0 && (
        <>
          <Divider />
          <View className="flex flex-col gap-2">
            <Text className="text-foreground/40 font-psemibold text-xs">
              Częste błędy
            </Text>
            {exam.commonMistakes.map((m, i) => (
              <View key={i} className="flex flex-row gap-2.5 items-start">
                <View className="w-1.5 h-1.5 rounded-full bg-red-500/20 mt-1.5 shrink-0" />
                <Text className="text-foreground/60 font-pregular text-xs leading-relaxed flex-1">
                  {m}
                </Text>
              </View>
            ))}
          </View>
        </>
      )}

      {exam.oralExamTips.length > 0 && (
        <>
          <Divider />
          <View className="flex flex-col gap-2">
            <Text className="text-foreground/40 font-psemibold text-xs">
              Wskazówki na ustny
            </Text>
            {exam.oralExamTips.map((tip, i) => (
              <BulletRow key={i} text={tip} />
            ))}
          </View>
        </>
      )}

      {exam.introStarters.length > 0 && (
        <>
          <Divider />
          <View className="flex flex-col gap-2">
            <Text className="text-foreground/40 font-psemibold text-xs">
              Wstępniaki
            </Text>
            {exam.introStarters.map((s, i) => (
              <View
                key={i}
                className="border-l-2 border-primary/20 pl-3"
                style={{ borderRadius: 0 }}
              >
                <Text className="text-foreground/60 font-pitalic text-xs leading-relaxed">
                  {s}
                </Text>
              </View>
            ))}
          </View>
        </>
      )}

      {exam.conclusionStarters.length > 0 && (
        <>
          <Divider />
          <View className="flex flex-col gap-2">
            <Text className="text-foreground/40 font-psemibold text-xs">
              Zakończenia
            </Text>
            {exam.conclusionStarters.map((s, i) => (
              <View
                key={i}
                className="border-l-2 border-secondary/20 pl-3"
                style={{ borderRadius: 0 }}
              >
                <Text className="text-foreground/60 font-pitalic text-xs leading-relaxed">
                  {s}
                </Text>
              </View>
            ))}
          </View>
        </>
      )}
    </SectionCard>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function FullEpochView({ epoch }: { epoch: EpochStudy }) {
  return (
    <>
      <HeaderSection epoch={epoch} />
      <PhilosophySection
        philosophy={epoch.philosophy}
        worldview={epoch.worldview}
      />
      <KeyIdeasSection keyIdeas={epoch.keyIdeas} />
      <Animated.View
        layout={LinearTransition.springify()}
        className="flex flex-row gap-4 items-start"
      >
        <View className="flex-1 basis-0">
          <MotifsSection motifs={epoch.motifs} />
        </View>
        <View className="flex-1 basis-0">
          <ThemesSection themes={epoch.themes} />
        </View>
      </Animated.View>
      <GenresSection genres={epoch.genres} />
      <CreatorsSection creators={epoch.creators} />
      <WorksSection works={epoch.works} />
      {epoch.timeline.length > 0 && (
        <TimelineSection timeline={epoch.timeline} />
      )}
      {epoch.historicalContext.length > 0 && (
        <HistoricalContextSection events={epoch.historicalContext} />
      )}
      {epoch.culturalContext.length > 0 && (
        <CulturalContextSection items={epoch.culturalContext} />
      )}
      {epoch.comparisons.length > 0 && (
        <ComparisonsSection comparisons={epoch.comparisons} />
      )}
      <ExamSection exam={epoch.exam} />
    </>
  );
}
