import type { CompanySizeOption } from "./types";

export const COMPANY_SIZES: CompanySizeOption[] = [
  {
    id: "micro",
    label: "1–10 people",
    range: "1–10",
    segmentLabel: "early-stage startup",
    defaultHourlyCost: 35,
  },
  {
    id: "small",
    label: "11–50 people",
    range: "11–50",
    segmentLabel: "small company",
    defaultHourlyCost: 40,
  },
  {
    id: "mid",
    label: "51–500 people",
    range: "51–500",
    segmentLabel: "growing company",
    defaultHourlyCost: 45,
  },
  {
    id: "enterprise",
    label: "500+ people",
    range: "500+",
    segmentLabel: "enterprise",
    defaultHourlyCost: 55,
  },
];

export function getCompanySize(id: string): CompanySizeOption {
  const size = COMPANY_SIZES.find((s) => s.id === id);
  if (!size) throw new Error(`Unknown company size: ${id}`);
  return size;
}
