import { create } from "zustand";

interface LangState {
  isRTL: boolean;
  setLanguage: (lang: string) => void;
}

export const useLangStore = create<LangState>((set) => ({
  isRTL: false,
  setLanguage: (lang) => set({ isRTL: lang === "fa" }),
}));
