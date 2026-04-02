// hooks/useTheme.ts
import { useThemeContext } from "@/src/components/context/ThemeContext";

export default function useTheme() {
  const { theme, setTheme } = useThemeContext();
  return { theme, setTheme };
}
