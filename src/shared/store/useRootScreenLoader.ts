import { create } from "zustand";

interface ILoadState {
  isOpen: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

export const useRootFullScreenLoaderStore = create<ILoadState>()((set) => ({
  isOpen: false,
  showLoader: () => {
    set({ isOpen: true });
  },
  hideLoader: () => {
    set({ isOpen: false });
  },
}));
