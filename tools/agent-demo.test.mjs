import test from 'node:test';
import assert from 'node:assert/strict';
import { runAgentDemo } from '../src/lib/agent-demo.mjs';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

test('retrieves the document for a reservation question', () => {
  const result = runAgentDemo('¿Qué fecha requiere una reserva?');
  assert.equal(result.source?.id, 'guide');
  assert.match(result.answer, /fecha válida/);
});
test('retrieves a simulated web result for Atlas', () => {
  const result = runAgentDemo('¿Qué novedades tiene Atlas?');
  assert.equal(result.source?.id, 'atlas');
  assert.equal(result.route, 'Resultado web ficticio');
});
test('does not invent an answer for unmatched queries', () => {
  const result = runAgentDemo('¿Cuál es el precio?');
  assert.equal(result.source, null);
  assert.match(result.answer, /No encontré/);
});
test('ignores capitalization and accents', () => {
  assert.equal(runAgentDemo('ACTUALIZACIÓN DE ATLAS').source?.id, 'atlas');
});
test('retrieves the fictional source for English questions', () => {
  assert.equal(runAgentDemo('What date is required for a reservation?').source?.id, 'guide');
  assert.equal(runAgentDemo('What is new in Atlas?').source?.id, 'atlas');
});
test('downloaded HTML executes its search and updates the result without network', async () => {
  const html = await readFile(new URL('../public/demos/agente-busqueda-local.html', import.meta.url), 'utf8');
  const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
  assert.ok(script);
  const fields = Object.fromEntries(['form', 'question', 'result', 'answer', 'source', 'trace'].map(id => [id, { value: '', textContent: '', hidden: true }]));
  fields.question.value = '¿Qué fecha requiere una reserva?';
  fields.form.addEventListener = (_event, callback) => { fields.form.submit = callback; };
  vm.runInNewContext(script, { document: { getElementById: id => fields[id] }, performance: { now: () => 0 } });
  fields.form.submit({ preventDefault() {} });
  assert.match(fields.answer.textContent, /fecha válida/);
  assert.match(fields.source.textContent, /Guía de reservas/);
  assert.equal(fields.result.hidden, false);
});
