import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const services = [
  {
    title: "專業簽證辦理",
    image: "https://images.unsplash.com/photo-1544177817-4030a0c0757b",
    features: [
      "30/90天觀光簽證，靈活選擇",
      "單次/多次出入境簽證",
      "資深顧問全程指導",
      "快速處理，無需排隊等待"
    ]
  },
  {
    title: "機場貴賓通關",
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563",
    features: [
      "專享 VIP 通道，無需排隊",
      "專人協助辦理入境手續",
      "優先行李處理服務",
      "入境即享尊貴待遇"
    ]
  }
  // Add remaining services here...
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4 relative pb-4
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-20 after:h-1 after:bg-[#D2973F]">
            越南頂級旅遊服務
          </h2>
          <p className="text-gray-600 text-lg">
            VIPTODAY 為您提供全方位的越南旅遊解決方案，讓您的旅程輕鬆愜意，盡享尊貴體驗
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:translate-y-[-10px] transition-all duration-300
              hover:shadow-xl hover:border-[#0F6E9A]">
              <div 
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-[#0F6E9A] mb-4">
                  {service.title}
                </h3>
                {service.features.map((feature, idx) => (
                  <p key={idx} className="flex items-center gap-2 text-gray-600 mb-2">
                    <Check className="h-5 w-5 text-[#D2973F]" />
                    {feature}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
