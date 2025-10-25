import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-border' 
        : 'bg-background/50 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-200" 
            onClick={() => scrollToSection('home')}
          >
            <img src={logo} alt="CVG Engenharia" className="h-12 w-auto" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <button 
              onClick={() => scrollToSection('home')} 
              className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('empresa')} 
              className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              A Empresa
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              Fale Conosco
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border animate-in fade-in duration-200">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-medium rounded"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('empresa')} 
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-medium rounded"
            >
              A Empresa
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-medium rounded"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors font-medium rounded"
            >
              Fale Conosco
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

