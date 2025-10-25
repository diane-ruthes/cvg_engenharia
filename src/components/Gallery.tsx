import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Eye } from "lucide-react";
import forestryMeasurement from "@/assets/gallery/forestry-measurement.jpg";
import leafInspection from "@/assets/gallery/leaf-inspection.jpg";
import equipmentWork from "@/assets/gallery/equipment-work.jpg";
import forestCanopy from "@/assets/gallery/forest-canopy.jpg";
import fieldMeasurement from "@/assets/gallery/field-measurement.jpg";
import forestInventory from "@/assets/gallery/forest-inventory.jpg";
import teamFieldwork from "@/assets/gallery/team-fieldwork.jpg";

const galleryImages = [
  { src: forestryMeasurement, alt: "Medição florestal profissional" },
  { src: leafInspection, alt: "Inspeção de folhas e vegetação" },
  { src: equipmentWork, alt: "Equipamentos em operação" },
  { src: forestCanopy, alt: "Cobertura florestal" },
  { src: fieldMeasurement, alt: "Medições em campo" },
  { src: forestInventory, alt: "Inventário florestal" },
  { src: teamFieldwork, alt: "Equipe em trabalho de campo" },
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-20 px-4 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nosso Trabalho
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto pt-4">
            Conheça alguns dos nossos projetos e atividades em campo
          </p>
        </div>
        
        {/* Carousel */}
        <div className="relative group">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-card shadow-lg hover:shadow-2xl transition-all duration-300 group/image">
                      {/* Image */}
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="flex items-center gap-2 text-white">
                          <Eye className="w-5 h-5" />
                          <span className="text-sm font-medium">{image.alt}</span>
                        </div>
                      </div>

                      {/* Border gradient on hover */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/image:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-foreground border-0 shadow-lg hover:shadow-xl transition-all duration-300" />
          </Carousel>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl -z-10"></div>
        </div>

        {/* Info Box */}
        <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
          <p className="text-center text-muted-foreground">
            Todos os projetos são executados com rigor técnico, segurança e respeito ao meio ambiente. 
            <a href="https://wa.me/5547988477086" target="_blank" rel="noopener noreferrer" className="ml-2 text-primary hover:text-secondary font-semibold transition-colors">
              Saiba mais sobre nossos projetos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

