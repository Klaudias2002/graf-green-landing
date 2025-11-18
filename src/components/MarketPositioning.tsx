import { Building2, Leaf, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import pvAnlagenImage from "@/assets/pv-anlagen.png";

const MarketPositioning = () => {
  const features = [
    {
      icon: Building2,
      title: "Silicon Saxony Boom",
      points: [
        "€26 Mrd. Investitionen von Infineon, GlobalFoundries, Bosch, TSMC",
        "15.000+ neue Arbeitsplätze bis 2030",
        "€13 Mrd./Jahr Wertschöpfung",
        "Massiv unterversorgter Wohnungsmarkt = steigende Mieten & Wertsteigerungen"
      ]
    },
    {
      icon: Leaf,
      title: "KfW 40 & QNG-Standard",
      points: [
        "Energieeffizienz = niedrige Nebenkosten für Mieter = höhere Mietrendite",
        "Staatliche Förderung = bessere Finanzierungskonditionen",
        "Zukunftssicherheit = langfristige Wertstabilität",
        "Steueroptimierung = attraktive Abschreibungen"
      ]
    },
    {
      icon: Sun,
      title: "Photovoltaik-Integration",
      points: [
        "Passive Rendite durch PV-Anlagen & Eigenverbrauchsmodelle",
        "EEG-Reform 2025: Fokus auf Eigenverbrauch = höhere Rentabilität",
        "Mieterstrommodelle für Mehrfamilienhäuser",
        "Zusätzliche Wertschöpfung"
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Warum Dresden & Silicon Saxony die <span className="text-primary">TOP-LAGE</span> für Immobilienanlage ist
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-transparent hover:border-l-primary bg-card"
            >
              <CardContent className="p-5 sm:p-6 space-y-4">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* PV-Anlagen Image Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={pvAnlagenImage} 
              alt="Photovoltaik-Anlagen für nachhaltige Energiegewinnung" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-lg font-semibold">
                Photovoltaik-Integration für maximale Rendite und Nachhaltigkeit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPositioning;
