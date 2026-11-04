// Dados de contato e informações usadas em várias partes do site.
// Para alterar telefone, e-mail ou redes sociais, edite apenas aqui.

export const FOUNDING_YEAR = 2020;
export const yearsOfExperience = () => new Date().getFullYear() - FOUNDING_YEAR;

export const contact = {
  phoneDisplay: "(47) 98847-7086",
  whatsappUrl:
    "https://wa.me/5547988477086?text=" +
    encodeURIComponent("Olá! Vim pelo site da CVG Engenharia e gostaria de mais informações."),
  email: "Ruthes@florestal.eng.br",
  city: "Rio Negro, Paraná",
};

// Preencha os links para que os ícones apareçam no rodapé (deixe "" para ocultar).
export const social = {
  linkedin: "",
  instagram: "",
  facebook: "",
};

export const navLinks = [
  { id: "empresa", label: "A Empresa" },
  { id: "servicos", label: "Serviços" },
  { id: "galeria", label: "Galeria" },
  { id: "atuacao", label: "Atuação" },
  { id: "contato", label: "Contato" },
];

// Municípios onde já atuamos (mapa da seção "Atuação") (coordenadas aproximadas: [longitude, latitude])
export const cities: { name: string; state: string; coordinates: [number, number] }[] = [
  { name: "Jaraguá do Sul", state: "SC", coordinates: [-49.0667, -26.4867] },
  { name: "Guaramirim", state: "SC", coordinates: [-49.0017, -26.4728] },
  { name: "Gaspar", state: "SC", coordinates: [-48.9578, -26.9306] },
  { name: "Massaranduba", state: "SC", coordinates: [-49.0047, -26.6094] },
  { name: "Luiz Alves", state: "SC", coordinates: [-48.9303, -26.7156] },
  { name: "Palhoça", state: "SC", coordinates: [-48.6703, -27.6456] },
  { name: "Itabira", state: "MG", coordinates: [-43.2269, -19.6194] },
  { name: "São Pedro do Suaçuí", state: "MG", coordinates: [-42.6019, -18.3614] },
  { name: "Perdigão", state: "MG", coordinates: [-45.0833, -19.9333] },
  { name: "Ferros", state: "MG", coordinates: [-43.0211, -19.2306] },
  { name: "Caiçara do Norte", state: "RN", coordinates: [-36.0833, -5.0833] },
];

/** Caminho de arquivos da pasta public, respeitando o endereço base do site. */
export const publicUrl = (file: string) => `${import.meta.env.BASE_URL}${file.replace(/^\//, "")}`;
