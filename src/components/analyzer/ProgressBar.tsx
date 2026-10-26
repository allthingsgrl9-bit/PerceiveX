const STEP_LABELS = ["Profile", "Areas", "Details", "Report"] as const;

export default function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex items-center justify-between">
        {STEP_LABELS.map((label, i) => {
          const isActive = i === step;
          const isDone = i < step;
          return (
            <div key={label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold transition ${
                    isDone
                      ? "bg-brand text-white"
                      : isActive
                        ? "border-2 border-brand text-brand-light"
                        : "border border-border-strong text-foreground-muted"
                  }`}
                >
                  {isDone ? "✓" : i + 1}
                </div>
                <span
                  className={`text-[11px] ${
                    isActive ? "text-foreground" : "text-foreground-muted"
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < STEP_LABELS.length - 1 && (
                <div
                  className={`mx-2 mb-4 h-px flex-1 ${
                    isDone ? "bg-brand" : "bg-border-subtle"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
