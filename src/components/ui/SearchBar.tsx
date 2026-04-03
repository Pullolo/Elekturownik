import { Search } from "lucide-react-native";
import { TextInput, View } from "react-native";

export default function SearchBar({
  query,
  placeholder,
  onQueryChange,
}: {
  query: string;
  placeholder: string;
  onQueryChange: (v: string) => void;
}) {
  return (
    <View className="flex-row items-center bg-gray-100 rounded-3xl px-4 py-2 gap-2">
      <Search size={24} color={"#bfbfbf"} />
      <TextInput
        className="flex-1 text-base text-gray-900"
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        value={query}
        onChangeText={onQueryChange}
        returnKeyType="search"
        clearButtonMode="while-editing"
      />
    </View>
  );
}
