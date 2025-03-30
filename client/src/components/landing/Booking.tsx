import { useState } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { translations } from "@/locales/translations";
import { useLanguage } from "@/contexts/LanguageContext";

// 服务选择按钮组件
interface ServiceButtonProps {
  serviceId: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const ServiceButton = ({ serviceId, label, isSelected, onClick }: ServiceButtonProps) => (
  <Button
    variant={isSelected ? "default" : "outline"}
    className={`flex-1 max-w-[200px] rounded-md transition-colors duration-200 ${
      isSelected
        ? "bg-[#0F1F3F] text-white hover:bg-[#1A2F4F]"
        : "border-gray-200 hover:border-[#0F1F3F] hover:bg-gray-50"
    }`}
    onClick={onClick}
  >
    {label}
  </Button>
);

// 选项按钮组件
interface OptionButtonProps {
  id: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const OptionButton = ({ id, label, isSelected, onClick }: OptionButtonProps) => (
  <Button
    variant={isSelected ? "default" : "outline"}
    className={`px-6 rounded-md transition-colors duration-200 ${
      isSelected
        ? "bg-[#0F1F3F] text-white hover:bg-[#1A2F4F]"
        : "border-gray-200 hover:border-[#0F1F3F] hover:bg-gray-50"
    }`}
    onClick={onClick}
  >
    {label}
  </Button>
);

// 添加 Stripe 链接配置
const STRIPE_LINKS = {
  visa: {
    single: {
      '30': 'https://buy.stripe.com/visa_single_30',
      '90': 'https://buy.stripe.com/visa_single_90'
    },
    multiple: {
      '30': 'https://buy.stripe.com/visa_multiple_30',
      '90': 'https://buy.stripe.com/visa_multiple_90'
    }
  },
  vip: {
    arrival: {
      hanoi: 'https://buy.stripe.com/vip_arrival_hanoi',
      hochiminh: 'https://buy.stripe.com/vip_arrival_hochiminh',
      danang: 'https://buy.stripe.com/vip_arrival_danang',
      laos: 'https://buy.stripe.com/vip_arrival_laos'
    },
    departure: {
      hanoi: 'https://buy.stripe.com/vip_departure_hanoi',
      hochiminh: 'https://buy.stripe.com/vip_departure_hochiminh',
      danang: 'https://buy.stripe.com/vip_departure_danang',
      laos: 'https://buy.stripe.com/vip_departure_laos'
    },
    both: {
      hanoi: 'https://buy.stripe.com/vip_both_hanoi',
      hochiminh: 'https://buy.stripe.com/vip_both_hochiminh',
      danang: 'https://buy.stripe.com/vip_both_danang',
      laos: 'https://buy.stripe.com/vip_both_laos'
    }
  },
  pickup: {
    sedan: {
      hanoi: 'https://buy.stripe.com/pickup_sedan_hanoi',
      hochiminh: 'https://buy.stripe.com/pickup_sedan_hochiminh',
      danang: 'https://buy.stripe.com/pickup_sedan_danang',
      laos: 'https://buy.stripe.com/pickup_sedan_laos'
    },
    suv: {
      hanoi: 'https://buy.stripe.com/pickup_suv_hanoi',
      hochiminh: 'https://buy.stripe.com/pickup_suv_hochiminh',
      danang: 'https://buy.stripe.com/pickup_suv_danang',
      laos: 'https://buy.stripe.com/pickup_suv_laos'
    },
    van: {
      hanoi: 'https://buy.stripe.com/pickup_van_hanoi',
      hochiminh: 'https://buy.stripe.com/pickup_van_hochiminh',
      danang: 'https://buy.stripe.com/pickup_van_danang',
      laos: 'https://buy.stripe.com/pickup_van_laos'
    },
    limo: {
      hanoi: 'https://buy.stripe.com/pickup_limo_hanoi',
      hochiminh: 'https://buy.stripe.com/pickup_limo_hochiminh',
      danang: 'https://buy.stripe.com/pickup_limo_danang',
      laos: 'https://buy.stripe.com/pickup_limo_laos'
    }
  },
  charter: {
    sedan2: {
      hanoi: 'https://buy.stripe.com/charter_sedan2_hanoi',
      hochiminh: 'https://buy.stripe.com/charter_sedan2_hochiminh',
      danang: 'https://buy.stripe.com/charter_sedan2_danang',
      laos: 'https://buy.stripe.com/charter_sedan2_laos'
    },
    suv4: {
      hanoi: 'https://buy.stripe.com/charter_suv4_hanoi',
      hochiminh: 'https://buy.stripe.com/charter_suv4_hochiminh',
      danang: 'https://buy.stripe.com/charter_suv4_danang',
      laos: 'https://buy.stripe.com/charter_suv4_laos'
    },
    van6: {
      hanoi: 'https://buy.stripe.com/charter_van6_hanoi',
      hochiminh: 'https://buy.stripe.com/charter_van6_hochiminh',
      danang: 'https://buy.stripe.com/charter_van6_danang',
      laos: 'https://buy.stripe.com/charter_van6_laos'
    },
    bus8: {
      hanoi: 'https://buy.stripe.com/charter_bus8_hanoi',
      hochiminh: 'https://buy.stripe.com/charter_bus8_hochiminh',
      danang: 'https://buy.stripe.com/charter_bus8_danang',
      laos: 'https://buy.stripe.com/charter_bus8_laos'
    }
  }
};

// 添加选项类型定义
interface VisaOptions {
  serviceType: 'single' | 'multiple';
  validity: '30' | '90';
}

interface VIPOptions {
  serviceType: 'arrival' | 'departure' | 'both';
  language: string;
  airport: 'hanoi' | 'hochiminh' | 'danang' | 'laos';
}

interface PickupOptions {
  carType: 'sedan' | 'suv' | 'van' | 'limo';
  language: string;
  airport: 'hanoi' | 'hochiminh' | 'danang' | 'laos';
}

interface CharterOptions {
  carType: 'sedan2' | 'suv4' | 'van6' | 'bus8';
  language: string;
  airport: 'hanoi' | 'hochiminh' | 'danang' | 'laos';
}

interface AllOptions {
  visa: VisaOptions;
  vip: VIPOptions;
  pickup: PickupOptions;
  charter: CharterOptions;
}

// 修改 getStripeLink 函数的类型定义
const getStripeLink = (service: keyof AllOptions, options: AllOptions[typeof service]): string => {
  try {
    switch (service) {
      case 'visa': {
        const visaOptions = options as VisaOptions;
        return STRIPE_LINKS.visa[visaOptions.serviceType][visaOptions.validity];
      }
      case 'vip': {
        const vipOptions = options as VIPOptions;
        return STRIPE_LINKS.vip[vipOptions.serviceType][vipOptions.airport];
      }
      case 'pickup': {
        const pickupOptions = options as PickupOptions;
        return STRIPE_LINKS.pickup[pickupOptions.carType][pickupOptions.airport];
      }
      case 'charter': {
        const charterOptions = options as CharterOptions;
        return STRIPE_LINKS.charter[charterOptions.carType][charterOptions.airport];
      }
      default:
        return '#';
    }
  } catch (error) {
    console.error('Invalid options for stripe link:', error);
    return '#';
  }
};

// 价格和预订按钮组件
interface PriceAndBookProps {
  price: string;
  bookingText: string;
  service: keyof AllOptions;
  options: AllOptions[keyof AllOptions];
}

const PriceAndBook = ({ price, bookingText, service, options }: PriceAndBookProps) => {
  const handleBooking = () => {
    const stripeLink = getStripeLink(service, options);
    if (stripeLink !== '#') {
      window.open(stripeLink, '_blank');
    } else {
      alert('請先選擇所有必要的選項');
    }
  };

  return (
    <div className="pt-4">
      <div className="text-2xl font-bold text-[#0F1F3F] text-center mb-4">
        {price}
      </div>
      <Button
        className="w-full bg-[#0F1F3F] hover:bg-[#1A2F4F] text-white rounded-md transition-colors duration-200"
        onClick={handleBooking}
      >
        {bookingText}
      </Button>
    </div>
  );
};

// 服务详情组件
interface ServiceDetailsProps {
  planDetails: string;
  includes: string;
  includesList: string[];
  note: string;
  terms: string;
  termsList: string[];
}

const ServiceDetails = ({ planDetails, includes, includesList, note, terms, termsList }: ServiceDetailsProps) => (
  <Card className="shadow-lg rounded-xl border border-gray-100">
    <CardContent className="p-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-[#0F1F3F] mb-4">
            {planDetails}
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">{includes}</h4>
              <ul className="list-disc list-inside space-y-2">
                {includesList.map((item, index) => (
                  <li key={index} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm text-gray-500 italic">{note}</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-2">{terms}</h4>
          <ul className="list-disc list-inside space-y-2">
            {termsList.map((item, index) => (
              <li key={index} className="text-gray-600">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

// 签证服务选项组件
interface VisaOptionsProps {
  t: any;
  selectedOptions: VisaOptions;
  onOptionsChange: (options: VisaOptions) => void;
}

const VisaOptions = ({ t, selectedOptions, onOptionsChange }: VisaOptionsProps) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-[#0F1F3F] mb-4">{t.booking.serviceOptions.visa.title}</h3>
    <div>
      <h4 className="mb-2">{t.booking.serviceOptions.visa.options.single}</h4>
      <div className="inline-flex flex-wrap gap-2">
        {[
          { id: "single" as const, label: t.booking.serviceOptions.visa.options.single },
          { id: "multiple" as const, label: t.booking.serviceOptions.visa.options.multiple }
        ].map((type) => (
          <OptionButton
            key={type.id}
            id={type.id}
            label={type.label}
            isSelected={selectedOptions.serviceType === type.id}
            onClick={() => onOptionsChange({ ...selectedOptions, serviceType: type.id })}
          />
        ))}
      </div>
    </div>
    <div>
      <h4 className="mb-2">{t.booking.serviceOptions.visa.validity['30']}</h4>
      <div className="inline-flex flex-wrap gap-2">
        {[
          { id: "30" as const, label: t.booking.serviceOptions.visa.validity['30'] },
          { id: "90" as const, label: t.booking.serviceOptions.visa.validity['90'] }
        ].map((period) => (
          <OptionButton
            key={period.id}
            id={period.id}
            label={period.label}
            isSelected={selectedOptions.validity === period.id}
            onClick={() => onOptionsChange({ ...selectedOptions, validity: period.id })}
          />
        ))}
      </div>
    </div>
  </div>
);

// VIP服务选项组件
interface VIPOptionsProps {
  t: any;
  selectedOptions: VIPOptions;
  onOptionsChange: (options: VIPOptions) => void;
}

const VIPOptions = ({ t, selectedOptions, onOptionsChange }: VIPOptionsProps) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-[#0F1F3F] mb-4">{t.booking.serviceOptions.vip.title}</h3>
    <div>
      <h4 className="mb-2">{t.booking.locations.hanoi}</h4>
      <div className="inline-flex flex-wrap gap-2">
        {[
          { id: "hanoi" as const, label: t.booking.locations.hanoi },
          { id: "hochiminh" as const, label: t.booking.locations.hochiminh },
          { id: "danang" as const, label: t.booking.locations.danang },
          { id: "laos" as const, label: t.booking.locations.laos }
        ].map((airport) => (
          <OptionButton
            key={airport.id}
            id={airport.id}
            label={airport.label}
            isSelected={selectedOptions.airport === airport.id}
            onClick={() => onOptionsChange({ ...selectedOptions, airport: airport.id })}
          />
        ))}
      </div>
    </div>
    <div>
      <h4 className="mb-2">{t.booking.serviceOptions.vip.options.arrival}</h4>
      <div className="inline-flex flex-wrap gap-2">
        {[
          { id: "arrival" as const, label: t.booking.serviceOptions.vip.options.arrival },
          { id: "departure" as const, label: t.booking.serviceOptions.vip.options.departure },
          { id: "both" as const, label: t.booking.serviceOptions.vip.options.both }
        ].map((type) => (
          <OptionButton
            key={type.id}
            id={type.id}
            label={type.label}
            isSelected={selectedOptions.serviceType === type.id}
            onClick={() => onOptionsChange({ ...selectedOptions, serviceType: type.id })}
          />
        ))}
      </div>
    </div>
    <div>
      <h4 className="mb-2">{t.booking.language.local}</h4>
      <div className="inline-flex flex-wrap gap-2">
        {[
          { id: "local", label: t.booking.language.local },
          { id: "chinese", label: t.booking.language.chinese },
          { id: "english", label: t.booking.language.english },
          { id: "other", label: t.booking.language.other }
        ].map((lang) => (
          <OptionButton
            key={lang.id}
            id={lang.id}
            label={lang.label}
            isSelected={selectedOptions.language === lang.id}
            onClick={() => onOptionsChange({ ...selectedOptions, language: lang.id })}
          />
        ))}
      </div>
    </div>
  </div>
);

// Pickup服务选项组件
interface PickupOptionsProps {
  t: any;
  selectedOptions: PickupOptions;
  onOptionsChange: (options: PickupOptions) => void;
}

const PickupOptions = ({ t, selectedOptions, onOptionsChange }: PickupOptionsProps) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-[#0F1F3F] mb-4">{t.booking.serviceOptions.pickup.title}</h3>
    <div>
      <h4 className="mb-2">{t.booking.locations.hanoi}</h4>
      <div className="inline-flex flex-wrap gap-2">
        {[
          { id: "hanoi" as const, label: t.booking.locations.hanoi },
          { id: "hochiminh" as const, label: t.booking.locations.hochiminh },
          { id: "danang" as const, label: t.booking.locations.danang },
          { id: "laos" as const, label: t.booking.locations.laos }
        ].map((airport) => (
          <OptionButton
            key={airport.id}
            id={airport.id}
            label={airport.label}
            isSelected={selectedOptions.airport === airport.id}
            onClick={() => onOptionsChange({ ...selectedOptions, airport: airport.id })}
          />
        ))}
      </div>
    </div>
    <div>
      <h4 className="mb-2">{t.booking.serviceOptions.pickup.options.sedan}</h4>
      <div className="inline-flex flex-wrap gap-2">
        {[
          { id: "sedan" as const, label: t.booking.serviceOptions.pickup.options.sedan },
          { id: "suv" as const, label: t.booking.serviceOptions.pickup.options.suv },
          { id: "van" as const, label: t.booking.serviceOptions.pickup.options.van },
          { id: "limo" as const, label: t.booking.serviceOptions.pickup.options.limo }
        ].map((car) => (
          <OptionButton
            key={car.id}
            id={car.id}
            label={car.label}
            isSelected={selectedOptions.carType === car.id}
            onClick={() => onOptionsChange({ ...selectedOptions, carType: car.id })}
          />
        ))}
      </div>
    </div>
    <div>
      <h4 className="mb-2">{t.booking.language.local}</h4>
      <div className="inline-flex flex-wrap gap-2">
        {[
          { id: "local", label: t.booking.language.local },
          { id: "chinese", label: t.booking.language.chinese },
          { id: "english", label: t.booking.language.english }
        ].map((lang) => (
          <OptionButton
            key={lang.id}
            id={lang.id}
            label={lang.label}
            isSelected={selectedOptions.language === lang.id}
            onClick={() => onOptionsChange({ ...selectedOptions, language: lang.id })}
          />
        ))}
      </div>
    </div>
  </div>
);

// Charter服务选项组件
interface CharterOptionsProps {
  t: any;
  selectedOptions: CharterOptions;
  onOptionsChange: (options: CharterOptions) => void;
}

const CharterOptions = ({ t, selectedOptions, onOptionsChange }: CharterOptionsProps) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-[#0F1F3F] mb-4">{t.booking.serviceOptions.charter.title}</h3>
    <div>
      <h4 className="mb-2">{t.booking.locations.hanoi}</h4>
      <div className="inline-flex flex-wrap gap-2">
        {[
          { id: "hanoi" as const, label: t.booking.locations.hanoi },
          { id: "hochiminh" as const, label: t.booking.locations.hochiminh },
          { id: "danang" as const, label: t.booking.locations.danang },
          { id: "laos" as const, label: t.booking.locations.laos }
        ].map((airport) => (
          <OptionButton
            key={airport.id}
            id={airport.id}
            label={airport.label}
            isSelected={selectedOptions.airport === airport.id}
            onClick={() => onOptionsChange({ ...selectedOptions, airport: airport.id })}
          />
        ))}
      </div>
    </div>
    <div>
      <h4 className="mb-2">{t.booking.serviceOptions.charter.options.sedan2}</h4>
      <div className="inline-flex flex-wrap gap-2">
        {[
          { id: "sedan2" as const, label: t.booking.serviceOptions.charter.options.sedan2 },
          { id: "suv4" as const, label: t.booking.serviceOptions.charter.options.suv4 },
          { id: "van6" as const, label: t.booking.serviceOptions.charter.options.van6 },
          { id: "bus8" as const, label: t.booking.serviceOptions.charter.options.bus8 }
        ].map((car) => (
          <OptionButton
            key={car.id}
            id={car.id}
            label={car.label}
            isSelected={selectedOptions.carType === car.id}
            onClick={() => onOptionsChange({ ...selectedOptions, carType: car.id })}
          />
        ))}
      </div>
    </div>
    <div>
      <h4 className="mb-2">{t.booking.language.local}</h4>
      <div className="inline-flex flex-wrap gap-2">
        {[
          { id: "local", label: t.booking.language.local },
          { id: "chinese", label: t.booking.language.chinese },
          { id: "english", label: t.booking.language.english },
          { id: "other", label: t.booking.language.other }
        ].map((lang) => (
          <OptionButton
            key={lang.id}
            id={lang.id}
            label={lang.label}
            isSelected={selectedOptions.language === lang.id}
            onClick={() => onOptionsChange({ ...selectedOptions, language: lang.id })}
          />
        ))}
      </div>
    </div>
  </div>
);

// 主组件
export default function Booking() {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedService, setSelectedService] = useState<keyof AllOptions>("visa");
  const [selectedOptions, setSelectedOptions] = useState<AllOptions>({
    visa: {
      serviceType: 'single',
      validity: "30"
    },
    vip: {
      serviceType: 'arrival',
      language: "",
      airport: 'hanoi'
    },
    pickup: {
      carType: 'sedan',
      language: "",
      airport: 'hanoi'
    },
    charter: {
      carType: 'sedan2',
      language: "",
      airport: 'hanoi'
    }
  });

  const calculatePrice = (service: string) => {
    switch (service) {
      case "visa":
        const basePrice = 34.49;
        const validityFee = selectedOptions.visa.validity === "90" ? 15 : 0;
        const typeFee = selectedOptions.visa.serviceType === "multiple" ? 20 : 0;
        return `S$ ${(basePrice + validityFee + typeFee).toFixed(2)}`;
      case "vip":
        return "S$ 88.00";
      case "pickup":
        return t.booking.common.from + "S$ 30.00";
      case "charter":
        return t.booking.common.from + "S$ 50.00";
      default:
        return "計算中...";
    }
  };

  const handleBook = () => {
    // 处理预订逻辑
    console.log('Booking:', selectedService, selectedOptions[selectedService as keyof typeof selectedOptions]);
  };

  return (
    <section className="py-16 bg-[#F8F9FA]" id="booking">
      <div className="container mx-auto px-4 pt-[15px]">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 relative pb-4
            after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
            after:w-20 after:h-1 after:bg-[#D4B254] text-[#0F1F3F]">
            {t.booking.title}
          </h2>
        </div>

        {/* 服务选择按钮组 */}
        <div className="flex justify-center gap-4 mb-8">
          {[
            { id: "visa", label: t.booking.serviceOptions.visa.name },
            { id: "vip", label: t.booking.serviceOptions.vip.name },
            { id: "pickup", label: t.booking.serviceOptions.pickup.name },
            { id: "charter", label: t.booking.serviceOptions.charter.name }
          ].map((service) => (
            <ServiceButton
              key={service.id}
              serviceId={service.id}
              label={service.label}
              isSelected={selectedService === service.id}
              onClick={() => setSelectedService(service.id as keyof AllOptions)}
            />
          ))}
        </div>

        {/* 服务选项和说明区域 */}
        <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* 左侧：选项区域 */}
          <Card className="col-span-8 shadow-lg rounded-xl border border-gray-100">
            <CardContent className="p-8">
              {selectedService === "visa" && (
                <>
                  <VisaOptions
                    t={t}
                    selectedOptions={selectedOptions.visa}
                    onOptionsChange={(options) => setSelectedOptions({ ...selectedOptions, visa: options })}
                  />
                  <PriceAndBook
                    price={calculatePrice("visa")}
                    bookingText={t.booking.common.bookNow}
                    service="visa"
                    options={selectedOptions.visa}
                  />
                </>
              )}
              {selectedService === "vip" && (
                <>
                  <VIPOptions
                    t={t}
                    selectedOptions={selectedOptions.vip}
                    onOptionsChange={(options) => setSelectedOptions({ ...selectedOptions, vip: options })}
                  />
                  <PriceAndBook
                    price={calculatePrice("vip")}
                    bookingText={t.booking.common.bookNow}
                    service="vip"
                    options={selectedOptions.vip}
                  />
                </>
              )}
              {selectedService === "pickup" && (
                <>
                  <PickupOptions
                    t={t}
                    selectedOptions={selectedOptions.pickup}
                    onOptionsChange={(options) => setSelectedOptions({ ...selectedOptions, pickup: options })}
                  />
                  <PriceAndBook
                    price={calculatePrice("pickup")}
                    bookingText={t.booking.common.bookNow}
                    service="pickup"
                    options={selectedOptions.pickup}
                  />
                </>
              )}
              {selectedService === "charter" && (
                <>
                  <CharterOptions
                    t={t}
                    selectedOptions={selectedOptions.charter}
                    onOptionsChange={(options) => setSelectedOptions({ ...selectedOptions, charter: options })}
                  />
                  <PriceAndBook
                    price={calculatePrice("charter")}
                    bookingText={t.booking.common.bookNow}
                    service="charter"
                    options={selectedOptions.charter}
                  />
                </>
              )}
            </CardContent>
          </Card>

          {/* 右侧：服务说明区域 */}
          <div className="col-span-4">
            <ServiceDetails
              planDetails={t.booking.common.planDetails}
              includes={t.booking.common.includes}
              includesList={t.booking.serviceOptions[selectedService as keyof typeof t.booking.serviceOptions].details.includes}
              note={t.booking.serviceOptions[selectedService as keyof typeof t.booking.serviceOptions].details.note}
              terms={t.booking.common.terms}
              termsList={t.booking.terms}
            />
          </div>
        </div>
      </div>
    </section>
  );
}