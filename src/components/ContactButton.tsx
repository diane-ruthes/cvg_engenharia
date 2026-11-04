import { MessageCircle } from "lucide-react";
import { contact } from "@/lib/site";

// Botão flutuante de WhatsApp (canal de contato mais rápido no celular).
const ContactButton = () => {
  return (
    <a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-foreground px-3 py-2 text-sm font-semibold text-background opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 hidden md:block">
        Fale conosco
      </span>
    </a>
  );
};

export default ContactButton;
