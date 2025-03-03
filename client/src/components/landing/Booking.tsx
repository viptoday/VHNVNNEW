import { useState } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Booking() {
  const [selectedService, setSelectedService] = useState<string>("visa");
  const [selectedOptions, setSelectedOptions] = useState({
    serviceType: "",
    validity: "30",
    carType: "",
    language: "",
    airport: ""
  });

  // 計算價格的函數
  const calculatePrice = (service: string) => {
    switch (service) {
      case "visa":
        const basePrice = 34.49;
        const validityFee = selectedOptions.validity === "90" ? 15 : 0;
        const typeFee = selectedOptions.serviceType === "multiple" ? 20 : 0;
        return (basePrice + validityFee + typeFee).toFixed(2);
      case "vip":
        return "88.00";
      case "pickup":
        return "from S$ 30.00";
      case "charter":
        return "from S$ 50.00";
      default:
        return "計算中...";
    }
  };

  return (
    <section className="py-24 bg-[#F8F9FA]" id="booking">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 relative pb-4
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-20 after:h-1 after:bg-[#D4B254] text-[#0F1F3F]">
            請選擇您喜歡的服務
          </h2>
        </div>

        {/* 服務選擇按鈕 */}
        <div className="flex justify-center gap-4 mb-8">
          {[
            { id: "visa", label: "簽證服務" },
            { id: "vip", label: "機場VIP通關" },
            { id: "pickup", label: "機場接送" },
            { id: "charter", label: "包車服務" }
          ].map((service) => (
            <Button
              key={service.id}
              variant={selectedService === service.id ? "default" : "outline"}
              className={`flex-1 max-w-[200px] ${
                selectedService === service.id
                  ? "bg-[#0F1F3F] text-white"
                  : "border-gray-200 hover:border-[#0F1F3F]"
              }`}
              onClick={() => setSelectedService(service.id)}
            >
              {service.label}
            </Button>
          ))}
        </div>

        {/* 服務選項區域 */}
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            {selectedService === "visa" && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#0F1F3F] mb-4">簽證服務</h3>
                <div>
                  <h4 className="mb-2">請選擇：簽證類型</h4>
                  <Button 
                    className="w-full bg-[#0F1F3F] text-white"
                  >
                    電子簽證
                  </Button>
                </div>

                <div>
                  <h4 className="mb-2">預訂類型</h4>
                  <div className="flex gap-2">
                    {[
                      { id: "single", label: "單次入境" },
                      { id: "multiple", label: "多次入境" }
                    ].map((type) => (
                      <Button
                        key={type.id}
                        variant={selectedOptions.serviceType === type.id ? "default" : "outline"}
                        className={`flex-1 ${
                          selectedOptions.serviceType === type.id
                            ? "bg-[#0F1F3F] text-white"
                            : "border-gray-200 hover:border-[#0F1F3F]"
                        }`}
                        onClick={() => setSelectedOptions({...selectedOptions, serviceType: type.id})}
                      >
                        {type.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2">有效期</h4>
                  <div className="flex gap-2">
                    {[
                      { id: "30", label: "30天" },
                      { id: "90", label: "90天" }
                    ].map((period) => (
                      <Button
                        key={period.id}
                        variant={selectedOptions.validity === period.id ? "default" : "outline"}
                        className={`flex-1 ${
                          selectedOptions.validity === period.id
                            ? "bg-[#0F1F3F] text-white"
                            : "border-gray-200 hover:border-[#0F1F3F]"
                        }`}
                        onClick={() => setSelectedOptions({...selectedOptions, validity: period.id})}
                      >
                        {period.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <div className="text-2xl font-bold text-[#0F1F3F] text-center mb-4">
                    S$ {calculatePrice("visa")}
                  </div>
                  <Button 
                    className="w-full bg-[#0F1F3F] hover:bg-[#1A2F4F] text-white"
                  >
                    立即預訂
                  </Button>
                </div>
              </div>
            )}

            {selectedService === "vip" && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#0F1F3F] mb-4">機場VIP通關</h3>
                <div>
                  <h4 className="mb-2">機場選擇</h4>
                  <div className="space-y-2">
                    {[
                      { id: "hanoi", label: "河內機場" },
                      { id: "hochiminh", label: "胡志明市機場" },
                      { id: "hue", label: "順化機場" },
                      { id: "laos", label: "寮國機場" }
                    ].map((airport) => (
                      <Button
                        key={airport.id}
                        variant={selectedOptions.airport === airport.id ? "default" : "outline"}
                        className={`w-full ${
                          selectedOptions.airport === airport.id
                            ? "bg-[#0F1F3F] text-white"
                            : "border-gray-200 hover:border-[#0F1F3F]"
                        }`}
                        onClick={() => setSelectedOptions({...selectedOptions, airport: airport.id})}
                      >
                        {airport.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2">服務類型</h4>
                  <div className="space-y-2">
                    {[
                      { id: "arrival", label: "入境服務" },
                      { id: "departure", label: "出境服務" },
                      { id: "both", label: "雙向服務" }
                    ].map((type) => (
                      <Button
                        key={type.id}
                        variant={selectedOptions.serviceType === type.id ? "default" : "outline"}
                        className={`w-full ${
                          selectedOptions.serviceType === type.id
                            ? "bg-[#0F1F3F] text-white"
                            : "border-gray-200 hover:border-[#0F1F3F]"
                        }`}
                        onClick={() => setSelectedOptions({...selectedOptions, serviceType: type.id})}
                      >
                        {type.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <div className="text-2xl font-bold text-[#0F1F3F] text-center mb-4">
                    S$ {calculatePrice("vip")}
                  </div>
                  <Button 
                    className="w-full bg-[#0F1F3F] hover:bg-[#1A2F4F] text-white"
                  >
                    立即預訂
                  </Button>
                </div>
              </div>
            )}

            {selectedService === "pickup" && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#0F1F3F] mb-4">機場接送</h3>
                <div>
                  <h4 className="mb-2">上車地點</h4>
                  <div className="space-y-2">
                    {[
                      { id: "hanoi", label: "河內" },
                      { id: "hochiminh", label: "胡志明" },
                      { id: "hue", label: "順化" },
                      { id: "laos", label: "寮國" }
                    ].map((location) => (
                      <Button
                        key={location.id}
                        variant={selectedOptions.airport === location.id ? "default" : "outline"}
                        className={`w-full ${
                          selectedOptions.airport === location.id
                            ? "bg-[#0F1F3F] text-white"
                            : "border-gray-200 hover:border-[#0F1F3F]"
                        }`}
                        onClick={() => setSelectedOptions({...selectedOptions, airport: location.id})}
                      >
                        {location.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2">車型選擇</h4>
                  <div className="space-y-2">
                    {[
                      { id: "sedan", label: "轎車 (3人座)" },
                      { id: "suv", label: "SUV/MPV (5人座)" },
                      { id: "van", label: "禮賓車 (12人座)" },
                      { id: "limo", label: "高級車 (含limousine)" }
                    ].map((car) => (
                      <Button
                        key={car.id}
                        variant={selectedOptions.carType === car.id ? "default" : "outline"}
                        className={`w-full ${
                          selectedOptions.carType === car.id
                            ? "bg-[#0F1F3F] text-white"
                            : "border-gray-200 hover:border-[#0F1F3F]"
                        }`}
                        onClick={() => setSelectedOptions({...selectedOptions, carType: car.id})}
                      >
                        {car.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2">司機語言能力</h4>
                  <div className="space-y-2">
                    {[
                      { id: "local", label: "僅會地話" },
                      { id: "chinese", label: "中文" },
                      { id: "english", label: "英文" }
                    ].map((lang) => (
                      <Button
                        key={lang.id}
                        variant={selectedOptions.language === lang.id ? "default" : "outline"}
                        className={`w-full ${
                          selectedOptions.language === lang.id
                            ? "bg-[#0F1F3F] text-white"
                            : "border-gray-200 hover:border-[#0F1F3F]"
                        }`}
                        onClick={() => setSelectedOptions({...selectedOptions, language: lang.id})}
                      >
                        {lang.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <div className="text-2xl font-bold text-[#0F1F3F] text-center mb-4">
                    {calculatePrice("pickup")}
                  </div>
                  <Button 
                    className="w-full bg-[#0F1F3F] hover:bg-[#1A2F4F] text-white"
                  >
                    立即預訂
                  </Button>
                </div>
              </div>
            )}

            {selectedService === "charter" && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#0F1F3F] mb-4">包車服務</h3>
                <div>
                  <h4 className="mb-2">城市</h4>
                  <div className="space-y-2">
                    {[
                      { id: "hanoi", label: "河內" },
                      { id: "hochiminh", label: "胡志明" },
                      { id: "hue", label: "順化" },
                      { id: "laos", label: "寮國" }
                    ].map((location) => (
                      <Button
                        key={location.id}
                        variant={selectedOptions.airport === location.id ? "default" : "outline"}
                        className={`w-full ${
                          selectedOptions.airport === location.id
                            ? "bg-[#0F1F3F] text-white"
                            : "border-gray-200 hover:border-[#0F1F3F]"
                        }`}
                        onClick={() => setSelectedOptions({...selectedOptions, airport: location.id})}
                      >
                        {location.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2">車型</h4>
                  <div className="space-y-2">
                    {[
                      { id: "sedan2", label: "轎車 (2人2件手)" },
                      { id: "suv4", label: "SUV/MPV (4人4件手)" },
                      { id: "van6", label: "禮賓車 (6人6件手)" },
                      { id: "bus8", label: "巴士 (8人8件手以上)" }
                    ].map((car) => (
                      <Button
                        key={car.id}
                        variant={selectedOptions.carType === car.id ? "default" : "outline"}
                        className={`w-full ${
                          selectedOptions.carType === car.id
                            ? "bg-[#0F1F3F] text-white"
                            : "border-gray-200 hover:border-[#0F1F3F]"
                        }`}
                        onClick={() => setSelectedOptions({...selectedOptions, carType: car.id})}
                      >
                        {car.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2">司機語言能力</h4>
                  <div className="space-y-2">
                    {[
                      { id: "local", label: "僅會地話" },
                      { id: "chinese", label: "中文" },
                      { id: "english", label: "英文" },
                      { id: "other", label: "其他外文" }
                    ].map((lang) => (
                      <Button
                        key={lang.id}
                        variant={selectedOptions.language === lang.id ? "default" : "outline"}
                        className={`w-full ${
                          selectedOptions.language === lang.id
                            ? "bg-[#0F1F3F] text-white"
                            : "border-gray-200 hover:border-[#0F1F3F]"
                        }`}
                        onClick={() => setSelectedOptions({...selectedOptions, language: lang.id})}
                      >
                        {lang.label}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <div className="text-2xl font-bold text-[#0F1F3F] text-center mb-4">
                    {calculatePrice("charter")}
                  </div>
                  <Button 
                    className="w-full bg-[#0F1F3F] hover:bg-[#1A2F4F] text-white"
                  >
                    立即預訂
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}