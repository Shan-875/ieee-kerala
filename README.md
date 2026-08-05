<div align="center">

![IEEE SSCS Kerala Chapter](https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20professional%20website%20hero%20banner%20for%20IEEE%20SSCS%20Kerala%20Chapter%20semiconductor%20chip%20blue%20gold%20tech%20clean%20minimal%20logo%20style&image_size=landscape_16_9)

# IEEE SSCS Kerala Chapter Website

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Build](https://img.shields.io/badge/build-passing-brightgreen)](#)
[![License: IEEE](https://img.shields.io/badge/License-IEEE%20Open-blue)](#)

**Official website of the IEEE Solid-State Circuits Society — Kerala Chapter**  
A world-class, professional platform showcasing Kerala's premier semiconductor community.

---

[Overview](#-overview) • [Key Sections](#-key-sections) • [Quick Start](#-quick-start) • [Customization](#-customization)
• [Tech Stack](#-tech-stack) • [Project Structure](#-project-structure) • [Deployment](#-deployment)

</div>

---

## 🌐 Overview

The **IEEE SSCS Kerala Chapter** is the nodal body under [IEEE Kerala Section](https://ieeekerala.org/) for students, faculty, and industry professionals working on **semiconductors, integrated circuits (IC), VLSI design, FPGA/ASIC flows**, and related embedded systems across Kerala.

This website has been engineered to deliver an exceptional **first impression** — world-class design, rich content depth, and polished interactions that reflect the global standing of IEEE SSCS (10,000+ members across 100+ chapters in 90+ countries).

### 🏆 Awards & Recognition
> **Best Small Chapter Award — IEEE India Council 2025**  
> Honored for outstanding chapter activities, membership growth, and community impact.

---

## ✨ Key Sections (20+)

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Announcement Ticker** | Auto-scrolling marquee of latest awards, events & opportunities |
| 2 | **Hero Carousel** | 3 rotating slides with stats dashboard, benefits grid & trust bar |
| 3 | **About** | Vision/Mission, 6 strategic pillars, Who we are, Join CTA |
| 4 | **Global Reach** | Worldwide SSCS footprint — R10, 100+ chapters, JSSC impact |
| 5 | **Achievements** | Best Chapter Award, 120+ events, 10 SBs, WiC launch cards |
| 6 | **Membership Benefits** | JSSC, Education, Network, Standards, Awards, Career cards |
| 7 | **Flagship Conferences** | ISSCC, CICC, ESSCIRC, Symposia VLSI spotlight |
| 8 | **Distinguished Lecturers** | 4 industry/academic expert profiles with quotes |
| 9 | **Research Highlights** | JSSC reading circles, ISSCC clinics, ISM Outreach series |
| 10 | **Latest News** | 4 categorized news cards (Award / Event / Partnership / Opportunity) |
| 11 | **Events & Programs** | Featured flagship workshop + 7 event catalog with speakers |
| 12 | **Milestones Timeline** | 8-year journey 2018→2025 on alternating dark timeline |
| 13 | **Gallery** | 8 AI-curated professional photographs (masonry grid) |
| 14 | **Testimonials** | 6 quotes from students, researchers & SB Chairs |
| 15 | **Student Opportunities** | Travel grants, Predoctoral award, SBC kits, Outreach kits |
| 16 | **Student Execom** | 25+ 2025 Term leadership cards with avatars |
| 17 | **Professional Execom** | 9 Chair, Secretary, Treasurer & committee cards |
| 18 | **SB Chapters** | 7 college branches with region & established year |
| 19 | **FAQ** | 6 expandable Q&A covering membership, chapters & research |
| 20 | **Sponsors & Partners** | Premier / Industry / Academic / Media tiers |
| 21 | **Footer** | Contact info, quick links, socials, final CTA banner |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** ≥ 18 (20+ recommended)
- **npm** ≥ 9

### 1. Install dependencies

```bash
cd sscs-kerala
npm install
```

### 2. Start the development server

```bash
npm run dev
```

The dev server will start (typically **http://localhost:5173**). If ports are occupied, Vite auto-selects the next available port (5174, 5175…).

### 3. Lint & build for production

```bash
# Run the linter (oxlint — extremely fast)
npm run lint

# TypeScript check + production build (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview
```

---

## 🎨 Customization

All site content is centralized in a single data file for easy updates.

### 📝 Content editing → `src/data/siteData.ts`

Update everything without touching component code:

| Data Field | What you can edit |
|---|---|
| `contact` | Email, phone, address, social & IEEE external links |
| `heroSlides` | Hero carousel titles, highlights, and intro paragraphs (3 slides) |
| `announcements` | Scrolling ticker announcements (add more lines freely) |
| `benefits` | Hero benefit grid links (JSSC, Conferences, Webinars…) |
| `about` | Vision, Mission, Tagline, Who we are, Society facts, Pillars |
| `stats` | Stats counters shown in Hero & dashboards |
| `membershipBenefits` | 6 benefit cards → title/description/icon |
| `events` | All event listings including featured, speakers, attendance, mode |
| `studentExecom2025` / `professionalExecom2025` | Names, roles, bios, LinkedIn/email |
| `sbChapters` | College names, region hubs, established years |
| `galleryImages` | AI image prompts + alt tags for gallery |
| `flagshipConferences` | ISSCC / CICC / ESSCIRC / VLSI details & links |
| `distinguishedLecturers` | Speaker profiles, topics, quotes, avatar tints |
| `researchHighlights` | Research cards with tags, authors, summaries |
| `testimonials` | Member quotes + roles |
| `studentOpportunities` | Grants, awards, SBC starter programs |
| `faqs` | Expandable questions & answers |
| `sponsors` | Premier / Industry / Academic / Media partner lists |
| `navLinks` | Navigation menu items & anchors |
| `achievements` | Award & milestone cards (new) |
| `milestones` | 2018→2025 timeline entries (new) |
| `newsItems` | Latest news with categories (new) |
| `globalReach` | Worldwide SSCS stats display (new) |

### 🎨 Styling → `src/index.css`

Design tokens live in Tailwind v4's `@theme` block:
- IEEE Blue family (`--color-ieee-blue`, `-dark`, `-darker`, `-light`, `-50`, `-100`)
- IEEE Gold accents
- Professional shadow tiers & custom utility classes
- Keyframe animations (fadeUp, slideIn, float, pulseSlow, gradientShift)

---

## 🛠️ Tech Stack

| Layer | Technology | Version |
|---|---|---|
| **Framework** | React | ^19.2.8 |
| **Language** | TypeScript | ~6.0.2 |
| **Build tool** | Vite | ^8.2.0 |
| **Styling** | Tailwind CSS (zero-config v4) | ^4.3.3 |
| **Vite Plugin** | @tailwindcss/vite | ^4.3.3 |
| **Animations** | Framer Motion | ^13.0.0 |
| **Icons** | Lucide React | ^1.28.0 |
| **Linter** | oxlint (blazing fast Rust-based) | ^1.75.0 |

### Why this stack?
- **Vite 8** — cold start in milliseconds, instant HMR
- **Tailwind v4** — no config file, native CSS theme variables, 40% smaller CSS
- **Framer Motion** — `whileInView` scroll-triggered stagger animations with zero JS bloat
- **oxlint** — 50-100x faster than ESLint, zero-config

---

## 📁 Project Structure

```
sscs-kerala/
├── dist/                      # Production build output (npm run build)
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/            # All 24 UI components
│   │   ├── About.tsx
│   │   ├── Achievements.tsx        # NEW · Awards cards
│   │   ├── AnnouncementTicker.tsx
│   │   ├── DistinguishedLecturers.tsx
│   │   ├── Events.tsx
│   │   ├── FAQ.tsx
│   │   ├── FlagshipConferences.tsx
│   │   ├── FloatingActions.tsx     # Sticky back-to-top + contact
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── GlobalReach.tsx         # NEW · Worldwide SSCS stats
│   │   ├── Hero.tsx
│   │   ├── MembershipBenefits.tsx
│   │   ├── Milestones.tsx          # NEW · Alternating timeline
│   │   ├── Navbar.tsx
│   │   ├── NewsSection.tsx         # NEW · Categorized news
│   │   ├── ResearchHighlights.tsx
│   │   ├── SBChapters.tsx
│   │   ├── Sponsors.tsx
│   │   ├── StudentOpportunities.tsx
│   │   ├── TeamSection.tsx
│   │   └── Testimonials.tsx
│   ├── data/
│   │   └── siteData.ts             # ⭐ Central content hub
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.tsx                     # Section orchestrator
│   ├── main.tsx                    # React entry
│   └── index.css                   # Tailwind @theme + design tokens
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── .oxlintrc.json
├── package.json
└── README.md
```

---

## ☁️ Deployment

### Vercel / Netlify
1. Push to GitHub / GitLab
2. Import the project → **Framework preset = Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy 🎉

### GitHub Pages
```bash
npm run build
# Push contents of dist/ to gh-pages branch
```

### Static Hosting (S3, Cloudflare Pages, Nginx…)
Copy the `dist/` folder → 117KB CSS + 448KB JS (131KB gzipped).

---

## 📐 Design Principles

1. **Brand Consistency** — IEEE Blue `#00629B` + Gold `#C4A000` used consistently everywhere
2. **World-class First Impression** — Layered gradients, glass morphism, noise textures, grid backgrounds
3. **Alternating Bg Rhythm** — `white → surface → dark → white` pattern prevents scroll fatigue
4. **Staggered In-View Animations** — Framer Motion 50ms delays create "organic reveal" feeling
5. **Mobile-First** — Responsive from 320px → 4K, xl nav collapse at 1280px
6. **Accessibility** — `prefers-reduced-motion`, semantic landmarks, visible focus, aria-labels
7. **Performance** — 2207 modules → 131KB gzipped JS. No heavy dependencies.

---

## 🤝 Contributing

This project is maintained by **IEEE SSCS Kerala Chapter volunteers**. To contribute:

1. Fork & clone the repo
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your edits (prefer updating `siteData.ts` for content changes)
4. Run `npm run lint` + `npm run build` to verify
5. Open a Pull Request with a clear description

### Maintainers
- SSCS Kerala Execom · Web Team
- Email: [sscs@ieeekerala.org](mailto:sscs@ieeekerala.org)

---

## 📄 License

Content © **IEEE SSCS Kerala Chapter**. All rights reserved.  
IEEE®, SSCS®, and the IEEE logo are trademarks of the Institute of Electrical and Electronics Engineers, Incorporated.

---

<div align="center">

Made with 💙 by **IEEE SSCS Kerala Volunteers**  

[↑ Back to top](#ieee-sscs-kerala-chapter-website)

</div>
