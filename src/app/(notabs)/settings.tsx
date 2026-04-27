import { useInventory } from "@/src/components/context/InventoryContext";
import { useUserData } from "@/src/components/context/UserDataContext";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import ThemeSwitcher from "@/src/components/ThemeSwitcher";
import BackButton from "@/src/components/ui/BackButton";
import Button from "@/src/components/ui/Button";
import Divider from "@/src/components/ui/Divider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";
import * as Application from "expo-application";
import Constants from "expo-constants";
import { router } from "expo-router";
import * as Updates from "expo-updates";
import { ArchiveX, ImageOff, Trash } from "lucide-react-native";
import { DevSettings, ScrollView, Text, View } from "react-native";

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
  const { clearAllRewards } = useInventory();

  const otaVersion =
    Constants.expoConfig?.extra?.otaVersion ??
    Constants.manifest2?.extra?.expoClient?.extra?.otaVersion ??
    "0";
  const versionString = `v${Application.nativeApplicationVersion}.${otaVersion}-b${Application.nativeBuildVersion} (${Updates.updateId?.slice(0, 8)})`;

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
            onPress={() => {
              clearAllRewards().then(() => router.push("/(tabs)"));
            }}
            className="w-full"
            text="Zresetuj nagrody"
            icon={ArchiveX}
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
        <View className="w-full flex-col items-center justify-center gap-2">
          <Text className="font-pregular text-xs text-foreground/25">
            {`@Copyright ${format(new Date(), "yyyy")}`}
          </Text>
          <Text className="font-pregular text-xs text-foreground/15 text-center">
            Mikołaj Szlosowski • Aleksandra Polaczyk • Martyna Kamecka • Kacper Kozłowski
          </Text>
          <Text className="font-pregular text-xs text-foreground/15 mt-6">
            {versionString}
          </Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
