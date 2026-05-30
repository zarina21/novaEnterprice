import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — NEO" },
      { name: "description", content: "Proyectos web desarrollados por Nova Enterprice Online." },
      { property: "og:title", content: "Proyectos — NEO" },
      { property: "og:description", content: "Proyectos web desarrollados por Nova Enterprice Online." },
    ],
  }),
  component: Proyectos,
});

const projects = [
  { title: "Landing SaaS", desc: "Sitio corporativo con dashboard integrado.", tag: "Next.js" },
  { title: "E-commerce boutique", desc: "Tienda en línea con catálogo dinámico.", tag: "React" },
  { title: "Portafolio creativo", desc: "Galería interactiva con animaciones.", tag: "React" },
  { title: "Formulario de contacto", desc: "Integración EmailJS y validación.", tag: "EmailJS" },
  { title: "Blog editorial", desc: "Contenido SEO-friendly y rendimiento alto.", tag: "Next.js" },
  { title: "App de reservas", desc: "Sistema de citas con panel admin.", tag: "JavaScript" },
];

function Proyectos() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <header className="mb-12 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Portfolio</p>
        <h1 className="mt-3 text-5xl font-bold">Proyectos <span className="text-gradient-brand">NEO</span></h1>
        <p className="mt-4 text-muted-foreground">Una muestra del trabajo que entregamos a nuestros clientes.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/60 hover:shadow-[var(--shadow-glow)]">
            <div className="mb-4 aspect-[16/10] rounded-xl bg-gradient-brand opacity-80 transition-opacity group-hover:opacity-100" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</span>
            <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
