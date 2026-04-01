import DailyQuestionWidget from "@/src/components/DailyQuestionWidget";
import Heading from "@/src/components/Heading";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import { useTabBar } from "@/src/hooks/TabBarContext";
import { useQuestions } from "@/src/hooks/useQuestions";
import { getDailyQuestion } from "@/src/lib/utils";
import { ScrollView } from "react-native";

export default function Home() {
  const { questions } = useQuestions();
  const question = getDailyQuestion([...questions]);
  const { tabBarHeight } = useTabBar();

  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-8 items-start justify-center pb-4"
      >
        <Heading text="Witaj" />
        <DailyQuestionWidget question={question} />
      </ScrollView>
    </ScreenWrapper>
  );
}
