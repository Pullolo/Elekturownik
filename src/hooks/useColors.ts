// hooks/useColors.ts
import { useThemeContext } from "@/src/components/context/ThemeContext";

export default function useColors() {
  return useThemeContext().colors; // auto-updates on theme change
}
