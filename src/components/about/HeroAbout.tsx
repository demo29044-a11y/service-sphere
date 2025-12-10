import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroBackground from "@/assets/about-hero-bg.jpg";

const HeroAbout = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      
      <div 
        ref={ref}
        className={`container mx-auto px-4 text-center relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
          Connecting People With Trusted Services Near Them
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Your one-stop platform to discover and connect with verified providers for machines, 
          contractors, land, homes, logistics, and many more essential services — all in one place.
        </p>
      </div>
    </section>
  );
};

export default HeroAbout;
