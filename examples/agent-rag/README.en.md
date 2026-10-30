# LangGraph and FAISS retrieval demo

This standalone example searches two fictional documents with FAISS, runs the
workflow with LangGraph and returns the source. It works without keys in extractive
mode and can optionally request a Gemini answer using the retrieved excerpt.

## Quick start

Requirements: Node.js 20 or later and npm. FAISS is a native module and requires a
compatible binary or the operating system's build tools.

```sh
npm install
npm test
npm start -- "¿Qué fecha requiere una reserva?"
```

The result includes the extractive answer and its fictional source. A question
with no recognized concepts returns an insufficient-information message.

## Optional Gemini generation

Set `GEMINI_API_KEY` securely in your environment and run:

```sh
npm start -- "¿Qué fecha requiere una reserva?" --gemini
```

This sends the question and retrieved fictional excerpt to Google. Do not submit
sensitive information. The model is not called when no source matches.

The demo uses a small deterministic binary concept vector, not semantic embeddings.
It does not search the web or reproduce the original notebook. Model output requires
review: attaching a source does not guarantee correctness. Tests cover retrieval,
missing sources, the LangGraph flow and a generator receiving the selected context.

All sample data was created for the portfolio. The original learning project is
[available on GitHub](https://github.com/KrakenDevCL/taller-inmersion-agentes-ia-llm-rag).
