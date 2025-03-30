import { Button } from "@/components/ui/button";
import { Compass, Star, Utensils, Users, Calendar, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const icons = [
  Compass,
  Star,
  Compass,
  Utensils,
  Users,
  Settings
];

export default function CustomTour() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-24 relative text-white">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583417319070-4a69db38a482')] 
        bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient
          from-[rgba(0,31,63,0.9)] to-[rgba(0,71,171,0.7)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 relative pb-4
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-20 after:h-1 after:bg-[#D2973F]">
            {t.customTour.title}
          </h2>
          <p className="text-xl opacity-90">
            {t.customTour.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {t.customTour.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div key={index} 
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6
                hover:bg-white/20 hover:translate-y-[-5px] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-6 w-6 text-[#D4B254]" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-white/80">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-[#D2973F] hover:bg-[#FF8534] hover:translate-y-[-3px] transition-all duration-300
            text-white font-semibold tracking-wider uppercase"
          >
            {t.customTour.button}
          </Button>
        </div>
      </div>
    </section>
  );
}
