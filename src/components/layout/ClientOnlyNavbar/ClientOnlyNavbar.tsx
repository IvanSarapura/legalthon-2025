"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import styles from "./ClientOnlyNavbar.module.css";

/** Persiste entre remontajes (p. ej. cambio de idioma) para no mostrar placeholder de nuevo */
let hasMountedOnce = false;

/**
 * Envuelve el Navbar para que solo se monte en el cliente después del primer paint.
 * Evita el error "Can't perform a React state update on a component that hasn't mounted yet"
 * que puede ocurrir con next-intl (useLocale) durante el HMR en desarrollo.
 * Tras el primer montaje, en cambios de idioma se muestra el Navbar de inmediato para evitar saltos.
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
