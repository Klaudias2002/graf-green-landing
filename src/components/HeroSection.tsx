import { Button } from "@/components/ui/button";
import { TrendingUp, Award } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Nachhaltiger Vermögensaufbau durch{" "}
              <span className="text-primary">intelligente Immobilienkapitalanlage</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base text-muted-foreground font-medium">
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                KfW 40
              </span>
              <span className="w-1 h-1 bg-primary rounded-full" />
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                QNG-zertifiziert
              </span>
              <span className="w-1 h-1 bg-primary rounded-full" />
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                Photovoltaik-Integration
              </span>
              <span className="w-1 h-1 bg-primary rounded-full" />
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                Dresden Silicon Saxony
              </span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Professionelle Kapitalanlageberatung für Investoren, die Rendite mit Nachhaltigkeit verbinden möchten. 
            Ertragsstarke Properties in TOP-Lagen Deutschlands mit neuester Energieeffizienz und Förderoptimierung.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-lg px-8 py-6 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:scale-105"
            >
              Kostenlose Beratung buchen
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6 transition-all duration-300"
            >
              Mehr erfahren
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="font-semibold">26 Mrd. Euro</span> Investitionen
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="font-semibold">15.000+</span> neue Arbeitsplätze bis 2030
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
