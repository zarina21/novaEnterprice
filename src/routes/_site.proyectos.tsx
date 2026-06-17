import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { getBaseUrl, getSiteName } from "@/lib/seo.config";

const baseUrl = getBaseUrl();

export const Route = createFileRoute("/_site/proyectos")({
  head: () => ({
    meta: [
      { title: "Projects — NEO | Nova Enterprice Online" },
      {
        name: "description",
        content:
          "Portfolio of web projects developed by Nova Enterprice Online.",
      },
      { property: "og:title", content: "Projects — NEO" },
      {
        property: "og:description",
        content: "Portfolio of web projects developed by Nova Enterprice Online.",
      },
      { property: "og:url", content: `${baseUrl}/proyectos` },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${baseUrl}/neo-logo.png` },
      { name: "twitter:title", content: "Projects — NEO" },
      {
        name: "twitter:description",
        content: "Portfolio of web projects developed by Nova Enterprice Online.",
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
          name: "Projects — NEO",
          description: "Portfolio of web projects developed by Nova Enterprice Online.",
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
    desc: "Live marketplace for Albion Online with real-time prices, market history, builds, gold and resources.",
    tag: "Next.js",
    url: "https://albionforge.online",
    img: "/albionforge-thumb.png",
    specs: [
      "Framework: Next.js 15 (App Router, SSR, API Routes)",
      "UI: React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui",
      "ORM: Prisma + PostgreSQL (Neon) / SQLite (dev)",
      "State: TanStack React Query + Zustand",
      "API: Albion Online Data Project (proxied via Next.js API)",
      "Builds: PvP stats, market costs, hybrid",
      "Monetization: Google AdSense",
      "Analytics: Vercel Web Analytics",
      "Charts: Recharts (price history and gold)",
      "Form: react-hook-form + Zod + sonner",
      "Authentication: HTTP Basic Auth for admin panel",
      "SEO: JSON-LD, dynamic sitemap, robots.txt",
      "Deployed on Vercel with Postgres (Neon)",
    ],
  },
  {
    title: "Nova Enterprice",
    desc: "Our own corporate site. The one you're looking at.",
    tag: "TanStack",
    url: "/",
    specs: [
      "Framework: TanStack Start + React 19 + Vite",
      "UI: Tailwind CSS + responsive design + dark mode",
      "Form: react-hook-form + Zod + Web3Forms",
      "SEO: JSON-LD, Open Graph, Twitter Cards, hreflang",
      "Accessibility: skip-to-content, focus-visible, aria labels",
      "Analytics: Conditional GA4 (only with VITE_GA_ID)",
      "Email: Web3Forms with notifications",
      "Deployed on Vercel (nitro preset)",
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
          Projects <span className="text-gradient-brand">NEO</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          A sample of the work we deliver to our clients.
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
                    alt={`Screenshot of ${p.title}`}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div
                  className="mb-4 aspect-[16/10] rounded-xl opacity-80 transition-opacity group-hover:opacity-100"
                  style={{ background: p.bg }}
                  role="img"
                  aria-label={`Illustration of ${p.title}`}
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
                Visit site &rarr;
              </a>
            )}
            {p.specs && (
              <button
                onClick={() => setExpanded(expanded === p.title ? null : p.title)}
                className="mt-3 flex w-full items-center justify-between rounded-lg border border-border/50 px-3 py-2 text-xs text-muted-foreground hover:bg-accent/50 transition-colors"
              >
                Technical specs
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
