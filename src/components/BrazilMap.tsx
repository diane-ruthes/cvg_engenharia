import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson";

// Municípios onde já atuamos com suas coordenadas aproximadas
const cities = [
  { name: "Jaraguá do Sul", state: "SC", coordinates: [-49.0667, -26.4867] },
  { name: "Guaramirim", state: "SC", coordinates: [-49.0017, -26.4728] },
  { name: "Gaspar", state: "SC", coordinates: [-48.9578, -26.9306] },
  { name: "Massaranduba", state: "SC", coordinates: [-49.0047, -26.6094] },
  { name: "Luiz Alves", state: "SC", coordinates: [-48.9303, -26.7156] },
  { name: "Itabira", state: "MG", coordinates: [-43.2269, -19.6194] },
  { name: "Caiçara do Norte", state: "RN", coordinates: [-36.0833, -5.0833] },
  { name: "São Pedro do Suaçuí", state: "MG", coordinates: [-42.6019, -18.3614] },
  { name: "Perdigão", state: "MG", coordinates: [-45.0833, -19.9333] },
  { name: "Ferros", state: "MG", coordinates: [-43.0211, -19.2306] },
];

const BrazilMap = () => {
  return (
    <section id="mapa" className="py-16 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in">
            Municípios Onde Já Atuamos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa expertise atende clientes em diversos estados brasileiros, com projetos concluídos em Santa Catarina, Minas Gerais e Rio Grande do Norte.
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-lg p-4 md:p-8">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 600,
              center: [-52, -15],
            }}
            width={800}
            height={600}
            className="w-full h-auto"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="hsl(var(--muted))"
                    stroke="hsl(var(--border))"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { 
                        fill: "hsl(var(--accent))",
                        outline: "none",
                        cursor: "default"
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            
            {cities.map((city) => (
              <Marker key={city.name} coordinates={city.coordinates}>
                <circle 
                  r={4} 
                  fill="hsl(var(--primary))" 
                  stroke="hsl(var(--background))"
                  strokeWidth={1.5}
                  className="animate-pulse"
                />
              </Marker>
            ))}
          </ComposableMap>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Santa Catarina</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Jaraguá do Sul</li>
                <li>• Guaramirim</li>
                <li>• Gaspar</li>
                <li>• Massaranduba</li>
                <li>• Luiz Alves</li>
              </ul>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Minas Gerais</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Itabira</li>
                <li>• São Pedro do Suaçuí</li>
                <li>• Perdigão</li>
                <li>• Ferros</li>
              </ul>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Rio Grande do Norte</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Caiçara do Norte</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrazilMap;
