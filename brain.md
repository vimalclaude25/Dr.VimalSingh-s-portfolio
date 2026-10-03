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
│   │   ├── editorial-roles/  # Dedicated Associate Editor & Editorial Roles subpage [NEW]
│   │   ├── peer-review/      # Peer Review & Editorial Service (Q1-Q3 journals, Elsevier, SAGE, Wiley) [NEW]
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
│   ├── know-your-professor-chatbot.tsx # Floating sitewide AI chatbot assistant [NEW]
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
4. **AI Chatbot ("Know Your Professor")**:
   - Floating widget rendered at root level of main layout.
   - Mimics a digital twin of Dr. Vimal Singh, replying to questions regarding CV, patents, and qualifications.
   - Implements keyword matching against local database data structure in `lib/cv-data.ts`.

---

## 5. Recent Content Updates
- **August 12, 2026**: Updated homepage "Last Updated" timestamp to **12 August 2026**.
- **August 2026**: Created new **Peer Review & Editorial Service** subpage (`/peer-review`) featuring Q1–Q3 journal referee services for Elsevier, SAGE, and Wiley.
- **August 2026**: Added new peer-reviewed journal article under Journal Articles:
  - **Title**: *From Gurukul to Generative AI: Philosophical Foundations for AI-Enabled Multicultural Education*
  - **Journal**: *Journal of Computer Science and Information Technology (JCSIT)*, Vol. 3 No. 2, August 11, 2026, ISSN: 3080-3586, DOI: `10.61424/jcsit.v3i2.916`.
  - **PDF Location**: `public/papers/gurukul-to-generative-ai.pdf` (accessible via `/read/gurukul-to-generative-ai`).
- **August 2026**: Uploaded two newspaper coverage items under the "Newspaper Coverage" tab of the Media Coverage section:
  1. **CSJMU AI Portfolio Launch Coverage**: Newspaper clipping from *Inext (Kanpur)* dated 3 August 2026, summarizing the official website launch of Dr. Vimal Singh's AI-assisted portfolio by CSJMU VC.
  2. **Gen Z Digital Influence Scale Coverage**: Newspaper clipping from *My City Reporter (Kanpur)* dated 6 August 2026 (06.08.2026), detailing the development and implications of the psychometric 'Digital Influence Scale' study on Gen Z. Set at serial position #1 in the homepage **News & Events** section.
- **August 18, 2026**: Added new peer-reviewed journal article under Journal Articles (`journalPublications`):
  - **Title**: *Vivekananda’s Educational Philosophy and Its Reflections on Student Values: An Empirical Inquiry*
  - **Authors**: Vimal Singh and Suraj Gupta
  - **Journal**: *International Social Sciences and Education Journal (ISSEJ)*, Vol. 4 No. 3, August 11, 2026, pp. 52–61, ISSN: 3005-3463, DOI: `10.61424/issej.v4i3.923`.
- **August 18, 2026**: Removed "Peer Review & Editorial Service" item from the **Activities** navigation dropdown menu in `site-navbar.tsx`.
- **August 18, 2026**: Updated the homepage hero dashboard counter for **Research Papers Published** to **40**.
- **August 18, 2026**: Integrated WhatsApp contact number `+91-7905184427` sitewide across `lib/cv-data.ts`, top bar, contact page (`/contact`), site footer, and AI chatbot ("Know Your Professor").
- **August 18, 2026**: Created floating WhatsApp action button component (`floating-whatsapp.tsx`) fixed at the bottom-left corner with pulsing live badge and interactive tooltip banner for direct click-to-chat.
- **August 20, 2026**: Verified removal of "Peer Review & Editorial Service" from the Activities dropdown menu in `site-navbar.tsx` (retained as standalone `/peer-review` primary nav link). Updated research paper publications count to **40** across the dataset (`journalPublications` length = 40) and dashboard counter (`hero-section.tsx`). Integrated WhatsApp direct chat (+91-7905184427) floating chatbot symbol and added direct WhatsApp button inside AI chatbot header in `know-your-professor-chatbot.tsx`. Pushed all commits to `origin/main` for live website deployment on `drvimalsingh.in`.
- **August 22, 2026**: Uploaded four presentation slide decks under the **PPT** category in **Study Materials & Resources** (`/course-resources?section=materials`) for M.Ed. Semester I (Paper IV: RM_104 Research Methods in Education):
  1. *Understanding Research: Meaning, Concept & Key Characteristics* (`RM104-understanding-research.pdf`)
  2. *Purpose of Research: Knowledge Transmission, Conservation & Problem Solving* (`RM104-purpose-of-research.pdf`)
  3. *Types of Research: General Introduction & Classification Framework* (`RM104-types-of-research-introduction.pdf`)
  4. *Nature of Research Process: Journey of Knowledge & Key Characteristics* (`RM104-nature-of-research-process.pdf`)
  - Integrated interactive slide details modal preview for PPT resources in `app/(main)/course-resources/page.tsx`.
- **Images & Presentations Added**: Saved under `public/course-materials/`.
- **August 24, 2026**: Added three new Special Invitee Lectures delivered at the Sikh Light Infantry Regimental Centre Fatehgarh UP:
  1. *AI as a Force Multiplier: Practical Applications of Artificial Intelligence for Military Leadership and Administrative Excellence* (08 August 2026)
  2. *Empowering Army Families through Online and Distance Education: Building Futures beyond Uniform* (06 August 2026)
  3. *Mission Education: Leveraging Online and Distance Learning for Career Progression and Life Long Professional Development* (06 August 2026)
- **August 24, 2026**: Updated the homepage "At a Glance" dashboard counter for **Special Invitee Lectures** to **77**.
- **August 24, 2026**: Updated Google Scholar citation metrics on the homepage "At a Glance" dashboard: **Citations** to **105** and **i10-Index** to **2** (with h-Index at **7**).
- **August 24, 2026**: Added new international Web of Science indexed book chapter under **Book Chapters**:
  - **Title**: *Encouraging Entrepreneurial Mindsets: Entrepreneurship Education Through Creative Frameworks*
  - **Book**: *Entrepreneurial Solutions for Global Challenges (Web of Science)*
  - **Publisher**: Cambridge Scholar Publishing (UK), ISBN: 978-1-0364-7406-5 (2026), Role: Corresponding Author.
- **August 24, 2026**: Updated homepage hero dashboard statistics counter for **Book Chapters** to **12** (dynamically bound to `bookChapters.length`).
- **August 24, 2026**: Corrected **Ph.D. Scholar** count on the homepage "At a Glance" dashboard from **3** to **2** (displaying as `02`).
- **August 25, 2026**: Added *Depression and Anxiety* (Publisher: John Wiley and Sons Inc, Quartile: Q1, SJR 2025: 1.135, H-Index: 180, ISSN: 10914269, 15206394) to the Scholarly Peer Review & Editorial Service dataset (`peerReviewServiceData`). Updated total journals reviewed count to **06+** and refactored `PeerReviewSection` to render all 6 referee journals cleanly in a dynamic responsive 3-column grid layout with SJR and h-index badges.
- **August 28, 2026**: Executed 5 major portfolio updates:
  1. Uploaded Research Paper *Effectiveness of Animated Games on Study Habits of Secondary School Students* (Journal of Research in Education, Vol 14 No 01 June 2026, SJIF IF 6.295, pp. 105-117) to `public/papers/animated-games-study-habits.pdf` and added as item #1 in `journalPublications`. Updated homepage dashboard counter for total research papers to **41** (`journalPublications.length`).
  2. Added National Award: *Prof. H. N. Mishra Outstanding Teacher’s Award* (The International Society, McRobertganj Kanpur, 05.10.2023, National) to `awardsAndHonors` in `lib/cv-data.ts` and updated homepage hero counter for **Awards Received** to **2**.
  3. Updated landing page profile portrait `public/dr-vimal-singh.jpeg` with high-resolution portrait uploaded photo.
  4. Added new newspaper clipping *एआई से पढ़ाई के साथ शिक्षक भी जरूरी* (My City Reporter Kanpur, 28 August 2026) as item #1 under Newspaper Coverage (`/ai-padhai-shikshak-newspaper.jpg`).
- **September 01, 2026**: Updated Google Scholar **h-Index** on the homepage "At a Glance" dashboard from 7 to **3** (displaying as `03`). Refactored homepage **News & Events** feed (`components/news-events.tsx`) to dynamically load and display all latest research media news items (including August 28, 2026 updates: *एआई से पढ़ाई के साथ शिक्षक भी जरूरी* and *शिक्षक के साथ एआई से पढ़ाई का सफर होगा पूरा*) directly from `researchNewsData` in `lib/cv-data.ts`. Ensured modal popup strictly complies with preview layout rules (Heading -> Image -> Text -> Newspaper Source Link).
- **September 03, 2026**: Updated Google Scholar citation metrics on the homepage "At a Glance" dashboard (`components/hero-section.tsx`): **Citations** to **109**, **h-Index** to **7**, and **i10-Index** to **3** (displaying as `03`). Updated dashboard "Last Updated" timestamp to **03 September 2026**.
- **September 05, 2026**: Added three new international referee journals to the Scholarly Peer Review & Editorial Service dataset (`peerReviewServiceData`) and section (`/peer-review`):
  1. *Current Psychology* (Publisher: Springer, Quartile: Q1, SJR 2025: 0.960, h-Index: 83)
  2. *Behavioral Psychology/ Psicologia Conductual* (Publisher: Fundacion VECA, h-Index: 33)
  3. *Global Health Dynamics* (Publisher: Cultech Publications, URL: `https://ghd.cultechpub.com/index.php/ghd`)
  - Updated total journals reviewed count to **09+** and enabled direct external link navigation with icon for linked journals in `components/peer-review-section.tsx`.
- **September 10, 2026**: Authenticated remote GitHub repository `https://github.com/vimalclaude25/Dr.VimalSingh-s-portfolio.git` using Personal Access Token (PAT). Successfully pushed all pending local commits to `origin/main` (`92c9072..13dc544`). Live deployment (Vercel/Netlify) triggered automatically.
- **September 10, 2026**: Added new top-level navigation item **"Editorial Roles"** in `components/site-navbar.tsx` immediately before **"Peer Review"**. Created dedicated page route `app/(main)/editorial-roles/page.tsx` and component `components/editorial-roles-section.tsx` showcasing Associate Editor role for *ICT in Education* section at *Cogent Education* (Taylor & Francis). Complied strictly with accuracy constraints (no invented titles or metrics). Verified 0 TypeScript errors (`npx tsc --noEmit`) and successful 18/18 static pages Next.js build (`npm run build`).
- **September 10, 2026**: Integrated Dr. Vimal Singh's official YouTube Educational Lectures Channel (`https://www.youtube.com/channel/UCYC9VAGknO1Ug3yJsLVRWXA`) into the **Course Materials & Resources** section (`app/(main)/course-resources/page.tsx`), `personalInfo.links`, and `studyResourcesData`. Added a featured red video banner with a direct external link button for students and researchers.
- **September 16, 2026**: Designed and implemented the **Online Test Portal** for UPESSC Assistant Professor Examination preparation (`/online-test`). Features 80 total tests (30 GK across 6 units + 50 Education across 10 units), 40 test days spanning 16 Sep 2026 to 17 Nov 2026, dual daily evening slots (Slot 1: 7:00 PM - 7:30 PM, Slot 2: 8:00 PM - 8:30 PM), Testmoz test engine integration (`target="_blank"`), dynamic "Coming Soon" / "Start Test" status handling, progress tracking indicators, search/filters, and a full responsive Master Schedule view with revision days and exam notice (18-19 Nov 2026).
- **September 16, 2026**: Added active Testmoz exam links for **Test #2** cards in `lib/test-series-data.ts`:
  - **GK Unit 1 Test #2** (`gk-u1-t2`): `https://testmoz.com/q/15638702` (Slot 1, 7:00 PM - 7:30 PM)
  - **Education Unit 1 Test #2** (`education-u1-t2`): `https://testmoz.com/q/15638676` (Slot 2, 8:00 PM - 8:30 PM)
  - Updated card status dynamically to `'available'` with active "START TEST" buttons.
- **September 17, 2026**: Added active Testmoz exam links for **Test #3** cards in `lib/test-series-data.ts`:
  - **GK Unit 1 Test #3** (`gk-u1-t3`): `https://testmoz.com/q/15638828` (Slot 1, 7:00 PM - 7:30 PM, Current Affairs)
  - **Education Unit 1 Test #3** (`education-u1-t3`): `https://testmoz.com/q/15638940` (Slot 2, 8:00 PM - 8:30 PM, Philosophical Foundation of Education)
  - Updated card status dynamically to `'available'` with active "START TEST" buttons.
- **September 25, 2026**: Added active Testmoz exam links for **Test #4 & #5 (Unit 1)** and **Test #1 & #2 (Unit 2)** in `lib/test-series-data.ts`:
  - **GK Unit 1 Test #4** (`gk-u1-t4`): `https://testmoz.com/q/15644610` (Slot 1, 7:00 PM – Current Affairs)
  - **Education Unit 1 Test #4** (`education-u1-t4`): `https://testmoz.com/q/15644602` (Slot 2, 8:00 PM – Philosophical Foundation of Education)
  - **GK Unit 1 Test #5** (`gk-u1-t5`): `https://testmoz.com/q/15646386` (Slot 1, 7:00 PM – Current Affairs)
  - **Education Unit 1 Test #5** (`education-u1-t5`): `https://testmoz.com/q/15646388` (Slot 2, 8:00 PM – Philosophical Foundation of Education)
  - **GK Unit 2 Test #1** (`gk-u2-t1`): `https://testmoz.com/q/15653214` (Slot 1, 7:00 PM – Teaching and Research Aptitude)
  - **Education Unit 2 Test #1** (`education-u2-t1`): `https://testmoz.com/q/15653256` (Slot 2, 8:00 PM – Sociological Foundations of Education)
  - **GK Unit 2 Test #2** (`gk-u2-t2`): `https://testmoz.com/q/15654594` (Slot 1, 7:00 PM – Teaching and Research Aptitude)
  - **Education Unit 2 Test #2** (`education-u2-t2`): `https://testmoz.com/q/15654608` (Slot 2, 8:00 PM – Sociological Foundations of Education)
- **September 17, 2026**: Integrated **YouTube** (`https://www.youtube.com/@Researchorbit`) and **Facebook** (`https://www.facebook.com/vimal.singh.908`) social media accounts:
  - Created a dedicated, glassmorphic `FloatingSocialDock` component (`components/floating-social-dock.tsx`) anchored vertically on the left side edge (`fixed left-4 top-1/2 -translate-y-1/2 z-40 sm:left-6`), clearing the bottom center area so page content is never obstructed.
  - Reconfigured `FloatingWhatsApp` and `KnowYourProfessorChatbot` floating banners to be hover-triggered and auto-dismissing, preventing floating tooltips from covering section headings ("News & Events") and bottom page text.
  - Updated `personalInfo.links` in `lib/cv-data.ts` to include official YouTube (`@Researchorbit`) and Facebook (`vimal.singh.908`) profiles.
  - Added direct links into `SiteFooter` (`components/site-footer.tsx`) and `KnowYourProfessorChatbot` (`components/know-your-professor-chatbot.tsx`).
- **September 28, 2026**: Integrated **PYQs (Previous Year Question Papers)** module & **Peer Review Section** additions:
  - Updated total **Citations** stat counter to **119** in `components/hero-section.tsx`.
  - Added **Public Health Challenges** (*John Wiley & Sons Ltd*, Q1, SJR 0.569, ISSN 2769-2450) to `peerReviewServiceData` in `lib/cv-data.ts`, bringing total reviewed journals counter to **10+**.
  - Added **MED104** (*Research Methods in Education - General Perspectives*, M.Ed. Sem I 2026-27) and **MED305** (*Educational Administration & Planning*, M.Ed. Sem III 2025-27) to `pyqsData` in `lib/cv-data.ts` with downloadable PDF assets.
- **October 03, 2026**: Added active Testmoz exam links for **Test #1 & #2 (Unit 3)** in `lib/test-series-data.ts`:
  - **GK Unit 3 Test #1** (`gk-u3-t1`): `https://testmoz.com/q/15675318` (Slot 1, 7:00 PM – Information and Communication Technology (ICT))
  - **Education Unit 3 Test #1** (`education-u3-t1`): `https://testmoz.com/q/15675346` (Slot 2, 8:00 PM – Psychological Foundations of Education)
  - **GK Unit 3 Test #2** (`gk-u3-t2`): `https://testmoz.com/q/15675394` (Slot 1, 7:00 PM – Information and Communication Technology (ICT))
  - **Education Unit 3 Test #2** (`education-u3-t2`): `https://testmoz.com/q/15675378` (Slot 2, 8:00 PM – Psychological Foundations of Education)

---

## 6. Online Test Portal System Architecture
- **Data Architecture (`lib/test-series-data.ts`)**:
  - Centralized, fully typed dataset for all 80 unit tests (30 General Knowledge tests across 6 units + 50 Education tests across 10 units).
  - Data schema includes `id`, `subject`, `unit`, `unitTitle`, `testNumber`, `title`, `date`, `day`, `slot`, `startTime`, `endTime`, `duration` (20 min), `questionCount` (50), `difficulty`, `type` ("MCQ"), `testmozUrl`, and `status`.
  - Master schedule generator providing day-by-day lookup from 16 September 2026 to 17 November 2026 with automatically categorized "Revision Days" and "UPESSC Examination" notices on 18-19 November 2026.
  - Built-in programmatic QA validator `validateTestSeriesData()` ensuring all 20 structural and scheduling integrity rules are passed without error.
- **UI Components (`components/online-test-portal.tsx`)**:
  - **Dashboard Summary Bar**: 9 quick-stat counters (80 Total Tests, 30 GK, 50 Education, 40 Test Days, 50 Questions/Test, 20 Mins/Test, 16 Sep Start, 17 Nov Final Test, 18-19 Nov UPESSC Exam).
  - **Progress Dashboard**: Dynamic visual indicators for GK Progress (0/30), Education Progress (0/50), and Overall Progress (0/80).
  - **Filter & Search Bar**: Quick filters for All, GK, Education, Available, Upcoming, and Coming Soon + Keyword search by unit name, title, or test number.
  - **Test Card Grid**: Displays test details with dual-slot badges, duration, question count, and dynamic "START TEST" button (opening Testmoz in a new tab via `target="_blank"` and `rel="noopener noreferrer"`) or "Coming Soon" disabled state.
  - **Master Schedule Table / Mobile View**: Comprehensive 40 test-day breakdown showing Slot 1 & Slot 2 pairings, explicit Revision Day banners, and exam notices.
- **Page Route (`app/(main)/online-test/page.tsx`)**:
  - Full-width responsive subpage integrated into standard `MainLayout` with header navigation in `site-navbar.tsx`.

- **September 17, 2026**: Integrated **UPESSC Test Assistant** administrative automation module (`/admin/upessc-automation`):
  - Built comprehensive admin console with real-time countdown widget, today's tests manager, 10+ variation AI message generator, approval queue, and full 80-test Testmoz link registry.
  - Added dedicated Safe Test Mode activity log viewer (`/admin/upessc-automation/test-log`).
  - Implemented Next.js Edge Middleware route guard with HttpOnly session cookies and login route at `/admin/login`.
  - Implemented server-side cron automation engine (`/api/admin/upessc/automation/cron`) configured via `vercel.json` with idempotency and retry handling.
  - Added discrete admin lock link in `SiteFooter`.

---

## 7. UPESSC Test Assistant Architecture & Automation Engine
- **Purpose**: Fully automate preparation, scheduling, admin review, and multi-channel publication of UPESSC 2026 Online Test Series announcements on WhatsApp Channels.
- **Two-Phase Architecture**:
  - **Phase 1 (Active by Default)**: Automated generation of scheduled announcements (30-min reminder, 10-min urgent alert, test live, 5-min warning, slot completion, 11 PM extended final, 12 AM closed) with mandatory admin review/approval (`status: "pending_approval"`).
  - **Phase 2 (Fully Automatic Mode)**: Admin toggles `fully_automatic_publishing: true` in master settings to let the server-side cron engine publish approved messages without manual click-through.
- **Core Abstractions & Storage**:
  - `lib/automation-types.ts`: Core interfaces for `GeneratedMessage`, `AutomationSettings`, `TestOverride`, `ActivityLogEntry`.
  - `lib/automation-store.ts`: File-backed atomic store (`data/automation/store.json`) with in-memory caching and deep-cloning safety.
  - `lib/message-generator.ts`: Multi-variation generator with 10+ distinct Hinglish/Hindi educational templates per message type while strictly preserving test metadata (title, time, duration, question count, Testmoz URL).
  - `lib/whatsapp-provider.ts`: Provider abstraction (`WhatsAppProvider`) supporting `none` (safe logging), Meta Cloud API, and external aggregators without hard-coded vendor dependencies.
  - `lib/automation-engine.ts`: Time-offset scheduler and due message processor running with idempotency keys (`${testId}_${type}_${date}`).
- **API Endpoints**:
  - `POST /api/admin/auth/login`: Session cookie generator (validates `ADMIN_PASSWORD` or fallback `upessc2026admin`).
  - `POST /api/admin/auth/logout`: Clears session cookie.
  - `POST /api/admin/upessc/automation/generate`: Generates schedule messages for any test.
  - `GET / POST /api/admin/upessc/automation/messages`: Lists, filters, approves, edits, regenerates, or retries messages.
  - `POST /api/admin/upessc/automation/publish`: Manually or automatically publishes messages (handles safe test mode and real WhatsApp dispatch).
  - `GET / POST /api/admin/upessc/automation/schedule`: Read/update Testmoz URLs and midnight extensions across all 80 tests.
  - `GET / POST /api/admin/upessc/automation/settings`: Reads/updates master switches (`automation_enabled`, `test_mode`, `auto_approval`, `fully_automatic_publishing`, `whatsapp_channel_url`).
  - `GET / POST /api/admin/upessc/automation/cron`: Server-side scheduler endpoint invoked via Vercel Cron (`vercel.json`) every 5 minutes.
  - `GET / POST /api/admin/upessc/automation/logs`: Returns activity logs and real-time dashboard metrics.

---

## 8. Development and Build Instructions
- **Run Locally (Development Dev Server)**:
  `pnpm dev`
- **TypeScript Verification**:
  `npx tsc --noEmit`
- **Build Production Bundle**:
  `pnpm build`
- **Start Production Server**:
  `pnpm start`


