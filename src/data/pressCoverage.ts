/** Ítems de cobertura en medios: 3 en LinkedIn (fila 1), 2 en FinGurú (fila 2).
 *  Orden: fila 1 (3 cards LinkedIn) → fila 2 (2 cards FinGurú).
 *  URLs: LinkedIn usa string (mismo enlace por idioma). FinGurú usa { es, en } (2 links ES, 2 EN).
 *  Títulos y descripciones en messages bajo pressCoverage.{id}Title / {id}Description. */

export type LocaleUrl = string | { es: string; en: string };

function resolveUrl(url: LocaleUrl, locale: string): string {
  return typeof url === "string" ? url : (url[locale as "es" | "en"] ?? url.es);
}

export function getPressItemUrl(
  url: LocaleUrl,
  locale: string
): string {
  return resolveUrl(url, locale);
}

export const PRESS_COVERAGE_ITEMS = [
  {
    id: "linkedin1",
    source: "linkedin" as const,
    url: "https://www.linkedin.com/posts/salaberren-%26-lopez-sanson_the-legalthon-2025-organized-by-fingur%C3%BA-activity-7391217620659646464-jQl5/",
  },
  {
    id: "linkedin2",
    source: "linkedin" as const,
    url: "https://www.linkedin.com/posts/franco-ammaturo-208712192_vivimos-un-momento-hist%C3%B3rico-en-la-facultad-activity-7386132735834259456-mYJ5/?originalSubdomain=es",
  },
  {
    id: "linkedin3",
    source: "linkedin" as const,
    url: "https://www.linkedin.com/posts/apestchanker_qu%C3%A9-orgullo-y-que-privilegio-hacer-historia-activity-7386144818202243072-w5ca/?originalSubdomain=es",
  },
  {
    id: "finguru1",
    source: "finguru" as const,
    url: {
      es: "https://www.fin.guru/es/politica-y-sociedad/justice-cannot-remain-in-the-past-law-and-technology-unite-at-legalthon-b88ndu5jdc",
      en: "https://www.fin.guru/en/politica-y-sociedad/justice-cannot-remain-in-the-past-law-and-technology-unite-at-legalthon-b88ndu5jdc",
    },
  },
  {
    id: "finguru2",
    source: "finguru" as const,
    url: {
      es: "https://www.fin.guru/es/tecnologia-e-innovacion/justice-and-law-are-increasingly-technological-legalthon-has-arrived-y6f8v1ejis",
      en: "https://www.fin.guru/en/tecnologia-e-innovacion/justice-and-law-are-increasingly-technological-legalthon-has-arrived-y6f8v1ejis",
    },
  },
] as const;

export type PressCoverageId = (typeof PRESS_COVERAGE_ITEMS)[number]["id"];
