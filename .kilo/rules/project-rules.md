# Project Rules (Kilo AI)

1. **Strict CSS Performance Rules (MANDATORY)**: You MUST follow all strict CSS performance & anti-jank guidelines written in [strict css.txt](file:///d:/SOCRATES/Usefull%20Tools/strict%20css.txt).
2. **UI Icons**: Never use raw Unicode emojis as UI icons. Use SVG vector icons from `lucide-react`.
3. **Tailwind Styling**: Tailwind CSS v4 is used in [frontend/](file:///d:/SOCRATES/frontend). Write utility classes directly; avoid standard CSS files unless necessary.
4. **State Management**:
   - Client UI state -> `zustand`
   - Server state & Caching -> `@tanstack/react-query`
5. **Backend REST API**: Express controllers in [backend/](file:///d:/SOCRATES/backend) must handle errors gracefully via standard middleware (`express-async-errors`).
