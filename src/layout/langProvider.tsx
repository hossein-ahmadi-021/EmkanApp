"use client";
import React, { ReactNode } from "react";
import { useLangStore } from "@/store/langStore";

interface LangProviderProps {
  children: ReactNode;
  lang: string;
}

export const LangProvider: React.FC<LangProviderProps> = ({
  children,
  lang,
}) => {
  const setLanguage = useLangStore((state) => state.setLanguage);

  React.useEffect(() => {
    setLanguage(lang);
  }, [lang, setLanguage]);

  return <>{children}</>;
};
