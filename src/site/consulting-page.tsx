import { Code2, Cpu, FileText, Layers, Mail, Server, ShieldCheck, Users, Zap } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "./animations";
import { FormFeedback, FormSuccessPanel, useWeb3Form } from "./forms";
import { useSiteI18n } from "./i18n-context";
import { ServiceGrowthSections } from "./service-growth-sections";

export default function ConsultingPage() {
  const { t } = useSiteI18n();
  const consultingForm = useWeb3Form("consulting");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-16 px-4 sm:px-6 md:pt-40 md:pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="text-center mb-24 md:mb-32">
          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 md:mb-10 tracking-tighter leading-[0.9]">
            {t("consulting.heroTitle1")} <br />
            <span className="text-emerald-500">{t("consulting.heroTitle2")}</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t("consulting.heroDesc")}
          </motion.p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mb-24 md:mb-40">
          {[
            { id: "audit", icon: <ShieldCheck size={48} />, title: t("consulting.serv1Title"), desc: t("consulting.serv1Desc") },
            { id: "embedded", icon: <Cpu size={48} />, title: t("consulting.serv2Title"), desc: t("consulting.serv2Desc") },
            { id: "performance", icon: <Zap size={48} />, title: t("consulting.serv3Title"), desc: t("consulting.serv3Desc") },
            { id: "distributed", icon: <Layers size={48} />, title: t("consulting.serv4Title"), desc: t("consulting.serv4Desc") },
            { id: "system-programming", icon: <Code2 size={48} />, title: t("consulting.serv5Title"), desc: t("consulting.serv5Desc") },
            { id: "cloud", icon: <Server size={48} />, title: t("consulting.serv6Title"), desc: t("consulting.serv6Desc") },
          ].map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="glass p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border-white/5 hover:border-emerald-500/30 transition-all group relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <div className="text-emerald-500 mb-10 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">{service.title}</h3>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <ServiceGrowthSections service="consulting" accent="emerald" />

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-emerald-500/30 rounded-tl-[4rem] pointer-events-none hidden md:block" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-2 border-b-2 border-blue-500/30 rounded-br-[4rem] pointer-events-none hidden md:block" />

          <div className="glass p-6 sm:p-10 md:p-16 rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] border-white/5 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] -mr-48 -mt-48 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] -ml-48 -mb-48 animate-pulse" />

            <div className="relative z-10">
              <div className="flex flex-col items-center mb-12 md:mb-16">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-20 animate-pulse" />
                  <div className="w-24 h-24 bg-slate-900 border border-white/10 rounded-[2rem] flex items-center justify-center text-emerald-400 shadow-2xl relative z-10">
                    <ShieldCheck size={48} />
                  </div>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-center tracking-tighter">{t("consulting.contactTitle")}</h2>
                <p className="text-lg sm:text-xl text-slate-400 text-center max-w-2xl leading-relaxed">{t("consulting.contactDesc")}</p>
              </div>
              {consultingForm.submissionState.status === "success" ? (
                <FormSuccessPanel
                  accent="emerald"
                  title={consultingForm.messages.successTitle}
                  description={consultingForm.messages.successDescription}
                  actionLabel={consultingForm.messages.sendAnother}
                  onReset={consultingForm.resetSubmission}
                />
              ) : (
                <form className="space-y-8 max-w-3xl mx-auto" onSubmit={consultingForm.handleSubmit}>
                  <input type="hidden" name="form_type" value="consulting" />
                  <input type="hidden" name="page" value="consulenza-it" />
                  <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-300 ml-2 flex items-center gap-2">
                        <Users size={16} className="text-emerald-400" /> {t("consulting.formName")}
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        minLength={2}
                        autoComplete="name"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 focus:border-emerald-500 outline-none transition-all text-base sm:text-lg hover:bg-white/10"
                        placeholder={t("consulting.formNamePlaceholder")}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-300 ml-2 flex items-center gap-2">
                        <Mail size={16} className="text-emerald-400" /> {t("consulting.formEmail")}
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 focus:border-emerald-500 outline-none transition-all text-base sm:text-lg hover:bg-white/10"
                        placeholder={t("consulting.formEmailPlaceholder")}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-300 ml-2 flex items-center gap-2">
                      <FileText size={16} className="text-emerald-400" /> {t("consulting.formMessage")}
                    </label>
                    <textarea
                      name="message"
                      required
                      minLength={10}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 focus:border-emerald-500 outline-none transition-all text-base sm:text-lg min-h-[150px] hover:bg-white/10"
                      placeholder={t("consulting.formMessagePlaceholder")}
                    />
                  </div>
                  <FormFeedback state={consultingForm.submissionState} accent="emerald" />
                  <button
                    type="submit"
                    disabled={consultingForm.submissionState.status === "submitting"}
                    className="btn-glow-blue w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-5 sm:py-6 rounded-2xl font-black text-lg sm:text-xl transition-all duration-500 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {consultingForm.submissionState.status === "submitting" ? consultingForm.messages.sending : t("consulting.formBtn")}
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
