/** Nombres de archivo en public/images/events; orden del carrusel. */
export const HIGHLIGHTS_IMAGES = [
  "DSC00808.jpg",
  "DSC00854.jpg",
  "dsc00868.jpg",
  "DSC00869.jpg",
  "dsc00875.jpg",
  "DSC00877.jpg",
  "DSC00947.jpg",
  "DSC00974.jpg",
  "DSC01036.jpg",
  "DSC01038.jpg",
  "DSC01039.jpg",
  "DSC01042.jpg",
  "DSC01044.jpg",
  "DSC01047.jpg",
  "DSC01050.jpg",
  "DSC01053.jpg",
  "dsc01063.jpg",
  "dsc01065.jpg",
  "dsc01072.jpg",
  "dsc01091.jpg",
  "dsc01096.jpg",
  "dsc01111.jpg",
  "DSC01125.jpg",
  "DSC01134.jpg",
  "dsc01140.jpg",
  "DSC01165.jpg",
  "dsc01170.jpg",
  "dsc01174.jpg",
  "dsc01190.jpg",
  "dsc01198.jpg",
] as const;

export type HighlightImageName = (typeof HIGHLIGHTS_IMAGES)[number];

/** Prefijo de ruta para las imágenes del carrusel. */
export const HIGHLIGHTS_IMAGES_BASE = "/images/events";
