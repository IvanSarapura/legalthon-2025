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

  return (
    <section className={styles.section} aria-labelledby="highlights-title">
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
    </section>
  );
}
