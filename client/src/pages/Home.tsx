import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import GlobalReach from "@/components/landing/GlobalReach";
import Airports from "@/components/landing/Airports";
import CustomTour from "@/components/landing/CustomTour";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-primary to-[#0F6E9A] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold tracking-wider">
              VIP<span className="text-[#D4B254]">TODAY</span>
            </div>
            <div className="text-sm tracking-wide opacity-90">
              Beyond travel, into experience
            </div>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <GlobalReach />
        <Services />
        <Airports />
        <CustomTour />
      </main>

      <Footer />
    </div>
  );
}
