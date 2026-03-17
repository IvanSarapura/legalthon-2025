# Legalthon 2025 | Resultados

Sitio web de presentación de los **resultados del Legalthon 2025**: Hackathon Académico sobre aspectos jurídicos de la Blockchain, organizado por la Facultad de Derecho (UBA), FinGurú y financiado por Project Catalyst.

---

## Índice

- [De qué trata la página](#de-qué-trata-la-página)
- [Tecnologías](#tecnologías)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Design system](#design-system)
- [Secciones y funcionalidades](#secciones-y-funcionalidades)
- [Datos y contenido](#datos-y-contenido)
- [Cómo ejecutar](#cómo-ejecutar)
- [Testing](#testing)
- [Despliegue](#despliegue)
- [Página original](#página-original)

---

## De qué trata la página

La página presenta de forma ordenada el propósito del evento, el desarrollo del Legalthon, la investigación con tutoría, la ceremonia de cierre y el legado en documentos finales. Está pensada para que visitantes, académicos y la comunidad blockchain conozcan los resultados y accedan a los papers (Apache 2.0), al álbum de fotos del evento y a la información del jurado evaluador.

---

## Tecnologías

| Dependencia               | Versión | Uso                                                          |
| ------------------------- | ------- | ------------------------------------------------------------ |
| **Next.js**               | 16.1.6  | App Router, SSG/SSR, Turbopack, rutas por locale             |
| **React**                 | 19.2.3  | Componentes y hooks                                          |
| **next-intl**             | ^4.8.2  | i18n: mensajes, rutas, `getTranslations` / `useTranslations` |
| **TypeScript**            | ^5      | Tipado estricto                                              |
| **Vitest**                | ^4.0.18 | Tests unitarios y de componentes                             |
| **React Testing Library** | ^16.1.0 | Tests de componentes React                                   |
| **React Compiler**        | 1.0.0   | Optimización automática (next.config)                        |

- **Estilos** — CSS Modules (`.module.css`) co-localizados con cada componente. Design tokens centralizados en `src/styles/tokens.css`. Sin Tailwind ni preprocesadores.
- **Imágenes** — `next/image` con formatos AVIF/WebP, device sizes optimizados.
- **Linting** — ESLint flat config con `eslint-config-next` (core-web-vitals + TypeScript).

---

## Estructura del proyecto

```
legalthon-page/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Layout raíz (importa globals.css)
│   │   ├── page.tsx                   # Redirección / → /{locale} según Accept-Language
│   │   ├── globals.css                # Reset + base styles
│   │   ├── error.tsx                  # Errores fuera de contexto i18n
│   │   ├── error.module.css
│   │   └── [locale]/
│   │       ├── layout.tsx             # i18n + Navbar + metadata
│   │       ├── page.tsx               # Página principal (secciones)
│   │       ├── page.module.css
│   │       ├── loading.tsx            # Estado de carga
│   │       ├── loading.module.css
│   │       ├── error.tsx              # Errores por locale (con traducciones)
│   │       └── error.module.css
│   │
│   ├── components/
│   │   ├── sections/                  # Secciones de la landing (barrel: index.ts)
│   │   │   ├── HeroSection/
│   │   │   ├── PhraseCarouselSection/
│   │   │   ├── InnovationPathSection/
│   │   │   ├── FinalDocumentsSection/
│   │   │   ├── JurySection/
│   │   │   ├── EventHighlightsSection/
│   │   │   │   └── HighlightsCarousel/    # Subcomponente con CSS propio + test
│   │   │   ├── PressCoverageSection/
│   │   │   └── OrganizersSection/
│   │   │
│   │   ├── layout/                    # Componentes estructurales (barrel: index.ts)
│   │   │   ├── Navbar/               # Navbar + ClientOnlyNavbar (co-localizados)
│   │   │   ├── Footer/
│   │   │   └── HtmlLang/
│   │   │
│   │   └── ui/                        # Componentes reutilizables (barrel: index.ts)
│   │       ├── Button/
│   │       ├── Card/
│   │       ├── ScrollToTop/           # Botón scroll-to-top global
│   │       └── icons/                 # Iconos SVG como componentes (barrel: index.ts)
│   │           ├── DownloadIcon/
│   │           └── ExternalLinkIcon/
│   │
│   ├── data/                          # Datos estáticos desacoplados de componentes
│   │   ├── highlightsImages.ts
│   │   ├── jury.ts
│   │   └── pressCoverage.ts
│   │
│   ├── i18n/                          # Internacionalización (next-intl)
│   │   ├── routing.ts                 # Locales es/en, prefijo siempre
│   │   ├── request.ts                 # Carga de mensajes por locale
│   │   └── navigation.ts             # Link, redirect tipados
│   │
│   ├── lib/                           # Utilidades
│   │   └── metadata.ts               # getSiteUrl, getCanonicalUrl (SEO)
│   │
│   ├── styles/                        # Estilos globales y design tokens
│   │   ├── tokens.css                 # Design tokens (ver sección Design system)
│   │   └── animations.css             # @keyframes compartidos (starTwinkle)
│   │
│   ├── types/                         # Tipos compartidos entre módulos
│   │   └── index.ts
│   │
│   └── test-utils/                    # Infraestructura de testing (no tests)
│       ├── setupTests.ts              # Mocks globales (next-intl, next/navigation)
│       └── README.md                  # Guía de convenciones de testing
│
├── messages/
│   ├── es.json                        # Textos en español
│   └── en.json                        # Textos en inglés
│
├── public/
│   ├── images/
│   │   ├── events/                    # Fotos del evento (carrusel)
│   │   ├── jury/                      # Fotos del jurado
│   │   ├── sponsors/                  # Logos de organizadores
│   │   └── hero/                      # Imagen principal del hero
│   ├── documents/                     # PDFs de los papers
│   └── icons/                         # Iconos SVG estáticos
│
├── middleware.ts                      # next-intl: redirección por locale
├── next.config.ts
├── vitest.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── package.json
```

### Convenciones de organización

- **Co-localización**: cada componente vive en su carpeta con su `.tsx` y `.module.css` juntos. Los subcomponentes que son internos a una sección tienen su propia subcarpeta (ej. `HighlightsCarousel/`).
- **Barrel exports**: cada subcategoría de componentes (`ui/`, `sections/`, `layout/`) tiene un `index.ts` que re-exporta todo, permitiendo imports limpios como `import { Button } from "@/components/ui"`.
- **Path alias**: `@/*` apunta a `./src/*` (configurado en `tsconfig.json` y `vitest.config.ts`).
- **Tests junto al código**: los archivos `.test.tsx` / `.test.ts` viven dentro de la misma carpeta del componente o módulo que testean.
- **Datos desacoplados**: `src/data/` separa los datos estáticos (jurado, imágenes, prensa) de los componentes que los consumen.

---

## Design system

Los design tokens se centralizan en `src/styles/tokens.css` y se distribuyen globalmente via `globals.css`. Siguen una arquitectura de tres niveles:

| Capa           | Prefijo                     | Ejemplo                                   |
| -------------- | --------------------------- | ----------------------------------------- |
| Primitivos     | `--ds-*`                    | `--ds-color-brand-primary: #a5ff00`       |
| Semánticos     | `--color-*`, `--space-*`    | `--color-bg: var(--ds-color-neutral-950)` |
| Aliases legacy | `--primary`, `--background` | `--primary: var(--color-brand-primary)`   |

### Escalas disponibles

| Categoría         | Tokens                                                                                                                                                |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Colores**       | Marca (`brand-primary`, `brand-secondary`), neutros (050–950), semánticos (bg, surface, text, border, card)                                           |
| **Espaciado**     | `--ds-space-0` a `--ds-space-20` (0 a 5rem)                                                                                                           |
| **Tipografía**    | Tamaños (`--ds-text-xs` a `--ds-text-5xl`), pesos (`--ds-font-light` a `--ds-font-bold`), line-heights (`--ds-leading-none` a `--ds-leading-relaxed`) |
| **Border radius** | `--ds-radius-1` a `--ds-radius-pill`                                                                                                                  |
| **Z-index**       | `--ds-z-base` (0) a `--ds-z-toast` (500)                                                                                                              |
| **Sombras**       | `--ds-shadow-sm`, `--ds-shadow-md`, `--ds-shadow-lg`, `--ds-shadow-glow`                                                                              |
| **Transiciones**  | `--ds-transition-fast` (150ms), `--ds-transition-base` (250ms), `--ds-transition-slow` (400ms)                                                        |
| **Breakpoints**   | 480px (`sm`), 768px (`md`), 1024px (`lg`)                                                                                                             |

### Temas

- **Tema oscuro** (default): fondo `#050505`, texto blanco, acentos verdes.
- **Tema claro** (opcional): activado vía `@media (prefers-color-scheme: light)` con paleta invertida.

### Animaciones compartidas

Las animaciones reutilizadas entre secciones se definen en `src/styles/animations.css` (ej. `starTwinkle`). Las animaciones específicas de un componente se mantienen en su propio `.module.css`.

---

## Secciones y funcionalidades

| Sección                        | Descripción                                                                                                               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| **Hero**                       | Portada con título, subtítulo, socios y CTA verde "Ver documentos finales". Fondo con imagen y estrellas animadas en CSS. |
| **Carrusel de frases**         | Franja verde con frases del ecosistema blockchain en carrusel infinito horizontal. Pausa al hover/focus.                  |
| **El camino de la innovación** | Seis cards en grid responsivo (1/2/3 columnas): propósito, Legalthon, investigación, tutoría, ceremonia, legado.          |
| **Documentos finales**         | Tres papers ganadores (podium 2-1-3) con enlaces "Ver online" y descarga PDF. Licencia Apache 2.0.                        |
| **Jurado**                     | Seis cards con foto circular, nombre y rol. Borde verde al hover.                                                         |
| **Event Highlights**           | Carrusel infinito de fotos con estrellas animadas en background. Botón "Ver álbum completo" (Google Drive).               |
| **Cobertura en medios**        | Cinco cards: 3 LinkedIn + 2 FinGurú. URLs localizadas. Badge de fuente.                                                   |
| **Organizadores**              | Logos de Cardano, UBA, FinGurú y Project Catalyst con enlaces.                                                            |
| **Footer**                     | Copyright + botón scroll-to-top con efecto glass.                                                                         |

### Funcionalidades transversales

- **Navegación** — Barra fija con cambio de idioma (ES/EN). Montada en cliente (`ClientOnlyNavbar`) para evitar errores de hidratación con `next-intl`.
- **Internacionalización** — Español (default) e inglés; rutas con prefijo siempre activo (`/es`, `/en`). Detección automática por `Accept-Language` en `/`.
- **SEO** — OpenGraph, Twitter cards, URLs canónicas, robots. Metadatos traducidos por locale. Variable `NEXT_PUBLIC_SITE_URL` para producción.
- **Accesibilidad** — `aria-label`, `aria-roledescription`, `aria-hidden`, `prefers-reduced-motion` respetado en todas las animaciones.

---

## Datos y contenido

| Archivo                        | Contenido                                                                                        |
| ------------------------------ | ------------------------------------------------------------------------------------------------ |
| `src/data/highlightsImages.ts` | Lista de nombres de archivo del carrusel y ruta base `/images/events`.                           |
| `src/data/jury.ts`             | Seis miembros del jurado: `id`, `imageSrc`, `flipHorizontal`. Nombres y roles en `messages/`.    |
| `src/data/pressCoverage.ts`    | Cinco ítems de prensa con `id`, `source`, `url` (string o `{ es, en }`). Títulos en `messages/`. |
| `messages/es.json`             | Todos los textos en español (metadata, nav, secciones, error, loading).                          |
| `messages/en.json`             | Todos los textos en inglés.                                                                      |

---

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000); la app redirige al locale detectado (por `Accept-Language`) o al predeterminado (`/es`).

### Scripts

| Comando                 | Descripción                         |
| ----------------------- | ----------------------------------- |
| `npm run dev`           | Servidor de desarrollo (Turbopack)  |
| `npm run build`         | Build de producción                 |
| `npm run start`         | Servidor de producción (post-build) |
| `npm run lint`          | ESLint                              |
| `npm test`              | Vitest (modo watch)                 |
| `npm test -- --run`     | Vitest (una ejecución)              |
| `npm run test:ui`       | Vitest UI interactiva               |
| `npm run test:coverage` | Reporte de cobertura (V8)           |

---

## Testing

El proyecto usa **Vitest** + **React Testing Library** con entorno jsdom. La infraestructura de testing vive en `src/test-utils/`:

- `setupTests.ts` — Mocks globales de `next-intl` (traducciones devuelven la key) y `next/navigation` (router mockeado).
- `README.md` — Guía de convenciones, ejemplos y objetivos de cobertura.

Tests incluidos:

| Test                          | Ubicación                                     | Qué verifica                                            |
| ----------------------------- | --------------------------------------------- | ------------------------------------------------------- |
| `Button.test.tsx`             | `components/ui/Button/`                       | Renderizado, variantes, polimorfismo `<a>`/`<button>`   |
| `HighlightsCarousel.test.tsx` | `components/sections/.../HighlightsCarousel/` | Duplicación para loop infinito, inmutabilidad           |
| `highlightsImages.test.ts`    | `data/`                                       | Integridad del array de imágenes, unicidad, extensiones |

---

## Despliegue

El proyecto está preparado para [Vercel](https://vercel.com). Opcionalmente, configurar la variable de entorno `NEXT_PUBLIC_SITE_URL` para URLs canónicas correctas en producción (por defecto usa `https://legalthon-2025.vercel.app`).

---

## Página original

[https://apestchanker.github.io/legalthon-2025/](https://apestchanker.github.io/legalthon-2025/)
