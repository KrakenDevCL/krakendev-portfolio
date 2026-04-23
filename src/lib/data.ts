export const skills = [
  'Java Spring Boot 3',
  'Oracle Cloud Infrastructure (OCI)',
  'GeneXus (v16, v17, v18)',
  'IA Generativa (RAG & LLMs)',
  'Spring AI',
  'SQL & Oracle Database',
  'Python (Machine Learning)',
  'APIs REST/SOAP',
  'Docker & DevOps'
];

export const projects = [
  // Mantenemos los proyectos existentes, pero podrías añadir 
  // etiquetas de "Cloud Ready" o "AI Integrated" en el futuro.
  {
    title: 'Tentáculo App',
    description: 'Clon frontend de aplicación financiera interactiva con datos simulados, integrando la backend tentaculo-api realizada en Spring Boot.',
    techStack: ['React', 'Vite', 'Spring Boot', 'Java'],
    githubLink: 'https://github.com/KrakenDevCL/tentaculo-api',
    liveLink: 'https://tentaculo-app-portfolio.vercel.app/',
    image: 'project-tentaculo'
  },
  {
    title: 'KrakenHub API',
    description: 'API REST para KrakenHub, una red social para desarrolladores de software, que gestiona perfiles de usuario, proyectos y conexiones.',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'Flyway', 'PostgreSQL'],
    githubLink: 'https://github.com/KrakenDevCL/KrakenHub-API',
    liveLink: '#',
    image: 'project-krakenhub-api'
  },
  // ... resto de tus proyectos
];

export const developerProfile = {
  name: "José Antonio Gallegos Carvallo",
  title: "Desarrollador de Software (Backend & Low-Code) | OCI Certified Foundations Associate ☁️",
  bio: "Desarrollador de Software con más de 5 años de trayectoria en el sector financiero. Mi mayor fortaleza es la versatilidad técnica: poseo 5 años especializándome en plataformas Low-Code con GeneXus y 1 año de especialización en desarrollo Pro-Code con Java y Spring Boot 3.",
  specializations: [
    {
      title: "Arquitectura Cloud & Backend (Pro-Code)",
      description: "Construcción de microservicios e integraciones modernas con Java y Spring Boot, con certificación oficial en Oracle Cloud Infrastructure (OCI) para entornos de alta disponibilidad."
    },
    {
      title: "Desarrollo Ágil Empresarial (Low-Code)",
      description: "Experto en GeneXus (5+ años) liderando el desarrollo de sistemas institucionales complejos y ERPs financieros, acelerando significativamente el Time-to-Market."
    }
  ],
  keyCompetencies: [
    {
      title: "Cloud & IA",
      description: "Certificado en OCI Foundations y especializado en la integración de IA Generativa (RAG y Agentes de IA) en flujos de trabajo empresariales."
    },
    {
      title: "Integración de Sistemas",
      description: "Diseño y despliegue de APIs REST/SOAP para la interoperabilidad de sistemas críticos gubernamentales y financieros."
    },
    {
      title: "Calidad y Seguridad",
      description: "Desarrollo basado en Clean Code y alineado a normativas internacionales ISO 9001 e ISO 27001."
    }
  ],
  motivation: "Me motiva liderar la transformación digital aplicando la herramienta óptima para cada desafío, ya sea mediante la robustez del código tradicional o la agilidad del Low-Code.",
  developerProfileForAI: `
Nombre: José Antonio Gallegos Carvallo
Título: Desarrollador de Software (Backend & Low-Code) | OCI Certified Foundations Associate

Experiencia: 
- 5 años en Low-Code con GeneXus (v16 a v18).
- 1 año en Pro-Code con Java y Spring Boot 3.

Certificaciones Clave:
- Oracle Cloud Infrastructure 2025 Certified Foundations Associate.
- Especialista en IA Generativa y Agentes de IA (RAG, LLMs).

Tech Stack: Java 17+, Spring Boot 3, OCI, GeneXus, SQL, Python, Spring AI.
Inglés: C2 Proficient.
`
};

export const certifications = [
  {
    category: "Cloud & Infraestructura (Oracle)",
    items: [
      {
        title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
        issuer: 'Oracle',
        date: 'Abr 2026',
      },
      {
        title: 'Ruta hacia la certificación OCI Foundations Associate - ONE',
        issuer: 'Alura Latam',
        date: 'Abr 2026',
      }
    ]
  },
  {
    category: "IA Generativa & Backend",
    items: [
      {
        title: 'Inmersión DEV Agentes de AI (RAG, LLM)',
        issuer: 'Alura Latam',
        date: 'Mar 2026',
      },
      {
        title: 'Spring AI: Integra una aplicación con OpenAI',
        issuer: 'Alura Latam',
        date: 'Feb 2026',
      },
      {
        title: 'Diplomado en Programación en Java',
        issuer: 'Politécnico de Colombia',
        date: 'Dic 2023',
      },
      {
        title: 'Machine Learning with Python Essential',
        issuer: 'Universidad de Chile',
        date: 'Dic 2024',
      }
    ]
  },
  {
    category: "Low-Code (GeneXus)",
    items: [
      {
        title: 'GeneXus 18 for Mobile Analyst',
        issuer: 'GeneXus',
        date: 'Nov 2025',
      },
      {
        title: 'GeneXus 18 Junior Analyst',
        issuer: 'GeneXus',
        date: 'Mar 2026',
      },
      {
        title: 'Analista Genexus v16',
        issuer: 'GeneXus',
        date: 'Nov 2020',
      }
    ]
  },
  {
    category: "Idiomas",
    items: [
      {
        title: 'EF SET English Certificate (C2 Proficient)',
        issuer: 'EF SET',
        date: 'Nov 2022',
      }
    ]
  }
];

export const education = [
  {
    institution: 'Alura Latam & Oracle',
    title: 'Especialización en Cloud & Backend (Programa ONE)',
    date: '2025 - 2026',
    description: 'Formación avanzada de 58 horas en OCI, seguridad en la nube, microservicios con Spring Boot 3 e IA Generativa.',
    skills: ['OCI', 'Java Spring Boot', 'IA Generativa', 'Agile'],
  },
  {
    institution: 'Duoc UC',
    title: 'Licenciatura en Ingeniería Informática',
    date: '2018 - 2021',
    description: 'Titulado con excelencia académica en Viña del Mar, Chile.',
    skills: ['Bases de Datos', 'Gestión de Proyectos', 'Seguridad', 'Desarrollo de Software'],
  }
];

export const cvUrl = "/cv-jagc.pdf";