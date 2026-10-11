import SeoHead from "../../src/SeoHead";
import { getLanguageStaticPaths, getLanguageStaticProps, type LanguagePageProps } from "../../src/site/page-routing";
import { LocalizedPageRoute } from "../../src/site/routes";

export default function LocalizedScriptingRoute({ lang }: LanguagePageProps) {
  return (
    <>
      <SeoHead page="scripting" lang={lang} />
      <LocalizedPageRoute currentPage="scripting" />
    </>
  );
}

export const getStaticPaths = getLanguageStaticPaths;
export const getStaticProps = getLanguageStaticProps;
