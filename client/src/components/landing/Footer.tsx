import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1D36] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-3
              after:content-[''] after:absolute after:bottom-0 after:left-0
              after:w-12 after:h-0.5 after:bg-[#D2973F]">
              關於我們
            </h3>
            <p className="text-white/70 mb-6">
              VIPTODAY 致力於提供最頂級的越南旅遊體驗，
              讓每位旅客都能感受到尊貴與專業的服務。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center
                hover:bg-[#D2973F] transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center
                hover:bg-[#D2973F] transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center
                hover:bg-[#D2973F] transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center
                hover:bg-[#D2973F] transition-all duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-3
              after:content-[''] after:absolute after:bottom-0 after:left-0
              after:w-12 after:h-0.5 after:bg-[#D2973F]">
              快速連結
            </h3>
            <ul className="space-y-3">
              {['服務介紹', '機場服務', '簽證辦理', '包車服務', '客製行程'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-[#D2973F] hover:pl-1 transition-all duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-3
              after:content-[''] after:absolute after:bottom-0 after:left-0
              after:w-12 after:h-0.5 after:bg-[#D2973F]">
              熱門目的地
            </h3>
            <ul className="space-y-3">
              {['河內', '胡志明市', '峴港', '富國島', '下龍灣'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-[#D2973F] hover:pl-1 transition-all duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-3
              after:content-[''] after:absolute after:bottom-0 after:left-0
              after:w-12 after:h-0.5 after:bg-[#D2973F]">
              聯絡資訊
            </h3>
            <ul className="space-y-3 text-white/70">
              <li>電話: +84 123 456 789</li>
              <li>Email: info@viptoday.com</li>
              <li>地址: 越南河內市XXX區XXX街</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
          © 2024 VIPTODAY. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
