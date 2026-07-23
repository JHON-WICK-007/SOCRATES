# Custom Agent Rules

This file defines project-specific rules, style guidelines, and behavioral constraints for the agent.

## Core Workspace File Paths
- **Documentation Directory**: [docs/](file:///d:/SOCRATES/docs)
- **Agent Config Backup in Docs**: [docs/.agents/AGENTS.md](file:///d:/SOCRATES/docs/.agents/AGENTS.md)
- **Strict CSS Performance Rules**: [strict css.txt](file:///d:/SOCRATES/Usefull%20Tools/strict%20css.txt)
- **Design Specifications**: [DESIGN-apple.md](file:///d:/SOCRATES/DESIGN-apple.md)
- **Frontend App**: [frontend/](file:///d:/SOCRATES/frontend)
- **Backend API**: [backend/](file:///d:/SOCRATES/backend)

## User Interface & Design Rules

- **Do Not Use Raw Emojis as UI Icons**: Never use raw Unicode emojis (e.g., 🔒, 🚀, ⭐, 📁, etc.) as icons in the website's user interface. Instead, use clean, professionally designed vector/SVG icons from `lucide-react` or `react-icons`, matching the design system.
- **Modern Aesthetic**: Prioritize sleek, premium visuals with modern typography, cohesive color palettes, subtle micro-interactions (Framer Motion), and dynamic layout design.
- **Strict CSS Performance & Anti-Jank Rules (MANDATORY)**:
  - **Strict Adherence**: You MUST strictly follow all CSS performance, rendering, and anti-jank rules defined in [strict css.txt](file:///d:/SOCRATES/Usefull%20Tools/strict%20css.txt).
  - **No Layout Thrashing**: Never animate properties that trigger layout reflow (`width`, `height`, `margin`, `padding`, `top`, `left`). Always animate compositor-only properties (`transform`, `opacity`).
  - **Font Antialiasing**: Ensure `-webkit-font-smoothing: antialiased` is present globally.
  - **GPU Layer Promotion**: Use `transform-gpu` (`transform: translateZ(0)` & `backface-visibility: hidden`) for hover card transitions and animations.
  - **Prevent Text Blur**: Avoid aggressive scale transforms on containers with raw text. Use subtle scales (`scale(1.02)`) or animate shadow/opacity.

## Technical Stack & Architecture Guidelines

### Frontend ([frontend/](file:///d:/SOCRATES/frontend))
- **Framework**: React 19 + TypeScript + Vite.
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`). Use utility-first patterns.
- **State Management**:
  - Global UI State: `zustand`
  - Server / Cache State: `@tanstack/react-query`
- **Routing**: `react-router-dom` v7.
- **Forms & Validation**: `react-hook-form` + `zod` via `@hookform/resolvers`.
- **Icons**: `lucide-react`, `react-icons`.

### Backend ([backend/](file:///d:/SOCRATES/backend))
- **Runtime & Framework**: Node.js + Express (CommonJS).
- **Database**: MongoDB using `mongoose`.
- **Real-Time**: `socket.io` for live events and collaboration.
- **Security & Validation**: `helmet`, `express-rate-limit`, `cors`, `joi` / `express-validator`, `bcrypt`, `jsonwebtoken`.
- **File Uploads**: `multer`, `cloudinary`, `sharp`.

## Development Commands
- Frontend dev server: `cd frontend && npm run dev`
- Backend dev server: `cd backend && npm run dev`
- Database seed: `cd backend && npm run seed`
