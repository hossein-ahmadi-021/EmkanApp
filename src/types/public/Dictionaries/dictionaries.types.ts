export type reagonTypes = "fa" | "en";

export interface Dictionaries {
  en: {
    header: () => Promise<any>;
    home: () => Promise<any>;
  };
  fa: {
    header: () => Promise<any>;
    home: () => Promise<any>;
  };
}
