import { Headset, Receipt, Users } from "lucide-react";

const SCENARIOS = [
  {
    icon: Headset,
    company: "A 40-person logistics startup",
    before: "3 people spent ~25 hrs/week triaging the same shipment-status tickets",
    after: "A support agent resolved the repeatable ~70% instantly; the team now only handles real exceptions",
  },
  {
    icon: Receipt,
    company: "A 150-person retail company",
    before: "Finance manually matched invoices to POs across 4 disconnected systems",
    after: "A finance ops agent reconciles automatically and flags only true mismatches for review",
  },
  {
    icon: Users,
    company: "A multi-region enterprise division",
    before: "Recruiters screened hundreds of applications by hand per open role",
    after: "A screening agent shortlists against the role's bar, with full audit trail for compliance",
  },
];

export default function Scenarios() {
  return (
    <section className="border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What this looks like in practice
          </h2>
          <p className="mt-4 text-foreground-secondary">
            Illustrative scenarios based on the kind of gaps we build agents
            for — not claimed results from a specific client.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SCENARIOS.map((s) => (
            <div
              key={s.company}
              className="rounded-2xl border border-border-subtle bg-surface p-7"
            >
              <s.icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {s.company}
              </h3>
              <div className="mt-4 space-y-3 text-sm">
                <p className="text-foreground-muted">
                  <span className="font-medium text-foreground-secondary">
                    Before —{" "}
                  </span>
                  {s.before}
                </p>
                <p className="text-foreground-secondary">
                  <span className="font-medium text-accent">After — </span>
                  {s.after}
                </p>
              </div>
              <span className="mt-5 inline-block rounded-full bg-background-raised px-3 py-1 text-[11px] font-medium text-foreground-muted">
                Illustrative example
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
