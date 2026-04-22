import { openChest, RARITY_CONFIG, Reward } from "@/src/data/rewardmanager";
import { useChestClasses } from "@/src/hooks/useChestClasses";
import { cn } from "@/src/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export type ChestVariant = "common" | "gold" | "prismatic";

interface LootBoxProps {
  amount?: number;
  variant?: ChestVariant;
  onRewardRevealed?: (reward: Reward) => void;
  setCanSwitchVariant: (canSwitch: boolean) => void;
}

type Phase = "idle" | "shaking" | "opening" | "done";

// ─── Particle ─────────────────────────────────────────────────────────────────

const PARTICLE_COUNT = 10;

function Particle({ color, index }: { color: string; index: number }) {
  const angle = (index / PARTICLE_COUNT) * Math.PI * 2;
  const distance = 48 + (index % 3) * 14;
  const tx = Math.cos(angle) * distance;
  const ty = Math.sin(angle) * distance;

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);

  useEffect(() => {
    translateX.value = withTiming(tx, {
      duration: 500,
      easing: Easing.out(Easing.cubic),
    });
    translateY.value = withTiming(ty, {
      duration: 500,
      easing: Easing.out(Easing.cubic),
    });
    opacity.value = withSequence(
      withTiming(1, { duration: 50 }),
      withDelay(200, withTiming(0, { duration: 300 })),
    );
    scale.value = withSequence(
      withTiming(1.3, { duration: 150 }),
      withTiming(0.4, { duration: 350 }),
    );
  }, [opacity, translateX, translateY, scale, tx, ty]);

  const style = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }));

  const size = index % 2 === 0 ? 5 : 3;

  return (
    <Animated.View
      className="absolute rounded-full"
      style={[{ width: size, height: size, backgroundColor: color }, style]}
    />
  );
}

// ─── LootBox ──────────────────────────────────────────────────────────────────

export default function LootBox({
  amount,
  variant = "common",
  onRewardRevealed,
  setCanSwitchVariant,
}: LootBoxProps) {
  const classes = useChestClasses(variant);
  const phaseRef = useRef<Phase>("idle");
  const pendingReward = useRef<Reward | null>(null);

  const [showParticles, setShowParticles] = useState(false);
  const [particleColor, setParticleColor] = useState("#ffffff");

  const shakeX = useSharedValue(0);
  const lidY = useSharedValue(0);
  const lidX = useSharedValue(0);
  const lidRotate = useSharedValue(0);
  const lidOpacity = useSharedValue(1);
  const glowOpacity = useSharedValue(0);
  const glowScale = useSharedValue(0.8);

  function triggerOpen(amount: number | undefined) {
    if (amount === undefined || amount < 1) return;
    setCanSwitchVariant(false);
    if (phaseRef.current !== "idle") return;
    phaseRef.current = "shaking";

    // Roll reward upfront so we know the color before animating
    const reward = openChest(variant);
    pendingReward.current = reward;
    const color = RARITY_CONFIG[reward.rarity].color;

    shakeX.value = withSequence(
      withTiming(-6, { duration: 50 }),
      withTiming(6, { duration: 80 }),
      withTiming(-6, { duration: 80 }),
      withTiming(6, { duration: 80 }),
      withTiming(-6, { duration: 80 }),
      withTiming(0, { duration: 50 }),
    );

    setTimeout(() => {
      phaseRef.current = "opening";

      // Lid flies off
      lidY.value = withTiming(-110, {
        duration: 450,
        easing: Easing.out(Easing.cubic),
      });
      lidX.value = withTiming(30, {
        duration: 450,
        easing: Easing.out(Easing.cubic),
      });
      lidRotate.value = withTiming(25, {
        duration: 450,
        easing: Easing.out(Easing.cubic),
      });
      lidOpacity.value = withDelay(250, withTiming(0, { duration: 200 }));

      // Subtle glow fades in then out
      glowOpacity.value = withSequence(
        withTiming(0.55, { duration: 250 }),
        withDelay(150, withTiming(0, { duration: 350 })),
      );
      glowScale.value = withTiming(1.3, {
        duration: 550,
        easing: Easing.out(Easing.cubic),
      });

      // Particles burst
      setParticleColor(color);
      setShowParticles(true);
      setTimeout(() => setShowParticles(false), 600);

      setTimeout(() => {
        phaseRef.current = "done";
        onRewardRevealed?.(pendingReward.current!);
      }, 520);
    }, 450);
  }

  const chestStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeX.value }],
  }));

  const lidStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: lidY.value },
      { translateX: lidX.value },
      { rotate: `${lidRotate.value}deg` },
    ],
    opacity: lidOpacity.value,
  }));

  const glowStyle = useAnimatedStyle(() => ({
    opacity: glowOpacity.value,
    transform: [{ scale: glowScale.value }],
  }));

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => triggerOpen(amount)}
      className="w-36 h-32"
    >
      <Animated.View
        className="w-36 h-32 items-center justify-center"
        style={chestStyle}
      >
        {amount !== undefined && (
          <View className="absolute -top-8 -right-12 z-10 flex-row gap-1 rounded-full bg-primary/25 px-3 py-1">
            <Text className="text-primary font-psemibold text-base">{`x${amount}`}</Text>
          </View>
        )}

        {/* Glow behind chest */}
        <Animated.View
          className="absolute self-center rounded-full"
          style={[
            {
              width: 120,
              height: 100,
              backgroundColor: particleColor,
              // soften into a glow shape
              shadowColor: particleColor,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 1,
              shadowRadius: 30,
              elevation: 0,
            },
            glowStyle,
          ]}
        />

        {/* Particles — centered on chest */}
        {showParticles && (
          <View
            className="absolute inset-0 items-center justify-center"
            pointerEvents="none"
          >
            {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
              <Particle key={i} color={particleColor} index={i} />
            ))}
          </View>
        )}

        <View className="w-full h-full items-center justify-center">
          {/* Lid */}
          <Animated.View className="w-full z-10" style={lidStyle}>
            <View
              className={cn(
                "w-full h-14 rounded-2xl border-4 overflow-hidden relative",
                classes.topLid,
                classes.topBorder,
              )}
            >
              <View
                className={cn(
                  "absolute self-center h-full w-5",
                  classes.topStripe,
                )}
              />
              <View className="absolute top-2 left-2 right-2 h-4 rounded-xl bg-white/20" />
              <View
                className={cn(
                  "absolute top-1/2 left-0 right-0 h-2",
                  classes.topBand,
                )}
              />
            </View>
          </Animated.View>

          {/* Bottom */}
          <View
            className={cn(
              "w-full -mt-2 rounded-2xl border-4 overflow-hidden relative",
              classes.bottomChest,
              classes.bottomBorder,
            )}
            style={{ height: "58%" }}
          >
            <View
              className={cn(
                "absolute self-center h-full w-6",
                classes.bottomStripe,
              )}
            />
            <View
              className={cn(
                "absolute top-1/2 left-0 right-0 h-2",
                classes.bottomBand,
              )}
            />
            <View
              className={cn(
                "absolute top-0 self-center translate-y-2 w-12 h-12 rounded-xl items-center justify-center",
                classes.lockBg,
              )}
            >
              <View
                className={cn(
                  "absolute top-2 w-5 h-5 rounded-full border-[4px]",
                  classes.lockAccent.split(" ")[0],
                )}
              />
              <View
                className={cn(
                  "absolute bottom-2 w-4 h-4 rounded-md",
                  classes.lockAccent.split(" ")[1],
                )}
              />
            </View>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

// ─── Reward Result Card ───────────────────────────────────────────────────────

interface RewardCardProps {
  reward: Reward;
  onClose: () => void;
}

export function RewardResultCard({ reward, onClose }: RewardCardProps) {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 350 });
  }, [opacity]);

  const containerStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const config = RARITY_CONFIG[reward.rarity];

  return (
    <Animated.View className="w-full" style={containerStyle}>
      <View
        className="items-center p-6 gap-4 rounded-3xl"
        style={{
          borderWidth: 1.5,
          borderColor: config.color + "50",
          backgroundColor: config.glowColor,
        }}
      >
        <Text
          className="text-xs font-psemibold tracking-widest uppercase"
          style={{ color: config.color }}
        >
          Nagroda
        </Text>

        {reward.type === "emoji" && (
          <>
            <View
              className="items-center justify-center size-24 rounded-full"
              style={{
                backgroundColor: config.color + "22",
                borderWidth: 1.5,
                borderColor: config.color + "55",
              }}
            >
              <Text className="text-5xl text-center leading-loose p-px">
                {reward.value}
              </Text>
            </View>
            <RarityBadge rarity={reward.rarity} label={reward.label} />
          </>
        )}

        {reward.type === "welcome_text" && (
          <>
            <Text className="text-foreground/50 text-base font-pmediumitalic text-center">
              {`"${reward.value}"`}
            </Text>
            <RarityBadge rarity={reward.rarity} label={reward.label} />
          </>
        )}

        <TouchableOpacity
          activeOpacity={0.75}
          onPress={onClose}
          className="w-full items-center rounded-2xl py-3 px-8 mt-1"
          style={{
            backgroundColor: config.color + "20",
            borderWidth: 1,
            borderColor: config.color + "55",
          }}
        >
          <Text className="font-pbold text-sm" style={{ color: config.color }}>
            Odbierz
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

function RarityBadge({ rarity, label }: { rarity: string; label: string }) {
  const config = RARITY_CONFIG[rarity as keyof typeof RARITY_CONFIG];
  return (
    <View
      className="flex-row items-center gap-1 rounded-full px-3 py-1"
      style={{
        backgroundColor: config.color + "20",
        borderWidth: 1,
        borderColor: config.color + "50",
      }}
    >
      <View
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: config.color }}
      />
      <Text
        className="text-xs font-psemibold uppercase tracking-widest"
        style={{ color: config.color }}
      >
        {config.label} · {label}
      </Text>
    </View>
  );
}
