# Legalthon 2025 | Resultados

Sitio web de presentación de los **resultados del Legalthon 2025**: Hackathon Académico sobre aspectos jurídicos de la Blockchain, organizado por la Facultad de Derecho (UBA), la Comunidad Cardano, FinGurú y financiado por Project Catalyst.

---

## De qué trata la página

La página presenta de forma ordenada el propósito del evento, el desarrollo del Legalthon, la investigación con tutoría, la ceremonia de cierre y el legado en documentos finales. Está pensada para que visitantes, académicos y la comunidad blockchain conozcan los resultados y accedan a los papers (Apache 2.0) y al álbum de fotos del evento.

---

## Estructura del proyecto

- **`src/app/`** — App Router de Next.js: `layout.tsx` (raíz), `page.tsx` (redirección raíz con detección de idioma vía `Accept-Language`), `error.tsx` (errores globales), `[locale]/layout.tsx` (i18n + navbar + hijos), `[locale]/page.tsx` (página principal), `[locale]/error.tsx`, `[locale]/loading.tsx`.
- **`src/components/sections/`** — Secciones de la landing: Hero, PhraseCarousel, InnovationPath, FinalDocuments, EventHighlights, Organizers.
- **`src/components/layout/`** — ClientOnlyNavbar, Navbar, Footer, ScrollToTopButton, HtmlLang.
- **`src/components/ui/`** — Button (variants: primary, secondary, cta, album), Card (default, podium, small), ExternalLinkIcon, DownloadIcon.
- **`src/i18n/`** — `routing.ts` (locales `es`/`en`, prefijo siempre, localeDetection), `request.ts` (carga de mensajes por locale).
- **`messages/`** — `es.json` y `en.json` con todos los textos (metadata, nav, hero, phraseCarousel, innovationPath, finalDocuments, eventHighlights, organizers, error, loading).
- **`src/styles/tokens.css`** — Design tokens unificados (`--ds-*`, `--color-*`, aliases legacy).
- **`src/lib/metadata.ts`** — Utilidades SEO: `getSiteUrl()`, `getCanonicalUrl()`.
- **`public/`** — Imágenes (hero, logos, fotos del evento). Uso de `next/image` en Hero, Organizers y carrusel.
- **`src/data/`** — `highlightsImages.ts`: lista de imágenes del carrusel y ruta base.

---

## Secciones y funcionalidades

| Sección | Descripción |
|--------|-------------|
| **Hero** | Portada con título “Resultados Legalthon 2025”, subtítulo, socios y CTA verde “Ver documentos finales” (ancla a documentos). Fondo con imagen y estrellitas animadas en CSS. |
| **Carrusel de frases** | Franja verde con frases del ecosistema (trazabilidad, “Not your keys…”, inmutabilidad, gobernanza, identidad soberana, consenso, innovación, “The code is law”, auditable, “Don’t trust, verify”) en carrusel infinito horizontal. |
| **El camino de la innovación** | **Seis cards** en grid (móvil 1 columna, tablet 2, desktop 3×2): 1. El propósito (vídeo Vimeo), 2. El Legalthon (botón UBA Institucional con badge “Sitio oficial” y descripción), 3. La investigación (vídeo), 4. La tutoría, 5. La ceremonia, 6. El legado. Cards con transición al hover. |
| **Documentos finales** | Tres papers ganadores (1.º, 2.º, 3.º) con títulos, enlaces “Ver online” y descarga en PDF (icono DownloadIcon); nota sobre licencia Apache 2.0. |
| **Destacados del evento** | Carrusel de fotos (lista en `highlightsImages.ts`) y botón verde “Ver álbum completo” (Google Drive), centrado en la sección. Controles de reproducción/pausa y accesibilidad. |
| **Organizadores y apoyo** | Logos de Cardano, UBA, FinGurú y Project Catalyst con enlaces a sus sitios oficiales. |
| **Footer** | Copyright. Botón de scroll hacia arriba (efecto glass, cambio visual al final de página). |

- **Navegación** — Barra fija con cambio de idioma (ES/EN). Navbar se monta en cliente (ClientOnlyNavbar).
- **Internacionalización** — Español (por defecto) e inglés; rutas con prefijo (`/es`, `/en`). Detección de idioma por `Accept-Language` en la raíz (`/`). next-intl para mensajes y metadatos.
- **SEO** — OpenGraph, Twitter cards, URLs canónicas, robots. Metadatos traducidos por locale.

---

## Tecnologías

| Dependencia | Uso |
|-------------|-----|
| **Next.js** (16.x) | App Router, SSG/SSR, generación de rutas por locale. |
| **React** (19.x) | Componentes y hooks. |
| **next-intl** (4.x) | i18n: mensajes, rutas localizadas, `getTranslations` / `useTranslations`. |
| **TypeScript** | Tipado en todo el proyecto. |
| **CSS Modules** | Estilos por componente (`.module.css`). |

- **Estilos** — Design tokens en `src/styles/tokens.css` (breakpoints, espaciado, colores semánticos). Variables legacy en `globals.css`. Tema con `--primary` verde y soporte `prefers-color-scheme: dark`.
- **Config** — `next.config.ts` con plugin `next-intl`, React Compiler y optimización de imágenes.
- **Testing** — Vitest + React Testing Library. Ver `src/test/README.md` para más detalles.

---

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000); la app redirige al locale detectado (por `Accept-Language`) o al predeterminado (`/es`).

- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Test:** `npm test` (modo watch) o `npm test -- --run` (una vez)
- **Test UI:** `npm run test:ui` (interfaz interactiva)
- **Test Coverage:** `npm run test:coverage` (reporte de cobertura)

---

## Despliegue

El proyecto está preparado para [Vercel](https://vercel.com). Next.js gestiona rutas y locales; no se requiere `.htaccess` ni reglas de reescritura tipo SPA. Opcionalmente, configurar `NEXT_PUBLIC_SITE_URL` para URLs canónicas en producción.

---

## Página original

[https://apestchanker.github.io/legalthon-2025/](https://apestchanker.github.io/legalthon-2025/)
