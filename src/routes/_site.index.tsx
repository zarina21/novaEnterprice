import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CodeXml,
  Palette,
  Braces,
  Atom,
  MonitorSmartphone,
  Rocket,
  PanelsTopLeft,
  Flame,
  Server,
  Bot,
  BriefcaseBusiness,
  type LucideIcon,
} from "lucide-react";
import logo from "@/assets/neo-logo.png";
import { getBaseUrl, getSiteName, getDefaultDescription } from "@/lib/seo.config";

const baseUrl = getBaseUrl();

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "NEO — Nova Enterprice Online | Web Development" },
      {
        name: "description",
        content:
          "We build modern web projects with React, Next.js and JavaScript. Fast, elegant, custom sites from $250/mo.",
      },
      { property: "og:title", content: "NEO — Nova Enterprice Online" },
      {
        property: "og:description",
        content:
          "Web development with React, Next.js and JavaScript. Plans from $250/mo.",
      },
      { property: "og:url", content: `${baseUrl}/` },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${baseUrl}/neo-logo.png` },
      { name: "twitter:title", content: "NEO — Nova Enterprice Online" },
      {
        name: "twitter:description",
        content: "Web development with React, Next.js and JavaScript.",
      },
      { name: "twitter:image", content: `${baseUrl}/neo-logo.png` },
    ],
    links: [{ rel: "canonical", href: `${baseUrl}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: getSiteName(),
          url: baseUrl,
          description: getDefaultDescription(),
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${baseUrl}/buscar?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  component: Home,
});

const stack = ["React", "JavaScript", "Next.js", "EmailJS"];

const skills = [
  { name: "HTML5", level: 98, icon: CodeXml },
  { name: "CSS", level: 81, icon: Palette },
  { name: "JavaScript", level: 91, icon: Braces },
  { name: "React", level: 72, icon: Atom },
  { name: "React Native", level: 54, icon: MonitorSmartphone },
  { name: "Next.js", level: 91, icon: Rocket },
  { name: "Bulma", level: 95, icon: PanelsTopLeft },
  { name: "Firebase", level: 72, icon: Flame },
  { name: "Node", level: 42, icon: Server },
  { name: "Python", level: 60, icon: Bot },
  { name: "SaaS", level: 70, icon: BriefcaseBusiness },
  { name: "Expo", level: 37, icon: MonitorSmartphone },
] satisfies Array<{ name: string; level: number; icon: LucideIcon }>;

function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 text-center">
        <img
          src={logo}
          alt="NEO — Nova Enterprice Online"
          className="mx-auto mb-8 h-28 w-28 drop-shadow-[0_0_40px_oklch(0.68_0.20_300/0.6)]"
          width="112"
          height="112"
        />
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
          novaenterprice.online
        </div>
        <h1 className="mx-auto max-w-3xl text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
          We build the web your <span className="text-gradient-brand">brand</span> deserves.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          At <strong className="text-foreground">Nova Enterprice Online</strong> we design and
          develop custom web projects — fast, modern, built to grow.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/contacto"
            className="rounded-full bg-gradient-brand px-7 py-3 text-base font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
          >
            Tell us your idea
          </Link>
          <Link
            to="/proyectos"
            className="rounded-full border border-border bg-card/50 px-7 py-3 text-base font-medium text-foreground backdrop-blur transition-colors hover:bg-card"
          >
            View projects
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
          <span className="uppercase tracking-[0.2em]">Stack</span>
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border/70 bg-card/40 px-3 py-1 text-sm text-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20" aria-labelledby="plans-heading">
        <div className="mb-12 text-center">
          <h2 id="plans-heading" className="text-3xl font-bold sm:text-4xl">
            Plans for <span className="text-gradient-brand">informational pages</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Everything your business needs to be online, hassle-free.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              plan: "Monthly",
              months: 1,
              price: "$250",
              period: "/mo",
              billing: "Pay month to month",
              includes: [
                "Informational page",
                "Contact form",
                "Address & hours",
                "Testimonials",
              ],
            },
            {
              plan: "Semi-annual",
              months: 6,
              price: "$600",
              period: "/6 mo",
              billing: "Pay every 6 months",
              popular: true,
              includes: [
                "Informational page",
                "Contact form",
                "Address & hours",
                "Testimonials",
              ],
            },
            {
              plan: "Yearly",
              months: 12,
              price: "$1,000",
              period: "/year",
              billing: "Pay once a year",
              includes: [
                "Informational page",
                "Contact form",
                "Address & hours",
                "Testimonials",
              ],
            },
          ].map((p) => {
            const currentPrice = Number(p.price.replace(/[$,]/g, ""));
            const regularPrice = 250 * p.months;
            const savings = regularPrice - currentPrice;
            const discountPercent = Math.round((savings / regularPrice) * 100);

            return (
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
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{p.plan}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gradient-brand">{p.price}</span>
                  <span className="text-sm text-muted-foreground">{p.period}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground/70">{p.billing}</p>
                {discountPercent > 0 && (
                  <div className="mt-3 space-y-1 text-sm">
                    <p className="font-medium text-emerald-400">Discount: {discountPercent}%</p>
                    <p className="text-xs text-muted-foreground/80">
                      Before ${regularPrice.toLocaleString("en-US")} — Save $
                      {savings.toLocaleString("en-US")}
                    </p>
                  </div>
                )}
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {p.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs italic text-muted-foreground/70">
                  From $100 digital menu add-on
                </p>
                <div className="mt-auto pt-6">
                  <Link
                    to="/contacto"
                    className="block w-full rounded-full bg-gradient-brand px-5 py-2.5 text-center text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
                  >
                    Choose plan
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-20" aria-labelledby="skills-heading">
        <div className="mb-12 text-center">
          <h2 id="skills-heading" className="text-3xl font-bold sm:text-4xl">
            Skill <span className="text-gradient-brand">level</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            These are some of the technologies we work with and the experience level
            we apply in our web projects and digital products.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl border border-border/70 bg-card/60 p-5 backdrop-blur"
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-card/80 text-primary shadow-[var(--shadow-glow)]">
                    <skill.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{skill.name}</h3>
                </div>
                <span className="text-sm font-medium text-gradient-brand">{skill.level}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-secondary/60">
                <div
                  className="h-full rounded-full bg-gradient-brand shadow-[var(--shadow-glow)]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
