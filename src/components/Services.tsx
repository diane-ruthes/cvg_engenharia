import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trees, Leaf, FileCheck, Axe, BarChart3, Sprout, ArrowRight } from "lucide-react";
import forestInventory from "@/assets/services/forest-inventory.jpg";
import restoration from "@/assets/services/restoration.jpg";
import environmental from "@/assets/services/environmental.jpg";
import suppression from "@/assets/services/suppression.jpg";
import business from "@/assets/services/business.jpg";
import carbon from "@/assets/services/carbon.jpg";

const services = [
  {
    icon: Trees,
    title: "Inventário Florestal",
    description: "Levantamentos precisos e análises detalhadas de recursos florestais",
    image: forestInventory,
    items: [
      "Inventário em Florestas Plantadas",
      "Inventário em Florestas Nativas",
      "Estudos de Fenologia",
      "Identificação Botânica"
    ]
  },
  {
    icon: Sprout,
    title: "Restauração Florestal",
    description: "Projetos de recuperação e reflorestamento sustentável",
    image: restoration,
    items: [
      "Execução de PRAD e Plantios Compensatórios",
      "Monitoramento de Restauração Florestal",
      "Coleta de Sementes Florestais Nativas",
      "Gestão de Viveiros Florestais"
    ]
  },
  {
    icon: FileCheck,
    title: "Adequação Ambiental",
    description: "Soluções para regularização e conformidade ambiental",
    image: environmental,
    items: [
      "Licenciamento Ambiental",
      "Regularização de Áreas Degradadas",
      "Projetos de Adequação (PRAD, PRA, CAR)",
      "Geoprocessamento e Mapeamento"
    ]
  },
  {
    icon: Axe,
    title: "Supressão Florestal",
    description: "Execução segura e responsável de operações florestais",
    image: suppression,
    items: [
      "Elaboração e Acompanhamento de ASV",
      "Execução de Supressão Vegetal",
      "Projetos para Poda em Árvores Urbanas",
      "Execução de Podas"
    ]
  },
  {
    icon: BarChart3,
    title: "Inteligência de Negócios",
    description: "Transformação de dados em insights estratégicos",
    image: business,
    items: [
      "Automação de Relatórios e Dashboards",
      "ETL com Power Query e Python",
      "Linguagem DAX e Painéis Estratégicos",
      "Transformação de Dados em Insights"
    ]
  },
  {
    icon: Leaf,
    title: "Créditos de Carbono",
    description: "Soluções em projetos de carbono e sustentabilidade",
    image: carbon,
    items: [
      "Soluções em Projetos de Carbono",
      "Transformação de Desafios Climáticos",
      "Monetização de Ativos Ambientais",
      "Consultoria em Sustentabilidade"
    ]
  }
];

const Services = () => {
  return (
    <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Portfolio de Serviços
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto pt-4">
            Portfólio completo de soluções em engenharia ambiental e florestal com expertise comprovada
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                ></div>
                
                {/* Dark Overlay with better contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 group-hover:from-black/55 group-hover:via-black/45 group-hover:to-black/65 transition-all duration-300"></div>

                <CardHeader className="pb-4 relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title with background */}
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 -mx-2">
                    <CardTitle className="text-xl text-white font-bold">{service.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 relative z-10">
                  {/* Items List with background */}
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4">
                    <ul className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-white flex items-start gap-3 group/item">
                          <span className="text-primary font-bold mt-0.5 group-hover/item:text-secondary transition-colors">→</span>
                          <span className="group-hover/item:text-white/90 transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Link with background */}
                  <div className="pt-4 border-t border-white/20">
                    <a 
                      href="https://wa.me/5547988477086" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white bg-primary/80 hover:bg-secondary/80 transition-colors font-medium text-sm group/link px-4 py-2 rounded-lg backdrop-blur-sm"
                    >
                      Solicitar orçamento
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </CardContent>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

