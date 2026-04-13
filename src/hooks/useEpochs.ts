import { epochs } from "../data/epochs";

export const useEpochs = () => {
  return {
    epochs,
  };
};

export const useEpoch = (id: number) => {
  return epochs.find((q) => q.id === id);
};
