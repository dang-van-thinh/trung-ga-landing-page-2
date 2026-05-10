import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663344183182/nd8DyymyeUHes9kHCxyub5/sadu_hero_eggs-ZVCw9JTetRuYExuwjAHfxZ.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 drop-shadow-lg">
          Trứng Gà Thảo Dược Sadu
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md font-light">
          "Vàng Ròng" Từ Thiên Nhiên – Thơm Ngon, Không Tanh, Cholesterol Cực Thấp
        </p>
        <p className="text-lg text-white/90 mb-12 drop-shadow-md max-w-2xl mx-auto">
          Lựa chọn tinh túy cho sức khỏe gia đình bạn. 100% thảo dược tự nhiên, 0% kháng sinh tồn dư.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-lg font-semibold group"
          >
            Khám Phá Ngay
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-lg font-semibold"
          >
            Tìm Cửa Hàng
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-8 text-white">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">100%</span>
            <span className="text-sm text-white/80">Thảo Dược Tự Nhiên</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">0%</span>
            <span className="text-sm text-white/80">Kháng Sinh Tồn Dư</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">1/3</span>
            <span className="text-sm text-white/80">Cholesterol Thường</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
