"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How is this different from ChatGPT or a generic AI tool?",
    a: "Generic tools answer questions. Our agents are built around your specific workflows and systems, run multi-step tasks end-to-end, and are integrated directly into the tools you already use — not a chat window your team has to remember to open.",
  },
  {
    q: "What about data security and privacy?",
    a: "You own your data and the agents we build. We scope access tightly to what each agent needs, support SSO and audit trails for enterprise deployments, and never train shared models on your data.",
  },
  {
    q: "How long does implementation take?",
    a: "A first agent, scoped to one bottleneck, typically ships in 2–4 weeks. Larger, multi-department or enterprise rollouts are phased so you see value early rather than waiting for one big launch.",
  },
  {
    q: "What systems do you integrate with?",
    a: "Common CRMs, helpdesks, ERPs, HRIS platforms, Slack, email, and most systems with an API or a reliable way to automate. We assess your specific stack during the audit before scoping anything.",
  },
  {
    q: "Who owns the agents and software once it's built?",
    a: "You do. We're not renting you access to a platform — we build the agent or tool for your business, and it's yours to keep, extend, and run.",
  },
  {
    q: "How do we know it's actually working?",
    a: "Every deployment ships with the same kind of measurement the Analyzer uses: hours and dollars recovered, tracked against the baseline we established during the audit — not a vague productivity claim.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-border-subtle">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          Questions, answered
        </h2>

        <div className="mt-12 divide-y divide-border-subtle">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="py-5">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-foreground sm:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 text-foreground-muted transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm text-foreground-secondary">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
