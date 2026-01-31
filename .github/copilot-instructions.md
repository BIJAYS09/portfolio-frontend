# Portfolio Frontend - AI Coding Guidelines

## Architecture Overview
This is a single-page React portfolio application built with Create React App. The app displays professional information in a grid-based dashboard with sections for Skills, Experience, Education, Projects, Certifications, and Languages.

- **Data Flow**: All content is hardcoded as arrays of objects in `App.js`. Cards are rendered from these arrays, and clicking a card opens a `DetailModal` with detailed information.
- **Component Structure**: Reusable components in `src/components/` include `Card` (clickable items), `Section` (grid containers), `DetailModal` (popup details), and `ProfileHeader` (top banner).
- **State Management**: Simple `useState` for modal visibility; no complex state libraries.

## Key Patterns
- **Data Objects**: Each item follows `{title, subtitle, details: []}` structure. Projects/Certifications add `{url, iconType}` for links.
- **Styling**: Dark theme using slate color palette (#020617 background, #0f172a sections, #334155 borders). Mix of CSS classes in `styles.css` and inline styles in components.
- **Grid Layout**: Dashboard uses CSS Grid with 3 columns; sections have sticky titles and scrollable content.

## Development Workflow
- **Run Development**: `cd frontend && npm start` (serves on localhost:3000)
- **Build Production**: `cd frontend && npm run build` (outputs to `build/` folder)
- **Run Tests**: `cd frontend && npm test` (watch mode for interactive testing)
- **Dependencies**: React 19 with Testing Library; no backend or external APIs required.

## Conventions
- **File Organization**: Components in `src/components/`, styles in `src/styles.css`, main app logic in `src/App.js`.
- **Component Props**: Cards receive `title`, `subtitle`, `onClick` handler; Modals receive `data` and `onClose`.
- **Unused Components**: `TopBar` (CV download link) and `DetailPanel` (side panel alternative) exist but are not rendered in `App.js`.

## Examples
- Adding a new section: Import `Section` and `Card` in `App.js`, map over a new data array, pass `onClick` to set modal state.
- Styling: Use CSS variables or direct hex colors matching the slate theme; prefer `border-radius: 10px` for consistency.</content>
<parameter name="filePath">c:\MyFiles\Projects\Portfolio-frontend\.github\copilot-instructions.md