import BlogSection from "@/components/BlogSection";
import CompanyRecords from "@/components/CompanyRecords";
import ConsultForm from "@/components/ConsultForm";
import EmrEhr from "@/components/EmrEhr";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Specialties from "@/components/Specialties";
import TrustStats from "@/components/TrustStats";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <ConsultForm />
      <Services />
      <TrustStats />
      <Specialties />
      <EmrEhr />
      <CompanyRecords />
      <Reviews />
      <BlogSection />
    </main>
  );
}
