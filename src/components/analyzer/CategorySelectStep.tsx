import { CATEGORIES } from "@/lib/analyzer/categories";
import type { CategoryId } from "@/lib/analyzer/categories";
import { Check } from "lucide-react";

interface Props {
  selected: CategoryId[];
  onToggle: (id: CategoryId) => void;
}

export default function CategorySelectStep({ selected, onToggle }: Props) {
  return (
    <div className="animate-fade-up">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        Where might the time be going?
      </h2>
      <p className="mt-2 text-sm text-foreground-secondary">
        Select every area that takes up real manual effort at your company.
        Pick as many as apply.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {CATEGORIES.map((cat) => {
          const isSelected = selected.includes(cat.id);
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onToggle(cat.id)}
              className={`flex items-start gap-3 rounded-xl border p-4 text-left transition ${
                isSelected
                  ? "border-brand-light bg-surface-hover"
                  : "border-border-subtle bg-surface hover:border-border-strong"
              }`}
            >
              <span
                className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${
                  isSelected
                    ? "bg-gradient-to-br from-brand to-accent text-white"
                    : "bg-background-raised text-foreground-muted"
                }`}
              >
                <cat.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-semibold text-foreground">
                  {cat.label}
                </span>
                <span className="mt-0.5 block text-xs text-foreground-muted">
                  {cat.prompt}
                </span>
              </span>
              <span
                className={`mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border ${
                  isSelected
                    ? "border-brand bg-brand text-white"
                    : "border-border-strong"
                }`}
              >
                {isSelected && <Check className="h-3 w-3" strokeWidth={3} />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
