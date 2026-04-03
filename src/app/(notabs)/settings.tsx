import ScreenWrapper from "@/src/components/ScreenWrapper";
import ThemeSwitcher from "@/src/components/ThemeSwitcher";
import BackButton from "@/src/components/ui/BackButton";
import Button from "@/src/components/ui/Button";
import Divider from "@/src/components/ui/Divider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from "expo-updates";
import { Trash } from "lucide-react-native";
import { DevSettings, ScrollView } from "react-native";

const resetApp = async () => {
  await AsyncStorage.clear();

  try {
    await Updates.reloadAsync(); // production / dev client
  } catch {
    DevSettings.reload(); // fallback for Expo Go
  }
};

export default function Settings() {
  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-6 items-start justify-center pb-4"
      >
        <BackButton text="Ustawienia" />

        <ThemeSwitcher />
        <Divider />
        <Button
          onPress={resetApp}
          className="w-full"
          text="Zresetuj dane"
          icon={Trash}
          variant="error"
        />
      </ScrollView>
    </ScreenWrapper>
  );
}
