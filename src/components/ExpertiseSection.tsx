import { CheckCircle2, Award, Star, Shield } from "lucide-react";
import moritzGrafImage from "@/assets/moritz-graf.jpg";

const ExpertiseSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ihr Experte für <span className="text-primary">nachhaltige Kapitalanlage</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={moritzGrafImage} 
                alt="Moritz Graf - Immobilien Kapitalanlageberater" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-y-0 left-0 w-1 bg-primary" />
            </div>
          </div>

          {/* Bio Text & Trust Signals */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="space-y-4">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Moritz Graf ist Immobilien Kapitalanlageberater mit spezialisierten Kenntnissen in KfW 40, 
                QNG-Standards, Photovoltaik-Integration und Dresden als Wachstumsstandort.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Mit fundierter Expertise hat Moritz Graf zahlreiche erfolgreiche Investitionen begleitet 
                und dabei stets den Fokus auf Nachhaltigkeit, Rendite und Steueroptimierung gelegt.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="text-base text-muted-foreground italic">
                "Mein Fokus liegt auf transparenter Beratung, steueroptimierten Strategien und 
                zukunftssicheren Investments mit echtem Mehrwert."
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Zertifizierte Expertise</h4>
                  <p className="text-sm text-muted-foreground">IHK-geprüfter Immobilien-Fachberater</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">100% Erfolgsquote</h4>
                  <p className="text-sm text-muted-foreground">Alle Objekte erfolgreich platziert</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">4.9/5 Kundenzufriedenheit</h4>
                  <p className="text-sm text-muted-foreground">Höchste Zufriedenheit durch persönliche Betreuung</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Transparent & Verlässlich</h4>
                  <p className="text-sm text-muted-foreground">Klare Gebührenstruktur, keine versteckten Kosten</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
