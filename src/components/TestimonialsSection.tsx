import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, Users, Award } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Mit Moritz habe ich die beste Kapitalanlage gemacht. Professionell, transparent und immer erreichbar. Die KfW 40 Förderung hat sich bereits ausgezahlt.",
      author: "Dr. Michael Weber",
      position: "Unternehmer, München"
    },
    {
      text: "Die Beratung war hervorragend. Moritz hat uns nicht nur ein rentables Objekt vermittelt, sondern auch die gesamte Finanzierung optimal strukturiert.",
      author: "Sandra Hoffmann",
      position: "IT-Managerin, Berlin"
    },
    {
      text: "Dank der PV-Integration und der erstklassigen Lage in Dresden sehe ich bereits nach einem Jahr positive Entwicklungen. Absolute Empfehlung!",
      author: "Thomas Schneider",
      position: "Architekt, Hamburg"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "€500M+", label: "Kapitalvolumen vermittelt" },
    { icon: Building, value: "350+", label: "Erfolgreiche Investitionen" },
    { icon: Users, value: "98%", label: "Klientenzufriedenheit" },
    { icon: Award, value: "100%", label: "Erfolgsquote" }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Warum Sie mir <span className="text-primary">vertrauen können</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-primary/20 hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="pt-2 border-t border-border">
                  <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Building = TrendingUp; // Placeholder since Building2 import is from MarketPositioning

export default TestimonialsSection;
