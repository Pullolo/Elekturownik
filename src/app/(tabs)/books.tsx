import SmallBookCard from "@/src/components/lists/SmallBookCard";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import BackButton from "@/src/components/ui/BackButton";
import { books } from "@/src/data/books";
import { Book } from "@/src/data/types";
import { useTabBar } from "@/src/hooks/TabBarContext";
import { useCallback } from "react";
import { FlatList, View } from "react-native";

export default function Books() {
  const { tabBarHeight } = useTabBar();

  const renderItem = useCallback(
    ({ item }: { item: Book }) => <SmallBookCard book={item} learned={false} />,
    [],
  );

  return (
    <ScreenWrapper>
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex w-full flex-col gap-2 justify-center pb-4"
        data={books}
        keyExtractor={(item) => `rendered-book-flat-list-${item.id.toString()}`}
        renderItem={renderItem}
        ListHeaderComponent={TopOfTheBooks}
      />
    </ScreenWrapper>
  );
}

function TopOfTheBooks() {
  return (
    <View className="w-full flex flex-col gap-6 pb-6">
      <BackButton text="Wszystkie lektury" />
    </View>
  );
}
