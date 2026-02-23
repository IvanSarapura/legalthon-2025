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

  const starPositions: { left: string; top: string; delay: string }[] = [
    { left: "12%", top: "22%", delay: "0s" },
    { left: "88%", top: "18%", delay: "0.4s" },
    { left: "45%", top: "10%", delay: "0.8s" },
    { left: "25%", top: "68%", delay: "0.2s" },
    { left: "78%", top: "88%", delay: "0.6s" },
  ];

  return (
    <section className={styles.section} aria-labelledby="highlights-title">
      <div className={styles.starsLayer} aria-hidden>
        {starPositions.map((pos, i) => (
          <span
            key={i}
            className={styles.star}
            style={{
              left: pos.left,
              top: pos.top,
              animationDelay: pos.delay,
            }}
          />
        ))}
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
