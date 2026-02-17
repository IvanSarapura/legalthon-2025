/** Nombres de archivo en public/images; orden del carrusel. (Algunas .jpg, otras .JPG tras comprimir.) */
export const HIGHLIGHTS_IMAGES = [
  "DSC00808.jpg",
  "DSC00854.jpg",
  "DSC00868.JPG",
  "DSC00869.jpg",
  "DSC00875.JPG",
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
  "DSC01063.JPG",
  "DSC01065.JPG",
  "DSC01072.JPG",
  "DSC01091.JPG",
  "DSC01096.JPG",
  "DSC01111.JPG",
  "DSC01125.jpg",
  "DSC01134.jpg",
  "DSC01140.JPG",
  "DSC01165.jpg",
  "DSC01170.JPG",
  "DSC01174.JPG",
  "DSC01190.JPG",
  "DSC01198.JPG",
] as const;

export type HighlightImageName = (typeof HIGHLIGHTS_IMAGES)[number];

/** Prefijo de ruta para las imágenes del carrusel. */
export const HIGHLIGHTS_IMAGES_BASE = "/images";
