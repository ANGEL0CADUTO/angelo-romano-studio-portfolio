import type { CaseStudyCopy, CaseStudySlug } from "../case-studies";
export const localizedCaseStudies: Record<"de" | "fr" | "es", Record<CaseStudySlug, CaseStudyCopy>> = {
    de: {
        "nardi-arte": {
            title: "Nardi Arte: Künstlerportfolio mit klarer Bildführung", category: "Kunst / Portfolio", summary: "Eine Portfolio-Website, die Kunstwerke, künstlerische Identität und Kontaktmöglichkeiten elegant, schnell und auch auf Mobilgeräten übersichtlich präsentiert.",
            problem: "Künstlerwebsites können zu unübersichtlichen Galerien werden: zu viele Bilder, wenig Hierarchie und kein klarer Kontaktweg. Gefragt war eine digitale Präsenz, die den Werken Raum gibt, ohne die Nutzung zu erschweren.",
            solution: "Ich habe eine reduzierte visuelle Struktur mit bildbetonten Abschnitten und schneller Navigation aufgebaut. Die Werke stehen im Mittelpunkt, während ein klarer redaktioneller Rhythmus den Weg zur Anfrage erleichtert.",
            stack: ["Responsive Frontend", "Bildoptimierung", "Portfoliostruktur", "Onpage-SEO"], result: "Besucher erhalten eine geordnetere Darstellung, ein professionelleres Gesamtbild und einen direkten Kontaktweg für Sammler und mögliche Kooperationen.",
            takeaways: ["Bilder dürfen prägen, ohne die Website zu verlangsamen.", "Ein Portfolio sollte den Blick führen, statt alles gleichzeitig zu zeigen.", "Ein dezenter, sichtbarer Kontaktweg macht aus Interesse ein Gespräch."], cta: "Benötigen Sie ein professionelles Portfolio für Kunst, Design oder Ihre persönliche Marke?"
        },
        siaps: {
            title: "SIAPS: Gesundheitswebsite mit verständlicheren Informationen", category: "Gesundheitswesen / Verband", summary: "Eine institutionelle Website, die Leistungen, Ziele und Informationswege eines Gesundheitsverbands klarer vermittelt.",
            problem: "Im Gesundheitswesen müssen Nutzer schnell erkennen, was eine Organisation anbietet und wie sie weiter vorgehen können. Ungeordnete Informationen schwächen Vertrauen und verursachen wiederholte Rückfragen.",
            solution: "Ich habe Informationsarchitektur, lesbare Abschnitte und sichtbare Kontaktmöglichkeiten priorisiert. Die Struktur unterstützt auch spätere Inhalte und vermittelt die Informationen in einem glaubwürdigen institutionellen Rahmen.",
            stack: ["Informationsarchitektur", "Responsive Oberfläche", "Gesundheitsbezogene Inhalte", "Technische SEO"], result: "Wichtige Informationen lassen sich leichter finden. Die Website unterstützt Kommunikation, Anfragen und spätere Aktualisierungen mit einer klareren Struktur.",
            takeaways: ["Im Gesundheitswesen entsteht Vertrauen zuerst durch Klarheit.", "Navigation und Abschnitte sollten wiederkehrende Fragen reduzieren.", "Eine saubere technische Grundlage unterstützt späteres Wachstum."], cta: "Möchten Sie eine Gesundheits- oder Verbandswebsite klarer und vertrauenswürdiger gestalten?"
        },
        "poliambulatorio-prof-gemelli": {
            title: "Poliambulatorio Prof Gemelli: Website für Vertrauen und Terminanfragen", category: "Medizin / Ambulantes Zentrum", summary: "Eine medizinische Website, die Leistungen verständlich erklärt, fachliche Glaubwürdigkeit unterstützt und Terminanfragen erleichtert.",
            problem: "Eine Praxiswebsite muss Leistungen, Kompetenz und Buchungsmöglichkeiten verständlich vermitteln. Finden Besucher keine schnellen Antworten, verschieben sie ihre Entscheidung oder suchen anderswo weiter.",
            solution: "Ich habe die Struktur an Leistungen, medizinischer Glaubwürdigkeit und Terminanfragen ausgerichtet. Lesbarkeit, Ordnung und kurze Wege unterstützen Nutzer, die schnelle und beruhigende Informationen benötigen.",
            stack: ["Medizinische Website", "Leistungsseiten", "Terminpfad", "Leistungsoptimierung"], result: "Die Website erklärt die Leistungsbereiche klarer und erleichtert den Weg zu Kontakt oder Terminanfrage, besonders auf Mobilgeräten.",
            takeaways: ["Medizinische Seiten sollten erklären, ohne zu überfordern.", "Terminanfragen gehören an relevante Entscheidungspunkte.", "Vertrauen und Bedienbarkeit unterstützen den Kontakt."], cta: "Möchten Sie die Website einer Praxis oder eines medizinischen Zentrums verbessern?"
        },
        "studio-henergia": {
            title: "Studio H Energia: Website für Energie- und Photovoltaikleistungen", category: "Energie / Photovoltaik", summary: "Eine digitale Präsenz, die technische Leistungen verständlicher darstellt und den Weg zur Anfrage unterstützt.",
            problem: "Energie- und Photovoltaikleistungen verbinden technische Details, wirtschaftliche Vorteile und unterschiedliche Vorkenntnisse der Nutzer. Benötigt wurde eine lesbare Website, die mehr als technische Informationen bietet.",
            solution: "Ich habe Botschaften, Abschnitte und Kontaktwege so gegliedert, dass der Nutzen deutlicher wird. Vorteile, Tätigkeitsbereiche und nächste Schritte werden sichtbar, ohne Besucher mit Details zu überlasten.",
            stack: ["Next.js", "Responsive Gestaltung", "Leistungs-Landingpage", "Kontaktorientierte Texte"], result: "Das Angebot ist verständlicher und führt Besucher leichter zu einer Anfrage. Technische Glaubwürdigkeit und die geschäftliche Entscheidung erhalten beide ihren Platz.",
            takeaways: ["Technische Angebote brauchen einen klaren Nutzen.", "Texte sollten Komplexität in verständliche Entscheidungen übersetzen.", "Eine Landingpage trennt Erklärung, Belege und Kontakt."], cta: "Benötigen Sie eine klarere Leistungsseite für ein technisches oder B2B-Angebot?"
        },
        "domus-juliae": {
            title: "Domus Juliae: Ferienhauswebsite mit direktem Buchungsweg", category: "Ferienhaus / Gastgewerbe", summary: "Eine Ferienhauswebsite, die das Aufenthaltserlebnis vorstellt, praktische Informationen zeigt und zu Buchungsanfragen führt.",
            problem: "Im Tourismus entscheiden Besucher schnell, ob sie bleiben, vergleichen oder buchen. Bilder, Lage, Informationen und Kontaktwege müssen übersichtlich und glaubwürdig sein, besonders auf Smartphones.",
            solution: "Ich habe eine mobil orientierte Struktur aufgebaut: Unterkunft, Stärken, Bilder, praktische Informationen und Buchungskontakt. Ziel war eine einfachere Auswahl mit weniger Hürden.",
            stack: ["Ferienhauswebsite", "Mobile Nutzerführung", "Bildoptimierung", "Buchungskontakt"], result: "Die Online-Präsenz vermittelt das Aufenthaltserlebnis klarer und vereinfacht den Weg zur Anfrage oder Buchung durch eine flüssigere Navigation.",
            takeaways: ["Mobile Nutzung und optimierte Bilder sind im Tourismus zentral.", "Praktische Informationen sollten Fragen vorwegnehmen.", "Der Buchungsweg muss sichtbar bleiben, ohne zu stören."], cta: "Möchten Sie Anfragen und Buchungen mit einer überzeugenderen Unterkunftswebsite unterstützen?"
        }
    },
    fr: {
        "nardi-arte": {
            title: "Nardi Arte : un portfolio artistique au parcours visuel clair", category: "Art / Portfolio", summary: "Un portfolio présentant œuvres, identité artistique et contacts dans une expérience élégante, rapide et adaptée au mobile.",
            problem: "Un site artistique peut devenir une galerie confuse : trop d'images, peu de hiérarchie et aucun chemin clair vers le contact. Le projet devait mettre les œuvres en valeur sans alourdir l'expérience.",
            solution: "J'ai construit une structure visuelle sobre, des sections centrées sur les images et une navigation rapide. Les œuvres gardent leur place, avec un rythme éditorial et un passage simple vers la demande.",
            stack: ["Interface responsive", "Optimisation des images", "Structure du portfolio", "SEO sur les pages"], result: "Les visiteurs disposent d'une présentation plus ordonnée, d'une identité perçue plus professionnelle et d'un contact direct pour collectionneurs et collaborations.",
            takeaways: ["Les images peuvent guider l'expérience sans ralentir le site.", "Un portfolio doit orienter le regard plutôt que tout montrer à la fois.", "Un contact discret mais visible transforme l'intérêt en échange."], cta: "Besoin d'un portfolio professionnel pour l'art, le design ou votre marque personnelle ?"
        },
        siaps: {
            title: "SIAPS : un site institutionnel de santé aux informations plus claires", category: "Santé / Association", summary: "Un site institutionnel qui rend les services, les objectifs et les parcours d'information d'une association de santé plus compréhensibles.",
            problem: "Dans la santé, les utilisateurs doivent comprendre rapidement l'offre et la prochaine étape. Une information désorganisée fragilise la confiance et multiplie les questions récurrentes.",
            solution: "J'ai privilégié l'architecture de l'information, des sections lisibles et des contacts visibles. La structure permet l'ajout de contenus et présente les informations dans un cadre institutionnel crédible.",
            stack: ["Architecture de l'information", "Interface responsive", "Contenus de santé", "SEO technique"], result: "Les informations essentielles sont plus faciles à trouver. Le site soutient mieux la communication, les demandes et les mises à jour grâce à une structure claire.",
            takeaways: ["Dans la santé, la confiance commence par la clarté.", "La navigation doit réduire les questions répétitives.", "Une base technique propre facilite l'évolution du site."], cta: "Vous souhaitez rendre un site de santé ou institutionnel plus clair et fiable ?"
        },
        "poliambulatorio-prof-gemelli": {
            title: "Poliambulatorio Prof Gemelli : un site médical pour la confiance et les rendez-vous", category: "Santé / Centre médical", summary: "Un site médical qui explique les prestations, soutient la crédibilité et facilite les demandes de rendez-vous.",
            problem: "Un site médical doit expliquer les services, les compétences et les options de réservation. Sans réponses rapides, les visiteurs reportent leur décision ou cherchent ailleurs.",
            solution: "J'ai organisé l'expérience autour des prestations, de la confiance clinique et des demandes de rendez-vous. Lisibilité, ordre et parcours courts aident les visiteurs à trouver une information rassurante.",
            stack: ["Site médical", "Pages de prestations", "Parcours de rendez-vous", "Optimisation des performances"], result: "Les domaines de soins sont expliqués plus clairement et le passage vers un contact ou un rendez-vous devient plus naturel, notamment sur mobile.",
            takeaways: ["Les pages médicales doivent expliquer sans surcharger.", "Les demandes de rendez-vous doivent apparaître aux moments de décision.", "La confiance et l'ergonomie soutiennent la prise de contact."], cta: "Vous souhaitez améliorer le site d'un cabinet ou d'un centre médical ?"
        },
        "studio-henergia": {
            title: "Studio H Energia : un site pour les services d'énergie et de photovoltaïque", category: "Énergie / Photovoltaïque", summary: "Une présence numérique qui rend les services techniques plus compréhensibles et accompagne les demandes de contact.",
            problem: "Les services énergétiques combinent détails techniques, bénéfices économiques et différents niveaux de connaissance. Le projet avait besoin d'un site lisible, au-delà d'une présentation technique.",
            solution: "J'ai organisé les messages, les sections et les contacts pour rendre la valeur plus directe. Les bénéfices, domaines d'intervention et prochaines étapes restent visibles sans noyer les visiteurs dans les détails.",
            stack: ["Next.js", "Design responsive", "Page de service", "Textes orientés contact"], result: "L'offre est plus compréhensible et guide mieux vers une demande, tout en conservant sa crédibilité technique et commerciale.",
            takeaways: ["Les offres techniques ont besoin d'un bénéfice clair.", "Les textes doivent transformer la complexité en décisions simples.", "Une page efficace distingue explication, preuve et contact."], cta: "Besoin d'une page de service plus claire pour une offre technique ou B2B ?"
        },
        "domus-juliae": {
            title: "Domus Juliae : un site d'hébergement au parcours de réservation direct", category: "Location de vacances / Hébergement", summary: "Un site de location de vacances qui présente le séjour, les informations essentielles et le chemin vers une demande de réservation.",
            problem: "Dans le tourisme, les visiteurs décident vite de rester, comparer ou réserver. Photos, localisation, informations et contacts doivent être clairs et crédibles, surtout sur smartphone.",
            solution: "J'ai construit un parcours pensé pour le mobile : logement, points forts, images, informations pratiques et contact de réservation. La priorité était de faciliter le choix et de réduire les obstacles.",
            stack: ["Site d'hébergement", "Parcours mobile", "Optimisation des images", "Contact de réservation"], result: "Le site communique plus clairement l'expérience du lieu et rend la demande ou la réservation plus immédiate avec une navigation fluide.",
            takeaways: ["Le mobile et les images optimisées sont essentiels dans le tourisme.", "Les informations pratiques doivent anticiper les questions.", "Le parcours de réservation doit rester visible sans interrompre l'expérience."], cta: "Vous souhaitez soutenir les demandes et réservations avec un site d'hébergement plus efficace ?"
        }
    },
    es: {
        "nardi-arte": {
            title: "Nardi Arte: portfolio artístico con un recorrido visual claro", category: "Arte / Portfolio", summary: "Un portfolio que presenta obras, identidad artística y contactos en una experiencia elegante, rápida y adaptada al móvil.",
            problem: "Un sitio artístico puede convertirse en una galería confusa: demasiadas imágenes, poca jerarquía y ninguna vía clara de contacto. El proyecto debía destacar las obras sin complicar la experiencia.",
            solution: "Construí una estructura visual sencilla, secciones centradas en las imágenes y navegación rápida. Las obras mantienen su protagonismo con un ritmo editorial y un paso sencillo hacia la consulta.",
            stack: ["Interfaz adaptable", "Optimización de imágenes", "Estructura del portfolio", "SEO de páginas"], result: "Los visitantes encuentran una presentación más ordenada, una identidad más profesional y una vía directa de contacto para coleccionistas y posibles colaboradores.",
            takeaways: ["Las imágenes pueden guiar la experiencia sin ralentizar el sitio.", "Un portfolio debe orientar la mirada en lugar de mostrarlo todo a la vez.", "Un contacto discreto pero visible convierte el interés en conversación."], cta: "¿Necesitas un portfolio profesional para arte, diseño o tu marca personal?"
        },
        siaps: {
            title: "SIAPS: sitio institucional sanitario con información más clara", category: "Salud / Asociación", summary: "Un sitio institucional que explica mejor los servicios, los objetivos y los recorridos informativos de una asociación sanitaria.",
            problem: "En salud, los usuarios deben entender rápidamente la oferta y el siguiente paso. Una información desordenada reduce la confianza y genera preguntas repetitivas.",
            solution: "Prioricé la arquitectura de información, las secciones legibles y los contactos visibles. La estructura facilita contenidos futuros y presenta la información con un enfoque institucional creíble.",
            stack: ["Arquitectura de información", "Interfaz adaptable", "Contenidos sanitarios", "SEO técnico"], result: "La información esencial es más fácil de encontrar. El sitio puede apoyar mejor las comunicaciones, las consultas y las actualizaciones con una estructura clara.",
            takeaways: ["En salud, la confianza empieza por la claridad.", "La navegación debe reducir las preguntas recurrentes.", "Una base técnica limpia facilita la evolución del sitio."], cta: "¿Quieres hacer más claro y fiable un sitio sanitario o institucional?"
        },
        "poliambulatorio-prof-gemelli": {
            title: "Poliambulatorio Prof Gemelli: sitio médico para confianza y citas", category: "Salud / Centro médico", summary: "Un sitio médico que explica los servicios, refuerza la credibilidad y facilita las solicitudes de citas.",
            problem: "Un sitio médico debe explicar prestaciones, experiencia y opciones de reserva. Sin respuestas rápidas, los visitantes posponen la decisión o buscan otra alternativa.",
            solution: "Organicé la experiencia en torno a los servicios, la confianza clínica y las solicitudes de citas. La legibilidad, el orden y los recorridos breves ayudan a encontrar información tranquilizadora.",
            stack: ["Sitio médico", "Páginas de servicios", "Recorrido de citas", "Optimización del rendimiento"], result: "Las áreas de atención se explican con más claridad y el paso hacia el contacto o la cita resulta más natural, especialmente desde el móvil.",
            takeaways: ["Las páginas médicas deben explicar sin sobrecargar.", "Las solicitudes de citas deben aparecer en los puntos de decisión.", "La confianza y la facilidad de uso apoyan el contacto."], cta: "¿Quieres mejorar el sitio de una consulta o un centro médico?"
        },
        "studio-henergia": {
            title: "Studio H Energia: sitio para servicios de energía y fotovoltaica", category: "Energía / Fotovoltaica", summary: "Una presencia digital que explica mejor los servicios técnicos y acompaña las solicitudes de contacto.",
            problem: "Los servicios energéticos combinan detalles técnicos, beneficios económicos y usuarios con distintos conocimientos. El proyecto necesitaba un sitio comprensible, más allá de la información técnica.",
            solution: "Organicé mensajes, secciones y contactos para explicar el valor de forma directa. Los beneficios, las áreas de trabajo y los siguientes pasos destacan sin abrumar con detalles técnicos.",
            stack: ["Next.js", "Diseño adaptable", "Página de servicio", "Textos orientados al contacto"], result: "La oferta resulta más comprensible y guía mejor hacia una consulta, manteniendo espacio para la credibilidad técnica y la decisión comercial.",
            takeaways: ["Los servicios técnicos necesitan un beneficio claro.", "Los textos deben convertir la complejidad en decisiones sencillas.", "Una página eficaz separa explicación, pruebas y contacto."], cta: "¿Necesitas una página más clara para una oferta técnica o B2B?"
        },
        "domus-juliae": {
            title: "Domus Juliae: sitio de alojamiento con una vía directa de reserva", category: "Casa de vacaciones / Alojamiento", summary: "Un sitio de alojamiento que presenta la estancia, la información esencial y el recorrido hacia las solicitudes de reserva.",
            problem: "En turismo, los visitantes deciden rápidamente si quedarse, comparar o reservar. Fotos, ubicación, información y contactos deben ser claros y fiables, especialmente en el móvil.",
            solution: "Construí una estructura pensada para móvil: alojamiento, ventajas, imágenes, información práctica y contacto para reservar. La prioridad era facilitar la elección y reducir obstáculos.",
            stack: ["Sitio de alojamiento", "Experiencia móvil", "Optimización de imágenes", "Contacto de reserva"], result: "El sitio comunica mejor la experiencia del alojamiento y hace más directo el camino hacia la consulta o reserva, con navegación más fluida.",
            takeaways: ["El móvil y las imágenes optimizadas son esenciales en turismo.", "La información práctica debe anticipar las dudas.", "La vía de reserva debe seguir visible sin interrumpir la experiencia."], cta: "¿Quieres apoyar las consultas y reservas con un sitio de alojamiento más eficaz?"
        }
    }
};
