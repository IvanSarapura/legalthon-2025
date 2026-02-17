# Legalthon 2025 | Resultados

Sitio web de presentación de los **resultados del Legalthon 2025**: Hackathon Académico sobre aspectos jurídicos de la Blockchain, organizado por la Facultad de Derecho (UBA), la Comunidad Cardano, FinGurú y financiado por Project Catalyst.

## De qué trata la página

La página muestra de forma ordenada el propósito del evento, el desarrollo del Legalthon, el proceso de investigación posterior y el legado en forma de documentos finales. Está pensada para que visitantes, académicos y la comunidad blockchain conozcan los resultados y accedan a los papers y al álbum del evento.

## Principales funcionalidades

- **Hero** — Portada con título “Resultados Legalthon 2025”, subtítulo, socios y botón principal “Ver documentos finales” que lleva a la sección de papers. Incluye estrellitas animadas en CSS sobre la imagen de fondo.

- **Carrusel de frases** — Franja verde con frases destacadas del ecosistema (trazabilidad, inmutabilidad, consenso, “Don’t trust, verify”, “The code is law”, etc.) en un carrusel infinito horizontal.

- **El camino de la innovación** — Cuatro bloques (Propósito, Legalthon, Investigación, Legado) con textos, enlace institucional UBA, y vídeos embebidos de Vimeo.

- **Documentos finales** — Tres papers ganadores con lugar (1.º, 2.º, 3.º), enlaces para ver online y descargar en PDF (licencia Apache 2.0).

- **Destacados del evento** — Carrusel de fotos del evento y botón “Ver álbum completo” que enlaza al álbum en Google Drive.

- **Organizadores y apoyo** — Logos de Cardano, UBA (Facultad de Derecho), FinGurú y Project Catalyst, con enlaces a sus sitios oficiales.

- **Internacionalización (i18n)** — Soporte para **español** e **inglés** con next-intl; el usuario puede cambiar el idioma desde la barra de navegación.

## Tecnologías

- [Next.js](https://nextjs.org) (App Router)
- [next-intl](https://next-intl-docs.vercel.app/) para i18n
- CSS Modules para estilos

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). La app redirige al locale por defecto (por ejemplo `/es` o `/en` según la configuración).

## Despliegue

El proyecto está preparado para desplegarse en [Vercel](https://vercel.com). No requiere configuración de `.htaccess` ni reglas de reescritura tipo SPA; Next.js gestiona las rutas y los locales.

## Página original

[https://apestchanker.github.io/legalthon-2025/](https://apestchanker.github.io/legalthon-2025/)
