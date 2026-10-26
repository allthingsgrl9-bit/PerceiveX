import type { Metadata } from "next";
import AnalyzerApp from "@/components/analyzer/AnalyzerApp";

export const metadata: Metadata = {
  title: "Operations Analyzer — PerceiveX",
  description:
    "Find out in 3 minutes where your operations are losing time and money, and which AI agents would close the gap.",
};

export default function AnalyzerPage() {
  return <AnalyzerApp />;
}
