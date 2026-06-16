const GA_ID = typeof import.meta !== "undefined" ? import.meta.env?.VITE_GA_ID : undefined;

export function Analytics() {
  const gaId: string | undefined = GA_ID;
  if (!gaId) return null;

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: [
            `window.dataLayer = window.dataLayer || [];`,
            `function gtag(){dataLayer.push(arguments);}`,
            `gtag('js', new Date());`,
            `gtag('config', '${gaId}', {`,
            `  send_page_view: true,`,
            `  cookie_flags: 'samesite=none;secure',`,
            `  cookie_domain: '${typeof location !== "undefined" ? location.hostname : ""}',`,
            `});`,
          ].join("\n"),
        }}
      />
    </>
  );
}
