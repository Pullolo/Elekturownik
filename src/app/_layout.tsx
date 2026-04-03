import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";
import "react-native-reanimated";
import { LearnedItemsProvider } from "../components/context/LearnedItemsContext";
import { ThemeProvider } from "../components/context/ThemeContext";
import { UserDataProvider } from "../components/context/UserDataContext";
import "../global.css";
import { TabBarProvider } from "../hooks/TabBarContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Poppins-Bold": require("../assets/fonts/poppins/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../assets/fonts/poppins/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/poppins/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/poppins/Poppins-SemiBold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <LearnedItemsProvider>
        <UserDataProvider>
          <View className="flex-1 w-full h-full bg-background">
            <TabBarProvider>
              <Stack
                screenOptions={{
                  headerShown: false,
                }}
                initialRouteName="index"
              >
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="(notabs)" />
              </Stack>
              <StatusBar style="auto" />
            </TabBarProvider>
          </View>
        </UserDataProvider>
      </LearnedItemsProvider>
    </ThemeProvider>
  );
}
