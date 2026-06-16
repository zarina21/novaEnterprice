import { createFileRoute } from "@tanstack/react-router";
import { getBaseUrl, getSiteName } from "@/lib/seo.config";

const baseUrl = getBaseUrl();

export const Route = createFileRoute("/_site/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y Condiciones — NEO" },
      {
        name: "description",
        content: "Términos y condiciones de uso de los servicios de Nova Enterprice Online (NEO).",
      },
      { property: "og:title", content: "Términos y Condiciones — NEO" },
      { property: "og:description", content: "Términos y condiciones de Nova Enterprice Online." },
      { property: "og:url", content: `${baseUrl}/terminos` },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index, follow" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Términos y Condiciones — NEO" },
      { name: "twitter:description", content: "Términos y condiciones de Nova Enterprice Online." },
    ],
    links: [{ rel: "canonical", href: `${baseUrl}/terminos` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Términos y Condiciones — NEO",
          description: "Términos y condiciones de uso de los servicios de Nova Enterprice Online.",
          url: `${baseUrl}/terminos`,
          isPartOf: {
            "@type": "WebSite",
            name: getSiteName(),
            url: baseUrl,
          },
        }),
      },
    ],
  }),
  component: Terminos,
});

const sections = [
  {
    t: "1. Aceptación",
    d: "Al contratar nuestros servicios, aceptas estos términos en su totalidad. Si no estás de acuerdo, te pedimos no utilizar nuestros servicios.",
  },
  {
    t: "2. Servicios",
    d: "NEO ofrece diseño y desarrollo de proyectos web a medida usando tecnologías como React, JavaScript, Next.js y EmailJS.",
  },
  {
    t: "3. Propiedad intelectual",
    d: "El cliente es propietario del producto final una vez liquidado el pago. NEO conserva el derecho de mostrarlo en su portafolio.",
  },
  {
    t: "4. Pagos",
    d: "Los proyectos requieren un anticipo del 50% para iniciar. El saldo restante se abona antes de la entrega final.",
  },
  {
    t: "5. Plazos",
    d: "Los tiempos se acuerdan por proyecto. Retrasos por parte del cliente en entrega de contenidos pueden afectar la fecha de entrega.",
  },
  {
    t: "6. Confidencialidad",
    d: "Toda información compartida durante el proyecto se trata de forma confidencial.",
  },
  {
    t: "7. Modificaciones",
    d: "NEO puede actualizar estos términos. Los cambios se publicarán en esta página.",
  },
  {
    t: "8. Contacto",
    d: "Para cualquier consulta sobre estos términos, escríbenos a contact@novaenterprice.online.",
  },
];

function Terminos() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Legal</p>
      <h1 className="mt-3 text-5xl font-bold">
        Términos y <span className="text-gradient-brand">Condiciones</span>
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Última actualización:{" "}
        {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
      </p>
      <div className="mt-12 space-y-8">
        {sections.map((s) => (
          <div key={s.t}>
            <h2 className="text-xl font-semibold">{s.t}</h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
