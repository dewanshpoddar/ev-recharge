# EV Recharge — CLAUDE.md

## What This Project Is

This is the marketing/lead-generation website for **EV Recharge** (brand: `evrecharge`, legal entity: **Varnika Energy Private Limited**). The product is the **MCI Series** — a mobile, grid-independent 120kW DC fast-charging infrastructure unit for commercial EV fleets in India.

The site lives at **www.evrecharge.org** and its sole business objective is to convert fleet operators, logistics companies, and EV OEMs into qualified leads. Every design and copy decision must serve that objective.

Founders: **Arpit** (arpit@evrecharge.org) and **Dewansh Poddar** (dewansh@evrecharge.org).

---

## The Business in Depth

### Core Product — MCI Series

The **Mobile Charging Infrastructure (MCI) Series** is a self-contained 120kW DC fast-charging unit that:

- Runs **100% off-grid** — powered by renewable energy (solar/wind), zero grid dependency
- Delivers **120kW DC output** directly, eliminating AC/DC conversion losses
- Charges a **12kWh vehicle (L5/SCV class) in 15–20 minutes**
- Can be **deployed at any depot within 5 days** — no civil work, no grid permits, no transformer upgrades
- Is **TRL 7 certified** (Technology Readiness Level 7 — prototype demonstrated in operational environment)
- Includes **bundled RSA** (Roadside Side Assistance) in every service agreement
- Includes **AI Telematics** — per-vehicle SOC (State of Charge) tracking, predictive dispatch, smart billing
- Supports **universal vehicle compatibility** — 3-wheeler (L5 class) and 4-wheeler (SCV class) fleets

**Pricing model:** Charging-as-a-Service (CaaS) — no capex for the customer, pay-per-unit-energy or subscription SLA.

### The Problem They Solve

India's commercial EV fleet operators face a specific infrastructure crisis:

1. **Grid upgrade hell** — getting a high-tension connection for a depot takes 6–18 months of permits and costs ₹15–40L in capex. This blocks fleet expansion.
2. **Morning dispatch crunch** — chargers can't keep up with fleet demand during shift start (typically 7–9am). Vehicles queue, routes miss SLA.
3. **India's grid is dirty** — ~70% coal/fossil. Charging on-grid means fleet operators can't claim ESG or carbon credit benefits. Auditors increasingly flag this.
4. **Fixed fast chargers require civil work** — permanent installations need real estate, concrete, and months of lead time.
5. **No RSA integration** — when a vehicle dies mid-route, there's no coordinated recovery. MCI bundles this.

### The Differentiation Stack

| Competitor Approach | EV Recharge MCI |
|---|---|
| Fixed AC/DC charging stations | Mobile, deployable in 5 days |
| Grid-dependent | 100% off-grid, renewable |
| No ESG audit trail | Full carbon traceability, credit-eligible |
| Months to deploy | Under 24 hours mobilization |
| No RSA | RSA bundled in SLA |
| Separate billing | AI telematics + smart billing included |

### Proven Deployments (as of early 2026)

| Client | Type | Key Result |
|---|---|---|
| **Euler Motors** | OEM Partnership, Depot Hub | 99.9% uptime, 40-rider fleet, 3 shifts |
| **Delhivery** | 3PL Sorting Centre | Deployed in 5 days, zero grid cost, 100% renewable |
| **ZYPP Electric** | Last-Mile, Urban Hub | 40% cost savings, 90% utilization, 80+ daily users |

### ESG & Carbon Story

- India's grid emission factor: **~710g CO2 per kWh**
- EV Recharge MCI emission factor: **0g CO2 per kWh**
- Projected impact: **36,000 tonnes CO2 saved over 3 years**
- Every unit of energy is **traceable to a renewable source** — suitable for ESG audits and SEBI BRSR reporting
- Fleet operators using MCI are eligible for **carbon credits under Gold Standard / Verra VCS**

---

## Target Buyers and Their Jobs-to-Be-Done

### 1. Fleet Operator / Depot Manager
**Context:** Runs 20–500 EVs out of one or more depots. Answerable to dispatch SLAs.  
**Pain:** Morning queue backlog, charging downtime eating into utilization metrics.  
**JTBD:** "I need every vehicle charged and dispatched on time. I don't want to manage charger hardware."  
**What they respond to:** Uptime guarantees, speed of deployment, utilization case studies, SLA language.

### 2. EV Leasing / OEM Partner
**Context:** Sells or leases EVs in bulk. Customer retention depends on fleet uptime.  
**Pain:** Customers complain about charging infra post-sale. It's a product gap.  
**JTBD:** "I need to offer charging infrastructure as part of my EV bundle."  
**What they respond to:** White-label capability, partnership terms, co-branding on ESG.

### 3. Investor
**Context:** VC/PE/Angel looking at clean-tech infrastructure in India.  
**Pain:** Hard to find infra plays that are asset-light, scalable, and ESG-native.  
**JTBD:** "I want to understand the unit economics, market size, and moat."  
**What they respond to:** Market size (India fleet EV charging TAM), technology differentiation, deployment velocity, team.

### 4. 3PL / Logistics Manager
**Context:** Runs a warehouse or sorting hub. EVs are a cost-optimization play.  
**Pain:** Grid costs and unreliable supply disrupt operations. Need predictable energy costs.  
**JTBD:** "I want to cut my energy bill and hit our ESG targets without a 12-month infra project."  
**What they respond to:** Opex savings %, deployment speed, no-capex model.

---

## Brand Voice and Tone

- **Direct, operational, no fluff.** This audience manages fleets. They don't read marketing copy — they scan for proof.
- **Confident without being arrogant.** The technology is real and deployed. Don't hedge. Don't oversell.
- **Numbers over adjectives.** "99.9% uptime" beats "industry-leading reliability." "5-day deployment" beats "rapid deployment."
- **Buyer's language, not engineer's language.** Say "zero grid cost" not "off-grid DC architecture." Say "vehicles charged on time" not "optimized charge throughput."
- **ESG is a business case, not a values statement.** Frame carbon savings in terms of audit compliance, credit eligibility, and SEBI BRSR — not just "saving the planet."
- **Urgency is operational, not artificial.** The pressure is real: fleets need to charge before morning dispatch. That's the clock.

---

## Design System

### Colors
| Token | Value | Usage |
|---|---|---|
| `evr-green` | `#1A5C38` | Primary brand, CTAs, headings |
| `evr-green-light` | `#4ADE80` | Accents, success states, tickers |
| `evr-dark` | `#07090C` | Dark section backgrounds |
| `evr-gray` | `#64748B` | Body text, secondary |
| `evr-border` | `#E2E8F0` | Dividers, card borders |

### Typography
- Font: **Plus Jakarta Sans** (loaded via `next/font/google`)
- Use tight line-heights and strong weight contrast (700/800 for headlines, 400/500 for body)

### Motion Principles
- Framer Motion throughout — use `viewport={{ once: true }}` for scroll animations
- Stagger children with `0.1s` increments for lists/grids
- No gratuitous animation — every motion should reinforce a message (e.g., ticker implies constant momentum)
- Prefer `y: 20 → 0` with `opacity: 0 → 1` for entrance animations

### Layout
- Max content width: `max-w-7xl` centered
- Section padding: `py-24` on desktop, `py-16` on mobile
- Bento grids for product features (not boring feature lists)
- Dark sections for ESG and Momentum — creates visual rhythm

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Utilities | `clsx` + `tailwind-merge` via `cn()` in `src/lib/utils.ts` |
| Font | Plus Jakarta Sans via `next/font/google` |
| Form Backend | Google Apps Script webhook (POST endpoint in LeadForm) |

No backend. No database. No auth. Pure static marketing site.

---

## Page Architecture

Single-page (`/`) with 8 ordered sections, all in `src/app/page.tsx`:

```
Navigation (fixed)
↓
Hero             — "Your fleet runs on energy. We deliver it."
↓
PainMoment       — "The shift starts at 7. The charging queue doesn't care."
↓
BentoProduct     — #product — MCI feature grid
↓
OperationalProof — #proof  — Euler, Delhivery, ZYPP case studies
↓
MomentumTicker   — Dark scrolling ticker of live deployment news
↓
ESGSection       — #esg   — Carbon comparison + audit trail
↓
LeadForm         — #conversion — 2-step persona-first form
↓
Footer
```

---

## Industry-Level Quality Standards

When building or editing this site, hold every component to these standards:

### Conversion
- Every section must have a clear next action — either implicit (scrolling deeper) or explicit (CTA button).
- The primary CTA is always "See your fleet's uptime plan" → `#conversion`.
- Form UX: persona-first, then details. Never lead with a generic contact form.
- Trust signals close to the form: real company names (Delhivery, Euler, ZYPP), real uptime numbers, founder names.

### Performance
- Target **Lighthouse score > 95** on all metrics.
- All images: use `next/image` with explicit `width`/`height`, lazy load below the fold.
- Fonts: preloaded via `next/font`, no FOUT.
- Animations: `will-change: transform` only on animated elements, not globally.
- No layout shift — reserve space for dynamic content.

### Accessibility
- All interactive elements: keyboard navigable, visible focus ring.
- Color contrast: WCAG AA minimum, AAA for body text.
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`.
- Icons paired with visible labels or `aria-label`.
- Form fields: explicit `<label>` association, not just placeholder text.

### Responsiveness
- Mobile-first Tailwind classes.
- Test breakpoints: 375px (iPhone SE), 768px (tablet), 1280px (desktop), 1440px (wide).
- Navigation: hamburger + full-screen overlay on mobile, horizontal links on desktop.
- Bento grids: single column on mobile, multi-column on desktop.

### Code Quality
- No inline styles — use Tailwind utility classes.
- No `any` types in TypeScript.
- Component files: one component per file, named exports preferred.
- Keep animation variants defined outside the component render (not inline object literals) to avoid re-creation.
- `cn()` utility for all conditional class merging.

---

## What "Industry-Level" Means for This Site

The benchmark is the best B2B SaaS and clean-tech infrastructure sites globally — think Linear, Vercel, Stripe, or in the Indian context, Euler Motors or Ather Energy's marketing sites.

Specifically:
- **No stock photo aesthetic** — use data, diagrams, and real client logos where possible.
- **Numbers are sacred** — never round up stats. Use real figures: 99.9%, 40% cost savings, 36K tonnes.
- **Copy density** — headlines should be short and punchy. Sub-copy is 1–2 sentences max per point. No walls of text.
- **Section transitions** — alternate light and dark sections to create visual rhythm.
- **Proof before promise** — show case study results before making product claims.
- **Loading states** — the LeadForm should show a real loading state on submit, not just disable the button.
- **Error handling** — form validation errors should be inline, specific ("Enter a valid work email"), not generic.
- **Micro-interactions** — hover states on cards, smooth scroll to anchors, subtle parallax on hero.

---

## Key Copy Lines (Do Not Change Without Reason)

These lines have been deliberately crafted and tested:

- Hero headline: **"Your fleet runs on energy. We deliver it."**
- Pain section: **"The shift starts at 7. The charging queue doesn't care."**
- ESG hook: **"India's grid is hidden coal. Your fleet deserves better."**
- Form success: **"Plan is in motion. Arpit or Dewansh will reach out within 4 hours."**
- Form promise: **"Custom charging plan within 48 hours. Pilots for 20+ vehicle fleets."**

---

## Business Context (Current State, April 2026)

- Active deployments: Euler Motors, Delhivery, ZYPP Electric
- Geography: Delhi-NCR primary, expanding
- Stage: Early commercial (post-pilot, pre-Series A)
- Traction: 250+ vehicles charged daily, 99.8% combined uptime across micro-loops
- Recent: Delhi-NCR network expanded by 12km coverage, MCI-Series now TRL 7 certified
- Headquarters: WorkFlo Mauryansh Elanza, Ahmedabad, Gujarat 380015

---

## Do Not Do

- Do not add features the user didn't ask for.
- Do not add comments explaining what code does — only add comments for non-obvious WHY decisions.
- Do not use `any` types.
- Do not use stock photography placeholder descriptions — if you need images, use real client logos or abstract data visualizations.
- Do not change the brand color tokens without explicit instruction.
- Do not add animation for its own sake — every motion must reinforce a message.
- Do not use generic marketing language ("cutting-edge", "revolutionary", "world-class") — replace with specific numbers and proof.
- Do not break the single-page architecture by adding new routes unless explicitly asked.
