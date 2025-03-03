export default function Footer() {
  return (
    <footer className="bg-[#0A1D36] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#D2973F]">
              關於我們
            </h3>
            <p className="text-white/70">
              VIPTODAY 專注於提供頂級越南旅遊體驗，為您打造獨特難忘的高端旅程。
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#D2973F]">
              快速連結
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/70 hover:text-[#D2973F] transition-colors duration-300">
                  我們的服務
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/70 hover:text-[#D2973F] transition-colors duration-300">
                  價格方案
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-[#D2973F] transition-colors duration-300">
                  聯絡我們
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#D2973F]">
              聯絡方式
            </h3>
            <ul className="space-y-3 text-white/70">
              <li>電話：+84 123 456 789</li>
              <li>信箱：info@viptoday.com</li>
              <li>地址：Ho Chi Minh City, Vietnam</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[#D2973F]">
              關注我們
            </h3>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'line', 'wechat'].map((platform) => (
                <a
                  key={platform}
                  href={`#${platform}`}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D2973F] transition-colors duration-300"
                >
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} VIPTODAY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
