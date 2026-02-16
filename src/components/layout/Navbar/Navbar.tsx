"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import styles from "./Navbar.module.css";

export function Navbar() {
  const locale = useLocale();

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <div className={styles.wrapper}>
        <div className={styles.spacer} />
        <div className={styles.langSwitch} role="group" aria-label="Switch language">
          <Link
            href="/"
            locale="es"
            className={styles.link}
            aria-current={locale === "es" ? "page" : undefined}
          >
            ES
          </Link>
          <span className={styles.separator} aria-hidden="true">
            |
          </span>
          <Link
            href="/"
            locale="en"
            className={styles.link}
            aria-current={locale === "en" ? "page" : undefined}
          >
            EN
          </Link>
        </div>
      </div>
    </nav>
  );
}
