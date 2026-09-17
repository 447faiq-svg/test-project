import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PilotOffer from "@/components/PilotOffer";
import Results from "@/components/Results";
import Services from "@/components/Services";
import Specialties from "@/components/Specialties";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Results />
      <HowItWorks />
      <Services />
      <Specialties />
      <Testimonials />
      <PilotOffer />
    </main>
  );
}
