/** Miembros del jurado del Legalthon 2025.
 *  Izquierda: jury1, Centro: jury2, Derecha: jury3.
 *  Nombres y roles se definen en messages (jury.jury1Name, jury1Role, etc.). */

export type JuryMember = {
  id: "jury1" | "jury2" | "jury3";
  imageSrc: string;
  flipHorizontal?: boolean;
};

export const JURY_MEMBERS: readonly JuryMember[] = [
  { id: "jury1", imageSrc: "/images/jury/palomaSzerman.jpg", flipHorizontal: true },
  { id: "jury2", imageSrc: "/images/jury/agustinPesce.jpg", flipHorizontal: false },
  { id: "jury3", imageSrc: "/images/jury/joseOtegui.jpg", flipHorizontal: false },
];

export type JuryId = JuryMember["id"];
