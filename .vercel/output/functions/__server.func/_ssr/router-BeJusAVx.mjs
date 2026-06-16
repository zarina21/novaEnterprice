import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-DQro35B0.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const __vite_import_meta_env__$1 = {};
const DEFAULT_URL = "https://novaenterprice.online";
function getBaseUrl() {
  if (typeof import.meta !== "undefined" && __vite_import_meta_env__$1?.VITE_BASE_URL) {
    return void 0;
  }
  return DEFAULT_URL;
}
function getSiteName() {
  return "Nova Enterprice Online";
}
function getDefaultDescription() {
  return "Desarrollamos proyectos web modernos con React, Next.js y JavaScript. Sitios rápidos, elegantes y a medida.";
}
const EMAIL_ADDRESS = "hola@novaenterprice.online";
const __vite_import_meta_env__ = {};
const GA_ID = typeof import.meta !== "undefined" ? __vite_import_meta_env__?.VITE_GA_ID : void 0;
function Analytics() {
  const gaId = GA_ID;
  if (!gaId) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("script", { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${gaId}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "script",
      {
        dangerouslySetInnerHTML: {
          __html: [
            `window.dataLayer = window.dataLayer || [];`,
            `function gtag(){dataLayer.push(arguments);}`,
            `gtag('js', new Date());`,
            `gtag('config', '${gaId}', {`,
            `  send_page_view: true,`,
            `  cookie_flags: 'samesite=none;secure',`,
            `  cookie_domain: '${typeof location !== "undefined" ? location.hostname : ""}',`,
            `});`
          ].join("\n")
        }
      }
    )
  ] });
}
function SkipLink() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: "#main-content",
      className: "fixed -top-40 left-4 z-[100] rounded-b-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-all focus:top-0 focus:outline-none",
      children: "Saltar al contenido principal"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Página no encontrada" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "La página que buscas no existe o ha sido movida." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Volver al inicio"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "Esta página no cargó" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Algo salió mal. Puedes intentar recargar o volver al inicio." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Intentar de nuevo"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Volver al inicio"
        }
      )
    ] })
  ] }) });
}
const baseUrl$4 = getBaseUrl();
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: getDefaultDescription()
      },
      { name: "author", content: getSiteName() },
      {
        name: "keywords",
        content: "desarrollo web, React, Next.js, JavaScript, EmailJS, páginas informativas, NEO, Nova Enterprice Online"
      },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0b0b14" },
      { property: "og:site_name", content: getSiteName() },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:image", content: `${baseUrl$4}/neo-logo.png` },
      { property: "og:image:width", content: "512" },
      { property: "og:image:height", content: "512" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${baseUrl$4}/neo-logo.png` }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "alternate", href: baseUrl$4, hreflang: "es" },
      { rel: "alternate", href: baseUrl$4, hreflang: "x-default" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Nova Enterprice Online",
          alternateName: "NEO",
          url: baseUrl$4,
          email: EMAIL_ADDRESS,
          logo: `${baseUrl$4}/neo-logo.png`,
          description: getDefaultDescription()
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "es", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SkipLink, {}),
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Analytics, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const BASE_URL = getBaseUrl();
const Route$5 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/proyectos", changefreq: "weekly", priority: "0.9" },
          { path: "/contacto", changefreq: "monthly", priority: "0.8" },
          { path: "/terminos", changefreq: "yearly", priority: "0.3" }
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$4 = () => import("../_site-XQvglTmC.mjs");
const Route$4 = createFileRoute("/_site")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("../_site.index-whTjSQhQ.mjs");
const baseUrl$3 = getBaseUrl();
const Route$3 = createFileRoute("/_site/")({
  head: () => ({
    meta: [{
      title: "NEO — Nova Enterprice Online | Desarrollo web"
    }, {
      name: "description",
      content: "Desarrollamos proyectos web modernos con React, Next.js y JavaScript. Sitios rápidos, elegantes y a medida desde $250/mes."
    }, {
      property: "og:title",
      content: "NEO — Nova Enterprice Online"
    }, {
      property: "og:description",
      content: "Desarrollo de proyectos web con React, Next.js y JavaScript. Planes desde $250/mes."
    }, {
      property: "og:url",
      content: `${baseUrl$3}/`
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:image",
      content: `${baseUrl$3}/neo-logo.png`
    }, {
      name: "twitter:title",
      content: "NEO — Nova Enterprice Online"
    }, {
      name: "twitter:description",
      content: "Desarrollo de proyectos web con React, Next.js y JavaScript."
    }, {
      name: "twitter:image",
      content: `${baseUrl$3}/neo-logo.png`
    }],
    links: [{
      rel: "canonical",
      href: `${baseUrl$3}/`
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: getSiteName(),
        url: baseUrl$3,
        description: getDefaultDescription(),
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${baseUrl$3}/buscar?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("../_site.terminos-C2AwRIA1.mjs");
const baseUrl$2 = getBaseUrl();
const Route$2 = createFileRoute("/_site/terminos")({
  head: () => ({
    meta: [{
      title: "Términos y Condiciones — NEO"
    }, {
      name: "description",
      content: "Términos y condiciones de uso de los servicios de Nova Enterprice Online (NEO)."
    }, {
      property: "og:title",
      content: "Términos y Condiciones — NEO"
    }, {
      property: "og:description",
      content: "Términos y condiciones de Nova Enterprice Online."
    }, {
      property: "og:url",
      content: `${baseUrl$2}/terminos`
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "robots",
      content: "index, follow"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Términos y Condiciones — NEO"
    }, {
      name: "twitter:description",
      content: "Términos y condiciones de Nova Enterprice Online."
    }],
    links: [{
      rel: "canonical",
      href: `${baseUrl$2}/terminos`
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Términos y Condiciones — NEO",
        description: "Términos y condiciones de uso de los servicios de Nova Enterprice Online.",
        url: `${baseUrl$2}/terminos`,
        isPartOf: {
          "@type": "WebSite",
          name: getSiteName(),
          url: baseUrl$2
        }
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("../_site.proyectos-BytFcuGg.mjs");
const baseUrl$1 = getBaseUrl();
const Route$1 = createFileRoute("/_site/proyectos")({
  head: () => ({
    meta: [{
      title: "Proyectos — NEO | Nova Enterprice Online"
    }, {
      name: "description",
      content: "Portafolio de proyectos web desarrollados por Nova Enterprice Online: landings, e-commerce, blogs y apps con React y Next.js."
    }, {
      property: "og:title",
      content: "Proyectos — NEO"
    }, {
      property: "og:description",
      content: "Portafolio de proyectos web desarrollados por Nova Enterprice Online."
    }, {
      property: "og:url",
      content: `${baseUrl$1}/proyectos`
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:image",
      content: `${baseUrl$1}/neo-logo.png`
    }, {
      name: "twitter:title",
      content: "Proyectos — NEO"
    }, {
      name: "twitter:description",
      content: "Portafolio de proyectos web desarrollados por Nova Enterprice Online."
    }, {
      name: "twitter:image",
      content: `${baseUrl$1}/neo-logo.png`
    }],
    links: [{
      rel: "canonical",
      href: `${baseUrl$1}/proyectos`
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Proyectos — NEO",
        description: "Portafolio de proyectos web desarrollados por Nova Enterprice Online.",
        url: `${baseUrl$1}/proyectos`,
        isPartOf: {
          "@type": "WebSite",
          name: getSiteName(),
          url: baseUrl$1
        }
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("../_site.contacto-IScWkpxD.mjs");
const baseUrl = getBaseUrl();
const Route = createFileRoute("/_site/contacto")({
  head: () => ({
    meta: [{
      title: "Contacto — NEO | Nova Enterprice Online"
    }, {
      name: "description",
      content: "Contáctanos para iniciar tu proyecto web con Nova Enterprice Online. Respondemos en menos de 24 horas."
    }, {
      property: "og:title",
      content: "Contacto — NEO"
    }, {
      property: "og:description",
      content: "Contáctanos para iniciar tu proyecto web. Respondemos en menos de 24 horas."
    }, {
      property: "og:url",
      content: `${baseUrl}/contacto`
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:image",
      content: `${baseUrl}/neo-logo.png`
    }, {
      name: "twitter:title",
      content: "Contacto — NEO"
    }, {
      name: "twitter:description",
      content: "Contáctanos para iniciar tu proyecto web. Respondemos en menos de 24 horas."
    }, {
      name: "twitter:image",
      content: `${baseUrl}/neo-logo.png`
    }],
    links: [{
      rel: "canonical",
      href: `${baseUrl}/contacto`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
objectType({
  name: stringType().min(1, "El nombre es requerido"),
  email: stringType().email("Ingresa un email válido"),
  message: stringType().min(10, "El mensaje debe tener al menos 10 caracteres")
});
const SitemapDotxmlRoute = Route$5.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$6
});
const SiteRoute = Route$4.update({
  id: "/_site",
  getParentRoute: () => Route$6
});
const SiteIndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => SiteRoute
});
const SiteTerminosRoute = Route$2.update({
  id: "/terminos",
  path: "/terminos",
  getParentRoute: () => SiteRoute
});
const SiteProyectosRoute = Route$1.update({
  id: "/proyectos",
  path: "/proyectos",
  getParentRoute: () => SiteRoute
});
const SiteContactoRoute = Route.update({
  id: "/contacto",
  path: "/contacto",
  getParentRoute: () => SiteRoute
});
const SiteRouteChildren = {
  SiteContactoRoute,
  SiteProyectosRoute,
  SiteTerminosRoute,
  SiteIndexRoute
};
const SiteRouteWithChildren = SiteRoute._addFileChildren(SiteRouteChildren);
const rootRouteChildren = {
  SiteRoute: SiteRouteWithChildren,
  SitemapDotxmlRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
