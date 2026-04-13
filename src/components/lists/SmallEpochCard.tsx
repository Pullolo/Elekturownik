import { EpochStudy } from "@/src/data/types";
import useColors from "@/src/hooks/useColors";
import { cn, pluralize } from "@/src/lib/utils";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Castle,
  Check,
  Factory,
  Flower2,
  Globe,
  Landmark,
  Lightbulb,
  LucideProps,
  Moon,
  PenTool,
  Radio,
  Sparkles,
} from "lucide-react-native";
import { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Badge from "../ui/Badge";

const EPOCH_COLORS: Record<
  string,
  {
    bg: string;
    text: string;
    dot: string;
    color: string;
    icon: React.FC<LucideProps>;
  }
> = {
  Antyk: {
    bg: "bg-amber-500/10",
    text: "text-amber-600",
    dot: "bg-amber-400",
    color: "#fbbf24", // amber-400
    icon: Landmark,
  },
  Średniowiecze: {
    bg: "bg-stone-500/10",
    text: "text-stone-500",
    dot: "bg-stone-400",
    color: "#a8a29e", // stone-400
    icon: Castle,
  },
  Renesans: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-600",
    dot: "bg-emerald-400",
    color: "#34d399", // emerald-400
    icon: PenTool,
  },
  Barok: {
    bg: "bg-purple-500/10",
    text: "text-purple-600",
    dot: "bg-purple-400",
    color: "#c084fc", // purple-400
    icon: Sparkles,
  },
  Oświecenie: {
    bg: "bg-sky-500/10",
    text: "text-sky-600",
    dot: "bg-sky-400",
    color: "#38bdf8", // sky-400
    icon: Lightbulb,
  },
  Romantyzm: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-500",
    dot: "bg-indigo-400",
    color: "#818cf8", // indigo-400
    icon: Moon,
  },
  Pozytywizm: {
    bg: "bg-teal-500/10",
    text: "text-teal-600",
    dot: "bg-teal-400",
    color: "#2dd4bf", // teal-400
    icon: Factory,
  },
  "Młoda Polska": {
    bg: "bg-rose-500/10",
    text: "text-rose-600",
    dot: "bg-rose-400",
    color: "#fb7185", // rose-400
    icon: Flower2,
  },
  "XX-lecie międzywojenne": {
    bg: "bg-orange-500/10",
    text: "text-orange-500",
    dot: "bg-orange-400",
    color: "#fb923c", // orange-400
    icon: Radio,
  },
  Współczesność: {
    bg: "bg-blue-500/10",
    text: "text-blue-600",
    dot: "bg-blue-400",
    color: "#60a5fa", // blue-400
    icon: Globe,
  },
};

const SmallEpochCard = memo(function SmallEpochCard({
  epoch,
  learned,
}: {
  epoch: EpochStudy;
  learned?: boolean;
}) {
  const colors = useColors();

  if (!epoch) return null;

  const palette = EPOCH_COLORS[epoch.name] ?? {
    bg: "bg-secondary/10",
    text: "text-secondary",
    dot: "bg-secondary",
    color: colors.primary,
    icon: "x",
  };

  return (
    <TouchableOpacity
      onPress={() => {
        // @ts-ignore
        router.push(`/(notabs)/epoch/${epoch.id}`);
      }}
      activeOpacity={0.7}
      className={cn(
        "w-full flex flex-col rounded-3xl overflow-hidden",
        colors.dark ? "bg-gray-950" : "bg-white",
      )}
    >
      {/* Coloured header strip */}
      <View className={cn("px-5 pt-5 pb-4", palette.bg)}>
        <View className="flex flex-row justify-between items-start gap-2">
          <View className="flex-1">
            <View className="flex flex-row justify-start items-center gap-4 py-1">
              <Text
                className={cn(
                  "font-pbold text-2xl leading-tight",
                  palette.text,
                )}
              >
                {epoch.name}
              </Text>
              {learned && (
                <View className="flex flex-col items-start justify-center">
                  <Badge text="Nauczone" theme="success" LIcon={Check} />
                </View>
              )}
            </View>
            <Text className="text-foreground/40 font-pregular text-sm mt-0.5">
              {epoch.timeframe}
            </Text>
          </View>
          <View
            className={cn(
              "w-10 h-10 rounded-2xl items-center justify-center",
              palette.bg,
            )}
          >
            <palette.icon size={18} color={palette.color} />
          </View>
        </View>
      </View>

      {/* Body */}
      <View className="px-5 pt-4 pb-5 flex flex-col gap-4">
        {/* Description */}
        <Text
          numberOfLines={3}
          className="text-foreground/60 font-pregular text-sm leading-relaxed"
        >
          {epoch.description}
        </Text>

        {/* Stats row */}
        <View className="flex flex-row gap-3">
          <StatPill
            icon="users"
            label={pluralize(
              epoch.creators?.length ?? 0,
              "twórca",
              "twórców",
              "twórców",
              false,
            )}
            value={epoch.creators?.length ?? 0}
            dark={colors.dark}
          />
          <StatPill
            icon="file-text"
            label={pluralize(
              epoch.works?.length ?? 0,
              "dzieło",
              "dzieła",
              "dzieł",
              false,
            )}
            value={epoch.works?.length ?? 0}
            dark={colors.dark}
          />
          <StatPill
            icon="tag"
            label={pluralize(
              epoch.motifs?.length ?? 0,
              "motyw",
              "motywy",
              "motywów",
              false,
            )}
            value={epoch.motifs?.length ?? 0}
            dark={colors.dark}
          />
        </View>

        {/* Divider + fun fact */}
        {epoch.funFact && (
          <View className="border-t border-foreground/10 pt-3 flex flex-row gap-2 items-start">
            <Feather
              name="zap"
              size={13}
              className="mt-0.5 shrink-0"
              color={colors.foreground}
            />
            <Text
              numberOfLines={2}
              className="text-foreground/40 font-pregular text-xs leading-relaxed flex-1"
            >
              {epoch.funFact}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
});

function StatPill({
  icon,
  label,
  value,
  dark,
}: {
  icon: React.ComponentProps<typeof Feather>["name"];
  label: string;
  value: number;
  dark: boolean;
}) {
  const colors = useColors();

  return (
    <View
      className={cn(
        "flex-1 flex flex-col items-center rounded-2xl py-2.5 gap-0.5",
        dark ? "bg-white/5" : "bg-black/5",
      )}
    >
      <Feather name={icon} size={14} color={colors.foreground} />
      <Text className="text-foreground font-psemibold text-sm">{value}</Text>
      <Text className="text-foreground/40 font-pregular text-xs">{label}</Text>
    </View>
  );
}

export default SmallEpochCard;
