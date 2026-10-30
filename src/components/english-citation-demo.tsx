'use client';
import { useState } from 'react';
import { verifyDemoCitation, evidence } from '@/lib/engineering-demo.mjs';
import { Button } from '@/components/ui/button';
export function EnglishCitationDemo() {
  const [line, setLine] = useState(108);
  const result = verifyDemoCitation(line, '   GuardarReserva()');
  return <div className="mt-6 rounded-xl border bg-background p-5"><p className="text-sm text-muted-foreground">Fictional existing code (original identifiers retained):</p><pre className="mt-3 overflow-x-auto rounded-lg bg-muted p-4 text-xs"><code>{evidence.map(item => `${item.line}: ${item.code}`).join('\n')}</code></pre><p className="mt-4">Check the reference to <code>GuardarReserva()</code>:</p><div className="mt-3 flex flex-wrap gap-2"><Button variant={line === 108 ? 'default' : 'outline'} aria-pressed={line === 108} onClick={() => setLine(108)}>Incorrect citation · 108</Button><Button variant={line === 103 ? 'default' : 'outline'} aria-pressed={line === 103} onClick={() => setLine(103)}>Correct citation · 103</Button></div><p className="mt-4 text-sm" role="status">{result.ok ? 'Verified: the text matches line 103.' : 'Finding: line 108 is not present in the evidence.'}</p><p className="mt-3 text-sm text-muted-foreground">This browser demonstration checks one exact citation; it does not compile or functionally test the proposed implementation.</p></div>;
}
