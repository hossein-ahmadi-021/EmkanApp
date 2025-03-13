export type reagonTypes = "fa" | "en";

export interface Dictionaries {
  en: {
    home: () => Promise<any>;
  };
  fa: {
    home: () => Promise<any>;
  };
}
