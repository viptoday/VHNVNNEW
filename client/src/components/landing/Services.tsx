import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

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
      "入境即享尊貴待遇"
    ]
  },
  {
    title: "機場專車接送",
    image: "https://images.unsplash.com/photo-1625134673337-519d3b0b3548",
    features: [
      "豪華轎車/商務車/SUV 多種選擇",
      "專業雙語司機",
      "24小時全天候服務",
      "專人導遊迎接"
    ]
  },
  {
    title: "越南觀光",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    features: [
      "精選景點遊覽路線",
      "專業導遊講解服務",
      "特色美食品嚐體驗",
      "舒適安全的遊覽體驗"
    ]
  },
  {
    title: "精緻包車服務",
    image: "https://images.unsplash.com/photo-1549194898-60fd030ecc0f",
    features: [
      "高級車隊，舒適安全",
      "專業雙語司機/導遊",
      "靈活定制行程路線",
      "覆蓋越南所有主要城市"
    ]
  },
  {
    title: "全球 VIP 服務",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    features: [
      "65+國家，同等高標服務",
      "全球機場VIP貴賓通道",
      "國際酒店優惠預訂網絡",
      "無縫連接的跨國旅遊體驗"
    ]
  }
];

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 relative pb-4
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-20 after:h-1 after:bg-[#D4B254] text-[#0F1F3F]">
            {t.services.title}
          </h2>
          <p className="text-lg text-gray-600">
            {t.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:translate-y-[-10px] transition-all duration-300
              hover:shadow-xl border-[#E5E7EB] hover:border-[#0F1F3F]">
              <div 
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#0F1F3F] mb-4">
                  {service.title}
                </h3>
                {service.features.map((feature, idx) => (
                  <p key={idx} className="flex items-center gap-2 text-gray-600 mb-2">
                    <span className="text-[#D4B254]">✦</span>
                    {feature}
                  </p>
                ))}
                <div className="mt-6">
                  <Button 
                    className="w-full bg-[#0F1F3F] hover:bg-[#1A2F4F] text-white"
                    onClick={() => window.location.href = '#booking'}
                  >
                    {t.services.bookNow}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}