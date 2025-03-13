import { create } from "zustand";
import { checkRtl } from "@/lib/utils/lang";

interface LangState {
  isRTL: boolean;
  setLanguage: (lang: string) => void;
}

export const useLangStore = create<LangState>((set) => ({
  isRTL: false,
  setLanguage: (lang) => set({ isRTL: checkRtl(lang) }),
}));
