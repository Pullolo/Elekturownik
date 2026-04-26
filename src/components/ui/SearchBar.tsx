import useColors from "@/src/hooks/useColors";
import { cn } from "@/src/lib/utils";
import { Search, X } from "lucide-react-native";
import { TextInput, TouchableOpacity, View } from "react-native";

export default function SearchBar({
  query,
  placeholder,
  onQueryChange,
}: {
  query: string;
  placeholder: string;
  onQueryChange: (v: string) => void;
}) {
  const colors = useColors();

  return (
    <View
      className={cn(
        "flex-row items-center rounded-3xl px-4 py-2 gap-2",
        colors.dark ? "bg-gray-900" : "bg-gray-100",
      )}
    >
      <Search size={24} color={"#bfbfbf"} />
      <TextInput
        className={cn(
          "flex-1 text-base",
          colors.dark ? "text-white" : "text-gray-900",
        )}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        value={query}
        onChangeText={onQueryChange}
        returnKeyType="search"
        clearButtonMode="while-editing"
      />
      {query && query.length > 0 && (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onQueryChange("")}>
          <X size={24} color={"#bfbfbf"} />
        </TouchableOpacity>
      )}
    </View>
  );
}
