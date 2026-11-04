import { Landmark } from "lucide-react";
import { publicUrl } from "@/lib/site";

// Para trocar o ícone por um logo, salve a imagem em public/clients/ e informe o caminho em "logo".
const clients: { name: string; url: string; logo?: string; dark?: boolean }[] = [
  { name: "STCP Engenharia", url: "https://www.stcp.com.br", logo: "clients/stcp-logo.png" },
  { name: "Ecológic Inteligência Ambiental", url: "https://ecologicambiental.com", logo: "clients/ecologic-logo.png" },
  { name: "CSS Construtora", url: "https://cssconstrutora.com", logo: "clients/css-logo.svg", dark: true },
  { name: "Gi Energy", url: "https://gienergy.com.au", logo: "clients/gienergy-logo.png" },
  { name: "Bauminvest Reflorestadora", url: "https://bauminvest.de", logo: "clients/bauminvest-logo.png" },
  { name: "Prefeitura de Palhoça – SC", url: "https://www.palhoca.sc.gov.br" },
];

const Clients = () => {
  return (
    <section id="clientes" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-eyebrow">Clientes</span>
          <h2 className="section-title mt-4">Clientes que confiam no nosso trabalho</h2>
          <p className="section-lead mt-5">
            Atendemos empresas de diferentes portes e órgãos públicos, sempre com o mesmo padrão de excelência e dedicação.
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client) => (
            <li key={client.name}>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-md transition-all"
              >
                <span className={`flex h-20 w-full items-center justify-center rounded-lg ${client.dark ? "bg-forest px-3" : ""}`}>
                  {client.logo ? (
                    <img
                      src={publicUrl(client.logo)}
                      alt={`Logo ${client.name}`}
                      loading="lazy"
                      className="max-h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-transform duration-300 group-hover:scale-105">
                      <Landmark className="h-8 w-8" />
                    </span>
                  )}
                </span>
                <span className="text-xs font-medium text-muted-foreground text-center leading-tight">{client.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
