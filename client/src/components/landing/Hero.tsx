import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583417319070-4a69db38a482')] 
        bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1D36]/95 via-[#0A1D36]/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white space-y-6 ml-[5%]">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            越南 | 體驗超越想像的頂級旅遊
          </h1>
          <p className="text-xl opacity-90">
            從簽證安排到專屬接送，從貴賓通關到量身定制的旅遊體驗，我們打造無與倫比的越南之旅
          </p>
          <Button 
            size="lg"
            className="bg-[#C4A052] hover:bg-[#D4B254] hover:translate-y-[-3px] transition-all duration-300
            text-white font-semibold tracking-wider uppercase shadow-lg"
          >
            探索我們的服務
          </Button>
        </div>
      </div>
    </section>
  );
}