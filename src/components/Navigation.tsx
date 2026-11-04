import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.webp";
import { navLinks } from "@/lib/site";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Menu principal">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center shrink-0" onClick={() => setIsOpen(false)}>
            <img
              src={logo}
              alt="CVG Engenharia & Projetos"
              width={600}
              height={408}
              className="h-12 md:h-16 w-auto"
            />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="px-3 lg:px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#formulario-contato"
              className="ml-3 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
            >
              Solicitar orçamento
            </a>
          </div>

          {/* Botão do menu no celular */}
          <button
            className="md:hidden -mr-2 p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Menu no celular */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-1 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#formulario-contato"
              onClick={() => setIsOpen(false)}
              className="mt-2 block text-center rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground"
            >
              Solicitar orçamento
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
