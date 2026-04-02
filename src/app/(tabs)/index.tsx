import DailyQuestionWidget from "@/src/components/DailyQuestionWidget";
import Heading from "@/src/components/Heading";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import { useTabBar } from "@/src/hooks/TabBarContext";
import { useQuestions } from "@/src/hooks/useQuestions";
import { getDailyQuestion } from "@/src/lib/utils";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { Book, HelpCircle } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const { questions } = useQuestions();
  const question = getDailyQuestion([...questions]);
  const { tabBarHeight } = useTabBar();
  const router = useRouter();

  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-6 items-start justify-center pb-4"
      >
        <Heading text="Witaj" />
        <DailyQuestionWidget question={question} />

        <View className="w-full flex flex-col gap-4">
          <TouchableOpacity
            onPress={() => router.push("/books")}
            className="w-full bg-white rounded-3xl p-6 flex-row items-center gap-5 shadow-sm"
          >
            <Book color="#ec4899" size={36} />
            <View className="flex-1">
              <Text className="text-pink-500 font-bold text-lg">
                Spis lektur
              </Text>
              <Text className="text-pink-400 text-base mt-1">
                Przejdź do pełnego spisu lektur
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/questions")}
            className="w-full bg-white rounded-3xl p-6 flex-row items-center gap-5 shadow-sm"
          >
            <HelpCircle color="#ec4899" size={36} />
            <View className="flex-1">
              <Text className="text-pink-500 font-bold text-lg">
                Spis pytań
              </Text>
              <Text className="text-pink-400 text-base mt-1">
                Przejdź do listy pytań
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
