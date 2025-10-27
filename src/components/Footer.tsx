import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-gradient-to-b from-foreground/5 to-foreground/10 border-t border-border">
      {/* Logo Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 border-b border-border">
        <img 
          src={logo} 
          alt="CVG Engenharia" 
          className="h-32 w-auto" 
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">CVG Engenharia</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Soluções especializadas em engenharia ambiental e florestal com excelência técnica e compromisso com a sustentabilidade.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('empresa')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  A Empresa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Galeria
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a 
                  href="https://wa.me/5547988477086" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  (47) 98847-7086
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Rio Negro, Paraná<br />Brasil
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Redes Sociais</h4>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-lg border-border hover:border-primary hover:text-primary transition-all"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-lg border-border hover:border-primary hover:text-primary transition-all"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-lg border-border hover:border-primary hover:text-primary transition-all"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} CVG Engenharia & Projetos. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>

      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
    </footer>
  );
};

export default Footer;

