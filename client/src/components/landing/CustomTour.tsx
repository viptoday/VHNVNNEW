import { Button } from "@/components/ui/button";
import { Compass, Star, Utensils, Users, Calendar, Settings } from "lucide-react";

const features = [
  {
    icon: <Compass className="h-6 w-6 text-[#D4B254]" />,
    title: "光速規劃服務",
    description: "我們的旅遊專家團隊為您高效設計夢想中的越南之旅，量身打造獨一無二的行程"
  },
  {
    icon: <Star className="h-6 w-6 text-[#D4B254]" />,
    title: "私人定制行程",
    description: "不跟團，不走尋常路線，完全根據您的興趣、時間和節奏量身定制"
  },
  {
    icon: <Compass className="h-6 w-6 text-[#D4B254]" />,
    title: "隱藏景點探索",
    description: "帶您探訪當地人才知道的秘境，體驗真實而原汁原味的越南文化"
  },
  {
    icon: <Utensils className="h-6 w-6 text-[#D4B254]" />,
    title: "頂級美食體驗",
    description: "從街頭美食到米其林星級餐廳，為您安排一場難忘的越南美食之旅"
  },
  {
    icon: <Users className="h-6 w-6 text-[#D4B254]" />,
    title: "專業中文導遊",
    description: "具備豐富知識與經驗的雙語導遊，讓您深入了解越南的歷史、文化與生活"
  },
  {
    icon: <Settings className="h-6 w-6 text-[#D4B254]" />,
    title: "彈性行程調整",
    description: "旅途中隨時可調整行程，靈活應對您的即興想法，輕鬆享受假期"
  }
];

export default function CustomTour() {
  return (
    <section className="py-24 relative text-white">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583417319070-4a69db38a482')] 
        bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient
          from-[rgba(0,31,63,0.9)] to-[rgba(0,71,171,0.7)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 relative pb-4
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-20 after:h-1 after:bg-[#D2973F]">
            VIPTODAY 越南訂製遊
          </h2>
          <p className="text-xl opacity-90">
            遠離常規旅遊路線，體驗真正屬於您的獨特越南之旅
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} 
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6
              hover:bg-white/20 hover:translate-y-[-5px] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-[#D2973F] hover:bg-[#FF8534] hover:translate-y-[-3px] transition-all duration-300
            text-white font-semibold tracking-wider uppercase"
          >
            預約專屬顧問
          </Button>
        </div>
      </div>
    </section>
  );
}
