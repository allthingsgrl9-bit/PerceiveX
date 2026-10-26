import type { CategoryId } from "./categories";

export type CompanySizeId = "micro" | "small" | "mid" | "enterprise";

export interface CompanySizeOption {
  id: CompanySizeId;
  label: string;
  range: string;
  segmentLabel: string;
  defaultHourlyCost: number;
}

export interface CategoryAnswer {
  categoryId: CategoryId;
  hoursPerWeek: number;
  peopleInvolved: number;
  painLevel: number; // 1-5
}

export interface AnalyzerAnswers {
  companySize: CompanySizeId;
  hourlyCost: number;
  selectedCategories: CategoryId[];
  categoryAnswers: Record<string, CategoryAnswer>;
}

export interface CategoryResult {
  categoryId: CategoryId;
  hoursLostPerWeek: number;
  moneyLostPerWeek: number;
  moneyLostPerMonth: number;
  recoverableHoursPerWeek: number;
  recoverableMoneyPerWeek: number;
  recoverableMoneyPerMonth: number;
  recoverableMoneyPerYear: number;
  painLevel: number;
}

export interface AnalyzerReport {
  companySize: CompanySizeId;
  hourlyCost: number;
  categories: CategoryResult[];
  totals: {
    hoursLostPerWeek: number;
    moneyLostPerMonth: number;
    recoverableMoneyPerMonth: number;
    recoverableMoneyPerYear: number;
  };
  dragScore: number; // 0-100
  dragLabel: "Low" | "Moderate" | "High" | "Severe";
}
