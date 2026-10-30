# Evaluar el flujo de ingeniería asistida por IA

El objetivo es comparar corridas equivalentes antes de publicar resultados de tiempo,
consumo o retrabajo. Actualmente no hay una comparativa medida en este portafolio.

## Preparar la comparación

1. Elegir casos equivalentes y registrar alcance, complejidad y versión del proceso.
2. Definir el mismo punto de inicio y fin para cada corrida, incluidos los gates de revisión.
3. Registrar datos reales por fase y distinguir duración activa, espera humana y fallos.
4. Revisar que los resultados publicados no identifiquen clientes, casos ni código interno.

| Medida | Registrar por corrida | Tratamiento si falta el dato |
| --- | --- | --- |
| Duración | Inicio, fin, tiempos activos y espera humana | Desconocido; no estimar |
| Tokens | Entrada, salida, modelo y fuente de la medición | Desconocido; no sumar estimaciones como datos reales |
| Retrabajo | Hallazgos, correcciones y rondas según una definición común | No comparable si se usan reglas distintas |
| Calidad | Gates ejecutados, resultados y limitaciones de cada comprobación | Registrar controles omitidos |

## Presentar resultados

Indicar muestra, versiones, fecha y condiciones. Separar evidencia documental de
compilación y pruebas funcionales. No afirmar reducciones sin suficientes corridas
comparables; documentar limitaciones y conservar los registros originales privados.
