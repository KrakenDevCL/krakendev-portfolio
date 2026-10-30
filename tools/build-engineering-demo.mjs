import { mkdir, writeFile } from 'node:fs/promises';
import { evidence, proposedCode, requirement, verifyDemoCitation } from '../src/lib/engineering-demo.mjs';

const escapeHtml = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const rejected = verifyDemoCitation(108, '   GuardarReserva()');
const accepted = verifyDemoCitation(103, '   GuardarReserva()');
if (rejected.ok || !accepted.ok) throw new Error('The demonstration results are inconsistent.');

const html = `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Reservas · Análisis y diseño de demostración</title>
<meta name="description" content="Documento ficticio creado para el portafolio de José Antonio Gallegos Carvallo.">
<style>
*{box-sizing:border-box}body{margin:0;background:#e9eef3;color:#15283b;font:15px/1.6 system-ui,sans-serif}.toolbar{max-width:850px;margin:24px auto;padding:0 24px;color:#46596c}.page{background:white;max-width:850px;margin:24px auto;padding:48px 56px;border-top:7px solid #087e8b;box-shadow:0 8px 35px #15283b12}header{display:flex;justify-content:space-between;gap:20px;border-bottom:1px solid #dbe4eb;padding-bottom:18px;font-size:12px;color:#46596c}.label{color:#087e8b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px}h1{font-size:32px;line-height:1.2;margin:18px 0}h2{font-size:18px;margin:24px 0 8px}p{margin:8px 0}pre{white-space:pre-wrap;overflow-wrap:anywhere;background:#f1f6f8;border:1px solid #dbe4eb;border-radius:8px;padding:15px;font:12px/1.7 monospace}table{width:100%;border-collapse:collapse;font-size:13px}th,td{text-align:left;padding:10px;border-bottom:1px solid #dbe4eb;vertical-align:top}th{background:#f1f6f8}.note{border-left:3px solid #087e8b;padding:10px 14px;background:#f1f6f8;font-size:13px}footer{border-top:1px solid #dbe4eb;margin-top:28px;padding-top:12px;font-size:11px;color:#46596c}.fail{color:#8c4c00}.pass{color:#166548}@media(max-width:600px){.page{padding:28px 20px;margin:12px}header{flex-direction:column;gap:4px}h1{font-size:27px}}@page{size:A4;margin:16mm}@media print{body{background:white;font-size:10pt}.toolbar{display:none}.page{max-width:none;margin:0;padding:0;border-top:4px solid #087e8b;box-shadow:none;break-after:page}.page:last-child{break-after:auto}h1{font-size:24pt}h2{font-size:13pt;margin-top:14px}pre{font-size:8pt;padding:10px}header{padding-top:10px}footer{margin-top:16px}table{font-size:9pt}th,td{padding:7px}h2,pre,tr,.note{break-inside:avoid}h2{break-after:avoid}}
</style></head><body>
<p class="toolbar">Documento de demostración · Puedes guardarlo como PDF desde la opción Imprimir de tu navegador.</p>
<article class="page"><header><span>KrakenDevCL · Ingeniería asistida por IA</span><span>DEMOSTRACIÓN FICTICIA · 1 / 2</span></header>
<p class="label">Análisis</p><h1>Confirmación de reservas</h1>
<p>Autor: José Antonio Gallegos Carvallo</p>
<p class="note">Ejemplo creado desde cero para el portafolio. No reproduce datos, código ni documentos de un sistema empresarial.</p>
<h2>1. Requisito funcional</h2><p>${escapeHtml(requirement)}</p>
<h2>2. Comportamiento actual ilustrativo</h2><p>La operación consulta disponibilidad y luego guarda la reserva. El fragmento disponible no incluye una comprobación de fecha.</p>
<pre>${escapeHtml(evidence.map(item => `${item.line}: ${item.code}`).join('\n'))}</pre>
<h2>3. Alcance y supuestos</h2><p>La propuesta afecta únicamente a la confirmación. La fecha mínima es un dato de entrada configurado; se utiliza la misma referencia de calendario para comparar fechas. Se conserva el control de disponibilidad.</p>
<h2>4. Escenarios de aceptación</h2><table><thead><tr><th>Entrada</th><th>Resultado esperado</th></tr></thead><tbody>
<tr><td>Fecha ausente</td><td>Mostrar mensaje e impedir el guardado.</td></tr>
<tr><td>Fecha anterior al mínimo</td><td>Mostrar mensaje e impedir el guardado.</td></tr>
<tr><td>Fecha igual o posterior al mínimo</td><td>Continuar con disponibilidad y guardado según las reglas existentes.</td></tr></tbody></table>
<footer>Material público de demostración · Resultados esperados, pendientes de implementación y pruebas funcionales.</footer></article>
<article class="page"><header><span>KrakenDevCL · Ingeniería asistida por IA</span><span>DEMOSTRACIÓN FICTICIA · 2 / 2</span></header>
<p class="label">Diseño</p><h1>Control previo al guardado</h1>
<h2>1. Variables e inserción</h2><p><code>&amp;FechaReserva</code>: fecha ingresada. <code>&amp;FechaMinima</code>: fecha mínima permitida. El nuevo control se ubica antes de la línea 102.</p>
<h2>2. Propuesta ilustrativa</h2><pre>${escapeHtml(proposedCode)}</pre>
<p>Las referencias señalan líneas del fragmento ficticio. AGREGAR identifica el cambio propuesto. El pseudocódigo no ha sido compilado en GeneXus.</p>
<h2>3. Comprobación de una cita</h2>
<p class="fail"><strong>Antes:</strong> ${escapeHtml(rejected.message)}</p>
<p class="pass"><strong>Después:</strong> ${escapeHtml(accepted.message)}</p>
<p>Resultados calculados por el verificador de demostración al generar este archivo. Solo comprueban una referencia literal contra la evidencia ficticia.</p>
<h2>4. Verificaciones posteriores</h2><p>Compilar la implementación, ejecutar los tres escenarios, comprobar que el rechazo no persiste datos y probar la conservación de las reglas de disponibilidad.</p>
<p class="note">Estado: propuesta de demostración. No acredita aprobación humana, implementación ni comportamiento en un entorno empresarial.</p>
<footer>Material público de demostración · Autor: José Antonio Gallegos Carvallo · 2 / 2</footer></article>
</body></html>`;

await mkdir(new URL('../public/demos/', import.meta.url), { recursive: true });
await writeFile(new URL('../public/demos/reservas-analisis-diseno.html', import.meta.url), html, 'utf8');
console.log('Created public/demos/reservas-analisis-diseno.html using synthetic data only.');
