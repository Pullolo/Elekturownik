import TabBar from "@/src/components/navigation/TabBar";
import { Tabs } from "expo-router";
import { Calendar, Gift, Home, LibraryBig } from "lucide-react-native";
import React from "react";

export default function TabLayout() {
  const iconSize = 32;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <Home size={iconSize} color={color} />,
        }}
      />
      <Tabs.Screen
        name="daily"
        options={{
          tabBarIcon: ({ color }) => <Calendar size={iconSize} color={color} />,
        }}
      />
      <Tabs.Screen
        name="content"
        options={{
          tabBarIcon: ({ color }) => (
            <LibraryBig size={iconSize} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="lootboxes"
        options={{
          tabBarIcon: ({ color }) => <Gift size={iconSize} color={color} />,
        }}
      />
    </Tabs>
  );
}
