import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import GlobalReach from "@/components/landing/GlobalReach";
import Airports from "@/components/landing/Airports";
import CustomTour from "@/components/landing/CustomTour";
import Booking from "@/components/landing/Booking";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-[#0F1F3F] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold tracking-[0.2em]">
              VIPTODAY
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
        <Booking />
      </main>

      <Footer />
    </div>
  );
}