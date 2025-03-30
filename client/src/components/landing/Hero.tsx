import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583417319070-4a69db38a482')] 
        bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1D36]/95 via-[#0A1D36]/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white space-y-6 ml-[5%]">
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.2] whitespace-pre tracking-normal">
            {t.hero.title}
          </h1>
          <p className="text-xl opacity-90">
            {t.hero.description}
          </p>
          <Button 
            size="lg"
            className="bg-[#C4A052] hover:bg-[#D4B254] hover:translate-y-[-3px] transition-all duration-300
            text-white font-semibold tracking-wider uppercase shadow-lg"
            onClick={() => window.location.href = '#booking'}
          >
            {t.hero.button}
          </Button>
        </div>
      </div>
    </section>
  );
}