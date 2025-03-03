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
                      <div>
                        <h4 className="mb-2">請選擇：簽證類型</h4>
                        <RadioGroup defaultValue="e-visa" className="flex gap-4">
                          <div>
                            <RadioGroupItem value="e-visa" id="e-visa" defaultChecked />
                            <Label htmlFor="e-visa" className="ml-2">電子簽證</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <h4 className="mb-2">預訂類型</h4>
                        <RadioGroup defaultValue="single" className="flex gap-4">
                          <div>
                            <RadioGroupItem value="single" id="single" />
                            <Label htmlFor="single" className="ml-2">單次入境</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="multiple" id="multiple" />
                            <Label htmlFor="multiple" className="ml-2">多次入境</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <h4 className="mb-2">有效期</h4>
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
                    </div>
                  )}

                  {selectedService === "vip" && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2">機場選擇</h4>
                        <RadioGroup defaultValue="hanoi" className="grid grid-cols-2 gap-4">
                          <div>
                            <RadioGroupItem value="hanoi" id="hanoi" />
                            <Label htmlFor="hanoi" className="ml-2">河內機場</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="hochiminh" id="hochiminh" />
                            <Label htmlFor="hochiminh" className="ml-2">胡志明市機場</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="hue" id="hue" />
                            <Label htmlFor="hue" className="ml-2">順化機場</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="laos" id="laos" />
                            <Label htmlFor="laos" className="ml-2">寮國機場</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <h4 className="mb-2">服務類型</h4>
                        <RadioGroup defaultValue="arrival" className="flex gap-4">
                          <div>
                            <RadioGroupItem value="arrival" id="arrival" />
                            <Label htmlFor="arrival" className="ml-2">入境服務</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="departure" id="departure" />
                            <Label htmlFor="departure" className="ml-2">出境服務</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="both" id="both" />
                            <Label htmlFor="both" className="ml-2">雙向服務</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                  {selectedService === "pickup" && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2">上車地點</h4>
                        <RadioGroup defaultValue="hanoi" className="grid grid-cols-2 gap-4">
                          <div>
                            <RadioGroupItem value="hanoi" id="pickup-hanoi" />
                            <Label htmlFor="pickup-hanoi" className="ml-2">河內</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="hochiminh" id="pickup-hochiminh" />
                            <Label htmlFor="pickup-hochiminh" className="ml-2">胡志明</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="hue" id="pickup-hue" />
                            <Label htmlFor="pickup-hue" className="ml-2">順化</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="laos" id="pickup-laos" />
                            <Label htmlFor="pickup-laos" className="ml-2">寮國</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <h4 className="mb-2">車型選擇</h4>
                        <RadioGroup defaultValue="sedan" className="grid grid-cols-2 gap-4">
                          <div>
                            <RadioGroupItem value="sedan" id="sedan" />
                            <Label htmlFor="sedan" className="ml-2">轎車 (3人座)</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="suv" id="suv" />
                            <Label htmlFor="suv" className="ml-2">SUV/MPV (5人座)</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="van" id="van" />
                            <Label htmlFor="van" className="ml-2">禮賓車 (12人座)</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="limo" id="limo" />
                            <Label htmlFor="limo" className="ml-2">高級車 (含limousine)</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <h4 className="mb-2">司機語言能力</h4>
                        <RadioGroup defaultValue="local" className="flex gap-4">
                          <div>
                            <RadioGroupItem value="local" id="local-lang" />
                            <Label htmlFor="local-lang" className="ml-2">僅會地話</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="chinese" id="chinese-lang" />
                            <Label htmlFor="chinese-lang" className="ml-2">中文</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="english" id="english-lang" />
                            <Label htmlFor="english-lang" className="ml-2">英文</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                  {selectedService === "charter" && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2">城市</h4>
                        <RadioGroup defaultValue="hanoi" className="grid grid-cols-2 gap-4">
                          <div>
                            <RadioGroupItem value="hanoi" id="charter-hanoi" />
                            <Label htmlFor="charter-hanoi" className="ml-2">河內</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="hochiminh" id="charter-hochiminh" />
                            <Label htmlFor="charter-hochiminh" className="ml-2">胡志明</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="hue" id="charter-hue" />
                            <Label htmlFor="charter-hue" className="ml-2">順化</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="laos" id="charter-laos" />
                            <Label htmlFor="charter-laos" className="ml-2">寮國</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <h4 className="mb-2">車型</h4>
                        <RadioGroup defaultValue="sedan2" className="grid grid-cols-2 gap-4">
                          <div>
                            <RadioGroupItem value="sedan2" id="sedan2" />
                            <Label htmlFor="sedan2" className="ml-2">轎車 (2人2件手)</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="suv4" id="suv4" />
                            <Label htmlFor="suv4" className="ml-2">SUV/MPV (4人4件手)</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="van6" id="van6" />
                            <Label htmlFor="van6" className="ml-2">禮賓車 (6人6件手)</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="bus8" id="bus8" />
                            <Label htmlFor="bus8" className="ml-2">巴士 (8人8件手以上)</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <h4 className="mb-2">司機語言能力</h4>
                        <RadioGroup defaultValue="local" className="flex gap-4">
                          <div>
                            <RadioGroupItem value="local" id="local-lang2" />
                            <Label htmlFor="local-lang2" className="ml-2">僅會地話</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="chinese" id="chinese-lang2" />
                            <Label htmlFor="chinese-lang2" className="ml-2">中文</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="english" id="english-lang2" />
                            <Label htmlFor="english-lang2" className="ml-2">英文</Label>
                          </div>
                          <div>
                            <RadioGroupItem value="other" id="other-lang2" />
                            <Label htmlFor="other-lang2" className="ml-2">其他外文</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  )}

                  {/* 顯示價格 */}
                  <div className="mt-8 text-center">
                    <div className="text-2xl font-bold text-[#0F1F3F]">
                      S$ {selectedService === "visa" ? "34.49" : (selectedService === "vip" ? "88.00" : "價格根據選擇而定")}
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