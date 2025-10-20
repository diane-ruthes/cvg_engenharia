import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
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
    <section id="galeria" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          Nosso Trabalho
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Conheça alguns dos nossos projetos e atividades em campo
        </p>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
