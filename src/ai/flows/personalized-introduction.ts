'use server';
/**
 * @fileOverview Generates a personalized introduction message for a software developer.
 *
 * - generatePersonalizedIntroduction - A function that generates a personalized introduction message.
 * - PersonalizedIntroductionInput - The input type for the generatePersonalizedIntroduction function.
 * - PersonalizedIntroductionOutput - The return type for the generatePersonalizedIntroduction function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedIntroductionInputSchema = z.object({
  employerProfile: z
    .string()
    .describe('Información sobre el empleador potencial y su empresa.'),
  developerProfile: z
    .string()
    .describe('Información sobre el desarrollador de software, incluyendo habilidades y experiencia.'),
});
export type PersonalizedIntroductionInput = z.infer<typeof PersonalizedIntroductionInputSchema>;

const PersonalizedIntroductionOutputSchema = z.object({
  introduction: z.string().describe('Un mensaje de introducción personalizado para el desarrollador de software.'),
});
export type PersonalizedIntroductionOutput = z.infer<typeof PersonalizedIntroductionOutputSchema>;

export async function generatePersonalizedIntroduction(
  input: PersonalizedIntroductionInput
): Promise<PersonalizedIntroductionOutput> {
  return personalizedIntroductionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedIntroductionPrompt',
  input: {schema: PersonalizedIntroductionInputSchema},
  output: {schema: PersonalizedIntroductionOutputSchema},
  prompt: `Eres un experto en crear mensajes de introducción personalizados para desarrolladores de software. Tu objetivo es escribir en español.

  Dada la siguiente información sobre un empleador potencial y un desarrollador de software, crea un mensaje de introducción conciso y atractivo que resalte las habilidades y experiencia más relevantes del desarrollador para el empleador.

  Perfil del Empleador:
  {{employerProfile}}

  Perfil del Desarrollador:
  {{developerProfile}}

  Mensaje de Introducción:`,
});

const personalizedIntroductionFlow = ai.defineFlow(
  {
    name: 'personalizedIntroductionFlow',
    inputSchema: PersonalizedIntroductionInputSchema,
    outputSchema: PersonalizedIntroductionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
