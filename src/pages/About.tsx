import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import HeroAbout from "@/components/about/HeroAbout";
import StatsSection from "@/components/about/StatsSection";
import VisionSection from "@/components/about/VisionSection";
import FeaturesSection from "@/components/about/FeaturesSection";
import HowItWorksSection from "@/components/about/HowItWorksSection";
import WhyChooseUsSection from "@/components/about/WhyChooseUsSection";
import StorySection from "@/components/about/StorySection";
import ValuesSection from "@/components/about/ValuesSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import TeamSection from "@/components/about/TeamSection";
import FAQSection from "@/components/about/FAQSection";
import CTASection from "@/components/about/CTASection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroAbout />
        <StatsSection />
        <VisionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <StorySection />
        <ValuesSection />
        <TestimonialsSection />
        <TeamSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
