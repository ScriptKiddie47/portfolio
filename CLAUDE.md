# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start Vite dev server (HMR)
npm run build     # production build → dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint
```

There are no tests in this project.

## Architecture

This is a **data-driven React portfolio** built with Vite + MUI v7. All portfolio content is stored in `public/data/portfolio.json` and fetched at runtime by `App.jsx` — no content is hardcoded in components.

### Data flow

`App.jsx` fetches `/data/portfolio.json` on mount, then passes slices of the JSON down as props to each section component:

```
portfolio.json → App.jsx (state: data, loading, error, mode)
  ├── Header      ← profile, contact
  ├── Hero        ← profile, contact, resume URL
  ├── Profile     ← profile
  ├── Experience  ← experience[]
  ├── Certifications ← certifications[]
  ├── Skills      ← skills[]
  ├── Projects    ← projects[]
  └── Footer      ← contact
```

### Theme system

Two parallel theming mechanisms are in use:

1. **MUI ThemeProvider** (`App.jsx`) — `createTheme` with `mode` state, toggled via the Header button and persisted in `localStorage`. This controls all MUI component colours.
2. **CSS custom properties** (`index.css`) — `--bg`, `--accent`, etc., switched via `data-theme` attribute on `<html>` and `@media (prefers-color-scheme)`. These are for any non-MUI styling.

Both must stay in sync when changing colour values.

### Adding/editing content

Edit `public/data/portfolio.json`. The schema used by components:

- `profile` — `name`, `title`, `tagline`, `location`, `summary`, `avatar` (path under `/data/`)
- `skills[]` — `name`, `level` (`expert` | `advanced` | `intermediate` | `beginner`)
- `experience[]` — `company`, `role`, `period`, `location`, `summary`, `highlights[]`, `tech[]`
- `certifications[]` — `name`, `validUntil`
- `projects[]` — `name`, `description`, `tech[]`, `link`
- `contact` — `email`, `github`, `linkedin`
- `resume` — path to PDF under `/data/`

### Static assets

`public/data/` holds the avatar image, CV PDF, and `portfolio.json`. Files here are served at `/data/…` in both dev and production.
