'use server';

import { z } from 'zod';
import { chatAboutPortfolio } from '@/ai/flows/portfolio-chat';

// Contact Form Action
const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Correo electrónico no válido."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const parsed = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (parsed.success) {
    console.log('Formulario de contacto enviado:', parsed.data);
    return { success: true, message: '¡Mensaje enviado con éxito!' };
  } else {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      success: false,
      message: 'Por favor, corrige los errores a continuación.',
      errors: {
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      }
    };
  }
}

// Chatbot Action
const chatSchema = z.object({
  query: z.string().min(1, "La consulta no puede estar vacía."),
});

export async function getChatbotResponse(query: string) {
  const parsed = chatSchema.safeParse({ query });

  if (!parsed.success) {
    const errorMessages = parsed.error.errors.map(e => e.message).join(' ');
    throw new Error(errorMessages);
  }

  try {
    const result = await chatAboutPortfolio(parsed.data.query);
    return { success: true, response: result.response };
  } catch (error) {
    console.error("Error al obtener la respuesta del chatbot:", error);
    return { success: false, response: "Lo siento, algo salió mal. Por favor, inténtalo de nuevo más tarde." };
  }
}
