import { Link } from "react-router-dom";
import { ArrowRight, Code2, Palette, TrendingUp, Layers } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ContactSection } from "@/components/sections/ContactSection";

const differentiators = [
  {
    icon: Palette,
    title: "Diseño & Tecnología",
    description:
      "Combinamos creatividad visual con desarrollo técnico sólido para crear experiencias digitales memorables y funcionales.",
  },
  {
    icon: Code2,
    title: "Experiencia & Confiabilidad",
    description:
      "Más de 8 años trabajando con empresas de distintos rubros nos permiten entender tus necesidades y anticipar soluciones.",
  },
  {
    icon: TrendingUp,
    title: "Marketing & Resultados",
    description:
      "Diseñamos pensando en conversión. Cada elemento está optimizado para cumplir tus objetivos de negocio.",
  },
  {
    icon: Layers,
    title: "Flexibilidad & Escalabilidad",
    description:
      "Soluciones que crecen con tu negocio. Arquitecturas pensadas para evolucionar según tus necesidades futuras.",
  },
];

const process = [
  {
    step: "01",
    title: "Estrategia",
    description: "Analizamos tus objetivos, audiencia y competencia para definir la mejor estrategia digital.",
  },
  {
    step: "02",
    title: "Diseño",
    description: "Creamos wireframes y diseños visuales que reflejan tu marca y optimizan la experiencia de usuario.",
  },
  {
    step: "03",
    title: "Desarrollo",
    description: "Construimos tu sitio con las mejores tecnologías, garantizando rendimiento y seguridad.",
  },
  {
    step: "04",
    title: "Optimización",
    description: "Ajustamos, probamos y perfeccionamos cada detalle antes del lanzamiento.",
  },
  {
    step: "05",
    title: "Escalabilidad",
    description: "Te acompañamos post-lanzamiento con soporte, mantenimiento y mejoras continuas.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-foreground" />
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Decorative */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Acerca de Nosotros
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                ¿Por qué elegir
                <span className="text-primary"> Cobalto</span>?
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Somos una agencia de desarrollo web que combina estrategia, diseño
                y tecnología para crear experiencias digitales que impulsan el
                crecimiento de tu negocio.
              </p>
            </div>
          </div>
        </section>

        {/* Integral Solution Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                  Solución Integral
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Te acompañamos en
                  <span className="text-primary"> todo el proceso</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  En Cobalto entendemos que un sitio web exitoso va más allá del
                  código. Por eso, ofrecemos un servicio integral que cubre todas
                  las etapas de tu proyecto digital:
                </p>

                <div className="space-y-6">
                  {process.map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button asChild size="lg" className="mt-10 font-semibold">
                  <Link to="/presupuesto">
                    Solicitar asesoramiento
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 p-8 lg:p-12">
                  <div className="h-full rounded-2xl bg-card border border-border p-8 flex flex-col justify-center">
                    <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                      "Nuestro objetivo es ser el partner tecnológico que tu
                      negocio necesita para crecer en el mundo digital."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">C</span>
                      </div>
                      <div>
                        <p className="font-semibold">Equipo Cobalto</p>
                        <p className="text-muted-foreground text-sm">
                          Desarrollo Web Estratégico
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Diferenciadores Clave
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Lo que nos hace
                <span className="text-primary"> diferentes</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Nuestra propuesta de valor se construye sobre cuatro pilares
                fundamentales que garantizan el éxito de tu proyecto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {differentiators.map((item, index) => (
                <div
                  key={item.title}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contactanos sin compromiso y conversemos sobre cómo podemos ayudarte
              a alcanzar tus objetivos digitales.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-semibold"
            >
              <Link to="/presupuesto">
                Solicitar presupuesto gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
