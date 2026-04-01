export interface Colors {
  pink: ColorScheme;
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
} satisfies Colors;

export default colors;
