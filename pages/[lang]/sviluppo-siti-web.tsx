import SeoHead from "../../src/SeoHead";
import { getLanguageStaticPaths, getLanguageStaticProps, type LanguagePageProps } from "../../src/site/page-routing";
import { LocalizedPageRoute } from "../../src/site/routes";

export default function LocalizedWebDevelopmentRoute({ lang }: LanguagePageProps) {
  return (
    <>
      <SeoHead page="webdev" lang={lang} />
      <LocalizedPageRoute currentPage="webdev" />
    </>
  );
}

export const getStaticPaths = getLanguageStaticPaths;
export const getStaticProps = getLanguageStaticProps;
