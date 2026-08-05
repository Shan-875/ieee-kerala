# IEEE SSCS Kerala Chapter Website

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
**Official website of the IEEE Solid-State Circuits Society — Kerala Chapter**
A world-class, professional platform showcasing Kerala's premier semiconductor community.

---

[Overview](#-overview) • [Key Sections](#-key-sections) • [Quick Start](#-quick-start) • [Customization](#-customization)
• [Tech Stack](#-tech-stack) • [Project Structure](#-project-structure) • [Deployment](#-deployment)
[Tech Stack](#-tech-stack) • [Project Structure](#-project-structure) • [Deployment](#-deployment)

</div>

@@ -30,7 +28,9 @@ The **IEEE SSCS Kerala Chapter** is the nodal body under [IEEE Kerala Section](h
This website has been engineered to deliver an exceptional **first impression** — world-class design, rich content depth, and polished interactions that reflect the global standing of IEEE SSCS (10,000+ members across 100+ chapters in 90+ countries).

### 🏆 Awards & Recognition
> **Best Small Chapter Award — IEEE India Council 2025**  

> **Best Small Chapter Award — IEEE India Council 2025**
>
> Honored for outstanding chapter activities, membership growth, and community impact.

---
@@ -66,6 +66,7 @@ This website has been engineered to deliver an exceptional **first impression**
## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18 (20+ recommended)
- **npm** ≥ 9

@@ -136,6 +137,7 @@ Update everything without touching component code:
### 🎨 Styling → `src/index.css`

Design tokens live in Tailwind v4's `@theme` block:

- IEEE Blue family (`--color-ieee-blue`, `-dark`, `-darker`, `-light`, `-50`, `-100`)
- IEEE Gold accents
- Professional shadow tiers & custom utility classes
@@ -157,6 +159,7 @@ Design tokens live in Tailwind v4's `@theme` block:
| **Linter** | oxlint (blazing fast Rust-based) | ^1.75.0 |

### Why this stack?

- **Vite 8** — cold start in milliseconds, instant HMR
- **Tailwind v4** — no config file, native CSS theme variables, 40% smaller CSS
- **Framer Motion** — `whileInView` scroll-triggered stagger animations with zero JS bloat
@@ -175,36 +178,36 @@ sscs-kerala/
├── src/
│   ├── components/            # All 24 UI components
│   │   ├── About.tsx
│   │   ├── Achievements.tsx        # NEW · Awards cards
│   │   ├── Achievements.tsx          # NEW · Awards cards
│   │   ├── AnnouncementTicker.tsx
│   │   ├── DistinguishedLecturers.tsx
│   │   ├── Events.tsx
│   │   ├── FAQ.tsx
│   │   ├── FlagshipConferences.tsx
│   │   ├── FloatingActions.tsx     # Sticky back-to-top + contact
│   │   ├── FloatingActions.tsx       # Sticky back-to-top + contact
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── GlobalReach.tsx         # NEW · Worldwide SSCS stats
│   │   ├── GlobalReach.tsx           # NEW · Worldwide SSCS stats
│   │   ├── Hero.tsx
│   │   ├── MembershipBenefits.tsx
│   │   ├── Milestones.tsx          # NEW · Alternating timeline
│   │   ├── Milestones.tsx            # NEW · Alternating timeline
│   │   ├── Navbar.tsx
│   │   ├── NewsSection.tsx         # NEW · Categorized news
│   │   ├── NewsSection.tsx           # NEW · Categorized news
│   │   ├── ResearchHighlights.tsx
│   │   ├── SBChapters.tsx
│   │   ├── Sponsors.tsx
│   │   ├── StudentOpportunities.tsx
│   │   ├── TeamSection.tsx
│   │   └── Testimonials.tsx
│   ├── data/
│   │   └── siteData.ts             # ⭐ Central content hub
│   │   └── siteData.ts               # ⭐ Central content hub
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── App.tsx                     # Section orchestrator
│   ├── main.tsx                    # React entry
│   └── index.css                   # Tailwind @theme + design tokens
│   ├── App.tsx                       # Section orchestrator
│   ├── main.tsx                      # React entry
│   └── index.css                     # Tailwind @theme + design tokens
├── index.html
├── vite.config.ts
├── tsconfig.json
@@ -220,19 +223,22 @@ sscs-kerala/
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
@@ -260,22 +266,23 @@ This project is maintained by **IEEE SSCS Kerala Chapter volunteers**. To contri
5. Open a Pull Request with a clear description

### Maintainers

- SSCS Kerala Execom · Web Team
- Email: [sscs@ieeekerala.org](mailto:sscs@ieeekerala.org)

---

## 📄 License

Content © **IEEE SSCS Kerala Chapter**. All rights reserved.  
Content © **IEEE SSCS Kerala Chapter**. All rights reserved.
IEEE®, SSCS®, and the IEEE logo are trademarks of the Institute of Electrical and Electronics Engineers, Incorporated.

---

<div align="center">

Made with 💙 by **IEEE SSCS Kerala Volunteers**  
Made with 💙 by **IEEE SSCS Kerala Volunteers**

[↑ Back to top](#ieee-sscs-kerala-chapter-website)
[⬆ Back to top](#ieee-sscs-kerala-chapter-website)

</div>
