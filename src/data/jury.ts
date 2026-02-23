/** Miembros del jurado del Legalthon 2025.
 *  Fila 1: jury1 (izq), jury2 (centro), jury3 (der).
 *  Fila 2: jury4 (izq), jury5 (centro), jury6 (der).
 *  Nombres y roles se definen en messages (jury.jury1Name, jury1Role, etc.). */

export type JuryMember = {
  id: "jury1" | "jury2" | "jury3" | "jury4" | "jury5" | "jury6";
  imageSrc: string;
  flipHorizontal?: boolean;
};

export const JURY_MEMBERS: readonly JuryMember[] = [
  { id: "jury1", imageSrc: "/images/jury/palomaSzerman.jpg", flipHorizontal: true },
  { id: "jury2", imageSrc: "/images/jury/agustinPesce.jpg", flipHorizontal: false },
  { id: "jury3", imageSrc: "/images/jury/joseOtegui.jpg", flipHorizontal: false },
  { id: "jury4", imageSrc: "/images/jury/alexPestchanker.jpg", flipHorizontal: false },
  { id: "jury5", imageSrc: "/images/jury/vivianaAlbert.jpg", flipHorizontal: false },
  { id: "jury6", imageSrc: "/images/jury/lucasMacchiavelli.jpg", flipHorizontal: false },
];

export type JuryId = JuryMember["id"];
