import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-20 overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-[scale_20s_ease-in-out_infinite_alternate]"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            transform: 'scale(1.1)'
          }}
        ></div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/85"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        {/* Logo */}
        <div className="flex justify-center animate-fade-in">
          <img src={logo} alt="CVG Engenharia de Projetos" className="h-32 md:h-40 w-auto" />
        </div>
        
        {/* Subtitle */}
        <div className="animate-fade-in">
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Soluções especializadas em engenharia ambiental e florestal com excelência técnica e sustentabilidade
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button size="lg" onClick={scrollToServices} className="text-lg bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
            Conheça nossos serviços
            <ArrowRight className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-lg hover:shadow-xl transition-all backdrop-blur-sm bg-background/50">
            <a href="https://wa.me/5547988477086" target="_blank" rel="noopener noreferrer">
              Entre em contato
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
