/** URL base del sitio (SEO). Preferir NEXT_PUBLIC_SITE_URL en producción. */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }
  return "https://legalthon-2025.vercel.app";
}

/** URL canónica para una ruta y locale (next-intl con localePrefix: "always"). */
export function getCanonicalUrl(path: string, locale: string): string {
  const baseUrl = getSiteUrl();
  return `${baseUrl}/${locale}${path === "/" ? "" : path}`;
}
