import useColors from "./useColors";

export type Variant = "primary" | "dark" | "secondary";

export const useVariantClasses = () => {
  const color = useColors();
  const badgeText = color.dark ? "text-black" : "text-white";

  return {
    primary: {
      text: "text-primary",
      textMuted: "text-primary/50",
      bg: "bg-primary/10",
      dot: "bg-primary",
      dotMuted: "bg-primary/20",
      badge: "bg-primary",
      badgeText,
      track: "bg-primary/15",
      fill: "bg-primary",
    },
    dark: {
      text: "text-foreground-primary",
      textMuted: "text-foreground-primary/50",
      bg: "bg-foreground-primary/10",
      dot: "bg-foreground-primary",
      dotMuted: "bg-foreground-primary/20",
      badge: "bg-foreground-primary",
      badgeText,
      track: "bg-foreground-primary/15",
      fill: "bg-foreground-primary",
    },
    secondary: {
      text: "text-secondary",
      textMuted: "text-secondary/50",
      bg: "bg-secondary/30",
      dot: "bg-secondary",
      dotMuted: "bg-secondary/30",
      badge: "bg-secondary",
      badgeText: "text-foreground",
      track: "bg-secondary/40",
      fill: "bg-secondary",
    },
  } satisfies Record<
    Variant,
    {
      text: string;
      textMuted: string;
      bg: string;
      dot: string;
      dotMuted: string;
      badge: string;
      badgeText: string;
      track: string;
      fill: string;
    }
  >;
};
