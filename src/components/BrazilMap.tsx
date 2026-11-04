import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { publicUrl } from "@/lib/site";

const geoUrl = publicUrl("brazil-states.json");

// Municípios onde já atuamos (coordenadas aproximadas: [longitude, latitude])
const cities: { name: string; state: string; coordinates: [number, number] }[] = [
  { name: "Jaraguá do Sul", state: "SC", coordinates: [-49.0667, -26.4867] },
  { name: "Guaramirim", state: "SC", coordinates: [-49.0017, -26.4728] },
  { name: "Gaspar", state: "SC", coordinates: [-48.9578, -26.9306] },
  { name: "Massaranduba", state: "SC", coordinates: [-49.0047, -26.6094] },
  { name: "Luiz Alves", state: "SC", coordinates: [-48.9303, -26.7156] },
  { name: "Itabira", state: "MG", coordinates: [-43.2269, -19.6194] },
  { name: "São Pedro do Suaçuí", state: "MG", coordinates: [-42.6019, -18.3614] },
  { name: "Perdigão", state: "MG", coordinates: [-45.0833, -19.9333] },
  { name: "Ferros", state: "MG", coordinates: [-43.0211, -19.2306] },
  { name: "Caiçara do Norte", state: "RN", coordinates: [-36.0833, -5.0833] },
];

const stateNames: Record<string, string> = { SC: "Santa Catarina", MG: "Minas Gerais", RN: "Rio Grande do Norte" };
const states = Array.from(new Set(cities.map((c) => c.state)));

const BrazilMap = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="atuacao" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-muted/60">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
        <div>
          <span className="section-eyebrow">Atuação</span>
          <h2 className="section-title mt-4">Municípios onde já atuamos</h2>
          <p className="section-lead mt-5">
            Projetos concluídos em {cities.length} municípios de Santa Catarina, Minas Gerais e Rio Grande do Norte.
          </p>

          <div className="mt-8 space-y-6">
            {states.map((uf) => (
              <div key={uf}>
                <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-foreground">
                  {stateNames[uf]}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {cities
                    .filter((c) => c.state === uf)
                    .map((c) => (
                      <li key={c.name}>
                        <button
                          type="button"
                          onMouseEnter={() => setActive(c.name)}
                          onMouseLeave={() => setActive(null)}
                          onFocus={() => setActive(c.name)}
                          onBlur={() => setActive(null)}
                          onClick={() => setActive(active === c.name ? null : c.name)}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors ${
                            active === c.name
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-card text-foreground hover:border-primary/50"
                          }`}
                        >
                          <MapPin className="h-3.5 w-3.5" />
                          {c.name}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-card border border-border shadow-sm p-2 sm:p-6">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 900, center: [-53, -15] }}
            width={640}
            height={640}
            className="w-full h-auto"
            aria-label="Mapa do Brasil com os municípios atendidos"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const served = states.includes(geo.properties.sigla);
                  const fill = served ? "hsl(var(--primary) / 0.22)" : "hsl(var(--muted))";
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={fill}
                      stroke="hsl(var(--border))"
                      strokeWidth={0.8}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none", fill },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>

            {cities.map((city) => {
              const isActive = active === city.name;
              const label = `${city.name} – ${city.state}`;
              const labelWidth = label.length * 8 + 24;
              return (
                <Marker
                  key={city.name}
                  coordinates={city.coordinates}
                  onMouseEnter={() => setActive(city.name)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setActive(isActive ? null : city.name)}
                  style={{ default: { cursor: "pointer" }, hover: { cursor: "pointer" }, pressed: {} }}
                >
                  <circle
                    r={isActive ? 9 : 6}
                    fill={isActive ? "hsl(var(--secondary))" : "hsl(var(--primary))"}
                    stroke="hsl(var(--card))"
                    strokeWidth={2}
                    style={{ transition: "r 0.2s ease" }}
                  />
                  {isActive && (
                    <g pointerEvents="none">
                      <rect
                        x={-labelWidth / 2}
                        y={-42}
                        width={labelWidth}
                        height={26}
                        rx={13}
                        fill="hsl(var(--foreground))"
                      />
                      <text
                        y={-24.5}
                        textAnchor="middle"
                        fontSize={14}
                        fontFamily="'Manrope Variable', sans-serif"
                        fontWeight={600}
                        fill="hsl(var(--background))"
                      >
                        {label}
                      </text>
                    </g>
                  )}
                </Marker>
              );
            })}
          </ComposableMap>
        </div>
      </div>
    </section>
  );
};

export default BrazilMap;
