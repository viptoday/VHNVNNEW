import { useState } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function Booking() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState({
    airport: "",
    serviceType: "",
    people: 1,
    days: 30,
  });

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
                <RadioGroup
                  defaultValue={selectedService}
                  onValueChange={setSelectedService}
                  className="grid grid-cols-2 gap-4"
                >
                  <div>
                    <RadioGroupItem
                      value="visa"
                      id="visa"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="visa"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 [&:has([data-state=checked])]:border-[#D4B254] cursor-pointer"
                    >
                      <span>簽證服務</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="vip"
                      id="vip"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="vip"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 [&:has([data-state=checked])]:border-[#D4B254] cursor-pointer"
                    >
                      <span>機場VIP通關</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="pickup"
                      id="pickup"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="pickup"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 [&:has([data-state=checked])]:border-[#D4B254] cursor-pointer"
                    >
                      <span>機場接送</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="charter"
                      id="charter"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="charter"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 [&:has([data-state=checked])]:border-[#D4B254] cursor-pointer"
                    >
                      <span>包車服務</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {selectedService && (
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4 text-[#0F1F3F]">服務細節</h3>
                  {/* 根據所選服務顯示不同的選項 */}
                  {selectedService === "visa" && (
                    <div className="space-y-4">
                      <RadioGroup
                        defaultValue={selectedOptions.days.toString()}
                        onValueChange={(value) => setSelectedOptions({...selectedOptions, days: parseInt(value)})}
                        className="flex gap-4"
                      >
                        <div>
                          <RadioGroupItem value="30" id="30days" />
                          <Label htmlFor="30days" className="ml-2">30天</Label>
                        </div>
                        <div>
                          <RadioGroupItem value="90" id="90days" />
                          <Label htmlFor="90days" className="ml-2">90天</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}
                  
                  {/* 顯示價格 */}
                  <div className="mt-8 text-center">
                    <div className="text-2xl font-bold text-[#0F1F3F]">
                      S$ {selectedService === "visa" ? "34.49" : "88.00"}
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
