import { normalizeLanguage } from "./i18n";
import { localizedGrowthCopy } from "./locales/service-growth";

export type ServiceId = "webdev" | "webapp" | "automations" | "chatbot" | "scripting" | "consulting";

type Offer = {
  name: string;
  fit: string;
  description: string;
  items: string[];
};

export type ServiceGrowthCopy = {
  eyebrow: string;
  title: string;
  intro: string[];
  targetTitle: string;
  targets: string[];
  deliverablesTitle: string;
  deliverables: string[];
  processTitle: string;
  process: Array<{ title: string; description: string }>;
  offersTitle: string;
  offersNote: string;
  offers: Offer[];
  proofTitle: string;
  proof: string[];
  faqTitle: string;
  faqs: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaDescription: string;
  primaryCta: string;
  secondaryCta: string;
};

const COPY: Record<"it" | "en", Record<ServiceId, ServiceGrowthCopy>> = {
  it: {
    webdev: {
      eyebrow: "Offerta sito professionale",
      title: "Una pagina web deve vendere, spiegare e filtrare i contatti giusti.",
      intro: [
        "Un sito professionale non e' solo una vetrina elegante. Deve chiarire cosa fai, per chi lo fai, perche' sei credibile e quale azione deve compiere il visitatore. Per questo progetto ogni pagina partendo dal percorso commerciale: query, promessa, prove, CTA e tracciamento.",
        "Lavoro su siti veloci, leggibili e solidi dal punto di vista tecnico: struttura semantica, SEO on-page, performance, privacy, form di contatto, analytics e contenuti pensati per trasformare traffico in richieste reali.",
      ],
      targetTitle: "Per chi e' indicato",
      targets: [
        "Professionisti e PMI che vogliono un sito credibile e orientato ai lead.",
        "Attivita locali che ricevono traffico da Google, Maps, social e referral.",
        "Aziende con un sito datato che non genera contatti o non comunica fiducia.",
      ],
      deliverablesTitle: "Cosa consegno",
      deliverables: [
        "Architettura delle pagine, copy iniziale e CTA coerenti con l'obiettivo.",
        "Sviluppo responsive con attenzione a performance, accessibilita e SEO tecnica.",
        "Form, WhatsApp, mail, privacy/cookie link e tracking eventi principali.",
        "Deploy, controllo sitemap/robots, metadati, schema e istruzioni operative.",
      ],
      processTitle: "Come si lavora",
      process: [
        { title: "Analisi", description: "Raccolgo obiettivo, target, concorrenti, offerte e materiali esistenti." },
        { title: "Struttura", description: "Definisco pagine, sezioni, CTA, proof point e parole chiave principali." },
        { title: "Sviluppo", description: "Costruisco il sito, ottimizzo immagini, metadati, schema e performance." },
        { title: "Consegna", description: "Pubblico, verifico indicizzazione, form, redirect e tracciamento conversioni." },
      ],
      offersTitle: "Formati di progetto",
      offersNote: "Le formule servono a scegliere il perimetro corretto: landing, sito completo o restyling vengono definiti in base a obiettivo, contenuti e urgenza.",
      offers: [
        {
          name: "Landing essenziale",
          fit: "Per validare un servizio",
          description: "Una pagina ad alto impatto per validare un servizio o raccogliere lead.",
          items: ["1 pagina", "copy base", "form/WhatsApp", "SEO essenziale"],
        },
        {
          name: "Sito professionale",
          fit: "Per aziende e studi",
          description: "Sito completo per aziende, studi e professionisti con piu servizi.",
          items: ["4-7 pagine", "portfolio/casi studio", "schema", "tracking"],
        },
        {
          name: "Restyling e SEO",
          fit: "Per siti esistenti",
          description: "Rifacimento tecnico e contenutistico di un sito esistente.",
          items: ["migrazione", "redirect", "performance", "metadati"],
        },
      ],
      proofTitle: "Prove e riduzione del rischio",
      proof: [
        "Uso progetti reali come riferimento, non template generici: ogni settore richiede trust signal diversi.",
        "Le CTA vengono progettate per richieste qualificate, non solo per aumentare click casuali.",
        "Il sito viene consegnato con controlli tecnici misurabili: build, form, sitemap, robots e schema.",
      ],
      faqTitle: "Domande frequenti",
      faqs: [
        { question: "In quanto tempo posso andare online?", answer: "Una landing semplice puo' richiedere 1-2 settimane; un sito completo di solito 3-6 settimane, in base a contenuti e revisioni." },
        { question: "Puoi lavorare su un sito gia esistente?", answer: "Si. Posso mantenere identita visiva e contenuti validi, migliorando struttura, performance, SEO e conversione." },
        { question: "Scrivi anche i testi?", answer: "Posso aiutare con struttura e copy iniziale. Per testi molto specialistici lavoro con materiale del cliente e revisione congiunta." },
        { question: "La SEO e' inclusa?", answer: "Includo SEO tecnica e on-page di base: title, meta, heading, schema, sitemap, immagini e struttura interna." },
      ],
      ctaTitle: "Vuoi capire quale sito serve davvero al tuo business?",
      ctaDescription: "Scrivimi su WhatsApp o invia il form: ti rispondo con una prima valutazione concreta.",
      primaryCta: "Scrivimi su WhatsApp",
      secondaryCta: "Invia il brief",
    },
    webapp: {
      eyebrow: "Offerta web app gestionale",
      title: "Quando Excel non basta piu, serve uno strumento costruito sul tuo processo.",
      intro: [
        "Una web app gestionale serve quando il lavoro e' distribuito tra fogli, email, chat e software non comunicanti. L'obiettivo non e' aggiungere un altro tool, ma ridurre errori, doppio inserimento e tempi morti.",
        "Progetto dashboard, portali clienti, CRM leggeri e gestionali su misura con attenzione a ruoli, flussi, sicurezza e manutenzione. Ogni funzione viene collegata a un problema operativo misurabile.",
        "Prima di sviluppare, distinguo cosa deve diventare software vero e cosa puo' restare negli strumenti esistenti: questa scelta evita costi inutili e rende il progetto piu sostenibile nel tempo.",
      ],
      targetTitle: "Per chi e' indicata",
      targets: [
        "Team che lavorano con fogli Excel complessi e dati non sincronizzati.",
        "Aziende che vogliono portali clienti, ordini, ticket, report o dashboard KPI.",
        "Professionisti che hanno bisogno di uno strumento interno leggero, non di un ERP pesante.",
      ],
      deliverablesTitle: "Cosa consegno",
      deliverables: [
        "Mappa dei flussi e definizione dei ruoli utente.",
        "Interfaccia web responsive, autenticazione e struttura dati.",
        "Dashboard, filtri, export, notifiche o integrazioni API dove utili.",
        "Deploy, documentazione minima, backup e piano manutenzione.",
      ],
      processTitle: "Come si lavora",
      process: [
        { title: "Mappatura", description: "Capisco dati, utenti, regole e passaggi manuali da eliminare." },
        { title: "Prototipo", description: "Creo un flusso navigabile per validare schermate e priorita." },
        { title: "MVP", description: "Sviluppo il nucleo utile prima di aggiungere funzioni secondarie." },
        { title: "Iterazione", description: "Rilascio, raccolgo feedback e miglioro stabilita, permessi e automazioni." },
      ],
      offersTitle: "Formati di progetto",
      offersNote: "La scelta dipende da utenti, ruoli, dati, integrazioni e livello di controllo richiesto.",
      offers: [
        { name: "Dashboard MVP", fit: "Per partire con i KPI", description: "Prima versione per visualizzare dati e KPI essenziali.", items: ["login", "dashboard", "filtri", "deploy"] },
        { name: "Gestionale operativo", fit: "Per processi interni", description: "Strumento interno con flussi, ruoli e gestione dati.", items: ["database", "ruoli", "CRUD", "export"] },
        { name: "Portale clienti", fit: "Per clienti e documenti", description: "Area riservata per richieste, documenti, ordini o ticket.", items: ["area clienti", "notifiche", "documenti", "sicurezza"] },
      ],
      proofTitle: "Prove e riduzione del rischio",
      proof: [
        "Parto da un MVP per evitare mesi di sviluppo su funzioni non necessarie.",
        "Ogni schermata viene collegata a un'attivita concreta: inserire, cercare, approvare, esportare o misurare.",
        "La soluzione resta web-based: accessibile da browser, piu semplice da distribuire e aggiornare.",
      ],
      faqTitle: "Domande frequenti",
      faqs: [
        { question: "Serve sempre un database?", answer: "Se devi salvare utenti, ordini, report o storico, si. Per automazioni leggere puo' bastare integrare strumenti esistenti." },
        { question: "Posso iniziare con poche funzioni?", answer: "E' il modo migliore. Si parte da cio' che genera valore subito e si evolve dopo il primo utilizzo reale." },
        { question: "Gestisci anche hosting e manutenzione?", answer: "Si, posso proporre deploy e manutenzione in base al livello di criticita del progetto." },
        { question: "Si puo' integrare con software esistenti?", answer: "Si, se i software espongono API o esportazioni affidabili. In caso contrario valuto alternative sicure." },
      ],
      ctaTitle: "Hai un processo interno da trasformare in software?",
      ctaDescription: "Mandami il flusso attuale: ti aiuto a capire se serve una dashboard, un gestionale o una semplice automazione.",
      primaryCta: "Parliamone su WhatsApp",
      secondaryCta: "Descrivi il flusso",
    },
    automations: {
      eyebrow: "Offerta automazioni AI",
      title: "Automatizzare bene significa togliere lavoro ripetitivo senza perdere controllo.",
      intro: [
        "Le automazioni AI funzionano quando sono progettate attorno a regole chiare: cosa entra, cosa viene deciso, cosa viene controllato e cosa succede se qualcosa va storto. Non basta collegare due tool: serve un workflow affidabile.",
        "Realizzo flussi per lead, email, report, fatture, documenti, CRM e notifiche, usando API, webhook, modelli AI e controlli umani quando necessari. L'obiettivo e' risparmiare tempo senza creare un sistema opaco.",
      ],
      targetTitle: "Per chi e' indicata",
      targets: [
        "Aziende che copiano dati tra CRM, email, Excel, gestionali e piattaforme SaaS.",
        "Team commerciali che vogliono qualificare lead e rispondere rapidamente.",
        "Attivita che generano report, documenti o riepiloghi manualmente ogni settimana.",
      ],
      deliverablesTitle: "Cosa consegno",
      deliverables: [
        "Mappa del workflow e punti di controllo.",
        "Automazioni con webhook, API, Make/Zapier o codice dedicato.",
        "Prompt, logiche di validazione, notifiche e fallback manuali.",
        "Test con casi reali e documentazione per gestire errori comuni.",
      ],
      processTitle: "Come si lavora",
      process: [
        { title: "Audit", description: "Analizzo il processo attuale e quantifico tempo, errori e colli di bottiglia." },
        { title: "Disegno", description: "Definisco trigger, condizioni, dati richiesti, output e controlli." },
        { title: "Implementazione", description: "Collego strumenti, API e modelli AI con test su casi reali." },
        { title: "Monitoraggio", description: "Imposto log, alert e piccole procedure per gestire eccezioni." },
      ],
      offersTitle: "Formati di progetto",
      offersNote: "Il formato giusto dipende da strumenti coinvolti, qualita dei dati, controlli richiesti e frequenza del workflow.",
      offers: [
        { name: "Workflow rapido", fit: "Automazione singola", description: "Automazione singola per eliminare un passaggio ripetitivo.", items: ["trigger", "2-3 tool", "test", "documentazione"] },
        { name: "Lead automation", fit: "Lead e CRM", description: "Gestione lead con qualifica, risposta e inserimento CRM.", items: ["form", "AI", "CRM", "email"] },
        { name: "Sistema operativo", fit: "Workflow multi-step", description: "Workflow multi-step con dati, documenti e controlli.", items: ["API", "log", "fallback", "monitoring"] },
      ],
      proofTitle: "Prove e riduzione del rischio",
      proof: [
        "Ogni automazione ha casi di test e fallback: se manca un dato, non deve rompersi silenziosamente.",
        "Uso AI dove crea valore, non dove una regola deterministica e' piu sicura.",
        "Il workflow resta documentato, cosi non dipende da memoria o configurazioni oscure.",
      ],
      faqTitle: "Domande frequenti",
      faqs: [
        { question: "Si puo' automatizzare tutto?", answer: "No. Conviene automatizzare passaggi ripetitivi, misurabili e con regole abbastanza chiare. Le decisioni critiche possono restare approvate da una persona." },
        { question: "Serve Make o Zapier?", answer: "Dipende. Per flussi semplici sono rapidi; per logiche complesse o requisiti di sicurezza puo' convenire codice dedicato." },
        { question: "L'AI puo' leggere documenti?", answer: "Si, ma va progettata con controlli, soglie di confidenza e verifica degli output importanti." },
        { question: "Quanto tempo si risparmia?", answer: "Lo stimo in audit partendo da frequenza, durata del task e numero di persone coinvolte." },
      ],
      ctaTitle: "Quale attivita ripeti ogni settimana?",
      ctaDescription: "Scrivimela in modo semplice: ti dico se conviene automatizzarla e con quale livello di complessita.",
      primaryCta: "Valuta su WhatsApp",
      secondaryCta: "Invia il processo",
    },
    chatbot: {
      eyebrow: "Offerta chatbot e segretaria AI",
      title: "Rispondere velocemente cambia il destino di un lead.",
      intro: [
        "Un chatbot non deve sembrare intelligente a tutti i costi: deve rispondere alle domande giuste, raccogliere dati utili, qualificare il contatto e portarlo verso una prenotazione o una richiesta chiara.",
        "Realizzo chatbot web, bot WhatsApp e assistenti vocali per FAQ, lead, appuntamenti e supporto iniziale, integrandoli con calendari, CRM, email o knowledge base aziendali.",
        "Definisco anche quando il bot deve fermarsi: prezzi delicati, dati personali, casi non chiari e richieste urgenti devono avere escalation umana, conferma manuale o messaggi di sicurezza.",
      ],
      targetTitle: "Per chi e' indicato",
      targets: [
        "Studi, cliniche, servizi locali e aziende che perdono richieste fuori orario.",
        "Business che ricevono sempre le stesse domande su prezzi, disponibilita o servizi.",
        "Team che vogliono qualificare lead prima di una chiamata commerciale.",
        "Attivita che vogliono risposte rapide senza lasciare il cliente davanti a una chat generica.",
      ],
      deliverablesTitle: "Cosa consegno",
      deliverables: [
        "Mappa conversazionale e domande frequenti prioritarie.",
        "Chatbot web, WhatsApp bot o agente vocale in base al canale.",
        "Raccolta dati, qualificazione lead, notifiche e integrazione calendario/CRM.",
        "Test conversazionali e messaggi di fallback per casi non gestiti.",
      ],
      processTitle: "Come si lavora",
      process: [
        { title: "Obiettivi", description: "Definisco cosa deve fare il bot: informare, filtrare, prenotare o raccogliere lead." },
        { title: "Knowledge base", description: "Organizzo servizi, FAQ, limiti, tono e informazioni autorizzate." },
        { title: "Integrazione", description: "Collego canale, notifiche, calendario e sistemi aziendali dove necessario." },
        { title: "Test", description: "Simulo conversazioni reali e miglioro risposte, fallback e raccolta dati." },
      ],
      offersTitle: "Formati di progetto",
      offersNote: "La configurazione dipende da canale, knowledge base, integrazioni e livello di supervisione umana.",
      offers: [
        { name: "Chat widget sito", fit: "Per FAQ e contatti", description: "Assistente web per FAQ, contatti e qualificazione base.", items: ["FAQ", "lead form", "notifiche", "fallback"] },
        { name: "WhatsApp bot", fit: "Per WhatsApp Business", description: "Bot conversazionale per richieste, informazioni e appuntamenti.", items: ["WhatsApp", "flow", "lead", "calendar"] },
        { name: "Segretaria AI vocale", fit: "Per chiamate e agenda", description: "Agente vocale per rispondere, filtrare e prenotare chiamate.", items: ["voce", "script", "agenda", "test"] },
      ],
      proofTitle: "Prove e riduzione del rischio",
      proof: [
        "Il bot dichiara chiaramente limiti e passaggi verso contatto umano quando serve.",
        "Le conversazioni vengono progettate per raccogliere dati utili, non per intrattenere.",
        "Il tono resta coerente con il brand e con il livello di fiducia richiesto dal settore.",
      ],
      faqTitle: "Domande frequenti",
      faqs: [
        { question: "Il bot puo' rispondere 24/7?", answer: "Si, ma per richieste delicate conviene prevedere escalation umana o conferma manuale." },
        { question: "Puo' prenotare appuntamenti?", answer: "Si, se viene collegato a un calendario o a una procedura di conferma." },
        { question: "Si puo' usare su WhatsApp?", answer: "Si, usando strumenti compatibili con WhatsApp Business e rispettando template e policy della piattaforma." },
        { question: "Come evito risposte sbagliate?", answer: "Con knowledge base controllata, fallback, limiti espliciti e test su casi reali." },
      ],
      ctaTitle: "Vuoi capire quale bot serve davvero?",
      ctaDescription: "Partiamo da domande ricorrenti, canale e obiettivo: ti propongo il flusso piu semplice che genera valore.",
      primaryCta: "Chiedi una demo",
      secondaryCta: "Descrivi il bot",
    },
    scripting: {
      eyebrow: "Offerta scripting e scraping",
      title: "Dati puliti e processi automatici valgono piu di ore passate a copiare.",
      intro: [
        "Script e scraper sono utili quando servono dati ricorrenti, trasformazioni massive, controlli su file o integrazioni che un software standard non gestisce bene. La priorita e' affidabilita: input chiari, output verificabili e rispetto dei limiti tecnici e legali.",
        "Sviluppo script in Python, Go, TypeScript o C dove serve performance, con attenzione a logging, validazione, formati CSV/Excel, API, scheduling e gestione errori.",
      ],
      targetTitle: "Per chi e' indicato",
      targets: [
        "Aziende che devono pulire, validare o trasformare file ricorrenti.",
        "Team che vogliono monitorare dati pubblici, listini o disponibilita in modo controllato.",
        "Progetti che richiedono integrazioni API o ponte tra sistemi legacy e cloud.",
      ],
      deliverablesTitle: "Cosa consegno",
      deliverables: [
        "Script documentato con parametri chiari e output prevedibile.",
        "Parser, scraper, integrazioni API, report o automazioni su file.",
        "Log, gestione errori, rate limit e test su dataset campione.",
        "Istruzioni di esecuzione locale/server e possibili evoluzioni.",
      ],
      processTitle: "Come si lavora",
      process: [
        { title: "Campione dati", description: "Analizzo input reali, formati, eccezioni e output desiderato." },
        { title: "Regole", description: "Definisco trasformazioni, limiti, validazioni e frequenza di esecuzione." },
        { title: "Sviluppo", description: "Creo lo script con log, test e gestione errori principali." },
        { title: "Consegna", description: "Documento uso, parametri e manutenzione minima." },
      ],
      offersTitle: "Formati di progetto",
      offersNote: "Il perimetro dipende da fonti dati, formati, limiti tecnici, API disponibili e modalita di esecuzione.",
      offers: [
        { name: "Script file/Excel", fit: "Per file ricorrenti", description: "Pulizia, validazione o trasformazione ricorrente di file.", items: ["CSV/Excel", "validazione", "export", "istruzioni"] },
        { name: "Scraper controllato", fit: "Per dati pubblici", description: "Raccolta dati pubblici con limiti, log e output strutturato.", items: ["parser", "rate limit", "log", "dataset"] },
        { name: "Integrazione API", fit: "Per sistemi con API", description: "Collegamento tra sistemi, sincronizzazione o report automatici.", items: ["API", "auth", "sync", "monitoring"] },
      ],
      proofTitle: "Prove e riduzione del rischio",
      proof: [
        "Valuto sempre fattibilita tecnica e rispetto di termini/robots prima di uno scraping.",
        "Gli output sono pensati per essere controllabili: file, log, report o database.",
        "Gli script possono partire piccoli e diventare automazioni schedulate solo quando il valore e' chiaro.",
      ],
      faqTitle: "Domande frequenti",
      faqs: [
        { question: "Lo scraping e' sempre possibile?", answer: "No. Va valutato caso per caso considerando termini del sito, dati raccolti, frequenza e impatto tecnico." },
        { question: "Puoi automatizzare file Excel?", answer: "Si, soprattutto quando ci sono regole ricorrenti, pulizia dati, validazioni o report standard." },
        { question: "Serve un server?", answer: "Solo se lo script deve girare in automatico. Per uso manuale puo' bastare un comando locale o un piccolo tool." },
        { question: "Come gestisci errori e cambi di formato?", answer: "Con log, validazioni e controlli sui dati; i siti esterni possono cambiare, quindi va prevista manutenzione." },
      ],
      ctaTitle: "Hai un file, una fonte o un processo da automatizzare?",
      ctaDescription: "Mandami un esempio reale o descrivi l'output che vuoi ottenere: ti dico il modo piu semplice per arrivarci.",
      primaryCta: "Valuta il caso",
      secondaryCta: "Invia esempio",
    },
    consulting: {
      eyebrow: "Offerta consulenza IT e cybersecurity",
      title: "Quando il problema e' tecnico, serve una diagnosi prima della soluzione.",
      intro: [
        "La consulenza IT serve quando un sistema e' lento, fragile, poco sicuro o difficile da mantenere. Prima di proporre tecnologie, analizzo vincoli, rischi, codice, infrastruttura e obiettivo di business.",
        "Supporto audit sicurezza, performance, architetture distribuite, backend, cloud, sistemi embedded e revisione tecnica pre-investimento. L'output deve essere operativo: priorita, rischi e prossimi passi.",
        "Una buona consulenza deve aiutarti a decidere: correggere subito, rifattorizzare, monitorare, sostituire un componente o fermare un investimento rischioso. Per questo separo evidenze, ipotesi e raccomandazioni.",
        "Quando intervengo su sicurezza e performance, considero anche impatto operativo, dati trattati, responsabilita del team e continuita del servizio. La soluzione migliore e' quella che puoi mantenere davvero.",
        "Il lavoro e' utile anche quando hai gia fornitori o sviluppatori: posso entrare come revisione indipendente, chiarire tradeoff e aiutare a definire requisiti tecnici prima di cambiare stack o budget.",
      ],
      targetTitle: "Per chi e' indicata",
      targets: [
        "Aziende che devono capire se un sistema e' sicuro, scalabile o mantenibile.",
        "Team che hanno colli di bottiglia backend, database o infrastrutturali.",
        "Founder e responsabili che vogliono una valutazione tecnica prima di investire.",
      ],
      deliverablesTitle: "Cosa consegno",
      deliverables: [
        "Analisi tecnica con problemi, impatto e priorita.",
        "Raccomandazioni su sicurezza, performance, architettura o stack.",
        "Roadmap di intervento con quick win e rischi principali.",
        "Supporto operativo per hardening, refactor, deploy o debugging.",
        "Sintesi per decision maker: cosa fare ora, cosa pianificare e cosa evitare.",
        "Sessione di allineamento per spiegare findings tecnici anche a chi deve approvare budget e priorita.",
      ],
      processTitle: "Come si lavora",
      process: [
        { title: "Intake", description: "Raccolgo contesto, accessi disponibili, sintomi, vincoli e obiettivi." },
        { title: "Audit", description: "Analizzo codice, configurazioni, architettura, log o flussi critici." },
        { title: "Report", description: "Produco raccomandazioni prioritarie, non una lista generica di best practice." },
        { title: "Intervento", description: "Se serve, passo dalla diagnosi alla correzione o affianco il team." },
      ],
      offersTitle: "Formati di progetto",
      offersNote: "Il formato dipende da accessi disponibili, criticita del sistema, profondita richiesta e urgenza decisionale.",
      offers: [
        { name: "Audit rapido", fit: "Diagnosi mirata", description: "Analisi mirata su un problema tecnico specifico.", items: ["call", "review", "report", "priorita"] },
        { name: "Audit sicurezza/performance", fit: "Audit approfondito", description: "Valutazione piu profonda con piano operativo.", items: ["OWASP", "performance", "infra", "roadmap"] },
        { name: "Supporto tecnico", fit: "Affiancamento operativo", description: "Affiancamento su refactor, deploy, debug o architettura.", items: ["hands-on", "review", "fix", "handover"] },
      ],
      proofTitle: "Prove e riduzione del rischio",
      proof: [
        "L'approccio e' ingegneristico: prima diagnosi, poi intervento proporzionato al rischio.",
        "Le raccomandazioni sono ordinate per impatto e dipendenze, non per moda tecnologica.",
        "Posso lavorare su codice, infrastruttura e processo, collegando aspetti tecnici e business.",
        "Le evidenze vengono collegate a rischi concreti: downtime, perdita dati, costi di manutenzione o vulnerabilita.",
        "I rischi vengono spiegati in linguaggio operativo.",
      ],
      faqTitle: "Domande frequenti",
      faqs: [
        { question: "Puoi firmare NDA?", answer: "Si, se il progetto lo richiede e i termini sono ragionevoli." },
        { question: "Serve accesso al codice?", answer: "Per audit approfonditi si. Per una prima valutazione bastano spesso contesto, sintomi e architettura generale." },
        { question: "Fai anche interventi pratici?", answer: "Si, posso limitarmi al report o occuparmi anche di hardening, refactor, debugging e deploy." },
        { question: "Puoi lavorare con il team esistente?", answer: "Si, posso affiancare sviluppatori o responsabili tecnici senza sostituire il processo interno." },
      ],
      ctaTitle: "Hai un dubbio tecnico che blocca una decisione?",
      ctaDescription: "Scrivimi il contesto: ti propongo un audit proporzionato, con output chiaro e utilizzabile.",
      primaryCta: "Prenota valutazione",
      secondaryCta: "Invia dettagli",
    },
  },
  en: {
    webdev: {
      eyebrow: "Professional website offer",
      title: "A website should sell, explain and filter the right leads.",
      intro: [
        "A professional website is not just a polished visual presence. It must explain what you do, who it is for, why you are credible and which action the visitor should take next.",
        "I build fast, readable and technically solid websites with semantic structure, on-page SEO, performance, privacy links, contact paths, analytics and content designed to turn traffic into qualified requests.",
      ],
      targetTitle: "Best fit",
      targets: ["Professionals and SMEs that need a credible lead-generation website.", "Local businesses receiving traffic from Google, Maps, social and referrals.", "Companies with an outdated website that no longer creates trust or leads."],
      deliverablesTitle: "Deliverables",
      deliverables: ["Page architecture, initial copy and conversion-focused CTAs.", "Responsive development with performance, accessibility and technical SEO.", "Forms, WhatsApp, email, privacy links and conversion event tracking.", "Deploy, sitemap/robots checks, metadata, schema and handover notes."],
      processTitle: "Process",
      process: [
        { title: "Discovery", description: "We collect goals, audience, competitors, offers and existing materials." },
        { title: "Structure", description: "We define pages, sections, CTAs, proof points and primary search intent." },
        { title: "Build", description: "I implement the website and optimize images, metadata, schema and performance." },
        { title: "Launch", description: "I verify indexing basics, forms, redirects and conversion tracking." },
      ],
      offersTitle: "Project formats",
      offersNote: "The right format depends on the goal, content readiness, integrations and launch urgency.",
      offers: [
        { name: "Focused landing", fit: "For service validation", description: "One conversion-focused page for a service or campaign.", items: ["1 page", "basic copy", "form/WhatsApp", "SEO basics"] },
        { name: "Business website", fit: "For businesses and studios", description: "A complete website for professionals and businesses.", items: ["4-7 pages", "portfolio", "schema", "tracking"] },
        { name: "Redesign and SEO", fit: "For existing websites", description: "Technical and content rebuild of an existing site.", items: ["migration", "redirects", "performance", "metadata"] },
      ],
      proofTitle: "Risk reduction",
      proof: ["Real projects are used as references, not generic templates.", "CTAs are designed for qualified requests, not random clicks.", "The website is delivered with measurable technical checks."],
      faqTitle: "FAQ",
      faqs: [
        { question: "How fast can we launch?", answer: "A focused landing page can take 1-2 weeks; a complete website usually takes 3-6 weeks depending on content and revisions." },
        { question: "Can you work on an existing site?", answer: "Yes. I can preserve what works and improve structure, performance, SEO and conversion." },
        { question: "Do you write the copy?", answer: "I can help with structure and initial copy, then refine with your domain knowledge." },
        { question: "Is SEO included?", answer: "Technical and on-page SEO basics are included: title, meta, headings, schema, sitemap, images and internal structure." },
      ],
      ctaTitle: "Need to understand which website your business really needs?",
      ctaDescription: "Message me on WhatsApp or send the form and I will reply with a practical first assessment.",
      primaryCta: "Message on WhatsApp",
      secondaryCta: "Send the brief",
    },
    webapp: {
      eyebrow: "Custom web app offer",
      title: "When spreadsheets are not enough, build around the real process.",
      intro: [
        "A custom web app helps when work is scattered across spreadsheets, emails, chats and tools that do not talk to each other.",
        "I design dashboards, client portals, lightweight CRMs and management tools around roles, workflows, security and maintenance.",
        "Before building, I separate what needs real software from what can stay in existing tools, so the project avoids unnecessary cost and remains easier to maintain.",
      ],
      targetTitle: "Best fit",
      targets: ["Teams working with complex spreadsheets and unsynchronized data.", "Businesses that need client portals, orders, tickets, reports or KPI dashboards.", "Professionals who need a lightweight internal tool instead of a heavy ERP."],
      deliverablesTitle: "Deliverables",
      deliverables: ["Workflow map and user roles.", "Responsive web interface, authentication and data model.", "Dashboards, filters, exports, notifications or API integrations.", "Deploy, basic documentation, backups and maintenance plan."],
      processTitle: "Process",
      process: [{ title: "Mapping", description: "We understand data, users, rules and manual steps." }, { title: "Prototype", description: "We validate screens and priorities before heavy development." }, { title: "MVP", description: "I build the core workflow first." }, { title: "Iteration", description: "We improve stability, permissions and automation from real usage." }],
      offersTitle: "Project formats",
      offersNote: "The choice depends on users, roles, data, integrations and the level of operational control required.",
      offers: [
        { name: "Dashboard MVP", fit: "To start with KPIs", description: "First version to visualize key data and KPIs.", items: ["login", "dashboard", "filters", "deploy"] },
        { name: "Operational tool", fit: "For internal processes", description: "Internal tool with workflows, roles and data management.", items: ["database", "roles", "CRUD", "export"] },
        { name: "Client portal", fit: "For clients and documents", description: "Private area for requests, documents, orders or tickets.", items: ["client area", "notifications", "documents", "security"] },
      ],
      proofTitle: "Risk reduction",
      proof: ["Start with an MVP before adding secondary features.", "Every screen maps to a concrete task.", "The solution stays web-based and easier to deploy."],
      faqTitle: "FAQ",
      faqs: [{ question: "Do we always need a database?", answer: "If you need users, orders, reports or history, yes. Smaller automations may only need integrations." }, { question: "Can we start small?", answer: "Yes, and it is usually the best path." }, { question: "Can you handle hosting?", answer: "Yes, based on project criticality." }, { question: "Can it integrate with existing tools?", answer: "Yes, when reliable APIs or exports exist." }],
      ctaTitle: "Do you have an internal process to turn into software?",
      ctaDescription: "Send me your current workflow and I will help you choose between a dashboard, a management tool or an automation.",
      primaryCta: "Discuss on WhatsApp",
      secondaryCta: "Describe the workflow",
    },
    automations: {
      eyebrow: "AI automation offer",
      title: "Good automation removes repetitive work without removing control.",
      intro: ["AI automation works when inputs, decisions, checks and failure paths are clear.", "I build workflows for leads, email, reports, invoices, documents, CRM and notifications using APIs, webhooks, AI models and human checks where needed."],
      targetTitle: "Best fit",
      targets: ["Businesses copying data between CRM, email, spreadsheets and SaaS platforms.", "Sales teams that need faster lead qualification and replies.", "Teams producing recurring reports, summaries or documents manually."],
      deliverablesTitle: "Deliverables",
      deliverables: ["Workflow map and control points.", "Automation with webhooks, APIs, Make/Zapier or custom code.", "Prompts, validation logic, notifications and manual fallbacks.", "Tests with real cases and operational notes."],
      processTitle: "Process",
      process: [{ title: "Audit", description: "We estimate time, errors and bottlenecks." }, { title: "Design", description: "We define triggers, conditions, required data and outputs." }, { title: "Implementation", description: "I connect tools, APIs and AI models." }, { title: "Monitoring", description: "We set logs, alerts and exception handling." }],
      offersTitle: "Project formats",
      offersNote: "The right format depends on the connected tools, data quality, checks required and workflow frequency.",
      offers: [
        { name: "Quick workflow", fit: "Single automation", description: "Single automation to remove a repetitive step.", items: ["trigger", "2-3 tools", "test", "docs"] },
        { name: "Lead automation", fit: "Leads and CRM", description: "Lead capture, qualification, reply and CRM handoff.", items: ["form", "AI", "CRM", "email"] },
        { name: "Operating workflow", fit: "Multi-step workflow", description: "Multi-step workflow with documents, data and checks.", items: ["API", "logs", "fallback", "monitoring"] },
      ],
      proofTitle: "Risk reduction",
      proof: ["Every workflow has test cases and fallback paths.", "AI is used where it adds value, not where a deterministic rule is safer.", "The workflow stays documented."],
      faqTitle: "FAQ",
      faqs: [{ question: "Can everything be automated?", answer: "No. It is best to automate repetitive and measurable steps." }, { question: "Do we need Make or Zapier?", answer: "Simple flows can use them; complex logic may need custom code." }, { question: "Can AI read documents?", answer: "Yes, with checks and confidence thresholds." }, { question: "How much time can we save?", answer: "We estimate it during audit from task frequency and duration." }],
      ctaTitle: "Which task do you repeat every week?",
      ctaDescription: "Send it to me and I will tell you whether it is worth automating.",
      primaryCta: "Evaluate on WhatsApp",
      secondaryCta: "Send the process",
    },
    chatbot: {
      eyebrow: "Chatbot and AI receptionist offer",
      title: "Fast replies can decide whether a lead becomes a customer.",
      intro: [
        "A chatbot should answer the right questions, collect useful data, qualify the lead and move the person toward a booking or clear request.",
        "I build web chatbots, WhatsApp bots and voice assistants for FAQs, leads, appointments and first-line support.",
        "I also define when the bot must stop: sensitive commercial details, personal data, unclear cases and urgent requests need human escalation, manual confirmation or safety messages.",
      ],
      targetTitle: "Best fit",
      targets: ["Clinics, studios, local services and companies losing requests after hours.", "Businesses receiving repeated questions about services, availability or next steps.", "Teams that want to qualify leads before a sales call.", "Businesses that want fast replies without leaving customers inside a generic chat."],
      deliverablesTitle: "Deliverables",
      deliverables: ["Conversation map and priority FAQs.", "Web chatbot, WhatsApp bot or voice agent.", "Lead capture, qualification, notifications and calendar/CRM integration.", "Conversation tests and fallback messages."],
      processTitle: "Process",
      process: [{ title: "Goals", description: "We decide whether the bot informs, filters, books or captures leads." }, { title: "Knowledge base", description: "We organize services, FAQs, tone and allowed answers." }, { title: "Integration", description: "I connect channel, notifications, calendar and business tools." }, { title: "Testing", description: "We simulate real conversations and refine fallbacks." }],
      offersTitle: "Project formats",
      offersNote: "Configuration depends on channel, knowledge base, integrations and the level of human supervision needed.",
      offers: [
        { name: "Website chat widget", fit: "For FAQs and contacts", description: "Assistant for FAQs, contacts and basic qualification.", items: ["FAQ", "lead form", "notifications", "fallback"] },
        { name: "WhatsApp bot", fit: "For WhatsApp Business", description: "Conversational bot for requests, info and appointments.", items: ["WhatsApp", "flow", "lead", "calendar"] },
        { name: "Voice AI receptionist", fit: "For calls and booking", description: "Voice agent to reply, filter and book calls.", items: ["voice", "script", "agenda", "tests"] },
      ],
      proofTitle: "Risk reduction",
      proof: ["The bot clearly states limits and routes to a human where needed.", "Conversations are designed to collect useful data.", "Tone stays consistent with the trust level of the business."],
      faqTitle: "FAQ",
      faqs: [{ question: "Can the bot reply 24/7?", answer: "Yes, with human escalation for sensitive requests." }, { question: "Can it book appointments?", answer: "Yes, if connected to a calendar or confirmation workflow." }, { question: "Can it work on WhatsApp?", answer: "Yes, using WhatsApp Business compatible tools and policies." }, { question: "How do we avoid wrong replies?", answer: "With a controlled knowledge base, fallbacks, limits and testing." }],
      ctaTitle: "Want to understand which bot you really need?",
      ctaDescription: "We start from recurring questions, channel and business goal.",
      primaryCta: "Ask for a demo",
      secondaryCta: "Describe the bot",
    },
    scripting: {
      eyebrow: "Scripting and scraping offer",
      title: "Clean data and automatic processes are worth more than hours of copying.",
      intro: ["Scripts and scrapers are useful for recurring data collection, massive transformations, file checks or integrations standard software cannot handle.", "I develop Python, Go, TypeScript or C scripts where performance matters, with logging, validation, CSV/Excel handling, APIs, scheduling and error management."],
      targetTitle: "Best fit",
      targets: ["Businesses cleaning, validating or transforming recurring files.", "Teams monitoring public data, catalogs or availability in a controlled way.", "Projects requiring API integrations or bridges between legacy and cloud systems."],
      deliverablesTitle: "Deliverables",
      deliverables: ["Documented script with clear parameters and predictable output.", "Parser, scraper, API integration, report or file automation.", "Logs, error handling, rate limits and tests on sample data.", "Execution instructions and maintenance notes."],
      processTitle: "Process",
      process: [{ title: "Data sample", description: "We analyze real inputs, formats, exceptions and desired outputs." }, { title: "Rules", description: "We define transformations, limits, validation and frequency." }, { title: "Build", description: "I build the script with logging and error handling." }, { title: "Handover", description: "I document usage, parameters and maintenance." }],
      offersTitle: "Project formats",
      offersNote: "Scope depends on data sources, formats, technical limits, available APIs and execution mode.",
      offers: [
        { name: "File/Excel script", fit: "For recurring files", description: "Recurring cleaning, validation or transformation.", items: ["CSV/Excel", "validation", "export", "instructions"] },
        { name: "Controlled scraper", fit: "For public data", description: "Public data collection with limits, logs and structured output.", items: ["parser", "rate limit", "logs", "dataset"] },
        { name: "API integration", fit: "For systems with APIs", description: "System connection, synchronization or automated reports.", items: ["API", "auth", "sync", "monitoring"] },
      ],
      proofTitle: "Risk reduction",
      proof: ["I check technical feasibility and site terms before scraping.", "Outputs are verifiable through files, logs, reports or databases.", "Scripts can start small and become scheduled automations later."],
      faqTitle: "FAQ",
      faqs: [{ question: "Is scraping always possible?", answer: "No. It must be evaluated against terms, data type, frequency and technical impact." }, { question: "Can you automate Excel files?", answer: "Yes, especially for recurring rules, validation and reports." }, { question: "Do we need a server?", answer: "Only if the script must run automatically." }, { question: "How do you manage changes?", answer: "With logs, validation and maintenance for external format changes." }],
      ctaTitle: "Have a file, source or process to automate?",
      ctaDescription: "Send a real example or describe the output you want.",
      primaryCta: "Evaluate the case",
      secondaryCta: "Send example",
    },
    consulting: {
      eyebrow: "IT and cybersecurity consulting offer",
      title: "When the problem is technical, diagnose before choosing the solution.",
      intro: [
        "IT consulting helps when a system is slow, fragile, insecure or hard to maintain.",
        "I support security audits, performance analysis, distributed architecture, backend, cloud, embedded systems and pre-investment technical reviews.",
        "Good consulting should help you decide whether to fix now, refactor, monitor, replace a component or stop a risky investment. I separate evidence, assumptions and recommendations.",
        "For security and performance work, I consider operational impact, handled data, team responsibility and service continuity. The best solution is the one you can actually maintain.",
        "This is useful even when you already have suppliers or developers: I can act as an independent review, clarify tradeoffs and define technical requirements before changing stack or budget.",
      ],
      targetTitle: "Best fit",
      targets: ["Companies evaluating whether a system is secure, scalable or maintainable.", "Teams with backend, database or infrastructure bottlenecks.", "Founders and managers needing a technical review before investment."],
      deliverablesTitle: "Deliverables",
      deliverables: [
        "Technical analysis with problems, impact and priorities.",
        "Recommendations on security, performance, architecture or stack.",
        "Intervention roadmap with quick wins and key risks.",
        "Hands-on support for hardening, refactor, deploy or debugging.",
        "Decision-maker summary: what to do now, what to plan and what to avoid.",
        "Alignment session to explain technical findings to the people approving budget and priorities.",
      ],
      processTitle: "Process",
      process: [{ title: "Intake", description: "We collect context, available access, symptoms, constraints and goals." }, { title: "Audit", description: "I review code, configuration, architecture, logs or critical flows." }, { title: "Report", description: "You get prioritized recommendations, not generic best practices." }, { title: "Action", description: "If needed, I move from diagnosis to implementation or team support." }],
      offersTitle: "Project formats",
      offersNote: "The format depends on available access, system criticality, required depth and decision urgency.",
      offers: [
        { name: "Quick audit", fit: "Focused diagnosis", description: "Focused review of one technical problem.", items: ["call", "review", "report", "priorities"] },
        { name: "Security/performance audit", fit: "Deep audit", description: "Deeper review with operational plan.", items: ["OWASP", "performance", "infra", "roadmap"] },
        { name: "Technical support", fit: "Operational support", description: "Hands-on support for refactor, deploy, debug or architecture.", items: ["hands-on", "review", "fix", "handover"] },
      ],
      proofTitle: "Risk reduction",
      proof: ["Diagnosis comes before implementation.", "Recommendations are ordered by impact and dependencies.", "I connect code, infrastructure, process and business priorities.", "Evidence is tied to concrete risks such as downtime, data loss, maintenance cost or vulnerabilities.", "Risks are explained in operational language."],
      faqTitle: "FAQ",
      faqs: [{ question: "Can you sign an NDA?", answer: "Yes, when required and reasonable." }, { question: "Do you need code access?", answer: "For deep audits yes; early assessments can start from context and symptoms." }, { question: "Can you implement fixes?", answer: "Yes, I can provide a report or support hardening, refactor, debugging and deploy." }, { question: "Can you work with an existing team?", answer: "Yes, I can support developers or technical managers." }],
      ctaTitle: "Have a technical doubt blocking a decision?",
      ctaDescription: "Send me the context and I will suggest a proportional audit with a clear output.",
      primaryCta: "Book an assessment",
      secondaryCta: "Send details",
    },
  },
};

export const getServiceGrowthCopy = (service: ServiceId, language: string): ServiceGrowthCopy => {
  const locale = normalizeLanguage(language);
  return (locale === "it" || locale === "en" ? COPY[locale] : localizedGrowthCopy[locale])[service];
};
