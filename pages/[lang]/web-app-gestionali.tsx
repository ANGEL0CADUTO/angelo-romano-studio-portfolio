import SeoHead from "../../src/SeoHead";
import { getLanguageStaticPaths, getLanguageStaticProps, type LanguagePageProps } from "../../src/site/page-routing";
import { LocalizedPageRoute } from "../../src/site/routes";

export default function LocalizedWebAppRoute({ lang }: LanguagePageProps) {
  return (
    <>
      <SeoHead page="webapp" lang={lang} />
      <LocalizedPageRoute currentPage="webapp" />
    </>
  );
}

export const getStaticPaths = getLanguageStaticPaths;
export const getStaticProps = getLanguageStaticProps;
