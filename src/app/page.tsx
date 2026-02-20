import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

function getPreferredLocale(
  acceptLanguage: string | null,
  supported: readonly string[],
  fallback: string
): string {
  if (!acceptLanguage) return fallback;
  const entries = acceptLanguage.split(",").map((part) => {
    const [locale, qPart] = part.trim().split(";");
    const lang = locale.split("-")[0].toLowerCase();
    const q = qPart
      ? parseFloat(qPart.replace(/q\s*=\s*/i, "").trim()) || 1
      : 1;
    return { lang, q };
  });
  entries.sort((a, b) => b.q - a.q);
  for (const { lang } of entries) {
    if (supported.includes(lang)) return lang;
  }
  return fallback;
}

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");
  const locale = getPreferredLocale(
    acceptLanguage,
    routing.locales,
    routing.defaultLocale
  );
  redirect(`/${locale}`);
}
