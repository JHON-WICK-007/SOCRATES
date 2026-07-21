# AI & IDE Configuration Directory Guide

This document lists all configuration, credentials, and settings files related to local/cloud AI proxies, Claude Code / OpenCode CLI clients, workspace customizations, and IDE configurations on your system, along with instructions on how to use them.

---

## ❶ Local & Cloud AI Proxy Settings
Stores API keys, default models, timeouts, rate-limit settings, and debug logging choices.

*   **Global Environment Configuration:**
    [C:\Users\Manan Vasani\.fcc\.env](file:///C:/Users/Manan%20Vasani/.fcc/.env)
    *   **Description:** Primary settings file read by `fcc-server`. Configures default model mappings and active providers (e.g., NVIDIA NIM, Gemini, Groq, Ollama).
    *   **Usage:**
        1. Open to configure API keys (e.g., `NVIDIA_NIM_API_KEY="your_key"`).
        2. Set routing for specific model categories, e.g., mapping `MODEL_HAIKU` to a specific fast model:
           ```env
           MODEL_HAIKU="nvidia_nim/meta/llama-3.1-8b-instruct"
           ```
*   **Local Project Environment Configuration:**
    [d:\Usefull Tools\free-claude-code\.env](file:///d:/Usefull%20Tools/free-claude-code/.env)
    *   **Description:** Fallback settings file located in the central server folder.
    *   **Usage:** Copy `.env.example` to `.env` in this directory if setting up a new environment.

### How to Run the Proxy Server:
Run this in a terminal to start the background proxy that translates Claude Code API requests:
```powershell
cd "D:\Usefull Tools\free-claude-code"
uv run fcc-server
```

---

## ❷ Claude Code & OpenCode CLI Settings
Stores CLI metadata, active models, active plugins, credentials, and agent instructions.

*   **Global CLI Startup & Performance State:**
    [C:\Users\Manan Vasani\.claude.json](file:///C:/Users/Manan%20Vasani/.claude.json)
    *   **Description:** Tracks startup metrics, onboarding state, features, and project usage.
    *   **Usage:** Maintained automatically by the CLI. Do not manually edit unless resetting the onboarding screens or cache.
*   **Global Client Settings:**
    [C:\Users\Manan Vasani\.claude\settings.json](file:///C:/Users/Manan%20Vasani/.claude/settings.json)
    *   **Description:** Stores chosen chat models, enabled plugins (like `caveman`), and marketplace repositories.
    *   **Usage:** Change the default model for Claude/OpenCode:
        ```json
        "model": "anthropic/nvidia_nim/meta/llama-3.1-70b-instruct"
        ```
*   **CLI Credentials & OAuth Tokens:**
    [C:\Users\Manan Vasani\.claude\.credentials.json](file:///C:/Users/Manan%20Vasani/.claude/.credentials.json)
    *   **Description:** Stores OAuth access and refresh tokens for MCP servers (e.g., Notion).
    *   **Usage:** Automatically managed. Contains authentication states when connecting to external tools.
*   **OpenCode Custom Agents:**
    [C:\Users\Manan Vasani\.config\opencode\agents\](file:///C:/Users/Manan%20Vasani/.config/opencode/agents/)
    *   **Description:** Stores custom agent system prompt definitions (e.g., `cavecrew-investigator.md`, `cavecrew-reviewer.md`).
    *   **Usage:** Edit files here to modify custom agent system prompts, tools, or target models.
        *Note: If `opencode` gives validation warnings, ensure the agent's `model` property uses a fully-qualified model ID with slashes, e.g., `model: anthropic/nvidia_nim/meta/llama-3.1-8b-instruct`.*
*   **Workspace Agent Guidelines:**
    `CLAUDE.md` *(located in the root of each individual project)*
    *   **Description:** Defines build commands, test commands, rules, and system constraints for agents operating in that workspace.
    *   **Usage:** Create or edit in your project root to teach the AI agent how to build, test, and follow your coding standards.

### How to Run the AI CLI:
*   **Standard Claude (fcc-claude):**
    ```powershell
    uv --project "D:\Usefull Tools\free-claude-code" run fcc-claude
    ```
*   **OpenCode CLI:**
    ```powershell
    opencode
    ```

---

## ❸ Workspace Customizations & Skills
Enables central or project-scoped skills and rules.

*   **Global & Workspace Customization Config:**
    [d:\Usefull Tools\.agents\skills.json](file:///d:/Usefull%20Tools/.agents/skills.json)
    *   **Description:** Directs the custom skill system where to load plugins and helper resources.
    *   **Usage:** Add paths to local folders containing `SKILL.md` documents to make those skills available to the AI developer.

---

## ❹ Editor & IDE Configurations
Configures settings, keybindings, and UI layouts for Code, Cursor, and Antigravity IDE.

*   **Global IDE Settings:**
    `C:\Users\Manan Vasani\AppData\Roaming\Code\User\settings.json` *(path may vary for Cursor or Antigravity IDE)*
    *   **Description:** Stores global editor configurations, telemetry settings, themes, and font selections.
    *   **Usage:** Open in the editor to configure settings globally, such as disabling telemetry or configuring default formatting engines.
*   **Project Workspace Settings:**
    `.vscode/settings.json` *(located in the root of individual projects)*
    *   **Description:** Enforces workspace-level editor rules, formatting profiles, and path exclusions.
    *   **Usage:** Edit to customize editor behaviors specific to a project workspace.
