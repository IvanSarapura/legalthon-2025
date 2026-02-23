# Legalthon 2025 | Resultados

Sitio web de presentación de los **resultados del Legalthon 2025**: Hackathon Académico sobre aspectos jurídicos de la Blockchain, organizado por la Facultad de Derecho (UBA), la Comunidad Cardano, FinGurú y financiado por Project Catalyst.

---

## Índice

- [De qué trata la página](#de-qué-trata-la-página)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Secciones y funcionalidades](#secciones-y-funcionalidades)
- [Tecnologías](#tecnologías)
- [Datos y contenido](#datos-y-contenido)
- [Cómo ejecutar](#cómo-ejecutar)
- [Despliegue](#despliegue)
- [Testing](#testing)
- [Página original](#página-original)

---

## De qué trata la página

La página presenta de forma ordenada el propósito del evento, el desarrollo del Legalthon, la investigación con tutoría, la ceremonia de cierre y el legado en documentos finales. Está pensada para que visitantes, académicos y la comunidad blockchain conozcan los resultados y accedan a los papers (Apache 2.0), al álbum de fotos del evento y a la información del jurado evaluador.

---

## Estructura del proyecto

```
legalthon-page/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Layout raíz (globals.css)
│   │   ├── page.tsx                # Redirección / → /{locale} según Accept-Language
│   │   ├── page.module.css
│   │   ├── globals.css
│   │   ├── error.tsx               # Errores globales
│   │   └── [locale]/
│   │       ├── layout.tsx          # i18n + Navbar + metadata + NextIntlClientProvider
│   │       ├── page.tsx            # Página principal (secciones)
│   │       ├── loading.tsx         # Estado de carga
│   │       └── error.tsx           # Errores por locale
│   ├── components/
│   │   ├── sections/               # Secciones de la landing
│   │   │   ├── HeroSection/
│   │   │   ├── PhraseCarouselSection/
│   │   │   ├── InnovationPathSection/
│   │   │   ├── FinalDocumentsSection/
│   │   │   ├── JurySection/
│   │   │   ├── EventHighlightsSection/
│   │   │   │   └── HighlightsCarousel.tsx   # Carrusel cliente
│   │   │   ├── PressCoverageSection/
│   │   │   └── OrganizersSection/
│   │   ├── layout/
│   │   │   ├── ClientOnlyNavbar/
│   │   │   ├── Navbar/
│   │   │   ├── Footer/
│   │   │   ├── ScrollToTopButton/
│   │   │   └── HtmlLang/
│   │   └── ui/
│   │       ├── Button/
│   │       ├── Card/
│   │       ├── ExternalLinkIcon/
│   │       └── DownloadIcon/
│   ├── data/
│   │   ├── highlightsImages.ts     # Imágenes del carrusel de fotos
│   │   ├── jury.ts                 # Miembros del jurado
│   │   └── pressCoverage.ts        # Items de cobertura en medios
│   ├── i18n/
│   │   ├── routing.ts              # Locales es/en, prefijo siempre
│   │   ├── request.ts              # Carga de mensajes por locale
│   │   └── navigation.ts           # Navegación localizada
│   ├── lib/
│   │   └── metadata.ts             # getSiteUrl, getCanonicalUrl (SEO)
│   ├── styles/
│   │   └── tokens.css              # Design tokens
│   └── test/
│       └── setupTests.ts           # Mocks para Vitest
├── messages/
│   ├── es.json                     # Textos en español
│   └── en.json                     # Textos en inglés
├── public/
│   ├── images/                     # Hero, logos, carrusel, jurado
│   │   └── jury/                   # Fotos de miembros del jurado
│   ├── documents/                  # PDFs de los papers
│   └── icons/
├── middleware.ts                   # next-intl: redirección por locale
├── next.config.ts
├── vitest.config.ts
└── package.json
```

---

## Secciones y funcionalidades

| Sección | Descripción |
|--------|-------------|
| **Hero** | Portada con título "Resultados Legalthon 2025", subtítulo, socios y CTA verde "Ver documentos finales" (ancla `#documentos-finales`). Fondo con imagen y estrellas animadas en CSS. |
| **Carrusel de frases** | Franja verde con frases del ecosistema blockchain (trazabilidad, "Not your keys…", inmutabilidad, gobernanza, identidad soberana, consenso, innovación, "Code is law", auditable, "Don't trust, verify") en carrusel infinito horizontal. Pausa al pasar el mouse o enfocar. |
| **El camino de la innovación** | **Seis cards** en grid (móvil 1 col, tablet 2, desktop 3×2): 1. El propósito (vídeo Vimeo), 2. El Legalthon (botón UBA Institucional), 3. La investigación (vídeo), 4. La tutoría, 5. La ceremonia, 6. El legado. Cards con transición al hover. |
| **Documentos finales** | Tres papers ganadores (podium 2-1-3) con títulos, enlaces "Ver online" y descarga en PDF. Nota sobre licencia Apache 2.0. Fondo oscuro con estrellas. |
| **Jurado** | Seis cards con foto circular (borde gris, verde al hover), nombre y rol. Subtítulo: "Expertos que evaluaron las propuestas del Legalthon 2025". |
| **Event Highlights** | Carrusel infinito de fotos del evento con estrellas animadas en background (movimiento horizontal continuo, sincronizado con el carrusel; pausa al hover). Botón "Ver álbum completo" (Google Drive). Fondo negro. |
| **Cobertura en medios** | Cinco cards: 3 en LinkedIn (fila 1) y 2 en FinGurú (fila 2). URLs por locale para FinGurú. Badge de fuente (LinkedIn/FinGurú). |
| **Organizadores** | Logos de Cardano, UBA, FinGurú y Project Catalyst con enlaces. Fondo oscuro con estrellas. |
| **Footer** | Copyright. Botón de scroll hacia arriba (efecto glass, visible al final de página). |

- **Navegación** — Barra fija con cambio de idioma (ES/EN). Navbar montada en cliente (`ClientOnlyNavbar`) para evitar hidratación incorrecta.
- **Internacionalización** — Español (por defecto) e inglés; rutas con prefijo (`/es`, `/en`). Detección por `Accept-Language` en la raíz (`/`).
- **SEO** — OpenGraph, Twitter cards, URLs canónicas, robots. Metadatos traducidos por locale. `NEXT_PUBLIC_SITE_URL` para producción.

---

## Tecnologías

| Dependencia | Versión | Uso |
|-------------|---------|-----|
| **Next.js** | 16.1.6 | App Router, SSG/SSR, Turbopack, rutas por locale |
| **React** | 19.2.3 | Componentes y hooks |
| **next-intl** | ^4.8.2 | i18n: mensajes, rutas, `getTranslations` / `useTranslations` |
| **TypeScript** | ^5 | Tipado estricto |
| **Vitest** | ^4.0.18 | Tests unitarios y de componentes |
| **React Testing Library** | ^16.1.0 | Tests de componentes React |
| **React Compiler** | 1.0.0 | Optimización automática (next.config) |

- **Estilos** — CSS Modules (`.module.css`) por componente. Design tokens en `src/styles/tokens.css`.
- **Imágenes** — `next/image` con formatos AVIF/WebP, device sizes optimizados.

### Design tokens (`tokens.css`)

- **Breakpoints:** 480px, 768px, 1024px (documentados como `--bp-*`; media queries usan literales).
- **Colores:** Verde primario `#a5ff00`, secundario `#00baa8`; neutros para tema oscuro/claro.
- **Espaciado de secciones:** `--section-padding-block`, `--section-padding-block-end`, `--section-padding-inline`, `--section-gap`.
- **Tema claro:** `@media (prefers-color-scheme: light)` con paleta invertida.

---

## Datos y contenido

| Archivo | Contenido |
|---------|-----------|
| `highlightsImages.ts` | Lista de nombres de archivo del carrusel de fotos y ruta base `/images`. |
| `jury.ts` | Seis miembros del jurado: `id`, `imageSrc`, `flipHorizontal`. Nombres y roles en `messages` (`jury.jury1Name`, `jury1Role`, etc.). |
| `pressCoverage.ts` | Cinco ítems con `id`, `source` (linkedin/finguru), `url` (string o `{ es, en }`). Títulos en `messages`. |
| `messages/es.json`, `messages/en.json` | Todos los textos: metadata, nav, hero, phraseCarousel, innovationPath, finalDocuments, jury, eventHighlights, pressCoverage, organizers, error, loading. |

---

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000); la app redirige al locale detectado (por `Accept-Language`) o al predeterminado (`/es`).

### Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Servidor de producción (post-build) |
| `npm run lint` | ESLint |
| `npm test` | Vitest (modo watch) |
| `npm test -- --run` | Vitest (una ejecución) |
| `npm run test:ui` | Vitest UI interactiva |
| `npm run test:coverage` | Reporte de cobertura |

---

## Despliegue

El proyecto está preparado para [Vercel](https://vercel.com). Opcionalmente, configurar la variable de entorno `NEXT_PUBLIC_SITE_URL` para URLs canónicas correctas en producción (por defecto usa `https://legalthon-2025.vercel.app`).

---

## Testing

Ver `src/test/README.md` para configuración de Vitest, mocks (next-intl, next/navigation) y guía para escribir tests. Tests incluidos: `Button.test.tsx`, `HighlightsCarousel.test.tsx`, `highlightsImages.test.ts`.

---

## Página original

[https://apestchanker.github.io/legalthon-2025/](https://apestchanker.github.io/legalthon-2025/)
