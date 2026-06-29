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
4. For SPA routing, add a `public/_redirects` file containing
   `/*    /index.html   200`. (Do **not** keep this file when deploying to
   Cloudflare Workers — its asset validator rejects the catch-all rule;
   Cloudflare handles SPA routing via `wrangler.jsonc` instead.)
4. **Domain settings → Add custom domain →** `help.cindersx.com`.
5. At your DNS provider, add the record Netlify shows — usually:
   `CNAME  help  →  <your-site>.netlify.app`

### Option 2 — Vercel
1. Push to a GitHub repo and **Import Project** in Vercel (framework: Vite).
   (SPA routing is handled by `vercel.json`.)
2. **Project → Settings → Domains → Add** `help.cindersx.com`.
3. Add the `CNAME help → cname.vercel-dns.com` record Vercel shows at your DNS.

### Option 3 — Cloudflare (Workers static assets) ✅ in use
This repo ships a `wrangler.jsonc` that deploys the built `dist/` as static
assets with SPA routing, so the connected build just works:
1. **Workers & Pages → Create → Connect to Git**, pick this repo.
   Build command `npm run build`, output dir `dist`, deploy `npx wrangler deploy`.
2. **Settings → Domains & Routes → Add → Custom domain →** `help.cindersx.com`
   (Cloudflare wires the proxied CNAME automatically).

> The `assets.not_found_handling: "single-page-application"` setting in
> `wrangler.jsonc` is what makes `/brand`, `/getting-started`, etc. work on
> direct load / refresh. (The `_redirects` / `vercel.json` files cover the
> Netlify / Vercel options above.)

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
