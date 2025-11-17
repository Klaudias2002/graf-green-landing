import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Vielen Dank!",
      description: "Ihre Anfrage wurde erfolgreich übermittelt. Ich melde mich zeitnah bei Ihnen.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      budget: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-primary-light">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Starten Sie Ihren Weg zu <span className="text-primary">intelligenter Kapitalanlage</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Erhalten Sie eine persönliche, kostenlose Beratung und lassen Sie sich zeigen, 
            wie Sie von Dresdens Wachstum und modernen KfW 40 Investments profitieren können.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-[var(--shadow-elegant)]">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input 
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Max Mustermann"
              className="focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-Mail *</Label>
            <Input 
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="max@beispiel.de"
              className="focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefon (optional)</Label>
            <Input 
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+49 123 456789"
              className="focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Kapitalanlage-Budget (optional)</Label>
            <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
              <SelectTrigger className="focus:ring-primary focus:border-primary">
                <SelectValue placeholder="Bitte wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="<50k">Unter 50.000 €</SelectItem>
                <SelectItem value="50-100k">50.000 - 100.000 €</SelectItem>
                <SelectItem value="100-250k">100.000 - 250.000 €</SelectItem>
                <SelectItem value="250k+">Über 250.000 €</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Nachricht / Fragen (optional)</Label>
            <Textarea 
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Teilen Sie mir mit, wie ich Ihnen helfen kann..."
              className="focus:ring-primary focus:border-primary min-h-32"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              type="submit"
              className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-lg py-6 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:scale-105"
            >
              Jetzt Beratungstermin buchen
            </Button>
            <Button 
              type="button"
              variant="outline"
              className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg py-6 transition-all duration-300"
            >
              Mehr erfahren
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Mit dem Absenden stimmen Sie unserer <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> zu.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
