import { Book } from "@/src/data/types";
import useColors from "@/src/hooks/useColors";
import { clamp, cn } from "@/src/lib/utils";
import { router } from "expo-router";
import { Book as BookIcon, Check } from "lucide-react-native";
import { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Badge from "../ui/Badge";

const SmallBookCard = memo(function SmallBookCard({
  book,
  learned,
}: {
  book?: Book;
  learned?: boolean;
}) {
  const colors = useColors();

  if (!book) return null;

  return (
    <TouchableOpacity
      onPress={() => {
        // @ts-ignore
        router.push(`/(notabs)/book/${book.id}`);
      }}
      activeOpacity={0.7}
      className={cn(
        "w-full flex flex-col rounded-3xl p-5 gap-4",
        colors.dark ? "bg-gray-950" : "bg-white",
      )}
    >
      <View className="flex flex-row justify-between items-center gap-2">
        <View className="flex flex-row gap-2 flex-wrap flex-1">
          <Badge
            onPress={() => {
              //@ts-ignore
              router.push(`/(notabs)/epoch/${book.epoch_id}`);
            }}
            text={book.epoch}
            LIcon={BookIcon}
            theme="primary"
          />
        </View>
        {learned && (
          <View className="shrink-0">
            <Badge text="Nauczone" theme="success" LIcon={Check} />
          </View>
        )}
      </View>

      <View className="flex flex-row gap-3 items-center">
        <View className="w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
          <Text className="text-secondary font-psemibold text-base">
            {book.id}
          </Text>
        </View>
        <View className="flex-1">
          <Text className="text-foreground font-psemibold text-base leading-snug">
            {book.title}
          </Text>
          <Text className="text-foreground/50 font-pregular text-sm mt-0.5">
            {book.author} · {book.year}
          </Text>
        </View>
      </View>

      <View className="border-t border-foreground/10 pt-3">
        <Text
          numberOfLines={3}
          className="text-foreground/60 font-pregular text-sm leading-relaxed"
        >
          {book.summary.short}
        </Text>
      </View>

      {book.themes?.length > 0 && (
        <View className="flex flex-row flex-wrap gap-2">
          {book.themes.slice(0, 3).map((theme, i) => (
            <View
              key={i}
              className="bg-foreground/5 border border-foreground/10 rounded-lg px-2 py-1"
            >
              <Text className="text-foreground/50 font-pregular text-xs">
                {clamp(theme.name, 20)}
              </Text>
            </View>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
});

export default SmallBookCard;
