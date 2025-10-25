import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const clients = [
  { name: "STCP Engenharia", url: "https://www.stcp.com.br", logo: "/clients/stcp-logo.png" },
  { name: "Ecológic Inteligência Ambiental", url: "https://ecologicambiental.com", logo: "/clients/ecologic-logo.png" },
  { name: "CSS Construtora", url: "https://cssconstrutora.com", logo: "/clients/css-logo.svg" },
  { name: "Gi Energy", url: "https://gienergy.com.au", logo: "/clients/gienergy-logo.png" },
  { name: "Bauinvest Reflorestadora", url: "https://bauminvest.de", logo: "/clients/bauminvest-logo.png" }
];

const Clients = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Clientes que Confiam
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground pt-4">
            Empresas líderes que escolheram nossa expertise em engenharia ambiental
          </p>
        </div>
        
        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden p-8 flex flex-col items-center justify-center bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
              onClick={() => window.open(client.url, '_blank')}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              {/* Logo Container */}
              <div className="w-full h-20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Client Name */}
              <p className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                {client.name}
              </p>

              {/* External Link Icon */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-4 h-4 text-primary" />
              </div>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Trabalhamos com empresas de diferentes portes, desde startups até multinacionais, 
            sempre mantendo os mesmos padrões de excelência, profissionalismo e dedicação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;

