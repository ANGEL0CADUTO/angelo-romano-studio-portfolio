import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useSiteI18n } from "./i18n-context";


export type SubmissionState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

const getFormFeedbackMessages = (language: string) => {
  if (language.startsWith("en")) {
    return {
      sending: "Sending...",
      success: "Message sent correctly. I will get back to you soon.",
      successTitle: "Form sent successfully",
      successDescription: "Your request has been sent. I will review it and reply as soon as possible.",
      sendAnother: "Send another request",
      error: "Unable to send the message right now. Please try again in a moment.",
    };
  }

  if (language.startsWith("de")) {
    return {
      sending: "Wird gesendet...",
      success: "Nachricht korrekt gesendet. Ich melde mich so bald wie moglich bei dir.",
      successTitle: "Formular erfolgreich gesendet",
      successDescription: "Deine Anfrage wurde gesendet. Ich werde sie prufen und dir so schnell wie moglich antworten.",
      sendAnother: "Weitere Anfrage senden",
      error: "Die Nachricht kann im Moment nicht gesendet werden. Bitte versuche es gleich erneut.",
    };
  }

  if (language.startsWith("fr")) {
    return {
      sending: "Envoi en cours...",
      success: "Message envoye correctement. Je te recontacterai des que possible.",
      successTitle: "Formulaire envoye avec succes",
      successDescription: "Ta demande a bien ete envoyee. Je vais l examiner et te repondre au plus vite.",
      sendAnother: "Envoyer une autre demande",
      error: "Impossible d envoyer le message pour le moment. Reessaie dans un instant.",
    };
  }

  if (language.startsWith("es")) {
    return {
      sending: "Enviando...",
      success: "Mensaje enviado correctamente. Te respondere lo antes posible.",
      successTitle: "Formulario enviado correctamente",
      successDescription: "Tu solicitud ha sido enviada. La revisare y te respondere lo antes posible.",
      sendAnother: "Enviar otra solicitud",
      error: "No se pudo enviar el mensaje en este momento. Intentalo de nuevo en breve.",
    };
  }

  return {
    sending: "Invio in corso...",
    success: "Messaggio inviato correttamente. Ti ricontattero al piu presto.",
    successTitle: "Form inviato correttamente",
    successDescription: "La tua richiesta e stata inviata. La esaminero e ti rispondero il prima possibile.",
    sendAnother: "Invia un'altra richiesta",
    error: "Non sono riuscito a inviare il messaggio ora. Riprova tra poco.",
  };
};

const getLanguageLabel = (language: string) => {
  if (language.startsWith("en")) return "English";
  if (language.startsWith("de")) return "Deutsch";
  if (language.startsWith("fr")) return "Francais";
  if (language.startsWith("es")) return "Espanol";
  return "Italiano";
};

const getLocalizedFormSubject = (formType: "home" | "webdev" | "consulting", language: string) => {
  const subjects = {
    home: {
      it: "Richiesta contatto sito - Home",
      en: "Website contact request - Home",
      de: "Kontaktanfrage Website - Startseite",
      fr: "Demande de contact site web - Accueil",
      es: "Solicitud de contacto web - Inicio",
    },
    webdev: {
      it: "Richiesta sviluppo siti web",
      en: "Web development request",
      de: "Anfrage Webentwicklung",
      fr: "Demande de developpement web",
      es: "Solicitud de desarrollo web",
    },
    consulting: {
      it: "Richiesta consulenza IT",
      en: "IT consulting request",
      de: "Anfrage IT-Beratung",
      fr: "Demande de conseil IT",
      es: "Solicitud de consultoria IT",
    },
  } as const;

  if (language.startsWith("en")) return subjects[formType].en;
  if (language.startsWith("de")) return subjects[formType].de;
  if (language.startsWith("fr")) return subjects[formType].fr;
  if (language.startsWith("es")) return subjects[formType].es;
  return subjects[formType].it;
};

export const useWeb3Form = (formType: "home" | "webdev" | "consulting") => {
  const { lang } = useSiteI18n();
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    status: "idle",
    message: "",
  });
  const messages = getFormFeedbackMessages(lang);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionState({ status: "error", message: "Demo: message delivery is disabled. No information is transmitted." });
  };

  return {
    submissionState,
    handleSubmit,
    resetSubmission: () =>
      setSubmissionState({
        status: "idle",
        message: "",
      }),
    messages,
  };
};

export const FormFeedback = ({ state, accent }: { state: SubmissionState; accent: "blue" | "emerald" }) => {
  if (state.status === "idle" || !state.message) {
    return null;
  }

  const toneClass =
    state.status === "success"
      ? accent === "blue"
        ? "border-blue-500/30 bg-blue-500/10 text-blue-200"
        : "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
      : "border-red-500/30 bg-red-500/10 text-red-200";

  return (
    <div aria-live="polite" className={`rounded-2xl border px-5 py-4 text-sm font-medium ${toneClass}`}>
      {state.message}
    </div>
  );
};

export const FormSuccessPanel = ({
  accent,
  title,
  description,
  actionLabel,
  onReset,
}: {
  accent: "blue" | "emerald";
  title: string;
  description: string;
  actionLabel: string;
  onReset: () => void;
}) => {
  const accentClasses =
    accent === "blue"
      ? "border-blue-500/20 bg-blue-500/10 text-blue-400"
      : "border-emerald-500/20 bg-emerald-500/10 text-emerald-400";

  return (
    <div className="max-w-3xl mx-auto">
      <div className="glass rounded-[2.5rem] border-white/10 p-8 md:p-12 text-center shadow-2xl">
        <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[1.75rem] border ${accentClasses}`}>
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl md:text-4xl font-black mb-4">{title}</h3>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto">{description}</p>
        <button
          type="button"
          onClick={onReset}
          className="btn-glow-white glass text-white px-8 py-4 rounded-full font-bold text-base"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
};
