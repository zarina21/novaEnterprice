import { createFileRoute } from "@tanstack/react-router";
import { getBaseUrl, getSiteName } from "@/lib/seo.config";

const baseUrl = getBaseUrl();

export const Route = createFileRoute("/_site/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — NEO | Nova Enterprice Online" },
      {
        name: "description",
        content:
          "Privacy Policy of Nova Enterprice Online (NEO). How we collect, use, and protect your personal information.",
      },
      { property: "og:title", content: "Privacy Policy — NEO" },
      { property: "og:description", content: "Privacy Policy of Nova Enterprice Online." },
      { property: "og:url", content: `${baseUrl}/privacy` },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index, follow" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy — NEO" },
      { name: "twitter:description", content: "Privacy Policy of Nova Enterprice Online." },
    ],
    links: [{ rel: "canonical", href: `${baseUrl}/privacy` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy — NEO",
          description: "Privacy Policy of Nova Enterprice Online.",
          url: `${baseUrl}/privacy`,
          isPartOf: {
            "@type": "WebSite",
            name: getSiteName(),
            url: baseUrl,
          },
        }),
      },
    ],
  }),
  component: Privacy,
});

const sections = [
  {
    t: "1. INTRODUCTION",
    d: 'Nova Enterprice Online ("NEO," "Company," "we," "us," or "our") respects your privacy and is committed to protecting your personal information.\n\nThis Privacy Policy explains how we collect, use, disclose, store, and protect personal information when you visit our website, communicate with us, request a quote, purchase services, or otherwise interact with our business.\n\nBy using our website or services, you acknowledge that you have read and understood this Privacy Policy.',
  },
  {
    t: "2. COMPANY INFORMATION",
    d: "Nova Enterprice Online (NEO)\n\nBusiness Address:\n35250 Date Palm Dr, Suite C\nCathedral City, California\nUnited States\n\nEmail: contact@novaenterprice.online\n\nWebsite: novaenterprice.online",
  },
  {
    t: "3. INFORMATION WE COLLECT",
    d: "NEO only collects contact information necessary to provide services and communicate with clients.\n\nInformation we may collect includes:\n\nFull name, Email address, Phone number, Company name, Business contact information, Project-related communications, Billing information necessary to process payments.\n\nWe do not intentionally collect sensitive personal information unless voluntarily provided by the user.",
  },
  {
    t: "4. INFORMATION COLLECTED AUTOMATICALLY",
    d: "When you access our website, we may automatically collect:\n\nIP address, Browser type, Device information, Operating system, Date and time of access, Website usage data, Security and diagnostic logs.\n\nThis information helps us improve security, functionality, and performance.",
  },
  {
    t: "5. HOW WE USE YOUR INFORMATION",
    d: "We may use your information to:\n\nRespond to inquiries, Provide quotations, Deliver services, Process payments, Provide customer support, Communicate project updates, Maintain business records, Comply with legal obligations, Detect fraud or security threats, Improve our services and website.",
  },
  {
    t: "6. LEGAL BASIS FOR PROCESSING (EUROPEAN USERS)",
    d: "For users located in the European Economic Area (EEA), the United Kingdom, or Switzerland, we process personal information based on:\n\nContractual necessity, Legal obligations, Legitimate business interests, User consent when required.",
  },
  {
    t: "7. INFORMATION SHARING",
    d: "NEO does not sell personal information.\n\nWe may share information with:\n\nPayment processors, Hosting providers, Cloud infrastructure providers, Domain registrars, Professional advisors, Government authorities when legally required.\n\nAll third parties are expected to protect personal information appropriately.",
  },
  {
    t: "8. THIRD-PARTY SERVICES",
    d: "Our services may utilize third-party providers including, but not limited to:\n\nVercel, Firebase, Neon, Payment processing providers, Email communication providers.\n\nThese providers may process information according to their own privacy policies.\n\nNEO is not responsible for the privacy practices of third-party providers.",
  },
  {
    t: "9. DATA RETENTION",
    d: "We retain personal information only for as long as reasonably necessary to:\n\nProvide services, Fulfill contractual obligations, Resolve disputes, Comply with legal requirements, Maintain business records.\n\nWhen information is no longer necessary, it will be securely deleted or anonymized.",
  },
  {
    t: "10. DATA SECURITY",
    d: "We implement commercially reasonable technical and organizational safeguards designed to protect personal information against:\n\nUnauthorized access, Disclosure, Alteration, Destruction, Loss.\n\nHowever, no internet transmission or storage system can be guaranteed to be 100% secure.",
  },
  {
    t: "11. CALIFORNIA PRIVACY RIGHTS (CCPA/CPRA)",
    d: "California residents may have the following rights:\n\nRight to know what personal information is collected, Right to access personal information, Right to correct inaccurate information, Right to request deletion of personal information, Right to limit certain uses of sensitive information where applicable, Right to non-discrimination for exercising privacy rights.\n\nTo exercise these rights, contact: contact@novaenterprice.online",
  },
  {
    t: "12. EUROPEAN PRIVACY RIGHTS (GDPR)",
    d: "Individuals located within the European Economic Area may have the right to:\n\nAccess personal information, Correct inaccurate information, Request deletion, Restrict processing, Object to processing, Data portability, Withdraw consent where applicable.\n\nRequests may be submitted to: contact@novaenterprice.online",
  },
  {
    t: "13. INTERNATIONAL DATA TRANSFERS",
    d: "Because NEO operates in the United States and serves international clients, personal information may be transferred to and processed in countries outside the user's country of residence.\n\nBy using our services, users acknowledge that such transfers may occur.",
  },
  {
    t: "14. CHILDREN'S PRIVACY",
    d: "Our services are not directed toward individuals under the age of 18.\n\nWe do not knowingly collect personal information from minors.\n\nIf we become aware that information has been collected from a minor, we will take reasonable steps to delete it.",
  },
  {
    t: "15. COOKIES AND TRACKING TECHNOLOGIES",
    d: "Our website may use cookies and similar technologies for:\n\nWebsite functionality, Security, Analytics, Performance monitoring.\n\nUsers may manage cookies through their browser settings.",
  },
  {
    t: "16. DO NOT TRACK",
    d: "Our website may not respond to browser-based Do Not Track signals because there is currently no universally accepted standard for such signals.",
  },
  {
    t: "17. CHANGES TO THIS POLICY",
    d: "NEO reserves the right to modify this Privacy Policy at any time.\n\nChanges become effective upon publication on the website.\n\nContinued use of the website or services constitutes acceptance of the updated Privacy Policy.",
  },
  {
    t: "18. CONTACT INFORMATION",
    d: "For privacy-related requests or questions:\n\nNova Enterprice Online (NEO)\n35250 Date Palm Dr, Suite C\nCathedral City, California\nUnited States\n\nEmail: contact@novaenterprice.online\n\nWebsite: novaenterprice.online",
  },
];

function Privacy() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Legal</p>
      <h1 className="mt-3 text-5xl font-bold">
        Privacy <span className="text-gradient-brand">Policy</span>
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
