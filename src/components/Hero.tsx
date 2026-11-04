import { useState, useEffect } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import img1 from "@/assets/hero/paisagem-floresta.webp";
import img2 from "@/assets/hero/sementes-nativas.webp";
import img3 from "@/assets/hero/campo-rupestre.webp";
import { contact, yearsOfExperience } from "@/lib/site";

const slides = [
  { image: img1, alt: "Paisagem de floresta nativa com serra ao fundo" },
  { image: img2, alt: "Frutos e sementes de espécie nativa em meio à mata" },
  { image: img3, alt: "Vegetação de campo rupestre sobre solo rochoso" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden bg-forest">
      {/* Imagens de fundo */}
      <div className="absolute inset-0" aria-hidden={false}>
        {slides.map((slide, index) => (
          <div
            key={slide.alt}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className={`w-full h-full object-cover ${index === current ? "animate-hero-zoom" : ""}`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
        {/* Sombreado para leitura do texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-forest/20 md:bg-gradient-to-r md:from-forest/90 md:via-forest/55 md:to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:py-32">
        <div className="max-w-2xl text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-white/90 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[hsl(110_55%_60%)]" />
            CVG Engenharia & Projetos · desde 2020
          </p>

          <h1 className="mt-6 text-[2.35rem] leading-[1.08] sm:text-5xl lg:text-6xl font-semibold text-white">
            Engenharia florestal e ambiental com rigor técnico
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-xl">
            Consultoria especializada em manejo florestal, restauração e gestão ambiental — atuando em todo o
            ciclo florestal, com produtividade, conformidade e equilíbrio ambiental.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              Conheça os serviços
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 max-w-md border-t border-white/20 pt-6 text-white">
            <div>
              <dt className="text-xs sm:text-sm text-white/70">Anos de atuação</dt>
              <dd className="font-display text-2xl sm:text-3xl font-semibold">{yearsOfExperience()}+</dd>
            </div>
            <div>
              <dt className="text-xs sm:text-sm text-white/70">Projetos</dt>
              <dd className="font-display text-2xl sm:text-3xl font-semibold">50+</dd>
            </div>
            <div>
              <dt className="text-xs sm:text-sm text-white/70">Estados</dt>
              <dd className="font-display text-2xl sm:text-3xl font-semibold">3</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-6 right-4 sm:right-8 z-20 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.alt}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current ? "bg-white w-8" : "bg-white/45 w-3 hover:bg-white/75"
            }`}
            aria-label={`Mostrar imagem ${index + 1}`}
            aria-current={index === current}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
