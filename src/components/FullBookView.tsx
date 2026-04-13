import { Book } from "@/src/data/types";
import { cn, pluralize } from "@/src/lib/utils";
import { router } from "expo-router";
import {
  BookOpen,
  Check,
  ChevronDown,
  ChevronUp,
  Languages,
  MessageSquareQuote,
  ScrollText,
  Sparkles,
  Users,
  X,
} from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";
import useColors from "../hooks/useColors";
import { useLearnedItemsContext } from "./context/LearnedItemsContext";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

export default function FullBookView({ book }: { book: Book }) {
  const { isBookLearned, toggleLearned } = useLearnedItemsContext();

  return (
    <>
      <HeaderSection book={book} />
      {book.summary.timeline && book.summary.timeline.length > 0 && (
        <TimelineSection timeline={book.summary.timeline} />
      )}
      <CharactersSection characters={book.characters} />
      <Animated.View
        layout={LinearTransition.springify()}
        className="flex flex-row gap-4 items-start"
      >
        <View className="flex-1 basis-0">
          <MotifsSection motifs={book.motifs} />
        </View>
        <View className="flex-1 basis-0">
          <ThemesSection themes={book.themes} />
        </View>
      </Animated.View>
      {book.contexts.length > 0 && <ContextsSection contexts={book.contexts} />}
      {book.quotes.length > 0 && <QuotesSection quotes={book.quotes} />}
      {book.terms.length > 0 && <TermsSection terms={book.terms} />}
      <ExamSection exam={book.exam} />
      <Button
        className="w-full"
        icon={isBookLearned(book.id.toString()) ? X : Check}
        text={
          isBookLearned(book.id.toString())
            ? "Cofnij oznaczenie"
            : "Oznacz jako nauczone"
        }
        variant={isBookLearned(book.id.toString()) ? "error" : "success"}
        onPress={() => toggleLearned("books", book.id.toString())}
      />
    </>
  );
}

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
        `rounded-3xl p-5 flex flex-col gap-3 w-full self-start`,
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

function HeaderSection({ book }: { book: Book }) {
  const [expanded, setExpanded] = useState(false);
  const colors = useColors();

  return (
    <SectionCard>
      <View className="flex flex-row justify-between items-start gap-2">
        <View className="flex flex-row gap-2 flex-wrap flex-1">
          <Badge
            onPress={() => {
              //@ts-ignore
              router.push(`/(notabs)/epoch/${book.epoch_id}`);
            }}
            text={book.epoch}
            LIcon={BookOpen}
            theme="primary"
          />
        </View>
        <Text className="text-foreground/40 font-pregular text-sm shrink-0">
          {book.year}
        </Text>
      </View>

      <View>
        <Text className="text-foreground font-pbold text-2xl leading-tight">
          {book.title}
        </Text>
        <Text className="text-foreground/50 font-pregular text-sm mt-1">
          {book.author}
        </Text>
      </View>

      <Divider />

      <Text className="text-foreground/60 font-pregular text-sm leading-relaxed">
        {book.summary.short}
      </Text>

      <TouchableOpacity
        onPress={() => setExpanded((p) => !p)}
        activeOpacity={0.7}
        className="flex flex-row items-center gap-1"
      >
        <Text className="text-primary font-psemibold text-xs">
          {expanded ? "Zwiń streszczenie" : "Pełne streszczenie"}
        </Text>
        {expanded ? (
          <ChevronUp size={13} color={colors.foreground} />
        ) : (
          <ChevronDown size={13} color={colors.foreground} />
        )}
      </TouchableOpacity>

      {expanded && (
        <Animated.Text
          entering={FadeIn}
          exiting={FadeOut}
          className="text-foreground/60 font-pregular text-sm leading-relaxed"
        >
          {book.summary.detailed}
        </Animated.Text>
      )}
    </SectionCard>
  );
}

function TimelineSection({
  timeline,
}: {
  timeline: NonNullable<Book["summary"]["timeline"]>;
}) {
  return (
    <SectionCard className="w-full">
      <SectionLabel text="Kalendarium" Icon={ScrollText} />
      <View className="flex flex-col">
        {timeline.map((event, i) => (
          <View key={i} className="flex flex-row gap-3">
            <View className="flex flex-col items-center w-4">
              <View className="w-2 h-2 rounded-full bg-primary/30 mt-1 shrink-0" />
              {i < timeline.length - 1 && (
                <View className="w-px flex-1 bg-foreground/10 my-1" />
              )}
            </View>
            <View className={`flex-1 ${i < timeline.length - 1 ? "pb-4" : ""}`}>
              <Text className="text-foreground font-psemibold text-sm">
                {event.title}
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

function CharactersSection({ characters }: { characters: Book["characters"] }) {
  const colors = useColors();

  return (
    <SectionCard>
      <SectionLabel
        text={pluralize(
          characters.length,
          "bohater",
          "bohaterowie",
          "bohaterów",
        )}
        Icon={Users}
      />
      <View className="flex flex-col gap-3">
        {characters.map((char, i) => (
          <View
            key={i}
            className="bg-foreground/[0.03] rounded-2xl p-4 flex flex-col gap-2"
          >
            <View className="flex flex-row flex-wrap-reverse justify-between items-center gap-2">
              <Text className="text-foreground font-psemibold text-sm flex-1">
                {char.name}
              </Text>
              <View className="bg-primary/10 px-2.5 py-0.5 rounded-full shrink-0 max-w-64">
                <Text className="text-primary font-psemibold text-xs text-center">
                  {char.role}
                </Text>
              </View>
            </View>
            <Text className="text-foreground/50 font-pregular text-xs leading-relaxed">
              {char.description}
            </Text>
            {char.traits.length > 0 && (
              <View className="flex flex-row flex-wrap gap-1.5 mt-1">
                {char.traits.map((trait, j) => (
                  <View
                    key={j}
                    className={cn(
                      "border border-foreground/10 rounded-lg px-2 py-0.5",
                      colors.dark ? "bg-gray-950" : "bg-white",
                    )}
                  >
                    <Text className="text-foreground/40 font-pregular text-xs">
                      {trait}
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

function MotifsSection({ motifs }: { motifs: Book["motifs"] }) {
  return (
    <SectionCard className="flex-1">
      <SectionLabel text="Motywy" />
      <View className="flex flex-col">
        {motifs.map((motif, i) => (
          <View
            key={i}
            className={`flex flex-col gap-1 py-2.5 ${
              i < motifs.length - 1 ? "border-b border-foreground/5" : ""
            } ${i === 0 ? "pt-0" : ""}`}
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

function ThemesSection({ themes }: { themes: Book["themes"] }) {
  return (
    <SectionCard className="flex-1">
      <SectionLabel text="Tematy" />
      <View className="flex flex-col">
        {themes.map((theme, i) => (
          <View
            key={i}
            className={`flex flex-col gap-1 py-2.5 ${
              i < themes.length - 1 ? "border-b border-foreground/5" : ""
            } ${i === 0 ? "pt-0" : ""}`}
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

function ContextsSection({ contexts }: { contexts: Book["contexts"] }) {
  return (
    <SectionCard>
      <SectionLabel text="Konteksty porównawcze" Icon={BookOpen} />
      <View className="flex flex-col">
        {contexts.map((ctx, i) => (
          <View
            key={i}
            className={`flex flex-col gap-1 py-3 ${
              i < contexts.length - 1 ? "border-b border-foreground/5" : ""
            } ${i === 0 ? "pt-0" : ""}`}
          >
            <Text className="text-foreground font-psemibold text-sm">
              {ctx.title}
            </Text>
            <Text className="text-foreground/50 font-pregular text-xs leading-relaxed">
              {ctx.description}
            </Text>
          </View>
        ))}
      </View>
    </SectionCard>
  );
}

function QuotesSection({ quotes }: { quotes: Book["quotes"] }) {
  return (
    <SectionCard>
      <SectionLabel
        text={pluralize(quotes.length, "cytat", "cytaty", "cytatów")}
        Icon={MessageSquareQuote}
      />
      <View className="flex flex-col gap-3">
        {quotes.map((quote, i) => (
          <View
            key={i}
            className="border-l-2 border-primary/30 pl-3 flex flex-col gap-1"
          >
            <Text className="text-foreground font-pmedium text-sm leading-relaxed italic">
              {quote.text}
            </Text>
            <Text className="text-foreground/40 font-pregular text-xs leading-relaxed">
              {quote.explanation}
            </Text>
          </View>
        ))}
      </View>
    </SectionCard>
  );
}

function TermsSection({ terms }: { terms: Book["terms"] }) {
  return (
    <SectionCard>
      <SectionLabel
        text={pluralize(terms.length, "pojęcie", "pojęcia", "pojęć")}
        Icon={Languages}
      />
      <View className="flex flex-col gap-3">
        {terms.map((terms, i) => (
          <View
            key={i}
            className="border-l-2 border-primary/30 pl-3 flex flex-col gap-1"
          >
            <Text className="text-foreground font-pmedium text-sm leading-relaxed italic">
              {terms.name}
            </Text>
            <Text className="text-foreground/40 font-pregular text-xs leading-relaxed">
              {terms.meaning}
            </Text>
          </View>
        ))}
      </View>
    </SectionCard>
  );
}

function ExamSection({ exam }: { exam: Book["exam"] }) {
  return (
    <SectionCard>
      <SectionLabel text="Na egzamin" Icon={Sparkles} />

      <View className="flex flex-col gap-1">
        <Text className="text-foreground/40 font-psemibold text-xs">
          Słowa klucze
        </Text>
        <View className="flex flex-row flex-wrap gap-1.5 mt-1">
          {exam.keywords.map((kw, i) => (
            <View key={i} className="bg-primary/10 px-2.5 py-1 rounded-lg">
              <Text className="text-primary font-psemibold text-xs">{kw}</Text>
            </View>
          ))}
        </View>
      </View>

      {exam.possibleQuestions.length > 0 && (
        <>
          <Divider />

          <View className="flex flex-col gap-2">
            <Text className="text-foreground/40 font-psemibold text-xs">
              Możliwe pytania
            </Text>
            {exam.possibleQuestions.map((q, i) => (
              <View key={i} className="flex flex-row gap-2.5 items-start">
                <View className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                <Text className="text-foreground/60 font-pregular text-xs leading-relaxed flex-1">
                  {q}
                </Text>
              </View>
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
                <View className="w-1.5 h-1.5 rounded-full bg-foreground-primary/40 mt-1.5 shrink-0" />
                <Text className="text-foreground/60 font-pregular text-xs leading-relaxed flex-1">
                  {m}
                </Text>
              </View>
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
              <View key={i} className="border-l-2 border-primary/20 pl-3">
                <Text className="text-foreground/60 font-pregular text-xs leading-relaxed italic">
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
