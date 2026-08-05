# IEEE SSCS Kerala Chapter Website

A modern, professional rebuild of the [IEEE SSCS Kerala Chapter](https://sscs.ieeekerala.org/) website.

## Features

- **Modern design** — Clean layout with IEEE brand colors, smooth animations, and responsive mobile navigation
- **Hero carousel** — Rotating slides highlighting the chapter's mission and benefits
- **Events section** — Card-based layout for all events from the original site
- **Team sections** — Student and Professional Execom 2025 leadership panels
- **Gallery** — Masonry-style photo grid (add your images to `public/gallery/`)
- **SEO-ready** — Meta tags, semantic HTML, and accessible navigation

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Customization

Edit `src/data/siteData.ts` to update:

- Events, speakers, and dates
- Student & Professional Execom member names and roles
- Contact email and external links
- Gallery images
- Navigation links

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React icons

## Original Site

Content sourced from [sscs.ieeekerala.org](https://sscs.ieeekerala.org/).
