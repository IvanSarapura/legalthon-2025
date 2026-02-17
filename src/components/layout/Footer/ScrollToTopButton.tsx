"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import styles from "./ScrollToTopButton.module.css";

export function ScrollToTopButton() {
  const t = useTranslations("organizers");
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón cuando el usuario haya hecho scroll más de 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Detectar si está al final de la página (con un margen de ~50px)
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isBottom = scrollTop + windowHeight >= documentHeight - 50;

      setIsAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    // Ejecutar una vez al montar para verificar el estado inicial
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.scrollButton} ${isVisible ? styles.visible : ""} ${isAtBottom ? styles.atBottom : ""}`}
      aria-label={t("scrollToTop")}
      type="button"
      aria-hidden={!isVisible}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}