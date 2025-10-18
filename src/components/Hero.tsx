import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/20 to-background px-4 pt-20">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
          CVG Engenharia
          <span className="block text-secondary mt-2">de Projetos</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Soluções especializadas em engenharia ambiental e florestal com excelência técnica e sustentabilidade
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={scrollToServices} className="text-lg bg-primary hover:bg-primary/90">
            Conheça nossos serviços
            <ArrowRight className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
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
