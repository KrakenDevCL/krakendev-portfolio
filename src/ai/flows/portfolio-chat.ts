'use server';
/**
 * @fileOverview Un chatbot que responde preguntas sobre el portafolio de un desarrollador.
 *
 * - chatAboutPortfolio - Una función que maneja la lógica del chat.
 * - PortfolioChatInput - El tipo de entrada para la función chatAboutPortfolio.
 * - PortfolioChatOutput - El tipo de retorno para la función chatAboutPortfolio.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { developerProfile, projects, skills, certifications, education } from '@/lib/data';

const PortfolioChatInputSchema = z.object({
  query: z.string().describe('La pregunta del usuario sobre el portafolio.'),
  developerProfile: z.any().describe('Información sobre el desarrollador.'),
  projects: z.any().describe('Una lista de los proyectos del desarrollador.'),
  skills: z.any().describe('Una lista de las habilidades del desarrollador.'),
  certifications: z.any().describe('Una lista de las certificaciones del desarrollador, agrupadas por categoría.'),
  education: z.any().describe('Una lista de la formación académica del desarrollador.'),
});
export type PortfolioChatInput = z.infer<typeof PortfolioChatInputSchema>;

const PortfolioChatOutputSchema = z.object({
  response: z.string().describe('La respuesta a la pregunta del usuario.'),
});
export type PortfolioChatOutput = z.infer<typeof PortfolioChatOutputSchema>;

export async function chatAboutPortfolio(query: string): Promise<PortfolioChatOutput> {
  return portfolioChatFlow({
    query,
    developerProfile,
    projects,
    skills,
    certifications,
    education,
  });
}

const prompt = ai.definePrompt({
  name: 'portfolioChatPrompt',
  input: { schema: PortfolioChatInputSchema },
  output: { schema: PortfolioChatOutputSchema },
  prompt: `Eres un asistente virtual amigable y profesional para el portafolio de José Antonio Gallegos Carvallo. Tu nombre es 'Asistente Virtual'.
  Tu objetivo es responder preguntas sobre el desarrollador, sus proyectos, sus habilidades, certificaciones y formación académica, basándote únicamente en la información proporcionada a continuación.
  Sé conciso y directo en tus respuestas. Si la pregunta no se puede responder con la información proporcionada, di amablemente que no tienes esa información. No inventes nada.
  Responde siempre en español.

  Aquí está la información del portafolio:

  ### Perfil del Desarrollador
  {{{developerProfile}}}

  ### Formación Académica
  {{#each education}}
  - **{{this.institution}}** ({{this.date}}): {{this.title}}. {{this.description}} Aptitudes: {{#each this.skills}}{{{this}}}{{/each}}.
  {{/each}}

  ### Proyectos
  {{#each projects}}
  - Título: {{this.title}}
    Descripción: {{this.description}}
    Tecnologías: {{#each this.techStack}}{{{this}}}{{/each}}
  {{/each}}

  ### Habilidades
  {{#each skills}}
  - {{{this}}}
  {{/each}}
  
  ### Certificaciones
  {{#each certifications}}
  **{{this.category}}**
  {{#each this.items}}
  - Título: {{this.title}}
    Emitido por: {{this.issuer}}
    Fecha: {{this.date}}
  {{/each}}

  {{/each}}

  Pregunta del usuario:
  "{{query}}"

  Tu respuesta:`,
});

const portfolioChatFlow = ai.defineFlow(
  {
    name: 'portfolioChatFlow',
    inputSchema: PortfolioChatInputSchema,
    outputSchema: PortfolioChatOutputSchema,
  },
  async input => {
    // Stringify the complex objects for better templating
    const templatingInput = {
      ...input,
      developerProfile: JSON.stringify(input.developerProfile, null, 2),
      projects: input.projects, // keep as array for #each
      skills: input.skills, // keep as array for #each
      education: input.education, // keep as array for #each
      certifications: input.certifications, // keep as array for #each
    };

    const { output } = await prompt(templatingInput);
    return output!;
  }
);
