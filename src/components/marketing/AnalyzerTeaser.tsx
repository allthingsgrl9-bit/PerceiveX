import Link from "next/link";
import { ArrowRight, Gauge, Clock3, PiggyBank } from "lucide-react";

export default function AnalyzerTeaser() {
  return (
    <section className="border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-3 py-1 text-xs font-medium text-accent">
              Free tool
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Not sure where your gap is? Find it in 3 minutes.
            </h2>
            <p className="mt-4 text-foreground-secondary">
              The Operations Analyzer walks through the areas where
              businesses typically bleed time — support, sales, data entry,
              finance, HR, reporting, IT, supply chain — and turns your
              answers into a real breakdown of hours and dollars at stake,
              plus which AI agent would close each gap first.
            </p>
            <Link
              href="/analyzer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-light"
            >
              Run the Operations Analyzer
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-wide text-foreground-muted">
              Sample report preview
            </p>
            <div className="mt-5 grid grid-cols-3 gap-4">
              <StatPreview icon={Clock3} label="Hours lost / wk" value="38" />
              <StatPreview icon={PiggyBank} label="$ lost / mo" value="$24,900" />
              <StatPreview icon={Gauge} label="Drag score" value="High" />
            </div>
            <div className="mt-6 space-y-3">
              {[
                { label: "Customer support", pct: 85 },
                { label: "Data entry", pct: 65 },
                { label: "Finance & invoicing", pct: 45 },
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between text-xs text-foreground-muted">
                    <span>{row.label}</span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-background-raised">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand to-accent"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatPreview({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock3;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-background-raised p-3 text-center">
      <Icon className="mx-auto h-4 w-4 text-brand-light" />
      <p className="mt-2 text-lg font-semibold text-foreground">{value}</p>
      <p className="mt-0.5 text-[10px] text-foreground-muted">{label}</p>
    </div>
  );
}
