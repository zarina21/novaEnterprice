import { createFileRoute } from "@tanstack/react-router";
import { getBaseUrl, getSiteName } from "@/lib/seo.config";

const baseUrl = getBaseUrl();

export const Route = createFileRoute("/_site/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — NEO | Nova Enterprice Online" },
      {
        name: "description",
        content:
          "Terms and Conditions governing the use and provision of services by Nova Enterprice Online (NEO).",
      },
      { property: "og:title", content: "Terms and Conditions — NEO" },
      { property: "og:description", content: "Terms and Conditions of Nova Enterprice Online." },
      { property: "og:url", content: `${baseUrl}/terms` },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index, follow" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Terms and Conditions — NEO" },
      { name: "twitter:description", content: "Terms and Conditions of Nova Enterprice Online." },
    ],
    links: [{ rel: "canonical", href: `${baseUrl}/terms` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms and Conditions — NEO",
          description: "Terms and Conditions governing the use and provision of services by Nova Enterprice Online.",
          url: `${baseUrl}/terms`,
          isPartOf: {
            "@type": "WebSite",
            name: getSiteName(),
            url: baseUrl,
          },
        }),
      },
    ],
  }),
  component: Terminos,
});

const sections = [
  {
    t: "1. IDENTIFICATION OF THE SERVICE PROVIDER",
    d: 'These Terms and Conditions govern the access, use, and contracting of services offered by Nova Enterprice Online (NEO), with its business address at:\n\n35250 Date Palm Dr, Suite C, Cathedral City, California, United States.\n\nContact Email: contact@novaenterprice.online\n\nWebsite: novaenterprice.online\n\nBy accessing the website, requesting a quote, contracting services, or making any payment, the Client fully accepts these Terms and Conditions.',
  },
  {
    t: "2. PURPOSE",
    d: "NEO provides professional services related to:\n\n• Web application development.\n• Mobile application development.\n• Front-End development.\n• Back-End development.\n• Design and implementation of digital solutions.\n• Third-party service integrations.\n• Technology consulting.\n• Software maintenance and optimization.\n\nThe technologies used may include, among others:\n\nNext.js, Astro, Expo, Firebase, Redux, Neon, Vercel, HTML, CSS, JavaScript, TypeScript, React, React Native, Tailwind CSS, Python\n\nNEO reserves the right to modify the technologies used whenever necessary for the proper execution of the project.",
  },
  {
    t: "3. QUOTATIONS AND ACCEPTANCE",
    d: "Any quotation issued by NEO shall be considered informational until:\n\na) The client expressly accepts it in writing; and\n\nb) The required initial payment is received.\n\nNo contractual obligation shall exist until both requirements have been fulfilled.",
  },
  {
    t: "4. PAYMENTS",
    d: "All payments must be made in the currency indicated on the invoice or commercial proposal.\n\nNEO may require:\n\n• Full advance payment.\n• Partial advance payment.\n• Milestone-based payments.\n• Recurring payments for maintenance or ongoing services.\n\nRecurring payments do not constitute automatically renewing subscriptions unless expressly agreed to in writing.",
  },
  {
    t: "5. REFUND POLICY",
    d: "5.1 Eligible Requests\n\nClients may request a full refund only within the first forty-eight (48) hours after payment confirmation.\n\n5.2 Business Hours\n\nRefund requests will be processed exclusively from Monday through Friday between 7:00 a.m. and 6:00 p.m., California time.\n\nIf a request is received outside of those hours and the forty-eight (48) hour period expires before the next available business hours, the request shall be considered untimely and no refund shall be granted.\n\n5.3 Non-Refundable Expenses\n\nUnder no circumstances shall the following be refundable:\n\nDomains, Web hosting, SSL certificates, Software licenses, Third-party services, Infrastructure services, Administrative costs, Operational expenses already incurred, Bank fees, Payment platform fees.\n\n5.4 Domain Transfers\n\nWhen the client has financed a domain, NEO shall only be obligated to facilitate the transfer of the domain in accordance with the policies of the corresponding registrar.\n\n5.5 Projects in Production\n\nOnce a project has begun development, entered production, been deployed, or been partially or fully delivered, there shall be no right to any refund.",
  },
  {
    t: "6. CLIENT OBLIGATIONS",
    d: "The client agrees to:\n\n• Provide truthful information.\n• Deliver materials necessary for the project.\n• Respond to approval requests in a timely manner.\n• Keep contact information updated.\n• Not use the services for illegal activities.\n\nDelays caused by the client shall automatically extend delivery timelines.",
  },
  {
    t: "7. INTELLECTUAL PROPERTY",
    d: "All source code, designs, documents, architectures, and developments created by NEO shall remain the exclusive property of NEO until the client has paid all amounts due in full.\n\nUpon full payment, ownership of the delivered project shall be transferred to the client, except for:\n\nInternal NEO tools, Third-party frameworks, Open-source libraries, Reusable components, Proprietary methodologies, Proprietary templates.\n\nNEO shall retain all rights to such elements.",
  },
  {
    t: "8. THIRD-PARTY SERVICES",
    d: "NEO may use third-party services including, but not limited to:\n\nVercel, Firebase, Neon, Email service providers, Cloud services, Payment processors.\n\nNEO shall not be liable for interruptions, changes, failures, or losses caused by such external providers.",
  },
  {
    t: "9. LIMITATION OF LIABILITY",
    d: "To the maximum extent permitted by law:\n\nNEO shall not be liable for:\n\nLoss of revenue, Loss of profits, Loss of business opportunities, Loss of data, Indirect damages, Incidental damages, Special damages, Consequential damages.\n\nNEO's total cumulative liability shall not exceed the amount actually paid by the client during the three (3) months preceding the event giving rise to the claim.",
  },
  {
    t: "10. SERVICE AVAILABILITY",
    d: "NEO does not guarantee that:\n\n• The website will operate without interruption.\n• Services will be permanently available.\n• Systems will be free of errors.\n• Services will be compatible with all devices or platforms.",
  },
  {
    t: "11. PRIVACY",
    d: "NEO collects only contact information necessary for:\n\n• Commercial communications.\n• Service provision.\n• Billing.\n• Technical support.\n\nThe processing of personal data shall be governed by the current Privacy Policy.",
  },
  {
    t: "12. TERMINATION",
    d: "NEO may suspend or terminate any service immediately when:\n\n• A contractual breach exists.\n• Fraudulent activities exist.\n• Improper use of the services exists.\n• Legal or security risks exist.",
  },
  {
    t: "13. FORCE MAJEURE",
    d: "NEO shall not be liable for delays or failures caused by:\n\nNatural disasters, Fires, Earthquakes, Cyberattacks, Internet interruptions, Failures of third-party providers, Government actions, Labor disputes, Events beyond its reasonable control.",
  },
  {
    t: "14. GOVERNING LAW",
    d: "These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of California and applicable federal laws of the United States.",
  },
  {
    t: "15. DISPUTE RESOLUTION",
    d: "Any dispute shall initially be resolved through good-faith negotiations.\n\nIf no agreement is reached within thirty (30) days, the dispute shall be submitted to binding arbitration in California in accordance with the rules of the American Arbitration Association (AAA).\n\nThe parties expressly waive the right to a jury trial to the maximum extent permitted by law.",
  },
  {
    t: "16. MODIFICATIONS",
    d: "NEO may modify these Terms and Conditions at any time.\n\nThe modifications shall become effective upon publication on the website.\n\nContinued use of the services shall constitute acceptance of such modifications.",
  },
  {
    t: "17. CONTACT",
    d: "For legal or contractual inquiries:\n\nNova Enterprice Online (NEO)\n35250 Date Palm Dr, Suite C\nCathedral City, California\nUnited States\n\nEmail: contact@novaenterprice.online",
  },
];

function Terminos() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Legal</p>
      <h1 className="mt-3 text-5xl font-bold">
        Terms and <span className="text-gradient-brand">Conditions</span>
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Last Updated:{" "}
        {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>
      <div className="mt-12 space-y-8">
        {sections.map((s) => (
          <div key={s.t}>
            <h2 className="text-xl font-semibold">{s.t}</h2>
            {s.d.split("\n").map((line, i) => (
              <p key={i} className="mt-2 text-muted-foreground leading-relaxed">
                {line || "\u00A0"}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
