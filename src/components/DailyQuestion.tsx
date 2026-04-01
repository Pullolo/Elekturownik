import { format } from "date-fns";
import { pl } from "date-fns/locale/pl";
import { Calendar } from "lucide-react-native";
import { Text, View } from "react-native";
import { Question } from "../data/types";
import QuestionCard from "./Question";

export default function DailyQuestionCard({
  scrollToTop,
  question,
}: {
  scrollToTop: () => void;
  question?: Question;
}) {
  return (
    <View className="w-full flex flex-col gap-4 items-center justify-center">
      <View className="w-full flex flex-row justify-between items-center h-fit bg-primary rounded-3xl p-4">
        <View className="w-fit flex flex-row items-center gap-4">
          <Calendar size={32} color={"#FFF"} />
          <Text className="text-white font-psemibold text-2xl text-pretty">
            Pytanie dnia
          </Text>
        </View>
        <Text className="text-white font-psemibold text-2xl text-pretty">
          {format(new Date(), "d MMM", { locale: pl })}
        </Text>
      </View>
      <QuestionCard question={question} scrollToTop={scrollToTop} />
    </View>
  );
}
