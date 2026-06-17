import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { getBaseUrl, getSiteName } from "@/lib/seo.config";

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
    title: "Albion Forge",
    desc: "Marketplace en vivo de Albion Online con precios en tiempo real, historial de mercado, builds, oro y recursos.",
    tag: "Next.js",
    url: "https://albionforge.online",
    img: "/albionforge-thumb.png",
    specs: [
      "Framework: Next.js 15 (App Router, SSR, API Routes)",
      "UI: React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui",
      "ORM: Prisma + PostgreSQL (Neon) / SQLite (dev)",
      "Estado: TanStack React Query + Zustand",
      "API: Albion Online Data Project (proxy via Next.js API)",
      "Builds: PvP stats, costos por mercado, híbridos",
      "Monetización: Google AdSense",
      "Analytics: Vercel Web Analytics",
      "Gráficos: Recharts (historial de precios y oro)",
      "Formulario: react-hook-form + Zod + sonner",
      "Autenticación: HTTP Basic Auth para panel admin",
      "SEO: JSON-LD, sitemap dinámico, robots.txt",
      "Desplegado en Vercel con Postgres (Neon)",
    ],
  },
  {
    title: "Nova Enterprice",
    desc: "Nuestro propio sitio corporativo. Este que estás viendo.",
    tag: "TanStack",
    url: "/",
    specs: [
      "Framework: TanStack Start + React 19 + Vite",
      "UI: Tailwind CSS + diseño responsive + dark mode",
      "Formulario: react-hook-form + Zod + Web3Forms",
      "SEO: JSON-LD, Open Graph, Twitter Cards, hreflang",
      "Accesibilidad: skip-to-content, focus-visible, aria labels",
      "Analytics: GA4 condicional (solo con VITE_GA_ID)",
      "Email: Web3Forms con notificaciones",
      "Desplegado en Vercel (preset nitro)",
    ],
  },
];

function Proyectos() {
  const [expanded, setExpanded] = useState<string | null>(null);

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
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"
          >
            <a
              href={p.url}
              target={p.url?.startsWith("http") ? "_blank" : undefined}
              rel={p.url?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {p.img ? (
                <div className="mb-4 aspect-[16/10] overflow-hidden rounded-xl">
                  <img
                    src={p.img}
                    alt={`Captura de ${p.title}`}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div
                  className="mb-4 aspect-[16/10] rounded-xl opacity-80 transition-opacity group-hover:opacity-100"
                  style={{ background: p.bg }}
                  role="img"
                  aria-label={`Ilustración de ${p.title}`}
                />
              )}
            </a>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</span>
            <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            {p.url && (
              <a
                href={p.url}
                target={p.url.startsWith("http") ? "_blank" : undefined}
                rel={p.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                Visitar sitio &rarr;
              </a>
            )}
            {p.specs && (
              <button
                onClick={() => setExpanded(expanded === p.title ? null : p.title)}
                className="mt-3 flex w-full items-center justify-between rounded-lg border border-border/50 px-3 py-2 text-xs text-muted-foreground hover:bg-accent/50 transition-colors"
              >
                Especificaciones técnicas
                <span className={`transition-transform ${expanded === p.title ? "rotate-180" : ""}`}>
                  &#9660;
                </span>
              </button>
            )}
            {p.specs && expanded === p.title && (
              <ul className="mt-2 space-y-1 rounded-lg border border-border/50 bg-background/50 p-3 text-xs text-muted-foreground">
                {p.specs.map((s, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-primary">&#9656;</span>
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
