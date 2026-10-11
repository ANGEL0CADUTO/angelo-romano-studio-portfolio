import SeoHead from "../../src/SeoHead";
import { getLanguageStaticPaths, getLanguageStaticProps, type LanguagePageProps } from "../../src/site/page-routing";
import { LocalizedPageRoute } from "../../src/site/routes";

export default function LocalizedAutomationsRoute({ lang }: LanguagePageProps) {
  return (
    <>
      <SeoHead page="automations" lang={lang} />
      <LocalizedPageRoute currentPage="automations" />
    </>
  );
}

export const getStaticPaths = getLanguageStaticPaths;
export const getStaticProps = getLanguageStaticProps;
