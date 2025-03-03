export default function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://source.unsplash.com/random/1920x1080?vietnam,travel')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,31,63,0.8)] via-[rgba(0,71,171,0.4)] to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl ml-[5%] text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            越南 | 體驗超越想像的頂級旅遊
          </h1>
          <p className="text-xl mb-8 opacity-90">
            從簽證安排到專屬接送，從貴賓通關到量身定制的旅遊體驗，我們打造無與倫比的越南之旅
          </p>
          <a 
            href="#services"
            className="inline-block bg-[#D2973F] hover:bg-[#FF8534] text-white px-8 py-4 rounded font-semibold uppercase tracking-wider transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
          >
            探索我們的服務
          </a>
        </div>
      </div>
    </section>
  );
}
