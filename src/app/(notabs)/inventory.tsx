import { useActiveRewards } from "@/src/components/context/InventoryContext";
import InventorySwitcher from "@/src/components/InventorySwitcher";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import BackButton from "@/src/components/ui/BackButton";
import { ScrollView } from "react-native";

export default function Inventory() {
  const { active, setActiveEmoji, setActiveText } = useActiveRewards();

  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-6 items-start justify-center pb-4"
      >
        <BackButton text="Ekwipunek" />

        <InventorySwitcher
          activeEmojiId={active.emojiId}
          activeTextId={active.textId}
          onSelectEmoji={(r) => setActiveEmoji(r.id)}
          onSelectText={(r) => setActiveText(r.id)}
        />
      </ScrollView>
    </ScreenWrapper>
  );
}
