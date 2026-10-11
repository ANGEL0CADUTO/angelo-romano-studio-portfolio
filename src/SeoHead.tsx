import Head from "next/head";
import { getSeoData, type PageId } from "./seo";

export default function SeoHead({ page, lang }: { page: PageId; lang: string }) {
  const seo = getSeoData(page, lang);

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content="Angelo Romano" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="theme-color" content="#09090b" />
      <meta name="application-name" content="Angelo Romano" />

      <link rel="canonical" href={seo.pageUrl} />
      {seo.alternateLinks.map((link) => (
        <link key={link.hrefLang} rel="alternate" hrefLang={link.hrefLang} href={link.href} />
      ))}

      <link rel="icon" href="/demo/scene-2.svg" sizes="any" />
      <link rel="icon" type="image/png" sizes="16x16" href="/demo/scene-3.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/demo/scene-1.svg" />
      <link rel="icon" type="image/png" sizes="48x48" href="/demo/scene-2.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/demo/scene-4.svg" />
      <link rel="manifest" href="/site.webmanifest" />

      <meta property="og:type" content={page === "about" ? "profile" : "website"} />
      <meta property="og:title" content={seo.openGraphTitle ?? seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.pageUrl} />
      <meta property="og:site_name" content="Angelo Romano" />
      <meta property="og:locale" content={seo.localeTag} />
      <meta property="og:image" content={seo.imageUrl} />
      <meta property="og:image:alt" content={seo.title} />
      <meta property="og:logo" content={seo.logoUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.twitterTitle ?? seo.openGraphTitle ?? seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.imageUrl} />

      <script
        id={`structured-data-${page}-${seo.locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema) }}
      />
    </Head>
  );
}
