'use client';
import { useState } from 'react';
import { runAgentDemo } from '@/lib/agent-demo.mjs';
import { runAgentWithGemini } from '@/lib/agent-actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
export function EnglishAgentDemo() {
  const [query, setQuery] = useState('What date is required for a reservation?');
  const [output, setOutput] = useState('');
  const [source, setSource] = useState('');
  const [busy, setBusy] = useState(false);
  function local() { const result = runAgentDemo(query); setOutput(!result.source ? 'I could not find enough information in the demo sources.' : result.source.id === 'guide' ? 'A valid date and availability are required to confirm a reservation.' : 'Atlas version 2.0 includes improved search.'); setSource(!result.source ? '' : result.source.id === 'guide' ? 'Reservation guide (fictional)' : 'Atlas release note (fictional)'); }
  async function ai() { setBusy(true); try { const result = await runAgentWithGemini(query, 'en'); setOutput(result.answer); setSource(result.source?.title || ''); } catch { setOutput('The AI service is unavailable.'); setSource(''); } finally { setBusy(false); } }
  return <div className="mt-6 rounded-xl border bg-background p-5"><label htmlFor="en-agent-question" className="text-sm font-medium">Ask a question about the fictional sources</label><Input id="en-agent-question" value={query} maxLength={200} onChange={e => setQuery(e.target.value)} className="mt-2" /><div className="mt-4 flex flex-wrap gap-3"><Button type="button" onClick={local} disabled={!query.trim() || busy}>Search locally</Button><Button type="button" variant="outline" onClick={() => void ai()} disabled={!query.trim() || busy}>{busy ? 'Asking...' : 'Ask Gemini'}</Button></div><p className="mt-3 text-sm text-muted-foreground">Local search stays in your browser. The Gemini option sends your question and a fictional source to Google; do not enter sensitive information. Neither option runs LangGraph or FAISS.</p>{output && <div className="mt-5 rounded-lg border p-4" role="status"><p>{output}</p>{source && <p className="mt-3 text-sm text-muted-foreground">Source: {source}</p>}</div>}</div>;
}
