# HXD Studio Site

Official website for [HXD Studio](https://hxdstudio.app) — independent macOS apps.

Built with [Astro](https://astro.build), TypeScript, and native CSS. Deployed via GitHub Pages.

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Install dependencies

```bash
npm install
```

### Local development

```bash
npm run dev
```

Opens at `http://localhost:4321`.

### Production build

```bash
npm run build
```

Output goes to `dist/`. Preview locally with:

```bash
npm run preview
```

---

## Deployment

### GitHub Pages (automatic)

Every push to `main` triggers the GitHub Actions workflow at `.github/workflows/deploy.yml`.

Setup steps:

1. Go to **Settings → Pages** in the GitHub repo
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the site deploys automatically

### Custom domain

1. In **Settings → Pages**, enter `hxdstudio.app` under **Custom domain**
2. Add these DNS records at your registrar:

```
A     @   185.199.108.153
A     @   185.199.109.153
A     @   185.199.110.153
A     @   185.199.111.153
CNAME www hxdstudio.github.io
```

3. Enable **Enforce HTTPS** once the certificate is issued

The `public/CNAME` file keeps the custom domain across deployments.

---

## Content Updates

### Change text or metadata

Edit `src/data/site.ts` for global values (site name, email, copyright year).

Edit `src/data/apps.ts` to update app info, features, posters, or the App Store URL.

### Replace images

Drop new files into `public/media/vortex/` or `public/brand/` with the same filenames:

| File | Purpose |
|------|---------|
| `public/brand/vortex-app-icon.png` | Vortex app icon (72 × 72 recommended) |
| `public/brand/vortex-logo.png` | Vortex logo |
| `public/media/vortex/vortex-poster-01-core-value.png` | Hero poster |
| `public/media/vortex/vortex-poster-02-auto-organize.png` | Auto-organize poster |
| `public/media/vortex/vortex-poster-03-quick-actions.png` | Quick actions poster |
| `public/media/vortex/vortex-poster-04-history-undo.png` | History & undo poster |
| `public/media/vortex/vortex-poster-05-automation.png` | Automation poster |

### Enable the App Store button

In `src/data/apps.ts`, set `appStoreUrl` to the real App Store link:

```ts
appStoreUrl: 'https://apps.apple.com/app/vortex/id...',
```

### Add a new app

1. Add an entry to the `apps` array in `src/data/apps.ts`
2. Add app icon to `public/brand/`
3. Add posters to `public/media/<slug>/`
4. Create `src/pages/apps/<slug>.astro`
5. Create `src/pages/support/<slug>.astro`
6. Create `src/pages/privacy/<slug>.astro`
7. Add a URL to `public/sitemap.xml`

---

## Adding Languages (future)

All page copy is currently in English. To add a language:

1. Create locale-prefixed page directories:
   - `src/pages/ja/`
   - `src/pages/zh-cn/`
   - `src/pages/zh-tw/`
2. Copy and translate the pages
3. Update `src/layouts/BaseLayout.astro` `lang` attribute per locale
4. Add alternate `<link rel="alternate" hreflang="...">` tags

Planned locales: English (`/`), Japanese (`/ja/`), Simplified Chinese (`/zh-cn/`), Traditional Chinese (`/zh-tw/`).

---

## App Store URLs

| Field | URL |
|-------|-----|
| Support URL | `https://hxdstudio.app/support/vortex/` |
| Privacy Policy URL | `https://hxdstudio.app/privacy/vortex/` |
| Marketing URL | `https://hxdstudio.app/apps/vortex/` |

---

© 2026 HXD Studio
