# React + TypeScript + Tailwind CSS

A lightweight React starter powered by Vite and Tailwind CSS v4.

## Getting started

```sh
npm install
npm run dev
```

## Available scripts

- `npm run dev` — start the local development server.
- `npm run build` — type-check and build the production app.
- `npm run preview` — preview the production build locally.
- `npm run lint` — check the project with Oxlint.

## Project structure

```text
src/
├── assets/       # Images, fonts, and other imported assets
├── components/   # Reusable UI components
├── pages/        # Page-level views
├── App.tsx       # Root app component
├── index.css     # Tailwind import and global styles
└── main.tsx      # React application entry point
```

Add new shared components to `src/components/` and compose them into pages in
`src/pages/`. Tailwind CSS is enabled through the Vite plugin and imported in
`src/index.css`.
