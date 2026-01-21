import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TechStart",
    category: "Sitio Web Institucional",
    description: "Plataforma de startup tecnológica con diseño moderno y enfocado en conversión.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Boutique Elegance",
    category: "Ecommerce",
    description: "Tienda online de moda con experiencia de compra premium y personalizada.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Fintech Solutions",
    category: "Landing Page",
    description: "Landing de alta conversión para servicios financieros digitales.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Studio Arquitectura",
    category: "Rediseño Web",
    description: "Rediseño completo de portafolio para estudio de arquitectura de renombre.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "HealthPlus",
    category: "Aplicación Web",
    description: "Plataforma de telemedicina con interfaz intuitiva y funcionalidades avanzadas.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    color: "from-purple-500/20 to-violet-500/20",
  },
  {
    title: "EduLearn Pro",
    category: "Plataforma Educativa",
    description: "Sistema de aprendizaje en línea con cursos interactivos y seguimiento de progreso.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    color: "from-indigo-500/20 to-blue-500/20",
  },
];

export function PortfolioSection() {
  return (
    <section id="portafolio" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Proyectos que
            <span className="text-primary"> inspiran</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada proyecto es único. Descubrí cómo hemos ayudado a empresas como
            la tuya a alcanzar sus objetivos digitales.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ExternalLink className="w-6 h-6 text-primary-foreground" />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-foreground text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
