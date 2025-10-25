import { Building2, Award, Leaf, MapPin } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Building2,
      title: "Experiência Comprovada",
      description: "Atuando desde 2020 com soluções especializadas em engenharia florestal e ambiental",
      color: "bg-primary"
    },
    {
      icon: Award,
      title: "Excelência Técnica",
      description: "Comprometimento com qualidade e precisão em cada projeto desenvolvido",
      color: "bg-secondary"
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Soluções que respeitam e preservam o meio ambiente para as futuras gerações",
      color: "bg-primary"
    }
  ];

  return (
    <section id="empresa" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            A Empresa
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Main Description */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 mb-16 border border-primary/10">
          <div className="flex items-start gap-4 mb-4">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Sede em Rio Negro, Paraná</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos uma empresa brasileira especializada em soluções de engenharia florestal e ambiental. Com excelência técnica e compromisso com a sustentabilidade, atendemos pequenas, médias e grandes empresas em toda a América Latina.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                {/* Icon */}
                <div className={`w-14 h-14 ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-full transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5+</div>
            <p className="text-muted-foreground">Anos de Experiência</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">50+</div>
            <p className="text-muted-foreground">Projetos Concluídos</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
            <p className="text-muted-foreground">Estados Atendidos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

