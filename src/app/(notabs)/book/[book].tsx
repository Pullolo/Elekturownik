import FullBookView from "@/src/components/FullBookView";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import BackButton from "@/src/components/ui/BackButton";
import { useTabBar } from "@/src/hooks/TabBarContext";
import { useBook } from "@/src/hooks/useBooks";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function Book() {
  const { book: bookId } = useLocalSearchParams();

  const book = useBook(parseInt(bookId as string));
  const { tabBarHeight } = useTabBar();

  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-4 items-start justify-center pb-4"
      >
        <BackButton />
        {book ? (
          <FullBookView book={book} />
        ) : (
          <Text className="w-full text-center text-primary font-psemibold text-xl">
            Nie znaleziono książki
          </Text>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}
