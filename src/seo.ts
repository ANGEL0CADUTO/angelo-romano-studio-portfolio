import { getServiceGrowthCopy } from "./service-growth";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, getTranslation, normalizeLanguage, type SupportedLang } from "./i18n";
import { CASE_STUDIES, type CaseStudySlug } from "./case-studies";
import { validateSeoPayload } from "./seo-validation";

export type PageId = "home" | "webdev" | "consulting" | "about" | "webapp" | "automations" | "chatbot" | "scripting" | "projects";
type ServicePageId = Extract<PageId, "webdev" | "webapp" | "automations" | "chatbot" | "scripting" | "consulting">;

type SeoPageCopy = {
  title: string;
  description: string;
  keywords: string;
  pageName: string;
  openGraphTitle?: string;
  twitterTitle?: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type AlternateLink = {
  hrefLang: string;
  href: string;
};

export const SITE_URL = "https://www.angeloromanostudio.it/";
export const SITE_NAME = "Angelo Romano";
export const OG_IMAGE_PATH = "/demo/scene-4.svg";

const BUSINESS_EMAIL = "hello@example.com";
const BUSINESS_IMAGE_PATH = "/demo/scene-1.svg";
const BUSINESS_LOGO_PATH = "/demo/logo.svg";
const GITHUB_URL = "https://github.com/ANGEL0CADUTO";
const LINKEDIN_URL = "https://www.linkedin.com/in/angelo-romano-2a5301252/";

const AREA_SERVED = [
  "Roma",
  "Milano",
  "Torino",
  "Bologna",
  "Firenze",
  "Napoli",
  "Italia",
  "Europa",
  "Regno Unito",
  "Stati Uniti",
  "Canada",
  "Australia",
  "Svizzera",
  "Emirati Arabi Uniti",
  "Singapore",
];

const PAGE_SEGMENTS: Record<PageId, string> = {
  home: "",
  webdev: "sviluppo-siti-web",
  consulting: "consulenza-it",
  about: "chi-sono",
  webapp: "web-app-gestionali",
  automations: "automazioni-ai",
  chatbot: "chatbot-segretaria-ai",
  scripting: "scripting-scraping",
  projects: "progetti",
};

const LOCALE_TAGS: Record<SupportedLang, string> = {
  it: "it_IT",
  en: "en_GB",
  de: "de_DE",
  fr: "fr_FR",
  es: "es_ES",
};

const JOB_TITLES: Record<SupportedLang, string> = {
  it: "Web Developer e IT Engineer",
  en: "Web Developer and IT Engineer",
  de: "Webentwickler und IT Engineer",
  fr: "Developpeur Web et Ingenieur IT",
  es: "Desarrollador Web e Ingeniero IT",
};

const SEO_COPY: Record<SupportedLang, Record<PageId, SeoPageCopy>> = {
  it: {
    home: {
      title: "Siti Web, Web App e Automazioni AI | Angelo Romano",
      description:
        "Creo siti web professionali, web app e automazioni AI per acquisire clienti e semplificare processi. Raccontami il progetto.",
      keywords:
        "sviluppo siti web, siti web professionali, web app, consulenza IT, SEO tecnica, sviluppatore web Roma",
      pageName: "Home",
      openGraphTitle: "Siti Web, Web App e Automazioni AI | Angelo Romano",
      twitterTitle: "Siti Web e Automazioni AI | Angelo Romano",
    },
    webdev: {
      title: "Sviluppo Siti Web per Aziende | Angelo Romano",
      description:
        "Realizzo siti web veloci, sicuri e ottimizzati SEO per trasformare visite in contatti. Richiedi ora un confronto gratuito.",
      keywords:
        "sviluppo siti web professionali, realizzazione siti web, e-commerce, web app, SEO sito web",
      pageName: "Sviluppo Siti Web",
    },
    consulting: {
      title: "Consulenza IT e Cybersecurity | Angelo Romano",
      description:
        "Consulenza IT per sicurezza, performance, architetture distribuite e ottimizzazione infrastrutturale.",
      keywords:
        "consulenza IT, cybersecurity, audit sicurezza, performance backend, cloud infrastructure",
      pageName: "Consulenza IT",
    },
    about: {
      title: "Chi Sono | Angelo Romano",
      description:
        "Scopri il profilo di Angelo Romano: web developer, IT engineer e specialista in cybersecurity.",
      keywords:
        "Angelo Romano, web developer, IT engineer, cybersecurity specialist, sviluppatore siti web",
      pageName: "Chi Sono",
    },
    webapp: {
      title: "Web App Gestionali su Misura | Angelo Romano",
      description:
        "Sviluppo gestionali, dashboard e portali web per ridurre lavoro manuale e controllare processi aziendali. Parliamone insieme.",
      keywords:
        "sviluppo web app, gestionali su misura, dashboard aziendali, software gestionale, web app aziendali",
      pageName: "Web App e Gestionali",
    },
    automations: {
      title: "Automazioni AI per Aziende | Angelo Romano",
      description:
        "Creo workflow AI per lead, report, documenti e integrazioni tra strumenti aziendali. Raccontami cosa vuoi automatizzare.",
      keywords:
        "automazioni AI, workflow digitali, automazione processi, integrazione AI, Make Zapier",
      pageName: "Automazioni AI",
    },
    chatbot: {
      title: "Chatbot WhatsApp e Segretarie AI | Angelo Romano",
      description:
        "Automatizza risposte, lead e appuntamenti con chatbot WhatsApp, widget web e segretarie AI vocali. Scrivimi per una demo.",
      keywords:
        "chatbot siti web, chatbot WhatsApp, segretaria AI vocale, assistente virtuale, risponditore automatico",
      pageName: "Chatbot e Assistenti",
    },
    scripting: {
      title: "Scripting, Web Scraping e Integrazioni Dati | Angelo Romano",
      description:
        "Sviluppo script su misura, automazioni dati, scraper controllati, integrazioni API, pulizia CSV/Excel e sistemi per raccogliere, trasformare e monitorare informazioni.",
      keywords:
        "scripting dati, web scraping, scraper concorrenti, pulizia Excel CSV, integrazioni API",
      pageName: "Scripting e Scraping",
    },
    projects: {
      title: "Progetti e Case Study | Angelo Romano",
      description:
        "Una selezione di siti web, piattaforme, automazioni e progetti tecnici realizzati da Angelo Romano: casi studio, tecnologie utilizzate e risultati ottenuti.",
      keywords:
        "casi studio web, progetti web, portfolio web developer, progetti cybersecurity, case study informatica",
      pageName: "Progetti",
    },
  },
  en: {
    home: {
      title: "Websites, Web Apps and AI Automation | Angelo Romano",
      description:
        "I build websites, web apps and AI automations that generate leads and simplify operations. Tell me about your project or book a call.",
      keywords:
        "web development, professional websites, web apps, IT consulting, technical SEO, web developer",
      pageName: "Home",
      openGraphTitle: "Websites, Web Apps and AI Automation | Angelo Romano",
      twitterTitle: "Websites and AI Automation | Angelo Romano",
    },
    webdev: {
      title: "Business Website Development | Angelo Romano",
      description:
        "Fast, secure business websites built to convert visitors into qualified leads. Send your brief or book a quick project call.",
      keywords:
        "professional web development, ecommerce development, web apps, technical SEO, business websites",
      pageName: "Web Development",
    },
    consulting: {
      title: "IT Consulting and Cybersecurity | Angelo Romano",
      description:
        "IT consulting focused on security, performance, distributed architectures and infrastructure optimization.",
      keywords:
        "IT consulting, cybersecurity, security audit, distributed systems, backend performance",
      pageName: "IT Consulting",
    },
    about: {
      title: "About | Angelo Romano",
      description:
        "Learn more about Angelo Romano: web developer, IT engineer and cybersecurity specialist.",
      keywords:
        "Angelo Romano, web developer, IT engineer, cybersecurity specialist, full stack developer",
      pageName: "About",
    },
    webapp: {
      title: "Custom Web Apps and Dashboards | Angelo Romano",
      description:
        "Custom web apps, dashboards and management tools for teams that need cleaner data, faster workflows and less spreadsheet work.",
      keywords:
        "custom web apps, management software, custom dashboards, business tools, web application developer",
      pageName: "Web Apps & Dashboards",
    },
    automations: {
      title: "AI Automation Workflows for Business | Angelo Romano",
      description:
        "I design AI workflows for leads, reports, documents and tool integrations so your team spends less time on manual work. Start with a quick audit.",
      keywords:
        "AI automations, digital workflows, process automation, AI integration, Zapier Make developer",
      pageName: "AI Automations",
    },
    chatbot: {
      title: "WhatsApp Chatbots and AI Receptionists | Angelo Romano",
      description:
        "Automate replies, lead qualification and appointment booking with WhatsApp bots, web chatbots and voice AI receptionists. Ask for a demo.",
      keywords:
        "AI chatbots, WhatsApp bots, voice AI receptionist, virtual assistant, customer support automation",
      pageName: "AI Chatbots",
    },
    scripting: {
      title: "Scripting, Web Scraping, and Data Integrations | Angelo Romano",
      description:
        "Developing custom scripts, automated data pipelines, web scrapers, API integrations, and spreadsheet cleaners to collect and transform business data.",
      keywords:
        "custom scripting, web scraping, data pipeline, api integration, excel cleaning script",
      pageName: "Scripting & Scraping",
    },
    projects: {
      title: "Featured Projects and Case Studies | Angelo Romano",
      description:
        "A selection of professional websites, applications, and automation systems developed by Angelo Romano: case studies, stack, and concrete results.",
      keywords:
        "case studies web, web developer portfolio, cybersecurity projects, software engineering projects",
      pageName: "Projects",
    },
  },
  de: {
    home: {
      title: "Angelo Romano | Professionelle Webentwicklung und IT-Beratung",
      description:
        "Professionelle Websites, Web-Apps und IT-Beratung. Leistungsstarke, sichere und SEO-optimierte Losungen.",
      keywords:
        "Webentwicklung, professionelle Websites, Web-Apps, IT-Beratung, technisches SEO",
      pageName: "Startseite",
      openGraphTitle: "Angelo Romano | Webentwicklung und IT-Beratung",
      twitterTitle: "Angelo Romano | Webentwickler",
    },
    webdev: {
      title: "Professionelle Webentwicklung",
      description:
        "Unternehmenswebsites, E-Commerce und Web-Apps mit Fokus auf Performance, Sicherheit und Conversion.",
      keywords:
        "professionelle Webentwicklung, E-Commerce Entwicklung, Web-Apps, technische SEO",
      pageName: "Webentwicklung",
    },
    consulting: {
      title: "IT-Beratung und Cybersicherheit",
      description:
        "IT-Beratung fur Sicherheit, Performance, verteilte Architekturen und Infrastruktur-Optimierung.",
      keywords:
        "IT-Beratung, Cybersicherheit, Sicherheitsaudit, verteilte Systeme, Backend-Performance",
      pageName: "IT-Beratung",
    },
    about: {
      title: "Uber Mich | Angelo Romano",
      description:
        "Mehr uber Angelo Romano: Webentwickler, IT Engineer und Spezialist fur Cybersicherheit.",
      keywords:
        "Angelo Romano, Webentwickler, IT Engineer, Cybersicherheit, Full Stack Entwickler",
      pageName: "Uber Mich",
    },
    webapp: {
      title: "Maßgeschneiderte Web-Apps und Verwaltungssoftware | Angelo Romano",
      description:
        "Entwicklung maßgeschneiderter Webanwendungen, Dashboards und Management-Software. Digitale Tools zur Verwaltung von Daten und Prozessen.",
      keywords:
        "web-apps entwicklung, verwaltungssoftware, massgeschneiderte software, kpi dashboards, unternehmenssoftware",
      pageName: "Web-Apps & Dashboards",
    },
    automations: {
      title: "KI-Automatisierungen für Unternehmen | Angelo Romano",
      description:
        "Entwicklung von KI-Automatisierungen und digitalen Workflows zur Reduzierung manueller Aufgaben und zur Optimierung von Geschäftsprozessen.",
      keywords:
        "ki automatisierung, digitale workflows, prozessoptimierung, ki integration, zapier make entwickler",
      pageName: "KI-Automatisierungen",
    },
    chatbot: {
      title: "KI-Chatbots, WhatsApp-Bots und KI-Rezeptionistin | Angelo Romano",
      description:
        "Erstellung von Web-Chatbots, WhatsApp-Bots und KI-Telefonassistenten zur Lead-Qualifizierung, Terminbuchung und 24/7-Support.",
      keywords:
        "ki chatbots, whatsapp bots, ki telefonassistent, virtueller assistent, kundenservice automatisierung",
      pageName: "KI-Chatbots",
    },
    scripting: {
      title: "Scripting, Web Scraping und Datenintegrationen | Angelo Romano",
      description:
        "Entwicklung maßgeschneiderter Skripte, Web-Scraper, API-Integrationen und Datenbereinigungstools zur automatisierten Informationsverarbeitung.",
      keywords:
        "custom scripting, web scraping, datenpipelines, api integrationen, excel csv bereinigung",
      pageName: "Scripting & Scraping",
    },
    projects: {
      title: "Projekte und Fallstudien | Angelo Romano",
      description:
        "Eine Auswahl an professionellen Websites, Softwareanwendungen und Automatisierungssystemen von Angelo Romano: Fallstudien und Ergebnisse.",
      keywords:
        "fallstudien web, webentwickler portfolio, cybersecurity projekte, softwareprojekte showcase",
      pageName: "Projekte",
    },
  },
  fr: {
    home: {
      title: "Angelo Romano | Developpement Web Professionnel et Conseil IT",
      description:
        "Sites web professionnels, web apps et conseil IT. Solutions performantes, securisees et optimisees SEO.",
      keywords:
        "developpement web, sites web professionnels, web apps, conseil IT, SEO technique",
      pageName: "Accueil",
      openGraphTitle: "Angelo Romano | Developpement Web et Conseil IT",
      twitterTitle: "Angelo Romano | Developpeur Web",
    },
    webdev: {
      title: "Developpement Web Professionnel",
      description:
        "Sites d entreprise, e-commerce et web apps concus pour la performance, la securite et la conversion.",
      keywords:
        "developpement web professionnel, e-commerce, web apps, SEO technique, sites entreprise",
      pageName: "Developpement Web",
    },
    consulting: {
      title: "Conseil IT et Cybersecurite",
      description:
        "Conseil IT axe sur la securite, la performance, les architectures distribuees et l optimisation d infrastructure.",
      keywords:
        "conseil IT, cybersecurite, audit de securite, architectures distribuees, performance backend",
      pageName: "Conseil IT",
    },
    about: {
      title: "A Propos | Angelo Romano",
      description:
        "Decouvrez Angelo Romano : developpeur web, ingenieur IT et specialiste en cybersecurite.",
      keywords:
        "Angelo Romano, developpeur web, ingenieur IT, cybersecurite, developpeur full stack",
      pageName: "A Propos",
    },
    webapp: {
      title: "Applications Web et Logiciels de Gestion sur Mesure | Angelo Romano",
      description:
        "Développement d'applications web, tableaux de bord et logiciels de gestion sur mesure. Outils numériques pour gérer les données et les processus.",
      keywords:
        "applications web sur mesure, logiciel de gestion, tableaux de bord, developpement logiciel, outils entreprise",
      pageName: "Apps Web & Tableaux",
    },
    automations: {
      title: "Automatisations IA pour Entreprises | Angelo Romano",
      description:
        "Conception d'automatisations IA et de flux de travail numériques pour réduire les tâches manuelles et simplifier les processus opérationnels.",
      keywords:
        "automatisation ia, flux de travail, automatisation processus, integration ia, developpeur zapier",
      pageName: "Automatisations IA",
    },
    chatbot: {
      title: "Chatbots IA, Bots WhatsApp et Secrétaire IA | Angelo Romano",
      description:
        "Création de chatbots web, d'assistants WhatsApp et de secrétaires vocales IA réalistes per répondre aux clients et automatiser les rendez-vous.",
      keywords:
        "chatbots ia, bots whatsapp, secretaire vocale ia, assistant virtuel, support client automatique",
      pageName: "Chatbots IA",
    },
    scripting: {
      title: "Scripting, Web Scraping et Intégrations de Données | Angelo Romano",
      description:
        "Développement de scripts personnalisés, de pipelines de scraping, d'intégrations API et de nettoyage de fichiers Excel/CSV pour vos données.",
      keywords:
        "scripting sur mesure, web scraping, pipeline donnees, integration api, nettoyage excel csv",
      pageName: "Scripting & Scraping",
    },
    projects: {
      title: "Projets Réalisés et Études de Cas | Angelo Romano",
      description:
        "Une sélection de sites web, applications et systèmes d'automatisation développés par Angelo Romano : études de cas, technologies et résultats.",
      keywords:
        "etudes de cas, portfolio developpeur, projets securite, developpement application",
      pageName: "Projets",
    },
  },
  es: {
    home: {
      title: "Angelo Romano | Desarrollo Web Profesional y Consultoria IT",
      description:
        "Sitios web profesionales, web apps y consultoria IT. Soluciones rapidas, seguras y optimizadas para SEO.",
      keywords:
        "desarrollo web, sitios web profesionales, web apps, consultoria IT, SEO tecnico",
      pageName: "Inicio",
      openGraphTitle: "Angelo Romano | Desarrollo Web y Consultoria IT",
      twitterTitle: "Angelo Romano | Desarrollador Web",
    },
    webdev: {
      title: "Desarrollo Web Profesional",
      description:
        "Sitios corporativos, e-commerce y web apps pensados para rendimiento, seguridad y conversion.",
      keywords:
        "desarrollo web profesional, ecommerce, web apps, SEO tecnico, sitios corporativos",
      pageName: "Desarrollo Web",
    },
    consulting: {
      title: "Consultoria IT y Ciberseguridad",
      description:
        "Consultoria IT centrada en seguridad, rendimiento, arquitecturas distribuidas y optimizacion de infraestructura.",
      keywords:
        "consultoria IT, ciberseguridad, auditoria de seguridad, sistemas distribuidos, rendimiento backend",
      pageName: "Consultoria IT",
    },
    about: {
      title: "Sobre Mi | Angelo Romano",
      description:
        "Descubre el perfil de Angelo Romano: desarrollador web, ingeniero IT y especialista en ciberseguridad.",
      keywords:
        "Angelo Romano, desarrollador web, ingeniero IT, ciberseguridad, full stack developer",
      pageName: "Sobre Mi",
    },
    webapp: {
      title: "Aplicaciones Web y Gestores a Medida | Angelo Romano",
      description:
        "Desarrollo de aplicaciones web, paneles de control y software de gestión a medida. Herramientas digitales para gestionar datos y optimizar procesos.",
      keywords:
        "aplicaciones web a medida, software de gestion, paneles de control, desarrollo a medida, herramientas de negocio",
      pageName: "Apps Web & Paneles",
    },
    automations: {
      title: "Automatizaciones IA para Empresas | Angelo Romano",
      description:
        "Diseño de automatizaciones IA y flujos de trabajo digitales para reducir tareas manuales, integrar herramientas y simplificar procesos.",
      keywords:
        "automatizaciones ia, flujos de trabajo, automatizacion de procesos, integracion ia, desarrollador zapier",
      pageName: "Automatizaciones IA",
    },
    chatbot: {
      title: "Chatbots IA, Bots de WhatsApp y Secretaria IA | Angelo Romano",
      description:
        "Desarrollo de chatbots web, asistentes de WhatsApp y secretarias virtuales de voz IA para cualificar leads y automatizar citas y soporte.",
      keywords:
        "chatbots ia, bots de whatsapp, secretaria virtual ia, asistente de voz, automatizacion atencion cliente",
      pageName: "Chatbots IA",
    },
    scripting: {
      title: "Scripting, Web Scraping e Integración de Datos | Angelo Romano",
      description:
        "Desarrollo de scripts personalizados, raspado web (scraping), integraciones API y automatización de hojas Excel/CSV para optimizar tus datos.",
      keywords:
        "scripting a medida, web scraping, integraciones api, procesamiento de datos, limpieza excel csv",
      pageName: "Scripting & Scraping",
    },
    projects: {
      title: "Proyectos y Casos de Estudio | Angelo Romano",
      description:
        "Una selección de sitios web, aplicaciones y automatizaciones profesionales desarrolladas por Angelo Romano: casos de estudio y resultados.",
      keywords:
        "casos de estudio, portafolio desarrollador, proyectos informaticos, proyectos ciberseguridad",
      pageName: "Proyectos",
    },
  },
};

type ServiceOfferDefinition = { page: ServicePageId };
const SERVICE_OFFER_DEFINITIONS: ServiceOfferDefinition[] = [
  {page: "webdev"}, {page: "webapp"}, {page: "automations"},
  {page: "chatbot"}, {page: "scripting"}, {page: "consulting"},
];

const getPageCopy = (page: PageId, language: string) => SEO_COPY[normalizeLanguage(language)][page];

export const getPathFromPage = (page: PageId, language: string = DEFAULT_LANGUAGE) => {
  const locale = normalizeLanguage(language);
  const segment = PAGE_SEGMENTS[page];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
};

export const getLegacyPathFromPage = (page: PageId) => {
  const segment = PAGE_SEGMENTS[page];
  return segment ? `/${segment}` : "/";
};

export const getAbsoluteUrl = (pathname: string) => new URL(pathname, SITE_URL).toString();

export const getCanonicalUrl = (page: PageId, language: string = DEFAULT_LANGUAGE) =>
  getAbsoluteUrl(getPathFromPage(page, language));

export const getCaseStudyPath = (slug: CaseStudySlug | string, language: string = DEFAULT_LANGUAGE) =>
  `/${normalizeLanguage(language)}/${PAGE_SEGMENTS.projects}/${slug}`;

export const getCaseStudyCanonicalUrl = (slug: CaseStudySlug | string, language: string = DEFAULT_LANGUAGE) =>
  getAbsoluteUrl(getCaseStudyPath(slug, language));

export const getAlternateLanguageLinks = (page: PageId): AlternateLink[] => [
  ...SUPPORTED_LANGUAGES.map((language) => ({
    hrefLang: language,
    href: getCanonicalUrl(page, language),
  })),
  {
    hrefLang: "x-default",
    href: getCanonicalUrl(page, DEFAULT_LANGUAGE),
  },
];

export const getCaseStudyAlternateLanguageLinks = (slug: CaseStudySlug | string): AlternateLink[] => [
  ...SUPPORTED_LANGUAGES.map((language) => ({
    hrefLang: language,
    href: getCaseStudyCanonicalUrl(slug, language),
  })),
  {
    hrefLang: "x-default",
    href: getCaseStudyCanonicalUrl(slug, DEFAULT_LANGUAGE),
  },
];

const getServiceOfferDefinition = (page: PageId) =>
  SERVICE_OFFER_DEFINITIONS.find((offer) => offer.page === page);

const buildServiceOfferSchema = (
  offer: ServiceOfferDefinition,
  locale: SupportedLang,
  professionalServiceId: string,
) => ({
  "@type": "Offer",
  name: getTranslation(locale, `footer.links.${offer.page}`),
  description: getPageCopy(offer.page, locale).description,
  url: getCanonicalUrl(offer.page, locale),
  availability: "https://schema.org/InStock",
  offeredBy: {
    "@id": professionalServiceId,
  },
});

const buildOfferCatalogSchema = (
  locale: SupportedLang,
  professionalServiceId: string,
  offerCatalogId: string,
) => ({
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": offerCatalogId,
  name: getTranslation(locale, "footer.solutions.title"),
  itemListElement: SERVICE_OFFER_DEFINITIONS.map((offer, index) => ({
    ...buildServiceOfferSchema(offer, locale, professionalServiceId),
    position: index + 1,
    itemOffered: {
      "@type": "Service",
      "@id": `${getCanonicalUrl(offer.page, locale)}#service`,
      name: getTranslation(locale, `footer.links.${offer.page}`),
      provider: {
        "@id": professionalServiceId,
      },
    },
  })),
});

const buildServiceSchema = ({
  page,
  locale,
  pageUrl,
  description,
  imageUrl,
  professionalServiceId,
}: {
  page: PageId;
  locale: SupportedLang;
  pageUrl: string;
  description: string;
  imageUrl: string;
  professionalServiceId: string;
}) => {
  const offer = getServiceOfferDefinition(page);

  if (!offer) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: getTranslation(locale, `footer.links.${offer.page}`),
    serviceType: getTranslation(locale, `footer.links.${offer.page}`),
    provider: {
      "@id": professionalServiceId,
    },
    areaServed: AREA_SERVED,
    url: pageUrl,
    image: imageUrl,
    description,
    offers: buildServiceOfferSchema(offer, locale, professionalServiceId),
  };
};

const buildBreadcrumbSchema = (page: PageId, language: SupportedLang, pageName: string) => {
  if (page === "home") {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: getTranslation(language, "nav.home"),
        item: getCanonicalUrl("home", language),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: getCanonicalUrl(page, language),
      },
    ],
  };
};

export const getSeoData = (page: PageId, language: string) => {
  const locale = normalizeLanguage(language);
  const copy = getPageCopy(page, locale);
  const pageUrl = getCanonicalUrl(page, locale);
  const socialImageUrl = getAbsoluteUrl(OG_IMAGE_PATH);
  const schemaImageUrl = getAbsoluteUrl(BUSINESS_IMAGE_PATH);
  const logoUrl = getAbsoluteUrl(BUSINESS_LOGO_PATH);
  const alternateLinks = getAlternateLanguageLinks(page);
  const faqItems = getServiceGrowthCopy("webdev", locale).faqs;
  const homeEntityUrl = getCanonicalUrl("home", DEFAULT_LANGUAGE);
  const organizationId = `${homeEntityUrl}#organization`;
  const professionalServiceId = `${homeEntityUrl}#professional-service`;
  const websiteId = `${homeEntityUrl}#website`;
  const offerCatalogId = `${homeEntityUrl}#offer-catalog`;
  const personId = `${getCanonicalUrl("about", DEFAULT_LANGUAGE)}#person`;
  const contactPointSchema = {
    "@type": "ContactPoint",
    contactType: getTranslation(locale, "footer.contacts"),
    email: BUSINESS_EMAIL,
    url: getAbsoluteUrl(`${getPathFromPage("home", locale)}#home-form`),
    areaServed: AREA_SERVED,
    availableLanguage: ["Italian", "English"],
  };
  const offerCatalogSchema = buildOfferCatalogSchema(locale, professionalServiceId, offerCatalogId);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: SITE_NAME,
    url: homeEntityUrl,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      width: 1024,
      height: 1024,
    },
    image: logoUrl,
    email: BUSINESS_EMAIL,
    founder: {
      "@id": personId,
    },
    contactPoint: contactPointSchema,
    hasOfferCatalog: {
      "@id": offerCatalogId,
    },
    sameAs: [GITHUB_URL, LINKEDIN_URL],
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": professionalServiceId,
    name: SITE_NAME,
    url: homeEntityUrl,
    image: schemaImageUrl,
    logo: logoUrl,
    email: BUSINESS_EMAIL,
    contactPoint: contactPointSchema,
    founder: {
      "@id": personId,
    },
    employee: {
      "@id": personId,
    },
    hasOfferCatalog: {
      "@id": offerCatalogId,
    },
    areaServed: AREA_SERVED,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Roma",
      addressCountry: "IT",
    },
    description: copy.description,
    serviceType:
      locale === "it"
        ? [
            "Sviluppo siti web professionali",
            "Web app gestionali",
            "Automazioni AI",
            "Chatbot e segretarie AI",
            "Scripting e scraping",
            "Consulenza IT e cybersecurity",
          ]
        : [
            "Professional websites",
            "Custom management web apps",
            "AI automation workflows",
            "Chatbots and AI receptionists",
            "Scripting and scraping",
            "IT consulting and cybersecurity",
          ],
    sameAs: [GITHUB_URL, LINKEDIN_URL],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: homeEntityUrl,
    name: SITE_NAME,
    inLanguage: SUPPORTED_LANGUAGES,
    description: copy.description,
    publisher: {
      "@id": organizationId,
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: SITE_NAME,
    jobTitle: JOB_TITLES[locale],
    url: getCanonicalUrl("about", locale),
    image: getAbsoluteUrl("/demo/scene-3.svg"),
    email: BUSINESS_EMAIL,
    worksFor: {
      "@id": organizationId,
    },
    sameAs: [GITHUB_URL, LINKEDIN_URL],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Roma",
      addressCountry: "IT",
    },
    knowsAbout: [
      "Web Development",
      "React",
      "TypeScript",
      "Technical SEO",
      "Cybersecurity",
      "Performance Engineering",
    ],
  };

  const webPageSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": page === "about" ? "ProfilePage" : "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: copy.title,
    description: copy.description,
    inLanguage: locale,
    isPartOf: {
      "@id": websiteId,
    },
    publisher: {
      "@id": organizationId,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: socialImageUrl,
    },
  };

  if (page === "about") {
    webPageSchema.mainEntity = {
      "@id": personId,
    };
  }

  const schema: Array<Record<string, unknown>> = [
    organizationSchema,
    websiteSchema,
    professionalServiceSchema,
    offerCatalogSchema,
    personSchema,
    webPageSchema,
  ];
  const breadcrumbSchema = buildBreadcrumbSchema(page, locale, copy.pageName);
  const serviceSchema = buildServiceSchema({
    page,
    locale,
    pageUrl,
    description: copy.description,
    imageUrl: schemaImageUrl,
    professionalServiceId,
  });

  if (breadcrumbSchema) {
    schema.push(breadcrumbSchema);
  }

  if (serviceSchema) {
    schema.push(serviceSchema);
  }

  if (page === "webdev") {
    schema.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  const seo = {
    ...copy,
    locale,
    localeTag: LOCALE_TAGS[locale],
    pageUrl,
    imageUrl: socialImageUrl,
    logoUrl,
    alternateLinks,
    schema,
  };

  validateSeoPayload(seo);

  return seo;
};

export const getSitemapEntries = () => {
  const pageEntries = SUPPORTED_LANGUAGES.flatMap((language) =>
    (Object.keys(PAGE_SEGMENTS) as PageId[]).map((page) => ({
      page,
      language,
      url: getCanonicalUrl(page, language),
    })),
  );
  const caseStudyEntries = SUPPORTED_LANGUAGES.flatMap((language) =>
    CASE_STUDIES.map((study) => ({
      page: "projects" as PageId,
      language,
      url: getCaseStudyCanonicalUrl(study.slug, language),
    })),
  );

  return [...pageEntries, ...caseStudyEntries];
};
