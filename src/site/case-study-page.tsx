import { normalizeLanguage } from "../i18n";
import caseLabels from "../locales/case-labels.json";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, MessageCircle, Target, TrendingUp, Wrench } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import type { CaseStudy } from "../case-studies";
import { getCaseStudyCopy } from "../case-studies";
import { getWhatsAppRedirectPath } from "../contact";
import { getPathFromPage } from "../seo";
import { fadeInUp, staggerContainer } from "./animations";
import { useSiteI18n } from "./i18n-context";

const getLabels = (language: string) => caseLabels[normalizeLanguage(language)];

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  const { lang, t } = useSiteI18n();
  const labels = getLabels(lang);
  const copy = getCaseStudyCopy(study, lang);
  const projectsUrl = getPathFromPage("projects", lang);
  const homeUrl = getPathFromPage("home", lang);
  const whatsappUrl = getWhatsAppRedirectPath({ service: "webdev", language: lang });

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-4 pb-16 pt-32 sm:px-6 md:pb-20 md:pt-40"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="mb-14">
          <motion.a
            variants={fadeInUp}
            href={projectsUrl}
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft size={17} />
            {labels.back}
          </motion.a>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-center">
            <motion.div variants={fadeInUp}>
              <span className="text-sm font-mono uppercase tracking-widest text-blue-400">{labels.caseStudy}</span>
              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.95] text-white sm:text-5xl md:text-7xl">
                {copy.title}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-400 sm:text-xl">{copy.summary}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={study.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {labels.openProject}
                  <ExternalLink size={18} />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-emerald-500 px-6 py-3 text-sm font-black text-slate-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle size={18} />
                  {labels.whatsapp}
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/40 shadow-2xl">
                <Image
                  src={study.image}
                  alt={`${labels.preview} ${study.client}`}
                  width={960}
                  height={680}
                  priority
                  quality={75}
                  className="h-auto w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          <motion.section variants={fadeInUp} className="glass rounded-3xl border-white/5 bg-slate-900/30 p-7 md:p-9">
            <Target className="text-blue-400" size={30} />
            <h2 className="mt-5 text-3xl font-black text-white">{labels.problem}</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400">{copy.problem}</p>
          </motion.section>

          <motion.section variants={fadeInUp} className="glass rounded-3xl border-white/5 bg-slate-900/30 p-7 md:p-9">
            <Wrench className="text-emerald-400" size={30} />
            <h2 className="mt-5 text-3xl font-black text-white">{labels.solution}</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400">{copy.solution}</p>
          </motion.section>

          <motion.section variants={fadeInUp} className="glass rounded-3xl border-white/5 bg-slate-900/30 p-7 md:p-9">
            <CheckCircle2 className="text-blue-400" size={30} />
            <h2 className="mt-5 text-3xl font-black text-white">{labels.stack}</h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {copy.stack.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm font-bold text-slate-300">
                  <CheckCircle2 className="shrink-0 text-emerald-400" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section variants={fadeInUp} className="glass rounded-3xl border-white/5 bg-slate-900/30 p-7 md:p-9">
            <TrendingUp className="text-emerald-400" size={30} />
            <h2 className="mt-5 text-3xl font-black text-white">{labels.result}</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400">{copy.result}</p>
          </motion.section>
        </motion.div>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 md:p-10"
        >
          <h2 className="text-3xl font-black text-white">{labels.takeaways}</h2>
          <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
            {copy.takeaways.map((item) => (
              <div key={item} className="rounded-3xl border border-white/5 bg-slate-950/30 p-6">
                <CheckCircle2 className="text-blue-400" size={20} />
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <nav aria-label={labels.related} className="mt-14 rounded-3xl border border-white/10 bg-slate-950/35 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white">{labels.related}</h2>
          <a href={getPathFromPage("webdev", lang)} className="mt-4 inline-flex min-h-12 items-center gap-3 rounded-lg py-3 text-slate-200 underline decoration-white/30 underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">
            {t("nav.webdev")}<ArrowRight size={18} aria-hidden="true" />
          </a>
        </nav>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 rounded-[2rem] border border-white/10 bg-blue-500/10 p-8 md:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black text-white">{labels.ctaTitle}</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">{copy.cta} {labels.ctaDesc}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-emerald-500 px-6 py-3 text-sm font-black text-slate-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle size={18} />
                {labels.whatsapp}
              </a>
              <a
                href={`${homeUrl}#home-form`}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-black text-white transition-colors hover:bg-white/[0.1]"
              >
                {labels.form}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.article>
  );
}
