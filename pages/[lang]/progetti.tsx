import SeoHead from "../../src/SeoHead";
import { getLanguageStaticPaths, getLanguageStaticProps, type LanguagePageProps } from "../../src/site/page-routing";
import { LocalizedPageRoute } from "../../src/site/routes";

export default function LocalizedProjectsRoute({ lang }: LanguagePageProps) {
  return (
    <>
      <SeoHead page="projects" lang={lang} />
      <LocalizedPageRoute currentPage="projects" />
    </>
  );
}

export const getStaticPaths = getLanguageStaticPaths;
export const getStaticProps = getLanguageStaticProps;
