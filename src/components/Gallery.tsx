import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import forestryMeasurement from "@/assets/gallery/forestry-measurement.webp";
import leafInspection from "@/assets/gallery/leaf-inspection.webp";
import equipmentWork from "@/assets/gallery/equipment-work.webp";
import forestCanopy from "@/assets/gallery/forest-canopy.webp";
import fieldMeasurement from "@/assets/gallery/field-measurement.webp";
import forestInventory from "@/assets/gallery/forest-inventory.webp";
import teamFieldwork from "@/assets/gallery/team-fieldwork.webp";
import { contact } from "@/lib/site";

const galleryImages = [
  { src: forestInventory, alt: "Inventário em floresta plantada com árvores numeradas" },
  { src: forestryMeasurement, alt: "Medição de circunferência com fita" },
  { src: teamFieldwork, alt: "Equipe em trabalho de campo" },
  { src: leafInspection, alt: "Coleta e identificação de material botânico" },
  { src: equipmentWork, alt: "Operação com trator em área de supressão" },
  { src: fieldMeasurement, alt: "Medição de diâmetro com paquímetro" },
  { src: forestCanopy, alt: "Dossel florestal em floração" },
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-forest text-forest-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <span className="section-eyebrow !text-[hsl(110_45%_65%)] before:!bg-[hsl(110_45%_65%)]">Galeria</span>
            <h2 className="section-title !text-forest-foreground mt-4">Nosso trabalho em campo</h2>
            <p className="section-lead !text-forest-foreground/75 mt-5">
              Projetos executados com rigor técnico, segurança e respeito ao meio ambiente.
            </p>
          </div>
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto inline-flex items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            Saiba mais sobre nossos projetos
          </a>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {galleryImages.map((image) => (
              <CarouselItem key={image.alt} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-black/20">
                  <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 pt-12 text-sm font-medium text-white">
                    {image.alt}
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex justify-end gap-3">
            <CarouselPrevious className="static translate-y-0 h-11 w-11 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white" />
            <CarouselNext className="static translate-y-0 h-11 w-11 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
