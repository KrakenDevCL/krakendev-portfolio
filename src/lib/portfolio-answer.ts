import { certifications, developerProfile, experience, projects, skills } from '@/lib/data';

/** Local, grounded answers when the optional AI service is unavailable. */
export function portfolioAnswer(query: string): string {
  const text = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  if (/contact|correo|email|linkedin|contratar/.test(text)) return 'Puedes contactar a José Antonio por LinkedIn: https://www.linkedin.com/in/krakendevcl/ o escribir a krakendev.cl@gmail.com.';
  if (/certific|oracle|\boci\b|workwithplus/.test(text)) return `Entre sus certificaciones y formación destacan: ${certifications.flatMap(category => category.items).filter(item => item.issuer === 'Oracle' || item.issuer === 'WorkWithPlus').map(item => item.title).join('; ')}.`;
  if (/experien|trabaj|carrera|trayectoria|laboral/.test(text)) return experience.map(item => `${item.title} en ${item.company} (${item.period}): ${item.description}`).join(' ');
  if (/proyecto|portafolio|portfolio|agente|inteligencia artificial|\bia\b|\bllm/.test(text)) return `Entre sus proyectos: ${projects.slice(0, 3).map(project => `${project.title}: ${project.description}`).join(' ')}`;
  if (/habilidad|tecnolog|lenguaje|stack|genexus|java|python/.test(text)) return `Sus tecnologías incluyen ${skills.join(', ')}.`;
  if (/quien|perfil|jose|acerca|presenta|hola/.test(text)) return `${developerProfile.name}: ${developerProfile.bio}`;
  return 'No tengo información suficiente para responder esa pregunta. Puedo ayudarte con su experiencia, proyectos, tecnologías, certificaciones o contacto.';
}
