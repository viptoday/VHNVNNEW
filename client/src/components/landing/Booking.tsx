import { useState } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Booking() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState({
    airport: "",
    serviceType: "",
    validity: "30",
    carType: "",
    language: "",
  });

  // 計算價格的函數
  const calculatePrice = () => {
    if (selectedService === "visa") {
      // 根據簽證有效期和類型計算價格
      const basePrice = 34.49;
      const validityFee = selectedOptions.validity === "90" ? 15 : 0;
      const typeFee = selectedOptions.serviceType === "multiple" ? 20 : 0;
      return (basePrice + validityFee + typeFee).toFixed(2);
    } else if (selectedService === "vip") {
      // 根據服務類型計算價格
      const basePrice = 88.00;
      const serviceFee = {
        arrival: 0,
        departure: 0,
        both: 30
      }[selectedOptions.serviceType] || 0;
      return (basePrice + serviceFee).toFixed(2);
    } else if (selectedService === "pickup") {
      // 根據車型和語言選擇計算價格
      const basePrice = 30.00;
      const carTypePrice = {
        sedan: 0,
        suv: 15,
        van: 25,
        limo: 50
      }[selectedOptions.carType] || 0;
      const languageFee = {
        local: 0,
        chinese: 10,
        english: 15
      }[selectedOptions.language] || 0;
      return (basePrice + carTypePrice + languageFee).toFixed(2);
    }
    return "價格根據選擇而定";
  };

  return (
    <section className="py-24 bg-[#F8F9FA]" id="booking">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 relative pb-4
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-20 after:h-1 after:bg-[#D4B254] text-[#0F1F3F]">
            VIPTODAY 越南訂製遊
          </h2>
          <p className="text-lg text-gray-600">
            選擇您需要的服務，我們將為您提供最優惠的價格
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#0F1F3F]">選擇服務</h3>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { id: "visa", label: "簽證服務" },
                    { id: "vip", label: "機場VIP通關" },
                    { id: "pickup", label: "機場接送" },
                    { id: "charter", label: "包車服務" }
                  ].map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-4 rounded-md border-2 transition-all duration-300 ${
                        selectedService === service.id
                          ? "bg-[#0F1F3F] text-white border-[#0F1F3F]"
                          : "bg-white text-gray-700 border-gray-200 hover:border-[#0F1F3F]"
                      }`}
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              </div>

              {selectedService && (
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4 text-[#0F1F3F]">服務細節</h3>

                  {selectedService === "visa" && (
                    <div className="space-y-4">
                      <div className="flex flex-col gap-2">
                        <h4 className="mb-2">請選擇：簽證類型</h4>
                        <div className="inline-flex">
                          <button
                            className="p-3 rounded-md bg-[#0F1F3F] text-white border-2 border-[#0F1F3F]"
                          >
                            電子簽證
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <h4 className="mb-2">預訂類型</h4>
                        <div className="inline-flex gap-2">
                          {[
                            { id: "single", label: "單次入境" },
                            { id: "multiple", label: "多次入境" }
                          ].map((type) => (
                            <button
                              key={type.id}
                              onClick={() => setSelectedOptions({...selectedOptions, serviceType: type.id})}
                              className={`p-3 rounded-md border-2 transition-all ${
                                selectedOptions.serviceType === type.id
                                  ? "bg-[#0F1F3F] text-white border-[#0F1F3F]"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-[#0F1F3F]"
                              }`}
                            >
                              {type.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <h4 className="mb-2">有效期</h4>
                        <div className="inline-flex gap-2">
                          {[
                            { id: "30", label: "30天" },
                            { id: "90", label: "90天" }
                          ].map((period) => (
                            <button
                              key={period.id}
                              onClick={() => setSelectedOptions({...selectedOptions, validity: period.id})}
                              className={`p-3 rounded-md border-2 transition-all ${
                                selectedOptions.validity === period.id
                                  ? "bg-[#0F1F3F] text-white border-[#0F1F3F]"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-[#0F1F3F]"
                              }`}
                            >
                              {period.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedService === "vip" && (
                    <div className="space-y-4">
                      <div className="flex flex-col gap-2">
                        <h4 className="mb-2">機場選擇</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { id: "hanoi", label: "河內機場" },
                            { id: "hochiminh", label: "胡志明市機場" },
                            { id: "hue", label: "順化機場" },
                            { id: "laos", label: "寮國機場" }
                          ].map((airport) => (
                            <button
                              key={airport.id}
                              onClick={() => setSelectedOptions({...selectedOptions, airport: airport.id})}
                              className={`p-3 rounded-md border-2 transition-all ${
                                selectedOptions.airport === airport.id
                                  ? "bg-[#0F1F3F] text-white border-[#0F1F3F]"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-[#0F1F3F]"
                              }`}
                            >
                              {airport.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <h4 className="mb-2">服務類型</h4>
                        <div className="inline-flex gap-2">
                          {[
                            { id: "arrival", label: "入境服務" },
                            { id: "departure", label: "出境服務" },
                            { id: "both", label: "雙向服務" }
                          ].map((type) => (
                            <button
                              key={type.id}
                              onClick={() => setSelectedOptions({...selectedOptions, serviceType: type.id})}
                              className={`p-3 rounded-md border-2 transition-all ${
                                selectedOptions.serviceType === type.id
                                  ? "bg-[#0F1F3F] text-white border-[#0F1F3F]"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-[#0F1F3F]"
                              }`}
                            >
                              {type.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedService === "pickup" && (
                    <div className="space-y-4">
                      <div className="flex flex-col gap-2">
                        <h4 className="mb-2">上車地點</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { id: "hanoi", label: "河內" },
                            { id: "hochiminh", label: "胡志明" },
                            { id: "hue", label: "順化" },
                            { id: "laos", label: "寮國" }
                          ].map((location) => (
                            <button
                              key={location.id}
                              onClick={() => setSelectedOptions({...selectedOptions, airport: location.id})}
                              className={`p-3 rounded-md border-2 transition-all ${
                                selectedOptions.airport === location.id
                                  ? "bg-[#0F1F3F] text-white border-[#0F1F3F]"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-[#0F1F3F]"
                              }`}
                            >
                              {location.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <h4 className="mb-2">車型選擇</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { id: "sedan", label: "轎車 (3人座)" },
                            { id: "suv", label: "SUV/MPV (5人座)" },
                            { id: "van", label: "禮賓車 (12人座)" },
                            { id: "limo", label: "高級車 (含limousine)" }
                          ].map((car) => (
                            <button
                              key={car.id}
                              onClick={() => setSelectedOptions({...selectedOptions, carType: car.id})}
                              className={`p-3 rounded-md border-2 transition-all ${
                                selectedOptions.carType === car.id
                                  ? "bg-[#0F1F3F] text-white border-[#0F1F3F]"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-[#0F1F3F]"
                              }`}
                            >
                              {car.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <h4 className="mb-2">司機語言能力</h4>
                        <div className="inline-flex gap-2">
                          {[
                            { id: "local", label: "僅會地話" },
                            { id: "chinese", label: "中文" },
                            { id: "english", label: "英文" }
                          ].map((lang) => (
                            <button
                              key={lang.id}
                              onClick={() => setSelectedOptions({...selectedOptions, language: lang.id})}
                              className={`p-3 rounded-md border-2 transition-all ${
                                selectedOptions.language === lang.id
                                  ? "bg-[#0F1F3F] text-white border-[#0F1F3F]"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-[#0F1F3F]"
                              }`}
                            >
                              {lang.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedService === "charter" && (
                    <div className="space-y-4">
                      <div className="flex flex-col gap-2">
                        <h4 className="mb-2">城市</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { id: "hanoi", label: "河內" },
                            { id: "hochiminh", label: "胡志明" },
                            { id: "hue", label: "順化" },
                            { id: "laos", label: "寮國" }
                          ].map((location) => (
                            <button
                              key={location.id}
                              onClick={() => setSelectedOptions({...selectedOptions, airport: location.id})}
                              className={`p-3 rounded-md border-2 transition-all ${
                                selectedOptions.airport === location.id
                                  ? "bg-[#0F1F3F] text-white border-[#0F1F3F]"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-[#0F1F3F]"
                              }`}
                            >
                              {location.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <h4 className="mb-2">車型</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { id: "sedan2", label: "轎車 (2人2件手)" },
                            { id: "suv4", label: "SUV/MPV (4人4件手)" },
                            { id: "van6", label: "禮賓車 (6人6件手)" },
                            { id: "bus8", label: "巴士 (8人8件手以上)" }
                          ].map((car) => (
                            <button
                              key={car.id}
                              onClick={() => setSelectedOptions({...selectedOptions, carType: car.id})}
                              className={`p-3 rounded-md border-2 transition-all ${
                                selectedOptions.carType === car.id
                                  ? "bg-[#0F1F3F] text-white border-[#0F1F3F]"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-[#0F1F3F]"
                              }`}
                            >
                              {car.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <h4 className="mb-2">司機語言能力</h4>
                        <div className="inline-flex gap-2">
                          {[
                            { id: "local", label: "僅會地話" },
                            { id: "chinese", label: "中文" },
                            { id: "english", label: "英文" },
                            { id: "other", label: "其他外文" }
                          ].map((lang) => (
                            <button
                              key={lang.id}
                              onClick={() => setSelectedOptions({...selectedOptions, language: lang.id})}
                              className={`p-3 rounded-md border-2 transition-all ${
                                selectedOptions.language === lang.id
                                  ? "bg-[#0F1F3F] text-white border-[#0F1F3F]"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-[#0F1F3F]"
                              }`}
                            >
                              {lang.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 顯示價格 */}
                  <div className="mt-8 text-center">
                    <div className="text-2xl font-bold text-[#0F1F3F]">
                      S$ {calculatePrice()}
                    </div>
                    <Button 
                      className="mt-4 w-full bg-[#0F1F3F] hover:bg-[#1A2F4F] text-white"
                    >
                      立即預訂
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}