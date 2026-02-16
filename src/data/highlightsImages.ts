/**
 * Lista de imágenes del carrusel "Highlights del evento".
 * Rutas relativas a public/ (en el navegador: /images/...).
 * Orden de visualización en el carrusel.
 */
export const HIGHLIGHTS_IMAGES = [
  "DSC00808.JPG",
  "DSC00854.JPG",
  "DSC00868.JPG",
  "DSC00869.JPG",
  "DSC00875.JPG",
  "DSC00877.JPG",
  "DSC00947.JPG",
  "DSC00974.JPG",
  "DSC01036.JPG",
  "DSC01038.JPG",
  "DSC01039.JPG",
  "DSC01042.JPG",
  "DSC01044.JPG",
  "DSC01047.JPG",
  "DSC01050.JPG",
  "DSC01053.JPG",
  "DSC01063.JPG",
  "DSC01065.JPG",
  "DSC01072.JPG",
  "DSC01091.JPG",
  "DSC01096.JPG",
  "DSC01111.JPG",
  "DSC01125.JPG",
  "DSC01134.JPG",
  "DSC01140.JPG",
  "DSC01165.JPG",
  "DSC01170.JPG",
  "DSC01174.JPG",
  "DSC01190.JPG",
  "DSC01198.JPG",
] as const;

export type HighlightImageName = (typeof HIGHLIGHTS_IMAGES)[number];

/** Ruta base en el sitio para las imágenes de highlights */
export const HIGHLIGHTS_IMAGES_BASE = "/images";
