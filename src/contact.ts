import type { PageId } from "./seo";

export type QuickContactIntent = "message" | "call";

export const RESPONSE_TIME_LABELS: Record<string, string> = {
  it: "Risposta media entro 2 ore lavorative",
  en: "Average reply within 2 business hours",
  de: "Antwort meist innerhalb von 2 Arbeitsstunden",
  fr: "Reponse moyenne sous 2 heures ouvreables",
  es: "Respuesta media en 2 horas laborables",
};

const CONTACT_SERVICE_MAP: Partial<Record<PageId, string>> = {
  webdev: "webdev",
  webapp: "webapp",
  automations: "automations",
  chatbot: "chatbot",
  scripting: "scripting",
  consulting: "consulting",
};

export const getContactServiceFromPage = (page: PageId) => CONTACT_SERVICE_MAP[page] ?? "general";

export const getResponseTimeLabel = (language: string) => RESPONSE_TIME_LABELS[language] ?? RESPONSE_TIME_LABELS.it;

export const getWhatsAppRedirectPath = ({
  service,
  language,
  intent = "message",
}: {
  service: string;
  language: string;
  intent?: QuickContactIntent;
}) => {
  const params = new URLSearchParams({
    service,
    lang: language,
    intent,
  });

  return `/api/contact/whatsapp?${params.toString()}`;
};
