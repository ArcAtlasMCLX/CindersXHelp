# CindersX Help Centre

Standalone, public help site for CindersX staff — deployed independently at
**`help.cindersx.com`**, so it's free of the app's `stage` / `main` branch split.
Update a guide here without touching (or redeploying) the operational app.

It's a tiny Vite + React + Tailwind site that mirrors the main app's design tokens.
Guides use **CSS mockups** (no screenshots), so they never go stale against UI tweaks.

---

## Local development

```bash
npm install
npm run dev        # http://localhost:8081
npm run build      # outputs to dist/
npm run preview    # preview the production build
npm run typecheck  # tsc --noEmit
```

---

## Before you deploy

1. **Set the app URL.** Edit [`src/config.ts`](src/config.ts) and change `APP_URL`
   to your live CindersX app domain (e.g. `https://app.cindersx.com`). The
   "Open CindersX" / "Open Help" / "Back to CindersX" buttons point there.

---

## Deploy + point `help.cindersx.com` at it

This is a static SPA — host it anywhere. Pick one:

### Option 1 — Netlify
1. Push this folder to its own GitHub repo.
2. In Netlify: **Add new site → Import from GitHub**, pick the repo.
3. Build command `npm run build`, publish directory `dist`.
   (SPA routing is handled by `public/_redirects`.)
4. **Domain settings → Add custom domain →** `help.cindersx.com`.
5. At your DNS provider, add the record Netlify shows — usually:
   `CNAME  help  →  <your-site>.netlify.app`

### Option 2 — Vercel
1. Push to a GitHub repo and **Import Project** in Vercel (framework: Vite).
   (SPA routing is handled by `vercel.json`.)
2. **Project → Settings → Domains → Add** `help.cindersx.com`.
3. Add the `CNAME help → cname.vercel-dns.com` record Vercel shows at your DNS.

### Option 3 — Cloudflare Pages
1. **Pages → Create → Connect to Git**, build command `npm run build`,
   output dir `dist`.
2. **Custom domains → Set up a domain →** `help.cindersx.com` (Cloudflare wires DNS).

### Option 4 — New Lovable project
Import this repo as a separate Lovable project and attach the `help.cindersx.com`
custom domain in its settings. Keeps it editable in Lovable but still decoupled
from the main app's branches.

> **DNS note:** `help` is a subdomain — you add **one CNAME record** for `help`
> pointing at the host. It does not affect the apex domain or the main app.

---

## Adding a guide

1. Build the page in `src/pages/` (copy `GettingStartedGuide.tsx` as a template —
   it shows the mockup + two-column + steps + callout pattern).
2. Flip `available: true` for its entry in `src/pages/guides-registry.ts`.
3. Add its `<Route>` in `src/App.tsx`.

All the building blocks live in
[`src/components/guides/guide-primitives.tsx`](src/components/guides/guide-primitives.tsx):
`GuideShell`, `GuideHero`, `SectionHeading`, `GuideSplit`, `Steps`/`Step`,
`Callout`, `DeviceFrame`, `StatusBadge`, `GuideCard`, `GuideCTA`.

## Keeping design tokens in sync

`src/index.css` and `tailwind.config.ts` are copied from the main CindersX app.
If the app rebrands (colours, radius, fonts), copy those two files across.
