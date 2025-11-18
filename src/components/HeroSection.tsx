import { Button } from "@/components/ui/button";
import { TrendingUp, Award } from "lucide-react";
import heroImage from "@/assets/hero-dresden.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-[90vh] flex items-center px-4 sm:px-6 overflow-hidden pt-6 sm:pt-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Moderne Immobilien in Dresden" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="max-w-full sm:max-w-3xl space-y-6 sm:space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <img src={logo} alt="Graf Bernstorff Consulting" className="h-20 sm:h-24 md:h-28 w-auto" />
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight break-words">
              Nachhaltiger Vermögensaufbau durch{" "}
              <span className="text-primary-light">intelligente Immobilienkapitalanlage</span>
            </h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-white/90 font-medium">
              <span className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary-light flex-shrink-0" />
                <span>KfW 40</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary-light flex-shrink-0" />
                <span>QNG-zertifiziert</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-primary-light flex-shrink-0" />
                <span>PV-Integration</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-primary-light flex-shrink-0" />
                <span className="hidden sm:inline">Dresden Silicon Saxony</span>
                <span className="sm:hidden">Dresden</span>
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed">
            Professionelle Kapitalanlageberatung für Investoren, die Rendite mit Nachhaltigkeit verbinden möchten.
            Ertragsstarke Properties in TOP-Lagen Deutschlands mit neuester Energieeffizienz und Förderoptimierung.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:scale-105">
              Kostenlose Beratung buchen
            </Button>

          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-6 pt-4 sm:pt-6 md:pt-8">
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/80 bg-white/10 backdrop-blur-sm px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-light rounded-full flex-shrink-0" />
              <span><span className="font-semibold">26 Mrd.€</span> Invest.</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/80 bg-white/10 backdrop-blur-sm px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-light rounded-full flex-shrink-0" />
              <span><span className="font-semibold">15.000+</span> <span className="hidden sm:inline">neue</span> Jobs bis 2030</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;