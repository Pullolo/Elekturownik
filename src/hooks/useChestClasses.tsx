import { ChestVariant } from "../components/lootboxes/Lootbox";
import { chestColors } from "../constants/chestColors";

export function useChestClasses(variant: ChestVariant) {
  return chestColors[variant];
}
