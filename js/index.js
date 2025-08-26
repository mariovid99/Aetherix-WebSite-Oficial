// Animaciones al hacer scroll
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
            }
        });
    },
    {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    }
);

fadeElements.forEach((element) => {
    observer.observe(element);
});

// Navbar scroll effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        mobileMenuBtn.innerHTML = navLinks.classList.contains("active")
            ? '<i class="fas fa-times fa-lg"></i>'
            : '<i class="fas fa-bars fa-lg"></i>';
    });
}

// Form submission
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // Aquí iría la lógica de envío del formulario
        alert(
            "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto."
        );
        contactForm.reset();
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth",
            });

            // Cerrar menú móvil si está abierto
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars fa-lg"></i>';
            }
        }
    });
});

// Translation System
const translations = {
    es: {
        // Navbar
        "nav-inicio": "Inicio",
        "nav-nosotros": "Nosotros",
        "nav-servicios": "Servicios",
        "nav-casos": "Presentación",
        "nav-investigacion": "Investigación",
        "nav-contacto": "Contáctanos",

        // Hero Section
        "hero-title":
            'IA que transforma datos en decisiones y resultados',
        "hero-subtitle":
            "Soluciones de IA empresarial que impulsan el crecimiento, optimizan procesos y generan valor real para tu organización",
        "hero-cta-primary": "Agendar Demo Gratuita",
        "hero-cta-secondary": "Conocer los Servicios",
        "hero-badge-1": "Industria 4.0",
        "hero-badge-2": "Ciencia de Datos aplicada",
        "hero-badge-3": "Implementación end-to-end",
        // About Section
        "about-title": "Quiénes Somos",
        "about-subtitle": "Expertos en transformación digital con IA",
        "about-description":
            "En Aetherix, somos pioneros en la implementación de soluciones de Inteligencia Artificial empresarial. Nuestro equipo de expertos combina conocimiento técnico avanzado con experiencia en consultoría estratégica para transformar completamente la forma en que las empresas operan y compiten en el mercado digital.",
        "about-feature-1": "Más de 5 años de experiencia en IA empresarial",
        "about-feature-2":
            "Equipo multidisciplinario de científicos de datos",
        "about-feature-3": "Casos de éxito en múltiples industrias",

        // Services Section
        "services-title": "Nuestros Servicios",
        "services-subtitle": "Soluciones integrales de IA para tu empresa",
        "service-1-title": "IA a la Medida",
        "service-1-desc":
            "Desarrollamos soluciones de inteligencia artificial personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.",
        "service-2-title": "Automatización de Procesos",
        "service-2-desc":
            "Optimizamos y automatizamos tus procesos empresariales utilizando tecnologías de IA avanzadas para maximizar la eficiencia operacional.",
        "service-3-title": "Mantenimiento Predictivo",
        "service-3-desc":
            "Implementamos sistemas de mantenimiento predictivo que utilizan IA para prevenir fallas y optimizar el rendimiento de tus equipos.",
        "service-4-title": "EPP Intelligence",
        "service-4-desc":
            "Sistemas inteligentes de monitoreo y gestión de equipos de protección personal para garantizar la seguridad laboral.",
        "service-5-title": "HR Analytics Suite",
        "service-5-desc":
            "Plataforma integral de análisis de recursos humanos que utiliza IA para optimizar la gestión del talento y mejorar la experiencia del empleado.",

        //Investigation Section
        "innovation-tag": "Innovación",
        "dynamic-network-methodology": "Metodología de red hiperdinámica",
        "dynamic-network-methodology-description":
            "Desarrollada por el M. en C. Mario Alberto Jara Reyna, nuestra metodología patentada logra mejoras de hasta 90% en precisión y velocidad de calibración óptica con IA.",
        "dynamic-network-methodology-description-2":
            "Esta tecnología revolucionaria aplicada a mantenimiento predictivo en tiempo real permite detectar anomalías con una precisión sin precedentes, reduciendo falsos positivos y maximizando la disponibilidad de activos críticos.",
        "explore-research": "Explorar investigación",

        // Leadership Section
        "leadership-title": "Nuestro Liderazgo",
        "leadership-subtitle": "Conoce al equipo que lidera la innovación",
        "leader-mario-title": "CEO & Fundador",
        "leader-mario-desc":
            "Experto en IA y transformación digital con más de 8 años de experiencia.",
        "leader-carolina-title": "Head of Marketing",
        "leader-carolina-desc":
            "Especialista en marketing digital y estrategias de crecimiento empresarial.",
        "leader-luis-title": "Head of Data Science",
        "leader-luis-desc":
            "PhD en Ciencias de la Computación, especializado en machine learning y big data.",
        "leader-maria-title": "Head of Operations",
        "leader-maria-desc":
            "Experta en optimización de procesos y gestión de proyectos tecnológicos.",

        // Contact Section
        "contact-title": "Contáctanos",
        "contact-subtitle": "Comencemos a transformar tu negocio juntos",
        "contact-whatsapp": "Enviar WhatsApp",
        "contact-demo": "Agendar Demo",
        "contact-info": "Información de Contacto",
        "contact-address": "Monterrey, Nuevo León, México",
        "contact-phone": "+52 811 066 6514",
        "contact-phone-tag": "Teléfono",
        "contact-email": "info@aetherix.mx",
        "contact-team-location":
            "Nuestro equipo está ubicado en el corazón tecnológico del norte de México, trabajando con empresas de todo el país.",
        "contact-schedule": "Horario de atención",
        "contact-weekdays": "Lunes a Viernes: 9:00 AM - 6:00 PM",
        "contact-saturdays": "Sábados: 10:00 AM - 2:00 PM",
        "form-name": "Nombre completo",
        "form-company": "Empresa",
        "form-email": "Email",
        "form-phone": "Teléfono",
        "form-interest": "Área de interés",
        "form-message": "Mensaje",
        "form-privacy": "Acepto el tratamiento de información",
        "form-submit": "Enviar mensaje",
        "form-option-epp": "Monitoreo EPP",
        "form-option-maintenance": "Mantenimiento Predictivo",
        "form-option-automation": "Automatización",
        "form-option-hr": "HR Analytics",
        "form-option-bi": "Business Intelligence",
        "form-option-custom": "IA Personalizada",

        // Value Propositions
        "value-prop-1-title": "Resultados medibles",
        "value-prop-1-desc":
            "KPIs claros que demuestran el impacto en tu operación y resultados financieros.",
        "value-prop-2-title": "Adopción ágil",
        "value-prop-2-desc":
            "Despliegue rápido con metodologías probadas para maximizar tu ROI.",
        "value-prop-3-title": "Integración con tu stack",
        "value-prop-3-desc":
            "Compatible con tus sistemas existentes sin interrupciones operativas.",
        "value-prop-4-title": "Seguridad y cumplimiento",
        "value-prop-4-desc":
            "Nos alineamos a los estándares de seguridad y normativas internacionales.",

        // Video Section
        "video-title": "Video Corporativo",
        "video-subtitle":
            "Descubre cómo Aetherix transforma empresas con inteligencia artificial y tecnología de vanguardia.",
        "video-caption": "Conoce nuestra visión y casos de impacto",

        // CTA Section
        "cta-title": "¿Listo para transformar tu negocio?",
        "cta-subtitle":
            "Agenda una consulta gratuita y descubre cómo la IA puede impulsar tus resultados.",
        "cta-button": "Agendar demo",

        // Team positions
        "team-ceo": "CEO & Fundador",
        "team-marketing": "Directora General",
        "team-operations": "Director de Operaciones",
        "team-datascience": "Director de Ciencias de Datos",
        "view-profile": "Ver perfil",

        // Leader titles
        "leader-lydia-title": "Directora General (CEO)",
        "leader-mario-vidana-title": "Director de Operaciones (COO)",
        "leader-carlos-title": "Director de Negocios (CBO)",
        "leader-mario-jara-title": "Director de I+D (R&D)",

        // Footer
        "footer-privacy": "Política de privacidad",
        "footer-description":
            "Transformando el futuro empresarial con Inteligencia Artificial avanzada.",
        "footer-services-title": "Servicios",
        "footer-company-title": "Empresa",
        "footer-contact-title": "Contacto",
        "footer-rights":
            "© 2024 Aetherix AI Solutions. Todos los derechos reservados.",
    },
    en: {
        // Navbar
        "nav-inicio": "Home",
        "nav-nosotros": "About",
        "nav-servicios": "Services",
        "nav-casos": "Presentation",
        "nav-investigacion": "Research",
        "nav-contacto": "Contact Us",

        // Hero Section
        "hero-title":
            'AI that transforms data into decisions and results',
        "hero-subtitle":
            "We deploy AI and analytics solutions that reduce failures, automate processes, and enhance your operations.",
        "hero-cta-primary": "Schedule Free Demo",
        "hero-cta-secondary": "View Services",
        "hero-badge-1": "Industry 4.0",
        "hero-badge-2": "Applied Data Science",
        "hero-badge-3": "End-to-end Implementation",

        // About Section
        "about-title": "Who We Are",
        "about-subtitle": "Digital transformation experts with AI",
        "about-description":
            "At Aetherix, we are pioneers in implementing enterprise Artificial Intelligence solutions. Our team of experts combines advanced technical knowledge with strategic consulting experience to completely transform the way companies operate and compete in the digital market.",
        "about-feature-1": "Over 5 years of experience in enterprise AI",
        "about-feature-2": "Multidisciplinary team of data scientists",
        "about-feature-3": "Success stories across multiple industries",

        // Services Section
        "services-title": "Our Services",
        "services-subtitle": "Comprehensive AI solutions for your business",
        "service-1-title": "Custom AI",
        "service-1-desc":
            "We develop personalized artificial intelligence solutions that perfectly adapt to your business specific needs.",
        "service-2-title": "Process Automation",
        "service-2-desc":
            "We optimize and automate your business processes using advanced AI technologies to maximize operational efficiency.",
        "service-3-title": "Predictive Maintenance",
        "service-3-desc":
            "We implement predictive maintenance systems that use AI to prevent failures and optimize your equipment performance.",
        "service-4-title": "PPE Intelligence",
        "service-4-desc":
            "Intelligent monitoring and management systems for personal protective equipment to ensure workplace safety.",
        "service-5-title": "HR Analytics Suite",
        "service-5-desc":
            "Comprehensive human resources analytics platform that uses AI to optimize talent management and improve employee experience.",

        //Investigation Section
        "innovation-tag": "Innovation",
        "dynamic-network-methodology": "Hyperdynamic Network Methodology",
        "dynamic-network-methodology-description":
            "Developed by M.Sc. Mario Alberto Jara Reyna, our patented methodology achieves improvements of up to 90% in precision and speed of optical calibration with AI.",
        "dynamic-network-methodology-description-2":
            "This revolutionary technology applied to real-time predictive maintenance allows detecting anomalies with unprecedented precision, reducing false positives and maximizing the availability of critical assets.",
        "explore-research": "Explore research",

        // Leadership Section
        "leadership-title": "Our Leadership",
        "leadership-subtitle": "Meet the team leading innovation",
        "leader-mario-title": "CEO & Founder",
        "leader-mario-desc":
            "AI and digital transformation expert with over 8 years of experience.",
        "leader-carolina-title": "Head of Marketing",
        "leader-carolina-desc":
            "Digital marketing specialist and business growth strategies expert.",
        "leader-luis-title": "Head of Data Science",
        "leader-luis-desc":
            "PhD in Computer Science, specialized in machine learning and big data.",
        "leader-maria-title": "Head of Operations",
        "leader-maria-desc":
            "Expert in process optimization and technology project management.",

        // Contact Section
        "contact-title": "Contact Us",
        "contact-subtitle": "Let's start transforming your business together",
        "contact-whatsapp": "Send WhatsApp",
        "contact-demo": "Schedule Demo",
        "contact-info": "Contact Information",
        "contact-address": "Monterrey, Nuevo León, México",
        "contact-phone": "+52 811 066 6514",
        "contact-email": "info@aetherix.mx",
        "contact-phone-tag": "Phone",
        "contact-team-location":
            "Our team is located in the technological heart of northern Mexico, working with companies throughout the country.",
        "contact-schedule": "Business Hours",
        "contact-weekdays": "Monday to Friday: 9:00 AM - 6:00 PM",
        "contact-saturdays": "Saturdays: 10:00 AM - 2:00 PM",
        "form-name": "Full name",
        "form-company": "Company",
        "form-email": "Email",
        "form-phone": "Phone",
        "form-interest": "Area of interest",
        "form-message": "Message",
        "form-privacy": "I accept the information processing",
        "form-submit": "Send message",
        "form-option-epp": "PPE Monitoring",
        "form-option-maintenance": "Predictive Maintenance",
        "form-option-automation": "Automation",
        "form-option-hr": "HR Analytics",
        "form-option-bi": "Business Intelligence",
        "form-option-custom": "Custom AI",

        // Value Propositions
        "value-prop-1-title": "Measurable results",
        "value-prop-1-desc":
            "Clear KPIs that demonstrate the impact on your operation and financial results.",
        "value-prop-2-title": "Agile adoption",
        "value-prop-2-desc":
            "Rapid deployment with proven methodologies to maximize your ROI.",
        "value-prop-3-title": "Integration with your stack",
        "value-prop-3-desc":
            "Compatible with your existing systems without operational disruptions.",
        "value-prop-4-title": "Security and compliance",
        "value-prop-4-desc":
            "We align with international security standards and regulations.",

        // Video Section
        "video-title": "Corporate Video",
        "video-subtitle":
            "Discover how Aetherix transforms companies with artificial intelligence and cutting-edge technology.",
        "video-caption": "Know our vision and impact cases",

        // Research Section
        "research-title": "Research and Development",
        "research-subtitle": "Continuous innovation in AI",
        "research-description":
            "Our R&D team constantly works on developing new artificial intelligence technologies and methodologies.",

        // CTA Section
        "cta-title": "Ready to transform your business?",
        "cta-subtitle":
            "Schedule a free consultation and discover how AI can boost your results.",
        "cta-button": "Schedule demo",

        // Team positions
        "team-ceo": "CEO & Founder",
        "team-marketing": "General Director",
        "team-operations": "Operations Director",
        "team-datascience": "Data Science Director",
        "view-profile": "View Profile",

        // Leader titles
        "leader-lydia-title": "General Director (CEO)",
        "leader-mario-vidana-title": "Operations Director (COO)",
        "leader-carlos-title": "Business Director (CBO)",
        "leader-mario-jara-title": "R&D Director (R&D)",

        // Footer
        "footer-privacy": "Privacy policy",
        "footer-description":
            "Transforming the business future with advanced Artificial Intelligence.",
        "footer-services-title": "Services",
        "footer-company-title": "Company",
        "footer-contact-title": "Contact",
        "footer-rights": "© 2024 Aetherix AI Solutions. All rights reserved.",
    },
};

// Leaders data translations
const leadersDataTranslations = {
    es: {
        "lydia-martinez": {
            title: "Directora General (CEO)",
            subtitle: "Visionaria en transformación digital e innovación",
            description: "Lydia Martínez combina más de 25 años de experiencia en gestión de talento, tecnologías emergentes y liderazgo de proyectos internacionales. Como CEO, impulsa la transformación digital con un enfoque estratégico, humano y de innovación constante.",
            expertise: [
                { icon: "fas fa-lightbulb", text: "Estrategia e Innovación" },
                { icon: "fas fa-users", text: "Gestión de Talento" },
                { icon: "fas fa-globe", text: "Proyectos Internacionales" },
            ],
            achievements: [
                "Liderazgo en múltiples proyectos de transformación digital y talento humano",
                "Liderazgo en la Implementación de Tecnologías Emergentes (Blockchain)",
                "Gestión de proyectos estratégicos para empresas globales",
            ],
            expertiseTitle: "Áreas de Expertise",
            achievementsTitle: "Logros Destacados",
            linkedinText: "Conectar en LinkedIn"
        },
        "mario-vidana": {
            title: "Especialista en Optimización y Analítica con IA",
            subtitle: "Transformando decisiones y operaciones con inteligencia artificial",
            description: "Profesional con experiencia en optimización de procesos administrativos, operativos y de producción. Mario ha liderado proyectos de automatización, analítica avanzada y visión por computadora, aplicando inteligencia artificial para generar eficiencias, reducir costos y potenciar la toma de decisiones estratégicas en diferentes industrias.",
            expertise: [
                { icon: "fas fa-cogs", text: "Optimización de Procesos" },
                { icon: "fas fa-robot", text: "Automatización con RPA e IA" },
                { icon: "fas fa-chart-line", text: "Analítica y Toma de Decisiones" },
                { icon: "fas fa-eye", text: "Visión Artificial aplicada a Negocios" },
            ],
            achievements: [
                "Automatización de procesos críticos con RPA, reduciendo tiempos operativos de forma significativa",
                "Desarrollo de sistemas de analítica para optimizar producción y decisiones de contenido",
                "Diseño de soluciones de tracking en exposiciones para medir afluencia y comportamiento de visitantes con precisión",
                "Aplicación de mantenimiento predictivo con IA, logrando importantes reducciones en costos operativos",
                "Creación de un sistema de control de EPP con visión artificial, garantizando seguridad laboral y cumplimiento normativo en tiempo real",
            ],
            expertiseTitle: "Áreas de Expertise",
            achievementsTitle: "Logros Destacados",
            linkedinText: "Conectar en LinkedIn"
        },
        "carlos-hernandez": {
            title: "Director de Negocios (CBO)",
            subtitle: "Estratega comercial centrado en el cliente",
            description: "Especialista en estrategia comercial y desarrollo de soluciones centradas en el cliente. Carlos lidera el crecimiento de Aetherix a través de relaciones estratégicas y soluciones innovadoras que generan valor real para nuestros clientes.",
            expertise: [
                { icon: "fas fa-handshake", text: "Desarrollo de Negocios" },
                { icon: "fas fa-target", text: "Estrategia Comercial" },
                { icon: "fas fa-heart", text: "Experiencia del Cliente" },
            ],
            achievements: [
                "Crecimiento del 300% en cartera de clientes en 2 años",
                "Desarrollo de alianzas estratégicas clave",
                "95% de satisfacción del cliente en proyectos liderados",
            ],
            expertiseTitle: "Áreas de Expertise",
            achievementsTitle: "Logros Destacados",
            linkedinText: "Conectar en LinkedIn"
        },
        "mario-jara": {
            title: "Director de I+D (R&D)",
            subtitle: "Investigador pionero en IA aplicada",
            description: "Investigador líder en algoritmos de IA aplicada a optimización industrial. Mario impulsa la innovación tecnológica de Aetherix, desarrollando soluciones de vanguardia que establecen nuevos estándares en la industria.",
            expertise: [
                { icon: "fas fa-brain", text: "Algoritmos de IA" },
                { icon: "fas fa-flask", text: "Investigación Aplicada" },
                { icon: "fas fa-industry", text: "Optimización Industrial" },
            ],
            achievements: [
                "Más de 15 publicaciones en revistas científicas especializadas",
                "Desarrollo de 8 patentes en algoritmos de IA",
                "PhD en Ciencias de la Computación con especialización en IA",
            ],
            expertiseTitle: "Áreas de Expertise",
            achievementsTitle: "Logros Destacados",
            linkedinText: "Conectar en LinkedIn"
        },
    },
    en: {
        "lydia-martinez": {
            title: "General Director (CEO)",
            subtitle: "Visionary in digital transformation and innovation",
            description: "Lydia Martínez combines over 25 years of experience in talent management, emerging technologies, and international project leadership. As CEO, she drives digital transformation with a strategic, human-centered, and constantly innovative approach.",
            expertise: [
                { icon: "fas fa-lightbulb", text: "Strategy and Innovation" },
                { icon: "fas fa-users", text: "Talent Management" },
                { icon: "fas fa-globe", text: "International Projects" },
            ],
            achievements: [
                "Leadership in multiple digital transformation and human talent projects",
                "Leadership in Emerging Technologies Implementation (Blockchain)",
                "Strategic project management for global companies",
            ],
            expertiseTitle: "Areas of Expertise",
            achievementsTitle: "Key Achievements",
            linkedinText: "Connect on LinkedIn"
        },
        "mario-vidana": {
            title: "Optimization and Analytics Specialist with AI",
            subtitle: "Transforming decisions and operations with artificial intelligence",
            description: "Professional with experience in optimizing administrative, operational, and production processes. Mario has led automation projects, advanced analytics, and computer vision, applying artificial intelligence to generate efficiencies, reduce costs, and enhance strategic decision-making across different industries.",
            expertise: [
                { icon: "fas fa-cogs", text: "Process Optimization" },
                { icon: "fas fa-robot", text: "RPA and AI Automation" },
                { icon: "fas fa-chart-line", text: "Analytics and Decision Making" },
                { icon: "fas fa-eye", text: "Computer Vision for Business" },
            ],
            achievements: [
                "Automation of critical processes with RPA, significantly reducing operational times",
                "Development of analytics systems to optimize production and content decisions",
                "Design of tracking solutions at exhibitions to precisely measure attendance and visitor behavior",
                "Application of predictive maintenance with AI, achieving significant reductions in operational costs",
                "Creation of a PPE control system with computer vision, ensuring workplace safety and regulatory compliance in real-time",
            ],
            expertiseTitle: "Areas of Expertise",
            achievementsTitle: "Key Achievements",
            linkedinText: "Connect on LinkedIn"
        },
        "carlos-hernandez": {
            title: "Business Director (CBO)",
            subtitle: "Customer-focused commercial strategist",
            description: "Specialist in commercial strategy and customer-centered solution development. Carlos leads Aetherix's growth through strategic relationships and innovative solutions that generate real value for our clients.",
            expertise: [
                { icon: "fas fa-handshake", text: "Business Development" },
                { icon: "fas fa-target", text: "Commercial Strategy" },
                { icon: "fas fa-heart", text: "Customer Experience" },
            ],
            achievements: [
                "300% growth in client portfolio over 2 years",
                "Development of key strategic alliances",
                "95% customer satisfaction in led projects",
            ],
            expertiseTitle: "Areas of Expertise",
            achievementsTitle: "Key Achievements",
            linkedinText: "Connect on LinkedIn"
        },
        "mario-jara": {
            title: "R&D Director (R&D)",
            subtitle: "Pioneer researcher in applied AI",
            description: "Leading researcher in AI algorithms applied to industrial optimization. Mario drives Aetherix's technological innovation, developing cutting-edge solutions that set new industry standards.",
            expertise: [
                { icon: "fas fa-brain", text: "AI Algorithms" },
                { icon: "fas fa-flask", text: "Applied Research" },
                { icon: "fas fa-industry", text: "Industrial Optimization" },
            ],
            achievements: [
                "Over 15 publications in specialized scientific journals",
                "Development of 8 patents in AI algorithms",
                "PhD in Computer Science with specialization in AI",
            ],
            expertiseTitle: "Areas of Expertise",
            achievementsTitle: "Key Achievements",
            linkedinText: "Connect on LinkedIn"
        },
    },
};

// Data for each leader
const leadersData = {
    "lydia-martinez": {
        name: "Lydia Martínez",
        title: "Directora General (CEO)",
        subtitle: "Visionaria en transformación digital e innovación",
        image: "images/LM.png",
        description:
            "Lydia Martínez combina más de 25 años de experiencia en gestión de talento, tecnologías emergentes y liderazgo de proyectos internacionales. Como CEO, impulsa la transformación digital con un enfoque estratégico, humano y de innovación constante.",
        expertise: [
            { icon: "fas fa-lightbulb", text: "Estrategia e Innovación" },
            { icon: "fas fa-users", text: "Gestión de Talento" },
            { icon: "fas fa-globe", text: "Proyectos Internacionales" },
        ],
        achievements: [
            "Liderazgo en múltiples proyectos de transformación digital y talento humano",
            "Liderazgo en la Implementación de Tecnologías Emergentes (Blockchain)",
            "Gestión de proyectos estratégicos para empresas globales",
        ],
        expertiseTitle: "Áreas de Expertise",
        achievementsTitle: "Logros Destacados",
        linkedinText: "Conectar en LinkedIn",
        socialLinks: {
            linkedin:
                "https://www.linkedin.com/in/lydia-mart%C3%ADnez-43583523/",
        },
    },
    "mario-vidana": {
        name: "Mario Vidaña",
        title: "Especialista en Optimización y Analítica con IA",
        subtitle:
            "Transformando decisiones y operaciones con inteligencia artificial",
        image: "images/MV.png",
        description:
            "Profesional con experiencia en optimización de procesos administrativos, operativos y de producción. Mario ha liderado proyectos de automatización, analítica avanzada y visión por computadora, aplicando inteligencia artificial para generar eficiencias, reducir costos y potenciar la toma de decisiones estratégicas en diferentes industrias.",
        expertise: [
            { icon: "fas fa-cogs", text: "Optimización de Procesos" },
            { icon: "fas fa-robot", text: "Automatización con RPA e IA" },
            {
                icon: "fas fa-chart-line",
                text: "Analítica y Toma de Decisiones",
            },
            {
                icon: "fas fa-eye",
                text: "Visión Artificial aplicada a Negocios",
            },
        ],
        achievements: [
            "Automatización de procesos críticos con RPA, reduciendo tiempos operativos de forma significativa",
            "Desarrollo de sistemas de analítica para optimizar producción y decisiones de contenido",
            "Diseño de soluciones de tracking en exposiciones para medir afluencia y comportamiento de visitantes con precisión",
            "Aplicación de mantenimiento predictivo con IA, logrando importantes reducciones en costos operativos",
            "Creación de un sistema de control de EPP con visión artificial, garantizando seguridad laboral y cumplimiento normativo en tiempo real",
        ],
        expertiseTitle: "Áreas de Expertise",
        achievementsTitle: "Logros Destacados",
        linkedinText: "Conectar en LinkedIn",
        socialLinks: {
            linkedin:
                "https://www.linkedin.com/in/mario-vida%C3%B1a-334238205/",
        },
    },
    "carlos-hernandez": {
        name: "Carlos Hernández",
        title: "Director de Negocios (CBO)",
        subtitle: "Estratega comercial centrado en el cliente",
        image: "images/CH.png",
        description:
            "Especialista en estrategia comercial y desarrollo de soluciones centradas en el cliente. Carlos lidera el crecimiento de Aetherix a través de relaciones estratégicas y soluciones innovadoras que generan valor real para nuestros clientes.",
        expertise: [
            { icon: "fas fa-handshake", text: "Desarrollo de Negocios" },
            { icon: "fas fa-target", text: "Estrategia Comercial" },
            { icon: "fas fa-heart", text: "Experiencia del Cliente" },
        ],
        achievements: [
            "Crecimiento del 300% en cartera de clientes en 2 años",
            "Desarrollo de alianzas estratégicas clave",
            "95% de satisfacción del cliente en proyectos liderados",
        ],
        expertiseTitle: "Áreas de Expertise",
        achievementsTitle: "Logros Destacados",
        linkedinText: "Conectar en LinkedIn",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/carloshdzbermea/",
        },
    },
    "mario-jara": {
        name: "Mario Jara",
        title: "Director de I+D (R&D)",
        subtitle: "Investigador pionero en IA aplicada",
        image: "images/MJ.png",
        description:
            "Investigador líder en algoritmos de IA aplicada a optimización industrial. Mario impulsa la innovación tecnológica de Aetherix, desarrollando soluciones de vanguardia que establecen nuevos estándares en la industria.",
        expertise: [
            { icon: "fas fa-brain", text: "Algoritmos de IA" },
            { icon: "fas fa-flask", text: "Investigación Aplicada" },
            { icon: "fas fa-industry", text: "Optimización Industrial" },
        ],
        achievements: [
            "Más de 15 publicaciones en revistas científicas especializadas",
            "Desarrollo de 8 patentes en algoritmos de IA",
            "PhD en Ciencias de la Computación con especialización en IA",
        ],
        expertiseTitle: "Áreas de Expertise",
        achievementsTitle: "Logros Destacados",
        linkedinText: "Conectar en LinkedIn",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/mario-jara-8951581b8/",
        },
    },
};

// Language Management System
let currentLanguage = "es"; // Default Spanish

function translatePage(lang) {
    currentLanguage = lang;

    // Update all elements with data-translate attribute
    document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update leadersData with complete translations
    if (leadersDataTranslations[lang]) {
        Object.keys(leadersDataTranslations[lang]).forEach((leaderId) => {
            if (leadersData[leaderId]) {
                const translation = leadersDataTranslations[lang][leaderId];
                leadersData[leaderId].title = translation.title;
                leadersData[leaderId].subtitle = translation.subtitle;
                leadersData[leaderId].description = translation.description;
                leadersData[leaderId].expertise = translation.expertise;
                leadersData[leaderId].achievements = translation.achievements;
                leadersData[leaderId].expertiseTitle = translation.expertiseTitle;
                leadersData[leaderId].achievementsTitle = translation.achievementsTitle;
                leadersData[leaderId].linkedinText = translation.linkedinText;
            }
        });
    }

    // Update language buttons
    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-lang") === lang) {
            btn.classList.add("active");
        }
    });

    // Save language preference
    localStorage.setItem("preferredLanguage", lang);
}

// Initialize language system
document.addEventListener("DOMContentLoaded", function () {
    // Check for saved language preference
    const savedLang = localStorage.getItem("preferredLanguage") || "es";

    // Add click handlers to language buttons
    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            const lang = this.getAttribute("data-lang");
            translatePage(lang);
        });
    });

    // Load saved language
    translatePage(savedLang);
});

// Active Navigation Link Based on Scroll Position
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(
        '.nav-links a, .nav-cta a[href^="#"]'
    );
    const sections = document.querySelectorAll("section[id]");

    function updateActiveNavLink() {
        let current = "";
        const scrollPosition = window.scrollY + 100; // Offset for navbar height

        // Check which section is currently in view
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                current = section.getAttribute("id");
            }
        });

        // Handle the hero section (when at top of page)
        if (window.scrollY < 100) {
            current = "inicio";
        }

        // Update active class on nav links
        navLinks.forEach((link) => {
            link.classList.remove("active");
            const href = link.getAttribute("href");

            if (
                href === `#${current}` ||
                (href === "#inicio" && current === "")
            ) {
                link.classList.add("active");
            }
        });
    }

    // Update on scroll
    window.addEventListener("scroll", updateActiveNavLink);

    // Update on page load
    updateActiveNavLink();

    // Also update when clicking on nav links
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            // Small delay to let scroll happen first
            setTimeout(updateActiveNavLink, 100);
        });
    });
});

// Enhanced Leadership Modal System
document.addEventListener("DOMContentLoaded", function () {
    const leaderModal = document.getElementById("leader-modal");
    const modalBody = leaderModal.querySelector(".modal-body");
    const modalClose = leaderModal.querySelector(".modal-close");
    const modalBackdrop = leaderModal.querySelector(".modal-backdrop");
    const clickableLeaders = document.querySelectorAll(".clickable-leader");

    // Function to create modal content
    function createModalContent(leaderData) {
        return `
        <div class="modal-header">
            <div class="modal-avatar">
            <img src="${leaderData.image}" alt="${leaderData.name}" />
            </div>
            <div class="modal-name">${leaderData.name}</div>
            <div class="modal-title">${leaderData.title}</div>
            <div class="modal-subtitle">${leaderData.subtitle}</div>
        </div>

        <div class="modal-description">
            ${leaderData.description}
        </div>

        <div class="expertise-section">
            <h4>${leaderData.expertiseTitle}</h4>
            <div class="expertise-grid">
            ${leaderData.expertise
                .map(
                (item) => `
                <div class="expertise-item">
                <i class="${item.icon}"></i>
                <span>${item.text}</span>
                </div>
            `
                )
                .join("")}
            </div>
        </div>

        <div class="achievements-section">
            <h4>${leaderData.achievementsTitle}</h4>
            <ul class="achievements-list">
            ${leaderData.achievements
                .map(
                (achievement) => `
                <li>${achievement}</li>
            `
                )
                .join("")}
            </ul>
        </div>

        <div class="modal-linkedin">
            <a href="${
            leaderData.socialLinks.linkedin
            }" class="linkedin-btn" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin-in"></i>
            <span>${leaderData.linkedinText}</span>
            </a>
        </div>
        `;
    }

    // Function to open modal
    function openModal(leaderId) {
        const leaderData = leadersData[leaderId];
        if (leaderData) {
            modalBody.innerHTML = createModalContent(leaderData);
            leaderModal.classList.add("active");
            document.body.style.overflow = "hidden";

            // Add smooth entrance animation
            setTimeout(() => {
                leaderModal.style.opacity = "1";
            }, 10);
        }
    }

    // Function to close modal
    function closeModal() {
        leaderModal.style.opacity = "0";
        setTimeout(() => {
            leaderModal.classList.remove("active");
            document.body.style.overflow = "";
        }, 300);
    }

    // Event listeners for leader cards
    clickableLeaders.forEach((leader) => {
        leader.addEventListener("click", function () {
            const leaderId = this.getAttribute("data-leader");
            openModal(leaderId);
        });

        // Enhanced hover effect - Optimized for performance
        leader.addEventListener("mouseenter", function () {
            this.style.transition =
                "transform 150ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 150ms cubic-bezier(0.2, 0.8, 0.2, 1)";
            this.style.transform = "translateY(-8px) scale(1.02)";
            this.style.boxShadow = "0 15px 40px rgba(16, 35, 42, 0.15)";
        });

        leader.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0) scale(1)";
            this.style.boxShadow = "";
        });
    });

    // Event listeners for modal close
    modalClose.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", closeModal);

    // Close modal with Escape key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && leaderModal.classList.contains("active")) {
            closeModal();
        }
    });

    // Prevent modal close when clicking inside modal content
    leaderModal
        .querySelector(".modal-content")
        .addEventListener("click", function (e) {
            e.stopPropagation();
        });
});
