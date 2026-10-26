import { getCategory, type CategoryId } from "@/lib/analyzer/categories";
import type { CategoryAnswer } from "@/lib/analyzer/types";

const PAIN_LABELS = ["Rare", "Occasional", "Regular", "Frequent", "Constant"];

interface Props {
  selected: CategoryId[];
  answers: Record<string, CategoryAnswer>;
  onChange: (id: CategoryId, patch: Partial<CategoryAnswer>) => void;
}

export default function CategoryDetailsStep({
  selected,
  answers,
  onChange,
}: Props) {
  return (
    <div className="animate-fade-up">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        Give us rough numbers
      </h2>
      <p className="mt-2 text-sm text-foreground-secondary">
        Estimates are fine — this isn&apos;t an audit, it&apos;s a starting
        point.
      </p>

      <div className="mt-8 space-y-5">
        {selected.map((id) => {
          const cat = getCategory(id);
          const answer = answers[id] ?? {
            categoryId: id,
            hoursPerWeek: 10,
            peopleInvolved: 2,
            painLevel: 3,
          };
          return (
            <div
              key={id}
              className="rounded-xl border border-border-subtle bg-surface p-5"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-background-raised text-foreground-muted">
                  <cat.icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <h3 className="text-sm font-semibold text-foreground">
                  {cat.label}
                </h3>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-3">
                <SliderField
                  label="Hours / week, combined"
                  value={answer.hoursPerWeek}
                  min={1}
                  max={80}
                  step={1}
                  displayValue={`${answer.hoursPerWeek} hrs`}
                  onChange={(v) => onChange(id, { hoursPerWeek: v })}
                />
                <SliderField
                  label="People involved"
                  value={answer.peopleInvolved}
                  min={1}
                  max={25}
                  step={1}
                  displayValue={`${answer.peopleInvolved}`}
                  onChange={(v) => onChange(id, { peopleInvolved: v })}
                />
                <SliderField
                  label="How often it causes delays"
                  value={answer.painLevel}
                  min={1}
                  max={5}
                  step={1}
                  displayValue={PAIN_LABELS[answer.painLevel - 1]}
                  onChange={(v) => onChange(id, { painLevel: v })}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  displayValue,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  displayValue: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-xs text-foreground-muted">{label}</label>
        <span className="text-xs font-semibold text-accent">
          {displayValue}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="analyzer-slider mt-2 w-full"
      />
    </div>
  );
}
