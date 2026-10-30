'use client';

import { useState } from 'react';
import { runAgentDemo } from '@/lib/agent-demo.mjs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { runAgentWithGemini } from '@/lib/agent-actions';

type Result = ReturnType<typeof runAgentDemo> & { elapsedMs: number };

export function LiveAgentDemo() {
  const [question, setQuestion] = useState('¿Qué fecha requiere una reserva?');
  const [result, setResult] = useState<Result | null>(null);
  const [aiResult, setAiResult] = useState<Awaited<ReturnType<typeof runAgentWithGemini>> | null>(null);
  const [loading, setLoading] = useState(false);
  function run(event: React.FormEvent) {
    event.preventDefault();
    if (!question.trim()) return;
    const start = performance.now();
    const output = runAgentDemo(question);
    setResult({ ...output, elapsedMs: Math.round((performance.now() - start) * 100) / 100 });
  }
  async function askAI() {
    if (!question.trim() || loading) return;
    setLoading(true);
    setAiResult(null);
    try { setAiResult(await runAgentWithGemini(question)); }
    catch { setAiResult({ status: 'unavailable', answer: 'No fue posible ejecutar la demo de IA. Inténtalo nuevamente.', source: null, searchMs: 0, modelMs: 0 }); }
    finally { setLoading(false); }
  }
  return <div className="mt-6 rounded-xl border bg-background p-5 sm:p-6">
    <form onSubmit={run} className="flex flex-col gap-3 sm:flex-row"><Input value={question} onChange={event => setQuestion(event.target.value)} maxLength={200} aria-label="Pregunta para la demostración local" /><Button type="submit" disabled={!question.trim()}>Ejecutar demo</Button></form>
    <p className="mt-3 text-sm text-muted-foreground">Prueba «¿Qué fecha requiere una reserva?», «¿Qué novedades tiene Atlas?» o una pregunta sin respuesta.</p>
    {result && <div className="mt-6 grid gap-4 md:grid-cols-2" aria-live="polite"><div className="rounded-lg border p-4"><p className="text-xs font-semibold uppercase tracking-wider text-primary">Respuesta</p><p className="mt-3">{result.answer}</p>{result.source && <p className="mt-4 text-sm text-muted-foreground">Fuente: {result.source.title}</p>}</div><div className="rounded-lg border p-4"><p className="text-xs font-semibold uppercase tracking-wider text-primary">Ejecución local</p><dl className="mt-3 space-y-2 text-sm"><div className="flex justify-between gap-3"><dt>Ruta</dt><dd>{result.route}</dd></div><div className="flex justify-between gap-3"><dt>Fuentes coincidentes</dt><dd>{result.count}</dd></div><div className="flex justify-between gap-3"><dt>Tiempo en este navegador</dt><dd>{result.elapsedMs} ms</dd></div></dl></div></div>}
    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">La búsqueda local funciona en tu navegador y usa dos textos ficticios. Su tiempo corresponde solo a esa búsqueda.</p>
    <div className="mt-6 border-t pt-6"><h3 className="font-headline text-xl font-bold">Respuesta con Gemini</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Esta opción busca una fuente ficticia y envía tu pregunta y ese fragmento a Google Gemini. No incluyas información sensible. No ejecuta LangGraph ni FAISS.</p><Button className="mt-4" type="button" variant="outline" disabled={loading || !question.trim()} onClick={() => void askAI()}>{loading ? 'Consultando...' : 'Preguntar con Gemini'}</Button>
      {aiResult && <div className="mt-5 rounded-lg border p-4" aria-live="polite"><p className="text-xs font-semibold uppercase tracking-wider text-primary">{aiResult.status === 'generated' ? 'Respuesta generada' : aiResult.status === 'no_source' ? 'Sin fuente' : 'Servicio no disponible'}</p><p className="mt-3">{aiResult.answer}</p>{aiResult.source && <p className="mt-3 text-sm text-muted-foreground">Fuente consultada: {aiResult.source.title} · {aiResult.source.text}</p>}<p className="mt-3 text-xs text-muted-foreground">Búsqueda: {aiResult.searchMs} ms{aiResult.modelMs > 0 ? ` · Modelo: ${aiResult.modelMs} ms` : ''}. Medición de esta ejecución.</p></div>}
    </div>
  </div>;
}
