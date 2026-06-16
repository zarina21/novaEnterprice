import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { l as logo } from "./_ssr/neo-logo-BY7eZM3L.mjs";
import { C as CodeXml, P as Palette, B as Braces, A as Atom, a as MonitorSmartphone, R as Rocket, b as PanelsTopLeft, F as Flame, S as Server, c as Bot, d as BriefcaseBusiness } from "./_libs/lucide-react.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
const stack = ["React", "JavaScript", "Next.js", "EmailJS"];
const skills = [{
  name: "HTML5",
  level: 98,
  icon: CodeXml
}, {
  name: "CSS",
  level: 81,
  icon: Palette
}, {
  name: "JavaScript",
  level: 91,
  icon: Braces
}, {
  name: "React",
  level: 72,
  icon: Atom
}, {
  name: "React Native",
  level: 54,
  icon: MonitorSmartphone
}, {
  name: "Next.js",
  level: 91,
  icon: Rocket
}, {
  name: "Bulma",
  level: 95,
  icon: PanelsTopLeft
}, {
  name: "Firebase",
  level: 72,
  icon: Flame
}, {
  name: "Node",
  level: 42,
  icon: Server
}, {
  name: "Python",
  level: 60,
  icon: Bot
}, {
  name: "SaaS",
  level: 70,
  icon: BriefcaseBusiness
}, {
  name: "Expo",
  level: 37,
  icon: MonitorSmartphone
}];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 pt-20 pb-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "NEO — Nova Enterprice Online", className: "mx-auto mb-8 h-28 w-28 drop-shadow-[0_0_40px_oklch(0.68_0.20_300/0.6)]", width: "112", height: "112" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gradient-brand" }),
        "novaenterprice.online"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mx-auto max-w-3xl text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl", children: [
        "Construimos la web que ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "tu marca" }),
        " merece."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-6 max-w-xl text-lg text-muted-foreground", children: [
        "En ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Nova Enterprice Online" }),
        " diseñamos y desarrollamos proyectos web a medida — rápidos, modernos y pensados para crecer."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contacto", className: "rounded-full bg-gradient-brand px-7 py-3 text-base font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]", children: "Cuéntanos tu idea" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/proyectos", className: "rounded-full border border-border bg-card/50 px-7 py-3 text-base font-medium text-foreground backdrop-blur transition-colors hover:bg-card", children: "Ver proyectos" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-[0.2em]", children: "Stack" }),
        stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border/70 bg-card/40 px-3 py-1 text-sm text-foreground", children: s }, s))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 pb-20", "aria-labelledby": "plans-heading", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { id: "plans-heading", className: "text-3xl font-bold sm:text-4xl", children: [
          "Planes para ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "páginas informativas" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "Todo lo que necesita tu negocio para estar en línea, sin complicaciones." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-3", children: [{
        plan: "Mensual",
        months: 1,
        price: "$250",
        period: "/mes",
        billing: "Paga mes a mes",
        includes: ["Página informativa", "Formulario de contacto", "Dirección y horarios", "Testimonios"]
      }, {
        plan: "Semestral",
        months: 6,
        price: "$600",
        period: "/6 meses",
        billing: "Paga cada 6 meses",
        popular: true,
        includes: ["Página informativa", "Formulario de contacto", "Dirección y horarios", "Testimonios"]
      }, {
        plan: "Anual",
        months: 12,
        price: "$1,000",
        period: "/año",
        billing: "Paga una vez al año",
        includes: ["Página informativa", "Formulario de contacto", "Dirección y horarios", "Testimonios"]
      }].map((p) => {
        const currentPrice = Number(p.price.replace(/[$,]/g, ""));
        const regularPrice = 250 * p.months;
        const savings = regularPrice - currentPrice;
        const discountPercent = Math.round(savings / regularPrice * 100);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative flex flex-col rounded-2xl border p-6 backdrop-blur transition-colors hover:border-primary/60 ${p.popular ? "border-primary/60 bg-card/80 shadow-[var(--shadow-glow)]" : "border-border/70 bg-card/60"}`, children: [
          p.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-4 py-1 text-xs font-semibold text-primary-foreground", children: "Más popular" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: p.plan }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-baseline gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-bold text-gradient-brand", children: p.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: p.period })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground/70", children: p.billing }),
          discountPercent > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-1 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-emerald-400", children: [
              "Descuento: ",
              discountPercent,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground/80", children: [
              "Antes $",
              regularPrice.toLocaleString("en-US"),
              " - Ahorra $",
              savings.toLocaleString("en-US")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm text-muted-foreground", children: p.includes.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" }),
            item
          ] }, item)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs italic text-muted-foreground/70", children: "A partir de $100 menú digital" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contacto", className: "block w-full rounded-full bg-gradient-brand px-5 py-2.5 text-center text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]", children: "Elegir plan" }) })
        ] }, p.plan);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-6 pb-20", "aria-labelledby": "skills-heading", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { id: "skills-heading", className: "text-3xl font-bold sm:text-4xl", children: [
          "Nivel de ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "conocimiento" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-2xl text-muted-foreground", children: "Estas son algunas de las tecnologías con las que trabajamos y el nivel de experiencia que aplicamos en proyectos web y productos digitales." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2", children: skills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/70 bg-card/60 p-5 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-card/80 text-primary shadow-[var(--shadow-glow)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(skill.icon, { className: "h-5 w-5", "aria-hidden": "true" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-foreground", children: skill.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-gradient-brand", children: [
            skill.level,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 overflow-hidden rounded-full bg-secondary/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-gradient-brand shadow-[var(--shadow-glow)]", style: {
          width: `${skill.level}%`
        } }) })
      ] }, skill.name)) })
    ] })
  ] });
}
export {
  Home as component
};
