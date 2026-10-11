import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { CASE_STUDIES, getCaseStudyBySlug, getCaseStudyCopy, type CaseStudy } from "../../../src/case-studies";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, getTranslation, normalizeLanguage, type SupportedLang } from "../../../src/i18n";
import {
  getAbsoluteUrl,
  getCanonicalUrl,
  getCaseStudyAlternateLanguageLinks,
  getCaseStudyCanonicalUrl,
  getPathFromPage,
  SITE_NAME,
} from "../../../src/seo";
import CaseStudyPage from "../../../src/site/case-study-page";
import { SiteShell } from "../../../src/site/layout";

type CaseStudyRouteProps = {
  lang: SupportedLang;
  study: CaseStudy;
};

const LOCALE_TAGS: Record<SupportedLang, string> = {
  it: "it_IT",
  en: "en_GB",
  de: "de_DE",
  fr: "fr_FR",
  es: "es_ES",
};

const trimDescription = (description: string) =>
  description.length > 158 ? `${description.slice(0, 155).trim()}...` : description;

export default function LocalizedCaseStudyRoute({ lang, study }: CaseStudyRouteProps) {
  const copy = getCaseStudyCopy(study, lang);
  const title = `${copy.title} | ${SITE_NAME}`;
  const description = trimDescription(copy.summary);
  const pageUrl = getCaseStudyCanonicalUrl(study.slug, lang);
  const imageUrl = getAbsoluteUrl(study.image);
  const alternateLinks = getCaseStudyAlternateLanguageLinks(study.slug);
  const organizationId = `${getCanonicalUrl("home", DEFAULT_LANGUAGE)}#organization`;
  const personId = `${getCanonicalUrl("about", DEFAULT_LANGUAGE)}#person`;
  const websiteId = `${getCanonicalUrl("home", DEFAULT_LANGUAGE)}#website`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      inLanguage: lang,
      isPartOf: {
        "@id": websiteId,
      },
      publisher: {
        "@id": organizationId,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: imageUrl,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${pageUrl}#case-study`,
      name: copy.title,
      description,
      url: pageUrl,
      image: imageUrl,
      about: copy.category,
      creator: {
        "@id": personId,
      },
      provider: {
        "@id": organizationId,
      },
      mainEntityOfPage: {
        "@id": `${pageUrl}#webpage`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: getTranslation(lang, "nav.home"),
          item: getCanonicalUrl("home", lang),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: getTranslation(lang, "nav.projects"),
          item: getAbsoluteUrl(getPathFromPage("projects", lang)),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: study.client,
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={pageUrl} />
        {alternateLinks.map((link) => (
          <link key={link.hrefLang} rel="alternate" hrefLang={link.hrefLang} href={link.href} />
        ))}

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content={LOCALE_TAGS[lang]} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={copy.title} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />

        <script
          id={`structured-data-case-study-${study.slug}-${lang}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <SiteShell currentPage="projects" caseStudySlug={study.slug}>
        <CaseStudyPage study={study} />
      </SiteShell>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: CASE_STUDIES.flatMap((study) =>
    SUPPORTED_LANGUAGES.map((lang) => ({
      params: {
        lang,
        slug: study.slug,
      },
    })),
  ),
  fallback: false,
});

export const getStaticProps: GetStaticProps<CaseStudyRouteProps> = async ({ params }) => {
  const rawLang = params?.lang;
  const rawSlug = params?.slug;
  const langParam = Array.isArray(rawLang) ? rawLang[0] : rawLang;
  const slugParam = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
  const study = slugParam ? getCaseStudyBySlug(slugParam) : undefined;

  if (!study) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      lang: langParam ? normalizeLanguage(langParam) : DEFAULT_LANGUAGE,
      study,
    },
  };
};
