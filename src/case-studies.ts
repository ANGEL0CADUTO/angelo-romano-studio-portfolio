import { normalizeLanguage } from "./i18n";
import { localizedCaseStudies } from "./locales/case-studies";

export type CaseStudySlug =
  | "nardi-arte"
  | "siaps"
  | "poliambulatorio-prof-gemelli"
  | "studio-henergia"
  | "domus-juliae";

type CaseStudyLocale = "it" | "en";

export type CaseStudyCopy = {
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  result: string;
  takeaways: string[];
  cta: string;
};

export type CaseStudy = {
  slug: CaseStudySlug;
  client: string;
  image: string;
  externalUrl: string;
  tags: string[];
  copy: Record<CaseStudyLocale, CaseStudyCopy>;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "nardi-arte",
    client: "Nardi Arte",
    image: "/demo/scene-4.svg",
    externalUrl: "https://www.nardiarte.it/",
    tags: ["Portfolio", "Art direction", "Responsive"],
    copy: {
      it: {
        title: "Nardi Arte: portfolio artistico con percorso visivo chiaro",
        category: "Arte / Portfolio",
        summary:
          "Un sito portfolio per presentare opere, identita artistica e contatto in modo elegante, veloce e semplice da consultare anche da mobile.",
        problem:
          "Il rischio principale di un sito artistico e' trasformare il portfolio in una galleria confusa: troppe immagini, poca gerarchia e nessun percorso chiaro verso il contatto. Serviva una presenza digitale capace di valorizzare le opere senza appesantire l'esperienza.",
        solution:
          "Ho lavorato su una struttura visuale essenziale, immagini in primo piano, sezioni pulite e navigazione rapida. L'obiettivo era dare spazio alle opere, mantenere coerenza editoriale e rendere immediato il passaggio da visita a richiesta.",
        stack: ["Frontend responsive", "Ottimizzazione immagini", "Portfolio structure", "SEO on-page"],
        result:
          "Il progetto offre una consultazione piu ordinata, un'identita percepita piu professionale e un percorso di contatto piu diretto per collezionisti, visitatori e potenziali collaborazioni.",
        takeaways: [
          "Le immagini devono essere protagoniste, ma non devono rallentare il sito.",
          "Il portfolio funziona meglio quando guida lo sguardo invece di mostrare tutto insieme.",
          "Una CTA discreta ma presente aiuta a trasformare interesse in conversazione.",
        ],
        cta: "Vuoi un portfolio professionale per arte, design o personal brand?",
      },
      en: {
        title: "Nardi Arte: artist portfolio with clear visual flow",
        category: "Art / Portfolio",
        summary:
          "A portfolio website built to present artworks, artistic identity and contact paths through a refined, fast and mobile-friendly experience.",
        problem:
          "Artist websites often become confusing galleries: too many images, weak hierarchy and no clear path to contact. The project needed a digital presence that could elevate the work without making the experience heavy.",
        solution:
          "I shaped a minimal visual structure, image-led sections and fast navigation. The goal was to give the artworks space, keep an editorial rhythm and make the move from browsing to enquiry simple.",
        stack: ["Responsive frontend", "Image optimization", "Portfolio structure", "On-page SEO"],
        result:
          "The website now gives visitors a clearer browsing experience, a more professional perceived identity and a direct contact path for collectors, visitors and potential collaborators.",
        takeaways: [
          "Images can lead the experience without slowing it down.",
          "A portfolio works better when it guides attention instead of showing everything at once.",
          "A subtle but visible CTA turns interest into a real conversation.",
        ],
        cta: "Need a professional portfolio for art, design or a personal brand?",
      },
    },
  },
  {
    slug: "siaps",
    client: "SIAPS",
    image: "/demo/scene-2.svg",
    externalUrl: "https://example.com/",
    tags: ["Institutional", "Healthcare", "SEO"],
    copy: {
      it: {
        title: "SIAPS: sito istituzionale sanitario con informazioni piu leggibili",
        category: "Sanita / Associazione",
        summary:
          "Un sito istituzionale pensato per rendere piu chiari servizi, finalita e percorsi informativi di un'associazione sanitaria.",
        problem:
          "Nel settore sanitario l'utente deve capire velocemente dove si trova, cosa offre l'organizzazione e come procedere. Una comunicazione poco ordinata riduce fiducia, aumenta domande ripetitive e rende meno efficace ogni azione commerciale o informativa.",
        solution:
          "Ho dato priorita ad architettura informativa, sezioni leggibili, CTA visibili e struttura adatta alla crescita futura dei contenuti. Il sito organizza le informazioni in modo piu istituzionale e accessibile, con attenzione alla credibilita.",
        stack: ["Information architecture", "Responsive UI", "Healthcare content", "Technical SEO"],
        result:
          "La presenza online risulta piu chiara e professionale. Le informazioni chiave sono piu facili da trovare e il sito puo' sostenere meglio comunicazioni, contatti e aggiornamenti futuri.",
        takeaways: [
          "Nel sanitario la fiducia nasce prima dalla chiarezza che dall'effetto visivo.",
          "Menu e sezioni devono ridurre le domande ricorrenti.",
          "Una base tecnica pulita aiuta anche quando il sito cresce nel tempo.",
        ],
        cta: "Vuoi rendere piu chiaro e affidabile un sito sanitario o istituzionale?",
      },
      en: {
        title: "SIAPS: healthcare institutional site with clearer information",
        category: "Healthcare / Association",
        summary:
          "An institutional website designed to make healthcare services, purpose and information paths easier to understand.",
        problem:
          "In healthcare, users need to understand where they are, what the organization offers and what to do next. Poor information structure weakens trust, creates repeated questions and lowers the effectiveness of every contact path.",
        solution:
          "I focused on information architecture, readable sections, visible CTAs and a structure that can support future content growth. The website presents information with a more institutional and credible flow.",
        stack: ["Information architecture", "Responsive UI", "Healthcare content", "Technical SEO"],
        result:
          "The online presence feels clearer and more professional. Key information is easier to find and the site can better support communication, enquiries and future updates.",
        takeaways: [
          "Healthcare trust starts with clarity before visual effects.",
          "Navigation and sections should reduce repeated questions.",
          "A clean technical base helps the site grow over time.",
        ],
        cta: "Want a clearer and more trustworthy healthcare or institutional website?",
      },
    },
  },
  {
    slug: "poliambulatorio-prof-gemelli",
    client: "Poliambulatorio Prof Gemelli",
    image: "/demo/scene-4.svg",
    externalUrl: "https://www.poliambulatorioprofgemelli.it/",
    tags: ["Medical", "Booking CTA", "Trust"],
    copy: {
      it: {
        title: "Poliambulatorio Prof Gemelli: sito medico orientato a fiducia e prenotazione",
        category: "Medical / Poliambulatorio",
        summary:
          "Un sito medico costruito per spiegare prestazioni, rafforzare autorevolezza e rendere piu semplice il contatto per una visita.",
        problem:
          "Un poliambulatorio non deve solo essere trovato online: deve far capire prestazioni, professionalita e modalita di prenotazione senza creare attrito. Se il visitatore non trova subito risposta, tende a rimandare o cercare alternative.",
        solution:
          "Ho strutturato le sezioni intorno a servizi, fiducia clinica e CTA di prenotazione. L'interfaccia privilegia leggibilita, ordine e percorsi brevi, con contenuti pensati per utenti che cercano informazioni rapide e rassicuranti.",
        stack: ["Medical website", "Service pages", "Booking path", "Performance optimization"],
        result:
          "Il sito comunica in modo piu ordinato le aree di intervento e rende piu naturale il passaggio verso una richiesta di contatto o prenotazione, soprattutto da mobile.",
        takeaways: [
          "Le pagine medicali devono spiegare senza sovraccaricare.",
          "La CTA di prenotazione deve essere visibile nei punti decisionali.",
          "Fiducia e usabilita sono parte della conversione.",
        ],
        cta: "Vuoi migliorare il sito di uno studio medico o poliambulatorio?",
      },
      en: {
        title: "Poliambulatorio Prof Gemelli: medical website for trust and booking",
        category: "Medical / Clinic",
        summary:
          "A medical website built to explain services, reinforce authority and make appointment enquiries easier.",
        problem:
          "A clinic website must do more than be found online: it needs to explain services, credibility and booking options without friction. If visitors do not find answers quickly, they delay the decision or look elsewhere.",
        solution:
          "I structured the experience around services, clinical trust and appointment CTAs. The interface prioritizes readability, order and short paths for users who need quick and reassuring information.",
        stack: ["Medical website", "Service pages", "Booking path", "Performance optimization"],
        result:
          "The website communicates service areas more clearly and makes the move toward contact or appointment request more natural, especially on mobile.",
        takeaways: [
          "Medical pages must explain without overloading the visitor.",
          "Appointment CTAs should appear at decision points.",
          "Trust and usability are part of conversion.",
        ],
        cta: "Want to improve a medical practice or clinic website?",
      },
    },
  },
  {
    slug: "studio-henergia",
    client: "Studio H Energia",
    image: "/demo/scene-3.svg",
    externalUrl: "https://example.com",
    tags: ["Energy", "Lead generation", "Next.js"],
    copy: {
      it: {
        title: "Studio H Energia: sito tecnico per servizi energia e fotovoltaico",
        category: "Energia / Fotovoltaico",
        summary:
          "Una presenza digitale per comunicare servizi tecnici in modo comprensibile, commerciale e orientato al lead.",
        problem:
          "I servizi energetici e fotovoltaici possono diventare difficili da comunicare: tanti dettagli tecnici, benefici economici da chiarire e utenti con livelli di consapevolezza diversi. Serviva un sito leggibile, non solo tecnico.",
        solution:
          "Ho organizzato messaggio, sezioni e CTA per spiegare il valore dei servizi con un linguaggio piu diretto. Il layout mette in evidenza benefici, aree operative e prossimi passi, evitando che il visitatore si perda tra dettagli tecnici.",
        stack: ["Next.js", "Responsive design", "Service landing", "Conversion copy"],
        result:
          "Il sito rende l'offerta piu comprensibile e orienta meglio il visitatore verso una richiesta, lasciando spazio sia alla parte tecnica sia alla decisione commerciale.",
        takeaways: [
          "I servizi tecnici vendono meglio quando il beneficio e' chiaro.",
          "Il copy deve tradurre la complessita in decisioni semplici.",
          "Una landing efficace separa spiegazione, prova e CTA.",
        ],
        cta: "Vuoi una pagina servizio piu chiara per offerte tecniche o B2B?",
      },
      en: {
        title: "Studio H Energia: technical website for energy and solar services",
        category: "Energy / Solar",
        summary:
          "A digital presence designed to communicate technical services in a clearer, more commercial and lead-oriented way.",
        problem:
          "Energy and solar services can be hard to communicate: technical details, economic benefits and users with different awareness levels. The project needed a readable website, not just a technical one.",
        solution:
          "I organized messaging, sections and CTAs to explain service value in a more direct way. The layout highlights benefits, operational areas and next steps without burying visitors in technical detail.",
        stack: ["Next.js", "Responsive design", "Service landing", "Conversion copy"],
        result:
          "The website makes the offer easier to understand and guides visitors toward an enquiry while keeping room for both technical credibility and commercial decision-making.",
        takeaways: [
          "Technical services sell better when the benefit is clear.",
          "Copy should translate complexity into simple decisions.",
          "An effective landing page separates explanation, proof and CTA.",
        ],
        cta: "Need a clearer service page for a technical or B2B offer?",
      },
    },
  },
  {
    slug: "domus-juliae",
    client: "Domus Juliae",
    image: "/demo/scene-1.svg",
    externalUrl: "https://example.com",
    tags: ["Hospitality", "Booking flow", "Performance"],
    copy: {
      it: {
        title: "Domus Juliae: sito hospitality veloce con percorso booking",
        category: "Casa Vacanze / Hospitality",
        summary:
          "Un sito per casa vacanze progettato per presentare l'esperienza, mostrare le informazioni essenziali e guidare verso la richiesta di prenotazione.",
        problem:
          "Nel turismo il visitatore decide in pochi secondi se restare, confrontare o prenotare. Foto, informazioni, posizione e contatto devono essere ordinati, veloci e credibili, soprattutto da smartphone.",
        solution:
          "Ho costruito una struttura orientata alla consultazione mobile: presentazione dell'alloggio, punti di forza, contenuti visivi, informazioni pratiche e CTA di booking. La priorita era rendere la scelta semplice e ridurre attriti.",
        stack: ["Hospitality website", "Mobile UX", "Image optimization", "Booking CTA"],
        result:
          "La presenza online comunica meglio l'esperienza della struttura e rende piu immediato il percorso verso richiesta o prenotazione, con una navigazione piu fluida.",
        takeaways: [
          "Per hospitality, mobile e immagini ottimizzate sono critici.",
          "Le informazioni pratiche devono comparire prima del dubbio.",
          "Il percorso di booking deve essere visibile senza interrompere l'esperienza.",
        ],
        cta: "Vuoi aumentare contatti e prenotazioni con un sito hospitality piu efficace?",
      },
      en: {
        title: "Domus Juliae: fast hospitality website with booking path",
        category: "Holiday Home / Hospitality",
        summary:
          "A holiday home website designed to present the experience, show essential information and guide visitors toward booking enquiries.",
        problem:
          "In travel, visitors decide within seconds whether to stay, compare or book. Photos, information, location and contact paths must be clear, fast and trustworthy, especially on smartphones.",
        solution:
          "I built a mobile-first browsing structure: accommodation presentation, key benefits, visual content, practical information and booking CTAs. The priority was to make choice easier and reduce friction.",
        stack: ["Hospitality website", "Mobile UX", "Image optimization", "Booking CTA"],
        result:
          "The online presence communicates the property experience more clearly and makes the path to enquiry or booking more immediate, with a smoother browsing flow.",
        takeaways: [
          "For hospitality, mobile UX and optimized images are critical.",
          "Practical information should appear before doubts arise.",
          "Booking paths should stay visible without interrupting the experience.",
        ],
        cta: "Want more enquiries and bookings from a stronger hospitality website?",
      },
    },
  },
];

export const getCaseStudyBySlug = (slug: string) =>
  CASE_STUDIES.find((study) => study.slug === slug);

export const getCaseStudyCopy = (study: CaseStudy, language: string) =>
  {
    const locale = normalizeLanguage(language);
    return locale === "it" || locale === "en" ? study.copy[locale] : localizedCaseStudies[locale][study.slug];
  };
