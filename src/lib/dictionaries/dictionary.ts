import "server-only";
import { Dictionaries } from "@/types/public/Dictionaries/dictionaries.types";

const dictionaries: Dictionaries = {
  en: {
    home: () => import("./en/home.json").then((module) => module.default),
  },
  fa: {
    home: () => import("./fa/home.json").then((module) => module.default),
  },
};

export const getDictionary = async (
  locale: keyof Dictionaries,
  section: keyof Dictionaries["en"],
) => {
  if (dictionaries[locale] && dictionaries[locale][section]) {
    return dictionaries[locale][section]();
  }
  throw new Error("Section not found");
};
