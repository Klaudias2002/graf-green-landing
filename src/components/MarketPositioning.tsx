import { Building2, Leaf, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="py-20 px-6 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Warum Dresden & Silicon Saxony die <span className="text-primary">TOP-LAGE</span> für Immobilienanlage ist
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-transparent hover:border-l-primary bg-card"
            >
              <CardContent className="p-6 space-y-4">
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
      </div>
    </section>
  );
};

export default MarketPositioning;
