import SeoHead from "../../src/SeoHead";
import { getLanguageStaticPaths, getLanguageStaticProps, type LanguagePageProps } from "../../src/site/page-routing";
import { LocalizedPageRoute } from "../../src/site/routes";

export default function LocalizedConsultingRoute({ lang }: LanguagePageProps) {
  return (
    <>
      <SeoHead page="consulting" lang={lang} />
      <LocalizedPageRoute currentPage="consulting" />
    </>
  );
}

export const getStaticPaths = getLanguageStaticPaths;
export const getStaticProps = getLanguageStaticProps;
