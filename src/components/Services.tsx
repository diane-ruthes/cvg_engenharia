import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trees, Leaf, FileCheck, Axe, BarChart3, Sprout } from "lucide-react";

const services = [
  {
    icon: Trees,
    title: "Inventário Florestal",
    items: [
      "Inventário em Florestas Plantadas (Pré-corte, Contínuos, Qualidade)",
      "Inventário em Florestas Nativas (Florísticos e Fitossociológicos)",
      "Estudos de Fenologia",
      "Identificação Botânica"
    ]
  },
  {
    icon: Sprout,
    title: "Restauração Florestal",
    items: [
      "Execução de PRAD e Plantios Compensatórios",
      "Monitoramento de Restauração Florestal",
      "Coleta de Sementes Florestais Nativas",
      "Gestão de Viveiros Florestais"
    ]
  },
  {
    icon: FileCheck,
    title: "Adequação e Regularização Ambiental",
    items: [
      "Licenciamento Ambiental",
      "Regularização de Áreas Degradadas",
      "Projetos de Adequação (PRAD, PRA, CAR)",
      "Geoprocessamento e Mapeamento",
      "Defesas em Autuações Ambientais",
      "PGRS - Plano de Gerenciamento de Resíduos Sólidos"
    ]
  },
  {
    icon: Axe,
    title: "Supressão Florestal e Podas",
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
    items: [
      "Automação de Relatórios e Dashboards (Power BI)",
      "ETL com Power Query e Python",
      "Linguagem DAX e Painéis Estratégicos",
      "Transformação de Dados em Insights"
    ]
  },
  {
    icon: Leaf,
    title: "Créditos de Carbono",
    items: [
      "Soluções em Projetos de Carbono",
      "Transformação de Desafios Climáticos em Valor Sustentável"
    ]
  }
];

const Services = () => {
  return (
    <section id="portfolio" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Portfolio de Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Portfólio completo de soluções em engenharia ambiental e florestal
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
