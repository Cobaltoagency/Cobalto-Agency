import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar un sitio web?",
    answer:
      "El tiempo de desarrollo varía según la complejidad del proyecto. Una landing page puede estar lista en 2-3 semanas, mientras que un sitio web institucional completo puede tomar de 4 a 8 semanas. Para proyectos más complejos como ecommerce o aplicaciones web, el tiempo puede extenderse a 2-3 meses. En la primera reunión, establecemos un cronograma detallado acorde a tus necesidades.",
  },
  {
    question: "¿Cuál es la inversión para un sitio web?",
    answer:
      "Cada proyecto es único, por lo que trabajamos con presupuestos personalizados. Nuestros proyectos comienzan desde landing pages accesibles hasta desarrollos empresariales más robustos. Te invitamos a solicitar un presupuesto sin compromiso para conocer la inversión específica para tu caso.",
  },
  {
    question: "¿El sitio será adaptable a dispositivos móviles?",
    answer:
      "Absolutamente. Todos nuestros desarrollos son 100% responsive, lo que significa que tu sitio se verá y funcionará perfectamente en cualquier dispositivo: computadoras, tablets y smartphones. Además, optimizamos la experiencia específicamente para cada tipo de pantalla.",
  },
  {
    question: "¿Puedo administrar el contenido yo mismo?",
    answer:
      "Sí, implementamos sistemas de gestión de contenido (CMS) intuitivos que te permiten actualizar textos, imágenes y otros contenidos de forma autónoma. Además, incluimos capacitación para que puedas manejar tu sitio con confianza.",
  },
  {
    question: "¿Qué incluye el servicio de mantenimiento?",
    answer:
      "Nuestro servicio de mantenimiento incluye: actualizaciones de seguridad, backups periódicos, monitoreo de rendimiento, correcciones de errores menores, soporte técnico prioritario y reportes mensuales del estado del sitio. Ofrecemos diferentes planes según las necesidades de cada cliente.",
  },
  {
    question: "¿Ofrecen servicios de hosting y dominio?",
    answer:
      "Podemos gestionar el hosting y dominio como parte del proyecto o trabajar con tu proveedor actual. Recomendamos soluciones de hosting optimizadas para el rendimiento y seguridad de tu sitio, y te asesoramos en la mejor opción según tu caso.",
  },
  {
    question: "¿Qué pasa si necesito cambios después del lanzamiento?",
    answer:
      "Entendemos que los negocios evolucionan. Ofrecemos planes de mantenimiento que incluyen horas de desarrollo para modificaciones. Para cambios mayores, cotizamos por separado. Siempre estaremos disponibles para ayudarte a que tu sitio crezca junto a tu negocio.",
  },
  {
    question: "¿Trabajan con clientes de otros países?",
    answer:
      "Sí, trabajamos con clientes de toda Latinoamérica y España. Gracias a las herramientas digitales actuales, podemos mantener una comunicación fluida y entregar proyectos de la misma calidad sin importar la ubicación geográfica.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Resolvemos tus
            <span className="text-primary"> dudas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Encontrá respuestas a las preguntas más comunes sobre nuestros
            servicios y proceso de trabajo.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-6 [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
