import test from 'node:test';
import assert from 'node:assert/strict';
import { createAgent, createRetriever } from '../src/agent.mjs';

test('FAISS recovers the relevant fictional source', () => {
  assert.equal(createRetriever()('¿Qué fecha requiere una reserva?')?.id, 'reservas');
  assert.equal(createRetriever()('¿Qué versión tiene Atlas?')?.id, 'atlas');
});
test('LangGraph returns a grounded extract and its source', async () => {
  const result = await createAgent().invoke({ question: '¿Qué fecha requiere una reserva?' });
  assert.equal(result.mode, 'extractivo');
  assert.equal(result.source.id, 'reservas');
  assert.match(result.answer, /fecha válida/);
});
test('unknown questions do not invoke the generator', async () => {
  let called = false;
  const agent = createAgent({ generate: async () => { called = true; return 'unexpected'; } });
  const result = await agent.invoke({ question: '¿Cuál es el precio?' });
  assert.equal(result.mode, 'sin_fuente');
  assert.equal(result.source, null);
  assert.equal(called, false);
});
test('generator receives the actual retrieved source', async () => {
  const agent = createAgent({ generate: async (_question, source) => `Verificado: ${source.id}` });
  const result = await agent.invoke({ question: '¿Qué versión tiene Atlas?' });
  assert.equal(result.mode, 'generado');
  assert.equal(result.answer, 'Verificado: atlas');
});
