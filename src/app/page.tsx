import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { PainMoment } from "@/components/PainMoment";
import { BentoProduct } from "@/components/BentoProduct";
import { OperationalProof } from "@/components/OperationalProof";
import { ESGSection } from "@/components/ESGSection";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { MomentumTicker } from "@/components/MomentumTicker";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <PainMoment />
      <BentoProduct />
      <OperationalProof />
      <MomentumTicker />
      <ESGSection />
      <LeadForm />
      <Footer />
    </main>
  );
}
