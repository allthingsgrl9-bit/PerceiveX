import type { ComponentType } from "react";

interface Props {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  tone?: "default" | "accent";
}

export default function StatTile({
  icon: Icon,
  label,
  value,
  tone = "default",
}: Props) {
  return (
    <div className="rounded-2xl border border-border-subtle bg-surface p-5">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
          tone === "accent"
            ? "bg-gradient-to-br from-brand to-accent text-white"
            : "bg-background-raised text-foreground-muted"
        }`}
      >
        <Icon className="h-4.5 w-4.5" />
      </div>
      <p className="mt-4 text-2xl font-semibold tabular-nums text-foreground">
        {value}
      </p>
      <p className="mt-1 text-xs text-foreground-muted">{label}</p>
    </div>
  );
}
