import { create } from "zustand";
import { checkRtl } from "@/lib/utils/lang";

interface LangState {
  isRTL: boolean;
  lang: string;
  setLanguage: (lang: string) => void;
}

export const useLangStore = create<LangState>((set) => ({
  isRTL: false,
  lang: "",
  setLanguage: (lang) => set({ lang, isRTL: checkRtl(lang) }),
}));
