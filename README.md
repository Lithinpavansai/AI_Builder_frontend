# SchemaForge — AI Schema Generation Platform [Live Link: SchemaForge](https://schemaforge-ai.vercel.app) | [GitHub: SchemaForge AI Frontend](https://github.com/Lithinpavansai/AI_Builder_frontend)

FastAPI · Next.js · Groq API · Pydantic v2 · Render · Vercel

• Built a multi-stage LLM pipeline (Intent Extraction → System Design → Schema Generation → Refinement) that converts natural language into UI, API, DB, and Auth schemas returned as one JSON output.
• Built a 0-100 runtime validator (6 structural checks); scored 23 prompts (20 run locally, 3 on the live deployment) including edge cases (vague, conflicting, gibberish, non-English): 100% completion, 84/100 average. A manual audit of 3 outputs caught a real cross-layer bug (Admin-only rule vs. config allowing Customer).

## 🚀 Live URL

`https://schemaforge-ai.vercel.app`

## 📄 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Prompt input with example prompts |
| Results | `/generate/{job_id}` | Live pipeline progress + schema viewer |
| Metrics | `/metrics` | Evaluation metrics dashboard |

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 |
| Styling | Tailwind CSS |
| Syntax Highlighting | react-syntax-highlighter |
| Deployment | Vercel |

## 🏃 Local Setup

```bash
git clone https://github.com/Lithinpavansai/AI_Builder_frontend.git
cd AI_Builder_frontend
npm install
# Add NEXT_PUBLIC_API_URL=http://127.0.0.1:8000 to .env.local
npm run dev
```

## 🔗 Backend

API: `https://app-compiler-api.onrender.com`
