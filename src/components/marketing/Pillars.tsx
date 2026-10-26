import { BrainCircuit, Bot, LayoutGrid, Check } from "lucide-react";

const PILLARS = [
  {
    icon: BrainCircuit,
    title: "Custom AI",
    tagline: "Built on your data, not a generic prompt.",
    points: [
      "Models and pipelines trained around how your business actually runs",
      "Fits your terminology, your edge cases, your compliance needs",
      "No black box — you see exactly what it's doing and why",
    ],
  },
  {
    icon: Bot,
    title: "AI Agents",
    tagline: "They don't just answer — they finish the task.",
    points: [
      "Multi-step agents that triage, process, reconcile, and follow up end-to-end",
      "Plugged into your real tools: CRM, helpdesk, ERP, Slack, email",
      "Guardrails and escalation paths so humans stay in control of what matters",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Software",
    tagline: "The dashboards and tools your team actually opens.",
    points: [
      "Internal tools and dashboards built around the workflow, not a generic SaaS UI",
      "Integrates with what you already use — no rip-and-replace",
      "Ships fast, iterates on real usage, owned by you",
    ],
  },
];

export default function Pillars() {
  return (
    <section id="product" className="border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            One team. Three things that compound together.
          </h2>
          <p className="mt-4 text-foreground-secondary">
            We don&apos;t sell a single tool. We build whichever combination
            of these actually closes your specific gap.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col rounded-2xl border border-border-subtle bg-surface p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-accent text-white">
                <pillar.icon className="h-5.5 w-5.5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {pillar.tagline}
              </p>
              <ul className="mt-5 flex-1 space-y-3">
                {pillar.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-foreground-secondary">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-light" />
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
