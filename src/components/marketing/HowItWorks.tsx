import { ScanSearch, Blocks, Rocket, RefreshCw } from "lucide-react";

const STEPS = [
  {
    icon: ScanSearch,
    title: "Diagnose",
    body: "We map where time and money actually leak — starting with the free Operations Analyzer, then a deeper audit of your workflows and systems.",
  },
  {
    icon: Blocks,
    title: "Design",
    body: "We architect the specific AI agent or software for your highest-leverage gap first — not a platform you have to configure yourself.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    body: "It ships into your existing stack — CRM, helpdesk, ERP, Slack, email — with guardrails and escalation paths your team controls.",
  },
  {
    icon: RefreshCw,
    title: "Compound",
    body: "Once ROI is proven, we expand coverage to the next bottleneck. Each deployment makes the next one faster.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-foreground-secondary">
            A straight line from &ldquo;where is the waste&rdquo; to
            &ldquo;it&apos;s fixed&rdquo; — in weeks, not quarters.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.title} className="relative bg-surface p-7">
              <span className="text-xs font-mono text-foreground-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <step.icon
                className="mt-4 h-6 w-6 text-accent"
                strokeWidth={1.75}
              />
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-foreground-secondary">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
