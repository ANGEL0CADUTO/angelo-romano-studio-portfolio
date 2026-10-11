import type { PageId } from "../seo";
import AboutContent from "./about-page";
import ConsultingContent from "./consulting-page";
import HomeContent from "./home-page";
import { SiteShell } from "./layout";
import WebDevPage from "./webdev-page";
import WebAppPage from "./webapp-page";
import AutomationsPage from "./automations-page";
import ChatbotPage from "./chatbot-page";
import ScriptingPage from "./scripting-page";
import ProjectsPage from "./projects-page";

export const LocalizedPageRoute = ({
  currentPage,
}: {
  currentPage: PageId;
}) => {
  const content = {
    home: <HomeContent />,
    webdev: <WebDevPage />,
    consulting: <ConsultingContent />,
    about: <AboutContent />,
    webapp: <WebAppPage />,
    automations: <AutomationsPage />,
    chatbot: <ChatbotPage />,
    scripting: <ScriptingPage />,
    projects: <ProjectsPage />,
  }[currentPage];

  return <SiteShell currentPage={currentPage}>{content}</SiteShell>;
};
