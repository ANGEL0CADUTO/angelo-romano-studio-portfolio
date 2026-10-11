import SeoHead from "../../src/SeoHead";
import { getLanguageStaticPaths, getLanguageStaticProps, type LanguagePageProps } from "../../src/site/page-routing";
import { LocalizedPageRoute } from "../../src/site/routes";

export default function LocalizedAboutRoute({ lang }: LanguagePageProps) {
  return (
    <>
      <SeoHead page="about" lang={lang} />
      <LocalizedPageRoute currentPage="about" />
    </>
  );
}

export const getStaticPaths = getLanguageStaticPaths;
export const getStaticProps = getLanguageStaticProps;
