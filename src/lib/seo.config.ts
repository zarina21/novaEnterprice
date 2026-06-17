const DEFAULT_URL = "https://novaenterprice.online";

export function getBaseUrl(): string {
  if (typeof import.meta !== "undefined" && import.meta.env?.VITE_BASE_URL) {
    return import.meta.env.VITE_BASE_URL;
  }
  return DEFAULT_URL;
}

export function getSiteName(): string {
  return "Nova Enterprice Online";
}

export function getDefaultDescription(): string {
  return "We build modern web projects with React, Next.js and JavaScript. Fast, elegant, custom sites.";
}

export const EMAIL_ADDRESS = "contact@novaenterprice.online";

export const GITHUB_URL = "https://github.com/zarina21";
