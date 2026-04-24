/**
 * Single source of truth for all static content / business data on the EVR site.
 * Components import from here — never hardcode copy inside component files.
 */

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { name: "Product", href: "/#product" },
  { name: "Proof", href: "/#proof" },
  { name: "ESG", href: "/#esg" },
  { name: "Contact", href: "/#conversion" },
] as const;

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HERO_STATS = [
  { label: "Vehicles charged today", value: "250+" },
  { label: "Grid dependency", value: "0%" },
  { label: "Anywhere deployment", value: "<24h" },
  { label: "Technology validated", value: "TRL 7" },
] as const;

// ─── Pain Moment ──────────────────────────────────────────────────────────────

export const PAIN_CARDS = [
  {
    num: "01",
    label: "Last-Mile Depot",
    quote: "Vehicle is fine. Charging breaks the day.",
    desc: "6:47 AM. 12 riders at 3 charging slots. Dispatch planner is hand-allocating bikes by SOC, not by route. Peak window opens in 13 minutes.",
  },
  {
    num: "02",
    label: "Quick Commerce",
    quote: "Charger pe line lagi hai.",
    desc: "Orders spike 40% in 11 minutes. 8 bikes below 20%. All at a public charger 2 km away. Margin burning in real-time.",
  },
  {
    num: "03",
    label: "Expansion Lead",
    quote: "Grid upgrades take 6 months.",
    desc: "You have the demand. You have the fleet. But the transformer upgrade is stuck in permits. Expansion is stalled by static wires.",
  },
] as const;

// ─── Operational Proof ────────────────────────────────────────────────────────

export const CASE_STUDIES = [
  {
    id: "euler",
    name: "Euler Motors",
    type: "OEM Partnership · Depot Hub",
    stats: [
      { label: "Uptime Rating", value: "99.9%" },
      { label: "Avg Battery", value: "12kWh" },
      { label: "Charge SOC", value: "20 min" },
    ],
    quote:
      "The MCI series unit isn't just a charger. It's an appointment. Our riders know exactly when their energy is coming, eliminating morning shift queues.",
    desc: "Integrated at Euler's main sorting hub. Supporting a 40-rider fleet across 3 daily shifts.",
    image: {
      src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=900&auto=format&fit=crop&q=85",
      alt: "Euler Motors depot hub with EV Recharge MCI unit deployed for fleet charging",
    },
  },
  {
    id: "delhivery",
    name: "Delhivery",
    type: "3PL Sorting Centre · Sorting hub",
    stats: [
      { label: "Deployment", value: "5 Days" },
      { label: "Grid Cost", value: "₹0" },
      { label: "Green Energy", value: "100%" },
    ],
    quote:
      "Deploying fixed charging at sorting centres takes months. EV Recharge was live in 5 days, powering our peak season last-mile surge without grid upgrades.",
    desc: "Multi-hub deployment covering cross-docking operations. 100% renewable energy audit trail provided.",
    image: {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&auto=format&fit=crop&q=85",
      alt: "Delhivery sorting centre with zero-grid EV charging infrastructure",
    },
  },
  {
    id: "zypp",
    name: "ZYPP Electric",
    type: "Last-Mile delivery · Urban Hub",
    stats: [
      { label: "Cost Savings", value: "40%" },
      { label: "Utilisation", value: "90%" },
      { label: "+28%", value: "Fleet Renewal" },
    ],
    quote:
      "We bundle the energy with the bike now. EV Recharge gives us the SLA we needed to make high-intensity urban hubs venture-profitable.",
    desc: "Subscription model integration. Powering 80+ daily users at key urban delivery hubs.",
    image: {
      src: "https://images.unsplash.com/photo-1617704548623-340376564e68?w=900&auto=format&fit=crop&q=85",
      alt: "ZYPP Electric urban hub powered by EV Recharge mobile charging infrastructure",
    },
  },
] as const;

// ─── Momentum Ticker ──────────────────────────────────────────────────────────

export const TICKER_ITEMS = [
  "Deployed 4 MCI units at Euler Motors Hub · March '26",
  "New Trial: ZYPP Electric Last-Mile Deployment · Feb '26",
  "99.8% Combined Uptime Rating across all micro-loops",
  "Delhi-NCR network expanded by 12km coverage",
  "Partnered with Delhivery for Peak Season Logistics",
  "MCI-Series 120kW units now TRL 7 certified",
] as const;

// ─── Lead Form ────────────────────────────────────────────────────────────────

export const FORM_PERSONAS = [
  {
    id: "Fleet Operator",
    title: "Fleet Operator",
    desc: "Last-mile, logistics, or quick commerce",
    icon: "🚚",
  },
  {
    id: "EV Leasing",
    title: "EV Leasing / OEM",
    desc: "Leasing EVs or manufacturing them",
    icon: "🔋",
  },
  {
    id: "Investor",
    title: "Investment Interest",
    desc: "HNI or institutional investor",
    icon: "📈",
  },
  {
    id: "Other",
    title: "Something Else",
    desc: "Media, partnership, or other",
    icon: "💬",
  },
] as const;

export const FORM_FLEET_SIZES = [
  { value: "lt20", label: "Under 20 vehicles" },
  { value: "20-50", label: "20–50 vehicles" },
  { value: "50-200", label: "50–200 vehicles" },
  { value: "gt500", label: "500+ vehicles" },
] as const;

export const FORM_WEBHOOK_URL = "/api/lead";

// ─── Footer ───────────────────────────────────────────────────────────────────

export const FOOTER_LINKS = {
  infrastructure: [
    { label: "EVR-MCI Series", href: "/#product" },
    { label: "Operational Proof", href: "/#proof" },
    { label: "ESG & Sustainability", href: "/#esg" },
  ],
  industries: [
    { label: "Last-Mile Delivery", href: "/#proof" },
    { label: "Quick Commerce", href: "/#proof" },
    { label: "3PL / Warehousing", href: "/#proof" },
    { label: "EV Leasing", href: "/#proof" },
  ],
  contact: [
    { label: "arpit@evrecharge.org", href: "mailto:arpit@evrecharge.org" },
    { label: "dewansh@evrecharge.org", href: "mailto:dewansh@evrecharge.org" },
  ],
} as const;
