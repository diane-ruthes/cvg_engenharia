import { Building2, Award, Leaf } from "lucide-react";

const About = () => {
  return (
    <section id="empresa" className="py-20 px-4 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Empresa
          </h2>
          <p className="text-xl md:text-2xl text-secondary font-semibold max-w-4xl mx-auto leading-relaxed">
            Desde 2020 trazendo soluções especializadas em engenharia ambiental e florestal com excelência técnica e sustentabilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Building2 className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-foreground">Experiência</h3>
            <p className="text-muted-foreground">
              Anos de experiência em projetos ambientais e florestais
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
              <Award className="text-secondary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-foreground">Excelência</h3>
            <p className="text-muted-foreground">
              Comprometimento com qualidade técnica em cada projeto
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Leaf className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-foreground">Sustentabilidade</h3>
            <p className="text-muted-foreground">
              Soluções que respeitam o meio ambiente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
