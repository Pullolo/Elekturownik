import colors, { ThemeName } from "@/src/constants/colors";
import { cn } from "@/src/lib/utils";
import { MoonStar } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { useThemeContext } from "./context/ThemeContext";
import Divider from "./ui/Divider";

const SOLID_THEMES: { name: ThemeName; label: string }[] = [
  { name: "blue", label: "Niebieski" },
  { name: "pink", label: "Różowy" },
  { name: "green", label: "Zielony" },
  { name: "purple", label: "Fioletowy" },
  { name: "red", label: "Czerwony" },
  { name: "orange", label: "Pomarańczowy" },
  { name: "yellow", label: "Żółty" },
  { name: "gray", label: "Szary" },
  { name: "midnight", label: "Północ" },
  { name: "cognac", label: "Koniak" },
  { name: "mist", label: "Mgła" },
  { name: "magma", label: "Magma" },
];

const MIXED_THEMES: { name: ThemeName; label: string; subtitle: string }[] = [
  { name: "dusk", label: "Zmierzch", subtitle: "fiolet · róż" },
  { name: "seafoam", label: "Morska piana", subtitle: "turkus · błękit" },
  { name: "ember", label: "Żar", subtitle: "bursztyn · koral" },
  { name: "arctic", label: "Arktyka", subtitle: "niebo · indygo" },
  { name: "bloom", label: "Rozkwit", subtitle: "róż · brzoskwinia" },
  { name: "meadow", label: "Łąka", subtitle: "limonka · szmaragd" },
  { name: "nova", label: "Nova", subtitle: "fiolet · fuksja" },
  { name: "sahara", label: "Sahara", subtitle: "terakota · bursztyn" },
  { name: "abyss", label: "Otchłań", subtitle: "turkus · cyjan" },
  { name: "indigo", label: "Indygo", subtitle: "indygo · błękit" },
  { name: "citrus", label: "Cytrus", subtitle: "limonka · żółty" },
  { name: "sunset", label: "Zachód", subtitle: "koral · pomarańcz" },
  { name: "forest", label: "Las", subtitle: "zieleń · szmaragd" },
  { name: "aurora", label: "Aurora", subtitle: "fuksja · cyjan" },
  { name: "galaxy", label: "Galaktyka", subtitle: "indygo · fiolet" },
  { name: "deep", label: "Głębia", subtitle: "cyjan · błękit" },
  { name: "lavender", label: "Lawenda", subtitle: "fiolet · fuksja" },
];

function SolidSwatch({
  theme,
  isActive,
  onPress,
}: {
  theme: (typeof SOLID_THEMES)[number];
  isActive: boolean;
  onPress: () => void;
}) {
  const themeColors = colors[theme.name];
  return (
    <TouchableOpacity
      key={theme.name}
      onPress={onPress}
      className={cn(
        "flex flex-col items-center gap-2 p-3 rounded-2xl border-2",
        isActive
          ? "border-primary bg-primary/5"
          : "border-foreground/10 bg-background-secondary",
      )}
      style={{ minWidth: 80 }}
    >
      <View
        className="w-10 h-10 rounded-full border-2 border-white/80"
        style={{ backgroundColor: themeColors.primary }}
      />
      <View className="flex flex-row items-center justify-center gap-1">
        {themeColors.dark ? (
          <MoonStar size={16} color={themeColors.primary} />
        ) : null}
        <Text
          className={cn(
            "text-xs font-pmedium text-center",
            isActive ? "text-primary" : "text-foreground",
          )}
        >
          {theme.label}
        </Text>
      </View>
      {isActive && <View className="w-1.5 h-1.5 rounded-full bg-primary" />}
    </TouchableOpacity>
  );
}

function MixedSwatch({
  theme,
  isActive,
  onPress,
}: {
  theme: (typeof MIXED_THEMES)[number];
  isActive: boolean;
  onPress: () => void;
}) {
  const themeColors = colors[theme.name];
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        "flex flex-col gap-2 p-3 rounded-2xl border-2 flex-1",
        isActive
          ? "border-primary bg-primary/5"
          : "border-foreground/10 bg-background-secondary",
      )}
      style={{ minWidth: 100 }}
    >
      {/* Dual-color pill */}
      <View className="flex flex-row h-8 rounded-xl overflow-hidden">
        <View
          className="flex-1"
          style={{ backgroundColor: themeColors.primary }}
        />
        <View
          className="flex-1"
          style={{ backgroundColor: themeColors.secondary }}
        />
      </View>

      <View className="flex flex-col gap-0.5">
        <View className="flex flex-row items-start justify-start gap-1">
          {themeColors.dark ? (
            <MoonStar size={16} color={themeColors.primary} />
          ) : null}
          <Text
            className={cn(
              "text-sm font-psemibold",
              isActive ? "text-primary" : "text-foreground",
            )}
          >
            {theme.label}
          </Text>
        </View>

        <Text className="text-foreground-secondary text-xs font-pregular">
          {theme.subtitle}
        </Text>
      </View>

      {isActive && <View className="w-1.5 h-1.5 rounded-full bg-primary" />}
    </TouchableOpacity>
  );
}

export default function ThemeSwitcher() {
  const { theme: currentTheme, setTheme } = useThemeContext();

  const allThemes = [...SOLID_THEMES, ...MIXED_THEMES];
  const currentLabel = allThemes.find((t) => t.name === currentTheme)?.label;
  const isMixed = MIXED_THEMES.some((t) => t.name === currentTheme);

  return (
    <View className="w-full flex flex-col gap-5">
      <Text className="text-foreground font-psemibold text-lg">
        Wybierz motyw
      </Text>

      {/* Solid themes */}
      <View className="flex flex-col gap-2">
        <Text className="text-foreground-secondary font-pmedium text-xs uppercase tracking-widest">
          Jednolite
        </Text>
        <View className="flex flex-row flex-wrap gap-2">
          {SOLID_THEMES.map((theme) => (
            <SolidSwatch
              key={theme.name}
              theme={theme}
              isActive={currentTheme === theme.name}
              onPress={() => setTheme(theme.name)}
            />
          ))}
        </View>
      </View>

      {/* Divider */}
      <Divider />

      {/* Mixed themes */}
      <View className="flex flex-col gap-2">
        <Text className="text-foreground-secondary font-pmedium text-xs uppercase tracking-widest">
          Mieszane
        </Text>
        <View className="flex flex-row flex-wrap gap-2">
          {MIXED_THEMES.map((theme) => (
            <MixedSwatch
              key={theme.name}
              theme={theme}
              isActive={currentTheme === theme.name}
              onPress={() => setTheme(theme.name)}
            />
          ))}
        </View>
      </View>

      {/* Active theme summary */}
      <View className="flex flex-row items-center gap-3 p-4 bg-background-secondary rounded-2xl">
        {isMixed ? (
          <View className="flex flex-row w-6 h-6 rounded-full overflow-hidden border border-white/80">
            <View
              className="flex-1"
              style={{ backgroundColor: colors[currentTheme].primary }}
            />
            <View
              className="flex-1"
              style={{ backgroundColor: colors[currentTheme].secondary }}
            />
          </View>
        ) : (
          <View
            className="w-6 h-6 rounded-full border border-white/80"
            style={{ backgroundColor: colors[currentTheme].primary }}
          />
        )}
        <Text className="text-foreground font-pmedium">
          Aktualny motyw:{" "}
          <Text className="text-primary font-psemibold">{currentLabel}</Text>
        </Text>
      </View>
    </View>
  );
}
