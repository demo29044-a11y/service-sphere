import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroAbout = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
      <div 
        ref={ref}
        className={`container mx-auto px-4 text-center transition-all duration-700 ${
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
