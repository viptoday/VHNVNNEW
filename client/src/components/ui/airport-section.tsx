const airports = [
  {
    city: "河內 (Hanoi)",
    description: "越南首都，兼具千年歷史與現代都市魅力"
  },
  {
    city: "峴港 (Danang)",
    description: "中越度假勝地，擁有世界級海灘與景觀"
  },
  // Add other airports...
];

export default function AirportSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#D2973F]">
            全越南機場 VIP 服務網絡
          </h2>
          <p className="text-gray-600 text-lg">
            無論您從哪個城市進入越南，VIPTODAY 都能為您提供無縫貴賓服務
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {airports.map((airport, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md relative overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#0F6E9A] group-hover:w-full group-hover:opacity-10 transition-all duration-300" />
              <h3 className="text-xl font-semibold text-[#0F6E9A] mb-4 relative z-10">
                {airport.city}
              </h3>
              <p className="text-gray-600 relative z-10">
                {airport.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
