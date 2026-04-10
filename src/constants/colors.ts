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
  | "aurora"
  | "midnight"
  | "galaxy"
  | "deep"
  | "lavender"
  | "cognac"
  | "mist"
  | "magma";

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
  midnight: ColorScheme;
  galaxy: ColorScheme;
  deep: ColorScheme;
  lavender: ColorScheme;
  cognac: ColorScheme;
  mist: ColorScheme;
  magma: ColorScheme;
}

export interface ColorScheme {
  primary: string;
  secondary: string;
  foreground: string;
  foregroundSecondary: string;
  foregroundPrimary: string;
  background: string;
  backgroundSecondary: string;
  mixed: boolean;
  dark: boolean;
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
    mixed: false,
    dark: false,
  },
  green: {
    primary: "#22c55e",
    secondary: "#4ade80",
    foreground: "#166534",
    foregroundSecondary: "#16a34a",
    foregroundPrimary: "#15803d",
    background: "#f0fdf4",
    backgroundSecondary: "#FFFFFF",
    mixed: false,
    dark: false,
  },
  blue: {
    primary: "#3b82f6",
    secondary: "#60a5fa",
    foreground: "#1e3a5f",
    foregroundSecondary: "#60a5fa",
    foregroundPrimary: "#1d4ed8",
    background: "#eff6ff",
    backgroundSecondary: "#FFFFFF",
    mixed: false,
    dark: false,
  },
  purple: {
    primary: "#a855f7",
    secondary: "#c084fc",
    foreground: "#3b0764",
    foregroundSecondary: "#c084fc",
    foregroundPrimary: "#7e22ce",
    background: "#faf5ff",
    backgroundSecondary: "#FFFFFF",
    mixed: false,
    dark: false,
  },
  red: {
    primary: "#ef4444",
    secondary: "#f87171",
    foreground: "#450a0a",
    foregroundSecondary: "#f87171",
    foregroundPrimary: "#b91c1c",
    background: "#fef2f2",
    backgroundSecondary: "#FFFFFF",
    mixed: false,
    dark: false,
  },
  orange: {
    primary: "#f97316",
    secondary: "#fb923c",
    foreground: "#431407",
    foregroundSecondary: "#9a3412",
    foregroundPrimary: "#c2410c",
    background: "#fff7ed",
    backgroundSecondary: "#FFFFFF",
    mixed: false,
    dark: false,
  },
  yellow: {
    primary: "#eab308",
    secondary: "#facc15",
    foreground: "#422006",
    foregroundSecondary: "#facc15",
    foregroundPrimary: "#a16207",
    background: "#fefce8",
    backgroundSecondary: "#FFFFFF",
    mixed: false,
    dark: false,
  },
  gray: {
    primary: "#6b7280",
    secondary: "#9ca3af",
    foreground: "#111827",
    foregroundSecondary: "#9ca3af",
    foregroundPrimary: "#374151",
    background: "#f9fafb",
    backgroundSecondary: "#FFFFFF",
    mixed: false,
    dark: false,
  },
  dusk: {
    primary: "#7c3aed",
    secondary: "#f43f5e",
    foreground: "#0d0a1e",
    foregroundSecondary: "#4c3d7a",
    foregroundPrimary: "#6d28d9",
    background: "#fafafa",
    backgroundSecondary: "#f5f3ff",
    mixed: true,
    dark: false,
  },
  seafoam: {
    primary: "#0d9488",
    secondary: "#0ea5e9",
    foreground: "#030f0e",
    foregroundSecondary: "#2d6b65",
    foregroundPrimary: "#0f766e",
    background: "#f8fffe",
    backgroundSecondary: "#f0fdfa",
    mixed: true,
    dark: false,
  },
  ember: {
    primary: "#d97706",
    secondary: "#ef4444",
    foreground: "#0f0700",
    foregroundSecondary: "#5a3a1a",
    foregroundPrimary: "#b45309",
    background: "#fafaf8",
    backgroundSecondary: "#fef9ee",
    mixed: true,
    dark: false,
  },
  arctic: {
    primary: "#0284c7",
    secondary: "#6366f1",
    foreground: "#030c18",
    foregroundSecondary: "#2d4e6b",
    foregroundPrimary: "#0369a1",
    background: "#f8fbff",
    backgroundSecondary: "#f0f7ff",
    mixed: true,
    dark: false,
  },
  bloom: {
    primary: "#db2777",
    secondary: "#f97316",
    foreground: "#0f0209",
    foregroundSecondary: "#5a2040",
    foregroundPrimary: "#be185d",
    background: "#fffafe",
    backgroundSecondary: "#fdf2f8",
    mixed: true,
    dark: false,
  },
  meadow: {
    primary: "#65a30d",
    secondary: "#14b8a6",
    foreground: "#050f00",
    foregroundSecondary: "#354d1a",
    foregroundPrimary: "#4d7c0f",
    background: "#f9fff5",
    backgroundSecondary: "#f3fde8",
    mixed: true,
    dark: false,
  },
  nova: {
    primary: "#7c3aed",
    secondary: "#d946ef",
    foreground: "#1e0a3c",
    foregroundSecondary: "#9333ea",
    foregroundPrimary: "#6d28d9",
    background: "#fdf8ff",
    backgroundSecondary: "#f5f0ff",
    mixed: true,
    dark: false,
  },
  sahara: {
    primary: "#c2410c",
    secondary: "#f59e0b",
    foreground: "#1c0a00",
    foregroundSecondary: "#92400e",
    foregroundPrimary: "#9a3412",
    background: "#fff8f3",
    backgroundSecondary: "#fef3e8",
    mixed: true,
    dark: false,
  },
  abyss: {
    primary: "#0d9488",
    secondary: "#06b6d4",
    foreground: "#022926",
    foregroundSecondary: "#0f766e",
    foregroundPrimary: "#0f766e",
    background: "#f0fdf8",
    backgroundSecondary: "#e6fdf9",
    mixed: true,
    dark: false,
  },
  indigo: {
    primary: "#4f46e5",
    secondary: "#2563eb",
    foreground: "#1e1b4b",
    foregroundSecondary: "#4338ca",
    foregroundPrimary: "#3730a3",
    background: "#f5f3ff",
    backgroundSecondary: "#eef2ff",
    mixed: true,
    dark: false,
  },
  citrus: {
    primary: "#84cc16",
    secondary: "#eab308",
    foreground: "#1a2e05",
    foregroundSecondary: "#4d7c0f",
    foregroundPrimary: "#65a30d",
    background: "#fefce8",
    backgroundSecondary: "#f7fee7",
    mixed: true,
    dark: false,
  },
  sunset: {
    primary: "#e11d48",
    secondary: "#f97316",
    foreground: "#1f0008",
    foregroundSecondary: "#9f1239",
    foregroundPrimary: "#be123c",
    background: "#fff1f2",
    backgroundSecondary: "#ffe4e6",
    mixed: true,
    dark: false,
  },
  forest: {
    primary: "#16a34a",
    secondary: "#10b981",
    foreground: "#052e16",
    foregroundSecondary: "#15803d",
    foregroundPrimary: "#166534",
    background: "#f0fdf4",
    backgroundSecondary: "#ecfdf5",
    mixed: true,
    dark: false,
  },
  aurora: {
    primary: "#db2777",
    secondary: "#06b6d4",
    foreground: "#1a0010",
    foregroundSecondary: "#9d174d",
    foregroundPrimary: "#be185d",
    background: "#fff5f7",
    backgroundSecondary: "#fce7f3",
    mixed: true,
    dark: false,
  },
  midnight: {
    primary: "#949494",
    secondary: "#c7c7c7",
    foreground: "#ededed",
    foregroundSecondary: "#888888",
    foregroundPrimary: "#ffffff",
    background: "#0a0a0f",
    backgroundSecondary: "#111111",
    mixed: false,
    dark: true,
  },
  galaxy: {
    primary: "#7b8ef7",
    secondary: "#a78bfa",
    foreground: "#c8d0f5",
    foregroundSecondary: "#7b8ef7",
    foregroundPrimary: "#a0aef9",
    background: "#0d0f1a",
    backgroundSecondary: "#131728",
    mixed: true,
    dark: true,
  },
  deep: {
    primary: "#06b6d4",
    secondary: "#0891b2",
    foreground: "#b8d4e0",
    foregroundSecondary: "#22d3ee",
    foregroundPrimary: "#67e8f9",
    background: "#0a0f12",
    backgroundSecondary: "#0e1a20",
    mixed: false,
    dark: true,
  },
  lavender: {
    primary: "#c084fc",
    secondary: "#e879f9",
    foreground: "#d4b8f0",
    foregroundSecondary: "#c084fc",
    foregroundPrimary: "#d8b4fe",
    background: "#0f0a1a",
    backgroundSecondary: "#160f24",
    mixed: true,
    dark: true,
  },
  cognac: {
    primary: "#f59e0b",
    secondary: "#fbbf24",
    foreground: "#f0d4b0",
    foregroundSecondary: "#f59e0b",
    foregroundPrimary: "#fcd34d",
    background: "#0f0a08",
    backgroundSecondary: "#1a1108",
    mixed: false,
    dark: true,
  },
  mist: {
    primary: "#10b981",
    secondary: "#34d399",
    foreground: "#a8d4c0",
    foregroundSecondary: "#10b981",
    foregroundPrimary: "#6ee7b7",
    background: "#070d10",
    backgroundSecondary: "#0c1a14",
    mixed: false,
    dark: true,
  },
  magma: {
    primary: "#ef4444",
    secondary: "#f97316",
    foreground: "#f0c4b0",
    foregroundSecondary: "#ef4444",
    foregroundPrimary: "#fca5a5",
    background: "#100a08",
    backgroundSecondary: "#1c0e08",
    mixed: true,
    dark: true,
  },
} satisfies Colors;

export default colors;
