import ScreenWrapper from "@/src/components/ScreenWrapper";
import ThemeSwitcher from "@/src/components/ThemeSwitcher";
import BackButton from "@/src/components/ui/BackButton";
import { ScrollView } from "react-native";

export default function Settings() {
  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-6 items-start justify-center pb-4"
      >
        <BackButton text="Ustawienia" />

        <ThemeSwitcher />
      </ScrollView>
    </ScreenWrapper>
  );
}
