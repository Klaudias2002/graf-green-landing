import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Kontakt</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@grafbernstorff-consulting.de" className="hover:text-primary transition-colors">
                  info@grafbernstorff-consulting.de
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+491638324762" className="hover:text-primary transition-colors">
                  +49 163 8324762
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Rohlstorf, Deutschland</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Rechtliches</h3>
            <div className="space-y-2 text-sm">
              <Link to="/impressum" className="block hover:text-primary transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="block hover:text-primary transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Über uns</h3>
            <p className="text-sm opacity-80">
              Graf Bernstorff Consulting ist Ihr Partner für nachhaltige und profitable 
              Immobilienkapitalanlagen mit Fokus auf KfW 40, QNG und Photovoltaik-Integration.
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>© 2025 Graf Bernstorff Consulting. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
