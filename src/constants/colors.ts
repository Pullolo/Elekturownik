export type ThemeName =
  | "pink"
  | "green"
  | "blue"
  | "purple"
  | "red"
  | "orange"
  | "yellow"
  | "gray"
  | "dusk"
  | "seafoam"
  | "ember"
  | "arctic"
  | "bloom"
  | "meadow"
  | "nova"
  | "sahara"
  | "abyss"
  | "indigo"
  | "citrus"
  | "sunset"
  | "forest"
  | "aurora";

export interface Colors {
  pink: ColorScheme;
  green: ColorScheme;
  blue: ColorScheme;
  purple: ColorScheme;
  red: ColorScheme;
  orange: ColorScheme;
  yellow: ColorScheme;
  gray: ColorScheme;
  dusk: ColorScheme;
  seafoam: ColorScheme;
  ember: ColorScheme;
  arctic: ColorScheme;
  bloom: ColorScheme;
  meadow: ColorScheme;
  nova: ColorScheme;
  sahara: ColorScheme;
  abyss: ColorScheme;
  indigo: ColorScheme;
  citrus: ColorScheme;
  sunset: ColorScheme;
  forest: ColorScheme;
  aurora: ColorScheme;
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
    secondary: "#e8799f",
    foreground: "#444441",
    foregroundSecondary: "#888780",
    foregroundPrimary: "#9d174d",
    background: "#FBEAF0",
    backgroundSecondary: "#FFFFFF",
  },
  green: {
    primary: "#22c55e",
    secondary: "#4ade80",
    foreground: "#166534",
    foregroundSecondary: "#16a34a",
    foregroundPrimary: "#15803d",
    background: "#f0fdf4",
    backgroundSecondary: "#FFFFFF",
  },
  blue: {
    primary: "#3b82f6",
    secondary: "#60a5fa",
    foreground: "#1e3a5f",
    foregroundSecondary: "#60a5fa",
    foregroundPrimary: "#1d4ed8",
    background: "#eff6ff",
    backgroundSecondary: "#FFFFFF",
  },
  purple: {
    primary: "#a855f7",
    secondary: "#c084fc",
    foreground: "#3b0764",
    foregroundSecondary: "#c084fc",
    foregroundPrimary: "#7e22ce",
    background: "#faf5ff",
    backgroundSecondary: "#FFFFFF",
  },
  red: {
    primary: "#ef4444",
    secondary: "#f87171",
    foreground: "#450a0a",
    foregroundSecondary: "#f87171",
    foregroundPrimary: "#b91c1c",
    background: "#fef2f2",
    backgroundSecondary: "#FFFFFF",
  },
  orange: {
    primary: "#f97316",
    secondary: "#fb923c",
    foreground: "#431407",
    foregroundSecondary: "#9a3412",
    foregroundPrimary: "#c2410c",
    background: "#fff7ed",
    backgroundSecondary: "#FFFFFF",
  },
  yellow: {
    primary: "#eab308",
    secondary: "#facc15",
    foreground: "#422006",
    foregroundSecondary: "#facc15",
    foregroundPrimary: "#a16207",
    background: "#fefce8",
    backgroundSecondary: "#FFFFFF",
  },
  gray: {
    primary: "#6b7280",
    secondary: "#9ca3af",
    foreground: "#111827",
    foregroundSecondary: "#9ca3af",
    foregroundPrimary: "#374151",
    background: "#f9fafb",
    backgroundSecondary: "#FFFFFF",
  },
  dusk: {
    primary: "#7c3aed",
    secondary: "#f43f5e",
    foreground: "#0d0a1e",
    foregroundSecondary: "#4c3d7a",
    foregroundPrimary: "#6d28d9",
    background: "#fafafa",
    backgroundSecondary: "#f5f3ff",
  },
  seafoam: {
    primary: "#0d9488",
    secondary: "#0ea5e9",
    foreground: "#030f0e",
    foregroundSecondary: "#2d6b65",
    foregroundPrimary: "#0f766e",
    background: "#f8fffe",
    backgroundSecondary: "#f0fdfa",
  },
  ember: {
    primary: "#d97706",
    secondary: "#ef4444",
    foreground: "#0f0700",
    foregroundSecondary: "#5a3a1a",
    foregroundPrimary: "#b45309",
    background: "#fafaf8",
    backgroundSecondary: "#fef9ee",
  },
  arctic: {
    primary: "#0284c7",
    secondary: "#6366f1",
    foreground: "#030c18",
    foregroundSecondary: "#2d4e6b",
    foregroundPrimary: "#0369a1",
    background: "#f8fbff",
    backgroundSecondary: "#f0f7ff",
  },
  bloom: {
    primary: "#db2777",
    secondary: "#f97316",
    foreground: "#0f0209",
    foregroundSecondary: "#5a2040",
    foregroundPrimary: "#be185d",
    background: "#fffafe",
    backgroundSecondary: "#fdf2f8",
  },
  meadow: {
    primary: "#65a30d",
    secondary: "#14b8a6",
    foreground: "#050f00",
    foregroundSecondary: "#354d1a",
    foregroundPrimary: "#4d7c0f",
    background: "#f9fff5",
    backgroundSecondary: "#f3fde8",
  },
  nova: {
    primary: "#7c3aed",
    secondary: "#d946ef",
    foreground: "#1e0a3c",
    foregroundSecondary: "#9333ea",
    foregroundPrimary: "#6d28d9",
    background: "#fdf8ff",
    backgroundSecondary: "#f5f0ff",
  },
  sahara: {
    primary: "#c2410c",
    secondary: "#f59e0b",
    foreground: "#1c0a00",
    foregroundSecondary: "#92400e",
    foregroundPrimary: "#9a3412",
    background: "#fff8f3",
    backgroundSecondary: "#fef3e8",
  },
  abyss: {
    primary: "#0d9488",
    secondary: "#06b6d4",
    foreground: "#022926",
    foregroundSecondary: "#0f766e",
    foregroundPrimary: "#0f766e",
    background: "#f0fdf8",
    backgroundSecondary: "#e6fdf9",
  },
  indigo: {
    primary: "#4f46e5",
    secondary: "#2563eb",
    foreground: "#1e1b4b",
    foregroundSecondary: "#4338ca",
    foregroundPrimary: "#3730a3",
    background: "#f5f3ff",
    backgroundSecondary: "#eef2ff",
  },
  citrus: {
    primary: "#84cc16",
    secondary: "#eab308",
    foreground: "#1a2e05",
    foregroundSecondary: "#4d7c0f",
    foregroundPrimary: "#65a30d",
    background: "#fefce8",
    backgroundSecondary: "#f7fee7",
  },
  sunset: {
    primary: "#e11d48",
    secondary: "#f97316",
    foreground: "#1f0008",
    foregroundSecondary: "#9f1239",
    foregroundPrimary: "#be123c",
    background: "#fff1f2",
    backgroundSecondary: "#ffe4e6",
  },
  forest: {
    primary: "#16a34a",
    secondary: "#10b981",
    foreground: "#052e16",
    foregroundSecondary: "#15803d",
    foregroundPrimary: "#166534",
    background: "#f0fdf4",
    backgroundSecondary: "#ecfdf5",
  },
  aurora: {
    primary: "#db2777",
    secondary: "#06b6d4",
    foreground: "#1a0010",
    foregroundSecondary: "#9d174d",
    foregroundPrimary: "#be185d",
    background: "#fff5f7",
    backgroundSecondary: "#fce7f3",
  },
} satisfies Colors;

export default colors;
