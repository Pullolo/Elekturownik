import SmallQuestionCard from "@/src/components/lists/SmallQuestionCard";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import BackButton from "@/src/components/ui/BackButton";
import { questions } from "@/src/data/questions";
import { Question } from "@/src/data/types";
import { useTabBar } from "@/src/hooks/TabBarContext";
import { useCallback } from "react";
import { FlatList, View } from "react-native";

export default function Questions() {
  const { tabBarHeight } = useTabBar();

  const renderItem = useCallback(
    ({ item }: { item: Question }) => (
      <SmallQuestionCard question={item} learned={false} />
    ),
    [],
  );

  return (
    <ScreenWrapper>
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex w-full flex-col gap-2 justify-center pb-4"
        data={questions}
        keyExtractor={(item) =>
          `rendered-question-flat-list-${item.id.toString()}`
        }
        renderItem={renderItem}
        ListHeaderComponent={TopOfTheBooks}
      />
    </ScreenWrapper>
  );
}

function TopOfTheBooks() {
  return (
    <View className="w-full flex flex-col gap-6 pb-6">
      <BackButton text="Wszystkie pytania" />
    </View>
  );
}
