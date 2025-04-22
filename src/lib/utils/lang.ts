import { rtlLanguages } from "@/lib/constants/public";

const checkRtl = (lang: string) => {
  return rtlLanguages.includes(lang);
};

export { checkRtl };
