import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.webp";
import { contact, navLinks, social } from "@/lib/site";

const socialLinks = [
  { url: social.linkedin, label: "LinkedIn", icon: Linkedin },
  { url: social.instagram, label: "Instagram", icon: Instagram },
  { url: social.facebook, label: "Facebook", icon: Facebook },
].filter((s) => s.url);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div className="space-y-4">
            <div className="inline-block rounded-2xl bg-white px-4 py-3">
              <img src={logo} alt="CVG Engenharia & Projetos" loading="lazy" className="h-14 w-auto" />
            </div>
            <p className="text-sm text-forest-foreground/70 leading-relaxed max-w-sm">
              Soluções especializadas em engenharia ambiental e florestal, com excelência técnica e compromisso com a
              sustentabilidade.
            </p>
            {socialLinks.length > 0 && (
              <div className="flex gap-3 pt-2">
                {socialLinks.map(({ url, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <nav aria-label="Links do rodapé">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-foreground/60">Navegação</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-sm text-forest-foreground/85 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-foreground/60">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[hsl(110_45%_65%)]" />
                <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-forest-foreground/85 hover:text-white transition-colors">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[hsl(110_45%_65%)]" />
                <a href={`mailto:${contact.email}`} className="text-forest-foreground/85 hover:text-white transition-colors break-all">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[hsl(110_45%_65%)]" />
                <span className="text-forest-foreground/85">{contact.city}, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-forest-foreground/60">
          © {currentYear} CVG Engenharia & Projetos. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
