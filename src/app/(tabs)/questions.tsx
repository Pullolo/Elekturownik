import ScreenWrapper from "@/src/components/ScreenWrapper";
import { useTabBar } from "@/src/hooks/TabBarContext";
import { ScrollView } from "react-native";

export default function Questions() {
  const { tabBarHeight } = useTabBar();

  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-8 items-start justify-center pb-4"
      ></ScrollView>
    </ScreenWrapper>
  );
}
