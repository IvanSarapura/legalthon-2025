import { Button } from "@/components/ui";
import styles from "./EventHighlightsSection.module.css";

export function EventHighlightsSection() {
  return (
    <section className={styles.section} aria-labelledby="highlights-title">
      <h2 id="highlights-title" className={styles.title}>
        HIGHLIGHTS DEL EVENTO
      </h2>
      <div className={styles.carouselPlaceholder} aria-hidden="true">
        <span className={styles.placeholderText}>Carrusel de imágenes (próximamente)</span>
      </div>
      <Button as="a" href="#" variant="secondary" className={styles.cta}>
        VER ÁLBUM COMPLETO
      </Button>
    </section>
  );
}
