import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { useState } from "react";
import { MapPin } from "lucide-react";

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
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  
  return (
    <section id="mapa" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in">
            Municípios Onde Já Atuamos
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto pt-4">
            Nossa expertise atende clientes em diversos estados brasileiros, com projetos concluídos em Santa Catarina, Minas Gerais e Rio Grande do Norte.
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-card rounded-2xl shadow-lg p-4 md:p-8 relative border border-border overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10"></div>

          {/* Hovered City Indicator */}
          {hoveredCity && (
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-lg shadow-lg z-20 pointer-events-none flex items-center gap-2 animate-in fade-in duration-200">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">{hoveredCity}</span>
            </div>
          )}
          
          {/* Map */}
          <div className="flex justify-center">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 600,
                center: [-52, -15],
              }}
              width={800}
              height={600}
              className="w-full h-auto max-w-4xl"
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="hsl(var(--muted))"
                      stroke="hsl(var(--border))"
                      strokeWidth={0.75}
                      style={{
                        default: { 
                          outline: "none",
                          transition: "all 0.3s ease"
                        },
                        hover: { 
                          fill: "hsl(var(--accent))",
                          outline: "none",
                          cursor: "default",
                          transition: "all 0.3s ease"
                        },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>
              
              {/* City Markers */}
              {cities.map((city) => (
                <Marker key={city.name} coordinates={city.coordinates}>
                  <circle 
                    r={6} 
                    fill="hsl(var(--primary))" 
                    stroke="hsl(var(--background))"
                    strokeWidth={2.5}
                    className="cursor-pointer transition-all duration-300 hover:r-8"
                    style={{
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                    }}
                    onMouseEnter={() => setHoveredCity(`${city.name} - ${city.state}`)}
                    onMouseLeave={() => setHoveredCity(null)}
                  />
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-6 border border-primary/10 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{cities.length}</div>
            <p className="text-muted-foreground font-medium">Municípios Atendidos</p>
          </div>
          <div className="bg-gradient-to-br from-secondary/5 to-transparent rounded-xl p-6 border border-secondary/10 text-center">
            <div className="text-3xl font-bold text-secondary mb-2">3</div>
            <p className="text-muted-foreground font-medium">Estados Principais</p>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-xl p-6 border border-primary/10 text-center">
            <div className="text-3xl font-bold text-primary mb-2">+50</div>
            <p className="text-muted-foreground font-medium">Projetos Realizados</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrazilMap;

