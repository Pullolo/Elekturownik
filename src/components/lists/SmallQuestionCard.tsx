import { Question } from "@/src/data/types";
import useColors from "@/src/hooks/useColors";
import { clamp, cn, pluralize } from "@/src/lib/utils";
import { router } from "expo-router";
import { Book, Check, Lightbulb, Timer, Waypoints } from "lucide-react-native";
import { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Badge from "../ui/Badge";

const SmallQuestionCard = memo(function SmallQuestionCard({
  question,
  learned,
}: {
  question?: Question;
  learned?: boolean;
}) {
  const colors = useColors();

  if (!question) return null;

  return (
    <TouchableOpacity
      onPress={() => {
        // @ts-ignore
        router.push(`/(notabs)/question/${question.id}`);
      }}
      activeOpacity={0.7}
      className={cn(
        "w-full flex flex-col rounded-2xl p-4 gap-3",
        colors.dark ? "bg-gray-950" : "bg-white",
      )}
    >
      <View className="flex flex-row justify-between items-center gap-2">
        <View className="flex flex-row gap-2 flex-wrap flex-1">
          <Badge
            onPress={() => {
              //@ts-ignore
              router.push(`/(notabs)/book/${question.book_id}`);
            }}
            text={clamp(question.book, learned ? 16 : 28)}
            LIcon={Book}
            theme="primary"
          />
          {learned && <Badge text="Nauczone" theme="success" LIcon={Check} />}
        </View>
        <View className="shrink-0">
          <Badge text={question.time} LIcon={Timer} theme="noBackground" />
        </View>
      </View>

      <View className="flex flex-row gap-3 items-center">
        <View className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
          <Text className="text-secondary font-psemibold text-sm">
            {question.id}
          </Text>
        </View>
        <Text
          numberOfLines={2}
          className="flex-1 text-foreground/80 font-pmedium text-sm leading-snug"
        >
          {question.question}
        </Text>
      </View>

      <View className="border-t border-foreground/10 pt-2 flex flex-row gap-4">
        <StatPill
          icon={Lightbulb}
          label={pluralize(
            question.tips.length,
            "podpowiedź",
            "podpowiedzi",
            "podpowiedzi",
          )}
        />
        <StatPill
          icon={Waypoints}
          label={pluralize(
            question.contexts.length,
            "kontekst",
            "konteksty",
            "kontekstów",
          )}
        />
        <StatPill
          icon={Book}
          label={pluralize(question.schema.length, "krok", "kroki", "kroków")}
        />
      </View>
    </TouchableOpacity>
  );
});

function StatPill({
  icon: Icon,
  label,
}: {
  icon: React.FC<any>;
  label: string;
}) {
  const colors = useColors();

  return (
    <View className="flex flex-row gap-1 items-center">
      <Icon size={12} color={colors.foreground} />
      <Text className="text-foreground/60 font-pregular text-xs px-[1px]">
        {label}
      </Text>
    </View>
  );
}

export default SmallQuestionCard;
