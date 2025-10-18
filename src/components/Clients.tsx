import { Card } from "@/components/ui/card";

const clients = [
  { name: "STCP Engenharia", url: "https://www.stcp.com.br" },
  { name: "Ecológic Inteligência Ambiental", url: "https://ecologicambiental.com" },
  { name: "CSS Construtora", url: "https://cssconstrutora.com" },
  { name: "Gi Energy", url: "https://gienergy.com.au" },
  { name: "Bauinvest Reflorestadora", url: "https://bauminvest.de" }
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <Card 
              key={index} 
              className="p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => window.open(client.url, '_blank')}
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">{client.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
