import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="border-t border-border-subtle bg-grid">
      <div className="brand-glow relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Stop guessing where the waste is.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-foreground-secondary">
          Run the free Operations Analyzer and get a real breakdown in the
          next three minutes — then talk to us about closing it.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/analyzer"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-light sm:w-auto"
          >
            Run the free Operations Analyzer
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <a
            href="mailto:hello@perceivex.ai"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-surface sm:w-auto"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
