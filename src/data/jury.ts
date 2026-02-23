/** Miembros del jurado del Legalthon 2025.
 *  Izquierda: jury1, Centro: jury2, Derecha: jury3.
 *  Nombres y roles se definen en messages (jury.jury1Name, jury1Role, etc.). */

export const JURY_MEMBERS = [
  { id: "jury1", imageSrc: "/images/jury/palomaSzerman.jpg", flipHorizontal: true },
  { id: "jury2", imageSrc: "/images/jury/agustinPesce.jpg" },
  { id: "jury3", imageSrc: "/images/jury/joseOtegui.jpg" },
] as const;

export type JuryId = (typeof JURY_MEMBERS)[number]["id"];
