import { create } from "zustand";

interface HeaderState {
  importantColor: "primary" | "white" | null;
  reset: () => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  importantColor: null,
  reset: () => set({ importantColor: null }),
}));
