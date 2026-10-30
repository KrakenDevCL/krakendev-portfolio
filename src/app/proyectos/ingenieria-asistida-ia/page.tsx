import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, FileCheck2, Workflow } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/sections/footer';
import { EngineeringDemo } from '@/components/engineering-demo';
import { ArchitectureExplorer } from '@/components/architecture-explorer';

export const metadata: Metadata = {
  title: 'Ingeniería de software asistida por IA',
  description: 'Un proyecto de José Antonio Gallegos Carvallo: requisitos, evidencia de código y diseño técnico con validaciones automáticas y revisión humana.',
  alternates: { canonical: '/proyectos/ingenieria-asistida-ia' },
};

const steps = [
  ['Requisitos', 'Preparar el caso y estructurar el requerimiento.'],
  ['Evidencia', 'Consultar el código en modo de solo lectura.'],
  ['Diseño', 'Vincular cada propuesta con sus fragmentos de origen.'],
  ['Validación', 'Verificar estructura, referencias y coherencia documental.'],
  ['Revisión', 'Evaluar y aprobar el diseño con criterio humano.'],
  ['Word', 'Generar y verificar el documento aprobado.'],
];

const decisions = [
  ['Un agente, contexto continuo', 'Simplifiqué una arquitectura de varios agentes para reducir los traspasos de contexto y conservar una visión completa del caso.'],
  ['Reglas comprobables en scripts', 'Las validaciones deterministas revisan propiedades concretas del documento y las referencias del pseudocódigo.'],
  ['Evidencia separada del entregable', 'El documento mantiene una lectura clara y la evidencia conserva el respaldo técnico de cada propuesta.'],
  ['Estado compacto por caso', 'Las tareas y decisiones vigentes permiten retomar el trabajo sin cargar todo el historial.'],
];

export default function EngineeringCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <section className="relative overflow-hidden border-b">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
          <div className="container relative py-12 sm:py-20">
            <Link href="/en/projects/ai-engineering" hrefLang="en" className="float-right rounded-md border px-3 py-2 text-sm">English</Link>
            <Button asChild variant="ghost" className="mb-10">
              <Link href="/#projects"><ArrowLeft className="mr-2 h-4 w-4" /> Volver a proyectos</Link>
            </Button>
            <div className="max-w-4xl">
              <Badge variant="outline" className="mb-6">Caso de estudio · Autoría propia</Badge>
              <h1 className="font-headline text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                De los requisitos a un <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">diseño técnico revisable.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Diseñé y desarrollé un flujo de ingeniería asistido por IA que conecta requisitos, evidencia de código y propuestas de diseño, con validaciones automáticas y revisión humana.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">José Antonio Gallegos Carvallo · Arquitectura, desarrollo y automatización</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {['JavaScript', 'Node.js', 'PowerShell', 'MCP', 'GeneXus', 'Markdown', 'Open XML'].map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
              </div>
            </div>
          </div>
        </section>

        <div className="container max-w-6xl space-y-20 py-16 sm:space-y-28 sm:py-24">
          <section className="grid gap-8 md:grid-cols-2" aria-label="Problema y contribución">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">El problema</p>
              <h2 className="font-headline text-2xl font-bold sm:text-3xl">Una propuesta necesita respaldo.</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">Analizar un cambio exige comprender el código existente, identificar los componentes afectados y conservar las validaciones vigentes. Generar texto no basta para comprobar que el diseño se apoya en el sistema consultado.</p>
            </div>
            <div className="rounded-2xl border bg-card p-6 sm:p-8">
              <h2 className="font-headline text-2xl font-bold">Mi contribución</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">Soy el autor del proyecto. Diseñé la arquitectura, desarrollé sus herramientas y definí el proceso de análisis, revisión y generación documental.</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">Simplifiqué el flujo a un agente, adapté la capa de validación e incorporé preparación de casos, estado de trabajo y registro de métricas por fase.</p>
            </div>
          </section>

          <section aria-labelledby="process-title">
            <Workflow className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
            <h2 id="process-title" className="font-headline text-3xl font-bold">Un recorrido con puntos de control</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">La IA elabora la propuesta. Las herramientas comprueban reglas concretas. La persona revisa y decide.</p>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map(([title, description], index) => (
                <li key={title} className="rounded-xl border bg-card p-6">
                  <div className="mb-4 flex items-center justify-between text-primary"><span className="font-mono text-sm">0{index + 1}</span><ArrowRight className="h-4 w-4" aria-hidden="true" /></div>
                  <h3 className="font-headline text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="architecture-title">
            <h2 id="architecture-title" className="font-headline text-3xl font-bold">Decisiones de arquitectura</h2>
            <figure className="mt-8 rounded-2xl border bg-muted/20 p-5 sm:p-8">
              <figcaption className="mb-6 font-medium">Arquitectura conceptual · de la consulta al documento</figcaption>
              <div className="grid items-center gap-3 text-center md:grid-cols-[1fr_auto_1fr_auto_1fr]">
                <div className="rounded-xl border bg-background p-5"><h3 className="font-bold">Agente de análisis</h3><p className="mt-2 text-sm text-muted-foreground">Requisitos, contexto y propuesta</p></div>
                <span className="text-primary" aria-label="Consulta y respuesta">↔</span>
                <div className="rounded-xl border bg-background p-5"><h3 className="font-bold">Integración MCP</h3><p className="mt-2 text-sm text-muted-foreground">Consultas y lectura de fragmentos</p></div>
                <span className="text-primary" aria-label="Consulta y respuesta">↔</span>
                <div className="rounded-xl border bg-background p-5"><h3 className="font-bold">KB GeneXus</h3><p className="mt-2 text-sm text-muted-foreground">Código existente · solo lectura</p></div>
              </div>
              <p className="my-5 text-center text-sm text-muted-foreground">El agente conserva evidencia, estado del caso y propuesta en Markdown.</p>
              <ol className="grid gap-3 md:grid-cols-3">
                {[
                  ['01 · Scripts de validación', 'Revisan el documento y sus referencias. Los hallazgos vuelven al análisis.'],
                  ['02 · Revisión humana', 'La persona evalúa el diseño y decide si lo aprueba.'],
                  ['03 · Generador Word', 'Convierte el Markdown aprobado mediante una plantilla y verifica la estructura.'],
                ].map(([title, description]) => <li key={title} className="rounded-xl border border-primary/30 bg-background p-5"><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p></li>)}
              </ol>
              <p className="mt-5 text-sm text-muted-foreground">Los validadores y el generador son herramientas locales; el diagrama no representa servicios desplegados ni una integración de escritura en la KB.</p>
            </figure>
            <ArchitectureExplorer />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {decisions.map(([title, description]) => (
                <div key={title} className="border-l-2 border-primary/50 pl-5">
                  <h3 className="font-headline text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-8 md:grid-cols-[1fr_1.4fr]" aria-labelledby="challenge-title">
            <div><p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">El desafío técnico</p><h2 id="challenge-title" className="font-headline text-3xl font-bold">Simplificar sin perder trazabilidad</h2></div>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>La primera arquitectura repartía el trabajo entre varios agentes. Cada traspaso requería volver a transmitir reglas, evidencia y decisiones. Mi decisión fue concentrar el análisis en un agente y mantener fuera del modelo las verificaciones que podían ejecutarse con scripts.</p>
              <p>La simplificación exigía conservar los controles: fragmentos con líneas de origen, estado por caso, comprobación de referencias y revisión humana antes de generar el documento final.</p>
              <p>El compromiso es que un agente conserva más responsabilidad sobre el análisis. Por eso la revisión humana y los controles documentales siguen siendo necesarios. La reducción de coordinación es una decisión de arquitectura; su impacto en tiempo y tokens aún debe medirse.</p>
            </div>
          </section>

          <section className="rounded-2xl border bg-muted/30 p-6 sm:p-10" aria-labelledby="example-title">
            <Badge variant="secondary" className="mb-4">Ejemplo ficticio</Badge>
            <h2 id="example-title" className="font-headline text-3xl font-bold">Una reserva con una fecha válida</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Una aplicación de reservas debe impedir la confirmación si falta una fecha válida. El análisis identifica la operación existente; el diseño propone el control y sus escenarios. Este ejemplo se creó para el portafolio.</p>
            <EngineeringDemo />
            <div className="mt-8 space-y-3">
              {[
                ['Fecha válida', 'Resultado esperado: permitir la confirmación y conservar las validaciones existentes.'],
                ['Fecha ausente', 'Resultado esperado: impedir la confirmación e indicar que se debe seleccionar una fecha.'],
                ['Fecha fuera del rango permitido', 'Resultado esperado: impedir la confirmación y solicitar una fecha dentro del rango permitido.'],
              ].map(([title, description]) => (
                <details key={title} className="rounded-lg border bg-background p-5 open:border-primary/50">
                  <summary className="cursor-pointer font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">{title}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </details>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Si una propuesta cita un fragmento sin respaldo en la evidencia, el verificador informa la inconsistencia. Superar ese control documental no sustituye la compilación ni las pruebas funcionales.</p>
          </section>

          <section aria-labelledby="document-title">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-2xl"><p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Entregable de demostración</p><h2 id="document-title" className="font-headline text-3xl font-bold">Del requisito al documento</h2><p className="mt-4 leading-relaxed text-muted-foreground">Dos páginas creadas desde cero: análisis con evidencia y escenarios, seguido del diseño con pseudocódigo y comprobación de una cita. Es una muestra HTML imprimible, independiente de la plantilla empresarial.</p></div>
              <Button asChild variant="outline"><a href="/demos/reservas-analisis-diseno.html" download>Descargar demostración HTML</a></Button>
            </div>
            <iframe className="mt-8 h-[36rem] w-full rounded-xl border bg-muted" src="/demos/reservas-analisis-diseno.html" title="Vista previa del documento ficticio de análisis y diseño de reservas" loading="lazy" sandbox="" />
            <p className="mt-4 text-sm text-muted-foreground"><a href="/demos/reservas-analisis-diseno.html" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Abrir el documento completo</a> para leerlo o guardarlo como PDF desde Imprimir.</p>
          </section>

          <section aria-labelledby="evaluation-title">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Evaluación · escenarios de ejemplo</p>
            <h2 id="evaluation-title" className="font-headline text-3xl font-bold">Qué comprobar en una respuesta</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Tres casos ficticios para diseñar una evaluación de respuestas sustentadas. Son criterios propuestos; no representan resultados medidos de una evaluación del modelo.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">{[
              ['Con respaldo', 'La fuente dice que una reserva necesita una fecha válida.', 'Comprobar que la respuesta refleje ese requisito y cite la fuente correcta.'],
              ['Sin respaldo', 'La respuesta afirma un precio que no aparece en las fuentes.', 'Detectar que la afirmación no está sustentada y solicitar una corrección.'],
              ['Fuera de alcance', 'Se pregunta por un dato para el que no hay información disponible.', 'Comprobar que el asistente reconozca el límite sin inventar una respuesta.'],
            ].map(([title, input, expected]) => <article key={title} className="rounded-xl border bg-card p-6"><h3 className="font-headline text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{input}</p><p className="mt-4 text-sm leading-relaxed"><span className="font-semibold">Criterio: </span>{expected}</p></article>)}</div>
          </section>

          <section aria-labelledby="results-title">
            <FileCheck2 className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
            <h2 id="results-title" className="font-headline text-3xl font-bold">Resultados y aprendizajes</h2>
            <ul className="mt-6 space-y-4">
              {['Piloto completado de principio a fin, con revisión humana y documento Word generado.', 'Herramientas para preparar casos, verificar documentos y registrar métricas por fase.', 'Arquitectura simplificada con evidencia explícita para sustentar las propuestas.'].map(result => (
                <li key={result} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span className="leading-relaxed text-muted-foreground">{result}</span></li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-muted-foreground">Aprendí a convertir reglas comprobables en herramientas y a definir dónde interviene el criterio humano. El ahorro de tiempo y tokens requiere una evaluación comparativa; no se presenta como un resultado medido.</p>
            <div className="mt-8 rounded-xl border bg-muted/20 p-6">
              <h3 className="font-headline text-xl font-bold">Qué está comprobado y qué queda por evaluar</h3>
              <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground">
                <li>El piloto acredita el recorrido documental y la generación de Word; no demuestra por sí solo la corrección del software diseñado.</li>
                <li>La demostración interactiva comprueba una cita literal contra datos ficticios. Su alcance es menor que el de los validadores del proyecto.</li>
                <li>La compilación y las pruebas funcionales deben ejecutarse sobre cada implementación. La revisión visual de la paginación es un control adicional a la estructura del Word.</li>
                <li>Queda por medir tiempo, tokens y retrabajo en casos comparables, y evaluar el proceso nuevo de pseudocódigo en el siguiente caso.</li>
              </ul>
            </div>
          </section>

          <aside className="border-t pt-8 text-sm leading-relaxed text-muted-foreground">
            Esta presentación describe el proceso general y mi trabajo de arquitectura y automatización. El ejemplo es ficticio y el material fue preparado específicamente para el portafolio.
          </aside>
          <Button asChild variant="outline"><Link href="/#projects"><ArrowLeft className="mr-2 h-4 w-4" /> Explorar otros proyectos</Link></Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
