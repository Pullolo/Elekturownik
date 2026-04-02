import colors, { ThemeName } from "@/src/constants/colors";
import { cn } from "@/src/lib/utils";
import { Text, TouchableOpacity, View } from "react-native";
import { useThemeContext } from "./context/ThemeContext";

const THEMES: { name: ThemeName; label: string }[] = [
  { name: "pink", label: "Różowy" },
  { name: "green", label: "Zielony" },
  { name: "blue", label: "Niebieski" },
  { name: "purple", label: "Fioletowy" },
  { name: "red", label: "Czerwony" },
  { name: "orange", label: "Pomarańczowy" },
  { name: "yellow", label: "Żółty" },
  { name: "gray", label: "Szary" },
];

export default function ThemeSwitcher() {
  const { theme: currentTheme, setTheme } = useThemeContext(); // grab both from context

  return (
    <View className="w-full flex flex-col gap-4">
      <Text className="text-foreground font-psemibold text-lg">
        Wybierz motyw
      </Text>

      <View className="flex flex-row flex-wrap gap-3">
        {THEMES.map((theme) => {
          const isActive = currentTheme === theme.name;
          const themeColors = colors[theme.name];

          return (
            <TouchableOpacity
              key={theme.name}
              onPress={() => setTheme(theme.name)} // just call setTheme
              className={cn(
                "flex flex-col items-center gap-2 p-4 rounded-2xl border-2 min-w-[100px]",
                isActive
                  ? "border-primary bg-primary/5"
                  : "border-foreground/10 bg-background-secondary",
              )}
            >
              <View
                className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                style={{ backgroundColor: themeColors.primary }}
              />
              <Text
                className={cn(
                  "text-sm font-pmedium text-center",
                  isActive ? "text-primary" : "text-foreground",
                )}
              >
                {theme.label}
              </Text>
              {isActive && <View className="w-2 h-2 rounded-full bg-primary" />}
            </TouchableOpacity>
          );
        })}
      </View>

      <View className="flex flex-row items-center gap-3 p-4 bg-background-secondary rounded-2xl">
        <View
          className="w-6 h-6 rounded-full border border-white shadow-sm"
          style={{ backgroundColor: colors[currentTheme].primary }}
        />
        <Text className="text-foreground font-pmedium">
          Aktualny motyw:{" "}
          <Text className="text-primary font-psemibold">
            {THEMES.find((t) => t.name === currentTheme)?.label}
          </Text>
        </Text>
      </View>
    </View>
  );
}
