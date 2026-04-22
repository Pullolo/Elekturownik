import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import * as Updates from "expo-updates";
import { useEffect } from "react";
import { Alert, View } from "react-native";
import "react-native-reanimated";
import { ClaimedAchievementsProvider } from "../components/context/ClaimedAchievementsContext";
import { InventoryProvider } from "../components/context/InventoryContext";
import { LearnedItemsProvider } from "../components/context/LearnedItemsContext";
import { ThemeProvider } from "../components/context/ThemeContext";
import { UserDataProvider } from "../components/context/UserDataContext";
import "../global.css";
import { TabBarProvider } from "../hooks/TabBarContext";
import { useSystemUI } from "../hooks/useSystemUI";

SplashScreen.preventAutoHideAsync();

let hasChecked = false;
async function checkOTAUpdate() {
  if (hasChecked) return;
  hasChecked = true;

  try {
    const update = await Updates.checkForUpdateAsync();

    if (update.isAvailable) {
      await Updates.fetchUpdateAsync();

      Alert.alert("Dostępna aktualizacja", "Kliknij tutaj, aby zaktualizować", [
        { text: "Później" },
        { text: "Zaktualizuj", onPress: () => Updates.reloadAsync() },
      ]);
    }
  } catch (e) {
    console.log("OTA error:", e);
  }
}

function AppContent() {
  const statusBar = useSystemUI(); // now inside ThemeProvider ✓

  return (
    <LearnedItemsProvider>
      <UserDataProvider>
        <ClaimedAchievementsProvider>
          <InventoryProvider>
            <View className="flex-1 w-full h-full bg-background">
              <TabBarProvider>
                <Stack
                  screenOptions={{ headerShown: false }}
                  initialRouteName="index"
                >
                  <Stack.Screen name="(tabs)" />
                  <Stack.Screen name="(notabs)" />
                </Stack>
                {statusBar}
              </TabBarProvider>
            </View>
          </InventoryProvider>
        </ClaimedAchievementsProvider>
      </UserDataProvider>
    </LearnedItemsProvider>
  );
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Poppins-Bold": require("../assets/fonts/poppins/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../assets/fonts/poppins/Poppins-Medium.ttf"),
    "Poppins-MediumItalic": require("../assets/fonts/poppins/Poppins-MediumItalic.ttf"),
    "Poppins-Regular": require("../assets/fonts/poppins/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/poppins/Poppins-SemiBold.ttf"),
    "Poppins-Italic": require("../assets/fonts/poppins/Poppins-Italic.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();

      setTimeout(() => {
        checkOTAUpdate();
      }, 1000);
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
