# BloomTechUS Project Setup

This project is a fully static React site powered by Vite, pre-rendered (SSR/SSG) for SEO, and deployed on Cloudflare Pages. There is no backend/API server — the contact form and expert inquiry form send email directly from the browser via EmailJS.

## Structure

- **`frontend/`**: React application powered by Vite and styled with Tailwind CSS. Pre-renders all routes to static HTML at build time (see `frontend/prerender.js`).

## Getting Started

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.template` to `.env` and fill in your EmailJS service ID, template ID, and public key.
4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

See `frontend/CLOUDFLARE_PAGES_CONFIG.md` for Cloudflare Pages build settings.

## Key Technologies

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion, React Router
- **Email**: EmailJS (client-side, no backend required)
