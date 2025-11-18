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
  return <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden pt-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Moderne Immobilien in Dresden" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="max-w-3xl space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="mb-6">
            <img src={logo} alt="Graf Bernstorff Consulting" className="h-20 w-auto" />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Nachhaltiger Vermögensaufbau durch{" "}
              <span className="text-primary-light">intelligente Immobilienkapitalanlage</span>
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-white/90 font-medium">
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Award className="w-4 h-4 text-primary-light" />
                KfW 40
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Award className="w-4 h-4 text-primary-light" />
                QNG-zertifiziert
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Award className="w-4 h-4 text-primary-light" />
                Photovoltaik-Integration
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <TrendingUp className="w-4 h-4 text-primary-light" />
                Dresden Silicon Saxony
              </span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Professionelle Kapitalanlageberatung für Investoren, die Rendite mit Nachhaltigkeit verbinden möchten. 
            Ertragsstarke Properties in TOP-Lagen Deutschlands mit neuester Energieeffizienz und Förderoptimierung.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-lg px-8 py-6 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:scale-105">
              Kostenlose Beratung buchen
            </Button>
            
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-8">
            <div className="flex items-center gap-2 text-sm text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-primary-light rounded-full" />
              <span className="font-semibold">26 Mrd. Euro</span> Investitionen
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-primary-light rounded-full" />
              <span className="font-semibold">15.000+</span> neue Arbeitsplätze bis 2030
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;