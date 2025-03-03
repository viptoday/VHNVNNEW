export default function CustomTourSection() {
  const features = [
    {
      title: "光速規劃服務",
      description: "我們的旅遊專家團隊為您高效設計夢想中的越南之旅，量身打造獨一無二的行程"
    },
    {
      title: "私人定制行程",
      description: "不跟團，不走尋常路線，完全根據您的興趣、時間和節奏量身定制"
    },
    // Add other features...
  ];

  return (
    <section className="relative py-24 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://source.unsplash.com/random/1920x1080?vietnam,luxury')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,31,63,0.9)] to-[rgba(0,71,171,0.7)]" />
      
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#D2973F]">
          VIPTODAY 越南訂製遊
        </h2>
        <p className="text-center text-xl mb-16">
          遠離常規旅遊路線，體驗真正屬於您的獨特越南之旅
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-[#D4B254] mr-2">✦</span>
                {feature.title}
              </h3>
              <p className="text-white/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-block bg-[#D2973F] hover:bg-[#FF8534] text-white px-8 py-4 rounded font-semibold uppercase tracking-wider transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
          >
            預約專屬顧問
          </a>
        </div>
      </div>
    </section>
  );
}
