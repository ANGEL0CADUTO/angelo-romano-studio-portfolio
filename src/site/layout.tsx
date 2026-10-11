import { CalendarCheck, ChevronRight, Clock3, Github, Linkedin, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { getContactServiceFromPage, getResponseTimeLabel, getWhatsAppRedirectPath } from "../contact";
import type { CaseStudySlug } from "../case-studies";
import { getCaseStudyPath, getPathFromPage, type PageId } from "../seo";
import { useSiteI18n } from "./i18n-context";

declare global {
  interface Window {
    __angeloIubendaLoaded?: boolean;
    __angeloLoadIubenda?: () => void;
  }
}

const LOGO_PATH = "/demo/logo.svg";

const requestIdle = (callback: () => void): number | ReturnType<typeof setTimeout> => {
  const win = globalThis.window;

  if (win && "requestIdleCallback" in win) {
    return win.requestIdleCallback(callback);
  }

  return globalThis.setTimeout(callback, 1);
};

const cancelIdle = (handle: number | ReturnType<typeof setTimeout>) => {
  const win = globalThis.window;

  if (win && "cancelIdleCallback" in win && typeof handle === "number") {
    win.cancelIdleCallback(handle);
    return;
  }

  globalThis.clearTimeout(handle);
};

const IubendaLoader = () => null;

const useDecorativeEffects = () => {
  const [effectsEnabled, setEffectsEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    const pointerQuery = window.matchMedia("(pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setEffectsEnabled(pointerQuery.matches && !motionQuery.matches && window.innerWidth >= 1024);
    };

    update();
    pointerQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);
    window.addEventListener("resize", update);

    return () => {
      pointerQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return effectsEnabled;
};

const useMouseSpotlight = (enabled: boolean) => {
  useEffect(() => {
    if (!enabled) {
      document.documentElement.style.removeProperty("--mouse-x");
      document.documentElement.style.removeProperty("--mouse-y");
      return;
    }

    const updateMousePosition = (ev: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${ev.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${ev.clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [enabled]);
};

const ParticleBackground = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`,
        duration: `${Math.random() * 10 + 16}s`,
        delay: `${Math.random() * 8}s`,
      })),
    [],
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle-float absolute rounded-full bg-blue-500/20"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDuration: particle.duration,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

const Navbar = ({ currentPage, caseStudySlug }: { currentPage: PageId; caseStudySlug?: CaseStudySlug }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  const langMenuRef = useRef<HTMLDivElement | null>(null);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);
  const { lang, t } = useSiteI18n();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!langMenuRef.current?.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
      if (!servicesMenuRef.current?.contains(event.target as Node)) {
        setIsServicesMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesMenuOpen(false);
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const servicesList = [
    { id: "webdev" as PageId, label: t("nav.webdev") },
    { id: "webapp" as PageId, label: t("nav.webapp") },
    { id: "automations" as PageId, label: t("nav.automations") },
    { id: "chatbot" as PageId, label: t("nav.chatbot") },
    { id: "scripting" as PageId, label: t("nav.scripting") },
    { id: "consulting" as PageId, label: t("nav.consulting") },
  ];

  const navLinks = [
    { id: "home" as PageId, label: t("nav.home"), isDropdown: false },
    { id: "services" as PageId, label: t("nav.services"), isDropdown: true },
    { id: "projects" as PageId, label: t("nav.projects"), isDropdown: false },
    { id: "about" as PageId, label: t("nav.about"), isDropdown: false },
  ];

  const languages = [
    { code: "it", label: "Italiano", flag: "🇮🇹" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "es", label: "Español", flag: "🇪🇸" },
  ];

  const currentLang = languages.find((language) => language.code === lang) ?? languages[0];
  const homeUrl = getPathFromPage("home", lang);
  const homeFormUrl = `${homeUrl}#home-form`;
  const getNavHref = (page: PageId) => getPathFromPage(page, lang);
  const quickContactService = getContactServiceFromPage(currentPage);
  const whatsappUrl = getWhatsAppRedirectPath({ service: quickContactService, language: lang });

  const isServiceActive = ["webdev", "webapp", "automations", "chatbot", "scripting", "consulting"].includes(currentPage);

  return (
    <nav
      aria-label={t("ui.mainNavigation")}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-bg-dark/80 backdrop-blur-2xl border-b border-white/5 py-4 shadow-2xl" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <a href={homeUrl} className="flex items-center gap-3 cursor-pointer group">
          <img
            src={LOGO_PATH}
            alt=""
            width={40}
            height={40}
            aria-hidden="true"
            className="w-10 h-10 object-contain drop-shadow-lg group-hover:rotate-6 transition-all duration-300"
          />
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-tight leading-none">Angelo Romano</span>
            <span className="text-[10px] text-blue-400 font-mono tracking-widest uppercase opacity-80">IT Engineer</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div
                  key={link.id}
                  ref={servicesMenuRef}
                  className="relative py-2"
                  onMouseEnter={() => setIsServicesMenuOpen(true)}
                  onMouseLeave={() => setIsServicesMenuOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={isServicesMenuOpen}
                    aria-haspopup="menu"
                    onClick={() => setIsServicesMenuOpen((current) => !current)}
                    className={`flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-all hover:text-white outline-none focus:text-white ${
                      isServiceActive ? "text-blue-400" : "text-slate-400"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isServicesMenuOpen ? "rotate-90" : ""}`} />
                  </button>

                  {isServicesMenuOpen ? (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl overflow-hidden shadow-2xl flex flex-col bg-bg-dark/95 backdrop-blur-2xl border border-white/15 p-2 animate-fadeIn z-50">
                      {servicesList.map((service) => (
                        <a
                          key={service.id}
                          href={getNavHref(service.id)}
                          onClick={() => setIsServicesMenuOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-colors hover:bg-white/5 ${
                            currentPage === service.id ? "text-blue-400 bg-white/5" : "text-slate-400 hover:text-white"
                          }`}
                        >
                          {service.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <a
                key={link.id}
                href={getNavHref(link.id)}
                className={`text-sm font-semibold tracking-wide transition-all hover:text-white ${
                  currentPage === link.id ? "text-blue-400" : "text-slate-400"
                }`}
              >
                {link.label}
              </a>
            );
          })}

          <div ref={langMenuRef} className="relative border-l border-white/10 pl-6 ml-2">
            <button
              type="button"
              aria-expanded={isLangMenuOpen}
              aria-haspopup="menu"
              onClick={() => setIsLangMenuOpen((current) => !current)}
              className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <span className="text-lg">{currentLang.flag}</span>
              <ChevronRight className={`w-4 h-4 transition-transform ${isLangMenuOpen ? "rotate-90" : ""}`} />
            </button>

            {isLangMenuOpen ? (
              <div className="absolute top-full right-0 mt-4 w-40 rounded-2xl overflow-hidden shadow-2xl flex flex-col bg-bg-dark/95 backdrop-blur-2xl border border-white/15">
                {languages.map((language) => (
                  <a
                    key={language.code}
                    href={caseStudySlug ? getCaseStudyPath(caseStudySlug, language.code) : getPathFromPage(currentPage, language.code)}
                    onClick={() => setIsLangMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5 ${
                      lang === language.code ? "text-blue-400 bg-white/5" : "text-slate-300"
                    }`}
                  >
                    <span className="text-lg">{language.flag}</span>
                    {language.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2.5 text-sm font-bold text-emerald-200 transition-all hover:border-emerald-300/40 hover:bg-emerald-500/15 hover:text-white"
          >
            <MessageCircle size={16} />
            {t("quickContact.whatsapp")}
          </a>

          <a
            href={homeFormUrl}
            className="btn-glow-blue bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-[1.05] active:scale-[0.95] transition-all duration-300 ml-2"
          >
            {t("nav.startProject")}
          </a>
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? t("ui.closeNavigation") : t("ui.openNavigation")}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div
          id="mobile-navigation"
          className="absolute top-full left-0 right-0 border-t border-white/10 bg-bg-dark/95 backdrop-blur-2xl shadow-2xl p-6 md:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div key={link.id} className="flex flex-col gap-3">
                    <button
                      type="button"
                      onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                      className={`text-left text-xl font-bold flex items-center justify-between w-full outline-none ${
                        isServiceActive ? "text-blue-400" : "text-slate-400"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className={`w-6 h-6 transition-transform ${isMobileServicesOpen ? "rotate-90" : ""}`} />
                    </button>
                    {isMobileServicesOpen ? (
                      <div className="flex flex-col gap-4 pl-4 border-l border-white/10 mt-1">
                        {servicesList.map((service) => (
                          <a
                            key={service.id}
                            href={getNavHref(service.id)}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                            className={`text-left text-lg font-bold ${currentPage === service.id ? "text-blue-400" : "text-slate-500"}`}
                          >
                            {service.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <a
                  key={link.id}
                  href={getNavHref(link.id)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-left text-xl font-bold ${currentPage === link.id ? "text-blue-400" : "text-slate-400"}`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              {languages.map((language) => (
                <a
                  key={language.code}
                  href={caseStudySlug ? getCaseStudyPath(caseStudySlug, language.code) : getPathFromPage(currentPage, language.code)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-bold transition-colors ${
                    lang === language.code ? "text-blue-400" : "text-slate-500"
                  }`}
                >
                  {language.flag} {language.label}
                </a>
              ))}
            </div>

            <a
              href={homeFormUrl}
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 rounded-xl font-bold text-center mt-2 shadow-lg"
            >
              {t("nav.startProject")}
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

const Footer = () => {
  const { lang, t } = useSiteI18n();
  const homeUrl = getPathFromPage("home", lang);
  const whatsappUrl = getWhatsAppRedirectPath({ service: "general", language: lang });
  const callUrl = getWhatsAppRedirectPath({ service: "general", language: lang, intent: "call" });
  const responseTimeLabel = getResponseTimeLabel(lang);

  return (
    <footer className="border-t border-white/5 py-20 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 md:gap-8">
        <div className="col-span-1 sm:col-span-2 md:col-span-1.5">
          <a href={homeUrl} className="flex w-fit items-center gap-3 mb-6 group">
            <img src={LOGO_PATH} alt="" width={40} height={40} aria-hidden="true" className="w-10 h-10 object-contain" />
            <span className="font-bold text-xl tracking-tight transition-colors group-hover:text-white">Angelo Romano</span>
          </a>
          <p className="text-slate-400 text-base leading-relaxed max-w-sm">{t("footer.desc")}</p>
        </div>

        {/* COLUMN 2: SERVIZI */}
        <div>
          <p className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">{t("nav.services")}</p>
          <div className="flex flex-col gap-3.5">
            <a href={getPathFromPage("webdev", lang)} className="text-slate-400 hover:text-blue-400 text-sm font-semibold transition-colors">
              {t("footer.links.webdev")}
            </a>
            <a href={getPathFromPage("webapp", lang)} className="text-slate-400 hover:text-blue-400 text-sm font-semibold transition-colors">
              {t("footer.links.webapp")}
            </a>
            <a href={getPathFromPage("automations", lang)} className="text-slate-400 hover:text-blue-400 text-sm font-semibold transition-colors">
              {t("footer.links.automations")}
            </a>
            <a href={getPathFromPage("chatbot", lang)} className="text-slate-400 hover:text-blue-400 text-sm font-semibold transition-colors">
              {t("footer.links.chatbot")}
            </a>
            <a href={getPathFromPage("scripting", lang)} className="text-slate-400 hover:text-blue-400 text-sm font-semibold transition-colors">
              {t("footer.links.scripting")}
            </a>
            <a href={getPathFromPage("consulting", lang)} className="text-slate-400 hover:text-blue-400 text-sm font-semibold transition-colors">
              {t("footer.links.consulting")}
            </a>
          </div>
        </div>

        {/* COLUMN 3: SOLUZIONI */}
        <div>
          <p className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">{t("footer.solutions.title")}</p>
          <div className="flex flex-col gap-3.5">
            <a href={getPathFromPage("webdev", lang)} className="text-slate-400 hover:text-blue-400 text-sm font-semibold transition-colors">
              {t("footer.solutions.professionalWeb")}
            </a>
            <a href={getPathFromPage("webdev", lang)} className="text-slate-400 hover:text-blue-400 text-sm font-semibold transition-colors">
              {t("footer.solutions.landingPage")}
            </a>
            <a href={getPathFromPage("chatbot", lang)} className="text-slate-400 hover:text-blue-400 text-sm font-semibold transition-colors">
              {t("footer.solutions.whatsappBot")}
            </a>
            <a href={getPathFromPage("chatbot", lang)} className="text-slate-400 hover:text-blue-400 text-sm font-semibold transition-colors">
              {t("footer.solutions.voiceAssistant")}
            </a>
            <a href={getPathFromPage("webapp", lang)} className="text-slate-400 hover:text-blue-400 text-sm font-semibold transition-colors">
              {t("footer.solutions.dashboards")}
            </a>
            <a href={getPathFromPage("automations", lang)} className="text-slate-400 hover:text-blue-400 text-sm font-semibold transition-colors">
              {t("footer.solutions.excelAutomations")}
            </a>
          </div>
        </div>

        {/* COLUMN 4: ESPLORA */}
        <div>
          <p className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">{t("footer.explore")}</p>
          <div className="flex flex-col gap-3.5">
            <a href={getPathFromPage("projects", lang)} className="text-slate-400 hover:text-blue-400 text-sm font-semibold transition-colors">
              {t("footer.exploreLinks.projects")}
            </a>
            <a href={getPathFromPage("about", lang)} className="text-slate-400 hover:text-blue-400 text-sm font-semibold transition-colors">
              {t("footer.exploreLinks.about")}
            </a>
            <a href={`${homeUrl}#recensioni`} className="text-slate-400 hover:text-blue-400 text-sm font-semibold transition-colors">
              {t("footer.exploreLinks.reviews")}
            </a>
            <a href={`${homeUrl}#home-form`} className="text-slate-400 hover:text-blue-400 text-sm font-semibold transition-colors">
              {t("footer.exploreLinks.contact")}
            </a>
          </div>
        </div>

        {/* COLUMN 5: CONTATTI & SOCIAL */}
        <div>
          <p className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">{t("footer.contacts")}</p>
          <address className="not-italic flex flex-col gap-3.5">
            <a
              href="mailto:hello@example.com"
              className="text-slate-400 hover:text-emerald-400 text-sm font-semibold transition-colors break-all"
            >
              hello@example.com
            </a>
            <div className="flex flex-wrap gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-200 transition-colors hover:border-emerald-300/40 hover:text-white"
              >
                <MessageCircle size={16} />
                {t("quickContact.whatsapp")}
              </a>
              <a
                href={callUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-200 transition-colors hover:border-blue-300/40 hover:text-white"
              >
                <CalendarCheck size={16} />
                {t("quickContact.bookCall")}
              </a>
            </div>
            <p className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <Clock3 size={14} />
              {responseTimeLabel}
            </p>
            <p className="text-slate-400 text-xs">{t("footer.location")}</p>
            <div className="flex gap-4 pt-2 border-t border-white/5 mt-2">
              <a
                href="https://github.com/ANGEL0CADUTO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/angelo-romano-2a5301252/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 md:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm text-center md:text-left">© 2026 Angelo Romano. {t("footer.rights")} {t("footer.vat")} IT18449281007</p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a href="https://example.com" className="legal-footer-link" title="Privacy Policy">
            {t("footer.privacy")}
          </a>
          <a
            href="https://example.com"
            className="legal-footer-link"
            title="Cookie Policy"
          >
            {t("footer.cookie")}
          </a>
          <a
            href="#"
            className="legal-footer-link iubenda-cs-preferences-link"
            onClick={(event) => {
              event.preventDefault();
              window.__angeloLoadIubenda?.();
            }}
          >{t("ui.cookiePreferences")} </a>
        </div>
      </div>
    </footer>
  );
};

const QuickConversionBar = ({ currentPage }: { currentPage: PageId }) => {
  const { lang, t } = useSiteI18n();
  const homeUrl = getPathFromPage("home", lang);
  const quickContactService = getContactServiceFromPage(currentPage);
  const whatsappUrl = getWhatsAppRedirectPath({ service: quickContactService, language: lang });
  const callUrl = getWhatsAppRedirectPath({ service: quickContactService, language: lang, intent: "call" });
  const responseTimeLabel = getResponseTimeLabel(lang);

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-bg-dark/95 px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 shadow-[0_-18px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:hidden">
      <p className="mb-2 flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
        <Clock3 size={13} />
        {responseTimeLabel}
      </p>
      <div className="grid grid-cols-3 gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-2xl bg-emerald-500/15 px-2 text-center text-xs font-black text-emerald-100 ring-1 ring-emerald-400/20 active:scale-[0.98]"
        >
          <MessageCircle size={18} />
          {t("quickContact.whatsapp")}
        </a>
        <a
          href={callUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-2xl bg-blue-500/15 px-2 text-center text-xs font-black text-blue-100 ring-1 ring-blue-400/20 active:scale-[0.98]"
        >
          <CalendarCheck size={18} />
          {t("quickContact.callShort")}
        </a>
        <a
          href={`${homeUrl}#home-form`}
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-2xl bg-white/[0.07] px-2 text-center text-xs font-black text-white ring-1 ring-white/15 active:scale-[0.98]"
        >
          <ChevronRight size={18} />
          {t("quickContact.formShort")}
        </a>
      </div>
    </div>
  );
};

export const SiteShell = ({
  currentPage,
  caseStudySlug,
  children,
}: {
  currentPage: PageId;
  caseStudySlug?: CaseStudySlug;
  children: ReactNode;
}) => {
  const effectsEnabled = useDecorativeEffects();
  const [showParticles, setShowParticles] = useState(false);

  useMouseSpotlight(effectsEnabled);

  useEffect(() => {
    if (!effectsEnabled) {
      setShowParticles(false);
      return;
    }

    const idleHandle = requestIdle(() => {
      setShowParticles(true);
    });

    return () => {
      cancelIdle(idleHandle);
    };
  }, [effectsEnabled]);

  return (
    <div className="min-h-screen bg-bg-dark text-slate-200 font-sans antialiased selection:bg-blue-500/30 relative overflow-x-hidden">
      {effectsEnabled ? <div className="fixed inset-0 pointer-events-none spotlight-bg z-10" aria-hidden="true" /> : null}
      {effectsEnabled && showParticles ? <ParticleBackground /> : null}

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 blur-[120px] rounded-full" />
      </div>

      <IubendaLoader />
      <Navbar currentPage={currentPage} caseStudySlug={caseStudySlug} />

      <main className="relative z-20 pb-24 md:pb-0">{children}</main>

      <Footer />
      <QuickConversionBar currentPage={currentPage} />
    </div>
  );
};
