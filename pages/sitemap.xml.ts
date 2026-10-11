import type { GetServerSideProps } from "next";
import { getSitemapEntries } from "../src/seo";
import { validateSitemapEntries } from "../src/seo-validation";

const buildSitemapXml = () => {
  const entries = getSitemapEntries();
  const urls = entries.map((entry) => entry.url);

  validateSitemapEntries(urls);

  const body = entries
    .map(
      (entry) => `  <url>
    <loc>${entry.url}</loc>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;
};

export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/xml");
  res.write(buildSitemapXml());
  res.end();

  return {
    props: {},
  };
};
