import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    document.getElementById('empresa')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative px-4 pt-20 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        {/* Logo */}
        <div className="flex justify-center animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl -z-10"></div>
            <img 
              src={logo} 
              alt="CVG Engenharia de Projetos" 
              className="h-48 md:h-64 w-auto drop-shadow-lg" 
            />
          </div>
        </div>
        
        {/* Main Heading */}
        <div className="animate-fade-in space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Engenharia Ambiental e Florestal
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluções especializadas com excelência técnica e compromisso com a sustentabilidade. Atendemos pequenas, médias e grandes empresas em toda a América Latina.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in pt-4">
          <Button 
            size="lg" 
            onClick={scrollToServices} 
            className="text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Conheça nossos serviços
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            asChild 
            className="text-base border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="https://wa.me/5547988477086" target="_blank" rel="noopener noreferrer">
              Entre em contato
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToNext}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to next section"
          >
            <span className="text-xs font-medium">Saiba mais</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

