"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./EventHighlightsSection.module.css";

export type CarouselImage = { src: string; alt: string };

type HighlightsCarouselProps = {
  images: CarouselImage[];
};

/** Duplica la lista para loop infinito sin corte visible */
export function duplicateForInfinite(list: CarouselImage[]): CarouselImage[] {
  return [...list, ...list];
}

export function HighlightsCarousel({ images }: HighlightsCarouselProps) {
  const t = useTranslations("eventHighlights");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const focusIn = () => setIsPaused(true);
    const focusOut = (e: FocusEvent) => {
      if (!el.contains(e.relatedTarget as Node)) setIsPaused(false);
    };
    el.addEventListener("focusin", focusIn);
    el.addEventListener("focusout", focusOut);
    return () => {
      el.removeEventListener("focusin", focusIn);
      el.removeEventListener("focusout", focusOut);
    };
  }, []);

  if (images.length === 0) return null;

  const ariaLabel = t("carouselSlideLabel", {
    current: 1,
    total: images.length,
  });

  const count = images.length;

  return (
    <div
      ref={carouselRef}
      className={`${styles.carousel} ${isPaused ? styles.carouselPaused : ""}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      style={{ "--carousel-count": count } as React.CSSProperties}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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
