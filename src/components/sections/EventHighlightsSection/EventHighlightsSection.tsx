import { getTranslations } from "next-intl/server";
import { Button, ExternalLinkIcon } from "@/components/ui";
import {
  HIGHLIGHTS_IMAGES,
  HIGHLIGHTS_IMAGES_BASE,
} from "@/data/highlightsImages";
import { HighlightsCarousel } from "./HighlightsCarousel";
import styles from "./EventHighlightsSection.module.css";

const highlightsImages = HIGHLIGHTS_IMAGES.map((filename) => ({
  src: `${HIGHLIGHTS_IMAGES_BASE}/${filename}`,
  alt: "Foto del evento Legalthon 2025",
}));

export async function EventHighlightsSection() {
  const t = await getTranslations("eventHighlights");

  /* 5 estrellas con posiciones verticales variadas. Duplicadas 1 vez para loop infinito
     (mismo principio que el carrusel: copia exacta para reset invisible). */
  const starPositions: { top: string }[] = [
    { top: "22%" },
    { top: "18%" },
    { top: "38%" },
    { top: "68%" },
    { top: "87%" },
  ];
  const STAR_SLOTS_PER_COPY = starPositions.length;
  const starSlots = [...starPositions, ...starPositions].map((pos, i) => (
    <div key={i} className={styles.starSlot}>
      <span
        className={styles.star}
        style={{ top: pos.top, left: "50%" }}
      />
    </div>
  ));

  return (
    <section className={styles.section} aria-labelledby="highlights-title">
      <div
        className={styles.starsLayer}
        aria-hidden
        style={{ "--stars-copy-slots": STAR_SLOTS_PER_COPY } as React.CSSProperties}
      >
        <div className={styles.starsTrack}>{starSlots}</div>
      </div>
      <div className={styles.content}>
        <h2 id="highlights-title" className={styles.title}>
          {t("title")}
        </h2>
        <HighlightsCarousel images={highlightsImages} />
        <div className={styles.ctaWrapper}>
          <Button
            as="a"
            href="https://drive.google.com/drive/folders/1mev0b_SdLMPrpnquWlsbTONuEUG6Y85P"
            variant="secondary"
            className={styles.cta}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.ctaInner}>
              {t("ctaAlbum")}
              <ExternalLinkIcon />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
