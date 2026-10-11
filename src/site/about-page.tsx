import {
  Activity,
  Briefcase,
  Code2,
  Cpu,
  Database,
  Download,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { fadeInUp, scaleUp, staggerContainer } from "./animations";
import { useSiteI18n } from "./i18n-context";

export default function AboutPage() {
  const { lang, t } = useSiteI18n();
  const isItalian = lang === "it";
  const cvHref = isItalian ? "/profile.txt" : "/profile.txt";
  const cvFilename = isItalian ? "profile.txt" : "profile.txt";
  const cvLabel = t("ui.cv");
  const techStack = [
    { id: "languages", category: t("about.techCat1"), techs: ["C", "Go", "Java", "Python", "SQL", "Assembly (x86/x64)"] },
    { id: "web", category: t("about.techCat2"), techs: ["TypeScript", "Node.js", "Next.js", "React", "REST APIs", "JWT/OAuth2"] },
    { id: "systems", category: t("about.techCat3"), techs: ["Linux Internals", "Kernel Concepts", "System Programming", "Arduino", "RFID"] },
    { id: "infra", category: t("about.techCat4"), techs: ["PostgreSQL", "Redis", "Docker", "Kubernetes", "Microservices"] },
  ];

  const experience = [
    {
      id: "exp1",
      company: t("about.exp1Company"),
      period: t("about.exp1Period"),
      role: t("about.exp1Role"),
      desc: t("about.exp1Desc"),
    },
    {
      id: "exp2",
      company: t("about.exp2Company"),
      period: t("about.exp2Period"),
      role: t("about.exp2Role"),
      desc: t("about.exp2Desc"),
    },
    {
      id: "exp3",
      company: t("about.exp3Company"),
      period: t("about.exp3Period"),
      role: t("about.exp3Role"),
      desc: t("about.exp3Desc"),
    },
    {
      id: "exp4",
      company: t("about.exp4Company"),
      period: t("about.exp4Period"),
      role: t("about.exp4Role"),
      desc: t("about.exp4Desc"),
    },
  ];

  const projects = [
    {
      id: "kernel-module",
      title: "Linux Kernel Module – Syscall Throttling",
      desc: t("about.proj1Desc"),
      tags: ["C", "Kernel", "Linux", "Security"],
      icon: <Activity className="text-red-400" />,
    },
    {
      id: "ids",
      title: "Distributed Microservices IDS",
      desc: t("about.proj2Desc"),
      tags: ["Go", "Python", "gRPC", "Docker"],
      icon: <ShieldCheck className="text-blue-400" />,
    },
    {
      id: "audio-classification",
      title: "Audio Species Classification",
      desc: t("about.proj3Desc"),
      tags: ["Python", "TensorFlow", "Keras"],
      icon: <Zap className="text-yellow-400" />,
    },
    {
      id: "k8s-hpa",
      title: "Kubernetes HPA Analysis",
      desc: t("about.proj4Desc"),
      tags: ["Kubernetes", "Prometheus", "Go"],
      icon: <Cpu className="text-emerald-400" />,
    },
    {
      id: "mangaink",
      title: "MangaInk Marketplace",
      desc: t("about.proj5Desc"),
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      icon: <Globe className="text-amber-400" />,
    },
    {
      id: "library-system",
      title: "Library Information System",
      desc: t("about.proj6Desc"),
      tags: ["Java", "SQL", "Database"],
      icon: <Database className="text-purple-400" />,
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-16 px-4 sm:px-6 md:pt-40 md:pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row gap-10 md:gap-14 lg:gap-20 items-center mb-24 md:mb-40 text-center lg:text-left"
        >
          <motion.div variants={scaleUp} className="relative shrink-0 group">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-emerald-500 blur-2xl opacity-30 rounded-full group-hover:opacity-50 transition-opacity duration-500" />
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-[2.25rem] md:rounded-[3rem] bg-slate-800 overflow-hidden relative border-4 border-white/10 group-hover:border-blue-500/30 transition-colors duration-500">
              <Image
                src="/demo/scene-3.svg"
                alt="Angelo Romano"
                fill
                sizes="(max-width: 639px) 192px, (max-width: 767px) 224px, 256px"
                quality={85}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="min-w-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter">
              {t("about.heroTitle1")} <span className="text-blue-500">{t("about.heroTitle2")}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-400 font-bold mb-6 md:mb-8">{t("about.heroSubtitle")}</p>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed mb-8 md:mb-10">{t("about.heroDesc")}</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
              <a
                href={cvHref}
                download={cvFilename}
                className="btn-glow-blue w-full sm:w-auto bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-5 sm:px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-[0_0_24px_rgba(37,99,235,0.22)]"
              >
                <Download size={22} />
                <span>{cvLabel}</span>
              </a>
              <a href="https://github.com/ANGEL0CADUTO" target="_blank" rel="noopener noreferrer" className="glass p-4 rounded-2xl hover:text-blue-400 hover:-translate-y-1 transition-all">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/angelo-romano-2a5301252/" target="_blank" rel="noopener noreferrer" className="glass p-4 rounded-2xl hover:text-blue-400 hover:-translate-y-1 transition-all">
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:hello@example.com"
                className="glass w-full sm:w-auto max-w-full p-4 rounded-2xl hover:text-blue-400 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 px-5 sm:px-6"
              >
                <Mail size={28} />
                <span className="font-mono text-xs sm:text-sm font-bold break-all">hello@example.com</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-24 md:mb-40">
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-black mb-12 md:mb-16 text-center">
            {t("about.skillsTitle")}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {techStack.map((group) => (
              <motion.div variants={fadeInUp} key={group.id} className="tech-card-hover p-8 md:p-10 rounded-[2rem] relative group shadow-xl hover:shadow-2xl hover:shadow-blue-500/10">
                <h4 className="text-sm font-black text-blue-400 uppercase tracking-[0.2em] mb-8 relative z-10">{group.category}</h4>
                <div className="flex flex-col gap-4 relative z-10">
                  {group.techs.map((tech) => (
                    <span key={tech} className="text-base md:text-lg font-bold text-slate-300 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-24 md:mb-40">
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-black mb-12 md:mb-16 text-center flex items-center justify-center gap-4">
            <Code2 className="text-blue-400" /> {t("about.projectsTitle")}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="glass p-6 md:p-8 rounded-3xl border-white/5 hover:border-blue-500/20 transition-all group shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">{project.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-20">
            <div>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-black mb-10 md:mb-12 flex items-center gap-4">
                <Briefcase className="text-blue-400" /> {t("about.expTitle")}
              </motion.h2>
              <div className="space-y-10 md:space-y-12">
                {experience.map((item) => (
                  <motion.div variants={fadeInUp} key={item.id} className="relative pl-8 border-l border-white/10 group">
                    <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all" />
                    <span className="text-sm font-mono text-blue-400 mb-2 block">{item.period}</span>
                    <h4 className="text-lg md:text-xl font-bold mb-1">{item.role}</h4>
                    <p className="text-white/80 font-medium mb-4">{item.company}</p>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-black mb-10 md:mb-12 flex items-center gap-4">
                <GraduationCap className="text-emerald-400" /> {t("about.eduTitle")}
              </motion.h2>
              <div className="space-y-10 md:space-y-12">
                {[
                  { id: "edu1", year: t("about.edu1Year"), title: t("about.edu1Title"), school: t("about.edu1School"), desc: t("about.edu1Desc") },
                  { id: "edu2", year: t("about.edu2Year"), title: t("about.edu2Title"), school: t("about.edu2School"), desc: t("about.edu2Desc") },
                  { id: "edu3", year: t("about.edu3Year"), title: t("about.edu3Title"), school: t("about.edu3School"), desc: t("about.edu3Desc") },
                ].map((item) => (
                  <motion.div variants={fadeInUp} key={item.id} className="relative pl-8 border-l border-white/10 group">
                    <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full bg-emerald-500 group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-all" />
                    <span className="text-sm font-mono text-emerald-400 mb-2 block">{item.year}</span>
                    <h4 className="text-lg md:text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-white/80 font-medium mb-4">{item.school}</p>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
