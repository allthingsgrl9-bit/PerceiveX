"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCompanySize } from "@/lib/analyzer/companySizes";
import { computeReport } from "@/lib/analyzer/scoring";
import type {
  AnalyzerAnswers,
  CategoryAnswer,
  CompanySizeId,
} from "@/lib/analyzer/types";
import type { CategoryId } from "@/lib/analyzer/categories";
import ProgressBar from "./ProgressBar";
import CompanyProfileStep from "./CompanyProfileStep";
import CategorySelectStep from "./CategorySelectStep";
import CategoryDetailsStep from "./CategoryDetailsStep";
import Report from "./Report";

type Step = 0 | 1 | 2 | 3;

const INITIAL_ANSWERS: AnalyzerAnswers = {
  companySize: "small",
  hourlyCost: getCompanySize("small").defaultHourlyCost,
  selectedCategories: [],
  categoryAnswers: {},
};

export default function AnalyzerApp() {
  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<AnalyzerAnswers>(INITIAL_ANSWERS);

  const report = useMemo(() => computeReport(answers), [answers]);

  function handleSizeChange(id: CompanySizeId) {
    setAnswers((prev) => ({
      ...prev,
      companySize: id,
      hourlyCost: getCompanySize(id).defaultHourlyCost,
    }));
  }

  function handleCostChange(cost: number) {
    setAnswers((prev) => ({ ...prev, hourlyCost: cost }));
  }

  function handleToggleCategory(id: CategoryId) {
    setAnswers((prev) => {
      const isSelected = prev.selectedCategories.includes(id);
      const selectedCategories = isSelected
        ? prev.selectedCategories.filter((c) => c !== id)
        : [...prev.selectedCategories, id];

      const categoryAnswers = { ...prev.categoryAnswers };
      if (!isSelected && !categoryAnswers[id]) {
        categoryAnswers[id] = {
          categoryId: id,
          hoursPerWeek: 10,
          peopleInvolved: 2,
          painLevel: 3,
        };
      }

      return { ...prev, selectedCategories, categoryAnswers };
    });
  }

  function handleDetailChange(id: CategoryId, patch: Partial<CategoryAnswer>) {
    setAnswers((prev) => ({
      ...prev,
      categoryAnswers: {
        ...prev.categoryAnswers,
        [id]: {
          ...(prev.categoryAnswers[id] ?? {
            categoryId: id,
            hoursPerWeek: 10,
            peopleInvolved: 2,
            painLevel: 3,
          }),
          ...patch,
        },
      },
    }));
  }

  function handleRestart() {
    setAnswers(INITIAL_ANSWERS);
    setStep(0);
  }

  const canAdvance =
    step !== 1 || answers.selectedCategories.length > 0;

  return (
    <div className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
      {step < 3 && (
        <div className="mb-12">
          <ProgressBar step={step} />
        </div>
      )}

      {step === 0 && (
        <CompanyProfileStep
          companySize={answers.companySize}
          hourlyCost={answers.hourlyCost}
          onChangeSize={handleSizeChange}
          onChangeCost={handleCostChange}
        />
      )}

      {step === 1 && (
        <CategorySelectStep
          selected={answers.selectedCategories}
          onToggle={handleToggleCategory}
        />
      )}

      {step === 2 && (
        <CategoryDetailsStep
          selected={answers.selectedCategories}
          answers={answers.categoryAnswers}
          onChange={handleDetailChange}
        />
      )}

      {step === 3 && <Report report={report} onRestart={handleRestart} />}

      {step < 3 && (
        <div className="mt-10 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1) as Step)}
            disabled={step === 0}
            className="flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium text-foreground-secondary transition disabled:opacity-0"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(3, s + 1) as Step)}
            disabled={!canAdvance}
            className="flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-40"
          >
            {step === 2 ? "See my results" : "Continue"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
