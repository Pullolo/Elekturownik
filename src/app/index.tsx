import { ScrollView } from "react-native";
import DailyQuestionCard from "../components/DailyQuestion";
import Heading from "../components/Heading";
import ScreenWrapper from "../components/ScreenWrapper";

export default function Home() {
  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-8 items-start justify-center pb-4"
      >
        <Heading text="Witaj" />
        <DailyQuestionCard />
      </ScrollView>
    </ScreenWrapper>
  );
}
