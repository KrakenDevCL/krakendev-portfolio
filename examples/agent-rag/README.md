# Demo de recuperación con LangGraph y FAISS

Ejemplo independiente que busca en dos documentos ficticios con FAISS, ejecuta
el flujo con LangGraph y devuelve la fuente. Funciona sin claves en modo extractivo;
opcionalmente puede consultar Gemini con el fragmento recuperado.

## Inicio rápido

Requisitos: Node.js 20 o posterior y npm. FAISS utiliza un módulo nativo y necesita
un binario compatible o herramientas de compilación para el sistema operativo.

```sh
npm install
npm test
npm start -- "¿Qué fecha requiere una reserva?"
```

La salida indica `Modo: extractivo`, el texto y la fuente ficticia. Una pregunta
sin conceptos conocidos, como «¿Cuál es el precio?», retorna que no hay información.

## Generación opcional con Gemini

Configura `GEMINI_API_KEY` como variable de entorno sin subirla al repositorio.
En PowerShell, por ejemplo, configura la variable de forma segura en tu sesión y ejecuta:

```powershell
npm start -- "¿Qué fecha requiere una reserva?" --gemini
```

El modo `--gemini` envía la pregunta y el fragmento ficticio recuperado a Google.
No envíes datos sensibles. Si no hay fuente, no se llama al modelo. Si Gemini falla,
el comando informa el error y termina sin afirmar que se generó una respuesta.

## Cómo funciona

1. Un nodo LangGraph convierte la pregunta en un vector de conceptos y busca en FAISS.
2. El segundo nodo devuelve el texto encontrado o invoca Gemini cuando se solicitó.
3. La salida identifica la fuente; si no hay coincidencia no se inventa una respuesta.

Los vectores son una representación binaria pequeña y determinista por palabras,
no embeddings semánticos. El ejemplo no busca en la web ni reproduce el notebook
original. Los resultados generados por un LLM deben revisarse; citar una fuente
no garantiza que una respuesta sea correcta. Las pruebas cubren recuperación,
ausencia de fuente, flujo LangGraph y entrega de contexto a un generador simulado.

Este material de demostración fue creado desde cero con datos ficticios. El proyecto
original está en [GitHub](https://github.com/KrakenDevCL/taller-inmersion-agentes-ia-llm-rag).
