import { createFileRoute } from "@tanstack/react-router";
import { getBaseUrl, getSiteName, getDefaultDescription } from "@/lib/seo.config";

const baseUrl = getBaseUrl();

export const Route = createFileRoute("/_site/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — NEO | Nova Enterprice Online" },
      {
        name: "description",
        content:
          "Portafolio de proyectos web desarrollados por Nova Enterprice Online: landings, e-commerce, blogs y apps con React y Next.js.",
      },
      { property: "og:title", content: "Proyectos — NEO" },
      {
        property: "og:description",
        content: "Portafolio de proyectos web desarrollados por Nova Enterprice Online.",
      },
      { property: "og:url", content: `${baseUrl}/proyectos` },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${baseUrl}/neo-logo.png` },
      { name: "twitter:title", content: "Proyectos — NEO" },
      {
        name: "twitter:description",
        content: "Portafolio de proyectos web desarrollados por Nova Enterprice Online.",
      },
      { name: "twitter:image", content: `${baseUrl}/neo-logo.png` },
    ],
    links: [{ rel: "canonical", href: `${baseUrl}/proyectos` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Proyectos — NEO",
          description: "Portafolio de proyectos web desarrollados por Nova Enterprice Online.",
          url: `${baseUrl}/proyectos`,
          isPartOf: {
            "@type": "WebSite",
            name: getSiteName(),
            url: baseUrl,
          },
        }),
      },
    ],
  }),
  component: Proyectos,
});

const projects = [
  {
    title: "Landing SaaS",
    desc: "Sitio corporativo con dashboard integrado.",
    tag: "Next.js",
    bg: "linear-gradient(135deg, #7c3aed, #3b82f6)",
  },
  {
    title: "E-commerce boutique",
    desc: "Tienda en línea con catálogo dinámico.",
    tag: "React",
    bg: "linear-gradient(135deg, #ec4899, #8b5cf6)",
  },
  {
    title: "Portafolio creativo",
    desc: "Galería interactiva con animaciones.",
    tag: "React",
    bg: "linear-gradient(135deg, #f59e0b, #ef4444)",
  },
  {
    title: "Formulario de contacto",
    desc: "Integración EmailJS y validación.",
    tag: "EmailJS",
    bg: "linear-gradient(135deg, #10b981, #06b6d4)",
  },
  {
    title: "Blog editorial",
    desc: "Contenido SEO-friendly y rendimiento alto.",
    tag: "Next.js",
    bg: "linear-gradient(135deg, #6366f1, #a855f7)",
  },
  {
    title: "App de reservas",
    desc: "Sistema de citas con panel admin.",
    tag: "JavaScript",
    bg: "linear-gradient(135deg, #f97316, #eab308)",
  },
];

function Proyectos() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <header className="mb-12 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Portfolio</p>
        <h1 className="mt-3 text-5xl font-bold">
          Proyectos <span className="text-gradient-brand">NEO</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Una muestra del trabajo que entregamos a nuestros clientes.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"
          >
            <div
              className="mb-4 aspect-[16/10] rounded-xl opacity-80 transition-opacity group-hover:opacity-100"
              style={{ background: p.bg }}
              role="img"
              aria-label={`Ilustración de ${p.title}`}
            />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</span>
            <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
