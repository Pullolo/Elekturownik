import useColors from "@/src/hooks/useColors";
import { BlurView } from "expo-blur";
import { ChevronUp } from "lucide-react-native";
import { RefObject } from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";

export default function ScrollToTopButton({ listRef }: { listRef: RefObject<FlatList<any> | ScrollView | null> }) {
    const colors = useColors()
    return (
        <TouchableOpacity
            onPress={() => {
                // flatlist
                if (listRef.current && "scrollToOffset" in listRef.current)
                    listRef.current.scrollToOffset({ offset: 0, animated: true });

                if (listRef.current && "scrollTo" in listRef.current)
                    listRef.current.scrollTo({ y: 0, animated: true })
            }}
            activeOpacity={0.8}
            className=""
        >
            <View className="bg-primary/10 rounded-full overflow-hidden">
                <BlurView className="w-full justify-center items-center rounded-full shadow-lg"
                    experimentalBlurMethod="dimezisBlurView"
                    intensity={60}
                    tint={colors.dark ? "systemChromeMaterialDark" : "systemChromeMaterialLight"}
                >
                    <ChevronUp color={colors.primary} />
                </BlurView>
            </View>
        </TouchableOpacity>
    )
}