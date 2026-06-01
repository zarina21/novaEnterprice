import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContact } from "@/lib/api/contact.functions";
import { useState } from "react";

export const Route = createFileRoute("/_site/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — NEO | Nova Enterprice Online" },
      {
        name: "description",
        content:
          "Contáctanos para iniciar tu proyecto web con Nova Enterprice Online. Respondemos en menos de 24 horas.",
      },
      { property: "og:title", content: "Contacto — NEO" },
      {
        property: "og:description",
        content: "Contáctanos para iniciar tu proyecto web. Respondemos en menos de 24 horas.",
      },
      { property: "og:url", content: "https://novaenterprice.online/contacto" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://novaenterprice.online/neo-logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://novaenterprice.online/contacto" }],
  }),
  component: Contacto,
});

const schema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("Ingresa un email válido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type FormData = z.infer<typeof schema>;

function Contacto() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await submitContact({ data });
      setSent(true);
    } catch (e) {
      console.error("Error sending message:", e);
    }
  };

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Hablemos</p>
        <h1 className="mt-3 text-5xl font-bold">
          Cuéntanos sobre tu <span className="text-gradient-brand">proyecto</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Responderemos en menos de 24 horas. También puedes escribirnos directamente.
        </p>
        <ul className="mt-8 space-y-3 text-sm">
          <li>
            <span className="text-muted-foreground">Email:</span> hola@novaenterprice.online
          </li>
          <li>
            <span className="text-muted-foreground">Web:</span> novaenterprice.online
          </li>
        </ul>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-2xl border border-border/70 bg-card/60 p-8 backdrop-blur"
      >
        {sent ? (
          <div className="py-10 text-center">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-gradient-brand" />
            <h3 className="text-xl font-semibold">¡Mensaje enviado!</h3>
            <p className="mt-2 text-sm text-muted-foreground">Te contactaremos muy pronto.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <Field label="Nombre" error={errors.name?.message}>
              <input
                {...register("name")}
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input
                type="email"
                {...register("email")}
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </Field>
            <Field label="Mensaje" error={errors.message?.message}>
              <textarea
                rows={5}
                {...register("message")}
                className="w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </Field>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </div>
        )}
      </form>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}
