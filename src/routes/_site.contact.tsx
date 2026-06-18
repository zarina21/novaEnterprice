import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import { Github } from "lucide-react";
import { getBaseUrl, GITHUB_URL, EMAIL_ADDRESS } from "@/lib/seo.config";
import zariPhone from "@/assets/zariPhone.png";

const baseUrl = getBaseUrl();

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NEO | Nova Enterprice Online" },
      {
        name: "description",
        content:
          "Contact us to start your web project with Nova Enterprice Online. We respond within 24 hours.",
      },
      { property: "og:title", content: "Contact — NEO" },
      {
        property: "og:description",
        content: "Contact us to start your web project. We respond within 24 hours.",
      },
      { property: "og:url", content: `${baseUrl}/contact` },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${baseUrl}/neo-logo.png` },
      { name: "twitter:title", content: "Contact — NEO" },
      {
        name: "twitter:description",
        content: "Contact us to start your web project. We respond within 24 hours.",
      },
      { name: "twitter:image", content: `${baseUrl}/neo-logo.png` },
    ],
    links: [{ rel: "canonical", href: `${baseUrl}/contact` }],
  }),
  component: Contacto,
});

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
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
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: data.name,
          email: data.email,
          message: data.message,
          subject: `New message from ${data.name}`,
          from_name: "Nova Enterprice Online",
        }),
      });
      const result = await res.json();
      if (!result.success) throw new Error("Web3Forms error");
      setSent(true);
    } catch (e) {
      console.error("Error sending message:", e);
      toast.error("Error sending the message. Try again later.");
    }
  };

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Let's talk</p>
        <h1 className="mt-3 text-5xl font-bold">
          Tell us about your <span className="text-gradient-brand">project</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          We'll respond within 24 hours. You can also write us directly.
        </p>
        <ul className="mt-8 space-y-3 text-sm">
          <li>
            <span className="text-muted-foreground">Email:</span> {EMAIL_ADDRESS}
          </li>
          <li>
            <span className="text-muted-foreground">Web:</span> novaenterprice.online
          </li>
          <li>
            <span className="text-muted-foreground">GitHub:</span>{" "}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              zarina21
            </a>
          </li>
        </ul>
        <img src={zariPhone} alt="ZariPhone" className="mt-8 h-48 w-auto object-contain" />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-2xl border border-border/70 bg-card/60 p-8 backdrop-blur"
        noValidate
      >
        {sent ? (
          <div className="py-10 text-center">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-gradient-brand" />
            <h3 className="text-xl font-semibold">Message sent!</h3>
            <p className="mt-2 text-sm text-muted-foreground">We'll get back to you very soon.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <Field label="Name" error={errors.name?.message} htmlFor="contact-name">
              <input
                id="contact-name"
                {...register("name")}
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
                aria-required="true"
                autoComplete="name"
              />
            </Field>
            <Field label="Email" error={errors.email?.message} htmlFor="contact-email">
              <input
                id="contact-email"
                type="email"
                {...register("email")}
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
                aria-required="true"
                autoComplete="email"
              />
            </Field>
            <Field label="Message" error={errors.message?.message} htmlFor="contact-message">
              <textarea
                id="contact-message"
                rows={5}
                {...register("message")}
                className="w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
                aria-required="true"
              />
            </Field>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </div>
        )}
      </form>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--color-card)",
            color: "var(--color-foreground)",
            border: "1px solid var(--color-border)",
          },
        }}
      />
    </section>
  );
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      {children}
      {error && (
        <span className="mt-1 block text-xs text-red-400" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
