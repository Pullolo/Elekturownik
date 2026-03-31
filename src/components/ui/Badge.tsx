import { cn } from "@/src/lib/utils";
import { LucideProps } from "lucide-react-native";
import { Text, View } from "react-native";

export default function Badge({
  text,
  theme,
  LIcon,
}: {
  text: string;
  theme?: "white" | "primary";
  LIcon?: React.FC<LucideProps>;
}) {
  return (
    <View
      className={cn(
        "flex flex-row items-center justify-center gap-1 px-4 py-2 rounded-full",
        theme === "primary" ? "bg-primary/25" : "bg-white/25",
      )}
    >
      {LIcon ? (
        <LIcon size={12} color={theme === "primary" ? "#EE3F86" : "#fff"} />
      ) : null}
      <Text
        className={cn(
          "text-xs font-psemibold w-fit",
          theme === "primary" ? "text-primary" : "text-white",
        )}
      >
        {text}
      </Text>
    </View>
  );
}
