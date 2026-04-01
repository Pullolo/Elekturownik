// TabBarContext.tsx
import { createContext, useContext, useState } from "react";

const TabBarContext = createContext({
  tabBarHeight: 0,
  setTabBarHeight: (_: number) => {},
});

export const TabBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [tabBarHeight, setTabBarHeight] = useState(0);
  return (
    <TabBarContext.Provider value={{ tabBarHeight, setTabBarHeight }}>
      {children}
    </TabBarContext.Provider>
  );
};

export const useTabBar = () => useContext(TabBarContext);
