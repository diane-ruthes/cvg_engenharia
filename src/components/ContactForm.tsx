import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, MessageCircle, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contact } from "@/lib/site";

const emptyForm = { name: "", email: "", subject: "", message: "" };

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(emptyForm);
  const [website, setWebsite] = useState(""); // campo-armadilha contra robôs de spam
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (field: keyof typeof emptyForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (website) return;
    setIsSubmitting(true);

    try {
      const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: key,
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Falha ao enviar mensagem");

      toast({
        title: "Mensagem enviada!",
        description: "Recebemos sua mensagem e entraremos em contato em breve.",
      });
      setFormData(emptyForm);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      toast({
        title: "Não foi possível enviar",
        description: `Tente novamente ou fale conosco pelo WhatsApp ${contact.phoneDisplay} ou pelo e-mail ${contact.email}.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16">
        {/* Informações */}
        <div>
          <span className="section-eyebrow">Contato</span>
          <h2 className="section-title mt-4">Vamos conversar sobre o seu projeto</h2>
          <p className="section-lead mt-5">
            Conte o que você precisa e retornamos o mais breve possível com uma proposta.
          </p>

          <ul className="mt-10 space-y-4">
            <li>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 hover:border-primary/40 hover:shadow-sm transition-all"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm text-muted-foreground">WhatsApp</span>
                  <span className="block font-semibold text-foreground">{contact.phoneDisplay}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 hover:border-primary/40 hover:shadow-sm transition-all"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted-foreground">E-mail</span>
                  <span className="block font-semibold text-foreground break-all">{contact.email}</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Sede</span>
                <span className="block font-semibold text-foreground">{contact.city}</span>
              </span>
            </li>
          </ul>
        </div>

        {/* Formulário */}
        <div id="formulario-contato" className="rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10 shadow-lg">
          <h3 className="text-2xl font-semibold text-foreground">Envie uma mensagem</h3>
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" autoComplete="name" placeholder="Seu nome" value={formData.name} onChange={update("name")} required className="h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" autoComplete="email" placeholder="seu@email.com" value={formData.email} onChange={update("email")} required className="h-12" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Assunto</Label>
              <Input id="subject" placeholder="Ex.: inventário florestal, licenciamento…" value={formData.subject} onChange={update("subject")} required className="h-12" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" placeholder="Descreva sua necessidade, local e prazo, se houver." className="min-h-[150px]" value={formData.message} onChange={update("message")} required />
            </div>

            {/* Armadilha para robôs: invisível para pessoas */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Site</label>
              <input id="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
            </div>

            <Button type="submit" size="lg" className="w-full h-12 rounded-full text-base font-semibold" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Enviando…
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Enviar mensagem
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
