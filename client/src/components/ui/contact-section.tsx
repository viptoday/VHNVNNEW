export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary to-[#0F6E9A] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#D2973F]">
            聯絡我們
          </h2>
          <p className="text-xl mb-12 opacity-90">
            讓我們為您打造完美的越南之旅
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 min-w-[250px] hover:bg-white/20 hover:transform hover:-translate-y-2 transition-all duration-300">
            <i className="text-3xl text-[#D2973F] mb-4 block">✉</i>
            <h3 className="text-xl font-semibold mb-2">電子郵件</h3>
            <p className="opacity-80">info@viptoday.com</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 min-w-[250px] hover:bg-white/20 hover:transform hover:-translate-y-2 transition-all duration-300">
            <i className="text-3xl text-[#D2973F] mb-4 block">☎</i>
            <h3 className="text-xl font-semibold mb-2">電話諮詢</h3>
            <p className="opacity-80">+84 123 456 789</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 min-w-[250px] hover:bg-white/20 hover:transform hover:-translate-y-2 transition-all duration-300">
            <i className="text-3xl text-[#D2973F] mb-4 block">💬</i>
            <h3 className="text-xl font-semibold mb-2">即時通訊</h3>
            <p className="opacity-80">LINE / WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
}
