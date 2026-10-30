// src/lib/data.ts

export const skillGroups = [
  { title: 'IA aplicada y agentes', skills: ['LLMs', 'RAG', 'Agentes de IA', 'Python', 'LangGraph', 'FAISS', 'n8n', 'Spring AI', 'MCP'] },
  { title: 'Backend e integración', skills: ['Java', 'Spring Boot 3', 'APIs REST/SOAP', 'SQL', 'PostgreSQL', 'Oracle Database'] },
  { title: 'Cloud y herramientas', skills: ['Oracle Cloud Infrastructure (OCI)', 'Docker', 'DevOps'] },
  { title: 'Desarrollo empresarial', skills: ['GeneXus (v16, v17, v18)', 'WorkWithPlus'] },
];
export const skills = skillGroups.flatMap(group => group.skills);

type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  caseStudyLink?: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: 'Ingeniería de software asistida por IA',
    description: 'Proyecto de mi autoría que conecta requisitos, evidencia de código y propuestas de diseño técnico con validaciones automáticas y revisión humana.',
    techStack: ['Node.js', 'MCP', 'GeneXus', 'JavaScript', 'Open XML'],
    caseStudyLink: '/proyectos/ingenieria-asistida-ia',
    image: 'project-engineering-ai'
  },
  {
    title: 'Agente híbrido de IA',
    description: 'Proyecto de aprendizaje que combina un agente con recuperación de documentos locales y búsqueda web, orquestado mediante n8n.',
    techStack: ['Python', 'LangGraph', 'RAG', 'FAISS', 'n8n'],
    caseStudyLink: '/proyectos/agente-hibrido',
    githubLink: 'https://github.com/KrakenDevCL/taller-inmersion-agentes-ia-llm-rag',
    image: 'project-ai-agent'
  },
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
    description: 'API REST para un foro, con gestión de tópicos y respuestas, autenticación JWT y documentación OpenAPI.',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Flyway', 'MySQL'],
    caseStudyLink: '/proyectos/krakenhub-api',
    githubLink: 'https://github.com/KrakenDevCL/KrakenHub-API',
    liveLink: '#',
    image: 'project-krakenhub-api'
  },
  {
    title: 'KrakenHub Frontend',
    description: 'Frontend para KrakenHub, una red social para desarrolladores de software, con funcionalidades para compartir proyectos, seguir a otros desarrolladores y gestionar perfiles.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    githubLink: 'https://github.com/KrakenDevCL/KrakenHub-Frontend',
    liveLink: '#',
    image: 'project-krakenhub'
  },
  {
    title: 'API Voll.med',
    description: 'API REST para una clínica ficticia, que gestiona médicos, pacientes y citas. Incluye seguridad con JWT, paginación y validaciones.',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'Flyway'],
    githubLink: 'https://github.com/KrakenDevCL/vollmed-api',
    liveLink: '#',
    image: 'project-vollmed-api'
  },
  {
    title: 'Literalura: Catálogo de Libros',
    description: 'Aplicación de consola para interactuar con la API Gutendex, buscar libros, autores y registrar consultas en la base de datos.',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'API REST'],
    githubLink: 'https://github.com/KrakenDevCL/literalura',
    liveLink: '#',
    image: 'project-literalura'
  },
  {
    title: 'Portafolio KrakenDevCL',
    description: 'Este es el portafolio que estás viendo. Un sitio web personal para mostrar mis proyectos, construido con Next.js y estilizado con Tailwind CSS.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Genkit'],
    githubLink: 'https://github.com/KrakenDevCL/krakendev-portfolio',
    liveLink: '#',
    image: 'project-portfolio'
  }
];

export const blogPosts = [
  {
    title: "Más allá del \"Hola Mundo\": Construyendo APIs Seguras y Escalables con Spring Boot 3",
    slug: "mas-alla-del-hola-mundo-spring-boot-3",
    summary: "En el desarrollo Backend, la seguridad, mantenibilidad y documentación son clave. Descubre los 4 pilares para construir APIs robustas con Spring Boot 3, desde seguridad con JWT hasta documentación con Swagger.",
    date: "25 de enero de 2026",
    image: 'blog-post-spring-boot',
    link: "https://github.com/KrakenDevCL",
    content: [
      { type: 'paragraph', text: 'En el desarrollo Backend moderno, hacer que una aplicación "funcione" es solo el primer paso. El verdadero desafío —y lo que diferencia al software profesional— radica en la seguridad, la mantenibilidad y la documentación.' },
      { type: 'paragraph', text: 'Durante los últimos meses, me he sumergido profundamente en el ecosistema de Java y Spring Boot 3, enfocándome no solo en crear endpoints, sino en diseñar arquitecturas listas para producción.' },
      { type: 'heading', text: '1. Seguridad Primero: Spring Security y JWT' },
      { type: 'paragraph', text: 'Implementé Spring Security 6 para manejar la autenticación y autorización mediante JSON Web Tokens (JWT), permitiendo una arquitectura más escalable.' },
      { type: 'heading', text: '2. Integridad de Datos con Flyway' },
      { type: 'paragraph', text: 'Integré Flyway para las migraciones de base de datos, asegurando un control de versiones robusto de la estructura de la BD.' },
      { type: 'heading', text: '3. Calidad de Código' },
      { type: 'paragraph', text: 'Aproveché Java 17+ usando Records para DTOs y validaciones robustas con Bean Validation.' },
      { type: 'heading', text: '4. Documentación con Swagger/OpenAPI' },
      { type: 'paragraph', text: 'Generé documentación interactiva que permite probar los endpoints directamente desde el navegador.' },
    ]
  }
];

export const experience = [
  {
    title: 'Ingeniero de Software',
    company: 'BROWSE Chile',
    period: 'Enero 2021 – actualidad',
    description: 'Desarrollo, mantenimiento y modernización de módulos de un ERP empresarial, combinando GeneXus con integraciones en Java y SQL.',
    achievements: [
      'Diseñé y desarrollé una integración REST para automatizar el envío de nóminas bancarias desde el ERP.',
      'Optimicé lógica y consultas SQL, reduciendo un 30 % el tiempo de procesamiento y aumentando un 70 % la velocidad de generación de informes internos.',
      'Lideré la modernización de módulos de sistemas existentes, cuidando su estabilidad y escalabilidad.',
      'Apliqué prácticas de calidad con un índice de rechazo en QA cercano al 0 % y cumplimiento de los acuerdos de entrega.',
    ],
    skills: ['GeneXus', 'Java', 'SQL', 'APIs REST'],
  },
  {
    title: 'Estudiante en prácticas · Desarrollo backend',
    company: 'Fisfor',
    period: 'Agosto 2020 – octubre 2020',
    description: 'Desarrollo backend de módulos para una aplicación web de arriendo de propiedades.',
    achievements: [],
    skills: ['Java', 'Spring Boot', 'JHipster', 'PostgreSQL'],
  },
];

export const developerProfile = {
  name: "José Antonio Gallegos Carvallo",
  title: "AI & Backend Engineer | Agentes, LLMs e integraciones",
  bio: "Construyo soluciones que combinan ingeniería backend e inteligencia artificial aplicada. Diseño flujos con agentes y modelos de lenguaje, integro fuentes de información mediante RAG y desarrollo herramientas para automatizar procesos con evidencia, validaciones y revisión humana. Mi trayectoria desde 2021 en sistemas empresariales aporta experiencia en APIs, SQL y modernización de software.",
  specializations: [
    {
      title: "IA aplicada y agentes",
      description: "Diseño de flujos con LLMs, agentes, RAG y automatización; proyectos con Python, LangGraph, FAISS, n8n y MCP."
    },
    {
      title: "Backend y sistemas empresariales",
      description: "Desarrollo de APIs e integraciones con Java, Spring Boot y SQL, con experiencia en modernización de aplicaciones empresariales."
    }
  ],
  keyCompetencies: [
    {
      title: "Orquestación e integración de IA",
      description: "Conexión de agentes y modelos de lenguaje con herramientas, datos y flujos de trabajo; recuperación de información y búsqueda web en proyectos prácticos."
    },
    {
      title: "Ingeniería backend y cloud",
      description: "Diseño de APIs e integraciones, optimización de consultas SQL y formación certificada en Oracle Cloud Infrastructure."
    },
    {
      title: "Calidad y trazabilidad",
      description: "Validaciones automatizadas, evidencia verificable y revisión humana para propuestas técnicas y procesos de desarrollo."
    }
  ],
  motivation: "Me motiva construir soluciones de IA útiles y verificables, respaldadas por una ingeniería de software sólida.",
  developerProfileForAI: `
Nombre: José Antonio Gallegos Carvallo
Título: AI & Backend Engineer | Agentes, LLMs e integraciones

Experiencia: 
- Proyectos propios de agentes, RAG, automatización de ingeniería e integración de LLMs.
- Ingeniero de software desde 2021 en sistemas empresariales, con Java, SQL y GeneXus.
- Desarrollo backend con Java, Spring Boot e integración de APIs.

Certificaciones Clave:
- Oracle Cloud Infrastructure 2025 Certified Foundations Associate.
- Oracle Cloud Infrastructure AI Foundations Associate.
- WorkWithPlus Core Analyst.
- Proyectos con agentes de IA, RAG y LLMs.

Tech Stack: Python, LangGraph, FAISS, n8n, MCP, LLMs, RAG, Java, Spring Boot, OCI, SQL y GeneXus.
Inglés: C2 Proficient.
`
};

export const certifications = [
  {
    category: "IA y agentes · Certificaciones y formación",
    items: [
      { title: 'Oracle Cloud Infrastructure AI Foundations Associate', issuer: 'Oracle', date: 'Ago 2026' },
      { title: 'Inmersión de Inteligencia Artificial en la Práctica', issuer: 'Daxus Latam', date: 'Oct 2026' },
      { title: 'Curso de desarrollo con IA - El nuevo programador', issuer: 'BIG school', date: 'Oct 2026' },
      { title: 'Inmersión Agentes de IA en la Práctica', issuer: 'Daxus Latam', date: 'Ago 2026' },
      { title: 'Formación OCI AI Foundations Associate - ONE', issuer: 'Alura Latam', date: 'Ago 2026' },
      { title: 'Inmersión DEV Agentes de AI (RAG, LLM)', issuer: 'Alura Latam', date: 'Mar 2026' },
      { title: 'Spring AI: Integra una aplicación con OpenAI', issuer: 'Alura Latam', date: 'Feb 2026' },
      { title: 'Machine Learning with Python Essential', issuer: 'Universidad de Chile', date: 'Dic 2024' },
    ],
  },
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
    category: "Backend y desarrollo",
    items: [
      {
        title: 'Diplomado en Programación en Java',
        issuer: 'Politécnico de Colombia',
        date: 'Dic 2023',
      },
    ]
  },
  {
    category: "Low-Code (GeneXus)",
    items: [
      {
        title: 'WorkWithPlus Core Analyst',
        issuer: 'WorkWithPlus',
        date: 'Certificación',
      },
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
    title: 'Programa ONE · Tech Builder',
    date: 'Jun 2026 - Jul 2026',
    description: 'Formación práctica en IA aplicada, agentes, automatización y RAG.',
    skills: ['Agentes de IA', 'RAG', 'Automatización'],
  },
  {
    institution: 'Alura Latam & Oracle',
    title: 'Programa ONE · Tech Advanced',
    date: 'Mar 2026 - Jul 2026',
    description: 'Formación en infraestructura cloud, seguridad, bases de datos y servicios de IA.',
    skills: ['OCI', 'Cloud', 'Bases de datos'],
  },
  {
    institution: 'Alura Latam & Oracle',
    title: 'Programa ONE · Tech Foundation',
    date: 'Jul 2025 - Feb 2026',
    description: 'Fundamentos de programación, desarrollo web y trabajo profesional.',
    skills: ['Programación', 'JavaScript', 'Desarrollo web'],
  },
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
