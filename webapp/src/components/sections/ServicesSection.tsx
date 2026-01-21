import { Link } from "react-router-dom";
import { Code2, Palette, TrendingUp, Globe, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Sitios Web Institucionales",
    description:
      "Presencia digital profesional que comunica tu propuesta de valor y genera confianza.",
    features: ["Diseño responsive", "SEO optimizado", "CMS personalizado"],
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description:
      "Páginas de alta conversión diseñadas para capturar leads y maximizar resultados.",
    features: ["A/B testing ready", "Carga ultra-rápida", "Analytics integrado"],
  },
  {
    icon: Code2,
    title: "Ecommerce",
    description:
      "Tiendas online completas con experiencia de compra optimizada y gestión simplificada.",
    features: ["Múltiples pagos", "Gestión de inventario", "Checkout optimizado"],
  },
  {
    icon: Palette,
    title: "Rediseño Web",
    description:
      "Transformamos tu sitio actual en una experiencia moderna que conecta con tu audiencia.",
    features: ["Auditoría UX/UI", "Migración segura", "Mejora de performance"],
  },
  {
    icon: TrendingUp,
    title: "Desarrollo a Medida",
    description:
      "Soluciones personalizadas para necesidades específicas de tu negocio.",
    features: ["Integraciones API", "Automatizaciones", "Escalabilidad"],
  },
  {
    icon: Shield,
    title: "Mantenimiento Web",
    description:
      "Mantené tu sitio seguro, actualizado y funcionando al máximo rendimiento.",
    features: ["Updates de seguridad", "Backups diarios", "Soporte 24/7"],
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Soluciones web
            <span className="text-primary"> integrales</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Desde la estrategia inicial hasta el lanzamiento y más allá, te
            acompañamos en cada etapa de tu proyecto digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            ¿No encontrás lo que buscás? Contanos tu proyecto y te asesoramos.
          </p>
          <Button asChild size="lg" className="font-semibold">
            <Link to="/presupuesto">Solicitar asesoramiento gratuito</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
