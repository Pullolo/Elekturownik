// context/ThemeContext.tsx
import colors, { ColorScheme, ThemeName } from "@/src/constants/colors";
import { themes } from "@/src/constants/themeVars";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { View } from "react-native";

interface ThemeContextType {
  theme: ThemeName;
  colors: ColorScheme;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "blue",
  colors: colors.blue,
  setTheme: () => {},
});

const STORAGE_KEY = "app-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>("blue");

  // Load on mount
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((saved) => {
      if (saved) setThemeState(saved as ThemeName);
    });
  }, []);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    AsyncStorage.setItem(STORAGE_KEY, newTheme); // fire and forget, no need to await
  };

  return (
    <ThemeContext.Provider value={{ theme, colors: colors[theme], setTheme }}>
      <View style={[{ flex: 1 }, themes[theme]]}>{children}</View>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
