import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ProductsSection from "@/components/ProductsSection";
import BenefitsSection from "@/components/BenefitsSection";
import NutritionSection from "@/components/NutritionSection";
import FarmGallerySection from "@/components/FarmGallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StorySection />
        <ProductsSection />
        <NutritionSection />
        <BenefitsSection />
        <FarmGallerySection />
      </main>
      <Footer />
    </div>
  );
}
