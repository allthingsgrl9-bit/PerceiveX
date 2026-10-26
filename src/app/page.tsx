import Hero from "@/components/marketing/Hero";
import Problem from "@/components/marketing/Problem";
import Pillars from "@/components/marketing/Pillars";
import HowItWorks from "@/components/marketing/HowItWorks";
import Audiences from "@/components/marketing/Audiences";
import AnalyzerTeaser from "@/components/marketing/AnalyzerTeaser";
import Scenarios from "@/components/marketing/Scenarios";
import Pricing from "@/components/marketing/Pricing";
import FAQ from "@/components/marketing/FAQ";
import FinalCTA from "@/components/marketing/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Pillars />
      <HowItWorks />
      <Audiences />
      <AnalyzerTeaser />
      <Scenarios />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
