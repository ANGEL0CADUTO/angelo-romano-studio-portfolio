import { ArrowRight, FileText, Mail, ShieldCheck, Star, TrendingUp, Users, Zap, Code, Database, Phone, MessageSquare, Globe, Cpu, ArrowUpRight, Play, Terminal, AlertTriangle } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { getPathFromPage, type PageId } from "../seo";
import { fadeInUp, scaleUp, staggerContainer } from "./animations";
import { FormFeedback, FormSuccessPanel, useWeb3Form } from "./forms";
import { useSiteI18n } from "./i18n-context";

const clientReviews = [
  {
    name: "Paolo Q.",
    date: "26 feb 2026",
    dateTime: "2026-02-26",
    service: "Creazione Sito Web",
    text: "Ho richiesto il suo aiuto per creare un sito, ho trovato una persona competente, disponibile e soprattutto rispettosa. Ha cercato di guidarmi nel modo corretto nel mondo web. Consigliatissimo: veloce, concreto e mai fuori luogo.",
  },
  {
    name: "Giorgio M.",
    date: "07 mar 2026",
    dateTime: "2026-03-07",
    service: "Programmatore Informatico",
    text: "Sono molto soddisfatto delle competenze dimostrate nel risolvere problemi complessi di logica e backend. Se dovessi avere ancora bisogno, lo chiamerei volentieri.",
  },
  {
    name: "Agnese R.",
    date: "25 feb 2026",
    dateTime: "2026-02-25",
    service: "Supporto Tecnico",
    text: "Professionista molto capace e disponibile, mi ha trasmesso fin da subito fiducia e competenza. Molto consigliato.",
  },
  {
    name: "Maurizio Z.",
    date: "08 feb 2026",
    dateTime: "2026-02-08",
    service: "Assistenza da Remoto",
    text: "Soddisfatto per la disponibilità, cortesia e professionalità riscontrata nell'intervento effettuato da remoto per la soluzione di un problema tecnico.",
  },
  {
    name: "Marco C.",
    date: "31 gen 2026",
    dateTime: "2026-01-31",
    service: "Programmatore Informatico",
    text: "Se cerchi un professionista affidabile ed onesto lo hai trovato. In pochissimo tempo ha sistemato un problema che cercavo di risolvere da mesi. Anche dopo l'intervento si è tenuto disponibile in caso di bisogno.",
  },
  {
    name: "Antonella C.",
    date: "27 gen 2026",
    dateTime: "2026-01-27",
    service: "Consulenza Tecnica",
    text: "Professionista di gran competenza, professionalità e umanità. Paziente, accorto e scrupoloso, ne consiglio vivamente il supporto.",
  },
  {
    name: "Giuditta N.",
    date: "26 gen 2026",
    dateTime: "2026-01-26",
    service: "Consulenza Digitale",
    text: "Sono stata seguita da Angelo, che si è dimostrato fin da subito estremamente disponibile, competente ed empatico. Mi ha accompagnata passo dopo passo, con calma e chiarezza, e in breve tempo siamo riusciti a risolvere tutto.",
  },
  {
    name: "Davide P.",
    date: "25 gen 2026",
    dateTime: "2026-01-25",
    service: "Progetto Digitale",
    text: "Professionista eccezionale, serio e davvero umano. Gli ho chiesto un lavoro molto delicato e il risultato ha superato ogni aspettativa. È stato paziente, disponibile, attento ai dettagli e ha capito subito quanto fosse importante per me.",
  },
];

const ReviewStars = () => (
  <div className="flex items-center gap-1 text-yellow-300" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, index) => (
      <Star key={index} size={16} fill="currentColor" strokeWidth={0} />
    ))}
  </div>
);

export default function HomePage() {
  const { lang, t } = useSiteI18n();
  const homeForm = useWeb3Form("home");

  const homeUrl = getPathFromPage("home", lang);

  // Featured website projects shown on the home page.
  const featuredProjectsList = [
    {
      id: "domus",
      title: "Domus Juliae",
      tag: "Web Development",
      desc: t("ui.homeDomus"),
      img: "/demo/scene-1.svg",
      url: "https://example.com",
    },
    {
      id: "ozonoterapia",
      title: "Ozonoterapia Sepia",
      tag: "Web Development",
      desc: t("ui.homeClinic"),
      img: "/demo/scene-3.svg",
      url: "https://example.com",
    },
    {
      id: "ristorante",
      title: "Ristorante Essenza",
      tag: "Web Development",
      desc: t("ui.homeRestaurant"),
      img: "/demo/scene-1.svg",
      url: "https://example.com",
    },
    {
      id: "siaps",
      title: "SIAPS",
      tag: "Healthcare Website",
      desc: t("ui.homeSiaps"),
      img: "/demo/scene-2.svg",
      url: "https://example.com/",
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-16 px-4 sm:px-6 md:pt-40 md:pb-20 relative">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* HERO SECTION */}
        <motion.header variants={staggerContainer} initial="hidden" animate="visible" className="text-center mb-24 md:mb-40">
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-6 md:mb-8 border border-blue-500/20"
          >
            {t("hero.subtitle")}
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] mb-8 md:mb-10 tracking-tighter">
            {t("hero.title1")} <br />
            <span className="text-gradient-blue">{t("hero.title2")}</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            {t("hero.desc")}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a
              href={`${homeUrl}#home-form`}
              className="btn-glow-blue bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg flex items-center justify-center gap-3 group shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-500"
            >
              {t("hero.btnPrimary")} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`${homeUrl}#cosa-posso-costruire`}
              className="btn-glow-white glass text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg flex items-center justify-center"
            >
              {t("hero.btnSecondary")}
            </a>
          </motion.div>
        </motion.header>

        {/* STATS SECTION */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-24 md:mb-40"
        >
          {[
            { id: "projects", label: t("stats.projects"), value: "20+" },
            { id: "performance", label: t("stats.performance"), value: "100/100" },
            { id: "satisfaction", label: t("stats.satisfaction"), value: "100%" },
          ].map((stat) => (
            <motion.div key={stat.id} variants={fadeInUp} className="text-center min-w-[140px]">
              <div className="text-3xl sm:text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-sm font-mono text-blue-400 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* MOTORE DIGITALE SECTION */}
        <motion.section
          id="motore-digitale"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-24 md:mb-40"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl mb-12 md:mb-16 text-center md:text-left">
            <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">{t("ui.processEyebrow")}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 mb-5 text-white">{t("hub.engineTitle")}</h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              {t("hub.engineSubtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Card A - Attira Clienti */}
            <motion.div variants={fadeInUp} className="glass p-8 rounded-[2rem] border-white/5 bg-slate-900/30 flex flex-col justify-between hover:border-blue-500/25 transition-all">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-bold">{t("ui.phase1")}</span>
                <h3 className="text-2xl font-bold mt-2 mb-4 text-white">{t("hub.attiraTitle")}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{t("hub.attiraDesc")}</p>
              </div>

              {/* Website CSS Mockup */}
              <div className="w-full bg-slate-950/80 rounded-2xl border border-white/10 p-4 h-48 flex flex-col justify-between overflow-hidden shadow-inner select-none" aria-hidden="true">
                <div className="flex items-center gap-1.5 border-b border-white/5 pb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <div className="bg-white/5 text-[8px] font-mono px-3 py-0.5 rounded text-slate-500 ml-4 truncate w-40">angeloromanostudio.it</div>
                </div>
                <div className="flex-1 py-3 space-y-2">
                  <div className="h-4 bg-gradient-to-r from-blue-500/40 to-emerald-500/20 rounded w-3/4" />
                  <div className="h-2 bg-white/5 rounded w-full" />
                  <div className="h-2 bg-white/5 rounded w-5/6" />
                  <div className="flex gap-2 pt-2">
                    <div className="h-6 w-16 bg-blue-500/25 rounded-full" />
                    <div className="h-6 w-12 bg-white/5 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card B - Converti Richieste */}
            <motion.div variants={fadeInUp} className="glass p-8 rounded-[2rem] border-white/5 bg-slate-900/30 flex flex-col justify-between hover:border-emerald-500/25 transition-all">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">{t("ui.phase2")}</span>
                <h3 className="text-2xl font-bold mt-2 mb-4 text-white">{t("hub.convertiTitle")}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{t("hub.convertiDesc")}</p>
              </div>

              {/* Chat Flow CSS Mockup */}
              <div className="w-full bg-slate-950/80 rounded-2xl border border-white/10 p-4 h-48 flex flex-col justify-between overflow-hidden shadow-inner select-none" aria-hidden="true">
                <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <div className="text-[9px] font-mono text-slate-400 font-bold">{t("ui.chatAssistant")}</div>
                </div>
                <div className="flex-1 py-3 flex flex-col justify-end gap-2.5">
                  <div className="self-end bg-white/5 text-[9px] px-2.5 py-1.5 rounded-2xl rounded-tr-none text-slate-300 max-w-[80%] font-mono">{t("ui.chatQuestion")}</div>
                  <div className="self-start bg-blue-500/10 border border-blue-500/20 text-[9px] px-2.5 py-1.5 rounded-2xl rounded-tl-none text-blue-400 max-w-[80%] font-mono">{t("ui.chatAnswer")}</div>
                </div>
              </div>
            </motion.div>

            {/* Card C - Automatizza il Lavoro */}
            <motion.div variants={fadeInUp} className="glass p-8 rounded-[2rem] border-white/5 bg-slate-900/30 flex flex-col justify-between hover:border-purple-500/25 transition-all">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">{t("ui.phase3")}</span>
                <h3 className="text-2xl font-bold mt-2 mb-4 text-white">{t("hub.automatizzaTitle")}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">{t("hub.automatizzaDesc")}</p>
              </div>

              {/* Automation Flow CSS Mockup */}
              <div className="w-full bg-slate-950/80 rounded-2xl border border-white/10 p-4 h-48 flex flex-col justify-between overflow-hidden shadow-inner select-none" aria-hidden="true">
                <div className="flex-1 py-2 flex flex-col justify-center items-center gap-2">
                  <div className="flex justify-between items-center w-full px-2">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-1.5 text-[8px] font-mono text-slate-300 flex items-center gap-1">
                      <FileText size={10} className="text-blue-400" /> Lead Form
                    </div>
                    <div className="h-px bg-gradient-to-r from-blue-500 to-purple-500 flex-1 mx-2 relative">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 absolute top-1/2 -translate-y-1/2 left-0 animate-flowRight" />
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-1.5 text-[8px] font-mono text-blue-400 flex items-center gap-1">
                      <Cpu size={10} /> AI Logic
                    </div>
                    <div className="h-px bg-gradient-to-r from-purple-500 to-emerald-500 flex-1 mx-2 relative">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 absolute top-1/2 -translate-y-1/2 left-0 animate-flowRight" />
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-1.5 text-[8px] font-mono text-emerald-400 flex items-center gap-1">
                      <Database size={10} /> CRM Sync
                    </div>
                  </div>
                  <div className="text-[8px] font-mono text-slate-500 text-center mt-3 bg-white/5 rounded-full px-3 py-0.5 border border-white/5">{t("ui.workflowActive")}</div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* COSA POSSO COSTRUIRE PER TE SECTION */}
        <motion.section
          id="cosa-posso-costruire"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-24 md:mb-40"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl mb-12 md:mb-16 text-center md:text-left">
            <span className="text-sm font-mono text-emerald-400 uppercase tracking-widest">{t("ui.servicesEyebrow")}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 mb-5 text-white">{t("hub.buildTitle")}</h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              {t("hub.buildSubtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                id: "webdev",
                title: t("hub.sitiWebTitle"),
                desc: t("hub.sitiWebDesc"),
                icon: <Globe size={20} className="text-blue-400" />,
                link: getPathFromPage("webdev", lang),
                mockup: (
                  <div className="w-full bg-slate-950/60 rounded-xl p-2.5 h-16 flex flex-col justify-between border border-white/5" aria-hidden="true">
                    <div className="flex gap-1 items-center border-b border-white/5 pb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                      <div className="w-8 h-1 bg-white/5 rounded ml-2" />
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="w-full h-1.5 bg-blue-500/20 rounded" />
                      <div className="w-4 h-3 bg-blue-500/30 rounded" />
                    </div>
                  </div>
                )
              },
              {
                id: "webapp",
                title: t("hub.webAppTitle"),
                desc: t("hub.webAppDesc"),
                icon: <Database size={20} className="text-blue-400" />,
                link: getPathFromPage("webapp", lang),
                mockup: (
                  <div className="w-full bg-slate-950/60 rounded-xl p-2 h-16 flex items-center gap-1.5 border border-white/5" aria-hidden="true">
                    <div className="flex-1 grid grid-cols-2 gap-1 h-full">
                      <div className="bg-white/5 rounded p-1 flex flex-col justify-between">
                        <div className="w-1/2 h-1 bg-blue-500/40 rounded" />
                        <div className="w-3/4 h-2 bg-blue-500/20 rounded" />
                      </div>
                      <div className="bg-white/5 rounded p-1 flex flex-col justify-between">
                        <div className="w-1/2 h-1 bg-emerald-500/40 rounded" />
                        <div className="w-3/4 h-2 bg-emerald-500/20 rounded" />
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: "automations",
                title: t("hub.automazioniTitle"),
                desc: t("hub.automazioniDesc"),
                icon: <Cpu size={20} className="text-blue-400" />,
                link: getPathFromPage("automations", lang),
                mockup: (
                  <div className="w-full bg-slate-950/60 rounded-xl p-2.5 h-16 flex items-center justify-between border border-white/5" aria-hidden="true">
                    <div className="w-5 h-5 bg-white/5 rounded flex items-center justify-center text-[7px] text-slate-400 border border-white/5">WEB</div>
                    <div className="h-px bg-dashed border-t border-slate-600 flex-1 mx-2" />
                    <div className="w-5 h-5 bg-blue-500/10 rounded flex items-center justify-center text-[7px] text-blue-400 border border-blue-500/20">AI</div>
                    <div className="h-px bg-dashed border-t border-slate-600 flex-1 mx-2" />
                    <div className="w-5 h-5 bg-emerald-500/10 rounded flex items-center justify-center text-[7px] text-emerald-400 border border-emerald-500/20">CRM</div>
                  </div>
                )
              },
              {
                id: "chatbot-site",
                title: t("hub.chatbotTitle"),
                desc: t("hub.chatbotDesc"),
                icon: <MessageSquare size={20} className="text-blue-400" />,
                link: getPathFromPage("chatbot", lang),
                mockup: (
                  <div className="w-full bg-slate-950/60 rounded-xl p-2.5 h-16 flex items-center justify-between border border-white/5" aria-hidden="true">
                    <div className="flex gap-2 items-center">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-[10px]">🤖</div>
                      <div className="space-y-1">
                        <div className="w-16 h-1.5 bg-white/10 rounded" />
                        <div className="w-10 h-1 bg-white/5 rounded" />
                      </div>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                )
              },
              {
                id: "chatbot-wa",
                title: t("hub.whatsappTitle"),
                desc: t("hub.whatsappDesc"),
                icon: <MessageSquare size={20} className="text-blue-400" />,
                link: getPathFromPage("chatbot", lang),
                mockup: (
                  <div className="w-full bg-slate-950/60 rounded-xl p-2 h-16 flex flex-col justify-between border border-white/5" aria-hidden="true">
                    <div className="bg-emerald-600/15 border-b border-emerald-500/10 px-2 py-0.5 flex justify-between items-center">
                      <span className="text-[7px] font-mono text-emerald-400">WhatsApp Business</span>
                      <div className="w-1 h-1 rounded-full bg-emerald-500" />
                    </div>
                    <div className="p-1.5 self-start bg-slate-900 rounded-lg text-[6px] font-mono text-slate-300 border border-white/5">{t("ui.replySent")} </div>
                  </div>
                )
              },
              {
                id: "voice-ai",
                title: t("hub.vocaleTitle"),
                desc: t("hub.vocaleDesc"),
                icon: <Phone size={20} className="text-blue-400" />,
                link: getPathFromPage("chatbot", lang),
                mockup: (
                  <div className="w-full bg-slate-950/60 rounded-xl p-2.5 h-16 flex items-center justify-center gap-1 border border-white/5" aria-hidden="true">
                    <div className="h-6 w-0.5 bg-blue-500 rounded-full animate-voiceHeight" style={{ animationDelay: '0.1s' }} />
                    <div className="h-3 w-0.5 bg-blue-400 rounded-full animate-voiceHeight" style={{ animationDelay: '0.3s' }} />
                    <div className="h-8 w-0.5 bg-blue-600 rounded-full animate-voiceHeight" style={{ animationDelay: '0.2s' }} />
                    <div className="h-4 w-0.5 bg-blue-500 rounded-full animate-voiceHeight" style={{ animationDelay: '0.5s' }} />
                    <div className="h-7 w-0.5 bg-blue-400 rounded-full animate-voiceHeight" style={{ animationDelay: '0.4s' }} />
                    <div className="h-2 w-0.5 bg-slate-700 rounded-full" />
                  </div>
                )
              },
              {
                id: "scripting",
                title: t("hub.scriptingTitle"),
                desc: t("hub.scriptingDesc"),
                icon: <Terminal size={20} className="text-blue-400" />,
                link: getPathFromPage("scripting", lang),
                mockup: (
                  <div className="w-full bg-slate-950/60 rounded-xl p-2 h-16 flex flex-col border border-white/5 select-none" aria-hidden="true">
                    <div className="bg-slate-900 px-2 py-0.5 border-b border-white/5 flex gap-1 items-center">
                      <div className="w-1 h-1 rounded-full bg-slate-700" />
                      <div className="text-[6px] font-mono text-slate-500">Terminal</div>
                    </div>
                    <div className="p-1 font-mono text-[6px] text-emerald-400 space-y-0.5">
                      <div>$ python scraping.py</div>
                      <div>[SUCCESS] 1450 rows collected.</div>
                    </div>
                  </div>
                )
              },
              {
                id: "consulting",
                title: t("hub.consulenzaTitle"),
                desc: t("hub.consulenzaDesc"),
                icon: <ShieldCheck size={20} className="text-blue-400" />,
                link: getPathFromPage("consulting", lang),
                mockup: (
                  <div className="w-full bg-slate-950/60 rounded-xl p-2.5 h-16 flex items-center justify-between border border-white/5" aria-hidden="true">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-emerald-400" />
                      <div className="space-y-0.5">
                        <div className="w-12 h-1 bg-white/10 rounded" />
                        <div className="w-8 h-1 bg-white/5 rounded" />
                      </div>
                    </div>
                    <div className="text-[8px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 px-1.5 py-0.5 rounded">SECURE</div>
                  </div>
                )
              }
            ].map((service) => (
              <a
                key={service.id}
                href={service.link}
                className="glass p-6 rounded-[2rem] border-white/5 hover:border-blue-500/20 bg-slate-900/20 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-blue-500/10 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                    {service.title} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">{service.desc}</p>
                </div>
                {service.mockup}
              </a>
            ))}

          </div>
        </motion.section>

        {/* DEMO VISIVE SECTION */}
        <motion.section
          id="demo-visive"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-24 md:mb-40"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl mb-12 md:mb-16 text-center md:text-left">
            <span className="text-sm font-mono text-purple-400 uppercase tracking-widest">{t("ui.visualProof")}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 mb-5 text-white">{t("hub.demoTitle")}</h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              {t("hub.demoSubtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

            {/* Demo 1 - Dashboard gestionale */}
            <a href={getPathFromPage("webapp", lang)} className="glass p-5 rounded-3xl border-white/5 bg-slate-900/30 hover:border-blue-500/20 transition-all flex flex-col justify-between group cursor-pointer">
              {/* Replace this mockup with real video/screenshot when available */}
              <div className="w-full bg-slate-950 rounded-2xl p-3 h-32 flex flex-col justify-between border border-white/5 relative" aria-hidden="true">
                <div className="flex justify-between items-center border-b border-white/5 pb-1">
                  <div className="w-8 h-1 bg-white/10 rounded" />
                  <Play size={12} className="text-blue-400 group-hover:scale-125 transition-transform" />
                </div>
                <div className="flex gap-1 items-end h-16 pt-3 px-1">
                  <div className="bg-blue-500/30 rounded w-1/4 h-2/3" />
                  <div className="bg-blue-500/40 rounded w-1/4 h-1/2" />
                  <div className="bg-blue-500/50 rounded w-1/4 h-full" />
                  <div className="bg-emerald-500/60 rounded w-1/4 h-4/5 animate-pulse" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block mb-1">{t("hub.demoDashboardLabel")}</span>
                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors mb-1">{t("hub.demoDashboardTitle")}</h3>
                <p className="text-slate-400 text-[10px] leading-relaxed">{t("hub.demoDashboardDesc")}</p>
              </div>
            </a>

            {/* Demo 2 - Automazione lead */}
            <a href={getPathFromPage("automations", lang)} className="glass p-5 rounded-3xl border-white/5 bg-slate-900/30 hover:border-emerald-500/20 transition-all flex flex-col justify-between group cursor-pointer">
              {/* Replace this mockup with real video/screenshot when available */}
              <div className="w-full bg-slate-950 rounded-2xl p-3 h-32 flex flex-col justify-between border border-white/5" aria-hidden="true">
                <div className="flex justify-between items-center border-b border-white/5 pb-1">
                  <div className="w-12 h-1 bg-white/10 rounded" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="flex-1 flex flex-col justify-center gap-1.5">
                  <div className="h-3 bg-white/5 rounded-full flex items-center px-1.5 justify-between">
                    <div className="w-1/2 h-1 bg-slate-500 rounded" />
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  </div>
                  <div className="h-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center px-1.5 justify-between">
                    <div className="w-3/4 h-1 bg-emerald-400 rounded" />
                    <div className="text-[5px] font-mono text-emerald-400">QUALIFIED</div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">{t("hub.demoLeadLabel")}</span>
                <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors mb-1">{t("hub.demoLeadTitle")}</h3>
                <p className="text-slate-400 text-[10px] leading-relaxed">{t("hub.demoLeadDesc")}</p>
              </div>
            </a>

            {/* Demo 3 - Chatbot WhatsApp */}
            <a href={getPathFromPage("chatbot", lang)} className="glass p-5 rounded-3xl border-white/5 bg-slate-900/30 hover:border-blue-500/20 transition-all flex flex-col justify-between group cursor-pointer">
              {/* Replace this mockup with real video/screenshot when available */}
              <div className="w-full bg-slate-950 rounded-2xl p-3 h-32 flex flex-col justify-between border border-white/5" aria-hidden="true">
                <div className="flex items-center gap-1 border-b border-white/5 pb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <div className="w-16 h-1 bg-white/10 rounded" />
                </div>
                <div className="flex-1 flex flex-col justify-end gap-1.5 pt-2">
                  <div className="bg-slate-900 rounded p-1 text-[6px] font-mono text-slate-300 self-start border border-white/5">{t("ui.priceQuestion")}</div>
                  <div className="bg-blue-500/10 rounded p-1 text-[6px] font-mono text-blue-400 self-end border border-blue-500/10 max-w-[85%] text-right">{t("ui.priceAnswer")}</div>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block mb-1">{t("hub.demoChatLabel")}</span>
                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors mb-1">{t("hub.demoChatTitle")}</h3>
                <p className="text-slate-400 text-[10px] leading-relaxed">{t("hub.demoChatDesc")}</p>
              </div>
            </a>

            {/* Demo 4 - Excel automatizzato */}
            <a href={getPathFromPage("scripting", lang)} className="glass p-5 rounded-3xl border-white/5 bg-slate-900/30 hover:border-purple-500/20 transition-all flex flex-col justify-between group cursor-pointer">
              {/* Replace this mockup with real video/screenshot when available */}
              <div className="w-full bg-slate-950 rounded-2xl p-3 h-32 flex flex-col justify-between border border-white/5" aria-hidden="true">
                <div className="flex justify-between items-center border-b border-white/5 pb-1">
                  <div className="w-10 h-1 bg-white/10 rounded" />
                  <div className="text-[6px] font-mono text-purple-400">clean_excel.py</div>
                </div>
                <div className="flex-1 grid grid-rows-3 gap-0.5 pt-1.5 text-[5px] font-mono">
                  <div className="bg-red-500/10 text-red-400 px-1 rounded flex justify-between border border-red-500/10"><span>mario@@test..com</span><span>ERR</span></div>
                  <div className="bg-emerald-500/10 text-emerald-400 px-1 rounded flex justify-between border border-emerald-500/10"><span>hello@example.com</span><span>OK</span></div>
                  <div className="bg-white/5 text-slate-500 px-1 rounded">Processed 100%</div>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block mb-1">{t("hub.demoExcelLabel")}</span>
                <h3 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors mb-1">{t("hub.demoExcelTitle")}</h3>
                <p className="text-slate-400 text-[10px] leading-relaxed">{t("hub.demoExcelDesc")}</p>
              </div>
            </a>

            {/* Demo 5 - Sito responsive */}
            <a href={getPathFromPage("webdev", lang)} className="glass p-5 rounded-3xl border-white/5 bg-slate-900/30 hover:border-blue-500/20 transition-all flex flex-col justify-between group cursor-pointer">
              {/* Replace this mockup with real video/screenshot when available */}
              <div className="w-full bg-slate-950 rounded-2xl p-3 h-32 flex justify-center items-center border border-white/5 relative overflow-hidden" aria-hidden="true">
                <div className="w-16 h-20 bg-slate-900 rounded-lg border border-white/10 p-1 flex flex-col gap-1 relative z-10 shadow-lg">
                  <div className="h-1 bg-blue-500/30 rounded w-3/4" />
                  <div className="h-1 bg-white/5 rounded w-full" />
                  <div className="h-8 bg-blue-500/10 rounded w-full border border-blue-500/20" />
                </div>
                <div className="w-10 h-14 bg-slate-950 rounded border border-white/5 p-1 flex flex-col gap-0.5 absolute right-2 bottom-1 shadow-2xl z-20 scale-95">
                  <div className="h-1 bg-blue-500/40 rounded w-2/3" />
                  <div className="h-3 bg-white/5 rounded w-full" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block mb-1">{t("hub.demoResponsiveLabel")}</span>
                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors mb-1">{t("hub.demoResponsiveTitle")}</h3>
                <p className="text-slate-400 text-[10px] leading-relaxed">{t("hub.demoResponsiveDesc")}</p>
              </div>
            </a>

          </div>
        </motion.section>

        {/* PROBLEMI CHE RISOLVO SECTION */}
        <motion.section
          id="problemi-risolti"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-24 md:mb-40"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl mb-12 md:mb-16 text-center md:text-left">
            <span className="text-sm font-mono text-red-400 uppercase tracking-widest">{t("ui.diagnosticsEyebrow")}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 mb-5 text-white">{t("hub.problemiTitle")}</h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              {t("hub.problemiSubtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              t("hub.prob1"),
              t("hub.prob2"),
              t("hub.prob3"),
              t("hub.prob4"),
              t("hub.prob5"),
              t("hub.prob6")
            ].map((problem, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.01 }}
                className="glass p-6 rounded-2xl border-white/5 bg-slate-900/10 hover:border-red-500/15 transition-all flex gap-4 items-center"
              >
                <div className="w-8 h-8 rounded-xl bg-red-500/5 flex items-center justify-center text-red-400 shrink-0">
                  <AlertTriangle size={18} />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-200">{problem}</span>
              </motion.div>
            ))}
          </div>

          {/* Persuasive Callout Box */}
          <div className="max-w-4xl mx-auto glass p-8 sm:p-12 rounded-3xl border-white/5 bg-gradient-to-r from-red-950/15 via-slate-900/30 to-blue-950/10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 blur-[80px]" />
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white max-w-2xl mx-auto leading-relaxed">{t("hub.probCta")}</h3>
            <a
              href={`${homeUrl}#home-form`}
              className="btn-glow-blue inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:scale-[1.02] transition-all"
            >
              {t("hub.probBtn")} <ArrowRight size={18} />
            </a>
          </div>
        </motion.section>

        {/* PROGETTI IN EVIDENZA SECTION */}
        <motion.section
          id="progetti-in-evidenza"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-24 md:mb-40"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl mb-12 md:mb-16 text-center md:text-left">
            <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">{t("ui.featuredEyebrow")}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 mb-5 text-white">{t("hub.progettiTitle")}</h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              {t("hub.progettiSubtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProjectsList.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-3xl overflow-hidden border-white/5 bg-slate-900/30 flex flex-col justify-between hover:border-blue-500/20 transition-all p-3"
              >
                <div>
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-4 bg-slate-950">
                    <Image
                      src={project.img}
                      alt={`${t("ui.projectPreview")} ${project.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      quality={70}
                      className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  </div>
                  <div className="px-3 pb-3">
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider block mb-1">{project.tag}</span>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-1">{project.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{project.desc}</p>
                  </div>
                </div>
                <div className="px-3 pb-2 flex justify-end">
                  <ArrowUpRight size={16} className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <a
              href={getPathFromPage("projects", lang)}
              className="btn-glow-white glass text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide inline-flex items-center gap-2"
            >
              {t("hub.progettiBtn")} <ArrowRight size={16} />
            </a>
          </div>
        </motion.section>

        {/* CLIENT REVIEWS SECTION */}
        <motion.section
          id="recensioni"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-24 md:mb-40"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl mb-10 md:mb-12">
            <span className="text-sm font-mono text-emerald-400 uppercase tracking-widest">{t("ui.reviewsEyebrow")}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 mb-5">{t("ui.reviewsTitle")}</h2>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
              {t("ui.reviewsIntro")}
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="review-scroll-mobile md:hidden -mx-4 px-4 overflow-x-auto snap-x snap-proximity touch-pan-x pb-4"
          >
            <div className="flex w-max gap-4 pr-4">
              {clientReviews.map((review) => (
                <article lang="it" key={review.name} className="review-card glass shrink-0 snap-center">
                  <ReviewStars />
                  <p className="mt-6 text-slate-200 text-sm leading-relaxed">{review.text}</p>
                  <div className="mt-8 pt-5 border-t border-white/10">
                    <p className="text-white font-bold text-sm">{review.name}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      <time dateTime={review.dateTime}>{review.date}</time> · {review.service}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="review-marquee -mx-4 sm:-mx-6 hidden md:block"
          >
            <div className="review-track">
              {clientReviews.map((review) => (
                <article lang="it" key={review.name} className="review-card glass">
                  <ReviewStars />
                  <p className="mt-6 text-slate-200 text-sm leading-relaxed">{review.text}</p>
                  <div className="mt-8 pt-5 border-t border-white/10">
                    <p className="text-white font-bold text-sm">{review.name}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      <time dateTime={review.dateTime}>{review.date}</time> · {review.service}
                    </p>
                  </div>
                </article>
              ))}
              {clientReviews.map((review) => (
                <article lang="it" key={`duplicate-${review.name}`} className="review-card review-card-duplicate glass" aria-hidden="true">
                  <ReviewStars />
                  <p className="mt-6 text-slate-200 text-sm leading-relaxed">{review.text}</p>
                  <div className="mt-8 pt-5 border-t border-white/10">
                    <p className="text-white font-bold text-sm">{review.name}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      <time dateTime={review.dateTime}>{review.date}</time> · {review.service}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* HOME CONTACT FORM SECTION */}
        <motion.section
          id="home-form"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl mx-auto glass p-6 sm:p-10 md:p-16 rounded-[2rem] sm:rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -ml-40 -mb-40 pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">{t("homeForm.title")}</h2>
              <p className="text-lg sm:text-xl text-slate-400">{t("homeForm.desc")}</p>
            </div>

            {homeForm.submissionState.status === "success" ? (
              <FormSuccessPanel
                accent="blue"
                title={homeForm.messages.successTitle}
                description={homeForm.messages.successDescription}
                actionLabel={homeForm.messages.sendAnother}
                onReset={homeForm.resetSubmission}
              />
            ) : (
              <form className="space-y-6" onSubmit={homeForm.handleSubmit}>
                <input type="hidden" name="form_type" value="home" />
                <input type="hidden" name="page" value="home" />
                <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300 ml-2 flex items-center gap-2">
                      <Users size={16} className="text-blue-400" /> {t("homeForm.name")}
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      autoComplete="name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 focus:border-blue-500 outline-none transition-all text-base sm:text-lg hover:bg-white/10"
                      placeholder={t("webdev.formNamePlaceholder")}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300 ml-2 flex items-center gap-2">
                      <Mail size={16} className="text-blue-400" /> {t("homeForm.email")}
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 focus:border-blue-500 outline-none transition-all text-base sm:text-lg hover:bg-white/10"
                      placeholder={t("webdev.formEmailPlaceholder")}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300 ml-2 flex items-center gap-2">
                    <FileText size={16} className="text-blue-400" /> {t("homeForm.message")}
                  </label>
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 focus:border-blue-500 outline-none transition-all text-base sm:text-lg min-h-[150px] hover:bg-white/10"
                    placeholder={t("webdev.formMessagePlaceholder")}
                  />
                </div>
                <FormFeedback state={homeForm.submissionState} accent="blue" />
                <button
                  type="submit"
                  disabled={homeForm.submissionState.status === "submitting"}
                  className="btn-glow-blue w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-5 sm:py-6 rounded-2xl font-black text-lg sm:text-xl transition-all duration-500 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] hover:scale-[1.02] active:scale-[0.98] mt-4 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {homeForm.submissionState.status === "submitting" ? homeForm.messages.sending : t("homeForm.btn")}
                </button>
              </form>
            )}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}
