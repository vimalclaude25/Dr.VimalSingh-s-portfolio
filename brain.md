# Brain: Academic Portfolio Website (Dr. Vimal Singh)

This file contains the complete system architecture, design details, and directory structure of the Academic Portfolio Website for Dr. Vimal Singh.

---

## 1. Project Overview
A premium, highly interactive academic portfolio website built for **Dr. Vimal Singh**. It showcases research publications, educational vision, latest news/events, professional activities, and personal profile details using a modern web design system.

---

## 2. Tech Stack
- **Core Framework**: [Next.js (v16.2.6)](https://nextjs.org/) utilizing the App Router.
- **Frontend Library**: [React (v19)](https://react.dev/).
- **Styling**: [Tailwind CSS (v4.2.0)](https://tailwindcss.com/) with PostCSS (`@tailwindcss/postcss`).
- **Animations**: [Framer Motion (v12.42.2)](https://www.framer.com/motion/) for smooth micro-animations, transitions, and hover effects.
- **Component UI**: Custom primitives, Base UI, Shadcn style layouts (e.g. customized buttons, interactive panels).
- **Icons**: [Lucide React](https://lucide.dev/).
- **Package Manager**: [pnpm](https://pnpm.io/) (`packageManager` set to `pnpm@11.10.0`).

---

## 3. Directory Structure
```text
academic-portfolio-website/
├── .next/                    # Next.js build and cache directory
├── app/                      # Next.js App Router root
│   ├── (main)/               # Route Group for standard site layout
│   │   ├── layout.tsx        # Shared site layout (Navbar, Footer, Topbar)
│   │   ├── page.tsx          # Main home page component assembling all sections
│   │   ├── ai-lab/           # AI & Innovation Lab subpage [NEW]
│   │   ├── course-resources/ # Course Materials & Resources study hub subpage [NEW]
│   │   │   └── admin/        # Client-side admin portal with Drive & Git integrations [NEW]
│   │   ├── edited-book2026/  # Academic Edited Books 2026 details & chapter submission [NEW]
│   │   ├── projects-consultancy/ # Government grants & industry consultancy subpage [NEW]
│   │   ├── publications/     # Full-featured search & filter books/chapters subpage [NEW]
│   │   ├── research-guidance/ # Interactive Ph.D. & M.Ed. cohorts statistics subpage [NEW]
│   │   ├── research-innovation/ # Core specializations & patent showcase subpage [NEW]
│   │   └── research-repository/ # Ph.D. & M.Ed. synopses secure archive [NEW]
│   ├── globals.css           # Global CSS and Tailwind directives
│   ├── layout.tsx            # Main HTML layout, providers, fonts
│   └── read/                 # Sub-routes for reading articles/essays
│       └── tagore-educational-vision/
│           └── page.tsx      # Dr. Vimal Singh's page on Tagore's Educational Vision
├── components/               # Custom UI sections and global layout components
│   ├── ui/                   # Reusable base/primitive UI components
│   │   └── button.tsx        # Styled Tailwind/shadcn Button component
│   ├── about-section.tsx     # Section showing Biography, Experience, Education
│   ├── activities-section.tsx# Editorial boards, professional memberships, etc.
│   ├── animated-counter.tsx  # Dynamic statistics display
│   ├── hero-section.tsx      # Main intro with profile picture, key statistics, CTAs
│   ├── latest-publications.tsx# Quick grid/list of recent research papers
│   ├── news-events.tsx       # Dynamic updates feed
│   ├── publications-section.tsx# Searchable/filterable list of publications (books, articles, patents)
│   ├── research-news-section.tsx # Displays newspaper, press releases, digital interviews [NEW]
│   ├── research-repository-section.tsx # Secure Ph.D./M.Ed. thesis reader panel [NEW]
│   ├── quick-access.tsx      # Navigational links/actions for quick discovery
│   ├── research-section.tsx  # Detailed research projects, grants, and areas
│   ├── site-footer.tsx       # Footer with contact details and copyrights
│   ├── site-navbar.tsx       # Sticky header/navigation bar (supports 2-column mega menus and standard dropdowns)
│   ├── site-topbar.tsx       # Scrolling marquee/announcements top bar
│   └── theme-provider.tsx    # Next-theme style setup (if active/configured)
├── lib/                      # Helper libraries and static/dynamic data
│   ├── cv-data.ts            # Central data store representing complete CV + news coverage data
│   └── utils.ts              # Tailwind CSS utility helpers (cn)
├── components.json           # Shadcn configuration
├── next.config.mjs           # Next.js bundler config
├── postcss.config.mjs        # PostCSS configurations for Tailwind v4
├── tailwind.config.js        # Tailwind legacy config (if any, Tailwind v4 uses CSS configuration)
├── tsconfig.json             # TypeScript rules and aliases
└── package.json              # Dependencies and runnable scripts
```

---

## 4. Architecture & Data Flow
1. **Centralized Data Store (`lib/cv-data.ts`)**:
   - Stores CV data including basic info, research projects, publications, activities, education, experience, teaching details, and news/events.
   - Houses `researchNewsData` representing the news coverage archives.
   - Houses `coursesData` and `studyResourcesData` representing M.Ed. syllabi content, study resources, and detailed educational infographics (with text transcriptions for interactive lightbox modals).
   - Provides a single source of truth, making it easy to update content by modifying this file.
2. **Main Page Layout (`app/page.tsx`)**:
   - Composition of individual section components (now including `ResearchNewsSection`).
   - Serves as the landing page showing Dr. Vimal Singh's profile comprehensively.
3. **Animations System**:
   - `framer-motion` handles entrance, scroll-triggered, tab bubble layouts, en-dash shifts, and hover state animations.

---

## 5. Development and Build Instructions
- **Run Locally (Development Dev Server)**:
  `pnpm dev`
- **Build Production Bundle**:
  `pnpm build`
- **Start Production Server**:
  `pnpm start`
