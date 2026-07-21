# 🤖 Free Claude Code Setup & Run Guide

This guide describes how to configure, run, and bypass the login gate for the **Free Claude Code** CLI using the local proxy server globally from any folder.

---

## ❶ Setup Instructions

To use this tool globally across all your projects (without keeping the proxy folder inside your active projects):

1. **Move/Keep the `free-claude-code` folder in a central folder**, for example:
   `D:\Usefull Tools\free-claude-code`

2. **Start the Proxy Server:**
   Open a terminal, navigate to that central folder, and start the server:
   ```powershell
   cd "D:\Usefull Tools\free-claude-code"
   uv run fcc-server
   ```
   *Keep this terminal running in the background.*

3. **Configure Providers (Optional):**
   Open your browser to: **[http://localhost:8082/admin](http://localhost:8082/admin)** to configure API keys (e.g. Gemini, NVIDIA NIM, Groq, OpenRouter).

---

## ❷ Running Claude Code Free on Any Project

Open a **new terminal**, navigate to **any project folder you want to work on** (e.g. `D:\MyNewProject`), and run the custom launcher:

```powershell
uv --project "D:\Usefull Tools\free-claude-code" run fcc-claude
```

### How it works:
*   **`uv --project "..."`** tells `uv` to use the proxy server environment and script hooks located in your central `Usefull Tools` directory.
*   **`run fcc-claude`** launches Claude Code in your *current* folder while automatically bypassing the official Anthropic login check.

---

## ❸ Changing Models & Providers

By default, the proxy targets the model configured in your global settings file (`C:\Users\Manan Vasani\.fcc\.env`). If you have configured a provider like **NVIDIA NIM**, you can run high-parameter models (such as Nemotron 120B or Llama 3.1 405B) in two ways:

### 1. Launching a Specific Model (Temporarily)
You can override the default model when starting `fcc-claude` by using the `--model` flag:
```powershell
uv --project "D:\Usefull Tools\free-claude-code" run fcc-claude --model anthropic/nvidia_nim/nvidia/nemotron-3-super-120b-a12b
```

### 2. Setting a Default Model (Permanently)
To change the default model for all future sessions:
1. Open your global configuration file: `C:\Users\Manan Vasani\.fcc\.env` (or use the settings editor in the Admin UI).
2. Find the `MODEL` setting and update it to your target model format: `provider_type/model_path`. E.g.:
   ```env
   MODEL="nvidia_nim/nvidia/nemotron-3-super-120b-a12b"
   ```
3. Save the file. The proxy server automatically detects and applies the changes.

*💡 **Tip:** Go to the Admin UI, click **Refresh models** under NVIDIA NIM, and select the model from the dropdown list to see all available models.*

---

## ❹ Troubleshooting & FAQ

#### ❓ Browser shows `{"detail":"Missing API key"}` on `http://localhost:8082`
*   **Why:** The root URL (`/`) is protected by authentication middleware to prevent unauthorized access. Browsers visiting this directly do not send the required authorization headers.
*   **Fix:** 
    *   To configure your API keys, use the admin path: **[http://localhost:8082/admin](http://localhost:8082/admin)**
    *   To check if the server is alive without authentication, use the health check path: **[http://localhost:8082/health](http://localhost:8082/health)** *(which outputs `{"status":"healthy"}`)*

#### ❓ Error: `[Errno 10048] only one usage of each socket address is normally permitted`
*   **Cause:** The port `8082` is already in use by a zombie instance or is waiting to clear a network socket transition (`TIME_WAIT`).
*   **Fix:** Wait 30 seconds and run `uv run fcc-server` again. If it persists, find and kill the process:
    ```powershell
    # Find process ID on port 8082
    netstat -ano | Select-String "8082"
    # Kill the process
    taskkill /F /PID <PROCESS_ID>
    ```

---

## ❺ Quick Command

```powershell
// Run the claude code from any dir = uv --project "D:\Usefull Tools\free-claude-code" run fcc-claude
```