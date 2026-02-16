"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import styles from "./ClientOnlyNavbar.module.css";

/**
 * Envuelve el Navbar para que solo se monte en el cliente después del primer paint.
 * Evita el error "Can't perform a React state update on a component that hasn't mounted yet"
 * que puede ocurrir con next-intl (useLocale) durante el HMR en desarrollo.
 */
export function ClientOnlyNavbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <nav className={styles.placeholder} aria-hidden />;
  }

  return <Navbar />;
}
