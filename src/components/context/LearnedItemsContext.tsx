// src/hooks/LearnedItemsContext.tsx
import { useLearnedItems } from "@/src/hooks/useLearnedItems";
import { createContext, ReactNode, useContext } from "react";

const LearnedItemsContext = createContext<ReturnType<
  typeof useLearnedItems
> | null>(null);

export function LearnedItemsProvider({ children }: { children: ReactNode }) {
  const value = useLearnedItems();
  return (
    <LearnedItemsContext.Provider value={value}>
      {children}
    </LearnedItemsContext.Provider>
  );
}

export function useLearnedItemsContext() {
  const ctx = useContext(LearnedItemsContext);
  if (!ctx)
    throw new Error(
      "useLearnedItemsContext must be used within LearnedItemsProvider",
    );
  return ctx;
}
