/**
 * Obtiene la URL base del sitio para metadatos SEO.
 * En producción, debería venir de NEXT_PUBLIC_SITE_URL o similar.
 * En desarrollo, usa localhost.
 */
export function getSiteUrl(): string {
  // En producción, usar variable de entorno si está disponible
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  // En desarrollo, detectar automáticamente
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  // Fallback: intentar detectar desde headers en runtime (solo funciona en server components)
  // Para producción, se recomienda configurar NEXT_PUBLIC_SITE_URL
  return "https://legalthon-2025.vercel.app"; // Actualizar con la URL real de producción
}

/**
 * Construye la URL completa para una ruta específica y locale
 */
export function getCanonicalUrl(path: string, locale: string): string {
  const baseUrl = getSiteUrl();
  // next-intl con localePrefix: "always" requiere el prefijo
  return `${baseUrl}/${locale}${path === "/" ? "" : path}`;
}
