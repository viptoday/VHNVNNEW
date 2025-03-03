import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1D36] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold mb-4 relative pb-3
              after:content-[''] after:absolute after:bottom-0 after:left-0
              after:w-12 after:h-0.5 after:bg-[#D2973F]">
              關於我們
            </h3>
            <p className="text-white/70">
              VIPTODAY：量身打造您的完美旅程，用專業與貼心開啟難忘的旅行體驗。
              我們致力於為每位旅客量身定制最優質的旅遊服務，確保您的每一次出行都充滿舒適與卓越。
            </p>
          </div>

          <div className="flex flex-col items-end space-y-4">
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
            <div className="text-white/50 text-sm">
              <a href="https://viptoday.com" className="hover:text-white transition-colors">
                viptoday.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}