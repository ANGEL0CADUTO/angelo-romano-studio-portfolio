import SeoHead from "../../src/SeoHead";
import { getLanguageStaticPaths, getLanguageStaticProps, type LanguagePageProps } from "../../src/site/page-routing";
import { LocalizedPageRoute } from "../../src/site/routes";

export default function LocalizedChatbotRoute({ lang }: LanguagePageProps) {
  return (
    <>
      <SeoHead page="chatbot" lang={lang} />
      <LocalizedPageRoute currentPage="chatbot" />
    </>
  );
}

export const getStaticPaths = getLanguageStaticPaths;
export const getStaticProps = getLanguageStaticProps;
