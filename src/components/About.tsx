import { Award, Leaf, MapPin, Ruler } from "lucide-react";
import teamFieldwork from "@/assets/gallery/team-fieldwork.webp";
import fieldMeasurement from "@/assets/gallery/field-measurement.webp";
import { FOUNDING_YEAR, yearsOfExperience } from "@/lib/site";

const features = [
  {
    icon: Ruler,
    title: "Experiência em campo",
    description: `Desde ${FOUNDING_YEAR} levantando dados e entregando projetos de engenharia florestal e ambiental.`,
  },
  {
    icon: Award,
    title: "Excelência técnica",
    description: "Rigor metodológico e precisão em cada inventário, laudo e relatório entregue.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Soluções que conciliam a produção com a conservação dos recursos naturais.",
  },
];

const About = () => {
  return (
    <section id="empresa" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Imagens */}
        <div className="relative order-2 lg:order-1">
          <img
            src={teamFieldwork}
            alt="Equipe da CVG em trabalho de campo"
            loading="lazy"
            className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl"
          />
          <img
            src={fieldMeasurement}
            alt="Medição de diâmetro de árvore com paquímetro"
            loading="lazy"
            className="hidden sm:block absolute -bottom-10 -right-6 w-2/5 aspect-square object-cover rounded-2xl border-4 border-background shadow-xl"
          />
          <div className="absolute -top-5 -left-3 sm:-left-5 rounded-2xl bg-primary text-primary-foreground px-5 py-4 shadow-lg">
            <p className="font-display text-3xl font-semibold leading-none">{yearsOfExperience()}+</p>
            <p className="text-xs font-medium mt-1 opacity-90">anos de atuação</p>
          </div>
        </div>

        {/* Texto */}
        <div className="order-1 lg:order-2">
          <span className="section-eyebrow">A Empresa</span>
          <h2 className="section-title mt-4">Conhecimento técnico do campo ao relatório</h2>
          <p className="section-lead mt-6">
            A CVG Engenharia & Projetos é uma empresa brasileira especializada em soluções de engenharia florestal e
            ambiental. Atendemos pequenas, médias e grandes empresas, unindo trabalho de campo, análise de dados e
            compromisso com a sustentabilidade.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            Sede em Rio Negro, Paraná
          </p>

          <ul className="mt-10 space-y-6">
            {features.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-sans text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
