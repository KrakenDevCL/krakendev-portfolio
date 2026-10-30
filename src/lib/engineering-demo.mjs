// Synthetic portfolio fixture. Never replace with business code or real case data.
export const requirement = 'Impedir la confirmación de una reserva si falta la fecha o si es anterior a la fecha mínima permitida. Conservar la validación de disponibilidad antes de guardar.';

export const evidence = [
  { line: 101, code: "Event 'Confirmar'" },
  { line: 102, code: '   ValidarDisponibilidad()' },
  { line: 103, code: '   GuardarReserva()' },
  { line: 104, code: 'Endevent' },
];

export const proposedCode = `Event 'Confirmar' // referencia: 101
   If &FechaReserva.IsEmpty() Or &FechaReserva < &FechaMinima // AGREGAR
      Msg('Selecciona una fecha válida.') // AGREGAR
      Return // AGREGAR
   Endif // AGREGAR
   ValidarDisponibilidad() // referencia: 102
   GuardarReserva() // referencia: 103
Endevent // referencia: 104`;

/**
 * Checks one exact citation against the synthetic fixture only.
 * @param {number} line
 * @param {string} code
 */
export function verifyDemoCitation(line, code) {
  const fragment = evidence.find(item => item.line === line);
  if (!fragment) return { ok: false, message: `Cita rechazada: la línea ${line} no existe en la evidencia de demostración.` };
  if (fragment.code !== code) return { ok: false, message: `Cita rechazada: el texto no coincide exactamente con la línea ${line}.` };
  return { ok: true, message: `Cita verificada: el texto coincide exactamente con la línea ${line}.` };
}
