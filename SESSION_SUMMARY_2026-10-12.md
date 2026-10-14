# Session Summary — 2026-10-12

Full visual redesign of the BloomTechUSA site — removed the "generic AI-generated" dark glassmorphic look and replaced it with a restrained, professional light theme using the brand's navy/orange palette. No text/content was changed anywhere — styling, layout, and structure only.

## 1. Design system

- Palette: `#101D36` deep navy, `#0B1428` dark navy, `#1B2B4D` navy-mid, `#FFFFFF` white, `#F5F6F8` light grey, `#FF6B00` orange (used sparingly for CTAs/accents).
- Font switched from a broken "Outfit" `@font-face` to "Inter" (Google Fonts link added in `index.html`).
- Established one consistent icon treatment used everywhere: navy gradient badge (`from-[#101D36] to-[#1B2B4D]`) with an orange icon — no per-card color variation.

## 2. Pages redesigned

- **Home.tsx** — simplified hero, stats bar, 12-card services grid, three core pillars, "Why BloomTech" dark section, restructured 2-column contact CTA (fixed an empty-right-side layout bug).
- **Company.tsx** — full redesign, fixed a JSX nesting bug, unified the "Approach" cards to the single icon-badge style.
- **ContactUs.tsx** — hero rebuilt (removed a duplicate-with-page-below layout, added an orange accent in the headline), contact cards/form/social/map restyled light.
- **Navbar.tsx / Footer.tsx** — lighter typography, solid orange CTA button, removed dead `hoveredService` state.

## 3. Service detail pages — structural redesign

Replaced the repeated roman-numeral-timeline / big-padded-icon-card formula (used almost identically on every service page) with distinct, purpose-built layouts so pages no longer read as templated:

- **Enterprise Networking** — zigzag editorial rows with numbered background digits.
- **Custom Server Design** — horizontal 4-step process bar + zebra-striped spec table.
- **Custom NAS** — storage-tier width-bars sized per tier.
- **AI & Machine Learning** — horizontal connected-dot flow diagram.
- **Network Infrastructure, Professional IT Consulting, Security & Data Protection, Custom Websites, Custom Mobile/Web Apps, Online Marketing, Cloud Hosting** — roman-numeral lists converted to 2x2/3-column grids with icon badges and bullet lists, or compact divided-strip lists.
- Deleted genuinely dead files: `BackgroundGlows.tsx`, `ManagedAVServicesContent.tsx`, `AICustomDevContent.tsx`, `AssetLifecycleContent.tsx`.

## 4. Bug fixes along the way

- Fixed numerous invisible-text/contrast bugs left by a bulk dark→light conversion (white text on white backgrounds, navy text on navy badges, etc.) across most service pages.
- Fixed a clipped/overflowing headline in the Custom CRM page's final CTA.
- Removed "shouting" `uppercase` styling from real headings and table headers across every service file, while keeping it on legitimate small pill-badges, form labels, and buttons.
- Cleaned up unused imports/variables introduced during edits so the project type-checks cleanly (`tsc --noEmit`).

## 5. Verification

- `npx tsc --noEmit` — clean, no errors.
- All 17 routes (Home, Company, Contact, 14 service pages) verified returning HTTP 200 on the dev server.

## 6. Deployment

- Committed and pushed to `main` as `NaduniTPerera <naduniperera283@gmail.com>` (commit `ebae9f3`).
- Repo has an existing GitHub Actions workflow that auto-deploys to Cloudflare Pages on push to `main`.
