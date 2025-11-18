import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactButton = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById('formulario-contato');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-40 group"
    >
      <Button
        size="lg"
        className="rounded-full w-16 h-16 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-primary to-secondary hover:opacity-90 text-white group-hover:scale-110 group-hover:-translate-y-2 flex items-center justify-center"
      >
        <Mail className="w-7 h-7" />
      </Button>
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg pointer-events-none">
        Enviar mensagem
      </span>
    </button>
  );
};

export default ContactButton;
