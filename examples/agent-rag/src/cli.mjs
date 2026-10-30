import { createAgent, generateWithGemini } from './agent.mjs';

const args = process.argv.slice(2);
const useGemini = args.includes('--gemini');
const question = args.filter(arg => arg !== '--gemini').join(' ').trim();
if (!question || question.length > 200) {
  console.error('Uso: npm start -- "¿Qué fecha requiere una reserva?" [--gemini]');
  process.exitCode = 1;
} else {
  try {
    const result = await createAgent({ generate: useGemini ? generateWithGemini : null }).invoke({ question });
    console.log(`Modo: ${result.mode}\nRespuesta: ${result.answer}\nFuente: ${result.source?.title || 'sin fuente'}`);
  } catch (error) {
    console.error(`No se pudo completar la consulta: ${error.message}`);
    process.exitCode = 1;
  }
}
