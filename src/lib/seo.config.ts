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
  return "Desarrollamos proyectos web modernos con React, Next.js y JavaScript. Sitios rápidos, elegantes y a medida.";
}

export const EMAIL_ADDRESS = "hola@novaenterprice.online";
