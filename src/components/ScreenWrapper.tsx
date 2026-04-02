import React, { PropsWithChildren } from "react";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import { cn } from "../lib/utils";

const ScreenWrapper = ({
  children,
  className,
}: PropsWithChildren<SafeAreaViewProps>) => {
  return (
    <SafeAreaView
      className={cn(
        "flex w-full flex-col gap-8 px-6 pt-12 pb-1 bg-background min-h-screen flex-1",
        className,
      )}
    >
      {children}
    </SafeAreaView>
  );
};

export default ScreenWrapper;
