import { 
  Facebook, 
  Instagram,
  Globe
} from "lucide-react";
import { translations } from "@/locales/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-[#0A1D36] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* 左侧：关于我们 */}
          <div className="space-y-6 md:pl-[10%]">
            <h3 className="text-2xl font-semibold relative pb-3 inline-block
              after:content-[''] after:absolute after:bottom-0 after:left-0
              after:w-16 after:h-0.5 after:bg-[#D2973F]">
              {t.about.title}
            </h3>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              {t.about.description}
            </p>
          </div>

          {/* 右侧：社交媒体和链接 */}
          <div className="flex flex-col md:justify-center items-center">
            <div className="flex gap-6">
              <a 
                href="https://www.facebook.com/share/15uDSyptg1/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center
                  hover:bg-[#D2973F] transition-all duration-300 group"
              >
                <Facebook className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.instagram.com/viptodaytravel?igsh=MW81ZmIxZ3JqOG84MQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center
                  hover:bg-[#D2973F] transition-all duration-300 group"
              >
                <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.viptoday.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center
                  hover:bg-[#D2973F] transition-all duration-300 group"
              >
                <Globe className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © VIPToday 2025 Copyright - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}