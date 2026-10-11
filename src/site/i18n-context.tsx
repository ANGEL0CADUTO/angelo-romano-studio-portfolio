"use client";

import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import { DEFAULT_LANGUAGE, getTranslation, normalizeLanguage, type SupportedLang } from "../i18n";

type SiteI18nContextValue = {
  lang: SupportedLang;
  t: (key: string) => string;
};

const SiteI18nContext = createContext<SiteI18nContextValue | null>(null);

export const SiteI18nProvider = ({
  lang,
  children,
}: {
  lang?: string;
  children: ReactNode;
}) => {
  const locale = normalizeLanguage(lang ?? DEFAULT_LANGUAGE);
  const value = useMemo<SiteI18nContextValue>(
    () => ({
      lang: locale,
      t: (key) => getTranslation(locale, key),
    }),
    [locale],
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <SiteI18nContext.Provider value={value}>{children}</SiteI18nContext.Provider>;
};

export const useSiteI18n = () => {
  const context = useContext(SiteI18nContext);

  if (!context) {
    throw new Error("useSiteI18n must be used within a SiteI18nProvider");
  }

  return context;
};
