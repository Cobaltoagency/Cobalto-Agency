import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-background.png')",
        }}
      />

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-foreground/40" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Agencia de Desarrollo Web
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Creamos experiencias
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              digitales únicas
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
            Diseño y desarrollo web estratégico para empresas que buscan destacar.
            Transformamos tu visión en una presencia digital que genera resultados.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="text-base font-semibold h-14 px-8"
            >
              <Link to="/presupuesto">
                Solicitar presupuesto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base font-semibold h-14 px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
            >
              <a href="#portafolio">Ver proyectos</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-white">+50</span>
              <span>Proyectos<br />completados</span>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-white">+8</span>
              <span>Años de<br />experiencia</span>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-white">100%</span>
              <span>Clientes<br />satisfechos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
