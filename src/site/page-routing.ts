import type { GetStaticPaths, GetStaticProps } from "next";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, normalizeLanguage, type SupportedLang } from "../i18n";

export type LanguagePageProps = {
  lang: SupportedLang;
};

export const getLanguageStaticPaths: GetStaticPaths = async () => ({
  paths: SUPPORTED_LANGUAGES.map((lang) => ({ params: { lang } })),
  fallback: false,
});

export const getLanguageStaticProps: GetStaticProps<LanguagePageProps> = async ({ params }) => {
  const langParam = params?.lang;
  const rawLang = Array.isArray(langParam) ? langParam[0] : langParam;

  return {
    props: {
      lang: rawLang ? normalizeLanguage(rawLang) : DEFAULT_LANGUAGE,
    },
  };
};
