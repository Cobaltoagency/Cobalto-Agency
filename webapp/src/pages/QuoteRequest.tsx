import { useState } from "react";
import { Send, Mail, Phone, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const projectTypes = [
  { value: "institucional", label: "Sitio web institucional" },
  { value: "landing", label: "Landing page" },
  { value: "ecommerce", label: "Ecommerce" },
  { value: "rediseno", label: "Rediseño" },
  { value: "otro", label: "Otro" },
];

export default function QuoteRequest() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    tipoProyecto: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, tipoProyecto: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    toast({
      title: "Solicitud enviada",
      description: "Nos pondremos en contacto a la brevedad.",
    });
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                ¡Gracias por tu solicitud!
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Recibimos tu mensaje correctamente. Un miembro de nuestro equipo
                se pondrá en contacto contigo en las próximas 24-48 horas hábiles.
              </p>
              <Button asChild size="lg">
                <a href="/">Volver al inicio</a>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
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

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Presupuesto
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Solicitá tu presupuesto
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Contanos sobre tu proyecto y nos pondremos en contacto a la brevedad.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <div className="lg:col-span-2">
                <form
                  onSubmit={handleSubmit}
                  className="p-8 md:p-10 rounded-2xl bg-card border border-border"
                >
                  <h2 className="text-2xl font-semibold mb-8">
                    Completá el formulario
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre *</Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre completo"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="+54 9 11 xxxx-xxxx"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa</Label>
                      <Input
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <Label htmlFor="tipoProyecto">Tipo de proyecto</Label>
                    <Select
                      value={formData.tipoProyecto}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Seleccioná una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 mb-8">
                    <Label htmlFor="mensaje">Descripción del proyecto</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Contanos brevemente sobre tu proyecto, objetivos y cualquier detalle relevante..."
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full h-14 font-semibold text-base"
                  >
                    {isLoading ? (
                      "Enviando solicitud..."
                    ) : (
                      <>
                        Enviar solicitud
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  {/* Trust Message */}
                  <p className="mt-6 text-center text-sm text-muted-foreground">
                    <strong className="text-foreground">No es un compromiso.</strong>{" "}
                    Analizamos tu caso y te asesoramos sin costo.
                  </p>
                </form>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="p-8 rounded-2xl bg-card border border-border">
                  <h3 className="text-lg font-semibold mb-6">
                    Contacto alternativo
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <a
                          href="mailto:hola@cobalto.agency"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          hola@cobalto.agency
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Teléfono</p>
                        <a
                          href="tel:+5491123456789"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +54 9 11 2345-6789
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to expect */}
                <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
                  <h3 className="text-lg font-semibold mb-4">
                    ¿Qué pasa después?
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      Recibirás confirmación por email
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      Te contactamos en 24-48hs hábiles
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      Agendamos una reunión gratuita
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      Presentamos propuesta personalizada
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Suscribite a nuestro newsletter
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Recibí consejos, tendencias y novedades del mundo digital directamente
              en tu inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="h-12 flex-1"
              />
              <Button type="submit" className="h-12 font-semibold">
                Suscribirme
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
