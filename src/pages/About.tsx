import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import HeroAbout from "@/components/about/HeroAbout";
import StatsSection from "@/components/about/StatsSection";
import VisionSection from "@/components/about/VisionSection";
import FeaturesSection from "@/components/about/FeaturesSection";
import HowItWorksSection from "@/components/about/HowItWorksSection";
import WhyChooseUsSection from "@/components/about/WhyChooseUsSection";
import StorySection from "@/components/about/StorySection";
import TeamSection from "@/components/about/TeamSection";
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
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
