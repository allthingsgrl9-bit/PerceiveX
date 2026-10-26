export function formatCurrency(value: number): string {
  if (value >= 1000) {
    return `$${Math.round(value).toLocaleString("en-US")}`;
  }
  return `$${value.toFixed(0)}`;
}

export function formatHours(value: number): string {
  return `${Math.round(value * 10) / 10} hrs`;
}
