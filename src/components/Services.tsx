import { Trees, Leaf, FileCheck, Axe, BarChart3, Sprout, Check } from "lucide-react";
import forestInventory from "@/assets/services/forest-inventory.webp";
import restoration from "@/assets/services/restoration.webp";
import environmental from "@/assets/services/environmental.webp";
import suppression from "@/assets/services/suppression.webp";
import business from "@/assets/services/business.webp";
import carbon from "@/assets/services/carbon.webp";

const services = [
  {
    icon: Trees,
    title: "Inventário Florestal",
    description: "Levantamentos precisos e análises detalhadas de recursos florestais.",
    image: forestInventory,
    alt: "Tronco de árvore visto de baixo em floresta",
    items: [
      "Inventário em florestas plantadas",
      "Inventário em florestas nativas",
      "Estudos de fenologia",
      "Identificação botânica",
    ],
  },
  {
    icon: Sprout,
    title: "Restauração Florestal",
    description: "Projetos de recuperação e reflorestamento com espécies nativas.",
    image: restoration,
    alt: "Mudas florestais em tubetes no viveiro",
    items: [
      "Execução de PRAD e plantios compensatórios",
      "Monitoramento de restauração florestal",
      "Coleta de sementes florestais nativas",
      "Gestão de viveiros florestais",
    ],
  },
  {
    icon: FileCheck,
    title: "Adequação Ambiental",
    description: "Regularização e conformidade ambiental para propriedades e empreendimentos.",
    image: environmental,
    alt: "Floresta com araucárias e árvore florida",
    items: [
      "Licenciamento ambiental",
      "Regularização de áreas degradadas",
      "Projetos de adequação (PRAD, PRA, CAR)",
      "Geoprocessamento e mapeamento",
      "PGRS – Plano de Gerenciamento de Resíduos Sólidos",
    ],
  },
  {
    icon: Axe,
    title: "Supressão Florestal",
    description: "Planejamento e execução segura e responsável de operações florestais.",
    image: suppression,
    alt: "Árvore de grande porte em mata nativa",
    items: [
      "Elaboração e acompanhamento de ASV",
      "Execução de supressão vegetal",
      "Projetos de poda de árvores urbanas",
      "Execução de podas",
    ],
  },
  {
    icon: BarChart3,
    title: "Inteligência de Negócios",
    description: "Transformação de dados florestais e operacionais em decisões estratégicas.",
    image: business,
    alt: "Estrada de terra com ipê amarelo florido",
    items: [
      "Automação de relatórios e dashboards",
      "ETL com Power Query e Python",
      "Painéis estratégicos com DAX",
      "Análise de dados para tomada de decisão",
    ],
  },
  {
    icon: Leaf,
    title: "Créditos de Carbono",
    description: "Soluções em projetos de carbono e valorização de ativos ambientais.",
    image: carbon,
    alt: "Flor vermelha de espécie nativa na mata",
    items: [
      "Projetos de carbono",
      "Soluções para desafios climáticos",
      "Monetização de ativos ambientais",
      "Consultoria em sustentabilidade",
    ],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-muted/60">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="section-eyebrow">Serviços</span>
          <h2 className="section-title mt-4">Soluções para todo o ciclo florestal</h2>
          <p className="section-lead mt-5">
            Do inventário à regularização, atuamos com equipe técnica própria em projetos de engenharia ambiental e
            florestal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, image, alt, items }) => (
            <article
              key={title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-44">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={image}
                    alt={alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <span className="absolute z-10 bottom-0 left-6 translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg ring-4 ring-card">
                  <Icon className="h-6 w-6" />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 pt-10">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
                <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
