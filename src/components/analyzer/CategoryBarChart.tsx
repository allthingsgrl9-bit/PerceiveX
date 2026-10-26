"use client";

import { useState } from "react";
import { Table2, BarChart3 } from "lucide-react";
import { getCategory } from "@/lib/analyzer/categories";
import type { CategoryResult } from "@/lib/analyzer/types";
import { formatCurrency, formatHours } from "@/lib/format";

const CHART_COLOR_VAR: Record<number, string> = {
  1: "var(--chart-1)",
  2: "var(--chart-2)",
  3: "var(--chart-3)",
  4: "var(--chart-4)",
  5: "var(--chart-5)",
  6: "var(--chart-6)",
  7: "var(--chart-7)",
  8: "var(--chart-8)",
};

export default function CategoryBarChart({
  categories,
}: {
  categories: CategoryResult[];
}) {
  const [view, setView] = useState<"chart" | "table">("chart");
  const [hovered, setHovered] = useState<string | null>(null);

  const max = Math.max(...categories.map((c) => c.moneyLostPerMonth), 1);

  return (
    <div
      className="viz-root rounded-2xl border border-border-subtle p-6"
      style={{ background: "var(--chart-surface)" }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3
            className="text-sm font-semibold"
            style={{ color: "var(--chart-ink-primary)" }}
          >
            Estimated money lost per month, by area
          </h3>
          <p
            className="mt-0.5 text-xs"
            style={{ color: "var(--chart-ink-muted)" }}
          >
            Sorted highest to lowest
          </p>
        </div>
        <button
          type="button"
          onClick={() => setView(view === "chart" ? "table" : "chart")}
          className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition"
          style={{
            borderColor: "var(--chart-baseline)",
            color: "var(--chart-ink-secondary)",
          }}
        >
          {view === "chart" ? (
            <>
              <Table2 className="h-3.5 w-3.5" /> Table view
            </>
          ) : (
            <>
              <BarChart3 className="h-3.5 w-3.5" /> Chart view
            </>
          )}
        </button>
      </div>

      {view === "chart" ? (
        <div className="mt-6 space-y-3">
          {categories.map((result) => {
            const cat = getCategory(result.categoryId);
            const pct = Math.max(
              4,
              Math.round((result.moneyLostPerMonth / max) * 100),
            );
            const isHovered = hovered === result.categoryId;
            return (
              <div
                key={result.categoryId}
                className="group relative"
                onMouseEnter={() => setHovered(result.categoryId)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(result.categoryId)}
                onBlur={() => setHovered(null)}
                tabIndex={0}
                role="img"
                aria-label={`${cat.label}: ${formatCurrency(
                  result.moneyLostPerMonth,
                )} lost per month, ${formatHours(
                  result.hoursLostPerWeek,
                )} per week`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span style={{ color: "var(--chart-ink-secondary)" }}>
                    {cat.label}
                  </span>
                  <span
                    className="font-medium tabular-nums"
                    style={{ color: "var(--chart-ink-primary)" }}
                  >
                    {formatCurrency(result.moneyLostPerMonth)}/mo
                  </span>
                </div>
                <div
                  className="mt-1.5 h-3 w-full overflow-hidden rounded-full"
                  style={{ background: "var(--chart-grid)" }}
                >
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${pct}%`,
                      background: CHART_COLOR_VAR[cat.colorSlot],
                      opacity: isHovered ? 1 : 0.88,
                    }}
                  />
                </div>

                {isHovered && (
                  <div
                    className="absolute left-0 top-full z-10 mt-1.5 rounded-lg border px-3 py-2 text-xs shadow-lg"
                    style={{
                      background: "var(--background-raised)",
                      borderColor: "var(--chart-baseline)",
                      color: "var(--chart-ink-primary)",
                    }}
                  >
                    <p className="font-semibold">{cat.label}</p>
                    <p
                      className="mt-1"
                      style={{ color: "var(--chart-ink-secondary)" }}
                    >
                      {formatHours(result.hoursLostPerWeek)}/week lost ·{" "}
                      {formatCurrency(result.moneyLostPerMonth)}/month
                    </p>
                    <p
                      className="mt-0.5"
                      style={{ color: "var(--chart-ink-muted)" }}
                    >
                      ~{formatCurrency(result.recoverableMoneyPerMonth)}
                      /month recoverable with an AI agent
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr
                className="border-b"
                style={{ borderColor: "var(--chart-baseline)" }}
              >
                {["Area", "Hrs lost/wk", "$ lost/mo", "$ recoverable/mo"].map(
                  (h) => (
                    <th
                      key={h}
                      className="whitespace-nowrap py-2 pr-4 font-medium"
                      style={{ color: "var(--chart-ink-muted)" }}
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {categories.map((result) => {
                const cat = getCategory(result.categoryId);
                return (
                  <tr
                    key={result.categoryId}
                    className="border-b"
                    style={{ borderColor: "var(--chart-grid)" }}
                  >
                    <td
                      className="whitespace-nowrap py-2 pr-4"
                      style={{ color: "var(--chart-ink-primary)" }}
                    >
                      {cat.label}
                    </td>
                    <td
                      className="whitespace-nowrap py-2 pr-4 tabular-nums"
                      style={{ color: "var(--chart-ink-secondary)" }}
                    >
                      {formatHours(result.hoursLostPerWeek)}
                    </td>
                    <td
                      className="whitespace-nowrap py-2 pr-4 tabular-nums"
                      style={{ color: "var(--chart-ink-secondary)" }}
                    >
                      {formatCurrency(result.moneyLostPerMonth)}
                    </td>
                    <td
                      className="whitespace-nowrap py-2 pr-4 tabular-nums"
                      style={{ color: "var(--chart-ink-secondary)" }}
                    >
                      {formatCurrency(result.recoverableMoneyPerMonth)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
