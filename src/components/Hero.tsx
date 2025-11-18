import { useState, useEffect } from "react";
import img1 from "@/assets/hero_images/img_1_enhanced.png";
import img2 from "@/assets/hero_images/img_2_enhanced.png";
import img3 from "@/assets/hero_images/img_3_enhanced.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      image: img1, 
      alt: "Flor roxa em campo aberto",
      titlePart: "CVG Engenharia e projetos",
      subtitlePart: "consultoria especializada em manejo florestal e gestão ambiental."
    },
    { 
      image: img2, 
      alt: "Árvore alta em floresta nativa",
      titlePart: "Consultoria Técnica",
      subtitlePart: "em Silvicultura, Restauração e Gestão Ambiental."
    },
    { 
      image: img3, 
      alt: "Planta com frutos vermelhos",
      titlePart: "Atuação especializada",
      subtitlePart: "em todo o ciclo florestal, garantindo produtividade, conformidade e equilíbrio ambiental."
    },
  ];

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
      <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10 px-4">
        {/* Texto de Sobreposição - Dinâmico por Slide */}
        <div className="animate-fade-in space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg whitespace-nowrap">
            {slides[currentSlide].titlePart}
          </h1>
          <p className="text-2xl md:text-4xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-semibold">
            {slides[currentSlide].subtitlePart}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

