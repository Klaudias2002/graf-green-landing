import { LineChart, Building, Sun, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: LineChart,
      title: "Kapitalanlageberatung",
      points: [
        "Marktanalyse & Standortbewertung",
        "KfW 40 / QNG-Qualifizierung",
        "Rentabilitätskalkulationen",
        "Steueroptimierung"
      ]
    },
    {
      icon: Building,
      title: "Projektentwicklung",
      points: [
        "Identifikation von Top-Projekten",
        "Vermittlung & Verhandlung",
        "Dokumentation & Vertragsabwicklung",
        "Begleitung bis zur Schlüsselübergabe"
      ]
    },
    {
      icon: Sun,
      title: "Photovoltaik-Investments",
      points: [
        "PV-Systemplanung für Immobilien",
        "Rentabilitätsanalyse & EEG-Modelle",
        "Mieterstrommodelle",
        "Langfristige Renditeoptimierung"
      ]
    },
    {
      icon: Settings,
      title: "Nachbetreuung & Verwaltung",
      points: [
        "Facility Management Support",
        "Mieterwechselmanagement",
        "Renditeoptimierung & Rebalancing",
        "Kontinuierliche Beratung"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meine <span className="text-primary">Leistungen</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rundum-Betreuung von der ersten Analyse bis zur langfristigen Renditeoptimierung
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-transparent hover:border-l-primary hover:bg-primary-light bg-card"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary-light group-hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <ul className="space-y-2">
                  {service.points.map((point, i) => (
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

export default ServicesSection;
