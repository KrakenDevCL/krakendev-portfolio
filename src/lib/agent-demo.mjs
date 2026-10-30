// Public demonstration data, created specifically for this portfolio.
export const demoSources = [
  { id: 'guide', title: 'Guía de reservas (ficticia)', kind: 'document', text: 'Para confirmar una reserva se necesita una fecha válida y disponibilidad.', keywords: ['reserva', 'reservas', 'fecha', 'confirmar', 'disponibilidad', 'reservation', 'booking', 'date', 'availability'] },
  { id: 'atlas', title: 'Nota de lanzamiento Atlas (ficticia)', kind: 'web', text: 'La versión 2.0 de Atlas incorpora una búsqueda mejorada.', keywords: ['atlas', 'version', 'novedades', 'actualizacion', 'update', 'updates', 'news'] },
];

/**
 * A deterministic local retrieval demonstration, not an LLM or real web search.
 * @param {string} question
 * @returns {{ route: string, answer: string, source: typeof demoSources[number] | null, count: number }}
 */
export function runAgentDemo(question) {
  const normalized = question.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const words = normalized.match(/[a-z0-9]+/g) || [];
  const ranked = demoSources.map(source => ({ source, score: source.keywords.filter(word => words.includes(word)).length })).filter(x => x.score > 0).sort((a, b) => b.score - a.score);
  if (!ranked.length) return { route: 'Sin fuente', answer: 'No encontré información suficiente en las fuentes de demostración.', source: null, count: 0 };
  const best = ranked[0];
  return { route: best.source.kind === 'web' ? 'Resultado web ficticio' : 'Documento ficticio', answer: best.source.text, source: best.source, count: ranked.length };
}
