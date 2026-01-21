import { Lightbulb, Rocket, Target, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Enfoque Estratégico",
    description:
      "Cada proyecto comienza con un análisis profundo de tus objetivos de negocio para crear soluciones que realmente generen impacto.",
  },
  {
    icon: Lightbulb,
    title: "Diseño Innovador",
    description:
      "Creamos experiencias visuales únicas que destacan tu marca y conectan emocionalmente con tu audiencia.",
  },
  {
    icon: Rocket,
    title: "Tecnología de Vanguardia",
    description:
      "Utilizamos las últimas tecnologías para construir sitios rápidos, seguros y escalables que crecen con tu negocio.",
  },
  {
    icon: Users,
    title: "Acompañamiento Integral",
    description:
      "Te guiamos en cada paso del proceso, desde la estrategia hasta el lanzamiento y más allá.",
  },
];

export function ValuePropositionSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Por qué Cobalto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tu socio estratégico en
            <span className="text-primary"> desarrollo web</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            No somos solo una agencia de desarrollo. Somos un equipo comprometido
            con el éxito de tu proyecto, combinando estrategia, diseño y
            tecnología.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
