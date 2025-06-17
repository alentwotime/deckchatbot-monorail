# DeckChatbot Monorepo 🛠️🤖

Welcome to the **DeckChatbot Monorepo** — a full-stack AI-powered assistant designed to streamline the quoting, sketching, and logic validation process for deck construction projects.

---
## 🧠 Scope of Work

You are reviewing a monorepo containing:
- A Python FastAPI backend (`backend-ai/`)
- A Node.js frontend application (`frontend/deckchatbot/` — a Git submodule)
- Shared logic for deck estimation and AI chat

Include logic, files, routes, and scripts from *all* folders — including any submodules.

Ignore unrelated system files or directories outside this project.

## 📦 Project Structure

```
deckchatbot-monorepo/
├── frontend/        # React or HTML-based UI for user interaction
├── backend-ai/      # FastAPI / Python backend with AI integrations
├── .vscode/         # IDE settings and extensions
├── PROMPT.md        # Instruction file for project-wide automation and cleanup
├── README.md        # You're here!
```

---

## 🎯 Core Features

- **Dynamic Deck Shape Builder**: L-shape, octagon, and custom sketch input.
- **Image Upload with AI Recognition**: OCR + vision model analysis.
- **Skirting & Material Calculations**: Supports Composite, PVC, and Mineral Board.
- **Ollama Integration**: Running LLaVA-Llama3 model for image + text queries.
- **Drag & Drop Support**: Upload drawings or images directly to calculate.

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/deckchatbot-monorepo.git
cd deckchatbot-monorepo

# create a .env with your keys
echo "OPENAI_API_KEY=your-key" > .env
echo "DEBUG=true" >> .env
```

### 2. Start the Backend

```bash
cd backend-ai
# (Activate your environment or install requirements)
poetry install
poetry run uvicorn API.api:app --reload
```

### 3. Launch the Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Then open `http://localhost:3000/deck-viewer.html` in your browser to try the new 3D deck viewer built with Babylon.js. Use the toolbar to render a deck and export blueprint screenshots or a GLB model.

---

## 🧠 AI Integration

We use [Ollama](https://ollama.com/library/llava-llama3) to run LLaVA-Llama3 locally.

```bash
ollama run llava-llama3
```

- HuggingFace support through `xtuner` (model loaders / pipelines)

---

## 🗂 Prompt-based Automation

See `PROMPT.md` for full instructions on:

- Cleanup automation
- Logical merging of duplicate files
- Enhancing layout logic, routing, and data flow

---

## 📌 TODO (Contributions Welcome!)

- [ ] Auto-detect and suggest corrections for invalid deck sketches
- [ ] Export deck plans to PDF
- [ ] Add user accounts + login

---

## ⚖️ License

MIT License. Feel free to fork and expand.
