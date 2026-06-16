import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { u as useForm } from "./_libs/react-hook-form.mjs";
import { t } from "./_libs/hookform__resolvers.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./_ssr/server-E7C9-A0c.mjs";
import { T as Toaster, t as toast } from "./_libs/sonner.mjs";
import { E as EMAIL_ADDRESS, G as GITHUB_URL } from "./_ssr/router-BNOB3xjK.mjs";
import "./_libs/seroval.mjs";
import { G as Github } from "./_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "./_libs/zod.mjs";
import "node:async_hooks";
import "./_libs/h3-v2.mjs";
import "./_libs/rou3.mjs";
import "./_libs/srvx.mjs";
import "node:stream";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "./_libs/tanstack__react-router.mjs";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const contactSchema = objectType({
  name: stringType().min(1, "El nombre es requerido").max(100),
  email: stringType().email("Email inválido"),
  message: stringType().min(10, "El mensaje debe tener al menos 10 caracteres").max(2e3)
});
const submitContact = createServerFn({
  method: "POST"
}).validator(contactSchema).handler(createSsrRpc("f89a2e5e681e9af767c0434e24c12a718b0b01fca0227036608f98c4b9390f88"));
const schema = objectType({
  name: stringType().min(1, "El nombre es requerido"),
  email: stringType().email("Ingresa un email válido"),
  message: stringType().min(10, "El mensaje debe tener al menos 10 caracteres")
});
function Contacto() {
  const [sent, setSent] = reactExports.useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm({
    resolver: t(schema)
  });
  const onSubmit = async (data) => {
    try {
      await submitContact({
        data
      });
      setSent(true);
    } catch (e) {
      console.error("Error sending message:", e);
      toast.error("Error al enviar el mensaje. Intenta de nuevo más tarde.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-[0.25em] text-muted-foreground", children: "Hablemos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 text-5xl font-bold", children: [
        "Cuéntanos sobre tu ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "proyecto" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Responderemos en menos de 24 horas. También puedes escribirnos directamente." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Email:" }),
          " ",
          EMAIL_ADDRESS
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Web:" }),
          " novaenterprice.online"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "GitHub:" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: GITHUB_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4", "aria-hidden": "true" }),
            "zarina21"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit(onSubmit), className: "rounded-2xl border border-border/70 bg-card/60 p-8 backdrop-blur", noValidate: true, children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-4 h-12 w-12 rounded-full bg-gradient-brand" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "¡Mensaje enviado!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Te contactaremos muy pronto." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nombre", error: errors.name?.message, htmlFor: "contact-name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "contact-name", ...register("name"), className: "w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary", "aria-required": "true", autoComplete: "name" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", error: errors.email?.message, htmlFor: "contact-email", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "contact-email", type: "email", ...register("email"), className: "w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary", "aria-required": "true", autoComplete: "email" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Mensaje", error: errors.message?.message, htmlFor: "contact-message", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "contact-message", rows: 5, ...register("message"), className: "w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary", "aria-required": "true" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: isSubmitting, className: "w-full rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] disabled:opacity-50", children: isSubmitting ? "Enviando..." : "Enviar mensaje" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "bottom-right", toastOptions: {
      style: {
        background: "var(--color-card)",
        color: "var(--color-foreground)",
        border: "1px solid var(--color-border)"
      }
    } })
  ] });
}
function Field({
  label,
  error,
  htmlFor,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor, className: "mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground", children: label }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block text-xs text-red-400", role: "alert", children: error })
  ] });
}
export {
  Contacto as component
};
