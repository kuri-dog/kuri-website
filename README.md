# Kuri Website

Static rebuild of `kuri.co.nz` using Astro, GitHub and Netlify.

The current live WordPress site stays live until final launch approval. Do not change DNS, disconnect WordPress, or connect the production domain until the launch checklist is complete.

## Important URLs

- Production domain: `https://kuri.co.nz`
- Netlify preview: `https://lively-gumdrop-0562de.netlify.app`
- GitHub repo: `https://github.com/kuri-dog/kuri-website`
- Shop: `https://shop.kuri.co.nz/`
- Booking portal: `https://kuri.portal.gingrapp.com/`

## Shopify Shop Protection

`https://shop.kuri.co.nz/` is the live Shopify store. It must stay hosted on Shopify.

Do not:
- move `shop.kuri.co.nz` to Netlify
- change DNS records for `shop.kuri.co.nz`
- proxy Shopify through the new static site
- include `shop.kuri.co.nz` in production-domain launch changes
- create wildcard redirects that could affect the Shopify subdomain

The new Kuri website may link to the Shopify store. Old shop-related paths on `https://kuri.co.nz/`, such as `/shop/`, `/cart/`, `/checkout/`, and `/product/*`, may redirect to `https://shop.kuri.co.nz/`, but the Shopify subdomain itself must remain untouched.


## Local Workflow

```powershell
cd "C:\Users\jlh\Downloads\kuri-website-push"
$env:ASTRO_TELEMETRY_DISABLED="1"
npm.cmd run dev -- --host 0.0.0.0 --port 4324
```

Open `http://localhost:4324/`.

Before committing:

```powershell
$env:ASTRO_TELEMETRY_DISABLED="1"
npm.cmd run check
```

## Git Workflow

```powershell
git status
git add <changed files>
git commit -m "Short description"
git push
```

Netlify should build from the pushed `main` branch and create a new preview.

Do not commit:

- `node_modules/`
- `.astro/`
- `dist/`
- `astro-dev-*.log`

## Project Controls

Repo-level controls:

- `docs/page-rollout-plan.md`
- `docs/launch-checklist.md`
- `src/data/site.ts`
- `public/_redirects`

Migration discovery controls live outside the repo in:

`../Migration-Discovery/`

Key source-of-truth files:

- `migration-master.csv`
- `redirect-map-first-pass.csv`
- `rebuild-roadmap.md`
- `global-footer-spec.md`
- `analytics-tracking-plan.md`
- `access-checklist.md`
