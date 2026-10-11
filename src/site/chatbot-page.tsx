import { ArrowRight, CheckCircle2, MessageSquare, PhoneCall, Bot, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, scaleUp, staggerContainer } from "./animations";
import { useSiteI18n } from "./i18n-context";
import { getPathFromPage } from "../seo";
import { ServiceGrowthSections } from "./service-growth-sections";

export default function ChatbotPage() {
  const { lang, t } = useSiteI18n();
  const homeUrl = getPathFromPage("home", lang);

  const capabilities = [
    { id: "cap1", title: t("chatbotPage.buildItem1"), icon: <MessageSquare size={24} /> },
    { id: "cap2", title: t("chatbotPage.buildItem2"), icon: <PhoneCall size={24} /> },
    { id: "cap3", title: t("chatbotPage.buildItem3"), icon: <Bot size={24} /> },
    { id: "cap4", title: t("chatbotPage.buildItem4"), icon: <Calendar size={24} /> },
  ];

  const useCases = [
    { id: "uc1", title: t("chatbotPage.useCase1Title"), desc: t("chatbotPage.useCase1Desc") },
    { id: "uc2", title: t("chatbotPage.useCase2Title"), desc: t("chatbotPage.useCase2Desc") },
    { id: "uc3", title: t("chatbotPage.useCase3Title"), desc: t("chatbotPage.useCase3Desc") },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-16 px-4 sm:px-6 md:pt-40 md:pb-20">
      <div className="max-w-7xl mx-auto">

        {/* HERO SECTION */}
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl mb-24 md:mb-32">
          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 md:mb-10 tracking-tighter leading-[0.9]">
            {t("chatbotPage.heroTitle1")} <br />
            <span className="text-blue-500">{t("chatbotPage.heroTitle2")}</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl text-slate-400 leading-relaxed mb-8 md:mb-12">
            {t("chatbotPage.heroDesc")}
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a
              href={`${homeUrl}#home-form`}
              className="btn-glow-blue inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-full font-bold shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {t("ui.chatbotRequest")} <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* PROBLEM & SOLUTION SECTION */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-24 md:mb-40 items-center">
          <div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black mb-8 leading-tight text-white">
              {t("chatbotPage.problemTitle")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-400 leading-relaxed mb-8">
              {t("chatbotPage.problemDesc")}
            </motion.p>
          </div>
          <motion.div variants={scaleUp} className="relative">
            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="relative glass p-8 md:p-12 rounded-[2rem] border-white/10 bg-slate-900/40">
              <h3 className="text-2xl font-bold mb-6 text-white">{t("chatbotPage.buildTitle")}</h3>
              <p className="text-slate-400 mb-8">{t("chatbotPage.buildDesc")}</p>
              <div className="space-y-4">
                {capabilities.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center group">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                      {item.icon}
                    </div>
                    <span className="text-base font-semibold text-slate-200">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* USE CASES SECTION */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-24 md:mb-40">
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-white">{t("chatbotPage.useCasesTitle")}</h2>
            <p className="text-slate-400 text-lg sm:text-xl">
              {t("ui.chatbotExamples")}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {useCases.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="glass p-8 md:p-10 rounded-3xl border-white/5 hover:border-blue-500/30 transition-all group relative overflow-hidden bg-slate-900/30"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="mb-6 p-3 bg-blue-500/10 rounded-xl w-fit text-blue-400 group-hover:scale-115 transition-transform duration-300">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-base text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <ServiceGrowthSections service="chatbot" accent="blue" />

        {/* BOTTOM CTA */}
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-blue-500/30 rounded-tl-[4rem] pointer-events-none hidden md:block" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-2 border-b-2 border-emerald-500/30 rounded-br-[4rem] pointer-events-none hidden md:block" />

          <div className="glass p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem] border-white/5 relative overflow-hidden shadow-2xl bg-slate-950/40 text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 blur-[120px] -ml-48 -mb-48" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-white">{t("chatbotPage.ctaTitle")}</h2>
              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10">{t("chatbotPage.ctaDesc")}</p>
              <a
                href={`${homeUrl}#home-form`}
                className="btn-glow-blue inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-10 py-5 rounded-full font-black text-lg shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                {t("ui.chatbotContact")} <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
