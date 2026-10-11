import { getServiceGrowthCopy, type ServiceId } from "../service-growth";
import { ArrowRight, CheckCircle2, ClipboardList, Clock3, HelpCircle, MessageCircle, PackageCheck, ShieldCheck, Target } from "lucide-react";
import { motion } from "motion/react";
import { getContactServiceFromPage, getResponseTimeLabel, getWhatsAppRedirectPath } from "../contact";
import { CASE_STUDIES, getCaseStudyCopy } from "../case-studies";
import { getCaseStudyPath, getPathFromPage, type PageId } from "../seo";
import { fadeInUp, staggerContainer } from "./animations";
import { useSiteI18n } from "./i18n-context";

const RELATED_SERVICES: Record<ServiceId, ServiceId[]> = {
  webdev: ["webapp", "consulting"],
  webapp: ["automations", "consulting"],
  automations: ["webapp", "chatbot"],
  chatbot: ["automations", "webapp"],
  scripting: ["automations", "consulting"],
  consulting: ["scripting", "webapp"],
};

export const ServiceGrowthSections = ({ service, accent = "blue" }: { service: ServiceId; accent?: "blue" | "emerald" }) => {
  const { lang, t } = useSiteI18n();
  const copy = getServiceGrowthCopy(service, lang);
  const processNote = t("hub.metodoNote");
  const homeUrl = getPathFromPage("home", lang);
  const whatsappUrl = getWhatsAppRedirectPath({
    service: getContactServiceFromPage(service as PageId),
    language: lang,
  });
  const responseTimeLabel = getResponseTimeLabel(lang);
  const accentText = accent === "emerald" ? "text-emerald-400" : "text-blue-400";
  const accentBorder = accent === "emerald" ? "hover:border-emerald-500/30" : "hover:border-blue-500/30";
  const accentBg = accent === "emerald" ? "bg-emerald-500/10" : "bg-blue-500/10";
  const accentLine =
    accent === "emerald"
      ? "bg-gradient-to-b from-emerald-400/70 via-emerald-400/30 to-transparent md:bg-gradient-to-r"
      : "bg-gradient-to-b from-blue-400/70 via-blue-400/30 to-transparent md:bg-gradient-to-r";
  const accentNode =
    accent === "emerald"
      ? "border-emerald-400/35 bg-emerald-500/10 text-emerald-200 shadow-[0_0_28px_rgba(16,185,129,0.16)]"
      : "border-blue-400/35 bg-blue-500/10 text-blue-200 shadow-[0_0_28px_rgba(59,130,246,0.16)]";

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-24 md:mb-40"
    >
      <motion.div variants={fadeInUp} className="mb-12 max-w-4xl">
        <span className={`text-sm font-mono uppercase tracking-widest ${accentText}`}>{copy.eyebrow}</span>
        <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">{copy.title}</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-400">
          {copy.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <motion.div variants={fadeInUp} className="glass rounded-3xl border-white/5 bg-slate-900/30 p-7">
          <Target className={accentText} size={28} />
          <h3 className="mt-5 text-2xl font-bold text-white">{copy.targetTitle}</h3>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
            {copy.targets.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className={`mt-0.5 shrink-0 ${accentText}`} size={17} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeInUp} className="glass rounded-3xl border-white/5 bg-slate-900/30 p-7">
          <PackageCheck className={accentText} size={28} />
          <h3 className="mt-5 text-2xl font-bold text-white">{copy.deliverablesTitle}</h3>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
            {copy.deliverables.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className={`mt-0.5 shrink-0 ${accentText}`} size={17} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeInUp} className="glass rounded-3xl border-white/5 bg-slate-900/30 p-7">
          <ShieldCheck className={accentText} size={28} />
          <h3 className="mt-5 text-2xl font-bold text-white">{copy.proofTitle}</h3>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
            {copy.proof.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className={`mt-0.5 shrink-0 ${accentText}`} size={17} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div variants={fadeInUp} className="mt-12 rounded-[2rem] border border-white/5 bg-slate-950/35 p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <ClipboardList className={accentText} size={30} />
            <h3 className="mt-5 text-2xl font-bold text-white">{copy.processTitle}</h3>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-500">{processNote}</p>
        </div>
        <div className="relative mt-9">
          <div className={`absolute bottom-8 left-5 top-8 w-px md:bottom-auto md:left-8 md:right-8 md:top-6 md:h-px md:w-auto ${accentLine}`} />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {copy.process.map((step, index) => (
              <div key={step.title} className="relative flex gap-4 md:block">
                <div className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border text-sm font-black ${accentNode}`}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-5 md:mt-5">
                  <h4 className="text-lg font-bold text-white">{step.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-16">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <PackageCheck className={accentText} size={30} />
            <h3 className="mt-5 text-3xl font-black text-white">{copy.offersTitle}</h3>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-500">{copy.offersNote}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {copy.offers.map((offer) => (
            <article key={offer.name} className={`glass rounded-3xl border-white/5 bg-slate-950/30 p-7 transition-all ${accentBorder}`}>
              <h4 className="text-2xl font-bold text-white">{offer.name}</h4>
              <p className={`mt-3 font-mono text-sm font-bold ${accentText}`}>{offer.fit}</p>
              <p className="mt-5 text-sm leading-relaxed text-slate-400">{offer.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {offer.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className={`mt-0.5 shrink-0 ${accentText}`} size={15} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
        {copy.faqs.map((faq) => (
          <details key={faq.question} className="group rounded-3xl border border-white/5 bg-white/[0.03] p-6">
            <summary className="flex cursor-pointer list-none items-start gap-4 text-lg font-bold text-white">
              <HelpCircle className={`mt-0.5 shrink-0 ${accentText}`} size={22} />
              <span>{faq.question}</span>
            </summary>
            <p className="mt-4 pl-10 text-sm leading-relaxed text-slate-400">{faq.answer}</p>
          </details>
        ))}
      </motion.div>

      <nav aria-labelledby={`related-${service}`} className="mt-16 rounded-3xl border border-white/10 bg-slate-950/35 p-6 md:p-8">
        <h3 id={`related-${service}`} className="text-2xl font-bold text-white">{t("ui.relatedTitle")}</h3>
        <ul className="mt-5 flex flex-wrap gap-3">
          {RELATED_SERVICES[service].map((related) => (
            <li key={related}>
              <a href={getPathFromPage(related, lang)} className="inline-flex min-h-12 items-center gap-2 rounded-2xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">
                {t(`nav.${related}`)}<ArrowRight size={16} aria-hidden="true" />
              </a>
            </li>
          ))}
          <li>
            <a href={getPathFromPage("projects", lang)} className="inline-flex min-h-12 items-center gap-2 rounded-2xl border border-white/15 px-4 py-3 text-sm font-bold text-slate-200 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">
              {t("nav.projects")}<ArrowRight size={16} aria-hidden="true" />
            </a>
          </li>
        </ul>
        {service === "webdev" && (
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {CASE_STUDIES.map((study) => (
              <li key={study.slug}>
                <a href={getCaseStudyPath(study.slug, lang)} className="inline-flex min-h-12 items-center gap-2 rounded-lg py-2 text-sm leading-relaxed text-slate-200 underline decoration-white/30 underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">
                  {getCaseStudyCopy(study, lang).title}<ArrowRight size={16} className="shrink-0" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <motion.div variants={fadeInUp} className={`mt-16 rounded-[2rem] border border-white/10 ${accentBg} p-8 md:p-10`}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-black text-white">{copy.ctaTitle}</h3>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">{copy.ctaDescription}</p>
            <p className="mt-4 flex items-center gap-2 text-sm font-bold text-slate-400">
              <Clock3 size={16} />
              {responseTimeLabel}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-emerald-500 px-6 py-3 text-sm font-black text-slate-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle size={18} />
              {copy.primaryCta}
            </a>
            <a
              href={`${homeUrl}#home-form`}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-black text-white transition-colors hover:bg-white/[0.1]"
            >
              {copy.secondaryCta}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
