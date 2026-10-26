import { Rocket, Building2, Globe2 } from "lucide-react";

const AUDIENCES = [
  {
    icon: Rocket,
    title: "Startups",
    subtitle: "Punch above your headcount",
    points: [
      "Run support, sales ops, and reporting without hiring ahead of revenue",
      "Launch your first agent in weeks, scoped to one real bottleneck",
      "Priced and scoped for a team watching runway",
    ],
  },
  {
    icon: Building2,
    title: "Small & growing companies",
    subtitle: "Scale without scaling headcount linearly",
    points: [
      "Standardize the repeatable parts of ops as new hires and processes multiply",
      "Roll agents out department by department, each one paying for the next",
      "Keep the operational knowledge in systems, not tribal memory",
    ],
  },
  {
    icon: Globe2,
    title: "Enterprises & MNCs",
    subtitle: "Modernize at scale, safely",
    points: [
      "Deploy across business units with security review, audit trails, and access controls",
      "Integrate with legacy and multi-region systems without a rip-and-replace",
      "Governance and change management built in from day one, not bolted on",
    ],
  },
];

export default function Audiences() {
  return (
    <section id="who-its-for" className="border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for every stage of operations
          </h2>
          <p className="mt-4 text-foreground-secondary">
            The gaps look different at 10 people, 100, and 10,000 — the
            approach doesn&apos;t.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {AUDIENCES.map((aud) => (
            <div
              key={aud.title}
              className="rounded-2xl border border-border-subtle bg-surface p-7"
            >
              <aud.icon className="h-7 w-7 text-brand-light" strokeWidth={1.75} />
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {aud.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-foreground-secondary">
                {aud.subtitle}
              </p>
              <ul className="mt-5 space-y-2.5">
                {aud.points.map((point) => (
                  <li
                    key={point}
                    className="border-t border-border-subtle pt-2.5 text-sm text-foreground-secondary first:border-t-0 first:pt-0"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
