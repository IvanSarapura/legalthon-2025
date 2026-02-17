# Legalthon 2025 | Resultados

Sitio web de presentación de los **resultados del Legalthon 2025**: Hackathon Académico sobre aspectos jurídicos de la Blockchain, organizado por la Facultad de Derecho (UBA), la Comunidad Cardano, FinGurú y financiado por Project Catalyst.

---

## De qué trata la página

La página presenta de forma ordenada el propósito del evento, el desarrollo del Legalthon, la investigación con tutoría, la ceremonia de cierre y el legado en documentos finales. Está pensada para que visitantes, académicos y la comunidad blockchain conozcan los resultados y accedan a los papers (Apache 2.0) y al álbum de fotos del evento.

---

## Estructura del proyecto

- **`src/app/`** — App Router de Next.js: `layout.tsx` (raíz), `[locale]/layout.tsx` (i18n + navbar + hijos), `[locale]/page.tsx` (página principal que compone las secciones).
- **`src/components/sections/`** — Secciones de la landing: Hero, PhraseCarousel, InnovationPath, FinalDocuments, EventHighlights, Organizers.
- **`src/components/layout/`** — Navbar (client-only con spacer para evitar layout shift), Footer, HtmlLang.
- **`src/components/ui/`** — Button, Card (variants: default, podium, small).
- **`src/i18n/`** — `routing.ts` (locales `es`/`en`, prefijo siempre), `request.ts` (carga de mensajes por locale).
- **`messages/`** — `es.json` y `en.json` con todos los textos por namespace (metadata, nav, hero, phraseCarousel, innovationPath, finalDocuments, eventHighlights, organizers).
- **`public/`** — Imágenes (hero, logos de organizadores, fotos del evento), iconos SVG (write-logo, handshake-logo, winer-logo).
- **`src/data/`** — `highlightsImages.ts`: lista de nombres de imágenes del carrusel de highlights y ruta base.

---

## Secciones y funcionalidades

| Sección | Descripción |
|--------|-------------|
| **Hero** | Portada con título “Resultados Legalthon 2025”, subtítulo, socios y CTA “Ver documentos finales” (ancla a documentos). Fondo con imagen y estrellitas animadas en CSS.
| **Carrusel de frases** | Franja verde con frases del ecosistema (trazabilidad, “Not your keys…”, inmutabilidad, gobernanza, identidad soberana, consenso, innovación, “The code is law”, auditable, “Don’t trust, verify”) en carrusel infinito horizontal. |
| **El camino de la innovación** | **Seis cards** en grid (móvil 1 columna, tablet 2, desktop 3 columnas × 2 filas): 1. El propósito, 2. El Legalthon (enlace UBA + vídeo Vimeo), 3. La investigación (vídeo), 4. La tutoría (icono handshake), 5. La ceremonia (icono winer), 6. El legado. Cards con mismo estilo y transición al hover. |
| **Documentos finales** | Tres papers ganadores (1.º, 2.º, 3.º) con títulos, enlaces “Ver online” y descarga en PDF; nota sobre licencia Apache 2.0. |
| **Destacados del evento** | Carrusel de fotos (lista en `highlightsImages.ts`) y botón “Ver álbum completo” (Google Drive). Controles de reproducción/pausa y accesibilidad. |
| **Organizadores y apoyo** | Logos de Cardano, UBA (Facultad de Derecho), FinGurú y Project Catalyst con enlaces a sus sitios web oficiales. |
| **Footer** | Copyright. |

- **Navegación** — Barra fija con cambio de idioma (ES/EN). Navbar se monta en cliente.
- **Internacionalización** — Español (por defecto) e inglés; rutas con prefijo (`/es`, `/en`). next-intl para mensajes y metadatos.

---

## Tecnologías

| Dependencia | Uso |
|-------------|-----|
| **Next.js** (16.x) | App Router, SSG/SSR, generación de rutas por locale. |
| **React** (19.x) | Componentes y hooks. |
| **next-intl** (4.x) | i18n: mensajes, rutas localizadas, `getTranslations` / `useTranslations`. |
| **TypeScript** | Tipado en todo el proyecto. |
| **CSS Modules** | Estilos por componente (`.module.css`). |

- **Estilos** — Variables CSS en `globals.css` (breakpoints, colores, espaciado). Tema con `--primary` verde y soporte `prefers-color-scheme: dark` donde aplica.
- **Config** — `next.config.ts` con plugin `next-intl` y React Compiler.
- **Testing** — Vitest + React Testing Library. Ver `src/test/README.md` para más detalles.

---

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000); la app redirige al locale por defecto (`/es`).

- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Test:** `npm test` (modo watch) o `npm test -- --run` (una vez)
- **Test UI:** `npm run test:ui` (interfaz interactiva)
- **Test Coverage:** `npm run test:coverage` (reporte de cobertura)

---

## Despliegue

El proyecto está preparado para [Vercel](https://vercel.com). Next.js gestiona rutas y locales; no se requiere `.htaccess` ni reglas de reescritura tipo SPA.

---

## Página original

[https://apestchanker.github.io/legalthon-2025/](https://apestchanker.github.io/legalthon-2025/)
