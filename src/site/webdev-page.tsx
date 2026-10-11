import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  FileText,
  Globe,
  Mail,
  Sparkles,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { fadeInUp, scaleUp, staggerContainer } from "./animations";
import { FormFeedback, FormSuccessPanel, useWeb3Form } from "./forms";
import { useSiteI18n } from "./i18n-context";
import { ServiceGrowthSections } from "./service-growth-sections";

export default function WebDevPage() {
  const { t } = useSiteI18n();
  const webDevForm = useWeb3Form("webdev");
  const portfolio = [
    {
      title: "Nardi Arte",
      category: t("ui.categoryArt"),
      url: "https://www.nardiarte.it/",
      img: "/demo/scene-4.svg",
      color: "from-fuchsia-500/20 to-amber-500/20",
    },
    {
      title: "Carlos Giordano",
      category: t("ui.categoryGallery"),
      url: "https://www.carlosgiordano.net/",
      img: "/demo/scene-3.svg",
      color: "from-emerald-500/20 to-rose-500/20",
    },
    {
      title: "Gioielleria Guerriero De Luca",
      category: t("ui.categoryJewellery"),
      url: "https://example.com",
      img: "/demo/scene-3.svg",
      color: "from-yellow-500/20 to-stone-500/20",
    },
    {
      title: "SIAPS",
      category: t("ui.categoryAssociation"),
      url: "https://example.com/",
      img: "/demo/scene-2.svg",
      color: "from-blue-500/20 to-indigo-500/20",
    },
    {
      title: "Poliambulatorio Prof Gemelli",
      category: t("ui.categoryClinic"),
      url: "https://www.poliambulatorioprofgemelli.it/",
      img: "/demo/scene-4.svg",
      color: "from-cyan-500/20 to-emerald-500/20",
    },
    {
      title: "Prof. Gemelli",
      category: t("ui.categoryDoctor"),
      url: "https://www.profgemelli.it/",
      img: "/demo/scene-4.svg",
      color: "from-sky-500/20 to-blue-500/20",
    },
    {
      title: "Studio H Energia",
      category: t("ui.categoryEnergy"),
      url: "https://example.com",
      img: "/demo/scene-3.svg",
      color: "from-teal-500/20 to-blue-500/20",
    },
    {
      title: "Paolo Quiri",
      category: t("ui.categoryServices"),
      url: "https://www.paoloquiri.it/",
      img: "/demo/scene-3.svg",
      color: "from-zinc-500/20 to-orange-500/20",
    },
    {
      title: "Domus Juliae",
      category: t("ui.categoryHospitality"),
      url: "https://example.com",
      img: "/demo/scene-1.svg",
      color: "from-amber-500/20 to-orange-500/20",
    },
    {
      title: "Ozonoterapia Sepia",
      category: t("ui.categoryHealth"),
      url: "https://example.com",
      img: "/demo/scene-3.svg",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Ristorante Essenza",
      category: t("ui.categoryFood"),
      url: "https://example.com",
      img: "/demo/scene-1.svg",
      color: "from-rose-500/20 to-red-500/20",
    },
  ];

  const trustedBadges = [
    { label: "UX", img: "/demo/scene-3.svg" },
    { label: "SEO", img: "/demo/scene-3.svg" },
    { label: "UI", img: "/demo/scene-2.svg" },
    { label: "DX", img: "/demo/scene-2.svg" },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-16 px-4 sm:px-6 md:pt-40 md:pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl mb-24 md:mb-32">
          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 md:mb-10 tracking-tighter leading-[0.9]">
            {t("webdev.heroTitle1")} <br />
            <span className="text-blue-500">{t("webdev.heroTitle2")}</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl text-slate-400 leading-relaxed mb-8 md:mb-12">
            {t("webdev.heroDesc")}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <div className="flex -space-x-4">
              {trustedBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-bg-dark bg-slate-900 overflow-hidden shadow-lg"
                >
                  <Image
                    src={badge.img}
                    alt=""
                    fill
                    sizes="48px"
                    quality={68}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-slate-400 font-medium">{t("webdev.trustedBy")}</p>
          </motion.div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-24 md:mb-40">
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black mb-4">{t("webdev.portfolioTitle")}</h2>
              <p className="text-slate-400 text-lg sm:text-xl">{t("ui.portfolioIntro")}</p>
            </div>
            <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">{t("ui.exploreProjects")}</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {portfolio.map((item) => (
              <motion.a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                whileHover={{ y: -15 }}
                className={`group relative glass rounded-[2rem] overflow-hidden border-white/5 bg-gradient-to-br ${item.color} p-4 shadow-2xl`}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={item.img}
                    alt={`${t("ui.projectPreview")} ${item.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={68}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2">
                      {t("webdev.visitSite")} <ExternalLink size={18} />
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 block">{item.category}</span>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{t("ui.portfolioCard")}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-24 md:mb-40 items-center">
          <div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black mb-8 md:mb-10 leading-tight">
              {t("webdev.whyMeTitle")}
            </motion.h2>
            <div className="space-y-6 md:space-y-8">
              {[
                { id: "speed", title: t("webdev.whyMe1Title"), desc: t("webdev.whyMe1Desc") },
                { id: "trust", title: t("webdev.whyMe2Title"), desc: t("webdev.whyMe2Desc") },
                { id: "seo", title: t("webdev.whyMe3Title"), desc: t("webdev.whyMe3Desc") },
              ].map((item) => (
                <motion.div variants={fadeInUp} key={item.id} className="flex gap-6 group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-base md:text-lg text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div variants={scaleUp} className="relative">
            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="relative glass p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-slate-500 font-mono text-xs">{t("ui.plannedChecks")}</span>
              </div>
              <div className="space-y-6">
                <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1.5 }} className="h-full bg-emerald-500" />
                </div>
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-slate-400">{t("ui.performanceCheck")}</span>
                  <span className="text-emerald-400">{t("ui.toMeasure")}</span>
                </div>
                <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1.5, delay: 0.2 }} className="h-full bg-blue-500" />
                </div>
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-slate-400">{t("ui.seoCheck")}</span>
                  <span className="text-blue-400">{t("ui.toMeasure")}</span>
                </div>
                <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1.5, delay: 0.4 }} className="h-full bg-purple-500" />
                </div>
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-slate-400">{t("ui.securityCheck")}</span>
                  <span className="text-purple-400">{t("ui.toVerify")}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <ServiceGrowthSections service="webdev" accent="blue" />

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-blue-500/30 rounded-tl-[4rem] pointer-events-none hidden md:block" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-2 border-b-2 border-emerald-500/30 rounded-br-[4rem] pointer-events-none hidden md:block" />

          <div className="glass p-6 sm:p-10 md:p-16 rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] border-white/5 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] -mr-48 -mt-48 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 blur-[120px] -ml-48 -mb-48 animate-pulse" />

            <div className="relative z-10">
              <div className="flex flex-col items-center mb-12 md:mb-16">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 animate-pulse" />
                  <div className="w-24 h-24 bg-slate-900 border border-white/10 rounded-[2rem] flex items-center justify-center text-blue-400 shadow-2xl relative z-10">
                    <Sparkles size={48} />
                  </div>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-center tracking-tighter">{t("webdev.contactTitle")}</h2>
                <p className="text-lg sm:text-xl text-slate-400 text-center max-w-2xl leading-relaxed">{t("webdev.contactDesc")}</p>
              </div>

              {webDevForm.submissionState.status === "success" ? (
                <FormSuccessPanel
                  accent="blue"
                  title={webDevForm.messages.successTitle}
                  description={webDevForm.messages.successDescription}
                  actionLabel={webDevForm.messages.sendAnother}
                  onReset={webDevForm.resetSubmission}
                />
              ) : (
                <form className="space-y-8 md:space-y-10 max-w-3xl mx-auto" onSubmit={webDevForm.handleSubmit}>
                  <input type="hidden" name="form_type" value="webdev" />
                  <input type="hidden" name="page" value="sviluppo-siti-web" />
                  <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <div className="space-y-4">
                      <label className="text-xs font-black text-blue-400 uppercase tracking-widest ml-1">{t("webdev.formName")}</label>
                      <div className="relative group">
                        <Users size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                        <input
                          name="name"
                          type="text"
                          required
                          minLength={2}
                          autoComplete="name"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 sm:py-5 pl-14 pr-5 focus:border-blue-500/50 focus:bg-white/[0.06] outline-none transition-all text-base sm:text-lg hover:bg-white/[0.05]"
                          placeholder={t("webdev.formNamePlaceholder")}
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs font-black text-blue-400 uppercase tracking-widest ml-1">{t("webdev.formEmail")}</label>
                      <div className="relative group">
                        <Mail size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                        <input
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 sm:py-5 pl-14 pr-5 focus:border-blue-500/50 focus:bg-white/[0.06] outline-none transition-all text-base sm:text-lg hover:bg-white/[0.05]"
                          placeholder={t("webdev.formEmailPlaceholder")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-black text-blue-400 uppercase tracking-widest ml-1">{t("webdev.formService")}</label>
                    <div className="relative group">
                      <Globe size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                      <select
                        name="service"
                        required
                        defaultValue={t("webdev.opt1")}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 sm:py-5 pl-14 pr-12 focus:border-blue-500/50 focus:bg-white/[0.06] outline-none transition-all text-base sm:text-lg text-slate-100 appearance-none hover:bg-white/[0.05] [color-scheme:dark]"
                      >
                        <option className="bg-slate-950 text-slate-100">{t("webdev.opt1")}</option>
                        <option className="bg-slate-950 text-slate-100">{t("webdev.opt2")}</option>
                        <option className="bg-slate-950 text-slate-100">{t("webdev.opt3")}</option>
                        <option className="bg-slate-950 text-slate-100">{t("webdev.opt4")}</option>
                        <option className="bg-slate-950 text-slate-100">{t("webdev.opt5")}</option>
                        <option className="bg-slate-950 text-slate-100">{t("webdev.opt6")}</option>
                      </select>
                      <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 rotate-90 text-slate-500 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-black text-blue-400 uppercase tracking-widest ml-1">{t("webdev.formMessage")}</label>
                    <div className="relative group">
                      <FileText size={18} className="absolute left-5 top-6 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                      <textarea
                        name="message"
                        required
                        minLength={10}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 sm:py-5 pl-14 pr-5 focus:border-blue-500/50 focus:bg-white/[0.06] outline-none transition-all text-base sm:text-lg min-h-[180px] hover:bg-white/[0.05]"
                        placeholder={t("webdev.formMessagePlaceholder")}
                      />
                    </div>
                  </div>

                  <FormFeedback state={webDevForm.submissionState} accent="blue" />
                  <button
                    type="submit"
                    disabled={webDevForm.submissionState.status === "submitting"}
                    className="btn-glow-blue w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-5 sm:py-6 rounded-2xl font-black text-lg sm:text-xl transition-all duration-500 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {webDevForm.submissionState.status === "submitting" ? webDevForm.messages.sending : t("webdev.formBtn")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
