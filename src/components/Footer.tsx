const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-2">CVG Engenharia & Projetos</h3>
        <p className="text-sm opacity-90 mb-4">
          Soluções em engenharia ambiental e florestal
        </p>
        <div className="flex justify-center gap-6 text-sm opacity-80">
          <a href="https://wa.me/5547988477086" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
            WhatsApp: (47) 98847-7086
          </a>
        </div>
        <div className="mt-6 pt-6 border-t border-primary-foreground/20 text-xs opacity-70">
          © {new Date().getFullYear()} CVG Engenharia & Projetos. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
