# Web Portfolio

An interactive, single-page portfolio for **Aditya Rahman Ananda** — Backend Software Engineer — built with **React + TypeScript + Vite**.

[![CI](https://github.com/adityarahmanananda-dev/web-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/adityarahmanananda-dev/web-portfolio/actions/workflows/ci.yml)

## Features

- Typewriter hero with rotating roles
- Dark / light theme toggle (persisted to localStorage)
- Animated reveals and skill bars (Framer Motion)
- Project cards with UI screenshots, "what it does", "Built", "Impact", tech stack, **Live Demo** (open-source mockups with dummy data) and **Source** links
- About, Skills (5 groups), and Contact sections
- Fully responsive with a mobile menu

## Assets & Licensing

Everything is open source / free-license:
- Icons: [Lucide](https://lucide.dev/) (ISC)
- Fonts: [Google Fonts](https://fonts.google.com/) — Inter & Space Grotesk (SIL OFL)
- Screenshots: own UI mockups rendered with **dummy data** (no real/confidential data)

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
```

Build for production:

```bash
npm run build    # outputs to docs/ (GitHub Pages)
npm run preview
```

## Deployment

GitHub Pages serves the repo from `/docs` at:
`https://adityarahmanananda-dev.github.io/web-portfolio/`

`vite.config.ts` sets `base: '/web-portfolio/'` and `build.outDir: 'docs'` so asset paths resolve correctly under the subpath. After any change: `npm run build` then push — Pages auto-updates.

## Project structure

```
web-portfolio/
├── index.html
├── vite.config.ts
├── src/
│   ├── components/   # Navbar, Hero, About, Projects, Skills, Contact
│   ├── data/         # projects.ts, skills.ts
│   └── index.css     # theme variables (light/dark)
├── public/
│   ├── mockups/      # per-app UI mockups (dummy data)
│   └── shots/        # screenshots of the mockups
└── docs/             # built site (GitHub Pages)
```