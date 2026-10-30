'use client';

import { useState } from 'react';
import { evidence, proposedCode, requirement, verifyDemoCitation } from '@/lib/engineering-demo.mjs';
import { Button } from '@/components/ui/button';

export function EngineeringDemo() {
  const [line, setLine] = useState(108);
  const result = verifyDemoCitation(line, '   GuardarReserva()');

  return (
    <div className="mt-8 space-y-6">
      <div className="rounded-xl border bg-background p-5">
        <h3 className="font-headline text-xl font-bold">1. Requisito</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{requirement}</p>
      </div>
      <div className="grid min-w-0 gap-6 lg:grid-cols-2">
        <div className="min-w-0">
          <h3 className="mb-3 font-headline text-xl font-bold">2. Evidencia ficticia</h3>
          <pre className="overflow-x-auto rounded-xl border bg-background p-5 text-xs leading-7 sm:text-sm" tabIndex={0} aria-label="Fragmento de evidencia ficticia con números de línea"><code>{evidence.map(item => `${item.line}: ${item.code}`).join('\n')}</code></pre>
        </div>
        <div className="min-w-0">
          <h3 className="mb-3 font-headline text-xl font-bold">3. Propuesta de diseño</h3>
          <pre className="overflow-x-auto rounded-xl border bg-background p-5 text-xs leading-7 sm:text-sm" tabIndex={0} aria-label="Pseudocódigo ilustrativo de la propuesta"><code>{proposedCode}</code></pre>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">Pseudocódigo ilustrativo, creado desde cero. Las líneas AGREGAR son propuestas; las referencias señalan el fragmento ficticio conservado. No es código compilado en GeneXus.</p>
      <div className="rounded-xl border bg-background p-5 sm:p-6">
        <h3 className="font-headline text-xl font-bold">4. Comprueba una cita</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">La propuesta atribuye <code className="break-all text-foreground">GuardarReserva()</code> a la línea {line}. Cambia la referencia y observa el resultado.</p>
        <div className="mt-5 flex flex-wrap gap-3" role="group" aria-label="Elegir referencia de la demostración">
          <Button variant={line === 108 ? 'default' : 'outline'} aria-pressed={line === 108} onClick={() => setLine(108)}>Cita incorrecta · 108</Button>
          <Button variant={line === 103 ? 'default' : 'outline'} aria-pressed={line === 103} onClick={() => setLine(103)}>Corregir cita · 103</Button>
        </div>
        <p role="status" aria-live="polite" aria-atomic="true" className={`mt-5 rounded-lg border p-4 text-sm leading-relaxed ${result.ok ? 'border-emerald-600/40 bg-emerald-500/10' : 'border-amber-600/40 bg-amber-500/10'}`}>
          <strong>{result.ok ? 'CORRECTO' : 'HALLAZGO'}</strong> · {result.message}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Este resultado se calcula en tu navegador sobre cuatro líneas ficticias. Ilustra la comprobación de una cita exacta; no ejecuta los validadores del proyecto ni acredita la corrección funcional del diseño.</p>
      </div>
    </div>
  );
}
