import { certifications, projects } from '@/lib/data';

export const englishProfile = 'I build solutions that combine backend engineering with applied artificial intelligence. I design workflows with agents and language models, connect information sources through RAG, and develop tools that automate engineering processes with evidence, validation and human review. My enterprise software experience since 2021 includes APIs, SQL and software modernization.';
export const englishExperience = [
  { title: 'Software Engineer', company: 'BROWSE Chile', period: 'January 2021 - Present', description: 'Developing, maintaining and modernizing enterprise ERP modules with GeneXus, Java integrations and SQL.', achievements: ['Designed and developed a REST integration to automate sending bank payroll files from an ERP.', 'Optimized business logic and SQL queries, reducing processing time by 30% and increasing internal report generation speed by 70%.', 'Led the modernization of existing modules while supporting stability and scalability.', 'Applied quality practices with a QA rejection rate close to 0% and consistent delivery against agreed service levels.'] },
  { title: 'Backend Developer Intern', company: 'Fisfor', period: 'August 2020 - October 2020', description: 'Developed backend modules for a property rental web application using Java, Spring Boot, JHipster and PostgreSQL.', achievements: [] },
];
export const englishSkills = [
  { title: 'Applied AI and agents', items: ['LLMs', 'RAG', 'AI agents', 'Python', 'LangGraph', 'FAISS', 'n8n', 'Spring AI', 'MCP'] },
  { title: 'Backend and integration', items: ['Java', 'Spring Boot 3', 'REST/SOAP APIs', 'SQL', 'PostgreSQL', 'Oracle Database'] },
  { title: 'Cloud and tools', items: ['Oracle Cloud Infrastructure (OCI)', 'Docker', 'DevOps'] },
  { title: 'Enterprise development', items: ['GeneXus (v16, v17, v18)', 'WorkWithPlus'] },
];
const descriptions = [
  'An original engineering workflow connecting requirements, code evidence and technical design proposals through automated checks and human review.',
  'A learning project combining an AI agent, local document retrieval and web search, orchestrated with n8n.',
  'Interactive financial application frontend with simulated data, connected to a Spring Boot backend.',
  'REST API for a discussion forum, with topics, replies, JWT authentication and OpenAPI documentation.',
  'Frontend for a developer social network with projects, follows and profiles.',
  'REST API for a fictional clinic, managing doctors, patients and appointments with JWT security.',
  'A console application for searching books and authors using the Gutendex API and a database.',
  'This interactive portfolio, built with Next.js, Tailwind CSS and Genkit.',
];
export const englishProjects = projects.map((project, index) => ({ ...project, title: index === 0 ? 'AI-assisted software engineering' : index === 1 ? 'Hybrid AI agent' : project.title, description: descriptions[index], caseStudyLink: index === 0 ? '/en/projects/ai-engineering' : index === 1 ? '/en/projects/hybrid-agent' : index === 3 ? '/en/projects/krakenhub-api' : undefined }));
export const englishCertifications = certifications.map((category, index) => ({ ...category, category: ['AI and agents: certifications and training', 'Cloud and infrastructure', 'Backend and development', 'Enterprise development', 'Languages'][index] }));
export const englishEducation = [
  { institution: 'Alura Latam & Oracle', title: 'ONE Program: Tech Builder', date: 'Jun 2026 - Jul 2026', description: 'Applied training in AI, agents, automation and RAG.' },
  { institution: 'Alura Latam & Oracle', title: 'ONE Program: Tech Advanced', date: 'Mar 2026 - Jul 2026', description: 'Cloud infrastructure, security, databases and AI services.' },
  { institution: 'Alura Latam & Oracle', title: 'ONE Program: Tech Foundation', date: 'Jul 2025 - Feb 2026', description: 'Programming fundamentals, web development and professional skills.' },
  { institution: 'Duoc UC', title: 'Bachelor’s degree in Computer Engineering', date: 'Graduated 2022', description: 'Graduated with academic distinction in Viña del Mar, Chile.' },
  { institution: 'Politécnico de Colombia', title: 'Java Programming Diploma', date: '2023', description: 'Professional training in Java programming.' },
];
