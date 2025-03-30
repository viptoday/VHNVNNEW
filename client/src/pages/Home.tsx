import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import GlobalReach from "@/components/landing/GlobalReach";
import Airports from "@/components/landing/Airports";
import CustomTour from "@/components/landing/CustomTour";
import Booking from "@/components/landing/Booking";
import Footer from "@/components/landing/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-[#0F1F3F] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold tracking-[0.2em]">
              VIPTODAY
            </div>
            <div className="flex items-center gap-8">
              <div className="text-sm tracking-wide opacity-90">
                {t.slogan}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Button
                  variant="ghost"
                  className={`px-2 py-1 hover:bg-transparent ${language === 'en' ? 'text-white' : 'text-white/50 hover:text-white'}`}
                  onClick={() => setLanguage('en')}
                >
                  EN
                </Button>
                <span className="text-white/50">|</span>
                <Button
                  variant="ghost"
                  className={`px-2 py-1 hover:bg-transparent ${language === 'cn' ? 'text-white' : 'text-white/50 hover:text-white'}`}
                  onClick={() => setLanguage('cn')}
                >
                  CN
                </Button>
              </div>
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