import { Award, Clock, ThumbsUp, Briefcase } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "+50",
    label: "Proyectos Completados",
    description: "Desde startups hasta grandes empresas",
  },
  {
    icon: Clock,
    value: "+8",
    label: "Años de Experiencia",
    description: "Evolucionando con la industria",
  },
  {
    icon: ThumbsUp,
    value: "100%",
    label: "Clientes Satisfechos",
    description: "Compromiso con la excelencia",
  },
  {
    icon: Award,
    value: "+15",
    label: "Industrias Atendidas",
    description: "Experiencia diversa y adaptable",
  },
];

export function ExperienceSection() {
  return (
    <section className="section-padding bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Nuestra Trayectoria
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Experiencia que
              <span className="text-primary"> genera confianza</span>
            </h2>
            <p className="text-background/70 text-lg mb-8 leading-relaxed">
              Con más de 8 años de experiencia en el mercado, hemos ayudado a
              empresas de todos los tamaños a transformar su presencia digital.
              Nuestro enfoque combina estrategia, diseño y tecnología para
              entregar resultados tangibles.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-background/80">
                  Equipo especializado en las últimas tecnologías web
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-background/80">
                  Procesos ágiles y comunicación constante
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-background/80">
                  Compromiso con plazos y presupuestos acordados
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-primary mb-4" />
                <div className="text-4xl font-bold text-background mb-1">
                  {stat.value}
                </div>
                <div className="font-semibold text-background/90 mb-1">
                  {stat.label}
                </div>
                <p className="text-sm text-background/60">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
