export type ThemeName =
  | "pink"
  | "green"
  | "blue"
  | "purple"
  | "red"
  | "orange"
  | "yellow"
  | "gray";

export interface Colors {
  pink: ColorScheme;
  green: ColorScheme;
  blue: ColorScheme;
  purple: ColorScheme;
  red: ColorScheme;
  orange: ColorScheme;
  yellow: ColorScheme;
  gray: ColorScheme;
}

export interface ColorScheme {
  primary: string;
  secondary: string;
  foreground: string;
  foregroundSecondary: string;
  foregroundPrimary: string;
  background: string;
  backgroundSecondary: string;
}

const colors = {
  pink: {
    primary: "#ee3f86",
    secondary: "#F4C0D1",
    foreground: "#444441",
    foregroundSecondary: "#888780",
    foregroundPrimary: "#9d174d",
    background: "#FBEAF0",
    backgroundSecondary: "#F1EFE8",
  },
  green: {
    primary: "#22c55e",
    secondary: "#bbf7d0",
    foreground: "#166534",
    foregroundSecondary: "#16a34a",
    foregroundPrimary: "#15803d",
    background: "#f0fdf4",
    backgroundSecondary: "#dcfce7",
  },
  blue: {
    primary: "#3b82f6",
    secondary: "#bfdbfe",
    foreground: "#1e3a5f",
    foregroundSecondary: "#60a5fa",
    foregroundPrimary: "#1d4ed8",
    background: "#eff6ff",
    backgroundSecondary: "#dbeafe",
  },
  purple: {
    primary: "#a855f7",
    secondary: "#e9d5ff",
    foreground: "#3b0764",
    foregroundSecondary: "#c084fc",
    foregroundPrimary: "#7e22ce",
    background: "#faf5ff",
    backgroundSecondary: "#f3e8ff",
  },
  red: {
    primary: "#ef4444",
    secondary: "#fecaca",
    foreground: "#450a0a",
    foregroundSecondary: "#f87171",
    foregroundPrimary: "#b91c1c",
    background: "#fef2f2",
    backgroundSecondary: "#fee2e2",
  },
  orange: {
    primary: "#f97316",
    secondary: "#fed7aa",
    foreground: "#431407",
    foregroundSecondary: "#9a3412",
    foregroundPrimary: "#c2410c",
    background: "#fff7ed",
    backgroundSecondary: "#ffedd5",
  },
  yellow: {
    primary: "#eab308",
    secondary: "#fef08a",
    foreground: "#422006",
    foregroundSecondary: "#facc15",
    foregroundPrimary: "#a16207",
    background: "#fefce8",
    backgroundSecondary: "#fef9c3",
  },
  gray: {
    primary: "#6b7280",
    secondary: "#d1d5db",
    foreground: "#111827",
    foregroundSecondary: "#9ca3af",
    foregroundPrimary: "#374151",
    background: "#f9fafb",
    backgroundSecondary: "#f3f4f6",
  },
} satisfies Colors;

export default colors;
