import { getCategory } from "@/lib/analyzer/categories";
import type { CategoryResult } from "@/lib/analyzer/types";
import { formatCurrency, formatHours } from "@/lib/format";

export default function CategoryReportCard({
  result,
}: {
  result: CategoryResult;
}) {
  const cat = getCategory(result.categoryId);

  return (
    <div className="rounded-2xl border border-border-subtle bg-surface p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-background-raised text-foreground-muted">
            <cat.icon className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {cat.label}
            </h3>
            <p className="text-xs text-foreground-muted">
              {formatHours(result.hoursLostPerWeek)}/week ·{" "}
              {formatCurrency(result.moneyLostPerMonth)}/month
            </p>
          </div>
        </div>
        <span className="whitespace-nowrap rounded-full bg-background-raised px-3 py-1 text-xs font-medium text-accent">
          ~{formatCurrency(result.recoverableMoneyPerYear)}/yr recoverable
        </span>
      </div>

      <div className="mt-5 rounded-xl border border-border-subtle bg-background-raised p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-light">
          Recommended: {cat.agent.name}
        </p>
        <p className="mt-1.5 text-sm text-foreground-secondary">
          {cat.agent.description}
        </p>
      </div>
    </div>
  );
}
