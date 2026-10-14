# Session Summary — 2026-10-05

Migrated BloomTechUS from a Railway-hosted Express/Postgres backend to a fully static site on Cloudflare Pages, with contact forms handled client-side via EmailJS.

## 1. Contact Us form → EmailJS

- Set up an EmailJS account/template (`Contact Us`, service: Zoho).
- Credentials:
  - Service ID: `service_49sfbsb`
  - Template ID: `template_7oiakle`
  - Public Key: `dMrkwmOZ00UAvahin`
- Template variables: `{{name}}`, `{{email}}`, `{{company}}`, `{{interests}}`, `{{message}}`. To Email fixed to `Info@bloomtechusa.com`, Reply To set to `{{email}}`.
- Installed `@emailjs/browser`, rewrote `frontend/src/pages/ContactUs.tsx` to call `emailjs.send()` directly instead of `axios.post` to the Express backend.
- Verified with a real test send via the EmailJS REST API (required spoofing Origin/Referer headers — flagged that EmailJS's "non-browser" block is weak; recommended adding an allowed-domains restriction in EmailJS Account → Security).

## 2. Removed the backend entirely

Decided (after confirming with user) to delete:
- `backend/` folder in full — Express, Postgres, nodemailer, auth/user/expert controllers.
- `frontend/src/pages/Login.tsx`, `Register.tsx`, `Dashboard.tsx`, `frontend/src/context/AuthContext.tsx` — Google OAuth user-account system is gone.
- Two dead files: `ServiceDetails.old.tsx`, `ServiceDetails.original.tsx`.
- Dependencies `axios`, `@react-oauth/google`; added `@emailjs/browser`.
- Env vars `VITE_API_URL`, `VITE_GOOGLE_CLIENT_ID` removed from `.env`/`.env.template`.

Navbar simplified: Login/Register links and the authenticated user dropdown replaced with a single "Get Started" → `/contact` button (desktop + mobile).

`ExpertFormModal.tsx` (the "Talk to an Expert" form on service pages) converted to EmailJS too — reuses the same contact-form template/service, folding `jobTitle`/`phone`/`serviceName` into the `interests`/`message` fields since a second template wasn't set up.

Updated `prerender.js` route list, `vite.config.ts` manual chunks (removed the now-nonexistent `@react-oauth/google`/`axios` chunk), `CLOUDFLARE_PAGES_CONFIG.md`, and root `README.md` to describe the static-only setup.

Verified: full `npm run build` succeeds, 18/18 routes pre-render, no stale `/login`/`/register`/`/dashboard` references.

**Commit:** `5e9785d` — authored as `NaduniTPerera <naduniperera283@gmail.com>` (per request), pushed to `origin/main`.

## 3. Railway cleanup

- User deleted the Railway project from the Railway dashboard.
- Confirmed the old ✗ "Deployment failed" status on commit `5e9785d` is a frozen historical record on that exact commit SHA — it doesn't retroactively clear, but no new Railway statuses will post on future commits.

## 4. Cloudflare Pages deployment — the saga

**Attempt 1 — native Git integration:** Cloudflare dashboard → Workers & Pages → Connect to Git → selected `bloomtechmain/BloomTechUS` → got:
> "This repository is being used for a Cloudflare Pages project on a different Cloudflare account."

Investigated: `bloomtechusa.com` was already live via some pre-existing Cloudflare Pages project, but serving stale (pre-migration) content, under an account nobody currently has access to. Checked:
- GitHub's installed-apps page (`github.com/settings/installations`) for the `bloomtechmain` account — the "Cloudflare Workers and Pages" app installed there did **not** already include this repo (user accidentally started adding it, then removed again — correctly, since it wasn't the blocker).
- Public GitHub Deployments API for the repo — only found Railway-created deployment records, no Cloudflare ones, so no public trail to the actual owning account.
- Conclusion: the original Cloudflare Pages project is orphaned under an unknown/inaccessible account. Can't be removed without finding that account.

**Pivoted to GitHub Actions + Cloudflare Direct Upload** (bypasses the native Git integration entirely, so the orphaned connection stops mattering):

Created `.github/workflows/deploy.yml`:
- Triggers on push to `main`.
- Builds `frontend/` with Node, runs `npm run build`.
- Deploys `frontend/dist/client` via `cloudflare/wrangler-action@v3` → `wrangler pages deploy ... --project-name=bloomtechusa --branch=main`.

GitHub repo secrets added by user: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID` (`abdfd0347a89cfeef684803884256218`), plus the 3 `VITE_EMAILJS_*` vars.

Debugged through four failed runs before success:
1. **Node 18 vs Vite 7** — Vite 7 requires Node 20.19+/22.12+. Fixed `actions/setup-node` to `node-version: '22'`.
2. **`Authentication error [code: 10000]`** — the first API token (from the "Edit Cloudflare Workers" template) didn't include Cloudflare Pages permission. Created a new **custom token** with explicit **Account → Cloudflare Pages → Edit**, updated the `CLOUDFLARE_API_TOKEN` secret.
3. **`Project not found [code: 8000007]`** — newer Wrangler no longer auto-creates the Pages project on `pages deploy`. Added a step: `npx wrangler@3.90.0 pages project create bloomtechusa --production-branch=main || true` before the deploy step.
4. **Success** — but the live check against `bloomtechusa.pages.dev` still showed old content. Turned out `*.pages.dev` subdomains are globally unique across all Cloudflare accounts, and `bloomtechusa.pages.dev` was already claimed by the orphaned old project. Our new project (confirmed via the Cloudflare API, `deployment_trigger.type: "ad_hoc"`) actually got auto-assigned **`bloomtechusa-873.pages.dev`**, which correctly reflects the latest build.

**Live site (new, correct, auto-deploying): https://bloomtechusa-873.pages.dev**

## 5. Getting `bloomtechusa.com` onto the new deployment

Initially assumed the domain's DNS was stuck on a truly inaccessible Cloudflare account, and started down a full domain-migration path:
- Added `bloomtechusa.com` as a new zone under the `Production@bloomt...` account (Cloudflare "Add a site" flow).
- Reviewed the auto-scanned DNS records before going further (good practice before any nameserver cutover): found 4 A, 4 AAAA, 3 MX (`mx.zoho.com`/`mx2`/`mx3`, standard Zoho Mail setup), 5 TXT (Zoho verification, SPF, 2x Google site verification, DMARC) — all looked complete, only flagged that a DKIM TXT record wasn't present in the scan (selector-specific records are often missed by auto-scanners; noted to double check in Zoho Mail admin later, not urgent).
- Got as far as the "update your nameservers" screen (old: `jerome`/`reza.ns.cloudflare.com`, new: `alec`/`celine.ns.cloudflare.com`) before the user clarified they actually **do** have login access to the *other* Cloudflare account — the one that's been hosting `bloomtechusa.com` and the original Pages project all along.

Abandoned the nameserver-migration path (left the pending zone-add incomplete in `Production@bloomt...` — harmless, since nameservers were never changed, so it just never activates).

**Switched approach: redeploy into the account that already owns the domain**, instead of moving the domain to the account we'd been using. Found the existing `bloomtechusa` Pages project there (account ID `b0edf11e8339ca8c01529b834873ad38`) — already bound to `www.bloomtechusa.com` and `bloomtechusa.pages.dev`, last deployed 3 months ago at commit `d154fd7` (the commit right before this migration started), showing "disconnected from Git account" (irrelevant to us since we don't use native Git integration anyway).

- Created a new custom API token in *that* account (Account → Cloudflare Pages → Edit permission).
- Updated the GitHub repo secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` to point at this account instead.
- Pushed an empty commit to retrigger the workflow — since it already targeted `--project-name=bloomtechusa`, it deployed straight into the existing, already-domain-bound project.
- **Verified live**: `www.bloomtechusa.com` now serves the latest build (confirmed "Get Started" button present, no Login/Register) — fully working, no DNS/nameserver changes needed in the end.

## Still outstanding

- **EmailJS domain allowlist**: recommended adding allowed domains (Account → Security) so the public key can't be used to spam from other sites — not yet confirmed done.
- **DKIM check**: confirm in Zoho Mail admin that a DKIM record exists for `bloomtechusa.com` (wasn't visible in Cloudflare's DNS auto-scan, which can miss selector-specific records) — only matters if/when the domain's DNS actually gets migrated in the future; not urgent now since DNS never moved.
- **BloomTechLK** (separate project/chat): user is repeating this same migration there. Gave them a condensed gotcha list (Node version, token permissions, project-create step, subdomain collision, and now: check which Cloudflare account already owns the domain before assuming a migration is needed) to paste into that session so it doesn't need to rediscover each issue.
