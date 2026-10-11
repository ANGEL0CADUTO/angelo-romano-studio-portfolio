import SeoHead from "../../src/SeoHead";
import { getLanguageStaticPaths, getLanguageStaticProps, type LanguagePageProps } from "../../src/site/page-routing";
import { LocalizedPageRoute } from "../../src/site/routes";

export default function LocalizedHomeRoute({ lang }: LanguagePageProps) {
  return (
    <>
      <SeoHead page="home" lang={lang} />
      <LocalizedPageRoute currentPage="home" />
    </>
  );
}

export const getStaticPaths = getLanguageStaticPaths;
export const getStaticProps = getLanguageStaticProps;
