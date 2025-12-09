import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CategorySections } from "@/components/home/CategorySections";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <CategorySections />
        <ServicesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
