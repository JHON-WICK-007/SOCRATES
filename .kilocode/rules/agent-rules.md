# Kilo Code Agent Rules

- **Strict CSS Performance Rules (MANDATORY)**: You MUST strictly follow all CSS performance, rendering, and anti-jank guidelines written in [strict css.txt](file:///d:/SOCRATES/Usefull%20Tools/strict%20css.txt).
- **Design Guidelines**: Follow specifications in [DESIGN-apple.md](file:///d:/SOCRATES/DESIGN-apple.md).
- **Workspace Specs**: Refer to [docs/](file:///d:/SOCRATES/docs).
- **No Raw Emojis in UI**: Never use raw Unicode emojis as UI icons. Use SVG vector icons from `lucide-react` or `react-icons`.
- **Modularity**: Split large components into focused sub-components.
- **Async Safety**: Use `express-async-errors` in Express server controllers in [backend/](file:///d:/SOCRATES/backend) to prevent unhandled promise rejections.
