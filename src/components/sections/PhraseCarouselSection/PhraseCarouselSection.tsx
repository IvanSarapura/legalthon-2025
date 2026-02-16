"use client";

import { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import styles from "./PhraseCarouselSection.module.css";

const PHRASE_KEYS = [
  "trazabilidad",
  "notYourKeys",
  "inmutabilidad",
  "gobernanzaDescentralizada",
  "identidadSoberana",
  "consenso",
  "innovacion",
] as const;

/** Valores por defecto por si la clave no está en messages (evita MISSING_MESSAGE). */
const PHRASE_DEFAULTS: Record<(typeof PHRASE_KEYS)[number], string> = {
  trazabilidad: "Trazabilidad",
  notYourKeys: "Not your keys, not your coins",
  inmutabilidad: "Inmutabilidad",
  gobernanzaDescentralizada: "Gobernanza descentralizada",
  identidadSoberana: "Identidad soberana",
  consenso: "Consenso",
  innovacion: "Innovación",
};

const SEPARATOR = " • ";

export function PhraseCarouselSection() {
  const t = useTranslations("phraseCarousel");
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const phrases = PHRASE_KEYS.map((key) =>
    t(key, { defaultMessage: PHRASE_DEFAULTS[key] })
  );
  const itemsWithSeparators = [
    ...phrases.flatMap((phrase, i) => (i === 0 ? [phrase] : [SEPARATOR, phrase])),
    SEPARATOR,
  ];
  const REPEAT_COUNT = 5;
  const repeated = Array.from({ length: REPEAT_COUNT }, () => itemsWithSeparators).flat();

  useEffect(() => {
    const el = sectionRef.current;
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

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isPaused ? styles.sectionPaused : ""}`}
      aria-label={t("ariaLabel")}
      role="region"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.viewport}>
        <div className={styles.track} role="list" aria-hidden="true">
          {repeated.map((item, i) =>
            item === SEPARATOR ? (
              <span
                key={i}
                className={styles.separator}
                aria-hidden="true"
              >
                •
              </span>
            ) : (
              <span key={i} className={styles.phrase} role="listitem">
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
