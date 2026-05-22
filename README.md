# ShadCN Components Dashboard

A React + Vite admin dashboard demo built with shadcn-style UI components and Tailwind CSS.

This project uses a `src/components/ui` component library, a sidebar navigation layout, and route-based pages under `src/pages`.

## Features

- React 19 + Vite
- Tailwind CSS v4 via `@tailwindcss/vite`
- shadcn-style reusable UI components in `src/components/ui`
- Route-based page layout using `react-router`
- Dashboard analytics and cards built with `recharts`
- CSS alias support via `jsconfig.json` and `@/*` imports

## Project structure

- `src/App.jsx` — main application layout with sidebar navigation
- `src/main.jsx` — router setup and app bootstrap
- `src/components/ui/` — reusable UI primitives and components
- `src/pages/` — route pages rendered by the app
- `src/lib/utils.js` — utility helpers for the app
- `components.json` — shadcn component configuration
- `jsconfig.json` — path alias configuration for JavaScript imports

## Pages

The app includes the following route pages:

- `Dashboard` — main analytics and project summary view
- `Tasks` — task management view
- `Calendar` — calendar schedule view
- `Analytics` — analytics overview page
- `Team` — team collaboration page
- `Settings` — settings panel
- `Help` — help/support page

## UI components

Core shadcn-style components available in `src/components/ui`:

- `Accordion`
- `Alert`
- `Avatar`
- `Badge`
- `Button`
- `Card`
- `Chart`
- `InputGroup`
- `Input`
- `Separator`
- `Sheet`
- `Sidebar`
- `Skeleton`
- `Textarea`
- `Tooltip`

## Getting started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Notes

- The project is JavaScript-based and does not require `tsconfig.json`.
- `jsconfig.json` is used for path aliasing with `@` pointing to `src`.
- `components.json` stores the shadcn component configuration.

## License

Free to use.

## Author

StackWiseDev
