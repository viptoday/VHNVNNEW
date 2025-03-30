import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

export default function GlobalReach() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="bg-primary text-white text-center py-8">
      <div className="container mx-auto px-4">
        <p className="text-lg">
          {t.globalReach.text}
        </p>
      </div>
    </section>
  );
}
