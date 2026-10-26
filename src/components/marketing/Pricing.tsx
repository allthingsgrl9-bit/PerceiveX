import { Check } from "lucide-react";

const TIERS = [
  {
    name: "Pilot Sprint",
    audience: "Startups & small teams",
    description: "One AI agent, scoped to your single biggest bottleneck.",
    features: [
      "Operations audit + Analyzer deep-dive",
      "One AI agent, designed and deployed",
      "Integrated into your existing tools",
      "2–4 week turnaround",
    ],
    cta: "Get a custom quote",
    highlight: false,
  },
  {
    name: "Department Rollout",
    audience: "Small & growing companies",
    description: "Multiple agents across the functions losing you the most.",
    features: [
      "Everything in Pilot Sprint",
      "Agents across 2–4 operational areas",
      "Shared dashboards for ops visibility",
      "Ongoing tuning as workflows evolve",
    ],
    cta: "Get a custom quote",
    highlight: true,
  },
  {
    name: "Enterprise Program",
    audience: "MNCs & large organizations",
    description: "Governed, audited AI deployment across business units.",
    features: [
      "Everything in Department Rollout",
      "Security review, SSO & access controls",
      "Multi-region & legacy system integration",
      "Dedicated implementation & change management",
    ],
    cta: "Talk to us",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Scoped to the problem, not a seat count
          </h2>
          <p className="mt-4 text-foreground-secondary">
            Every engagement starts with the audit, so you know exactly what
            you&apos;re paying to fix before we scope the work. Custom
            pricing — no generic SaaS tiers.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                tier.highlight
                  ? "border-brand-light bg-surface shadow-[0_0_0_1px_rgba(109,91,245,0.3)]"
                  : "border-border-subtle bg-surface"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold text-white">
                  Most common
                </span>
              )}
              <p className="text-xs font-medium uppercase tracking-wide text-accent">
                {tier.audience}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-foreground-secondary">
                {tier.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-sm text-foreground-secondary"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-light" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:hello@perceivex.ai?subject=${encodeURIComponent(
                  `${tier.name} — scoping call`,
                )}`}
                className={`mt-7 flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  tier.highlight
                    ? "bg-brand text-white hover:bg-brand-light"
                    : "border border-border-strong text-foreground hover:bg-surface-hover"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
