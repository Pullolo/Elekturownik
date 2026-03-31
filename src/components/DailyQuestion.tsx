import {
  Book,
  Dot,
  Eye,
  EyeOff,
  LibraryBig,
  Stars,
  Timer,
} from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ExpandableCard from "./ExpandableCard";
import Badge from "./ui/Badge";

export default function DailyQuestionCard() {
  return (
    <View className="w-full flex flex-col justify-center items-center gap-4">
      <View className="w-full flex flex-col justify-center items-start h-fit bg-primary rounded-3xl p-4">
        <View className="w-full flex flex-row gap-2">
          <Badge text="Pytanie nr 21" />
          <Badge text="Dziady" LIcon={Book} />
          <Badge text="15 min" LIcon={Timer} />
        </View>
        <View className="w-full flex p-4">
          <Text className="text-white font-psemibold text-lg text-pretty">
            Losy młodzieży polskiej pod zaborami. Omów zagadnienie na podstawie
            Dziadów części III Adama Mickiewicza. W swojej odpowiedzi uwzględnij
            również wybrany kontekst.
          </Text>
        </View>
        <View className="w-full flex-row items-center justify-between px-4">
          <Text className="text-white/50 font-psemibold text-2xl">...</Text>
          <Text className="text-white/50 font-pmedium text-base underline">
            Zobacz odpowiedź
          </Text>
        </View>
      </View>
      {/* Wskazówki */}
      <ExpandableCard text="Wskazówki do odpowiedzi">
        <View className="flex flex-row flex-wrap gap-2 pt-4">
          <Badge theme="primary" text="Prometeizm" LIcon={Stars} />
          <Badge theme="primary" text="Mesjanizm" />
          <Badge theme="primary" text="Solidarność i opór" />
          <Badge theme="primary" text="Filomaci i Filareci" />
        </View>
      </ExpandableCard>
      {/* konteksty */}
      <ExamplesCard
        examples={[
          "Kamienie na szaniec",
          "Zdazyc przed panem bogiem",
          "Inny swiat",
          "Latarnik",
        ]}
      />
    </View>
  );
}

export function ExamplesCard({ examples }: { examples: string[] }) {
  const [visible, setVisible] = useState<boolean[]>(
    Array(examples.length).fill(false),
  );

  return (
    <View className="w-full flex flex-col gap-4 justify-center items-start bg-secondary rounded-3xl p-4">
      <View className="w-fit gap-2 flex flex-row items-center justify-start">
        <LibraryBig size={32} color={"#EE3F86"} />
        <Text className="text-primary font-pmedium text-lg">
          {"Przykładowe konteksty"}
        </Text>
      </View>
      <View className="w-full flex flex-col gap-2 items-start justify-center">
        {examples.map((example, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setVisible((prev) => {
                  const updated = [...prev];
                  updated[index] = !updated[index];
                  return updated;
                });
              }}
              className="w-full flex flex-col gap-2 justify-center items-center"
              key={`mapped-example-${index}`}
              activeOpacity={0.7}
            >
              {index === 0 ? null : (
                <View className="w-full h-[1px] bg-pink-800/10 rounded-full z-50"></View>
              )}
              <View className="w-full gap-2 flex flex-row items-center justify-between">
                <View className="w-fit gap-2 flex flex-row items-center justify-start">
                  <Dot size={16} color={"#9d174d"} />
                  <Text className="text-pink-800 font-pmedium text-sm">
                    {visible[index] ? example : "*".repeat(example.length)}
                  </Text>
                </View>
                {visible[index] ? (
                  <Eye size={16} color={"#9d174d"} />
                ) : (
                  <EyeOff size={16} color={"#9d174d"} />
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
