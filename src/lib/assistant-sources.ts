import { certifications, developerProfile, experience, projects, skills } from '@/lib/data';

export type AssistantSource = { id: string; title: string; href: string; content: string; terms: RegExp };

// These are public portfolio sections, not a retrieval system over private files.
export const assistantSources: AssistantSource[] = [
  { id: 'profile', title: 'Sobre mí y stack', href: '/#about', content: `${developerProfile.bio} Tecnologías: ${skills.join(', ')}.`, terms: /perfil|quien|jose|habilidad|tecnolog|stack|lenguaje|python|java|genexus|saluda|hola|profile|who|skill|technology|language|hello/ },
  { id: 'experience', title: 'Experiencia profesional', href: '/#experience', content: experience.map(x => `${x.title}, ${x.company}, ${x.period}: ${x.description} ${x.achievements.join(' ')}`).join('\n'), terms: /experien|trayectoria|trabaj|carrera|laboral|empleo|browse|fisfor|profesional|work|career|professional/ },
  { id: 'engineering', title: 'Ingeniería asistida por IA', href: '/proyectos/ingenieria-asistida-ia', content: `${projects[0].description} El caso utiliza evidencia de código, validaciones documentales y revisión humana. El piloto generó un documento; no acredita el funcionamiento de una implementación.`, terms: /ingenieria|trazabilidad|evidencia|pseudocodigo|document|mcp|gene\s?xus|analisis|engineering|traceability|evidence|design/ },
  { id: 'agent', title: 'Agente híbrido de IA', href: '/proyectos/agente-hibrido', content: `${projects[1].description} Utiliza Python, LangGraph, FAISS, n8n, búsqueda web y modelos de lenguaje. Es un proyecto de aprendizaje.`, terms: /agent|agente|\brag\b|langgraph|\bllm|\bia\b|\bai\b|inteligencia artificial|artificial intelligence|hibrido|hybrid|faiss|n8n/ },
  { id: 'projects', title: 'Proyectos destacados', href: '/#projects', content: projects.map(x => `${x.title}: ${x.description}`).join('\n'), terms: /proyecto|project|portafolio|portfolio|krakenhub|tentaculo|voll|literalura/ },
  { id: 'certifications', title: 'Certificaciones y formación', href: '/#certifications', content: certifications.flatMap(x => x.items.map(y => `${y.title}, ${y.issuer}, ${y.date}`)).join('; '), terms: /certific|formacion|oracle|\boci\b|workwithplus|curso|estudio|education|training|course/ },
  { id: 'contact', title: 'Contacto', href: '/#contact', content: 'LinkedIn: https://www.linkedin.com/in/krakendevcl/; correo: krakendev.cl@gmail.com.', terms: /contact|correo|email|linkedin|contratar/ },
];

export function selectAssistantSources(query: string): AssistantSource[] {
  const normalized = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return assistantSources.filter(source => source.terms.test(normalized));
}
