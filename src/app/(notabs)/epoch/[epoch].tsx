import FullEpochView from "@/src/components/FullEpochView";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import BackButton from "@/src/components/ui/BackButton";
import { useEpoch } from "@/src/hooks/useEpochs";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function Book() {
  const { epoch: epochId } = useLocalSearchParams();

  const epoch = useEpoch(parseInt(epochId as string));

  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-4 items-start justify-center pb-4"
      >
        <BackButton />

        {epoch ? (
          <FullEpochView epoch={epoch} />
        ) : (
          <Text className="w-full text-center text-primary font-psemibold text-xl">
            Nie znaleziono epoki
          </Text>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}
