import { j as jsxRuntimeExports } from "./_libs/react.mjs";
const projects = [{
  title: "Landing SaaS",
  desc: "Sitio corporativo con dashboard integrado.",
  tag: "Next.js",
  bg: "linear-gradient(135deg, #7c3aed, #3b82f6)"
}, {
  title: "E-commerce boutique",
  desc: "Tienda en línea con catálogo dinámico.",
  tag: "React",
  bg: "linear-gradient(135deg, #ec4899, #8b5cf6)"
}, {
  title: "Portafolio creativo",
  desc: "Galería interactiva con animaciones.",
  tag: "React",
  bg: "linear-gradient(135deg, #f59e0b, #ef4444)"
}, {
  title: "Formulario de contacto",
  desc: "Integración EmailJS y validación.",
  tag: "EmailJS",
  bg: "linear-gradient(135deg, #10b981, #06b6d4)"
}, {
  title: "Blog editorial",
  desc: "Contenido SEO-friendly y rendimiento alto.",
  tag: "Next.js",
  bg: "linear-gradient(135deg, #6366f1, #a855f7)"
}, {
  title: "App de reservas",
  desc: "Sistema de citas con panel admin.",
  tag: "JavaScript",
  bg: "linear-gradient(135deg, #f97316, #eab308)"
}];
function Proyectos() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-12 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.25em] text-muted-foreground", children: "Portfolio" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 text-5xl font-bold", children: [
        "Proyectos ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "NEO" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Una muestra del trabajo que entregamos a nuestros clientes." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/60 hover:shadow-[var(--shadow-glow)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 aspect-[16/10] rounded-xl opacity-80 transition-opacity group-hover:opacity-100", style: {
        background: p.bg
      }, role: "img", "aria-label": `Ilustración de ${p.title}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: p.tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-xl font-semibold", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.desc })
    ] }, p.title)) })
  ] });
}
export {
  Proyectos as component
};
