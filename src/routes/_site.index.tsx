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
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Planes para <span className="text-gradient-brand">páginas informativas</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Todo lo que necesita tu negocio para estar en línea, sin complicaciones.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              plan: "Mensual",
              price: "$250",
              period: "/mes",
              includes: ["Ventana informativa", "Ventana de contacto", "Dirección / horarios", "Testimonios"],
            },
            {
              plan: "Medio año",
              price: "$600",
              period: "/6 meses",
              popular: true,
              includes: ["Ventana informativa", "Ventana de contacto", "Dirección / horarios", "Testimonios"],
            },
            {
              plan: "1 año",
              price: "$1,000",
              period: "/año",
              includes: ["Ventana informativa", "Ventana de contacto", "Dirección / horarios", "Testimonios"],
            },
          ].map((p) => (
            <div
              key={p.plan}
              className={`relative flex flex-col rounded-2xl border p-6 backdrop-blur transition-colors hover:border-primary/60 ${
                p.popular
                  ? "border-primary/60 bg-card/80 shadow-[var(--shadow-glow)]"
                  : "border-border/70 bg-card/60"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Más popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.plan}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gradient-brand">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {p.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                    {item}
                  </li>
                ))}
                <li className="flex items-start gap-2 pt-2 text-xs italic text-muted-foreground/70">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  Menú adicional desde $100 (pago único)
                </li>
              </ul>
              <div className="mt-auto pt-6">
                <Link
                  to="/contacto"
                  className="block w-full rounded-full bg-gradient-brand px-5 py-2.5 text-center text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
                >
                  Elegir plan
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
