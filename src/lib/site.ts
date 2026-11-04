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

/** Caminho de arquivos da pasta public, respeitando o endereço base do site. */
export const publicUrl = (file: string) => `${import.meta.env.BASE_URL}${file.replace(/^\//, "")}`;
