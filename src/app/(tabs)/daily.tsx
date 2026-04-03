import DailyQuestionCard from "@/src/components/DailyQuestion";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import { useTabBar } from "@/src/hooks/TabBarContext";
import { useQuestions } from "@/src/hooks/useQuestions";
import { getDailyQuestion } from "@/src/lib/utils";
import { useRef } from "react";
import { ScrollView } from "react-native";

export default function Daily() {
  const { questions } = useQuestions();
  const question = getDailyQuestion([...questions]);
  const { tabBarHeight } = useTabBar();
  const scrollRef = useRef<ScrollView>(null);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-8 items-start justify-center"
      >
        <DailyQuestionCard question={question} scrollToTop={scrollToTop} />
      </ScrollView>
    </ScreenWrapper>
  );
}
