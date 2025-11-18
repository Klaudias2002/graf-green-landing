import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-start">
        <div className="flex items-center">
          <img src={logo} alt="Graf Bernstorff Consulting" className="h-12 w-auto" />
        </div>
      </div>
    </header>
  );
};

export default Header;
