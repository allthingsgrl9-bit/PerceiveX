import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <div className="brand-glow absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-24 text-center sm:pt-28 sm:pb-32">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-1.5 text-xs font-medium text-foreground-secondary">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Custom AI agents &amp; software for operations teams
        </div>

        <h1
          className="animate-fade-up mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
          style={{ animationDelay: "60ms" }}
        >
          Find out where your business is{" "}
          <span className="bg-gradient-to-r from-brand-light to-accent bg-clip-text text-transparent">
            quietly losing
          </span>{" "}
          time and money.
        </h1>

        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary"
          style={{ animationDelay: "120ms" }}
        >
          PerceiveX builds custom AI, AI agents, and software that pinpoint
          exactly where your operations leak — then closes the gap. Your team
          moves faster. Your costs come down.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "180ms" }}
        >
          <Link
            href="/analyzer"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-light sm:w-auto"
          >
            Run the free Operations Analyzer
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/#how-it-works"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-surface sm:w-auto"
          >
            See how it works
          </Link>
        </div>

        <p
          className="animate-fade-up mt-5 text-xs text-foreground-muted"
          style={{ animationDelay: "220ms" }}
        >
          No signup. Takes about 3 minutes. Get a real breakdown, not a sales
          deck.
        </p>
      </div>
    </section>
  );
}
