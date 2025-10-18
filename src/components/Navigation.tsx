import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src={logo} alt="CVG Engenharia" className="h-12" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('empresa')} className="text-foreground hover:text-primary transition-colors font-medium">
              A Empresa
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors font-medium">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-foreground hover:text-primary transition-colors font-medium">
              Fale Conosco
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('empresa')} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium">
              A Empresa
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contato')} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium">
              Fale Conosco
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
