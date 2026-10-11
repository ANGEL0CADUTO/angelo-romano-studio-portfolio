import { ArrowRight, ExternalLink, Github, Layers, Code, Database } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, type ReactNode } from "react";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "./animations";
import { useSiteI18n } from "./i18n-context";
import { getCaseStudyPath, getPathFromPage } from "../seo";

type Category = "all" | "web" | "software" | "enterprise";

type ProjectItem = {
  id: string;
  title: string;
  category: Category;
  categoryLabel: string;
  desc: string;
  url: string;
  img: string;
  tags: string[];
  icon: ReactNode;
  isExternal: boolean;
  isCaseStudy?: boolean;
};

export default function ProjectsPage() {
  const { lang, t } = useSiteI18n();
  const homeUrl = getPathFromPage("home", lang);
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const categories = [
    { id: "all" as Category, label: t("projectsPage.all") },
    { id: "web" as Category, label: t("projectsPage.catWeb") },
    { id: "software" as Category, label: t("projectsPage.catSoftware") },
    { id: "enterprise" as Category, label: t("projectsPage.catEnterprise") },
  ];

  const projects: ProjectItem[] = [
    {
      id: "nardiarte",
      title: "Nardi Arte",
      category: "web" as Category,
      categoryLabel: t("projectsPage.catWeb"),
      desc: t("ui.projectNardi"),
      url: getCaseStudyPath("nardi-arte", lang),
      img: "/demo/scene-4.svg",
      tags: ["Portfolio", "Art Direction", "Responsive"],
      icon: <Layers size={20} />,
      isExternal: false,
      isCaseStudy: true,
    },
    {
      id: "carlos-giordano",
      title: "Carlos Giordano",
      category: "web" as Category,
      categoryLabel: t("projectsPage.catWeb"),
      desc: t("ui.projectCarlos"),
      url: "https://www.carlosgiordano.net/",
      img: "/demo/scene-3.svg",
      tags: ["Portfolio", "Visual Design", "Gallery"],
      icon: <Layers size={20} />,
      isExternal: true,
    },
    {
      id: "gioielleria-guerriero-de-luca",
      title: "Gioielleria Guerriero De Luca",
      category: "web" as Category,
      categoryLabel: t("projectsPage.catWeb"),
      desc: t("ui.projectJewellery"),
      url: "https://example.com",
      img: "/demo/scene-3.svg",
      tags: ["Luxury UI", "Next.js", "Vercel"],
      icon: <Layers size={20} />,
      isExternal: true,
    },
    {
      id: "siaps",
      title: "SIAPS",
      category: "web" as Category,
      categoryLabel: t("projectsPage.catWeb"),
      desc: t("ui.projectSiaps"),
      url: getCaseStudyPath("siaps", lang),
      img: "/demo/scene-2.svg",
      tags: ["Institutional", "Healthcare", "SEO"],
      icon: <Layers size={20} />,
      isExternal: false,
      isCaseStudy: true,
    },
    {
      id: "poliambulatorio-prof-gemelli",
      title: "Poliambulatorio Prof Gemelli",
      category: "web" as Category,
      categoryLabel: t("projectsPage.catWeb"),
      desc: t("ui.projectClinic"),
      url: getCaseStudyPath("poliambulatorio-prof-gemelli", lang),
      img: "/demo/scene-4.svg",
      tags: ["Medical", "Booking CTA", "SEO"],
      icon: <Layers size={20} />,
      isExternal: false,
      isCaseStudy: true,
    },
    {
      id: "prof-gemelli",
      title: "Prof. Gemelli",
      category: "web" as Category,
      categoryLabel: t("projectsPage.catWeb"),
      desc: t("ui.projectDoctor"),
      url: "https://www.profgemelli.it/",
      img: "/demo/scene-4.svg",
      tags: ["Medical", "Personal Brand", "Conversion"],
      icon: <Layers size={20} />,
      isExternal: true,
    },
    {
      id: "studio-henergia",
      title: "Studio H Energia",
      category: "web" as Category,
      categoryLabel: t("projectsPage.catWeb"),
      desc: t("ui.projectEnergy"),
      url: getCaseStudyPath("studio-henergia", lang),
      img: "/demo/scene-3.svg",
      tags: ["Energy", "Next.js", "Vercel"],
      icon: <Layers size={20} />,
      isExternal: false,
      isCaseStudy: true,
    },
    {
      id: "studio-henergia-dashboard",
      title: "Studio H Energia Dashboard",
      category: "enterprise" as Category,
      categoryLabel: t("projectsPage.catEnterprise"),
      desc: t("ui.projectDashboard"),
      url: "https://example.com",
      img: "/demo/scene-1.svg",
      tags: ["Dashboard", "KPI", "Gestionale"],
      icon: <Database size={20} />,
      isExternal: true,
    },
    {
      id: "paolo-quiri",
      title: "Paolo Quiri",
      category: "web" as Category,
      categoryLabel: t("projectsPage.catWeb"),
      desc: t("ui.projectPaolo"),
      url: "https://www.paoloquiri.it/",
      img: "/demo/scene-3.svg",
      tags: ["Personal Brand", "Storytelling", "Responsive"],
      icon: <Layers size={20} />,
      isExternal: true,
    },
    {
      id: "domus",
      title: "Domus Juliae",
      category: "web" as Category,
      categoryLabel: t("projectsPage.catWeb"),
      desc: t("ui.projectDomus"),
      url: getCaseStudyPath("domus-juliae", lang),
      img: "/demo/scene-1.svg",
      tags: ["Next.js", "React", "TailwindCSS"],
      icon: <Layers size={20} />,
      isExternal: false,
      isCaseStudy: true,
    },
    {
      id: "ozonoterapia",
      title: "Ozonoterapia Sepia",
      category: "web" as Category,
      categoryLabel: t("projectsPage.catWeb"),
      desc: t("ui.projectMedical"),
      url: "https://example.com",
      img: "/demo/scene-3.svg",
      tags: ["React", "Next.js", "Performance Optimization"],
      icon: <Layers size={20} />,
      isExternal: true,
    },
    {
      id: "ristorante",
      title: "Ristorante Essenza",
      category: "web" as Category,
      categoryLabel: t("projectsPage.catWeb"),
      desc: t("ui.projectRestaurant"),
      url: "https://example.com",
      img: "/demo/scene-1.svg",
      tags: ["Next.js", "TailwindCSS", "UX Design"],
      icon: <Layers size={20} />,
      isExternal: true,
    },
    {
      id: "kernel-module",
      title: "Linux Kernel Module",
      category: "software" as Category,
      categoryLabel: t("projectsPage.catSoftware"),
      desc: t("ui.projectKernel"),
      url: "https://github.com/ANGEL0CADUTO",
      img: "/demo/scene-1.svg",
      tags: ["C", "Linux Internals", "Kernel Programming"],
      icon: <Code size={20} />,
      isExternal: false,
    },
    {
      id: "ids",
      title: "Distributed Microservices IDS",
      category: "software" as Category,
      categoryLabel: t("projectsPage.catSoftware"),
      desc: t("ui.projectIds"),
      url: "https://github.com/ANGEL0CADUTO",
      img: "/demo/scene-1.svg",
      tags: ["Go", "gRPC", "Docker", "Python"],
      icon: <Code size={20} />,
      isExternal: false,
    },
    {
      id: "mangaink",
      title: "MangaInk Marketplace",
      category: "enterprise" as Category,
      categoryLabel: t("projectsPage.catEnterprise"),
      desc: t("ui.projectManga"),
      url: "https://github.com/ANGEL0CADUTO",
      img: "/demo/scene-1.svg",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      icon: <Database size={20} />,
      isExternal: false,
    },
    {
      id: "library",
      title: "Library Information System",
      category: "enterprise" as Category,
      categoryLabel: t("projectsPage.catEnterprise"),
      desc: t("ui.projectLibrary"),
      url: "https://github.com/ANGEL0CADUTO",
      img: "/demo/scene-1.svg",
      tags: ["Java", "SQL", "Relational Database"],
      icon: <Database size={20} />,
      isExternal: false,
    },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <motion.div initial={false} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-16 px-4 sm:px-6 md:pt-40 md:pb-20">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div variants={staggerContainer} initial={false} animate="visible" className="max-w-4xl mb-16 md:mb-24 text-center lg:text-left">
          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 md:mb-10 tracking-tighter leading-[0.9] text-white">
            {t("projectsPage.heroTitle")}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl">
            {t("projectsPage.heroDesc")}
          </motion.p>
        </motion.div>

        {/* TABS FILTER */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-16 border-b border-white/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-40">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="group relative glass rounded-[2rem] overflow-hidden border-white/5 bg-slate-900/30 p-4 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={item.img}
                      alt={`${t("ui.preview")} ${item.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading={index === 0 ? "eager" : "lazy"}
                      quality={68}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <a
                        href={item.url}
                        target={item.isCaseStudy ? undefined : "_blank"}
                        rel={item.isCaseStudy ? undefined : "noopener noreferrer"}
                        className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2"
                      >
                        {item.isCaseStudy
                          ? t("ui.readCase")
                          : item.isExternal
                            ? t("projectsPage.visit")
                            : t("projectsPage.source")}
                        {item.isCaseStudy ? <ArrowRight size={18} /> : item.isExternal ? <ExternalLink size={18} /> : <Github size={18} />}
                      </a>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 block flex items-center gap-2">
                      {item.icon} {item.categoryLabel}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider mb-2">{t("projectsPage.stack")}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-slate-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM CTA */}
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-blue-500/30 rounded-tl-[4rem] pointer-events-none hidden md:block" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-2 border-b-2 border-emerald-500/30 rounded-br-[4rem] pointer-events-none hidden md:block" />

          <div className="glass p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem] border-white/5 relative overflow-hidden shadow-2xl bg-slate-950/40 text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 blur-[120px] -ml-48 -mb-48" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-white">
                {t("ui.projectCtaTitle")}
              </h2>
              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10">
                {t("ui.projectCtaDescription")}
              </p>
              <a
                href={`${homeUrl}#home-form`}
                className="btn-glow-blue inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-10 py-5 rounded-full font-black text-lg shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                {t("ui.projectCtaButton")} <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
