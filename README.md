# PerceiveX

PerceiveX builds custom AI, AI agents, and software that show where
operations lose time and money — then close those gaps. Built for startups,
small companies, and enterprises.

This repo is the marketing site plus the **Operations Analyzer**, a free
interactive tool that walks a visitor through the areas businesses typically
lose time and money (support, sales, data entry, finance, HR, reporting, IT,
supply chain) and turns their answers into an estimated breakdown of hours
and dollars at stake, with a recommended AI agent per area.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4 (CSS-first theme, no `tailwind.config`)
- [lucide-react](https://lucide.dev) for icons

No backend, database, or external AI API is required — the Analyzer's
scoring engine (`src/lib/analyzer/scoring.ts`) is a deterministic, rule-based
estimator using per-category automation benchmarks, not a live AI call.

## Structure

```
src/
  app/
    page.tsx            Landing page
    analyzer/page.tsx    Operations Analyzer tool
    layout.tsx, globals.css
  components/
    marketing/           Landing page sections (Hero, Pillars, Pricing, FAQ, …)
    analyzer/             Analyzer wizard steps + report (stat tiles, bar chart)
  lib/
    analyzer/
      categories.ts       The 8 operational areas + recommended agents
      companySizes.ts     Company size brackets + default hourly cost
      scoring.ts          The estimation engine
      types.ts
    format.ts             Currency/hours formatting helpers
```

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Before going live

A few placeholders need real values before this ships publicly:

- `hello@perceivex.ai` is used throughout (footer, CTAs, mailto links) as a
  placeholder contact address — replace with a real inbox.
- Pricing tiers on the landing page describe engagement shapes (Pilot
  Sprint / Department Rollout / Enterprise Program) rather than fixed
  prices, intentionally, since this is a bespoke build engagement — adjust
  if you want published rates.
- The "Illustrative scenarios" on the landing page are clearly labeled
  examples, not real client results — swap in real case studies once you
  have them, keeping the same honest labeling if any are still illustrative.
