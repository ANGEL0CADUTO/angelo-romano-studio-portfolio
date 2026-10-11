import { SUPPORTED_LANGUAGES } from "./i18n";

const EXPECTED_HREFLANGS = ["it", "en", "de", "fr", "es", "x-default"];
const CANONICAL_ORIGIN = "https://www.angeloromanostudio.it";

const isLocalizedCanonicalPath = (pathname: string) =>
  SUPPORTED_LANGUAGES.some((language) => pathname === `/${language}` || pathname.startsWith(`/${language}/`));

const isCanonicalUrl = (value: string) => {
  if (value.includes("vercel.app")) {
    return false;
  }

  let url: URL;

  try {
    url = new URL(value);
  } catch {
    return false;
  }

  if (url.origin !== CANONICAL_ORIGIN) {
    return false;
  }

  if (url.search || url.hash) {
    return false;
  }

  return isLocalizedCanonicalPath(url.pathname);
};

export const validateSeoPayload = ({
  pageUrl,
  alternateLinks,
}: {
  pageUrl: string;
  alternateLinks: Array<{ hrefLang: string; href: string }>;
}) => {
  if (!isCanonicalUrl(pageUrl)) {
    throw new Error(`Invalid canonical URL: ${pageUrl}`);
  }

  const seen = new Set<string>();
  for (const link of alternateLinks) {
    if (seen.has(link.hrefLang)) {
      throw new Error(`Duplicate hreflang entry detected for ${link.hrefLang}`);
    }

    if (!isCanonicalUrl(link.href)) {
      throw new Error(`Invalid hreflang URL for ${link.hrefLang}: ${link.href}`);
    }

    seen.add(link.hrefLang);
  }

  for (const hrefLang of EXPECTED_HREFLANGS) {
    if (!seen.has(hrefLang)) {
      throw new Error(`Missing hreflang entry for ${hrefLang}`);
    }
  }
};

export const validateSitemapEntries = (entries: string[]) => {
  const uniqueEntries = new Set(entries);

  if (uniqueEntries.size !== entries.length) {
    throw new Error("Sitemap contains duplicate URLs");
  }

  for (const entry of entries) {
    if (!isCanonicalUrl(entry)) {
      throw new Error(`Invalid sitemap URL: ${entry}`);
    }
  }
};
