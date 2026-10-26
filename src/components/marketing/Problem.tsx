import { Clock, TrendingDown, EyeOff } from "lucide-react";

const POINTS = [
  {
    icon: Clock,
    title: "Time disappears into the gaps",
    body: "Support tickets, invoice matching, candidate screening, status reports — most teams never measure how many hours a week genuinely repeatable work actually costs them.",
  },
  {
    icon: EyeOff,
    title: "The waste is invisible until you look",
    body: "It doesn't show up as a line item. It shows up as missed deadlines, a support queue that never empties, and a team that feels busy but can't say why.",
  },
  {
    icon: TrendingDown,
    title: "It compounds as you grow",
    body: "Manual processes that were fine at 10 people quietly become the ceiling on growth at 50, and a governance risk at 500.",
  },
];

export default function Problem() {
  return (
    <section className="border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Every operation has a leak. Most never find it.
          </h2>
          <p className="mt-4 text-foreground-secondary">
            Not because the work is complicated — because nobody owns the job
            of measuring it, and the tools to fix it don&apos;t know your
            business.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {POINTS.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-border-subtle bg-surface p-6"
            >
              <point.icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-sm text-foreground-secondary">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
