import { Card } from "@/components/ui/card";

const clients = [
  { name: "STCP Engenharia", url: "https://www.stcp.com.br", logo: "/clients/stcp-logo.png" },
  { name: "Ecológic Inteligência Ambiental", url: "https://ecologicambiental.com", logo: "/clients/ecologic-logo.png" },
  { name: "CSS Construtora", url: "https://cssconstrutora.com", logo: "/clients/css-logo.svg" },
  { name: "Gi Energy", url: "https://gienergy.com.au", logo: "/clients/gienergy-logo.png" },
  { name: "Bauinvest Reflorestadora", url: "https://bauminvest.de", logo: "/clients/bauminvest-logo.png" }
];

const Clients = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Clientes que Confiam
          </h2>
          <p className="text-xl text-muted-foreground">
            Empresas que já escolheram nossa expertise
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <Card 
              key={index} 
              className="group p-8 flex items-center justify-center bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 cursor-pointer hover:bg-card/80"
              onClick={() => window.open(client.url, '_blank')}
            >
              <div className="text-center w-full">
                <div className="w-full h-20 flex items-center justify-center mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">{client.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
