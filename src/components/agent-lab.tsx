'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const scenarios = [
  { id: 'documents', label: 'Consultar documentos', question: '¿Qué necesita una reserva para confirmarse?', route: 'Documentos ficticios', reason: 'La pregunta se relaciona con el material de ejemplo disponible.', source: 'Guía ficticia de reservas: «Para confirmar, la reserva necesita una fecha válida».', answer: 'Para confirmar una reserva se requiere una fecha válida.', outcome: 'Con respaldo en la fuente seleccionada.', steps: [['Clasificar', 'Completado', '80 ms'], ['Buscar en documentos simulados', 'Completado', '140 ms'], ['Construir respuesta', 'Completado', '220 ms']] },
  { id: 'web', label: 'Consultar web simulada', question: '¿Qué novedades hay en una herramienta ficticia?', route: 'Web simulada', reason: 'La pregunta solicita información reciente.', source: 'Resultado web ficticio: «La versión 2.0 de Atlas incluye búsqueda mejorada».', answer: 'La versión 2.0 de Atlas incluye una búsqueda mejorada.', outcome: 'Con respaldo en el resultado ficticio.', steps: [['Clasificar', 'Completado', '80 ms'], ['Consultar resultado simulado', 'Completado', '350 ms'], ['Construir respuesta', 'Completado', '220 ms']] },
  { id: 'unknown', label: 'Sin evidencia suficiente', question: '¿Cuál es el precio de un producto que no aparece en las fuentes?', route: 'Sin respuesta', reason: 'No hay una fuente ficticia que sustente el precio.', source: 'No se encontró una fuente para esta pregunta.', answer: 'No tengo información suficiente para indicar un precio.', outcome: 'Respuesta limitada por falta de evidencia.', steps: [['Clasificar', 'Completado', '80 ms'], ['Buscar evidencia', 'Sin resultados', '140 ms'], ['Comunicar límite', 'Completado', '100 ms']] },
] as const;

export function AgentLab() {
  const [id, setId] = useState<(typeof scenarios)[number]['id']>('documents');
  const scenario = scenarios.find(item => item.id === id)!;
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
      <div className="space-y-4">
        <div role="group" aria-label="Elegir escenario de demostración" className="flex flex-wrap gap-2">{scenarios.map(item => <Button key={item.id} type="button" size="sm" variant={id === item.id ? 'default' : 'outline'} aria-pressed={id === item.id} onClick={() => setId(item.id)}>{item.label}</Button>)}</div>
        <div className="rounded-xl border bg-background p-5"><p className="text-xs font-semibold uppercase tracking-wider text-primary">Pregunta ficticia</p><p className="mt-2 font-medium">{scenario.question}</p><p className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">Ruta seleccionada · {scenario.route}</p><p className="mt-2 text-sm text-muted-foreground">{scenario.reason}</p></div>
        <div className="rounded-xl border bg-background p-5"><p className="text-xs font-semibold uppercase tracking-wider text-primary">Fuente de demostración</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{scenario.source}</p><p className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">Respuesta ilustrativa</p><p className="mt-2 font-medium">{scenario.answer}</p><p className="mt-3 text-sm text-muted-foreground">{scenario.outcome}</p></div>
      </div>
      <div className="rounded-xl border bg-background p-5 sm:p-6" aria-live="polite">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">Traza de ejemplo</p>
        <h3 className="mt-2 font-headline text-xl font-bold">Qué ocurre en cada etapa</h3>
        <ol className="mt-5 space-y-3">{scenario.steps.map(([step, status, time], index) => <li key={step} className="flex items-start justify-between gap-4 rounded-lg border p-4"><div><span className="text-xs text-muted-foreground">0{index + 1}</span><p className="mt-1 font-medium">{step}</p><p className="text-sm text-muted-foreground">{status}</p></div><span className="whitespace-nowrap font-mono text-sm text-primary">{time}</span></li>)}</ol>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Simulación interactiva con respuestas, estados y tiempos predefinidos. No consulta un agente, archivos ni servicios externos; los tiempos no son mediciones reales.</p>
      </div>
    </div>
  );
}
