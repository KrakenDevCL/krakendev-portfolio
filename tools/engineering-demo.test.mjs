import test from 'node:test';
import assert from 'node:assert/strict';
import { evidence, verifyDemoCitation } from '../src/lib/engineering-demo.mjs';

test('rejects the incorrect reference shown initially', () => {
  assert.equal(verifyDemoCitation(108, '   GuardarReserva()').ok, false);
});
test('accepts the corrected reference shown to visitors', () => {
  assert.equal(verifyDemoCitation(103, '   GuardarReserva()').ok, true);
});
test('rejects existing lines that belong to a different operation', () => {
  assert.equal(verifyDemoCitation(102, '   GuardarReserva()').ok, false);
});
test('requires exact text including indentation', () => {
  assert.equal(verifyDemoCitation(103, 'GuardarReserva()').ok, false);
});
test('accepts every literal fragment in the demonstration evidence', () => {
  for (const item of evidence) assert.equal(verifyDemoCitation(item.line, item.code).ok, true);
});
