'use client';
import { useState } from 'react';

const parts = [
  { title: 'Agente', detail: 'Organiza el análisis y prepara una propuesta basada en la información disponible.' },
  { title: 'MCP', detail: 'Facilita consultas a las herramientas que permiten leer la base de conocimiento.' },
  { title: 'Evidencia', detail: 'Conserva fragmentos y líneas de origen para respaldar las referencias de la propuesta.' },
  { title: 'Validadores', detail: 'Comprueban reglas de estructura y referencias; sus hallazgos se revisan antes de avanzar.' },
  { title: 'Revisión humana', detail: 'Una persona evalúa y aprueba el diseño antes de generar el documento final.' },
];
export function ArchitectureExplorer() {
  const [selected, setSelected] = useState(0);
  return <div className="mt-6 rounded-xl border bg-background p-5"><p className="text-sm font-medium">Explora cada componente</p><div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Componentes de arquitectura">{parts.map((part, index) => <button key={part.title} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)} className={`rounded-full border px-4 py-2 text-sm ${selected === index ? 'border-primary bg-primary text-primary-foreground' : 'hover:bg-muted'}`}>{part.title}</button>)}</div><div className="mt-5 min-h-20" aria-live="polite"><h3 className="font-headline text-lg font-bold">{parts[selected].title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{parts[selected].detail}</p></div></div>;
}
