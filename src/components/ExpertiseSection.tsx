import { CheckCircle2, Award, Star, Shield } from "lucide-react";

const ExpertiseSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ihr Experte für <span className="text-primary">nachhaltige Kapitalanlage</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Moritz Graf ist Immobilien-Kapitalanlageberater mit spezialisierten Kenntnissen in KfW 40, 
              QNG-Standards, Photovoltaik-Integration und Dresden als Wachstumsstandort.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Mit fundierter Expertise hat Moritz Graf zahlreiche erfolgreiche Investitionen begleitet 
              und unterstützt Anleger dabei, nachhaltige und profitable Immobilieninvestments zu realisieren.
            </p>

            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="text-base text-muted-foreground italic">
                "Mein Fokus liegt auf transparenter Beratung, steueroptimierten Strategien und 
                zukunftssicheren Investments mit echtem Mehrwert."
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-primary-light rounded-lg border border-primary/20">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Zertifizierte Expertise</h4>
                <p className="text-sm text-muted-foreground">IHK-geprüfter Immobilien-Fachberater mit Spezialisierung auf nachhaltige Kapitalanlagen</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-primary-light rounded-lg border border-primary/20">
              <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">100% Erfolgsquote</h4>
                <p className="text-sm text-muted-foreground">Alle vermittelten Objekte wurden erfolgreich platziert und entwickeln sich plangemäß</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-primary-light rounded-lg border border-primary/20">
              <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">4.9/5 Kundenzufriedenheit</h4>
                <p className="text-sm text-muted-foreground">Höchste Zufriedenheit durch persönliche Betreuung und transparente Kommunikation</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-primary-light rounded-lg border border-primary/20">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Transparent & Verlässlich</h4>
                <p className="text-sm text-muted-foreground">Klare Gebührenstruktur, keine versteckten Kosten, langfristige Partnerschaft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
