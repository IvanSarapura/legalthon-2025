"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./EventHighlightsSection.module.css";

export type CarouselImage = { src: string; alt: string };

type HighlightsCarouselProps = {
  images: CarouselImage[];
};

/** Duplica la lista para loop infinito sin corte visible */
function duplicateForInfinite(list: CarouselImage[]): CarouselImage[] {
  return [...list, ...list];
}

export function HighlightsCarousel({ images }: HighlightsCarouselProps) {
  const t = useTranslations("eventHighlights");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const infiniteImages = useMemo(
    () => (images.length > 0 ? duplicateForInfinite(images) : []),
    [images]
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (images.length === 0) return null;

  const ariaLabel = t("carouselSlideLabel", {
    current: 1,
    total: images.length,
  });

  const count = images.length;

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      style={{ "--carousel-count": count } as React.CSSProperties}
    >
      <div className={styles.carouselViewport}>
        <div
          className={`${styles.carouselTrack} ${styles.carouselTrackContinuous} ${prefersReducedMotion ? styles.carouselTrackNoMotion : ""}`}
          role="list"
          aria-hidden="true"
        >
          {infiniteImages.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className={styles.carouselSlide}
              role="listitem"
            >
              <img
                src={img.src}
                alt={img.alt}
                className={styles.carouselImage}
                loading="lazy"
                decoding="async"
                sizes="25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
