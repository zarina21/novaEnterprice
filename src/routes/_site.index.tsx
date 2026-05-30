import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/neo-logo.png";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "NEO — Nova Enterprice Online | Desarrollo web" },
      { name: "description", content: "Desarrollamos proyectos web modernos con React, Next.js y JavaScript. Sitios rápidos, elegantes y a medida." },
      { property: "og:title", content: "NEO — Nova Enterprice Online" },
      { property: "og:description", content: "Desarrollo de proyectos web con React, Next.js y JavaScript." },
    ],
  }),
  component: Home,
});

const stack = ["React", "JavaScript", "Next.js", "EmailJS"];

function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 text-center">
        <img src={logo} alt="NEO" className="mx-auto mb-8 h-28 w-28 drop-shadow-[0_0_40px_oklch(0.68_0.20_300/0.6)]" />
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
          novaenterprice.online
        </div>
        <h1 className="mx-auto max-w-3xl text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
          Construimos la web que <span className="text-gradient-brand">tu marca</span> merece.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          En <strong className="text-foreground">Nova Enterprice Online</strong> diseñamos y desarrollamos
          proyectos web a medida — rápidos, modernos y pensados para crecer.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/contacto" className="rounded-full bg-gradient-brand px-7 py-3 text-base font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]">
            Cuéntanos tu idea
          </Link>
          <Link to="/proyectos" className="rounded-full border border-border bg-card/50 px-7 py-3 text-base font-medium text-foreground backdrop-blur transition-colors hover:bg-card">
            Ver proyectos
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
          <span className="uppercase tracking-[0.2em]">Stack</span>
          {stack.map((s) => (
            <span key={s} className="rounded-full border border-border/70 bg-card/40 px-3 py-1 text-sm text-foreground">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { t: "Diseño a medida", d: "Interfaces únicas alineadas con tu identidad de marca." },
            { t: "Rendimiento real", d: "Sitios optimizados, ligeros y listos para escalar." },
            { t: "Soporte cercano", d: "Acompañamos tu proyecto desde la idea al despliegue." },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur transition-colors hover:border-primary/60">
              <div className="mb-4 h-10 w-10 rounded-xl bg-gradient-brand" />
              <h3 className="text-lg font-semibold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
