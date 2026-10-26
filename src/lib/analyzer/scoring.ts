import { getCategory } from "./categories";
import type {
  AnalyzerAnswers,
  AnalyzerReport,
  CategoryResult,
} from "./types";

/** Conservative share of the automatable portion an AI agent deployment
 * realistically recovers once live — never claim 100% of "automatable". */
const RECOVERY_EFFICIENCY = 0.7;

const WEEKS_PER_MONTH = 4.33;
const WEEKS_PER_YEAR = 52;

export function computeReport(answers: AnalyzerAnswers): AnalyzerReport {
  const categories: CategoryResult[] = answers.selectedCategories.map(
    (categoryId) => {
      const def = getCategory(categoryId);
      const answer = answers.categoryAnswers[categoryId];
      const hoursLostPerWeek = answer?.hoursPerWeek ?? 0;
      const painLevel = answer?.painLevel ?? 3;

      const moneyLostPerWeek = hoursLostPerWeek * answers.hourlyCost;
      const automatableHours = hoursLostPerWeek * def.automatableFraction;
      const recoverableHoursPerWeek = automatableHours * RECOVERY_EFFICIENCY;
      const recoverableMoneyPerWeek =
        recoverableHoursPerWeek * answers.hourlyCost;

      return {
        categoryId,
        hoursLostPerWeek,
        moneyLostPerWeek,
        moneyLostPerMonth: moneyLostPerWeek * WEEKS_PER_MONTH,
        recoverableHoursPerWeek,
        recoverableMoneyPerWeek,
        recoverableMoneyPerMonth: recoverableMoneyPerWeek * WEEKS_PER_MONTH,
        recoverableMoneyPerYear: recoverableMoneyPerWeek * WEEKS_PER_YEAR,
        painLevel,
      };
    },
  );

  const totalHoursLostPerWeek = sum(categories, (c) => c.hoursLostPerWeek);
  const totalRecoverableHoursPerWeek = sum(
    categories,
    (c) => c.recoverableHoursPerWeek,
  );
  const totalMoneyLostPerMonth = sum(categories, (c) => c.moneyLostPerMonth);
  const totalRecoverableMoneyPerMonth = sum(
    categories,
    (c) => c.recoverableMoneyPerMonth,
  );
  const totalRecoverableMoneyPerYear = sum(
    categories,
    (c) => c.recoverableMoneyPerYear,
  );

  const recoverableFraction =
    totalHoursLostPerWeek > 0
      ? totalRecoverableHoursPerWeek / totalHoursLostPerWeek
      : 0;
  const avgPain =
    categories.length > 0
      ? sum(categories, (c) => c.painLevel) / categories.length
      : 0;

  const dragScore = Math.round(
    clamp(recoverableFraction * 60 + (avgPain / 5) * 40, 0, 100),
  );

  return {
    companySize: answers.companySize,
    hourlyCost: answers.hourlyCost,
    categories: [...categories].sort(
      (a, b) => b.moneyLostPerMonth - a.moneyLostPerMonth,
    ),
    totals: {
      hoursLostPerWeek: totalHoursLostPerWeek,
      moneyLostPerMonth: totalMoneyLostPerMonth,
      recoverableMoneyPerMonth: totalRecoverableMoneyPerMonth,
      recoverableMoneyPerYear: totalRecoverableMoneyPerYear,
    },
    dragScore,
    dragLabel: dragLabelFor(dragScore),
  };
}

function dragLabelFor(score: number): AnalyzerReport["dragLabel"] {
  if (score < 30) return "Low";
  if (score < 55) return "Moderate";
  if (score < 80) return "High";
  return "Severe";
}

function sum<T>(items: T[], pick: (item: T) => number): number {
  return items.reduce((acc, item) => acc + pick(item), 0);
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
