import {
  Book,
  Dot,
  GlobeX,
  Lightbulb,
  Pin,
  ShieldQuestion,
  Stars,
  Timer,
} from "lucide-react-native";
import { useState } from "react";
import { Text, View } from "react-native";
import { Question } from "../data/types";
import useColors from "../hooks/useColors";
import { pluralize } from "../lib/utils";
import ExamplesCard from "./ExamplesCard";
import ExpandableCard from "./ExpandableCard";
import Badge from "./ui/Badge";

export default function QuestionCard({
  scrollToTop,
  question,
}: {
  scrollToTop: () => void;
  question?: Question;
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const colors = useColors();

  if (!question)
    return (
      <View className="w-full flex flex-row gap-4 justify-start items-center h-fit bg-primary rounded-3xl p-4">
        <GlobeX size={32} color={"#FFF"} />
        <Text className="text-white font-psemibold text-2xl text-pretty">
          Nie znaleziono pytania
        </Text>
      </View>
    );

  const numOfWords = question.suggested_answer
    .join(" ")
    .trim()
    .split(" ").length;

  return (
    <View className="w-full flex flex-col justify-center items-center gap-4">
      <View className="w-full flex flex-col justify-center items-start h-fit bg-primary rounded-3xl p-4">
        <View className="w-full flex flex-row gap-2">
          <Badge text={`Pytanie nr ${question.id}`} />
          <Badge text={question.book} LIcon={Book} />
          <Badge text={question.time} LIcon={Timer} />
        </View>
        <View className="w-full flex p-4">
          <Text className="text-white font-psemibold text-lg text-pretty">
            {question.question}
          </Text>
        </View>
        <View className="w-full flex-row items-center justify-between px-4">
          <Text className="text-white/50 font-psemibold text-2xl">...</Text>
          <Text
            onPress={() => setShowAnswer((prev) => !prev)}
            className="text-white/50 font-pmedium text-base underline"
          >
            {showAnswer ? "Ukryj odpowiedź" : "Zobacz odpowiedź"}
          </Text>
        </View>
      </View>

      {showAnswer ? (
        <View className="w-full flex flex-col justify-center items-start h-fit bg-white rounded-3xl p-4">
          <View className="w-full flex flex-row justify-between items-center">
            <Badge text={`Przykładowa odpowiedź`} theme="primary" />
            <Badge
              text={`${pluralize(numOfWords, "słowo", "słowa", "słów")}`}
              theme="noBackground"
            />
          </View>
          <View className="w-full flex-col flex justify-center gap-8 py-4 px-2">
            {question.suggested_answer.map((answer, index) => {
              return (
                <Text
                  key={`mapped-answer-${index}`}
                  className="text-foreground/60 font-pregular text-sm text-pretty"
                >
                  {answer}
                </Text>
              );
            })}
          </View>
          <View className="w-full flex-row items-center justify-between px-4">
            <Text className="text-foreground/50 font-psemibold text-2xl">
              ...
            </Text>
            <Text
              onPress={() => {
                scrollToTop();
              }}
              className="text-foreground/50 font-pmedium text-base underline"
            >
              {"Powrót do pytania"}
            </Text>
          </View>
        </View>
      ) : (
        <>
          {/* Objasnienie pytania */}
          <ExpandableCard LIcon={ShieldQuestion} text="Objasnienie pytania">
            <View className="w-full gap-2 flex flex-row items-center justify-between">
              <View className="w-full pt-4 gap-2 flex flex-row items-start justify-start">
                <Dot size={16} color={colors.secondary} />
                <Text className="text-secondary font-pmedium text-sm text-wrap w-full pr-8">
                  {question.question_explanation}
                </Text>
              </View>
            </View>
          </ExpandableCard>
          {/* Wskazówki */}
          <ExpandableCard LIcon={Lightbulb} text="Wskazówki do odpowiedzi">
            <View className="flex flex-row flex-wrap gap-2 pt-4">
              {question.tips.map((tip, index) => {
                return (
                  <Badge
                    key={`mapped-tip-${index}`}
                    theme="secondary"
                    text={tip}
                    LIcon={index === 0 ? Stars : undefined}
                  />
                );
              })}
            </View>
          </ExpandableCard>
          {/* konteksty */}
          <ExamplesCard
            examples={question.contexts.map((context) => context.title)}
          />
          {/* Schemat */}
          <ExpandableCard LIcon={Pin} text="Schemat odpowiedzi">
            <View className="w-full flex flex-col gap-2 items-start justify-center pt-4">
              {question.schema.map((scheme, index) => {
                return (
                  <View
                    className="w-full flex flex-col gap-2 justify-center items-center"
                    key={`mapped-scheme-${index}`}
                  >
                    {index === 0 ? null : (
                      <View className="w-full h-[1px] bg-foreground-primary/10 rounded-full z-50"></View>
                    )}
                    <View className="w-full gap-2 flex flex-row items-center justify-between">
                      <View className="w-full gap-2 flex flex-row items-start justify-start">
                        <Dot size={16} color={colors.secondary} />
                        <View className="flex flex-col items-start justify-center gap-1 w-full pr-8">
                          <Text className="text-secondary font-pmedium text-base text-wrap w-full">
                            {`${scheme.rule}`}
                          </Text>
                          <Text className="text-foreground/60 font-pregular text-xs text-wrap w-full">
                            {`${scheme.starter}`}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </ExpandableCard>
        </>
      )}
    </View>
  );
}
