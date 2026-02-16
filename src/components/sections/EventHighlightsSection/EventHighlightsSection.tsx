import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui";
import styles from "./EventHighlightsSection.module.css";

export async function EventHighlightsSection() {
  const t = await getTranslations("eventHighlights");

  return (
    <section className={styles.section} aria-labelledby="highlights-title">
      <h2 id="highlights-title" className={styles.title}>
        {t("title")}
      </h2>
      <div className={styles.carouselPlaceholder} aria-hidden="true">
        <span className={styles.placeholderText}>{t("carouselPlaceholder")}</span>
      </div>
      <Button as="a" href="#" variant="secondary" className={styles.cta}>
        {t("ctaAlbum")}
      </Button>
    </section>
  );
}
