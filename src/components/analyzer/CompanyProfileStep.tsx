import { COMPANY_SIZES } from "@/lib/analyzer/companySizes";
import type { CompanySizeId } from "@/lib/analyzer/types";

interface Props {
  companySize: CompanySizeId;
  hourlyCost: number;
  onChangeSize: (id: CompanySizeId) => void;
  onChangeCost: (cost: number) => void;
}

export default function CompanyProfileStep({
  companySize,
  hourlyCost,
  onChangeSize,
  onChangeCost,
}: Props) {
  return (
    <div className="animate-fade-up">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        Tell us about your team
      </h2>
      <p className="mt-2 text-sm text-foreground-secondary">
        This sets a realistic baseline — nothing here is stored or shared.
      </p>

      <p className="mt-8 text-sm font-medium text-foreground">
        How many people work at your company?
      </p>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {COMPANY_SIZES.map((size) => {
          const selected = size.id === companySize;
          return (
            <button
              key={size.id}
              type="button"
              onClick={() => onChangeSize(size.id)}
              className={`rounded-xl border px-4 py-4 text-left transition ${
                selected
                  ? "border-brand-light bg-surface-hover"
                  : "border-border-subtle bg-surface hover:border-border-strong"
              }`}
            >
              <span className="block text-sm font-semibold text-foreground">
                {size.label}
              </span>
              <span className="mt-0.5 block text-xs text-foreground-muted capitalize">
                {size.segmentLabel}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        <label
          htmlFor="hourly-cost"
          className="text-sm font-medium text-foreground"
        >
          Average fully-loaded hourly cost per person
        </label>
        <p className="mt-1 text-xs text-foreground-muted">
          Salary + benefits + overhead, divided by hours worked. We&apos;ve
          set a reasonable default — adjust if you know your number.
        </p>
        <div className="mt-3 flex items-center gap-3">
          <span className="text-sm text-foreground-muted">$</span>
          <input
            id="hourly-cost"
            type="number"
            min={10}
            max={300}
            value={hourlyCost}
            onChange={(e) => onChangeCost(Number(e.target.value) || 0)}
            className="w-28 rounded-lg border border-border-subtle bg-surface px-3 py-2 text-sm text-foreground outline-none focus:border-brand-light"
          />
          <span className="text-sm text-foreground-muted">/ hour</span>
        </div>
      </div>
    </div>
  );
}
