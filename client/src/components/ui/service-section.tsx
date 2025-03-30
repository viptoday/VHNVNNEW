import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "專業簽證辦理",
    features: [
      "30/90天觀光簽證，靈活選擇",
      "單次/多次出入境簽證",
      "資深顧問全程指導",
      "快速處理，無需排隊等待"
    ],
    image: "https://source.unsplash.com/random/400x200?passport,visa"
  },
  {
    title: "機場貴賓通關",
    features: [
      "專享 VIP 通道，無需排隊",
      "專人協助辦理入境手續",
      "優先行李處理服務",
      "入境即享尊貴待遇"
    ],
    image: "https://source.unsplash.com/random/400x200?airport,vip"
  },
  // Add other services...
];

export default function ServiceSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#D2973F]">
            越南頂級旅遊服務
          </h2>
          <div className="flex justify-center">
            <p className="text-gray-600 text-lg whitespace-nowrap">
              VIPTODAY 為您提供全方位的越南旅遊解決方案，讓您的旅程輕鬆愜意，盡享尊貴體驗
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:border-[#0F6E9A]">
              <div 
                className="h-52 bg-cover bg-center" 
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#0F6E9A] mb-4">
                  {service.title}
                </h3>
                {service.features.map((feature, idx) => (
                  <p key={idx} className="text-gray-600 mb-2 flex items-center">
                    <span className="text-[#D2973F] mr-2">✦</span>
                    {feature}
                  </p>
                ))}
                <a 
                  href="#pricing" 
                  className="inline-block mt-4 px-6 py-2 border-2 border-[#D2973F] text-[#D2973F] rounded hover:bg-[#D2973F] hover:text-white transition-colors duration-300"
                >
                  了解更多
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
