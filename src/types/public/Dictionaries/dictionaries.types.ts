import { homeSectionDictTypes } from "@/types/landing/landing.types";
import { headerSectionDictType } from "@/types/header/header.type";

export type reagonTypes = "fa" | "en";

export interface Dictionaries {
  en: {
    header: () => Promise<headerSectionDictType>;
    home: () => Promise<homeSectionDictTypes>;
  };
  fa: {
    header: () => Promise<headerSectionDictType>;
    home: () => Promise<homeSectionDictTypes>;
  };
}
