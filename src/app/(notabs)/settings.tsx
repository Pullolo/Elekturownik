import { useUserData } from "@/src/components/context/UserDataContext";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import ThemeSwitcher from "@/src/components/ThemeSwitcher";
import BackButton from "@/src/components/ui/BackButton";
import Button from "@/src/components/ui/Button";
import Divider from "@/src/components/ui/Divider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import * as Updates from "expo-updates";
import { ImageOff, Trash } from "lucide-react-native";
import { DevSettings, ScrollView, View } from "react-native";

const resetApp = async () => {
  await AsyncStorage.clear();

  try {
    await Updates.reloadAsync(); // production / dev client
  } catch {
    DevSettings.reload(); // fallback for Expo Go
  }
};

export default function Settings() {
  const { restoreDefaultAvatar } = useUserData();

  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex flex-col gap-6 items-start justify-center pb-4"
      >
        <BackButton text="Ustawienia" />

        <ThemeSwitcher />
        <Divider />
        <View className="w-full flex flex-col gap-2">
          <Button
            onPress={() => {
              restoreDefaultAvatar().then(() => router.push("/(tabs)"));
            }}
            className="w-full"
            text="Zresetuj profilowe"
            icon={ImageOff}
            variant="error"
          />
          <Button
            onPress={resetApp}
            className="w-full"
            text="Zresetuj dane"
            icon={Trash}
            variant="error"
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
