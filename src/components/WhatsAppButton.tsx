import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5547988477086"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <Button
        size="lg"
        className="rounded-full w-16 h-16 shadow-xl hover:shadow-2xl transition-all duration-300 bg-[#25D366] hover:bg-[#20BA5A] text-white group-hover:scale-110 group-hover:-translate-y-2 flex items-center justify-center"
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg pointer-events-none">
        Fale conosco
      </span>
    </a>
  );
};

export default WhatsAppButton;

