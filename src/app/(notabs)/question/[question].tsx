import QuestionCard from "@/src/components/Question";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import BackButton from "@/src/components/ui/BackButton";
import { useQuestion } from "@/src/hooks/useQuestions";
import { useLocalSearchParams } from "expo-router";
import { useRef } from "react";
import { ScrollView } from "react-native";

export default function Question() {
  const { question: questionId } = useLocalSearchParams();

  const question = useQuestion(parseInt(questionId as string));
  const scrollRef = useRef<ScrollView>(null);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <ScreenWrapper>
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-8 items-start justify-center pb-4"
      >
        <BackButton />
        <QuestionCard question={question} scrollToTop={scrollToTop} />
      </ScrollView>
    </ScreenWrapper>
  );
}
