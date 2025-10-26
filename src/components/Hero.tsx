import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import img1 from "@/assets/hero_images/img_1_enhanced.png";
import img2 from "@/assets/hero_images/img_2_enhanced.png";
import img3 from "@/assets/hero_images/img_3_enhanced.png";
import img4 from "@/assets/hero_images/img_4_enhanced.png";
import img5 from "@/assets/hero_images/img_5_enhanced.png";
import img6 from "@/assets/hero_images/img_6_enhanced.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: img1, alt: "Flor roxa em campo aberto" },
    { image: img2, alt: "Árvore alta em floresta nativa" },
    { image: img3, alt: "Planta com frutos vermelhos" },
    { image: img4, alt: "Plantas crescendo em solo rochoso" },
    { image: img5, alt: "Paisagem florestal com céu azul" },
    { image: img6, alt: "Flor vermelha em floresta" },
  ];

  const overlayText = "CVG Engenharia e projetos, consultoria especializada em florestas nativas e plantadas e gestão ambiental.";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToServices = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    document.getElementById('empresa')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Carrossel de Imagens */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            {/* Overlay escuro para melhor legibilidade do texto */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Controles do Carrossel */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicadores de Slide */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 w-2 hover:bg-white/75"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Conteúdo Sobreposto */}
      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10 px-4">
        {/* Texto de Sobreposição */}
        <div className="animate-fade-in space-y-6">
          <p className="text-lg md:text-xl text-white font-semibold max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            {overlayText}
          </p>
        </div>

        {/* Main Heading */}
        <div className="animate-fade-in space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Consultoria Técnica em Silvicultura, Manejo Florestal e Gestão Ambiental
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Atuação especializada em todo o ciclo florestal, garantindo produtividade, conformidade e equilíbrio ambiental.
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
            className="text-base border-2 border-white text-white hover:bg-white hover:text-foreground shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="https://wa.me/5547988477086" target="_blank" rel="noopener noreferrer">
              Entre em contato
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center gap-2 text-white hover:text-white/80 transition-colors drop-shadow-lg"
          aria-label="Scroll to next section"
        >
          <span className="text-xs font-medium">Saiba mais</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

