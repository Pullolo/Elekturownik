// hooks/useSystemUI.ts
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import useColors from "./useColors";

export const useSystemUI = () => {
  const color = useColors();

  useEffect(() => {
    NavigationBar.setStyle(color.dark ? "dark" : "light");
  }, [color]);

  return <StatusBar style={color.dark ? "light" : "dark"} />;
};
