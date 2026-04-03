import { router } from "expo-router";
import { Book, GlobeX, Timer } from "lucide-react-native";
import { Text, View } from "react-native";
import { Question } from "../data/types";
import { clamp } from "../lib/utils";
import Badge from "./ui/Badge";

export default function DailyQuestionWidget({
  question,
}: {
  question?: Question;
}) {
  if (!question)
    return (
      <View className="w-full flex flex-row gap-4 justify-start items-center h-fit bg-primary rounded-3xl p-4">
        <GlobeX size={32} color={"#FFF"} />
        <Text className="text-white font-psemibold text-2xl text-pretty">
          Nie ma pytania dnia
        </Text>
      </View>
    );
  return (
    <View className="w-full flex flex-col justify-center items-start h-fit bg-primary rounded-3xl p-4">
      <View className="w-full flex flex-row flex-wrap gap-2">
        <Badge text={`Pytanie dnia`} />
        <Badge
          onPress={() => {
            router.push(`/(notabs)/book/${question.book_id}`);
          }}
          text={clamp(question.book, 14)}
          LIcon={Book}
        />
        <Badge theme="white" text={question.time} LIcon={Timer} />
      </View>
      <View className="w-full flex p-4">
        <Text className="text-white font-psemibold text-lg text-pretty">
          {question.question}
        </Text>
      </View>
      <View className="w-full flex-row items-center justify-between px-4">
        <Text className="text-white/50 font-psemibold text-2xl">...</Text>
        <Text
          onPress={() => {
            router.push("/(tabs)/daily");
          }}
          className="text-white/50 font-pmedium text-base underline"
        >
          {"Przejdź do pytania"}
        </Text>
      </View>
    </View>
  );
}
