import { useLearnedItemsContext } from "@/src/components/context/LearnedItemsContext";
import DailyQuestionWidget from "@/src/components/DailyQuestionWidget";
import Heading from "@/src/components/Heading";
import BooksIconographySvg from "@/src/components/icons/BooksIconographySvg";
import HappyIconographySvg from "@/src/components/icons/HappyIconographySvg";
import IdeaIconographySvg from "@/src/components/icons/IdeaIconographySvg";
import QuestionIconographySvg from "@/src/components/icons/QuestionIconographySvg";
import ReadingIconographySvg from "@/src/components/icons/ReadingIconographySvg";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import { useTabBar } from "@/src/hooks/TabBarContext";
import { useBooks } from "@/src/hooks/useBooks";
import useColors from "@/src/hooks/useColors";
import { useQuestions } from "@/src/hooks/useQuestions";
import { getDailyBook, getDailyQuestion, getRandomPath } from "@/src/lib/utils";
import { router } from "expo-router";
import { Languages } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { DonutChart } from "react-native-circular-chart";
import { SvgProps } from "react-native-svg";

type DonutChartData = {
  name: string;
  value: number;
  color: string;
};

export default function Home() {
  const colors = useColors();
  const { questions } = useQuestions();
  const { books } = useBooks();
  const { counts } = useLearnedItemsContext();

  useEffect(() => {
    setData([
      {
        name: "Nauczone Pytania",
        value: counts.questions,
        color: colors.primary,
      },
      {
        name: "Nauczone Książki",
        value: counts.books,
        color: colors.foregroundPrimary,
      },
      {
        name: "Do Nauczenia",
        value: books.length + questions.length - counts.total,
        color: colors.secondary,
      },
    ]);
  }, [counts, books.length, questions.length, colors]);

  const [data, setData] = useState<DonutChartData[] | undefined>(undefined);

  const [chartWidth, setChartWidth] = useState(0);

  const question = getDailyQuestion([...questions]);
  const book = getDailyBook([...books]);
  const { tabBarHeight } = useTabBar();

  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-6 items-start justify-center pb-4"
      >
        <Heading text="Hejka" />
        <DailyQuestionWidget question={question} />
        <View className="flex flex-col w-full gap-4">
          {/* row1 */}
          <View className="w-full flex flex-row gap-4">
            <GirdCard
              title="Lista Pytań"
              description="Przeglądaj pytania maturalne i ćwicz odpowiedzi krok po kroku."
              onPress={() =>
                router.push({
                  pathname: "/content",
                  params: { tab: "questions" },
                })
              }
              Svg={QuestionIconographySvg}
            />

            <GirdCard
              title="Spis Lektur"
              description="Opracowania, motywy i bohaterowie wszystkich lektur."
              onPress={() =>
                router.push({
                  pathname: "/content",
                  params: { tab: "books" },
                })
              }
              Svg={BooksIconographySvg}
            />
          </View>
          {/* row2 */}
          <View className="w-full flex flex-row gap-4">
            <GirdCard
              title="Lista Epok"
              description="Najważniejsze epoki literackie, ich cechy, twórcy i konteksty."
              onPress={() =>
                router.push({
                  pathname: "/content",
                  params: { tab: "epochs" },
                })
              }
              Svg={ReadingIconographySvg}
            />

            <TouchableOpacity
              className="flex-1 bg-background-secondary rounded-3xl py-4 px-6 flex-col items-start justify-start gap-6 shadow-sm"
              activeOpacity={0.7}
              onPress={() => router.push("/(notabs)/progress")}
              onLayout={(e) => {
                setChartWidth(Math.round(e.nativeEvent.layout.width - 20 * 2));
              }}
            >
              <Text className="text-primary font-pbold text-lg ">
                {"Postępy"}
              </Text>
              <View className="w-full items-center justify-center">
                {chartWidth > 0 && data && (
                  <DonutChart
                    key={`DonutChart-${JSON.stringify(data)}`}
                    data={data}
                    strokeWidth={14}
                    radius={chartWidth / 2 - 8}
                    containerWidth={chartWidth}
                    containerHeight={chartWidth}
                    type="round"
                    startAngle={180 + 40}
                    endAngle={360 + (180 - 40)}
                    animationType="slide"
                    labelValueStyle={{
                      fontSize: 24,
                      fontFamily: "Poppins-Regular, sans-serif",
                      color: colors.secondary,
                    }}
                    labelTitleStyle={{
                      fontSize: 10,
                      fontFamily: "Poppins-Regular, sans-serif",
                      textAlign: "center",
                      color: colors.secondary,
                    }}
                  />
                )}
              </View>
              <Text className="text-primary/70 text-sm font-pregular">
                {"Monitoruj swoje postępy każdego dnia."}
              </Text>
            </TouchableOpacity>
          </View>
          {/* row3 */}
          <View className="w-full flex flex-row gap-4">
            <GirdCard
              title="Losuj Pytanie"
              description="Wylosuj pytanie jawne do odpowiedzi ustnej."
              onPress={() => {
                const randomQuestion =
                  questions[Math.floor(Math.random() * questions.length)];
                // @ts-ignore
                router.push(`/(notabs)/question/${randomQuestion.id}`);
              }}
              Svg={HappyIconographySvg}
            />

            <GirdCard
              title="Zaskocz Mnie"
              description="Wylosuj pytanie albo opracowanie lektury."
              onPress={() => {
                const path = getRandomPath(books, questions);
                // @ts-ignore
                router.push(`/(notabs)/${path}`);
              }}
              Svg={IdeaIconographySvg}
            />
          </View>
        </View>
        {book.terms.length > 0 && (
          <View
            className={`bg-background-secondary rounded-3xl p-5 flex flex-col gap-5 w-full self-start`}
          >
            <View className="flex flex-row items-center justify-start gap-2">
              <Languages
                size={24}
                color={colors.primary}
                className="shrink-0"
              />
              <Text className="text-primary font-pbold text-lg flex-1">
                {`Dzisiejsze pojęcia - ${book.title}`}
              </Text>
            </View>
            <View className="flex flex-col gap-3">
              {book.terms.map((terms, i) => (
                <View
                  key={i}
                  className="border-l-2 border-secondary/30 pl-3 flex flex-col gap-1"
                >
                  <Text className="text-foreground font-pmediumitalic text-sm leading-relaxed">
                    {terms.name}
                  </Text>
                  <Text className="text-foreground/40 font-pregular text-xs leading-relaxed">
                    {terms.meaning}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}

export function GirdCard({
  title,
  description,
  onPress,
  Svg,
}: {
  title: string;
  description: string;
  onPress?: () => void;
  Svg?: React.FC<{ color: string } & SvgProps>;
}) {
  const colors = useColors();

  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 bg-background-secondary rounded-3xl py-4 px-6 flex-col items-start justify-between gap-5 shadow-sm"
      activeOpacity={0.7}
    >
      <Text className="text-primary font-pbold text-lg">{title}</Text>
      <View className="h-24 w-full">
        {Svg && <Svg color={colors.primary} />}
      </View>
      <Text className="text-primary/70 text-sm font-pregular">
        {description}
      </Text>
    </TouchableOpacity>
  );
}
