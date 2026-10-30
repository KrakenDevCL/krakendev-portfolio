# Ingeniería de software asistida por IA

## Tarjeta del proyecto

**Título:** Ingeniería de software asistida por IA

**Descripción:** Proyecto de mi autoría para conectar requisitos, evidencia de código y propuestas de diseño técnico mediante un agente de IA, validaciones automáticas y revisión humana.

**Tecnologías:** JavaScript · Node.js · PowerShell · MCP · GeneXus · Markdown · Open XML

**Acción:** Ver caso de estudio

## De los requisitos a un diseño técnico revisable

Diseñé y desarrollé un flujo de análisis de ingeniería que transforma requisitos funcionales en propuestas de diseño y documentos Word. Integra consultas de solo lectura a una base de conocimiento GeneXus, evidencia de código y verificaciones automáticas.

El objetivo es que cada propuesta pueda revisarse junto con su fundamento técnico antes de decidir su implementación.

## El problema

Analizar cambios en un sistema existente requiere identificar componentes afectados, comprender sus validaciones y mantener coherencia entre requisitos, diseño y documentación. La generación de texto por sí sola no permite comprobar que una propuesta se apoya en el código consultado.

## Mi contribución

Soy el autor del proyecto. Diseñé su arquitectura, desarrollé sus herramientas y definí el proceso de análisis, revisión y generación documental.

Simplifiqué una primera arquitectura de varios agentes a un agente que conserva el contexto del caso. Adapté la capa de validación e incorporé preparación de casos, estado de trabajo y registro de métricas.

## Cómo funciona

1. Preparar el requerimiento en un formato de trabajo estructurado.
2. Consultar el código existente en modo de solo lectura y registrar fragmentos con sus líneas de origen.
3. Elaborar el análisis y el diseño vinculando las propuestas con la evidencia capturada.
4. Ejecutar verificaciones de estructura documental y referencias del pseudocódigo.
5. Someter el diseño consolidado a revisión humana.
6. Generar y verificar el documento Word a partir del contenido aprobado.

Este flujo produce propuestas de diseño. La compilación y las pruebas funcionales corresponden a la implementación posterior.

## Decisiones de arquitectura

| Decisión | Propósito |
| --- | --- |
| Un agente para el análisis completo | Reducir el traspaso de contexto y simplificar la coordinación. |
| Validaciones en scripts | Comprobar reglas de forma repetible. |
| Evidencia separada del documento | Conservar el respaldo técnico y facilitar la lectura del entregable. |
| Referencias a líneas de origen | Permitir contrastar el pseudocódigo con los fragmentos consultados. |
| Estado compacto por caso | Retomar el trabajo con las decisiones y tareas vigentes. |
| Revisión humana del diseño | Mantener una decisión explícita antes del documento final. |

## Ejemplo de demostración

El siguiente escenario es ficticio y fue creado para explicar el proceso.

Una aplicación de reservas debe impedir que se confirme una reserva sin una fecha válida. El análisis identifica la operación de confirmación y documenta su comportamiento actual. El diseño propone la validación y describe tres escenarios: fecha válida, fecha ausente y fecha anterior al día permitido.

Si la propuesta cita un fragmento que no está respaldado por la evidencia registrada, el verificador informa la inconsistencia. Corregir la referencia permite superar ese control documental; comprobar el comportamiento requiere implementar y probar el cambio.

## Resultados y aprendizajes

El flujo se ha recorrido de principio a fin en un piloto, con revisión humana y generación del documento Word. Dispone de herramientas para preparar casos, verificar documentos y registrar métricas por fase.

La principal lección fue convertir las reglas comprobables en herramientas y conservar una relación explícita entre la evidencia y la propuesta. El ahorro de tiempo y tokens requiere una evaluación comparativa; no se presenta como un resultado medido.

## Sobre esta presentación

La página incluye un diagrama conceptual de componentes, un ejemplo interactivo
de cita incorrecta/corregida y un documento HTML de dos páginas creado desde cero.
Los datos ficticios compartidos están en `src/lib/engineering-demo.mjs`.
El verificador de demostración solo compara una referencia y su texto literal;
no ejecuta los validadores del proyecto ni certifica comportamiento en GeneXus.

El documento público se regenera con `npm run demo:build` y se comprueba con
`npm run demo:test`. No contiene scripts, fuentes remotas ni material empresarial.
Su versión HTML puede imprimirse a PDF desde el navegador; no utiliza una
plantilla corporativa. La página conserva las limitaciones de la evidencia,
la evaluación de métricas pendiente y el alcance documental del piloto.

Este caso de estudio describe mi trabajo de arquitectura y automatización. El escenario de demostración es ficticio. La presentación pública se limita al proceso general y utiliza material creado específicamente para el portafolio.
