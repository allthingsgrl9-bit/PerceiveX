import { Clock3, PiggyBank, Gauge, Sparkles, RotateCcw } from "lucide-react";
import type { AnalyzerReport } from "@/lib/analyzer/types";
import { formatCurrency, formatHours } from "@/lib/format";
import StatTile from "./StatTile";
import CategoryBarChart from "./CategoryBarChart";
import CategoryReportCard from "./CategoryReportCard";

const DRAG_TONE: Record<AnalyzerReport["dragLabel"], string> = {
  Low: "var(--status-good)",
  Moderate: "var(--status-warning)",
  High: "var(--status-serious)",
  Severe: "var(--status-critical)",
};

export default function Report({
  report,
  onRestart,
}: {
  report: AnalyzerReport;
  onRestart: () => void;
}) {
  const mailBody = encodeURIComponent(
    `My PerceiveX Operations Analyzer results:\n\n` +
      `Hours lost per week: ${formatHours(report.totals.hoursLostPerWeek)}\n` +
      `Estimated $ lost per month: ${formatCurrency(report.totals.moneyLostPerMonth)}\n` +
      `Potential recoverable savings: ${formatCurrency(report.totals.recoverableMoneyPerMonth)}/month (${formatCurrency(report.totals.recoverableMoneyPerYear)}/year)\n` +
      `Operational drag score: ${report.dragScore}/100 (${report.dragLabel})\n\n` +
      `Breakdown:\n` +
      report.categories
        .map(
          (c) =>
            `- ${c.categoryId}: ${formatHours(c.hoursLostPerWeek)}/wk, ${formatCurrency(c.moneyLostPerMonth)}/mo`,
        )
        .join("\n"),
  );

  return (
    <div className="animate-fade-up">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-1.5 text-xs font-medium text-accent">
          <Sparkles className="h-3.5 w-3.5" />
          Your results
        </span>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Here&apos;s where it&apos;s going
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-foreground-secondary">
          Estimates based on what you entered and typical automation rates
          for each area. A real audit would sharpen these numbers — this is
          your starting point.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatTile
          icon={Clock3}
          label="Hours lost / week"
          value={formatHours(report.totals.hoursLostPerWeek)}
        />
        <StatTile
          icon={PiggyBank}
          label="$ lost / month"
          value={formatCurrency(report.totals.moneyLostPerMonth)}
        />
        <StatTile
          icon={Sparkles}
          label="Recoverable / year"
          value={formatCurrency(report.totals.recoverableMoneyPerYear)}
          tone="accent"
        />
        <div className="rounded-2xl border border-border-subtle bg-surface p-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-background-raised">
            <Gauge
              className="h-4.5 w-4.5"
              style={{ color: DRAG_TONE[report.dragLabel] }}
            />
          </div>
          <p
            className="mt-4 text-2xl font-semibold"
            style={{ color: DRAG_TONE[report.dragLabel] }}
          >
            {report.dragLabel}
          </p>
          <p className="mt-1 text-xs text-foreground-muted">
            Operational drag ({report.dragScore}/100)
          </p>
        </div>
      </div>

      <div className="mt-6">
        <CategoryBarChart categories={report.categories} />
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold text-foreground">
          Recommended agents, by area
        </h3>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {report.categories.map((result) => (
            <CategoryReportCard key={result.categoryId} result={result} />
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-border-subtle bg-surface p-8 text-center">
        <h3 className="text-xl font-semibold text-foreground">
          Want help closing these gaps?
        </h3>
        <p className="max-w-md text-sm text-foreground-secondary">
          Send yourself this breakdown, or talk to us about turning it into a
          real roadmap.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:?subject=${encodeURIComponent(
              "My PerceiveX Operations Analyzer results",
            )}&body=${mailBody}`}
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-light"
          >
            Email me this report
          </a>
          <a
            href="mailto:hello@perceivex.ai?subject=Let's%20close%20these%20gaps"
            className="rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-surface-hover"
          >
            Talk to PerceiveX
          </a>
        </div>
        <button
          type="button"
          onClick={onRestart}
          className="mt-2 flex items-center gap-1.5 text-xs text-foreground-muted transition hover:text-foreground"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Run it again
        </button>
      </div>
    </div>
  );
}
