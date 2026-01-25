export const skills = [
  'Java Spring Boot',
  'Hibernate',
  'JPA',
  'GeneXus',
  'SQL',
  'APIs REST/SOAP',
  'Python'
];

export const projects = [
  {
    title: 'KrakenHub API',
    description: 'API REST para KrakenHub, una red social para desarrolladores de software, que gestiona perfiles de usuario, proyectos y conexiones.',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'Flyway', 'PostgreSQL'],
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
      { type: 'paragraph', text: 'Durante los últimos meses, me he sumergido profundamente en el ecosistema de Java y Spring Boot 3, enfocándome no solo en crear endpoints, sino en diseñar arquitecturas listas para producción. Quiero compartir los 4 pilares clave que he implementado en mis proyectos recientes (como el Challenge Literalura y mi API Rest).' },
      { type: 'heading', text: '1. Seguridad Primero: Spring Security y JWT' },
      { type: 'paragraph', text: 'No basta con guardar usuarios en una base de datos. En mis últimos desarrollos, implementé Spring Security 6 para manejar la autenticación y autorización.' },
      { type: 'list', items: [
          'Statelessness: Abandoné las sesiones tradicionales por JSON Web Tokens (JWT), permitiendo una arquitectura más escalable y desacoplada del frontend.',
          'Filtros: Configuré cadenas de filtros de seguridad para proteger rutas específicas, asegurando que solo usuarios autenticados accedan a recursos sensibles.'
      ]},
      { type: 'heading', text: '2. La importancia de la Integridad de Datos (Flyway)' },
      { type: 'paragraph', text: 'El esquema de la base de datos cambia; es una realidad. En lugar de ejecutar scripts SQL manuales (y peligrosos), integré Flyway para las migraciones de base de datos. Esto me permite:' },
      { type: 'list', items: [
          'Tener un control de versiones de la estructura de la BD.',
          'Asegurar que cualquier desarrollador que clone el repositorio tenga exactamente la misma base de datos al ejecutar el proyecto.'
      ]},
      { type: 'heading', text: '3. Calidad de Código y Buenas Prácticas' },
      { type: 'paragraph', text: 'Con la llegada de Spring Boot 3 y Java 17+, aproveché las nuevas características del lenguaje:' },
      { type: 'list', items: [
          'Uso de Records para DTOs (Data Transfer Objects), reduciendo el código repetitivo (boilerplate).',
          'Validaciones robustas con Bean Validation para asegurar que los datos que entran a la API sean correctos antes de procesarlos.',
          'Manejo de excepciones global con @RestControllerAdvice para devolver errores HTTP limpios y comprensibles al cliente.'
      ]},
      { type: 'heading', text: '4. Si no está documentado, no existe (Swagger)' },
      { type: 'paragraph', text: 'Una API potente es inútil si el equipo Front End no sabe cómo consumirla. Integré OpenAPI (Swagger) para generar documentación viva e interactiva. Esto permite probar los endpoints directamente desde el navegador sin necesidad de herramientas externas.' },
      { type: 'heading', text: 'Conclusión y Siguientes Pasos' },
      { type: 'paragraph', text: 'Este viaje con Spring Boot me ha enseñado que el código limpio y la arquitectura segura son inversiones que pagan dividendos a largo plazo. Actualmente, estoy explorando la integración de estas APIs con interfaces modernas en React.' },
    ]
  }
];

export const developerProfile = {
  name: "José Antonio Gallegos Carvallo",
  title: "Desarrollador de Software (Backend & Low-Code) | Java Spring Boot, Hibernate, JPA | Genexus | SQL & APIs",
  bio: "Como desarrollador, mi mayor fortaleza es la versatilidad técnica. Domino dos enfoques complementarios que me permiten adaptarme a cualquier necesidad de negocio: la robustez del desarrollo tradicional y la agilidad de las plataformas Low-Code.",
  specializations: [
    {
      title: "Desarrollo Backend Robusto (Pro-Code)",
      description: "Diseño y construcción de sistemas complejos, seguros y escalables utilizando Java (Spring Boot, Hibernate, JPA), asegurando un código limpio y eficiente para aplicaciones de misión crítica."
    },
    {
      title: "Desarrollo Ágil (Low-Code)",
      description: "Experto en GeneXus para acelerar el \"Time-to-Market\", creando soluciones empresariales y sistemas ERP de forma rápida y efectiva cuando el negocio demanda velocidad."
    }
  ],
  keyCompetencies: [
    {
      title: "Integración de Sistemas",
      description: "Conexión eficiente de procesos mediante APIs REST/SOAP y gestión avanzada de bases de datos SQL."
    },
    {
      title: "Arquitectura de Software",
      description: "Enfoque actual en patrones de diseño, buenas prácticas y liderazgo técnico para elevar la calidad del software."
    },
    {
      title: "Resolución de Problemas",
      description: "Capacidad analítica para desglosar requerimientos complejos y transformarlos en soluciones funcionales, independientemente de la tecnología elegida."
    }
  ],
  motivation: "Me motiva el aprendizaje continuo y el desafío de aplicar la herramienta correcta para cada problema, optimizando la productividad operativa de las empresas.",
  developerProfileForAI: `
Nombre: José Antonio Gallegos Carvallo
Título: Desarrollador de Software (Backend & Low-Code) | Java Spring Boot, Hibernate, JPA | Genexus | SQL & APIs

Fortaleza: Versatilidad técnica, dominando tanto el desarrollo tradicional (Pro-Code) como las plataformas de agilidad (Low-Code).

Especializaciones:
1.  Desarrollo Backend Robusto (Pro-Code): Diseño y construcción de sistemas complejos, seguros y escalables con Java (Spring Boot, Hibernate, JPA). Foco en código limpio y eficiente para aplicaciones de misión crítica.
2.  Desarrollo Ágil (Low-Code): Experto en GeneXus para acelerar el "Time-to-Market" en soluciones empresariales y ERPs.

Competencias Clave:
- Integración de Sistemas: APIs REST/SOAP y bases de datos SQL.
- Arquitectura de Software: Patrones de diseño, buenas prácticas y liderazgo técnico.
- Resolución de Problemas: Capacidad analítica para transformar requerimientos complejos en soluciones funcionales.

Tech Stack: Java Spring Boot | GeneXus | SQL | Python | APIs REST/SOAP | Hibernate

Motivación: Aprendizaje continuo y aplicación de la herramienta correcta para cada problema, buscando optimizar la productividad operativa.
`
};

export const certifications = [
  {
    category: "Backend (Java & Spring Boot)",
    items: [
      {
        title: 'Spring Boot 3: aplique las mejores prácticas y proteja una API Rest',
        issuer: 'Alura Latam',
        date: 'Ene 2026',
      },
      {
        title: 'Spring Boot 3: desarrolla una API REST en Java',
        issuer: 'Alura Latam',
        date: 'Ene 2026',
      },
      {
        title: 'Java: persistencia de datos y consultas con Spring Data JPA',
        issuer: 'Alura Latam',
        date: 'Dic 2025',
      },
      {
        title: 'Spring Boot 3: documentar, probar y preparar una API',
        issuer: 'Alura Latam',
        date: 'Ene 2026',
      },
    ]
  },
  {
    category: "Low-Code (GeneXus)",
    items: [
       {
        title: 'Examen Genexus 18 for Mobile',
        issuer: 'GeneXus',
        date: 'Nov 2025',
      },
      {
        title: 'Analista Genexus v16',
        issuer: 'GeneXus',
        date: 'Nov 2020',
      },
    ]
  },
  {
    category: "Desarrollo Web y Herramientas",
    items: [
        {
            title: 'Formación Principiante en Programación (HTML, CSS, JS)',
            issuer: 'Alura Latam',
            date: '2025',
        },
        {
            title: 'HTML y CSS: Flexbox, Responsividad, Header/Footer',
            issuer: 'Alura Latam',
            date: '2025',
        },
        {
            title: 'Lógica de programación con JavaScript',
            issuer: 'Alura Latam',
            date: '2025',
        },
        {
            title: 'Git y GitHub: repositorio, commit y versiones',
            issuer: 'Alura Latam',
            date: 'Jul 2025',
        },
    ]
  },
  {
    category: "Otras Habilidades y Metodologías",
    items: [
       {
        title: 'EF SET English Certificate 75/100 (C2 Proficient)',
        issuer: 'EF Standard English Test (EF SET)',
        date: 'Nov 2022',
      },
      {
        title: 'Fundamentos de Agilidad / Scrum',
        issuer: 'Alura Latam',
        date: 'Sep 2025',
      },
    ]
  }
];

export const education = [
  {
    institution: 'Alura Latam & Oracle',
    title: 'Certificación en Desarrollo de Aplicaciones Web (Oracle ONE)',
    date: '2025 - 2026',
    description: 'Programa de formación en tecnología Oracle Next Education (ONE), enfocado en capacitar a personas en habilidades digitales demandadas para iniciar o reconvertir su carrera tech.',
    skills: ['Desarrollo Frontend', 'Desarrollo Backend', 'Emprendimiento'],
  },
  {
    institution: 'Politécnico de Colombia',
    title: 'Diplomatura en Programación en Java',
    date: '2023',
    description: 'Fundamentos prácticos del lenguaje de programación Java para la aplicación y desarrollo de algoritmos y aplicaciones.',
    skills: ['Java', 'Programación Orientada a Objetos (POO)'],
  },
  {
    institution: 'Duoc UC',
    title: 'Formación Profesional de Grado Superior, Ingeniería Informática',
    date: '2018 - 2021',
    description: 'Formación en las bases de la ingeniería de software y tecnologías de la información.',
    skills: ['Bases de Datos', 'Gestión de Proyectos', 'Seguridad', 'Desarrollo de Software'],
  }
];

export const cvUrl = "https://media.licdn.com/dms/document/media/v2/D4E2DAQFswPwgSlnTKg/profile-treasury-document-pdf-analyzed/B4EZtM.4PfGoAk-/0/1766523112224?e=1770249600&v=beta&t=Uo6RyY4r7tr4TvwMCMLIY9VgcqFprJDu-7jQN4yQB5Q";
