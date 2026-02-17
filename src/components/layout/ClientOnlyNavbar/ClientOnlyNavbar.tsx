"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import styles from "./ClientOnlyNavbar.module.css";

/** Evita volver a mostrar el placeholder tras cambio de idioma. */
let hasMountedOnce = false;

/**
 * Monta el Navbar solo en cliente tras el primer paint. Evita errores de next-intl (useLocale)
 * con HMR y, tras el primer montaje, evita saltos al cambiar de idioma.
 */
export function ClientOnlyNavbar() {
  const [mounted, setMounted] = useState(hasMountedOnce);

  useEffect(() => {
    if (!hasMountedOnce) {
      hasMountedOnce = true;
      setMounted(true);
    }
  }, []);

  if (!mounted) {
    return <nav className={styles.placeholder} aria-hidden />;
  }

  return <Navbar />;
}
