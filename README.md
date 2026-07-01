# Dinesh — Professional Portfolio

A modern, creative portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customize Your Site

Edit **`src/lib/data.ts`** — this single file controls all your content:

- Name, title, and bio
- Email and domain URL
- Social links (GitHub, LinkedIn, Twitter)
- Skills and technologies
- Projects showcase
- Work experience

## Deploy to Your Domain

### Option 1: Vercel (Recommended — Free)

1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Deploy — Vercel auto-detects Next.js
4. In Vercel → **Settings → Domains**, add your custom domain
5. Update DNS at your registrar with the records Vercel provides

### Option 2: Netlify

1. Push to GitHub
2. Connect at [netlify.com](https://netlify.com)
3. Build command: `npm run build`, Publish directory: `.next`
4. Add custom domain in Netlify dashboard

### Option 3: Self-hosted (VPS)

```bash
npm run build
npm start
```

Use Nginx as reverse proxy and point your domain A record to your server IP.

## Tech Stack

- **Next.js 15** — React framework with App Router
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth scroll animations
- **Lucide React** — Icons

## Project Structure

```
src/
├── app/
│   ├── layout.tsx    # Root layout & fonts
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/       # UI sections
└── lib/
    └── data.ts       # ← Edit this for your content
```
